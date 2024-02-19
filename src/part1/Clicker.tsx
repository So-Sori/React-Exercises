import { useState } from "react";

function Clicker() {
    const [clicker, setClicker] = useState(false);

  return <>
        <button type= "button" className="btn btn-primary" onClick={() => setClicker(!clicker)}>
            Click if you can
        </button>

    
        {clicker&& <img src="https://img.freepik.com/foto-gratis/adorable-gato-fondo-grafico-colorido-abstracto_23-2150022281.jpg?size=338&ext=jpg&ga=GA1.1.34264412.1707523200&semt=ais" alt="" />
        }

  </>
}

export default Clicker