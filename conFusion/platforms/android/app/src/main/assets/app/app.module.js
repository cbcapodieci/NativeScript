"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
var forms_1 = require("nativescript-angular/forms");
var forms_2 = require("@angular/forms");
var menu_component_1 = require("./menu/menu.component");
var dishdetail_component_1 = require("./dishdetail/dishdetail.component");
var drawer_component_1 = require("./shared/drawer/drawer.component");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var about_component_1 = require("./about/about.component");
var favorites_component_1 = require("./favorites/favorites.component");
var dish_service_1 = require("./services/dish.service");
var process_httpmsg_service_1 = require("./services/process-httpmsg.service");
var promotion_service_1 = require("./services/promotion.service");
var leader_service_1 = require("./services/leader.service");
var favorite_service_1 = require("./services/favorite.service");
var reservation_component_1 = require("./reservation/reservation.component");
var reservationmodal_component_1 = require("./reservationmodal/reservationmodal.component");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var baseurl_1 = require("./shared/baseurl");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                http_1.NativeScriptHttpModule,
                angular_1.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptUIListViewModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './fonts/font-awesome.min.css'
                }),
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                dishdetail_component_1.DishdetailComponent,
                drawer_component_1.DrawerComponent,
                home_component_1.HomeComponent,
                contact_component_1.ContactComponent,
                about_component_1.AboutComponent,
                favorites_component_1.FavoritesComponent,
                reservation_component_1.ReservationComponent,
                reservationmodal_component_1.ReservationModalComponent
            ],
            entryComponents: [reservationmodal_component_1.ReservationModalComponent],
            providers: [
                { provide: 'BaseURL', useValue: baseurl_1.baseURL },
                dish_service_1.DishService,
                process_httpmsg_service_1.ProcessHTTPMsgService,
                promotion_service_1.PromotionService,
                leader_service_1.LeaderService,
                favorite_service_1.FavoriteService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxzRUFBNEY7QUFDNUYsNkNBQWlEO0FBQ2pELGlEQUErQztBQUMvQyxvRUFBd0Y7QUFDeEYsb0RBQXFFO0FBQ3JFLHdDQUFxRDtBQUVyRCx3REFBc0Q7QUFDdEQsMEVBQXdFO0FBQ3hFLHFFQUFtRTtBQUNuRSx3REFBc0Q7QUFDdEQsaUVBQStEO0FBQy9ELDJEQUF5RDtBQUN6RCx1RUFBcUU7QUFFckUsd0RBQXNEO0FBQ3RELDhFQUEyRTtBQUMzRSxrRUFBZ0U7QUFDaEUsNERBQTBEO0FBQzFELGdFQUE4RDtBQUM5RCw2RUFBMkU7QUFDM0UsNEZBQTBGO0FBRTFGLHVFQUE4RDtBQUU5RCw0Q0FBMkM7QUFFM0MsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBK0N0RTtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUE3Q3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQiw2QkFBc0I7Z0JBQ3RCLHdDQUE4QjtnQkFDOUIsc0NBQTRCO2dCQUM1Qiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQ3RCLElBQUksRUFBRSw4QkFBOEI7aUJBQ3ZDLENBQUM7Z0JBQ0YsK0JBQXVCO2dCQUN2QiwyQkFBbUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsMENBQW1CO2dCQUNuQixrQ0FBZTtnQkFDZiw4QkFBYTtnQkFDYixvQ0FBZ0I7Z0JBQ2hCLGdDQUFjO2dCQUNkLHdDQUFrQjtnQkFDbEIsNENBQW9CO2dCQUNwQixzREFBeUI7YUFDNUI7WUFDRCxlQUFlLEVBQUUsQ0FBQyxzREFBeUIsQ0FBQztZQUU1QyxTQUFTLEVBQUU7Z0JBQ1AsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxpQkFBTyxFQUFDO2dCQUN2QywwQkFBVztnQkFDWCwrQ0FBcUI7Z0JBQ3JCLG9DQUFnQjtnQkFDaEIsOEJBQWE7Z0JBQ2Isa0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXNoZGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9kaXNoZGV0YWlsL2Rpc2hkZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IERyYXdlckNvbXBvbmVudCB9IGZyb20gXCIuL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hYm91dC9hYm91dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZhdm9yaXRlc0NvbXBvbmVudCB9IGZyb20gJy4vZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcHJvbW90aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGVhZGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJlc2VydmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL3Jlc2VydmF0aW9ubW9kYWwvcmVzZXJ2YXRpb25tb2RhbC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcblxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4vc2hhcmVkL2Jhc2V1cmwnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgICdmYSc6ICcuL2ZvbnRzL2ZvbnQtYXdlc29tZS5taW4uY3NzJ1xuICAgICAgICB9KSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIE1lbnVDb21wb25lbnQsXG4gICAgICAgIERpc2hkZXRhaWxDb21wb25lbnQsXG4gICAgICAgIERyYXdlckNvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgQ29udGFjdENvbXBvbmVudCxcbiAgICAgICAgQWJvdXRDb21wb25lbnQsXG4gICAgICAgIEZhdm9yaXRlc0NvbXBvbmVudCxcbiAgICAgICAgUmVzZXJ2YXRpb25Db21wb25lbnQsXG4gICAgICAgIFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnRcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1Jlc2VydmF0aW9uTW9kYWxDb21wb25lbnRdLFxuICAgIFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogJ0Jhc2VVUkwnLCB1c2VWYWx1ZTogYmFzZVVSTH0sXG4gICAgICAgIERpc2hTZXJ2aWNlLFxuICAgICAgICBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UsXG4gICAgICAgIFByb21vdGlvblNlcnZpY2UsXG4gICAgICAgIExlYWRlclNlcnZpY2UsXG4gICAgICAgIEZhdm9yaXRlU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==