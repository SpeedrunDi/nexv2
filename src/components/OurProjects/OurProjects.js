import React from 'react';
import './OurProjects.css'

import project1 from '../../assets/icons/project1.png'
import project2 from '../../assets/icons/project2.png'
import project3 from '../../assets/icons/project3.png'
import project4 from '../../assets/icons/project4.png'

const OurProjects = () => {
  return (
    <div className="our-projects">
      <div className="container our-projects-con">
        <div className="our-projects-title">
          <h3>Наши проекты</h3>
          <p>Доверьте нам свой бизнес и мы сэкономим ваше время</p>
        </div>
        <div className="our-projects-row">
          <div className="our-projects-inner">
            <div className="our-projects-card">
              <div>
                <img src={project1} alt="SoundHub"/>
              </div>
              <h5>SoundHub</h5>
              <p>Сервер для прослушивания музыки,
                можно легко найти любимый трек,
                исполнителя или альбом.</p>
            </div>

            <div className="our-projects-card">
              <div>
                <img src={project2} alt="Erudite"/>
              </div>
              <h5>Erudite</h5>
              <p>Веб-приложение, которое предоставит
                возможности для общения педагогов
                с учениками через чат и автоматической
                выгрузки оценок педагогов в
                электронный дневник учеников.</p>
            </div>

            <div className="our-projects-card">
              <div>
                <img src={project3} alt="Меню для заведений"/>
              </div>
              <h5>Меню для заведений</h5>
              <p>Электронное меню заведений, теперь
                не нужно тратить много ресурсов в вид
                бумаги для перепечатки меню.</p>
            </div>

            <div className="our-projects-card">
              <div>
                <img src={project4} alt="Telegram Buyer Bot"/>
              </div>
              <h5>Telegram Buyer Bot</h5>
              <p>Sale площадка в виде Telegram Бота,
                через который можно заказывать
                онлайн вещи и оплачивать.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;