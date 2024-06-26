const API_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTJhZGIyZDI0ZTY0MjA2M2JhYmMyNDE2NTZmMTE5MSIsInN1YiI6IjY1ZGQ0ZDVlZGNiNmEzMDE4NTg1YjBkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ltWwgOGVxJr4cJ0XudTwZnS_NTOZbUx4iZEkiQDdqbs';

const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
  },
};

export async function fetchTrendMovies() {
  try {
    let params = new URLSearchParams({
      language: 'en-US',
    });
    return await fetch(BASE_URL + 'trending/all/day?' + params, options)
      .then(response => {
        if (!response.ok) {
          alert('Data bad request.');
        }
        return response.json();
      })
      .catch(err => console.error(err));
  } catch (error) {
    return [];
  }
}

export async function fetchSearchMovies(q) {
  try {
    let params = new URLSearchParams({
      query: q,
    });
    return await fetch(BASE_URL + 'search/movie?' + params, options)
      .then(response => {
        if (!response.ok) {
          alert('Data bad request.');
        }
        return response.json();
      })
      .catch(err => console.error(err));
  } catch (error) {
    return [];
  }
}

export async function fetchMovieDetails(id) {
  try {
    return await fetch(BASE_URL + 'movie/' + id, options)
      .then(response => {
        if (!response.ok) {
          alert('Data bad request.');
        }
        return response.json();
      })
      .catch(err => console.error(err));
  } catch (error) {
    return [];
  }
}

export async function fetchMovieCredits(id) {
  try {
    return fetch(BASE_URL + 'movie/' + id + '/credits', options)
      .then(response => {
        if (!response.ok) {
          alert('Data bad request.');
        }
        return response.json();
      })
      .catch(err => console.error(err));
  } catch (error) {
    return [];
  }
}

export async function fetchMovieReviews(id) {
  try {
    return fetch(BASE_URL + 'movie/' + id + '/reviews', options)
      .then(response => {
        if (!response.ok) {
          alert('Data bad request.');
        }
        return response.json();
      })
      .catch(err => console.error(err));
  } catch (error) {
    return [];
  }
}
