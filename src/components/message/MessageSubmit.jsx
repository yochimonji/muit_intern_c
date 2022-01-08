import { Container, InputGroup, FormControl, Button, Stack } from "react-bootstrap";

const MessageSubmit = (props) => 
    <>
        <Container className="fixed-bottom bg-white">
            <InputGroup className="mb-2">
                <FormControl
                    className="mr-2"
                    as="textarea"
                    rows="3"
                    value={props.text}
                    onChange={(e) => props.setText(e.target.value)}
                />
                <Stack style={{height: 36}}>
                    <div><Button variant="secondary" onClick={props.submitText} className={"mb-2"} style={{width: "80px"}}>
                        送信
                    </Button></div>
                    <div><Button variant="info" onClick={props.handleReload} style={{width: "80px"}}>
                        再読込
                    </Button></div>
                </Stack>
            </InputGroup>
        </Container>
        {/* 入力文とメッセージを重複させないようにするための汚い処理 */}
        <div className="text-white" style={{marginBottom: 72}}>a</div>
    </>
    
export default MessageSubmit;