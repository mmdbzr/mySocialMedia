import Share from "./Share";
import Post from "./post";
import Posts from "../../../DummyData/DummyData";

const Feed = () => {
	return (
		<div className=" flex flex-col flex-5 items-center">
			<Share />
			{Posts.map((p) => (
				<Post key={p.id} posts={p} />
			))}
		</div>
	);
};
export default Feed;
