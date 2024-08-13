import { Item } from "@/types/types"
import { formatCurrency } from "@/utils/formatCurrency"

const ItemComponent = ({
  children
} : {
  children : Item
}
) => {
  return (
    <div className="mb-6 border-l-red-500 border-b-red-500 border-l-2 border-b-2 pl-2 pb-2">

      <div className="flex justify-between items-end">
        <h3 className="text-3xl uppercase text-amber-200">{children.nome}</h3>
        <span className="text-amber-200 text-2xl">{formatCurrency(children.preco)}</span>
      </div>

      <p>{children.descricao}</p>
    </div>
  )
}

export default ItemComponent