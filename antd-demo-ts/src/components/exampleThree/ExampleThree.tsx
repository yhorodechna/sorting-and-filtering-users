import React, { useEffect } from 'react';
import { useState } from "react";



interface IProps {
    data: string[],
    onDataChange: (value: string[]) => void
}

export function ToDoList({ data, onDataChange }: IProps) {
    const [toDo, setToDo] = useState<string>("")
    const [list, setList] = useState<string[]>(data);
    const handleAddButtonClick = () => {
        const newData = [...list, toDo];
        setList(newData)
        onDataChange(newData);
        // setList(old => ([...old, toDo]))
        setToDo("")
    }

    useEffect(() => {
        console.log('new data', data)
        setList(data);
    }, [data])

    console.log('render')
    useEffect(() => {
        console.log('call only once www')
        return () => console.log('removed from dom')
    }, []);

    const handleRemoveButtonClick = (id: any) => (e: any) => {
        const newData = list.filter((str: any, index) => { return index.toString() !== id })
        setList(newData);
        onDataChange(newData);
    }
    const toDoList = list.map((el: string, index: number) => {
        const id = index.toString()
        return (<>
            <li id={id} style={{ display: "inline-block", margin: "10px" }}>{el}</li>
            <button
                type="button"
                onClick={handleRemoveButtonClick(id)}
            >Remove</button>
            <br />
        </>
        )
    })
    return (
        <>
            <pre>data={JSON.stringify(data)}</pre>
            <pre>list={JSON.stringify(list)}</pre>
            <input
                type="text"
                value={toDo}
                onChange={(e) => {
                    setToDo(e.target.value)
                }
                }
                style={{ border: "1px solid #000" }}></input>
            <button
                type="button"
                onClick={handleAddButtonClick}>Add</button>
            <h2>ToDo List</h2>
            <ul>{toDoList}</ul>
        </>
    );
}




