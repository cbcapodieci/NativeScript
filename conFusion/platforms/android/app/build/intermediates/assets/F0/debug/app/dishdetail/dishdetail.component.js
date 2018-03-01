"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var favorite_service_1 = require("../services/favorite.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var nativescript_toasty_1 = require("nativescript-toasty");
require("rxjs/add/operator/switchMap");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, favoriteservice, fonticon, route, routerExtensions, BaseURL) {
        this.dishservice = dishservice;
        this.favoriteservice = favoriteservice;
        this.fonticon = fonticon;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.BaseURL = BaseURL;
        this.favorite = false;
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.dishservice.getDish(+params['id']); })
            .subscribe(function (dish) {
            _this.dish = dish;
            _this.favorite = _this.favoriteservice.isFavorite(_this.dish.id);
            _this.numcomments = _this.dish.comments.length;
            var total = 0;
            _this.dish.comments.forEach(function (comment) { return total += comment.rating; });
            _this.avgstars = (total / _this.numcomments).toFixed(2);
        }, function (errmess) { _this.dish = null; _this.errMess = errmess; });
    };
    DishdetailComponent.prototype.addToFavorites = function () {
        if (!this.favorite) {
            console.log('Adding to Favorites', this.dish.id);
            this.favorite = this.favoriteservice.addFavorite(this.dish.id);
            var toast = new nativescript_toasty_1.Toasty('Added dish ' + this.dish.id, 'short', 'bottom');
            toast.show();
        }
    };
    DishdetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './dishdetail.component.html',
            styleUrls: ['./dishdetail.component.css']
        }),
        __param(5, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            favorite_service_1.FavoriteService,
            nativescript_ngx_fonticon_1.TNSFontIconService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUkxRCx5REFBdUQ7QUFDdkQsaUVBQStEO0FBRS9ELDBDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsdUVBQStEO0FBQy9ELDJEQUE2QztBQUM3Qyx1Q0FBcUM7QUFRckM7SUFTRSw2QkFBb0IsV0FBd0IsRUFDbEMsZUFBZ0MsRUFDaEMsUUFBNEIsRUFDNUIsS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2YsT0FBTztRQUxoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFQcEMsYUFBUSxHQUFZLEtBQUssQ0FBQztJQU9jLENBQUM7SUFFdkMsc0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsU0FBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQzthQUN0RSxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ1gsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlELEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRTdDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUssSUFBSSxPQUFPLENBQUMsTUFBTSxFQUF2QixDQUF1QixDQUFDLENBQUM7WUFDL0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssR0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsRUFDRCxVQUFBLE9BQU8sSUFBTSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLEdBQVEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELDRDQUFjLEdBQWQ7UUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0QsSUFBTSxLQUFLLEdBQUcsSUFBSSw0QkFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDMUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFFSCxvQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUExQ1UsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNyQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7UUFlRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FMYSwwQkFBVztZQUNqQixrQ0FBZTtZQUN0Qiw4Q0FBa0I7WUFDckIsdUJBQWM7WUFDSCx5QkFBZ0I7T0FiakMsbUJBQW1CLENBMkMvQjtJQUFELDBCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbW1lbnQnO1xyXG5cclxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1kaXNoZGV0YWlsJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Rpc2hkZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Rpc2hkZXRhaWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaXNoZGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZGlzaDogRGlzaDtcclxuICBjb21tZW50OiBDb21tZW50O1xyXG4gIGVyck1lc3M6IHN0cmluZztcclxuICBhdmdzdGFyczogc3RyaW5nO1xyXG4gIG51bWNvbW1lbnRzOiBudW1iZXI7XHJcbiAgZmF2b3JpdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZhdm9yaXRlc2VydmljZTogRmF2b3JpdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLCBcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMucm91dGUucGFyYW1zXHJcbiAgICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuZGlzaHNlcnZpY2UuZ2V0RGlzaCgrcGFyYW1zWydpZCddKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGRpc2ggPT4geyBcclxuICAgICAgICAgICAgdGhpcy5kaXNoID0gZGlzaDtcclxuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmlzRmF2b3JpdGUodGhpcy5kaXNoLmlkKTtcclxuICAgICAgICAgICAgdGhpcy5udW1jb21tZW50cyA9IHRoaXMuZGlzaC5jb21tZW50cy5sZW5ndGg7XHJcbiAgXHJcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gdG90YWwgKz0gY29tbWVudC5yYXRpbmcpO1xyXG4gICAgICAgICAgICB0aGlzLmF2Z3N0YXJzID0gKHRvdGFsL3RoaXMubnVtY29tbWVudHMpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJybWVzcyA9PiB7IHRoaXMuZGlzaCA9IG51bGw7IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzczsgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhZGRUb0Zhdm9yaXRlcygpIHtcclxuICAgICAgaWYgKCF0aGlzLmZhdm9yaXRlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyB0byBGYXZvcml0ZXMnLCB0aGlzLmRpc2guaWQpO1xyXG4gICAgICAgIHRoaXMuZmF2b3JpdGUgPSB0aGlzLmZhdm9yaXRlc2VydmljZS5hZGRGYXZvcml0ZSh0aGlzLmRpc2guaWQpO1xyXG4gICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eSgnQWRkZWQgZGlzaCAnICsgdGhpcy5kaXNoLmlkLCAnc2hvcnQnLCAnYm90dG9tJyk7XHJcbiAgICAgICAgdG9hc3Quc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIGdvQmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgfVxyXG59Il19