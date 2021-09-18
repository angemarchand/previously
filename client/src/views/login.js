import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import "../css/login.css"


function Login () {

    const getUsers = () => {
        Axios.post("http://localhost:8000/login", {
        }).then((response) => {
            console.log("je suis connectée", response)
            let Key = response.data;
            console.log('je suis la cle', Key);
            
            if (Key) { 
                console.log("ici")
                window.location = "https://www.betaseries.com/oauth?key=" + Key;
            }

        }).catch(function (error) {
            console.log("not connected",  error);
        })
    }
    

    return (
        <div className="container mb-5 mt-5">
            <div className="row justify-content-center">
                <form className=" w-50 h-100 p-5 bg-dark ">
                    <h1 className="titleText mt-5 font-weight-bold mb-5"> Connexion</h1>
                    {/* <a onClick={getUsers} className="btn btn-primary mb-5">Se connecter</a> */}
                    <div className=" d-flex justify-content-center mt-5 font-weight-bold ">
                        <Link to=""  onClick={getUsers} className="btn btn-warning mt-5 mb-5"> Se connecter </Link>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Login;