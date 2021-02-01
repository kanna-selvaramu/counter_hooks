import React from 'react'; 
import "./header.css";

class Header extends React.Component {
    render() {
        return(
            <div className = "cls_headerWrapper">
                <div className = "cls_headerCountDisplay">
                    {this.props.cart_count} Items
                </div>
            </div>
        )
    }
}

export default Header;