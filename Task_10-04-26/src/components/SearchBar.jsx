
import { useRef } from "react";
export default function SearchBar({text, setText}) {
    const searchProduct = useRef(null);
    return(
        <>
        ref = {searchProduct}
        <h3>Search:</h3>
        <input type="text" 
        value={text}
        placeholder="Search Products here.."
        onChange = {e=> setText(e.target.value)}
         />
        </>
    ) 
}