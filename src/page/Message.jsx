import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { MessageList, MessageSubmit } from "../components";
import API from '../api'
import { UserContext } from "../App";

const Message = () => {
    const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState("");

    const location = useLocation();
    const roomId = Number(location.state.roomid)

    const currentUserId = useContext(UserContext)

    useEffect(()=>{
        (async () => {
            const response = await API.post(`/${roomId}/message`, {
                "OperationType": "QUERY",
                "Keys": {
                    "roomid": roomId
                }
            })
            const sortedItems = response.data.Items.sort((a, b) => {
                return (a.date < b.date) ? -1 : 1
            })
            setMessageList([...sortedItems])
        })();
    }, [])

    const submitText = async () => {
        if (!text) return
        // APIにテキストを送信する処理を追加する
        const postMessageResponse = await API.post(`/${roomId}/message/new`, {
            "OperationType": "PUT",
            "Keys": {
                "roomid": roomId,
                "text": text,
                "userid": currentUserId,
            }
        })
        if (postMessageResponse.status !== 200) return

        const fetchMessageListResponse = await API.post(`/${roomId}/message`, {
            "OperationType": "QUERY",
            "Keys": {
                "roomid": roomId
            }
        })
        const sortedItems = fetchMessageListResponse.data.Items.sort((a, b) => {
            return (a.date < b.date) ? -1 : 1
        })
        setMessageList([...sortedItems])
        setText("")
        
    }

    const handleReload = async () => {
        const response = await API.post(`/${roomId}/message`, {
            "OperationType": "QUERY",
            "Keys": {
                "roomid": roomId
            }
        })
        const sortedItems = response.data.Items.sort((a, b) => {
            return (a.date < b.date) ? -1 : 1
        })
        setMessageList([...sortedItems])
    }

    return (
        <Container>
            <MessageList messageList={messageList} currentUserId={currentUserId} />
            <MessageSubmit text={text} setText={setText} submitText={submitText} handleReload={handleReload} />
        </Container>
    )
}

export default Message;