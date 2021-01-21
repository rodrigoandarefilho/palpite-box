import React, { Component } from 'react';
import '../css/styles.css';
import Header from '../componente/Header'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <div className='container mx-auto'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;