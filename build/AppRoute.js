"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var AppRoute = /** @class */ (function () {
    function AppRoute() {
    }
    AppRoute.getInstance = function () {
        if (!AppRoute.instance) {
            AppRoute.instance = express_1.default.Router();
        }
        return AppRoute.instance;
    };
    return AppRoute;
}());
exports.AppRoute = AppRoute;
