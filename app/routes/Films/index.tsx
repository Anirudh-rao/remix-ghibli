import { LinksFunction, LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { Film, GetFilms } from "~/Api/films";


//LoaderFunction are used to get Data from Various Applications
//We Use LoaderFunction to Render The Data
export const loader: LoaderFunction =async()=>{
   return GetFilms();
};

export default function FilmsIndex(){
    {/*We are Telling our Userloaderdatahook to take in the Values from the array
instead of Reponse*/}
    const films =  useLoaderData<Film[]>()
    return(
        <div>Films 
            <div>
               {films.map((film)=>(
                <div>
                <div>{film.title}</div>
                {/*Here we are accessing Image Parameter from the Api 
                This is Possible as we have stored our Reponse in an Array*/}
                <img  src={film.image} alt={film.title}/>
                </div>
               ))}
            </div>
        </div>
    );
}

//Links Function:Is used to Link Stylesheets to our Application
//Here We Have Added StyleSheets
export const links:LinksFunction = ()=>{
    return [{rel:'stylesheet', href:'styles'}];
  
}
//Meta Functions:Are used for Purposes like SEO,Title, Description etc
//Will Add title to our Application
export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Films Ghibli",
    viewport: "width=device-width,initial-scale=1",
    description:'A Films Search Application'
});