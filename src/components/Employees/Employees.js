import React, {useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import './Employees.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import avatar from '../../assets/images/employe.jpg'

const employees = [
  {
    name: 'Imran',
    avatar: avatar,
    post: 'CEO и основатель',
  },
  {
    name: 'Bakai',
    avatar: avatar,
    post: 'Директор',
  },
  {
    name: 'Aman',
    avatar: avatar,
    post: 'Frontend Developer',
  },
  {
    name: 'Jamilia',
    avatar: avatar,
    post: 'Java Backend Developer',
  },
  {
    name: 'Aziret',
    avatar: avatar,
    post: 'Java Backend Developer',
  },
  {
    name: 'Ajar',
    avatar: avatar,
    post: 'Проектный менеджер',
  },
]

const Employees = ({main}) => {
  const [width, setWidth] = useState(3)

  useEffect(() => {
    if (window.innerWidth < 721) {
      setWidth(1)
    } else if (window.innerWidth < 1170) {
      setWidth(2)
    }
  }, []);

  return (
    <div className="container employees-con">
      <h3>{main ? 'Наша команда' : 'Наши менторы'}</h3>
      <Swiper
        slidesPerView={width}
        spaceBetween={30}
        navigation={true}
        freeMode={true}
        pagination={false}
        modules={[FreeMode, Pagination, Navigation]}
        className="employees-cards"
      >
        {employees.map(employee => (
          <SwiperSlide key={employee.name}>
            <div className="employee-card">
              <div className="employee-card-img">
                <img src={employee.avatar} alt={employee.name} />
              </div>
              <div className="employee-card-description">
                <h5>{employee.name}</h5>
                <p>{employee.post}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Employees
