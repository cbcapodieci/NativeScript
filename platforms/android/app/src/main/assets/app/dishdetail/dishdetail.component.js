"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var favorite_service_1 = require("../services/favorite.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var nativescript_toasty_1 = require("nativescript-toasty");
var dialogs_1 = require("ui/dialogs");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var comment_component_1 = require("../comment/comment.component");
var page_1 = require("ui/page");
var animation_1 = require("ui/animation");
var gestures_1 = require("ui/gestures");
var color_1 = require("color");
var enums = require("ui/enums");
var SocialShare = require("nativescript-social-share");
var image_source_1 = require("image-source");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(favoriteservice, page, fonticon, dishservice, route, routerExtensions, modalService, vcRef, BaseURL) {
        this.favoriteservice = favoriteservice;
        this.page = page;
        this.fonticon = fonticon;
        this.dishservice = dishservice;
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
            var toast = new nativescript_toasty_1.Toasty("Added Dish " + this.dish.id, "short", "bottom");
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
    DishdetailComponent.prototype.socialShare = function () {
        var image;
        image_source_1.fromUrl(this.BaseURL + this.dish.image)
            .then(function (img) {
            image = img;
            SocialShare.shareImage(image, "How would you like to share this image?");
        })
            .catch(function () { console.log('Error loading image'); });
    };
    DishdetailComponent.prototype.actionPopup = function () {
        var _this = this;
        var options = {
            title: "Actions",
            message: "Choose Your Action",
            cancelButtonText: "Cancel",
            actions: ["Add to Favorites", "Add Comment", "Social Sharing"],
        };
        dialogs_1.action(options).then(function (result) {
            if (result == "Add to Favorites") {
                if (_this.favorite) {
                    var toast = new nativescript_toasty_1.Toasty("Already in Favorites");
                    toast.show();
                }
                _this.addToFavorites();
            }
            else if (result == "Add Comment") {
                console.log(result);
                _this.createModalView();
            }
            else if (result === 'Social Sharing') {
                _this.socialShare();
            }
        });
    };
    DishdetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    DishdetailComponent.prototype.createModalView = function () {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        this.modalService.showModal(comment_component_1.CommentComponent, options).then(function (data) {
            if (data.author == "" || data.comment == "") {
                var toast = new nativescript_toasty_1.Toasty("Name and Comment cannot be Blank");
                toast.show();
            }
            else {
                _this.dish.comments.push(data);
                _this.numcomments = _this.dish.comments.length;
                var total_1 = 0;
                _this.dish.comments.forEach(function (comment) { return total_1 += comment.rating; });
                _this.avgstars = (total_1 / _this.numcomments).toFixed(2);
                var toast = new nativescript_toasty_1.Toasty("Comment Added");
                toast.show();
            }
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
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './dishdetail.component.html',
        }),
        __param(8, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [favorite_service_1.FavoriteService,
            page_1.Page,
            nativescript_ngx_fonticon_1.TNSFontIconService,
            dish_service_1.DishService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUc1RSx5REFBdUQ7QUFDdkQsaUVBQStEO0FBQy9ELHVFQUErRDtBQUMvRCwwQ0FBeUQ7QUFDekQsc0RBQStEO0FBQy9ELHVDQUFxQztBQUNyQywyREFBNkM7QUFDN0Msc0NBQW9DO0FBQ3BDLGtFQUEyRjtBQUMzRixrRUFBZ0U7QUFDaEUsZ0NBQStCO0FBQy9CLDBDQUE4RDtBQUM5RCx3Q0FBb0U7QUFDcEUsK0JBQThCO0FBQzlCLGdDQUFrQztBQUVsQyx1REFBeUQ7QUFDekQsNkNBQW9EO0FBUXBEO0lBY0UsNkJBQW9CLGVBQWdDLEVBQzFDLElBQVUsRUFDVixRQUE0QixFQUM1QixXQUF3QixFQUN4QixLQUFxQixFQUNyQixnQkFBa0MsRUFDbEMsWUFBZ0MsRUFDaEMsS0FBdUIsRUFDSixPQUFPO1FBUmhCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMxQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDSixZQUFPLEdBQVAsT0FBTyxDQUFBO1FBZnBDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsaUJBQVksR0FBWSxLQUFLLENBQUM7SUFjVSxDQUFDO0lBRXpDLHNDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVhDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTthQUNkLFNBQVMsQ0FBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FB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QU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FSaUIsa0NBQWU7WUFDcEMsV0FBSTtZQUNBLDhDQUFrQjtZQUNmLDBCQUFXO1lBQ2pCLHVCQUFjO1lBQ0gseUJBQWdCO1lBQ3BCLGlDQUFrQjtZQUN6Qix1QkFBZ0I7T0FyQnRCLG1CQUFtQixDQWlPL0I7SUFBRCwwQkFBQztDQUFBLEFBak9ELElBaU9DO0FBak9ZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21tZW50JztcclxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xyXG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcclxuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IENvbW1lbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiwgQW5pbWF0aW9uRGVmaW5pdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhLCBTd2lwZURpcmVjdGlvbiB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbG9yJztcclxuaW1wb3J0ICogYXMgZW51bXMgZnJvbSBcInVpL2VudW1zXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XHJcbmltcG9ydCB7IEltYWdlU291cmNlLCBmcm9tVXJsIH0gZnJvbSBcImltYWdlLXNvdXJjZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1kaXNoZGV0YWlsJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGlzaGRldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlzaGRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGRpc2g6IERpc2g7XHJcbiAgY29tbWVudDogQ29tbWVudDtcclxuICBlcnJNZXNzOiBzdHJpbmc7XHJcbiAgYXZnc3RhcnM6IHN0cmluZztcclxuICBudW1jb21tZW50czogbnVtYmVyO1xyXG4gIGZhdm9yaXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2hvd0NvbW1lbnRzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNhcmRJbWFnZTogVmlldztcclxuICBjb21tZW50TGlzdDogVmlldztcclxuICBjYXJkTGF5b3V0OiBWaWV3O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhdm9yaXRlc2VydmljZTogRmF2b3JpdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLCBcclxuICAgIHByaXZhdGUgZGlzaHNlcnZpY2U6IERpc2hTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLCBcclxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBASW5qZWN0KCdCYXNlVVJMJykgcHJpdmF0ZSBCYXNlVVJMKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcclxuICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuZGlzaHNlcnZpY2UuZ2V0RGlzaCgrcGFyYW1zWydpZCddKSlcclxuICAgICAgLnN1YnNjcmliZShkaXNoID0+IHsgXHJcbiAgICAgICAgICB0aGlzLmRpc2ggPSBkaXNoO1xyXG4gICAgICAgICAgdGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmlzRmF2b3JpdGUodGhpcy5kaXNoLmlkKTtcclxuICAgICAgICAgIHRoaXMubnVtY29tbWVudHMgPSB0aGlzLmRpc2guY29tbWVudHMubGVuZ3RoO1xyXG4gICAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gdG90YWwgKz0gY29tbWVudC5yYXRpbmcpO1xyXG4gICAgICAgICAgdGhpcy5hdmdzdGFycyA9ICh0b3RhbC90aGlzLm51bWNvbW1lbnRzKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJybWVzcyA9PiB7IHRoaXMuZGlzaCA9IG51bGw7IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzczsgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRUb0Zhdm9yaXRlcygpIHtcclxuICAgIGlmICghdGhpcy5mYXZvcml0ZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnQWRkaW5nIHRvIEZhdm9yaXRlcycsIHRoaXMuZGlzaC5pZCk7XHJcbiAgICAgIHRoaXMuZmF2b3JpdGUgPSB0aGlzLmZhdm9yaXRlc2VydmljZS5hZGRGYXZvcml0ZSh0aGlzLmRpc2guaWQpO1xyXG4gICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJBZGRlZCBEaXNoIFwiKyB0aGlzLmRpc2guaWQsIFwic2hvcnRcIiwgXCJib3R0b21cIik7XHJcbiAgICAgIHRvYXN0LnNob3coKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5Db21tZW50Rm9ybSgpIHtcclxuICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChDb21tZW50Q29tcG9uZW50LCBvcHRpb25zKVxyXG4gICAgLnRoZW4oKGNvbW1lbnQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY29tbWVudCkpO1xyXG4gICAgICBpZiAoY29tbWVudClcclxuICAgICAgICB0aGlzLmRpc2guY29tbWVudHMucHVzaChjb21tZW50KTtcclxuICAgIH0pO1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIHNvY2lhbFNoYXJlKCkge1xyXG4gICAgbGV0IGltYWdlOiBJbWFnZVNvdXJjZTtcclxuXHJcbiAgICBmcm9tVXJsKHRoaXMuQmFzZVVSTCArIHRoaXMuZGlzaC5pbWFnZSlcclxuICAgICAudGhlbigoaW1nOiBJbWFnZVNvdXJjZSkgPT4ge1xyXG4gICAgICAgIGltYWdlID0gaW1nOyBcclxuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZUltYWdlKGltYWdlLCBcIkhvdyB3b3VsZCB5b3UgbGlrZSB0byBzaGFyZSB0aGlzIGltYWdlP1wiKVxyXG4gICAgICB9KVxyXG4gICAgIC5jYXRjaCgoKT0+IHsgY29uc29sZS5sb2coJ0Vycm9yIGxvYWRpbmcgaW1hZ2UnKTsgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgYWN0aW9uUG9wdXAoKXtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICB0aXRsZTogXCJBY3Rpb25zXCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiQ2hvb3NlIFlvdXIgQWN0aW9uXCIsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICAgIGFjdGlvbnM6IFtcIkFkZCB0byBGYXZvcml0ZXNcIiwgXCJBZGQgQ29tbWVudFwiLCBcIlNvY2lhbCBTaGFyaW5nXCJdLFxyXG4gICAgfTtcclxuXHJcbiAgICBhY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQgPT0gXCJBZGQgdG8gRmF2b3JpdGVzXCIpIHtcclxuICAgICAgICBpZiAodGhpcy5mYXZvcml0ZSl7XHJcbiAgICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJBbHJlYWR5IGluIEZhdm9yaXRlc1wiKTtcclxuICAgICAgICAgIHRvYXN0LnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRUb0Zhdm9yaXRlcygpO1xyXG4gICAgICB9IFxyXG5cclxuICAgICAgZWxzZSBpZiAocmVzdWx0ID09IFwiQWRkIENvbW1lbnRcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNb2RhbFZpZXcoKTtcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHJlc3VsdCA9PT0gJ1NvY2lhbCBTaGFyaW5nJykge1xyXG4gICAgICAgIHRoaXMuc29jaWFsU2hhcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBcclxuXHJcbiAgZ29CYWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICB9XHJcblxyXG5cclxuICBjcmVhdGVNb2RhbFZpZXcoKSB7XHJcblxyXG4gICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChDb21tZW50Q29tcG9uZW50LCBvcHRpb25zKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBcclxuICAgICAgaWYgKGRhdGEuYXV0aG9yID09IFwiXCIgfHwgZGF0YS5jb21tZW50ID09IFwiXCIpe1xyXG4gICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcIk5hbWUgYW5kIENvbW1lbnQgY2Fubm90IGJlIEJsYW5rXCIpO1xyXG4gICAgICAgIHRvYXN0LnNob3coKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRpc2guY29tbWVudHMucHVzaChkYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm51bWNvbW1lbnRzID0gdGhpcy5kaXNoLmNvbW1lbnRzLmxlbmd0aDtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gdG90YWwgKz0gY29tbWVudC5yYXRpbmcpO1xyXG4gICAgICAgIHRoaXMuYXZnc3RhcnMgPSAodG90YWwvdGhpcy5udW1jb21tZW50cykudG9GaXhlZCgyKTtcclxuICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJDb21tZW50IEFkZGVkXCIpO1xyXG4gICAgICAgIHRvYXN0LnNob3coKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Td2lwZShhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpIHtcclxuXHJcbiAgICBpZiAodGhpcy5kaXNoKSB7XHJcbiAgICAgIHRoaXMuY2FyZEltYWdlID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY2FyZEltYWdlXCIpO1xyXG4gICAgICB0aGlzLmNhcmRMYXlvdXQgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjYXJkTGF5b3V0XCIpO1xyXG4gICAgICB0aGlzLmNvbW1lbnRMaXN0ID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY29tbWVudExpc3RcIik7XHJcblxyXG4gICAgICBpZiAoYXJncy5kaXJlY3Rpb24gPT09IFN3aXBlRGlyZWN0aW9uLnVwICYmICF0aGlzLnNob3dDb21tZW50cyApIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGVVcCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSBTd2lwZURpcmVjdGlvbi5kb3duICYmIHRoaXMuc2hvd0NvbW1lbnRzICkge1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbW1lbnRzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlRG93bigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgc2hvd0FuZEhpZGVDb21tZW50cygpIHtcclxuICAgICAgdGhpcy5jYXJkSW1hZ2UgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjYXJkSW1hZ2VcIik7XHJcbiAgICAgIHRoaXMuY2FyZExheW91dCA9IDxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNhcmRMYXlvdXRcIik7XHJcbiAgICAgIHRoaXMuY29tbWVudExpc3QgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjb21tZW50TGlzdFwiKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5zaG93Q29tbWVudHMgKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlVXAoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLnNob3dDb21tZW50cyApIHtcclxuICAgICAgICB0aGlzLnNob3dDb21tZW50cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZURvd24oKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZVVwKCkge1xyXG4gICAgbGV0IGRlZmluaXRpb25zID0gbmV3IEFycmF5PEFuaW1hdGlvbkRlZmluaXRpb24+KCk7XHJcbiAgICBsZXQgYTE6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XHJcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRJbWFnZSxcclxuICAgICAgICBzY2FsZTogeyB4OiAxLCB5OiAwIH0sXHJcbiAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IC0yMDAgfSxcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJblxyXG4gICAgfTtcclxuICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xyXG5cclxuICAgIGxldCBhMjogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICB0YXJnZXQ6IHRoaXMuY2FyZExheW91dCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcIiNmZmMxMDdcIiksXHJcbiAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXHJcbiAgICB9O1xyXG4gICAgZGVmaW5pdGlvbnMucHVzaChhMik7XHJcblxyXG4gICAgbGV0IGFuaW1hdGlvblNldCA9IG5ldyBBbmltYXRpb24oZGVmaW5pdGlvbnMpO1xyXG5cclxuICAgIGFuaW1hdGlvblNldC5wbGF5KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd0NvbW1lbnRzID0gdHJ1ZTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbiAgfSBcclxuXHJcbiAgYW5pbWF0ZURvd24oKSB7XHJcbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBuZXcgQXJyYXk8QW5pbWF0aW9uRGVmaW5pdGlvbj4oKTtcclxuICAgIGxldCBhMTogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICB0YXJnZXQ6IHRoaXMuY2FyZEltYWdlLFxyXG4gICAgICAgIHNjYWxlOiB7IHg6IDEsIHk6IDEgfSxcclxuICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXHJcbiAgICB9O1xyXG4gICAgZGVmaW5pdGlvbnMucHVzaChhMSk7XHJcblxyXG4gICAgbGV0IGEyOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xyXG4gICAgICAgIHRhcmdldDogdGhpcy5jYXJkTGF5b3V0LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiI2ZmZmZmZlwiKSxcclxuICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cclxuICAgIH07XHJcbiAgICBkZWZpbml0aW9ucy5wdXNoKGEyKTtcclxuXHJcbiAgICBsZXQgYW5pbWF0aW9uU2V0ID0gbmV3IEFuaW1hdGlvbihkZWZpbml0aW9ucyk7XHJcblxyXG4gICAgYW5pbWF0aW9uU2V0LnBsYXkoKS50aGVuKCgpID0+IHtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSJdfQ==