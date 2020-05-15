import React, { Component } from 'react';

class LifeCycle extends Component {

    //1. get default props

    //2. set default state
    state = {
        title : 'Life cycles'
    }

    //3. before render
    componentWillMount(){
        console.log('3 before render')
    }

    //5. after render
    componentDidMount(){
        console.log('5 after render')
        document.querySelector('h1').style.color = 'green'
    }

    componentWillUpdate(){
        console.log('before update will update');
    }

    componentDidUpdate(){
        console.log('after update did update');
        
    }

    //4. render jsx
    render() {
        console.log(this.props)
        console.log('4 render')
        return (
            <div style={{
                padding : '40px 30px',
                borderBottom : '2px solid black'
            }}>
                <h1>{this.state.title}</h1>
                <div onClick={() => this.setState({
                    title : 'something change'
                }) } >Change data</div>
                
            </div>
        );
    }
}

export default LifeCycle;