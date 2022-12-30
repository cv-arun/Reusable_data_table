import React, { useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom'
import Button from './button';

function Header({active1,active2}) {
    const navigate=useNavigate()
 
    return (
        <div className='bg-[#1f2937] w-full h-16  flex  justify-end pr-5 gap-5'>
            <span onClick={()=>navigate('/')} className={`my-auto ${active1 && 'ring-2 ring-orange-800 rounded'}`}><Button text={'Page1'} /></span>
            <span onClick={()=>navigate('/screen2')} className={`my-auto ${active2 && 'ring-2 ring-orange-800 rounded'}`}><Button text={'Page2'} /></span>
        </div>
    )
}

export default Header