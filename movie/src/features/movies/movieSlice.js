import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey'


export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);



export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    );
    return response.data;
  }
);

// 1: 04: 43
//https://www.youtube.com/watch?v=2kL28Qyw9-0&t=835s
//https://github.com/dmalvia/React_Redux_ToolKit_Movie_App/blob/master/src/features/movies/movieSlice.js

const initialState = {
  movies: {},
  series: {},
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    extraReducers: {
      [fetchAsyncMovies.peding]: () => {
        console.log('Pending');
      },
      [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
        console.log('fetch successful');
        return { ...state, movies: payload }
      },
      [fetchAsyncMovies.rejected]: () => {
        console.log('Rejected');
      },
      [fetchAsyncShows.fulfilled]: (state, { payload }) => {
        console.log('fetch successful');
        return { ...state, series: payload }
      },
    }
  }
})


export const { addMovies } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.shows.shows;

export default movieSlice.reducer;