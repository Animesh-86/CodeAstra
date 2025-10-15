import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { connectWebSocket, sendMessage } from "../services/websocket";

const CodeEditor: React.FC = () => {
    const [code, setCode] = useState("// Start coding in CodeAstra 🚀");

    useEffect(() => {
        connectWebSocket((msg) => {
            console.log("Received message:", msg);
        });
    }, []); // run once on mount

    const handleEditorChange = (value: string | undefined) => {
        setCode(value || "");
        sendMessage(value || "");
    };

    return (
        <div className=" min-h-screen bg-black text-white h-[100vh] w-full">
            <Editor
                height="100vh"
                defaultLanguage="javascript"
                value={code}
                theme="vs-dark"
                onChange={handleEditorChange}
                options={{
                    fontSize: 14,
                    minimap: { enabled: true },
                    automaticLayout: true,
                }}
            />
        </div>
    );
};

export default CodeEditor;
