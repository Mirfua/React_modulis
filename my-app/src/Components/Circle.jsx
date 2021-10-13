

function Circle({color, buttonText}) {

    return (

        <div className="circle" style={ {backgroundColor:color}  }>
            <button>{buttonText}</button>
        </div>

    );

}

export default Circle;