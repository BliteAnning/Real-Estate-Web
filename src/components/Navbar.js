import {useState} from 'react';
import Menu from '../assets/menu.png';
import { asset } from '../assets/asset';

const Navbar = () => {
    const [menu, setshowMenu] = useState(false);

    return ( 
        
        <nav className="navBar">
            <div className="heading">
                <img src={asset.logo_dark} alt="" className="headingImg" />
                
            </div>
            <div className="menuLinks">
                <ul>
                    <li> <a href="#homePage">Home</a> </li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>                
                </ul>
            </div>
            <button className="sign">Sign up</button>
            
            <img src={Menu} alt="" className="menuImg" onClick={()=> setshowMenu(!menu)}/>
            <div className="mobMenu" style={{display: menu? 'flex': 'none', transition: menu? 'opacity 0.3s ease-in-ou': 'none'}} >
                <ul className='mobMenus' >
                    <li><a href="#homePage" onClick={()=>setshowMenu(false)}>Home</a> </li>
                    <li><a href="#about" onClick={()=>setshowMenu(false)}>About</a></li>
                    <li><a href="#projects" onClick={()=>setshowMenu(false)}>Projects</a></li>
                    <li><a href="#testimonials" onClick={()=>setshowMenu(false)}>Testimonials</a></li> 
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;