import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout.jsx';
import axios from 'axios';

function NormieFeed() {
const [articles, setArticles] = useState([]);

  const getArticles = () => {
    axios.get('/normiefeed')
      .then((results) => {
        console.log(results);
        setArticles(results.data.articles);
      })
      .catch((err) => console.log('error getting from front end', err));
    }
    console.log('state', articles[2]);

    const saveForLater = (article) => {
      console.log(article)
      axios.post('/later', article)
        .then(() => console.log('success'))
        .catch(err => console.log('error posting from front end', err));
    }

    const goToArticle = (articleUrl) => {
      const newWindow = window.open(articleUrl, '_blank', 'noopener, noreferrer')
      if (newWindow) newWindow.opener = null
    }
  useEffect(getArticles, []);

  return (
    <Layout>
      <h1 className='text-7xl w-50 text-center mt-20'>Normie News</h1>
      <p className='text-center mb-20'><sub><em>This is where you'll find today's trending headlines in the US. </em><br/> Press the plus button to save article for later </sub></p>
      {articles.length ? (
        <div className='mx-44 text-center divide-y'>
          {articles.map((article, index) => (
            <section key={article.title} className='flex flex-col '>
              <h1 className='text-3xl mt-10 text-center align-center' onClick={() => goToArticle(article.url)}>{article.title}</h1>
              {article.author ? (<p className="text-center mb-5"><em><sub>By: {article.author}</sub></em></p>) : null}
              <div className='flex justify-center'>
                <button className='text-7xl mt-0 mr-10 place-self-start active:text-white active:-translate-y-px' type="button" onClick={() => saveForLater(article)}>+</button>
               <img onClick={() => goToArticle(article.url)} alt={article.description} src={article.urlToImage} className="max-w-[85%] self-center "/>
              </div>
              <p className="text-center my-5 text-lg font-['Times New Roman']" onClick={() => goToArticle(article.url)}>{article.description}</p>

            </section>
          ))}
        </div>
      ) : null}

    </Layout>
  );
}

export default NormieFeed;