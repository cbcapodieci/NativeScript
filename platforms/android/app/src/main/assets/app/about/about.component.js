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
        }),
        __param(1, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [router_1.RouterExtensions, Object, core_1.ChangeDetectorRef,
            leader_service_1.LeaderService])
    ], AboutComponent);
    return AboutComponent;
}(drawer_page_1.DrawerPage));
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBQzNFLHNEQUE2RDtBQUU3RCw2REFBeUQ7QUFDekQsNERBQXdEO0FBT3hEO0lBQW9DLGtDQUFVO0lBSTFDLHdCQUFvQixnQkFBa0MsRUFDZixPQUFPLEVBQzFCLGlCQUFtQyxFQUNuQyxhQUE0QjtRQUhoRCxZQUlJLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBTG1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDZixhQUFPLEdBQVAsT0FBTyxDQUFBO1FBQzFCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFMaEQsYUFBTyxHQUFrQixFQUFFLENBQUM7O0lBTzVCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRTthQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsRUFDeEMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxHQUFRLE9BQU8sRUFBbEMsQ0FBa0MsQ0FBRSxDQUFDO0lBQzVELENBQUM7SUFmUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO1FBTWUsV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBRFEseUJBQWdCLFVBRWhCLHdCQUFpQjtZQUNwQiw4QkFBYTtPQVB2QyxjQUFjLENBZ0IxQjtJQUFELHFCQUFDO0NBQUEsQUFoQkQsQ0FBb0Msd0JBQVUsR0FnQjdDO0FBaEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7TGVhZGVyfSBmcm9tIFwiLi4vc2hhcmVkL2xlYWRlclwiO1xyXG5pbXBvcnQge0xlYWRlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9sZWFkZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge0RyYXdlclBhZ2V9IGZyb20gXCIuLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWFib3V0JyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBsZWFkZXJzOiBBcnJheTxMZWFkZXI+ID0gW107XHJcbiAgICBsZWFkZXJzRXJyTWVzczogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgICAgICAgICAgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6Q2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxlYWRlclNlcnZpY2U6IExlYWRlclNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sZWFkZXJTZXJ2aWNlLmdldFByb21vdGlvbnMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGxlYWRlcnMgPT4gdGhpcy5sZWFkZXJzID0gbGVhZGVycyxcclxuICAgICAgICAgICAgICAgIGVycm1lc3MgPT4gdGhpcy5sZWFkZXJzRXJyTWVzcyA9IDxhbnk+ZXJybWVzcyApO1xyXG4gICAgfVxyXG59Il19