var list_of_students=[];
function submit(){
    var name_1=document.getElementById("stu.1").value;
    var name_2=document.getElementById("stu.2").value;
    var name_3=document.getElementById("stu.3").value;
    var name_4=document.getElementById("stu.4").value;
    list_of_students.push(name_1);
    list_of_students.push(name_2);
    list_of_students.push(name_3);
    list_of_students.push(name_4);
    console.log(list_of_students);
    document.getElementById("list_of_students").innerHTML=list_of_students;
    document.getElementById("submit").style.display="none";
    document.getElementById("sorting").style.display="inline-block";
}
function sorting(){
    list_of_students.sort();
    console.log(list_of_students);
    document.getElementById("list_of_students").innerHTML=list_of_students;


}