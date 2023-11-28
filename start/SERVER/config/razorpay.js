const Razorpay = require("razorpay");

exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY, // Enter the Key ID generated from Dashboard → Settings → API Keys
    key_secret: process.env.RAZORPAY_SECRET,
});