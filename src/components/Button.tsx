interface IButtonProps {
    type: "button" | "submit" | "reset" | undefined,
    className: string,
    name: string,
    onClick: () => void
}

const Button = (props: IButtonProps) => {
    const { className, name, type, onClick } = props
    return (
        <>
            <div className={className}>
                <button type={type} onClick={onClick} > {name} </button>
            </div>
        </>
    )
}

export default Button