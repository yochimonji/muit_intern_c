import { Container, InputGroup, FormControl, Button } from "react-bootstrap";

const MessageSubmit = (props) => 
    <>
        <Container className="fixed-bottom bg-white">
            <InputGroup className="mb-2">
                <FormControl className="mr-2 " value={props.text} onChange={(e) => props.setText(e.target.value)}/>
                <Button variant="outline-secondary" onClick={props.submitText}>
                    送信
                </Button>
            </InputGroup>
        </Container>
        {/* 入力文とメッセージを重複させないようにするための汚い処理 */}
        <div className="mb-4 text-white">a</div>
    </>
    
export default MessageSubmit;