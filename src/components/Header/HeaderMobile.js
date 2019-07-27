import React, { useState } from 'react'
import s from './HeaderMobile.module.scss'
import { Link } from 'react-router-dom'
import { Collapse } from 'react-collapse'
import { ABOUT, CATALOG, MAIN_PAGE } from '../../Pages/URLs'

const Header = (props) => {
  const [open, setOpenMenu] = useState(false)
  return (
    <div className={s.container}>
      <div className={s.flex}>
        <Link to={MAIN_PAGE} className={s.logo}>UncleSpace</Link>
        <div className={open ? s.burger__close : s.burger} onClick={() => {setOpenMenu(!open)}} />
      </div>
        <Collapse isOpened={open}>
          <div className={s.submenu}>
            <Link to={MAIN_PAGE} className={s.item}>Наши главную</Link>

            <Link to={CATALOG} className={s.item}>Каталог услуг</Link>
            <Link to={'/some'} className={s.item}>Заполнить бриф</Link>
            <Link to={ABOUT} className={s.item}>О нас</Link>


            <div className={s.text}>По всем вопросам звоните по номеру
              <a href={'tel:89042370267'} className={s.item}>8(904) 237-02-67</a>
            </div>
          </div>
        </Collapse>
    </div>
  )
}
export default Header
