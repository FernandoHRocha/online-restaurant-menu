const ChevronComponent = ({
    rotate, className
}: {
    rotate?: "right" | "left" | "up",
    className?: string
}) => {
    const rotateClass = rotate == "right" ? "-rotate-90" :
        rotate == "left" ? "rotate-90" :
            rotate == "up" ? "rotate-180" : ""
    return (
        <svg className={"scale-75 w-6 z-20 pointer-events-none " + rotateClass + " " + className} viewBox="6 8 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <rect width="24" height="24" fill="transparent"></rect>
                <path d="M17 9.5L12 14.5L7 9.5" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    )
}

export default ChevronComponent