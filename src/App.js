import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component{
  state = {
    isLoading : true
  }
  getMoives = async () => {
    const {data: {data : { movies }}} = await axios.get('https://yts-proxy.now.sh/list_movies.json')
    this.setState({ movies, isLoading: false })
  }
  // async await에 접근이 끝날때까지 기다릴껴
  componentDidMount(){
    this.getMoives()
  }
  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="section">
      {isLoading ? (
        <div className="loader">
          loading!!!
        </div>
      ) : (
        <div className="movie">
          {movies.map(movie => (
          <Movie 
            key ={movie.id} 
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image} 
            genres={movie.genres}
          />
          ))}
        </div>
      )}</section>
    )
  }
}

export default App;
