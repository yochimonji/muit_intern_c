import { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";

const Message = () => {
    const [messageList, setMessageList] = useState([]);

    useEffect(()=>{
        const newMessageList = [
            { "text": "こんにちは", "userid": "userA" },
            { "text": "こんにちは", "userid": "userB" },
            { "text": "よろしくお願いします〜!", "userid": "userA" },
            { "text": "(^-^)", "userid": "userB" },
        ]
        setMessageList(newMessageList)
    }, [])

    return (
        <Container>
            {messageList &&
                messageList.map((message, index) => 
                    <Stack gap={5} key={index}>
                        <div>{message.userid}</div>
                        <div>{message.text}</div>
                    </Stack>
                )
            }
        </Container>
    )
}

export default Message;