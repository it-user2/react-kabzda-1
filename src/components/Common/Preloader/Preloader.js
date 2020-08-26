import React from "react";
import preloader from "../../../assets/images/preloader.gif";

let Preloader = (props) => {
    return (
        <div style={{backgroundColor: '', textAlign: 'center'}}>
            <img src={preloader} style={{height: '150px'}}/>
        </div>
    )
}

export default Preloader;