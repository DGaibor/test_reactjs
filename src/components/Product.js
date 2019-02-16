import React, {PureComponent} from 'react'

class Product extends PureComponent {
    render() {
        const {id, price, name, description, creationDate, editProduct, removeProduct} = this.props;
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
                                    <button className="btn btn-info" onClick={() => editProduct(id)}>Edit
                                    </button>

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