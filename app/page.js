import Page from './week-2/page' ;
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen  items-center bg-slate-900 p-24 ">
    <h1 className="text-white font-bold">CPRG 306: Web Development 2 - Assignments</h1>
    <div className=" flex flex-col text-white font-normal mt-4">
      <Link href={"week-2"} className="border-2  border-white h-10 w-50 hover:bg-slate-500 mb-2">
       week 2
      </Link> 
      <Link href={"week-3"} className="border-2 border-white h-10 hover:bg-slate-500 mb-2">
       week 3
      </Link>
      <Link href={"week-4"} className="border-2 border-white h-10 hover:bg-slate-500">
       week 4
      </Link> 
      <Link href={"week-5"} className="border-2 border-white h-10 hover:bg-slate-500">
       week 5
      </Link> 
      <Link href={"week-6"} className="border-2 border-white h-10 hover:bg-slate-500">
       week 6
      </Link> 
      <Link href={"week-7"} className="border-2 border-white h-10 hover:bg-slate-500">
       week 7
      </Link>
      <Link href={"week-8"} className="border-2 border-white h-10 hover:bg-slate-500">
       week 8
      </Link>  
    </div>  
    
    </main>
  );
}
