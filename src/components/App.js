 import React from 'react';
import {data } from '../data'; 
import Navbar from './Navbar';
import MovieCard from './MovieCard';
class App extends React.Component{
  componentDidMount(){
    const { store }=this.props;
    store.subscribe(()=>{
    this.forceUpdate();//never used this method
    })
    //make api call
    //dispatch action
    this.props.store.dispatch({
      type:'ADD_MOVIES',
      movies:data
    });
    console.log('satae',this.props.store.getState())
  }
  render(){ 
  const movies=this.props.store.getState();
  console.log('render')
  return (
    <div className="App">
     
       <Navbar />
       <div className="main">
         <div className="tabs">
           <div className="tab">Movies</div>
          <div className="tab">Favourites</div>

         </div>
         <div className="list">
           {movies.map((movie,index)=>
             (
               <MovieCard movie={movie} key={`movies-${index}`}/>
             )
           )}
         </div>

       </div>
      
    </div>
  );
}
}

export default App;
