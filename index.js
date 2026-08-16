const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const CORRECT_PASSWORD = "normywatch123";

// 1. Your 11 Video URLs for the video page
const secureVideos = [
    "https://z6v2p9a8.bkcdn.net/library/802424/84c75d52734606f3cdf4246d283dfa9f32606dd9.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4",
    "videos/video4.mp4",
    "videos/video5.mp4",
    "videos/video6.mp4",
    "videos/video7.mp4",
    "videos/video8.mp4",
    "videos/video9.mp4",
    "videos/video10.mp4",
    "videos/video11.mp4"
];

// 2. Your 11 Gallery Images for the gallery page
const secureGalleryImages = [
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2mB3PdvlMTTFlUen6eMVlxLacJ8K9blS19zeiTG1aEQ&s=10", title: "Picture 1" },
    { url: "https://picsum.photos/300/300?random=2", title: "Picture 2" },
    { url: "https://picsum.photos/300/300?random=3", title: "Picture 3" },
    { url: "https://picsum.photos/300/300?random=4", title: "Picture 4" },
    { url: "https://picsum.photos/300/300?random=5", title: "Picture 5" },
    { url: "https://picsum.photos/300/300?random=6", title: "Picture 6" },
    { url: "https://picsum.photos/300/300?random=7", title: "Picture 7" },
    { url: "https://picsum.photos/300/300?random=8", title: "Picture 8" },
    { url: "https://picsum.photos/300/300?random=9", title: "Picture 9" },
    { url: "https://picsum.photos/300/300?random=10", title: "Picture 10" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDtH6AWNpLeEQboJIUpfvyJZmlmv_RNe-3-gOYP1YkA&s=10", title: "Picture 11" }
];

// Single unified password verification endpoint
app.post('/api/verify-password', (req, res) => {
    const { password } = req.body;

    if (password === CORRECT_PASSWORD) {
        res.json({ 
            success: true, 
            message: "Access Granted!", 
            videos: secureVideos,
            images: secureGalleryImages 
        });
    } else {
        res.status(401).json({ success: false, message: "Incorrect password." });
    }
});

// Required for Vercel serverless deployment
module.exports = app;
