//Films List
export type Film = {
    id:string,
    title:string,
    original_title:string,
    description:string,
    image:string,
    movie_banner:string;
    people:string[];
    characters?: FilmCharacter[];
};
//Film Charecters list
export type FilmCharacter = {
    id: string;
    name: string;
    gender?: string;
    age?: string;
    eye_color?: string;
    hair_color?: string;
};

//Async function to get Films
export async function GetFilms(title?: string | null) {
    const response =  await fetch('https://ghibliapi.herokuapp.com/films');
    const films:Film[] = await response.json();
    return films.filter((film)=>
    //Matching our Title 
    title? film.title.toLowerCase().includes(title.toLowerCase()):true
    );
}

//Async Function to Get Film ID 
export async function GetFilmID(filmId: string ) {
    const response =  await fetch(`https://ghibliapi.herokuapp.com/films/${filmId}`);
    const film:Film = await response.json(); 
    //returning A Film Array

    //Getting A Charecter Array
    const characters = await Promise.all(
        film.people
          .filter((url: string) => url !== 'https://ghibliapi.herokuapp.com/people/')
          .map((url: URL | RequestInfo) => fetch(url).then((res) => res.json()))
      );
    return {film, characters};
}