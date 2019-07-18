import React from 'react'
import s from './ServiceTextBlock.module.scss'

const ServiceTextBlock = ({ title, items, theme }) => {
  return (
    <div className={s[theme]}>
      <div className={s.title}>{title}</div>
      <ul>
        {
          items && items.map((item, key) => {
            return (
              <li key={key}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
ServiceTextBlock.defaultProps = {
  theme: 'black'
}
export default React.memo(ServiceTextBlock)
