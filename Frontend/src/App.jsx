import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import StudentList from "./modules/student/pages/StudentList";
import StudentCreate from "./modules/student/pages/studentCreate";
import StudentEdit from "./modules/student/pages/StudentEdit";
import StudentView from "./modules/student/pages/StudentView";



function App() {

    return (
        <BrowserRouter>

            <Routes>

                 <Route path="/" element={<Login />} />
                 <Route path="/login" element={<Login />} />
                 <Route path="/students" element={<StudentList />}/>
                 <Route path="/students/create" element={<StudentCreate />}/>
                 <Route path="/students/:id" element={<StudentView />}/>
                 <Route path="/students/:id/edit" element={<StudentEdit />}/>
               

            </Routes>

        </BrowserRouter>
    );
}

export default App;
