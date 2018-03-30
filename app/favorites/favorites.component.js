"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var favorite_service_1 = require("../services/favorite.service");
var angular_1 = require("nativescript-telerik-ui/listview/angular");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var FavoritesComponent = /** @class */ (function (_super) {
    __extends(FavoritesComponent, _super);
    function FavoritesComponent(favoriteservice, changeDetectorRef, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.favoriteservice = favoriteservice;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        return _this;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favoriteservice.getFavorites()
            .subscribe(function (favorites) { return _this.favorites = new observable_array_1.ObservableArray(favorites); }, function (errmess) { return _this.errMess = errmess; });
    };
    FavoritesComponent.prototype.deleteFavorite = function (id) {
        var _this = this;
        this.favoriteservice.deleteFavorite(id)
            .subscribe(function (favorites) { return _this.favorites = new observable_array_1.ObservableArray(favorites); }, function (errmess) { return _this.errMess = errmess; });
    };
    FavoritesComponent.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.object;
        var currentView;
        if (args.data.x > 200) {
        }
        else if (args.data.x < -200) {
        }
    };
    FavoritesComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    };
    FavoritesComponent.prototype.onSwipeCellFinished = function (args) {
    };
    FavoritesComponent.prototype.onLeftSwipeClick = function (args) {
        console.log('Left swipe click');
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    FavoritesComponent.prototype.onRightSwipeClick = function (args) {
        this.deleteFavorite(args.object.bindingContext.id);
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    __decorate([
        core_1.ViewChild('myListView'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], FavoritesComponent.prototype, "listViewComponent", void 0);
    FavoritesComponent = __decorate([
        core_1.Component({
            selector: 'app-favorites',
            moduleId: module.id,
            templateUrl: './favorites.component.html',
            styleUrls: ['./favorites.component.css']
        }),
        __param(2, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [favorite_service_1.FavoriteService,
            core_1.ChangeDetectorRef, Object])
    ], FavoritesComponent);
    return FavoritesComponent;
}(drawer_page_1.DrawerPage));
exports.FavoritesComponent = FavoritesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0Y7QUFDeEYsaUVBQStEO0FBRy9ELG9FQUFnRjtBQUNoRiwyRUFBeUU7QUFDekUsNERBQTBEO0FBUzFEO0lBQXdDLHNDQUFVO0lBTzlDLDRCQUFvQixlQUFnQyxFQUN4QyxpQkFBb0MsRUFDakIsT0FBTztRQUZ0QyxZQUdRLGtCQUFNLGlCQUFpQixDQUFDLFNBQy9CO1FBSm1CLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUN4Qyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2pCLGFBQU8sR0FBUCxPQUFPLENBQUE7O0lBRXRDLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRTthQUM5QixTQUFTLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0NBQWUsQ0FBQyxTQUFTLENBQUMsRUFBL0MsQ0FBK0MsRUFDbkUsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsRUFBVTtRQUF6QixpQkFJQztRQUhHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQzthQUNsQyxTQUFTLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0NBQWUsQ0FBQyxTQUFTLENBQUMsRUFBL0MsQ0FBK0MsRUFDbkUsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSwwQ0FBYSxHQUFwQixVQUFxQixJQUF1QjtRQUN4QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksV0FBVyxDQUFDO1FBRWhCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdkIsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFOUIsQ0FBQztJQUNMLENBQUM7SUFFTSwrQ0FBa0IsR0FBekIsVUFBMEIsSUFBdUI7UUFDN0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRS9CLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQU8sV0FBVyxDQUFDLENBQUM7UUFDeEQsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBTyxhQUFhLENBQUMsQ0FBQztRQUMzRCxXQUFXLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQy9DLFdBQVcsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDakQsV0FBVyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLGdEQUFtQixHQUExQixVQUEyQixJQUF1QjtJQUVsRCxDQUFDO0lBRU0sNkNBQWdCLEdBQXZCLFVBQXdCLElBQXVCO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDbkUsQ0FBQztJQUVNLDhDQUFpQixHQUF4QixVQUF5QixJQUF1QjtRQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBeER3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBb0IsOEJBQW9CO2lFQUFDO0lBTHhELGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDM0MsQ0FBQztRQVVPLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQUZlLGtDQUFlO1lBQ3JCLHdCQUFpQjtPQVJ2QyxrQkFBa0IsQ0E4RDlCO0lBQUQseUJBQUM7Q0FBQSxBQTlERCxDQUF3Qyx3QkFBVSxHQThEakQ7QUE5RFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcnO1xyXG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tICcuLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5wYWdlJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3VpL2NvcmUvdmlldyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWZhdm9yaXRlcycsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Zhdm9yaXRlcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9mYXZvcml0ZXMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZXNDb21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBmYXZvcml0ZXM6IE9ic2VydmFibGVBcnJheTxEaXNoPjtcclxuICAgIGVyck1lc3M6IHN0cmluZztcclxuXHJcbiAgICBAVmlld0NoaWxkKCdteUxpc3RWaWV3JykgbGlzdFZpZXdDb21wb25lbnQ6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmF2b3JpdGVzZXJ2aWNlOiBGYXZvcml0ZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCkge1xyXG4gICAgICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZXNlcnZpY2UuZ2V0RmF2b3JpdGVzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmYXZvcml0ZXMgPT4gdGhpcy5mYXZvcml0ZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KGZhdm9yaXRlcyksXHJcbiAgICAgICAgICAgICAgICBlcnJtZXNzID0+IHRoaXMuZXJyTWVzcyA9IGVycm1lc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZhdm9yaXRlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlc2VydmljZS5kZWxldGVGYXZvcml0ZShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmYXZvcml0ZXMgPT4gdGhpcy5mYXZvcml0ZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KGZhdm9yaXRlcyksXHJcbiAgICAgICAgICAgICAgICBlcnJtZXNzID0+IHRoaXMuZXJyTWVzcyA9IGVycm1lc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNlbGxTd2lwaW5nKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xyXG4gICAgICAgIHZhciBjdXJyZW50SXRlbVZpZXcgPSBhcmdzLm9iamVjdDtcclxuICAgICAgICB2YXIgY3VycmVudFZpZXc7XHJcblxyXG4gICAgICAgIGlmKGFyZ3MuZGF0YS54ID4gMjAwKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhcmdzLmRhdGEueCA8IC0yMDApIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XHJcbiAgICAgICAgdmFyIHN3aXBlVmlldyA9IGFyZ3NbJ29iamVjdCddO1xyXG5cclxuICAgICAgICB2YXIgbGVmdEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ21hcmstdmlldycpO1xyXG4gICAgICAgIHZhciByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2RlbGV0ZS12aWV3Jyk7XHJcbiAgICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcclxuICAgICAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XHJcbiAgICAgICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpLzI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU3dpcGVDZWxsRmluaXNoZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTGVmdFN3aXBlQ2xpY2soYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTGVmdCBzd2lwZSBjbGljaycpO1xyXG4gICAgICAgIHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblJpZ2h0U3dpcGVDbGljayhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlRmF2b3JpdGUoYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQuaWQpO1xyXG4gICAgICAgIHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG4gICAgfVxyXG59Il19