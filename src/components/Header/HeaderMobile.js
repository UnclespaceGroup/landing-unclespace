import React, { useState } from 'react'
import s from './HeaderMobile.module.scss'
import { Link } from 'react-router-dom'
import { Collapse } from 'react-collapse'

const Header = (props) => {
  const [open, setOpenMenu] = useState(false)
  return (
    <div className={s.container}>
      <div className={s.flex}>
        <Link to={'/'} className={s.logo}>UncleSpace</Link>
        <div className={open ? s.burger__close : s.burger} onClick={() => {setOpenMenu(!open)}} />
      </div>
        <Collapse isOpened={open}>
          <div className={s.submenu}>
            <Link to={'/some'} className={s.item}>Наши услуги</Link>
            <Link to={'/some'} className={s.item}>Заполнить бриф</Link>

            <div className={s.text}>По всем вопросам звоните по номеру
              <a href={'tel:89042370267'} className={s.item}>8(904) 237-02-67</a>
            </div>
          </div>
        </Collapse>
    </div>
  )
}
export default Header
