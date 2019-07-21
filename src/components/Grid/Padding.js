import React from 'react'
import {isMobile} from 'react-device-detect'

const Padding = ({mobile, desktop}) => {
  return (
    <div style={{ paddingTop: isMobile ? `${mobile / 10}rem` : `${desktop / 10}rem` }} />
  )
}
export default Padding