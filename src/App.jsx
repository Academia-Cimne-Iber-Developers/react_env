import "./App.css";

function App() {
    const data = import.meta.env.VITE_DATA;
    const mode = import.meta.env.MODE;

    return (
        <>
            <h1>Vite esta siendo ejecutado en modo {mode}</h1>
            <p>
                Usando datos de <strong>{data}</strong>
            </p>
        </>
    );
}

export default App;
