import React, { Component } from 'react';
import Banner from '../components/Banner';
import BannerBg from '../components/BannerBg';
import Hero from '../components/Hero';
import { BlogContext, BlogConsumer } from '../context';
import marked from 'marked';
import { Col, Container, Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import SidebarItem from '../components/SidebarItem';
import SidebarBlogs from '../components/SidebarBlog';
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';


class SingleBlog extends Component {
    constructor(props) {
        super(props);
        this.state = { slug: props.match.params.slug };
    }

    componentDidMount() {
        window.scroll(0, 0);

        this.props.history.listen((location, action) => {
            const slug = location.pathname.split('/').pop();
            this.setState({ slug: slug })
        })
    }
    componentDidUpdate() {
        window.scroll(0, 0);
    }

    updateContent = () => {

    }

    render() {
        const { getSingleBlog } = this.context;
        let { title, writer, heroImage, publishDate, body } = getSingleBlog(this.state.slug);
        document.title = `${title} - Tajmirul Blog`;
        body = marked(body);

        return (
            <>
                <Hero hero='single-blog-banner'>
                    <BannerBg image={heroImage}><Banner /></BannerBg>
                </Hero>

                <div>
                    <Container>
                        <Row className='blog-contents'>
                            <Col xs={12}>
                                <div className='mb-4'>
                                    <h2 className='heading-primary'>{title}</h2>
                                    <h4 className='heading-tertiary text-off-white'>{writer} &nbsp;-&nbsp; {publishDate}</h4>
                                </div>
                            </Col>

                            <Col lg={8}>
                                <div className=''>
                                    <div className='all-content'>
                                        <p dangerouslySetInnerHTML={{ __html: body }}></p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='mt-md-130'>
                                    <BlogConsumer>
                                        {({ recentBlogs, popularBlogs }) => {
                                            return (
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
                                            )

                                        }}
                                    </BlogConsumer>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </>
        )
    }
}
SingleBlog.contextType = BlogContext;

export default withRouter(SingleBlog);
