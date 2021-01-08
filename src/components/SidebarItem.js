import React from 'react';

const SidebarItem = ({ children, title }) => {
    return (
        <div className='bg-white px-4 py-25 sidebar-item mb-5'>
            <div className='text-center'><h3 className='heading-secondary sidebar-item-title'>{title}</h3></div>
                
            {children}
        </div>
    )
}

export default SidebarItem
