import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemContext'
function Footer() {
    const mode = useContext(ThemeContext)
  return (
    <footer className={mode === "Dark"?'footer dark':"footer"}>
        <div className='footer-logo'>

        </div>
        <div className='developer-links'>
            <ul>
                <li>
                    <a className={mode ==="Dark"?'footer-link-item dark':"footer-link-item"} href='#3'>Developer FaceBook</a>
                </li>
                <li>
                    <a className={mode ==="Dark"?'footer-link-item dark':"footer-link-item"} href='#2'>Developer GitHup</a>
                </li>
                <li>
                    <a className={mode ==="Dark"?'footer-link-item dark':"footer-link-item"} href='#1'>Developer Linked In</a>
                </li>
            </ul>
        </div>
        <small>
            Copywrite : @Eng.Tammam Abdo 2024
        </small>
    </footer>
  )
}

export default Footer
