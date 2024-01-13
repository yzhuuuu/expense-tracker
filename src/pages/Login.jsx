import { Button, FormRow } from '../components';
import { Form, Link } from 'react-router-dom';

function Login() {
  return (
    <Form className='max-w-6xl mx-auto mt-52 flex flex-col  text-white w-72  capitalize space-y-4'>
      <h1 className='text-3xl font-bold mb-2 '>Log in</h1>
      <FormRow label_name={'user name'} />
      <FormRow label_name={'password'} />
      <Button>Log in</Button>
      <p className='text-center'>
        If you dont have account please{' '}
        <Link
          to={'/signup'}
          className='underline-offset-4 underline text-red-200 font-bold'
        >
          register
        </Link>
      </p>
    </Form>
  );
}

export default Login;
