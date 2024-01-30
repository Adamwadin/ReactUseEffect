import { IMovie } from "../models/IMovie"

interface IMoviesProps{
    movieList: IMovie[]
}

export function Movies(props:IMoviesProps){
   const html =  props.movieList.map((movie)=>{
        return <p key={movie.id}>{movie.name}</p>
    })
    return <><div>{html}</div></>
}