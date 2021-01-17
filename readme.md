# Too many re-renders. React limits the number of renders to prevent an infinite loop

I am trying to get some data from API and then set the state. Like bellow:

    import React, { Component } from 'react';
    import client from './client';

    class BlogProvider extends Component {

    state = {
        blogs: [],
        recentBlogs: [],
        popularBlogs: [],
        searchedBlogs: [],
        topics: [],
        contacts: [],
        socialContacts: [],
        searchTerm: '',
        searching: false,
        loading: true,
        error: null,
    };

    componentDidMount () {
        client.getEntries({ 'content_type': 'blogPost' })
            .then(response => {
                const allBlogs = this.filterData(response.items);
                const recentBlogs = this.recentBlogs();
                const popularBlogs = this.popularBlogs();
                const topics = this.topics();
                const { contacts, socialContacts } = this.getContacts();

                console.log(allBlogs);

                this.setState({
                    blogs: allBlogs,
                    recentBlogs: recentBlogs,
                    popularBlogs: popularBlogs,
                    topics: topics,
                    contacts: contacts,
                    socialContacts: socialContacts,
                    loading: false
                });
            })
            .catch(error => {
                this.setState({ error: error, loading: false });
            });
        }

        render() {
            return (...);
        };
    }

```this.setState({...})``` is occurs an error:
```**Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.```

I did not understand why this happens
