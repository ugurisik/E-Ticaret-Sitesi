function hesapla1()
{
    var e = document.getElementById("ayliksecenek").value;
    var a;
    var sonuc=0;
    var checkBox1 = document.getElementById("koruma");
    var checkBox2 = document.getElementById("ssl");
    var checkBox3 = document.getElementById("yedek");
    var checkBox4 = document.getElementById("destek");
     var checkBox5 = document.getElementById("seo");
     if (e==1) {
        a=e*60;
    }
     if (e==2) {
        a=e*50;
    }
    if (e==3) {
      a=e*45;
  }
  if (e==6) {
    a=e*40;
  }
  if (e==9) {
    a=e*30;
  }
if (e==12) {
  a=e*26;
}
if (e==18) {
  a=e*22;
}
if (e==24) {
  a=e*18;
}
if (e==36) {
  a=e*12;
}
if (e==48) {
  a=e*8;
}
if (e==60) {
  a=e*4;
}
if (e==72) {
  a=e*0.9;
}

 
  if (checkBox1.checked == true){
    sonuc=sonuc+20;
  }
  if (checkBox2.checked == true){
    sonuc=sonuc+10;
  } 
  if (checkBox3.checked == true){
    sonuc=sonuc+40;
  } 
  if (checkBox4.checked == true){
    sonuc=sonuc+20;
  } 
  if (checkBox5.checked == true){
    sonuc=sonuc+50;
  } 
  document.getElementById("fiyat").innerHTML = sonuc+a+"TL";
 } 

