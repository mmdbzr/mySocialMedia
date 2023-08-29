import { Avatar, Typography } from "@mui/material";
import person1 from "../../assets/person/1.jpeg";
import image1 from "../../assets/post/3.jpeg";
import image2 from "../../assets/person/2.jpeg";
import image3 from "../../assets/person/3.jpeg";
import image4 from "../../assets/person/4.jpeg";
import image5 from "../../assets/person/5.jpeg";
import image6 from "../../assets/person/6.jpeg";
import image7 from "../../assets/person/7.jpeg";

import Feed from "../../components/Layout/feed/Feed";

const Profile = () => {
	return (
		<div className=" w-full h-fit">
			<div className="mb-7 h-fit">
				<img src={image1} className="h-56 w-full" />
				<div className="flex justify-center">
					<div className="flex flex-col items-center justify-center z-10 absolute top-52">
						<Avatar src={person1} className="h-36 w-36 "></Avatar>
						<Typography className="font-bold mt-4">
							Alice
						</Typography>
					</div>
				</div>
			</div>
			<div className="flex mt-32">
				<div className="flex-2">
					{" "}
					<Feed />
				</div>
				<div className="flex-1 mt-3">
					<div>
						<Typography className="font-bold mb-3 ">
							User Information
						</Typography>
						<Typography className="text-gray-500">
							city : New York
						</Typography>
						<Typography className="text-gray-500">
							From : Spain
						</Typography>
						<Typography className="text-gray-500">
							Relation : Single
						</Typography>
					</div>
					<div className="mt-6">
						<Typography className="font-bold mb-4">
							User Friends
						</Typography>
						<div className="grid grid-cols-3 grid-rows-2 gap-4">
							<div className="flex flex-col items-center justify-center">
								<img
									src={image2}
									className="rounded-lg h-32 w-32"
								/>
								<Typography>jony mosh</Typography>
							</div>
							<div className="flex flex-col items-center justify-center">
								<img
									src={image3}
									className="rounded-lg h-32 w-32"
								/>
								<Typography>lily lee</Typography>
							</div>
							<div className="flex flex-col items-center justify-center">
								<img
									src={image4}
									className="rounded-lg h-32 w-32"
								/>
								<Typography>rose delray</Typography>
							</div>
							<div className="flex flex-col items-center justify-center">
								<img
									src={image5}
									className="rounded-lg h-32 w-32"
								/>
								<Typography>lana jily</Typography>
							</div>
							<div className="flex flex-col items-center justify-center">
								<img
									src={image6}
									className="rounded-lg h-32 w-32"
								/>
								<Typography> steve</Typography>
							</div>
							<div className="flex flex-col items-center justify-center">
								<img
									src={image7}
									className="rounded-lg h-32 w-32"
								/>
								<Typography>safak</Typography>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
