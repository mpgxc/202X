import { ApolloServer } from "@apollo/server";
import { handlers, startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const proxy = handlers.createAPIGatewayProxyEventV2RequestHandler();

export const handler = startServerAndCreateLambdaHandler(server, proxy);
