import React from 'react'
import s from './BriefPage.module.scss'
import FeedbackBlock from '../MainPage/blocks/FeedbackBlock/FeedbackBlock'
import Layout from '../../components/Grid/Layout'
import Padding from '../../components/Grid/Padding'
import BriefForm from './form/BriefForm'
import Content from '../../components/Grid/Content'

class BriefPage extends React.Component {
  render () {
    return (
      <div className={s.container}>
        <Padding desktop={100} />
        <Layout>
          <h1>Заполните бриф</h1>
          <Padding desktop={0} />
          <div className={s.text}>
            <p>Бриф - краткая анкетка, которая поможет вам понять, чего хотите Вы, а мы с её помощью сформируем грамотное ТЗ.</p>
            <p>После отправки брифа мы свяжемся с Вами и приступим к работе</p>
          </div>
          <Padding desktop={20} />
          <Content width={60}>
            <BriefForm onSubmit={e => {console.log(e)}} />
          </Content>
        </Layout>
        <FeedbackBlock />
      </div>
    )
  }
}
export default BriefPage
