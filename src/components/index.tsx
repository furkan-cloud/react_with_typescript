import React, {useState,useReducer, useRef} from 'react'


interface IProps {
    name: string; label?:string; description?: string; onHappen: (name: string) => void
}


// const Hello = ({name, description, label}: IProps) => {
//     return (
//         <div>
//             <h1>Hello {name}</h1>
//         </div>
//     )
// }

interface countProps {
    age:number | string
}

interface Note {
    content: string
}

type Actions = { type: "add", content: string} | {type:"remove", id:number}

// Array<Note>

type State = Note[]

// state: State


const NotesReducer = (state: Note[], action: Actions) => {
    switch(action.type) {
        case "add":
            return [...state, {content: action.content}]
        case "remove":
            return state.filter((_, i) => action.id !== i)
        default:
            return [...state]
    }
}

const Hello: React.FC<IProps> = ({name, description= "Desc", label, onHappen}) => {
    // const handleChange = (event: React.FormEvent<HTMLDivElement>): void => {
    //             event.target.value
    //             event.target.addEventListener
    // }

    // Type Inference (usestate yapılan ilk atamadan dolayı tip tahmini yapıyor)
    const [count, setCount] = useState<number | string | null | undefined>(2021)
    const [user,setUser] = useState<countProps>({age:25})

    const [notes, dispatch] = useReducer(NotesReducer, [])


    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    // setUser({age:18})
    // setCount(undefined)

    return (
        <div ref={divRef}>
            <h1>Hello {name} {description}</h1>
            {/* {onHappen(name)} */}
            <input type="text" ref={inputRef} />
            {/* <input type="text" onChange={handleChange} /> */}
            {/* <div onChange={handleChange} /> */}
            <button ref={buttonRef}/>
            <button onClick={() => {dispatch({
                type: "add",
                content: "Note1"
            })}}/>
        </div>
    )
}

export default Hello
