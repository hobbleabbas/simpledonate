import { useRouter } from "next/router";
import Button from '../components/Button'
import Link from 'next/link'

export default function Form(props) {
  const router = useRouter();
  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/register", {
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { user } = await res.json();
    if (user) router.push(`/welcome?email${user.email}`);
    // console.log(`Just registered ${user.email} to DB.`);
  };

  return (
    <>
    <div className = 'min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-'>
      <div className = 'max-w-md w-full space-y-8'>
        <h1 className = 'font-mono text-2xl font-bold flex justify-center'>SimpleDonate</h1>
        <form className = 'mt-8 space-y-6 flex flex-col' onSubmit={registerUser}>
          <label className = 'text-lg font-semibold' htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className = {props.inputClass} 
          />
          <label className = 'text-lg font-semibold' htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            name="password"
            required
            className = {props.inputClass} 
          />
          <button type="submit" className = 'w-full sm:w-auto flex-none bg-blue-700 hover:bg-blue-900 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200'>Register →</button>
        </form>
        <Link href = '/'>
          <a className = 'font-mono text-sm font-light flex text-gray-900 justify-center hover:text-gray-500'>Have An Account? Sign In →</a>
        </Link>
      </div>
    </div>
    </>
  );
}

Form.defaultProps = {
  'inputClass': 'w-full sm:w-auto flex-none  text-gray-800 hover:text-gray-400 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200'
}