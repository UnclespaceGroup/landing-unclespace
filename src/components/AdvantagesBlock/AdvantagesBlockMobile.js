import React from 'react'
import s from './AdvantagesBlockMobile.module.scss'
import ServiceTextBlock from '../ServiceTextBlock/ServiceTextBlockMobile'
import { items } from './data'
import Padding from '../Grid/Padding'

const AdvantagesBlock = ({theme}) => {
  return (
    <div className={s.container}>
      <Padding mobile={56} />
      <h2 className={(theme=== 'black')? s.title__black : s.title}>Почему стоит <span>выбрать нас</span></h2>
      <Padding mobile={40} />
      <div>
        {
          items.map((item, key) => {
            return (
              <div key={key} className={(key % 2) ? s.flex : s.flex__invert}>
                <ServiceTextBlock {...{...item, theme}} />
                <div className={s.img} style={{backgroundImage: `url(${item.img})`}} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default React.memo(AdvantagesBlock)