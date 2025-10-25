document.addEventListener("DOMContentLoaded",() => {
	const loginForm = document.getElementById("loginForm");
	if(loginForm){
		loginForm.addEventListener("submit", function (e) {
			e.preventDefault();
			
	const name = document.getElementById("studentName").value;		
	const id = document.getElementById("studentId").value;		
	const teacher = document.getElementById("teacherName").value;		
	const password = document.getElementById("examPassword").value;

if(password === "exam123") {
	sessionStorage.setItem("studentName", name);
	window.location.href = "exam.html";
} else {
	alert("Invalid exam password!");
	}
});
	}
const examForm = document.getElementById("examForm");
if(examForm) {
examForm.addEventListener("submit", function (e) {
e.preventDefault();
let score = 0;
if(document.querySelector('input[name="q1"]:Checked')?.value === "18") score++;	
if(document.querySelector('input[name="q2"]:Checked')?.value === "10") score++;	
 window.location.href = `result.html?score=${score}`;
});
}
});
	