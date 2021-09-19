import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../css/serie.css"


function OneSerie (props) {
    console.log(props);
    let img;
    let title;
    let desc;
    let seasons;
    let nbrEpisode;
    let durationEpi;
    let note;
    let kinds;

    let Params = props.match.params.id
    const [oneSerie, setOneSerie] = useState();
    
    useEffect(() => {

        const  getSerie = () => {
            Axios.get("https://api.betaseries.com/shows/display?v=3.0&id=" + Params, {
                params: {key: "1a4116396d60"}
            }).then((response) => {
                // console.log(response);
                let serie = response.data.show;
                console.log(serie);

                if(serie){
                    setOneSerie(serie)
                }
            
            }).catch(function (error) {
                console.log("display errors!",  error);
            })

        }
        getSerie();
        // eslint-disable-next-line
    }, [])


    let arrayKinds = [];
    
    if(oneSerie) {
        img = oneSerie.images.banner
        title = oneSerie.title
        desc = oneSerie.description
        seasons = oneSerie.seasons
        nbrEpisode = oneSerie.episodes
        durationEpi = oneSerie.length
        note = oneSerie.notes.total
        kinds = oneSerie.genres
        console.log(Object.values(kinds))
        const Kind = Object.values(kinds);
        
        Kind.forEach(element => {
            console.log(element)
            arrayKinds.push(
                <li className="list-group-item bg-warning mb-2 rounded-0" 
                    key={Math.random().toString(36).substring(7)} 
                    id={element.id}> {element} 
                </li>
            )
            
        })
    }
    
        return (
            <div className="container">
                <h1 className="d-flex justify-content-center"> {title} </h1>
                <img className="card-img-top mt-4 mb-5" src={img} alt="" />
                <div className=" row d-flex justify-content-center">
                    <div className="col-4 mb-4 bg-dark text-white me-4 p-4">
                        <div className="items-align-center textColor me-4">
                            <h6>Nombre de saisons : {seasons}</h6>
                        </div>
                        <div className="items-align-center textColor me-4">
                            <h6>Nombre d'épisode : {nbrEpisode} </h6>
                        </div>
                        <div className="items-align-center textColor me-4">
                            <h6>Durée des épisodes : {durationEpi} </h6>
                        </div>
                        <div className="items-align-center textColor me-4">
                            <h6>La note : {note} </h6>
                        </div>
                        <div className="items-align-center textColor mt-4 me-4">
                            <h6>Les genres : </h6>
                            <ul className="list-group text-uppercase" >
                                {arrayKinds}
                            </ul>
                        </div>
                        <div className="d-flex justify-content-center"> 
                            <Link to="#" className="btn btn-warning rounded-0 mb-5 mt-5"> Archiver la série </Link> 
                        </div>
                    </div>
                    <div className="col mb-3 text-white bg-dark p-5 desc">
                        <p>{desc}</p>
                    </div>
                </div>
                
                
            </div>
        )

}

export default OneSerie;