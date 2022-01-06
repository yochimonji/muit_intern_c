import { Container, InputGroup, FormControl, Button } from "react-bootstrap";

const MessageSubmit = (props) => {
    return (
        <Container className="fixed-bottom bg-white">
            <InputGroup className="mb-2">
                <FormControl className="mr-2" value={props.text} onChange={(e) => props.setText(e.target.value)}/>
                <Button variant="outline-secondary" onClick={props.submitText}>
                    送信
                </Button>
            </InputGroup>
        </Container>
    )
}

export default MessageSubmit;