"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, route, routerExtensions, BaseURL) {
        this.dishservice = dishservice;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.BaseURL = BaseURL;
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.dishservice.getDish(+params['id']); })
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { _this.dish = null; _this.errMess = errmess; });
    };
    DishdetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './dishdetail.component.html',
        }),
        __param(3, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUcxRCx5REFBdUQ7QUFDdkQsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCx1Q0FBcUM7QUFRckM7SUFNRSw2QkFBb0IsV0FBd0IsRUFDbEMsS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2YsT0FBTztRQUhoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNsQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBQTtJQUFJLENBQUM7SUFFekMsc0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBSkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsU0FBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQzthQUN0RSxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsRUFDL0IsVUFBQSxPQUFPLElBQU0sS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxHQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFyQlUsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNyQixXQUFXLEVBQUUsNkJBQTZCO1NBRTNDLENBQUM7UUFVRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FIYSwwQkFBVztZQUMzQix1QkFBYztZQUNILHlCQUFnQjtPQVJqQyxtQkFBbUIsQ0FzQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tbWVudCc7XHJcbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1kaXNoZGV0YWlsJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Rpc2hkZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlzaGRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGRpc2g6IERpc2g7XHJcbiAgY29tbWVudDogQ29tbWVudDtcclxuICBlcnJNZXNzOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaHNlcnZpY2U6IERpc2hTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBASW5qZWN0KCdCYXNlVVJMJykgcHJpdmF0ZSBCYXNlVVJMKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcclxuICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuZGlzaHNlcnZpY2UuZ2V0RGlzaCgrcGFyYW1zWydpZCddKSlcclxuICAgICAgLnN1YnNjcmliZShkaXNoID0+IHRoaXMuZGlzaCA9IGRpc2gsXHJcbiAgICAgICAgICBlcnJtZXNzID0+IHsgdGhpcy5kaXNoID0gbnVsbDsgdGhpcy5lcnJNZXNzID0gPGFueT5lcnJtZXNzOyB9KTtcclxuICB9XHJcblxyXG4gIGdvQmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgfVxyXG59Il19