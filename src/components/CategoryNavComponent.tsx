import categoriesMock from "@/mock/categories.json"
import ChevronComponent from "./ChevronComponent"
import { useEffect } from "react"

export default function CategoryNavComponent() {

    const selectedStyle: string[] = ["bg-amber-400", "text-slate-800", "font-bold"]
    let categoryIndex = 0
    let scroller: Element
    let oldItem: Element

    useEffect(() => {
        scroller = document.getElementById("menu-scroller") as Element
        oldItem = document.getElementById("menu-" + categoryIndex) as Element
    })

    function scrollToRight() {
        categoryIndex = (categoryIndex >= (Object.values(categoriesMock).length - 1)) ? 0 : (categoryIndex + 1)
        scrollToElement()
    }

    function scrollToLeft() {
        categoryIndex = (categoryIndex <= 0 ) ? (Object.values(categoriesMock).length - 1) : (categoryIndex - 1)
        scrollToElement()
    }

    function selectCategory(category: number) {
        categoryIndex = category
        scrollToElement()
    }

    function scrollToElement() {
        const menuElement = document.getElementById("menu-" + categoryIndex)
        if(!menuElement) return

        const menuRect = menuElement.getBoundingClientRect()
        const scrollerRect = scroller.getBoundingClientRect()

        const offsetLeft = (menuRect.left + (menuRect.width/2)) - (scrollerRect.left + (scrollerRect.width/2));

        scroller.scrollBy({
            top: 0,
            left: offsetLeft,
            behavior: 'smooth'
        });

        window.location.hash = Object.values(categoriesMock)[categoryIndex].nome

        changeStyles(menuElement)
    }

    function changeStyles(menuElement: Element) {
        selectedStyle.forEach((style) => {
            menuElement.classList.add(style)
            oldItem.classList.remove(style)
        })
        oldItem = menuElement
    }

    return (
        <nav className="
        flex flex-col w-100 justify-between top-0 sticky bg-amber-950 
        ">
            <div className="flex w-full justify-between">
                <div onClick={scrollToLeft} className="px-4 hover:cursor-pointer flex justify-center items-center bg-red-800 rounded-lg border-yellow-500 hover:bg-yellow-400 hover:text-slate-800 hover:font-bold">
                    <ChevronComponent rotate="left"></ChevronComponent>
                </div>
                <div>
                    <div className="w-full text-2xl flex flex-col mb-1 items-center">
                        <ChevronComponent></ChevronComponent>
                    </div>
                    <ul id="menu-scroller" className="flex px-40 max-w-80 overflow-x-scroll snap-x snap-mandatory no-scrollbar">
                        {categoriesMock.map((category, i) => {
                            return (
                                <li id={"menu-"+i} onClick={() => selectCategory(i)} key={'menu-' + i} className="hover:cursor-pointer snap-center w-fit min-w-40 rounded-lg mx-2 bg-red-800 border-yellow-500 hover:bg-amber-400 hover:text-slate-800 hover:font-bold">
                                    <a href={"#"+category.nome} className="flex justify-center items-center h-full py-1 px-4">{category.nome}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="w-full text-2xl flex flex-col items-center mt-1">
                        <ChevronComponent rotate="up"></ChevronComponent>
                    </div>
                </div>
                <div onClick={scrollToRight} className="px-4 hover:cursor-pointer flex justify-center items-center bg-red-800 rounded-lg border-yellow-500 hover:bg-yellow-400 hover:text-slate-800 hover:font-bold">
                    <ChevronComponent rotate="right"></ChevronComponent>
                </div>
            </div>
        </nav>
    )
}