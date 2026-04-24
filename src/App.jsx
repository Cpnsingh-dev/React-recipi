import React, { useCallback, useState } from 'react';
import Navbar from './Components/Navbar';
import RecipiDetailView from './Components/RecipiDetailView';
import SearchView from './Components/SearchView';
import Cuisine from './Components/Cuisine';
import HomeView from './Components/HomeView';

const Api_Url = "https://www.themealdb.com/api/json/v1/1/"


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {

  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const filterRecipi = useCallback(async (query, filterType) => {

    setSearchResult([]);
    setSearchLoading(true);
    try {
      const res = await fetch(`${Api_Url}filter.php?${filterType}=${query}`);
      if (!res.ok) throw new Error(`Erro ${res.status}`);
      const result = await res.json();
      setSearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, []);

  //filter by catedroy
  const filterCategory = useCallback((category) => {
    filterRecipi(category, "c");
  }, [filterRecipi])

  //filterby area
  const filterArea = useCallback((area) => {
    filterRecipi(area, "a");
  }, [filterRecipi])

  const handleSearch = useCallback(async (query) => {

    setSearchResult([]);
    setSearchLoading(true);
    try {
      const res = await fetch(`${Api_Url}search.php?s=${query}`);
      if (!res.ok) throw new Error(`Erro ${res.status}`);
      const result = await res.json();
      setSearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, [])

  return (
    <>
      <Router >
        <div className="min-h-screen bg-gray-950 font-sans text-gray">
          <Navbar handleSearch={handleSearch} />
          <Cuisine filterArea={filterArea} />
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/recipi/:id' element={<RecipiDetailView />} />
            <Route
              path='/search/:query'
              element={<SearchView meals={searchResult} loading={searchLoading} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App
