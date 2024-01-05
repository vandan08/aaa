const head = React.createElement("div",{id : "parent"},
    [React.createElement("div",
    {id : "child"},
        [
            React.createElement("h1",{id : "heading"},"Hello World Lodu "),
            React.createElement("h2",{id : "heading"},"Hello World Lodu2 ")
        ]
        ),
        React.createElement("div",
        {id : "child"},
        [
            React.createElement("h1",{id : "heading"},"Hello World Lodu "),
            React.createElement("h2",{id : "heading"},"Hello World Lodu2 ")
        ]
        )
    ]
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);
