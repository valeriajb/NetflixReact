import NavBar from "../components/navBar/NavBar"
import Features from '../components/features/Features';
import ListMovie from '../components/listmovies/ListMovie';
import "./Home.scss"
function Home() {
  return (
    <div className="home-container">
      <NavBar />
      <Features />
      <ListMovie/>
      <ListMovie/>
      <ListMovie/>


    </div>
  );
}

export default Home;
