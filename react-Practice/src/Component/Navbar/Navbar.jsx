import {NavLink} from "react-router-dom";
export const Navbar = ()=>{
    return(
        <nav className="navbar-container" style={{display:'flex',justifyContent:'center'}}>
            <div>My App</div>
            <div style={{display:'flex',gap:'8px'}}>
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='signin'>Signin</NavLink>
                <NavLink to='signup'>Signup</NavLink>
            </div>
        </nav>
    )
}