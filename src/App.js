import './App.css';
import React,{useState,useEffect} from 'react';
 import Home from './Component/Home.jsx';
 import axios, { Axios } from 'axios'
 import Pagination from './Pagination'
//  import Person from './Person'
// import Personadd from './Personadd';
// import Personremove from './Personremove';
function App() {
const[pokemon,setpokemon]= useState([])
const [currentpage,setCurrentpage]=useState('https://pokeapi.co/api/v2/pokemon/')
const [nextpage,setNextpage]=useState()
const [prevpage,setPrevpage]=useState()
const [loading,setLoading]=useState(true)

useEffect(()=>{
  let cancel 
  setLoading(true)
  axios.get(currentpage,{
    cancelToken:new axios.CancelToken(c=>cancel= c)  

  }).then(res=>{
    setLoading(false)
    setNextpage(res.data.next)
    setPrevpage(res.data.previous)
    setpokemon(res.data.results.map(p => p.name))
  })

  return () =>
  cancel()
},[currentpage])

function gonextpage(){
  setCurrentpage(nextpage)
}
function goprevpage(){
  setCurrentpage(prevpage)
}

if(loading) return 'Loading....'
  return (
    <div className="App">
      <p>hello pokemon</p> 
      <>
     {/* <Home pokemon={pokemon}/>
     <Pagination
     gonextpage={nextpage ?  gonextpage:null}
     goprevpage={prevpage? goprevpage:null}

     />  */}
     <Home/>
     </>
      {/* <Personadd/>
      <Personremove/>

      <Person/> */}
    </div>
  );
}

export default App;
