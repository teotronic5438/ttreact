import React from 'react';  
function Footer() {  
    return (  
        <footer style={{ backgroundColor: "rgb(51, 51, 51)", padding: "10px", textAlign: "center", color: "white"}}>  
            <p>&copy; {new Date().getFullYear()} - Mi Aplicación React</p>  
        </footer>  
    );  
}  

export default Footer;  