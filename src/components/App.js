 import React from 'react';
import {data } from '../data'; 
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies,addFavourite, setShowFavourites} from '../actions';

class App extends React.Component{
  componentDidMount(){
    const { store }=this.props;
    store.subscribe(()=>{

    this.forceUpdate();//never used this method
    })

    //make api call
    //dispatch action
    store.dispatch(addMovies(data));

    isMovieFavourite=(movie)=>{
      const{ favourites}=this.props.store.getState()//{favourites} desructruring
      const index=favourites.indexOf(movie);

      if(index!==-1){
        //found the movie
        return true;
      }
      return false;

    }

    console.log('satae',this.props.store.getState())
  }

onChangeTab=(val)=>{
  this.props.store.dispatch(setShowFavourites(val))
}

  render(){ 
  const {list,favourites,showFavourites}=this.props.store.getState();////{list:[],favourites:[]}
  console.log('render',this.props.store.getState());

  const displayMovies=showFavourites?favourites:list

  return (
    <div className="App">
     
       <Navbar />
       <div className="main">
         <div className="tabs">
           <div className={`tab ${showFavourites?'':'active-tabs'}`}  onClick={()=> this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourites?'active-tabs':' '}`}  onClick={()=> this.onChangeTab(true)}>Favourites</div>

         </div>
         <div className="list">
           {list.map((movie,index)=>
             (
               <MovieCard
                movie={movie} 
               key={`list-${index}`} 
               dispatch={this.props.store.dispatch}
               isFavourites={this.isMovieFavourite(movie)}
                />
             )
           )}
         </div>
              {displayMovies.length===0 ?<div className="no-movies">No Movies to Dislay</div>:null}
       </div>
      
    </div>
  );
}
}

export default App;
