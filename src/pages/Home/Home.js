import React from 'react';
import './Home.css';
import constructionImage from '../../assets/images/danger-keep-out.jpg';

export default () => (
  <div className="page-home">
    <br /><br /><br />
    <img src={constructionImage} className="App-logo" alt="logo" />
    <br />
    <div>
      &copy; 2019 Pahlawan Pte. Ltd.
    </div>
    <br />
    <div className="enquiries">
      For enquiries: <a href="mailto:pahlawanenquiry@gmail.com">pahlawanenquiry@gmail.com</a>
    </div>
    <br />
    <br />
    <div className="company-details">
      UEN: 201930010D
      <br />
      7, Mandai Link, #03-32, Mandai Connection, Singapore 728653
    </div>
  </div>
);
