import { Child } from "../Component/Child"
export const Parent = ({name,theme})=>{
    return(
        <>
            <h2>this is parent component</h2>
            <Child name={name} theme={theme}/>
        </>
    )
}