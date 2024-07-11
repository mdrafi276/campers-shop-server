import express, { Request, Response } from "express";
import mongoose, { model, Schema } from "mongoose";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;
import dotenv from "dotenv";

dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        message: "Welcome To Campers Shop API Service!",
    });
});

async function main() {
    try {
        // connect to the database
        await mongoose.connect(process?.env?.DB_URL as string);

        // start the express server
        app.listen(port, () => {
            console.log(`app is listening on port ${port}`);
        });
    } catch (err) {
        // log any errors that occur during startup
        console.log(err);
    }
}
main();


const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    stock: {
        type: Boolean,
        default: true,
    },
    ratings: {
        type: Number,
        default: 0,
    },
});


const Product = model("Product", ProductSchema);

app.post("/products", async (req, res) => {
    const product = req.body;
    const result = await Product.create(product);

    res.send({
        success: true,
        message: "Product created successfully!",
        data: result,
    });
});

