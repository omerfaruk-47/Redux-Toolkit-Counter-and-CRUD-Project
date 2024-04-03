import { NavLink } from "react-router-dom";
import { toggleTheme } from "../redux/slices/counterSlice";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="d-flex justify-content-between mb-3 p-4 align-items-center">
      <h2>Redux Toolkit</h2>
      <nav className="d-flex gap-5">
        <NavLink to={"/"}>Sayaç</NavLink>
        <NavLink to={"/crud"}> Crud</NavLink>
        <button onClick={() => dispatch(toggleTheme())}>Tema</button>
      </nav>
    </header>
  );
};

export default Header;
