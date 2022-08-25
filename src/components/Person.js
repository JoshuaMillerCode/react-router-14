import { Link } from "react-router-dom";

const Person = ({id, first, last}) => {
  return (
    <div>
      <Link to={`/${id}`}> {first} {last}</Link>
      
    </div>
  )
}

export default Person;