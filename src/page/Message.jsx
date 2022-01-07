import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { MessageList, MessageSubmit } from "../components";
import API from '../api'

const Message = () => {
    const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState("");

    // 現在のユーザーをuseContextを使用する
    const currentUserId = "userA";
    // RoomIDは遷移元から取得する
    const roomId = 1;

    useEffect(()=>{
        (async () => {
            const response = await API.post(`/${roomId}/message`, {
                "OperationType": "QUERY",
                "Keys": {
                    "roomid": roomId
                }
            })
            const newMessageList = [...response.data.Items]
            setMessageList(newMessageList)
        })();
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
            <MessageList messageList={messageList} currentUserId={currentUserId} />
            <MessageSubmit text={text} setText={setText} submitText={submitText} />
        </Container>
    )
}

export default Message;