import React, { useEffect, useState } from 'react';
import FetchSearch from 'services/Search-api';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList';
import Form from 'components/Form';

const MoviesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query.trim() !== '') {
        try {
          const response = await FetchSearch(query);
          setMovies([...response.results]);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <Form
        onSubmit={() => {}}
        value={query}
        onChange={value => setSearchParams({ query: value })}
        setSearchParams={setSearchParams}
      />
      <MoviesList movies={movies} />
    </div>
  );
};

export default MoviesSearch;
