import React from 'react';
import './News.css'

import kit from '../../../assets/images/kit.jpg'
import discounts from '../../../assets/images/discounts.jpg'

const News = () => {
  return (
    <div className="news">
      <div className="container">
        <h3>Последние новости</h3>
        <div className="news-row">
          <div className="post">
            <div className="post-img">
              <img src={kit} alt="kit"/>
            </div>
            <div className="post-description">
              <p className="post-date">25.09.2023</p>
              <h5>Объявляем набор</h5>
              <p className="post-text">Мы рады сообщить, что у нас
                открыт набор на курсы Java
                backend разработка!</p>
            </div>
          </div>

          <div className="post">
            <img src={discounts} alt="discounts"/>
            <div className="post-description">
              <p className="post-date">25.09.2023</p>
              <h5>Объявляем набор</h5>
              <p className="post-text">Мы рады сообщить, что у нас
                открыт набор на курсы Java
                backend разработка!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;