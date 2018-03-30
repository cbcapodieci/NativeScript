"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var couchbase_service_1 = require("../services/couchbase.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MseURBQXVEO0FBQ3ZELG1FQUFpRTtBQUVqRSw4Q0FBNkM7QUFDN0MsaUNBQStCO0FBSS9CO0lBS0kseUJBQW9CLFdBQXdCLEVBQ2hDLGdCQUFrQztRQUQxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSDlDLFVBQUssR0FBVyxXQUFXLENBQUM7UUFJeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFcEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEVBQUMsV0FBVyxFQUFFLEVBQUUsRUFBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDbkMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsRUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssRUFBRSxFQUFULENBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksRUFBVTtRQUNsQixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztRQUNwRixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUFBLGlCQUdDO1FBRkcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO2FBQzlCLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFkLENBQWMsQ0FBQyxFQUF6QyxDQUF5QyxDQUFDLEVBQWhFLENBQWdFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLEVBQVU7UUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztJQUNMLENBQUM7SUE3Q1EsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQU13QiwwQkFBVztZQUNkLG9DQUFnQjtPQU5yQyxlQUFlLENBOEMzQjtJQUFELHNCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7QUE5Q1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XHJcblxyXG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XHJcbmltcG9ydCB7IENvdWNoYmFzZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb3VjaGJhc2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlU2VydmljZSB7XHJcblxyXG4gICAgZmF2b3JpdGVzOiBBcnJheTxudW1iZXI+O1xyXG4gICAgZG9jSWQ6IHN0cmluZyA9IFwiZmF2b3JpdGVzXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjb3VjaGJhc2VzZXJ2aWNlOiBDb3VjaGJhc2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGRvYyA9IHRoaXMuY291Y2hiYXNlc2VydmljZS5nZXREb2N1bWVudCh0aGlzLmRvY0lkKTtcclxuICAgICAgICBpZiAoZG9jID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VjaGJhc2VzZXJ2aWNlLmNyZWF0ZURvY3VtZW50KHtcImZhdm9yaXRlc1wiOiBbXX0sIHRoaXMuZG9jSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMgPSBkb2MuZmF2b3JpdGVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc0Zhdm9yaXRlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mYXZvcml0ZXMuc29tZShlbCA9PiBlbCA9PT0gaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZhdm9yaXRlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZighdGhpcy5pc0Zhdm9yaXRlKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlcy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VjaGJhc2VzZXJ2aWNlLnVwZGF0ZURvY3VtZW50KHRoaXMuZG9jSWQsIHtcImZhdm9yaXRlc1wiOiB0aGlzLmZhdm9yaXRlc30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGYXZvcml0ZXMoKTogT2JzZXJ2YWJsZTxEaXNoW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXNoc2VydmljZS5nZXREaXNoZXMoKVxyXG4gICAgICAgICAgICAubWFwKGRpc2hlcyA9PiBkaXNoZXMuZmlsdGVyKGRpc2ggPT4gdGhpcy5mYXZvcml0ZXMuc29tZShlbCA9PiBlbCA9PT0gZGlzaC5pZCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGYXZvcml0ZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxEaXNoW10+IHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmZhdm9yaXRlcy5pbmRleE9mKGlkKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIHRoaXMuY291Y2hiYXNlc2VydmljZS51cGRhdGVEb2N1bWVudCh0aGlzLmRvY0lkLCB7XCJmYXZvcml0ZXNcIjogdGhpcy5mYXZvcml0ZXN9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmF2b3JpdGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdygnRGVsZXRpbmcgbm9uLWV4aXN0YW50IGZhdm9yaXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19