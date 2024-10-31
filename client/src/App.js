import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import config from './config';

function App() {
  const [bookList, setBookList] = useState([])
  useEffect(() => {

    const fetchData = async () => {
      let response = await axios.get(`${config.serverUrlPrefix}/books`)
      setBookList(response.data.data)
    }
    fetchData()
  }, [])
  return (
    <div>
      <h3>Book List</h3>
      <ul>
        {bookList.map((book, i) => <li>{book.attributes.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
