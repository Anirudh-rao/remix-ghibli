import { LoaderFunction, useLoaderData } from "remix"
import { Film, GetFilmID } from "~/Api/films"
import invariant from "tiny-invariant";

//Get Data by Film ID
//For parsing , params we use Tiny-invariant
export const loader:LoaderFunction = async ({params}) => {
    //Will Give an added assurance to get the filmID
    invariant(params.filmId,'expected params.filmId');
    //Taking our Films by id using params
    const film =  await GetFilmID(params.filmId);
    return film;
}

export default function Film(){
    const film = useLoaderData<Film>();
    return(
        <div>{film.title}</div>
    )
}