import React from "react"; 
import "./product.css"

class Product extends React.Component {
    render () {
        let prod = this.props.value;
        return(
            <div className = "cls_ProductDetails" id = {"id_prod" + prod.id}> 
                <div className = "cls_prodQtyDisplay">
                    {prod.count}
                </div>
                <div className = "cls_prodBtnWrapper">
                    <div className = "cls_prodInc" onClick = {() => this.props.onClick("increment")}>
                        Increment
                    </div>
                    <div className = "cls_prodDec" onClick = {() => this.props.onClick("decrement")}>
                        Decrement
                    </div>
                    <div className = "cls_prodDel" onClick = {() => this.props.onDeleteClick()}>
                        Delete
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;