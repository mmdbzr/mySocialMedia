import image1 from "../../../assets/person/1.jpeg";
import { Avatar, Button, Divider } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Share = () => {
	return (
		<div className="w-[95%] bg-white mt-4 border-2 h-fit p-2 shadow-lg rounded-md">
			<div className="flex items-center">
				<Avatar src={image1} className="ml-5 w-12 h-12"></Avatar>
				<input
					type="text"
					placeholder="what is in your mind ?"
					className="ml-3 focus:outline-none w-full"
				/>
			</div>
			<hr className=" my-5" />
			<div className="flex justify-between mt-4 items-center">
				<div className="text-sm">
					<PermMediaIcon className="text-rose-700" />
					Photo or Video
				</div>
				<div className="text-sm">
					<LocationOnIcon className="text-lime-600" />
					Location
				</div>
				<div className="text-sm">
					<LabelIcon className="text-blue-900" />
					Tag
				</div>
				<div className="text-sm">
					<EmojiEmotionsIcon className="text-yellow-500" />
					Feeling
				</div>
				<Button className="text-white bg-blue-600">Share</Button>
			</div>
		</div>
	);
};
export default Share;
