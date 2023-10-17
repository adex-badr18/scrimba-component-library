import { useState } from 'react';
import { Toggle } from './Toggle/index';
import useToggle from '../hooks/useToggle';
import { BsStar, BsStarFill } from 'react-icons/bs';

export default function Star({ onChange }) {
    const [on, toggle] = useToggle();

    return (
        <>
            {
                on ?
                    <BsStarFill onClick={toggle} className='star filled' /> :
                    <BsStar onClick={toggle} className='star' />
            }
        </>
    )
}