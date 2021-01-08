import React, { useContext, useState } from 'react';
import { BiWorld } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Col, Container, Row } from 'reactstrap';
import Banner from '../components/Banner';
import BannerBg from '../components/BannerBg';
import BlogContainer from '../components/BlogContainer';
import Hero from '../components/Hero';
import SearchBox from '../components/SearchBox';
import SidebarBlogs from '../components/SidebarBlog';
import SidebarItem from '../components/SidebarItem';
import { BlogContext } from '../context';
import commonBg from '../images/title-section.jpg';


const Blogs = () => {
    const { blogs, recentBlogs, popularBlogs, searchedBlogs } = useContext(BlogContext);

    return (
        <>
            <Hero hero='single-blog-banner'>
                <BannerBg image={commonBg}>
                    <Banner>
                        <SearchBox placeholder='Search for blog ...' inputType='text' color='text-black' formType='search' >
                            <BsSearch />
                        </SearchBox>
                    </Banner>
                </BannerBg>
            </Hero>

            <div>
                <div className='py-80'>
                    <Container>
                        <Row className='contact'>
                            <Col lg={8}>
                                <BlogContainer blogs={searchedBlogs.length > 0 ? searchedBlogs : blogs} />
                            </Col>
                            <Col lg={4}>
                                <div className=''>
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

                                        <SidebarItem title='Recent Blogs'>
                                            {popularBlogs.map(blog => <SidebarBlogs key={blog.id} blog={blog} />)}
                                        </SidebarItem>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Blogs
