import React, { useEffect,useState } from 'react'
import { API_Key,Img_Url } from '../../constants/constants'
import axios from "../../axios";
import urls from '../../urls';
import Youtube from 'react-youtube'
import './Rowpost.css'

function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
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
//from documentation specificatiosn for youtube screen
 const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

 const handleMovie=(id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_Key}&language=en-US`).then(response=>{
    if(response.data.results.length!=0){
      setUrlId(response.data.results[0])
    }
    else{
      console.log('Array empty')
    }
  })
//this id is from tmdb api and we have to give this id to youtube
 }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
        {   movies.map((obj) => {
          
              return (
                  <img onClick={()=>handleMovie(obj.id)}
                    key={obj.id}
                    className= {props.isSmall ? "smallPoster" : 'poster'}
                    alt="poster"
                    src={`${Img_Url + obj.backdrop_path}`}
    />
  );
})}
</div>
{ urlId &&  <Youtube opts={opts} videoId={urlId.key}/>}
</div>
  )
}

 //If urlId exists (is truthy), the YouTube component is rendered.
//If urlId is falsy, nothing is rendered.        


export default Rowpost