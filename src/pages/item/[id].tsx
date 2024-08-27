import { useRouter } from "next/router"
import itemsMock from "@/mock/items.json"
import { Item } from "@/types/types"
import ItemImageComponent from "@/components/ItemImageComponent"
import ItemTitleComponent from "@/components/ItemTitleComponent"
import ButtonRoundedComponent from "@/components/ButtonRoundedComponent"
import { formatCurrency } from "@/utils/formatCurrency"

export default function ItemDetailsComponent() {
    let router = useRouter()

    let itemDetails: Item = itemsMock.find((item) => item.id.toString() == router.query.id) as Item

    if(!itemDetails) return <></>

    return (
        <main className="
        2xl:max-w-[1536px] 2xl:mx-auto
        min-h-max mx-2 flex flex-col items-center justify-evenly pt-4 pb-12 gap-8">
            <ItemTitleComponent className="border-l-red-500 border-b-red-500 border-l-2 border-b-2 pl-2 pb-2 rounded-bl-lg sticky top-0 bg-orange-950 w-full text-center" nome={itemDetails.nome}/>
            <ItemImageComponent nome={itemDetails.nome} imageUrl={itemDetails.imageUrl}></ItemImageComponent>
            <p className="">{itemDetails.descricao}</p>
            <span className="text-amber-200 text-2xl">{formatCurrency(itemDetails.preco)}</span>
            <ButtonRoundedComponent event={() => window.location.href="/"} className="px-4 py-2 text-xl">Voltar</ButtonRoundedComponent>
        </main>
    )
}