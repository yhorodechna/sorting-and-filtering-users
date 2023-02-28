import React from 'react';
import { useState } from "react";

const colors = ["yellow", "red", "green", "black", "violet", "purple", "pink", "grey", "white",]

interface IProps {
    color:string, //from outside to in
    onColorChange: (color: string) => void // from in to outside
}
export function ColorSquare({color, onColorChange}:IProps) {
    const [myColor, setMyColor] = useState(color)
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)
    const handleButtonClick = () => {
        setIsOptionsOpen(true)
    }
    const handleOptionClick = (color: string) => (e: any) => {
        setIsOptionsOpen(false)
        setMyColor(color)
        onColorChange(color);
    }

    const options = colors.map((color): any => {
        return <button
            type="button"
            style={{ backgroundColor: color }}
            onClick={handleOptionClick(color)}
        >{color}</button>
    })

    return (
        <>
            <button
                type="button"
                style={{ backgroundColor: myColor, height: "100px", width: "100px" }}
                onClick={handleButtonClick}
            >
                Click me
            </button>
            {isOptionsOpen && options}
        </>
    );
}
