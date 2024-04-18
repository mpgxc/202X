console.log("ENV:", process.env.NODE_ENV);

async function bootstrap(): Promise<any> {
  return Promise.resolve(console.info("Hello World"));
}

bootstrap();
