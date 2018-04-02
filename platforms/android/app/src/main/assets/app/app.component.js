"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_service_1 = require("./services/platform.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(platformService) {
        this.platformService = platformService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.platformService.printPlatformInfo();
        this.platformService.startMonitoringNetwork()
            .subscribe(function (message) {
            console.log(message);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.platformService.stopMonitoringNetwork();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [platform_service_1.PlatformService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsZ0VBQThEO0FBTzlEO0lBRUksc0JBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFJLENBQUM7SUFFekQsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLHNCQUFzQixFQUFFO2FBQzVDLFNBQVMsQ0FBQyxVQUFDLE9BQWU7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2QixDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBRUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBRS9DLENBQUM7SUFuQlEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQUl1QyxrQ0FBZTtPQUYzQyxZQUFZLENBcUJ0QjtJQUFELG1CQUFDO0NBQUEsQUFyQkgsSUFxQkc7QUFyQlUsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsYXRmb3JtU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcGxhdGZvcm0uc2VydmljZSc7IFxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7IFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZSkgeyB9IFxuICAgIFxuICAgIG5nT25Jbml0KCkgeyBcbiAgICAgIHRoaXMucGxhdGZvcm1TZXJ2aWNlLnByaW50UGxhdGZvcm1JbmZvKCk7IFxuICAgICAgdGhpcy5wbGF0Zm9ybVNlcnZpY2Uuc3RhcnRNb25pdG9yaW5nTmV0d29yaygpXG4gICAgICAuc3Vic2NyaWJlKChtZXNzYWdlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7IFxuICAgICAgICBcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBcbiAgICB9IFxuICAgIFxuICAgIG5nT25EZXN0cm95KCkgeyBcbiAgICAgIFxuICAgICAgdGhpcy5wbGF0Zm9ybVNlcnZpY2Uuc3RvcE1vbml0b3JpbmdOZXR3b3JrKCk7IFxuICAgICAgXG4gICAgfSBcbiAgICBcbiAgfVxuIl19