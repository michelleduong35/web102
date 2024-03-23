const Gallery = ({ images }) => {

    return (
      <>
      <h2> Who have we seen so far?</h2>
      <div className="image-container">
      {images && images.length > 0 ? (
        images.map((pic, index) => (
        <li className="gallery" key={index}>
        <img
            className="gallery-screenshot"
            src={pic}
            alt="Undefined screenshot from query"
            width="175px"
        />
        </li>
))) : (
    <div>
      <h3>You haven't seen any dogs yet!</h3>
    </div>
  )}
      </div>
      </>
  )};
  
  export default Gallery;