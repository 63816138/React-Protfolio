import React from 'react';
import HeaderLogo from './images/image.png'; 
import { Link } from 'react-router-dom';
 
const Header = () => {
    const onenter = (e) =>{
        document.getElementById(e.target.id).style.opacity = 1;
        document.querySelectorAll('.nav_list').forEach(element=>{
            if(element.id!==e.target.id){
                element.style.opacity = 0.5;
            }
        });
    }
    const onleave = (e) =>{
        document.querySelectorAll('.nav_list').forEach(element=>{
            element.style.opacity=1;
        });
    }
    const navList = ['Home','Projects','TechStack','Resume'];
    return (
        <nav className='header'>
            <img src={HeaderLogo} alt="img"/>
            <ul className='nav_bar'>
                {
                    navList.map((item,index)=>{
                        return <li 
                            key={index}
                        ><Link
                            to={item.toLowerCase() === 'home' ? '/' : `/${item}`}
                            id={index}
                            onMouseEnter={(event)=>onenter(event)}
                            className='nav_list'
                            onMouseLeave={(event)=>onleave(event)}
                        >{item}</Link></li>
                    })
                }
            </ul>
        </nav>
    )
}

export default Header;
