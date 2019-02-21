import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import ListProducts from "./components/ListProducts";
import ProductForm from "./components/ProductForm";
import './App.css';

class App extends Component {

    state = {

        products: {
            1: {
                id: 1,
                price: 20000.00,
                name: "Car",
                description: "This is a Car",
                creationDate: new Date(Date.now()),
            },
            2: {
                id: 2,
                price: 400000.00,
                name: "House",
                description: "This is a House",
                creationDate: new Date(Date.now()),
            },
            3: {
                id: 3,
                price: 300.00,
                name: "Guitar",
                description: "This is a Guitar",
                creationDate: new Date(Date.now()),
            },
            4: {
                id: 4,
                price: 60.00,
                name: "Game",
                description: "This is a Game",
                creationDate: new Date(Date.now()),
            },
            5: {
                id: 5,
                price: 1000.00,
                name: "Computer",
                description: "This is a Computer",
                creationDate: new Date(Date.now()),
            }
        }

    };

    generateUniqueId() {
        return Math.random().toString(36).substr(2, 16)
    }

    handleRemoveProduct = (id) => {

        this.setState(prevState => {
            return delete prevState.products[id];
        });

    };

    handleAddProduct = (product) => {
        const id = this.generateUniqueId();

        this.setState(prevState => {
            return prevState.products[id] = {
                name: product.name,
                price: product.price,
                id: id,
                description: product.description,
                creationDate: new Date(Date.now())
            }
        })

    };

    handleUpdateProduct = (productToUpdate) => {

        this.setState(prevState => {
            return prevState.products[productToUpdate.id] = productToUpdate;
        });

    };

    searchProduct = (id, products) => {
        return products[id];
    };

    render() {
        return (<BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route exact path="/"
                               render={(match) => <ListProducts title={'Product List'} match={match}
                                                                products={this.state.products}
                                                                handleRemoveProduct={this.handleRemoveProduct}/>}/>
                        <Route path="/addProduct"
                               render={(match) => <ProductForm title={'Add Product'} addProduct={this.handleAddProduct}
                                                               match={match}/>}/>
                        <Route path="/editProduct/:id"
                               render={(match) => {
                                   const id = match.match.params.id;
                                   const product = this.searchProduct(id, this.state.products);

                                   return (<ProductForm product={product} title={'Edit Product'}
                                                        updateProduct={this.handleUpdateProduct}
                                                        match={match}/>)
                               }}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
