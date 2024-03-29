const app = require("./src/app");

const port: number = parseInt(process.env.APP_PORT ?? "8000", 10);

app.listen(port, (err: Error) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});
