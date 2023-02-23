import "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import {
  faChevronDown,
  faFilter,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

const TABLE = [
  {
    code: "test 1",
    name: "brand MDM",
    time: "11h",
    status: 1,
    btn: "btn",
  },
  {
    code: "test 2",
    name: "brand MDM",
    time: "11h",
    status: 2,
    btn: "btn",
  },
  {
    code: "test 3",
    name: "brand MDM",
    time: "11h",
    status: 1,
    btn: "btn",
  },
];

function Navbar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("title")}>Danh sách nhãn hiệu</div>
      </div>
      <div className={cx("content-actions")}>
        <div className={cx("actions")}>
          <div className={cx("action-status")}>
            Trạng thái
            <FontAwesomeIcon
              className={cx("icon-status")}
              icon={faChevronDown}
            />
          </div>
          <FontAwesomeIcon className={cx("icon")} icon={faFilter} />
          <FontAwesomeIcon className={cx("icon")} icon={faMagnifyingGlass} />
        </div>
        <div className={cx("btn-add")}>
          <button className={cx("btn")}>
            Thêm mới
            <span className={cx("plus")}>+</span>
          </button>
        </div>
      </div>
      <table>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Mã nhãn hiệu</th>
          <th>Tên nhãn hiệu</th>
          <th>Thời gian cập nhật</th>
          <th>Trạng thái</th>
          <th></th>
        </tr>
        {TABLE.map((item, index) => (
          <>
            <tr className={cx("table")}>
              <td>
                <input key={index} type="checkbox" />
              </td>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.time}</td>
              <td>{item.status}</td>
              <td>{item.btn}</td>
            </tr>
          </>
        ))}
      </table>
      <div className={cx("content-footer")}>
        <div className={cx("count-items")}>
          <span>Items per pages:</span>
          <p>10</p>
          <FontAwesomeIcon className={cx("icon-status")} icon={faChevronDown} />
        </div>
        <div className={cx("des-count")}>1-10 of 37 items</div>
        <div className={cx("select-page")}>
          <span>
            1
            <FontAwesomeIcon
              className={cx("icon-status")}
              icon={faChevronDown}
            />
            of 4 pages
          </span>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
