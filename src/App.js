import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SubContact from './pages/SubContact'
import Show from './pages/Show'

function App() {
  const [data, setData] = useState([{
    "id": 1,
    "first_name": "Mercy",
    "last_name": "Lippiello",
    "email": "mlippiello0@theglobeandmail.com",
    "gender": "Female"
  }, {
    "id": 2,
    "first_name": "Elset",
    "last_name": "Pursehouse",
    "email": "epursehouse1@example.com",
    "gender": "Female"
  }, {
    "id": 3,
    "first_name": "Christiano",
    "last_name": "Towson",
    "email": "ctowson2@ycombinator.com",
    "gender": "Male"
  }, {
    "id": 4,
    "first_name": "Gwenore",
    "last_name": "Fountain",
    "email": "gfountain3@sfgate.com",
    "gender": "Female"
  }, {
    "id": 5,
    "first_name": "Lettie",
    "last_name": "Abyss",
    "email": "labyss4@miibeian.gov.cn",
    "gender": "Female"
  }])


  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home dataArr={data} />} />
          <Route path="/:id" element={<Show data={data} />} />
          <Route path="/about" element={<About greeting="hello" />} />

          <Route path="contact"  element={<Contact />}> 
              
              <Route path="sub" element={<SubContact />} />

          </Route>

          {/* <Route path="contact"  > 
              <Route index element={<Contact />} />
              <Route path="sub" element={<SubContact />} />

          </Route> */}

        

        </Routes>
      </Router>
    </div>
  );
}

export default App;
