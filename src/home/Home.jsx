import {useEffect,useState} from 'react';
import NavBar from "../components/navBar/NavBar"
import Features from '../components/features/Features';
import ListMovie from '../components/listmovies/ListMovie';
import {useGetMovies} from '../hooks/useGetMovies';
import {Outlet} from 'react-router-dom';
import "./Home.scss"
function Home() {

  const [userTitle, setUserTitle] = useState("")
  useEffect(() => {
     setUserTitle(localStorage.getItem("nameUser"))
  }, [])
  
  return (
    <div className="home-container">
      <NavBar />
      <Features />
      <ListMovie title={`Continúa viendo, ${userTitle}.` }/>
      <ListMovie title={`Más vistos` }/>

    <Outlet/>
    </div>
  );
}

export default Home;
