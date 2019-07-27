import React from 'react'
import s from './AboutPage.module.scss'
import Layout from '../../components/Grid/LayoutMobile'
import Padding from '../../components/Grid/Padding'
import FeedbackBlock from '../MainPage/blocks/FeedbackBlock/FeedbackBlockMobile'
import { data } from './data'
import { Line } from '../../components/MiniBlocks/MiniBlocks'

class AboutPage extends React.Component {
  render () {
    return (
      <div className={s.container}>
        <Padding mobile={50} />
        <Layout>
            {data}
        </Layout>
        <Padding mobile={100} />
        <Line />
        <FeedbackBlock />
      </div>
    )
  }
}

export default AboutPage
