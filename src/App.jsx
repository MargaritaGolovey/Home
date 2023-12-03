import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToDoList } from "./components/toDoList/ToDoList";
import CheckboxList from "./components/CheckboxList/CheckboxList";
import Toggle from "./components/Toggle/Toggle";
import Forms from "./components/Form/Form";
import Header from "./components/header/Header";
import Dynamic from "./components/dynamic/dynamic";
import ErrorPage from "./components/error-page/error-page";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<ToDoList />} />
        <Route exact path="/checkbox" element={<CheckboxList />} />
        <Route exact path="/form" element={<Forms />} />
        <Route exact path="/toggle" element={<Toggle />} />
        <Route exact path="/dynamic/:id" element={<Dynamic />} />
        <Route exact path="/timer" element={<Timer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
