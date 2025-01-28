import React from 'react'
import Banner from './home/Banner'
import ExtraSectionBike from './home/ExtraSectionBike'
import ExtraSectionShipping from './home/ExtraSectionShipping'

const Home = () => {
  return (
    <div>
      <Banner/>
      <ExtraSectionBike></ExtraSectionBike>
      <ExtraSectionShipping></ExtraSectionShipping>
    </div>
  )
}

export default Home
