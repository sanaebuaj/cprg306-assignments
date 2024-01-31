import Link from "next/link";

export default function StudentInfo(){
    return (
        <main>
        <div className="flex-col items-center ">Sanae Buajlifa</div>
        <div>
            <Link href="https://github.com/sanaebuaj" className="border border-green hover:bg-white">
                Click to go to the student's Github
            </Link>
        </div>
    </main>
    )};