// {
//     type:'INCREASE_COUNT'
     
// }
// {
//     type:'DECREASE_COUNT'
// }
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_TO_FAVOURITE='ADD_TO_FAVOURITE';
export const REMOVE_FROM_MOVIES='REMOVE_FROM_MOVIES';
export const  SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';




//action creator
export function add_movies(movies){
    return{
        type:'ADD_MOVIES',
      movies:data//movies
    }
}

export function addFavourite(movies){
    return{
        type:'ADD_TO_FAVOURITE',
      movies:data
    }
}

export function removeFromFavourites(movies){
  return{
      type:'REMOVE_FROM_MOVIES',
    movies:data
  }
}
 
export function setShowFavourites(val){
  return{
      type:'SET_SHOW_FAVOURITES',
    val
  }
}
 