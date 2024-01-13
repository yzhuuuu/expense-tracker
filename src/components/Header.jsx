import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='max-w-6xl mx-auto flex items-center p-2 text-white '>
      <h1 className='text-3xl font-bold'>
        <Link>Expense tracker</Link>
      </h1>
      <nav className='ml-auto'>
        <ol className='flex items-center space-x-2 capitalize font-semibold'>
          <Link
            to={'/'}
            className='hover:border-b-2 hover:border-yellow-200 hover:border-solid transition-colors duration-100 ease-in'
          >
            home
          </Link>
          <Link
            to={'/login'}
            className='hover:border-b-2 hover:border-yellow-200 hover:border-solid transition-colors duration-100 ease-in '
          >
            login
          </Link>
        </ol>
      </nav>
    </header>
  );
}

export default Header;
