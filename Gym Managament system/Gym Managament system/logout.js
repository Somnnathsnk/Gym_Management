// Redirect to login page when button is clicked
document.getElementById('loginBtn').addEventListener('click', function() {
    window.location.href = "login.html";
});

// Auto redirect after 6 seconds
setTimeout(() => {
    window.location.href = "login.html";
}, 10000);

/* Simple Confetti Animation */
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiCount = 150;
const confetti = [];

for(let i=0; i<confettiCount; i++){
    confetti.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*6+4,
        d: Math.random()*confettiCount,
        color: `hsl(${Math.random()*360}, 100%, 50%)`,
        tilt: Math.random()*10-10,
        tiltAngleIncrement: Math.random()*0.07+0.05,
        tiltAngle: 0
    });
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    confetti.forEach((c, i) => {
        ctx.beginPath();
        ctx.lineWidth = c.r/2;
        ctx.strokeStyle = c.color;
        ctx.moveTo(c.x+c.tilt+c.r/4, c.y);
        ctx.lineTo(c.x+c.tilt, c.y+c.tilt+c.r/4);
        ctx.stroke();
        c.tiltAngle += c.tiltAngleIncrement;
        c.y += (Math.cos(c.d)+3+c.r/2)/2;
        c.tilt = Math.sin(c.tiltAngle)*12;
        if(c.y>canvas.height) confetti[i] = {x: Math.random()*canvas.width, y:-10, r:c.r, d:c.d, color:c.color, tilt:c.tilt, tiltAngleIncrement:c.tiltAngleIncrement, tiltAngle:c.tiltAngle};
    });
    requestAnimationFrame(draw);
}
draw();
