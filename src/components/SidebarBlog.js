import React from 'react'
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const SidebarBlogs = ({ blog }) => {
    let { title, writer, slug, publishDate } = blog;
    publishDate = new Date(publishDate).getDate();

    return (
        <div className='sidebar-blog mb-4'>
            <div className='pr-4'>
                <p className='publish-date mb-0' title='Publish Date'><Link to={`/blogs/${slug}`}>{publishDate > 8 ? publishDate : `0${publishDate}`}</Link> </p>
            </div>
            <div>
                <h4 className='heading-tertiary'><Link to={`/blogs/${slug}`}>{title}</Link></h4>
                <p className='d-flex align-items-center mb-0'><FaRegUser className='mr-3' /> {writer}</p>
            </div>
        </div>
    )
}

export default SidebarBlogs
