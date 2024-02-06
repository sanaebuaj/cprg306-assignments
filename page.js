import ItemList from "./item-list"


const page =()=>{
    return (<main className="bg-slate-950">
        <h1 className="text-white text-3xl p-2 font-bold ">Shopping List</h1>
        <ItemList />
    </main>)
}

export default page;