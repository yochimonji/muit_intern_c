const setClassName = (a) => {
  return 'face' + a;
}

//list.push(faceList());

/*アイコンの廃止する要素
//inlineも内蔵
const iconcss = "button.icon" + '{' + `
    width:  64px;  
    height: 64px; 
    border-radius: 50%;
    background-position: left top; 
    display:inline
}`

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
*/

//width: 60%; 



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


    /*スマホ版でボタンが2つ入りきらない
        list.push(
            <span class="inline">
                <input class="inputcss" type="text" placeholder="絞り込み" />
                <Button class='HT' variant="secondary">Submit</Button>
                <Button class='HT' variant="outline-danger">Reset</Button>
            </span>
        );
        */

    /*旧バージョン
    //各投稿
    //face()trim1 trim inline
    for (var i in to_json) {
        list.push(
            <>
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
                <p className='marginB' />
            </>
        );
    }//<Card.Text>内容:{to_json[i].sentence}投稿者:{to_json[i].userID}</Card.Text>
    //<Card.Header>{to_json[i].title}</Card.Header>

    */


    

    /*
        list.push(
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="/logo192.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            MUIT APP
                        </Navbar.Brand>
                    </Container>
                    <br></br>
                </Navbar>
    
                <p className='marginB' />
            </>
        );
    */


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

    
    /*
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
    )*/