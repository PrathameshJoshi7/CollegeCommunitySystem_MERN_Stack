import React from 'react'
import foot from "./CSS files/Footer.module.css"

const Footer = () => {
    return (
        <div>
            <footer>
                <div className={foot.footertext}>
                    <label align="center" className={foot.text}> MES Abasaheb Garware College of Arts & Science <br/> Karve Road, Pune - 411004 <br/>Contact - 020 4103 8200 <br/>Email - abasahebgarwarecollege@gmail.com</label>
                </div>
            </footer>

        </div>
    )
}

export default Footer
