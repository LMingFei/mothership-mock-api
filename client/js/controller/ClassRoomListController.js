/**
 * Created by mingfei on 14-2-12.
 */
function ClassRoomListController($scope,$navigate,$http){
    User.get_me($http,get_user);
    function get_user(data){
        $scope.me=data;
    }
    Room.get_All($http,get_rooms)
    function get_rooms(data){
        $scope.all_rooms=data;
        $scope.my_rooms=Room.get_my_room($scope.all_rooms,$scope.me.id)
    }
    $scope.goto_detail_room=function(room_id){
        navigate_to_classroom_detail(room_id,$navigate);
    }
}