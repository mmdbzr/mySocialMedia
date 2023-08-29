import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	Typography,
} from "@mui/material";
import image2 from "../../../assets/person/2.jpeg";
import Friends from "../../Friends";

const SideBar = () => {
	const jony = { profile_picture: image2, user_name: "jony" };

	return (
		<List className=" w-56 bg-white h-LemaScreen overflow-y-auto  sticky top-12 ">
			{" "}
			<ListItem className="">
				<ListItemButton className="flex items-center pl-0">
					<RssFeedIcon />
					<Typography className="ml-3">Feed</Typography>
				</ListItemButton>
			</ListItem>
			<ListItem>
				<ListItemButton className="flex items-center pl-0">
					<ChatIcon />
					<Typography className="ml-3">Chat</Typography>
				</ListItemButton>
			</ListItem>
			<ListItem>
				<ListItemButton className="flex items-center pl-0">
					<PlayCircleIcon />
					<Typography className="ml-3">Video</Typography>
				</ListItemButton>
			</ListItem>
			<ListItem>
				<ListItemButton className="flex items-center pl-0">
					<GroupIcon />
					<Typography className="ml-3">Group</Typography>
				</ListItemButton>
			</ListItem>
			<ListItem>
				<ListItemButton className="flex items-center pl-0">
					<BookmarkIcon />
					<Typography className="ml-3">Bookmark</Typography>
				</ListItemButton>
			</ListItem>
			<ListItem>
				<ListItemButton className="flex items-center pl-0">
					<HelpOutlineIcon />
					<Typography className="ml-3">Question</Typography>
				</ListItemButton>
			</ListItem>
			<ListItem>
				<ListItemButton className="flex items-center pl-0">
					<WorkOutlineIcon />
					<Typography className="ml-3">Jobs</Typography>
				</ListItemButton>
			</ListItem>
			<ListItem>
				<ListItemButton className="flex items-center pl-0">
					<EventIcon />
					<Typography className="ml-3">Events</Typography>
				</ListItemButton>
			</ListItem>
			<ListItem>
				<ListItemButton className="flex items-center pl-0">
					<SchoolIcon />
					<Typography className="ml-3">Courses</Typography>
				</ListItemButton>
			</ListItem>
			<Divider />
			<ListItem>
				<Friends person={jony} />
			</ListItem>
			<ListItem>
				<Friends person={jony} />
			</ListItem>
			<ListItem>
				<Friends person={jony} />
			</ListItem>
			<ListItem>
				<Friends person={jony} />
			</ListItem>
		</List>
	);
};
export default SideBar;
