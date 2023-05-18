$(document).ready(function () {
  

  $("#submit").click(function () {
     
    function getStudentData() {
      let date = new Date($("#dob").val());
      day = date.getDate();
      month = date.getMonth() + 1;  
      year = date.getFullYear();



      // let dob = [day, month, year].join("/");  

      

      let selectedDate = new Date($("#registrationDate").val());
      day = selectedDate.getDate();
      month = selectedDate.getMonth() + 1;
      year = selectedDate.getFullYear();
      let registrationDate = [day, month, year].join("/");
      let student = {
        rollno: $("#rollno").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        dob: dob,
        gender: $("input[name='gender']:checked").val(),
        email: $("#email").val(),
        contactNo: $("#contactNo").val(),
        branch: $("#branch").find(":selected").text(),    
        registrationDate: registrationDate,
        parentName: $("#parentName").val(),
        parentContactNo: $("#parentContactNo").val(),
      };
      $("#studentForm")[0].reset();
      return student;
    }
     function storeDataToLocalStorage() {
 

      if (!localStorage.getItem("student")) {
        localStorage.setItem("student", JSON.stringify(getStudentData()));
      } else {
        localStorage.removeItem("student");
        localStorage.setItem("student", JSON.stringify(getStudentData()));
      }
    }
     
    function sendData() {
      let xhr = new XMLHttpRequest();
      let data = JSON.stringify(getStudentData());

      xhr.open("POST", "http://localhost:4000/storedata",true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(data);
    }
     storeDataToLocalStorage();
    // sendData();
      window.location.href="display-data.html"
  });
});