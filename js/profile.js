let recruiterName = document.getElementById("recruiter-name").innerText;
let recruiterCompany = document.getElementById("recruiter-company").innerText;
let recruiterType = document.getElementById("recruiter-type").innerText;
let recruiterSize = document.getElementById("recruiter-size").innerText;
let recruiterSalary = document.getElementById("recruiter-salary").innerText;
let recruiterLocation = document.getElementById("recruiter-location").innerText;
let recruiterAbout = document.getElementById("recruiter-about").innerText;

window.localStorage.setItem("recruiterName", recruiterName);
window.localStorage.setItem("recruiterCompany", recruiterCompany);
window.localStorage.setItem("recruiterType", recruiterType);
window.localStorage.setItem("recruiterSize", recruiterSize);
window.localStorage.setItem("recruiterSalary", recruiterSalary);
window.localStorage.setItem("recruiterLocation", recruiterLocation);
window.localStorage.setItem("recruiterAbout", recruiterAbout);

if (document.referrer === "https://jesus-boy01.github.io/KodeCampGetTalentProject/update.html") {
    renderProfileUpdate();
}

// if (document.referrer === "http://127.0.0.1:5500/update.html") {
//     renderProfileUpdate();
// }

function renderProfileUpdate() {
    document.getElementById("recruiter-name").innerText = localStorage.getItem("recruiterNameUpdate");
    document.getElementById("recruiter-company").innerText = localStorage.getItem("recruiterCompanyUpdate");
    document.getElementById("recruiter-type").innerText = localStorage.getItem("recruiterTypeUpdate");
    document.getElementById("recruiter-size").innerText = localStorage.getItem("recruiterSizeUpdate");
    document.getElementById("recruiter-salary").innerText = localStorage.getItem("recruiterSalaryUpdate");
    document.getElementById("recruiter-location").innerText = localStorage.getItem("recruiterLocationUpdate");
    document.getElementById("recruiter-about").innerText = localStorage.getItem("recruiterAboutUpdate");
}