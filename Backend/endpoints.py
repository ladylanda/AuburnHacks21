
from flask import Flask, jsonify, make_response, request, render_template
from scraping_reviews import get_movie_info, get_related_movies
from nlp import nlp_sentiment

app = Flask(__name__)

@app.route('/')
def render_home():
    """Renders the homepage of webapp"""
    return "sample text"

@app.route('/get_search/<query>')
def render_search(query: str):
    """Render search results"""
    data = get_related_movies(query)
    return make_response(jsonify({'query': data}), 200)

@app.route('/get_sentiment/<query>')
def render_sentiment(query: str):
    """Render search results"""
    reviews, ratings = get_movie_info(string=query)
    polarity_scores, score = nlp_sentiment(reviews=reviews, ratings=ratings)
    
    if polarity_scores == 'No reviews' or score == 'No reviews':
        return make_response(jsonify({'warning': 'No reviews are available.'}, 200))
    return make_response(jsonify({'polarity_scores': polarity_scores, 'score': score}), 200)

if __name__ == '__main__':
    app.run(host='localhost', port=8080, debug=True)    
