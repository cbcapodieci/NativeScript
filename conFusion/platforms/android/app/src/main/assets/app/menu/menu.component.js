"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var dish_service_1 = require("../services/dish.service");
var MenuComponent = /** @class */ (function (_super) {
    __extends(MenuComponent, _super);
    function MenuComponent(dishService, changeDetectorRef, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.dishService = dishService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        return _this;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmess) { return _this.errMess = errmess; });
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            moduleId: module.id,
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        }),
        __param(2, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            core_1.ChangeDetectorRef, Object])
    ], MenuComponent);
    return MenuComponent;
}(drawer_page_1.DrawerPage));
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUU3RSw0REFBMEQ7QUFFMUQseURBQXVEO0FBUXZEO0lBQW1DLGlDQUFVO0lBSzNDLHVCQUFvQixXQUF3QixFQUNsQyxpQkFBbUMsRUFDaEIsT0FBTztRQUZwQyxZQUdJLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBSmlCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xDLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDaEIsYUFBTyxHQUFQLE9BQU8sQ0FBQTs7SUFFbEMsQ0FBQztJQUVILGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO2FBQzNCLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixFQUN2QyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQVEsT0FBTyxFQUEzQixDQUEyQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQWZVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNyQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7UUFRRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FGYSwwQkFBVztZQUNoQix3QkFBaUI7T0FObEMsYUFBYSxDQWlCekI7SUFBRCxvQkFBQztDQUFBLEFBakJELENBQW1DLHdCQUFVLEdBaUI1QztBQWpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tICcuLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5wYWdlJztcclxuXHJcbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLW1lbnUnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWVudS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBkaXNoZXM6IERpc2hbXTtcclxuXHJcbiAgZXJyTWVzczogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc2hTZXJ2aWNlOiBEaXNoU2VydmljZSxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6Q2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASW5qZWN0KCdCYXNlVVJMJykgcHJpdmF0ZSBCYXNlVVJMKSB7XHJcbiAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICAgIH1cclxuICBcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZGlzaFNlcnZpY2UuZ2V0RGlzaGVzKClcclxuICAgIC5zdWJzY3JpYmUoZGlzaGVzID0+IHRoaXMuZGlzaGVzID0gZGlzaGVzLFxyXG4gICAgICBlcnJtZXNzID0+IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzcyk7XHJcbiAgfVxyXG5cclxufSJdfQ==