
function main() {
    const canvas = document.querySelector(".myCanvas");
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    const ctx = canvas.getContext("2d");
   // diya = new Diya(420,100,55,50,width,height);
    for (let i = 100; i <= width; i += 180) {
        objs[i] = new Diya(i, 60,  45,Math.floor(Math.random() * 50) + 40,width,height);
      }
    animate(ctx, width, height);
  }
  
  
  for (let i = 100; i <= window.innerWidth; i += 180) {
    var objs = new Array();
  }
  
  
  function animate(ctx, width, height) {
    for (let i = 100; i <= width; i += 180) {
        objs[i].update();
        objs[i].show(ctx)
    }

    requestAnimationFrame(function () {
        ctx.clearRect(0, 0, width, height);
        animate(ctx, width, height);
      });

  }
  
  window.onload = main;