import { useState } from 'react';
import './App.css';
import Menu from './components/Menu/index';
import Star from './components/Star';

function App() {
    const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

    return (
        <main className='container'>
            <Star />
            
            <hr />
            
            <Menu>
                <Menu.Button>Sports</Menu.Button>

                <Menu.Dropdown>
                    {sports.map(sport => {
                        return <Menu.Item key={sport}>{sport}</Menu.Item>
                    })}
                </Menu.Dropdown>
            </Menu>
        </main>
    )
}

export default App
