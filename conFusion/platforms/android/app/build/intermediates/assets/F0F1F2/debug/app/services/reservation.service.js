"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var couchbase_service_1 = require("./couchbase.service");
var ReservationService = /** @class */ (function () {
    function ReservationService(couchbaseService) {
        this.couchbaseService = couchbaseService;
        this.docId = "reservations";
        this.reservations = [];
        var doc = this.couchbaseService.getDocument(this.docId);
        if (doc == null) {
            this.couchbaseService.createDocument({ "reservations": [] }, this.docId);
        }
        else {
            this.reservations = doc.reservations;
        }
    }
    ReservationService.prototype.addReservation = function (fields) {
        this.reservations.push(fields);
        this.couchbaseService.updateDocument(this.docId, { "reservations": this.reservations });
        return true;
    };
    ReservationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [couchbase_service_1.CouchbaseService])
    ], ReservationService);
    return ReservationService;
}());
exports.ReservationService = ReservationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc2VydmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsaUNBQStCO0FBQy9CLHlEQUF1RDtBQUd2RDtJQUlJLDRCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUR0RCxVQUFLLEdBQVcsY0FBYyxDQUFDO1FBRTNCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXZCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQSxDQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxFQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQWMsR0FBZCxVQUFlLE1BQVc7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO1FBQ3RGLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQXBCUSxrQkFBa0I7UUFEOUIsaUJBQVUsRUFBRTt5Q0FLNkIsb0NBQWdCO09BSjdDLGtCQUFrQixDQXFCOUI7SUFBRCx5QkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgeyBDb3VjaGJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4vY291Y2hiYXNlLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlc2VydmF0aW9uU2VydmljZSB7XHJcblxyXG4gICAgcmVzZXJ2YXRpb25zOiBBcnJheTxudW1iZXI+O1xyXG4gICAgZG9jSWQ6IHN0cmluZyA9IFwicmVzZXJ2YXRpb25zXCI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvdWNoYmFzZVNlcnZpY2U6IENvdWNoYmFzZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnJlc2VydmF0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZG9jID0gdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLmdldERvY3VtZW50KHRoaXMuZG9jSWQpO1xyXG4gICAgICAgIGlmKCBkb2MgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvdWNoYmFzZVNlcnZpY2UuY3JlYXRlRG9jdW1lbnQoe1wicmVzZXJ2YXRpb25zXCI6IFtdfSwgdGhpcy5kb2NJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2VydmF0aW9ucyA9IGRvYy5yZXNlcnZhdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFJlc2VydmF0aW9uKGZpZWxkczogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5yZXNlcnZhdGlvbnMucHVzaChmaWVsZHMpO1xyXG4gICAgICAgIHRoaXMuY291Y2hiYXNlU2VydmljZS51cGRhdGVEb2N1bWVudCh0aGlzLmRvY0lkLCB7XCJyZXNlcnZhdGlvbnNcIjogdGhpcy5yZXNlcnZhdGlvbnN9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSJdfQ==