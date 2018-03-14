"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var dialogs_1 = require("ui/dialogs");
var application_settings_1 = require("application-settings");
var DrawerComponent = /** @class */ (function () {
    function DrawerComponent(fonticon) {
        this.fonticon = fonticon;
    }
    DrawerComponent.prototype.displayLoginDialog = function () {
        var options = {
            title: "Login",
            message: 'Type Your Login Credentials',
            userName: application_settings_1.getString("userName", ""),
            password: application_settings_1.getString("password", ""),
            okButtonText: "Login",
            cancelButtonText: "Cancel"
        };
        dialogs_1.login(options)
            .then(function (loginResult) {
            application_settings_1.setString("userName", loginResult.userName);
            application_settings_1.setString("password", loginResult.password);
        }, function () {
            console.log('Login cancelled');
        });
    };
    DrawerComponent = __decorate([
        core_1.Component({
            selector: 'drawer-content',
            templateUrl: './shared/drawer/drawer.component.html',
        }),
        __metadata("design:paramtypes", [nativescript_ngx_fonticon_1.TNSFontIconService])
    ], DrawerComponent);
    return DrawerComponent;
}());
exports.DrawerComponent = DrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsdUVBQStEO0FBQy9ELHNDQUFnRDtBQUNoRCw2REFBNEQ7QUFNNUQ7SUFFSSx5QkFBb0IsUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFBSSxDQUFDO0lBRXJELDRDQUFrQixHQUFsQjtRQUNJLElBQUksT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUUsNkJBQTZCO1lBQ3RDLFFBQVEsRUFBRSxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDbkMsUUFBUSxFQUFFLGdDQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUNuQyxZQUFZLEVBQUUsT0FBTztZQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzdCLENBQUE7UUFFRCxlQUFLLENBQUMsT0FBTyxDQUFDO2FBQ1QsSUFBSSxDQUFDLFVBQUMsV0FBd0I7WUFDM0IsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLGdDQUFTLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxDQUFDLEVBQ0Q7WUFBUSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBckJRLGVBQWU7UUFKM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLHVDQUF1QztTQUN2RCxDQUFDO3lDQUdnQyw4Q0FBa0I7T0FGdkMsZUFBZSxDQXNCM0I7SUFBRCxzQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IGxvZ2luLCBMb2dpblJlc3VsdCB9IGZyb20gJ3VpL2RpYWxvZ3MnO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkcmF3ZXItY29udGVudCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2hhcmVkL2RyYXdlci9kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhd2VyQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UpIHsgfVxyXG5cclxuICAgIGRpc3BsYXlMb2dpbkRpYWxvZygpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTG9naW5cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1R5cGUgWW91ciBMb2dpbiBDcmVkZW50aWFscycsXHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiBnZXRTdHJpbmcoXCJ1c2VyTmFtZVwiLCBcIlwiKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGdldFN0cmluZyhcInBhc3N3b3JkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiTG9naW5cIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsb2dpbihvcHRpb25zKVxyXG4gICAgICAgICAgICAudGhlbigobG9naW5SZXN1bHQ6IExvZ2luUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyTmFtZVwiLCBsb2dpblJlc3VsdC51c2VyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTdHJpbmcoXCJwYXNzd29yZFwiLCBsb2dpblJlc3VsdC5wYXNzd29yZCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHsgY29uc29sZS5sb2coJ0xvZ2luIGNhbmNlbGxlZCcpOyBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==