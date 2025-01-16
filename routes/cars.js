import express from "express";
import { cars } from "../mockData.js";

const router = express.Router();

router.get("/search", (req, res) => {
    const { fuelType, color, make, year } = req.query;

    const filteredCars = cars.filter((car) => {
        let matches = true;
        if (fuelType)
            matches =
                matches &&
                car.fuelType.toLowerCase() === fuelType.toLowerCase();
        if (color)
            matches =
                matches && car.color.toLowerCase() === color.toLowerCase();
        if (make)
            matches =
                matches && car.make.toLowerCase().includes(make.toLowerCase());
        if (year) matches = matches && car.year === parseInt(year, 10);

        return matches;
    });

    res.json({
        success: true,
        results: filteredCars.length,
        cars: filteredCars,
    });
});

export { router as carsRouter };
