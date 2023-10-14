import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
    function click(e) {
        console.log(e.target);
    }

    return (
        <main className='container'>
            <Button size='sm' onClick={click}>Menu</Button>
            {/* <Button onClick={click}>Menu</Button>
            <Button size='lg' onClick={click}>Menu</Button>
            <Button variant='success' onClick={click}>Menu</Button>
            <Button variant='warning' onClick={click}>Menu</Button>
            <Button variant='danger' onClick={click}>Menu</Button> */}
        </main>
    )
}

export default App
