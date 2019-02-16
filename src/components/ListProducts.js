import React, {PureComponent} from 'react'
import Product from './Product'
import {NavLink, Route} from "react-router-dom";
import AddProduct from "./AddProduct";

class ListProducts extends PureComponent {
    state = {
        products: [
            {
                id: 1,
                price: 20000.00,
                name: "Car",
                description: "This is a Car",
                creationDate: new Date(Date.now()),
            },
            {
                id: 2,
                price: 400000.00,
                name: "House",
                description: "This is a House",
                creationDate: new Date(Date.now()),
            },
            {
                id: 3,
                price: 300.00,
                name: "Guitar",
                description: "This is a Guitar",
                creationDate: new Date(Date.now()),
            },
            {
                id: 4,
                price: 60.00,
                name: "Game",
                description: "This is a Game",
                creationDate: new Date(Date.now()),
            },
            {
                id: 5,
                price: 1000.00,
                name: "Computer",
                description: "This is a Computer",
                creationDate: new Date(Date.now()),
            },
        ]
    };
    handleEditProduct = (id) => {

        const product = this.state.products.filter(p => p.id === id);
        this.props.match.history.push('/addProduct', {product: product[0]})
    };
    handleUpdateProduct = (productToUpdate) => {
        this.setState(prevState => {

            prevState.products.map((product) => {
                if (product.id === productToUpdate.id) {
                    product.name = productToUpdate.name;
                    product.price = productToUpdate.price;
                    product.description = productToUpdate.description;
                    product.creationDate = productToUpdate.creationDate;
                }
            })
        });

    };
    handleRemoveProduct = (id) => {
        this.setState(prevState => {
            return {
                products: prevState.products.filter(p => p.id !== id)
            };
        });

    };
    handleAddProduct = (product) => {
        this.setState(prevState => {
            return {
                products: [
                    ...prevState.products,
                    {
                        name: product.name,
                        price: product.price,
                        id: this.prevPlayerId += 1,
                        description: product.description,
                        creationDate: new Date(Date.now())
                    }
                ]
            }
        });
    };
    handleActionProduct = (product) => {
        if (product.id) {
            this.handleUpdateProduct(product);
        } else {
            this.handleAddProduct(product);
        }


    };
    prevPlayerId = 5;


    render() {
        return (
            <div>
                <Route exact path="/addProduct"
                       render={(match) => <AddProduct actionProduct={this.handleActionProduct} match={match}/>}/>
                <div className="row">
                    <div className="col-12">
                        <NavLink className="btn-primary btn mt-5" to='/addProduct'>Create new product</NavLink>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        {this.state.products.map((product, index) =>
                            <Product
                                key={product.id.toString()}
                                id={product.id}
                                price={product.price}
                                name={product.name}
                                description={product.description}
                                creationDate={product.creationDate}
                                editProduct={this.handleEditProduct}
                                removeProduct={this.handleRemoveProduct}
                            />
                        )}
                    </div>
                </div>


            </div>

        )
    }
}

export default ListProducts;