import React from 'react'
import s from './ServiceCard.module.scss'

const ServiceCard = ({ title, img }) => {
    return (
        <div className={s.container}>
            <div className={s.title}>{title}</div>
            <div className={s.img} style={{ backgroundImage: `url(${img})` }} />
        </div>
    )
}
export default ServiceCard
