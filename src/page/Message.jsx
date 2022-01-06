import { useEffect, useState } from "react";
import { Button, Container, FormControl, InputGroup, Stack } from "react-bootstrap";

const Message = () => {
    const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState("");

    // 現在のユーザーをuseContextを使用する
    const currentUserId = "userA";

    useEffect(()=>{
        // APIからメッセージ一覧を取得する処理に変更する
        const newMessageList = [
            { "text": "こんにちは", "userid": "userA" },
            { "text": "こんにちは", "userid": "userB" },
            { "text": "よろしくお願いします〜!", "userid": "userA" },
            { "text": "(^-^)", "userid": "userB" },
        ]
        setMessageList(newMessageList)
    }, [])

    const submitText = () => {
        if (!text) return
        // APIにテキストを送信する処理を追加する
        setMessageList((prev) => [
            ...prev,
            { "text": text, "userid": currentUserId}
        ])
        setText("")
    }

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
            <Container className="fixed-bottom bg-white">
                <InputGroup className="mb-2">
                    <FormControl className="mr-2" value={text} onChange={(e) => setText(e.target.value)}/>
                    <Button variant="outline-secondary" onClick={submitText}>
                        送信
                    </Button>
                </InputGroup>
            </Container>
        </Container>
    )
}

export default Message;