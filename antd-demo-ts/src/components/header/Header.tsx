import React from 'react';
import styles from "./Header.module.css"

interface IProps  {
    title : string
}

export function Header(props:IProps) {
    return (
        <header className={styles.header}>
            <h1>{props.title}</h1>
        </header>
    )
}
