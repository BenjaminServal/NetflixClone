import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './api/MovieApi';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Les films populaires" fetchUrl={requests.fetchMoviesTrending} isPoster={true}/>
      <Row title="Les films d'animation" fetchUrl={requests.fetchMoviesAnimation} />
      <Row title="Les comédies" fetchUrl={requests.fetchMoviesComedy} />
      <Row title="Les documentaires" fetchUrl={requests.fetchMoviesDocu} />
      <Row title="Les films d'horreur" fetchUrl={requests.fetchMoviesHorror} />

    </div>
  );
}

export default App;
