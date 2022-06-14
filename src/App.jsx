import { Header } from './components/Header';
import { Post } from './Post';
import { wrapper } from './App.module.css';
import './global.css';

export function App() {
  return (
    <div className='App'>
      <Header />
      <div className={wrapper}>
        <aside>sidebar</aside>
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
