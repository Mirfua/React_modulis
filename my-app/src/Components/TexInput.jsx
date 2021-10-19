import { useState } from "react";



function TextInput() {

    const [value, setValue] = useState('')


    const change = e => {
        console.log("ja ja", e.target.value);
        setValue(e.target.value);
    }


    return (
        <>
        <div className="sq">
            <input onChange={change} type="text" value={value}/>

        </div>
        </>
    )
}
export default TextInput;