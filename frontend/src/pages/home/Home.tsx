import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "./sections/Hero";

function Home() {

    const location = useLocation();

    useEffect(() => {

      if (location.hash) {
        
        const element = document.querySelector(location.hash);

        if (element) { 
            element.scrollIntoView({ behavior: "smooth" }); 
        }
      }

    }, [location]);
    
    return (
        <div>
          <Hero />
        </div>
    );
}

export default Home;