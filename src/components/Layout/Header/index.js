import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faChevronDown,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const HEADER_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faHouse} />,
    title: "Các Danh mục",
    selection: <FontAwesomeIcon icon={faChevronDown} />,
  },
  {
    icon: <FontAwesomeIcon icon={faHouse} />,
    title: "Đối tác",
    selection: <FontAwesomeIcon icon={faChevronDown} />,
  },
  {
    icon: <FontAwesomeIcon icon={faHouse} />,
    title: "Khách hàng",
  },
  {
    icon: <FontAwesomeIcon icon={faHouse} />,
    title: "Cấu hình hệ thống",
    selection: <FontAwesomeIcon icon={faChevronDown} />,
  },
];

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <h3 className={cx("logo")}>MDM</h3>
        <div className={cx("header-item")}>
          {HEADER_ITEMS.map((item, index) => (
            <li className={cx("item")} key={index}>
              {item.icon} {item.title} {item.selection}
            </li>
          ))}
        </div>
        <div className={cx("actions")}>
          <div className={cx("actions-btn")}>
            <FontAwesomeIcon className={cx('icon')} />
            <FontAwesomeIcon className={cx('icon')} icon={faBell} />
            {/* <img src="" alt="avatar" /> */}
            <FontAwesomeIcon className={cx('icon')}  icon={faBars} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
