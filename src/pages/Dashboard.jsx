import { Button } from '../components';
import hero from '../assets/hero.jpg';

function Dashboard() {
  return (
    <section className='grid grid-cols-[25rem_1fr] max-w-6xl mx-auto  place-items-center space-x-4'>
      <section className='text-white'>
        <h1 className='text-3xl font-bold mb-2'>
          Manage your expense easily with xpense tracker
        </h1>
        <p className='text-xl tracking-wide mb-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem
          cum magni ab hic. Itaque hic voluptatibus laboriosam quisquam quaerat
          beatae laudantium atque similique unde!
        </p>
        <Button>log in</Button>
      </section>
      <section>
        <img src={hero} alt='hero' className='rounded-xl' />
      </section>
    </section>
  );
}

export default Dashboard;
