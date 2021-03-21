"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
const common_5 = require("@nestjs/common");
const create_cat_dto_1 = require("../create-cat.dto");
const put_cat_dto_1 = require("../put-cat.dto");
let CatsController = class CatsController {
    creat() {
        return 'This action adds a new cat';
    }
    create(_createCatDto) {
        return 'This action adds a new cat';
    }
    findAll(query) {
        console.log(query);
        return `This action returns all cats (limit: ${query.limit} items)`;
    }
    findOne(id) {
        return `This action returns a #${id} cat`;
    }
    update(id, _updateCatDto) {
        return `This action updates a #${id} cat`;
    }
    remove(id) {
        return `This action removes a #${id} cat`;
    }
};
__decorate([
    common_1.Post(),
    common_2.HttpCode(204),
    common_3.Header('Cache-Control', 'none'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], CatsController.prototype, "creat", null);
__decorate([
    common_1.Post(),
    common_1.Bind(common_5.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    common_1.Bind(common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    common_1.Bind(common_4.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    common_1.Bind(common_4.Param('id'), common_5.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    common_1.Bind(common_4.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "remove", null);
CatsController = __decorate([
    common_1.Controller('cats')
], CatsController);
exports.CatsController = CatsController;
//# sourceMappingURL=cats.controller.js.map