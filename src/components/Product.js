import React, {PureComponent} from 'react'
import {NavLink} from "react-router-dom";

class Product extends PureComponent {
    render() {
        const {id, price, name, description, creationDate, removeProduct} = this.props;

        return (
            <div>
                <div className="card card-with mt-2 mr-2">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Price: {price}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Date: {creationDate.toLocaleDateString()}</h6>
                        <p className="card-text">{description}</p>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-5">
                                    <button className="btn btn-danger" onClick={() => removeProduct(id)}>Remove</button>
                                </div>
                                <div className="col-5">
                                    <NavLink className="btn-primary btn" to={`/editProduct/${id}`}>Edit</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;