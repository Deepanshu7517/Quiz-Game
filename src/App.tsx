import { Outlet} from 'react-router-dom'
import Navbar from './components/Navbar';
export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet"></link>
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://cdn.pixabay.com/video/2022/03/06/109821-685694725_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Content Layer with Background Image on top of video */}
      <div className="App relative z-10 bg-[url('./src/public/background.png')] bg-fixed md:bg-cover lg:bg-contain bg-no-repeat bg-center w-full h-full">
        <Navbar />
        <Outlet />
      </div>
    </div>

  )
}