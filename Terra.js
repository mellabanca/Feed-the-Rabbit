class Terra{
 constructor(x,y,lar,alt){
var config = {
    isStatic:true
}
this.terraexiste = Bodies.rectangle(x,y,lar,alt,config);
this.lar = lar;
this.nanismo = alt;
World.add(world,this.terraexiste);

}
artista(){
var pos = this.terraexiste.position;
push()
rectMode(CENTER);
noStroke();
fill("#804000");
rect(pos.x,pos.y,this.lar,this.nanismo);
pop()
}   
}