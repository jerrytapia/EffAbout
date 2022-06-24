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
    console.log('state: ', savedArticles);

    useEffect(getSavedArticles, []);

  return (
    <Layout>
      <h1>Saved For Later</h1>
      <div>
        {savedArticles.length ? (
          <div>
            {savedArticles.map((article) => (
              <div>
                <h1>{article.title}</h1>
              {article.author ? (<p className=""><em>By: {article.author}</em></p>) : null}
              <img alt={article.description} src={article.urlToImage} className="h-96"/>
              <p>{article.description}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </Layout>
  )
}

export default Later;