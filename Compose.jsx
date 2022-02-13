import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import axios from './axios.mjs'
import sentaxios from './sentaxios.mjs'

export default function Compose() {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')

    return (
        <div className='compose_main' id='compose_main_id'>
            <div className="compose_header">
                <p className="compose_header_text">New Message</p>
                <IoClose className='compose_icon' onClick={() => {
                    document.getElementById('compose_main_id').style.display = 'none'
                }}/>
            </div>
            <div className="compose_body">
                <input type="text" placeholder='To' className="compose_title" onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
                <input type="text" placeholder='Subject' className="compose_subject" onChange={(e) => {
                    setSubject(e.target.value)
                }}/>
                <textarea className="compose_content" onChange={(e) => {
                    setContent(e.target.value)
                }}/>
                <button className="send_btn" onClick={async () => {
                    let date = new Date()
                    await axios.post('/emails', {userEmail: localStorage.getItem('email'), userName: localStorage.getItem('name'), content: content, subject: subject, recieverEmail: email, date: date.toDateString().slice(4, 10), photo: localStorage.getItem('photo')})

                    await sentaxios.post('/sent', {userEmail: localStorage.getItem('email'), userName: localStorage.getItem('name'), content: content, subject: subject, recieverEmail: email, date: date.toDateString().slice(4, 10), photo: localStorage.getItem('photo')})

                    document.getElementById('compose_main_id').style.display = 'none'
                }}>Send</button>
            </div>
        </div>
    )
}
