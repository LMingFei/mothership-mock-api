/**
 * Created by mingfei on 14-2-12.
 */
function ClassRoomListController($scope,$navigate,$http){
    User.get_me($http,get_user);

    Room.get_All($http,get_rooms);

    $scope.goto_detail_room=function(room_id){
        navigate_to_classroom_detail(room_id,$navigate);
    }
}