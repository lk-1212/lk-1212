import React from 'react'
import { SOCIALS } from './constants'
import Link from 'next/link'

const Contacts = () => {
    const renderSocials = () => {
        const getSocials = SOCIALS.map((contactItem, index) => {
            return(
                <div className='p-4' key={index}>
                    <Link href={contactItem.link}>
                        <img src={contactItem.icon} width={50} height={50} alt={contactItem.platform}/>
                    </Link>
                </div>
            )
        })
        return getSocials
    }
    return(
        <div className='flex items-center justify-center'>
            {renderSocials()}
        </div>
    )
}

export default Contacts