import NavBar from "../components/navBar/NavBar"
import Features from '../components/features/Features';
import ListMovie from '../components/listmovies/ListMovie';
import {useGetMovies} from '../hooks/useGetMovies';
import {Outlet} from 'react-router-dom';
import "./Home.scss"
function Home() {


  return (
    <div className="home-container">
      <NavBar />
      <Features />
      <ListMovie title="Continuar viendo"/>

    <Outlet/>
    </div>
  );
}

export default Home;
