import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul style={{ listStyleType: "none" , textAlign: "center" , padding: 100 }}>
          <li>
            <Link to="/mint" >Mint</Link>
          </li>
          <li>
            <Link to="/getLink">GetLink</Link>
          </li>
          <li>
            <Link to="/transfer">Transfer</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;
