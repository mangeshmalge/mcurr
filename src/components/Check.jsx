import React,{useState,useEffect} from 'react'

export default function Check() {
    const [selected, setselected] = useState("USD")
    const [inp, setinp] = useState(0)
    const [result, setresult] = useState(0)
    const [USD, setUSD] = useState("")
    const [INR, setINR] = useState("")
// useEffect(() => {
//     const cal=()=>{
//         switch (selected) {
//             case "USD":setresult(inp * 75 )
//                 break;
//             case "INR":setresult(inp / 75 )
//                 break;
//             default:console.log("INVALID");
//                 break;
//         }
//     }
//     cal()
// }, [selected,inp])
const handleUSD=(e)=>{
    setUSD(e.target.value * 75)
    setINR(e.target.value)
}
const handleINR=(e)=>{
            setINR(e.target.value / 75)
            setUSD(e.target.value)
}
    return (
        <div className='container'>
            {/* <select name="" id=""className='form-select w-25' onChange={e=>setselected(e.target.value)}>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
            </select> */}
            <input type="text" value={INR}  className='form-control w-25' 
            onChange={handleUSD}
            placeholder='USD'
            /> <br />
            <input type="text" value={USD}  className='form-control w-25' 
            onChange={handleINR}
                placeholder='INR'
            />
            {/* <h2>{`${selected}:${result}`}</h2> */}
        </div>
    )
}
