

let mario;
let mImag;
let bImag;
let bkImag;
let balloons = [];
let sound;
let sco = 0;

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
    sound = ml5.soundClassifier('SpeechCommands18w', options);
    mImag = loadImage('mario.png');
    bImag= loadImage('ballon.png');
    bkImag= loadImage('bk.png');
}

function mousePressed() {
    balloons.push(new Baloon());
}

function setup() {
    createCanvas(1230, 555);

    mario = new Mario();
    sound.classify(gotCommand);
}

function gotCommand(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results[0].label, results[0].confidence);
    if (results[0].label == 'up') {
        mario.jump();
    }
}

function keyPressed() {
    if (key == ' ') {
        mario.jump();
        sco++
       sfx.JumpM.play();

    }
}

function draw() {
    if (random(1) < 0.005) {
        balloons.push(new Baloon());
    }

    background(bkImag);
    for (let t of balloons) {
        t.move();
        t.show();
        if (mario.hits(t)) {
            alert("Game over. Score:"+ sco  ) ; 
           sfx.Dead.play() 
            noLoop();
        }
    }

    mario.show();
    mario.move();

}