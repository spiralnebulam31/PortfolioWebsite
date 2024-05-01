import express from "express";
import mongoose from "mongoose";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const mongoUri = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Define MongoDB schema
const AstroPicSchema = new mongoose.Schema({
  title: String,
  url: String,
  hdurl: String,
  explanation: String,
  date: Date,
  created_at: { type: Date, default: Date.now },
});

const AstroPic = mongoose.model("AstroPic", AstroPicSchema);

// Fetch and store latest data from NASA API
const fetchLatestAstroPic = async () => {
  try {
    const nasaApiKey = process.env.NASA_API_KEY;
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`
    );

    const data = response.data;
    const astroPic = new AstroPic({
      title: data.title,
      url: data.url,
      hdurl: data.hdurl,
      explanation: data.explanation,
      copyright: data.copyright,
      date: new Date(data.date),
    });

    // Check if there is already a picture for today, if yes, update it, else save new one
    const existingPic = await AstroPic.findOne({ date: astroPic.date });
    if (existingPic) {
      await AstroPic.findByIdAndUpdate(existingPic._id, astroPic);
      console.log("Updated Astronomy Picture of the Day:", astroPic);
    } else {
      await astroPic.save();
      console.log("Astronomy Picture of the Day saved:", astroPic);
    }
  } catch (error) {
    console.error("Error fetching and saving Astronomy Picture of the Day:", error);
  }
};

// Endpoint to fetch the latest picture of the day
app.get("/astro-pic", async (req, res) => {
  try {
    const latestPic = await AstroPic.findOne().sort({ date: -1 });
    res.json(latestPic);
  } catch (error) {
    console.error("Error fetching latest Astronomy Picture:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fetch and store new data every day
const fetchInterval = 24 * 60 * 60 * 1000; // Fetch new data every 24 hours
fetchLatestAstroPic(); // Initial fetch
setInterval(fetchLatestAstroPic, fetchInterval);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
