import React from 'react'
import {Link} from 'react-router-dom'
import { FaCodepen, FaDiceD20, FaFire } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from './Button'
import './Pricing.css'

function Pricing() {
  return (
    <IconContext.Provider value={{color: '#fff', size:64}}>
    <div>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
            <h1 className='pricing__heading'>Pricing</h1>
            <div className='pricing__container'>
                <Link to="/sign-up" className='pricing__container-card'>
                    <div className='pricing__container-cardinfo'>
                        <div className='icon'>
                            <FaFire />
                        </div>
                        <h3>Starter</h3>
                        <h4>$9.99</h4>
                        <p>per month</p>
                        <ul className='pricing__container-features'>
                            <li>100 Transaction</li>
                            <li>5% cashback</li>
                            <li>$10,000 limit</li>
                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>
                    </div>
                </Link>
                <Link to="/sign-up" className='pricing__container-card'>
                    <div className='pricing__container-cardinfo'>
                        <div className='icon'>
                            <FaCodepen />
                        </div>
                        <h3>Diamond</h3>
                        <h4>$99.99</h4>
                        <p>per month</p>
                        <ul className='pricing__container-features'>
                            <li>Unlimited Transaction</li>
                            <li>10% cashback</li>
                            <li>Unlimited Spending</li>
                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='blue'>Choose Plan</Button>
                    </div>
                </Link>
                <Link to="/sign-up" className='pricing__container-card'>
                    <div className='pricing__container-cardinfo'>
                        <div className='icon'>
                            <FaDiceD20 />
                        </div>
                        <h3>Gold</h3>
                        <h4>$29.99</h4>
                        <p>per month</p>
                        <ul className='pricing__container-features'>
                            <li>1000 Transaction</li>
                            <li>10% cashback</li>
                            <li>$100,000 limit</li>
                        </ul>
                        <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>
                    </div>
                </Link>

            </div>
        </div>
      </div>
    </div>
    </IconContext.Provider>
  )
}

export default Pricing
