import Pagename from "@/components/Pagename";

export default function Layout({ children }) {
    return (
     <div>
       <Pagename/>
<div>{children}</div>
     
     </div>
          
        
    );
  }