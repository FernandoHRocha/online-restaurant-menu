import { Category } from "@/types/types"
import ItemComponent from "./ItemComponent"

const CategoryComponent = ({
  children
} : {
  children : Category
}
) => {
  return (
    <div
      className="scroll-mt-14 pt-6 mb-20"
      id={children.nome}
    >
      <h2 className="handlee text-6xl text-yellow-400 ">{children.nome}</h2>
      {
        children.items?.map((item, i) => {
          return (
            <ItemComponent key={'item'+item.id}>{item}</ItemComponent>
          )
        })
      }
    </div>
  )
}

export default CategoryComponent