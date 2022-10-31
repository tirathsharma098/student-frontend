import style from './App.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./Components/Student/Student";
const App = (props) => {
  return (
    <div className={style["main-content"]}>
      <BrowserRouter>
        <Routes>
          <Route path="/student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
