import './pdf.scss'
import MacWindow from './MacWindow'
const Pdf = ({ windowName, setwindowState }) => {
    return (
        <MacWindow x={350} y={160} width={"30vw"} height={"70vh"} windowName={windowName}  setwindowState={setwindowState}>
            <div className="pdf-content">
                <embed src="./resume.pdf" type="application/pdf" />
            </div>
        </MacWindow>
    )
}

export default Pdf