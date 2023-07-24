function Cart(props){
    return (
        <div>
            <p>Cart: {props.cartCount} items</p>
            <p>Cost: {props.cost} tk</p>
        </div>
    )
}

export default Cart