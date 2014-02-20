/**
 * Created by mingfei on 14-2-20.
 */
function get_room($scope,data){
    $scope.room=data;
    $scope.apps=$scope.room.apps;
    $scope.members=$scope.room.members;
}


function get_user($scope,data){
    $scope.me=data;
}

function get_apps($scope,data){
    $scope.btn_put_flag=true
    $scope.all_apps=data;
}

function get_users($scope,data){
    $scope.btn_put_flag=false
    $scope.all_users=data;
}


function get_rooms($scope,data){
    $scope.all_rooms=data;
    $scope.my_rooms=Room.get_my_room($scope.all_rooms,$scope.me.id)
}