"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var couchbase_service_1 = require("../services/couchbase.service");
var LocalNotifications = require("nativescript-local-notifications");
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
            // Schedule a single notification
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MseURBQXVEO0FBQ3ZELG1FQUFpRTtBQUNqRSxxRUFBdUU7QUFFdkUsOENBQTZDO0FBQzdDLGlDQUErQjtBQUkvQjtJQUtJLHlCQUFvQixXQUF3QixFQUNoQyxnQkFBa0M7UUFEMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUg5QyxVQUFLLEdBQVcsV0FBVyxDQUFDO1FBSXhCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXBCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxFQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLEVBQVU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDbEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7WUFDaEYsaUNBQWlDO1lBQ2pDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN6QixFQUFFLEVBQUUsRUFBRTtvQkFDTixLQUFLLEVBQUUscUJBQXFCO29CQUM1QixJQUFJLEVBQUUsT0FBTyxHQUFHLEVBQUUsR0FBRyxxQkFBcUI7aUJBQzdDLENBQUMsQ0FBQztpQkFDRixJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsRUFBckMsQ0FBcUMsRUFDN0MsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7UUFDN0QsQ0FBQztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFBQSxpQkFHQztRQUZHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTthQUM5QixHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBZCxDQUFjLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxFQUFoRSxDQUFnRSxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQ3JCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztZQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9CLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzlELENBQUM7SUFDTCxDQUFDO0lBckRRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FNd0IsMEJBQVc7WUFDZCxvQ0FBZ0I7T0FOckMsZUFBZSxDQXNEM0I7SUFBRCxzQkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xyXG5cclxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb3VjaGJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY291Y2hiYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBMb2NhbE5vdGlmaWNhdGlvbnMgZnJvbSAnbmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZVNlcnZpY2Uge1xyXG5cclxuICAgIGZhdm9yaXRlczogQXJyYXk8bnVtYmVyPjtcclxuICAgIGRvY0lkOiBzdHJpbmcgPSBcImZhdm9yaXRlc1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaHNlcnZpY2U6IERpc2hTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY291Y2hiYXNlc2VydmljZTogQ291Y2hiYXNlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZmF2b3JpdGVzID0gW107XHJcblxyXG4gICAgICAgIGxldCBkb2MgPSB0aGlzLmNvdWNoYmFzZXNlcnZpY2UuZ2V0RG9jdW1lbnQodGhpcy5kb2NJZCk7XHJcbiAgICAgICAgaWYgKGRvYyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291Y2hiYXNlc2VydmljZS5jcmVhdGVEb2N1bWVudCh7XCJmYXZvcml0ZXNcIjogW119LCB0aGlzLmRvY0lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGVzID0gZG9jLmZhdm9yaXRlcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNGYXZvcml0ZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVzLnNvbWUoZWwgPT4gZWwgPT09IGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRGYXZvcml0ZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNGYXZvcml0ZShpZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMucHVzaChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY291Y2hiYXNlc2VydmljZS51cGRhdGVEb2N1bWVudCh0aGlzLmRvY0lkLCB7XCJmYXZvcml0ZXNcIjogdGhpcy5mYXZvcml0ZXN9KTtcclxuICAgICAgICAgICAgLy8gU2NoZWR1bGUgYSBzaW5nbGUgbm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uRnVzaW9uIEZhdm9yaXRlc1wiLFxyXG4gICAgICAgICAgICAgICAgYm9keTogJ0Rpc2ggJyArIGlkICsgJyBhZGRlZCBzdWNjZXNzZnVsbHknXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnTm90aWZpY2F0aW9uIHNjaGVkdWxlZCcpLFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZygnRXJyb3Igc2hvd2luZyBub2ZpY2F0aW9uICcgKyBlcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZhdm9yaXRlcygpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpc2hzZXJ2aWNlLmdldERpc2hlcygpXHJcbiAgICAgICAgICAgIC5tYXAoZGlzaGVzID0+IGRpc2hlcy5maWx0ZXIoZGlzaCA9PiB0aGlzLmZhdm9yaXRlcy5zb21lKGVsID0+IGVsID09PSBkaXNoLmlkKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZhdm9yaXRlKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmF2b3JpdGVzLmluZGV4T2YoaWQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGVzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VjaGJhc2VzZXJ2aWNlLnVwZGF0ZURvY3VtZW50KHRoaXMuZG9jSWQsIHtcImZhdm9yaXRlc1wiOiB0aGlzLmZhdm9yaXRlc30pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGYXZvcml0ZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KCdEZWxldGluZyBub24tZXhpc3RhbnQgZmF2b3JpdGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=