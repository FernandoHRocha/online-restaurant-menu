function ItemTitleComponent({className = '', nome} : {className?: string, nome: string}) {
    return <h2 className={"text-3xl uppercase text-amber-200 " + className}> {nome} </h2>
}

export default ItemTitleComponent