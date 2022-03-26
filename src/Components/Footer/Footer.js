import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <h3>Assignment <span id="footer-color">Eight</span></h3>
                <p>“It's not a bug. It's an undocumented feature!” - Anonymous</p>
                <p><span className="spanOne">&lt;/&gt;</span> with <span className="spanTwo">&lt;3</span>
                    by <a className="lime" href="https://www.youtube.com/watch?v=q6EoRBvdVPQ&list=PLFsQleAWXsj_4yDeebiIADdH5FMayBiJo">Hogor007</a></p>
            </footer>
        </div>
    );
};

export default Footer;