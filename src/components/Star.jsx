import { useState } from 'react';
import {BsStar, BsStarFill} from 'react-icons/bs';

export default function Star() {
    const [fill, setFill] = useState(false);

    function toggle() {
        setFill(currentFill => !currentFill);
    }
    
    return (
        fill ?
        <BsStarFill className='star filled' onClick={toggle} /> :
        <BsStar className='star' onClick={toggle} />
    )
}