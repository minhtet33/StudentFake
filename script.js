document.getElementById("generateBtn").addEventListener("click", generateReceipt);

function generateReceipt() {
  const canvas = document.getElementById("receiptCanvas");
  const ctx = canvas.getContext("2d");
  const bg = new Image();
  bg.src = "images/bg.jpg";

  bg.onload = function () {
    // Draw background
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    // Text settings
    ctx.fillStyle = "#000";
    ctx.font = "20px Arial";
    ctx.textAlign = "left";

    // Get input values
    const university = document.getElementById("university").value;
    const student = document.getElementById("studentName").value;
    const enroll = document.getElementById("enroll").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;

    // Draw text on background
    ctx.fillText(university, 40, 60);
    ctx.fillText(`Student Name: ${student}`, 40, 120);
    ctx.fillText(`Enrollment No: ${enroll}`, 40, 160);
    ctx.fillText(`Course: ${course}`, 40, 200);
    ctx.fillText(`Year: ${year}`, 40, 240);

    // Create download link
    const link = document.createElement("a");
    link.download = "fee_receipt.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
}
