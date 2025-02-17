# Execution Local project Movies APP (HTML/CSS/JavaScript).

If you need to execute the presente project, please firts do it the next steps:
- Go to the URL: https://www.themoviedb.org/, where the REST API used to implement the project is currently hosted. The project is executed using the Axios library with the Node.js programming language.
- Next, please create your respective API_KEY by following the steps at the bottom of the URL mentioned in the previous step, in the section related to the API. *Please note that you must request a developer mode subscription to avoid issues or failures when generating your own API_KEY*.
- In the src/ folder, create a file with the name (secrets.js), in that file indicate this information: 
- const API_KEY = 'your API KEY value';
- let listURL = {
  trending: 'trending/movie/day',
  genresMovies: 'genre/movie/list'
};   
-Finally execute on your personal computer the file index.html, double click is the better option.