import React from 'react'
import s from './ServiceCardBlockMobile.module.scss'
import ServiceCard from '../ServiceCard/ServiceCardMobile'
import ServiceTextBlock from '../ServiceTextBlock/ServiceTextBlockMobile'
import Swiper from 'react-id-swiper'
import Layout from '../Grid/LayoutMobile'
import { items } from './data'
import Padding from '../Grid/Padding'

const params = {
  // slidesPerView: '1',
  centeredSlides: true,
  effect: 'coverflow',
  WrapperEl: 'div',
  slideClass: 'slide',
  spaceBetween: 30,
  init: true,
  ContainerEl: 'div',
  slidesPerView: 'auto',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
}

class ServiceCardBlock extends React.PureComponent {
  render () {
    return (
      <div className={s.container}>
        <Padding mobile={56} />
        <Layout>
          <h2>Предлагаем следующие <span>услуги</span></h2>
        </Layout>
        <div className={s.slider}>
          <Swiper {...params}>

            {
              items.map(({img, title}, key) => {
                return (
                  <div style={{width: '20rem'}}>
                    <ServiceCard key={key} {...{img, title}} />
                  </div>

                )
              })
            }
          </Swiper>
        </div>
        <Layout>
          {
            items.map(({title, items}, key) => {
              return (
                <div className={s.area_item} key={key}>
                  <ServiceTextBlock {...{title, items}} />
                </div>
              )
            })
          }
        </Layout>
      </div>
    )
  }
}

export default ServiceCardBlock
