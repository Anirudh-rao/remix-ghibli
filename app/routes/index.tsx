import { LoaderFunction, redirect } from 'remix';

//Loader Function used to Load data
export const loader: LoaderFunction = async () => {
  return redirect('/films');
};