import React from 'react'
import s from './ServiceCardBlockMobile.module.scss'
import web_site_icon from '../../static/web-site.png'
import ServiceCard from '../ServiceCard/ServiceCardMobile'
import ServiceTextBlock from '../ServiceTextBlock/ServiceTextBlockMobile'
import Swiper from 'react-id-swiper'
import Layout from '../Grid/LayoutMobile'

const items = [
  {
    title: 'Разработка сайтов',
    img: web_site_icon,
    items: [
      'Корпоративные сайты',
      'Оригинальные лендинги',
      'Интернет-магазины',
      'Сервисы'
    ]
  },
  {
    title: 'Мобильные приложения',
    img: web_site_icon,
    items: [
      'Кросплатформенные приложения',
      'Клиент-серверные',
      'Сервисы (доставка еды, услуги)',
      'Браузеные приложения',
      'Игры и развлечения'
    ]
  },
  {
    title: 'Реклама и продвижение',
    img: web_site_icon,
    items: [
      'Разработка рекламной компании',
      'Сео-оптимизация',
      'Продвижение в социальных сетях',
      '',
      '100% гарантия'
    ]
  }
]
const params = {
  // slidesPerView: '1',
  centeredSlides: true,
  effect: 'coverflow',
  init: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
}

class ServiceCardBlock extends React.PureComponent {
  render () {
    return (
      <div className={s.container}>
        <div className={s.slider}>
          <Swiper {...params}>

            {
              items.map(({img, title}, key) => {
                return (
                  <div key={key} >
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
