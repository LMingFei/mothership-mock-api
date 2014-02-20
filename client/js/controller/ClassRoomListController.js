/**
 * Created by mingfei on 14-2-12.
 */
function ClassRoomListController($scope,$navigate,$http){
    $scope.me = User.get_me();

    $scope.my_rooms = Room.get_my_room($scope.me.id)

    $scope.goto_detail_room=function(room_id){
        navigate_to_classroom_detail(room_id,$navigate);
    }
}