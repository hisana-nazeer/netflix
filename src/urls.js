import { API_Key } from './constants/constants'
import axios from './axios'

export const top_picks = `movie/now_playing?api_key=${API_Key}&language=en-US&page=1`
export const trending =  `movie/top_rated?api_key=${API_Key}&language=en-US&page=1`
