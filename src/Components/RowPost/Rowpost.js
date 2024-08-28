import React, { useEffect,useState } from 'react'
import { API_Key,Img_Url } from '../../constants/constants'
import axios from "../../axios";
import urls from '../../urls'
import './Rowpost.css'

function Rowpost(props) {
  const [movies, setMovies] = useState([])
  useEffect( ()=>{
    axios.get(props.url)
    
    
         .then((response)=>{
          console.log(response.data.results)
          setMovies(response.data.results)
        })
          .catch( ()=>{
            console.log("network error")
         
         })

 },[] )
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
        {   movies.map((obj) => {
              console.log(Img_Url + obj.backdrop_path); // Logging the image URL for debugging
              return (
                  <img
                    key={obj.id}
                    className= {props.isSmall ? "smallPoster" : 'poster'}
                    alt="poster"
                    src={`${Img_Url + obj.backdrop_path}`}
    />
  );
})}
</div>
</div>
  )
}

         


export default Rowpost