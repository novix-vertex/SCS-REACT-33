import "xterm/css/xterm.css";
import './cli.scss'
import MacWindow from './MacWindow'
import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";

const Cli = ({ windowName, setwindowState }) => {
    const terminalRef = useRef(null);

    useEffect(() => {
        // Create terminal instance
        const terminal = new Terminal({
            cursorBlink: true,
            theme: {
                background: "transparent",
                foreground: "#929695"
            },
            fontSize: 14
        });

        const fitAddon = new FitAddon();
        terminal.loadAddon(fitAddon);

        // Attach to DOM
        terminal.open(terminalRef.current);
        fitAddon.fit();

        // Welcome message
        terminal.writeln("Welcome to the React terminal!");
        terminal.writeln("Type 'help' to see commands");
        terminal.write("\r\nshiny:~$ ");

        let command = "";

        // Input handling
        terminal.onData((data) => {
            const charCode = data.charCodeAt(0);

            // Enter key
            if (charCode === 13) {
                terminal.write("\r\n");
                if (command === "help") {
                    terminal.writeln("Available commands: help, clear, hello");
                } else if (command === "clear") {
                    terminal.clear();
                } else if (command === "hello") {
                    terminal.writeln("Hello 👋");
                } else {
                    terminal.writeln(`Command not found: ${command}`);
                }

                command = "";
                terminal.write("\r\nshiny:~$ ");
            }

            // Backspace
            else if (charCode === 127) {
                if (command.length > 0) {
                    command = command.slice(0, -1);
                    terminal.write("\b \b");
                }
            }

            // Normal characters
            else {
                command += data;
                terminal.write(data);
            }

        });

        return () => terminal.dispose();
    }, []);

    return (
        <MacWindow x={100} y={50} width={"40vw"} height={"40vh"} windowName={windowName} setwindowState={setwindowState}>
            <div className="cli-content" ref={terminalRef}>

            </div>
        </MacWindow>
    )
}

export default Cli