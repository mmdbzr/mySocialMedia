import Header from "../../components/Layout/Header";
import RightBar from "../../components/Layout/Rightbar/RightBar";
import Feed from "../../components/Layout/feed/Feed";
import SideBar from "../../components/Layout/sidebar/SideBar";

const Home = () => {
	return (
		<div>
			<div className="flex ">
				{/* <SideBar /> */}
				<div className="flex-4">
					{" "}
					<Feed />
				</div>
				<div className="flex-2">
					{" "}
					<RightBar />
				</div>
			</div>
		</div>
	);
};
export default Home;
