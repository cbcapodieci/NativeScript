"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var forms_1 = require("@angular/forms");
var application_settings_1 = require("application-settings");
var router_1 = require("nativescript-angular/router");
var camera = require("nativescript-camera");
var UserAuthComponent = /** @class */ (function () {
    function UserAuthComponent(page, routerExtensions, formBuilder) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.formBuilder = formBuilder;
        this.tabSelectedIndex = 0;
        this.loginForm = this.formBuilder.group({
            userName: [application_settings_1.getString('userName', ''), forms_1.Validators.required],
            password: [application_settings_1.getString('password', ''), forms_1.Validators.required]
        });
        this.registerForm = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            userName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            telnum: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required]
        });
    }
    UserAuthComponent.prototype.ngOnInit = function () {
    };
    UserAuthComponent.prototype.takePicture = function () {
        var _this = this;
        var isAvailable = camera.isAvailable();
        if (isAvailable) {
            camera.requestPermissions();
            var options = { width: 100, height: 100, keepAspectRatio: false, saveToGallery: true };
            camera.takePicture(options)
                .then(function (imageAsset) {
                var image = _this.page.getViewById('myPicture');
                image.src = imageAsset;
            })
                .catch(function (err) { return console.log('Error -> ' + err.message); });
        }
    };
    UserAuthComponent.prototype.register = function () {
        this.tabSelectedIndex = 1;
    };
    UserAuthComponent.prototype.onLoginSubmit = function () {
        console.log(JSON.stringify(this.loginForm.value));
        application_settings_1.setString("userName", this.loginForm.get('userName').value);
        application_settings_1.setString("password", this.loginForm.get('password').value);
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    };
    UserAuthComponent.prototype.onRegisterSubmit = function () {
        console.log(JSON.stringify(this.registerForm.value));
        application_settings_1.setString("userName", this.registerForm.get('userName').value);
        application_settings_1.setString("password", this.registerForm.get('password').value);
        this.loginForm.patchValue({
            'userName': this.registerForm.get('userName').value,
            'password': this.registerForm.get('password').value
        });
        this.tabSelectedIndex = 0;
    };
    UserAuthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './userauth.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            forms_1.FormBuilder])
    ], UserAuthComponent);
    return UserAuthComponent;
}());
exports.UserAuthComponent = UserAuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmF1dGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcmF1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQix3Q0FBb0U7QUFDcEUsNkRBQTREO0FBQzVELHNEQUErRDtBQUMvRCw0Q0FBOEM7QUFPOUM7SUFNSSwyQkFBb0IsSUFBVSxFQUNsQixnQkFBa0MsRUFDbEMsV0FBd0I7UUFGaEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnBDLHFCQUFnQixHQUFXLENBQUMsQ0FBQztRQU16QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLGdDQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQzFELFFBQVEsRUFBRSxDQUFDLGdDQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQzdELENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FB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RUM7QUF4RVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tICduYXRpdmVzY3JpcHQtY2FtZXJhJztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd1aS9pbWFnZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlcmF1dGguY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XHJcbiAgICByZWdpc3RlckZvcm06IEZvcm1Hcm91cDtcclxuICAgIHRhYlNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICB1c2VyTmFtZTogW2dldFN0cmluZygndXNlck5hbWUnLCAnJyksIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogW2dldFN0cmluZygncGFzc3dvcmQnLCAnJyksIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgdGVsbnVtOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSAgICAgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRha2VQaWN0dXJlKCkge1xyXG4gICAgICAgIGxldCBpc0F2YWlsYWJsZSA9IGNhbWVyYS5pc0F2YWlsYWJsZSgpO1xyXG4gICAgICAgIGlmIChpc0F2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwga2VlcEFzcGVjdFJhdGlvOiBmYWxzZSwgc2F2ZVRvR2FsbGVyeTogdHJ1ZX07XHJcblxyXG4gICAgICAgICAgICBjYW1lcmEudGFrZVBpY3R1cmUob3B0aW9ucylcclxuICAgICAgICAgICAgICAgIC50aGVuKChpbWFnZUFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlID0gPEltYWdlPnRoaXMucGFnZS5nZXRWaWV3QnlJZDxJbWFnZT4oJ215UGljdHVyZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGltYWdlQXNzZXQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKCdFcnJvciAtPiAnICsgZXJyLm1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2dpblN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmxvZ2luRm9ybS52YWx1ZSkpO1xyXG5cclxuICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyTmFtZVwiLCB0aGlzLmxvZ2luRm9ybS5nZXQoJ3VzZXJOYW1lJykudmFsdWUpO1xyXG4gICAgICAgIHNldFN0cmluZyhcInBhc3N3b3JkXCIsIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblJlZ2lzdGVyU3VibWl0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlKSk7XHJcblxyXG4gICAgICAgIHNldFN0cmluZyhcInVzZXJOYW1lXCIsIHRoaXMucmVnaXN0ZXJGb3JtLmdldCgndXNlck5hbWUnKS52YWx1ZSk7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwicGFzc3dvcmRcIiwgdGhpcy5yZWdpc3RlckZvcm0uZ2V0KCdwYXNzd29yZCcpLnZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0ucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICAgICAgICd1c2VyTmFtZSc6IHRoaXMucmVnaXN0ZXJGb3JtLmdldCgndXNlck5hbWUnKS52YWx1ZSxcclxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogdGhpcy5yZWdpc3RlckZvcm0uZ2V0KCdwYXNzd29yZCcpLnZhbHVlfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxufSJdfQ==