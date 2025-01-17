import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "Reuters India",
    "title": "Kolkata doctor case: Protests escalate in India over gruesome rape of doctor - Reuters India",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQOWdpRFdKZmZtbzl2Q0E2TzZPWjktNUkxb2VDT1h6OGhOVGFBM0xqTzljcklSSmhoVVN6YllmZGFzWDV4MFVxUm5sSERvcTFCOW5wVGlSTEdtbTUtZGNaa21FUDZad2pxcGR4ZlhveWphQzE4VF9sUDZOQzdYaFNKa19JMzVJcGRVUkowakZFWkNDWlM0M2RMQW1KbURzQQ?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T07:10:00Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "The Associated Press",
    "title": "Ukraine gambled on an incursion deep into Russian territory. The bold move changed the battlefield - The Associated Press",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPUzJBUHBiblVjSmsyR3RuaTMyTllIZTdFamNNbXhSNWowZzBqWVlRcjRKUmg0V09CNEpBd1dXaHQ1ZExTd1Q3b0tsaTRVUVF6YXo4M3ZyUDJldjdQNEdYTkdjMjg0NnM0Q1J6NXNUUElfcXgwTFJianNwcnhCYjVnVjZFa3F3emUydFdJUVg5dEFNaGx6c0FOVTFtUFh1Q1JrS0JUQS1YdnVIdkExb1lJYy1Kbw?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T06:34:00Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "Vulture",
    "title": "It Ends With Us Stars Respond to Fan Backlash - Vulture",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNRVNsd2paSXJZZnBKMWZ5b201U29PaVlvN2t3LVN5dkp4LUpEeG1EY09nWXc2NExWU29kNWpLYS1tczRnaEY0VElFN2xVd3VJNnhDQ2xfZm92MUk1SXBfa2JNQTFCN0tuSndHMUFDY0ZKYjMwdV9OMy1tRmFBY25Lbi0wSGJBSDJNbGc?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T04:56:15Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "The Washington Post",
    "title": "Columbia University president resigns after drawing ire over Israel-Gaza protests - The Washington Post",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPcmFHR1hiZUIxdHBkOWkzTGJKaWl5Rmdfak9YTl9KZ1M4dWtwUE9rUmhqeVMzSFoxN3Bia1VrOHFWUVpyd2dzM2lMWDk4bjZmZDlFd1Iyc1g1dzRRZ1F0U0VqOHd0WGxXNGF6T0RsRk00SUM5ZjVwS2lPS3Q3Z3NNbmlYT0tiV0FBeGZR?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T04:53:00Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "Bloomberg Television",
    "title": "China's Uneven Recovery Lingers | Bloomberg: The China Show 8/15/2024 - Bloomberg Television",
    "description": null,
    "url": "https://news.google.com/rss/articles/CCAiC01vZV9BZWxlYzNJmAEB?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T04:51:30Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "The Wall Street Journal",
    "title": "The Missteps in Washington and Tehran That Brought Middle East to the Brink - The Wall Street Journal",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQV3plMFZPaHAtVTBVRFBRSWY5SWxhQ2V5TGFSX0VYLVlUNDlGZ2lJUmwwc1RFWUpNSElfOGM2MXZETGFXTU1WX3VZSFNJTTBjbkVhVjF0Tm8wN0VOMkQyTW1KbklQenJreHJjazJXZkNFSEo1eV90S2NCZmFWeTlFRkNlNWliajVMVUF1Rg?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T04:02:00Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "The Associated Press",
    "title": "Disney argues wrongful death suit should be tossed because plaintiff signed up for a Disney+ trial - The Associated Press",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOTk1Oa1FsRFR2RV8tdkVRVklCMy1obXpqLVU2MzR6NjlHejNWcXZuc0RaajI5WGl5NVlaZHl2dEZkSVZyeUlxakJlR0VsSElHRlZxcDdZX2FPT0d2OWlMSF84NUtiTFpSdlZFUVBXelhud3VwaHlyT1pZSGlaNEFRb2NMSW5QajNJNTB1VmdMOHlIN0hsbXR1WVBjYmItWm12VXdxemExTnozeTA?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T03:16:00Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "YourTango",
    "title": "Joy Returns For 3 Zodiac Signs After The Sun Trines The Moon On August 15, 2024 - YourTango",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNckhMRWF6b2Y2N2k5MHE3WFlDRmxvYkFlbkpNUDQwYTFFREl2cWxUYVB3M1lsSGkzLTZ1Y01WbUVLejVWSEV6eHg3QnBmSDAyWmotcFg3cjhZdnZMQU4wWjBsRzVUWXM4ZGJjbUw4bGFMX3NoV3ItX3E4dzRDT0toTFY0Wk1TbkVuSU50WTk2Q3A0dVROLVJzZ3NIUUdEd0XSAaQBQVVfeXFMTWtaTXItaV8xcGVYVXFSYWtoejViWHIzdFB2Q2tvZ29BY2Zma0ltWDRqaTd3ZUVleDlrUGFiMnpxWUZkQXVhT3FJUFA5eElMR19mLWRTSDJtdlM3NFh5akRxTjF1QjRqakF4eEZTenRub0UyVU1JNFNtNmt2N205Q1FZR2xZY20yY255b01RRXhua2lVOHgyZU5iekFoM1pLNGtqR1A?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T03:03:07Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "The Hill",
    "title": "Harris to call for federal ban on price-gouging in Friday speech - The Hill",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNV3hFRDdjdFZ5ZlV0QWJNYUVXblJfRldOc0NFOENydnNuWDNFbFlsemJ1alZSYkJPTjlmY29mMmpqMnlDQ3lrM2hXbVNFcHhHTXhmMVBMWXgzLWgxcWFKeXF0dmtkV09DV2tFMlc5Q0FoQ3FFMkltZnZTNGoxemJOVDB2Rl9rb2FXNW1yYXVTVdIBlAFBVV95cUxNWXhRbzN1RGg0ZEJObU9VcjZMNFB3ZzE3bi14RnA2TDJlUEo1cm9lVVJxbk5NSEpvUXdZRXBIdzlrX2M1alNqX3RIRzZYZWxZUkZrUGVoQnVkUnl0ZjNyd0dnOS0zVzA1OEF5UVNZVVZpWUtua1NKdlI0eW9OUGVsaC1RT01hd1RkWHNtci1TOXM3OU1s?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T03:03:00Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "ESPN",
    "title": "Judge, 'fueled' by Soto's IBB, crushes 300th HR - ESPN",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOVFBwMHZmSkVfN3Z5YkpYMHdIVUZDSmdvQmVGWGk1ejBjMXVaWU1YdThJeThzc2RHbGhZOUR5SjFoNXJJZTd3Q0ZVWW9Zc0F0b2d6UDdHMHNfbWx3aGJkTldvZVRrSjNpVkQ2bUZmYVhuZjBicFpfVXh0NFQzdy1PbnpoTlZlYmIzWFFkWHdpMzJzU0tweGNEeUxMemM4cmxENE02SFRVZ1JlWUph?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T02:56:00Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "The Washington Post",
    "title": "Austin Dillon’s NASCAR playoff berth revoked after wrecks ‘crossed a line’ - The Washington Post",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQdnNrTlFqMmZXU1JTT1U4YnhELV96ZDVvMzNYeWxjeGtpU1NFODZrd0VvcnAwREo2VXB3a29Wc2t4eWxCWmxpM1RlclAwY3BEcVhmdDdMZFlkTVJFZG1saDRXcF9GdDJLZlRuSkVnT2RXY0Z2WHIwUHRrU1BUUlZ4NkVBVzFWRWNUNVl2a0t5b3NydVA0U1lYd29n?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T02:45:59Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "USA TODAY",
    "title": "Matthew Judon trade winners, losers and grades: How did Patriots, Falcons fare in deal? - USA TODAY",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPcXZ0TVUyQjJIMGFjeG9iOGtNRW5Zbm9TUFpzQks1dlhubFNXZ09OQTBmZGNsYjRpSlJJTkFYLWo5RUJZRVdIVllDamg0WFdaeHhKSWc5VDFtZEJyWXJqWEk4NmxJOVB6c3RPQzR4UmpUb0I2YU9GaDc0TV83Z0RDc1F5ejRyTDFleUFabm5MeVZpMjE0LTQ0ZVFIQWFBU2RTYUh4QXlHenNYZGFYRWlXcnhKSnE1d3daOFRBZmk5SzdEaFE3eklqVg?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T02:28:20Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "CBS News",
    "title": "Wally Amos, founder of \"Famous Amos\" cookies, dies at 88: \"A true original Black American hero\" - CBS News",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5lSWRPbldQRU5SbEpXZVVMLVA3NnJfRXN5a3pTbVQ1VDlzeG9nUHZRSG9kRW9lRWMxZW4wQ1dyUEJsdTh5UXJDTHZNQ2Jka3NBS0M0R2JleXB0X0FVVHo5TS15MjBwM1UzWGwxQ3pfdUtPQTZubGhsMGxoNNIBgAFBVV95cUxQZVRLdWlzU0I2OFZuSnBQcExLd2Rnem5TNVZCbnBXeU41aUotbTB2VDJ0c1VwbXpLeXJWYWM0NU5QZ01tZ0JBeGpWZm14WFVMVWRBaTlsOU5vMHhFckViT0dnV21JRmpqdGhlcE5iZ3VyVlphTWh6OEM0UkNyT0xqaA?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T02:05:17Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "The Associated Press",
    "title": "The Latest: Trump held rally in North Carolina; Harris campaign launches $90M ad buy - The Associated Press",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQdVBUS1cxczlNTGNMMUtNR1E3dGVrY083b1RWR28tYUk1VUgtVF9rS1RXbGUwOFcta0Q4TTVkYjlQSXJFTGhPeGJqdjV5ZVA0Um80QklFXzVHUjRKREh0eUZCelVoZEhiUnh1YXM5Z001bl9saldMcDdyUnRNbjdTb25XXzZFSm9QZi1pNFBXcmtocENSdnYw?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T01:58:00Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "The Times of Israel",
    "title": "UCLA criticizes ruling that pro-Palestinian protesters can’t exclude Jews from campus - The Times of Israel",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQVkFnRF80SmdMQUI5OHZPcnFqOHA2dURJTHJzSWxXWVdSdDQ2Skoxemc4T0xHQjNKNUMzOG1NQkJVUlg5RDB3WXVGSVU5N1BxSXNwNmh2T2FCZnctakRqcXF2RS1uM2I3VU1qa19aVjVsMWxWUlRRZlZNV2RqaUw4RFVKM0JwQ29BdWtleEVlZmJaZlEyT2FubC1telpBTi1tMUhra0puQ0hqdF9DbWQzMG96bFZNQdIBuwFBVV95cUxQUHIxZm4zNk5qSXlWOXQyakl5aDFKMTZUZEJKTXBmM0hyUTY3RUFySHk4S2VnV1BoTTBlNjU3b0pUQm9kQ1lYeEJveXNISFNPODRGTEZBNjVFbzZPRHdlRlBFbDRrclRSNkt0X0xfc2xLUHBaN0ZZSEZyR045bUZENXFwNVJka0tYdTR4VUY3ZEN1UjdlSnRIZC1ZSU80dm0wMWt5OXN0MUpXSTlzQjlvVG56SG44UWJjTjRZ?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T01:09:02Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "Axios",
    "title": "New Jersey governor to appoint former aide to replace Sen. Bob Mendendez - Axios",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOam41dDB2cmVjejNNYjVjaWN5UWNfaWlMd3gtY3JGdld3RmhEbzVLZGVJN3M3Z1VBZnBlRDlUZ2pFaVFSMzFIT0lUMHByZTFMaEZ1ODZOcUxJVEdneEdzU1cwdl9PRWN1MTFIYXMyZ05GRkJELWUyWWR2LVZjeU1iVXpDdlE?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T01:07:32Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "Variety",
    "title": "Gena Rowlands, ‘The Notebook’ and ‘A Woman Under the Influence’ Star, Dies at 94 - Variety",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNUnZodlUzT2ItZ1hQbklYcDZoeGh0OWN4S29uTVF5R1NNblVwb25TRkdVek8wRURrcHdrb3gxSmNxelBQTDVZU3FjOHIxUFJYSjk2cUZKcnRqVndFeW5wenM2V3I2bG96NVIzZ3RwUUdlbFAwQTJ6Sl9seTlUSWxTY3BPNzI5WHBKdkxCcXY3emM1cGxsUWM2ZE1namt2aGZHQzZla1BR0gGrAUFVX3lxTE5EdHlVMjhPZGFnZVNBS0ZYVnBBQTdiMEdYUEtQbk5VcHRnUWlTRVV0Y2JEc0d0a2YtRVI1WHF4SWY4eW9BRWROUnpCQTlVYV9DQU90SzJ1a0tpbU1rbG00RWQteWx4S1F0LWRBNVF6UktydzVPeFR1R0NEUlM0cXdMX3lBVHRkU1pPUm9mWTVxN2hlSUxaWUtnZVJ2d2x4QWZTMldwMTgyLUw2QQ?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T01:07:00Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "Fox News",
    "title": "Taliban parades American weapons 3 years after chaotic withdrawal from Afghanistan - Fox News",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNeWRLbjA4bjNmVlJYQnRJVl9pZUFJOXp0WHFQaGpKdVZTeXl2NVFyb1ZlMVUtU1I2ZDM5TU9pNTFYS21RT3JxVGN6eHEtN0ZEMms3TWlkcmJEaHZQQ1FSYTdOUlp3cFd5QkxwbFpNTDgzQ1V2OGhqVmpDdmd3c3dhVHJrSTdPbFQ5bV9ybjQxUmJxWkt1M2ZGWnc4OXVJTUtJa3Nj0gGoAUFVX3lxTE41SENNcFV3OU5SWE1TS1duTHlMVEVUN3d1a2ZsNm9jd1VlVUwyaFZzQ0l1TGUydXRVUW5OMUo1TmFwZmI3clhpVXllU0ZDSWtOYnRzdVAwSzdyWXRmdVZsNENIdHZmQ2ZfdHM0RmRHaElvcjZZN21US3BManZLNjYtQnptdzRRRzFLbHBEXzFTR0I5V1BNTzNiMVdoNTFYV2pUMGVheXU0RQ?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T01:05:00Z",
    "content": null
    },
    {
    
    "author": "Fortune",
    "title": "Starbucks welcomes new CEO Brian Niccol with a $113 million payday—and he can work remotely - Fortune",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNV0F6MmhZOXd2Q3h6MloyNEREX2VsYkFvcjFDYWV1Y0JGMzVTeUdEb01uaUROaEpvUXhkcGU0SFNkalRoeFBzb1kzUExheXBYV2pqVlY4WHV3dDlmX2dfQUtFWjA2TzJxMnVUT1M3UEpLMkRNNzlNaWs1N0xtWmdreW9ab0VoNVlnYmN0SHRtb09nRm8?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-08-15T00:27:00Z",
    "content": null
    }
    
    

  ]

    constructor() {
      super();
      console.log("Hello, I am a constructor");
      this.state = {
        articles: [], // Initialize articles as an empty array
        loading: false
      };
    }
  
    render() {
      return (
        <div>
          <h1>News</h1>
          
          
          <div className='container my-3'>
        
        
            {this.articles.map((article, index) => (
              <NewsItem
                key={index}
                title={article.title || "N/A"}
                author={article.author || "Unknown"}
                description={article.description || "No description available"}
                url={article.url}
                urlToImage={article.urlToImage || "https://via.placeholder.com/150"}
                publishedAt={article.publishedAt}
              />
            ))}
          </div>
        </div>
      );
    }
  }
  News.propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        source: PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string
        }),
        author: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
        urlToImage: PropTypes.string,
        publishedAt: PropTypes.string,
        content: PropTypes.string
      })
    )
  };
  
  
  export default News;