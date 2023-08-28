import React from 'react';
import './Offer.css'

import course1 from '../../assets/icons/java.png'
import course2 from '../../assets/icons/js.png'
import course3 from '../../assets/icons/pm.png'
import course4 from '../../assets/icons/ux.png'

const OurCourses = () => {
  return (
    <div className="offer">
      <div className="container">
        <h3>Наши курсы</h3>
        <div className="offer-row">
          <div className="offer-card">
            <div>
              <img src={course1} alt="java"/>
            </div>
            <h5>Java</h5>
            <p>Продолжительность курса: 6 месяцев</p>
            <p>Стоимость курса: 11 000 сом/месяц</p>
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
              <img src={course2} alt="js"/>
            </div>
            <h5>JavaScript</h5>
            <p>Продолжительность курса: 6 месяцев</p>
            <p>Стоимость курса: 11 000 сом/месяц</p>
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
              <img src={course3} alt="pm"/>
            </div>
            <h5>Project Management</h5>
            <p>Продолжительность курса: 5 месяцев</p>
            <p>Стоимость курса: 9 900 сом/месяц</p>
          </div>

          <div className="offer-card">
            <div>
              <img src={course4} alt="ux/ui"/>
            </div>
            <h5>UX/UI design</h5>
            <p>Продолжительность курса: 6 месяцев</p>
            <p>Стоимость курса: 11 000 сом/месяц</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;