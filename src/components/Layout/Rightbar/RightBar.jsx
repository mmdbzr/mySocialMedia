import { Typography } from "@mui/material";
import gift from "../../../assets/gift.png";
import Ad from "../../../assets/post/3.jpeg";
import Posts from "../../../DummyData/DummyData";
import Friends from "../../Friends";

const RightBar = () => {
	return (
		<div className="flex-4 bg-white">
			<div className="flex  items-center">
				<img src={gift} className=" h-11 w-11"></img>
				<Typography>
					<b>Pola Foster</b> and <b>3 Other friend</b> have a birthday
					today.
				</Typography>
			</div>
			<img src={Ad} className="rounded-lg my-5" />
			<div>
				<Typography className="text-xl font-bold">
					Online friends
				</Typography>
				{Posts.map((p) => (
					<Friends key={p.id} person={p} />
				))}
			</div>
		</div>
	);
};
export default RightBar;
