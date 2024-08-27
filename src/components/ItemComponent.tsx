import { Item } from "@/types/types"
import { formatCurrency } from "@/utils/formatCurrency"
import ButtonRoundedComponent from "./ButtonRoundedComponent"
import ItemImageComponent from "./ItemImageComponent"
import ItemTitleComponent from "./ItemTitleComponent"

const ItemComponent = ({
  children
} : {
  children : Item
}
) => {
  return (
    <div onClick={() => window.location.href = "/item/" + children.id} className="cursor-pointer mb-6 border-l-red-500 border-b-red-500 border-l-2 rounded-bl-lg border-b-2 pl-2 pb-2">

      <div className="
        sm:grid-rows-2 sm:grid-cols-[300px_1fr]
        gap-4 grid grid-cols-1
        ">

        <ItemImageComponent className="
          sm:order-1 sm:row-start-1 sm:row-span-2
          order-2 my-auto" nome={children.nome} imageUrl={children.imageUrl}></ItemImageComponent>

        <div className="
          sm:order-2 sm:col-start-2
          flex justify-between items-end order-1 my-auto
          ">
            
          <ItemTitleComponent nome={children.nome}/>
          <span className="text-amber-200 text-2xl">{formatCurrency(children.preco)}</span>

        </div>

        <div className="
          sm:order-3 sm:row-start-2 sm:col-start-2
          flex items-center flex-col gap-4
          order-3">
          <p>{children.descricao}</p>
          <ButtonRoundedComponent className="px-4 py-2 text-xl">Ver Mais</ButtonRoundedComponent>
        </div>

        
      </div>

    </div>
  )
}

export default ItemComponent