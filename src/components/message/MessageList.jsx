import { Stack } from "react-bootstrap";

const MessageList = (props) => 
    <>
        {
            props.messageList.map((message, index) => 
                message.userid === props.currentUserId ?
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
    </>

export default MessageList;