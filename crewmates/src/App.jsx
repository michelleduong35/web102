import React from 'react'
import './App.css'
import ReadMates from './pages/ReadMates'
import CreateMate from './pages/CreateMate'
import EditMate from './pages/EditMate'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  const mates = [
    {'id':'1', 
    'name': 'Alice',
    'speed':1, 
    'color': 'Red'},
    {'id':'2', 
    'name': 'Bob',
    'speed':2, 
    'color': 'Red'},
    {'id':'3', 
    'name': 'Charlie',
    'speed':3, 
    'color': 'Red'},
    {'id':'4', 
    'name': 'Delta',
    'speed':4, 
    'color': 'Red'},
]

// Sets up routes
let element = useRoutes([
  {
    path: "/",
    element:<ReadMates data={mates}/>
  },
  {
    path:"/edit/:id",
    element: <EditMate data={mates} />
  },
  {
    path:"/new",
    element: <CreateMate />
  }
]);

  return (
    <div className="App">
      <div className="header">
        <h1>Crewmate Creator</h1>
        <h2>Here is where you can create your very own set of crewmates before sending them off into space!</h2>
        <Link to="/"><button className="headerBtn"> Crewmate Gallery 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Create a Crewmate! </button></Link>
      </div>
      {element}
    </div>
  );
}

export default App
