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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitiosController = void 0;
const common_1 = require("@nestjs/common");
const sitios_service_1 = require("./sitios.service");
const sitio_dto_1 = require("./sitio.dto");
let SitiosController = class SitiosController {
    sitiosService;
    constructor(sitiosService) {
        this.sitiosService = sitiosService;
    }
    getSitios() {
        return "Sitios";
    }
    createSitio(createSitioDTO) {
        return this.sitiosService.crearSitio(createSitioDTO);
    }
    likeSitio() {
    }
    updateSitio() {
    }
    deleteSitio(params) {
        return `Eliminar el sitio con ID: ${params.id}`;
    }
};
exports.SitiosController = SitiosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SitiosController.prototype, "getSitios", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sitio_dto_1.CrearSitioDTO]),
    __metadata("design:returntype", void 0)
], SitiosController.prototype, "createSitio", null);
__decorate([
    (0, common_1.Post)(":id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SitiosController.prototype, "likeSitio", null);
__decorate([
    (0, common_1.Put)(":id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SitiosController.prototype, "updateSitio", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SitiosController.prototype, "deleteSitio", null);
exports.SitiosController = SitiosController = __decorate([
    (0, common_1.Controller)('sitios'),
    __metadata("design:paramtypes", [sitios_service_1.SitiosService])
], SitiosController);
//# sourceMappingURL=sitios.controller.js.map