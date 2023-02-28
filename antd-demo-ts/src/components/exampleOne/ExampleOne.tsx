import React from 'react';
import { useState } from "react";
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

const colors = ["yellow", "red", "green", "black", "violet", "purple", "pink", "grey", "white",]
// const htmlEl = document.getElementById("html");

export function Color() {
    const [myColor, setMyColor] = useState("red")
    const [count, setCount] = useState(1);
    const changeBackground = (color: any) => (e: any) => {

        console.log('click', color)
        setMyColor(color);
    }

    console.log('inside function', myColor)
    return (
        <>
            <div style={{ background: myColor }}>my current color</div>
            {colors.map((color) => <>
                <button
                    type="button"
                    style={{ backgroundColor: color }}
                    onClick={changeBackground(color)}
                >{color}</button>

                <Button color={color} onColorChange={setMyColor} />

            </>)}

            <br />
            <button onClick={() => setCount(count + 1)}>Increment {count}</button>
        </>
    )
}

export function Button({ color, onColorChange }: { color: string, onColorChange: (color: string) => void }): any {
    const changeBackground = (e: any): void => {

        onColorChange(color)
    }
    return <button
        type="button"
        style={{ backgroundColor: color }}
        onClick={changeBackground}
    >{color}</button>
}