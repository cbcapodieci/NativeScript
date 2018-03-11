"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var forms_1 = require("@angular/forms");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var reservationmodal_component_1 = require("../reservationmodal/reservationmodal.component");
var page_1 = require("ui/page");
var animation_1 = require("ui/animation");
var enums = require("ui/enums");
var reservation_service_1 = require("../services/reservation.service");
var ReservationComponent = /** @class */ (function (_super) {
    __extends(ReservationComponent, _super);
    function ReservationComponent(changeDetectorRef, page, reservationService, modalService, vcRef, formBuilder) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.page = page;
        _this.reservationService = reservationService;
        _this.modalService = modalService;
        _this.vcRef = vcRef;
        _this.formBuilder = formBuilder;
        _this.formSubmitted = false;
        _this.reservation = _this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: [new Date(), forms_1.Validators.required]
        });
        return _this;
    }
    ReservationComponent.prototype.ngOnInit = function () {
    };
    ReservationComponent.prototype.onSmokingChecked = function (args) {
        var smokingSwitch = args.object;
        if (smokingSwitch.checked) {
            this.reservation.patchValue({ smoking: true });
        }
        else {
            this.reservation.patchValue({ smoking: false });
        }
    };
    ReservationComponent.prototype.onGuestChange = function (args) {
        var textField = args.object;
        this.reservation.patchValue({ guests: textField.text });
    };
    ReservationComponent.prototype.onDateTimeChange = function (args) {
        var textField = args.object;
        this.reservation.patchValue({ dateTime: textField.text });
    };
    ReservationComponent.prototype.animateDiv = function (contentView, scaleX, scaleY, opacity) {
        var definitions = new Array();
        var a1 = {
            target: contentView,
            scale: { x: scaleX, y: scaleY },
            opacity: opacity,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a1);
        var animationSet = new animation_1.Animation(definitions);
        return animationSet.play();
    };
    ReservationComponent.prototype.createModalView = function (args) {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            context: args,
            fullscreen: false
        };
        this.modalService.showModal(reservationmodal_component_1.ReservationModalComponent, options)
            .then(function (result) {
            if (args === "guest") {
                _this.reservation.patchValue({ guests: result });
            }
            else if (args === "date-time")
                _this.reservation.patchValue({ dateTime: result });
        });
    };
    ReservationComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(JSON.stringify(this.reservation.value));
        this.content = this.page.getViewById("content");
        this.animateDiv(this.content, 0, 0, 0.2).then(function () {
            _this.reservationService.addReservation(_this.reservation.value);
            _this.formSubmitted = true;
            _this.animateDiv(_this.content, 1, 1, 1).then(function () {
            }).catch(function (e) {
                console.log(e.message);
            });
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    ReservationComponent = __decorate([
        core_1.Component({
            selector: 'app-reservation',
            moduleId: module.id,
            templateUrl: './reservation.component.html'
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            page_1.Page,
            reservation_service_1.ReservationService,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            forms_1.FormBuilder])
    ], ReservationComponent);
    return ReservationComponent;
}(drawer_page_1.DrawerPage));
exports.ReservationComponent = ReservationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzZXJ2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVGO0FBQ3ZGLDREQUEwRDtBQUcxRCx3Q0FBb0U7QUFDcEUsa0VBQTJGO0FBQzNGLDZGQUEyRjtBQUUzRixnQ0FBK0I7QUFDL0IsMENBQThEO0FBRTlELGdDQUFrQztBQUNsQyx1RUFBcUU7QUFRckU7SUFBMEMsd0NBQVU7SUFNaEQsOEJBQW9CLGlCQUFvQyxFQUM1QyxJQUFVLEVBQ1Ysa0JBQXNDLEVBQ3RDLFlBQWdDLEVBQ2hDLEtBQXVCLEVBQ3ZCLFdBQXdCO1FBTHBDLFlBTVEsa0JBQU0saUJBQWlCLENBQUMsU0FPL0I7UUFibUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM1QyxVQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1Ysd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxrQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsV0FBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFQcEMsbUJBQWEsR0FBVyxLQUFLLENBQUM7UUFVdEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN0QyxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUM5QyxDQUFDLENBQUM7O0lBQ1gsQ0FBQztJQUVELHVDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsK0NBQWdCLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsSUFBSSxhQUFhLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMs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QUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9ELEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsQ0FBQztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9GUSxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQzt5Q0FPeUMsd0JBQWlCO1lBQ3RDLFdBQUk7WUFDVSx3Q0FBa0I7WUFDeEIsaUNBQWtCO1lBQ3pCLHVCQUFnQjtZQUNWLG1CQUFXO09BWDNCLG9CQUFvQixDQWlHaEM7SUFBRCwyQkFBQztDQUFBLEFBakdELENBQTBDLHdCQUFVLEdBaUduRDtBQWpHWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gJy4uL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLnBhZ2UnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAndWkvc3dpdGNoJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vcmVzZXJ2YXRpb25tb2RhbC9yZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiwgQW5pbWF0aW9uRGVmaW5pdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0ICogYXMgZW51bXMgZnJvbSBcInVpL2VudW1zXCI7XHJcbmltcG9ydCB7IFJlc2VydmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9yZXNlcnZhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1yZXNlcnZhdGlvbicsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Jlc2VydmF0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzZXJ2YXRpb25Db21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICByZXNlcnZhdGlvbjogRm9ybUdyb3VwO1xyXG4gICAgY29udGVudDogVmlldztcclxuICAgIGZvcm1TdWJtaXR0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIHJlc2VydmF0aW9uU2VydmljZTogUmVzZXJ2YXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gICAgICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICAgICBndWVzdHM6IDMsXHJcbiAgICAgICAgICAgICAgICBzbW9raW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRhdGVUaW1lOiBbbmV3IERhdGUoKSwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU21va2luZ0NoZWNrZWQoYXJncykge1xyXG4gICAgICAgIGxldCBzbW9raW5nU3dpdGNoID0gPFN3aXRjaD5hcmdzLm9iamVjdDtcclxuICAgICAgICBpZiAoc21va2luZ1N3aXRjaC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IHNtb2tpbmc6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBzbW9raW5nOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25HdWVzdENoYW5nZShhcmdzKSB7XHJcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IGd1ZXN0czogdGV4dEZpZWxkLnRleHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRhdGVUaW1lQ2hhbmdlKGFyZ3MpIHtcclxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgZGF0ZVRpbWU6IHRleHRGaWVsZC50ZXh0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZURpdihjb250ZW50VmlldzpWaWV3LCBzY2FsZVg6IG51bWJlciwgc2NhbGVZOiBudW1iZXIsIG9wYWNpdHk6IG51bWJlcik6UHJvbWlzZTxhbnk+IHtcclxuXHJcbiAgICAgICAgbGV0IGRlZmluaXRpb25zID0gbmV3IEFycmF5PEFuaW1hdGlvbkRlZmluaXRpb24+KCk7XHJcbiAgICAgICAgbGV0IGExOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IGNvbnRlbnRWaWV3LFxyXG4gICAgICAgICAgICBzY2FsZTogeyB4OiBzY2FsZVgsIHk6IHNjYWxlWSB9LFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBvcGFjaXR5LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGExKTtcclxuXHJcbiAgICAgICAgbGV0IGFuaW1hdGlvblNldCA9IG5ldyBBbmltYXRpb24oZGVmaW5pdGlvbnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gYW5pbWF0aW9uU2V0LnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNb2RhbFZpZXcoYXJncykge1xyXG4gICAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IGFyZ3MsXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgPT09IFwiZ3Vlc3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7Z3Vlc3RzOiByZXN1bHQgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmdzID09PSBcImRhdGUtdGltZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IGRhdGVUaW1lOiByZXN1bHQgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucmVzZXJ2YXRpb24udmFsdWUpKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjb250ZW50XCIpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZURpdih0aGlzLmNvbnRlbnQsIDAsMCwwLjIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uU2VydmljZS5hZGRSZXNlcnZhdGlvbih0aGlzLnJlc2VydmF0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtU3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlRGl2KHRoaXMuY29udGVudCwxLDEsMSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICBcclxufSJdfQ==