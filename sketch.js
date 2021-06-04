const Engine = Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

function setup(){
createCanvas(600,400)
engine=Engine.create()
world=engine.world
var box_options={
  isStatic:true
}
box=Bodies.rectangle(300,200,50,50,box_options)
World.add(world,box)
}

function draw(){
background("lightblue")
Engine.update(engine)
rectMode(CENTER)
rect(box.position.x,box.position.y,80,80)
}
