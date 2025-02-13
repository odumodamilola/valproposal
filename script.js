
function showPrompt() {
    const yourName = document.getElementById('yourName').value;
    const bfName = document.getElementById('bfName').value;

    if (!yourName || !bfName) {
        alert('Please enter both names!');
        return;
    }

    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('prompt-card').classList.remove('hidden');

    document.getElementById('loveMessage').innerHTML = `
        <h2 class='text-2xl font-bold text-pink-600'>Heyyy beautiful!</h2>
        <p class='text-lg mt-2'>${bfName},</p>
        <pre class='mt-4'>Ejemi monri😍😅… did I tell you the first day I set my eyes on you, you looked like someone I know? Someone really close but I couldn’t just lay my thoughts on when, how or where I met you. It’s obvious the heart met before the eye😌. Could this be a sign we are met to be????

        You’ve always been perfect for me, even when you said you were not. I’ve never loved anyone the way I love you and nothing will ever mean more to me than you do. 
        Let’s write a love story that reminds the world that miracles still exist. A story where “ forever “ isn’t just a promise but a choice we make every single day.

        Where every storm we face only strengthens the roots we’ve planted and every sunrise feels brighter because we’re witnessing it together.
        You know why I love holding your hands??
        Your touch is my greatest comfort, a gentle reminder that I am safe and cherished in your arms, and I’m always hoping to feel it more. 

        No words could ever truly capture how much you mean to me. I love you to the moon and back 😘.


</pre>
        <p class='mt-4 font-bold'>Ehn mmm darling … I have a request to make..<br>Do you want to see what it is?</p>
    `;
}

function askVal() {
    const yourName = document.getElementById('yourName').value;
    const bfName = document.getElementById('bfName').value;

    document.getElementById('prompt-card').classList.add('hidden');
    document.getElementById('proposal-card').classList.remove('hidden');

    document.getElementById('proposal-card').innerHTML = `
        <h2 class='text-2xl font-bold text-pink-600'>Hey ${bfName},</h2>
        <p class='text-lg mt-2'>${yourName} is asking...</p>
        <h3 class='text-xl font-bold mt-4'>Will you be my Valentine? ❤️</h3>
        <button id="yesButton" onclick="showFlowers('${yourName}', '${bfName}')" class='bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-700 shadow-lg'>Sure</button>
        <button id="noButton" class='bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-700 ml-2 shadow-lg moving-button' onclick="playfullyDeny()">I don't think so</button>
    `;
}

function playfullyDeny() {
    const messages = [
        "Sorry, that button is just for display 😉",
        "Nice try! But that's not an option 😘",
        "Error 404: 'No' option not found 💝",
        "This button is just testing your clicking skills 😂",
        "Oops! That button seems to be malfunctioning 🤭",
        "Are you sure? Because I'm not letting you click that! 😋",
        "That's a dummy button, sweetie! 🥰",
        "Haha, you're stuck with me! 💖",
        "Sorry, only positive responses allowed! 💕",
        "That button is just for decoration 🌹"
    ];
    
    const noButton = document.getElementById('noButton');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
    
    // Make the button run away
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    
    
    noButton.style.position = 'absolute';
    noButton.style.left = Math.random() * maxWidth + 'px';
    noButton.style.top = Math.random() * maxHeight + 'px';
}

function showFlowers(yourName, bfName) {
    document.getElementById('proposal-card').innerHTML = `
        <h2 class='text-2xl font-bold text-pink-600'>Yay! 💖</h2>
        <p class='text-lg mt-2'>Wishing you both a beautiful Valentine's Day! 🌹</p>
        <div class='mt-4 animate-pulse glow p-6 rounded-lg bg-pink-200 shadow-xl text-3xl'>🌸💐🌺🌷🌹</div>
    `;
    setTimeout(() => {
        document.getElementById('proposal-card').classList.add('fade-out');
        setTimeout(() => {
            document.getElementById('proposal-card').style.display = 'none';
            document.getElementById('video-container').style.display = 'flex';
            const video = videoContainer.querySelector('video');
            video.play();

        }, 2000);
    }, 4000);
}
