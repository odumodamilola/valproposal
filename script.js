
function askVal() {
    const yourName = document.getElementById('yourName').value;
    const bfName = document.getElementById('bfName').value;
    if (!yourName || !bfName) {
        alert('Please enter both names!');
        return;
    }
    document.getElementById('proposal-card').innerHTML = `
        <h2 class='text-2xl font-bold text-pink-600'>Hey ${bfName},</h2>
        <p class='text-lg mt-2'>${yourName} is asking...</p>
        <h3 class='text-xl font-bold mt-4'>Will you be my Valentine? ❤️</h3>
        <button id="yesButton" onclick="showFlowers('${yourName}', '${bfName}')" class='bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-700 shadow-lg'>Yes</button>
        <button id="noButton" class='bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-700 ml-2 shadow-lg moving-button' onclick="playfullyDeny()">No</button>
    `;
}

function showFlowers(yourName, bfName) {
    document.getElementById('proposal-card').innerHTML = `
        <h2 class='text-2xl font-bold text-pink-600'>Yay! 💖</h2>
        <p class='text-lg mt-2'>Wishing you both a beautiful Valentine's Day! 🌹</p>
        <div class='mt-4 animate-pulse glow p-6 rounded-lg bg-pink-200 shadow-xl text-3xl'>🌸💐🌺🌷🌹</div>
    `;
    sendEmail(yourName, bfName, "Accepted");
}

function playfullyDeny() {
    document.getElementById('noButton').innerHTML = "Oops, no isn't an option! 😜";
    setTimeout(() => {
        document.getElementById('noButton').style.display = 'none';
    }, 2000);
}

function sendEmail(yourName, bfName, status) {
    const emailData = {
        yourName,
        bfName,
        status,
        message: `${yourName} just proposed to ${bfName} and the response was: ${status}! 💖`
    };

    fetch('https://formspree.io/f/mgvolkge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Email sent:', data);
        alert("A confirmation email has been sent!");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("There was an error sending the email.");
    });
}

