import ItemList from "./item-list"


const Page =()=>{
    return (<main className="bg-slate-950 min-h-screen ">
        <h1 className="text-white text-3xl p-4 pb-1 font-bold ">Shopping List</h1>
        <ItemList />
    </main>)
}

export default Page;