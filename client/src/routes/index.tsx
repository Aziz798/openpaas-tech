import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	const { isPending, error, data } = useQuery({
		queryKey: ["repoData"],
		queryFn: async () =>{
			const res = await axios.get("https://api.github.com/repos/TanStack/query");
			return res.data;
		}
	});

	if (isPending) return "Loading...";

	if (error) return "An error has occurred: " + error.message;

	return (
		<div>
			<h1>{data.name}</h1>
			<p>{data.description}</p>
			<strong>👀 {data.subscribers_count}</strong>{" "}
			<strong>✨ {data.stargazers_count}</strong>{" "}
			<strong>🍴 {data.forks_count}</strong>
		</div>
	);
}
