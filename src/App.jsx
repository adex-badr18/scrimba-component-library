import { useState } from 'react';
import './App.css';
import Menu from './components/Menu/index';
import { Toggle } from './components/Toggle/index';
import { BsStar, BsStarFill } from 'react-icons/bs';

function App() {
    const sports = ["Home", "Products", "Services", "About", "Contact",];

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

            <Toggle>
                <Menu>
                    <Toggle.Button>
                        <Menu.Button>Menu</Menu.Button>
                    </Toggle.Button>

                    <Toggle.On>
                        <Menu.Dropdown>
                            {sports.map(sport => {
                                return <Menu.Item key={sport}>{sport}</Menu.Item>
                            })}
                        </Menu.Dropdown>
                    </Toggle.On>
                </Menu>
            </Toggle>
        </main>
    )
}

export default App
