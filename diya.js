class Diya {
    constructor(x, y, r,fh) {
      this.radius = r;
      this.x = x;
      this.y = y;
      this.fh = fh;
      this.mx = 10;
      this.my = 20;
    }

    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
  
    update() {
       
        //this.mx = this.mx + this.randomIntFromInterval(-0.1, 0.1);
        this.my = this.my + this.randomIntFromInterval(-1, 1);
        this.fh= this.fh + this.randomIntFromInterval(-1,1);
        
        if(this.fh > 58 ||  this.fh < 40)
        this.fh= 50;

        if(this.my > 21 || this.my < 19)
        this.my = 20;
    }
  
      drawBorder(x, y, ctx) {
        ctx.beginPath();
        ctx.rect(x, y, this.radius*2,5);
        ctx.fillStyle = "rgba(252, 172, 0)";
        ctx.fill();
        ctx.closePath();
      }

      
  
    show(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.fillStyle = "rgba(100, 20, 30)";
        ctx.strokeStyle = "black";
        ctx.arc(this.x, this.y+5, this.radius, 0, Math.PI);
        ctx.lineTo(this.x,this.y)
        ctx.stroke()
        ctx.fill();
        ctx.closePath();
        
        
        ctx.beginPath();
        ctx.lineTo(this.x,this.y);
        ctx.lineWidth = 2;
        ctx.quadraticCurveTo(this.x + this.mx, this.y, this.x + this.mx, this.y-this.my)
        ctx.lineTo(this.x,this.y-this.fh)
        ctx.lineTo(this.x-this.mx,this.y-this.my)
        ctx.quadraticCurveTo(this.x-this.mx, this.y, this.x, this.y)
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        this.drawBorder(this.x-this.radius,this.y+10,ctx)
    }
  }