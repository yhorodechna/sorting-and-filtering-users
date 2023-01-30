import React from 'react';
import styles from "./Footer.module.css"

interface IProps  {
    title : string
}

export function Footer(props:IProps) {
    return (
        <footer className={styles.footer}>
            <h2>{props.title}</h2>
        </footer>
    )
}
