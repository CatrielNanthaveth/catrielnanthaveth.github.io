function App() {

    const api_url = "https://api.quotable.io/quotes?limit=150";

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuotes] = React.useState("");
    const [color, setColor] = React.useState("#fff");

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch(api_url);
            const data = await response.json();

            setQuotes(data);
            let randomIndex = Math.floor(Math.random() * data.results.length);
            setRandomQuotes(data.results[randomIndex]);
        }
        fetchData();
    }, [])

    const getNewQuote = () => {

        const colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
        ];

        let randomColorIndex = Math.floor(Math.random() * colors.length);
        let randomIndex = Math.floor(Math.random() * quotes.results.length);
        setRandomQuotes(quotes.results[randomIndex]);
        setColor(colors[randomColorIndex]);
    };


    return (
        <div style={{backgroundColor: color, minHeight:"100vh"}}>
            <div className="container pt-5" id="quote-box">
                <div className="jumbotron tarjeta">
                    <div className="card">
                        <div className="card-header">Your quote of the day!</div>
                        <div className="card-body">
                            {randomQuote ? (
                                <>
                                    <h5 className="card-title" id="author">{randomQuote.author}</h5>
                                    <p className="card-text" id="text">&quot;{randomQuote.content}&quot;</p>
                                </>) : (
                                <h2>Loading</h2>)
                            }

                            <div className="row">
                                <button onClick={getNewQuote} className="btn btn-info ml-3" id="new-quote">New quote!</button>
                                <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent(
                                    '"' + randomQuote.content + '" ' + randomQuote.author
                                )} className="btn btn-primary" target="_blank">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);