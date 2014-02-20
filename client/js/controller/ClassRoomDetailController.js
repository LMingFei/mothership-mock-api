/**
 * Created by mingfei on 14-2-12.
 */
function ClassRoomDetail($scope,$routeParams,$http){
    var room_id = $routeParams.room_id;

    update_data();

    judge_admin_flag()

    $scope.add_Apps=function(){
        var apps=[];
        $('#all_apps> div > input:checkbox').each(function(){
            if(this.checked){
                apps.push(this.name);
            }
        })
        Room.add_Apps(room_id,apps,$http);
        $scope.hide_add_div()
        update_data();
    }

    $scope.add_Members=function(){
        var members=[];
        $('#all_users> div > input:checkbox').each(function(){
            if(this.checked){
            members.push(this.name);
            }
        })
        Room.add_Members(room_id,members,$http);
        $scope.hide_add_div()
        update_data();
    }

    $scope.remove_App = function(app_id){
        Room.remove_App(room_id,app_id,$http);
        $scope.detail_div_flag = false;
        update_data();
    }

    $scope.remove_Member = function(user_id){
        Room.remove_Member(room_id,user_id,$http)
        $scope.detail_div_flag = false;
        update_data();
    }

    $scope.set_admin = function(user_id){
        Room.set_Admin(room_id,user_id,$http);
    }



    $scope.show_detail_div =function(data,flag){
        $scope.hide_add_div();
        $scope.user_selected=null;
        $scope.app_selected=null;
        flag=='user'?$scope.user_selected = data: $scope.app_selected = data;
        $scope.btn_remove_flag = flag=='user'? false : true;
        $scope.detail_div_flag = true;

    }

    $scope.hide_remove_div = function(){
        $scope.detail_div_flag = false;
    }

    $scope.show_add_div = function(data){
        $scope.hide_remove_div();
        $scope.member_add_flag=true;
        $scope.all_users=null;
        $scope.all_apps=null;
        data=='add_members'?$scope.all_users = Room.get_users_else($scope.room.members):$scope.all_apps = Room.get_apps_else($scope.room.apps);
        $scope.btn_put_flag = data=='add_members'? false : true;
    }

    $scope.hide_add_div = function(){
        $scope.all_users=null;
        $scope.all_aps=null;
        $scope.member_add_flag=false;
    }


    function judge_admin_flag(){
        $scope.admin_flag=false;
        _.find($scope.room.admin_ids,function(admin){
            if(admin.id==$scope.me.id){
                $scope.admin_flag=true
            }
        })
    }

    function update_data(){
        $scope.room = Room.get_One(room_id)

        $scope.apps = $scope.room.apps;

        $scope.members=$scope.room.members;

        $scope.me = User.get_me();
    }
}