import { LinksFunction, LoaderFunction, MetaFunction, useLoaderData } from "remix";


//LoaderFunction are used to get Data from Various Applications
//We Use LoaderFunction to Render The Data
export const loader: LoaderFunction =async()=>{
   const response =  await fetch('https://ghibliapi.herokuapp.com/films');
   return response.json();
};

export default function FilmsIndex(){
    const films =  useLoaderData()
    return(
        <div>Films 
            <div>
               {films.map((film)=>(
                <div>{film.title}</div>
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