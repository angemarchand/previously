import React, { useEffect, useState }  from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

import Cards from "../components/Cards";
import "../css/home.css"

function Home (props) {

    console.log("i am props of login", props);
    const [allSeries, setAllSeries] = useState('');
    let history = useHistory();


    const getTokenLogin = () =>{
        let getToken = props.location.search
        console.log(getToken);
        let param = getToken.split("=");
        console.log(param)
        let tokenParam = param[0].replace('?', '');
        console.log(tokenParam);
        if(tokenParam) {
            localStorage.setItem("token", param[1]);
            history.push("/");
        }
    }

    getTokenLogin ();

    useEffect (() => {
        const getSeries = () => {

            let arraySeries = [];

            Axios.get("http://localhost:8000/series", {
            }).then((response) => {
                // console.log("hi", response);
                let series = response.data
                // console.log(series);
                series.forEach(element => {
                    arraySeries.push(
                        <Cards data={element} key={element.id} id={element.id} />
                    )   
                });
                setAllSeries(arraySeries);

            }).catch(function (error) {
                console.log("Don't catch data!",  error);
            })
        }
        getSeries()
    }, [])



    return (
        <div className="container mb-5">
            <div className="d-flex justify-content-center p-5 banner mb-5">
                <h1> Bienvenue sur DARKSERIES </h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row justify-content-center " >
                    {allSeries}
                </div>
            </div>
            
        </div>
    )
}

export default Home;