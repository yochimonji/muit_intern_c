import { Button, Card, Row, Col } from 'react-bootstrap';

const Room = () => {
    var list = [];
    var bgcss = 'body {background-image: url("/defaltback.jpg");background-size: cover;background-attachment: fixed;}';
    list.push(<style>{bgcss}{right}{marginB}</style>);
    list.push(<Blog title={apiDatas[0].title} roomid={apiDatas[0].roomid} sentence={apiDatas[0].sentence} userid={apiDatas[0].userid} />)

    return list
}

export default Room



function Blog(props) {
    return (
        <>
            <Card bg='success' text='light' border='secondary'>
                <Card.Body>
                    <Card.Title as='h4'>{props.title}</Card.Title>
                </Card.Body>
            </Card>


            <BigImg path='/camp.jpg' />
            <Card>
                <Card.Header>募集内容</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.sentence}
                    </Card.Text>
                </Card.Body>

                <Card.Header> 詳細</Card.Header>
                <Card.Body><Icon cname='testicon0' number='0' />ID:{props.userid}</Card.Body>
            </Card>
            <Card className='text-center'>
                <Card.Body>
                    <Button classname="text-center" variant="outline-primary" size="lg">
                        メッセージ
                    </Button>

                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">お取引の流れ</Card.Link>
                    <Card.Link href="#">ヘルプ</Card.Link>

                </Card.Body>
            </Card>

            <Card>
                <Card.Body><Row><Col>
                    <Card.Link href="#">利用規約</Card.Link></Col>
                    <Col className='right'>
                        <Card.Link href="#">会社情報</Card.Link></Col></Row>
                </Card.Body>
            </Card>
        </>
    )
}

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

const marginB = '.marginB{margin-bottom:30px;}';
const right = '.right {text-align: right;}';

/*
function BTitle(props) {
    var tstyle = 'Info'
    return (
        tstyle.map((variant, idx) => (
            <Card
                bg={variant.toLowerCase()}
                key={idx}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                className="mb-2"
            >
                <Card.Body>
                    <Card.Title as='h4'>AA</Card.Title>
                </Card.Body>
            </Card>
        ))
    )
};*/

function BigImg(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.path} />
        </Card>
    )
}

const apiDatas = [
    {
        'roomid': "01", "userid": "user1", "date": "date1", "title": "記事1のタイトルです ああああああああああああああああああああ", "sentence": `中身１　募集の説明の文章がここに入ります。
    テストテスト
    テストtest` },
    { 'roomid': "02", "userid": "user2", "date": "date2", "title": "記事2", "sentence": "中身2" },
    { 'roomid': "03", "userid": "user3", "date": "date3", "title": "記事3", "sentence": "中身3" },
    { 'roomid': "04", "userid": "user4", "date": "date4", "title": "記事4", "sentence": "中身4" },
]