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
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var nativescript_angular_1 = require("nativescript-angular");
var comment_component_1 = require("../comment/comment.component");
var page_1 = require("ui/page");
var animation_1 = require("ui/animation");
var gestures_1 = require("ui/gestures");
var color_1 = require("color");
var enums = require("ui/enums");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, page, favoriteservice, fonticon, route, routerExtensions, modalService, vcRef, BaseURL) {
        this.dishservice = dishservice;
        this.page = page;
        this.favoriteservice = favoriteservice;
        this.fonticon = fonticon;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.BaseURL = BaseURL;
        this.favorite = false;
        this.showComments = false;
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
    DishdetailComponent.prototype.openCommentForm = function () {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        this.modalService.showModal(comment_component_1.CommentComponent, options)
            .then(function (comment) {
            console.log(JSON.stringify(comment));
            if (comment)
                _this.dish.comments.push(comment);
        });
    };
    DishdetailComponent.prototype.showDialog = function () {
        var _this = this;
        var options = {
            title: "Actions",
            message: "Select an Action",
            cancelButtonText: "Cancel",
            actions: ["Add to Favorites", "Add Comment"]
        };
        dialogs_1.action(options).then(function (result) {
            console.log(result);
            switch (result) {
                case "Add to Favorites":
                    _this.addToFavorites();
                    break;
                case "Add Comment":
                    _this.showCommentModalForm();
                    break;
            }
        });
    };
    DishdetailComponent.prototype.showCommentModalForm = function () {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        this.modalService.showModal(comment_component_1.CommentComponent, options)
            .then(function (result) {
            var d = new Date();
            var n = d.toISOString();
            _this.comment = {
                author: result.author,
                comment: result.comment,
                rating: result.rating,
                date: n
            };
            var total = 0;
            _this.dish.comments.push(_this.comment);
            _this.numcomments = _this.dish.comments.length;
            _this.dish.comments.forEach(function (comment) { return total += comment.rating; });
            _this.avgstars = (total / _this.numcomments).toFixed(2);
        });
    };
    DishdetailComponent.prototype.onSwipe = function (args) {
        if (this.dish) {
            this.cardImage = this.page.getViewById("cardImage");
            this.cardLayout = this.page.getViewById("cardLayout");
            this.commentList = this.page.getViewById("commentList");
            if (args.direction === gestures_1.SwipeDirection.up && !this.showComments) {
                this.animateUp();
            }
            else if (args.direction === gestures_1.SwipeDirection.down && this.showComments) {
                this.showComments = false;
                this.animateDown();
            }
        }
    };
    DishdetailComponent.prototype.showAndHideComments = function () {
        this.cardImage = this.page.getViewById("cardImage");
        this.cardLayout = this.page.getViewById("cardLayout");
        this.commentList = this.page.getViewById("commentList");
        if (!this.showComments) {
            this.animateUp();
        }
        else if (this.showComments) {
            this.showComments = false;
            this.animateDown();
        }
    };
    DishdetailComponent.prototype.animateUp = function () {
        var _this = this;
        var definitions = new Array();
        var a1 = {
            target: this.cardImage,
            scale: { x: 1, y: 0 },
            translate: { x: 0, y: -200 },
            opacity: 0,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a1);
        var a2 = {
            target: this.cardLayout,
            backgroundColor: new color_1.Color("#ffc107"),
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
            _this.showComments = true;
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    DishdetailComponent.prototype.animateDown = function () {
        var definitions = new Array();
        var a1 = {
            target: this.cardImage,
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            opacity: 1,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a1);
        var a2 = {
            target: this.cardLayout,
            backgroundColor: new color_1.Color("#ffffff"),
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
        })
            .catch(function (e) {
            console.log(e.message);
        });
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
        __param(8, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            page_1.Page,
            favorite_service_1.FavoriteService,
            nativescript_ngx_fonticon_1.TNSFontIconService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUk1RSx5REFBdUQ7QUFDdkQsaUVBQStEO0FBRS9ELDBDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsdUVBQStEO0FBQy9ELDJEQUE2QztBQUM3Qyx1Q0FBcUM7QUFFckMsdURBQXFEO0FBQ3JELDZEQUE4RTtBQUM5RSxrRUFBZ0U7QUFFaEUsZ0NBQStCO0FBQy9CLDBDQUE4RDtBQUU5RCx3Q0FBb0U7QUFDcEUsK0JBQThCO0FBQzlCLGdDQUFrQztBQVNsQztJQWNFLDZCQUFvQixXQUF3QixFQUNsQyxJQUFVLEVBQ1YsZUFBZ0MsRUFDaEMsUUFBNEIsRUFDNUIsS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2xDLFlBQWdDLEVBQ2hDLEtBQXVCLEVBQ0osT0FBTztRQVJoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1Ysb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ0osWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQWZwQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBY1UsQ0FBQztJQUV2QyxzQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZCxTQUFTLENBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJ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Q0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBdk1RLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUUzQyxDQUFDO1FBdUJHLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQVJhLDBCQUFXO1lBQzVCLFdBQUk7WUFDTyxrQ0FBZTtZQUN0Qiw4Q0FBa0I7WUFDckIsdUJBQWM7WUFDSCx5QkFBZ0I7WUFDcEIseUNBQWtCO1lBQ3pCLHVCQUFnQjtPQXJCdEIsbUJBQW1CLENBd00vQjtJQUFELDBCQUFDO0NBQUEsQUF4TUQsSUF3TUM7QUF4TVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbW1lbnQnO1xyXG5cclxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nT3B0aW9ucywgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7IENvbW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tbWVudC9jb21tZW50LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiwgQW5pbWF0aW9uRGVmaW5pdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhLCBTd2lwZURpcmVjdGlvbiB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbG9yJztcclxuaW1wb3J0ICogYXMgZW51bXMgZnJvbSBcInVpL2VudW1zXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZGlzaGRldGFpbCcsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGlzaGRldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaXNoZGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZGlzaDogRGlzaDtcclxuICBjb21tZW50OiBDb21tZW50O1xyXG4gIGVyck1lc3M6IHN0cmluZztcclxuICBhdmdzdGFyczogc3RyaW5nO1xyXG4gIG51bWNvbW1lbnRzOiBudW1iZXI7XHJcbiAgZmF2b3JpdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93Q29tbWVudHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY2FyZEltYWdlOiBWaWV3O1xyXG4gIGNvbW1lbnRMaXN0OiBWaWV3O1xyXG4gIGNhcmRMYXlvdXQ6IFZpZXc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaHNlcnZpY2U6IERpc2hTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLCBcclxuICAgIHByaXZhdGUgZmF2b3JpdGVzZXJ2aWNlOiBGYXZvcml0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsIFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIEBJbmplY3QoJ0Jhc2VVUkwnKSBwcml2YXRlIEJhc2VVUkwpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICB0aGlzLnJvdXRlLnBhcmFtc1xyXG4gICAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmRpc2hzZXJ2aWNlLmdldERpc2goK3BhcmFtc1snaWQnXSkpXHJcbiAgICAgICAgLnN1YnNjcmliZShkaXNoID0+IHsgXHJcbiAgICAgICAgICAgIHRoaXMuZGlzaCA9IGRpc2g7XHJcbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGUgPSB0aGlzLmZhdm9yaXRlc2VydmljZS5pc0Zhdm9yaXRlKHRoaXMuZGlzaC5pZCk7XHJcbiAgICAgICAgICAgIHRoaXMubnVtY29tbWVudHMgPSB0aGlzLmRpc2guY29tbWVudHMubGVuZ3RoO1xyXG4gIFxyXG4gICAgICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRpc2guY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHRvdGFsICs9IGNvbW1lbnQucmF0aW5nKTtcclxuICAgICAgICAgICAgdGhpcy5hdmdzdGFycyA9ICh0b3RhbC90aGlzLm51bWNvbW1lbnRzKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm1lc3MgPT4geyB0aGlzLmRpc2ggPSBudWxsOyB0aGlzLmVyck1lc3MgPSA8YW55PmVycm1lc3M7IH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYWRkVG9GYXZvcml0ZXMoKSB7XHJcbiAgICAgIGlmICghdGhpcy5mYXZvcml0ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgdG8gRmF2b3JpdGVzJywgdGhpcy5kaXNoLmlkKTtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXNlcnZpY2UuYWRkRmF2b3JpdGUodGhpcy5kaXNoLmlkKTtcclxuICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoJ0FkZGVkIGRpc2ggJyArIHRoaXMuZGlzaC5pZCwgJ3Nob3J0JywgJ2JvdHRvbScpO1xyXG4gICAgICAgIHRvYXN0LnNob3coKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Db21tZW50Rm9ybSgpIHtcclxuICAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoQ29tbWVudENvbXBvbmVudCwgb3B0aW9ucylcclxuICAgICAgICAudGhlbigoY29tbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpKTtcclxuICAgICAgICBpZiAoY29tbWVudClcclxuICAgICAgICB0aGlzLmRpc2guY29tbWVudHMucHVzaChjb21tZW50KTtcclxuICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEaWFsb2coKTogdm9pZCB7XHJcbiAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgdGl0bGU6IFwiQWN0aW9uc1wiLFxyXG4gICAgICAgICAgbWVzc2FnZTogXCJTZWxlY3QgYW4gQWN0aW9uXCIsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgYWN0aW9uczogW1wiQWRkIHRvIEZhdm9yaXRlc1wiLCBcIkFkZCBDb21tZW50XCJdXHJcbiAgICAgIH07XHJcblxyXG4gICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICBzd2l0Y2gocmVzdWx0KSB7XHJcbiAgICAgICAgICBjYXNlIFwiQWRkIHRvIEZhdm9yaXRlc1wiOlxyXG4gICAgICAgICAgICAgIHRoaXMuYWRkVG9GYXZvcml0ZXMoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJBZGQgQ29tbWVudFwiOlxyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0NvbW1lbnRNb2RhbEZvcm0oKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvbW1lbnRNb2RhbEZvcm0oKTogdm9pZCB7XHJcbiAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKENvbW1lbnRDb21wb25lbnQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICBjb25zdCBuID0gZC50b0lTT1N0cmluZygpO1xyXG4gICAgICAgICAgICAgIHRoaXMuY29tbWVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgYXV0aG9yOiByZXN1bHQuYXV0aG9yLFxyXG4gICAgICAgICAgICAgICAgICBjb21tZW50OiByZXN1bHQuY29tbWVudCxcclxuICAgICAgICAgICAgICAgICAgcmF0aW5nOiByZXN1bHQucmF0aW5nLFxyXG4gICAgICAgICAgICAgICAgICBkYXRlOiBuXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5wdXNoKHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5udW1jb21tZW50cyA9IHRoaXMuZGlzaC5jb21tZW50cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgdGhpcy5kaXNoLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB0b3RhbCArPSBjb21tZW50LnJhdGluZyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5hdmdzdGFycyA9ICh0b3RhbC90aGlzLm51bWNvbW1lbnRzKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Td2lwZShhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpIHtcclxuXHJcbiAgICAgIGlmICh0aGlzLmRpc2gpIHtcclxuICAgICAgICB0aGlzLmNhcmRJbWFnZSA9IDxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNhcmRJbWFnZVwiKTtcclxuICAgICAgICB0aGlzLmNhcmRMYXlvdXQgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjYXJkTGF5b3V0XCIpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudExpc3QgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjb21tZW50TGlzdFwiKTtcclxuICBcclxuICAgICAgICBpZiAoYXJncy5kaXJlY3Rpb24gPT09IFN3aXBlRGlyZWN0aW9uLnVwICYmICF0aGlzLnNob3dDb21tZW50cyApIHtcclxuICAgICAgICAgIHRoaXMuYW5pbWF0ZVVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSBTd2lwZURpcmVjdGlvbi5kb3duICYmIHRoaXMuc2hvd0NvbW1lbnRzICkge1xyXG4gICAgICAgICAgdGhpcy5zaG93Q29tbWVudHMgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuYW5pbWF0ZURvd24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgIH1cclxuICBcclxuICAgIHNob3dBbmRIaWRlQ29tbWVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkSW1hZ2UgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjYXJkSW1hZ2VcIik7XHJcbiAgICAgICAgdGhpcy5jYXJkTGF5b3V0ID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY2FyZExheW91dFwiKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRMaXN0ID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY29tbWVudExpc3RcIik7XHJcbiAgXHJcbiAgICAgICAgaWYgKCF0aGlzLnNob3dDb21tZW50cyApIHtcclxuICAgICAgICAgIHRoaXMuYW5pbWF0ZVVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2hvd0NvbW1lbnRzICkge1xyXG4gICAgICAgICAgdGhpcy5zaG93Q29tbWVudHMgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuYW5pbWF0ZURvd24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhbmltYXRlVXAoKSB7XHJcbiAgICAgIGxldCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheTxBbmltYXRpb25EZWZpbml0aW9uPigpO1xyXG4gICAgICBsZXQgYTE6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XHJcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMuY2FyZEltYWdlLFxyXG4gICAgICAgICAgc2NhbGU6IHsgeDogMSwgeTogMCB9LFxyXG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IC0yMDAgfSxcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJblxyXG4gICAgICB9O1xyXG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGExKTtcclxuICBcclxuICAgICAgbGV0IGEyOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xyXG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRMYXlvdXQsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcIiNmZmMxMDdcIiksXHJcbiAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJblxyXG4gICAgICB9O1xyXG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGEyKTtcclxuICBcclxuICAgICAgbGV0IGFuaW1hdGlvblNldCA9IG5ldyBBbmltYXRpb24oZGVmaW5pdGlvbnMpO1xyXG4gIFxyXG4gICAgICBhbmltYXRpb25TZXQucGxheSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbW1lbnRzID0gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICAgIH0gXHJcbiAgXHJcbiAgICBhbmltYXRlRG93bigpIHtcclxuICAgICAgbGV0IGRlZmluaXRpb25zID0gbmV3IEFycmF5PEFuaW1hdGlvbkRlZmluaXRpb24+KCk7XHJcbiAgICAgIGxldCBhMTogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICAgIHRhcmdldDogdGhpcy5jYXJkSW1hZ2UsXHJcbiAgICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAxIH0sXHJcbiAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXHJcbiAgICAgIH07XHJcbiAgICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xyXG4gIFxyXG4gICAgICBsZXQgYTI6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XHJcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMuY2FyZExheW91dCxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiI2ZmZmZmZlwiKSxcclxuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXHJcbiAgICAgIH07XHJcbiAgICAgIGRlZmluaXRpb25zLnB1c2goYTIpO1xyXG4gIFxyXG4gICAgICBsZXQgYW5pbWF0aW9uU2V0ID0gbmV3IEFuaW1hdGlvbihkZWZpbml0aW9ucyk7XHJcbiAgXHJcbiAgICAgIGFuaW1hdGlvblNldC5wbGF5KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==