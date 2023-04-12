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
    query1=f"check if this is fake news {topic}"
    query2=f"cite if sources with links if it is and if it is not fake and also fact check this statement with statistics and official goverment sources {topic}"
    query3 = "Also provide the links of other sources"
    response1 = gpt3(query1)
    response2 = gpt3(query2)
    response3 = gpt3(query3)
    
    return response1, response2, response3 
