import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import "./index.css";
import Product from './product';
// const initState = {
//     cart_count : 0, 
//     product_details : [
//         {
//             count : 0, 
//             id : 0,
//         }, 
//         {
//             count : 0, 
//             id : 1,
//         }, 
//         {
//             count : 0, 
//             id : 2,
//         }, 
//     ]
// }
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart_count : 0, 
            product_details : [
                {
                    count : 0, 
                    id : 0,
                }, 
                {
                    count : 0, 
                    id : 1,
                }, 
                {
                    count : 0, 
                    id : 2,
                }, 
            ]
        }
    }
    handleClick(task, id) {
        console.log("handleCLick");
        let products = [...this.state.product_details]
        let index = products.findIndex(el => el.id === id);
        console.log("index", index)
        let count = ( task === "increment" ) ? products[index].count + 1 :  ( products[index].count == 0 ? 0 : products[index].count - 1 );
        console.log("count ", products[index].count , count)
        let prod =  { 
                        count : count, 
                        id : index
                    }
        products[index] = prod;
        this.setStateValues(products);
    }
    setStateValues(products) {
        let cart = 0;
        let ctr = 0;
        for( ctr = 0; ctr < products.length ;  ctr++) {
            cart = cart + products[ctr].count;
        }
        this.setState({
            cart_count: cart,
            product_details : products
        });
    }
    deleteProduct(id) {
        let products = [...this.state.product_details]
        let index = products.findIndex(el => el.id === id);
        products.splice(index,1);
        this.setStateValues(products);
    }
    reset() {
        this.setState({
            cart_count : 0, 
            product_details : [
                {
                    count : 0, 
                    id : 0,
                }, 
                {
                    count : 0, 
                    id : 1,
                }, 
                {
                    count : 0, 
                    id : 2,
                }, 
            ]
        })
    }
    render() {
        return (
            <div className = "cls_Wrapper">
                <Header cart_count = {this.state.cart_count}/>
                <div className = "cls_bodyWrapper">
                    <div className = "cls_resetWrap">
                        <div className = "cls_resetBtn" onClick = {() => this.reset()}>
                            Reset
                        </div>
                    </div>
                    <div className = "cls_prodWrapper">
                        {
                            this.state.product_details.map((product) =>
                                <Product key = {product.id.toString()} value = {product} onClick = {(task) => this.handleClick(task, product.id)} onDeleteClick = {() => this.deleteProduct(product.id)}/> 
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
    
}

ReactDOM.render( <App />, document.getElementById("root"));