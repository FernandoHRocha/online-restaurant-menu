const ButtonRoundedComponent = (props: any) => {

    return (
        <button
            id={props.id}
            onClick={props.event}
            className={"w-fit hover:bg-amber-400 hover:text-slate-800 hover:font-bold hover:cursor-pointer bg-red-800 min-w-fit min-h-fit border-white border rounded-full " + props.className}>
            {props.children}
        </button>
    )
}

export default ButtonRoundedComponent