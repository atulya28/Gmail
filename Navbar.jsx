import React from 'react'
import menu from './menu.png'
import gmail from './gmail2.png'
import search from './search.png'
import Sidebar from './Sidebar';
import Inbox from './Inbox';
import Compose from './Compose';

export default function Navbar() {
    return (
        <main>
            <div className='navbar'>
                <div className='logo'>
                    <img src={menu} className='logo_img' onClick={() => { }} />
                    <img src={gmail} className='gmail_img' />
                    <p>Gmail</p>
                </div>
                <div className='search'>
                    <img src={search} className='search_img' />
                    <input placeholder='Search mail' />
                </div>
                <div className='user'>
                    <img src={localStorage.getItem('photo')} className='user_img' />
                </div>
            </div>
            <div className="main_items">
                <Sidebar />
            </div>
        </main>
    )
}
