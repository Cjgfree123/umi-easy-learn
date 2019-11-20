
import styles from './index.css';
import Link from 'umi/link';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>首页</h1>
      <Link to="/profile">个人中心</Link>
    </div>
  );
}
