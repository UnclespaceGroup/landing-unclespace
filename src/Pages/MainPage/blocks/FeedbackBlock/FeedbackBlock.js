import React from 'react'
import s from './FeedbackBlock.module.scss'
import Layout from '../../../../components/Grid/Layout'
import { IconLine } from '../../../../components/MiniBlocks/MiniBlocks'
import { Link } from 'react-router-dom'
import { BRIEF } from '../../../URLs'

const FeedbackBlock = () => {
  return (
    <div className={s.container}>
      <Layout>
        <div className={s.flex}>
          <div>
            <h2 className={s.title}>Заполните Бриф или просто свяжитесь<br /> <span>с нами</span></h2>
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
            <Link to={BRIEF} className={s.button}>Заполнить бриф</Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default FeedbackBlock
