import React, {useEffect, useState} from "react";
import Editor from "@monaco-editor/react";
import { connectWebSocket, sendMessage } from "../services/websocket.ts";

const CodeEditor: React.FC = () => {
    const [code, setCode] = useState("// Start coding in CodeAstra 🚀");

    useEffect(() => {
        connectWebSocket((msg) => {
            console.log("Received message:", msg);
        });
    })

    const handleEditorChange = (value: string | undefined) => {
        setCode(value || "");
        sendMessage(value || "");
    };

    return (
        <div className="h-screen w-full bg-gray-900">
            <Editor
                height="100%"
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
