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
var couchbase_service_1 = require("../services/couchbase.service");
var ReservationComponent = /** @class */ (function (_super) {
    __extends(ReservationComponent, _super);
    function ReservationComponent(changeDetectorRef, page, reservationService, modalService, vcRef, couchbaseService, formBuilder) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.page = page;
        _this.reservationService = reservationService;
        _this.modalService = modalService;
        _this.vcRef = vcRef;
        _this.couchbaseService = couchbaseService;
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
            couchbase_service_1.CouchbaseService,
            forms_1.FormBuilder])
    ], ReservationComponent);
    return ReservationComponent;
}(drawer_page_1.DrawerPage));
exports.ReservationComponent = ReservationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzZXJ2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVGO0FBQ3ZGLDREQUEwRDtBQUcxRCx3Q0FBb0U7QUFDcEUsa0VBQTJGO0FBQzNGLDZGQUEyRjtBQUUzRixnQ0FBK0I7QUFDL0IsMENBQThEO0FBRTlELGdDQUFrQztBQUNsQyx1RUFBcUU7QUFHckUsbUVBQWlFO0FBT2pFO0lBQTBDLHdDQUFVO0lBTWhELDhCQUFvQixpQkFBb0MsRUFDNUMsSUFBVSxFQUNWLGtCQUFzQyxFQUN0QyxZQUFnQyxFQUNoQyxLQUF1QixFQUN2QixnQkFBaUMsRUFDakMsV0FBd0I7UUFOcEMsWUFPUSxrQkFBTSxpQkFBaUIsQ0FBQyxTQU8vQjtRQWRtQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzVDLFVBQUksR0FBSixJQUFJLENBQU07UUFDVix3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGtCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxXQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUnBDLG1CQUFhLEdBQVcsS0FBSyxDQUFDO1FBV3RCLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdEMsTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDOUMsQ0FBQyxDQUFDOztJQUNYLENBQUM7SUFFRCx1Q0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELCtDQUFnQixHQUFoQixVQUFpQixJQUFJO1FBQ2pCLElBQUksYUFBYSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsV0FBZ0IsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLE9BQWU7UUFFeEUsSUFBSSxXQUFXLEdBQUcsSUFBSSxLQUFLLEVBQXVCLENBQUM7UUFDbkQsSUFBSSxFQUFFLEdBQXdCO1lBQzFCLE1BQU0sRUFBRSxXQUFXO1lBQ25CLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRTtZQUMvQixPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsR0FBRztZQUNiLEtBQUssRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU07U0FDckMsQ0FBQztRQUNGLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFckIsSUFBSSxZQUFZLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELDhDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUFwQixpQkFlQztRQWRHLElBQUksT0FBTyxHQUF1QjtZQUM5QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztZQUM1QixPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxLQUFLO1NBQ3BCLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxzREFBeUIsRUFBRSxPQUFPLENBQUM7YUFDMUQsSUFBSSxDQUFDLFVBQUMsTUFBVztZQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFiRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQU8sU0FBUyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvRCxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBQztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLENBQUM7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoR1Esb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7eUNBT3lDLHdCQUFpQjtZQUN0QyxXQUFJO1lBQ1Usd0NBQWtCO1lBQ3hCLGlDQUFrQjtZQUN6Qix1QkFBZ0I7WUFDTixvQ0FBZ0I7WUFDcEIsbUJBQVc7T0FaM0Isb0JBQW9CLENBa0doQztJQUFELDJCQUFDO0NBQUEsQUFsR0QsQ0FBMEMsd0JBQVUsR0FrR25EO0FBbEdZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSAnLi4vc2hhcmVkL2RyYXdlci9kcmF3ZXIucGFnZSc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tICd1aS9zd2l0Y2gnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9yZXNlcnZhdGlvbm1vZGFsL3Jlc2VydmF0aW9ubW9kYWwuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IHsgUmVzZXJ2YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Jlc2VydmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQ291Y2hiYXNlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvdWNoYmFzZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtcmVzZXJ2YXRpb24nLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZXNlcnZhdGlvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlc2VydmF0aW9uQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcmVzZXJ2YXRpb246IEZvcm1Hcm91cDtcclxuICAgIGNvbnRlbnQ6IFZpZXc7XHJcbiAgICBmb3JtU3VibWl0dGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZXNlcnZhdGlvblNlcnZpY2U6IFJlc2VydmF0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBjb3VjaGJhc2VTZXJ2aWNlOkNvdWNoYmFzZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICAgICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbiA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgZ3Vlc3RzOiAzLFxyXG4gICAgICAgICAgICAgICAgc21va2luZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkYXRlVGltZTogW25ldyBEYXRlKCksIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblNtb2tpbmdDaGVja2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgc21va2luZ1N3aXRjaCA9IDxTd2l0Y2g+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgaWYgKHNtb2tpbmdTd2l0Y2guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBzbW9raW5nOiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgc21va2luZzogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uR3Vlc3RDaGFuZ2UoYXJncykge1xyXG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBndWVzdHM6IHRleHRGaWVsZC50ZXh0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXRlVGltZUNoYW5nZShhcmdzKSB7XHJcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IGRhdGVUaW1lOiB0ZXh0RmllbGQudGV4dH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGVEaXYoY29udGVudFZpZXc6Vmlldywgc2NhbGVYOiBudW1iZXIsIHNjYWxlWTogbnVtYmVyLCBvcGFjaXR5OiBudW1iZXIpOlByb21pc2U8YW55PiB7XHJcblxyXG4gICAgICAgIGxldCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheTxBbmltYXRpb25EZWZpbml0aW9uPigpO1xyXG4gICAgICAgIGxldCBhMTogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiBjb250ZW50VmlldyxcclxuICAgICAgICAgICAgc2NhbGU6IHsgeDogc2NhbGVYLCB5OiBzY2FsZVkgfSxcclxuICAgICAgICAgICAgb3BhY2l0eTogb3BhY2l0eSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChhMSk7XHJcblxyXG4gICAgICAgIGxldCBhbmltYXRpb25TZXQgPSBuZXcgQW5pbWF0aW9uKGRlZmluaXRpb25zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvblNldC5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTW9kYWxWaWV3KGFyZ3MpIHtcclxuICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgICAgICBjb250ZXh0OiBhcmdzLFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChSZXNlcnZhdGlvbk1vZGFsQ29tcG9uZW50LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzID09PSBcImd1ZXN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBndWVzdHM6IHJlc3VsdCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFyZ3MgPT09IFwiZGF0ZS10aW1lXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgZGF0ZVRpbWU6IHJlc3VsdCB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yZXNlcnZhdGlvbi52YWx1ZSkpO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IDxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNvbnRlbnRcIik7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlRGl2KHRoaXMuY29udGVudCwgMCwwLDAuMikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXJ2YXRpb25TZXJ2aWNlLmFkZFJlc2VydmF0aW9uKHRoaXMucmVzZXJ2YXRpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1TdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVEaXYodGhpcy5jb250ZW50LDEsMSwxKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgIFxyXG59Il19