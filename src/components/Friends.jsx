import { Avatar, Typography } from "@mui/material";

const Friends = (props) => {
	const { person } = props;

	return (
		<div className="flex items-center m-3">
			<Avatar src={person.profile_picture}></Avatar>
			<Typography className="ml-2 text-black">
				{person.user_name}
			</Typography>
		</div>
	);
};

export default Friends;
