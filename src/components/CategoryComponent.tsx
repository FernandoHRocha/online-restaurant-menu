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
      className="scroll-mt-10 pt-6 mb-20"
      id={children.nome}
    >
      <h2 className="handlee text-4xl text-center text-yellow-400 category-title">{children.nome}</h2>
      <hr className="mb-1 w-3/4 mx-auto"/>
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