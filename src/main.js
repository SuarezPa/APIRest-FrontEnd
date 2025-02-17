console.log('Javier Suarez Productor.');

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  Headers: { 'Content-Type': 'application/json; charset=utf-8' },
  params: {
    api_key: API_KEY
  },
  timeout: 10000
});

//Usamos asincronismo, para ppoder obtener la data del API Rest con un await.
const getTrendingMovies = async () => {
  let { data } = await api(listURL.trending);
  let responseTrendingMovies = data.results;
  //   console.log(responseTrendingMovies);
  responseTrendingMovies.forEach((movie) => {
    /*Aca debemos definir el container, que ya existe en nuestro archivo HTML,
    con el fin de adicionar mas adelante todo el tema de */
    const trendingPreviewCharactersContainer = document.querySelector(
      '#trendingPreview .trendingPreview-movieList'
    );
    /*La idea es crear un container por cada personaje que nos responde el 
    request tipo GET sobre el API.*/
    /*Los nombre que utlizamos en este archivo .js, los utilizamos asi, porque son
    los mismo que va a utilizar el archivo .css, para que funcione el tema del diseño
    de nuestro aplicativo WEB.
    /*Creamos el contenedor en este caso un elemento div
    ,sobre el archivo HTML, desde .js.*/
    const movieContainer = document.createElement('div');
    /*Al container creado anteriormente, debemos crearle la 
    clase movie-container, para que funcione de manera exitosa el .ccs, que ya creamos*/
    movieContainer.classList.add('movie-container');
    /*Creamos nuestra elemento de tipo imagen, sobre el archivo HTML, desde .js*/
    const movieImg = document.createElement('img');
    /*Al elemneto de tipo imagen, creado anteriormente, debemos crearle la 
    clase movie-container, para que funcione de manera exitosa el .ccs, que ya creamos*/
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute(
      'src',
      'https://image.tmdb.org/t/p/w500/' + movie.poster_path
    );
    /*Luego de tener nuestras definiciones hechas, debemos agregar nuestros 
    appendchild, en cada contenedor, segun aplique en nuestra deficinon del diseñor inicial*/
    movieContainer.appendChild(movieImg);
    trendingPreviewCharactersContainer.appendChild(movieContainer);
  });
};
//Usamos asincronismo, para ppoder obtener la data del API Rest con un await.
const getGenresMovies = async () => {
  let { data } = await api(listURL.genresMovies);
  let categories = data.genres;
  categories.forEach((category) => {
    //Vamos por jerarquias, primero el section:
    const previewCategoriesContainer = document.querySelector(
      '#categoriesPreview .categoriesPreview-list'
    );
    //Luego el contenedor <div>, segun como esta en nuestro HTML:
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');
    /*Creamos nuestra elemento de tipo imagen, sobre el archivo HTML, desde .js*/
    const categoryTitle = document.createElement('h3');
    /*A nuestro categoryTitle debemos agregarle nuestra clase category-title*/
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id', 'id' + category.id);
    const categoryTitleText = document.createTextNode(category.name);
    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    previewCategoriesContainer.appendChild(categoryContainer);
  });
};
