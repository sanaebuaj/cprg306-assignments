import Page from "./week-2/page" ;
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <div>
      <Link href={"week-2"} className="border border-black hover:bg-white">
        Click to go to week 2
      </Link>
    </div>  
    
    </main>
  );
}
