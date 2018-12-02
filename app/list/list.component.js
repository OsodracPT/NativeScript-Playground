"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var grocery_service_1 = require("../shared/grocery/grocery.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(groceryService) {
        this.groceryService = groceryService;
        this.groceryList = [];
        this.grocery = "";
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groceryService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
        });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    __decorate([
        core_1.ViewChild("groceryTextField"),
        __metadata("design:type", core_1.ElementRef)
    ], ListComponent.prototype, "groceryTextField", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: "gr-list",
            templateUrl: "list/list.component.html",
            styleUrls: ["list/list.component.css"],
            providers: [grocery_service_1.GroceryService]
        }),
        __metadata("design:paramtypes", [grocery_service_1.GroceryService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxxRUFBbUU7QUFTbkU7SUFLRSx1QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSmxELGdCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUNqQyxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBR3dDLENBQUM7SUFFdEQsZ0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUU7YUFDekIsU0FBUyxDQUFDLFVBQUEsZUFBZTtZQUN4QixlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsYUFBYTtnQkFDcEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQUEsaUJBd0JDO1FBdkJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsdUJBQXVCO1FBQ3ZCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDL0QsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNsQyxTQUFTLENBQ1IsVUFBQSxhQUFhO1lBQ1gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUNEO1lBQ0UsS0FBSyxDQUFDO2dCQUNKLE9BQU8sRUFBRSxzREFBc0Q7Z0JBQy9ELFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FDRixDQUFBO0lBQ0wsQ0FBQztJQXJDOEI7UUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQztrQ0FBbUIsaUJBQVU7MkRBQUM7SUFIakQsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzVCLENBQUM7eUNBTW9DLGdDQUFjO09BTHZDLGFBQWEsQ0F5Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnkubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JvY2VyeVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImdyLWxpc3RcIixcclxuICB0ZW1wbGF0ZVVybDogXCJsaXN0L2xpc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcImxpc3QvbGlzdC5jb21wb25lbnQuY3NzXCJdLFxyXG4gIHByb3ZpZGVyczogW0dyb2NlcnlTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZ3JvY2VyeUxpc3Q6IEFycmF5PEdyb2Nlcnk+ID0gW107XHJcbiAgZ3JvY2VyeSA9IFwiXCI7XHJcbiAgQFZpZXdDaGlsZChcImdyb2NlcnlUZXh0RmllbGRcIikgZ3JvY2VyeVRleHRGaWVsZDogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBncm9jZXJ5U2VydmljZTogR3JvY2VyeVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5ncm9jZXJ5U2VydmljZS5sb2FkKClcclxuICAgIC5zdWJzY3JpYmUobG9hZGVkR3JvY2VyaWVzID0+IHtcclxuICAgICAgbG9hZGVkR3JvY2VyaWVzLmZvckVhY2goKGdyb2NlcnlPYmplY3QpID0+IHtcclxuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGQoKSB7XHJcbiAgICBpZiAodGhpcy5ncm9jZXJ5LnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICBhbGVydChcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBEaXNtaXNzIHRoZSBrZXlib2FyZFxyXG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5ncm9jZXJ5VGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gIFxyXG4gICAgdGhpcy5ncm9jZXJ5U2VydmljZS5hZGQodGhpcy5ncm9jZXJ5KVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIGdyb2NlcnlPYmplY3QgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xyXG4gICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgfVxyXG59Il19