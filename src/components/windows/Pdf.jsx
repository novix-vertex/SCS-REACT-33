import './pdf.scss'
import MacWindow from './MacWindow'
const Pdf = () => {
    return (
        <MacWindow x={850} y={70} width={"40vw"} height={"80vh"}>
            <div className="pdf-content">
                <embed src="./resume.pdf" type="application/pdf" />
            </div>
        </MacWindow>
    )
}

export default Pdf