import nltk
from newspaper import Article 
import openai
import nltk

nltk.download('punkt')

def get_summary(url):
    article=Article(url)
    article.download()
    article.parse()
    article.nlp()
    article_summary=article.summary 
    return article_summary 

def gpt3(text):
    openai.api_key='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'
    response = openai.Completion.create(
    model="text-davinci-003",
    prompt=text,
    temperature=0.7,
    max_tokens=2000,
    top_p=1.0,
    frequency_penalty=0.0,
    presence_penalty=1
    )
    content=response.choices[0].text
    print(content)
    return response.choices[0].text

def fact_check(text_peice):
    topic=text_peice
    query1=f"check if this is fake news {topic} and cite if sources with links if it is and if it is not fake"
    query2=f"fact check this statement with statistics and official goverment sources {topic} and also provide other sources with links"
    return gpt3(query1), gpt3(query2)
