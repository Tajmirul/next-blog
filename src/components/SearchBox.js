import React, { useContext, useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { BlogContext } from '../context';


const SearchBox = ({ children, placeholder, className, inputType, color, formType, searchTerm }) => {
    const { getSearch, inputChange } = useContext(BlogContext);

    return (
        <div className={`search-box ${className || ''}`}>
            <Form onSubmit={formType === 'search' ? getSearch : null } autoComplete='off'>
                <FormGroup>
                    <input className={color} type={inputType} name={inputType} value={searchTerm} onChange={(e) => inputChange(e.target.value)} placeholder={placeholder} required={formType === 'search' ? false : true} />
                    <button className={color} type='submit'>{children}</button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default SearchBox
