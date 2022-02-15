const base_url = "https://api.themoviedb.org/3";
const api = "155571031120dab1b3fe9eee4ab17978";

const requests = { 
  fetchMoviesTrending: `${base_url}/trending/all/day?api_key=${api}&anguage=fr-FR`,
  fetchMoviesTopRated: `${base_url}/movie/top_rated?api_key=${base_url}&language=fr-FR`,

  fetchMoviesAction:  `${base_url}/discover/movie?api_key=${base_url}&language=fr-FR&with_genres=28`,
  fetchMoviesComedy:  `${base_url}/discover/movie?api_key=${api}&language=fr-FR&with_genres=35`,
  fetchMoviesAnimation:  `${base_url}/discover/movie?api_key=${api}&language=fr-FR&with_genres=16`,
  fetchMoviesHorror:  `${base_url}/discover/movie?api_key=${api}&language=fr-FR&with_genres=27`,
  fetchMoviesDocu:  `${base_url}/discover/movie?api_key=${api}&language=fr-FR&with_genres=99`,


}
export default requests;