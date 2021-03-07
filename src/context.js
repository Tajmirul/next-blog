import React, { Component } from 'react';
import client from './client';
import marked from 'marked';

import reactjs from './images/topics/reactjs.jpg';
import nature from './images/topics/nature.jpg';
import food from './images/topics/food.jpg';
import hills from './images/topics/hills.jpg';
import life from './images/topics/life.jpg';
import { BiWindowOpen } from 'react-icons/bi';
import axios from 'axios';


const BlogContext = React.createContext();

class BlogProvider extends Component {
    state = {
        blogs: [],
        recentBlogs: [],
        popularBlogs: [],
        searchedBlogs: [],
        users: [],
        topics: [],
        categories: [],
        contacts: [],
        socialContacts: [],
        errors: [],
        singleBlog: {},
        error: null,
        searchTerm: '',
        searching: false,
        loading: true,
    };

    componentDidMount() {
        this.getUsers();
        this.getCategories();
        this.getBlogs();
    }

    getBlogs = () => {
        axios.get('https://lifeexpart.site/api/newspaper-v1/posts/')
            .then(response => {
                this.setState({ blogs: this.filterData(response.data) });
                this.recentBlogs();
                this.popularBlogs();
            })
            .catch(error => {
                this.setState({ error: error });
            })
            .finally(() => {
                this.setState({ loading: false });
            })
    }

    getUsers = () => {
        axios.get('https://lifeexpart.site/api/newspaper-v1/users/')
            .then(res => {
                this.setState({ 'users': res.data });
            })
            .catch(console.error)
    }

    getSearch = (e) => {
        e.preventDefault();
        this.setState({ searching: true });

        client.getEntries({ 'content_type': 'blogPost' })
            .then(response => {
                console.log(response.items);
                let blogs = this.filterData(response.items);
                blogs = blogs.filter(blog => blog.title.toLowerCase().includes(this.state.searchTerm) || blog.tags.includes(this.state.searchTerm));
                this.setState({ searchedBlogs: blogs, searching: false, });
            })
            .catch(error => {
                this.setState({ error: true, searching: false, });
            })
    };

    filterData = (blogs) => {
        let tempBlog = blogs.map(blog => {
            const heroImage = 'http://lifeexpart.site/' + blog.image;
            const author = this.state.users.find(user => user.id === blog.user_id);
            const publishDate = blog.created_at.match(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/);
            const category = this.state.categories.find(category => category.id === blog.category_id);
            return { ...blog, author, category, publishDate, heroImage };
        });
        return tempBlog;
    };

    getCategories = () => {
        axios.get('https://lifeexpart.site/api/newspaper-v1/categories/')
            .then(res => {
                this.setState({ 'categories': res.data.data })
            })
            .catch(console.error)

        // console.log(this.state.tags)
    }

    getContacts = () => {
        this.setState({
            contacts: [
                {
                    title: 'London City ,Uk',
                    text: 'crest of london',
                    logo: 'fas fa-map-marker-alt',
                },
                {
                    title: 'abc@gmail.com',
                    text: 'contact by email',
                    link: 'https://facebook.com/akhand.tajmirul',
                    logo: 'fas fa-envelope',
                },
                {
                    title: '+8801 2345 54563',
                    text: '24/7 support',
                    logo: 'fas fa-phone-alt',
                },
                {
                    title: 'www.example.com',
                    text: 'visit our website',
                    link: 'https://facebook.com/akhand.tajmirul',
                    logo: 'fab fa-chrome',
                },
            ],
            socialContacts: [
                {
                    title: 'Facebook',
                    text: '22k Fans',
                    link: 'https://facebook.com/akhand.tajmirul',
                    logo: 'fab fa-facebook-f',
                },
                {
                    title: 'Twitter',
                    text: '12k Fans',
                    link: 'https://facebook.com/akhand.tajmirul',
                    logo: 'fab fa-twitter',
                },
                {
                    title: 'Youtube',
                    text: '5k Subscribers',
                    link: 'https://facebook.com/akhand.tajmirul',
                    logo: 'fab fa-youtube',
                },
            ]
        })
    }

    recentBlogs = () => {
        const recentBlogs = this.state.blogs.filter((blog, index) => index < 3);

        this.setState({
            recentBlogs: recentBlogs
        })
    }

    popularBlogs = () => {
        const popularBlogs = this.state.blogs.filter(blog => {
            return blog.click
        });
        this.setState({ popularBlogs: popularBlogs, });
    }

    topics = () => {
        this.setState({
            topics: [
                {
                    name: 'React Js',
                    image: reactjs
                },
                {
                    name: 'Nature',
                    image: nature
                },
                {
                    name: 'Food',
                    image: food
                },
                {
                    name: 'Hills',
                    image: hills
                },
                {
                    name: 'Life',
                    image: life
                },
                {
                    name: 'Food',
                    image: food
                },
                {
                    name: 'Nature',
                    image: nature
                },
                {
                    name: 'Food',
                    image: food
                },
                {
                    name: 'Hills',
                    image: hills
                },
            ]
        })
    }

    inputChange = (term) => {
        this.setState({
            searchTerm: term.toLowerCase().trim(),
        })
    }

    render() {
        const values = {
            ...this.state,
            getSearch: this.getSearch,
            getSingleBlog: this.getSingleBlog,
            inputChange: this.inputChange,
        };

        return (
            <BlogContext.Provider value={{ ...values }}>
                {this.props.children}
            </BlogContext.Provider>
        );
    };
};

const BlogConsumer = BlogContext.Consumer;

export { BlogContext, BlogProvider, BlogConsumer };

// ! Blog structure: 
// const blog = {
//     id: 'number',
//     publishDate: 'date',
//     title: 'string',
//     slug: 'slug',
//     tags: 'array',
//     topics: [],
//     writer: 'string',
//     heroImage: 'image',
//     description: 'text',
//     body: 'text'
// }