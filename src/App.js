import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import ListProducts from "./components/ListProducts";
import ProductForm from "./components/ProductForm";

class App extends Component {

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

    prevPlayerId = 5;

    render() {
        return (<BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route exact path="/"
                               render={(match) => <ListProducts title={'List of Product'} match={match}
                                                                products={this.state.products}
                                                                handleRemoveProduct={this.handleRemoveProduct}/>}/>
                        <Route path="/addProduct"
                               render={(match) => <ProductForm title={'Add Product'} addProduct={this.handleAddProduct}
                                                               match={match}/>}/>
                        <Route path="/editProduct/:id"
                               render={(match) => <ProductForm products={this.state.products} title={'Edit Product'}
                                                               updateProduct={this.handleUpdateProduct}
                                                               match={match}/>}/>
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
