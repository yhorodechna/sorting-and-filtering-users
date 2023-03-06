import { useState } from "react";
import { IMenuItem } from "./common/Interfaces";

interface IProps {
    menuItems: IMenuItem[];
    defaultSelectedIds: string[];
    onMenuClick: (value: IMenuItem) => void
}

export function SidebarMobile({ menuItems, defaultSelectedIds, onMenuClick }: IProps) {
    const [selectIds, setSelectIds] = useState(defaultSelectedIds)
    const handleItemClick = (item: IMenuItem) => (e: any) => {
        if (!item.subItems) {
            onMenuClick(item)
        } else {
            if (selectIds.lastIndexOf(item.id) !== -1) {
                setSelectIds(selectIds.filter((i) => i !== item.id))
            } else {
                setSelectIds([...selectIds, item.id])
            }
        }
    }
    const checkSubItems = (menuItems: IMenuItem[]) => {
        return <ul>
            {menuItems.map((item) => {
                return (
                    <div key={item.id} style={{ marginLeft: '12px' }}>
                        <li style={{ cursor: "pointer", margin: "14px" }}
                            onClick={handleItemClick(item)}
                        >{item.title} {item.subItems && ">"}
                        </li>
                        {item.subItems && selectIds.includes(item.id) && checkSubItems(item.subItems)}
                    </div>
                )
            })}
        </ul>
    }
    return (
        <aside style={{ border: "1px solid #000", display: " inline-block" }}>
            {checkSubItems(menuItems)}
        </aside>
    );
}
