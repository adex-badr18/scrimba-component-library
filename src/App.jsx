import { useState } from 'react';
import './App.css';
import Menu from './components/Menu/index';
import Star from './components/Star';
import { Toggle } from './components/Toggle/index';
import { BsStar, BsStarFill } from 'react-icons/bs';

function App() {
    const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

    return (
        <main className='container'>
            <Toggle>
                <Toggle.Button>
                    <Toggle.On>
                        <BsStarFill className='star filled' />
                    </Toggle.On>

                    <Toggle.Off>
                        <BsStar className='star' />
                    </Toggle.Off>
                </Toggle.Button>
            </Toggle>

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
