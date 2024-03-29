/**
 * title: 个人中心
 * Routes:
 *   - ./PrivateRoute.js
 */
import styles from './profile.css';
import router from 'umi/router';

// history
export default function () {
  return (
    <div className={styles.normal}>
      <button onClick={() => router.goBack()}>返回上一个路由</button>
      <h1>个人中心</h1>
    </div>
  );
}

// 顶部注释, 采用了yaml写配置文件的写法。
