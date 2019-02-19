import React, {PureComponent} from 'react'
import Product from './Product'
import {NavLink} from "react-router-dom";

class ListProducts extends PureComponent {

    render() {
        return (
            <div>
                <div className='title-page'>
                   {this.props.title}
                </div>
                <div className="row">
                    <div className="col-12">
                        <NavLink className="btn-primary btn mt-5" to='/addProduct'>Create new product</NavLink>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        {this.props.products.map((product, index) =>
                            <Product
                                key={product.id.toString()}
                                id={product.id}
                                price={product.price}
                                name={product.name}
                                description={product.description}
                                creationDate={product.creationDate}
                                removeProduct={this.props.handleRemoveProduct}
                            />
                        )}
                    </div>
                </div>


            </div>

        )
    }
}

export default ListProducts;