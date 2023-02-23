import { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Instructions from './components/Instructions'
import Comments from './components/Comments'

function App() {

  //const [comments, setComments] = useState([])
    
  // useEffect(() => {
  //     const getData = async () => {
  //         const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  //         const data = await response.json()
  //         setComments(data)
  //         console.log(data)
  //     }
  //     getData()
  // }, [])

  return (
    <div className="container">
      {/* <Instructions /> */}
      <Comments />
    </div>
  );
}

export default App;
