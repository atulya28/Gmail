import React, { useState, useEffect } from 'react'
import { MdInbox } from 'react-icons/md'
import MainMails from './MainMails'
import axios from './axios.mjs'
import Navbar from './Navbar'
import Compose from './Compose'

export default function Inbox() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/emails').then((res) => {
            setData(res.data)            
        })
    }, [data])

    return (
        <>
        <Navbar />
        <div className='mails'>
            <div className="tabs">
                <div className="primary_tab">
                    <MdInbox color='#e50000' className='primary_icon' />
                    <p className="primary_text">Primary</p>
                </div>
            </div>
            <div className="all_mails">
                {data.map((item) => (
                    item.recieverEmail == localStorage.getItem('email') && <MainMails subject={item.subject} name={item.userName} content={item.content} date={item.date} id={item._id} photo={item.photo}/>
                ))}
            </div>
        </div>
        <Compose />
        </>
    )
}
