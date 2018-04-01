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
var LeaderService = /** @class */ (function () {
    function LeaderService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    LeaderService.prototype.getPromotions = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'leaders')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    LeaderService.prototype.getLeader = function (id) {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'leaders/' + id)
            .map(function (res) { return _this.processHTTPMsgService.extractData(res); })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'leaders?featured=true')
            .map(function (res) { return _this.processHTTPMsgService.extractData(res)[0]; })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    LeaderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], LeaderService);
    return LeaderService;
}());
exports.LeaderService = LeaderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsZWFkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxzQ0FBK0M7QUFDL0MsNkNBQTRDO0FBQzVDLHFFQUFrRTtBQUNsRSxpQ0FBK0I7QUFDL0IsbUNBQWlDO0FBQ2pDLG1DQUFpQztBQUVqQzs7OztFQUlFO0FBRUY7SUFFRSx1QkFBbUIsSUFBVSxFQUNuQixxQkFBNEM7UUFEbkMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNuQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQUksQ0FBQztJQUUzRCxxQ0FBYSxHQUFiO1FBQUEsaUJBSUM7UUFIQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sR0FBRyxTQUFTLENBQUM7YUFDcEMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFNLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25FLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsRUFBVTtRQUFwQixpQkFJQztRQUhDLE1BQU0sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxHQUFHLFVBQVUsR0FBRSxFQUFFLENBQUM7YUFDMUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFNLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25FLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFBQSxpQkFJQztRQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxHQUFHLHVCQUF1QixDQUFDO2FBQ2xELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBTSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0RSxLQUFLLENBQUMsVUFBQSxLQUFLLElBQU0sTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBckJVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FHYyxXQUFJO1lBQ0ksK0NBQXFCO09BSDNDLGFBQWEsQ0F1QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGVhZGVyIH0gZnJvbSAnLi4vc2hhcmVkL2xlYWRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwnO1xyXG5pbXBvcnQgeyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UgfSBmcm9tICcuL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcblxyXG4vKlxyXG4gIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIERpc2hQcm92aWRlciBwcm92aWRlci5cclxuICBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2RvY3MvdHMvbGF0ZXN0L2d1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uLmh0bWxcclxuICBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVycyBhbmQgQW5ndWxhciAyIERJLlxyXG4qL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMZWFkZXJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHAsXHJcbiAgICBwcml2YXRlIHByb2Nlc3NIVFRQTXNnU2VydmljZTogUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgZ2V0UHJvbW90aW9ucygpOiBPYnNlcnZhYmxlPExlYWRlcltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChiYXNlVVJMICsgJ2xlYWRlcnMnKVxyXG4gICAgICAgIC5tYXAocmVzID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmV4dHJhY3REYXRhKHJlcyk7IH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTsgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMZWFkZXIoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8TGVhZGVyPiB7XHJcbiAgICByZXR1cm4gIHRoaXMuaHR0cC5nZXQoYmFzZVVSTCArICdsZWFkZXJzLycrIGlkKVxyXG4gICAgICAgIC5tYXAocmVzID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmV4dHJhY3REYXRhKHJlcyk7IH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTsgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRGZWF0dXJlZExlYWRlcigpOiBPYnNlcnZhYmxlPExlYWRlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYmFzZVVSTCArICdsZWFkZXJzP2ZlYXR1cmVkPXRydWUnKVxyXG4gICAgICAgIC5tYXAocmVzID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmV4dHJhY3REYXRhKHJlcylbMF07IH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTsgfSk7XHJcbiAgfVxyXG5cclxufSJdfQ==