import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout.jsx';
import axios from 'axios';

function Later() {
  const [savedArticles, setSavedArticles] = useState([]);

  const getSavedArticles = () => {
    axios.get('/later')
      .then((results) => {
        console.log(results);
        setSavedArticles(results.data);
      })
      .catch((err) => console.log('error getting from front end', err));
    }
    const deleteArticle = (articleUrl) => {
      axios.delete('/delete', {data: {articleUrl}})
        .then(() => getSavedArticles())
        .catch((err) => console.log('trouble deleting', err));
    }
    console.log('state: ', savedArticles);

    useEffect(getSavedArticles, []);

    const goToArticle = (articleUrl) => {
      const newWindow = window.open(articleUrl, '_blank', 'noopener, noreferrer')
      if (newWindow) newWindow.opener = null
    }
  return (
    <Layout>
      <h1 className='text-7xl w-50 text-center mt-20'>Saved For Later</h1>
      <p className='text-center mb-20'><sub><em>Previously saved news articles. Press the minus button to delete article from list. </em></sub></p>
      {savedArticles.length ? (
        <div className='mx-44 text-center divide-y'>
          {savedArticles.map((article, index) => (
            <section className='flex flex-col '>
              <h1 className='text-3xl mt-10 text-center align-center'>{article.title}</h1>
              {article.author ? (<p className="text-center mb-5"><em><sub>By: {article.author}</sub></em></p>) : null}
              <div className='flex justify-center'>
               <img
               onClick={() => goToArticle(article.url)}
               alt={article.description} src={article.urlToImage} className="w-7/12 max-w-[85%] self-center "/>
               <button className='text-3xl mt-0 ml-10 place-self-start active:text-red active:-translate-y-px' type="button" onClick={() => deleteArticle(article.url)}>X</button>
              </div>
              <p className='text-center my-5'>{article.description}</p>

            </section>
          ))}
        </div>
      ) : null}

    </Layout>
  )
}

export default Later;