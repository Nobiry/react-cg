import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  return (
    <>
    {isAuthenticated}
      <Header />
      {!isAuthenticated ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
