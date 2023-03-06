
import axios from "axios";
import { useEffect, useState } from "react";
import { IMessage, User } from "./user/User";

export function Dialog() {
    const [dialog, setDialog] = useState<IMessage[]>([])

    const request = () => {
        axios.get('http://178.210.131.101:8002/get-all-messages').then((response) => {
            console.log(response)
            const allMessages = response.data
            setDialog(allMessages)
        })
    }

    useEffect(() => {
        request();
    }, [])

    const handleClearAllMessages = () => {
        axios.post('http://178.210.131.101:8002/clear-messages', {}, {
            headers: {
                'content-type': 'text/plain'
            }
        }).then((response) => {
            const clearMessages = response.data
            setDialog(clearMessages)
        })
    }
    
    const handleSetMessage = (message: IMessage) => {
        axios.post('http://178.210.131.101:8002/save-message', message, {
            headers: {
                'content-type': 'text/plain'
            }
        }).then((response) => {
        })
    }

    const handleButtonClick = (message: IMessage) => {
        console.log(message.message)
        handleSetMessage(message)
        request();
    }

    return (
        <>
            <div
                style={{ border: "1px solid #000", display: "flex" }}>
                <User name='Юля' dialog={dialog} onSendButtonClick={handleButtonClick} />
                <User name='Мішка' dialog={dialog} onSendButtonClick={handleButtonClick} />
                <User name='Аня' dialog={dialog} onSendButtonClick={handleButtonClick} />
            </div>
        </>
    );
}




