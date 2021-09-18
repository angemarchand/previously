import React, { Fragment } from "react";
import { Link } from "react-router-dom";


function Cards (data) {

    // console.log(data);
    return (
        <Fragment>
            <div className="card mb-4 me-5 rounded-0 p-4 bg-dark"  style={{width: "18rem"}}>
                <img className="card-img-top rounded-0" src={data.data.poster} alt="" />
                <div className="card-body">
                    <h5 className="card-title title">{data.data.title}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <Link to={"/serie/" + data.data.id} className="btn btn-warning rounded-0 d-flex mt-3 justify-content-center">Go to serie </Link>
                </div>
            </div>
        </Fragment>

    )
}

export default  Cards;