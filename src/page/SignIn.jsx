import { useState } from "react"
import { Button, Container, Card, Form, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const SignIn = (props) => {
    const [userid, setUserid] = useState("");;
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleChangeUserid = (e) => {
        setUserid(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleClick = () => {
        if (!(userid && password)) return
        props.setCurrentUserId(userid)
        history.push("/", {currentUserId: userid});
    }

    return (
        <Container>
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
                    <Form.Control type='text' value={userid} onChange={handleChangeUserid} placeholder="Enter userID" />
                    <Form.Text className="text-muted">
                        このIDはこのサービス内でのみ利用されます.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={handleChangePassword} placeholder="Password" />
                </Form.Group>
            </Form>

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
                        <Button variant="primary" size="lg" onClick={handleClick}>login</Button>
                    </Col></Row>
                </Card.Body>
            </Card>
            </div>
        </Container>
    )
}

const right = '.right{text-align:right;}';

export default SignIn;