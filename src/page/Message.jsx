import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { MessageList, MessageSubmit } from "../components";
import API from '../api'
import { useLocation } from "react-router-dom";

const Message = () => {
    const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState("");

    const location = useLocation();
    const roomId = location.state.roomid

    // 現在のユーザーをuseContextを使用する
    const currentUserId = "user1";

    useEffect(()=>{
        (async () => {
            const response = await API.post(`/${roomId}/message`, {
                "OperationType": "QUERY",
                "Keys": {
                    "roomid": roomId
                }
            })
            setMessageList([...response.data.Items])
        })();
    }, [])

    const submitText = async () => {
        if (!text) return
        // APIにテキストを送信する処理を追加する
        const response = await API.post(`/${roomId}/message/new`, {
            "OperationType": "PUT",
            "Keys": {
                "roomid": roomId,
                "text": text,
                "userid": currentUserId,
            }
        })
        if (response.status === 200) {
            setMessageList((prev) => [
                ...prev,
                { "text": text, "userid": currentUserId}
            ])
            setText("")
        }
    }

    return (
        <Container>
            <MessageList messageList={messageList} currentUserId={currentUserId} />
            <MessageSubmit text={text} setText={setText} submitText={submitText} />
        </Container>
    )
}

export default Message;