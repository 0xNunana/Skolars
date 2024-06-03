import Hero from "@/sections/Hero";
import Updates from "@/sections/Updates";
import Videos from "@/sections/Videos";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
    

<Hero/>
<Updates/>
<Videos/>
    </main>
  );
}
