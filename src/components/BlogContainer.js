import React from 'react';
import Blog from './Blog';


const BlogContainer = ({blogs}) => {
    return (
        <div>
            {blogs.map(blog => <Blog key={blog.id} blog={blog} /> )}
        </div>
    );
};

export default BlogContainer;
