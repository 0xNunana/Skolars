

import Hero from "@/sections/Hero";
import Music from "@/sections/Music";


import Updates from "@/sections/Updates";
import Videos from "@/sections/Videos";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">


<Hero/>

<Updates/>
<Music/>
{/* <Videos/> */}
    </main>
  );
}
