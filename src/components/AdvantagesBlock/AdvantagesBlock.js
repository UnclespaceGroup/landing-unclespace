import React from 'react'
import s from './AdvantagesBlock.module.scss'
import ServiceTextBlock from '../ServiceTextBlock/ServiceTextBlock'
import im1 from '../../static/clients.png'
import im2 from '../../static/humans.png'
import im3 from '../../static/soft.png'

const items = [
  {
    title: 'Идем навстречу клиенту',
    items: ['Выслушаем и учтем ваше мнение', 'найдем компромиссы'],
    img: im1
  },
  {
    title: 'Идем навстречу клиенту',
    items: ['Выслушаем и учтем ваше мнение', 'найдем компромиссы'],
    img: im2
  },
  {
    title: 'Идем навстречу клиенту',
    items: ['Выслушаем и учтем ваше мнение', 'найдем компромиссы'],
    img: im3
  }
]


const AdvantagesBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>Почему стоит работать с нами</div>
      <div>
        {
          items.map((item, key) => {
            return (
              <div key={key} className={(key % 2) ? s.flex : s.flex__invert}>
                <ServiceTextBlock {...item} theme={'white'} />
                <div className={s.img} style={{ backgroundImage: `url(${item.img})` }} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default React.memo(AdvantagesBlock)