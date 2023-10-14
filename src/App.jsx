import { useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import MenuButton from './components/Menu/MenuButton';

function App() {
    function click(e) {
        console.log(e.target);
    }

    return (
        <main className='container'>
            <Menu>
                <MenuButton>Sports</MenuButton>
            </Menu>
        </main>
    )
}

export default App
