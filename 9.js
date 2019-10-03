let png = new Image();
png.src = "9.png";
let canvas = document.getElementById("buffy");
let ctx = canvas.getContext("2d");
let height = png.height*2;
let width =  png.width*2;
let particles = [];
let lightParticles = [];
canvas.width = width;
canvas.height = height;
ctx.drawImage(png, 0, 0);
let data = ctx.getImageData(0, 0, canvas.width, canvas.height);
ctx.clearRect(0,0,width,height);
            
function starter(){
    for (let i = 0; i < data.width; i++){
        for (let j = 0; j < data.height; j++){
            let p = i * 4 * data.width + j * 4;
            if (data.data[p+3] < 70 && data.data[p+3] > 50){ //[p+3 er alpha]
                
                let particle = {
                    x0: j,
                    y0: i,
                    x1: 150,
                    y1: 150,
                    speed: Math.random()*3
                    }
                TweenMax.to(particle, particle.speed, {
                    x1: particle.x0,
                    y1: particle.y0,
                    delay: i/200,
                    ease: SlowMo.ease
                });
                particles.push(particle);
                }
            }
        }
                
    for (let i = 0; i < data.width; i++){
        for (let j = 0; j < data.height; j++){
            let p = i * 4 * data.width + j * 4;
            if (data.data[p+3] < 90 && data.data[p+3] > 71){
                console.log("light");
                    let particle = {
                        x0: j,
                        y0: i,
                        x1: 150,
                        y1: 150,
                        speed: Math.random()*2
                        }
                    TweenMax.to(particle, particle.speed, {
                        x1: particle.x0,
                        y1: particle.y0,
                        delay: i/100,
                        //ease: SlowMo.ease
                    });
                    lightParticles.push(particle);
                    }
                }
            }
            requestAnimationFrame(grafikken);
        }
        
function grafikken(){
    ctx.clearRect(0,0,width,height);
    for (let i = 0; i < particles.length + lightParticles.length; i++){
        if (i < particles.length){
            ctx.fillStyle="black";
            ctx.fillRect(particles[i].x1*2, particles[i].y1*2, 1.5, 2);}
        if (i >= particles.length) {
            ctx.fillStyle="black";
            ctx.fillRect(lightParticles[i-particles.length].x1*2, lightParticles[i-particles.length].y1*2, 1, 1);
            }
                
        } requestAnimationFrame(grafikken);
    }
        
function reload(){
    location.reload(true);
}
        
