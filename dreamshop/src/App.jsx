import { useState } from "react";
import "./App.css";
import Container from "./Components/Container/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container />
      {/* <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Details/:id" element={<Details />} />
          </Routes>
        </Router>
      </ShopContextProvider> */}
    </>
  );
}

export default App;
