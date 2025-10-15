import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor: React.FC = () => {
    const [code, setCode] = useState("// Start coding in CodeAstra 🚀");

    const handleEditorChange = (value: string | undefined) => {
        setCode(value || "");
        console.log("Code updated:", value);
    };

    return (
        <div>
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
