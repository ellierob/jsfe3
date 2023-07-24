function Books(
            /* Using react props data flow feature,
            data can be passed from parent component 
            as an prop object containing all keys and values
            as argument to child component */
            props 
            ){

                function addToCart(){
                    console.log('Im Clicked');
                    props.upCart(cartCount=> cartCount+=1);
                    props.setCost(cost => cost + props.book.price);
                }
                function removeFromCart(){
                    if (props.cartCount > 0){
                        props.upCart(cartCount=> cartCount-=1);
                        props.setCost(cost => cost - props.book.price);
                    }
                    if (props.cartCount === 0){
                        alert(`Can't decrease less than 0`);
                    }
                }
                return (
                    // the html element returned by the function
                    <div key={props.book.id} className="book">
                        <h2>Title: {props.book.title}</h2>
                        <p>Writer: {props.book.writer}</p>
                        <p>Price: {props.book.price}</p>
                        <p>Rating: {props.book.rating}</p>
                        {/* mouse event: updates on user input */}
                        <button onClick={addToCart}>Add to cart</button>
                        <button onClick={removeFromCart}>Remove from cart</button>
                    </div>
                                    )
                                }

export default Books