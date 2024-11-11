import Form from "./components/Form";
import Success from "./components/Success";
import Fail from "./components/Fail";
import {BrowserRouter ,Routes ,Route} from  "react-router-dom";

function App() {

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Success />} />
        <Route path="/fail" element={<Fail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;