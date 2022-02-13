import React, { useState, useEffect } from 'react'
import { MdInbox } from 'react-icons/md'
import MainMails from './MainMails'
import sentaxios from './sentaxios.mjs'
import Navbar from './Navbar'
import Compose from './Compose'

export default function Sent() {
    const [data, setData] = useState([])

    useEffect(() => {
        sentaxios.get('/sent').then((res) => {
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
                    (item.userName == localStorage.getItem('name')) && <MainMails subject={item.subject} name={item.userName} content={item.content} id={item._id} date={item.date} photo={item.photo}/>
                ))}
            </div>
        </div>
        <Compose />
        </>
    )
}


