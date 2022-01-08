import { useEffect, useState } from "react"
import { Button, Card } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router-dom"

import API from '../api'

const Room = () => {
    const [roomData, setRoomData] = useState({
        title: "",
        roomid: "",
        sentence: "",
        userid: ""
    });
    const history = useHistory();
    const location = useLocation();
    const roomid = location.state.roomid
    const num = location.state.num

    useEffect(() => {
        (async () => {
            const response = await API.get(`/${roomid}`)
            const item = response.data.Item
            setRoomData({
                title: item.title.S,
                roomid: item.roomid.S,
                sentence: item.sentence.S,
                userid: item.userid.S
            })
        })();
    }, [])

    const handleClick = () => {
        history.push('/message', {roomid})
    }

    return (
        <div style={{backgroundImage: "url(/defaltback.jpg)", backgroundSize: "cover", backgroundAttachment: "fixed"}}>
            <Card bg='success' text='light' border='secondary'>
                <Card.Body>
                    <Card.Title as='h4'>{roomData.title}</Card.Title>
                </Card.Body>
            </Card>

            <BigImg path='/camp.jpg' />
            <Card>
                <Card.Header>募集内容</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {roomData.sentence}
                    </Card.Text>
                </Card.Body>

                <Card.Header> 詳細</Card.Header>
                <Card.Body><Icon cname='testicon0' number={num} />ID:{roomData.userid}</Card.Body>
            </Card>
            <Card className='text-center'>
                <Card.Body>
                    <Button className="text-center" variant="outline-primary" size="lg" onClick={handleClick}>
                        メッセージ
                    </Button>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Room


function Icon(props) {//cname=className(cssを適用させるため) number=画像引っ張ってくるときi.jpgを選択する
    var thiscss = '.' + props.cname + '{background-image:url("/icons/' + props.number + '.JPG");' + `
            width:  64px;  
            height: 64px; 
            border-radius: 50%;
            background-position: left top; 
            display:inline}
        `
    return (
        <>
            <style>{thiscss}</style><button className={props.cname}></button>
        </>
    )
};


function BigImg(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.path} />
        </Card>
    )
}
