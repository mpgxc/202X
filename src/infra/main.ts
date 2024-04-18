import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const { SERVER_HOST, SERVER_PORT } = process.env;

(async () => {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});

	const { url } = await startStandaloneServer(server, {
		listen: {
			port: Number(SERVER_PORT ?? 4000),
			host: SERVER_HOST,
		},
	});

	console.log(`🚀  Server ready at: ${url}`);
})();
