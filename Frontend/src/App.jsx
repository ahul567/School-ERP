import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";




function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
              
                {/*<Route path="/teacher" element={<Teacher />} />
                <Route path="/student" element={<Student />} />
                <Route path="/parent" element={<Parent />} />
                <Route path="/accountant" element={<Accountant />} />
                <Route path="/librarian" element={<Librarian />} />
                <Route path="/receptionist" element={<Receptionist />} />*/}

            </Routes>

        </BrowserRouter>
    );
}

export default App;
