import React from 'react'
import { useContext } from 'react'
import { Link, useHref } from 'react-router-dom'
import notecontext from '../context/notecontext'
const CountryItem = (props) => {
    const context=useContext(notecontext)
    const {currentCountry,mode}=context
    const {name,country,flag,region,population,capital}=props
    return (
        <>
            <div className={`card mx-1 my-2 ${mode=="light"?"neuform":"neuform2"}`} >
                <Link to="/currentitem"><img onClick={currentCountry} src={flag} className="card-img-top" alt="..."   /></Link>
                
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>
                        Population: {population} <br />
                        Region: {region} <br />
                        Capital: {capital}
                    </p>
                </div>
            </div>
        </>
    )
}
export default CountryItem
