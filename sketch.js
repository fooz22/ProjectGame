

let mario;
let uImg;
let tImg;
let bImg;
let balloons = [];
let soundClassifier;// ينط بصوتي 
let scor = 0 ;
var sfx = {
    push: new Howl({
       src: [
          'miro.mp3',
       ]
    }),
      JumpM: new Howl({
          src: ['mirioJump.mp3']
      }) , 
      Dead: new Howl({
        src: ['miroD.mp3']
    })                              }

function preload() {
    const options = {
        probabilityThreshold: 0.95
    };
    soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
    uImg = loadImage('mario.png');
    tImg = loadImage('ballon.png');
    bImg = loadImage('bk.png');
}

function mousePressed() {
    balloons.push(new Baloon());
}

function setup() {
    createCanvas(1550, 655);

    mario = new Mario();
    soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results[0].label, results[0].confidence);
    if (results[0].label == 'up') {// اقوله اب وينط 
        mario.jump();
    }
}

function keyPressed() {
    if (key == ' ') {
        mario.jump();
        sfx.JumpM.play();
        scor++
    }

}

function draw() {
    if (random(1) < 0.005) {//كم عدد التنين اللي يطلعون 
        balloons.push(new Baloon());
    }

    background(bImg );
    for (let t of balloons) {
        t.move();
        t.show();
        if (mario.hits(t)) {
           alert("Game over. Score:"+scor , sfx.Dead.play() ) ;  
           sfx.Dead.play()          
           noLoop();
        }
    }

    mario.show();
    mario.move();


        
}