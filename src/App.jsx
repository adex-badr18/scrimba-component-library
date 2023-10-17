import './App.css';
import Menu from './components/Menu/index';
import Star from './components/Star';
import Box from './components/Box';
import Avatar from './components/Avatar';

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

            <hr />

            <Avatar src='/dp-bg.png' alt='Badrudeen' />
            <Avatar>AZ</Avatar>
            <Avatar />
        </main>
    )
}

export default App
