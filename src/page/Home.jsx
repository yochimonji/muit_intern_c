import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
    //return <h2>Home</h2>
    //return <h2>{to_json[0].sentence}</h2>   //to_json[0].sentence　もしくは　to_json[0]['sentense']で可能

    var list = [];
    const newtrim = '.trim1{background-image:url("/manyfriends.jpg");}'

    list.push(<style>{cardspace}}</style>);
    list.push(<style>{iconcss}{inline}{marginB}</style>);

    //list.push(<style>{inline}</style>);
    //list.push(<div class="trim"><img src={"/manyfriends.jpg"} alt={''} /></div>);

    list.push(<style>{newtrim}</style>);
    //list.push(<style>{face1}</style>);
    //list.push(<p class="trim trim1 inline" />);
    //テスト

    //for (var j = 0; j < 25; j++) {list.push((<style>${faces[j]}</style>));}
    list.push(faceList());




    var bgcss = 'body {background-image: url("/backgroundHome.jpg");background-size: cover;background-attachment: fixed;}';
    //var csscont2 = "body" + '{' + `
    //    background-image: url('/HomeBG.jpg');background-size: cover;}`;
    list.push(<style>{bgcss}</style>);
    list.push(<style>{inputcss}</style>);

    list.push(
        <Card className="bg-dark text-white">
            <Card.Img src="/manyfriends.jpg" alt="Card image" />
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



    //var csscont3 = '.HT{display flex;}';//Cardにもなぜか小文字.cardが反映された。
    //list.push(<style>{csscont3}</style>);

    list.push(
        <div className='marginB'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo192.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        MUIT APP
                    </Navbar.Brand>
                </Container>
                <br></br>
            </Navbar>
        </div>

    );



    //検索欄
    /*
    list.push(

        <span class="inline"><input class='HT' placeholder="絞り込み            " />
            <Stack direction="horizontal" gap={2}>
                <Button class='HT' variant="secondary">Submit</Button>
                <div class='HT' className="vr" />
                <Button class='HT' variant="outline-danger">Reset</Button>
            </Stack></span>
    );
    */


    //検索欄
    list.push(
        <span class="inline">
            <Form><Form.Control class='inputcss' type="email" placeholder="絞り込み" /></Form>
            <Button class='HT' variant="secondary">Submit</Button>
            <Button class='HT' variant="outline-danger">Reset</Button>
        </span>
    );


    /*スマホ版でボタンが2つ入りきらない
        list.push(
            <span class="inline">
                <input class="inputcss" type="text" placeholder="絞り込み" />
                <Button class='HT' variant="secondary">Submit</Button>
                <Button class='HT' variant="outline-danger">Reset</Button>
            </span>
        );
        */


    //各投稿
    //face()trim1 trim inline
    for (var i in to_json) {
        list.push(
            <div className='marginB'>
                <Card>

                    <Card.Body>

                        <button class={setClassName(i)} /><Card.Text class="inline">ID:{to_json[i].userID}</Card.Text>
                        <Card.Title>{to_json[i].title}</Card.Title>
                        <Row>
                            <Col>
                                <Card.Text class="inline">日時:{to_json[i].date}</Card.Text>
                            </Col>
                            <Col xs={6}>
                                <Button class="inline" variant='outline-primary'>詳しく見る</Button>
                            </Col>
                        </Row>
                    </Card.Body>

                </Card>
            </div>
        );
    }//<Card.Text>内容:{to_json[i].sentence}投稿者:{to_json[i].userID}</Card.Text>
    //<Card.Header>{to_json[i].title}</Card.Header>
    return list
}

export default Home;

const to_json = [
    { 'roomid': "01", "userID": "user1", "date": "date1", "title": "記事1", "sentence": "中身１" },
    { 'roomid': "02", "userID": "user2", "date": "date2", "title": "記事2", "sentence": "中身2" },
    { 'roomid': "03", "userID": "user3", "date": "date3", "title": "記事3", "sentence": "中身3" },
    { 'roomid': "04", "userID": "user4", "date": "date4", "title": "記事4", "sentence": "中身4" },

]
const cardspace = '.card{margin-bottom:30px;}';//Cardにもなぜか小文字.cardが反映された。
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

//width: 60%; 

//inlineも内蔵
const iconcss = "button.icon" + '{' + `
    width:  64px;  
    height: 64px; 
    border-radius: 50%;
    background-position: left top; 
    display:inline
}`

//const newtrim = '.trim1{background-image:url("/manyfriends.jpg");}'
const k = 1;
//const face1 = '.face1{background-image:url("/icons/' + { k } + '.JPG");}'
//const face1 = '.face1{background-image:url("/icons/' + k + '.JPG");}'

/*
const face1 = '.face' + k + '{background-image:url("/icons/' + k + '.JPG");' + `
    width:  64px;  
    height: 64px; 
    border-radius: 50%;
    background-position: left top; 
    display:inline
}

`
*/
/*
const faces = [25];
for (var i = 0; i < 25; i++) {
    faces.push('.face' + i + '{background-image:url("/icons/' + i + '.JPG");' + `
    width:  64px;  
    height: 64px; 
    border-radius: 50%;
    background-position: left top; 
    display:inline}
`)
}
*/

function faceList() {
    const faces = [];
    for (var i = 0; i < 25; i++) {
        faces.push('.face' + i + '{background-image:url("/icons/' + i + '.JPG");' + `
        width:  64px;  
        height: 64px; 
        border-radius: 50%;
        background-position: left top; 
        display:inline}
    `)
    }

    return (

        faces.map(face => (
            <style key={face}>{face}</style>
        ))


    );
}



/*
const icons = [];
for (var j in 20) {
    //exec (`const trim`+{j}+`= .trim`+{j}+`{background-image:url("/icons/`+{j}+`.JPG");}`);
    icons[j] = `.trims` + { j } + `{background-image:url("/icons/` + { j } + `.JPG");}`;
}
*/

const setClassName = (a) => {
    return 'face' + a;
}
