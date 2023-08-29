import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import Avatar from "@mui/material/Avatar";
import ProfileImage from "../../assets/person/1.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="bg-blue-600 flex  h-12 items-center justify-between sticky top-12">
			<Link
				to="/"
				className="text-white text-2xl flex-1 cursor-pointer ml-4"
			>
				LemaSocial
			</Link>
			<div className="flex-2">
				{" "}
				<span className="flex items-center justify-center bg-white rounded-xl">
					<SearchIcon className="pl-0" />
					<input
						placeholder="search for friend,post or video "
						className=" focus:outline-none  w-full h-7 rounded-xl"
					/>
				</span>
			</div>
			<div className=" flex-1 space-x-4 ml-5">
				<button className="text-white focus:outline-none">
					Homepage
				</button>
				<Link to="/Login">
					<button className="text-white focus:outline-none">
						Login
					</button>
				</Link>
			</div>
			<div className=" flex items-center justify-center mr-6 space-x-4">
				<div>
					<PersonIcon className="text-white" />
				</div>
				<div>
					<MessageIcon className="text-white" />
				</div>
				<div>
					<NotificationsIcon className="text-white" />
				</div>
			</div>
			<div className="justify-center items-center mr-4">
				<Link to="/Profile">
					<Avatar src={ProfileImage} />
				</Link>
			</div>
		</div>
	);
};
export default Header;
