import { useEffect, useState } from 'react';
import MacWindow from './MacWindow'
import './note.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierEstuaryDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Note = () => {
    const [markdown, setmarkdown] = useState(null);

    useEffect(() => {
        fetch('/note.txt')
            .then((res) => res.text())
            .then((data) => setmarkdown(data));
    }, []);

    return (
        <MacWindow x={100} y={350} width={"60vw"} height={"50vh"}>
            <div className="note-window">
                {markdown ? <SyntaxHighlighter language="typescript" style={atelierEstuaryDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
            </div>
        </MacWindow>
    )
}

export default Note