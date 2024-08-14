import categoriesMock from "@/mock/categories.json"
import ChevronComponent from "./ChevronComponent"
import { useEffect } from "react"
import ButtonRoundedComponent from "./ButtonRoundedComponent"

export default function CategoryNavComponent() {

    const selectedStyle: string[] = ["bg-amber-400", "text-slate-800", "font-bold"]
    const idleStyle: string[] = ["bg-red-800"]
    let categoryIndex = 0
    let scroller: Element
    let scrollerElements: Element[]
    let categoryTitles: Element[]
    let viewportHeight: number = 100

    useEffect(() => {
        getElements()

        addEventListener('resize', getViewportHeight)
        getViewportHeight()
        let oldItem = document.getElementById("menu-" + categoryIndex) as Element
        changeStyles(oldItem)

        buildIntersectionObservers()
    })

    function getElements() {
        scroller = document.getElementById("menu-scroller") as Element
        scrollerElements = Array.from(document.getElementsByTagName("li")) as Element[]
        categoryTitles = Array.from(document.getElementsByClassName("category-title")) as Element[]
    }

    function getViewportHeight() {
        viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    }

    function buildIntersectionObservers() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(element => {
                const intersectingCategory = element.target.parentElement?.getAttribute('id')
                if(element.isIntersecting) {
                    Object.values(categoriesMock).forEach((category, i) => {
                        if(category.nome == intersectingCategory) {
                            categoryIndex = i
                            scrollToElement(false)
                        }
                    })
                } else {
                    if(element.boundingClientRect.top > (viewportHeight/2)) {
                        if(intersectingCategory == categoriesMock[categoryIndex].nome) {
                            categoryIndex--
                            scrollToElement(false)
                        }
                    }
                }
            })
        }, {threshold: [0, 1], rootMargin: "0px 0px -50% 0px"})

        categoryTitles.forEach(element => {
            observer.observe(element)
        })
    }

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

    function scrollToElement(scrollPage: boolean = true) {
        const menuElement = document.getElementById("menu-" + categoryIndex)
        if (!menuElement) return

        const menuRect = menuElement.getBoundingClientRect()
        const scrollerRect = scroller.getBoundingClientRect()


        const offsetLeft = Math.round(menuRect.left + (menuRect.width / 2)) - (scrollerRect.left + (scrollerRect.width / 2))

        if(scrollPage) {
            window.location.href = "#" + Object.values(categoriesMock)[categoryIndex].nome
        }

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
        scrollerElements.forEach(element => {
            idleStyle.forEach((style) => {
                if (element != menuElement) {
                    element.classList.add(style)
                }
            })
            selectedStyle.forEach((style) => {
                element.classList.remove(style)
            })
        });

        idleStyle.forEach((style) => {
            menuElement.classList.remove(style)
        })
        
        selectedStyle.forEach((style) => {
            menuElement.classList.add(style)
        })
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