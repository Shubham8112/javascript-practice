import { Parent } from "../Component/Parent";
export const Home=()=>{
    let name = 'Tom';
    let theme = 'dark';
    return(
        <>
            <h2>This is Home page</h2>
            <Parent name={name} theme={theme}/>
        </>
    )
}