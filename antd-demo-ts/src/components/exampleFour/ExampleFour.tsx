import React from 'react';
import { useState } from "react";
import { setConstantValue } from 'typescript';

const operations = ['+', '-', '/', '*', '=', 'c']
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


export function Calculator() {
    const [value, setValue] = useState("");
    const [currentOperation, setCurrentOperation] = useState("")




    const handleOperation = (operation: string) => (e: any) => {
        let operands = value.split(/[+,-./,*]/)
        if (operands.length === 2) {

            if (currentOperation === '+') {
                let sum = +operands[0] + +operands[1];
                setValue(() => sum.toString())
            }
            if (currentOperation === '-') {
                let subtraction = +operands[0] - +operands[1];
                setValue(() => subtraction.toString())
            }
            if (currentOperation === '/') {
                let division = +operands[0] / +operands[1];
                setValue(() => division.toString())
            }
            if (currentOperation === '*') {
                let multiplication = +operands[0] * +operands[1];
                setValue(() => multiplication.toString())
            }

        }
        setCurrentOperation(operation)

        if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
            console.log("old value", value)
            setValue((prev) => prev + operation);
            console.log("new value", value)
        }
        else if (operation === 'c') {
            setValue(() => '');
        }
        if (operation === '=') {
            console.log(value)
        }
    }
    const handleNumber = (number: number) => (e: any) => {
        setValue((prev) => prev + number);
    }
    return (
        <>
            <h2>Calculator</h2>
            <div className="calculator__body"
                style={{ display: "flex", position: "relative", alignItems: "center" }}>
                <div id="screen"
                    style={{ position: "absolute", top: "0px", left: "0px", border: "1px solid #000", width: "180px", height: "60px" }} >{value}</div>
                <div className='"numbers'>
                    <div className="numbers__row1">
                        {numbers.slice(0, 3).map((number) => <>
                            <button
                                type="button"
                                style={{ width: '60px', height: '60px', border: "1px solid #000" }}
                                onClick={handleNumber(number)}
                            >{number}</button>
                        </>)}
                    </div>
                    <div className="numbers__row2">
                        {numbers.slice(3, 6).map((number) => <>
                            <button
                                type="button"
                                style={{ width: '60px', height: '60px', border: "1px solid #000" }}
                                onClick={handleNumber(number)}
                            >{number}</button>
                        </>)}
                    </div>
                    <div className="numbers__row3">
                        {numbers.slice(6, 9).map((number) => <>
                            <button
                                type="button"
                                style={{ width: '60px', height: '60px', border: "1px solid #000" }}
                                onClick={handleNumber(number)}
                            >{number}</button>
                        </>)}
                    </div>
                    <div className="numbers__row4">
                        {numbers.slice(9, 10).map((number) => <>
                            <button
                                type="button"
                                style={{ width: '60px', height: '60px', border: "1px solid #000" }}
                                onClick={handleNumber(number)}
                            >{number}</button>
                        </>)}
                    </div>
                </div>
                <div className="operations">
                    {operations.map((operation) => <>
                        <button
                            type="button"
                            style={{ width: '60px', height: '60px', display: "flex", justifyContent: "center", alignItems: 'center', border: "1px solid #000" }}
                            onClick={handleOperation(operation)}
                        >{operation}</button>
                    </>)}
                </div>
            </div>
        </>
    );
}
