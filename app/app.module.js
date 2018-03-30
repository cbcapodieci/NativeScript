"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
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
                favorites_component_1.FavoritesComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxzRUFBNEY7QUFDNUYsdUVBQThEO0FBQzlELG9FQUF3RjtBQUV4Riw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLHdEQUFzRDtBQUN0RCwwRUFBd0U7QUFDeEUscUVBQW1FO0FBQ25FLHdEQUFzRDtBQUN0RCxpRUFBK0Q7QUFDL0QsMkRBQXlEO0FBQ3pELHVFQUFxRTtBQUVyRSx3REFBc0Q7QUFDdEQsOEVBQTJFO0FBQzNFLGtFQUFnRTtBQUNoRSw0REFBMEQ7QUFDMUQsZ0VBQThEO0FBRTlELDRDQUEyQztBQUUzQywyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUE2Q3RFO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTNDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFFRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLDZCQUFzQjtnQkFDdEIsd0NBQThCO2dCQUM5QixzQ0FBNEI7Z0JBQzVCLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDdEIsSUFBSSxFQUFFLDhCQUE4QjtpQkFDdkMsQ0FBQzthQUNMO1lBRUQsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLDBDQUFtQjtnQkFDbkIsa0NBQWU7Z0JBQ2YsOEJBQWE7Z0JBQ2Isb0NBQWdCO2dCQUNoQixnQ0FBYztnQkFDZCx3Q0FBa0I7YUFFckI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxpQkFBTyxFQUFDO2dCQUN2QywwQkFBVztnQkFDWCwrQ0FBcUI7Z0JBQ3JCLG9DQUFnQjtnQkFDaEIsOEJBQWE7Z0JBQ2Isa0NBQWU7YUFFbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXNoZGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9kaXNoZGV0YWlsL2Rpc2hkZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IERyYXdlckNvbXBvbmVudCB9IGZyb20gXCIuL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hYm91dC9hYm91dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZhdm9yaXRlc0NvbXBvbmVudCB9IGZyb20gJy4vZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcHJvbW90aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGVhZGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4vc2hhcmVkL2Jhc2V1cmwnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcblxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgICAgJ2ZhJzogJy4vZm9udHMvZm9udC1hd2Vzb21lLm1pbi5jc3MnXG4gICAgICAgIH0pXG4gICAgXSxcblxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIE1lbnVDb21wb25lbnQsXG4gICAgICAgIERpc2hkZXRhaWxDb21wb25lbnQsXG4gICAgICAgIERyYXdlckNvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgQ29udGFjdENvbXBvbmVudCxcbiAgICAgICAgQWJvdXRDb21wb25lbnQsXG4gICAgICAgIEZhdm9yaXRlc0NvbXBvbmVudFxuICAgICAgICBcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogJ0Jhc2VVUkwnLCB1c2VWYWx1ZTogYmFzZVVSTH0sXG4gICAgICAgIERpc2hTZXJ2aWNlLFxuICAgICAgICBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UsXG4gICAgICAgIFByb21vdGlvblNlcnZpY2UsXG4gICAgICAgIExlYWRlclNlcnZpY2UsXG4gICAgICAgIEZhdm9yaXRlU2VydmljZVxuICAgICAgICBcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=