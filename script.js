loggedIn = false;
function alertOnLike(){
    alert("Ninja was liked");
    
    
}

function removeDef(element){
    element.innerText="";
    
}
function toggleLogin(element){
    if (loggedIn === false)
    {
        element.innerText="Log Out";
        loggedIn=true;
    }
    else
    {
        element.innerText="Log in"
        loggedIn=false;
    }

}