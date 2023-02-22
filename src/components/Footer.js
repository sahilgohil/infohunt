import React from "react"
import {ThemeProvider} from './ThemeContext'


function Footer()
{
    const {theme} = React.useContext(ThemeProvider)
    return(
        <footer className={theme === 'light'?'footer-container':'footer-container footer-container-dark'}>
            <h3 className="footer-heading">Breaking News Now</h3>
            <p className="copyright">Copyright ©2023</p>
        </footer>
    )
}
export default Footer