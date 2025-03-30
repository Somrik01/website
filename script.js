// Function to generate AI Resume Summary (Mock AI Response)
async function generateAISummary() {
    let experience = document.getElementById("experience").value;
    let skills = document.getElementById("skills").value;
    let objective = document.getElementById("objective").value;

    let aiSummary = `Your resume reflects experience in ${experience} with expertise in ${skills}. Your objective, "${objective}", shows your career aspirations effectively.`;

    document.getElementById("ai-summary").innerText = aiSummary;
}

// Function to calculate ATS Score
function calculateATS() {
    let skills = document.getElementById("skills").value.toLowerCase().split(",");
    let jobKeywords = ["javascript", "python", "react", "html", "css", "c++"]; // Example ATS criteria

    let matchCount = skills.filter(skill => jobKeywords.includes(skill.trim())).length;
    let score = (matchCount / jobKeywords.length) * 100;

    document.getElementById("ats-score").innerText = `Your ATS Score: ${score.toFixed(2)}%`;
}

// Function to generate Resume Preview with Objective, Projects, and Certifications
function generateResumePreview() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let objective = document.getElementById("objective").value;
    let education = document.getElementById("education").value;
    let experience = document.getElementById("experience").value;
    let projects = document.getElementById("projects").value;
    let skills = document.getElementById("skills").value;
    let certifications = document.getElementById("certifications").value;
    let aiSummary = document.getElementById("ai-summary").innerText;

    let resumeHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Objective</h3>
        <p>${objective}</p>

         <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Projects</h3>
        <p>${projects}</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Certifications</h3>
        <p>${certifications}</p>

        <h3>AI Summary</h3>
        <p>${aiSummary}</p>
    `;

    document.getElementById("resume-output").innerHTML = resumeHTML;
}

// Function to Download Resume as PDF
function generatePDF() {
    generateResumePreview();
    let resumeContent = document.getElementById("resume-output").innerHTML;

    let pdf = new jsPDF();
    pdf.fromHTML(resumeContent, 10, 10);
    pdf.save("resume.pdf");
}

// Event Listeners for Live Preview
document.getElementById("resume-form").addEventListener("input", generateResumePreview);
