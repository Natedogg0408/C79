var student_names_array = [];
 function submit() {
     var name1 = document.getElementById("student_1").value; 
     var name2 = document.getElementById("student_2").value; 
     var name3 = document.getElementById("student_3").value; 
     var name4 = document.getElementById("student_4").value; 

     student_names_array.push(name1);
     student_names_array.push(name2);
     student_names_array.push(name3);
     student_names_array.push(name4);

     console.log(student_names_array);
     document.getElementById("namedisplay").innerHTML=student_names_array;
     document.getElementById("submitbutton").style.display='none';
     document.getElementById("sortbutton").style.display='inline-block';
 }

 function sort() {
     student_names_array.sort();
     console.log(student_names_array);
     document.getElementById("namedisplay").innerHTML=student_names_array; 
 }