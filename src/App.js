import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import SingleBlog from './pages/SingleBlog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { BlogContext } from './context';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Error from './components/Error';


class App extends Component {
    render() {
        const { loading, error } = this.context;

        if (loading) {
            return <Loading />
        }

        if (error) {
            return <Error error={error} />
        }

        return (
            <>
                <Navbar />

                <main>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/blogs' component={Blogs} />
                        <Route exact path='/blogs/:slug' component={SingleBlog} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact component={NotFound} />
                    </Switch>
                </main>

                <Footer />
            </>
        )
    }
}
App.contextType = BlogContext;

export default App;
