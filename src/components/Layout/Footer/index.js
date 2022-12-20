import React from 'react'
import './index.css'
import {Copyright} from "@mui/icons-material";
import {SITE_NAME} from "../../../config/site";

function Footer() {
    return <>

        {/* Site footer */}
        <footer className={'footer'} >
            <h3>Copyright <Copyright fontSize={'small'} style={{padding:'0px 2px'}} />
                2022 All Rights Reserved by
                <span>{SITE_NAME}</span>
            </h3>
        </footer>

    </>
}

export default Footer