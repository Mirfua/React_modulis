import { useState } from "react"


function Circle2in1(props) {

    const [digit, setDigit] = useState(0)

    return(
        <>
        <div className="circler" style={{backgroundColor:props.color1}}>
        </div>

        <div className="circler" style={{backgroundColor:props.color2}}>
        </div>
        </>
    )
}

export default Circle2in1