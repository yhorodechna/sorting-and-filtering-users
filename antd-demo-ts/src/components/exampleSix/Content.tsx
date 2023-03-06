interface IProps {

    content:string
}

export function Content({content}:IProps) {

    return (
        <menu>
            {content}
        </menu>
    )
}