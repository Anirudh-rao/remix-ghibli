import { Outlet } from "remix";
//By adding outlet :we Are specifiying Remix that this is Start route
//This is Called Layout Route in Remix. Here Parent.tsx acts as Layout Route.
export default function Parent(){
    return(
        <div>
            <Outlet />
        </div>
    )
}