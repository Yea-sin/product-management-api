"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = __importDefault(require("./app/modules/product/product.route"));
const order_route_1 = __importDefault(require("./app/modules/order/order.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// middleware
app.use("/api/products/", product_route_1.default);
app.use("/api/orders/", order_route_1.default);
//root route
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Handle unmatched routes
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: "Internal server error" });
});
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
