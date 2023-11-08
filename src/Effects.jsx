import React from 'react'
import { useEffect,useState } from 'react'

const Effects = () => {

    const [bankData,setBankData] = useState([])

    // const fetchBankData = () => {
    //     fetch("https://nigerianbanks.xyz/")                           // fetching API    
    //         .then((response) => response.json())                        //converting response to JSON
    //         .then((data) => console.log(data))                            //console.log data
    //         .catch((error) => console.log(error))                         //catching error  
    // }

    const fetchBankData = () => {
        fetch("https://nigerianbanks.xyz/")
        .then((response)=>response.json())
        .then((data)=>setBankData(data))       //-----------updating the state of the component with the data
        .catch((err)=>console.log(err))
    }

    useEffect(() => {
        fetchBankData()
    }, [])

    return (
        <div className='d-flex flex-wrap gap-5 justify-content-center '>
          {
            bankData.map((bd,index)=>(
                <div key={index} className="card" style={{ width: "15rem" }}>
                <img src={bd.logo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{bd.name}</h5>
                    <p className="card-text">{bd.ussd}</p>
                    <a href="#" className="btn btn-primary w-100">Go somewhere</a>
                </div>
            </div>
            ))
          }

        </div>
    )
}

export default Effects