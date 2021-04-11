from scraping_reviews import get_related_movies, get_movie_info

t1 = get_movie_info('godzilla_vs_kong')
print(t1)
t2 = get_related_movies('godzilla')
print