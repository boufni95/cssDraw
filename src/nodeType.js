export default function (name,width,height,color){//node structure object
    this.name=name;
    this.width=width;
    this.height=height;
    this.color=color;
    this.sizex=0;
    this.sizey=0;
    this.offx=0;
    this.offy=0;
    this.zindex=0;
    this.moveHor=(val)=>{this.offx+=val}
    this.moveVer=(val)=>{this.offy+=val}
    this.scaleX=(val)=>{this.sizex+=val}
    this.scaleY=(val)=>{this.sizey+=val}
    this.moveZ=(val)=>{this.zindex+=val}
    this.children=new Array()//this is the recursive part
    this.pushHere=(obj)=>{this.children.push(obj)}
}