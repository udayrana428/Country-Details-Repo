import React, { useContext } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import notecontext from '../context/notecontext'
const CurrentItem = () => {
  const context = useContext(notecontext)
  const { currobj, countryFullName, mode } = context
  const { name, region, population, flags, languages, currencies, topLevelDomain, capital, subregion, nativeName } = currobj
  let navigate = useNavigate()
  let location = useLocation()

  const goback = () => {
    // console.log("hello")
    console.log(location.pathname)
    navigate('/')
  }
  return (
    <div className={`${mode == "light" ? "customBcLight" : "customBcDark"}`}>
      <div className="container  vh-100 pt-4 ">
        <button className={`btn  ${mode=="light"?"neuform":"neuform2"}`} onClick={goback}><i class="fas fa-long-arrow-alt-left"></i> back</button>
        <div className={`card mb-3 mt-5 ${mode=="light"?"customBcLight":"customBcDark"} border-0`} >
          <div className="row g-0 ">
            <div className="col-md-4">
              <img src={flags.svg} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 px-5">
              <div className="d-flex flex-wrap">
                <div className="card-body col-md-4">
                  <h5 className="card-title">{name}</h5>
                  <p className=''>
                    Native Name: {nativeName} <br />
                    Population: {population} <br />
                    Region: {region} <br />
                    Sub Region: {subregion} <br />
                    Capital: {capital}

                  </p>
                </div>
                <div className="card-body col-md-4 mt-3">
                  <p className=''>
                    Top Level Domain: {topLevelDomain[0]} <br />
                    Currencies: {currencies[0].name} <br />
                    Language: {languages[0].name} <br />

                  </p>
                </div>
              </div>
              <div className="lower d-flex px-3 flex-wrap align-items-center">
                Border Countries:
                {!currobj.borders==""?currobj.borders.map((e)=>{
                  return <button className={`btn mx-1 my-1  ${mode=="light"?"neuform":"neuform2"}`}>{countryFullName(e)}</button>
                }):""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentItem
