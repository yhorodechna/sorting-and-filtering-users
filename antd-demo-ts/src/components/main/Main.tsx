import React from "react";
import styles from "./Main.module.css";
import { IResult, IHuman } from '../../common/Interfaces';
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

interface IProps {
    title: string;
    data: IResult | undefined;
}


const columns: ColumnsType<IHuman> = [
    {
        title: 'Full name',
        dataIndex: 'full_name',
        key: 'full_name',
        render: (text, data) => <>{data.name.first + ' ' + data.name.last}</>,
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        render: (text, data) => <>{data.dob.age}</>,
    },
    {
        title: 'Nationality',
        dataIndex: 'nat',
        key: 'nat',
    },
    {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
        render: (text, data) => <>{data.location.country}</>,
    },
];
export function Main({ data, title }: IProps) {
    return (
        <main className={styles.main}>
            <Table columns={columns} dataSource={data?.results} />
        </main>
    );
}
