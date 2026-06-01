'use strict';

class PaintObj {
    posX;
    posY;
    color;
    div;

    constructor(posX, posY,color) {
        if (new.target === PaintObj) {
            throw new Error("PaintObj is abstract and cannot be instantiated directly");
        }
        this.posX = posX;
        this.posY = posY;
        this.color = color;
        this.div = undefined;
    }

    draw(parent){
        console.log("In draw of PaintObj");
        //let div = document.createElement("div");
        this.div = document.createElement("div");
        this.div.style.position = "absolute";
        this.div.style.top = this.posY+"px";
        this.div.style.left = this.posX+"px";
        this.div.style.backgroundColor = this.color;
        parent.appendChild(this.div);
        this.setClickHandler();
    }

    deleteElement(div){
        div.remove();
    }

    setClickHandler() {
        console.log(this);
        let that = this;
        /*this.div.onclick = function() {
            console.log(this);
            console.log(that);
            that.deleteElement(that.div);
        }*/
        this.div.onclick = (e)=>{ //arrow Fct
            console.log(this);
            this.deleteElement(this.div);
            console.log(e);
            e.stopPropagation();
        }
    }

    getWidth() {
      throw "Method is abstract - please override in subclass";
    }

    getHeight() {
        throw "Method is abstract - please override in subclass";
    }
}

//=============RECTANGLE====================
class Rectangle extends PaintObj {
    width;
    height;

    constructor(posX, posY,color, width, height) {
        super(posX, posY,color);
        this.width = width;
        this.height = height;
    }

    draw(parent){
        super.draw(parent);
        this.div.style.width = this.width+"px";
        this.div.style.height = this.height+"px";
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}

//=============SQUARE====================
class Square extends PaintObj {
    size

    constructor(posX, posY,color, size) {
        super(posX, posY,color);
        this.size = size
    }

    draw(parent){
        console.log("In draw of square");
        super.draw(parent);
        this.div.style.width = this.size+"px";
        this.div.style.height = this.size+"px";
    }

    getWidth() {
        return this.size;
    }

    getHeight() {
        return this.size;
    }

}

class Picture extends Rectangle{
    constructor(posX, posY, color) {
        super(posX, posY,color,0,0);
        this.children = [];
    }

    addPaintObj(po){
        let w = po.getWidth();
        let h = po.getHeight();

        if(this.width < po.posX + w){
            this.width = po.posX + w;
        }

        if(this.height < po.posY + h){
            this.height = po.posY + h;
        }

        this.children.push(po);
    }

    draw(parent){
        super.draw(parent);
        for(let child of this.children){
            child.draw(this.div)
        }
    }
}