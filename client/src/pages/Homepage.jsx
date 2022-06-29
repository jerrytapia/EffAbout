import React from 'react';
import Layout from '../components/Layout.jsx';

function Homepage() {
  return (
    <Layout>
      <h1 className='text-4xl font-bold text-center my-10'>Welcome to <strong>effAbout</strong><sup className='text-xs'>TM</sup></h1>
      <div className='flex justify-center my-10'>
      <img className='w-full self-center' alt='bald eagle just bald eaglin' src={require('./birb.png')} />
      </div>
      <p className='text-center'>Hey you, yes you! Are you tired of hearing the <em>other</em> side go on and on about their opinions and their fake news?</p>
      <p className='text-center'>Well now you can mind your own business and they can mind theirs!</p>
      <p className='text-center '>We're effAbout, a service that brings you news, but only on the things <strong>you</strong> give an <strong>effAbout</strong><sup>TM</sup>!</p>
      <p className='text-center'>Think of us as your own little personal echo chamber, now go, your opinions are waiting!</p>


    </Layout>
  )
}

export default Homepage;