import { Routes, Route } from "react-router-dom";
import { Landing, Blog, Landingout, Register, Signin, Subject } from "./pages";

const App = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="signin" element={<Signin />} />
    <Route path="register" element={<Register />} />
    <Route path="blog" element={<Blog />} />
    <Route path="landingout" element={<Landingout />} />
    <Route path="subject" element={<Subject />} />
  </Routes>
);

export default App;
