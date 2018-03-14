"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var ContactComponent = /** @class */ (function (_super) {
    __extends(ContactComponent, _super);
    function ContactComponent(changeDetectorRef, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        return _this;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            moduleId: module.id,
            templateUrl: './contact.component.html'
        }),
        __param(1, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, Object])
    ], ContactComponent);
    return ContactComponent;
}(drawer_page_1.DrawerPage));
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUc3RSw0REFBMEQ7QUFPMUQ7SUFBc0Msb0NBQVU7SUFFNUMsMEJBQ1ksaUJBQW1DLEVBQ2hCLE9BQU87UUFGdEMsWUFHTSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUhPLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDaEIsYUFBTyxHQUFQLE9BQU8sQ0FBQTs7SUFFbEMsQ0FBQztJQUVMLG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBVFEsZ0JBQWdCO1FBTDVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDckIsV0FBVyxFQUFFLDBCQUEwQjtTQUN4QyxDQUFDO1FBS08sV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBRFEsd0JBQWlCO09BSHRDLGdCQUFnQixDQVU1QjtJQUFELHVCQUFDO0NBQUEsQUFWRCxDQUFzQyx3QkFBVSxHQVUvQztBQVZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gJy4uL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLnBhZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY29udGFjdCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWN0LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOkNoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIEBJbmplY3QoJ0Jhc2VVUkwnKSBwcml2YXRlIEJhc2VVUkwpIHtcclxuICAgICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG59Il19