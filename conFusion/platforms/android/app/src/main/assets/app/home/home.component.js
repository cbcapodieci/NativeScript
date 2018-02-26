"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var promotion_service_1 = require("../services/promotion.service");
var leader_service_1 = require("../services/leader.service");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(dishservice, promotionservice, leaderservice, changeDetectorRef, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.dishservice = dishservice;
        _this.promotionservice = promotionservice;
        _this.leaderservice = leaderservice;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionservice.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmess) { return _this.promoErrMess = errmess; });
        this.leaderservice.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __param(4, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            promotion_service_1.PromotionService,
            leader_service_1.LeaderService,
            core_1.ChangeDetectorRef, Object])
    ], HomeComponent);
    return HomeComponent;
}(drawer_page_1.DrawerPage));
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUc3RSx5REFBdUQ7QUFFdkQsbUVBQWlFO0FBRWpFLDZEQUEyRDtBQUMzRCw0REFBMEQ7QUFRMUQ7SUFBbUMsaUNBQVU7SUFTM0MsdUJBQW9CLFdBQXdCLEVBQ2xDLGdCQUFrQyxFQUNsQyxhQUE0QixFQUM1QixpQkFBbUMsRUFDaEIsT0FBTztRQUpwQyxZQUtJLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBTmlCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xDLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNoQixhQUFPLEdBQVAsT0FBTyxDQUFBOztJQUVsQyxDQUFDO0lBRUgsZ0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7YUFDOUIsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLEVBQ2xDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBUSxPQUFPLEVBQS9CLENBQStCLENBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUU7YUFDekMsU0FBUyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQTFCLENBQTBCLEVBQ2hELFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxPQUFPLEVBQWhDLENBQWdDLENBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFO2FBQ25DLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixFQUN2QyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQVEsT0FBTyxFQUFqQyxDQUFpQyxDQUFFLENBQUM7SUFDckQsQ0FBQztJQTNCVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO1FBY0csV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBSmEsMEJBQVc7WUFDaEIsb0NBQWdCO1lBQ25CLDhCQUFhO1lBQ1Ysd0JBQWlCO09BWmxDLGFBQWEsQ0E2QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdCRCxDQUFtQyx3QkFBVSxHQTZCNUM7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcclxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9tb3Rpb24gfSBmcm9tICcuLi9zaGFyZWQvcHJvbW90aW9uJztcclxuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb21vdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGVhZGVyIH0gZnJvbSAnLi4vc2hhcmVkL2xlYWRlcic7XHJcbmltcG9ydCB7IExlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tICcuLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5wYWdlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZGlzaDogRGlzaDtcclxuICBwcm9tb3Rpb246IFByb21vdGlvbjtcclxuICBsZWFkZXI6IExlYWRlcjtcclxuICBkaXNoRXJyTWVzczogc3RyaW5nO1xyXG4gIHByb21vRXJyTWVzczogc3RyaW5nO1xyXG4gIGxlYWRlckVyck1lc3M6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHByb21vdGlvbnNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxlYWRlcnNlcnZpY2U6IExlYWRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOkNoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCkge1xyXG4gICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kaXNoc2VydmljZS5nZXRGZWF0dXJlZERpc2goKVxyXG4gICAgICAgLnN1YnNjcmliZShkaXNoID0+IHRoaXMuZGlzaCA9IGRpc2gsXHJcbiAgICAgICAgZXJybWVzcyA9PiB0aGlzLmRpc2hFcnJNZXNzID0gPGFueT5lcnJtZXNzICk7XHJcbiAgICB0aGlzLnByb21vdGlvbnNlcnZpY2UuZ2V0RmVhdHVyZWRQcm9tb3Rpb24oKVxyXG4gICAgICAuc3Vic2NyaWJlKHByb21vdGlvbiA9PiB0aGlzLnByb21vdGlvbiA9IHByb21vdGlvbixcclxuICAgICAgICBlcnJtZXNzID0+IHRoaXMucHJvbW9FcnJNZXNzID0gPGFueT5lcnJtZXNzICk7XHJcbiAgICB0aGlzLmxlYWRlcnNlcnZpY2UuZ2V0RmVhdHVyZWRMZWFkZXIoKVxyXG4gICAgICAuc3Vic2NyaWJlKGxlYWRlciA9PiB0aGlzLmxlYWRlciA9IGxlYWRlcixcclxuICAgICAgICBlcnJtZXNzID0+IHRoaXMubGVhZGVyRXJyTWVzcyA9IDxhbnk+ZXJybWVzcyApO1xyXG4gIH1cclxuXHJcbn0iXX0=