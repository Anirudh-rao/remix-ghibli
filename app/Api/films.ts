export type Film = {
    id:string,
    title:string,
    original_title:string,
    description:string,
    image:string,
    movie_banner:string;
    people:string[];
};

export async function GetFilms(title?: string | null) {
    const response =  await fetch('https://ghibliapi.herokuapp.com/films');
    const films:Film[] = await response.json();
    return films.filter((film)=>
    //Matching our Title 
    title? film.title.toLowerCase().includes(title.toLowerCase()):true
    );
}

export async function GetFilmID(filmId: string ) {
    const response =  await fetch(`https://ghibliapi.herokuapp.com/films/${filmId}`);
    const filmID:Film[] = await response.json(); 
    return filmID;
}