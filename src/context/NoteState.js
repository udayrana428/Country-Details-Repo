import Notecontext from "./notecontext"
import React, { useState } from 'react'

const NoteState = (props) => {
    const all=[]
    const [allCountries, setallCountries] = useState(all);
    const abc=async()=>{
        let data = await fetch(`https://restcountries.com/v2/all`)
            let parsedData = await data.json()
            setallCountries(parsedData)
    }
    abc()

    const countryList = []
    const [countries, setcountries] = useState(countryList)
    // const [countries, setcountries] = useState(countryList)
    const countryFullName = (e) => {
        const cName = allCountries.filter((x) => {
            if (x.alpha3Code === e) {
                return x
            }
        })
        return cName[0].name
    }
    const [currobj, setcurrobj] = useState("")
    const currentCountry = (e) => {
        const target = e.target.src
        const currObj = countries.filter((e) => {
            if (e.flag === target) {
                return e
            }
        })
        // console.log(currObj)
        setcurrobj(currObj[0])
        // console.log(currobj.name)
    }
    //Search by country name
    
    const [path, setpath] = useState("all");
    const currSelect = (e) => {
        const currRegion = e.currentTarget.value
        currRegion==="au"?setpath("regionalbloc/au"):currRegion==="al"?setpath("regionalbloc/al"):
        currRegion==="asean"?setpath("regionalbloc/asean"):currRegion==="caricom"?setpath("regionalbloc/caricom"):
        currRegion==="cais"?setpath("regionalbloc/cais"):currRegion==="cefta"?setpath("regionalbloc/cefta"):
        currRegion==="eeu"?setpath("regionalbloc/eeu"):currRegion==="efta"?setpath("regionalbloc/efta"):
        currRegion==="eu"?setpath("regionalbloc/eu"):currRegion==="pa"?setpath("regionalbloc/pa"):
        currRegion==="saarc"?setpath("regionalbloc/saarc"):currRegion==="nafta"?setpath("regionalbloc/nafta"):setpath("all")
    }
    const searching=(val)=>{
        setpath(`/name/${val}`)
    }
    const [mode, setmode] = useState("light");
    const modeClick=()=>{
        if(mode=="light"){
            setmode("dark")
        }else{
            setmode("light")
        }
        
    }
    console.log(mode)
    return (
        <Notecontext.Provider value={{ countries, setcountries, currentCountry, currobj, countryFullName, currSelect, path ,searching,mode,modeClick}}>
            {props.children}
        </Notecontext.Provider>
    )
}

export default NoteState
