import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import classNames from "classnames";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const activeUrl = (url) => pathname === url;

  return (
    <nav>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
      <ul className={styles.ulNavigation}>
        <li>
          <Link
            className={classNames(
              styles.blueColor,
              activeUrl("/") ? styles.redColor : null
            )}
            to="/"
          >
            ToDoList
          </Link>
        </li>
        <li>
          <Link
            className={classNames(
              styles.blueColor,
              activeUrl("/checkbox") ? styles.redColor : null
            )}
            to="/checkbox"
          >
            CheckboxList
          </Link>
        </li>
        <li>
          <Link
            className={classNames(
              styles.blueColor,
              activeUrl("/form") ? styles.redColor : null
            )}
            to="/form"
          >
            Forms
          </Link>
        </li>
        <li>
          <Link
            className={classNames(
              styles.blueColor,
              activeUrl("/toggle") ? styles.redColor : null
            )}
            to="/toggle"
          >
            Toggle
          </Link>
        </li>
        <li>
        <Link
            className={classNames(
              styles.blueColor,
              activeUrl("/timer") ? styles.redColor : null
            )}
            to="/timer"
          >
            Timer
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
