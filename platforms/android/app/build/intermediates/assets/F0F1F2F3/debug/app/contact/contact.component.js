"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var Email = require("nativescript-email");
var ContactComponent = /** @class */ (function (_super) {
    __extends(ContactComponent, _super);
    function ContactComponent(changeDetectorRef, fonticon, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.fonticon = fonticon;
        _this.BaseURL = BaseURL;
        return _this;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.sendEmail = function () {
        Email.available()
            .then(function (avail) {
            if (avail) {
                Email.compose({
                    to: ['confusion@food.net'],
                    subject: '[Confusion]: Query',
                    body: 'Dear Sir/Madam:'
                });
            }
            else
                console.log('No Email Configured');
        });
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            moduleId: module.id,
            templateUrl: './contact.component.html'
        }),
        __param(2, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            nativescript_ngx_fonticon_1.TNSFontIconService, Object])
    ], ContactComponent);
    return ContactComponent;
}(drawer_page_1.DrawerPage));
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUM3RSw0REFBMEQ7QUFDMUQsdUVBQStEO0FBQy9ELDBDQUE0QztBQU81QztJQUFzQyxvQ0FBVTtJQUU1QywwQkFDWSxpQkFBbUMsRUFDbkMsUUFBNEIsRUFDVCxPQUFPO1FBSHRDLFlBSU0sa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFKTyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLGNBQVEsR0FBUixRQUFRLENBQW9CO1FBQ1QsYUFBTyxHQUFQLE9BQU8sQ0FBQTs7SUFFbEMsQ0FBQztJQUVMLG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNFLEtBQUssQ0FBQyxTQUFTLEVBQUU7YUFDZCxJQUFJLENBQUMsVUFBQyxLQUFjO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDWixFQUFFLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsSUFBSSxFQUFFLGlCQUFpQjtpQkFDeEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNELElBQUk7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXpCUSxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNyQixXQUFXLEVBQUUsMEJBQTBCO1NBQ3hDLENBQUM7UUFNTyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FGUSx3QkFBaUI7WUFDekIsOENBQWtCO09BSi9CLGdCQUFnQixDQTBCNUI7SUFBRCx1QkFBQztDQUFBLEFBMUJELENBQXNDLHdCQUFVLEdBMEIvQztBQTFCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSAnLi4vc2hhcmVkL2RyYXdlci9kcmF3ZXIucGFnZSc7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgKiBhcyBFbWFpbCBmcm9tICduYXRpdmVzY3JpcHQtZW1haWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY29udGFjdCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWN0LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOkNoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSxcclxuICAgICAgICBASW5qZWN0KCdCYXNlVVJMJykgcHJpdmF0ZSBCYXNlVVJMKSB7XHJcbiAgICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kRW1haWwgKCkge1xyXG4gICAgICBFbWFpbC5hdmFpbGFibGUoKVxyXG4gICAgICAgIC50aGVuKChhdmFpbDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgaWYgKGF2YWlsKSB7XHJcbiAgICAgICAgICAgIEVtYWlsLmNvbXBvc2Uoe1xyXG4gICAgICAgICAgICAgIHRvOiBbJ2NvbmZ1c2lvbkBmb29kLm5ldCddLFxyXG4gICAgICAgICAgICAgIHN1YmplY3Q6ICdbQ29uZnVzaW9uXTogUXVlcnknLFxyXG4gICAgICAgICAgICAgIGJvZHk6ICdEZWFyIFNpci9NYWRhbTonXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gRW1haWwgQ29uZmlndXJlZCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXX0=