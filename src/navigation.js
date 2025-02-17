window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
  // console.log('location: ', location);
  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#searchs=')) {
    searchPages();
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage();
  } else if (location.hash.startsWith('#category=')) {
    categoriesPage();
  } else {
    homePage();
  }
}

function homePage() {
  console.log('Home!!!');
  getTrendingMovies();
  getGenresMovies();
}
function categoriesPage() {
  console.log('Categories!!!');
}
function movieDetailsPage() {
  console.log('Movie!!!');
}
function searchPages() {
  console.log('Search!!!');
}
function trendsPage() {
  console.log('Trends!!!');
}

// navigator();
