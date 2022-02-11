import React,{useState,useEffect} from 'react'
const [n1, setn1] = useState(10)
const [z, setz] = useState(0)
const [y, sety] = useState(0)
useEffect(() => {
    const x=()=>{
        console.log("skillhub");
    }
    x()
}, [y])
useEffect(() => {
    console.log("z changed");
}, [z])
const addnum=()=>{
    setn1(n1+1)
    sety(7)
}
const zchange=()=>{
    setz(z+1)
}
export default function UseEffect() {
    return (
        <div>
            <button onClick={addnum}>Add</button>
            <button onClick={zchange}>Add</button>
        </div>
    )
}
