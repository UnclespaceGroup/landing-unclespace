import React from 'react'
import s from './MainBanner.module.scss'
import Layout from '../../../../components/Grid/Layout'
import { IconLine, WithTimeout } from '../../../../components/MiniBlocks/MiniBlocks'
import Swiper from 'react-id-swiper'
import { items } from './data'

const params = {
  slidesPerView: '1',
  centeredSlides: true,
  init: true,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 5000
  }
}

const MainBanner = (props) => {
  return (
    <div className={s.container}>
      <Swiper {...params}>
        {
          items.map(({ title, text, img }, key) => {
            return (
              <div className={s.slide} style={{ backgroundImage: img ? `url(${img})` : '' }} key={key}>
                <Layout>
                  <div className={s.title}>{title}</div>
                  <div className={s.text}><WithTimeout timeout={700}>{text}</WithTimeout></div>
                </Layout>
              </div>
            )
          })
        }
      </Swiper>
      <div className={s.social}><IconLine /></div>
    </div>
  )
}
export default MainBanner
