import foodModel from "../models/foodmodel.js";
import fs from 'fs/promises'; // Import the promise-based version of fs

// Add food item
const addFood = async (req, res) => {
    if (!req.file) {
        return res.json({ success: false, message: "No file uploaded" });
    }

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food Added Successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Food failed to Add in the web" });
    }
};

// All food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error retrieving food list" });
    }
};

// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.json({ success: false, message: "Food item not found" });
        }

        try {
            await fs.unlink(`uploads/${food.image}`);
        } catch (err) {
            console.log(err);
            return res.json({ success: false, message: "Failed to delete image file" });
        }

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error removing food item" });
    }
};

export { addFood, listFood, removeFood };
