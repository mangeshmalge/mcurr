import React,{useState,useEffect} from 'react'


export default function CurrencyConverter() {
    const [inp, setinp] = useState(0)
    const [selected, setselected] = useState("USD")
    const [result, setresult] = useState(1)
    const [currency, setcurrency] = useState("INR")
    // useEffect(() => {
    //     const cal=()=>{
    //         switch (selected) {
    //             case "USD":setresult(inp * 75);setcurrency("INR")
    //                 break;
    //             case "INR":setresult(inp / 75);setcurrency("USD")
    //                 break;
    //             default:console.log("INVALID");
    //                 break;
    //         }
    //     }
    //     cal()
    // }, [selected,inp])
    const handleUSD=(e)=>{
        setresult(e.target.value * 75)
        setinp(e.target.value)
    }
    const handleINR=(e)=>{
        setinp(e.target.value / 75)
        setresult(e.target.value)
    }
   
    return (
        <div className='container'>
            {/* <select name="" id="" className='form-select w-25' onChange={e=>setselected(e.target.value)}>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                {/* <option value="EURO">EURO</option> */}
            {/* </select> */}
            <input type="text" 
            className='form-control w-25'
            value={inp}
            placeholder='From'
            onChange={handleUSD}
            /><br />
            <input type="text" 
            className='form-control w-25'
            value={result}
            onChange={handleINR}
            /><br />
           {/* <h2>{`${currency}:${result}`}</h2> */}
        </div>
    )
}
