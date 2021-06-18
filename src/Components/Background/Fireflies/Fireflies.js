import React, { useEffect, useRef } from "react";
import "./Fireflies.scss";

/**
 * @function Fireflies
 * @description A react component that renders animated fireflies to the
 * screen.
 * @author Alexander Burdiss
 * @see https://codepen.io/Mertl/pen/GexapP
 * @since 6/8/21
 * @version 1.0.0
 * @component
 * @example
 * ```jsx
 * <Fireflies />
 * ```
 */
export default function Fireflies() {
  const canvasRef = useRef(null);

  useEffect(() => {
    var canvas = canvasRef.current;
    let c = canvas.getContext("2d"),
      w = (canvas.width = window.innerWidth - 50),
      h = (canvas.height = window.innerHeight - 100);
    c.fillStyle = "rgba(30,30,30,1)";
    c.fillRect(0, 0, w, h);
    //initiation

    class firefly {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.s = Math.random() * 2;
        this.ang = Math.random() * 2 * Math.PI;
        this.v = (this.s * this.s) / 4;
      }
      move() {
        this.x += this.v * Math.cos(this.ang);
        this.y += this.v * Math.sin(this.ang);
        this.ang += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180;
      }
      show() {
        c.beginPath();
        c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
        c.fillStyle = "#fddba3";
        c.fill();
      }
    }

    let f = [];

    function draw() {
      if (f.length < 100) {
        for (let j = 0; j < 10; j++) {
          f.push(new firefly());
        }
      }
      //animation
      for (let i = 0; i < f.length; i++) {
        f[i].move();
        f[i].show();
        if (f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h) {
          f.splice(i, 1);
        }
      }
    }

    let mouse = {};
    let last_mouse = {};

    canvas.addEventListener(
      "mousemove",
      function (e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
      },
      false
    );

    window.requestAnimFrame = function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback);
        }
      );
    };

    function loop() {
      window.requestAnimFrame(loop);
      c.clearRect(0, 0, w, h);
      draw();
    }

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth - 50;
      canvas.height = window.innerHeight - 100;
      loop();
    });

    loop();
    setInterval(loop, 1000 / 60);
  }, []);

  return (
    <div className="Fireflies-Container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
