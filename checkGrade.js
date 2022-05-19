
        let studentMarks = prompt("Enter Student Marks as Percentage");

        if (studentMarks > 100) {
            alert("Error! Limit of 100 Exceeded...")
        }
        else if (studentMarks >= 70 && studentMarks <= 100) {
            console.log("Grade = A ");
        }
        else if (studentMarks >= 60) {
            console.log("Grade = B ");
        }
        else if (studentMarks >= 50) {
            console.log("Grade = C ");
        }
        else if (studentMarks >= 40) {
            console.log("Grade = D ");
        }
       
        else{
            console.log("Fail");
        }