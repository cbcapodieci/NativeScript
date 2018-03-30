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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsdUVBQStEO0FBQy9ELHNDQUFnRDtBQUNoRCw2REFBNEQ7QUFNNUQ7SUFFSSx5QkFBb0IsUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFBSSxDQUFDO0lBRXJELDRDQUFrQixHQUFsQjtRQUNJLElBQUksT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUUsNkJBQTZCO1lBQ3RDLFFBQVEsRUFBRSxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDbkMsUUFBUSxFQUFFLGdDQUFTLENBQUMsVUFBVSxFQUFDLEVBQUUsQ0FBQztZQUNsQyxZQUFZLEVBQUUsT0FBTztZQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzdCLENBQUE7UUFFRCxlQUFLLENBQUMsT0FBTyxDQUFDO2FBQ1QsSUFBSSxDQUFDLFVBQUMsV0FBd0I7WUFDM0IsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLGdDQUFTLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxDQUFDLEVBQ0Q7WUFBUSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBckJRLGVBQWU7UUFKM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLHVDQUF1QztTQUN2RCxDQUFDO3lDQUdnQyw4Q0FBa0I7T0FGdkMsZUFBZSxDQXNCM0I7SUFBRCxzQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IGxvZ2luLCBMb2dpblJlc3VsdCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHJhd2VyLWNvbnRlbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYXdlckNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBkaXNwbGF5TG9naW5EaWFsb2coKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvZ2luXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUeXBlIFlvdXIgTG9naW4gQ3JlZGVudGlhbHMnLFxyXG4gICAgICAgICAgICB1c2VyTmFtZTogZ2V0U3RyaW5nKFwidXNlck5hbWVcIiwgXCJcIiksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBnZXRTdHJpbmcoXCJwYXNzd29yZFwiLFwiXCIpLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiTG9naW5cIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9naW4ob3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4oKGxvZ2luUmVzdWx0OiBMb2dpblJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwidXNlck5hbWVcIiwgbG9naW5SZXN1bHQudXNlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RyaW5nKFwicGFzc3dvcmRcIiwgbG9naW5SZXN1bHQucGFzc3dvcmQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7IGNvbnNvbGUubG9nKCdMb2dpbiBjYW5jZWxsZWQnKTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=