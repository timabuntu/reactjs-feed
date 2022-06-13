import { header } from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={header}>
      Header
      <img src={igniteLogo} alt='Logotipo do ignite' />
    </header>
  );
}
