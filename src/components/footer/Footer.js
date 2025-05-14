import React from 'react'
import { Contacts } from './Contacts'
import { Navigation } from './Navigation'
import { About } from './About'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__info'>
                <About />
                <Contacts />
                <Navigation />
            </div>
            <div className='footer__copyright'>
                <p className='footer__copyright_text'>&copy; CookieShop. Все права защищены</p>
            </div>
        </footer>
    )
}
