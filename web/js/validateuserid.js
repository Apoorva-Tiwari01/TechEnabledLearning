/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function getXmlHttpRequest()
{
    var xmlHttpReq= null;
    //For non micrsosft browser
    if(window.XMLHttpRequest)
        {
            xmlHttpReq=new XMLHttpRequest();

        }
        //For mircrosoft browser
        else
            {
                xmlHttpReq=new ActiveXObject("Microsoft.XMLHTTP");
            }
          return xmlHttpReq;

}

function validateUId()
{


    var xmlHttpRequest= getXmlHttpRequest();
    if(xmlHttpRequest==null)
        {
            alert("your browser does not support ajax");
        }
    var usrlogin= document.getElementById("usrlogin");
    var url="ValidateUserId?usrlogin="+encodeURIComponent(usrlogin.value);
   // alert();
    xmlHttpRequest.onreadystatechange=procesRequest(xmlHttpRequest);
    xmlHttpRequest.open("POST", url, true);
    xmlHttpRequest.send(null);

}

 function procesRequest(xmlHttpRequest)
 {

return function(){
    if(xmlHttpRequest.readyState==1){


            document.getElementById("msgArea").innerHTML="<img src='images/loading.gif' width='16' height='16' />";
        }
       if(xmlHttpRequest.readyState==4)
           {
               if(xmlHttpRequest.status==200)
                   {
                       var responsTxt=xmlHttpRequest.responseText;
                       if(responsTxt=="0")
                           {
                       document.getElementById("msgArea").innerHTML="<font color='red'>Not Available !</font>";
					   document.getElementById("submit").disabled = true;
                           }
                   else{
                       document.getElementById("msgArea").innerHTML="<font color='green'>Available !</font>";
					   document.getElementById("submit").disabled = false;
                   }

                   }
           }

 };
}