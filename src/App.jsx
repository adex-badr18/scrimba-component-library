import { useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import MenuButton from './components/Menu/MenuButton';
import MenuDropdown from './components/Menu/MenuDropdown';
import MenuItem from './components/Menu/MenuItem';

function App() {
    const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

    return (
        <main className='container'>
            <Menu>
                <MenuButton>Sports</MenuButton>

                <MenuDropdown>
                    {sports.map(sport => {
                        return <MenuItem key={sport}>{sport}</MenuItem>
                    })}
                </MenuDropdown>
            </Menu>
        </main>
    )
}

export default App
