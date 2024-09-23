
import { NavLink } from "react-router-dom"
export const Navbar = () => {

  
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav id='topPage' className='flex justify-between items-center bg-white  z-10 top-0  pb-5 px-8 text-sm font-light'>
        <ul className='flex gap-4 items-center'>
                <li className='menu'>
                    <NavLink to='/'  className={({isActive}) => isActive ?activeStyle : undefined }>
                       <h4>
                         Home
                        </h4>
                    </NavLink>
                </li>
                <li className='menu'>
                    <NavLink to='/this_challenge'  className={({isActive}) => isActive ?activeStyle : undefined }>
                        <h4>About us</h4>
                    </NavLink>
                </li>
        </ul>
    </nav>
    )
}