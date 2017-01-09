$(function(){
  console.log("jQuery is working!!!!")
  var totalMonthlySalary = 0;
  $('#employeesTable').on('click', '.deleteButton', function () {
    var salaryToRemoveFromTotal = $(this).parent().prev().text();
    //using prev can cause future code to break. Use data instead
    console.log($(this).data());
    updateMonthlySalary("-" + salaryToRemoveFromTotal);
    $(this).parent().parent().remove();
    //pro mode
  });

  $('#newEmployeeForm').on('submit' , function(event){
    event.preventDefault();
    console.log('Form has been submitted!!!!')

    var newEmployeeObject = {}

    var newEmployeeArray = $(this).serializeArray();
    // console.log(newEmployee);
    //this is referencing newEmployeeForm

    //Loop through all input properties in the array to make a single object
    for(var i = 0; i < newEmployeeArray.length; i++){
      // console.log(newEmployeeArray[i]);
      var inputFieldName = newEmployeeArray[i].name;
      var inputFieldValue = newEmployeeArray[i].value;
      //we use dot notation 99% of the time

      // console.log('The name of the value of the interation', i, ' is ', inputFieldName);
      // console.log('The value of the interation', i, ' is ', inputFieldName);
      newEmployeeObject[inputFieldName] = inputFieldValue;
      //example of bracket notation:
    }
    console.log(newEmployeeObject);

    var newRow = '<tr>' +
    '<td>' + newEmployeeObject.firstName + '</td>'+
    '<td>' + newEmployeeObject.lastName + '</td>'+
    '<td>' + newEmployeeObject.number + '</td>'+
    '<td>' + newEmployeeObject.title + '</td>'+
    '<td>' + newEmployeeObject.salary + '</td>'+
    '<td> <button class="deleteButton">Delete Button</button></td>' +
    '</tr>';
    //this was moved from line 42

    $('#employeesTable').append(newRow);

    $('#newEmployeeForm input[type="text"]').val('');
    $('#newEmployeeForm input[type="number"]').val('');

    updateMonthlySalary(newEmployeeObject.salary);


  });
  //move to  a new employee function
  function updateMonthlySalary(newEmployeeSalary){

    //With new employee, divide salary by 12, add current totalMonthlySalary

    totalMonthlySalary += newEmployeeSalary / 12;
    console.log('totalMonthlySalary is ', totalMonthlySalary);

    $('#monthlySalary').text(totalMonthlySalary.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
    //adding currency formatting

  }

});

//simplied verison of document.ready
