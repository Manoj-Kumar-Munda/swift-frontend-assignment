import { Outlet } from "react-router-dom";
import Header from "./components/Header";


function App() {
  
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
