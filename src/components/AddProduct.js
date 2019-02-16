import React, {Component} from 'react'
import {NavLink} from "react-router-dom";

class AddProduct extends Component {

    state = {
        product: {
            id: null,
            name: '',
            price: 0,
            description: '',
            creationDate: null
        }
    };

    componentDidMount() {
        if (this.props.match.location.state) {
            const {id, price, name, description, creationDate} = this.props.match.location.state.product;
            this.setState({
                product: {
                    id: id,
                    name: name,
                    price: price,
                    description: description,
                    creationDate: creationDate
                }
            });
        }
    }

    handleValueNameChange = (e) => {
        this.setState({
            product: {
                id:this.state.product.id,
                name: e.target.value,
                price: this.state.product.price,
                description: this.state.product.description,
                creationDate:this.state.product.creationDate
            }
        })
    };
    handleValuePriceChange = (e) => {
        this.setState({
            product: {
                id:this.state.product.id,
                price: e.target.value,
                name: this.state.product.name,
                description: this.state.product.description,
                creationDate:this.state.product.creationDate
            }
        })
    };
    handleValueDescriptionChange = (e) => {
        this.setState({
            product: {
                id:this.state.product.id,
                description: e.target.value,
                price: this.state.product.price,
                name: this.state.product.name,
                creationDate:this.state.product.creationDate
            }
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.actionProduct(this.state.product);
        this.setState({
            product: {
                id: null,
                name: '',
                price: 0,
                description: '',
                creationDate: null
            }
        });
        this.props.match.history.push(`/`)

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" value={this.state.product.name}
                           onChange={this.handleValueNameChange} placeholder="Name" required/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control"  step="any" value={this.state.product.price}
                           onChange={this.handleValuePriceChange} placeholder="Price" required/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" value={this.state.product.description}
                           onChange={this.handleValueDescriptionChange} placeholder="Description" required/>
                </div>
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Add Product"
                />
                <NavLink className="btn-danger btn ml-2" to='/'>Cancel</NavLink>
            </form>

        )
    }
}

export default AddProduct;