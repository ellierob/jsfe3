import { useState } from "react";
// import useServ from "../customHooks/useFetch.js";
import useServ from "../customHooks/useXhr.jsx";
// import useServ from "../customHooks/useAjax.js";

function Form(props) {
    const url =
        props.url;
    const endpoint = url + 'books'
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');

    const [books, postData, errLog] = useServ(endpoint, 'POST', props.books, props.setBooks, (t, resObj) => [...t, resObj]);
    // const [tbl, postData] = useFetch("http:localhost:3001/books", 'POST')
    function handleSubmit(e) {
        // prevents default page reload submit function
        e.preventDefault();
        // console.log(props.books)
        const book = {
            id: props.books.length + 1,
            title, writer, price, rating
        }
        console.log(book)

        // /*         // post data query to server

        // const postData =
        // async (data)=> {
        //     const pack = {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(data)
        //     }
        //     const res = await fetch(
        //         "http://localhost:3001/books",
        //         {...pack}
        //         )

        //     if(res){

        //         const book = await res.json();
        //         console.log(book);
        //         props.setBooks([...props.books, book]);

        //         // reload/ re-render app.js, clears form fields & states
        //         //window.location.reload();
        //     }
        // }

        postData(book);

        // const [books] = useServ('http://localhost:3001/books', 'GET');
        console.log(books);
        // props.setBooks((b)=>{
        //     b = [...books, book];
        //     console.log('updated books:', b);
        //     return b;
        // });
        //console.log(props.books)

        //clear state after submit
        setTitle('');
        setWriter('');
        setPrice('');
        setRating('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <span>Title: </span>
                    <input type="text" id='title'
                        //syncs form field value & view with set state
                        value={title}
                        //sets state value from form field input event
                        onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label htmlFor="">
                    <span>Writer</span>
                    <input type="text" id='writer' value={writer} onChange={(e) => setWriter(e.target.value)} />
                </label>
                <label htmlFor="">
                    <span>Price: </span>
                    <input type="text" id='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <label htmlFor="">
                    <span>Rating: </span>
                    <input type="text" id='rating' value={rating} onChange={(e) => setRating(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form