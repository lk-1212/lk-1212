import React from 'react'
import { ABOUT_ME, NAME } from './constants'

const AboutMe = ():React.ReactElement => {
    const renderName = (): React.ReactElement => {
        return(
            <div className='text-[100px]'>
                <p>{NAME}</p>
            </div>
        )
    }

    const renderaAbout = (): React.ReactElement => {
        return <div className='text-3xl' dangerouslySetInnerHTML={{__html: ABOUT_ME}} />
    }
    return(
        <div className='flex flex-col items-center'>
            {renderName()}
            {renderaAbout()}
        </div>
    )
}
export default AboutMe