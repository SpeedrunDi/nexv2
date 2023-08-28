import React from 'react';
import './OurProjects.css'
import './OurAdvantages.css'

import project1 from "../../assets/icons/project1.png";
import project2 from "../../assets/icons/project2.png";
import project3 from "../../assets/icons/project3.png";

const OurAdvantages = () => {
  return (
    <div className="our-advantages">
      <div className="container our-advantages-con">
        <div className="our-advantages-title">
          <h3>Преимущества обучения у нас</h3>
        </div>
        <div className="our-advantages-row">
          <div className="our-advantages-inner">
            <div className="our-projects-card">
              <div>
                <img src={project1} alt="SoundHub"/>
              </div>
              <h5>Практикующие менторы</h5>
              <p>Наши менторы имеют богатый
                преподавательский опыт, являются
                действующими специалистами и их
                обучение строится на основе реальных
                ИТ кейсов а банковской сфере</p>
            </div>

            <div className="our-projects-card">
              <div>
                <img src={project2} alt="Erudite"/>
              </div>
              <h5>Участие в старт-ап
                проектах после обучения</h5>
              <p>Пройдя успешно тестирование на базу
                ваших знаний, мы без проблем возьмем
                вас к нам на стажировку, где вы примите
                участие в разработке старт-ап проектов</p>
            </div>

            <div className="our-projects-card">
              <div>
                <img src={project3} alt="Меню для заведений"/>
              </div>
              <h5>Возможность заработать
                во время обучения</h5>
              <p>Мы внедрили систему поощрения. Самый
                способный ученик получает возможность
                помогать менторам с ребятами и
                получать символическую плату</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAdvantages;