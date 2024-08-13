const ButtonRoundedComponent = (props: any) => {

    return (
        <button onClick={props.event} className={"z-50 cursor-pointer p-2 bg-black flex justify-center items-center min-w-fit min-h-fit aspect-square border-white border rounded-full " + props.className}>
            {props.children}
        </button>
    )
}

export default ButtonRoundedComponent