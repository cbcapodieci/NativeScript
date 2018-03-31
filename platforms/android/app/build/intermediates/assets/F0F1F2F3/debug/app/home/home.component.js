"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var promotion_service_1 = require("../services/promotion.service");
var leader_service_1 = require("../services/leader.service");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var page_1 = require("ui/page");
var gestures_1 = require("ui/gestures");
var enums = require("ui/enums");
var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(dishservice, promotionservice, leaderservice, changeDetectorRef, page, fonticon, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.dishservice = dishservice;
        _this.promotionservice = promotionservice;
        _this.leaderservice = leaderservice;
        _this.changeDetectorRef = changeDetectorRef;
        _this.page = page;
        _this.fonticon = fonticon;
        _this.BaseURL = BaseURL;
        _this.showLeftCard = true;
        _this.showMiddleCard = false;
        _this.showRightCard = false;
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
    HomeComponent.prototype.onSwipe = function (args) {
        console.log("Swipe Direction: " + args.direction);
        if (args.direction === gestures_1.SwipeDirection.left) {
            this.animateLeft();
        }
        else if (args.direction === gestures_1.SwipeDirection.right) {
            this.animateRight();
        }
    };
    HomeComponent.prototype.animateLeft = function () {
        var _this = this;
        if (this.dish && this.promotion && this.leader) {
            this.leftCard = this.page.getViewById("leftCard");
            this.middleCard = this.page.getViewById("middleCard");
            this.rightCard = this.page.getViewById("rightCard");
            if (this.showLeftCard) {
                this.rightCard.animate({
                    translate: { x: 2000, y: 0 }
                })
                    .then(function () {
                    _this.leftCard.animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showLeftCard = false;
                        _this.showMiddleCard = true;
                        _this.middleCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showMiddleCard) {
                this.leftCard.animate({
                    translate: { x: 2000, y: 0 }
                })
                    .then(function () {
                    _this.middleCard.animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showMiddleCard = false;
                        _this.showRightCard = true;
                        _this.rightCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showRightCard) {
                this.middleCard.animate({
                    translate: { x: 2000, y: 0 }
                })
                    .then(function () {
                    _this.rightCard.animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showRightCard = false;
                        _this.showLeftCard = true;
                        _this.leftCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
        }
    };
    HomeComponent.prototype.animateRight = function () {
        var _this = this;
        if (this.dish && this.promotion && this.leader) {
            this.leftCard = this.page.getViewById("leftCard");
            this.middleCard = this.page.getViewById("middleCard");
            this.rightCard = this.page.getViewById("rightCard");
            if (this.showLeftCard) {
                this.middleCard.animate({
                    translate: { x: -2000, y: 0 }
                })
                    .then(function () {
                    _this.leftCard.animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showLeftCard = false;
                        _this.showRightCard = true;
                        _this.rightCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showMiddleCard) {
                this.rightCard.animate({
                    translate: { x: -2000, y: 0 }
                })
                    .then(function () {
                    _this.middleCard.animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showMiddleCard = false;
                        _this.showLeftCard = true;
                        _this.leftCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showRightCard) {
                this.leftCard.animate({
                    translate: { x: -2000, y: 0 }
                })
                    .then(function () {
                    _this.rightCard.animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showRightCard = false;
                        _this.showMiddleCard = true;
                        _this.middleCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            moduleId: module.id,
            templateUrl: './home.component.html',
        }),
        __param(6, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            promotion_service_1.PromotionService,
            leader_service_1.LeaderService,
            core_1.ChangeDetectorRef,
            page_1.Page,
            nativescript_ngx_fonticon_1.TNSFontIconService, Object])
    ], HomeComponent);
    return HomeComponent;
}(drawer_page_1.DrawerPage));
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUc3RSx5REFBdUQ7QUFFdkQsbUVBQWlFO0FBRWpFLDZEQUEyRDtBQUMzRCw0REFBMEQ7QUFDMUQsdUVBQStEO0FBQy9ELGdDQUErQjtBQUUvQix3Q0FBb0U7QUFDcEUsZ0NBQWtDO0FBT2xDO0lBQW1DLGlDQUFVO0lBZTNDLHVCQUFvQixXQUF3QixFQUNsQyxnQkFBa0MsRUFDbEMsYUFBNEIsRUFDNUIsaUJBQW1DLEVBQ25DLElBQVUsRUFDVixRQUE0QixFQUNULE9BQU87UUFOcEMsWUFPSSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQVJpQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNsQyxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGNBQVEsR0FBUixRQUFRLENBQW9CO1FBQ1QsYUFBTyxHQUFQLE9BQU8sQ0FBQTtRQWJwQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixvQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUFhN0IsQ0FBQztJQUVILGdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFO2FBQzlCLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixFQUNsQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQVEsT0FBTyxFQUEvQixDQUErQixDQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFv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QUFDLENBQUE7b0JBQ0osQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFuTVUsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDckMsQ0FBQztRQXNCRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FOYSwwQkFBVztZQUNoQixvQ0FBZ0I7WUFDbkIsOEJBQWE7WUFDVix3QkFBaUI7WUFDN0IsV0FBSTtZQUNBLDhDQUFrQjtPQXBCM0IsYUFBYSxDQW9NekI7SUFBRCxvQkFBQztDQUFBLEFBcE1ELENBQW1DLHdCQUFVLEdBb001QztBQXBNWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xyXG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XHJcbmltcG9ydCB7IFByb21vdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9wcm9tb3Rpb24nO1xyXG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvbW90aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMZWFkZXIgfSBmcm9tICcuLi9zaGFyZWQvbGVhZGVyJztcclxuaW1wb3J0IHsgTGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gJy4uL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLnBhZ2UnO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcclxuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhLCBTd2lwZURpcmVjdGlvbiB9IGZyb20gJ3VpL2dlc3R1cmVzJztcclxuaW1wb3J0ICogYXMgZW51bXMgZnJvbSAndWkvZW51bXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGRpc2g6IERpc2g7XHJcbiAgcHJvbW90aW9uOiBQcm9tb3Rpb247XHJcbiAgbGVhZGVyOiBMZWFkZXI7XHJcbiAgZGlzaEVyck1lc3M6IHN0cmluZztcclxuICBwcm9tb0Vyck1lc3M6IHN0cmluZztcclxuICBsZWFkZXJFcnJNZXNzOiBzdHJpbmc7XHJcbiAgc2hvd0xlZnRDYXJkOiBib29sZWFuID0gdHJ1ZTtcclxuICBzaG93TWlkZGxlQ2FyZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNob3dSaWdodENhcmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBsZWZ0Q2FyZDogVmlldztcclxuICBtaWRkbGVDYXJkOiBWaWV3O1xyXG4gIHJpZ2h0Q2FyZDogVmlldztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHByb21vdGlvbnNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxlYWRlcnNlcnZpY2U6IExlYWRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOkNoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLFxyXG4gICAgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCkge1xyXG4gICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kaXNoc2VydmljZS5nZXRGZWF0dXJlZERpc2goKVxyXG4gICAgICAgLnN1YnNjcmliZShkaXNoID0+IHRoaXMuZGlzaCA9IGRpc2gsXHJcbiAgICAgICAgZXJybWVzcyA9PiB0aGlzLmRpc2hFcnJNZXNzID0gPGFueT5lcnJtZXNzICk7XHJcbiAgICB0aGlzLnByb21vdGlvbnNlcnZpY2UuZ2V0RmVhdHVyZWRQcm9tb3Rpb24oKVxyXG4gICAgICAuc3Vic2NyaWJlKHByb21vdGlvbiA9PiB0aGlzLnByb21vdGlvbiA9IHByb21vdGlvbixcclxuICAgICAgICBlcnJtZXNzID0+IHRoaXMucHJvbW9FcnJNZXNzID0gPGFueT5lcnJtZXNzICk7XHJcbiAgICB0aGlzLmxlYWRlcnNlcnZpY2UuZ2V0RmVhdHVyZWRMZWFkZXIoKVxyXG4gICAgICAuc3Vic2NyaWJlKGxlYWRlciA9PiB0aGlzLmxlYWRlciA9IGxlYWRlcixcclxuICAgICAgICBlcnJtZXNzID0+IHRoaXMubGVhZGVyRXJyTWVzcyA9IDxhbnk+ZXJybWVzcyApO1xyXG4gIH1cclxuXHJcbiAgb25Td2lwZShhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU3dpcGUgRGlyZWN0aW9uOiBcIiArIGFyZ3MuZGlyZWN0aW9uKTtcclxuXHJcbiAgICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gU3dpcGVEaXJlY3Rpb24ubGVmdCkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZUxlZnQoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gU3dpcGVEaXJlY3Rpb24ucmlnaHQpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGVSaWdodCgpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBhbmltYXRlTGVmdCgpIHtcclxuXHJcbiAgICBpZiAodGhpcy5kaXNoICYmIHRoaXMucHJvbW90aW9uICYmIHRoaXMubGVhZGVyKSB7XHJcblxyXG4gICAgICB0aGlzLmxlZnRDYXJkID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwibGVmdENhcmRcIik7XHJcbiAgICAgIHRoaXMubWlkZGxlQ2FyZCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcIm1pZGRsZUNhcmRcIik7XHJcbiAgICAgIHRoaXMucmlnaHRDYXJkID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwicmlnaHRDYXJkXCIpO1xyXG5cclxuICAgICAgaWYgKCB0aGlzLnNob3dMZWZ0Q2FyZCApIHtcclxuICAgICAgICB0aGlzLnJpZ2h0Q2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAyMDAwLCB5OiAwIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubGVmdENhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtMjAwMCwgeTogMCB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLCBcclxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGVmdENhcmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93TWlkZGxlQ2FyZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWlkZGxlQ2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCB0aGlzLnNob3dNaWRkbGVDYXJkICkge1xyXG4gICAgICAgIHRoaXMubGVmdENhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMjAwMCwgeTogMCB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm1pZGRsZUNhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtMjAwMCwgeTogMCB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLCBcclxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TWlkZGxlQ2FyZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSaWdodENhcmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Q2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIHRoaXMuc2hvd1JpZ2h0Q2FyZCApIHtcclxuICAgICAgICB0aGlzLm1pZGRsZUNhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMjAwMCwgeTogMCB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJpZ2h0Q2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC0yMDAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsIFxyXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSaWdodENhcmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGVmdENhcmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZVJpZ2h0KCkge1xyXG4gICAgaWYgKHRoaXMuZGlzaCAmJiB0aGlzLnByb21vdGlvbiAmJiB0aGlzLmxlYWRlcikge1xyXG5cclxuICAgICAgdGhpcy5sZWZ0Q2FyZCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImxlZnRDYXJkXCIpO1xyXG4gICAgICB0aGlzLm1pZGRsZUNhcmQgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJtaWRkbGVDYXJkXCIpO1xyXG4gICAgICB0aGlzLnJpZ2h0Q2FyZCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcInJpZ2h0Q2FyZFwiKTtcclxuXHJcbiAgICAgIGlmICggdGhpcy5zaG93TGVmdENhcmQgKSB7XHJcbiAgICAgICAgdGhpcy5taWRkbGVDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC0yMDAwLCB5OiAwIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubGVmdENhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAyMDAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsIFxyXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMZWZ0Q2FyZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSaWdodENhcmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Q2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCB0aGlzLnNob3dNaWRkbGVDYXJkICkge1xyXG4gICAgICAgIHRoaXMucmlnaHRDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC0yMDAwLCB5OiAwIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubWlkZGxlQ2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDIwMDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCwgXHJcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01pZGRsZUNhcmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGVmdENhcmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICggdGhpcy5zaG93UmlnaHRDYXJkICkge1xyXG4gICAgICAgIHRoaXMubGVmdENhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTIwMDAsIHk6IDAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yaWdodENhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAyMDAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsIFxyXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSaWdodENhcmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93TWlkZGxlQ2FyZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWlkZGxlQ2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0=