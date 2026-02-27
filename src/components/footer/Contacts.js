import React from 'react'

export const Contacts = () => {
    return (
        <div className='contacts'>
            <h3 className='contacts_name'>Контакты</h3>
            <p className='contacts_info'>
                <img className='contacts_img' src='./phone.png' alt=''></img>
                {'+375(44)123-45-67'}
            </p>
            <p className='contacts_info'>
                <img className='contacts_img' src='./email.png' alt=''></img>
                CookieShop__Support@gmail.com
            </p>
            <p className='contacts_info'>
                <img className='contacts_img' src='./location.png' alt=''></img>
                г.Минск, ул. Правды, д. 18
            </p>
        </div>
    )
}
