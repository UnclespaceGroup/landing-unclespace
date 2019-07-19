import React from 'react'
import s from './AdvantagesBlock.module.scss'
import ServiceTextBlock from '../ServiceTextBlock/ServiceTextBlock'

const items = [
  {
    title: 'Идем навстречу клиенту',
    items: ['Выслушаем и учтем ваше мнение', 'найдем компромиссы']
  },
  {
    title: 'Идем навстречу клиенту',
    items: ['Выслушаем и учтем ваше мнение', 'найдем компромиссы']
  },
  {
    title: 'Идем навстречу клиенту',
    items: ['Выслушаем и учтем ваше мнение', 'найдем компромиссы']
  },
  {
    title: 'Идем навстречу клиенту',
    items: ['Выслушаем и учтем ваше мнение', 'найдем компромиссы']
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
              <div key={key}>
                <ServiceTextBlock {...item} theme={'white'} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default React.memo(AdvantagesBlock)