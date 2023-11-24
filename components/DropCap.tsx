export const DropCapQuote = ({children}) => {
    return (
        <blockquote className="mt-6 font-sans first-letter:font-serif first-letter:mr-0.5 first-letter:text-5xl first-letter:mt-[-0.20em] first-letter:font-bold
        first-letter:float-left text-xl font-bold align-middle text-current">
            {children}
        </blockquote>
    )
}

export const DropCapGrid = ({children}) => (
    <figure className="flex flex-row mt-6 gap-5">
        {children}
    </figure>
)

export const DropCapEmoji = ({children}) => {
    return (
        <span className="block text-[5rem]">
            {children}
        </span>
    )
}

