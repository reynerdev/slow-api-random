"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("../utils");
const cors_1 = __importDefault(require("cors"));
const randomResponse_json_1 = __importDefault(require("../utils/randomResponse.json"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors_1.default);
const PORT = process.env.PORT || 3000;
app.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = parseInt((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
    console.time('init');
    let sleepTime;
    if (id === 100) {
        sleepTime = yield (0, utils_1.randomSleep)();
    }
    console.time('init');
    console.log('finishid sleep');
    // console.lo
    const jsonResponse = JSON.parse(JSON.stringify(randomResponse_json_1.default));
    jsonResponse.id = id;
    jsonResponse.sleepTime = sleepTime || 0;
    res.send(JSON.stringify(jsonResponse));
}));
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
