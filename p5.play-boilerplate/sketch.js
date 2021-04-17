
var gem, ability;
var gemIMG, abilityIMG
var l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16;
var wind, windIMG;
var henchmen1,henchmen2,henchmen3,henchmen4;
var henchmenIMG;

function preload() {
  windIMG = loadAnimation("images/p1.PNG", "images/p2.PNG","images/p3.PNG","images/p4.PNG")
  henchmenIMG = loadAnimation("images/npc1.PNG", "images/npc 2.PNG","images/npc 3.PNG","images/npc4.PNG")
}

//arya better check. I can fly btw, I dont need ground, thats for skyblock nons, I AM LITERALLY JUST BETTER, UR DOGWATER NVR GONNA BE PROMOTED TO CATWATER


function setup() {
  createCanvas(900,500);
  l1 = createSprite(100,250, 5 , 400);
  l2 = createSprite(250, 50, 300, 5);
  l3 = createSprite(400, 250, 5, 400);
  l4 = createSprite(179.9838913797878990, 350, 5, 200);
  l5 = createSprite(320, 350, 5, 200);
  l6 = createSprite(250, 250, 145, 5);
  l7 = createSprite(180, 140, 5, 100);
  l8 = createSprite(320, 140, 5, 100);
  l9 = createSprite(250, 90, 145, 5);
  l10 = createSprite(250, 190, 145, 5);
  l11 = createSprite(500, 250, 5, 400);
  l12 = createSprite(600, 135, 5, 170);
  l13 = createSprite(600, 365, 5, 170);

   wind = createSprite(260, 215);
   wind.addAnimation("running", windIMG);
   wind.scale = 0.2;

  henchmen1 = createSprite(250,20);
  henchmen1.addAnimation("running", henchmenIMG);
  henchmen2 = createSprite(560,175);
  henchmen2.addAnimation("running", henchmenIMG);
  henchmen3 = createSprite(130, 415);
  henchmen3.addAnimation("running", henchmenIMG);
  henchmen4 = createSprite(450, 130);
  henchmen4.addAnimation("running", henchmenIMG);

}



function draw() {
  background(0);
  fill("white");
  text(mouseX+","+mouseY, 50, 50);
  fill("red")
  line(600, 280, 745, 440);
  drawSprites();
}

//arya is still just better 
//#arya for pres