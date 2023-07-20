import { Outlet, NavLink } from "react-router-dom";
import styles from "./Dashboard.module.scss";
import routes from "../routes";

const Dashboard = () => {
  const [mainRoute] = routes;
  return (
    <div className={styles.Dashboard}>
      <div className="topbar">
        <h1>Proyecto final</h1>
      </div>
      <div className="container">
        <div className="sidebar">
          <ul className="links">
            {mainRoute.children?.map(
              (item) =>
                typeof item.path === "string" && (
                  <NavLink to={`/${item.path}`} key={item.id}>
                    <li>{item.id}</li>
                  </NavLink>
                )
            )}
          </ul>
        </div>

        <div className="main-section">
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
