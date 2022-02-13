import React from 'react'
import plus from './plus.jpg'
import { Link } from 'react-router-dom'
import { MdInbox } from 'react-icons/md'
import { IoMdSend } from 'react-icons/io'

export default function Sidebar() {
    return (
        <div className='sidebar' id='side'>
            <div className="compose" onClick={() => {
            document.getElementById('compose_main_id').style.display = 'block'
            }}>
                <img src={plus} className='compose_img' />
                <button className='compose_btn'>Compose</button>
            </div>
            <Link to='/home/inbox' style={{ textDecoration: 'none' }} onClick={() => {
                document.getElementById('in').style.background = '#ffffff57'
                document.getElementById('out').style.background = 'none'
            }}>
                <div className="inbox" id='in'>
                    <MdInbox color='white' className='inbox_icon' />
                    <p className='inbox_name'>Inbox</p>
                </div>
            </Link>
            <Link to='/home/sent' style={{ textDecoration: 'none' }}>
                <div className="sent" id='out' onClick={() => {
                    document.getElementById('out').style.background = '#ffffff57'
                    document.getElementById('in').style.background = 'none'
                }}>
                    <IoMdSend color='white' className='sent_icon' />
                    <p className='sent_name'>Sent</p>
                </div>
            </Link>
        </div>
    )
}
