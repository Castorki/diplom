import React from 'react'
import { AddressForm } from './AdressForm'
import { Total } from './Total'

export const MakeOrder = () => {
    return (
        <div className='order'>
            <Total />
            <AddressForm />
        </div>
    )
}
