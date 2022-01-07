import { Button, Navbar, Card, Form, Row, Col } from 'react-bootstrap';

const Home = () => {
    //return <h2>Home</h2>
    //return <h2>{to_json[0].sentence}</h2>   //to_json[0].sentence　もしくは　to_json[0]['sentense']で可能

    var list = [];

    list.push(<style>{inline}{marginB}</style>);//{iconcss}

    var bgcss = 'body {background-image: url("/defaltback.jpg");background-size: cover;background-attachment: fixed;}';

    list.push(<style>{bgcss}</style>);//壁紙の設定
    list.push(<style>{inputcss}</style>);
    list.push(<><ImgHeader path="/manyfriends.jpg" /></>)



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
