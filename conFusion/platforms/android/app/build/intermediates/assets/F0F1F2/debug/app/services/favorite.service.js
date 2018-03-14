"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var couchbase_service_1 = require("../services/couchbase.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var LocalNotifications = require("nativescript-local-notifications");
var FavoriteService = /** @class */ (function () {
    function FavoriteService(dishservice, couchbaseservice) {
        this.dishservice = dishservice;
        this.couchbaseservice = couchbaseservice;
        this.docId = "favorites";
        this.favorites = [];
        var doc = this.couchbaseservice.getDocument(this.docId);
        if (doc == null) {
            this.couchbaseservice.createDocument({ "favorites": [] }, this.docId);
        }
        else {
            this.favorites = doc.favorites;
        }
    }
    FavoriteService.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteService.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id)) {
            this.favorites.push(id);
            this.couchbaseservice.updateDocument(this.docId, { "favorites": this.favorites });
            LocalNotifications.schedule([{
                    id: id,
                    title: "ConFusion Favorites",
                    body: 'Dish ' + id + ' added successfully'
                }])
                .then(function () { return console.log('Notification scheduled'); }, function (error) { return console.log('Error showing nofication ' + error); });
        }
        return true;
    };
    FavoriteService.prototype.getFavorites = function () {
        var _this = this;
        return this.dishservice.getDishes()
            .map(function (dishes) { return dishes.filter(function (dish) { return _this.favorites.some(function (el) { return el === dish.id; }); }); });
    };
    FavoriteService.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            this.couchbaseservice.updateDocument(this.docId, { "favorites": this.favorites });
            return this.getFavorites();
        }
        else {
            return Observable_1.Observable.throw('Deleting non-existant favorite');
        }
    };
    FavoriteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            couchbase_service_1.CouchbaseService])
    ], FavoriteService);
    return FavoriteService;
}());
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MseURBQXVEO0FBQ3ZELG1FQUFpRTtBQUVqRSw4Q0FBNkM7QUFDN0MsaUNBQStCO0FBRS9CLHFFQUF1RTtBQUd2RTtJQUtJLHlCQUFvQixXQUF3QixFQUNoQyxnQkFBa0M7UUFEMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUg5QyxVQUFLLEdBQVcsV0FBVyxDQUFDO1FBSXhCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXBCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxFQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLEVBQVU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDbEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7WUFDaEYsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3pCLEVBQUUsRUFBRSxFQUFFO29CQUNOLEtBQUssRUFBRSxxQkFBcUI7b0JBQzVCLElBQUksRUFBRSxPQUFPLEdBQUcsRUFBRSxHQUFHLHFCQUFxQjtpQkFDM0MsQ0FBQyxDQUFDO2lCQUNGLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFyQyxDQUFxQyxFQUMvQyxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FBQztRQUNyRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUFBLGlCQUdDO1FBRkcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO2FBQzlCLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFkLENBQWMsQ0FBQyxFQUF6QyxDQUF5QyxDQUFDLEVBQWhFLENBQWdFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLEVBQVU7UUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztJQUNMLENBQUM7SUFwRFEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQU13QiwwQkFBVztZQUNkLG9DQUFnQjtPQU5yQyxlQUFlLENBcUQzQjtJQUFELHNCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XHJcblxyXG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XHJcbmltcG9ydCB7IENvdWNoYmFzZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb3VjaGJhc2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuaW1wb3J0ICogYXMgTG9jYWxOb3RpZmljYXRpb25zIGZyb20gJ25hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlU2VydmljZSB7XHJcblxyXG4gICAgZmF2b3JpdGVzOiBBcnJheTxudW1iZXI+O1xyXG4gICAgZG9jSWQ6IHN0cmluZyA9IFwiZmF2b3JpdGVzXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjb3VjaGJhc2VzZXJ2aWNlOiBDb3VjaGJhc2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGRvYyA9IHRoaXMuY291Y2hiYXNlc2VydmljZS5nZXREb2N1bWVudCh0aGlzLmRvY0lkKTtcclxuICAgICAgICBpZiAoZG9jID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VjaGJhc2VzZXJ2aWNlLmNyZWF0ZURvY3VtZW50KHtcImZhdm9yaXRlc1wiOiBbXX0sIHRoaXMuZG9jSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMgPSBkb2MuZmF2b3JpdGVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc0Zhdm9yaXRlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mYXZvcml0ZXMuc29tZShlbCA9PiBlbCA9PT0gaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZhdm9yaXRlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZighdGhpcy5pc0Zhdm9yaXRlKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlcy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VjaGJhc2VzZXJ2aWNlLnVwZGF0ZURvY3VtZW50KHRoaXMuZG9jSWQsIHtcImZhdm9yaXRlc1wiOiB0aGlzLmZhdm9yaXRlc30pO1xyXG4gICAgICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoW3tcclxuICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbkZ1c2lvbiBGYXZvcml0ZXNcIixcclxuICAgICAgICAgICAgICAgIGJvZHk6ICdEaXNoICcgKyBpZCArICcgYWRkZWQgc3VjY2Vzc2Z1bGx5J1xyXG4gICAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdOb3RpZmljYXRpb24gc2NoZWR1bGVkJyksXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKCdFcnJvciBzaG93aW5nIG5vZmljYXRpb24gJyArIGVycm9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZhdm9yaXRlcygpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpc2hzZXJ2aWNlLmdldERpc2hlcygpXHJcbiAgICAgICAgICAgIC5tYXAoZGlzaGVzID0+IGRpc2hlcy5maWx0ZXIoZGlzaCA9PiB0aGlzLmZhdm9yaXRlcy5zb21lKGVsID0+IGVsID09PSBkaXNoLmlkKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZhdm9yaXRlKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmF2b3JpdGVzLmluZGV4T2YoaWQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGVzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VjaGJhc2VzZXJ2aWNlLnVwZGF0ZURvY3VtZW50KHRoaXMuZG9jSWQsIHtcImZhdm9yaXRlc1wiOiB0aGlzLmZhdm9yaXRlc30pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGYXZvcml0ZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KCdEZWxldGluZyBub24tZXhpc3RhbnQgZmF2b3JpdGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=