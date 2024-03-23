import { useState } from 'react'
import './App.css'
import Gallery from '/components/Gallery';

function App() {
  const url = `https://api.thedogapi.com/v1/images/search?`;
  const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
  const [dogData, setDogData] = useState(null);
  const [currentImage, setCurrentImage] = useState("https://cdn2.thedogapi.com/images/rkVlblcEQ_1280.jpg");
  const [prevImages, setPrevImages] = useState(["https://cdn2.thedogapi.com/images/rkVlblcEQ_1280.jpg"]);
  const [filters, setFilters] = useState([]);
  
  const callAPI = async () => {
    try {
      const response = await fetch(url + 'api_key=' + ACCESS_KEY);
      const json = await response.json();
      console.log(json);
      if (json.some(result => filters.includes(result.breeds[0].breed_group)) || 
          json.some(result => filters.includes(result.breeds[0].bred_for)) ||
          json.some(result => filters.includes(result.breeds[0].life_span))) {
        callAPI(); 
      } else {
        setDogData(json[0]);
        setCurrentImage(json[0].url);
        setPrevImages((images) => [...images, json[0].url]);
      }
    } catch (e) {
      console.error('Error fetching dog data: ', e);
    }
  };

  const handleFilterClick = (filter) => {
    if (!filters.includes(filter)) {
      setFilters((prevFilters) => [...prevFilters, filter]);
    }
  };

  const handleResetFilters = () => {
    setFilters([]); 
  };

  return (
    <div className='AppPage'>
      <div className='prevSection'>
        <Gallery images={prevImages} />
      </div>
      <div className='mainSection'>
        <h1>Dog Finder</h1>
        <h2>Discover new dogs from around the world!</h2>
          {dogData && (
            <>
              <h3>{dogData.breeds[0].name}</h3>
              <button onClick={() => handleFilterClick(dogData.breeds[0].breed_group)}>{dogData.breeds[0].breed_group}</button>
              <button onClick={() => handleFilterClick(dogData.breeds[0].bred_for)}>{dogData.breeds[0].bred_for}</button>
              <button onClick={() => handleFilterClick(dogData.breeds[0].life_span)}>{dogData.breeds[0].life_span}</button>
            </>
          )}
          <img className="dogImg" src={currentImage} alt="Screenshot returned" />
          <button onClick={callAPI}>Get Dog</button>
      </div>
      <div className='filterSection'>
        <h2>Filters Applied</h2>
        <button onClick={handleResetFilters}>Reset Filters</button>
        {filters.map((filter, index) => (
          <p key={index}>{filter}</p>
        ))}
        <p>Tap on an attribute to ban it!</p>
      </div>
    </div>
  )
}

export default App
