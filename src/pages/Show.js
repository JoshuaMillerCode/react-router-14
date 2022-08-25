import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Show = ({data}) => {
  const { id } = useParams()
  const [person, setPerson] = useState([])


  useEffect(() => {
    const found = data.find(person => person.id === parseInt(id))
    setPerson(found)
  }, [])

  return (
    <div>
      <h1>Show</h1>
      <div>
       
        <h1>{person.first_name}</h1>
        <p>{person.email}</p>
        <span>{person.gender}</span>
         <span>{person.id}</span>
      </div>
    </div>
  )
}

export default Show;