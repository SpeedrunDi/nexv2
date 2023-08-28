import React, {useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import './Reviews.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import avatar from '../../../assets/images/reviewer.jpg'

const reviews = [
  {
    name: 'John Smith',
    avatar: avatar,
    company: 'CEO ‘Erudit’ Company',
    comment: 'Отличная подушка. В меру жёсткая, принимает форму\n' +
      'головы, даёт ощущение приятной прохлады. Минусы:\n' +
      'поспал на ней только один день. Потом жена у меня\n' +
      'её отобрала. Теперь придётся заказывать ещё одну'
  },
  {
    name: 'John John',
    avatar: avatar,
    company: 'CEO ‘Erudit’ Company',
    comment: 'Отличная подушка. В меру жёсткая, принимает форму\n' +
      'головы, даёт ощущение приятной прохлады. Минусы:\n' +
      'поспал на ней только один день. Потом жена у меня\n' +
      'её отобрала. Теперь придётся заказывать ещё одну'
  },
  {
    name: 'John Black',
    avatar: avatar,
    company: 'CEO ‘Erudit’ Company',
    comment: 'Отличная подушка. В меру жёсткая, принимает форму\n' +
      'головы, даёт ощущение приятной прохлады. Минусы:\n' +
      'поспал на ней только один день. Потом жена у меня\n' +
      'её отобрала. Теперь придётся заказывать ещё одну'
  },
  {
    name: 'John Sam',
    avatar: avatar,
    company: 'CEO ‘Erudit’ Company',
    comment: 'Отличная подушка. В меру жёсткая, принимает форму\n' +
      'головы, даёт ощущение приятной прохлады. Минусы:\n' +
      'поспал на ней только один день. Потом жена у меня\n' +
      'её отобрала. Теперь придётся заказывать ещё одну'
  },
]

const Reviews = () => {
  const [width, setWidth] = useState(3)

  useEffect(() => {
    if (window.innerWidth < 721) {
      setWidth(1)
    } else if (window.innerWidth < 1170) {
      setWidth(2)
    }
  }, []);

  return (
    <div className="reviews">
      <div className="container">
        <h3>О нас говорят</h3>
        <Swiper
          slidesPerView={width}
          spaceBetween={20}
          navigation={true}
          freeMode={true}
          pagination={false}
          modules={[FreeMode, Pagination, Navigation]}
          className="reviews-cards"
        >
          {reviews.map(employee => (
            <SwiperSlide key={employee.name}>
              <div className="review-card">
                <div className="review-card-top">
                  <div className="review-card-img">
                    <img src={employee.avatar} alt={employee.name} />
                  </div>
                  <div className="review-card-title">
                    <h5>{employee.name}</h5>
                    <p>{employee.company}</p>
                  </div>
                </div>
                <div className="review-card-description">
                  <p>Отличная подушка. В меру жёсткая, принимает форму
                    головы, даёт ощущение приятной прохлады. Минусы:
                    поспал на ней только один день. Потом жена у меня
                    её отобрала. Теперь придётся заказывать ещё одну</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Reviews