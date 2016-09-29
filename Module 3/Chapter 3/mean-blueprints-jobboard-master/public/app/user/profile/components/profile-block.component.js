System.register(['angular2/core', '../profile.service', '../entry.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, profile_service_1, entry_model_1;
    var ProfileBlockComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (entry_model_1_1) {
                entry_model_1 = entry_model_1_1;
            }],
        execute: function() {
            ProfileBlockComponent = (function () {
                function ProfileBlockComponent(profileService) {
                    this._profileService = profileService;
                }
                ProfileBlockComponent.prototype.ngOnInit = function () {
                    console.log(this.block);
                };
                ProfileBlockComponent.prototype.addEntry = function (event) {
                    event.preventDefault();
                    this.block.data.push(new entry_model_1.Entry());
                };
                ProfileBlockComponent.prototype.onEnter = function (event) {
                    event.preventDefault();
                    this._profileService.updateProfileBlock(this.block);
                };
                ProfileBlockComponent = __decorate([
                    core_1.Component({
                        selector: 'profile-block',
                        inputs: ['block'],
                        template: "\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">{{block.title}}</h3>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"profile-block-entries\">\n            <div *ngFor=\"#entry of block.data\">\n              <div class=\"form-group\">\n                <label>Title</label>\n                <input class=\"form-control\" type=\"text\"\n                  (keydown.enter)=\"onEnter($event)\"\n                  [(ngModel)]=\"entry.title\">\n              </div>\n              <div class=\"form-group\">\n                <label>Sub title</label>\n                <input class=\"form-control\" type=\"text\"\n                  (keydown.enter)=\"onEnter($event)\"\n                  [(ngModel)]=\"entry.subTitle\">\n              </div>\n              <div class=\"form-group\">\n                <label>Description</label>\n                <textarea class=\"form-control\"\n                  (keydown.enter)=\"onEnter($event)\"\n                  [(ngModel)]=\"entry.description\"></textarea>\n              </div>\n              <hr>\n            </div>\n          </div>\n          <button class=\"btn btn-default btn-xs btn-block\" (click)=\"addEntry($event)\">\n            <i class=\"glyphicon glyphicon-plus\"></i> Add new entry\n          </button>\n        </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService])
                ], ProfileBlockComponent);
                return ProfileBlockComponent;
            }());
            exports_1("ProfileBlockComponent", ProfileBlockComponent);
        }
    }
});
//# sourceMappingURL=profile-block.component.js.map