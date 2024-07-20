import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const controller = new AbortController();
   ;(async () => {
    try {
      setLoading(true);
      setError(false);
       const response = await axios.get('/api/products?search=' + searchTerm,
        {
          signal: controller.signal
        }
       )
       setProducts(response.data);
       setLoading(false);
    } catch (error) {
      if(axios.isCancel(error)) {
        console.log('The request was cancelled',error.message);
      return;
      }
      setError(true);
      setLoading(false);
    }
   })()
  //  cleanup
   return () => {controller.abort()}
},[searchTerm])

// const [products, error, loading] = customReactQuery('/api/products')
// if(error) {
//   return  <h1>Something went wrong</h1>
// }
// if(loading) { 
//  return <h1>Loading...</h1>
// }
  return (
    <>
    {error && <h1>Something went wrong</h1>}
    <input type="text" placeholder='Search' value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}
    />
    {!error && <h1>Abdul Quddos aur API in react</h1>}
    {loading && <h1>Loading...</h1>}
    {!error && !loading && <h2>Number of products are : {products.length}</h2>}
    </>
  )
}

export default App


// const customReactQuery = (urlPath) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//    (async () => {
//     try {
//       setLoading(true);
//       setError(false);
//        const response = await axios.get(urlPath)
//        setProducts(response.data);
//        setLoading(false);
//     } catch (error) {
//       setError(true);
//       setLoading(false);
//     }
//    })()
// },[])

// return [ products, error, loading ]
// }