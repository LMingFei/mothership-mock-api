myModule.config(function($routeProvider) {
    $routeProvider.when("/classroom_list", {
            templateUrl: "pages/classroom_list.html",
            controller: ClassRoomListController
        }).when("/classroom_detail/:room_id", {
            templateUrl: "pages/classroom_detail.html",
            controller: ClassRoomDetail
        }).otherwise({
        redirectTo: "/classroom_list"
    });



    //routing generate

    //manual routing
});

/** Here is example
myModule.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "pages/activity_list_page.html",
        controller: ActivityListController
    }).when("/activity/create", {
            templateUrl: "pages/activity_create_page.html",
            controller: ActivityCreateController
        }).when("/sign_ups/list/:activity_name", {
            templateUrl: "pages/apply_page.html",
            controller: SignUpListController
        }).otherwise({
            redirectTo: "/"
        });
});
**/