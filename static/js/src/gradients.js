function createColorGradient(context, background, dimensions) {
  const backgroundColors = {
    grad: {
      start: "#2c001e",
      middle: "#772953",
      end: "#b9463c",
    },
    dark: {
      start: "#111111",
      middle: "#333333",
      end: "#4e4e4e",
    },
    k8s: {
      start: "#326de6",
      middle: "#173d8b",
      end: "#173d8b",
    },
    aqua: {
      start: "#2b585d",
      middle: "#47919a",
      end: "#47919a",
    },
    snapcraft: {
      start: "#83bfa1",
      middle: "#83bfa1",
      end: "#2d6162",
    },
  };

  const gradient = context.createLinearGradient(
    0,
    0,
    dimensions.width,
    dimensions.height
  );

  const backgroundColor = backgroundColors[background] || backgroundColors.grad;

  gradient.addColorStop(0, backgroundColor.start);
  gradient.addColorStop(0.42, backgroundColor.middle);
  gradient.addColorStop(0.94, backgroundColor.end);

  context.globalAlpha = 1;
  context.fillStyle = gradient;
  context.fillRect(0, 0, dimensions.width, dimensions.height);
}

function createWhiteGradient(context, dimensions) {
  context.fillStyle = "rgba(255, 255, 255, 0.1)";
  context.rotate((10 * Math.PI) / 180);
  context.fillRect(
    0,
    -dimensions.height,
    dimensions.width * 2,
    dimensions.height
  );
  context.rotate((-10 * Math.PI) / 180);
  context.fillRect(0, 0, dimensions.width, dimensions.height);
}

function createLightGreyGradient(context, dimensions) {
  context.fillStyle = "rgba(0, 0, 0, 0.1)";

  let rotateAngle = 25;
  let rectHeight = dimensions.height / 1.2;

  if (dimensions.width > dimensions.height) {
    rotateAngle = 10;
  }

  if (dimensions.height > dimensions.width) {
    rectHeight = dimensions.height / 1.4;
  }

  context.rotate((-rotateAngle * Math.PI) / 180);
  context.fillRect(
    -dimensions.width,
    rectHeight,
    dimensions.width * 2,
    dimensions.height
  );
  context.rotate((rotateAngle * Math.PI) / 180);
  context.fillRect(0, 0, dimensions.width, dimensions.height);
}

function createMidGreyGradient(context, dimensions) {
  context.fillStyle = "rgba(0, 0, 0, 0.1)";

  let rotateAngle = 40;
  let rectX = -dimensions.width;
  let rectY = dimensions.height;
  let rectWidth = dimensions.width * 2;
  let rectHeight = dimensions.height;

  if (dimensions.width === dimensions.height) {
    rotateAngle = 55;
    rectY = -dimensions.height;
    rectWidth = dimensions.width * 1.6;
    rectHeight = dimensions.height * 1.6;
  }

  if (dimensions.height > dimensions.width) {
    rotateAngle = 60;
    rectX = -dimensions.width * 1.5;
    rectY = -dimensions.height * 1.05;
    rectHeight = dimensions.height * 1.6;
  }

  context.rotate((-rotateAngle * Math.PI) / 180);
  context.fillRect(rectX, rectY, rectWidth, rectHeight);
  context.rotate((rotateAngle * Math.PI) / 180);
  context.fillRect(0, 0, dimensions.width, dimensions.height);
}

export {
  createColorGradient,
  createWhiteGradient,
  createLightGreyGradient,
  createMidGreyGradient,
};
