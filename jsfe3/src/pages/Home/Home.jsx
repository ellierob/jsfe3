
/* App.js is the top level component: only this is rendered in index.js,
all other components need to be imported and referenced inside it */
import Books from '../../components/Books.jsx';
import Cart from '../../components/Cart.jsx';
import Form from '../../components/Form.jsx';
import Logout from '../../components/Logout.jsx';
import Servertest from "../../components/Servertest.jsx";

// hooks need to be imported from react
import { useEffect, useState } from 'react';
// import useServ from '../../customHooks/useFetch.js';
// import useServ from '../../customHooks/useFetch2.js';
// import useServ from '../../customHooks/useAjax.js';
import useServ from '../../customHooks/useXhr.jsx';

function Home(props) {
  const url = props.url;
  const endPoint = url + 'books';
  const name = props.creds.name
  // || 'Abs';
  /*state handler /hook for react to render state change */
  const [cartCount, upCart] = useState(0);
  const [cost, setCost] = useState(0);
  let [books, setBooks] = useState([]);
  // let [birds, setBirds] = useState([]);

  // by default use effect executes after component first mount
  // without it fetch runs on loop
  // const [birds] = useServ('http://localhost:3001/birds', 'GET', birds, setBirds);
  // const birds = useServ('http://localhost:3001/birds', 'GET')

  // console.log({birds})

  [books] = useServ(endPoint, 'GET', books, setBooks);
  // const books = useServ('http://localhost:3001/books', 'GET')

  // console.log(books)

  return (
    <div className="Home">
      <h2>Home</h2>

      {/* 
        (JSX comment)
        javascript inside JSX
        need to be in curly braces 
        */}
      <Logout root={props.root} setRoot={props.setRoot}
        url={url}
      //  creds={props.creds} setCreds={props.setCreds}
      />
      <Cart cartCount={cartCount} cost={cost} />
      {/* {<Servertest/>} */}
      <h1>Hello {name}!</h1>
      <p>Your favorite birds are:</p>
      <ul>
        {/* {birds.map(bird => (<li key={bird}>{bird}</li>))} */}
      </ul>
      <div>
        <h2>Books Library</h2>
        {/*errLog && <div>Failed to fetch</div>*/}
        {
          // value of keys in prop object can be used
          books.map(book => (
            <Books
              book={
                book
                /* through react props data flow feature,
                data is passed from parent to child component
                using js curly braces */
              }
              /* passing statehandler to child component as prop
              allows state lift from child to parent component */
              upCart={upCart}
              cartCount={cartCount}
              setCost={setCost}
              key={book.id}
            />
          ))
        }
      </div>
      {/* child component reference 
        inside parent component return object element, 
        returns child component element object */}

      {<Form
        books={books}
        setBooks={setBooks}
        url={url}
      />}

    </div>
  )
}
export default Home