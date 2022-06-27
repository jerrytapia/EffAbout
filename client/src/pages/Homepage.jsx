import React from 'react';
import Layout from '../components/Layout.jsx';

function Homepage() {
  return (
    <Layout>
      <h1 className='text-4xl font-bold text-center my-10'>Welcome to <strong>effAbout</strong><sup className='text-xs'>TM</sup></h1>
      <p className='text-center'>Hey you, yes you! Are you tired of hearing whiny little liberal snowflakes and their opinions?! Or are you tired of far-right propaganda trying to tell you how to live your life?!</p>
      <p className='text-center'>Well now you can mind your own business and they can mind theirs!</p>
      <p className='text-center'>We're effAbout, a service that brings you news for only the things <strong>you</strong> give an <strong>effAbout</strong>! Think of us as your own little personal echo chamber, now go, your opinions are waiting!</p>
    </Layout>
  )
}

export default Homepage;