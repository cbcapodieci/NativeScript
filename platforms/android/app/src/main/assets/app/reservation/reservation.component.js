"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var forms_1 = require("@angular/forms");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var reservationmodal_component_1 = require("../reservationmodal/reservationmodal.component");
var ReservationComponent = /** @class */ (function (_super) {
    __extends(ReservationComponent, _super);
    function ReservationComponent(changeDetectorRef, modalService, vcRef, formBuilder) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.modalService = modalService;
        _this.vcRef = vcRef;
        _this.formBuilder = formBuilder;
        _this.reservation = _this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', forms_1.Validators.required]
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
            else if (args === "date-time") {
                _this.reservation.patchValue({ dateTime: result });
            }
        });
    };
    ReservationComponent.prototype.onSubmit = function () {
        console.log(JSON.stringify(this.reservation.value));
    };
    ReservationComponent = __decorate([
        core_1.Component({
            selector: 'app-reservation',
            moduleId: module.id,
            templateUrl: './reservation.component.html'
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            forms_1.FormBuilder])
    ], ReservationComponent);
    return ReservationComponent;
}(drawer_page_1.DrawerPage));
exports.ReservationComponent = ReservationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzZXJ2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVGO0FBQ3ZGLDREQUEwRDtBQUcxRCx3Q0FBbUU7QUFFbkUsa0VBQTJGO0FBQzNGLDZGQUEyRjtBQU8zRjtJQUEwQyx3Q0FBVTtJQUloRCw4QkFBb0IsaUJBQW9DLEVBQzVDLFlBQWdDLEVBQ2hDLEtBQXVCLEVBQ3ZCLFdBQXdCO1FBSHBDLFlBSVEsa0JBQU0saUJBQWlCLENBQUMsU0FPL0I7UUFYbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM1QyxrQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsV0FBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFHNUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN0QyxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQzs7SUFDWCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixJQUFJLGFBQWEsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0wsQ0FBQztJQUVELDRDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2QsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsK0NBQWdCLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsOENBQWUsR0FBZixVQUFnQixJQUFJO1FBQXBCLGlCQWtCQztRQWhCRyxJQUFJLE9BQU8sR0FBdUI7WUFDOUIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDNUIsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsS0FBSztTQUNwQixDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsc0RBQXlCLEVBQUUsT0FBTyxDQUFDO2FBQzFELElBQUksQ0FBQyxVQUFDLE1BQVc7WUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztZQUNsRCxDQUFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1lBQ3JELENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBakVRLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDO3lDQUt5Qyx3QkFBaUI7WUFDOUIsaUNBQWtCO1lBQ3pCLHVCQUFnQjtZQUNWLG1CQUFXO09BUDNCLG9CQUFvQixDQWtFaEM7SUFBRCwyQkFBQztDQUFBLEFBbEVELENBQTBDLHdCQUFVLEdBa0VuRDtBQWxFWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gJy4uL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLnBhZ2UnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAndWkvc3dpdGNoJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vcmVzZXJ2YXRpb25tb2RhbC9yZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1yZXNlcnZhdGlvbicsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Jlc2VydmF0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzZXJ2YXRpb25Db21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICByZXNlcnZhdGlvbjogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gICAgICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICAgICBndWVzdHM6IDMsXHJcbiAgICAgICAgICAgICAgICBzbW9raW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRhdGVUaW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblNtb2tpbmdDaGVja2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgc21va2luZ1N3aXRjaCA9IDxTd2l0Y2g+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgaWYgKHNtb2tpbmdTd2l0Y2guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBzbW9raW5nOiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgc21va2luZzogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uR3Vlc3RDaGFuZ2UoYXJncykge1xyXG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBndWVzdHM6IHRleHRGaWVsZC50ZXh0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXRlVGltZUNoYW5nZShhcmdzKSB7XHJcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IGRhdGVUaW1lOiB0ZXh0RmllbGQudGV4dH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1vZGFsVmlldyhhcmdzKSB7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IGFyZ3MsXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgPT09IFwiZ3Vlc3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7Z3Vlc3RzOiByZXN1bHR9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFyZ3MgPT09IFwiZGF0ZS10aW1lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBkYXRlVGltZTogcmVzdWx0fSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJlc2VydmF0aW9uLnZhbHVlKSk7XHJcbiAgICB9XHJcbn0iXX0=