import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'
import Bars from '../../assets/bars.png';
import  {Link} from 'react-scroll'
const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened,setMenuOpened] = useState(false);
  return (
    <div className="header">
        <img className='logo' src={Logo} alt="" />
        {menuOpened=== false && mobile===true?(
          <div onClick={()=>setMenuOpened(true)} style={{backgroundColor:'var(--appColor)',padding:'0.5rem',borderRadius:'5px',}}><img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}} /></div>
        ):(
          <ul className='header-menu'>
          <li onClick={()=>setMenuOpened(false)}>
            <Link to='home'
            spy={true}
            activeClass='active'
            smooth={true}>Home</Link>
            </li>
          <li onClick={()=>setMenuOpened(false)}>
          <Link to='programs'
            spy={true}
            smooth={true}>Programs</Link>
            </li>
          <li onClick={()=>setMenuOpened(false)}>
          <Link to='reasons'
            spy={true}
            smooth={true}>Why us</Link>
            </li>
          <li onClick={()=>setMenuOpened(false)}>
          <Link to='plans'
            spy={true}
            smooth={true}>Plans</Link>
            </li>
          <li onClick={()=>setMenuOpened(false)}>
            <Link to='testimonial'
            spy={true}
            smooth={true}
            >Testimonial</Link>
            </li>
      </ul>
  )}
       
    </div>
  )
}

export default Header