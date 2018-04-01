"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/catch");
var DishService = /** @class */ (function () {
    function DishService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    DishService.prototype.getDishes = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'dishes')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    DishService.prototype.getDish = function (id) {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'dishes/' + id)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    DishService.prototype.getFeaturedDish = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'dishes?featured=true')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res)[0]; })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    DishService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], DishService);
    return DishService;
}());
exports.DishService = DishService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLHNDQUErQztBQUMvQyw2Q0FBNEM7QUFDNUMscUVBQWtFO0FBQ2xFLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFDakMsbUNBQWlDO0FBR2pDO0lBRUUscUJBQW1CLElBQVUsRUFDbkIscUJBQTRDO1FBRG5DLFNBQUksR0FBSixJQUFJLENBQU07UUFDbkIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUFJLENBQUM7SUFFM0QsK0JBQVMsR0FBVDtRQUFBLGlCQUlDO1FBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLEdBQUcsUUFBUSxDQUFDO2FBQ3JDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRSxLQUFLLENBQUMsVUFBQSxLQUFLLElBQU0sTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVU7UUFBbEIsaUJBSUM7UUFIQyxNQUFNLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sR0FBRyxTQUFTLEdBQUUsRUFBRSxDQUFDO2FBQzNDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuRSxLQUFLLENBQUMsVUFBQSxLQUFLLElBQU0sTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUFBLGlCQUlDO1FBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLEdBQUcsc0JBQXNCLENBQUM7YUFDbkQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFNLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RFLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFyQlUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdjLFdBQUk7WUFDSSwrQ0FBcUI7T0FIM0MsV0FBVyxDQXVCdkI7SUFBRCxrQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4uL3NoYXJlZC9iYXNldXJsJztcclxuaW1wb3J0IHsgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlIH0gZnJvbSAnLi9wcm9jZXNzLWh0dHBtc2cuc2VydmljZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlzaFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCxcclxuICAgIHByaXZhdGUgcHJvY2Vzc0hUVFBNc2dTZXJ2aWNlOiBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBnZXREaXNoZXMoKTogT2JzZXJ2YWJsZTxEaXNoW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGJhc2VVUkwgKyAnZGlzaGVzJylcclxuICAgICAgLm1hcChyZXMgPT4geyByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuZXh0cmFjdERhdGEocmVzKTsgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTsgfSk7XHJcbiAgfVxyXG5cclxuICBnZXREaXNoKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPERpc2g+IHtcclxuICAgIHJldHVybiAgdGhpcy5odHRwLmdldChiYXNlVVJMICsgJ2Rpc2hlcy8nKyBpZClcclxuICAgICAgLm1hcChyZXMgPT4geyByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuZXh0cmFjdERhdGEocmVzKTsgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTsgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRGZWF0dXJlZERpc2goKTogT2JzZXJ2YWJsZTxEaXNoPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChiYXNlVVJMICsgJ2Rpc2hlcz9mZWF0dXJlZD10cnVlJylcclxuICAgICAgLm1hcChyZXMgPT4geyByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuZXh0cmFjdERhdGEocmVzKVswXTsgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTsgfSk7XHJcbiAgfVxyXG5cclxufSJdfQ==