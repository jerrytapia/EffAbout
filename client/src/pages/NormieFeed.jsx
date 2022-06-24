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

  useEffect(getArticles, []);

  return (
    <Layout>
      <h1>Normie Feed</h1>
      {articles.length ? (
        <div>
          {articles.map((article, index) => (
            <div>
              <h1>{article.title}</h1>
              {article.author ? (<p className=""><em>By: {article.author}</em></p>) : null}
              <img alt={article.description} src={article.urlToImage} className="h-96"/>
              <p>{article.description}</p>
              <button type="button" onClick={() => saveForLater(article)}>read later</button>
            </div>
          ))}
        </div>
      ) : null}

    </Layout>
  );
}

export default NormieFeed;