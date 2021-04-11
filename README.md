# AuburnHacks21
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![React](https://img.shields.io/badge/Framework-React-blue?style=for-the-badge&logo=appveyor)
![Backend](https://img.shields.io/badge/Backend-NLP%2C%20Webscraping-limegreen?style=for-the-badge&logo=appveyor)

![Python](https://img.shields.io/badge/Language-Python-yellow?style=flat-square&logo=appveyor)
![Matlab](https://img.shields.io/badge/Language-Matlab-lightblue?=style=flat-square&logo=appveyor)
![WebDev](https://img.shields.io/badge/Language-JS%2C%20HTML%2C%20CSS-orange?=style=flat-square&logo=appveyor)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Background
COVID-19 has put a stringent halt on movie theatres. When restrictions will be eventually lifted after the pandemic, many people will be interested in movies and theatres will likely surge in customers. Since seats fill up quite fast, it is important to quickly choose the next movie to watch based on general ratings and personal preferences.

## Usage
This web app scrapes recent reviews from Rotten Tomatoes on both upcoming and older classic films. The source of reviews does not derive from a few critics but rather ordinary movie goers. Comments under a group of reviews are aggregated into a text block before undergoing sentimental analysis. The user first enters a keyword which triggers a webscrape for all movies with titles containing said keyword. The relevant movies are displayed on a moving carousel. When the use clicks on any movie, a score would be computed and displayed regarding the net difference between positive and negative sentiment from recent reviews. As a bonus, those more curious will find an automatic text analysis using Matlab, which highlights the most common and important words that reviewers descry the film.

## Technologies Used
The frontend was made as a React application. The backend contains multiple application logic components, including a webscraper script (BeautifulSoup4 and Selenium) and NLP processing script for sentimental analysis in Python (NLTK and TextBlob).  The frontend and backend communicates through a Flask application.
