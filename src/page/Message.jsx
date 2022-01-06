import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { MessageList, MessageSubmit } from "../components";

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
            <MessageList messageList={messageList} currentUserId={currentUserId} />
            <MessageSubmit text={text} setText={setText} submitText={submitText} />
        </Container>
    )
}

export default Message;