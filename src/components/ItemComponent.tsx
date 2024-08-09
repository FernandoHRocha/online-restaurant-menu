import { Item } from "@/types/types"
import { formatCurrency } from "@/utils/formatCurrency"

const ItemComponent = ({
  children
} : {
  children : Item
}
) => {
  return (
    <div className="mb-6">

      <div className="flex justify-between">
        <h3 className="text-3xl uppercase text-amber-200">{children.nome}</h3>
        <span className="text-amber-200">{formatCurrency(children.preco)}</span>
      </div>

      <p>{children.descricao}</p>
    </div>
  )
}

export default ItemComponent