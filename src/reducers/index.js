import {ADD_MOVIES,ADD_FAVOURITE,SET_SHOW_FAVOURITES} from '../actions';

const initialMoviesState={
    list:[],
    favourites:[],
    showFavourites:false
}

export default function movies(state=initialMoviesState,action){
    if(action.type==='ADD_MOVIES'){
        return {
             ...state,
             list:action.movies
        }
    }
    
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,//we get all old state
                favourites:[
                    action.movie,//add movie ,comming from ADD_FAVOURITES
                 ...state.favourites]//spread the rest of the movie in an array

            }
        case REMOVE_FROM_MOVIES:
            const filteredArray=state.favourites.filter(
                movie=>movie.Title !==action.movie.Title
            );
            return{
                ...state,
                favourites:filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.val
            }
        default:
            return state;
    }


}

