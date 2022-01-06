import { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";

const Message = () => {
    const [messageList, setMessageList] = useState([]);
    const currentUserId = "userA";

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
            {
                messageList.map((message, index) => 
                    message.userid === currentUserId ?
                    <Stack key={index} className="pb-2">
                        <div className="justify-content-end d-flex pb-1">{message.userid}</div>
                        <div className="d-flex justify-content-end">
                            <div className="bg-dark text-light rounded border p-2">{message.text}</div>
                        </div>
                    </Stack> :
                    <Stack key={index} className="pb-3">
                        <div className="pb-1">{message.userid}</div>
                        <div className="d-flex">
                            <div className="bg-light rounded border p-2">{message.text}</div>
                        </div>
                    </Stack>
                )
            }
        </Container>
    )
}

export default Message;