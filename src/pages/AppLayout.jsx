import { Header } from '../components';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className='grid grid-rows-[auto_1fr] min-h-screen'>
      <div>
        <Header />
      </div>
      <Outlet />
    </div>
  );
}

export default AppLayout;
