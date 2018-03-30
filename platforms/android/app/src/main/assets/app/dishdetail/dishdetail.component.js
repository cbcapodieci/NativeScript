"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var favorite_service_1 = require("../services/favorite.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
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
        }
    };
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './dishdetail.component.html',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUkxRCx5REFBdUQ7QUFDdkQsaUVBQStEO0FBRS9ELDBDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsdUVBQStEO0FBQy9ELHVDQUFxQztBQVFyQztJQVVFLDZCQUFvQixXQUF3QixFQUNsQyxlQUFnQyxFQUNoQyxRQUE0QixFQUM1QixLQUFxQixFQUNyQixnQkFBa0MsRUFDZixPQUFPO1FBTGhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQVJwQyxhQUFRLEdBQVksS0FBSyxDQUFDO0lBUWMsQ0FBQztJQUUzQyxzQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZCxTQUFTLENBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDO2FBQ3RFLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDWCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUQsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFN0MsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQXZCLENBQXVCLENBQUMsQ0FBQztZQUMvRCxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsS0FBSyxHQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxFQUNMLFVBQUEsT0FBTyxJQUFNLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sR0FBUSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsNENBQWMsR0FBZDtRQUNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0gsQ0FBQztJQXJDWSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7U0FFM0MsQ0FBQztRQWdCRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FMYSwwQkFBVztZQUNqQixrQ0FBZTtZQUN0Qiw4Q0FBa0I7WUFDckIsdUJBQWM7WUFDSCx5QkFBZ0I7T0FkakMsbUJBQW1CLENBdUMvQjtJQUFELDBCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbW1lbnQnO1xyXG5cclxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWRpc2hkZXRhaWwnLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Rpc2hkZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlzaGRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGRpc2g6IERpc2g7XHJcbiAgY29tbWVudDogQ29tbWVudDtcclxuICBlcnJNZXNzOiBzdHJpbmc7XHJcbiAgYXZnc3RhcnM6IHN0cmluZztcclxuICBudW1jb21tZW50czogbnVtYmVyO1xyXG4gIGZhdm9yaXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc2hzZXJ2aWNlOiBEaXNoU2VydmljZSxcclxuICAgIHByaXZhdGUgZmF2b3JpdGVzZXJ2aWNlOiBGYXZvcml0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsIFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBASW5qZWN0KCdCYXNlVVJMJykgcHJpdmF0ZSBCYXNlVVJMKSB7IH1cclxuXHJcbm5nT25Jbml0KCkge1xyXG4gIHRoaXMucm91dGUucGFyYW1zXHJcbiAgICAuc3dpdGNoTWFwKChwYXJhbXM6IFBhcmFtcykgPT4gdGhpcy5kaXNoc2VydmljZS5nZXREaXNoKCtwYXJhbXNbJ2lkJ10pKVxyXG4gICAgLnN1YnNjcmliZShkaXNoID0+IHsgXHJcbiAgICAgICAgdGhpcy5kaXNoID0gZGlzaDtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXNlcnZpY2UuaXNGYXZvcml0ZSh0aGlzLmRpc2guaWQpO1xyXG4gICAgICAgIHRoaXMubnVtY29tbWVudHMgPSB0aGlzLmRpc2guY29tbWVudHMubGVuZ3RoO1xyXG5cclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gdG90YWwgKz0gY29tbWVudC5yYXRpbmcpO1xyXG4gICAgICAgIHRoaXMuYXZnc3RhcnMgPSAodG90YWwvdGhpcy5udW1jb21tZW50cykudG9GaXhlZCgyKTtcclxuICAgICAgfSxcclxuICBlcnJtZXNzID0+IHsgdGhpcy5kaXNoID0gbnVsbDsgdGhpcy5lcnJNZXNzID0gPGFueT5lcnJtZXNzOyB9KTtcclxufVxyXG5cclxuYWRkVG9GYXZvcml0ZXMoKSB7XHJcbiAgaWYgKCF0aGlzLmZhdm9yaXRlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQWRkaW5nIHRvIEZhdm9yaXRlcycsIHRoaXMuZGlzaC5pZCk7XHJcbiAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXNlcnZpY2UuYWRkRmF2b3JpdGUodGhpcy5kaXNoLmlkKTtcclxuICB9XHJcbn1cclxuICBcclxufSJdfQ==