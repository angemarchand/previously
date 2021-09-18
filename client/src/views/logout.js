import React from "react";

function Logout (props) {

    console.log("je suis deconnecté",props)
    const deleteToken = () => {
        localStorage.removeItem('token');
    }
    deleteToken();
    return (
        <div>

        </div>
    )
}

export default Logout