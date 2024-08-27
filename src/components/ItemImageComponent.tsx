function ItemImageComponent({className = '', nome, imageUrl} : {className?: string, nome: string, imageUrl: string | undefined}) {
  if(typeof(imageUrl) == "string") {
    return <img className={className} src={imageUrl} height="300px" width='300px' alt={"Imagem do prato " + nome} />
  } else {
    return <img className={className} src="https://restaurant-menu-photos.s3.sa-east-1.amazonaws.com/template.webp" height="300px" width='300px' alt="Foto do produto não encontrada." />
  }
}


export default ItemImageComponent