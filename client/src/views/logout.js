import React from "react";
import Axios from "axios";

function Logout (token) {

    console.log("je suis deconnecté",token)
    let getToken = localStorage.getItem(token);
    console.log( getToken);
    // const deleteToken = () => {
    //     localStorage.removeItem('token');
    // }

    Axios.defaults.headers.common['Authorization'] = "1a4116396d60" ;
    Axios.post("https://api.betaseries.com/member/destroy", + token, {
    }).then(response => {
        // console.log("je suis des params", response)
        localStorage.removeItem('token');
    })

    return (
        <div>

        </div>
    )
}

export default Logout