import React, {PureComponent} from 'react'
import {NavLink} from "react-router-dom";

import Product from './Product'

class ListProducts extends PureComponent {
    render() {

        const { title, products, handleRemoveProduct} = this.props;

        return (
            <div>
                <div className='title-page'>
                   {title}
                </div>
                <div className="row">
                    <div className="col-12">
                        <NavLink className="btn-primary btn mt-5" to='/addProduct'>Create new product</NavLink>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">

                        {Object.values(products).map((product, index) =>
                            <Product
                                key={product.id.toString()}
                                id={product.id}
                                price={product.price}
                                name={product.name}
                                description={product.description}
                                creationDate={product.creationDate}
                                removeProduct={handleRemoveProduct}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListProducts;