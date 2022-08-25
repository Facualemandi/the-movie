import React from 'react'
import { useParams } from 'react-router-dom'
import { useReactQuery } from '../../Hooks/useReactQuery'

const MoviesPerson = () => {

    console.log(useParams())
    const API_URL = 'https://api.themoviedb.org/3/person/74568/combined_credits?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295'
    const {data, status} = useReactQuery(`${API_URL}`, 'MoviesPerson');

    if(status === 'loading'){
        return <p>Cargando</p>
    }else{
        console.log(data)
    }

  return (
   <>
    <main>
        <h3>Acting</h3>
        {data.cast.map(film => (
            <p>Facu</p>
        ))}
    </main>
   </>
  )
}

export default MoviesPerson