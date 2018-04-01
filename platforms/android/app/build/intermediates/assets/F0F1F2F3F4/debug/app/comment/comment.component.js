"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var CommentComponent = /** @class */ (function () {
    function CommentComponent(formBuilder, params) {
        this.formBuilder = formBuilder;
        this.params = params;
        this.comment = this.formBuilder.group({
            rating: [1, forms_1.Validators.required],
            author: ['', forms_1.Validators.required],
            comment: ['', forms_1.Validators.required]
        });
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    CommentComponent.prototype.onAuthorChange = function (args) {
        var textField = args.object;
        this.comment.patchValue({ author: textField.text });
    };
    CommentComponent.prototype.onCommentChange = function (args) {
        var textField = args.object;
        this.comment.patchValue({ comment: textField.text });
    };
    CommentComponent.prototype.onRatingSliderChange = function (args) {
        var slider = args.object;
        this.comment.patchValue({ rating: slider.value });
    };
    CommentComponent.prototype.onSubmit = function () {
        this.params.closeCallback(this.comment.value);
    };
    CommentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './comment.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, modal_dialog_1.ModalDialogParams])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx3Q0FBb0U7QUFHcEUsa0VBQXNFO0FBTXRFO0lBSUksMEJBQW9CLFdBQXdCLEVBQVUsTUFBeUI7UUFBM0QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUMzRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDakMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHlDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsMENBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELCtDQUFvQixHQUFwQixVQUFxQixJQUFJO1FBQ3JCLElBQUksTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFuQ1EsZ0JBQWdCO1FBSjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDO3lDQUttQyxtQkFBVyxFQUFrQixnQ0FBaUI7T0FKdEUsZ0JBQWdCLENBcUM1QjtJQUFELHVCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbW1lbnQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb21tZW50OiBGb3JtR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICByYXRpbmc6IFsxLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgYXV0aG9yOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBjb21tZW50OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgb25BdXRob3JDaGFuZ2UoYXJncykge1xyXG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICB0aGlzLmNvbW1lbnQucGF0Y2hWYWx1ZSh7IGF1dGhvcjogdGV4dEZpZWxkLnRleHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbW1lbnRDaGFuZ2UoYXJncykge1xyXG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICB0aGlzLmNvbW1lbnQucGF0Y2hWYWx1ZSh7IGNvbW1lbnQ6IHRleHRGaWVsZC50ZXh0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SYXRpbmdTbGlkZXJDaGFuZ2UoYXJncykge1xyXG4gICAgICAgIGxldCBzbGlkZXIgPSA8U2xpZGVyPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICB0aGlzLmNvbW1lbnQucGF0Y2hWYWx1ZSh7IHJhdGluZzogc2xpZGVyLnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh0aGlzLmNvbW1lbnQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==