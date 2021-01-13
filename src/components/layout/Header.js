import React from'react';
import {Link}  from 'react-router-dom';



function Header(){
    return(
        <header style={headerStyle}>
        <h1 >TodoList</h1>
        <Link style={linkStyle} to="/" >Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        
        </header>
    )

    }


    const headerStyle={
        backgroundColor:'#000',
        color:'#fff',
        textAlign:'center'
    }

    const linkStyle={
        color:"#fff"
    }



export default Header;
