import './pdf.scss'
import MacWindow from './MacWindow'
const Pdf = () => {
    return (
        <MacWindow x={350} y={160} width={"30vw"} height={"70vh"}>
            <div className="pdf-content">
                <embed src="./resume.pdf" type="application/pdf" />
            </div>
        </MacWindow>
    )
}

export default Pdf