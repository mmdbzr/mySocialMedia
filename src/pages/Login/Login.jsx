import { Button, Typography } from "@mui/material";
const Login = () => (
	<div className="flex justify-center items-center">
		<div className=" font-bold text-4xl items-center justify-center text-blue-600 ml-56 mr-14 ">
			LemaSocial
			<Typography>connect to your friend around the world</Typography>
		</div>
		<div className=" relative mt-24 ml-6">
			<div className="bg-neutral-200  w-80 h-96 rounded-2xl pl-4 pt-4 ">
				<div className="">
					<Typography className="mb-3 text-2xl text-blue-700">
						Username :{" "}
					</Typography>
					<input
						className="focus:outline-none rounded-xl h-9 w-[95%]"
						placeholder="please enter your username"
					/>
				</div>
				<div className="mt-3">
					<Typography className="mb-3 text-2xl text-blue-700">
						Password :{" "}
					</Typography>
					<input
						className="focus:outline-none rounded-xl h-9 w-[95%]"
						placeholder="please enter your password"
					/>
				</div>
				<Button className="w-[30%] text-black bg-blue-500 absolute bottom-16">
					Login
				</Button>
				<Typography className="text-xs absolute bottom-11">
					Forgot your password?{" "}
					<a href="/" className="text-blue-600">
						click here
					</a>
				</Typography>
			</div>
		</div>
	</div>
);
export default Login;
