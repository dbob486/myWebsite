import React from 'react';
import './ResumePage.css';
import {
    isBrowser
} from "react-device-detect";
import { BiPin } from "react-icons/bi";

const ResumePage = () => {
    if (isBrowser) {
        return (
            <div className='ResumePage'>
                <BiPin className='Pin' />
                <iframe className='Resume' title='Daniel-Garcia-Desktop-Resume' src="https://docs.google.com/document/d/e/2PACX-1vS7lOAtXDWgyUpB7J33ThwBC6znAVqlR4ewv6rEJSDManW0h4-L4ezp3riyY8NWN_O4yUVW3NfTeesl/pub?embedded=true"></iframe>
            </div>
        )
    }
    else {
        return (
            <div className='ResumePage'>
                <BiPin className='Pin' />
                <iframe className='Resume' title='Daniel-Garcia-Mobile-Resume' src="https://docs.google.com/document/d/e/2PACX-1vRvTGKVFKC-n7GGWJrXHQDU3rbmkRv68WLGDEiDiGTfB7Mwa9XCiKXZBBV2VpIgD5bUoWQF1mNwE0St/pub?embedded=true"></iframe>
            </div>
        )
    }

}

export default ResumePage;