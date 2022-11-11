document.querySelector("#contentLH form#baoHanh").hidden = true;
var selectNode = document.querySelector("#contentLH select")
selectNode.addEventListener("change",function()
{
    var gopY    = document.querySelector("#contentLH form#gopY");
    var baoHanh = document.querySelector("#contentLH form#baoHanh");
    if(this.value == 2)
    {
        gopY.hidden     = true;
        baoHanh.hidden  = false;
    }
    else{
        
        gopY.hidden     = false;
        baoHanh.hidden  = true;
    }
});
