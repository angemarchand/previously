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
                    <div className="d-flex justify-content-center">
                        <Link to={"/serie/" + data.data.id} className="btn btn-warning rounded-0 mt-3">Go to serie </Link>
                    </div>
                    
                </div>
            </div>
        </Fragment>

    )
}

export default  Cards;