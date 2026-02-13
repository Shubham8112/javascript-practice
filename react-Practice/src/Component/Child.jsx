import { Grandchild } from "../Component/Grandchild"
export const Child =({name,theme})=>{
    return(
        <>
            <h2>This is Child component</h2>
            <Grandchild name={name} theme={theme} />
        </>
    )
}