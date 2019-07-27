import React from 'react'
import s from './AboutPage.module.scss'
import Layout from '../../components/Grid/Layout'
import Content from '../../components/Grid/Content'
import Header from '../../components/Header/Header'
import Padding from '../../components/Grid/Padding'
import FeedbackBlock from '../MainPage/blocks/FeedbackBlock/FeedbackBlock'
import { data } from './data'
import { Line } from '../../components/MiniBlocks/MiniBlocks'

class AboutPage extends React.Component {
  render () {
    return (
      <div className={s.container}>
        <Padding desktop={200} />
        <Header />
        <Layout>
          <Content width={70}>
            {data}
          </Content>
          <Padding desktop={200} />
          <Line width={'1px'} />
        </Layout>
        <FeedbackBlock />
      </div>
    )
  }
}

export default AboutPage
