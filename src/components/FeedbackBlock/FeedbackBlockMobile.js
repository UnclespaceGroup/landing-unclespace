import React from 'react'
import s from './FeedbackBlockMobile.module.scss'
import Layout from '../Grid/LayoutMobile'
import { IconLine } from '../MiniBlocks/MiniBlocks'
import { Link } from 'react-router-dom'

const FeedbackBlock = () => {
  return (
    <div className={s.container}>
      <Layout>
        <div className={s.flex}>
          <h2 className={s.title}>Заполните Бриф или просто <span>свяжитесь с нами</span></h2>
          <div className={s.description}>
            <p>
              Консультация бесплатна
            </p>
            <p>
              <a href={'tel:89042370267'}>тел. 8 (904) 237 02 67</a>
            </p>
            <IconLine />
          </div>
          <Link to={'/brif'} className={s.button}>Заполнить бриф</Link>
        </div>
      </Layout>
    </div>
  )
}
export default FeedbackBlock
