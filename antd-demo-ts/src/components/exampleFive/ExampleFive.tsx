
import { useState } from "react";

interface IProps {
    name: string;
    dialog: IMessage[];
    onDialogChange: (items: IMessage[]) => void
}
interface IMessage {
    userName: string;
    message: string;
}

function User({ name, dialog, onDialogChange }: IProps) {
    const [message, setMessage] = useState('');

    const inputChangeValue = (e: any) => {
        setMessage(e.target.value);
    }

    const handleButtonClick = () => {
        onDialogChange([...dialog, { userName: name, message }]);
        setMessage("");
    }

    const messages = dialog.map((obg) => {
        return (<>

            <li style={{
                padding: "10px", border: "1px solid #000", borderRadius: "10px",
                alignSelf: name === obg.userName ? "end" : "start", backgroundColor: name === obg.userName ? "#9BE0AB" : "#C7C7C7"
            }}>
                <span style={{fontSize: "10px"}}>{obg.userName}</span>: {obg.message}</li>
        </>
        )
    })

    return (
        <>
            <div style={{ height: "100vh", padding: "50px", width: "100%" }}>
                <h2 style={{ textAlign: "center", fontSize: "20px" }}>{name}</h2>
                <div
                    style={{ border: "1px solid #000", width: "100%", height: "90%", overflow: "auto" }}>
                    <ul style={{ display: "flex", flexDirection: "column" }}>
                        {messages}
                    </ul>
                </div>
                <input type="text" value={message}
                    style={{ border: "1px solid #000", width: "90%", height: "40px" }}
                    onChange={inputChangeValue}
                />
                <button type="button"
                    style={{ border: "1px solid #000", width: "10%", height: "40px" }}
                    onClick={handleButtonClick}>Send</button>
            </div>
        </>
    );
}

export function Dialog() {
    const [dialog, setDialog] = useState<IMessage[]>([])

    return (
        <>
            <div
                style={{ border: "1px solid #000", display: "flex" }}>
                <User name='Юля' dialog={dialog} onDialogChange={setDialog} />
                <User name='Мішка' dialog={dialog} onDialogChange={setDialog} />
                <User name='Аня' dialog={dialog} onDialogChange={setDialog} />
            </div>
        </>
    );
}




