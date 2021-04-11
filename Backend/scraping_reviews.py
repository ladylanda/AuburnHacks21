
from bs4 import BeautifulSoup
from urllib.request import urlopen
import re
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

#initialize chromedriver in silent mode, as well as supply webdriver if it is not installed
# /usr/bin/chromedriver
# /mnt/c/tools/selenium/chromedriver.exe
# C:/tools/selenium/chromedriver.exe

def init():
    options = Options()
    options.headless = True
    driver = webdriver.Chrome('C:/tools/selenium/chromedriver.exe', options=options)
    return driver

#shadow root DOM traversal 
def expand_shadow_element(driver, el):
    shadow_root = driver.execute_script('return arguments[0].shadowRoot', el)
    return shadow_root

#used to receive words suggestion and return metadata such as image and title to create carousel
def get_related_movies(string):
    #create url
    url = 'https://www.rottentomatoes.com/search?search=' + string.replace(' ', '%20')
    #initialize selenium webdriver
    driver = init()
    #navigate to url
    driver.get(url)
    
    image_urls = []
    urls = []
    titles = []
    try:
        #shadow dom traversal to movies metadata
        root1 = driver.find_element_by_tag_name('search-result-container')
        shadow_root1 = expand_shadow_element(driver, root1)
        root2 = shadow_root1.find_element_by_css_selector('search-result[type="movie"]')
        shadow_root2 = expand_shadow_element(driver, root2)
        html_of_interest=driver.execute_script('return arguments[0].innerHTML', shadow_root2)
        #generate soup object
        soup = BeautifulSoup(html_of_interest, 'html.parser')
        #find all media-rows (contains movie metadata such as image url and title)
        media = soup.find_all("media-row")
        for m in media:
            #pattern matching to extract fields from html data
            image_url_pattern = r'imageurl=".*name'
            image_url_grp = re.search(image_url_pattern, str(m))
            image_urls.append(image_url_grp.group(0)[10:-6].strip())
            
            url_pattern = r' url=".*"'
            url_grp = re.search(url_pattern, str(m))
            urls.append(url_grp.group(0)[6:-1].strip())

            title_pattern = r' name=".*" release'
            title_grp = re.search(title_pattern, str(m))
            titles.append(title_grp.group(0)[7:-9].strip())
    except Exception:
        return ("Could not find any movies with requested tag, please enter a different set of terms.")
    return list(zip(titles, urls, image_urls))

#used to receive the reviews for a selected movie
def get_movie_info(string):
    url = 'https://www.rottentomatoes.com/m/' + string.replace(' ', '_') + '/reviews?type=user'
    driver = init()
    driver.get(url)
    reviews = []
    ratings = []
    try:
        root = driver.find_element_by_css_selector('ul[class="audience-reviews"]')
        html_of_interest = driver.execute_script('return arguments[0].innerHTML', root)
        soup = BeautifulSoup(html_of_interest, "html.parser")
        review_list = soup.find_all('li', attrs={'class': 'audience-reviews__item'})
        for review in review_list:
            review_text = review.find('p', attrs={'data-qa': 'review-text'})
            review_html = review_text.text
            reviews.append(review_html)
            rating = find_rating_from_stars(review)
            ratings.append(rating)
    except Exception:
        print("Could not find any verified audience reviews. ")
    return reviews, ratings
    

# function to calculate review numerically 
def find_rating_from_stars(review):
    #full_star = 1 star
    full_stars = review.find_all('span', attrs={'class': 'star-display__filled'})
    #half_star = 0.5 star
    half_stars = review.find_all('span', attrs={'class': 'star-display__half'})
    return len(full_stars) + (0.5 * len(half_stars))

