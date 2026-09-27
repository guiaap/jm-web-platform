import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
        <div className="h-500">
        </div>
    );
}

export default Home;