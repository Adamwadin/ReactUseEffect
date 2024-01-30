
import { useEffect, useState } from 'react';
import './App.css'
import { getMovies } from './getMovies';
import { IMovie } from './models/IMovie';

function App() {
 const [movieList, setMovieList] = useState<IMovie[]>();
 const [test, setTest] = useState(false);

  useEffect(() => {

    if(movieList) return
    
    const getData = async ()=>{ 
      const gettedMovies = await getMovies()
      
      if (shouldUpdate){
        setMovieList(gettedMovies)
        console.log(movieList);
      }
    }
    
    let shouldUpdate = true
    
    getData()

    return ()=>{
      shouldUpdate = false
      
    }


});

 const html = movieList?.map((movie)=>{
  return <p key={movie.id}>{movie.name}</p>
 })

const stringList = ["sfsdf","sdfs","sdfsd"]
const html2 = stringList.map((string, i)=>{
  return <p>{string + "HejHej" + String(i +1) + ", "}</p>
})

  return (
    <>
    <p>{movieList?.length}</p>
    <div>{html}</div>
    <div>{html2}</div>
   <button onClick={()=>{setTest(!test)}}>Hej</button>
    </>
  )
}

export default App
