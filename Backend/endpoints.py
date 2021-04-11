
from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def render_home():
    """Renders the homepage of webapp"""
    return "sample text"

@app.route('/')
def render_search():
    """Render search results"""
    pass

if __name__ == '__main__':
    # app.config['SERVER NAME'] = '/'
    app.run(host='localhost', port=8080, debug=True)    

