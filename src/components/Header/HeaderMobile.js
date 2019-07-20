import React from 'react'
import s from './HeaderMobile.module.scss'

const Header = (props) => {
  return (
    <div className={s.container}>
      <div className={s.flex}>
        <div className={s.logo}>UncleSpace</div>
        { false && <div>
          <div className={s.flex}>
            <div className={s.item}>Наши услуги</div>
            <div className={s.item}>Заполнить бриф</div>
            <div className={s.item}><b>8(904) 237-02-67</b></div>
          </div>
        </div>}
      </div>
    </div>
  )
}
export default Header
