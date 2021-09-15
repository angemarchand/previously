import React, { useEffect, useState }  from "react";
import Axios from "axios";


import Cards from "../components/Cards";

function Home () {
    const [allSeries, setAllSeries] = useState('');

    useEffect (() => {
        const getSeries = () => {

            let arraySeries = [];

            Axios.get("https://api.betaseries.com/search/shows", {
                params: {key: "1a4116396d60"}
            }).then((response) => {
                // console.log("hi", response);
                let series = response.data.shows
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
            <div className="d-flex justify-content-center mb-5">
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