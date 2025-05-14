import React from 'react'

export const Serching = () => {
    return (
        <div className='top'>
            <div className='top__brand'>
                <h2 className='top__brand_name'>CookieShop</h2>
            </div>
            <div className='top__serch'>
                <img className='top__serch_icon' src='./serch.png'></img>
                <input className='top__serch_input' placeholder='Введите название товара'></input>
            </div>
        </div>
    )
}
