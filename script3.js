function getDocument()
{
    let myClass=document.form1.t1.value;
    let mySubject=document.form1.t2.value;
    
    if((myClass=="Class 9")&&(mySubject=="Physics"))
    {
        window.open('phyicse_ch10.html','_self');
    }
    else if((myClass=="Class 9")&&(mySubject=="Chemistry"))
    {
        window.open('chemicse_ch8.html','_self');
    }
    else if((myClass=="Class 9")&&(mySubject=="Biology"))
    {
        window.open('bioicse_ch19.html','_self');
    }
    
}