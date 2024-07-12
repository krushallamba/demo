import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjThree,homeObjFour} from './Data'

function Products() {
  return (
    <>
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjThree} />
    </>
  )
}

export default Products