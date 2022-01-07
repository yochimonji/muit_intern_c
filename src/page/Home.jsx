import "bootstrap/dist/css/bootstrap.min.css";
//import Card from 'react-bootstrap/Card';

import { Button, Navbar, Stack, Container, Card, Form, FormControl, Row, Col, ListGroup, ListGroupItem, Nav, NavDropdown } from 'react-bootstrap';



const Home = () => {
    //return <h2>Home</h2>
    //return <h2>{to_json[0].sentence}</h2>   //to_json[0].sentence　もしくは　to_json[0]['sentense']で可能

    var list = [];

    list.push(<style>{inline}{marginB}</style>);//{iconcss}

    var bgcss = 'body {background-image: url("/defaltback.jpg");background-size: cover;background-attachment: fixed;}';

    list.push(<style>{bgcss}</style>);//壁紙の設定
    list.push(<style>{inputcss}</style>);
    list.push(<><Bar /><ImgHeader path="/manyfriends.jpg" /></>)



    //検索欄
    list.push(

        <span className="inline" >
            <Form><Form.Control className='inputcss' type="email" placeholder="絞り込み" /></Form>
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <Button variant="secondary">Submit</Button>
                    <Button variant="outline-danger">Reset</Button>
                </Navbar.Brand>
            </Navbar>
        </span>

    );


    //各投稿
    var listB = getDatas.map((inf, num) => {
        return <PostLists roomid={inf.roomid} title={inf.title} userid={inf.userid} date={inf.date} sentence={inf.sentence} num={num} />
    });

    list.push(
        <>{listB}</>)
    return list
}


export default Home;

//-------------------------------------------------------------------------------


//ヘッダー
function ImgHeader(props) {
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={props.path} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>"出会い"を選びましょう</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

const marginB = '.marginB{margin-bottom:30px;}';

const inline = ".inline" + '{' + `
    display:inline};
`


const inputcss = ".inputcss" + '{' + `
    
    padding: 10px 15px; 
    font-size: 16px;
    border-radius: 3px; 
    border: 2px solid #ddd;
    box-sizing: border-box;
}`;


function Bar(props) {
    return (
        <p className="fixed-top">
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img
                            alt=""
                            src="/logo192.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />MUIT APP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">MyPage</Nav.Link>
                            <Nav.Link href="#action2">Rooms</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </p>
    )
}

function PostLists(props) {
    return (

        <>
            <Card>
                <Card.Body>
                    <Icon number={props.num} /><Card.Text class="inline">ID:{props.userid}</Card.Text>
                    <Card.Title>{props.title}</Card.Title>
                    <Row>
                        <Col>
                            <Card.Text className="inline">日時:{props.date}</Card.Text>
                        </Col>
                        <Col xs={6}>
                            <Button className="inline" variant='outline-primary'>詳しく見る</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <p className='marginB' />
        </>
    )
}

function Icon(props) {//cname=className(cssを適用させるため) number=画像引っ張ってくるときi.jpgを選択する
    var myName = 'icon' + props.number;
    var thiscss = '.' + myName + '{background-image:url("/icons/' + props.number + '.JPG");' + `
            width:  64px;  
            height: 64px; 
            border-radius: 50%;
            background-position: left top; 
            display:inline}
        `
    return (
        <>
            <style>{thiscss}</style><button key={myName} className={myName}></button>
        </>
    )
};



const getDatas = [
    { 'roomid': "01", "userid": "user1", "date": "date1", "title": "記事1", "sentence": "中身１" },
    { 'roomid': "02", "userid": "user2", "date": "date2", "title": "記事2", "sentence": "中身2" },
    { 'roomid': "03", "userid": "user3", "date": "date3", "title": "記事3", "sentence": "中身3" },
    { 'roomid': "04", "userid": "user4", "date": "date4", "title": "記事4", "sentence": "中身4" },
    { 'roomid': "05", "userid": "user4", "date": "date4", "title": "一緒につりにいきたい人！！！！！", "sentence": "中身4" },

]
