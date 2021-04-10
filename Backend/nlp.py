
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

# configuring heatmap
sns.set(rc={'figure.figsize':(35,3)})

# displays sentiment values along inear heat map 
def sentiment_heatmap(data: Dict[str, Any], fname: str):
    sns.heatmap(pd.DataFrame(data).set_index("Sentence").T,center=0, annot=True, cmap = 'PiYG')
    plt.savefig(fname=f'{fname}.jpg', format='JPG', dpi=300)

# text
sentence = 'I am about to win the biggest lottery and become super rich soon!'

# sentiment analysis
sid = SentimentIntensityAnalyzer()

# call method 
print('NLTK polarity scores:')
print(sid.polarity_scores(sentence))


# heatmap 
sentiment_heatmap(
    data = {
        "Sentence":["SENTENCE"] + sentence.split(),
        "Sentiment":[sid.polarity_scores(sentence)["compound"]] + [sid.polarity_scores(word)["compound"] for word in sentence.split()]
    },
    fname='nltk')

tb = TextBlob(text=sentence)
tbs = tb.sentiment
print(f'TextBlob sentence sentiment: {tbs}')

sentiment_heatmap(
    data = {
        "Sentence":["SENTENCE"] + sentence.split(),
        "Sentiment":[tbs.polarity] + [TextBlob(text=word).polarity for word in sentence.split()],
        "Subjectivity":[tbs.subjectivity] + [TextBlob(text=word).subjectivity for word in sentence.split()]
    },
    fname='textblob')

# Word frequences
dist_freq = Counter(tb.words)
print(dist_freq)

top_freq_words = dist_freq.most_common(n=5)
print('Top 5 most frequent words:')
print(top_freq_words)
