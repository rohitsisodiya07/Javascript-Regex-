let user_role = "manager"
let login_time = 10

if((user_role == "admin") || (user_role == "manager")){

    if((login_time>=9) && (login_time<=18)) console.log("You are Successfully Login");

    else console.log("Due to Login Time Access is Denied");        
}
else console.log("Invalid User Role");
