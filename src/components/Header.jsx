import { header } from './Header.module.css';
import styles from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={header}>
      <img src={styles.igniteLogo} alt='Logotipo do ignite' />
    </header>
  );
}
