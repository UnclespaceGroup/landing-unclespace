import React from 'react'
import s from './CatalogItemMobile.module.scss'
import { Link } from 'react-router-dom'
import { CATALOG } from '../../Pages/URLs'

const CatalogItem = ({ img, title, advantages, text, id }) => {
  return (
    <div className={s.container}>
      <div className={s.img} style={{ backgroundImage: `url(${img})` }} />

      <div className={s.content}>
        <div className={s.title}>{title}</div>
        <div className={s.text}>{text}</div>
        <Link to={CATALOG + '/' + id} className={s.btn}>Перейти</Link>
      </div>
    </div>
  )
}
export default CatalogItem
