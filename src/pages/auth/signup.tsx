import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignupFormValues = z.infer<typeof schema>;

export default function Signup() {
  const { register, handleSubmit } = useForm<SignupFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    // Add your authentication logic here
    console.log(data);
    // Navigate to dashboard
    // navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Gree Movies
        </h1>
        <h2 className="text-xl text-center text-gray-300 mb-6">
          Enjoy the newest movies
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("username")}
            type="text"
            placeholder="Username"
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold"
          >
            Create account
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
