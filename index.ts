import express, { Request, Response } from "express";
import mongoose, { model, Schema } from "mongoose";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;
import dotenv from "dotenv";
import { productsSchema } from "./productsSchema";

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


        app.listen(port, () => {
            console.log(`app is listening on port ${port}`);
        });
    } catch (err) {

        console.log(err);
    }
}
main();

// schema
const ProductSchema = productsSchema;

const OrderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
});


const Product = model("Product", ProductSchema);
const bestProduct = model("bestProduct", ProductSchema);
const Order = model("Order", OrderSchema);


app.post("/products", async (req, res) => {
    const product = req.body;
    const result = await Product.create(product);

    res.send({
        success: true,
        message: "Product created successfully!",
        data: result,
    });
});

app.get("/products", async (req, res) => {
    const { searchValue, category, minPrice, maxPrice, sort } = req.query;
    const filter: any = {};

    if (searchValue) {
        filter.$or = [
            { name: { $regex: searchValue, $options: "i" } },
            { description: { $regex: searchValue, $options: "i" } },
        ];
    }
    if (category) {
        filter.category = category;
    }
    if (minPrice && maxPrice) {
        filter.price = { $gte: minPrice, $lte: maxPrice };
    } else if (minPrice) {
        filter.price = { $gte: minPrice };
    } else if (maxPrice) {
        filter.price = { $lte: maxPrice };
    }
    let sortOption: any = {};

    if (sort === "asc") {
        sortOption.price = 1;
    } else if (sort === "desc") {
        sortOption.price = -1;
    }

    try {
        const result = await Product.find(filter).sort(sortOption);
        res.status(200).json({
            success: true,
            message: "Products retrieved successfully!",
            data: result,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message, data: [] });
    }
});
app.get("/best-products", async (req, res) => {
    const result = await Product.find();
    res.json({
        success: true,
        message: "Products retrieved successfully!",
        data: result,
    });
});
app.get("/products/:id", async (req, res) => {
    const result = await Product.findById(req.params.id);
    res.json({
        success: true,
        message: "Product is retrieved successfully!",
        data: result,
    });
});

app.put("/products/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const productData = req.body;
        let result = await Product.findByIdAndUpdate(id, productData, {
            new: true,
        });
        res.json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while updating the product.",
        });
    }
});

app.delete("/products/:id", async (req, res) => {
    const id = req.params.id;
    const result = await Product.findByIdAndDelete(id);
    res.json({
        success: true,
        message: "Product deleted successfully!",
        data: result,
    });
});

app.post("/orders", async (req, res) => {
    const paymentData = req.body;
    const result = await Order.create(paymentData);
    res.json({
        success: true,
        message: "Order successful!",
        data: result,
    });
});

app.put("/products", async (req, res) => {
    try {
        const updatedProductData = req.body;
        const updatedResults = await Promise.all(
            updatedProductData.map(async (product) => {
                const existingProduct = await Product.findById(product._id);

                if (!existingProduct) {

                    return null;
                }
                existingProduct.quantity -= product.quantity;

                if (existingProduct.quantity <= 0) {
                    existingProduct.stock = false;
                }

                return await existingProduct.save();
            })
        );
        res.json({
            success: true,
            message: "Products quantity updated successfully!",
            data: updatedResults,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while updating product quantities.",
        });
    }
});

app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: err?.message || "Internal Server Error",
        error: err,
    });
});

app.use((req: Request, res: Response, next) => {
    return res.status(401).json({
        success: false,
        statusCode: 404,
        message: "Not Found",
    });
});
