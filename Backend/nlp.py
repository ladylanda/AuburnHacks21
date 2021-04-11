

from scraping_reviews import get_movie_info, get_related_movies

from collections import Counter
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from textblob import TextBlob

import os
import pprint
from typing import Any, Dict, List

# import model
nltk.download('punkt')

backend_path = 'D:/DESKTOP-1S7D2TD/qcaij/OneDrive - University of Florida/DESKTOP-1S7D2TD/qcaij/Desktop/AuburnHacks21/Backend'
# configuring heatmap
# sns.set(rc={'figure.figsize':(35,3)})

# displays sentiment values along inear heat map 
# def sentiment_heatmap(data: Dict[str, Any], fname: str):
#     sns.heatmap(pd.DataFrame(data).set_index("Sentence").T,center=0, annot=True, cmap = 'PiYG')
#     plt.savefig(fname=f'{fname}.jpg', format='JPG', dpi=300)

# text


def nlp_sentiment(reviews: List[str], ratings: List[float]):
    """Scores sentiment of all reviews combined for specific movie.

    Args:
        reviews list[str]: Review strings
        ratings list[float]: 0-5 star ratings
    """

    # No reviews are available    
    if len(reviews) * len(ratings) == 0:
        return 'No reviews', 'No reviews'

    sid = SentimentIntensityAnalyzer()
    print('reviews:')
    print(reviews)
    print('ratings')
    print(ratings)

    all_reviews = ' '.join(reviews)
    with open(file='reviews.txt', mode='w') as f:
        f.write(all_reviews)
        os.chdir('C:/Program Files/MATLAB/R2021a/bin')
        os.system(command=f"matlab.exe -nodisplay -nosplash -nodesktop -r \"run(\'{backend_path}/matlab_text_analysis.m\');\"")

    polarity_scores = sid.polarity_scores(text=all_reviews)
    print('NLTK polarity scores:')
    print(polarity_scores)

    # tb = TextBlob(text=' '.join(reviews))
    # tbs = tb.sentiment
    # print(f'TextBlob all reviews sentiment: {tbs}')

    # single score = positive - negative
    score = polarity_scores['pos'] - polarity_scores['neg']
    
    return polarity_scores, score

# heatmap 
# sentiment_heatmap(
#     data = {
#         "Sentence":["SENTENCE"] + sentence.split(),
#         "Sentiment":[sid.polarity_scores(sentence)["compound"]] + [sid.polarity_scores(word)["compound"] for word in sentence.split()]
#     },
#     fname='nltk')


# sentiment_heatmap(
#     data = {
#         "Sentence":["SENTENCE"] + sentence.split(),
#         "Sentiment":[tbs.polarity] + [TextBlob(text=word).polarity for word in sentence.split()],
#         "Subjectivity":[tbs.subjectivity] + [TextBlob(text=word).subjectivity for word in sentence.split()]
#     },
#     fname='textblob')

# Word frequences
# dist_freq = Counter(tb.words)
# print(dist_freq)

# top_freq_words = dist_freq.most_common(n=5)
# print('Top 5 most frequent words:')
# print(top_freq_words)
