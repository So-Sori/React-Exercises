import { createRoot } from "react-dom/client";
import Cake from "./Cake"

const App = () => {
    return (
        <div>
            <h1>Sweetest Cake</h1>
            <Cake name = "Chocolate🎂" description="Chocolate fundie, chips and chocolate cookies"></Cake>
            <Cake name = "Strawberry 🍰" description="Strawberry fundie, chips and strawberries"></Cake>
            <Cake name = "Carrot 🍰" description="Carrot jelly, chips and carrots"></Cake>
        </div>
    )
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App/>);
