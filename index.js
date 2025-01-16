import express from "express";
import { carsRouter } from "./routes/cars.js";

const PORT = 3050;
const app = express();
app.use(express.json());

app.use("/api/v1/cars", carsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
