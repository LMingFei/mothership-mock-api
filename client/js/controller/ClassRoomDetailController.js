/**
 * Created by mingfei on 14-2-12.
 */
function ClassRoomDetail($scope,$routeParams,$http){
    $scope.member_remove_flag=false;

    var room_id=$routeParams.room_id;

    Room.get_One(room_id,$http,get_room)

    User.get_me($http,get_user);

    $scope.add_Apps=function(apps_ids){
        var apps=[];
        $('#all_apps> div > input:checkbox').each(function(){
            if(this.checked){
                apps.push(this.name);
            }
        })
        Room.add_Apps(room_id,apps,$http);
    }

    $scope.add_Members=function(){
        var members=[];
        $('#all_users> div > input:checkbox').each(function(){
            if(this.checked){
            members.push(this.name);
            }
        })
        console.log(members)
        Room.add_Members(room_id,members,$http);
        $scope.hide_add_div;
    }

    $scope.remove_App = function(app_id){
        Room.remove_App(room_id,app_id,$http);
    }

    $scope.remove_Member = function(user_id){
        Room.remove_Member(room_id,user_id,$http)
    }

    $scope.show_remove_div =function(user){
        set_admin_flag();
        $scope.user_selected=user;
        $scope.member_remove_flag=true;
    }

    $scope.hide_remove_div = function(){
        $scope.user_selected=null;
        $scope.member_remove_flag = false;
    }


    $scope.show_add_div = function(data){
        $scope.member_add_flag=true;
        $scope.all_users=null;
        $scope.all_apps=null;
        data=='add_members'?User.get_All($http,get_users):App.get_All($http,get_apps)
    }

    $scope.hide_add_div = function(){
        $scope.all_users=null;
        $scope.all_aps=null;
        $scope.member_add_flag=false;
    }

    $scope.hide_app_detail = function(){
        $scope.app_selected=null
        $scope.app_detail_flg=false
    }

    $scope.show_detail_app = function(app){
        $scope.app_selected=app;
        $scope.app_detail_flg=true;
    }

    $scope.set_admin = function(user_id){
        Room.set_Admin(room_id,user_id,$http);
    }

    function set_admin_flag(){
        $scope.admin_flag=false;
        _.find($scope.room.admin_ids,function(admin){
            if(admin.id==$scope.me.id){
                $scope.admin_flag=true
            }
        })
    }

}