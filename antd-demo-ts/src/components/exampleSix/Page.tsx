
import { useState } from "react";
import { IMenuItem } from "./common/Interfaces";
import { Content } from "./Content";
import { SidebarMobile } from "./SidebarMobile";

const menuItems: IMenuItem[] = [
    {
        title: 'First',
        id: 'First',
        subItems: [
            {
                title: 'First 1',
                id: 'First 1',
                subItems: [
                    {
                        title: 'First 11',
                        id: 'First 11',

                    },
                    {
                        title: 'First 12',
                        id: 'First 12'
                    },
                    {
                        title: 'First 13',
                        id: 'First 13'
                    },
                ]
            },
            {
                title: 'First 2',
                id: 'First 2'
            },
            {
                title: 'First 3',
                id: 'First 3'
            },
        ]
    },
    {
        title: 'Second',
        id: 'Second',
        subItems: [
            {
                title: 'Second 1',
                id: 'Second 1'
            },
            {
                title: 'Second 2',
                id: 'Second 2'
            },
            {
                title: 'Second 3',
                id: 'Second 3'
            },
            {
                title: 'Second 4',
                id: 'Second 4'
            },
        ]
    },
    {
        title: 'Third',
        id: 'Third',
        subItems: [
            {
                title: 'Third 1',
                id: 'Third 1'
            },
            {
                title: 'Third 2',
                id: 'Third 2'
            },
        ]
    },
    {
        title: 'Fourth',
        id: 'Fourth',
    },
    {
        title: 'Fifth',
        id: 'Fifth',
        subItems: [
            {
                title: 'Fifth 1',
                id: 'Fifth 1'
            },
            {
                title: 'Fifth 2',
                id: 'Fifth 2'
            },
            {
                title: 'Fifth 3',
                id: 'Fifth 3'
            },
        ]
    },
]



interface IProps {
    defaultSelectedIds: string[];
}

export function Page({ defaultSelectedIds }: IProps) {
    const [activeMenu, setActiveMenu] = useState<IMenuItem>()
    return (
        <div style={{ display: 'flex' }}>
            <SidebarMobile menuItems={menuItems} defaultSelectedIds={defaultSelectedIds} onMenuClick={setActiveMenu} />
            <Content content={activeMenu?.title || ''} />
        </div>
    )
}

