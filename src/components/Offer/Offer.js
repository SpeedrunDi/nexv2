import React from 'react';
import './Offer.css'

import offer1 from '../../assets/icons/offer1.png'
import offer2 from '../../assets/icons/offer2.png'
import offer3 from '../../assets/icons/offer3.png'

const Offer = () => {
  return (
    <div className="offer">
      <div className="container">
        <h3>Что мы предлагаем?</h3>
        <div className="offer-row">
          <div className="offer-card">
            <div>
              <img src={offer1} alt="bag"/>
            </div>
            <h5>Консультация бизнеса</h5>
            <p>Изучение ниши и определение, что нужно для клиента и как закрыть вашу потребность</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="217" viewBox="0 0 2 217" fill="none">
            <path d="M1 0L1.00001 217" stroke="url(#paint0_linear_3_395)"/>
            <defs>
              <linearGradient id="paint0_linear_3_395" x1="1.5" y1="-2.18557e-08" x2="1.50001" y2="217" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0"/>
                <stop offset="0.546875" stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>

          <div className="offer-card">
            <div>
              <img src={offer2} alt="monitoring"/>
            </div>
            <h5>Разработка и автоматизация</h5>
            <p>Наша команда максимально улучшит IT решение для вашего бизнеса</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="217" viewBox="0 0 2 217" fill="none">
            <path d="M1 0L1.00001 217" stroke="url(#paint0_linear_3_395)"/>
            <defs>
              <linearGradient id="paint0_linear_3_395" x1="1.5" y1="-2.18557e-08" x2="1.50001" y2="217" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0"/>
                <stop offset="0.546875" stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>

          <div className="offer-card">
            <div>
              <img src={offer3} alt="offer"/>
            </div>
            <h5>Помощь во внедрении</h5>
            <p>Проводим анализ, находим вендора и помогаем с внедрением IT решения</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;