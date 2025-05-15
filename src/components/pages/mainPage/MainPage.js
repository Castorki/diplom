import React from 'react'
import { Serching } from './Serching'
import { NewsProduct } from './NewProducts'

export const MainPage = () => {
    return (
        <div className='mainPage'>
            <Serching />
            <NewsProduct />
        </div>
    )
}
