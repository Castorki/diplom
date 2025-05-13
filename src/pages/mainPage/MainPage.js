import React from 'react'
import { Serching } from './Serching'
import { PopularCategories } from './PopularCategories'

export const MainPage = () => {
    return (
        <div className='mainPage'>
            <Serching />
            <PopularCategories />
        </div>
    )
}
