import React from 'react'
import s from './ServiceCardBlockMobile.module.scss'
import ServiceCard from '../../../../components/ServiceCard/ServiceCardMobile'
import ServiceTextBlock from '../../../../components/ServiceText/ServiceTextMobile'
import Swiper from 'react-id-swiper'
import Layout from '../../../../components/Grid/LayoutMobile'
import { items } from './data'
import Padding from '../../../../components/Grid/Padding'

const params = {
  // slidesPerView: '1',
  centeredSlides: true,
  effect: 'coverflow',
  WrapperEl: 'div',
  slideClass: 'slide',
  spaceBetween: 15,
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
    const { theme } = this.props
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
                  <div key={key} style={{width: '100%', height: '36rem'}}>
                    <ServiceCard {...{img, title}} />
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
                  <ServiceTextBlock {...{title, items, theme}} />
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
