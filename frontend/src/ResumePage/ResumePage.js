import React from 'react';
import './ResumePage.css';
import { BiPin } from "react-icons/bi";

const ResumePage = () => {
    return (
        <div className='ResumePage'>
            <BiPin className='Pin' />
            <iframe className='Resume' src="https://docs.google.com/document/d/e/2PACX-1vS7lOAtXDWgyUpB7J33ThwBC6znAVqlR4ewv6rEJSDManW0h4-L4ezp3riyY8NWN_O4yUVW3NfTeesl/pub?embedded=true"></iframe>        </div>
    )
}

export default ResumePage;