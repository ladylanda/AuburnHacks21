
raw_text = extractFileText("reviews.txt")
disp('raw text:')
disp(raw_text)

text = tokenizedDocument(raw_text)
disp('Tokenized text:')
disp(text)

text = addPartOfSpeechDetails(text)
disp('POS tagged:')
disp(text)

text = normalizeWords(text,'Style','lemma')
disp('Normalized words:')
disp(text)

text = erasePunctuation(text)
disp('Erased punctuation:')
disp(text)

text = removeStopWords(text)
disp('No more stop words:')
disp(text)

bagOfWords(text)
wordcloud(text.Vocabulary)
