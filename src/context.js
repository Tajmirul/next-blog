import React, { Component } from 'react';
import client from './client';
import marked from 'marked';

import reactjs from './images/topics/reactjs.jpg';
import nature from './images/topics/nature.jpg';
import food from './images/topics/food.jpg';
import hills from './images/topics/hills.jpg';
import life from './images/topics/life.jpg';
import { BiWindowOpen } from 'react-icons/bi';


const BlogContext = React.createContext();

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

    componentDidMount() {
        client.getEntries({ 'content_type': 'blogPost' })
            .then(response => {
                this.setState({ blogs: this.filterData(response.items) });
                this.recentBlogs();
                this.popularBlogs();
                this.topics();
                this.getContacts();

                this.setState({ loading: false })
            })
            .catch(error => {
                this.setState({ error: error });
                this.setState({ loading: false })
            })
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
            const id = blog.sys.id;
            const heroImage = blog.fields.heroImage.fields.file.url;
            const body = marked(blog.fields.body);
            const publishDate = blog.fields.publishDate.match(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/);
            return { ...blog.fields, body, publishDate, id, heroImage }
        });
        return tempBlog;
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
        const popularBlogs = this.state.blogs.filter(blog => blog.popular)
        this.setState({ popularBlogs: popularBlogs, })
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

    getSingleBlog = (slug) => {
        const blog = this.state.blogs.find(blog => blog.slug === slug);
        return blog;
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