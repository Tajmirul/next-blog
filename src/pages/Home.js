import React, { Component } from 'react';
import Hero from '../components/Hero';
import BannerSlider from '../components/BannerSlider';
import { BlogContext } from '../context';
import Topics from '../components/Topics';
import { Col, Container, Row } from 'reactstrap';
import PopularBlogs from '../components/PopularBlogs';
import BlogContainer from '../components/BlogContainer';
import SidebarItem from '../components/SidebarItem';
import SidebarBlogs from '../components/SidebarBlog';
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';


class Home extends Component {
    render() {
        const { blogs, recentBlogs, popularBlogs, topics } = this.context;

        return (
            <>
                <Hero hero='slider-hero'>
                    <BannerSlider recentBlogs={recentBlogs} />
                </Hero>
                <Topics topics={topics} />

                <PopularBlogs popularBlogs={popularBlogs} />

                <section className='main-blogs-section pb-80'>
                    <Container>
                        <h2 className='section-heading mb-5'><span>Our Stories</span></h2>

                        <Row>
                            <Col lg={8}>
                                <BlogContainer blogs={blogs} />
                            </Col>
                            <Col lg={4}>
                                <div className='side-bar'>
                                    <SidebarItem title='About Me'>
                                        <p className='text-center'>An effective short Tinder profile captures her imagination in just a few words, then lets her get back to appreciating your photos. But it is deceptively hard to pull off – fewer words does not equal less work. If anything, making yourself sound attractive in just a couple words is pretty darn difficult.</p>

                                        <div className='social-links'>
                                            <a href='https://facebook.com/akhand.tajmirul/' target='_blank' rel="noreferrer" ><FaFacebookF /></a>
                                            <a href='https://facebook.com/akhand.tajmirul/' target='_blank' rel="noreferrer" ><FaTwitter /></a>
                                            <a href='https://facebook.com/akhand.tajmirul/' target='_blank' rel="noreferrer" ><BiWorld /></a>
                                            <a href='https://facebook.com/akhand.tajmirul/' target='_blank' rel="noreferrer" ><FaGithub /></a>
                                            <a href='https://facebook.com/akhand.tajmirul/' target='_blank' rel="noreferrer" ><FaYoutube /></a>
                                        </div>
                                    </SidebarItem>

                                    <SidebarItem title='Recent Blogs'>
                                        {recentBlogs.map(blog => <SidebarBlogs key={blog.id} blog={blog} />)}
                                    </SidebarItem>

                                    <SidebarItem title='Popular Blogs'>
                                        {popularBlogs.map(blog => <SidebarBlogs key={blog.id} blog={blog} />)}
                                    </SidebarItem>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
};

Home.contextType = BlogContext;

export default Home
