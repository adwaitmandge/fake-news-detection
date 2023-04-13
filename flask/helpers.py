import nltk
from newspaper import Article 
import openai
import nltk
import re
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
    query1=f"check if this is fake news {topic} and fact check it by providing official government statistics"
    # "check if this is fake news {topic}"
    query2=f"cite sources of correct information related to {topic} with links"
    # "cite if sources with links if it is and if it is not fake and also fact check this statement with statistics and official goverment sources {topic}"
    query3 = "Also provide the links of sources related to this topic"
    response1 = gpt3(query1)
    response2 = gpt3(query2) 

    # response3 = gpt3(query3)
#    regex = ur"\b((?:https?://)?(?:(?:www\.)?(?:[\da-z\.-]+)\.(?:[a-z]{2,6})|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:2[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:(?:[0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,7}:|(?:[0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,5}(?::[0-9a-fA-F]{1,4}){1,2}|(?:[0-9a-fA-F]{1,4}:){1,4}(?::[0-9a-fA-F]{1,4}){1,3}|(?:[0-9a-fA-F]{1,4}:){1,3}(?::[0-9a-fA-F]{1,4}){1,4}|(?:[0-9a-fA-F]{1,4}:){1,2}(?::[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:(?:(?::[0-9a-fA-F]{1,4}){1,6})|:(?:(?::[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(?::[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(?:ffff(?::0{1,4}){0,1}:){0,1}(?:(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])|(?:[0-9a-fA-F]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])))(?::[0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])?(?:/[\w\.-]*)*/?)\b"

#     text = "Check out this amazing website: https://www.example.com. It has lots of cool features!"

# # Define regular expression pattern to match URLs
#     url_pattern = re.compile(r'https?://\S+')

# # Extract URLs from text
#     urls = re.findall(url_pattern, text)

# # Print extracted URLs
#     print(urls)

    # matches = re.findall(regex, response2)

    urls=re.search("(?P<url>https?://[^\s]+)",response2).group("url")
    print('printing urls')
    print(urls)
    
    
    
    # return response1, matches
  
fact_check("https://www.hindustantimes.com/world-news/donald-trump-news-omarosa-manigault-newman-donald-trump-s-secrets-and-tapes-kept-in-infamous-vault-ex-aide-claims-101681023691922.html")   
