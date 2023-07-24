import serv from "../customHooks/useFetch2.jsx";
// import {default as serv} from "../customHooks/useFetch.js";
import Books from "./Books.jsx";

export default servertest;

function servertest(props) {
    let parsed = [];
    // parsed =
    serv('http://localhost:3001/books')
        .then(res => {
            parsed = res;
            console.log(res);
            return parsed;
        })
        .then(parsed => {
            console.log(parsed);
            return parsed;
        })
    // .then(parsed=>{
    return (
        <div>
            <h2>Server Test</h2>
            {
                // <p>working</p>
                // serv('http://localhost:3001/books')
                // .then(res => {
                //     parsed = res;
                //     console.log(res);
                //     return parsed;
                // })
                // .then(parsed => {
                //     console.log(parsed);
                //     return parsed;
                // })
                // .then(
                parsed.map(book =>
                    (<Books books={book} key={book.id} />)
                )
                // )
            }
        </div>
    )

    // })
}