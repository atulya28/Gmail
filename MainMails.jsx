import React from 'react'
import axios from './axios.mjs'
import sentaxios from './sentaxios.mjs'

export default function MainMails({ name, subject, content, date, id, photo }) {
    return (
        <main className='mail_main'>
            <div className='main_mail'>
                <input type="checkbox" className="del" onChange={async () => {
                    if (window.location.href.includes('inbox')) {
                        await axios.delete('/emails/' + id)
                    }
                    if (window.location.href.includes('sent')) {
                        await sentaxios.delete('/sent/' + id)
                    }
                    alert('Selected')
                }} />
                <div className="email_main_items" onClick={() => {
                    window.localStorage.setItem('email_name', name)
                    window.localStorage.setItem('email_subject', subject)
                    window.localStorage.setItem('email_content', content)
                    window.localStorage.setItem('email_date', date)
                    localStorage.setItem('email_photo', photo)

                    if (window.location.href.includes('inbox')) {
                        window.localStorage.setItem('mail_id', id)
                        window.location.href = '/home/inbox/' + id
                    }
                    if (window.location.href.includes('sent')) {
                        window.localStorage.setItem('mail_id', id)
                        alert(id)
                        window.location.href = '/home/sent/' + id
                    }
                }}>
                    <p className="mail_name">{name}</p>
                    <p className="mail_title">{subject.slice(0, 18)}</p>
                    <p className="mail_content">- {content.slice(0, 95)}</p>
                    <p className="mail_date">{date}</p>
                </div>

            </div>
        </main>
    )
}
