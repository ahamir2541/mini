import React, { Component } from 'react';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import NewList from '../Components/Header/NewList'

import JSON from '../resource/json/db.json.json'

class Layout extends Component {

    state = {
        news : JSON,
        filtered : []
    }

    getKewords = (event) => {
        // console.log(event.target.value)
        let value = event.target.value
        let keyword = value
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keyword) > -1
        })
        this.setState({
            filtered
        })
        // console.log(filtered)
    }

    render() {
        let newsFiltered = this.state.filtered
        let wholeNes = this.state.news
        return (
            <div>
                <Header keywords={this.getKewords} /> 
                <NewList news={newsFiltered.length === 0 ? wholeNes : newsFiltered } />
                <div>
                    {this.props.children}
                </div>
                {/* <Footer/> */}
            </div>
        );
    }
}

export default Layout;