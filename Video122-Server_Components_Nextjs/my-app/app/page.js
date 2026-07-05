import Navbar from "@/components/Navbar";
import fs from "fs/promises"

export default function Home() {
  let a = fs.readFile(".gitignore");
  a.then((e) => { console.log(e.toString()) })
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      I am server
      <Navbar />
    </div>
  );
}
