import React from 'react'
import s from './BriefPageMobile.module.scss'
import FeedbackBlock from '../MainPage/blocks/FeedbackBlock/FeedbackBlockMobile'
import Layout from '../../components/Grid/LayoutMobile'
import Padding from '../../components/Grid/Padding'
import BriefForm from './form/BriefForm'

class BriefPage extends React.Component {
  render () {
    return (
      <div className={s.container}>
        <Padding mobile={100} />
        <Layout>
          <h1>Заполните бриф</h1>
          <Padding desktop={0} />
          <div className={s.text}>
            <p>Бриф - краткая анкетка, которая поможет вам понять, чего хотите Вы, а мы с её помощью сформируем грамотное ТЗ.</p>
            <p>После отправки брифа мы свяжемся с Вами и приступим к работе</p>
          </div>
          <Padding mobile={20} />
          <BriefForm onSubmit={e => {console.log(e)}} />
        </Layout>
        <FeedbackBlock />
      </div>
    )
  }
}
export default BriefPage
