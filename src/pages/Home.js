import Person from '../components/Person'

const Home = ({dataArr}) => {

  console.log(dataArr)


  return (
    <div>
      <h1>Home</h1>

      {
        dataArr &&
          dataArr.map((person) => {
            return (
              <Person 
                id={person.id}
                first={person.first_name} 
                last={person.last_name}
              />
            )
          })
      }

      

    </div>
  )
}

export default Home;