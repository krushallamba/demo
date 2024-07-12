import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjTwo,homeObjThree} from './Data'
import Pricing from '../../Pricing'

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  )
}

export default Services