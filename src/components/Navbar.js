import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import notecontext from '../context/notecontext'
const Navbar = () => {
  const context = useContext(notecontext)
    const { modeClick,mode} = context
  return (
    <>
      <nav class={`navbar navbar-${mode=="light"?"light":"dark"} ${mode=="light"?"customBcNLight":"customBcNDark"}  `}>
        <div class="container ">
          <a class="navbar-brand fw-bold">Where in the world?</a>
          <i class={`fas fa-moon text-${mode=="light"?"dark":"light"}`} onClick={modeClick}> Dark Mode</i>
        </div>
      </nav>
    </>
  )
}

export default Navbar
