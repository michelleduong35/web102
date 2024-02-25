import bagel from './assets/bagel.svg'
import './App.css'
import StoreCard from './components/StoreCard.jsx';

function App() {
  const stores = [
    {
      name: "Mike's Bagels",
      image: "https://cdn.vox-cdn.com/uploads/chorus_image/image/72173228/P1150743.0.jpeg",
      location: "Broadway, NY",
      link: "https://www.yelp.com/biz/mikes-bagels-new-york",
    },
    {
      name: "Bo's Bagels",
      image: "https://cdn.vox-cdn.com/thumbor/FdeLwCrFSA71EidmEtHYpwN-neA=/0x0:2048x1360/1270x953/filters:focal(861x517:1187x843):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69798933/BagelsBos.0.jpg",
      location: "Harlem, NY",
      link: "http://www.bosbagels.com/",
    },
    {
      name: "Absolute Bagels",
      image: "https://cdn.vox-cdn.com/thumbor/_ASVCJmiq_B4TRR3nFV9ZeehS9I=/0x0:2048x1360/1270x953/filters:focal(861x517:1187x843):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62582797/BagelMapAbsoluteBagels1.0.0.jpg",
      location: "Broadway, NY",
      link: "https://www.yelp.com/biz/absolute-bagels-new-york",
    },
    {
      name: "Bagels Talk",
      image: "https://cdn.vox-cdn.com/thumbor/3eOCkRgEUosBVBwpHWTDtELx_vk=/0x0:864x557/1270x953/filters:focal(363x210:501x348):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/72173229/BagelTalk.0.jpg",
      location: "Upper West Side, NY",
      link: "http://www.bageltalknyc.com/",
    },
    {
      name: "Utopia Bagels",
      image: "https://pyxis.nymag.com/v1/imgs/51b/e08/8b6242f20ce80b39938c2e46e842330a36-utopia-bagels.rhorizontal.w700.jpg",
      location: "Queens, NY",
      link: "https://www.utopiabagelsny.com/",
    },
    {
      name: "Between the Bagel",
      image: "https://cdn.vox-cdn.com/thumbor/w8NMkOdoW6hySFj5AXD1PAe28ZI=/0x0:2048x1360/1270x953/filters:focal(861x517:1187x843):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71004123/P1070489.0.jpeg",
      location: "Queens, NY",
      link: "https://www.yelp.com/biz/between-the-bagel-astoria",
    },
    {
      name: "Hudson Bagel",
      image: "https://cdn.vox-cdn.com/thumbor/2bHDyUR3nPjypEDlBUa6NRwyuCk=/0x0:2048x1360/1270x953/filters:focal(861x517:1187x843):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/70514134/BagelHudson.0.jpeg",
      location: "Hudson Yards, NY",
      link: "https://www.yelp.com/biz/hudson-bagel-new-york",
    },
    {
      name: "Brooklyn Bagel & Coffee Company",
      image: "https://cdn.vox-cdn.com/thumbor/9L8DftJLmDPMr7IicJItbyQqc2M=/0x0:4032x3024/1270x953/filters:focal(1694x1190:2338x1834):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69798938/BagelBrooklyn.0.jpg",
      location: "Astoria, NY",
      link: "http://www.bkbagel.com/",
    },
    {
      name: "Tal Bagels",
      image: "https://cdn.vox-cdn.com/thumbor/hLvCkkmvxPFuPo0MD4sv69nXuiY=/0x0:2048x1360/1270x953/filters:focal(861x517:1187x843):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69798939/BagelTal.17.jpg",
      location: "Sutton Place, NY",
      link: "http://ordertalbagels.com/",
    },
    {
      name: "Bagels & Schmear",
      image: "https://cdn.vox-cdn.com/thumbor/NKRz_cFRUyJI9H-slvpoNWXmXIQ=/0x0:2048x1360/1270x953/filters:focal(861x517:1187x843):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71637419/BagelSchmear.0.jpg",
      location: "Kips Bay, NY",
      link: "http://www.bagelsandschmear.com/",
    }
    ]
  return (
    <>
      <img src={bagel} className="bagel" alt="Bagel Image" style={{ width: '25%'}}/>
      <h1>Community Board for NY Bagels</h1>
      <div className="store-card-container">
        {stores.map((store, i) => {
				  return (<StoreCard
					  key={i}
            name={store.name}
            image={store.image}
            location={store.location}
            link={store.link} />)
			  })}
    </div>

    </>
  )
}

export default App
