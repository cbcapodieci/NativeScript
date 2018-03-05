"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var leader_service_1 = require("../services/leader.service");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var AboutComponent = /** @class */ (function (_super) {
    __extends(AboutComponent, _super);
    function AboutComponent(routerExtensions, BaseURL, changeDetectorRef, leaderService) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.routerExtensions = routerExtensions;
        _this.BaseURL = BaseURL;
        _this.changeDetectorRef = changeDetectorRef;
        _this.leaderService = leaderService;
        _this.leaders = [];
        return _this;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderService.getPromotions()
            .subscribe(function (leaders) { return _this.leaders = leaders; }, function (errmess) { return _this.leadersErrMess = errmess; });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            moduleId: module.id,
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
        }),
        __param(1, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [router_1.RouterExtensions, Object, core_1.ChangeDetectorRef,
            leader_service_1.LeaderService])
    ], AboutComponent);
    return AboutComponent;
}(drawer_page_1.DrawerPage));
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBQzNFLHNEQUE2RDtBQUU3RCw2REFBeUQ7QUFDekQsNERBQXdEO0FBUXhEO0lBQW9DLGtDQUFVO0lBSTFDLHdCQUFvQixnQkFBa0MsRUFDZixPQUFPLEVBQzFCLGlCQUFtQyxFQUNuQyxhQUE0QjtRQUhoRCxZQUlJLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBTG1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDZixhQUFPLEdBQVAsT0FBTyxDQUFBO1FBQzFCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFMaEQsYUFBTyxHQUFrQixFQUFFLENBQUM7O0lBTzVCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRTthQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsRUFDeEMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxHQUFRLE9BQU8sRUFBbEMsQ0FBa0MsQ0FBRSxDQUFDO0lBQzVELENBQUM7SUFmUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO1FBTWUsV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBRFEseUJBQWdCLFVBRWhCLHdCQUFpQjtZQUNwQiw4QkFBYTtPQVB2QyxjQUFjLENBZ0IxQjtJQUFELHFCQUFDO0NBQUEsQUFoQkQsQ0FBb0Msd0JBQVUsR0FnQjdDO0FBaEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7TGVhZGVyfSBmcm9tIFwiLi4vc2hhcmVkL2xlYWRlclwiO1xyXG5pbXBvcnQge0xlYWRlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9sZWFkZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge0RyYXdlclBhZ2V9IGZyb20gXCIuLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWFib3V0JyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYWJvdXQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGxlYWRlcnM6IEFycmF5PExlYWRlcj4gPSBbXTtcclxuICAgIGxlYWRlcnNFcnJNZXNzOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgICBASW5qZWN0KCdCYXNlVVJMJykgcHJpdmF0ZSBCYXNlVVJMLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjpDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgbGVhZGVyU2VydmljZTogTGVhZGVyU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxlYWRlclNlcnZpY2UuZ2V0UHJvbW90aW9ucygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUobGVhZGVycyA9PiB0aGlzLmxlYWRlcnMgPSBsZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgZXJybWVzcyA9PiB0aGlzLmxlYWRlcnNFcnJNZXNzID0gPGFueT5lcnJtZXNzICk7XHJcbiAgICB9XHJcbn0iXX0=