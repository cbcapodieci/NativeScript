"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
var forms_1 = require("nativescript-angular/forms");
var forms_2 = require("@angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu/menu.component");
var dishdetail_component_1 = require("./dishdetail/dishdetail.component");
var drawer_component_1 = require("./shared/drawer/drawer.component");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var about_component_1 = require("./about/about.component");
var favorites_component_1 = require("./favorites/favorites.component");
var reservation_component_1 = require("./reservation/reservation.component");
var dish_service_1 = require("./services/dish.service");
var process_httpmsg_service_1 = require("./services/process-httpmsg.service");
var promotion_service_1 = require("./services/promotion.service");
var leader_service_1 = require("./services/leader.service");
var favorite_service_1 = require("./services/favorite.service");
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
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './fonts/font-awesome.min.css'
                })
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
                reservation_component_1.ReservationComponent
            ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxzRUFBNEY7QUFDNUYsdUVBQThEO0FBQzlELG9FQUF3RjtBQUN4RixvREFBcUU7QUFDckUsd0NBQXFEO0FBRXJELDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msd0RBQXNEO0FBQ3RELDBFQUF3RTtBQUN4RSxxRUFBbUU7QUFDbkUsd0RBQXNEO0FBQ3RELGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsdUVBQXFFO0FBQ3JFLDZFQUEyRTtBQUUzRSx3REFBc0Q7QUFDdEQsOEVBQTJFO0FBQzNFLGtFQUFnRTtBQUNoRSw0REFBMEQ7QUFDMUQsZ0VBQThEO0FBRTlELDRDQUEyQztBQUUzQywyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUFnRHRFO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTlDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFFRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLDZCQUFzQjtnQkFDdEIsd0NBQThCO2dCQUM5QixzQ0FBNEI7Z0JBQzVCLCtCQUF1QjtnQkFDdkIsMkJBQW1CO2dCQUNuQiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQ3RCLElBQUksRUFBRSw4QkFBOEI7aUJBQ3ZDLENBQUM7YUFDTDtZQUVELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYiwwQ0FBbUI7Z0JBQ25CLGtDQUFlO2dCQUNmLDhCQUFhO2dCQUNiLG9DQUFnQjtnQkFDaEIsZ0NBQWM7Z0JBQ2Qsd0NBQWtCO2dCQUNsQiw0Q0FBb0I7YUFFdkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxpQkFBTyxFQUFDO2dCQUN2QywwQkFBVztnQkFDWCwrQ0FBcUI7Z0JBQ3JCLG9DQUFnQjtnQkFDaEIsOEJBQWE7Z0JBQ2Isa0NBQWU7YUFFbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IERpc2hkZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2Rpc2hkZXRhaWwvZGlzaGRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vc2hhcmVkL2RyYXdlci9kcmF3ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gXCIuL2Fib3V0L2Fib3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmF2b3JpdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNlcnZhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XG5pbXBvcnQgeyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Byb21vdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExlYWRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xlYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhdm9yaXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XG5cbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuL3NoYXJlZC9iYXNldXJsJztcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG5cbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICAnZmEnOiAnLi9mb250cy9mb250LWF3ZXNvbWUubWluLmNzcydcbiAgICAgICAgfSlcbiAgICBdLFxuXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTWVudUNvbXBvbmVudCxcbiAgICAgICAgRGlzaGRldGFpbENvbXBvbmVudCxcbiAgICAgICAgRHJhd2VyQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBDb250YWN0Q29tcG9uZW50LFxuICAgICAgICBBYm91dENvbXBvbmVudCxcbiAgICAgICAgRmF2b3JpdGVzQ29tcG9uZW50LFxuICAgICAgICBSZXNlcnZhdGlvbkNvbXBvbmVudFxuICAgICAgICBcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogJ0Jhc2VVUkwnLCB1c2VWYWx1ZTogYmFzZVVSTH0sXG4gICAgICAgIERpc2hTZXJ2aWNlLFxuICAgICAgICBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UsXG4gICAgICAgIFByb21vdGlvblNlcnZpY2UsXG4gICAgICAgIExlYWRlclNlcnZpY2UsXG4gICAgICAgIEZhdm9yaXRlU2VydmljZVxuICAgICAgICBcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=