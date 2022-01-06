import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card } from 'react-bootstrap';


class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e){
        this.setState({
            text: e.target.value
        })
    }

    handleClick(){
        this.props.history.push({
            pathname: "/",
            state: { text: this.state.text }
        });
    }

    render() {
        return [
            <pre><h2>       ログイン</h2></pre>,
            <br />,
            <br />,
            <nobr><pre><h5> UserID    <input type='text' value={this.state.text} maxLength={8} onChange={this.handleChange}></input></h5></pre></nobr>,
            <nobr><pre><h5> Password  <input type="text" /></h5></pre></nobr>,
            <br />,
            <br />,
            <br />,
            <br />,
            <pre><h5> 新規の方はこちらから</h5></pre>,
            <pre>        <button>sign in</button>               <button onClick={this.handleClick}>login</button></pre>, 
        ]
    }
}

export default withRouter(SignIn)