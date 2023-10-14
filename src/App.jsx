import { useState } from 'react';
import './App.css';
import Menu from './components/Menu/index';

function App() {
    const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

    return (
        <main className='container'>
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
