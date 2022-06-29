import React, { useState } from 'react';
import Layout from '../components/Layout.jsx';
import ReactSlider from 'react-slider';
import axios from 'axios';
// import Slider from '../components/Slider.js';

function CustomFeed() {
  const [values, setValues] = useState([50]);

  const [articles, setArticles] = useState([]);

  const centristOutlets=['the-wall-street-journal', 'bbc-news', 'reuters', 'associated-press', 'axios', 'usa-today', 'the-hill'];

  const liberalOutlets = ['the-huffington-post', 'the-lad-bible', 'abc-news', 'cnn', 'msnbc', 'nbc-news', 'politico', 'time', 'the-washington-post', 'buzzfeed', 'newsweek', 'cbs-news'];

  const conservativeOutlets = ['national-review', 'the-american-conservative', 'fox-news', 'the-washington-times'];

  const getPartisanArticles = (e) => {
    // e.preventDefault();
    if (values > 60) {
      axios.get('/righties')
    .then((results) => {
      console.log(results);
      setArticles(results.data.articles);
    })
    .catch((err) => console.log('error getting from front end', err));
    } else  if (values < 40) {
      axios.get('/lefties')
      .then((results) => {
        console.log(results);
        setArticles(results.data.articles);
      })
      .catch((err) => console.log('error getting from front end', err));
    } else {
      axios.get('/centrists')
    .then((results) => {
      console.log(results);
      setArticles(results.data.articles);
    })
    .catch((err) => console.log('error getting from front end', err));
    }
  }

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

  return (
    <Layout>
       <h1 className='text-7xl w-50 text-center mt-20'>Tailored News</h1>
      <p className='text-center mb-20'><sub><em>Never hear from the other side again! </em><br/> Slide to adjust your political stance </sub></p>
        <div >
          <ReactSlider
            step={1}
            min={0}
            max={100}
            className="w-2/4 h-3 pr-2 my-4 bg-gray-200 rounded-md cursor-grab mx-auto"
            thumbClassName="absolute w-5 h-5 cursor-grab bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 -top-2px"
            value={values}
            onChange={(values: any) => {
              setValues(values)
            }}
          />
        {60 < values ? (<p className='text-center my-5'>Rightie</p>) : 40 > values ? (<p className='text-center my-5'>Leftie</p>) : (<p className='text-center my-5'>Centrist</p>)}

        <button
          className='bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex self-center mx-auto'
          onClick={(e) => getPartisanArticles(e)}
        >Search
        </button>
       </div>


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
  )
}

export default CustomFeed;
