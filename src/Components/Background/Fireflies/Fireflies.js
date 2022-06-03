import React, { useEffect, useRef } from "react";
import "./Fireflies.scss";

/**
 * @function Fireflies
 * @description A react component that renders animated fireflies to the
 * screen.
 * @author Alexander Burdiss
 * @see https://codepen.io/Mertl/pen/GexapP
 * @since 6/8/21
 * @version 1.0.1
 * @component
 * @example
 * <Fireflies />
 */
export default function Fireflies() {
  const canvasRef = useRef(null);

  useEffect(() => {
    var canvas = canvasRef.current;
    let c = canvas.getContext("2d"),
      w = (canvas.width = window.innerWidth),
      h = (canvas.height = document.querySelector(
        ".Fireflies-Container"
      ).clientHeight);
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

    // @ts-ignore
    window.requestAnimFrame = function () {
      return (
        window.requestAnimationFrame ||
        // @ts-ignore
        window.webkitRequestAnimationFrame ||
        // @ts-ignore
        window.mozRequestAnimationFrame ||
        // @ts-ignore
        window.oRequestAnimationFrame ||
        // @ts-ignore
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback);
        }
      );
    };

    function loop() {
      // @ts-ignore
      window.requestAnimFrame(loop);
      c.clearRect(0, 0, w, h);
      draw();
    }

    loop();
    setInterval(loop, 1000 / 60);

    function updateCanvasHeight() {
      canvas.width = window.innerWidth;
      canvas.height = document.querySelector(
        ".Fireflies-Container"
      ).clientHeight;
      loop();
    }

    window.addEventListener("resize", updateCanvasHeight);

    return () => {
      window.removeEventListener("resize", updateCanvasHeight);
    };
  }, []);

  return (
    <div className="Fireflies-Container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
