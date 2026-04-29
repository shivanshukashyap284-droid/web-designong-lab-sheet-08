document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;
    let email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Invalid Email");
        return;
    }

    let table = document.getElementById("tableBody");
    let row = table.insertRow();

    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;
});

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.remove();
}