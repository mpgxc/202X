import http from "node:http";

const port = process.env.PORT || 3000;

console.log("ENV:", process.env.NODE_ENV);

async function bootstrap(): Promise<unknown> {
	return Promise.resolve(console.info("Hello World"));
}

bootstrap();

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello, World  !  ");
});

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
