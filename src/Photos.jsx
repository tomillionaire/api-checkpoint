import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Photos = () => {
  const [photos,setPhotos] = useState([])
  const fetchPhotos = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((json) => setPhotos(json))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchPhotos()
  }, [])


  return (
    <div className='d-flex flex-wrap gap-5 justify-content-center'>
     {
      photos.map((pd,index)=>(
        <div key={index} className="card" style={{width: "15rem"}}>
        <img src={pd.url} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{pd.thumbnailurl}</h5>
            <p className="card-text">{pd.title}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
      ))
     }
    </div>

  )
}

export default Photos