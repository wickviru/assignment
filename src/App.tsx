import styles from '@/App.module.scss';
import PageRoutes from '@/routes/pageRoutes';

function App() {
  return (
    <div className={styles['App']}>
      <PageRoutes />
    </div>
  );
}

export default App;
