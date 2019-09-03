interface GenerateImageOptions {
  /**
   * image width
   */
  w?: number,
  /**
   * image height
   */
  h?: number,
  /**
   * background color
   */
  bc?: string,
  /**
   * foreground color
   */
  fc?: string,
  /**
   * texture: 'diagonal'
   */
  t?: string,
  /**
   * text content
   */
  c?: string,
}

/**
 * Generate Image
 */
const GenerateImage = (options?: GenerateImageOptions, encode?: boolean): any => {
  const _options = {
    w: 300,
    h: 150,
    bc: '#DDD',
    fc: '#999',
    t: '',
    c: '',
  };

  if (options
      && options.w) {
    if (options.w <= 0) {
      throw(new Error(`options.w is invalid: ${ options.w }`));
    }
    _options.w = options.w;
  }

  if (options
      && options.h) {
    if (options.h <= 0) {
      throw(new Error(`options.h is invalid: ${ options.h }`));
    }
    _options.h = options.h;
  }

  if (options
      && options.bc) {
    _options.bc = options.bc;
  }

  if (options
      && options.fc) {
    _options.fc = options.fc;
  }

  if (options
      && options.t) {
    const textures = [
      'diagonal',
    ];

    if (textures.indexOf(options.t) < 0) {
      throw(new Error(`options.t is invalid: ${ options.t }`));
    }
    _options.t = options.t;
  }

  if (options
      && options.c) {
    _options.c = options.c;
  }

  /**
   * generate svg
   */
  const generate = (): string => {
    const bg = `<rect width="100%" height="100%" fill="${ _options.bc }" />`;

    let line1 = '';
    let line2 = '';
    if (_options.t === 'diagonal') {
        line1 = `<line x1="0" y1="0" x2="${ _options.w }" y2="${ _options.h }" stroke="${ _options.fc }" stroke-width="1" stroke-opacity="0.6" />`;
        line2 = `<line x1="0" y1="${ _options.h }" x2="${ _options.w }" y2="0" stroke="${ _options.fc }" stroke-width="1" stroke-opacity="0.6" />`;
    }

    let text = '';
    if (_options.c) {
      text = `<text x="${ _options.w / 2 }" y="${ _options.h / 2 }" text-anchor="middle" fill="${ _options.fc }">${ _options.c }</text>`;
    }

    const svg = `<svg version="1.1" baseProfile="full" width="${ _options.w }" height="${ _options.h }" viewBox="0 0 ${ _options.w } ${ _options.h }" xmlns="http://www.w3.org/2000/svg">${ bg }${ line1 }${ line2 }${ text }</svg>`;

    console.log(svg);

    return encode === false
        ? svg
        : `data:image/svg+xml,${ encodeURIComponent(svg) }`;
  };

  return generate();
};

GenerateImage.auto = () => {
  //
};

export default GenerateImage;
