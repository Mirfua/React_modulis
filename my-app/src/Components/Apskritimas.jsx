

function Apskritimas({ls, apskritimasColor, apskritimasNumber}) {

    return (
        <>
        <div className="apskritimas-neBox">
            <span style={{

                letterSpacing: ls,
                color: apskritimasColor
                
                }}>apskritimo number: {apskritimasNumber}</span>
        </div>
        </>
    )
}

export default Apskritimas;