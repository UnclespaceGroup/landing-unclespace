import React, { Component } from 'react'
import s from './MainPage.module.scss'
import Layout from '../../components/Grid/Layout'
import MainBanner from './blocks/MainBanner/MainBanner'
import ServiceCardBlock from './blocks/ServiceCardBlock/ServiceCardBlock'
import AdvantagesBlock from './blocks/AdvantagesBlock/AdvantagesBlock'
import { Waypoint } from 'react-waypoint'
import FeedbackBlock from './blocks/FeedbackBlock/FeedbackBlock'
import Rectangles from '../../components/Rectangles/Rectangles'

const items = [
  {posX: 5, posY: 10}, {posX: 20, posY: 30}, {posX: 40, posY: 50}, {posX: 95, posY: 55}, {posX: -10, posY: 60}, {posX: 65, posY: 20}, {posX: 65, posY: 90}
]

class MainPage extends Component {
  state = {
    whiteBackground: true
  }

  render () {
    const {whiteBackground} = this.state
    return (
      <div className={whiteBackground ? s.container__white : s.container}>
        <MainBanner />
        <Rectangles {...{items}}>
          <Layout>
            <ServiceCardBlock theme={whiteBackground ? 'black' : 'white'} />
            <Waypoint
              topOffset='20%'
              bottomOffset='40%'
              onEnter={this.changeBackground(false)}
              onLeave={this.changeBackground(true)}
            >
              <div>
                <AdvantagesBlock theme={whiteBackground ? 'black' : 'white'} />
              </div>
            </Waypoint>
          </Layout>
          <FeedbackBlock />
        </Rectangles>
      </div>
    )
  }

  changeBackground = current => () => {
    this.setState({whiteBackground: !!current})
  }
}

export default MainPage
