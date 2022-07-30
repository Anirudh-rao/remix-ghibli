import { LinksFunction, LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { Film, GetFilms } from "~/Api/films";


//LoaderFunction are used to get Data from Various Applications
//We Use LoaderFunction to Render The Data
export const loader: LoaderFunction =async({request})=>{
    const url =  new URL(request.url);
    console.log(url.searchParams.get('title'));
   return GetFilms();
};

export default function FilmsIndex(){
    {/*We are Telling our Userloaderdatahook to take in the Values from the array
instead of Reponse*/}
    const films =  useLoaderData<Film[]>()
    return(
        <div className="p-16 font-sans font-semibold">
            <h1 className="text-5xl font-bold text-center p-10">Studio Ghibli Films</h1> 
            <form className="py-5">
                <label className="font-bold">
                    Search{''}
                    <input type="text" name="title" placeholder="Type a title" 
                    className="border=2 rouded py-2 px-3" />
                </label>
                <button type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                >
                    Search
                </button>
            </form>
            <div className="grid grid-cols-4 gap-4 p-5">
               {films.map((film)=>(
                <div className="hover:shadow-2xl hover:scale-105 hover:font-bold
                cursor-pointer">
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