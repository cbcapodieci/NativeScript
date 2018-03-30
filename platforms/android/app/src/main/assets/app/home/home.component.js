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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUc3RSx5REFBdUQ7QUFFdkQsbUVBQWlFO0FBRWpFLDZEQUEyRDtBQUMzRCw0REFBMEQ7QUFRMUQ7SUFBbUMsaUNBQVU7SUFTM0MsdUJBQW9CLFdBQXdCLEVBQ2xDLGdCQUFrQyxFQUNsQyxhQUE0QixFQUM1QixpQkFBbUMsRUFDaEIsT0FBTztRQUpwQyxZQUtJLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBTmlCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xDLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNoQixhQUFPLEdBQVAsT0FBTyxDQUFBOztJQUVsQyxDQUFDO0lBRUgsZ0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7YUFDOUIsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLEVBQ2xDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBUSxPQUFPLEVBQS9CLENBQStCLENBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUU7YUFDekMsU0FBUyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQTFCLENBQTBCLEVBQ2hELFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxPQUFPLEVBQWhDLENBQWdDLENBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFO2FBQ25DLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixFQUN2QyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQVEsT0FBTyxFQUFqQyxDQUFpQyxDQUFFLENBQUM7SUFDckQsQ0FBQztJQTNCVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUVyQyxDQUFDO1FBY0csV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBSmEsMEJBQVc7WUFDaEIsb0NBQWdCO1lBQ25CLDhCQUFhO1lBQ1Ysd0JBQWlCO09BWmxDLGFBQWEsQ0E2QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdCRCxDQUFtQyx3QkFBVSxHQTZCNUM7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcclxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9tb3Rpb24gfSBmcm9tICcuLi9zaGFyZWQvcHJvbW90aW9uJztcclxuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb21vdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGVhZGVyIH0gZnJvbSAnLi4vc2hhcmVkL2xlYWRlcic7XHJcbmltcG9ydCB7IExlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tICcuLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5wYWdlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBkaXNoOiBEaXNoO1xyXG4gIHByb21vdGlvbjogUHJvbW90aW9uO1xyXG4gIGxlYWRlcjogTGVhZGVyO1xyXG4gIGRpc2hFcnJNZXNzOiBzdHJpbmc7XHJcbiAgcHJvbW9FcnJNZXNzOiBzdHJpbmc7XHJcbiAgbGVhZGVyRXJyTWVzczogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc2hzZXJ2aWNlOiBEaXNoU2VydmljZSxcclxuICAgIHByaXZhdGUgcHJvbW90aW9uc2VydmljZTogUHJvbW90aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbGVhZGVyc2VydmljZTogTGVhZGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6Q2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASW5qZWN0KCdCYXNlVVJMJykgcHJpdmF0ZSBCYXNlVVJMKSB7XHJcbiAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRpc2hzZXJ2aWNlLmdldEZlYXR1cmVkRGlzaCgpXHJcbiAgICAgICAuc3Vic2NyaWJlKGRpc2ggPT4gdGhpcy5kaXNoID0gZGlzaCxcclxuICAgICAgICBlcnJtZXNzID0+IHRoaXMuZGlzaEVyck1lc3MgPSA8YW55PmVycm1lc3MgKTtcclxuICAgIHRoaXMucHJvbW90aW9uc2VydmljZS5nZXRGZWF0dXJlZFByb21vdGlvbigpXHJcbiAgICAgIC5zdWJzY3JpYmUocHJvbW90aW9uID0+IHRoaXMucHJvbW90aW9uID0gcHJvbW90aW9uLFxyXG4gICAgICAgIGVycm1lc3MgPT4gdGhpcy5wcm9tb0Vyck1lc3MgPSA8YW55PmVycm1lc3MgKTtcclxuICAgIHRoaXMubGVhZGVyc2VydmljZS5nZXRGZWF0dXJlZExlYWRlcigpXHJcbiAgICAgIC5zdWJzY3JpYmUobGVhZGVyID0+IHRoaXMubGVhZGVyID0gbGVhZGVyLFxyXG4gICAgICAgIGVycm1lc3MgPT4gdGhpcy5sZWFkZXJFcnJNZXNzID0gPGFueT5lcnJtZXNzICk7XHJcbiAgfVxyXG5cclxufSJdfQ==