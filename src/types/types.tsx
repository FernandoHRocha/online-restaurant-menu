export interface Category {
    id: number
    nome: string
    items: Item[]|null
}

export interface Item {
    id: number
    nome: string
    descricao: string
    preco: number
    categoria_id: number
}