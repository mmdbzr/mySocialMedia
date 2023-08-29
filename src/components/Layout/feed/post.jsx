import { Avatar, IconButton, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const Post = ({ posts }) => {
	const [isLiked, setIsLiked] = useState(false);

	const handleLike = () => {
		setIsLiked(!isLiked);
	};

	return (
		<div className="w-[95%]  bg-white mt-4 border-2 h-fit p-2 shadow-lg rounded-md">
			<div className="flex items-center mb-3">
				<Avatar src={posts.profile_picture} />
				<Typography className=" font-bold ml-3">
					{posts.user_name}
				</Typography>
				<Typography className="text-xs ml-4">{posts.time}</Typography>
			</div>
			<Typography>{posts.post}</Typography>
			<img src={posts.image} alt="/" />
			<div className="flex  mt-3">
				<IconButton>
					<ThumbUpIcon className="text-blue-500" />
				</IconButton>
				<IconButton onClick={handleLike}>
					{isLiked ? (
						<FavoriteIcon className="text-red-600" />
					) : (
						<FavoriteBorderIcon />
					)}
				</IconButton>
			</div>
			<div></div>
		</div>
	);
};

export default Post;
