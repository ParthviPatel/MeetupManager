import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage(){
    const favritesCtx = useContext(FavoritesContext);
    let content;

    if(favritesCtx.totalFavorites === 0){
        content = <p>You have no favorites yet, please start adding one!</p>
    }
    else{
        content =  <MeetupList meetups = {favritesCtx.favorites}/>
    }
    
    return (<section>
        <h1> My Favorites </h1>
        {content}
        </section>);
}

export default FavoritesPage;