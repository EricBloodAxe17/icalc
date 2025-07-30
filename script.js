const inp= document.getElementById("disp")
function JoinDscp(params) {
    inp.value+=params;

}
function Dclear() {
    inp.value = "";
}
function calculate(params) {
    try{inp.value=eval(inp.value);}
    catch(error){
        inp.value="error";
    }

}
