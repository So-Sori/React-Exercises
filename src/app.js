const Cake = (props) => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h2",{},props.name),
            React.createElement("p",{},props.desciption),
        ]
    )
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {className: "tittle"}, "Welcome to Sweetest Cake Factory"),
            React.createElement(Cake, {
                name:"Chocolate",
                desciption: "delicious cake"
            }),
            React.createElement(Cake, {
                name:"Strawberry",
                desciption: "delicious cake"
            }),
            React.createElement(Cake, {
                name:"Carrots",
                desciption: "delicious cake"
            }),
            React.createElement(Cake, {
                name:"Potato",
                desciption: "delicious cake"
            })
        ]
    );
}

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));