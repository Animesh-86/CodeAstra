import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import CodeEditor from './components/CodeEditor'
import Dashboard from './pages/DashBoard'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />}  />
                <Route path="/editor" element={<CodeEditor />}  />
            </Routes>
        </Router>
    );
}

export default App;

