import { useEffect, useState } from 'react';
import { Button, Card, Form, Row, Col, InputGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import API from "../api"

const Home = () => {
    const [roomDatas, setRoomDatas] = useState([]);
    const [query, setQuery] = useState("");
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const response = await API.post(`/`, { "OperationType": "SCAN" })
            setRoomDatas([...response.data.Items])
        })();
    }, [])

    const handleClick = (roomid, num) => {
        history.push('/room', { roomid, num })
    }

    const handleClickSearch = () => {
        (async () => {
            if (query) {
                const response = await API.post(`/`, {
                    "OperationType": "QUERY",
                    "Keys": {
                        "tag": query
                    }
                })
                setRoomDatas([...response.data.Items])
            }
            else {
                const response = await API.post(`/`, { "OperationType": "SCAN" })
                setRoomDatas([...response.data.Items])
            }
        })();
    }

    return (
        <div style={{ backgroundImage: "url(/defaltback.jpg)", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
            {/* <ImgHeader path="/manyfriends.jpg" /> */}

            {/* 検索部分 */}
            <div>
                <div style={{backgroundColor:"white"}}>
                    <Button variant="light" style={{'margin':'4px', 'padding':'3px', 'font-size':'14px'}}>キャンプ</Button>
                    <Button variant="light" style={{'margin':'4px', 'padding':'3px', 'font-size':'14px'}}>コーヒー</Button>
                    <Button variant="light" style={{'margin':'4px', 'padding':'3px', 'font-size':'14px'}}>料理</Button>
                    <Button variant="light" style={{'margin':'4px', 'padding':'3px', 'font-size':'14px'}}>アウトドア</Button>
                    <Button variant="light" style={{'margin':'4px', 'padding':'3px', 'font-size':'14px'}}>ツーリング</Button>
                    <Button variant="light" style={{'margin':'4px', 'padding':'3px', 'font-size':'14px'}}>旅行</Button>
                    <Button variant="light" style={{'margin':'4px', 'padding':'3px', 'font-size':'14px'}}>自転車</Button>                    
                </div>
                {/* 検索部分 */}
                <InputGroup className='p-2'>
                    <Form.Control 
                        className='inputcss' 
                        type="text" 
                        placeholder="絞り込み" 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)} 
                    />
                    <Button variant="secondary" onClick={handleClickSearch}>検索</Button>
                </InputGroup>
            </div>

            {/* 各投稿 */}
            {roomDatas &&
                roomDatas.map((inf, num) =>
                    <PostLists {...inf} num={num} key={num} handleClick={handleClick} />
                )
            }
        </div>
    )
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
                    <Row><Col xs={3}>
                        <Icon number={props.num} />
                    </Col>
                        <Col xs={9} style={{ marginTop: '1rem' }}>
                            <Card.Title>{props.name}</Card.Title>
                        </Col>

                    </Row>
                    <Card.Text className="inline">ID:{props.userid}</Card.Text>
                    <Card.Title>{props.title}</Card.Title>

                    <Card.Text className="inline">日時:{String(props.date).slice(0, 10)}</Card.Text>
                    <Row>
                        <Col>
                            <Card.Text className="inline">tag:<a href='#sample'>#{String(props.tag).slice(0, 10)}</a></Card.Text>
                        </Col>
                        <Col xs={6}>
                            <Button
                                className="inline"
                                variant='outline-primary'
                                onClick={() => props.handleClick(props.roomid, props.num)}
                            >
                                詳しく見る
                            </Button>
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
