import React, { useContext, useEffect, useState } from 'react'
import CountryItem from './CountryItem'
import notecontext from '../context/notecontext'
const Home = (props) => {
    const context = useContext(notecontext)
    const { countries, setcountries, currSelect, path,searching,mode } = context
    const country = async () => {
        let data = await fetch(`https://restcountries.com/v2/${path}?fullText=true`)
        let parsedData = await data.json()
        setcountries(parsedData)
        
    }
    const [search, setsearch] = useState("");
    const currentValueSearching=(e)=>{
        setsearch(e.target.value)

    }
    useEffect(() => {
        // document.body.style.backgroundColor="black"
        country()
    }, [path])
    const arr=["European Union","European Free Trade Association","Caribbean Community","Pacific Alliance","African Union","Union of South American Nations","Eurasian Economic Union","Arab League","Association of Southeast Asian Nations",""]
    return (
        <>
            <div className={`px-5  text-${mode=="light"?"dark":"light"} ${mode=="light"?"customBcLight":"customBcDark"} `}>
                <div className=" ">
                    <form action="#" onSubmit={(e)=>{
                        searching(search)
                        
                        e.preventDefault()
                    }} className='d-flex justify-content-between pt-3'>
                        <input type="" className={`${mode=="light"?"neuform":"neuform2"} `} onChange={currentValueSearching} name="searchcountry" id="" placeholder={`Search by country`}  />
                        <select className={`form-select w-25 ${mode=="light"?"neuform":"neuform2"} `} onChange={currSelect} aria-label="Default select example">
                            <option defaultValue >Filter By Region</option>
                            <option value="au" >African Union</option>
                            <option value="al" >Arab League</option>
                            <option value="asean" >Association of Southeast Asian Nations</option>
                            <option value="caricom" >Caribbean Community</option>
                            <option value="cais" >Central American Integration System</option>
                            <option value="cefta" >Central European Free Trade Agreement</option>
                            <option value="eeu" >Eurasian Economic Union</option>
                            <option value="efta" >European Free Trade Association</option>
                            <option value="eu" >European Union</option>
                            <option value="pa" >Pacific Alliance</option>
                            <option value="saarc" >South Asian Association for Regional Cooperation</option>
                            <option value="nafta" >North American Free Trade Agreement</option>
                        </select>
                    </form>
                </div>
                <div className="row my-3 ">
                    {countries.map((e) => {
                        return <div className="col-md-3">
                            <CountryItem key={e.capital} name={e.name} country={e.country} flag={e.flags.svg} population={e.population} region={e.region} capital={e.capital} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Home
