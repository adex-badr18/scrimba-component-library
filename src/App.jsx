import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
    function click(e) {
        console.log(e.target);
    }

    return (
        <main className='container'>
            <Button size='lg' onClick={click}>Menu</Button>
        </main>
    )
}

export default App
