import React from 'react'


const SidebarContact = ({ contact }) => {

    let { title, text, link, logo } = contact;

    return (
        <div className='sidebar-blog mb-4'>
            <div className='pr-4'>
                <p className='publish-date mb-0 fz-large' title='Publish Date'><i className={logo}></i> </p>
            </div>
            <div>
                {link ? <a href={link} target='_blank' rel="noreferrer"><h4 className='heading-tertiary'>{title}</h4></a> : <h4 className='heading-tertiary'>{title}</h4>}
                <p className='d-flex align-items-center mb-0'>{text}</p>
            </div>
        </div>
    )
}

export default SidebarContact
