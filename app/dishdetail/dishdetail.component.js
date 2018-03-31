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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUk1RSx5REFBdUQ7QUFDdkQsaUVBQStEO0FBRS9ELDBDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsdUVBQStEO0FBQy9ELDJEQUE2QztBQUM3Qyx1Q0FBcUM7QUFFckMsdURBQXFEO0FBQ3JELDZEQUE4RTtBQUM5RSxrRUFBZ0U7QUFFaEUsZ0NBQStCO0FBQy9CLDBDQUE4RDtBQUU5RCx3Q0FBb0U7QUFDcEUsK0JBQThCO0FBQzlCLGdDQUFrQztBQVNsQztJQWNFLDZCQUFvQixXQUF3QixFQUNsQyxJQUFVLEVBQ1YsZUFBZ0MsRUFDaEMsUUFBNEIsRUFDNUIsS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2xDLFlBQWdDLEVBQ2hDLEtBQXVCLEVBQ0osT0FBTztRQVJoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1Ysb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ0osWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQWZwQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBY1UsQ0FBQztJQUV2QyxzQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZCxTQUFTLENBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJ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QVc7WUFDNUIsV0FBSTtZQUNPLGtDQUFlO1lBQ3RCLDhDQUFrQjtZQUNyQix1QkFBYztZQUNILHlCQUFnQjtZQUNwQix5Q0FBa0I7WUFDekIsdUJBQWdCO09BckJ0QixtQkFBbUIsQ0FrTS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWxNRCxJQWtNQztBQWxNWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tbWVudCc7XHJcblxyXG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XHJcbmltcG9ydCB7IEZhdm9yaXRlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Zhdm9yaXRlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgVG9hc3R5IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0eSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcclxuXHJcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHsgQ29tbWVudENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBTd2lwZUdlc3R1cmVFdmVudERhdGEsIFN3aXBlRGlyZWN0aW9uIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xyXG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tIFwidWkvZW51bXNcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1kaXNoZGV0YWlsJyxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kaXNoZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcclxuICBcclxufSlcclxuZXhwb3J0IGNsYXNzIERpc2hkZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBkaXNoOiBEaXNoO1xyXG4gIGNvbW1lbnQ6IENvbW1lbnQ7XHJcbiAgZXJyTWVzczogc3RyaW5nO1xyXG4gIGF2Z3N0YXJzOiBzdHJpbmc7XHJcbiAgbnVtY29tbWVudHM6IG51bWJlcjtcclxuICBmYXZvcml0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNob3dDb21tZW50czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjYXJkSW1hZ2U6IFZpZXc7XHJcbiAgY29tbWVudExpc3Q6IFZpZXc7XHJcbiAgY2FyZExheW91dDogVmlldztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsIFxyXG4gICAgcHJpdmF0ZSBmYXZvcml0ZXNlcnZpY2U6IEZhdm9yaXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSwgXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMucm91dGUucGFyYW1zXHJcbiAgICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuZGlzaHNlcnZpY2UuZ2V0RGlzaCgrcGFyYW1zWydpZCddKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGRpc2ggPT4geyBcclxuICAgICAgICAgICAgdGhpcy5kaXNoID0gZGlzaDtcclxuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmlzRmF2b3JpdGUodGhpcy5kaXNoLmlkKTtcclxuICAgICAgICAgICAgdGhpcy5udW1jb21tZW50cyA9IHRoaXMuZGlzaC5jb21tZW50cy5sZW5ndGg7XHJcbiAgXHJcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gdG90YWwgKz0gY29tbWVudC5yYXRpbmcpO1xyXG4gICAgICAgICAgICB0aGlzLmF2Z3N0YXJzID0gKHRvdGFsL3RoaXMubnVtY29tbWVudHMpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJybWVzcyA9PiB7IHRoaXMuZGlzaCA9IG51bGw7IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzczsgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhZGRUb0Zhdm9yaXRlcygpIHtcclxuICAgICAgaWYgKCF0aGlzLmZhdm9yaXRlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyB0byBGYXZvcml0ZXMnLCB0aGlzLmRpc2guaWQpO1xyXG4gICAgICAgIHRoaXMuZmF2b3JpdGUgPSB0aGlzLmZhdm9yaXRlc2VydmljZS5hZGRGYXZvcml0ZSh0aGlzLmRpc2guaWQpO1xyXG4gICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eSgnQWRkZWQgZGlzaCAnICsgdGhpcy5kaXNoLmlkLCAnc2hvcnQnLCAnYm90dG9tJyk7XHJcbiAgICAgICAgdG9hc3Quc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkNvbW1lbnRGb3JtKCkge1xyXG4gICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChDb21tZW50Q29tcG9uZW50LCBvcHRpb25zKVxyXG4gICAgICAgIC50aGVuKChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY29tbWVudCkpO1xyXG4gICAgICAgIGlmIChjb21tZW50KVxyXG4gICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RpYWxvZygpOiB2b2lkIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICB0aXRsZTogXCJBY3Rpb25zXCIsXHJcbiAgICAgICAgICBtZXNzYWdlOiBcIlNlbGVjdCBhbiBBY3Rpb25cIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICBhY3Rpb25zOiBbXCJBZGQgdG8gRmF2b3JpdGVzXCIsIFwiQWRkIENvbW1lbnRcIl1cclxuICAgICAgfTtcclxuXHJcbiAgICBhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIHN3aXRjaChyZXN1bHQpIHtcclxuICAgICAgICAgIGNhc2UgXCJBZGQgdG8gRmF2b3JpdGVzXCI6XHJcbiAgICAgICAgICAgICAgdGhpcy5hZGRUb0Zhdm9yaXRlcygpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcIkFkZCBDb21tZW50XCI6XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93Q29tbWVudE1vZGFsRm9ybSgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q29tbWVudE1vZGFsRm9ybSgpOiB2b2lkIHtcclxuICAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoQ29tbWVudENvbXBvbmVudCwgb3B0aW9ucylcclxuICAgICAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG4gPSBkLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb21tZW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICBhdXRob3I6IHJlc3VsdC5hdXRob3IsXHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHJlc3VsdC5jb21tZW50LFxyXG4gICAgICAgICAgICAgICAgICByYXRpbmc6IHJlc3VsdC5yYXRpbmcsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGU6IG5cclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgICAgICAgdGhpcy5kaXNoLmNvbW1lbnRzLnB1c2godGhpcy5jb21tZW50KTtcclxuICAgICAgICAgICAgICB0aGlzLm51bWNvbW1lbnRzID0gdGhpcy5kaXNoLmNvbW1lbnRzLmxlbmd0aDtcclxuICAgICAgICAgICAgICB0aGlzLmRpc2guY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHRvdGFsICs9IGNvbW1lbnQucmF0aW5nKTtcclxuICAgICAgICAgICAgICB0aGlzLmF2Z3N0YXJzID0gKHRvdGFsL3RoaXMubnVtY29tbWVudHMpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xyXG5cclxuICAgICAgaWYgKHRoaXMuZGlzaCkge1xyXG4gICAgICAgIHRoaXMuY2FyZEltYWdlID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY2FyZEltYWdlXCIpO1xyXG4gICAgICAgIHRoaXMuY2FyZExheW91dCA9IDxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNhcmRMYXlvdXRcIik7XHJcbiAgICAgICAgdGhpcy5jb21tZW50TGlzdCA9IDxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNvbW1lbnRMaXN0XCIpO1xyXG4gIFxyXG4gICAgICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gU3dpcGVEaXJlY3Rpb24udXAgJiYgIXRoaXMuc2hvd0NvbW1lbnRzICkge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgc2hvd0FuZEhpZGVDb21tZW50cygpIHtcclxuICAgICAgICB0aGlzLmNhcmRJbWFnZSA9IDxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNhcmRJbWFnZVwiKTtcclxuICAgICAgICB0aGlzLmNhcmRMYXlvdXQgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjYXJkTGF5b3V0XCIpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudExpc3QgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjb21tZW50TGlzdFwiKTtcclxuICBcclxuICAgICAgICBpZiAoIXRoaXMuc2hvd0NvbW1lbnRzICkge1xyXG4gICAgICAgICAgdGhpcy5hbmltYXRlVXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zaG93Q29tbWVudHMgKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dDb21tZW50cyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5hbmltYXRlRG93bigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGFuaW1hdGVVcCgpIHtcclxuICAgICAgbGV0IGRlZmluaXRpb25zID0gbmV3IEFycmF5PEFuaW1hdGlvbkRlZmluaXRpb24+KCk7XHJcbiAgICAgIGxldCBhMTogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICAgIHRhcmdldDogdGhpcy5jYXJkSW1hZ2UsXHJcbiAgICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAwIH0sXHJcbiAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogLTIwMCB9LFxyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXHJcbiAgICAgIH07XHJcbiAgICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xyXG4gIFxyXG4gICAgICBsZXQgYTI6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XHJcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMuY2FyZExheW91dCxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiI2ZmYzEwN1wiKSxcclxuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXHJcbiAgICAgIH07XHJcbiAgICAgIGRlZmluaXRpb25zLnB1c2goYTIpO1xyXG4gIFxyXG4gICAgICBsZXQgYW5pbWF0aW9uU2V0ID0gbmV3IEFuaW1hdGlvbihkZWZpbml0aW9ucyk7XHJcbiAgXHJcbiAgICAgIGFuaW1hdGlvblNldC5wbGF5KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaG93Q29tbWVudHMgPSB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBcclxuICBcclxuICAgIGFuaW1hdGVEb3duKCkge1xyXG4gICAgICBsZXQgZGVmaW5pdGlvbnMgPSBuZXcgQXJyYXk8QW5pbWF0aW9uRGVmaW5pdGlvbj4oKTtcclxuICAgICAgbGV0IGExOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xyXG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRJbWFnZSxcclxuICAgICAgICAgIHNjYWxlOiB7IHg6IDEsIHk6IDEgfSxcclxuICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cclxuICAgICAgfTtcclxuICAgICAgZGVmaW5pdGlvbnMucHVzaChhMSk7XHJcbiAgXHJcbiAgICAgIGxldCBhMjogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICAgIHRhcmdldDogdGhpcy5jYXJkTGF5b3V0LFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjZmZmZmZmXCIpLFxyXG4gICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cclxuICAgICAgfTtcclxuICAgICAgZGVmaW5pdGlvbnMucHVzaChhMik7XHJcbiAgXHJcbiAgICAgIGxldCBhbmltYXRpb25TZXQgPSBuZXcgQW5pbWF0aW9uKGRlZmluaXRpb25zKTtcclxuICBcclxuICAgICAgYW5pbWF0aW9uU2V0LnBsYXkoKS50aGVuKCgpID0+IHtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKTogdm9pZCB7XHJcbiAgICB9XHJcbn1cclxuIl19