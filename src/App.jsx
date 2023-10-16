import { useState } from 'react';
import './App.css';
import Menu from './components/Menu/index';
import { Toggle } from './components/Toggle/index';
import Star from './components/Star';
import Box from './components/Box';

function App() {
    const menus = ["Home", "Products", "Services", "About", "Contact",];

    return (
        <main className='container'>
            <Star />

            <hr />

            <Box />

            <hr />

            <Menu onOpen={() => console.log('Menu toggled')}>
                <Menu.Button>Menu</Menu.Button>
                <Menu.Dropdown>
                    {menus.map(menu => {
                        return <Menu.Item key={menu}>{menu}</Menu.Item>
                    })}
                </Menu.Dropdown>
            </Menu>
        </main>
    )
}

export default App
