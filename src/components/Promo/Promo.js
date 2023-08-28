import React from 'react';
import './Promo.css'

const Promo = ({title, titlesecond, main}) => {
  return (
    <div className="promo">
      <div className="container">
        <h1>{title} <br/> <span>{titlesecond}</span></h1>
        <p className="promo-subtitle">Продвигайте границы с NEX: Инновации, Опыт, Рост</p>
        <div className="promo-btn"><a href="#feedback">Узнать больше</a></div>

        {main && (
          <div className="why-we">
            <h2>Почему мы?</h2>
            <p>
              Выбрав компанию NEX, клиенты получают
              высококлассные ИТ решения и обучение,
              основанные на профессионализме, инновациях
              и индивидуальном подходе. Мы готовы быть
              вашим надежным партнером в достижении
              ваших целей и успехов в мире
              информационных технологий.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Promo;