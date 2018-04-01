"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/catch");
/*
  Generated class for the DishProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var PromotionService = /** @class */ (function () {
    function PromotionService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    PromotionService.prototype.getPromotions = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'promotions')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    PromotionService.prototype.getPromotion = function (id) {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'promotions/' + id)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'promotions?featured=true')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res)[0]; })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    PromotionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], PromotionService);
    return PromotionService;
}());
exports.PromotionService = PromotionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9tb3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxzQ0FBK0M7QUFDL0MsNkNBQTRDO0FBQzVDLHFFQUFrRTtBQUNsRSxpQ0FBK0I7QUFDL0IsbUNBQWlDO0FBQ2pDLG1DQUFpQztBQUVqQzs7OztFQUlFO0FBRUY7SUFFRSwwQkFBbUIsSUFBVSxFQUNuQixxQkFBNEM7UUFEbkMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNuQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQUksQ0FBQztJQUUzRCx3Q0FBYSxHQUFiO1FBQUEsaUJBSUM7UUFIQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sR0FBRyxZQUFZLENBQUM7YUFDdkMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFNLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25FLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsRUFBVTtRQUF2QixpQkFJQztRQUhDLE1BQU0sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxHQUFHLGFBQWEsR0FBRSxFQUFFLENBQUM7YUFDN0MsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFNLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25FLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCwrQ0FBb0IsR0FBcEI7UUFBQSxpQkFJQztRQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxHQUFHLDBCQUEwQixDQUFDO2FBQ3JELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0RSxLQUFLLENBQUMsVUFBQSxLQUFLLElBQU0sTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBckJVLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUdjLFdBQUk7WUFDSSwrQ0FBcUI7T0FIM0MsZ0JBQWdCLENBdUI1QjtJQUFELHVCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcm9tb3Rpb24gfSBmcm9tICcuLi9zaGFyZWQvcHJvbW90aW9uJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuLi9zaGFyZWQvYmFzZXVybCc7XHJcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gJy4vcHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuXHJcbi8qXHJcbiAgR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgRGlzaFByb3ZpZGVyIHByb3ZpZGVyLlxyXG4gIFNlZSBodHRwczovL2FuZ3VsYXIuaW8vZG9jcy90cy9sYXRlc3QvZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24uaHRtbFxyXG4gIGZvciBtb3JlIGluZm8gb24gcHJvdmlkZXJzIGFuZCBBbmd1bGFyIDIgREkuXHJcbiovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb21vdGlvblNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCxcclxuICAgIHByaXZhdGUgcHJvY2Vzc0hUVFBNc2dTZXJ2aWNlOiBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBnZXRQcm9tb3Rpb25zKCk6IE9ic2VydmFibGU8UHJvbW90aW9uW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGJhc2VVUkwgKyAncHJvbW90aW9ucycpXHJcbiAgICAgICAgLm1hcChyZXMgPT4geyByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuZXh0cmFjdERhdGEocmVzKTsgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4geyByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpOyB9KTtcclxuICB9XHJcblxyXG4gIGdldFByb21vdGlvbihpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb24+IHtcclxuICAgIHJldHVybiAgdGhpcy5odHRwLmdldChiYXNlVVJMICsgJ3Byb21vdGlvbnMvJysgaWQpXHJcbiAgICAgICAgLm1hcChyZXMgPT4geyByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuZXh0cmFjdERhdGEocmVzKTsgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4geyByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpOyB9KTtcclxuICB9XHJcblxyXG4gIGdldEZlYXR1cmVkUHJvbW90aW9uKCk6IE9ic2VydmFibGU8UHJvbW90aW9uPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChiYXNlVVJMICsgJ3Byb21vdGlvbnM/ZmVhdHVyZWQ9dHJ1ZScpXHJcbiAgICAgICAgLm1hcChyZXMgPT4geyByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuZXh0cmFjdERhdGEocmVzKVswXTsgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4geyByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpOyB9KTtcclxuICB9XHJcblxyXG59Il19