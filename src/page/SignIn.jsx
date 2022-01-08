import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Navbar, Card, Form, Row, Col } from 'react-bootstrap';
//import { Card } from 'react-bootstrap';
//import { Form } from 'react-bootstrap';
//import { Row } from 'react-bootstrap';
//import { Col } from 'react-bootstrap';
//import { Button } from 'react-bootstrap';
//import { Navbar } from 'react-bootstrap';
//import { Container } from 'react-bootstrap';


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleClick() {
        this.props.history.push({
            pathname: "/",
            state: { text: this.state.text }
        });
    }

    render() {
        return [
            <>

                <style>{right}</style>


                <Card className='text-center' bg='primary' text='light' border='secondary'>
                    <Card.Body>

                        <Card.Title as='h2'>ログイン</Card.Title>


                    </Card.Body>
                </Card>
                <br /><br /><br />

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>userID</Form.Label>
                        <Form.Control type='text' value={this.state.text} onChange={this.handleChange} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            このIDはこのサービス内でのみ利用されます.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>

                <br /><br /><br /><br /><br /><br /><br />




                <div className="fixed-bottom"><Card>
                    <Card className='text-center'>
                        <Card.Body><Row><Col>
                            <Card.Link href="#">利用規約</Card.Link></Col>
                            <Col>
                                <Card.Link href="#">会社情報</Card.Link></Col></Row>
                        </Card.Body>
                    </Card>

                    <Card.Body><Row><Col>
                        <Button variant="outline-primary" size="lg">sign up</Button></Col>
                        <Col className='right'>
                            <Button variant="primary" size="lg" onClick={this.handleClick}>login</Button>
                        </Col></Row>
                    </Card.Body>
                </Card>
                </div>


            </>



        ]

    }


}

const right = '.right {text - align: right;}';

export default withRouter(SignIn)



/*                <pre><h2>       ログイン</h2></pre>,
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
                */