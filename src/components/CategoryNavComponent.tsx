import categoriesMock from "@/mock/categories.json"
import ChevronComponent from "./ChevronComponent"
import { useEffect } from "react"
import ButtonRoundedComponent from "./ButtonRoundedComponent"

export default function CategoryNavComponent() {

    const selectedStyle: string[] = ["bg-amber-400", "text-slate-800", "font-bold"]
    const idleStyle: string[] = ["bg-red-800"]
    let categoryIndex = 0
    let scroller: Element
    let oldItem: Element

    useEffect(() => {
        scroller = document.getElementById("menu-scroller") as Element
        oldItem = document.getElementById("menu-" + categoryIndex) as Element
        changeStyles(oldItem)
    })

    function scrollToRight() {
        categoryIndex = (categoryIndex >= (Object.values(categoriesMock).length - 1)) ? 0 : (categoryIndex + 1)
        scrollToElement()
    }

    function scrollToLeft() {
        categoryIndex = (categoryIndex <= 0) ? (Object.values(categoriesMock).length - 1) : (categoryIndex - 1)
        scrollToElement()
    }

    function selectCategory(category: number) {
        categoryIndex = category
        scrollToElement()
    }

    function scrollToElement() {
        const menuElement = document.getElementById("menu-" + categoryIndex)
        if (!menuElement) return

        const menuRect = menuElement.getBoundingClientRect()
        const scrollerRect = scroller.getBoundingClientRect()


        const offsetLeft = Math.round(menuRect.left + (menuRect.width / 2)) - (scrollerRect.left + (scrollerRect.width / 2))

        window.location.href = "#" + Object.values(categoriesMock)[categoryIndex].nome

        if (offsetLeft > 50 || offsetLeft < -50) {
            scroller.scrollBy({
                top: 0,
                left: offsetLeft,
                behavior: 'smooth'
            });
        }


        changeStyles(menuElement)
    }

    function changeStyles(menuElement: Element) {
        idleStyle.forEach((style) => {
            menuElement.classList.remove(style)
            if (oldItem != menuElement) {
                oldItem.classList.add(style)
            }
        })

        selectedStyle.forEach((style) => {
            oldItem.classList.remove(style)
            menuElement.classList.add(style)
        })
        oldItem = menuElement
    }

    return (

        <header className="top-0 w-full sticky h-fit bg-stone-900 py-1">
            <ButtonRoundedComponent event={scrollToLeft} className="absolute top-2 left-1">
                <ChevronComponent rotate="left" className=""></ChevronComponent>
            </ButtonRoundedComponent>
            <nav id="menu-scroller" className="z-10 whitespace-nowrap rounded-3xl overflow-x-scroll snap-x snap-mandatory no-scrollbar bg-black py-1 mx-14 w-auto border-2 border-neutral-500">
                <div className="
                    xl:px-[1000px]
                    px-80 w-fit mx-40
                    ">
                    {categoriesMock.map((category, i) => {
                        return (
                            <li id={"menu-" + i} onClick={() => selectCategory(i)} key={'menu-' + i} className="
                            sm:min-w-40
                            xl:min-w-60
                            z-10 inline-block snap-center w-fit min-w-20 rounded-3xl mx-2 bg-red-800
                            hover:bg-amber-400 hover:text-slate-800 hover:font-bold hover:cursor-pointer
                            ">
                                <a className="text-lg select-none flex justify-center items-center py-1 px-4">
                                    {category.nome}
                                </a>
                            </li>
                        )
                    })}
                </div>
            </nav>
            <ButtonRoundedComponent event={scrollToRight} className="absolute top-2 right-1">
                <ChevronComponent rotate="right" className=""></ChevronComponent>
            </ButtonRoundedComponent>
        </header>
    )
}