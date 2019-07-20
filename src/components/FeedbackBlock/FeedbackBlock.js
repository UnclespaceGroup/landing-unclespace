import React from 'react'
import s from './FeedbackBlock.module.scss'
import Layout from '../Grid/Layout'

const FeedbackBlock = () => {
  return (
    <div className={s.container}>
      <Layout>
        <div className={s.flex}>
          <div>
            <div className={s.title}>Заполните Бриф или просто свяжитесь с нами</div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default FeedbackBlock
