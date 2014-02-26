/**
 * Created by mingfei on 14-2-12.
 */
function ClassRoomDetail($scope,$http){

    init_data();

    judge_admin_flag()

    $scope.add_Apps=function(){
        var apps=[];
        $('#all_apps> div > input:checkbox').each(function(){
            if(this.checked){
                apps.push(this.name);
            }
        })
        Room.add_Apps($scope.room.id,apps,$http);
        $scope.hide_add_div()
        $scope.change();
    }

    $scope.add_Members=function(){
        var members=[];
        $('#all_users> div > input:checkbox').each(function(){
            if(this.checked){
            members.push(this.name);
            }
        })
        Room.add_Members($scope.room.id,members,$http);
        $scope.hide_add_div()
        $scope.change();
    }

    $scope.remove_App = function(app_id){
        Room.remove_App($scope.room.id,app_id,$http);
        $scope.detail_div_flag = false;
        $scope.change();
    }

    $scope.remove_Member = function(user_id){
        Room.remove_Member($scope.room.id,user_id,$http)
        $scope.detail_div_flag = false;
        $scope.change();
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

    $scope.change = function(){
        $scope.room = $scope.selected_room == undefined?new Room(null,null,null,null): Room.get_One($scope.selected_room.id)

        $scope.apps = $scope.room.apps;

        $scope.members=$scope.room.members;

        judge_admin_flag();
    }

    function judge_admin_flag(){
        console.log(13);

        $scope.admin_flag=false;

        _.find($scope.room.admin_ids,function(admin){
            if(admin.id==$scope.me.id){
                $scope.admin_flag=true
            }
        })
    }

    function init_data(){

        $scope.me = User.get_me();

        $scope.my_rooms = Room.get_my_room($scope.me.id)

        $scope.room = new Room(null,null,null,null);

        $scope.apps = $scope.room.apps;

        $scope.members=$scope.room.members;
    }



}