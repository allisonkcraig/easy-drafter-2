import React, { useState, useEffect } from 'react';

type CanvasDrafterProps = {
  measurements?: {
    bust: number;
    waist: number;
  };
};

const CanvasDrafter: React.FC<CanvasDrafterProps> = ({
  measurements = { bust: 0, waist: 0 },
}) => {
  //   function determineInitialValues() {}

  function drawDraft() {
    const canvas = document.querySelector(
      '.TopBlockStep2-canvas'
    ) as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw grid background
        ctx.strokeStyle = '#E8E8EE';
        for (let y = 0.5; y < canvas.height; y += 25) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
        for (let x = 0.5; x < canvas.width; x += 25) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
      }
    }
  }

  useEffect(() => {
    drawDraft();
  }, [measurements]);

  return (
    <div>
      <canvas
        className="TopBlockStep2-canvas"
        width="500"
        height="500"
      ></canvas>
    </div>
  );
};

export default CanvasDrafter;
