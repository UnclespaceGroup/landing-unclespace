import React from 'react'
import s from './AdvantagesBlock.module.scss'
import ServiceTextBlock from '../../../../components/ServiceText/ServiceText'
import { items } from './data'
import Padding from '../../../../components/Grid/Padding'


const AdvantagesBlock = ({ theme }) => {
  return (
    <div className={s.container}>
      <Padding desktop={40} mobile={24} />
      <h2 className={theme === 'black' ? s.title__black : s.title}>Почему стоит <span>выбрать нас</span></h2>
      <Padding desktop={80} mobile={56} />
      <div>
        {
          items.map((item, key) => {
            return (
              <div key={key} className={(key % 2) ? s.flex : s.flex__invert}>
                <ServiceTextBlock {...{...item, theme}}  />
                <div className={s.img} style={{ backgroundImage: `url(${item.img})` }} />
              </div>
            )
          })
        }
      </div>
      <Padding desktop={40} mobile={24} />
    </div>
  )
}

export default React.memo(AdvantagesBlock)