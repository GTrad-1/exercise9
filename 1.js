
function validateform(){  
var name=document.myform.name.value; //imput your Pinyin name
var name=document.myform.English.value;//imput your English name
var name=document.myform.Address.value;//imput your address
var password=document.myform.password.value; //imput your password 
if (name==null || name==""){  
  alert("Information can't be blank");  //Pinyin name, English name, address can not be blank
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  //The password must contain at least six characters
  return false;  //A number less than 6 is an error
  }else if(isNaN(password) || isNaN("")){
      alert("Please enter number");//The password must be a number
      return false;//It's not a number that makes a mistake
  }
} 
 