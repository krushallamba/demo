import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjThree,homeObjOne} from './Data'

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  )
}

export default SignUp