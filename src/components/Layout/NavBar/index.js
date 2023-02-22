import './Navbar.module.scss'

import classNames from "classnames/bind";
import styles from './Navbar.module.scss'
const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>Danh sách nhãn hiệu</div>
            </div>
            <div className={cx('content-actions')}>
                <div className={cx('actions')}></div>
            </div>
        </div>
    );
}

export default Navbar;
