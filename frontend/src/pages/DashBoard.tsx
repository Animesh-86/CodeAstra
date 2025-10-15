import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div >
            <h1 style={{marginBottom: "10px"}}>CodeAstra DashBoard</h1>
            <p style={{marginBottom: "20px"}}>Your collaborative coding space</p>
            <button
                onClick={() => navigate("/editor")}
                style={{
                    backgroundColor: "#0078ff",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}
                >
                Open Code Editor
            </button>
        </div>
    );
};

export default Dashboard;
