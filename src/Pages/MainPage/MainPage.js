import React, { Component } from 'react'
import s from './MainPage.module.scss'
import Layout from '../../components/Grid/Layout';
import MainBanner from '../../components/MainBanner/MainBanner';
import ServiceCardBlock from '../../components/ServiceCardBlock/ServiceCardBlock';
import AdvantagesBlock from '../../components/AdvantagesBlock/AdvantagesBlock'
import { Waypoint } from 'react-waypoint'

class MainPage extends Component {
  state = {
    whiteBackground: true
  }
  render () {
    const { whiteBackground } = this.state
    return (
      <div className={whiteBackground ? s.container__white : s.container}>
        <MainBanner />
        <Layout>
          <ServiceCardBlock />
          <Waypoint
            topOffset='20%'
            bottomOffset='40%'
            onEnter={this.changeBackground(false)}
            onLeave={this.changeBackground(true)}
          >
            <div>
              <AdvantagesBlock />
            </div>
          </Waypoint>
          <div style={{ height: '200vh' }} />
          {/*<Waypoint onEnter={() => this.setState({ whiteBackground: true })} />*/}
        </Layout>
      </div>
    )
  }
  changeBackground = current => () => {
    this.setState({ whiteBackground: !!current})
  }
}

export default MainPage
