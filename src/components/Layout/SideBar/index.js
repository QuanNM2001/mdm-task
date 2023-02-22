import classNames from "classnames/bind";
import styles from './SideBar.module.scss'
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('link')}>
                <div className={cx('header-title')}>Đối tác</div>
                <span className={cx('line')}>/</span>
                <div className={cx('sidebar-select')}>Nhãn hiệu</div>
            </div>
            <div className={cx('title')}>
                Nhãn hiệu
            </div>
        </div>
    );
}

export default Sidebar;