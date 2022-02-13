import React from 'react'
import Navbar from './Navbar'

export default function InboxMail() {
    return (
        <main className='main_inbox'>
            <Navbar />
            <div className="inbox_mail_layout">
                <div className="email_header_items">
                    <p className="email_subject">{localStorage.getItem('email_subject')}</p>
                    <p className="email_inbox">Inbox</p>
                </div>
                <div className="email_middle">
                    <div className="email_middle_main">
                        <img src={localStorage.getItem('email_photo')} alt="" className="email_photo" />
                        <p className="email_name">{localStorage.getItem('email_name')}</p>
                    </div>
                    <p className="email_date">{localStorage.getItem('email_date')}</p>
                </div>
                <p className="email_content">{localStorage.getItem('email_content')}</p>
            </div>
        </main>
    )
}
