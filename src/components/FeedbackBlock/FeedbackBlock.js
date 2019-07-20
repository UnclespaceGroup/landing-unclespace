import React from 'react'
import s from './FeedbackBlock.module.scss'
import Layout from '../Grid/Layout'
import { IconLine } from '../MiniBlocks/MiniBlocks'

const FeedbackBlock = () => {
  return (
    <div className={s.container}>
      <Layout>
        <div className={s.flex}>
          <div>
            <div className={s.title}>Заполните Бриф или просто свяжитесь с нами</div>
            <div className={s.description}>
              <p>
                Консультация бесплатна
              </p>
              <p>
                <a href={'tel:89042370267'}>тел. 8 (904) 237 02 67</a>
              </p>
                <IconLine />
            </div>
          </div>
          <div>
            <div className={s.button}>Заполнить бриф</div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default FeedbackBlock
