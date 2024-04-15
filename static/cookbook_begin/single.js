// node_modules/kaboom/dist/kaboom.mjs
var yi = Object.defineProperty;
var i = (n13, e) => yi(n13, "name", { value: e, configurable: true });
var gr = (() => {
  for (var n13 = new Uint8Array(128), e = 0; e < 64; e++)
    n13[e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e * 4 - 205] = e;
  return (o) => {
    for (var c = o.length, g = new Uint8Array((c - (o[c - 1] == "=") - (o[c - 2] == "=")) * 3 / 4 | 0), m = 0, P = 0; m < c; ) {
      var I = n13[o.charCodeAt(m++)], j = n13[o.charCodeAt(m++)], y = n13[o.charCodeAt(m++)], X = n13[o.charCodeAt(m++)];
      g[P++] = I << 2 | j >> 4, g[P++] = j << 4 | y >> 2, g[P++] = y << 6 | X;
    }
    return g;
  };
})();
function Ge(n13) {
  return n13 * Math.PI / 180;
}
i(Ge, "deg2rad");
function ot(n13) {
  return n13 * 180 / Math.PI;
}
i(ot, "rad2deg");
function Le(n13, e, o) {
  return e > o ? Le(n13, o, e) : Math.min(Math.max(n13, e), o);
}
i(Le, "clamp");
function Ve(n13, e, o) {
  if (typeof n13 == "number" && typeof e == "number")
    return n13 + (e - n13) * o;
  if (n13 instanceof v && e instanceof v)
    return n13.lerp(e, o);
  if (n13 instanceof W && e instanceof W)
    return n13.lerp(e, o);
  throw new Error(`Bad value for lerp(): ${n13}, ${e}. Only number, Vec2 and Color is supported.`);
}
i(Ve, "lerp");
function _e(n13, e, o, c, g) {
  return c + (n13 - e) / (o - e) * (g - c);
}
i(_e, "map");
function br(n13, e, o, c, g) {
  return Le(_e(n13, e, o, c, g), c, g);
}
i(br, "mapc");
var v = class n {
  static {
    i(this, "Vec2");
  }
  x = 0;
  y = 0;
  constructor(e = 0, o = e) {
    this.x = e, this.y = o;
  }
  static fromAngle(e) {
    let o = Ge(e);
    return new n(Math.cos(o), Math.sin(o));
  }
  static LEFT = new n(-1, 0);
  static RIGHT = new n(1, 0);
  static UP = new n(0, -1);
  static DOWN = new n(0, 1);
  clone() {
    return new n(this.x, this.y);
  }
  add(...e) {
    let o = T(...e);
    return new n(this.x + o.x, this.y + o.y);
  }
  sub(...e) {
    let o = T(...e);
    return new n(this.x - o.x, this.y - o.y);
  }
  scale(...e) {
    let o = T(...e);
    return new n(this.x * o.x, this.y * o.y);
  }
  dist(...e) {
    let o = T(...e);
    return this.sub(o).len();
  }
  sdist(...e) {
    let o = T(...e);
    return this.sub(o).slen();
  }
  len() {
    return Math.sqrt(this.dot(this));
  }
  slen() {
    return this.dot(this);
  }
  unit() {
    let e = this.len();
    return e === 0 ? new n(0) : this.scale(1 / e);
  }
  normal() {
    return new n(this.y, -this.x);
  }
  reflect(e) {
    return this.sub(e.scale(2 * this.dot(e)));
  }
  project(e) {
    return e.scale(e.dot(this) / e.len());
  }
  reject(e) {
    return this.sub(this.project(e));
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  angle(...e) {
    let o = T(...e);
    return ot(Math.atan2(this.y - o.y, this.x - o.x));
  }
  angleBetween(...e) {
    let o = T(...e);
    return ot(Math.atan2(this.cross(o), this.dot(o)));
  }
  lerp(e, o) {
    return new n(Ve(this.x, e.x, o), Ve(this.y, e.y, o));
  }
  slerp(e, o) {
    let c = this.dot(e), g = this.cross(e), m = Math.atan2(g, c);
    return this.scale(Math.sin((1 - o) * m)).add(e.scale(Math.sin(o * m))).scale(1 / g);
  }
  isZero() {
    return this.x === 0 && this.y === 0;
  }
  toFixed(e) {
    return new n(Number(this.x.toFixed(e)), Number(this.y.toFixed(e)));
  }
  transform(e) {
    return e.multVec2(this);
  }
  eq(e) {
    return this.x === e.x && this.y === e.y;
  }
  bbox() {
    return new de(this, 0, 0);
  }
  toString() {
    return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
  }
};
function T(...n13) {
  if (n13.length === 1) {
    if (n13[0] instanceof v)
      return new v(n13[0].x, n13[0].y);
    if (Array.isArray(n13[0]) && n13[0].length === 2)
      return new v(...n13[0]);
  }
  return new v(...n13);
}
i(T, "vec2");
var W = class n2 {
  static {
    i(this, "Color");
  }
  r = 255;
  g = 255;
  b = 255;
  constructor(e, o, c) {
    this.r = Le(e, 0, 255), this.g = Le(o, 0, 255), this.b = Le(c, 0, 255);
  }
  static fromArray(e) {
    return new n2(e[0], e[1], e[2]);
  }
  static fromHex(e) {
    if (typeof e == "number")
      return new n2(e >> 16 & 255, e >> 8 & 255, e >> 0 & 255);
    if (typeof e == "string") {
      let o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return new n2(parseInt(o[1], 16), parseInt(o[2], 16), parseInt(o[3], 16));
    } else
      throw new Error("Invalid hex color format");
  }
  static fromHSL(e, o, c) {
    if (o == 0)
      return new n2(255 * c, 255 * c, 255 * c);
    let g = i((X, S, q) => (q < 0 && (q += 1), q > 1 && (q -= 1), q < 1 / 6 ? X + (S - X) * 6 * q : q < 1 / 2 ? S : q < 2 / 3 ? X + (S - X) * (2 / 3 - q) * 6 : X), "hue2rgb"), m = c < 0.5 ? c * (1 + o) : c + o - c * o, P = 2 * c - m, I = g(P, m, e + 1 / 3), j = g(P, m, e), y = g(P, m, e - 1 / 3);
    return new n2(Math.round(I * 255), Math.round(j * 255), Math.round(y * 255));
  }
  static RED = new n2(255, 0, 0);
  static GREEN = new n2(0, 255, 0);
  static BLUE = new n2(0, 0, 255);
  static YELLOW = new n2(255, 255, 0);
  static MAGENTA = new n2(255, 0, 255);
  static CYAN = new n2(0, 255, 255);
  static WHITE = new n2(255, 255, 255);
  static BLACK = new n2(0, 0, 0);
  clone() {
    return new n2(this.r, this.g, this.b);
  }
  lighten(e) {
    return new n2(this.r + e, this.g + e, this.b + e);
  }
  darken(e) {
    return this.lighten(-e);
  }
  invert() {
    return new n2(255 - this.r, 255 - this.g, 255 - this.b);
  }
  mult(e) {
    return new n2(this.r * e.r / 255, this.g * e.g / 255, this.b * e.b / 255);
  }
  lerp(e, o) {
    return new n2(Ve(this.r, e.r, o), Ve(this.g, e.g, o), Ve(this.b, e.b, o));
  }
  toHSL() {
    let e = this.r / 255, o = this.g / 255, c = this.b / 255, g = Math.max(e, o, c), m = Math.min(e, o, c), P = (g + m) / 2, I = P, j = P;
    if (g == m)
      P = I = 0;
    else {
      let y = g - m;
      switch (I = j > 0.5 ? y / (2 - g - m) : y / (g + m), g) {
        case e:
          P = (o - c) / y + (o < c ? 6 : 0);
          break;
        case o:
          P = (c - e) / y + 2;
          break;
        case c:
          P = (e - o) / y + 4;
          break;
      }
      P /= 6;
    }
    return [P, I, j];
  }
  eq(e) {
    return this.r === e.r && this.g === e.g && this.b === e.b;
  }
  toString() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
  toHex() {
    return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
  }
};
function J(...n13) {
  if (n13.length === 0)
    return new W(255, 255, 255);
  if (n13.length === 1) {
    if (n13[0] instanceof W)
      return n13[0].clone();
    if (typeof n13[0] == "string")
      return W.fromHex(n13[0]);
    if (Array.isArray(n13[0]) && n13[0].length === 3)
      return W.fromArray(n13[0]);
  }
  return new W(...n13);
}
i(J, "rgb");
var vr = i((n13, e, o) => W.fromHSL(n13, e, o), "hsl2rgb");
var oe = class n3 {
  static {
    i(this, "Quad");
  }
  x = 0;
  y = 0;
  w = 1;
  h = 1;
  constructor(e, o, c, g) {
    this.x = e, this.y = o, this.w = c, this.h = g;
  }
  scale(e) {
    return new n3(this.x + this.w * e.x, this.y + this.h * e.y, this.w * e.w, this.h * e.h);
  }
  pos() {
    return new v(this.x, this.y);
  }
  clone() {
    return new n3(this.x, this.y, this.w, this.h);
  }
  eq(e) {
    return this.x === e.x && this.y === e.y && this.w === e.w && this.h === e.h;
  }
  toString() {
    return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
  }
};
function ce(n13, e, o, c) {
  return new oe(n13, e, o, c);
}
i(ce, "quad");
var Ue = class n4 {
  static {
    i(this, "Mat4");
  }
  m = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  constructor(e) {
    e && (this.m = e);
  }
  static translate(e) {
    return new n4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e.x, e.y, 0, 1]);
  }
  static scale(e) {
    return new n4([e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  static rotateX(e) {
    e = Ge(-e);
    let o = Math.cos(e), c = Math.sin(e);
    return new n4([1, 0, 0, 0, 0, o, -c, 0, 0, c, o, 0, 0, 0, 0, 1]);
  }
  static rotateY(e) {
    e = Ge(-e);
    let o = Math.cos(e), c = Math.sin(e);
    return new n4([o, 0, c, 0, 0, 1, 0, 0, -c, 0, o, 0, 0, 0, 0, 1]);
  }
  static rotateZ(e) {
    e = Ge(-e);
    let o = Math.cos(e), c = Math.sin(e);
    return new n4([o, -c, 0, 0, c, o, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  translate(e) {
    return this.m[12] += this.m[0] * e.x + this.m[4] * e.y, this.m[13] += this.m[1] * e.x + this.m[5] * e.y, this.m[14] += this.m[2] * e.x + this.m[6] * e.y, this.m[15] += this.m[3] * e.x + this.m[7] * e.y, this;
  }
  scale(e) {
    return this.m[0] *= e.x, this.m[4] *= e.y, this.m[1] *= e.x, this.m[5] *= e.y, this.m[2] *= e.x, this.m[6] *= e.y, this.m[3] *= e.x, this.m[7] *= e.y, this;
  }
  rotate(e) {
    e = Ge(-e);
    let o = Math.cos(e), c = Math.sin(e), g = this.m[0], m = this.m[1], P = this.m[4], I = this.m[5];
    return this.m[0] = g * o + m * c, this.m[1] = -g * c + m * o, this.m[4] = P * o + I * c, this.m[5] = -P * c + I * o, this;
  }
  mult(e) {
    let o = [];
    for (let c = 0; c < 4; c++)
      for (let g = 0; g < 4; g++)
        o[c * 4 + g] = this.m[0 * 4 + g] * e.m[c * 4 + 0] + this.m[1 * 4 + g] * e.m[c * 4 + 1] + this.m[2 * 4 + g] * e.m[c * 4 + 2] + this.m[3 * 4 + g] * e.m[c * 4 + 3];
    return new n4(o);
  }
  multVec2(e) {
    return new v(e.x * this.m[0] + e.y * this.m[4] + this.m[12], e.x * this.m[1] + e.y * this.m[5] + this.m[13]);
  }
  getTranslation() {
    return new v(this.m[12], this.m[13]);
  }
  getScale() {
    if (this.m[0] != 0 || this.m[1] != 0) {
      let e = this.m[0] * this.m[5] - this.m[1] * this.m[4], o = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
      return new v(o, e / o);
    } else if (this.m[4] != 0 || this.m[5] != 0) {
      let e = this.m[0] * this.m[5] - this.m[1] * this.m[4], o = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
      return new v(e / o, o);
    } else
      return new v(0, 0);
  }
  getRotation() {
    if (this.m[0] != 0 || this.m[1] != 0) {
      let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
      return ot(this.m[1] > 0 ? Math.acos(this.m[0] / e) : -Math.acos(this.m[0] / e));
    } else if (this.m[4] != 0 || this.m[5] != 0) {
      let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
      return ot(Math.PI / 2 - (this.m[5] > 0 ? Math.acos(-this.m[4] / e) : -Math.acos(this.m[4] / e)));
    } else
      return 0;
  }
  getSkew() {
    if (this.m[0] != 0 || this.m[1] != 0) {
      let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
      return new v(Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e), 0);
    } else if (this.m[4] != 0 || this.m[5] != 0) {
      let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
      return new v(0, Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e));
    } else
      return new v(0, 0);
  }
  invert() {
    let e = [], o = this.m[10] * this.m[15] - this.m[14] * this.m[11], c = this.m[9] * this.m[15] - this.m[13] * this.m[11], g = this.m[9] * this.m[14] - this.m[13] * this.m[10], m = this.m[8] * this.m[15] - this.m[12] * this.m[11], P = this.m[8] * this.m[14] - this.m[12] * this.m[10], I = this.m[8] * this.m[13] - this.m[12] * this.m[9], j = this.m[6] * this.m[15] - this.m[14] * this.m[7], y = this.m[5] * this.m[15] - this.m[13] * this.m[7], X = this.m[5] * this.m[14] - this.m[13] * this.m[6], S = this.m[4] * this.m[15] - this.m[12] * this.m[7], q = this.m[4] * this.m[14] - this.m[12] * this.m[6], E = this.m[5] * this.m[15] - this.m[13] * this.m[7], K = this.m[4] * this.m[13] - this.m[12] * this.m[5], Q = this.m[6] * this.m[11] - this.m[10] * this.m[7], te = this.m[5] * this.m[11] - this.m[9] * this.m[7], k = this.m[5] * this.m[10] - this.m[9] * this.m[6], pe = this.m[4] * this.m[11] - this.m[8] * this.m[7], C = this.m[4] * this.m[10] - this.m[8] * this.m[6], Ae = this.m[4] * this.m[9] - this.m[8] * this.m[5];
    e[0] = this.m[5] * o - this.m[6] * c + this.m[7] * g, e[4] = -(this.m[4] * o - this.m[6] * m + this.m[7] * P), e[8] = this.m[4] * c - this.m[5] * m + this.m[7] * I, e[12] = -(this.m[4] * g - this.m[5] * P + this.m[6] * I), e[1] = -(this.m[1] * o - this.m[2] * c + this.m[3] * g), e[5] = this.m[0] * o - this.m[2] * m + this.m[3] * P, e[9] = -(this.m[0] * c - this.m[1] * m + this.m[3] * I), e[13] = this.m[0] * g - this.m[1] * P + this.m[2] * I, e[2] = this.m[1] * j - this.m[2] * y + this.m[3] * X, e[6] = -(this.m[0] * j - this.m[2] * S + this.m[3] * q), e[10] = this.m[0] * E - this.m[1] * S + this.m[3] * K, e[14] = -(this.m[0] * X - this.m[1] * q + this.m[2] * K), e[3] = -(this.m[1] * Q - this.m[2] * te + this.m[3] * k), e[7] = this.m[0] * Q - this.m[2] * pe + this.m[3] * C, e[11] = -(this.m[0] * te - this.m[1] * pe + this.m[3] * Ae), e[15] = this.m[0] * k - this.m[1] * C + this.m[2] * Ae;
    let $ = this.m[0] * e[0] + this.m[1] * e[4] + this.m[2] * e[8] + this.m[3] * e[12];
    for (let Te = 0; Te < 4; Te++)
      for (let ye = 0; ye < 4; ye++)
        e[Te * 4 + ye] *= 1 / $;
    return new n4(e);
  }
  clone() {
    return new n4([...this.m]);
  }
  toString() {
    return this.m.toString();
  }
};
function In(n13, e, o, c = (g) => -Math.cos(g)) {
  return n13 + (c(o) + 1) / 2 * (e - n13);
}
i(In, "wave");
var xi = 1103515245;
var Ui = 12345;
var wr = 2147483648;
var bt = class {
  static {
    i(this, "RNG");
  }
  seed;
  constructor(e) {
    this.seed = e;
  }
  gen() {
    return this.seed = (xi * this.seed + Ui) % wr, this.seed / wr;
  }
  genNumber(e, o) {
    return e + this.gen() * (o - e);
  }
  genVec2(e, o) {
    return new v(this.genNumber(e.x, o.x), this.genNumber(e.y, o.y));
  }
  genColor(e, o) {
    return new W(this.genNumber(e.r, o.r), this.genNumber(e.g, o.g), this.genNumber(e.b, o.b));
  }
  genAny(...e) {
    if (e.length === 0)
      return this.gen();
    if (e.length === 1) {
      if (typeof e[0] == "number")
        return this.genNumber(0, e[0]);
      if (e[0] instanceof v)
        return this.genVec2(T(0, 0), e[0]);
      if (e[0] instanceof W)
        return this.genColor(J(0, 0, 0), e[0]);
    } else if (e.length === 2) {
      if (typeof e[0] == "number" && typeof e[1] == "number")
        return this.genNumber(e[0], e[1]);
      if (e[0] instanceof v && e[1] instanceof v)
        return this.genVec2(e[0], e[1]);
      if (e[0] instanceof W && e[1] instanceof W)
        return this.genColor(e[0], e[1]);
    }
  }
};
var Bn = new bt(Date.now());
function yr(n13) {
  return n13 != null && (Bn.seed = n13), Bn.seed;
}
i(yr, "randSeed");
function xt(...n13) {
  return Bn.genAny(...n13);
}
i(xt, "rand");
function Ln(...n13) {
  return Math.floor(xt(...n13));
}
i(Ln, "randi");
function xr(n13) {
  return xt() <= n13;
}
i(xr, "chance");
function Ur(n13) {
  return n13[Ln(n13.length)];
}
i(Ur, "choose");
function Er(n13, e) {
  return n13.pos.x + n13.width > e.pos.x && n13.pos.x < e.pos.x + e.width && n13.pos.y + n13.height > e.pos.y && n13.pos.y < e.pos.y + e.height;
}
i(Er, "testRectRect");
function Ei(n13, e) {
  if (n13.p1.x === n13.p2.x && n13.p1.y === n13.p2.y || e.p1.x === e.p2.x && e.p1.y === e.p2.y)
    return null;
  let o = (e.p2.y - e.p1.y) * (n13.p2.x - n13.p1.x) - (e.p2.x - e.p1.x) * (n13.p2.y - n13.p1.y);
  if (o === 0)
    return null;
  let c = ((e.p2.x - e.p1.x) * (n13.p1.y - e.p1.y) - (e.p2.y - e.p1.y) * (n13.p1.x - e.p1.x)) / o, g = ((n13.p2.x - n13.p1.x) * (n13.p1.y - e.p1.y) - (n13.p2.y - n13.p1.y) * (n13.p1.x - e.p1.x)) / o;
  return c < 0 || c > 1 || g < 0 || g > 1 ? null : c;
}
i(Ei, "testLineLineT");
function it(n13, e) {
  let o = Ei(n13, e);
  return o ? T(n13.p1.x + o * (n13.p2.x - n13.p1.x), n13.p1.y + o * (n13.p2.y - n13.p1.y)) : null;
}
i(it, "testLineLine");
function Sr(n13, e) {
  if (vt(n13, e.p1) || vt(n13, e.p2))
    return true;
  let o = n13.points();
  return !!it(e, new Ie(o[0], o[1])) || !!it(e, new Ie(o[1], o[2])) || !!it(e, new Ie(o[2], o[3])) || !!it(e, new Ie(o[3], o[0]));
}
i(Sr, "testRectLine");
function vt(n13, e) {
  return e.x > n13.pos.x && e.x < n13.pos.x + n13.width && e.y > n13.pos.y && e.y < n13.pos.y + n13.height;
}
i(vt, "testRectPoint");
function Cr(n13, e) {
  let o = e.sub(n13.p1), c = n13.p2.sub(n13.p1);
  if (Math.abs(o.cross(c)) > Number.EPSILON)
    return false;
  let g = o.dot(c) / c.dot(c);
  return g >= 0 && g <= 1;
}
i(Cr, "testLinePoint");
function Vn(n13, e) {
  let o = n13.p2.sub(n13.p1), c = o.dot(o), g = n13.p1.sub(e.center), m = 2 * o.dot(g), P = g.dot(g) - e.radius * e.radius, I = m * m - 4 * c * P;
  if (c <= Number.EPSILON || I < 0)
    return false;
  if (I == 0) {
    let j = -m / (2 * c);
    if (j >= 0 && j <= 1)
      return true;
  } else {
    let j = (-m + Math.sqrt(I)) / (2 * c), y = (-m - Math.sqrt(I)) / (2 * c);
    if (j >= 0 && j <= 1 || y >= 0 && y <= 1)
      return true;
  }
  return Ar(e, n13.p1);
}
i(Vn, "testLineCircle");
function Ar(n13, e) {
  return n13.center.sdist(e) < n13.radius * n13.radius;
}
i(Ar, "testCirclePoint");
function Tr(n13, e) {
  let o = e.pts[e.pts.length - 1];
  for (let c of e.pts) {
    if (Vn(new Ie(o, c), n13))
      return true;
    o = c;
  }
  return Ar(n13, e.pts[0]) ? true : _n(e, n13.center);
}
i(Tr, "testCirclePolygon");
function _n(n13, e) {
  let o = false, c = n13.pts;
  for (let g = 0, m = c.length - 1; g < c.length; m = g++)
    c[g].y > e.y != c[m].y > e.y && e.x < (c[m].x - c[g].x) * (e.y - c[g].y) / (c[m].y - c[g].y) + c[g].x && (o = !o);
  return o;
}
i(_n, "testPolygonPoint");
var Ie = class n5 {
  static {
    i(this, "Line");
  }
  p1;
  p2;
  constructor(e, o) {
    this.p1 = e.clone(), this.p2 = o.clone();
  }
  transform(e) {
    return new n5(e.multVec2(this.p1), e.multVec2(this.p2));
  }
  bbox() {
    return de.fromPoints(this.p1, this.p2);
  }
  area() {
    return this.p1.dist(this.p2);
  }
  clone() {
    return new n5(this.p1, this.p2);
  }
};
var de = class n6 {
  static {
    i(this, "Rect");
  }
  pos;
  width;
  height;
  constructor(e, o, c) {
    this.pos = e.clone(), this.width = o, this.height = c;
  }
  static fromPoints(e, o) {
    return new n6(e.clone(), o.x - e.x, o.y - e.y);
  }
  center() {
    return new v(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
  }
  points() {
    return [this.pos, this.pos.add(this.width, 0), this.pos.add(this.width, this.height), this.pos.add(0, this.height)];
  }
  transform(e) {
    return new Ke(this.points().map((o) => e.multVec2(o)));
  }
  bbox() {
    return this.clone();
  }
  area() {
    return this.width * this.height;
  }
  clone() {
    return new n6(this.pos.clone(), this.width, this.height);
  }
  distToPoint(e) {
    return Math.sqrt(this.sdistToPoint(e));
  }
  sdistToPoint(e) {
    let o = this.pos, c = this.pos.add(this.width, this.height), g = Math.max(o.x - e.x, 0, e.x - c.x), m = Math.max(o.y - e.y, 0, e.y - c.y);
    return g * g + m * m;
  }
};
var yt = class n7 {
  static {
    i(this, "Circle");
  }
  center;
  radius;
  constructor(e, o) {
    this.center = e.clone(), this.radius = o;
  }
  transform(e) {
    return new Fn(this.center, this.radius, this.radius).transform(e);
  }
  bbox() {
    return de.fromPoints(this.center.sub(T(this.radius)), this.center.add(T(this.radius)));
  }
  area() {
    return this.radius * this.radius * Math.PI;
  }
  clone() {
    return new n7(this.center, this.radius);
  }
};
var Fn = class n8 {
  static {
    i(this, "Ellipse");
  }
  center;
  radiusX;
  radiusY;
  constructor(e, o, c) {
    this.center = e.clone(), this.radiusX = o, this.radiusY = c;
  }
  transform(e) {
    return new n8(e.multVec2(this.center), e.m[0] * this.radiusX, e.m[5] * this.radiusY);
  }
  bbox() {
    return de.fromPoints(this.center.sub(T(this.radiusX, this.radiusY)), this.center.add(T(this.radiusX, this.radiusY)));
  }
  area() {
    return this.radiusX * this.radiusY * Math.PI;
  }
  clone() {
    return new n8(this.center, this.radiusX, this.radiusY);
  }
};
var Ke = class n9 {
  static {
    i(this, "Polygon");
  }
  pts;
  constructor(e) {
    if (e.length < 3)
      throw new Error("Polygons should have at least 3 vertices");
    this.pts = e;
  }
  transform(e) {
    return new n9(this.pts.map((o) => e.multVec2(o)));
  }
  bbox() {
    let e = T(Number.MAX_VALUE), o = T(-Number.MAX_VALUE);
    for (let c of this.pts)
      e.x = Math.min(e.x, c.x), o.x = Math.max(o.x, c.x), e.y = Math.min(e.y, c.y), o.y = Math.max(o.y, c.y);
    return de.fromPoints(e, o);
  }
  area() {
    let e = 0, o = this.pts.length;
    for (let c = 0; c < o; c++) {
      let g = this.pts[c], m = this.pts[(c + 1) % o];
      e += g.x * m.y * 0.5, e -= m.x * g.y * 0.5;
    }
    return Math.abs(e);
  }
  clone() {
    return new n9(this.pts.map((e) => e.clone()));
  }
};
function Or(n13, e) {
  let o = Number.MAX_VALUE, c = T(0);
  for (let g of [n13, e])
    for (let m = 0; m < g.pts.length; m++) {
      let P = g.pts[m], j = g.pts[(m + 1) % g.pts.length].sub(P).normal().unit(), y = Number.MAX_VALUE, X = -Number.MAX_VALUE;
      for (let K = 0; K < n13.pts.length; K++) {
        let Q = n13.pts[K].dot(j);
        y = Math.min(y, Q), X = Math.max(X, Q);
      }
      let S = Number.MAX_VALUE, q = -Number.MAX_VALUE;
      for (let K = 0; K < e.pts.length; K++) {
        let Q = e.pts[K].dot(j);
        S = Math.min(S, Q), q = Math.max(q, Q);
      }
      let E = Math.min(X, q) - Math.max(y, S);
      if (E < 0)
        return null;
      if (E < Math.abs(o)) {
        let K = q - y, Q = S - X;
        o = Math.abs(K) < Math.abs(Q) ? K : Q, c = j.scale(o);
      }
    }
  return c;
}
i(Or, "sat");
var Ut = class extends Map {
  static {
    i(this, "Registry");
  }
  lastID;
  constructor(...e) {
    super(...e), this.lastID = 0;
  }
  push(e) {
    let o = this.lastID;
    return this.set(o, e), this.lastID++, o;
  }
  pushd(e) {
    let o = this.push(e);
    return () => this.delete(o);
  }
};
var ke = class n10 {
  static {
    i(this, "EventController");
  }
  paused = false;
  cancel;
  constructor(e) {
    this.cancel = e;
  }
  static join(e) {
    let o = new n10(() => e.forEach((c) => c.cancel()));
    return Object.defineProperty(o, "paused", { get: () => e[0].paused, set: (c) => e.forEach((g) => g.paused = c) }), o.paused = false, o;
  }
};
var be = class {
  static {
    i(this, "Event");
  }
  handlers = new Ut();
  add(e) {
    let o = this.handlers.pushd((...g) => {
      c.paused || e(...g);
    }), c = new ke(o);
    return c;
  }
  addOnce(e) {
    let o = this.add((...c) => {
      o.cancel(), e(...c);
    });
    return o;
  }
  next() {
    return new Promise((e) => this.addOnce(e));
  }
  trigger(...e) {
    this.handlers.forEach((o) => o(...e));
  }
  numListeners() {
    return this.handlers.size;
  }
  clear() {
    this.handlers.clear();
  }
};
var Ne = class {
  static {
    i(this, "EventHandler");
  }
  handlers = {};
  on(e, o) {
    return this.handlers[e] || (this.handlers[e] = new be()), this.handlers[e].add(o);
  }
  onOnce(e, o) {
    let c = this.on(e, (...g) => {
      c.cancel(), o(...g);
    });
    return c;
  }
  next(e) {
    return new Promise((o) => {
      this.onOnce(e, (...c) => o(c[0]));
    });
  }
  trigger(e, ...o) {
    this.handlers[e] && this.handlers[e].trigger(...o);
  }
  remove(e) {
    delete this.handlers[e];
  }
  clear() {
    this.handlers = {};
  }
  numListeners(e) {
    return this.handlers[e]?.numListeners() ?? 0;
  }
};
function Wt(n13, e) {
  if (n13 === e)
    return true;
  let o = typeof n13, c = typeof e;
  if (o !== c)
    return false;
  if (o === "object" && c === "object" && n13 !== null && e !== null) {
    if (Array.isArray(n13) !== Array.isArray(e))
      return false;
    let g = Object.keys(n13), m = Object.keys(e);
    if (g.length !== m.length)
      return false;
    for (let P of g) {
      let I = n13[P], j = e[P];
      if (!Wt(I, j))
        return false;
    }
    return true;
  }
  return false;
}
i(Wt, "deepEq");
function Si(n13) {
  let e = window.atob(n13), o = e.length, c = new Uint8Array(o);
  for (let g = 0; g < o; g++)
    c[g] = e.charCodeAt(g);
  return c.buffer;
}
i(Si, "base64ToArrayBuffer");
function Pr(n13) {
  return Si(n13.split(",")[1]);
}
i(Pr, "dataURLToArrayBuffer");
function Xt(n13, e) {
  let o = document.createElement("a");
  o.href = e, o.download = n13, o.click();
}
i(Xt, "download");
function kn(n13, e) {
  Xt(n13, "data:text/plain;charset=utf-8," + e);
}
i(kn, "downloadText");
function Dr(n13, e) {
  kn(n13, JSON.stringify(e));
}
i(Dr, "downloadJSON");
function Nn(n13, e) {
  let o = URL.createObjectURL(e);
  Xt(n13, o), URL.revokeObjectURL(o);
}
i(Nn, "downloadBlob");
var jn = i((n13) => n13.match(/^data:\w+\/\w+;base64,.+/), "isDataURL");
var Mr = i((n13) => n13.split(".").slice(0, -1).join("."), "getFileName");
function Ee(n13, e) {
  return (...o) => {
    let c = o.length;
    if (c === n13.length)
      return n13(...o);
    if (c === e.length)
      return e(...o);
  };
}
i(Ee, "overload2");
var Gr = /* @__PURE__ */ (() => {
  let n13 = 0;
  return () => n13++;
})();
var Br = i((n13) => n13 instanceof Error ? n13.message : String(n13), "getErrorMessage");
var Yt = class {
  static {
    i(this, "BinaryHeap");
  }
  _items;
  _compareFn;
  constructor(e = (o, c) => o < c) {
    this._compareFn = e, this._items = [];
  }
  insert(e) {
    this._items.push(e), this.moveUp(this._items.length - 1);
  }
  remove() {
    if (this._items.length === 0)
      return null;
    let e = this._items[0], o = this._items.pop();
    return this._items.length !== 0 && (this._items[0] = o, this.moveDown(0)), e;
  }
  clear() {
    this._items.splice(0, this._items.length);
  }
  moveUp(e) {
    for (; e > 0; ) {
      let o = Math.floor((e - 1) / 2);
      if (!this._compareFn(this._items[e], this._items[o]) && this._items[e] >= this._items[o])
        break;
      this.swap(e, o), e = o;
    }
  }
  moveDown(e) {
    for (; e < Math.floor(this._items.length / 2); ) {
      let o = 2 * e + 1;
      if (o < this._items.length - 1 && !this._compareFn(this._items[o], this._items[o + 1]) && ++o, this._compareFn(this._items[e], this._items[o]))
        break;
      this.swap(e, o), e = o;
    }
  }
  swap(e, o) {
    [this._items[e], this._items[o]] = [this._items[o], this._items[e]];
  }
  get length() {
    return this._items.length;
  }
};
var Ci = Object.freeze([776, 2359, 2367, 2984, 3007, 3021, 3633, 3635, 3648, 3657, 4352, 4449, 4520]);
function Fr(n13) {
  if (typeof n13 != "string")
    throw new TypeError("string cannot be undefined or null");
  let e = [], o = 0, c = 0;
  for (; o < n13.length; ) {
    if (c += Ai(o + c, n13), Gi(n13[o + c]) && c++, Pi(n13[o + c]) && c++, Di(n13[o + c]) && c++, Bi(n13[o + c])) {
      c++;
      continue;
    }
    e.push(n13.substring(o, o + c)), o += c, c = 0;
  }
  return e;
}
i(Fr, "runes");
function Ai(n13, e) {
  let o = e[n13];
  if (!Ti(o) || n13 === e.length - 1)
    return 1;
  let c = o + e[n13 + 1], g = e.substring(n13 + 2, n13 + 5);
  return Rr(c) && Rr(g) ? 4 : Oi(c) && Mi(g) ? e.slice(n13).indexOf(String.fromCodePoint(917631)) + 2 : Ri(g) ? 4 : 2;
}
i(Ai, "nextUnits");
function Ti(n13) {
  return n13 && tt(n13[0].charCodeAt(0), 55296, 56319);
}
i(Ti, "isFirstOfSurrogatePair");
function Rr(n13) {
  return tt(Hn(n13), 127462, 127487);
}
i(Rr, "isRegionalIndicator");
function Oi(n13) {
  return tt(Hn(n13), 127988, 127988);
}
i(Oi, "isSubdivisionFlag");
function Ri(n13) {
  return tt(Hn(n13), 127995, 127999);
}
i(Ri, "isFitzpatrickModifier");
function Pi(n13) {
  return typeof n13 == "string" && tt(n13.charCodeAt(0), 65024, 65039);
}
i(Pi, "isVariationSelector");
function Di(n13) {
  return typeof n13 == "string" && tt(n13.charCodeAt(0), 8400, 8447);
}
i(Di, "isDiacriticalMark");
function Mi(n13) {
  let e = n13.codePointAt(0);
  return typeof n13 == "string" && typeof e == "number" && tt(e, 917504, 917631);
}
i(Mi, "isSupplementarySpecialpurposePlane");
function Gi(n13) {
  return typeof n13 == "string" && Ci.includes(n13.charCodeAt(0));
}
i(Gi, "isGrapheme");
function Bi(n13) {
  return typeof n13 == "string" && n13.charCodeAt(0) === 8205;
}
i(Bi, "isZeroWidthJoiner");
function Hn(n13) {
  let e = n13.charCodeAt(0) - 55296, o = n13.charCodeAt(1) - 56320;
  return (e << 10) + o + 65536;
}
i(Hn, "codePointFromSurrogatePair");
function tt(n13, e, o) {
  return n13 >= e && n13 <= o;
}
i(tt, "betweenInclusive");
var qn = { "Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, "Joy-Con (L) (STANDARD GAMEPAD Vendor: 057e Product: 2006)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "select", "10": "lstick", "16": "start" }, sticks: { left: { x: 0, y: 1 } } }, "Joy-Con (R) (STANDARD GAMEPAD Vendor: 057e Product: 2007)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "start", "10": "lstick", "16": "select" }, sticks: { left: { x: 0, y: 1 } } }, "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, default: { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } } };
var at = class {
  static {
    i(this, "ButtonState");
  }
  pressed = /* @__PURE__ */ new Set([]);
  pressedRepeat = /* @__PURE__ */ new Set([]);
  released = /* @__PURE__ */ new Set([]);
  down = /* @__PURE__ */ new Set([]);
  update() {
    this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
  }
  press(e) {
    this.pressed.add(e), this.pressedRepeat.add(e), this.down.add(e);
  }
  pressRepeat(e) {
    this.pressedRepeat.add(e);
  }
  release(e) {
    this.down.delete(e), this.pressed.delete(e), this.released.add(e);
  }
};
var $n = class {
  static {
    i(this, "GamepadState");
  }
  buttonState = new at();
  stickState = /* @__PURE__ */ new Map();
};
var zn = class {
  static {
    i(this, "FPSCounter");
  }
  dts = [];
  timer = 0;
  fps = 0;
  tick(e) {
    this.dts.push(e), this.timer += e, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((o, c) => o + c) / this.dts.length)), this.dts = []);
  }
};
var Ir = i((n13) => {
  if (!n13.canvas)
    throw new Error("Please provide a canvas");
  let e = { canvas: n13.canvas, loopID: null, stopped: false, dt: 0, time: 0, realTime: 0, fpsCounter: new zn(), timeScale: 1, skipTime: false, numFrames: 0, mousePos: new v(0), mouseDeltaPos: new v(0), keyState: new at(), mouseState: new at(), mergedGamepadState: new $n(), gamepadStates: /* @__PURE__ */ new Map(), gamepads: [], charInputted: [], isMouseMoved: false, lastWidth: n13.canvas.offsetWidth, lastHeight: n13.canvas.offsetHeight, events: new Ne() };
  function o() {
    return e.dt * e.timeScale;
  }
  i(o, "dt");
  function c() {
    return e.time;
  }
  i(c, "time");
  function g() {
    return e.fpsCounter.fps;
  }
  i(g, "fps");
  function m() {
    return e.numFrames;
  }
  i(m, "numFrames");
  function P() {
    return e.canvas.toDataURL();
  }
  i(P, "screenshot");
  function I(l) {
    e.canvas.style.cursor = l;
  }
  i(I, "setCursor");
  function j() {
    return e.canvas.style.cursor;
  }
  i(j, "getCursor");
  function y(l) {
    if (l)
      try {
        let x = e.canvas.requestPointerLock();
        x.catch && x.catch((R) => console.error(R));
      } catch (x) {
        console.error(x);
      }
    else
      document.exitPointerLock();
  }
  i(y, "setCursorLocked");
  function X() {
    return !!document.pointerLockElement;
  }
  i(X, "isCursorLocked");
  function S(l) {
    l.requestFullscreen ? l.requestFullscreen() : l.webkitRequestFullscreen && l.webkitRequestFullscreen();
  }
  i(S, "enterFullscreen");
  function q() {
    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
  }
  i(q, "exitFullscreen");
  function E() {
    return document.fullscreenElement || document.webkitFullscreenElement;
  }
  i(E, "getFullscreenElement");
  function K(l = true) {
    l ? S(e.canvas) : q();
  }
  i(K, "setFullscreen");
  function Q() {
    return !!E();
  }
  i(Q, "isFullscreen");
  function te() {
    e.stopped = true;
    for (let l in se)
      e.canvas.removeEventListener(l, se[l]);
    for (let l in le)
      document.removeEventListener(l, le[l]);
    for (let l in ae)
      window.removeEventListener(l, ae[l]);
    ge.disconnect();
  }
  i(te, "quit");
  function k(l) {
    e.loopID !== null && cancelAnimationFrame(e.loopID);
    let x = 0, R = i((L) => {
      if (e.stopped)
        return;
      if (document.visibilityState !== "visible") {
        e.loopID = requestAnimationFrame(R);
        return;
      }
      let he = L / 1e3, z = he - e.realTime, Oe = n13.maxFPS ? 1 / n13.maxFPS : 0;
      e.realTime = he, x += z, x > Oe && (e.skipTime || (e.dt = x, e.time += o(), e.fpsCounter.tick(e.dt)), x = 0, e.skipTime = false, e.numFrames++, ft(), l(), vn()), e.loopID = requestAnimationFrame(R);
    }, "frame");
    R(0);
  }
  i(k, "run");
  function pe() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  i(pe, "isTouchscreen");
  function C() {
    return e.mousePos.clone();
  }
  i(C, "mousePos");
  function Ae() {
    return e.mouseDeltaPos.clone();
  }
  i(Ae, "mouseDeltaPos");
  function $(l = "left") {
    return e.mouseState.pressed.has(l);
  }
  i($, "isMousePressed");
  function Te(l = "left") {
    return e.mouseState.down.has(l);
  }
  i(Te, "isMouseDown");
  function ye(l = "left") {
    return e.mouseState.released.has(l);
  }
  i(ye, "isMouseReleased");
  function Se() {
    return e.isMouseMoved;
  }
  i(Se, "isMouseMoved");
  function st(l) {
    return l === void 0 ? e.keyState.pressed.size > 0 : e.keyState.pressed.has(l);
  }
  i(st, "isKeyPressed");
  function on(l) {
    return l === void 0 ? e.keyState.pressedRepeat.size > 0 : e.keyState.pressedRepeat.has(l);
  }
  i(on, "isKeyPressedRepeat");
  function Tt(l) {
    return l === void 0 ? e.keyState.down.size > 0 : e.keyState.down.has(l);
  }
  i(Tt, "isKeyDown");
  function Ot(l) {
    return l === void 0 ? e.keyState.released.size > 0 : e.keyState.released.has(l);
  }
  i(Ot, "isKeyReleased");
  function Rt(l) {
    return l === void 0 ? e.mergedGamepadState.buttonState.pressed.size > 0 : e.mergedGamepadState.buttonState.pressed.has(l);
  }
  i(Rt, "isGamepadButtonPressed");
  function Ye(l) {
    return l === void 0 ? e.mergedGamepadState.buttonState.down.size > 0 : e.mergedGamepadState.buttonState.down.has(l);
  }
  i(Ye, "isGamepadButtonDown");
  function an(l) {
    return l === void 0 ? e.mergedGamepadState.buttonState.released.size > 0 : e.mergedGamepadState.buttonState.released.has(l);
  }
  i(an, "isGamepadButtonReleased");
  function un(l) {
    return e.events.on("resize", l);
  }
  i(un, "onResize");
  let cn = Ee((l) => e.events.on("keyDown", l), (l, x) => e.events.on("keyDown", (R) => R === l && x(l))), hn = Ee((l) => e.events.on("keyPress", l), (l, x) => e.events.on("keyPress", (R) => R === l && x(l))), ln = Ee((l) => e.events.on("keyPressRepeat", l), (l, x) => e.events.on("keyPressRepeat", (R) => R === l && x(l))), dn = Ee((l) => e.events.on("keyRelease", l), (l, x) => e.events.on("keyRelease", (R) => R === l && x(l))), Pt = Ee((l) => e.events.on("mouseDown", (x) => l(x)), (l, x) => e.events.on("mouseDown", (R) => R === l && x(R))), Dt = Ee((l) => e.events.on("mousePress", (x) => l(x)), (l, x) => e.events.on("mousePress", (R) => R === l && x(R))), Mt = Ee((l) => e.events.on("mouseRelease", (x) => l(x)), (l, x) => e.events.on("mouseRelease", (R) => R === l && x(R)));
  function Gt(l) {
    return e.events.on("mouseMove", () => l(C(), Ae()));
  }
  i(Gt, "onMouseMove");
  function Bt(l) {
    return e.events.on("charInput", l);
  }
  i(Bt, "onCharInput");
  function fn(l) {
    return e.events.on("touchStart", l);
  }
  i(fn, "onTouchStart");
  function ct(l) {
    return e.events.on("touchMove", l);
  }
  i(ct, "onTouchMove");
  function mn(l) {
    return e.events.on("touchEnd", l);
  }
  i(mn, "onTouchEnd");
  function pn(l) {
    return e.events.on("scroll", l);
  }
  i(pn, "onScroll");
  function Ft(l) {
    return e.events.on("hide", l);
  }
  i(Ft, "onHide");
  function gn(l) {
    return e.events.on("show", l);
  }
  i(gn, "onShow");
  function It(l, x) {
    if (typeof l == "function")
      return e.events.on("gamepadButtonDown", l);
    if (typeof l == "string" && typeof x == "function")
      return e.events.on("gamepadButtonDown", (R) => R === l && x(l));
  }
  i(It, "onGamepadButtonDown");
  function Lt(l, x) {
    if (typeof l == "function")
      return e.events.on("gamepadButtonPress", l);
    if (typeof l == "string" && typeof x == "function")
      return e.events.on("gamepadButtonPress", (R) => R === l && x(l));
  }
  i(Lt, "onGamepadButtonPress");
  function wn(l, x) {
    if (typeof l == "function")
      return e.events.on("gamepadButtonRelease", l);
    if (typeof l == "string" && typeof x == "function")
      return e.events.on("gamepadButtonRelease", (R) => R === l && x(l));
  }
  i(wn, "onGamepadButtonRelease");
  function ht(l, x) {
    return e.events.on("gamepadStick", (R, L) => R === l && x(L));
  }
  i(ht, "onGamepadStick");
  function bn(l) {
    e.events.on("gamepadConnect", l);
  }
  i(bn, "onGamepadConnect");
  function lt(l) {
    e.events.on("gamepadDisconnect", l);
  }
  i(lt, "onGamepadDisconnect");
  function Pe(l) {
    return e.mergedGamepadState.stickState.get(l) || new v(0);
  }
  i(Pe, "getGamepadStick");
  function dt() {
    return [...e.charInputted];
  }
  i(dt, "charInputted");
  function Vt() {
    return [...e.gamepads];
  }
  i(Vt, "getGamepads");
  function ft() {
    e.events.trigger("input"), e.keyState.down.forEach((l) => e.events.trigger("keyDown", l)), e.mouseState.down.forEach((l) => e.events.trigger("mouseDown", l)), He();
  }
  i(ft, "processInput");
  function vn() {
    e.keyState.update(), e.mouseState.update(), e.mergedGamepadState.buttonState.update(), e.mergedGamepadState.stickState.forEach((l, x) => {
      e.mergedGamepadState.stickState.set(x, new v(0));
    }), e.charInputted = [], e.isMouseMoved = false, e.gamepadStates.forEach((l) => {
      l.buttonState.update(), l.stickState.forEach((x, R) => {
        l.stickState.set(R, new v(0));
      });
    });
  }
  i(vn, "resetInput");
  function _t(l) {
    let x = { index: l.index, isPressed: (R) => e.gamepadStates.get(l.index).buttonState.pressed.has(R), isDown: (R) => e.gamepadStates.get(l.index).buttonState.down.has(R), isReleased: (R) => e.gamepadStates.get(l.index).buttonState.released.has(R), getStick: (R) => e.gamepadStates.get(l.index).stickState.get(R) };
    return e.gamepads.push(x), e.gamepadStates.set(l.index, { buttonState: new at(), stickState: /* @__PURE__ */ new Map([["left", new v(0)], ["right", new v(0)]]) }), x;
  }
  i(_t, "registerGamepad");
  function ne(l) {
    e.gamepads = e.gamepads.filter((x) => x.index !== l.index), e.gamepadStates.delete(l.index);
  }
  i(ne, "removeGamepad");
  function He() {
    for (let l of navigator.getGamepads())
      l && !e.gamepadStates.has(l.index) && _t(l);
    for (let l of e.gamepads) {
      let x = navigator.getGamepads()[l.index], L = (n13.gamepads ?? {})[x.id] ?? qn[x.id] ?? qn.default, he = e.gamepadStates.get(l.index);
      for (let z = 0; z < x.buttons.length; z++)
        x.buttons[z].pressed ? (he.buttonState.down.has(L.buttons[z]) || (e.mergedGamepadState.buttonState.press(L.buttons[z]), he.buttonState.press(L.buttons[z]), e.events.trigger("gamepadButtonPress", L.buttons[z])), e.events.trigger("gamepadButtonDown", L.buttons[z])) : he.buttonState.down.has(L.buttons[z]) && (e.mergedGamepadState.buttonState.release(L.buttons[z]), he.buttonState.release(L.buttons[z]), e.events.trigger("gamepadButtonRelease", L.buttons[z]));
      for (let z in L.sticks) {
        let Oe = L.sticks[z], $e = new v(x.axes[Oe.x], x.axes[Oe.y]);
        he.stickState.set(z, $e), e.mergedGamepadState.stickState.set(z, $e), e.events.trigger("gamepadStick", z, $e);
      }
    }
  }
  i(He, "processGamepad");
  let se = {}, le = {}, ae = {}, Be = n13.pixelDensity || window.devicePixelRatio || 1;
  se.mousemove = (l) => {
    let x = new v(l.offsetX, l.offsetY), R = new v(l.movementX, l.movementY);
    if (Q()) {
      let L = e.canvas.width / Be, he = e.canvas.height / Be, z = window.innerWidth, Oe = window.innerHeight, $e = z / Oe, kt = L / he;
      if ($e > kt) {
        let De = Oe / he, Ce = (z - L * De) / 2;
        x.x = _e(l.offsetX - Ce, 0, L * De, 0, L), x.y = _e(l.offsetY, 0, he * De, 0, he);
      } else {
        let De = z / L, Ce = (Oe - he * De) / 2;
        x.x = _e(l.offsetX, 0, L * De, 0, L), x.y = _e(l.offsetY - Ce, 0, he * De, 0, he);
      }
    }
    e.events.onOnce("input", () => {
      e.isMouseMoved = true, e.mousePos = x, e.mouseDeltaPos = R, e.events.trigger("mouseMove");
    });
  };
  let We = ["left", "middle", "right", "back", "forward"];
  se.mousedown = (l) => {
    e.events.onOnce("input", () => {
      let x = We[l.button];
      x && (e.mouseState.press(x), e.events.trigger("mousePress", x));
    });
  }, se.mouseup = (l) => {
    e.events.onOnce("input", () => {
      let x = We[l.button];
      x && (e.mouseState.release(x), e.events.trigger("mouseRelease", x));
    });
  };
  let yn = /* @__PURE__ */ new Set([" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"]), qe = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
  se.keydown = (l) => {
    yn.has(l.key) && l.preventDefault(), e.events.onOnce("input", () => {
      let x = qe[l.key] || l.key.toLowerCase();
      x.length === 1 ? (e.events.trigger("charInput", x), e.charInputted.push(x)) : x === "space" && (e.events.trigger("charInput", " "), e.charInputted.push(" ")), l.repeat ? (e.keyState.pressRepeat(x), e.events.trigger("keyPressRepeat", x)) : (e.keyState.press(x), e.events.trigger("keyPressRepeat", x), e.events.trigger("keyPress", x));
    });
  }, se.keyup = (l) => {
    e.events.onOnce("input", () => {
      let x = qe[l.key] || l.key.toLowerCase();
      e.keyState.release(x), e.events.trigger("keyRelease", x);
    });
  }, se.touchstart = (l) => {
    l.preventDefault(), e.events.onOnce("input", () => {
      let x = [...l.changedTouches], R = e.canvas.getBoundingClientRect();
      n13.touchToMouse !== false && (e.mousePos = new v(x[0].clientX - R.x, x[0].clientY - R.y), e.mouseState.press("left"), e.events.trigger("mousePress", "left")), x.forEach((L) => {
        e.events.trigger("touchStart", new v(L.clientX - R.x, L.clientY - R.y), L);
      });
    });
  }, se.touchmove = (l) => {
    l.preventDefault(), e.events.onOnce("input", () => {
      let x = [...l.changedTouches], R = e.canvas.getBoundingClientRect();
      n13.touchToMouse !== false && (e.mousePos = new v(x[0].clientX - R.x, x[0].clientY - R.y), e.events.trigger("mouseMove")), x.forEach((L) => {
        e.events.trigger("touchMove", new v(L.clientX - R.x, L.clientY - R.y), L);
      });
    });
  }, se.touchend = (l) => {
    e.events.onOnce("input", () => {
      let x = [...l.changedTouches], R = e.canvas.getBoundingClientRect();
      n13.touchToMouse !== false && (e.mousePos = new v(x[0].clientX - R.x, x[0].clientY - R.y), e.mouseState.release("left"), e.events.trigger("mouseRelease", "left")), x.forEach((L) => {
        e.events.trigger("touchEnd", new v(L.clientX - R.x, L.clientY - R.y), L);
      });
    });
  }, se.touchcancel = (l) => {
    e.events.onOnce("input", () => {
      let x = [...l.changedTouches], R = e.canvas.getBoundingClientRect();
      n13.touchToMouse !== false && (e.mousePos = new v(x[0].clientX - R.x, x[0].clientY - R.y), e.mouseState.release("left"), e.events.trigger("mouseRelease", "left")), x.forEach((L) => {
        e.events.trigger("touchEnd", new v(L.clientX - R.x, L.clientY - R.y), L);
      });
    });
  }, se.wheel = (l) => {
    l.preventDefault(), e.events.onOnce("input", () => {
      e.events.trigger("scroll", new v(l.deltaX, l.deltaY));
    });
  }, se.contextmenu = (l) => l.preventDefault(), le.visibilitychange = () => {
    document.visibilityState === "visible" ? (e.skipTime = true, e.events.trigger("show")) : e.events.trigger("hide");
  }, ae.gamepadconnected = (l) => {
    let x = _t(l.gamepad);
    e.events.onOnce("input", () => {
      e.events.trigger("gamepadConnect", x);
    });
  }, ae.gamepaddisconnected = (l) => {
    let x = Vt().filter((R) => R.index === l.gamepad.index)[0];
    ne(l.gamepad), e.events.onOnce("input", () => {
      e.events.trigger("gamepadDisconnect", x);
    });
  };
  for (let l in se)
    e.canvas.addEventListener(l, se[l]);
  for (let l in le)
    document.addEventListener(l, le[l]);
  for (let l in ae)
    window.addEventListener(l, ae[l]);
  let ge = new ResizeObserver((l) => {
    for (let x of l)
      if (x.target === e.canvas) {
        if (e.lastWidth === e.canvas.offsetWidth && e.lastHeight === e.canvas.offsetHeight)
          return;
        e.lastWidth = e.canvas.offsetWidth, e.lastHeight = e.canvas.offsetHeight, e.events.onOnce("input", () => {
          e.events.trigger("resize");
        });
      }
  });
  return ge.observe(e.canvas), { dt: o, time: c, run: k, canvas: e.canvas, fps: g, numFrames: m, quit: te, setFullscreen: K, isFullscreen: Q, setCursor: I, screenshot: P, getGamepads: Vt, getCursor: j, setCursorLocked: y, isCursorLocked: X, isTouchscreen: pe, mousePos: C, mouseDeltaPos: Ae, isKeyDown: Tt, isKeyPressed: st, isKeyPressedRepeat: on, isKeyReleased: Ot, isMouseDown: Te, isMousePressed: $, isMouseReleased: ye, isMouseMoved: Se, isGamepadButtonPressed: Rt, isGamepadButtonDown: Ye, isGamepadButtonReleased: an, getGamepadStick: Pe, charInputted: dt, onResize: un, onKeyDown: cn, onKeyPress: hn, onKeyPressRepeat: ln, onKeyRelease: dn, onMouseDown: Pt, onMousePress: Dt, onMouseRelease: Mt, onMouseMove: Gt, onCharInput: Bt, onTouchStart: fn, onTouchMove: ct, onTouchEnd: mn, onScroll: pn, onHide: Ft, onShow: gn, onGamepadButtonDown: It, onGamepadButtonPress: Lt, onGamepadButtonRelease: wn, onGamepadStick: ht, onGamepadConnect: bn, onGamepadDisconnect: lt, events: e.events };
}, "default");
var Re = class n11 {
  static {
    i(this, "Texture");
  }
  ctx;
  src = null;
  glTex;
  width;
  height;
  constructor(e, o, c, g = {}) {
    this.ctx = e;
    let m = e.gl;
    this.glTex = e.gl.createTexture(), e.onDestroy(() => this.free()), this.width = o, this.height = c;
    let P = { linear: m.LINEAR, nearest: m.NEAREST }[g.filter ?? e.opts.texFilter] ?? m.NEAREST, I = { repeat: m.REPEAT, clampToEadge: m.CLAMP_TO_EDGE }[g.wrap] ?? m.CLAMP_TO_EDGE;
    this.bind(), o && c && m.texImage2D(m.TEXTURE_2D, 0, m.RGBA, o, c, 0, m.RGBA, m.UNSIGNED_BYTE, null), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, P), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, P), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, I), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, I), this.unbind();
  }
  static fromImage(e, o, c = {}) {
    let g = new n11(e, o.width, o.height, c);
    return g.update(o), g.src = o, g;
  }
  update(e, o = 0, c = 0) {
    let g = this.ctx.gl;
    this.bind(), g.texSubImage2D(g.TEXTURE_2D, 0, o, c, g.RGBA, g.UNSIGNED_BYTE, e), this.unbind();
  }
  bind() {
    this.ctx.pushTexture2D(this.glTex);
  }
  unbind() {
    this.ctx.popTexture2D();
  }
  free() {
    this.ctx.gl.deleteTexture(this.glTex);
  }
};
var rt = class {
  static {
    i(this, "FrameBuffer");
  }
  ctx;
  tex;
  glFramebuffer;
  glRenderbuffer;
  constructor(e, o, c, g = {}) {
    this.ctx = e;
    let m = e.gl;
    e.onDestroy(() => this.free()), this.tex = new Re(e, o, c, g), this.glFramebuffer = m.createFramebuffer(), this.glRenderbuffer = m.createRenderbuffer(), this.bind(), m.renderbufferStorage(m.RENDERBUFFER, m.DEPTH_STENCIL, o, c), m.framebufferTexture2D(m.FRAMEBUFFER, m.COLOR_ATTACHMENT0, m.TEXTURE_2D, this.tex.glTex, 0), m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_STENCIL_ATTACHMENT, m.RENDERBUFFER, this.glRenderbuffer), this.unbind();
  }
  get width() {
    return this.tex.width;
  }
  get height() {
    return this.tex.height;
  }
  toImageData() {
    let e = this.ctx.gl, o = new Uint8ClampedArray(this.width * this.height * 4);
    this.bind(), e.readPixels(0, 0, this.width, this.height, e.RGBA, e.UNSIGNED_BYTE, o), this.unbind();
    let c = this.width * 4, g = new Uint8Array(c);
    for (let m = 0; m < (this.height / 2 | 0); m++) {
      let P = m * c, I = (this.height - m - 1) * c;
      g.set(o.subarray(P, P + c)), o.copyWithin(P, I, I + c), o.set(g, I);
    }
    return new ImageData(o, this.width, this.height);
  }
  toDataURL() {
    let e = document.createElement("canvas"), o = e.getContext("2d");
    return e.width = this.width, e.height = this.height, o.putImageData(this.toImageData(), 0, 0), e.toDataURL();
  }
  draw(e) {
    this.bind(), e(), this.unbind();
  }
  bind() {
    this.ctx.pushFramebuffer(this.glFramebuffer), this.ctx.pushRenderbuffer(this.glRenderbuffer), this.ctx.pushViewport({ x: 0, y: 0, w: this.width, h: this.height });
  }
  unbind() {
    this.ctx.popFramebuffer(), this.ctx.popRenderbuffer(), this.ctx.popViewport();
  }
  free() {
    let e = this.ctx.gl;
    e.deleteFramebuffer(this.glFramebuffer), e.deleteRenderbuffer(this.glRenderbuffer), this.tex.free();
  }
};
var Jt = class {
  static {
    i(this, "Shader");
  }
  ctx;
  glProgram;
  constructor(e, o, c, g) {
    this.ctx = e, e.onDestroy(() => this.free());
    let m = e.gl, P = m.createShader(m.VERTEX_SHADER), I = m.createShader(m.FRAGMENT_SHADER);
    m.shaderSource(P, o), m.shaderSource(I, c), m.compileShader(P), m.compileShader(I);
    let j = m.createProgram();
    if (this.glProgram = j, m.attachShader(j, P), m.attachShader(j, I), g.forEach((y, X) => m.bindAttribLocation(j, X, y)), m.linkProgram(j), !m.getProgramParameter(j, m.LINK_STATUS)) {
      let y = m.getShaderInfoLog(P);
      if (y)
        throw new Error("VERTEX SHADER " + y);
      let X = m.getShaderInfoLog(I);
      if (X)
        throw new Error("FRAGMENT SHADER " + X);
    }
    m.deleteShader(P), m.deleteShader(I);
  }
  bind() {
    this.ctx.pushProgram(this.glProgram);
  }
  unbind() {
    this.ctx.popProgram();
  }
  send(e) {
    let o = this.ctx.gl;
    for (let c in e) {
      let g = e[c], m = o.getUniformLocation(this.glProgram, c);
      typeof g == "number" ? o.uniform1f(m, g) : g instanceof Ue ? o.uniformMatrix4fv(m, false, new Float32Array(g.m)) : g instanceof W ? o.uniform3f(m, g.r, g.g, g.b) : g instanceof v && o.uniform2f(m, g.x, g.y);
    }
  }
  free() {
    this.ctx.gl.deleteProgram(this.glProgram);
  }
};
var Qt = class {
  static {
    i(this, "BatchRenderer");
  }
  ctx;
  glVBuf;
  glIBuf;
  vqueue = [];
  iqueue = [];
  stride;
  maxVertices;
  maxIndices;
  vertexFormat;
  numDraws = 0;
  curPrimitive = null;
  curTex = null;
  curShader = null;
  curUniform = {};
  constructor(e, o, c, g) {
    let m = e.gl;
    this.vertexFormat = o, this.ctx = e, this.stride = o.reduce((P, I) => P + I.size, 0), this.maxVertices = c, this.maxIndices = g, this.glVBuf = m.createBuffer(), e.pushArrayBuffer(this.glVBuf), m.bufferData(m.ARRAY_BUFFER, c * 4, m.DYNAMIC_DRAW), e.popArrayBuffer(), this.glIBuf = m.createBuffer(), e.pushElementArrayBuffer(this.glIBuf), m.bufferData(m.ELEMENT_ARRAY_BUFFER, g * 4, m.DYNAMIC_DRAW), e.popElementArrayBuffer();
  }
  push(e, o, c, g, m = null, P = {}) {
    (e !== this.curPrimitive || m !== this.curTex || g !== this.curShader || !Wt(this.curUniform, P) || this.vqueue.length + o.length * this.stride > this.maxVertices || this.iqueue.length + c.length > this.maxIndices) && this.flush();
    let I = this.vqueue.length / this.stride;
    for (let j of o)
      this.vqueue.push(j);
    for (let j of c)
      this.iqueue.push(j + I);
    this.curPrimitive = e, this.curShader = g, this.curTex = m, this.curUniform = P;
  }
  flush() {
    if (!this.curPrimitive || !this.curShader || this.vqueue.length === 0 || this.iqueue.length === 0)
      return;
    let e = this.ctx.gl;
    this.ctx.pushArrayBuffer(this.glVBuf), e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(this.vqueue)), this.ctx.pushElementArrayBuffer(this.glIBuf), e.bufferSubData(e.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(this.iqueue)), this.ctx.setVertexFormat(this.vertexFormat), this.curShader.bind(), this.curShader.send(this.curUniform), this.curTex?.bind(), e.drawElements(this.curPrimitive, this.iqueue.length, e.UNSIGNED_SHORT, 0), this.curTex?.unbind(), this.curShader.unbind(), this.ctx.popArrayBuffer(), this.ctx.popElementArrayBuffer(), this.vqueue = [], this.iqueue = [], this.numDraws++;
  }
  free() {
    let e = this.ctx.gl;
    e.deleteBuffer(this.glVBuf), e.deleteBuffer(this.glIBuf);
  }
};
function nt(n13) {
  let e = [], o = i((m) => {
    e.push(m), n13(m);
  }, "push"), c = i(() => {
    e.pop(), n13(g() ?? null);
  }, "pop"), g = i(() => e[e.length - 1], "cur");
  return [o, c, g];
}
i(nt, "genStack");
function Kn(n13, e = {}) {
  let o = [];
  function c($) {
    o.push($);
  }
  i(c, "onDestroy");
  function g() {
    o.forEach(($) => $()), n13.getExtension("WEBGL_lose_context").loseContext();
  }
  i(g, "destroy");
  let m = null;
  function P($) {
    if (Wt($, m))
      return;
    m = $;
    let Te = $.reduce((ye, Se) => ye + Se.size, 0);
    $.reduce((ye, Se, st) => (n13.vertexAttribPointer(st, Se.size, n13.FLOAT, false, Te * 4, ye), n13.enableVertexAttribArray(st), ye + Se.size * 4), 0);
  }
  i(P, "setVertexFormat");
  let [I, j] = nt(($) => n13.bindTexture(n13.TEXTURE_2D, $)), [y, X] = nt(($) => n13.bindBuffer(n13.ARRAY_BUFFER, $)), [S, q] = nt(($) => n13.bindBuffer(n13.ELEMENT_ARRAY_BUFFER, $)), [E, K] = nt(($) => n13.bindFramebuffer(n13.FRAMEBUFFER, $)), [Q, te] = nt(($) => n13.bindRenderbuffer(n13.RENDERBUFFER, $)), [k, pe] = nt(({ x: $, y: Te, w: ye, h: Se }) => {
    n13.viewport($, Te, ye, Se);
  }), [C, Ae] = nt(($) => n13.useProgram($));
  return k({ x: 0, y: 0, w: n13.drawingBufferWidth, h: n13.drawingBufferHeight }), { gl: n13, opts: e, onDestroy: c, destroy: g, pushTexture2D: I, popTexture2D: j, pushArrayBuffer: y, popArrayBuffer: X, pushElementArrayBuffer: S, popElementArrayBuffer: q, pushFramebuffer: E, popFramebuffer: K, pushRenderbuffer: Q, popRenderbuffer: te, pushViewport: k, popViewport: pe, pushProgram: C, popProgram: Ae, setVertexFormat: P };
}
i(Kn, "initGfx");
var ve = class n12 {
  static {
    i(this, "Asset");
  }
  loaded = false;
  data = null;
  error = null;
  onLoadEvents = new be();
  onErrorEvents = new be();
  onFinishEvents = new be();
  constructor(e) {
    e.then((o) => {
      this.data = o, this.onLoadEvents.trigger(o);
    }).catch((o) => {
      if (this.error = o, this.onErrorEvents.numListeners() > 0)
        this.onErrorEvents.trigger(o);
      else
        throw o;
    }).finally(() => {
      this.onFinishEvents.trigger(), this.loaded = true;
    });
  }
  static loaded(e) {
    let o = new n12(Promise.resolve(e));
    return o.data = e, o.loaded = true, o;
  }
  onLoad(e) {
    return this.loaded && this.data ? e(this.data) : this.onLoadEvents.add(e), this;
  }
  onError(e) {
    return this.loaded && this.error ? e(this.error) : this.onErrorEvents.add(e), this;
  }
  onFinish(e) {
    return this.loaded ? e() : this.onFinishEvents.add(e), this;
  }
  then(e) {
    return this.onLoad(e);
  }
  catch(e) {
    return this.onError(e);
  }
  finally(e) {
    return this.onFinish(e);
  }
};
var je = class {
  static {
    i(this, "AssetBucket");
  }
  assets = /* @__PURE__ */ new Map();
  lastUID = 0;
  add(e, o) {
    let c = e ?? this.lastUID++ + "", g = new ve(o);
    return this.assets.set(c, g), g;
  }
  addLoaded(e, o) {
    let c = e ?? this.lastUID++ + "", g = ve.loaded(o);
    return this.assets.set(c, g), g;
  }
  get(e) {
    return this.assets.get(e);
  }
  progress() {
    if (this.assets.size === 0)
      return 1;
    let e = 0;
    return this.assets.forEach((o) => {
      o.loaded && e++;
    }), e / this.assets.size;
  }
};
function Yn(n13) {
  return fetch(n13).then((e) => {
    if (!e.ok)
      throw new Error(`Failed to fetch "${n13}"`);
    return e;
  });
}
i(Yn, "fetchURL");
function Et(n13) {
  return Yn(n13).then((e) => e.json());
}
i(Et, "fetchJSON");
function Lr(n13) {
  return Yn(n13).then((e) => e.text());
}
i(Lr, "fetchText");
function Vr(n13) {
  return Yn(n13).then((e) => e.arrayBuffer());
}
i(Vr, "fetchArrayBuffer");
function St(n13) {
  let e = new Image();
  return e.crossOrigin = "anonymous", e.src = n13, new Promise((o, c) => {
    e.onload = () => o(e), e.onerror = () => c(new Error(`Failed to load image from "${n13}"`));
  });
}
i(St, "loadImg");
var Zt = 2.5949095;
var _r = 1.70158 + 1;
var kr = 2 * Math.PI / 3;
var Nr = 2 * Math.PI / 4.5;
var en = { linear: (n13) => n13, easeInSine: (n13) => 1 - Math.cos(n13 * Math.PI / 2), easeOutSine: (n13) => Math.sin(n13 * Math.PI / 2), easeInOutSine: (n13) => -(Math.cos(Math.PI * n13) - 1) / 2, easeInQuad: (n13) => n13 * n13, easeOutQuad: (n13) => 1 - (1 - n13) * (1 - n13), easeInOutQuad: (n13) => n13 < 0.5 ? 2 * n13 * n13 : 1 - Math.pow(-2 * n13 + 2, 2) / 2, easeInCubic: (n13) => n13 * n13 * n13, easeOutCubic: (n13) => 1 - Math.pow(1 - n13, 3), easeInOutCubic: (n13) => n13 < 0.5 ? 4 * n13 * n13 * n13 : 1 - Math.pow(-2 * n13 + 2, 3) / 2, easeInQuart: (n13) => n13 * n13 * n13 * n13, easeOutQuart: (n13) => 1 - Math.pow(1 - n13, 4), easeInOutQuart: (n13) => n13 < 0.5 ? 8 * n13 * n13 * n13 * n13 : 1 - Math.pow(-2 * n13 + 2, 4) / 2, easeInQuint: (n13) => n13 * n13 * n13 * n13 * n13, easeOutQuint: (n13) => 1 - Math.pow(1 - n13, 5), easeInOutQuint: (n13) => n13 < 0.5 ? 16 * n13 * n13 * n13 * n13 * n13 : 1 - Math.pow(-2 * n13 + 2, 5) / 2, easeInExpo: (n13) => n13 === 0 ? 0 : Math.pow(2, 10 * n13 - 10), easeOutExpo: (n13) => n13 === 1 ? 1 : 1 - Math.pow(2, -10 * n13), easeInOutExpo: (n13) => n13 === 0 ? 0 : n13 === 1 ? 1 : n13 < 0.5 ? Math.pow(2, 20 * n13 - 10) / 2 : (2 - Math.pow(2, -20 * n13 + 10)) / 2, easeInCirc: (n13) => 1 - Math.sqrt(1 - Math.pow(n13, 2)), easeOutCirc: (n13) => Math.sqrt(1 - Math.pow(n13 - 1, 2)), easeInOutCirc: (n13) => n13 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * n13, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * n13 + 2, 2)) + 1) / 2, easeInBack: (n13) => _r * n13 * n13 * n13 - 1.70158 * n13 * n13, easeOutBack: (n13) => 1 + _r * Math.pow(n13 - 1, 3) + 1.70158 * Math.pow(n13 - 1, 2), easeInOutBack: (n13) => n13 < 0.5 ? Math.pow(2 * n13, 2) * ((Zt + 1) * 2 * n13 - Zt) / 2 : (Math.pow(2 * n13 - 2, 2) * ((Zt + 1) * (n13 * 2 - 2) + Zt) + 2) / 2, easeInElastic: (n13) => n13 === 0 ? 0 : n13 === 1 ? 1 : -Math.pow(2, 10 * n13 - 10) * Math.sin((n13 * 10 - 10.75) * kr), easeOutElastic: (n13) => n13 === 0 ? 0 : n13 === 1 ? 1 : Math.pow(2, -10 * n13) * Math.sin((n13 * 10 - 0.75) * kr) + 1, easeInOutElastic: (n13) => n13 === 0 ? 0 : n13 === 1 ? 1 : n13 < 0.5 ? -(Math.pow(2, 20 * n13 - 10) * Math.sin((20 * n13 - 11.125) * Nr)) / 2 : Math.pow(2, -20 * n13 + 10) * Math.sin((20 * n13 - 11.125) * Nr) / 2 + 1, easeInBounce: (n13) => 1 - en.easeOutBounce(1 - n13), easeOutBounce: (n13) => n13 < 1 / 2.75 ? 7.5625 * n13 * n13 : n13 < 2 / 2.75 ? 7.5625 * (n13 -= 1.5 / 2.75) * n13 + 0.75 : n13 < 2.5 / 2.75 ? 7.5625 * (n13 -= 2.25 / 2.75) * n13 + 0.9375 : 7.5625 * (n13 -= 2.625 / 2.75) * n13 + 0.984375, easeInOutBounce: (n13) => n13 < 0.5 ? (1 - en.easeOutBounce(1 - 2 * n13)) / 2 : (1 + en.easeOutBounce(2 * n13 - 1)) / 2 };
var Ct = en;
var At = class {
  static {
    i(this, "TexPacker");
  }
  textures = [];
  canvas;
  c2d;
  x = 0;
  y = 0;
  curHeight = 0;
  gfx;
  constructor(e, o, c) {
    this.gfx = e, this.canvas = document.createElement("canvas"), this.canvas.width = o, this.canvas.height = c, this.textures = [Re.fromImage(e, this.canvas)], this.c2d = this.canvas.getContext("2d");
  }
  add(e) {
    if (e.width > this.canvas.width || e.height > this.canvas.height)
      throw new Error(`Texture size (${e.width} x ${e.height}) exceeds limit (${this.canvas.width} x ${this.canvas.height})`);
    this.x + e.width > this.canvas.width && (this.x = 0, this.y += this.curHeight, this.curHeight = 0), this.y + e.height > this.canvas.height && (this.c2d.clearRect(0, 0, this.canvas.width, this.canvas.height), this.textures.push(Re.fromImage(this.gfx, this.canvas)), this.x = 0, this.y = 0, this.curHeight = 0);
    let o = this.textures[this.textures.length - 1], c = new v(this.x, this.y);
    return this.x += e.width, e.height > this.curHeight && (this.curHeight = e.height), e instanceof ImageData ? this.c2d.putImageData(e, c.x, c.y) : this.c2d.drawImage(e, c.x, c.y), o.update(this.canvas), [o, new oe(c.x / this.canvas.width, c.y / this.canvas.height, e.width / this.canvas.width, e.height / this.canvas.height)];
  }
  free() {
    for (let e of this.textures)
      e.free();
  }
};
var jr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
var Hr = gr("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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
var qr = "data:image/png;base64,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";
var $r = "data:image/png;base64,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";
var ki = "3000.1.17";
var zr = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
var tn = "topleft";
var Kr = 64;
var Ni = "monospace";
var nn = "monospace";
var ji = 36;
var rn = 64;
var sn = 256;
var Yr = 2048;
var Wr = 2048;
var Xr = 2048;
var Jr = 2048;
var Qr = 0.1;
var Hi = 64;
var Wn = "linear";
var qi = 8;
var $i = 4;
var Qn = [{ name: "a_pos", size: 2 }, { name: "a_uv", size: 2 }, { name: "a_color", size: 4 }];
var zi = Qn.reduce((n13, e) => n13 + e.size, 0);
var Zr = 2048;
var Ki = Zr * 4 * zi;
var Yi = Zr * 6;
var Wi = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 0.0, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
var Xi = `
precision mediump float;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
var Xn = `
vec4 vert(vec2 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
var Jn = `
vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
var Ji = /* @__PURE__ */ new Set(["id", "require"]);
var Qi = /* @__PURE__ */ new Set(["add", "update", "draw", "destroy", "inspect", "drawInspect"]);
function ut(n13) {
  switch (n13) {
    case "topleft":
      return new v(-1, -1);
    case "top":
      return new v(0, -1);
    case "topright":
      return new v(1, -1);
    case "left":
      return new v(-1, 0);
    case "center":
      return new v(0, 0);
    case "right":
      return new v(1, 0);
    case "botleft":
      return new v(-1, 1);
    case "bot":
      return new v(0, 1);
    case "botright":
      return new v(1, 1);
    default:
      return n13;
  }
}
i(ut, "anchorPt");
function Zi(n13) {
  switch (n13) {
    case "left":
      return 0;
    case "center":
      return 0.5;
    case "right":
      return 1;
    default:
      return 0;
  }
}
i(Zi, "alignPt");
function eo(n13) {
  return n13.createBuffer(1, 1, 44100);
}
i(eo, "createEmptyAudioBuffer");
var zo = i((n13 = {}) => {
  let e = n13.root ?? document.body;
  e === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
  let o = n13.canvas ?? (() => {
    let t = document.createElement("canvas");
    return e.appendChild(t), t;
  })(), c = n13.scale ?? 1, g = n13.width && n13.height && !n13.stretch && !n13.letterbox;
  g ? (o.width = n13.width * c, o.height = n13.height * c) : (o.width = o.parentElement.offsetWidth, o.height = o.parentElement.offsetHeight);
  let m = ["outline: none", "cursor: default"];
  if (g) {
    let t = o.width, r = o.height;
    m.push(`width: ${t}px`), m.push(`height: ${r}px`);
  } else
    m.push("width: 100%"), m.push("height: 100%");
  n13.crisp && (m.push("image-rendering: pixelated"), m.push("image-rendering: crisp-edges")), o.style.cssText = m.join(";");
  let P = n13.pixelDensity || window.devicePixelRatio;
  o.width *= P, o.height *= P, o.tabIndex = 0;
  let I = document.createElement("canvas");
  I.width = sn, I.height = sn;
  let j = I.getContext("2d", { willReadFrequently: true }), y = Ir({ canvas: o, touchToMouse: n13.touchToMouse, gamepads: n13.gamepads, pixelDensity: n13.pixelDensity, maxFPS: n13.maxFPS }), X = [], S = y.canvas.getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true }), q = Kn(S, { texFilter: n13.texFilter }), E = (() => {
    let t = ht(Xn, Jn), r = Re.fromImage(q, new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)), s = n13.width && n13.height ? new rt(q, n13.width * P * c, n13.height * P * c) : new rt(q, S.drawingBufferWidth, S.drawingBufferHeight), u = null, a = 1;
    n13.background && (u = J(n13.background), a = Array.isArray(n13.background) ? n13.background[3] : 1, S.clearColor(u.r / 255, u.g / 255, u.b / 255, a ?? 1)), S.enable(S.BLEND), S.blendFuncSeparate(S.SRC_ALPHA, S.ONE_MINUS_SRC_ALPHA, S.ONE, S.ONE_MINUS_SRC_ALPHA);
    let h = new Qt(q, Qn, Ki, Yi), f = Re.fromImage(q, new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
    return { lastDrawCalls: 0, defShader: t, defTex: r, frameBuffer: s, postShader: null, postShaderUniform: null, renderer: h, transform: new Ue(), transformStack: [], bgTex: f, bgColor: u, bgAlpha: a, width: n13.width ?? S.drawingBufferWidth / P / c, height: n13.height ?? S.drawingBufferHeight / P / c, viewport: { x: 0, y: 0, width: S.drawingBufferWidth, height: S.drawingBufferHeight }, fixed: false };
  })();
  class K {
    static {
      i(this, "SpriteData");
    }
    tex;
    frames = [new oe(0, 0, 1, 1)];
    anims = {};
    slice9 = null;
    constructor(r, s, u = {}, a = null) {
      this.tex = r, s && (this.frames = s), this.anims = u, this.slice9 = a;
    }
    get width() {
      return this.tex.width * this.frames[0].w;
    }
    get height() {
      return this.tex.height * this.frames[0].h;
    }
    static from(r, s = {}) {
      return typeof r == "string" ? K.fromURL(r, s) : Promise.resolve(K.fromImage(r, s));
    }
    static fromImage(r, s = {}) {
      let [u, a] = k.packer.add(r), h = s.frames ? s.frames.map((f) => new oe(a.x + f.x * a.w, a.y + f.y * a.h, f.w * a.w, f.h * a.h)) : Tt(s.sliceX || 1, s.sliceY || 1, a.x, a.y, a.w, a.h);
      return new K(u, h, s.anims, s.slice9);
    }
    static fromURL(r, s = {}) {
      return St(r).then((u) => K.fromImage(u, s));
    }
  }
  class Q {
    static {
      i(this, "SoundData");
    }
    buf;
    constructor(r) {
      this.buf = r;
    }
    static fromArrayBuffer(r) {
      return new Promise((s, u) => te.ctx.decodeAudioData(r, s, u)).then((s) => new Q(s));
    }
    static fromURL(r) {
      return jn(r) ? Q.fromArrayBuffer(Pr(r)) : Vr(r).then((s) => Q.fromArrayBuffer(s));
    }
  }
  let te = (() => {
    let t = new (window.AudioContext || window.webkitAudioContext)(), r = t.createGain();
    r.connect(t.destination);
    let s = new Q(eo(t));
    return t.decodeAudioData(Hr.buffer.slice(0)).then((u) => {
      s.buf = u;
    }).catch((u) => {
      console.error("Failed to load burp: ", u);
    }), { ctx: t, masterNode: r, burpSnd: s };
  })(), k = { urlPrefix: "", sprites: new je(), fonts: new je(), bitmapFonts: new je(), sounds: new je(), shaders: new je(), custom: new je(), packer: new At(q, Xr, Jr), loaded: false };
  function pe(t) {
    return typeof t != "string" || jn(t) ? t : k.urlPrefix + t;
  }
  i(pe, "fixURL");
  let C = { events: new Ne(), objEvents: new Ne(), root: Un([]), gravity: 0, scenes: {}, logs: [], cam: { pos: null, scale: new v(1), angle: 0, shake: 0, transform: new Ue() } };
  C.root.use(An());
  function Ae(t) {
    return k.custom.add(null, t);
  }
  i(Ae, "load");
  function $() {
    let t = [k.sprites, k.sounds, k.shaders, k.fonts, k.bitmapFonts, k.custom];
    return t.reduce((r, s) => r + s.progress(), 0) / t.length;
  }
  i($, "loadProgress");
  function Te(t) {
    return t !== void 0 && (k.urlPrefix = t), k.urlPrefix;
  }
  i(Te, "loadRoot");
  function ye(t, r) {
    return k.custom.add(t, Et(r));
  }
  i(ye, "loadJSON");
  class Se {
    static {
      i(this, "FontData");
    }
    fontface;
    filter = Wn;
    outline = null;
    size = rn;
    constructor(r, s = {}) {
      if (this.fontface = r, this.filter = s.filter ?? Wn, this.size = s.size ?? rn, this.size > sn)
        throw new Error(`Max font size: ${sn}`);
      s.outline && (this.outline = { width: 1, color: J(0, 0, 0) }, typeof s.outline == "number" ? this.outline.width = s.outline : typeof s.outline == "object" && (s.outline.width && (this.outline.width = s.outline.width), s.outline.color && (this.outline.color = s.outline.color)));
    }
  }
  function st(t, r, s = {}) {
    let u = new FontFace(t, typeof r == "string" ? `url(${r})` : r);
    return document.fonts.add(u), k.fonts.add(t, u.load().catch((a) => {
      throw new Error(`Failed to load font from "${r}": ${a}`);
    }).then((a) => new Se(a, s)));
  }
  i(st, "loadFont");
  function on(t, r, s, u, a = {}) {
    return k.bitmapFonts.add(t, St(r).then((h) => bn(Re.fromImage(q, h, a), s, u, a.chars ?? zr)));
  }
  i(on, "loadBitmapFont");
  function Tt(t = 1, r = 1, s = 0, u = 0, a = 1, h = 1) {
    let f = [], b = a / t, p = h / r;
    for (let d = 0; d < r; d++)
      for (let w = 0; w < t; w++)
        f.push(new oe(s + w * b, u + d * p, b, p));
    return f;
  }
  i(Tt, "slice");
  function Ot(t, r) {
    return t = pe(t), Ae(typeof r == "string" ? new Promise((s, u) => {
      Et(r).then((a) => {
        Ot(t, a).then(s).catch(u);
      });
    }) : K.from(t).then((s) => {
      let u = {};
      for (let a in r) {
        let h = r[a], f = s.frames[0], b = Xr * f.w, p = Jr * f.h, d = h.frames ? h.frames.map((A) => new oe(f.x + (h.x + A.x) / b * f.w, f.y + (h.y + A.y) / p * f.h, A.w / b * f.w, A.h / p * f.h)) : Tt(h.sliceX || 1, h.sliceY || 1, f.x + h.x / b * f.w, f.y + h.y / p * f.h, h.width / b * f.w, h.height / p * f.h), w = new K(s.tex, d, h.anims);
        k.sprites.addLoaded(a, w), u[a] = w;
      }
      return u;
    }));
  }
  i(Ot, "loadSpriteAtlas");
  function Rt(t, r = {}) {
    let s = document.createElement("canvas"), u = t[0].width, a = t[0].height;
    s.width = u * t.length, s.height = a;
    let h = s.getContext("2d");
    t.forEach((b, p) => {
      b instanceof ImageData ? h.putImageData(b, p * u, 0) : h.drawImage(b, p * u, 0);
    });
    let f = h.getImageData(0, 0, t.length * u, a);
    return K.fromImage(f, { ...r, sliceX: t.length, sliceY: 1 });
  }
  i(Rt, "createSpriteSheet");
  function Ye(t, r, s = { sliceX: 1, sliceY: 1, anims: {} }) {
    return r = pe(r), Array.isArray(r) ? r.some((u) => typeof u == "string") ? k.sprites.add(t, Promise.all(r.map((u) => typeof u == "string" ? St(u) : Promise.resolve(u))).then((u) => Rt(u, s))) : k.sprites.addLoaded(t, Rt(r, s)) : typeof r == "string" ? k.sprites.add(t, K.from(r, s)) : k.sprites.addLoaded(t, K.fromImage(r, s));
  }
  i(Ye, "loadSprite");
  function an(t, r) {
    return r = pe(r), k.sprites.add(t, new Promise(async (s) => {
      let u = typeof r == "string" ? await Et(r) : r, a = await Promise.all(u.frames.map(St)), h = document.createElement("canvas");
      h.width = u.width, h.height = u.height * u.frames.length;
      let f = h.getContext("2d");
      a.forEach((p, d) => {
        f.drawImage(p, 0, d * u.height);
      });
      let b = await Ye(null, h, { sliceY: u.frames.length, anims: u.anims });
      s(b);
    }));
  }
  i(an, "loadPedit");
  function un(t, r, s) {
    r = pe(r), s = pe(s), typeof r == "string" && !s && (s = Mr(r) + ".json");
    let u = typeof s == "string" ? Et(s) : Promise.resolve(s);
    return k.sprites.add(t, u.then((a) => {
      let h = a.meta.size, f = a.frames.map((p) => new oe(p.frame.x / h.w, p.frame.y / h.h, p.frame.w / h.w, p.frame.h / h.h)), b = {};
      for (let p of a.meta.frameTags)
        p.from === p.to ? b[p.name] = p.from : b[p.name] = { from: p.from, to: p.to, speed: 10, loop: true, pingpong: p.direction === "pingpong" };
      return K.from(r, { frames: f, anims: b });
    }));
  }
  i(un, "loadAseprite");
  function cn(t, r, s) {
    return k.shaders.addLoaded(t, ht(r, s));
  }
  i(cn, "loadShader");
  function hn(t, r, s) {
    r = pe(r), s = pe(s);
    let u = i((h) => h ? Lr(h) : Promise.resolve(null), "resolveUrl"), a = Promise.all([u(r), u(s)]).then(([h, f]) => ht(h, f));
    return k.shaders.add(t, a);
  }
  i(hn, "loadShaderURL");
  function ln(t, r) {
    return r = pe(r), k.sounds.add(t, typeof r == "string" ? Q.fromURL(r) : Q.fromArrayBuffer(r));
  }
  i(ln, "loadSound");
  function dn(t = "bean") {
    return Ye(t, jr);
  }
  i(dn, "loadBean");
  function Pt(t) {
    return k.sprites.get(t);
  }
  i(Pt, "getSprite");
  function Dt(t) {
    return k.sounds.get(t);
  }
  i(Dt, "getSound");
  function Mt(t) {
    return k.fonts.get(t);
  }
  i(Mt, "getFont");
  function Gt(t) {
    return k.bitmapFonts.get(t);
  }
  i(Gt, "getBitmapFont");
  function Bt(t) {
    return k.shaders.get(t);
  }
  i(Bt, "getShader");
  function fn(t) {
    return k.custom.get(t);
  }
  i(fn, "getAsset");
  function ct(t) {
    if (typeof t == "string") {
      let r = Pt(t);
      if (r)
        return r;
      if ($() < 1)
        return null;
      throw new Error(`Sprite not found: ${t}`);
    } else {
      if (t instanceof K)
        return ve.loaded(t);
      if (t instanceof ve)
        return t;
      throw new Error(`Invalid sprite: ${t}`);
    }
  }
  i(ct, "resolveSprite");
  function mn(t) {
    if (typeof t == "string") {
      let r = Dt(t);
      if (r)
        return r;
      if ($() < 1)
        return null;
      throw new Error(`Sound not found: ${t}`);
    } else {
      if (t instanceof Q)
        return ve.loaded(t);
      if (t instanceof ve)
        return t;
      throw new Error(`Invalid sound: ${t}`);
    }
  }
  i(mn, "resolveSound");
  function pn(t) {
    if (!t)
      return E.defShader;
    if (typeof t == "string") {
      let r = Bt(t);
      if (r)
        return r.data ?? r;
      if ($() < 1)
        return null;
      throw new Error(`Shader not found: ${t}`);
    } else if (t instanceof ve)
      return t.data ? t.data : t;
    return t;
  }
  i(pn, "resolveShader");
  function Ft(t) {
    if (!t)
      return Ft(n13.font ?? Ni);
    if (typeof t == "string") {
      let r = Gt(t), s = Mt(t);
      if (r)
        return r.data ?? r;
      if (s)
        return s.data ?? s;
      if (document.fonts.check(`${rn}px ${t}`))
        return t;
      if ($() < 1)
        return null;
      throw new Error(`Font not found: ${t}`);
    } else if (t instanceof ve)
      return t.data ? t.data : t;
    return t;
  }
  i(Ft, "resolveFont");
  function gn(t) {
    return t !== void 0 && (te.masterNode.gain.value = t), te.masterNode.gain.value;
  }
  i(gn, "volume");
  function It(t, r = {}) {
    let s = te.ctx, u = r.paused ?? false, a = s.createBufferSource(), h = new be(), f = s.createGain(), b = r.seek ?? 0, p = 0, d = 0, w = false;
    a.loop = !!r.loop, a.detune.value = r.detune ?? 0, a.playbackRate.value = r.speed ?? 1, a.connect(f), a.onended = () => {
      N() >= a.buffer?.duration && h.trigger();
    }, f.connect(te.masterNode), f.gain.value = r.volume ?? 1;
    let A = i((M) => {
      a.buffer = M.buf, u || (p = s.currentTime, a.start(0, b), w = true);
    }, "start"), D = mn(t);
    D instanceof ve && D.onLoad(A);
    let N = i(() => {
      if (!a.buffer)
        return 0;
      let M = u ? d - p : s.currentTime - p, O = a.buffer.duration;
      return a.loop ? M % O : Math.min(M, O);
    }, "getTime"), _ = i((M) => {
      let O = s.createBufferSource();
      return O.buffer = M.buffer, O.loop = M.loop, O.playbackRate.value = M.playbackRate.value, O.detune.value = M.detune.value, O.onended = M.onended, O.connect(f), O;
    }, "cloneNode");
    return { stop() {
      this.paused = true, this.seek(0);
    }, set paused(M) {
      if (u !== M)
        if (u = M, M)
          w && (a.stop(), w = false), d = s.currentTime;
        else {
          a = _(a);
          let O = d - p;
          a.start(0, O), w = true, p = s.currentTime - O, d = 0;
        }
    }, get paused() {
      return u;
    }, play(M = 0) {
      this.seek(M), this.paused = false;
    }, seek(M) {
      a.buffer?.duration && (M > a.buffer.duration || (u ? (a = _(a), p = d - M) : (a.stop(), a = _(a), p = s.currentTime - M, a.start(0, M), w = true, d = 0)));
    }, set speed(M) {
      a.playbackRate.value = M;
    }, get speed() {
      return a.playbackRate.value;
    }, set detune(M) {
      a.detune.value = M;
    }, get detune() {
      return a.detune.value;
    }, set volume(M) {
      f.gain.value = Math.max(M, 0);
    }, get volume() {
      return f.gain.value;
    }, set loop(M) {
      a.loop = M;
    }, get loop() {
      return a.loop;
    }, duration() {
      return a.buffer?.duration ?? 0;
    }, time() {
      return N() % this.duration();
    }, onEnd(M) {
      return h.add(M);
    }, then(M) {
      return this.onEnd(M);
    } };
  }
  i(It, "play");
  function Lt(t) {
    return It(te.burpSnd, t);
  }
  i(Lt, "burp");
  function wn(t, r) {
    return new rt(q, t, r);
  }
  i(wn, "makeCanvas");
  function ht(t = Xn, r = Jn) {
    let s = Wi.replace("{{user}}", t ?? Xn), u = Xi.replace("{{user}}", r ?? Jn);
    try {
      return new Jt(q, s, u, Qn.map((a) => a.name));
    } catch (a) {
      let f = /(?<type>^\w+) SHADER ERROR: 0:(?<line>\d+): (?<msg>.+)/, b = Br(a).match(f), p = Number(b.groups.line) - 14, d = b.groups.msg.trim(), w = b.groups.type.toLowerCase();
      throw new Error(`${w} shader line ${p}: ${d}`);
    }
  }
  i(ht, "makeShader");
  function bn(t, r, s, u) {
    let a = t.width / r, h = {}, f = u.split("").entries();
    for (let [b, p] of f)
      h[p] = new oe(b % a * r, Math.floor(b / a) * s, r, s);
    return { tex: t, map: h, size: s };
  }
  i(bn, "makeFont");
  function lt(t, r, s, u = E.defTex, a = E.defShader, h = {}) {
    let f = pn(a);
    if (!f || f instanceof ve)
      return;
    let b = E.fixed || s ? E.transform : C.cam.transform.mult(E.transform), p = [];
    for (let d of t) {
      let w = vn(b.multVec2(d.pos));
      p.push(w.x, w.y, d.uv.x, d.uv.y, d.color.r / 255, d.color.g / 255, d.color.b / 255, d.opacity);
    }
    E.renderer.push(S.TRIANGLES, p, r, f, u, h);
  }
  i(lt, "drawRaw");
  function Pe() {
    E.renderer.flush();
  }
  i(Pe, "flush");
  function dt() {
    S.clear(S.COLOR_BUFFER_BIT), E.frameBuffer.bind(), S.clear(S.COLOR_BUFFER_BIT), E.bgColor || Ce(() => {
      Be({ width: we(), height: xe(), quad: new oe(0, 0, we() / Kr, xe() / Kr), tex: E.bgTex, fixed: true });
    }), E.renderer.numDraws = 0, E.fixed = false, E.transformStack.length = 0, E.transform = new Ue();
  }
  i(dt, "frameStart");
  function Vt(t, r) {
    E.postShader = t, E.postShaderUniform = r ?? null;
  }
  i(Vt, "usePostEffect");
  function ft() {
    Pe(), E.lastDrawCalls = E.renderer.numDraws, E.frameBuffer.unbind(), S.viewport(0, 0, S.drawingBufferWidth, S.drawingBufferHeight);
    let t = E.width, r = E.height;
    E.width = S.drawingBufferWidth / P, E.height = S.drawingBufferHeight / P, We({ flipY: true, tex: E.frameBuffer.tex, pos: new v(E.viewport.x, E.viewport.y), width: E.viewport.width, height: E.viewport.height, shader: E.postShader, uniform: typeof E.postShaderUniform == "function" ? E.postShaderUniform() : E.postShaderUniform, fixed: true }), Pe(), E.width = t, E.height = r;
  }
  i(ft, "frameEnd");
  function vn(t) {
    return new v(t.x / we() * 2 - 1, -t.y / xe() * 2 + 1);
  }
  i(vn, "screen2ndc");
  function _t(t) {
    E.transform = t.clone();
  }
  i(_t, "pushMatrix");
  function ne(...t) {
    if (t[0] === void 0)
      return;
    let r = T(...t);
    r.x === 0 && r.y === 0 || E.transform.translate(r);
  }
  i(ne, "pushTranslate");
  function He(...t) {
    if (t[0] === void 0)
      return;
    let r = T(...t);
    r.x === 1 && r.y === 1 || E.transform.scale(r);
  }
  i(He, "pushScale");
  function se(t) {
    t && E.transform.rotate(t);
  }
  i(se, "pushRotate");
  function le() {
    E.transformStack.push(E.transform.clone());
  }
  i(le, "pushTransform");
  function ae() {
    E.transformStack.length > 0 && (E.transform = E.transformStack.pop());
  }
  i(ae, "popTransform");
  function Be(t) {
    if (t.width === void 0 || t.height === void 0)
      throw new Error('drawUVQuad() requires property "width" and "height".');
    if (t.width <= 0 || t.height <= 0)
      return;
    let r = t.width, s = t.height, a = ut(t.anchor || tn).scale(new v(r, s).scale(-0.5)), h = t.quad || new oe(0, 0, 1, 1), f = t.color || J(255, 255, 255), b = t.opacity ?? 1, p = t.tex ? Qr / t.tex.width : 0, d = t.tex ? Qr / t.tex.height : 0, w = h.x + p, A = h.y + d, D = h.w - p * 2, N = h.h - d * 2;
    le(), ne(t.pos), se(t.angle), He(t.scale), ne(a), lt([{ pos: new v(-r / 2, s / 2), uv: new v(t.flipX ? w + D : w, t.flipY ? A : A + N), color: f, opacity: b }, { pos: new v(-r / 2, -s / 2), uv: new v(t.flipX ? w + D : w, t.flipY ? A + N : A), color: f, opacity: b }, { pos: new v(r / 2, -s / 2), uv: new v(t.flipX ? w : w + D, t.flipY ? A + N : A), color: f, opacity: b }, { pos: new v(r / 2, s / 2), uv: new v(t.flipX ? w : w + D, t.flipY ? A : A + N), color: f, opacity: b }], [0, 1, 3, 1, 2, 3], t.fixed, t.tex, t.shader, t.uniform), ae();
  }
  i(Be, "drawUVQuad");
  function We(t) {
    if (!t.tex)
      throw new Error('drawTexture() requires property "tex".');
    let r = t.quad ?? new oe(0, 0, 1, 1), s = t.tex.width * r.w, u = t.tex.height * r.h, a = new v(1);
    if (t.tiled) {
      let h = Math.ceil((t.width || s) / s), f = Math.ceil((t.height || u) / u), p = ut(t.anchor || tn).add(new v(1, 1)).scale(0.5).scale(h * s, f * u);
      for (let d = 0; d < h; d++)
        for (let w = 0; w < f; w++)
          Be(Object.assign({}, t, { pos: (t.pos || new v(0)).add(new v(s * d, u * w)).sub(p), scale: a.scale(t.scale || new v(1)), tex: t.tex, quad: r, width: s, height: u, anchor: "topleft" }));
    } else
      t.width && t.height ? (a.x = t.width / s, a.y = t.height / u) : t.width ? (a.x = t.width / s, a.y = a.x) : t.height && (a.y = t.height / u, a.x = a.y), Be(Object.assign({}, t, { scale: a.scale(t.scale || new v(1)), tex: t.tex, quad: r, width: s, height: u }));
  }
  i(We, "drawTexture");
  function yn(t) {
    if (!t.sprite)
      throw new Error('drawSprite() requires property "sprite"');
    let r = ct(t.sprite);
    if (!r || !r.data)
      return;
    let s = r.data.frames[t.frame ?? 0];
    if (!s)
      throw new Error(`Frame not found: ${t.frame ?? 0}`);
    We(Object.assign({}, t, { tex: r.data.tex, quad: s.scale(t.quad ?? new oe(0, 0, 1, 1)) }));
  }
  i(yn, "drawSprite");
  function qe(t, r, s, u, a, h = 1) {
    u = Ge(u % 360), a = Ge(a % 360), a <= u && (a += Math.PI * 2);
    let f = [], b = Math.ceil((a - u) / Ge(8) * h), p = (a - u) / b;
    for (let d = u; d < a; d += p)
      f.push(t.add(r * Math.cos(d), s * Math.sin(d)));
    return f.push(t.add(r * Math.cos(a), s * Math.sin(a))), f;
  }
  i(qe, "getArcPts");
  function ge(t) {
    if (t.width === void 0 || t.height === void 0)
      throw new Error('drawRect() requires property "width" and "height".');
    if (t.width <= 0 || t.height <= 0)
      return;
    let r = t.width, s = t.height, a = ut(t.anchor || tn).add(1, 1).scale(new v(r, s).scale(-0.5)), h = [new v(0, 0), new v(r, 0), new v(r, s), new v(0, s)];
    if (t.radius) {
      let f = Math.min(Math.min(r, s) / 2, t.radius);
      h = [new v(f, 0), new v(r - f, 0), ...qe(new v(r - f, f), f, f, 270, 360), new v(r, f), new v(r, s - f), ...qe(new v(r - f, s - f), f, f, 0, 90), new v(r - f, s), new v(f, s), ...qe(new v(f, s - f), f, f, 90, 180), new v(0, s - f), new v(0, f), ...qe(new v(f, f), f, f, 180, 270)];
    }
    z(Object.assign({}, t, { offset: a, pts: h, ...t.gradient ? { colors: t.horizontal ? [t.gradient[0], t.gradient[1], t.gradient[1], t.gradient[0]] : [t.gradient[0], t.gradient[0], t.gradient[1], t.gradient[1]] } : {} }));
  }
  i(ge, "drawRect");
  function l(t) {
    let { p1: r, p2: s } = t;
    if (!r || !s)
      throw new Error('drawLine() requires properties "p1" and "p2".');
    let u = t.width || 1, a = s.sub(r).unit().normal().scale(u * 0.5), h = [r.sub(a), r.add(a), s.add(a), s.sub(a)].map((f) => ({ pos: new v(f.x, f.y), uv: new v(0), color: t.color ?? W.WHITE, opacity: t.opacity ?? 1 }));
    lt(h, [0, 1, 3, 1, 2, 3], t.fixed, E.defTex, t.shader, t.uniform);
  }
  i(l, "drawLine");
  function x(t) {
    let r = t.pts;
    if (!r)
      throw new Error('drawLines() requires property "pts".');
    if (!(r.length < 2))
      if (t.radius && r.length >= 3) {
        let s = r[0].sdist(r[1]);
        for (let a = 1; a < r.length - 1; a++)
          s = Math.min(r[a].sdist(r[a + 1]), s);
        let u = Math.min(t.radius, Math.sqrt(s) / 2);
        l(Object.assign({}, t, { p1: r[0], p2: r[1] }));
        for (let a = 1; a < r.length - 2; a++) {
          let h = r[a], f = r[a + 1];
          l(Object.assign({}, t, { p1: h, p2: f }));
        }
        l(Object.assign({}, t, { p1: r[r.length - 2], p2: r[r.length - 1] }));
      } else
        for (let s = 0; s < r.length - 1; s++)
          l(Object.assign({}, t, { p1: r[s], p2: r[s + 1] })), t.join !== "none" && L(Object.assign({}, t, { pos: r[s], radius: t.width / 2 }));
  }
  i(x, "drawLines");
  function R(t) {
    if (!t.p1 || !t.p2 || !t.p3)
      throw new Error('drawTriangle() requires properties "p1", "p2" and "p3".');
    return z(Object.assign({}, t, { pts: [t.p1, t.p2, t.p3] }));
  }
  i(R, "drawTriangle");
  function L(t) {
    if (typeof t.radius != "number")
      throw new Error('drawCircle() requires property "radius".');
    t.radius !== 0 && he(Object.assign({}, t, { radiusX: t.radius, radiusY: t.radius, angle: 0 }));
  }
  i(L, "drawCircle");
  function he(t) {
    if (t.radiusX === void 0 || t.radiusY === void 0)
      throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
    if (t.radiusX === 0 || t.radiusY === 0)
      return;
    let r = t.start ?? 0, s = t.end ?? 360, u = ut(t.anchor ?? "center").scale(new v(-t.radiusX, -t.radiusY)), a = qe(u, t.radiusX, t.radiusY, r, s, t.resolution);
    a.unshift(u);
    let h = Object.assign({}, t, { pts: a, radius: 0, ...t.gradient ? { colors: [t.gradient[0], ...Array(a.length - 1).fill(t.gradient[1])] } : {} });
    if (s - r >= 360 && t.outline) {
      t.fill !== false && z(Object.assign(h, { outline: null })), z(Object.assign(h, { pts: a.slice(1), fill: false }));
      return;
    }
    z(h);
  }
  i(he, "drawEllipse");
  function z(t) {
    if (!t.pts)
      throw new Error('drawPolygon() requires property "pts".');
    let r = t.pts.length;
    if (!(r < 3)) {
      if (le(), ne(t.pos), He(t.scale), se(t.angle), ne(t.offset), t.fill !== false) {
        let s = t.color ?? W.WHITE, u = t.pts.map((h, f) => ({ pos: new v(h.x, h.y), uv: new v(0, 0), color: t.colors && t.colors[f] ? t.colors[f].mult(s) : s, opacity: t.opacity ?? 1 })), a = [...Array(r - 2).keys()].map((h) => [0, h + 1, h + 2]).flat();
        lt(u, t.indices ?? a, t.fixed, E.defTex, t.shader, t.uniform);
      }
      t.outline && x({ pts: [...t.pts, t.pts[0]], radius: t.radius, width: t.outline.width, color: t.outline.color, join: t.outline.join, uniform: t.uniform, fixed: t.fixed, opacity: t.opacity }), ae();
    }
  }
  i(z, "drawPolygon");
  function Oe(t, r, s) {
    Pe(), S.clear(S.STENCIL_BUFFER_BIT), S.enable(S.STENCIL_TEST), S.stencilFunc(S.NEVER, 1, 255), S.stencilOp(S.REPLACE, S.REPLACE, S.REPLACE), r(), Pe(), S.stencilFunc(s, 1, 255), S.stencilOp(S.KEEP, S.KEEP, S.KEEP), t(), Pe(), S.disable(S.STENCIL_TEST);
  }
  i(Oe, "drawStenciled");
  function $e(t, r) {
    Oe(t, r, S.EQUAL);
  }
  i($e, "drawMasked");
  function kt(t, r) {
    Oe(t, r, S.NOTEQUAL);
  }
  i(kt, "drawSubtracted");
  function De() {
    return (E.viewport.width + E.viewport.height) / (E.width + E.height);
  }
  i(De, "getViewportScale");
  function Ce(t) {
    Pe();
    let r = E.width, s = E.height;
    E.width = E.viewport.width, E.height = E.viewport.height, t(), Pe(), E.width = r, E.height = s;
  }
  i(Ce, "drawUnscaled");
  function Zn(t, r) {
    r.pos && (t.pos = t.pos.add(r.pos)), r.scale && (t.scale = t.scale.scale(T(r.scale))), r.angle && (t.angle += r.angle), r.color && t.ch.length === 1 && (t.color = t.color.mult(r.color)), r.opacity && (t.opacity *= r.opacity);
  }
  i(Zn, "applyCharTransform");
  let er = /\[(?<style>\w+)\](?<text>.*?)\[\/\k<style>\]/g;
  function es(t) {
    let r = {}, s = t.replace(er, "$2"), u = 0;
    for (let a of t.matchAll(er)) {
      let h = a.index - u;
      for (let f = 0; f < a.groups.text.length; f++)
        r[f + h] = [a.groups.style];
      u += a[0].length - a.groups.text.length;
    }
    return { charStyleMap: r, text: s };
  }
  i(es, "compileStyledText");
  let xn = {};
  function Xe(t) {
    if (t.text === void 0)
      throw new Error('formatText() requires property "text".');
    let r = Ft(t.font);
    if (t.text === "" || r instanceof ve || !r)
      return { width: 0, height: 0, chars: [], opt: t };
    let { charStyleMap: s, text: u } = es(t.text + ""), a = Fr(u);
    if (r instanceof Se || typeof r == "string") {
      let Z = r instanceof Se ? r.fontface.family : r, H = r instanceof Se ? { outline: r.outline, filter: r.filter } : { outline: null, filter: Wn }, V = xn[Z] ?? { font: { tex: new Re(q, Yr, Wr, { filter: H.filter }), map: {}, size: rn }, cursor: new v(0), outline: H.outline };
      xn[Z] || (xn[Z] = V), r = V.font;
      for (let fe of a)
        if (!V.font.map[fe]) {
          let U = j;
          U.clearRect(0, 0, I.width, I.height), U.font = `${r.size}px ${Z}`, U.textBaseline = "top", U.textAlign = "left", U.fillStyle = "#ffffff";
          let G = U.measureText(fe), B = Math.ceil(G.width), F = r.size;
          V.outline && (U.lineJoin = "round", U.lineWidth = V.outline.width * 2, U.strokeStyle = V.outline.color.toHex(), U.strokeText(fe, V.outline.width, V.outline.width), B += V.outline.width * 2, F += V.outline.width * 3), U.fillText(fe, V.outline?.width ?? 0, V.outline?.width ?? 0);
          let Y = U.getImageData(0, 0, B, F);
          if (V.cursor.x + B > Yr && (V.cursor.x = 0, V.cursor.y += F, V.cursor.y > Wr))
            throw new Error("Font atlas exceeds character limit");
          r.tex.update(Y, V.cursor.x, V.cursor.y), r.map[fe] = new oe(V.cursor.x, V.cursor.y, B, F), V.cursor.x += B;
        }
    }
    let h = t.size || r.size, f = T(t.scale ?? 1).scale(h / r.size), b = t.lineSpacing ?? 0, p = t.letterSpacing ?? 0, d = 0, w = 0, A = 0, D = [], N = [], _ = 0, M = null, O = null;
    for (; _ < a.length; ) {
      let Z = a[_];
      if (Z === `
`)
        A += h + b, D.push({ width: d - p, chars: N }), M = null, O = null, d = 0, N = [];
      else {
        let H = r.map[Z];
        if (H) {
          let V = H.w * f.x;
          t.width && d + V > t.width && (A += h + b, M != null && (_ -= N.length - M, Z = a[_], H = r.map[Z], V = H.w * f.x, N = N.slice(0, M - 1), d = O), M = null, O = null, D.push({ width: d - p, chars: N }), d = 0, N = []), N.push({ tex: r.tex, width: H.w, height: H.h, quad: new oe(H.x / r.tex.width, H.y / r.tex.height, H.w / r.tex.width, H.h / r.tex.height), ch: Z, pos: new v(d, A), opacity: t.opacity ?? 1, color: t.color ?? W.WHITE, scale: T(f), angle: 0 }), Z === " " && (M = N.length, O = d), d += V, w = Math.max(w, d), d += p;
        }
      }
      _++;
    }
    D.push({ width: d - p, chars: N }), A += h, t.width && (w = t.width);
    let ie = [];
    for (let Z of D) {
      let H = (w - Z.width) * Zi(t.align ?? "left");
      for (let V of Z.chars) {
        let fe = r.map[V.ch], U = ie.length;
        if (V.pos = V.pos.add(H, 0).add(fe.w * f.x * 0.5, fe.h * f.y * 0.5), t.transform) {
          let G = typeof t.transform == "function" ? t.transform(U, V.ch) : t.transform;
          G && Zn(V, G);
        }
        if (s[U]) {
          let G = s[U];
          for (let B of G) {
            let F = t.styles[B], Y = typeof F == "function" ? F(U, V.ch) : F;
            Y && Zn(V, Y);
          }
        }
        ie.push(V);
      }
    }
    return { width: w, height: A, chars: ie, opt: t };
  }
  i(Xe, "formatText");
  function tr(t) {
    Je(Xe(t));
  }
  i(tr, "drawText");
  function Je(t) {
    le(), ne(t.opt.pos), se(t.opt.angle), ne(ut(t.opt.anchor ?? "topleft").add(1, 1).scale(t.width, t.height).scale(-0.5)), t.chars.forEach((r) => {
      Be({ tex: r.tex, width: r.width, height: r.height, pos: r.pos, scale: r.scale, angle: r.angle, color: r.color, opacity: r.opacity, quad: r.quad, anchor: "center", uniform: t.opt.uniform, shader: t.opt.shader, fixed: t.opt.fixed });
    }), ae();
  }
  i(Je, "drawFormattedText");
  function we() {
    return E.width;
  }
  i(we, "width");
  function xe() {
    return E.height;
  }
  i(xe, "height");
  function ts(t) {
    return new v((t.x - E.viewport.x) * we() / E.viewport.width, (t.y - E.viewport.y) * xe() / E.viewport.height);
  }
  i(ts, "windowToContent");
  function ns(t) {
    return new v(t.x * E.viewport.width / E.width, t.y * E.viewport.height / E.height);
  }
  i(ns, "contentToView");
  function Nt() {
    return ts(y.mousePos());
  }
  i(Nt, "mousePos");
  let nr = false, re = { inspect: false, timeScale: 1, showLog: true, fps: () => y.fps(), numFrames: () => y.numFrames(), stepFrame: dr, drawCalls: () => E.lastDrawCalls, clearLog: () => C.logs = [], log: (t) => {
    let r = n13.logMax ?? qi;
    C.logs.unshift({ msg: t, time: y.time() }), C.logs.length > r && (C.logs = C.logs.slice(0, r));
  }, error: (t) => re.log(new Error(t.toString ? t.toString() : t)), curRecording: null, numObjects: () => On("*", { recursive: true }).length, get paused() {
    return nr;
  }, set paused(t) {
    nr = t, t ? te.ctx.suspend() : te.ctx.resume();
  } };
  function Me() {
    return y.dt() * re.timeScale;
  }
  i(Me, "dt");
  function rs(...t) {
    return t.length > 0 && (C.cam.pos = T(...t)), C.cam.pos ? C.cam.pos.clone() : zt();
  }
  i(rs, "camPos");
  function ss(...t) {
    return t.length > 0 && (C.cam.scale = T(...t)), C.cam.scale.clone();
  }
  i(ss, "camScale");
  function is(t) {
    return t !== void 0 && (C.cam.angle = t), C.cam.angle;
  }
  i(is, "camRot");
  function os(t = 12) {
    C.cam.shake += t;
  }
  i(os, "shake");
  function rr(t) {
    return C.cam.transform.multVec2(t);
  }
  i(rr, "toScreen");
  function sr(t) {
    return C.cam.transform.invert().multVec2(t);
  }
  i(sr, "toWorld");
  function jt(t) {
    let r = new Ue();
    return t.pos && r.translate(t.pos), t.scale && r.scale(t.scale), t.angle && r.rotate(t.angle), t.parent ? r.mult(t.parent.transform) : r;
  }
  i(jt, "calcTransform");
  function Un(t = []) {
    let r = /* @__PURE__ */ new Map(), s = {}, u = new Ne(), a = [], h = null, f = false, b = { id: Gr(), hidden: false, transform: new Ue(), children: [], parent: null, set paused(d) {
      if (d !== f) {
        f = d;
        for (let w of a)
          w.paused = d;
      }
    }, get paused() {
      return f;
    }, add(d = []) {
      let w = Array.isArray(d) ? Un(d) : d;
      if (w.parent)
        throw new Error("Cannot add a game obj that already has a parent.");
      return w.parent = this, w.transform = jt(w), this.children.push(w), w.trigger("add", w), C.events.trigger("add", w), w;
    }, readd(d) {
      let w = this.children.indexOf(d);
      return w !== -1 && (this.children.splice(w, 1), this.children.push(d)), d;
    }, remove(d) {
      let w = this.children.indexOf(d);
      if (w !== -1) {
        d.parent = null, this.children.splice(w, 1);
        let A = i((D) => {
          D.trigger("destroy"), C.events.trigger("destroy", D), D.children.forEach((N) => A(N));
        }, "trigger");
        A(d);
      }
    }, removeAll(d) {
      if (d)
        this.get(d).forEach((w) => this.remove(w));
      else
        for (let w of [...this.children])
          this.remove(w);
    }, update() {
      this.paused || (this.children.sort((d, w) => (d.z ?? 0) - (w.z ?? 0)).forEach((d) => d.update()), this.trigger("update"));
    }, draw() {
      if (this.hidden)
        return;
      this.canvas && this.canvas.bind();
      let d = E.fixed;
      this.fixed && (E.fixed = true), le(), ne(this.pos), He(this.scale), se(this.angle);
      let w = this.children.sort((A, D) => (A.z ?? 0) - (D.z ?? 0));
      if (this.mask) {
        let A = { intersect: $e, subtract: kt }[this.mask];
        if (!A)
          throw new Error(`Invalid mask func: "${this.mask}"`);
        A(() => {
          w.forEach((D) => D.draw());
        }, () => {
          this.trigger("draw");
        });
      } else
        this.trigger("draw"), w.forEach((A) => A.draw());
      ae(), E.fixed = d, this.canvas && this.canvas.unbind();
    }, drawInspect() {
      this.hidden || (le(), ne(this.pos), He(this.scale), se(this.angle), this.children.sort((d, w) => (d.z ?? 0) - (w.z ?? 0)).forEach((d) => d.drawInspect()), this.trigger("drawInspect"), ae());
    }, use(d) {
      if (!d)
        return;
      if (typeof d == "string")
        return this.use({ id: d });
      let w = [];
      d.id && (this.unuse(d.id), s[d.id] = [], w = s[d.id], r.set(d.id, d));
      for (let D in d) {
        if (Ji.has(D))
          continue;
        let N = Object.getOwnPropertyDescriptor(d, D);
        if (typeof N.value == "function" && (d[D] = d[D].bind(this)), N.set && Object.defineProperty(d, D, { set: N.set.bind(this) }), N.get && Object.defineProperty(d, D, { get: N.get.bind(this) }), Qi.has(D)) {
          let _ = D === "add" ? () => {
            h = i((M) => w.push(M), "onCurCompCleanup"), d[D](), h = null;
          } : d[D];
          w.push(this.on(D, _).cancel);
        } else if (this[D] === void 0)
          Object.defineProperty(this, D, { get: () => d[D], set: (_) => d[D] = _, configurable: true, enumerable: true }), w.push(() => delete this[D]);
        else
          throw new Error(`Duplicate component property: "${D}"`);
      }
      let A = i(() => {
        if (d.require) {
          for (let D of d.require)
            if (!this.c(D))
              throw new Error(`Component "${d.id}" requires component "${D}"`);
        }
      }, "checkDeps");
      d.destroy && w.push(d.destroy.bind(this)), this.exists() ? (A(), d.add && (h = i((D) => w.push(D), "onCurCompCleanup"), d.add.call(this), h = null)) : d.require && w.push(this.on("add", A).cancel);
    }, unuse(d) {
      s[d] && (s[d].forEach((w) => w()), delete s[d]), r.has(d) && r.delete(d);
    }, c(d) {
      return r.get(d);
    }, get(d, w = {}) {
      let A = w.recursive ? this.children.flatMap(i(function D(N) {
        return [N, ...N.children.flatMap(D)];
      }, "recurse")) : this.children;
      if (A = A.filter((D) => d ? D.is(d) : true), w.liveUpdate) {
        let D = i((_) => w.recursive ? this.isAncestorOf(_) : _.parent === this, "isChild"), N = [];
        N.push(En((_) => {
          D(_) && _.is(d) && A.push(_);
        })), N.push(ir((_) => {
          if (D(_) && _.is(d)) {
            let M = A.findIndex((O) => O.id === _.id);
            M !== -1 && A.splice(M, 1);
          }
        })), this.onDestroy(() => {
          for (let _ of N)
            _.cancel();
        });
      }
      return A;
    }, isAncestorOf(d) {
      return d.parent ? d.parent === this || this.isAncestorOf(d.parent) : false;
    }, exists() {
      return C.root.isAncestorOf(this);
    }, is(d) {
      if (d === "*")
        return true;
      if (Array.isArray(d)) {
        for (let w of d)
          if (!this.c(w))
            return false;
        return true;
      } else
        return this.c(d) != null;
    }, on(d, w) {
      let A = u.on(d, w.bind(this));
      return h && h(() => A.cancel()), A;
    }, trigger(d, ...w) {
      u.trigger(d, ...w), C.objEvents.trigger(d, this, ...w);
    }, destroy() {
      this.parent && this.parent.remove(this);
    }, inspect() {
      let d = {};
      for (let [w, A] of r)
        d[w] = A.inspect ? A.inspect() : null;
      return d;
    }, onAdd(d) {
      return this.on("add", d);
    }, onUpdate(d) {
      return this.on("update", d);
    }, onDraw(d) {
      return this.on("draw", d);
    }, onDestroy(d) {
      return this.on("destroy", d);
    }, clearEvents() {
      u.clear();
    } }, p = ["onKeyPress", "onKeyPressRepeat", "onKeyDown", "onKeyRelease", "onMousePress", "onMouseDown", "onMouseRelease", "onMouseMove", "onCharInput", "onMouseMove", "onTouchStart", "onTouchMove", "onTouchEnd", "onScroll", "onGamepadButtonPress", "onGamepadButtonDown", "onGamepadButtonRelease", "onGamepadStick"];
    for (let d of p)
      b[d] = (...w) => {
        let A = y[d](...w);
        return a.push(A), b.onDestroy(() => A.cancel()), A;
      };
    for (let d of t)
      b.use(d);
    return b;
  }
  i(Un, "make");
  function ze(t, r, s) {
    return C.objEvents[t] || (C.objEvents[t] = new Ut()), C.objEvents.on(t, (u, ...a) => {
      u.is(r) && s(u, ...a);
    });
  }
  i(ze, "on");
  let as = Ee((t) => {
    let r = gt([{ update: t }]);
    return { get paused() {
      return r.paused;
    }, set paused(s) {
      r.paused = s;
    }, cancel: () => r.destroy() };
  }, (t, r) => ze("update", t, r)), us = Ee((t) => {
    let r = gt([{ draw: t }]);
    return { get paused() {
      return r.hidden;
    }, set paused(s) {
      r.hidden = s;
    }, cancel: () => r.destroy() };
  }, (t, r) => ze("draw", t, r)), En = Ee((t) => C.events.on("add", t), (t, r) => ze("add", t, r)), ir = Ee((t) => C.events.on("destroy", t), (t, r) => ze("destroy", t, r));
  function cs(t, r, s) {
    return ze("collide", t, (u, a, h) => a.is(r) && s(u, a, h));
  }
  i(cs, "onCollide");
  function hs(t, r, s) {
    return ze("collideUpdate", t, (u, a, h) => a.is(r) && s(u, a, h));
  }
  i(hs, "onCollideUpdate");
  function ls(t, r, s) {
    return ze("collideEnd", t, (u, a, h) => a.is(r) && s(u, a, h));
  }
  i(ls, "onCollideEnd");
  function Ht(t, r) {
    On(t, { recursive: true }).forEach(r), En(t, r);
  }
  i(Ht, "forAllCurrentAndFuture");
  let ds = Ee((t) => y.onMousePress(t), (t, r) => {
    let s = [];
    return Ht(t, (u) => {
      if (!u.area)
        throw new Error("onClick() requires the object to have area() component");
      s.push(u.onClick(() => r(u)));
    }), ke.join(s);
  });
  function fs(t, r) {
    let s = [];
    return Ht(t, (u) => {
      if (!u.area)
        throw new Error("onHover() requires the object to have area() component");
      s.push(u.onHover(() => r(u)));
    }), ke.join(s);
  }
  i(fs, "onHover");
  function ms(t, r) {
    let s = [];
    return Ht(t, (u) => {
      if (!u.area)
        throw new Error("onHoverUpdate() requires the object to have area() component");
      s.push(u.onHoverUpdate(() => r(u)));
    }), ke.join(s);
  }
  i(ms, "onHoverUpdate");
  function ps(t, r) {
    let s = [];
    return Ht(t, (u) => {
      if (!u.area)
        throw new Error("onHoverEnd() requires the object to have area() component");
      s.push(u.onHoverEnd(() => r(u)));
    }), ke.join(s);
  }
  i(ps, "onHoverEnd");
  function gs(t) {
    C.gravity = t;
  }
  i(gs, "setGravity");
  function ws() {
    return C.gravity;
  }
  i(ws, "getGravity");
  function bs(...t) {
    t.length === 1 || t.length === 2 ? (E.bgColor = J(t[0]), t[1] && (E.bgAlpha = t[1])) : (t.length === 3 || t.length === 4) && (E.bgColor = J(t[0], t[1], t[2]), t[3] && (E.bgAlpha = t[3])), S.clearColor(E.bgColor.r / 255, E.bgColor.g / 255, E.bgColor.b / 255, E.bgAlpha);
  }
  i(bs, "setBackground");
  function vs() {
    return E.bgColor.clone();
  }
  i(vs, "getBackground");
  function qt(...t) {
    return { id: "pos", pos: T(...t), moveBy(...r) {
      this.pos = this.pos.add(T(...r));
    }, move(...r) {
      this.moveBy(T(...r).scale(Me()));
    }, moveTo(...r) {
      if (typeof r[0] == "number" && typeof r[1] == "number")
        return this.moveTo(T(r[0], r[1]), r[2]);
      let s = r[0], u = r[1];
      if (u === void 0) {
        this.pos = T(s);
        return;
      }
      let a = s.sub(this.pos);
      if (a.len() <= u * Me()) {
        this.pos = T(s);
        return;
      }
      this.move(a.unit().scale(u));
    }, worldPos() {
      return this.parent ? this.parent.transform.multVec2(this.pos) : this.pos;
    }, screenPos() {
      let r = this.worldPos();
      return pt(this) ? r : rr(r);
    }, inspect() {
      return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
    }, drawInspect() {
      L({ color: J(255, 0, 0), radius: 4 / De() });
    } };
  }
  i(qt, "pos");
  function $t(...t) {
    return t.length === 0 ? $t(1) : { id: "scale", scale: T(...t), scaleTo(...r) {
      this.scale = T(...r);
    }, scaleBy(...r) {
      this.scale.scale(T(...r));
    }, inspect() {
      return `(${mt(this.scale.x, 2)}, ${mt(this.scale.y, 2)})`;
    } };
  }
  i($t, "scale");
  function ys(t) {
    return { id: "rotate", angle: t ?? 0, rotateBy(r) {
      this.angle += r;
    }, rotateTo(r) {
      this.angle = r;
    }, inspect() {
      return `${Math.round(this.angle)}`;
    } };
  }
  i(ys, "rotate");
  function xs(...t) {
    return { id: "color", color: J(...t), inspect() {
      return this.color.toString();
    } };
  }
  i(xs, "color");
  function mt(t, r) {
    return Number(t.toFixed(r));
  }
  i(mt, "toFixed");
  function Us(t) {
    return { id: "opacity", opacity: t ?? 1, inspect() {
      return `${mt(this.opacity, 1)}`;
    }, fadeOut(r = 1, s = Ct.linear) {
      return Rn(this.opacity, 0, r, (u) => this.opacity = u, s);
    } };
  }
  i(Us, "opacity");
  function Sn(t) {
    if (!t)
      throw new Error("Please define an anchor");
    return { id: "anchor", anchor: t, inspect() {
      return typeof this.anchor == "string" ? this.anchor : this.anchor.toString();
    } };
  }
  i(Sn, "anchor");
  function Es(t) {
    return { id: "z", z: t, inspect() {
      return `${this.z}`;
    } };
  }
  i(Es, "z");
  function Ss(t, r) {
    return { id: "follow", require: ["pos"], follow: { obj: t, offset: r ?? T(0) }, add() {
      t.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
    }, update() {
      t.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
    } };
  }
  i(Ss, "follow");
  function Cs(t, r) {
    let s = typeof t == "number" ? v.fromAngle(t) : t.unit();
    return { id: "move", require: ["pos"], update() {
      this.move(s.scale(r));
    } };
  }
  i(Cs, "move");
  let As = 200;
  function Ts(t = {}) {
    let r = t.distance ?? As, s = false;
    return { id: "offscreen", require: ["pos"], isOffScreen() {
      let u = this.screenPos(), a = new de(T(0), we(), xe());
      return !vt(a, u) && a.sdistToPoint(u) > r * r;
    }, onExitScreen(u) {
      return this.on("exitView", u);
    }, onEnterScreen(u) {
      return this.on("enterView", u);
    }, update() {
      this.isOffScreen() ? (s || (this.trigger("exitView"), s = true), t.hide && (this.hidden = true), t.pause && (this.paused = true), t.destroy && this.destroy()) : (s && (this.trigger("enterView"), s = false), t.hide && (this.hidden = false), t.pause && (this.paused = false));
    } };
  }
  i(Ts, "offscreen");
  function pt(t) {
    return t.fixed ? true : t.parent ? pt(t.parent) : false;
  }
  i(pt, "isFixed");
  function Os(t = {}) {
    let r = {}, s = /* @__PURE__ */ new Set();
    return { id: "area", collisionIgnore: t.collisionIgnore ?? [], add() {
      this.area.cursor && this.onHover(() => y.setCursor(this.area.cursor)), this.onCollideUpdate((u, a) => {
        r[u.id] || this.trigger("collide", u, a), r[u.id] = a, s.add(u.id);
      });
    }, update() {
      for (let u in r)
        s.has(Number(u)) || (this.trigger("collideEnd", r[u].target), delete r[u]);
      s.clear();
    }, drawInspect() {
      let u = this.localArea();
      le(), He(this.area.scale), ne(this.area.offset);
      let a = { outline: { width: 4 / De(), color: J(0, 0, 255) }, anchor: this.anchor, fill: false, fixed: pt(this) };
      u instanceof de ? ge({ ...a, pos: u.pos, width: u.width, height: u.height }) : u instanceof Ke ? z({ ...a, pts: u.pts }) : u instanceof yt && L({ ...a, pos: u.center, radius: u.radius }), ae();
    }, area: { shape: t.shape ?? null, scale: t.scale ? T(t.scale) : T(1), offset: t.offset ?? T(0), cursor: t.cursor ?? null }, isClicked() {
      return y.isMousePressed() && this.isHovering();
    }, isHovering() {
      let u = pt(this) ? Nt() : sr(Nt());
      return this.hasPoint(u);
    }, checkCollision(u) {
      return r[u.id] ?? null;
    }, getCollisions() {
      return Object.values(r);
    }, isColliding(u) {
      return !!r[u.id];
    }, isOverlapping(u) {
      let a = r[u.id];
      return a && a.hasOverlap();
    }, onClick(u) {
      let a = y.onMousePress("left", () => {
        this.isHovering() && u();
      });
      return this.onDestroy(() => a.cancel()), a;
    }, onHover(u) {
      let a = false;
      return this.onUpdate(() => {
        a ? a = this.isHovering() : this.isHovering() && (a = true, u());
      });
    }, onHoverUpdate(u) {
      return this.onUpdate(() => {
        this.isHovering() && u();
      });
    }, onHoverEnd(u) {
      let a = false;
      return this.onUpdate(() => {
        a ? this.isHovering() || (a = false, u()) : a = this.isHovering();
      });
    }, onCollide(u, a) {
      if (typeof u == "function" && a === void 0)
        return this.on("collide", u);
      if (typeof u == "string")
        return this.onCollide((h, f) => {
          h.is(u) && a(h, f);
        });
    }, onCollideUpdate(u, a) {
      if (typeof u == "function" && a === void 0)
        return this.on("collideUpdate", u);
      if (typeof u == "string")
        return this.on("collideUpdate", (h, f) => h.is(u) && a(h, f));
    }, onCollideEnd(u, a) {
      if (typeof u == "function" && a === void 0)
        return this.on("collideEnd", u);
      if (typeof u == "string")
        return this.on("collideEnd", (h) => h.is(u) && a(h));
    }, hasPoint(u) {
      return _n(this.worldArea(), u);
    }, resolveCollision(u) {
      let a = this.checkCollision(u);
      a && !a.resolved && (this.pos = this.pos.add(a.displacement), a.resolved = true);
    }, localArea() {
      return this.area.shape ? this.area.shape : this.renderArea();
    }, worldArea() {
      let u = this.localArea();
      if (!(u instanceof Ke || u instanceof de))
        throw new Error("Only support polygon and rect shapes for now");
      let a = this.transform.clone().scale(T(this.area.scale ?? 1)).translate(this.area.offset);
      if (u instanceof de) {
        let h = ut(this.anchor || tn).add(1, 1).scale(-0.5).scale(u.width, u.height);
        a.translate(h);
      }
      return u.transform(a);
    }, screenArea() {
      let u = this.worldArea();
      return pt(this) ? u : u.transform(C.cam.transform);
    } };
  }
  i(Os, "area");
  function Qe(t) {
    return { color: t.color, opacity: t.opacity, anchor: t.anchor, outline: t.outline, shader: t.shader, uniform: t.uniform };
  }
  i(Qe, "getRenderProps");
  function Cn(t, r = {}) {
    let s = null, u = null, a = null, h = new be();
    if (!t)
      throw new Error("Please pass the resource name or data to sprite()");
    let f = i((b, p, d, w) => {
      let A = T(1, 1);
      return d && w ? (A.x = d / (b.width * p.w), A.y = w / (b.height * p.h)) : d ? (A.x = d / (b.width * p.w), A.y = A.x) : w && (A.y = w / (b.height * p.h), A.x = A.y), A;
    }, "calcTexScale");
    return { id: "sprite", width: 0, height: 0, frame: r.frame || 0, quad: r.quad || new oe(0, 0, 1, 1), animSpeed: r.animSpeed ?? 1, flipX: r.flipX ?? false, flipY: r.flipY ?? false, draw() {
      if (!s)
        return;
      let b = s.frames[this.frame ?? 0];
      if (!b)
        throw new Error(`Frame not found: ${this.frame ?? 0}`);
      if (s.slice9) {
        let { left: p, right: d, top: w, bottom: A } = s.slice9, D = s.tex.width * b.w, N = s.tex.height * b.h, _ = this.width - p - d, M = this.height - w - A, O = p / D, ie = d / D, Z = 1 - O - ie, H = w / N, V = A / N, fe = 1 - H - V, U = [ce(0, 0, O, H), ce(O, 0, Z, H), ce(O + Z, 0, ie, H), ce(0, H, O, fe), ce(O, H, Z, fe), ce(O + Z, H, ie, fe), ce(0, H + fe, O, V), ce(O, H + fe, Z, V), ce(O + Z, H + fe, ie, V), ce(0, 0, p, w), ce(p, 0, _, w), ce(p + _, 0, d, w), ce(0, w, p, M), ce(p, w, _, M), ce(p + _, w, d, M), ce(0, w + M, p, A), ce(p, w + M, _, A), ce(p + _, w + M, d, A)];
        for (let G = 0; G < 9; G++) {
          let B = U[G], F = U[G + 9];
          We(Object.assign(Qe(this), { pos: F.pos(), tex: s.tex, quad: b.scale(B), flipX: this.flipX, flipY: this.flipY, tiled: r.tiled, width: F.w, height: F.h }));
        }
      } else
        We(Object.assign(Qe(this), { tex: s.tex, quad: b.scale(this.quad ?? new oe(0, 0, 1, 1)), flipX: this.flipX, flipY: this.flipY, tiled: r.tiled, width: this.width, height: this.height }));
    }, add() {
      let b = i((d) => {
        let w = d.frames[0].clone();
        r.quad && (w = w.scale(r.quad));
        let A = f(d.tex, w, r.width, r.height);
        this.width = d.tex.width * w.w * A.x, this.height = d.tex.height * w.h * A.y, r.anim && this.play(r.anim), s = d, h.trigger(s);
      }, "setSpriteData"), p = ct(t);
      p ? p.onLoad(b) : Tn(() => b(ct(t).data));
    }, update() {
      if (!u)
        return;
      let b = s.anims[u.name];
      if (typeof b == "number") {
        this.frame = b;
        return;
      }
      if (b.speed === 0)
        throw new Error("Sprite anim speed cannot be 0");
      u.timer += Me() * this.animSpeed, u.timer >= 1 / u.speed && (u.timer = 0, this.frame += a, (this.frame < Math.min(b.from, b.to) || this.frame > Math.max(b.from, b.to)) && (u.loop ? u.pingpong ? (this.frame -= a, a *= -1, this.frame += a) : this.frame = b.from : (this.frame = b.to, u.onEnd(), this.stop())));
    }, play(b, p = {}) {
      if (!s) {
        h.add(() => this.play(b, p));
        return;
      }
      let d = s.anims[b];
      if (d === void 0)
        throw new Error(`Anim not found: ${b}`);
      u && this.stop(), u = typeof d == "number" ? { name: b, timer: 0, loop: false, pingpong: false, speed: 0, onEnd: () => {
      } } : { name: b, timer: 0, loop: p.loop ?? d.loop ?? false, pingpong: p.pingpong ?? d.pingpong ?? false, speed: p.speed ?? d.speed ?? 10, onEnd: p.onEnd ?? (() => {
      }) }, a = typeof d == "number" ? null : d.from < d.to ? 1 : -1, this.frame = typeof d == "number" ? d : d.from, this.trigger("animStart", b);
    }, stop() {
      if (!u)
        return;
      let b = u.name;
      u = null, this.trigger("animEnd", b);
    }, numFrames() {
      return s?.frames.length ?? 0;
    }, curAnim() {
      return u?.name;
    }, onAnimEnd(b) {
      return this.on("animEnd", b);
    }, onAnimStart(b) {
      return this.on("animStart", b);
    }, renderArea() {
      return new de(T(0), this.width, this.height);
    }, inspect() {
      if (typeof t == "string")
        return `"${t}"`;
    } };
  }
  i(Cn, "sprite");
  function Rs(t, r = {}) {
    function s(a) {
      let h = Xe(Object.assign(Qe(a), { text: a.text + "", size: a.textSize, font: a.font, width: r.width && a.width, align: a.align, letterSpacing: a.letterSpacing, lineSpacing: a.lineSpacing, transform: a.textTransform, styles: a.textStyles }));
      return r.width || (a.width = h.width / (a.scale?.x || 1)), a.height = h.height / (a.scale?.y || 1), h;
    }
    i(s, "update");
    let u = { id: "text", set text(a) {
      t = a, s(this);
    }, get text() {
      return t;
    }, textSize: r.size ?? ji, font: r.font, width: r.width ?? 0, height: 0, align: r.align, lineSpacing: r.lineSpacing, letterSpacing: r.letterSpacing, textTransform: r.transform, textStyles: r.styles, add() {
      Tn(() => s(this));
    }, draw() {
      Je(s(this));
    }, renderArea() {
      return new de(T(0), this.width, this.height);
    } };
    return s(u), u;
  }
  i(Rs, "text");
  function Ps(t, r = {}) {
    if (t.length < 3)
      throw new Error(`Polygon's need more than two points, ${t.length} points provided`);
    return { id: "polygon", pts: t, colors: r.colors, radius: r.radius, draw() {
      z(Object.assign(Qe(this), { pts: this.pts, colors: this.colors, radius: this.radius, fill: r.fill }));
    }, renderArea() {
      return new Ke(this.pts);
    }, inspect() {
      return this.pts.map((s) => `[${s.x},${s.y}]`).join(",");
    } };
  }
  i(Ps, "polygon");
  function Ds(t, r, s = {}) {
    return { id: "rect", width: t, height: r, radius: s.radius || 0, draw() {
      ge(Object.assign(Qe(this), { width: this.width, height: this.height, radius: this.radius, fill: s.fill }));
    }, renderArea() {
      return new de(T(0), this.width, this.height);
    }, inspect() {
      return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
    } };
  }
  i(Ds, "rect");
  function Ms(t, r) {
    return { id: "rect", width: t, height: r, draw() {
      Be(Object.assign(Qe(this), { width: this.width, height: this.height }));
    }, renderArea() {
      return new de(T(0), this.width, this.height);
    }, inspect() {
      return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
    } };
  }
  i(Ms, "uvquad");
  function Gs(t, r = {}) {
    return { id: "circle", radius: t, draw() {
      L(Object.assign(Qe(this), { radius: this.radius, fill: r.fill }));
    }, renderArea() {
      return new de(new v(this.anchor ? 0 : -this.radius), this.radius * 2, this.radius * 2);
    }, inspect() {
      return `${Math.ceil(this.radius)}`;
    } };
  }
  i(Gs, "circle");
  function Bs(t = 1, r = J(0, 0, 0)) {
    return { id: "outline", outline: { width: t, color: r } };
  }
  i(Bs, "outline");
  function An() {
    return { id: "timer", wait(t, r) {
      let s = [];
      r && s.push(r);
      let u = 0, a = this.onUpdate(() => {
        u += Me(), u >= t && (s.forEach((h) => h()), a.cancel());
      });
      return { get paused() {
        return a.paused;
      }, set paused(h) {
        a.paused = h;
      }, cancel: a.cancel, onEnd(h) {
        s.push(h);
      }, then(h) {
        return this.onEnd(h), this;
      } };
    }, loop(t, r) {
      let s = null, u = i(() => {
        s = this.wait(t, u), r();
      }, "newAction");
      return s = this.wait(0, u), { get paused() {
        return s.paused;
      }, set paused(a) {
        s.paused = a;
      }, cancel: () => s.cancel() };
    }, tween(t, r, s, u, a = Ct.linear) {
      let h = 0, f = [], b = this.onUpdate(() => {
        h += Me();
        let p = Math.min(h / s, 1);
        u(Ve(t, r, a(p))), p === 1 && (b.cancel(), u(r), f.forEach((d) => d()));
      });
      return { get paused() {
        return b.paused;
      }, set paused(p) {
        b.paused = p;
      }, onEnd(p) {
        f.push(p);
      }, then(p) {
        return this.onEnd(p), this;
      }, cancel() {
        b.cancel();
      }, finish() {
        b.cancel(), u(r), f.forEach((p) => p());
      } };
    } };
  }
  i(An, "timer");
  let Fs = 640, Is = 65536;
  function Ls(t = {}) {
    let r = null, s = null, u = false;
    return { id: "body", require: ["pos", "area"], vel: new v(0), jumpForce: t.jumpForce ?? Fs, gravityScale: t.gravityScale ?? 1, isStatic: t.isStatic ?? false, mass: t.mass ?? 1, add() {
      if (this.mass === 0)
        throw new Error("Can't set body mass to 0");
      this.onCollideUpdate((a, h) => {
        if (a.is("body") && !h.resolved && (this.trigger("beforePhysicsResolve", h), a.trigger("beforePhysicsResolve", h.reverse()), !h.resolved && !(this.isStatic && a.isStatic))) {
          if (!this.isStatic && !a.isStatic) {
            let f = this.mass + a.mass;
            this.pos = this.pos.add(h.displacement.scale(a.mass / f)), a.pos = a.pos.add(h.displacement.scale(-this.mass / f)), this.transform = jt(this), a.transform = jt(a);
          } else {
            let f = !this.isStatic && a.isStatic ? h : h.reverse();
            f.source.pos = f.source.pos.add(f.displacement), f.source.transform = jt(f.source);
          }
          h.resolved = true, this.trigger("physicsResolve", h), a.trigger("physicsResolve", h.reverse());
        }
      }), this.onPhysicsResolve((a) => {
        C.gravity && (a.isBottom() && this.isFalling() ? (this.vel.y = 0, r = a.target, s = a.target.pos, u ? u = false : this.trigger("ground", r)) : a.isTop() && this.isJumping() && (this.vel.y = 0, this.trigger("headbutt", a.target)));
      });
    }, update() {
      if (!C.gravity || this.isStatic)
        return;
      if (u && (r = null, s = null, this.trigger("fallOff"), u = false), r)
        if (!this.isColliding(r) || !r.exists() || !r.is("body"))
          u = true;
        else {
          !r.pos.eq(s) && t.stickToPlatform !== false && this.moveBy(r.pos.sub(s)), s = r.pos;
          return;
        }
      let a = this.vel.y;
      this.vel.y += C.gravity * this.gravityScale * Me(), this.vel.y = Math.min(this.vel.y, t.maxVelocity ?? Is), a < 0 && this.vel.y >= 0 && this.trigger("fall"), this.move(this.vel);
    }, onPhysicsResolve(a) {
      return this.on("physicsResolve", a);
    }, onBeforePhysicsResolve(a) {
      return this.on("beforePhysicsResolve", a);
    }, curPlatform() {
      return r;
    }, isGrounded() {
      return r !== null;
    }, isFalling() {
      return this.vel.y > 0;
    }, isJumping() {
      return this.vel.y < 0;
    }, jump(a) {
      r = null, s = null, this.vel.y = -a || -this.jumpForce;
    }, onGround(a) {
      return this.on("ground", a);
    }, onFall(a) {
      return this.on("fall", a);
    }, onFallOff(a) {
      return this.on("fallOff", a);
    }, onHeadbutt(a) {
      return this.on("headbutt", a);
    } };
  }
  i(Ls, "body");
  function Vs(t = 2) {
    let r = t;
    return { id: "doubleJump", require: ["body"], numJumps: t, add() {
      this.onGround(() => {
        r = this.numJumps;
      });
    }, doubleJump(s) {
      r <= 0 || (r < this.numJumps && this.trigger("doubleJump"), r--, this.jump(s));
    }, onDoubleJump(s) {
      return this.on("doubleJump", s);
    }, inspect() {
      return `${r}`;
    } };
  }
  i(Vs, "doubleJump");
  function _s(t, r) {
    return { id: "shader", shader: t, ...typeof r == "function" ? { uniform: r(), update() {
      this.uniform = r();
    } } : { uniform: r } };
  }
  i(_s, "shader");
  function ks() {
    return { id: "fixed", fixed: true };
  }
  i(ks, "fixed");
  function or(t) {
    return { id: "stay", stay: true, scenesToStay: t };
  }
  i(or, "stay");
  function Ns(t, r) {
    if (t == null)
      throw new Error("health() requires the initial amount of hp");
    return { id: "health", hurt(s = 1) {
      this.setHP(t - s), this.trigger("hurt", s);
    }, heal(s = 1) {
      let u = t;
      this.setHP(t + s), this.trigger("heal", t - u);
    }, hp() {
      return t;
    }, maxHP() {
      return r ?? null;
    }, setMaxHP(s) {
      r = s;
    }, setHP(s) {
      t = r ? Math.min(r, s) : s, t <= 0 && this.trigger("death");
    }, onHurt(s) {
      return this.on("hurt", s);
    }, onHeal(s) {
      return this.on("heal", s);
    }, onDeath(s) {
      return this.on("death", s);
    }, inspect() {
      return `${t}`;
    } };
  }
  i(Ns, "health");
  function js(t, r = {}) {
    if (t == null)
      throw new Error("lifespan() requires time");
    let s = r.fade ?? 0;
    return { id: "lifespan", async add() {
      await hr(t), s > 0 && this.opacity && await Rn(this.opacity, 0, s, (u) => this.opacity = u, Ct.linear), this.destroy();
    } };
  }
  i(js, "lifespan");
  function Hs(t, r, s) {
    if (!t)
      throw new Error("state() requires an initial state");
    let u = {};
    function a(p) {
      u[p] || (u[p] = { enter: new be(), end: new be(), update: new be(), draw: new be() });
    }
    i(a, "initStateEvents");
    function h(p, d, w) {
      return a(d), u[d][p].add(w);
    }
    i(h, "on");
    function f(p, d, ...w) {
      a(d), u[d][p].trigger(...w);
    }
    i(f, "trigger");
    let b = false;
    return { id: "state", state: t, enterState(p, ...d) {
      if (b = true, r && !r.includes(p))
        throw new Error(`State not found: ${p}`);
      let w = this.state;
      if (s) {
        if (!s?.[w])
          return;
        let A = typeof s[w] == "string" ? [s[w]] : s[w];
        if (!A.includes(p))
          throw new Error(`Cannot transition state from "${w}" to "${p}". Available transitions: ${A.map((D) => `"${D}"`).join(", ")}`);
      }
      f("end", w, ...d), this.state = p, f("enter", p, ...d), f("enter", `${w} -> ${p}`, ...d);
    }, onStateTransition(p, d, w) {
      return h("enter", `${p} -> ${d}`, w);
    }, onStateEnter(p, d) {
      return h("enter", p, d);
    }, onStateUpdate(p, d) {
      return h("update", p, d);
    }, onStateDraw(p, d) {
      return h("draw", p, d);
    }, onStateEnd(p, d) {
      return h("end", p, d);
    }, update() {
      b || (f("enter", t), b = true), f("update", this.state);
    }, draw() {
      f("draw", this.state);
    }, inspect() {
      return this.state;
    } };
  }
  i(Hs, "state");
  function qs(t = 1) {
    let r = 0, s = false;
    return { require: ["opacity"], add() {
      this.opacity = 0;
    }, update() {
      s || (r += Me(), this.opacity = _e(r, 0, t, 0, 1), r >= t && (this.opacity = 1, s = true));
    } };
  }
  i(qs, "fadeIn");
  function $s(t = "intersect") {
    return { id: "mask", mask: t };
  }
  i($s, "mask");
  function zs(t) {
    return { add() {
      this.canvas = t;
    } };
  }
  i(zs, "drawon");
  function Tn(t) {
    k.loaded ? t() : C.events.on("load", t);
  }
  i(Tn, "onLoad");
  function Ks(t, r) {
    C.scenes[t] = r;
  }
  i(Ks, "scene");
  function Ys(t, ...r) {
    if (!C.scenes[t])
      throw new Error(`Scene not found: ${t}`);
    C.events.onOnce("frameEnd", () => {
      C.events.trigger("sceneLeave", t), y.events.clear(), C.events.clear(), C.objEvents.clear(), [...C.root.children].forEach((s) => {
        (!s.stay || s.scenesToStay && !s.scenesToStay.includes(t)) && C.root.remove(s);
      }), C.root.clearEvents(), pr(), C.cam = { pos: null, scale: T(1), angle: 0, shake: 0, transform: new Ue() }, C.scenes[t](...r);
    });
  }
  i(Ys, "go");
  function Ws(t) {
    return C.events.on("sceneLeave", t);
  }
  i(Ws, "onSceneLeave");
  function Xs(t, r) {
    try {
      return JSON.parse(window.localStorage[t]);
    } catch {
      return r ? (ar(t, r), r) : null;
    }
  }
  i(Xs, "getData");
  function ar(t, r) {
    window.localStorage[t] = JSON.stringify(r);
  }
  i(ar, "setData");
  function ur(t, ...r) {
    let s = t(Ze), u;
    typeof s == "function" ? u = s(...r)(Ze) : u = s;
    for (let a in u)
      Ze[a] = u[a], n13.global !== false && (window[a] = u[a]);
    return Ze;
  }
  i(ur, "plug");
  function zt() {
    return T(we() / 2, xe() / 2);
  }
  i(zt, "center");
  let Js;
  ((O) => (O[O.None = 0] = "None", O[O.Left = 1] = "Left", O[O.Top = 2] = "Top", O[O.LeftTop = 3] = "LeftTop", O[O.Right = 4] = "Right", O[O.Horizontal = 5] = "Horizontal", O[O.RightTop = 6] = "RightTop", O[O.HorizontalTop = 7] = "HorizontalTop", O[O.Bottom = 8] = "Bottom", O[O.LeftBottom = 9] = "LeftBottom", O[O.Vertical = 10] = "Vertical", O[O.LeftVertical = 11] = "LeftVertical", O[O.RightBottom = 12] = "RightBottom", O[O.HorizontalBottom = 13] = "HorizontalBottom", O[O.RightVertical = 14] = "RightVertical", O[O.All = 15] = "All"))(Js ||= {});
  function cr(t = {}) {
    let r = T(0), s = t.isObstacle ?? false, u = t.cost ?? 0, a = t.edges ?? [], h = i(() => {
      let b = { left: 1, top: 2, right: 4, bottom: 8 };
      return a.map((p) => b[p] || 0).reduce((p, d) => p | d, 0);
    }, "getEdgeMask"), f = h();
    return { id: "tile", tilePosOffset: t.offset ?? T(0), set tilePos(b) {
      let p = this.getLevel();
      r = b.clone(), this.pos = T(this.tilePos.x * p.tileWidth(), this.tilePos.y * p.tileHeight()).add(this.tilePosOffset);
    }, get tilePos() {
      return r;
    }, set isObstacle(b) {
      s !== b && (s = b, this.getLevel().invalidateNavigationMap());
    }, get isObstacle() {
      return s;
    }, set cost(b) {
      u !== b && (u = b, this.getLevel().invalidateNavigationMap());
    }, get cost() {
      return u;
    }, set edges(b) {
      a = b, f = h(), this.getLevel().invalidateNavigationMap();
    }, get edges() {
      return a;
    }, get edgeMask() {
      return f;
    }, getLevel() {
      return this.parent;
    }, moveLeft() {
      this.tilePos = this.tilePos.add(T(-1, 0));
    }, moveRight() {
      this.tilePos = this.tilePos.add(T(1, 0));
    }, moveUp() {
      this.tilePos = this.tilePos.add(T(0, -1));
    }, moveDown() {
      this.tilePos = this.tilePos.add(T(0, 1));
    } };
  }
  i(cr, "tile");
  function Qs(t, r) {
    if (!r.tileWidth || !r.tileHeight)
      throw new Error("Must provide tileWidth and tileHeight.");
    let s = gt([qt(r.pos ?? T(0))]), u = t.length, a = 0, h = null, f = null, b = null, p = null, d = i((U) => U.x + U.y * a, "tile2Hash"), w = i((U) => T(Math.floor(U % a), Math.floor(U / a)), "hash2Tile"), A = i(() => {
      h = [];
      for (let U of s.children)
        D(U);
    }, "createSpatialMap"), D = i((U) => {
      let G = d(U.tilePos);
      h[G] ? h[G].push(U) : h[G] = [U];
    }, "insertIntoSpatialMap"), N = i((U) => {
      let G = d(U.tilePos);
      if (h[G]) {
        let B = h[G].indexOf(U);
        B >= 0 && h[G].splice(B, 1);
      }
    }, "removeFromSpatialMap"), _ = i(() => {
      let U = false;
      for (let G of s.children) {
        let B = s.pos2Tile(G.pos);
        (G.tilePos.x != B.x || G.tilePos.y != B.y) && (U = true, N(G), G.tilePos.x = B.x, G.tilePos.y = B.y, D(G));
      }
      U && s.trigger("spatial_map_changed");
    }, "updateSpatialMap"), M = i(() => {
      let U = s.getSpatialMap(), G = s.numRows() * s.numColumns();
      f ? f.length = G : f = new Array(G), f.fill(1, 0, G);
      for (let B = 0; B < U.length; B++) {
        let F = U[B];
        if (F) {
          let Y = 0;
          for (let ee of F)
            if (ee.isObstacle) {
              Y = 1 / 0;
              break;
            } else
              Y += ee.cost;
          f[B] = Y || 1;
        }
      }
    }, "createCostMap"), O = i(() => {
      let U = s.getSpatialMap(), G = s.numRows() * s.numColumns();
      b ? b.length = G : b = new Array(G), b.fill(15, 0, G);
      for (let B = 0; B < U.length; B++) {
        let F = U[B];
        if (F) {
          let Y = F.length, ee = 15;
          for (let ue = 0; ue < Y; ue++)
            ee |= F[ue].edgeMask;
          b[B] = ee;
        }
      }
    }, "createEdgeMap"), ie = i(() => {
      let U = s.numRows() * s.numColumns(), G = i((F, Y) => {
        let ee = [];
        for (ee.push(F); ee.length > 0; ) {
          let ue = ee.pop();
          V(ue).forEach((me) => {
            p[me] < 0 && (p[me] = Y, ee.push(me));
          });
        }
      }, "traverse");
      p ? p.length = U : p = new Array(U), p.fill(-1, 0, U);
      let B = 0;
      for (let F = 0; F < f.length; F++) {
        if (p[F] >= 0) {
          B++;
          continue;
        }
        G(F, B), B++;
      }
    }, "createConnectivityMap"), Z = i((U, G) => f[G], "getCost"), H = i((U, G) => {
      let B = w(U), F = w(G);
      return B.dist(F);
    }, "getHeuristic"), V = i((U, G) => {
      let B = [], F = Math.floor(U % a), Y = F > 0 && b[U] & 1 && f[U - 1] !== 1 / 0, ee = U >= a && b[U] & 2 && f[U - a] !== 1 / 0, ue = F < a - 1 && b[U] & 4 && f[U + 1] !== 1 / 0, me = U < a * u - a - 1 && b[U] & 8 && f[U + a] !== 1 / 0;
      return G ? (Y && (ee && B.push(U - a - 1), B.push(U - 1), me && B.push(U + a - 1)), ee && B.push(U - a), ue && (ee && B.push(U - a + 1), B.push(U + 1), me && B.push(U + a + 1)), me && B.push(U + a)) : (Y && B.push(U - 1), ee && B.push(U - a), ue && B.push(U + 1), me && B.push(U + a)), B;
    }, "getNeighbours"), fe = { id: "level", tileWidth() {
      return r.tileWidth;
    }, tileHeight() {
      return r.tileHeight;
    }, spawn(U, ...G) {
      let B = T(...G), F = (() => {
        if (typeof U == "string") {
          if (r.tiles[U]) {
            if (typeof r.tiles[U] != "function")
              throw new Error("Level symbol def must be a function returning a component list");
            return r.tiles[U](B);
          } else if (r.wildcardTile)
            return r.wildcardTile(U, B);
        } else {
          if (Array.isArray(U))
            return U;
          throw new Error("Expected a symbol or a component list");
        }
      })();
      if (!F)
        return null;
      let Y = false, ee = false;
      for (let me of F)
        me.id === "tile" && (ee = true), me.id === "pos" && (Y = true);
      Y || F.push(qt()), ee || F.push(cr());
      let ue = s.add(F);
      return Y && (ue.tilePosOffset = ue.pos.clone()), ue.tilePos = B, h && (D(ue), this.trigger("spatial_map_changed"), this.trigger("navigation_map_invalid")), ue;
    }, numColumns() {
      return a;
    }, numRows() {
      return u;
    }, levelWidth() {
      return a * this.tileWidth();
    }, levelHeight() {
      return u * this.tileHeight();
    }, tile2Pos(...U) {
      return T(...U).scale(this.tileWidth(), this.tileHeight());
    }, pos2Tile(...U) {
      let G = T(...U);
      return T(Math.floor(G.x / this.tileWidth()), Math.floor(G.y / this.tileHeight()));
    }, getSpatialMap() {
      return h || A(), h;
    }, onSpatialMapChanged(U) {
      return this.on("spatial_map_changed", U);
    }, onNavigationMapInvalid(U) {
      return this.on("navigation_map_invalid", U);
    }, getAt(U) {
      h || A();
      let G = d(U);
      return h[G] || [];
    }, update() {
      h && _();
    }, invalidateNavigationMap() {
      f = null, b = null, p = null;
    }, onNavigationMapChanged(U) {
      return this.on("navigation_map_changed", U);
    }, getTilePath(U, G, B = {}) {
      if (f || M(), b || O(), p || ie(), U.x < 0 || U.x >= a || U.y < 0 || U.y >= u || G.x < 0 || G.x >= a || G.y < 0 || G.y >= u)
        return null;
      let F = d(U), Y = d(G);
      if (f[Y] === 1 / 0)
        return null;
      if (F === Y)
        return [];
      if (p[F] != -1 && p[F] !== p[Y])
        return null;
      let ee = new Yt((Fe, Mn) => Fe.cost < Mn.cost);
      ee.insert({ cost: 0, node: F });
      let ue = /* @__PURE__ */ new Map();
      ue.set(F, F);
      let me = /* @__PURE__ */ new Map();
      for (me.set(F, 0); ee.length !== 0; ) {
        let Fe = ee.remove()?.node;
        if (Fe === Y)
          break;
        let Mn = V(Fe, B.allowDiagonals);
        for (let et of Mn) {
          let Gn = (me.get(Fe) || 0) + Z(Fe, et) + H(et, Y);
          (!me.has(et) || Gn < me.get(et)) && (me.set(et, Gn), ee.insert({ cost: Gn, node: et }), ue.set(et, Fe));
        }
      }
      let Dn = [], wt = Y, vi = w(wt);
      for (Dn.push(vi); wt !== F; ) {
        wt = ue.get(wt);
        let Fe = w(wt);
        Dn.push(Fe);
      }
      return Dn.reverse();
    }, getPath(U, G, B = {}) {
      let F = this.tileWidth(), Y = this.tileHeight(), ee = this.getTilePath(this.pos2Tile(U), this.pos2Tile(G), B);
      return ee ? [U, ...ee.slice(1, -1).map((ue) => ue.scale(F, Y).add(F / 2, Y / 2)), G] : null;
    } };
    return s.use(fe), s.onNavigationMapInvalid(() => {
      s.invalidateNavigationMap(), s.trigger("navigation_map_changed");
    }), t.forEach((U, G) => {
      let B = U.split("");
      a = Math.max(B.length, a), B.forEach((F, Y) => {
        s.spawn(F, T(Y, G));
      });
    }), s;
  }
  i(Qs, "addLevel");
  function Zs(t = {}) {
    let r = null, s = null, u = null, a = null;
    return { id: "agent", require: ["pos", "tile"], agentSpeed: t.speed ?? 100, allowDiagonals: t.allowDiagonals ?? true, getDistanceToTarget() {
      return r ? this.pos.dist(r) : 0;
    }, getNextLocation() {
      return s && u ? s[u] : null;
    }, getPath() {
      return s ? s.slice() : null;
    }, getTarget() {
      return r;
    }, isNavigationFinished() {
      return s ? u === null : true;
    }, isTargetReachable() {
      return s !== null;
    }, isTargetReached() {
      return r ? this.pos.eq(r) : true;
    }, setTarget(h) {
      r = h, s = this.getLevel().getPath(this.pos, r, { allowDiagonals: this.allowDiagonals }), u = s ? 0 : null, s ? (a || (a = this.getLevel().onNavigationMapChanged(() => {
        s && u !== null && (s = this.getLevel().getPath(this.pos, r, { allowDiagonals: this.allowDiagonals }), u = s ? 0 : null, s ? this.trigger("navigation-next", this, s[u]) : this.trigger("navigation-ended", this));
      }), this.onDestroy(() => a.cancel())), this.trigger("navigation-started", this), this.trigger("navigation-next", this, s[u])) : this.trigger("navigation-ended", this);
    }, update() {
      if (s && u !== null) {
        if (this.pos.sdist(s[u]) < 2)
          if (u === s.length - 1) {
            this.pos = r.clone(), u = null, this.trigger("navigation-ended", this), this.trigger("target-reached", this);
            return;
          } else
            u++, this.trigger("navigation-next", this, s[u]);
        this.moveTo(s[u], this.agentSpeed);
      }
    }, onNavigationStarted(h) {
      return this.on("navigation-started", h);
    }, onNavigationNext(h) {
      return this.on("navigation-next", h);
    }, onNavigationEnded(h) {
      return this.on("navigation-ended", h);
    }, onTargetReached(h) {
      return this.on("target-reached", h);
    }, inspect() {
      return JSON.stringify({ target: JSON.stringify(r), path: JSON.stringify(s) });
    } };
  }
  i(Zs, "agent");
  function ei(t) {
    let r = y.canvas.captureStream(t), s = te.ctx.createMediaStreamDestination();
    te.masterNode.connect(s);
    let u = new MediaRecorder(r), a = [];
    return u.ondataavailable = (h) => {
      h.data.size > 0 && a.push(h.data);
    }, u.onerror = () => {
      te.masterNode.disconnect(s), r.getTracks().forEach((h) => h.stop());
    }, u.start(), { resume() {
      u.resume();
    }, pause() {
      u.pause();
    }, stop() {
      return u.stop(), te.masterNode.disconnect(s), r.getTracks().forEach((h) => h.stop()), new Promise((h) => {
        u.onstop = () => {
          h(new Blob(a, { type: "video/mp4" }));
        };
      });
    }, download(h = "kaboom.mp4") {
      this.stop().then((f) => Nn(h, f));
    } };
  }
  i(ei, "record");
  function ti() {
    return document.activeElement === y.canvas;
  }
  i(ti, "isFocused");
  function ni(t) {
    t.destroy();
  }
  i(ni, "destroy");
  let gt = C.root.add.bind(C.root), ri = C.root.readd.bind(C.root), si = C.root.removeAll.bind(C.root), On = C.root.get.bind(C.root), hr = C.root.wait.bind(C.root), ii = C.root.loop.bind(C.root), Rn = C.root.tween.bind(C.root);
  function lr(t = 2, r = 1) {
    let s = 0;
    return { require: ["scale"], update() {
      let u = Math.sin(s * t) * r;
      u < 0 && this.destroy(), this.scale = T(u), s += Me();
    } };
  }
  i(lr, "boom");
  let oi = Ye(null, qr), ai = Ye(null, $r);
  function ui(t, r = {}) {
    let s = gt([qt(t), or()]), u = (r.speed || 1) * 5, a = r.scale || 1;
    s.add([Cn(ai), $t(0), Sn("center"), lr(u, a), ...r.comps ?? []]);
    let h = s.add([Cn(oi), $t(0), Sn("center"), An(), ...r.comps ?? []]);
    return h.wait(0.4 / u, () => h.use(lr(u, a))), h.onDestroy(() => s.destroy()), s;
  }
  i(ui, "addKaboom");
  function dr() {
    C.root.update();
  }
  i(dr, "updateFrame");
  class Pn {
    static {
      i(this, "Collision");
    }
    source;
    target;
    displacement;
    resolved = false;
    constructor(r, s, u, a = false) {
      this.source = r, this.target = s, this.displacement = u, this.resolved = a;
    }
    reverse() {
      return new Pn(this.target, this.source, this.displacement.scale(-1), this.resolved);
    }
    hasOverlap() {
      return !this.displacement.isZero();
    }
    isLeft() {
      return this.displacement.x > 0;
    }
    isRight() {
      return this.displacement.x < 0;
    }
    isTop() {
      return this.displacement.y > 0;
    }
    isBottom() {
      return this.displacement.y < 0;
    }
    preventResolution() {
      this.resolved = true;
    }
  }
  function ci() {
    let t = {}, r = n13.hashGridSize || Hi, s = new Ue(), u = [];
    function a(h) {
      if (u.push(s.clone()), h.pos && s.translate(h.pos), h.scale && s.scale(h.scale), h.angle && s.rotate(h.angle), h.transform = s.clone(), h.c("area") && !h.paused) {
        let f = h, p = f.worldArea().bbox(), d = Math.floor(p.pos.x / r), w = Math.floor(p.pos.y / r), A = Math.ceil((p.pos.x + p.width) / r), D = Math.ceil((p.pos.y + p.height) / r), N = /* @__PURE__ */ new Set();
        for (let _ = d; _ <= A; _++)
          for (let M = w; M <= D; M++)
            if (!t[_])
              t[_] = {}, t[_][M] = [f];
            else if (!t[_][M])
              t[_][M] = [f];
            else {
              let O = t[_][M];
              e:
                for (let ie of O) {
                  if (ie.paused || !ie.exists() || N.has(ie.id))
                    continue;
                  for (let H of f.collisionIgnore)
                    if (ie.is(H))
                      continue e;
                  for (let H of ie.collisionIgnore)
                    if (f.is(H))
                      continue e;
                  let Z = Or(f.worldArea(), ie.worldArea());
                  if (Z) {
                    let H = new Pn(f, ie, Z);
                    f.trigger("collideUpdate", ie, H);
                    let V = H.reverse();
                    V.resolved = H.resolved, ie.trigger("collideUpdate", f, V);
                  }
                  N.add(ie.id);
                }
              O.push(f);
            }
      }
      h.children.forEach(a), s = u.pop();
    }
    i(a, "checkObj"), a(C.root);
  }
  i(ci, "checkFrame");
  function hi() {
    let t = C.cam, r = v.fromAngle(xt(0, 360)).scale(t.shake);
    t.shake = Ve(t.shake, 0, 5 * Me()), t.transform = new Ue().translate(zt()).scale(t.scale).rotate(t.angle).translate((t.pos ?? zt()).scale(-1).add(r)), C.root.draw(), Pe();
  }
  i(hi, "drawFrame");
  function li() {
    let t = $();
    C.events.numListeners("loading") > 0 ? C.events.trigger("loading", t) : Ce(() => {
      let r = we() / 2, s = 24, u = T(we() / 2, xe() / 2).sub(T(r / 2, s / 2));
      ge({ pos: T(0), width: we(), height: xe(), color: J(0, 0, 0) }), ge({ pos: u, width: r, height: s, fill: false, outline: { width: 4 } }), ge({ pos: u, width: r * t, height: s });
    });
  }
  i(li, "drawLoadScreen");
  function fr(t, r) {
    Ce(() => {
      let s = T(8);
      le(), ne(t);
      let u = Xe({ text: r, font: nn, size: 16, pos: s, color: J(255, 255, 255), fixed: true }), a = u.width + s.x * 2, h = u.height + s.x * 2;
      t.x + a >= we() && ne(T(-a, 0)), t.y + h >= xe() && ne(T(0, -h)), ge({ width: a, height: h, color: J(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), Je(u), ae();
    });
  }
  i(fr, "drawInspectText");
  function di() {
    if (re.inspect) {
      let t = null;
      for (let r of C.root.get("*", { recursive: true }))
        if (r.c("area") && r.isHovering()) {
          t = r;
          break;
        }
      if (C.root.drawInspect(), t) {
        let r = [], s = t.inspect();
        for (let u in s)
          s[u] ? r.push(`${u}: ${s[u]}`) : r.push(`${u}`);
        fr(ns(Nt()), r.join(`
`));
      }
      fr(T(8), `FPS: ${re.fps()}`);
    }
    re.paused && Ce(() => {
      le(), ne(we(), 0), ne(-8, 8);
      let t = 32;
      ge({ width: t, height: t, anchor: "topright", color: J(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
      for (let r = 1; r <= 2; r++)
        ge({ width: 4, height: t * 0.6, anchor: "center", pos: T(-t / 3 * r, t * 0.5), color: J(255, 255, 255), radius: 2, fixed: true });
      ae();
    }), re.timeScale !== 1 && Ce(() => {
      le(), ne(we(), xe()), ne(-8, -8);
      let t = 8, r = Xe({ text: re.timeScale.toFixed(1), font: nn, size: 16, color: J(255, 255, 255), pos: T(-t), anchor: "botright", fixed: true });
      ge({ width: r.width + t * 2 + t * 4, height: r.height + t * 2, anchor: "botright", color: J(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
      for (let s = 0; s < 2; s++) {
        let u = re.timeScale < 1;
        R({ p1: T(-r.width - t * (u ? 2 : 3.5), -t), p2: T(-r.width - t * (u ? 2 : 3.5), -t - r.height), p3: T(-r.width - t * (u ? 3.5 : 2), -t - r.height / 2), pos: T(-s * t * 1 + (u ? -t * 0.5 : 0), 0), color: J(255, 255, 255), fixed: true });
      }
      Je(r), ae();
    }), re.curRecording && Ce(() => {
      le(), ne(0, xe()), ne(24, -24), L({ radius: 12, color: J(255, 0, 0), opacity: In(0, 1, y.time() * 4), fixed: true }), ae();
    }), re.showLog && C.logs.length > 0 && Ce(() => {
      le(), ne(0, xe()), ne(8, -8);
      let t = 8, r = [];
      for (let u of C.logs) {
        let a = "", h = u.msg instanceof Error ? "error" : "info";
        a += `[time]${u.time.toFixed(2)}[/time]`, a += " ", a += `[${h}]${u.msg?.toString ? u.msg.toString() : u.msg}[/${h}]`, r.push(a);
      }
      C.logs = C.logs.filter((u) => y.time() - u.time < (n13.logTime || $i));
      let s = Xe({ text: r.join(`
`), font: nn, pos: T(t, -t), anchor: "botleft", size: 16, width: we() * 0.6, lineSpacing: t / 2, fixed: true, styles: { time: { color: J(127, 127, 127) }, info: { color: J(255, 255, 255) }, error: { color: J(255, 0, 127) } } });
      ge({ width: s.width + t * 2, height: s.height + t * 2, anchor: "botleft", color: J(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), Je(s), ae();
    });
  }
  i(di, "drawDebug");
  function fi(t) {
    C.events.on("loading", t);
  }
  i(fi, "onLoading");
  function mi(t) {
    y.onResize(t);
  }
  i(mi, "onResize");
  function pi(t) {
    C.events.on("error", t);
  }
  i(pi, "onError");
  function gi(t) {
    console.error(t), te.ctx.suspend(), y.run(() => {
      dt(), Ce(() => {
        let u = we(), a = xe(), h = { size: 36, width: u - 32 * 2, letterSpacing: 4, lineSpacing: 4, font: nn, fixed: true };
        ge({ width: u, height: a, color: J(0, 0, 255), fixed: true });
        let f = Xe({ ...h, text: "Error", pos: T(32), color: J(255, 128, 0), fixed: true });
        Je(f), tr({ ...h, text: t.message, pos: T(32, 32 + f.height + 16), fixed: true }), ae(), C.events.trigger("error", t);
      }), ft();
    });
  }
  i(gi, "handleErr");
  function wi(t) {
    X.push(t);
  }
  i(wi, "onCleanup");
  function bi() {
    C.events.onOnce("frameEnd", () => {
      y.quit(), S.clear(S.COLOR_BUFFER_BIT | S.DEPTH_BUFFER_BIT | S.STENCIL_BUFFER_BIT);
      let t = S.getParameter(S.MAX_TEXTURE_IMAGE_UNITS);
      for (let r = 0; r < t; r++)
        S.activeTexture(S.TEXTURE0 + r), S.bindTexture(S.TEXTURE_2D, null), S.bindTexture(S.TEXTURE_CUBE_MAP, null);
      S.bindBuffer(S.ARRAY_BUFFER, null), S.bindBuffer(S.ELEMENT_ARRAY_BUFFER, null), S.bindRenderbuffer(S.RENDERBUFFER, null), S.bindFramebuffer(S.FRAMEBUFFER, null), q.destroy(), X.forEach((r) => r());
    });
  }
  i(bi, "quit");
  let Kt = true;
  y.run(() => {
    try {
      k.loaded || $() === 1 && !Kt && (k.loaded = true, C.events.trigger("load")), !k.loaded && n13.loadingScreen !== false || Kt ? (dt(), li(), ft()) : (re.paused || dr(), ci(), dt(), hi(), n13.debug !== false && di(), ft()), Kt && (Kt = false), C.events.trigger("frameEnd");
    } catch (t) {
      gi(t);
    }
  });
  function mr() {
    let t = P, r = S.drawingBufferWidth / t, s = S.drawingBufferHeight / t;
    if (n13.letterbox) {
      if (!n13.width || !n13.height)
        throw new Error("Letterboxing requires width and height defined.");
      let u = r / s, a = n13.width / n13.height;
      if (u > a) {
        let h = s * a, f = (r - h) / 2;
        E.viewport = { x: f, y: 0, width: h, height: s };
      } else {
        let h = r / a, f = (s - h) / 2;
        E.viewport = { x: 0, y: f, width: r, height: h };
      }
      return;
    }
    if (n13.stretch && (!n13.width || !n13.height))
      throw new Error("Stretching requires width and height defined.");
    E.viewport = { x: 0, y: 0, width: r, height: s };
  }
  i(mr, "updateViewport");
  function pr() {
    y.onHide(() => {
      n13.backgroundAudio || te.ctx.suspend();
    }), y.onShow(() => {
      !n13.backgroundAudio && !re.paused && te.ctx.resume();
    }), y.onResize(() => {
      if (y.isFullscreen())
        return;
      let t = n13.width && n13.height;
      t && !n13.stretch && !n13.letterbox || (o.width = o.offsetWidth * P, o.height = o.offsetHeight * P, mr(), t || (E.frameBuffer.free(), E.frameBuffer = new rt(q, S.drawingBufferWidth, S.drawingBufferHeight), E.width = S.drawingBufferWidth / P, E.height = S.drawingBufferHeight / P));
    }), n13.debug !== false && (y.onKeyPress("f1", () => re.inspect = !re.inspect), y.onKeyPress("f2", () => re.clearLog()), y.onKeyPress("f8", () => re.paused = !re.paused), y.onKeyPress("f7", () => {
      re.timeScale = mt(Le(re.timeScale - 0.2, 0, 2), 1);
    }), y.onKeyPress("f9", () => {
      re.timeScale = mt(Le(re.timeScale + 0.2, 0, 2), 1);
    }), y.onKeyPress("f10", () => re.stepFrame())), n13.burp && y.onKeyPress("b", () => Lt());
  }
  i(pr, "initEvents"), mr(), pr();
  let Ze = { VERSION: ki, loadRoot: Te, loadProgress: $, loadSprite: Ye, loadSpriteAtlas: Ot, loadSound: ln, loadBitmapFont: on, loadFont: st, loadShader: cn, loadShaderURL: hn, loadAseprite: un, loadPedit: an, loadBean: dn, loadJSON: ye, load: Ae, getSprite: Pt, getSound: Dt, getFont: Mt, getBitmapFont: Gt, getShader: Bt, getAsset: fn, Asset: ve, SpriteData: K, SoundData: Q, width: we, height: xe, center: zt, dt: Me, time: y.time, screenshot: y.screenshot, record: ei, isFocused: ti, setCursor: y.setCursor, getCursor: y.getCursor, setCursorLocked: y.setCursorLocked, isCursorLocked: y.isCursorLocked, setFullscreen: y.setFullscreen, isFullscreen: y.isFullscreen, isTouchscreen: y.isTouchscreen, onLoad: Tn, onLoading: fi, onResize: mi, onGamepadConnect: y.onGamepadConnect, onGamepadDisconnect: y.onGamepadDisconnect, onError: pi, onCleanup: wi, camPos: rs, camScale: ss, camRot: is, shake: os, toScreen: rr, toWorld: sr, setGravity: gs, getGravity: ws, setBackground: bs, getBackground: vs, getGamepads: y.getGamepads, add: gt, make: Un, destroy: ni, destroyAll: si, get: On, readd: ri, pos: qt, scale: $t, rotate: ys, color: xs, opacity: Us, anchor: Sn, area: Os, sprite: Cn, text: Rs, polygon: Ps, rect: Ds, circle: Gs, uvquad: Ms, outline: Bs, body: Ls, doubleJump: Vs, shader: _s, timer: An, fixed: ks, stay: or, health: Ns, lifespan: js, z: Es, move: Cs, offscreen: Ts, follow: Ss, state: Hs, fadeIn: qs, mask: $s, drawon: zs, tile: cr, agent: Zs, on: ze, onUpdate: as, onDraw: us, onAdd: En, onDestroy: ir, onClick: ds, onCollide: cs, onCollideUpdate: hs, onCollideEnd: ls, onHover: fs, onHoverUpdate: ms, onHoverEnd: ps, onKeyDown: y.onKeyDown, onKeyPress: y.onKeyPress, onKeyPressRepeat: y.onKeyPressRepeat, onKeyRelease: y.onKeyRelease, onMouseDown: y.onMouseDown, onMousePress: y.onMousePress, onMouseRelease: y.onMouseRelease, onMouseMove: y.onMouseMove, onCharInput: y.onCharInput, onTouchStart: y.onTouchStart, onTouchMove: y.onTouchMove, onTouchEnd: y.onTouchEnd, onScroll: y.onScroll, onHide: y.onHide, onShow: y.onShow, onGamepadButtonDown: y.onGamepadButtonDown, onGamepadButtonPress: y.onGamepadButtonPress, onGamepadButtonRelease: y.onGamepadButtonRelease, onGamepadStick: y.onGamepadStick, mousePos: Nt, mouseDeltaPos: y.mouseDeltaPos, isKeyDown: y.isKeyDown, isKeyPressed: y.isKeyPressed, isKeyPressedRepeat: y.isKeyPressedRepeat, isKeyReleased: y.isKeyReleased, isMouseDown: y.isMouseDown, isMousePressed: y.isMousePressed, isMouseReleased: y.isMouseReleased, isMouseMoved: y.isMouseMoved, isGamepadButtonPressed: y.isGamepadButtonPressed, isGamepadButtonDown: y.isGamepadButtonDown, isGamepadButtonReleased: y.isGamepadButtonReleased, getGamepadStick: y.getGamepadStick, charInputted: y.charInputted, loop: ii, wait: hr, play: It, volume: gn, burp: Lt, audioCtx: te.ctx, Line: Ie, Rect: de, Circle: yt, Polygon: Ke, Vec2: v, Color: W, Mat4: Ue, Quad: oe, RNG: bt, rand: xt, randi: Ln, randSeed: yr, vec2: T, rgb: J, hsl2rgb: vr, quad: ce, choose: Ur, chance: xr, lerp: Ve, tween: Rn, easings: Ct, map: _e, mapc: br, wave: In, deg2rad: Ge, rad2deg: ot, clamp: Le, testLineLine: it, testRectRect: Er, testRectLine: Sr, testRectPoint: vt, testCirclePolygon: Tr, testLinePoint: Cr, testLineCircle: Vn, drawSprite: yn, drawText: tr, formatText: Xe, drawRect: ge, drawLine: l, drawLines: x, drawTriangle: R, drawCircle: L, drawEllipse: he, drawUVQuad: Be, drawPolygon: z, drawFormattedText: Je, drawMasked: $e, drawSubtracted: kt, pushTransform: le, popTransform: ae, pushTranslate: ne, pushScale: He, pushRotate: se, pushMatrix: _t, usePostEffect: Vt, makeCanvas: wn, debug: re, scene: Ks, go: Ys, onSceneLeave: Ws, addLevel: Qs, getData: Xs, setData: ar, download: Xt, downloadJSON: Dr, downloadText: kn, downloadBlob: Nn, plug: ur, ASCII_CHARS: zr, canvas: y.canvas, addKaboom: ui, LEFT: v.LEFT, RIGHT: v.RIGHT, UP: v.UP, DOWN: v.DOWN, RED: W.RED, GREEN: W.GREEN, BLUE: W.BLUE, YELLOW: W.YELLOW, MAGENTA: W.MAGENTA, CYAN: W.CYAN, WHITE: W.WHITE, BLACK: W.BLACK, quit: bi, Event: be, EventHandler: Ne, EventController: ke };
  if (n13.plugins && n13.plugins.forEach(ur), n13.global !== false)
    for (let t in Ze)
      window[t] = Ze[t];
  return n13.focus !== false && y.canvas.focus(), Ze;
}, "default");

// src/cookbook_begin/single.ts
var baseUrl = getUrlVars()["baseUrl"].replace(window.location.origin, "");
var params = JSON.parse(getUrlVars()["params"]);
var steps = JSON.parse(getUrlVars()["steps"]);
function getUrlVars() {
  var url = decodeURIComponent(window.location.href);
  var vars = [], hash;
  var hashes = url.slice(url.indexOf("?") + 1).split("&");
  for (var i3 = 0; i3 < hashes.length; i3++) {
    hash = hashes[i3].split("=");
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}
zo({
  font: "msyh",
  width: 800,
  height: 1e3,
  background: [255, 255, 255]
});
loadFont("msyh", `${baseUrl}/fonts/msyh-X.ttf`);
var img1;
var img2;
var pad = 24;
add([
  text("[blue]\u914D\u6599\u8868\uFF1A[/blue]", {
    // What font to use
    size: 24,
    // It'll wrap to next line if the text width exceeds the width option specified here
    width: width() - pad * 2,
    styles: {
      blue: {
        color: rgb(0, 0, 255)
      }
    }
  }),
  pos(pad, pad)
]);
var i2 = 0;
for (let ingredient of params["ingredients"]) {
  i2++;
  add([
    text(`[blue].[/blue] [black]${ingredient}[/black]`, {
      // What font to use
      font: "msyh",
      size: 18,
      // It'll wrap to next line if the text width exceeds the width option specified here
      width: width() - pad * 2,
      styles: {
        black: {
          color: rgb(0, 0, 0)
        },
        blue: {
          color: rgb(0, 0, 255)
        }
      }
    }),
    pos(50, 30 * (i2 + 1))
  ]);
}
loadSprite("img1", baseUrl + "/cookbook/mapo_tofu/1.png");
img1 = add([
  sprite("img1"),
  // Make the background centered on the screen
  pos(width() - 400, 0),
  // Allow the background to be scaled
  scale(0.7),
  // Keep the background position fixed even when the camera moves
  fixed()
]);
var BASE_HEIGHT = 500;
var BASE_LEFT = 250;
loadSprite("img2", baseUrl + "/cookbook/mapo_tofu/2.png");
img2 = add([
  sprite("img2"),
  // Make the background centered on the screen
  pos(0, BASE_HEIGHT),
  // Allow the background to be scaled
  scale(0.7),
  // Keep the background position fixed even when the camera moves
  fixed()
]);
add([
  text("[blue]\u5236\u4F5C\u6B65\u9AA4\uFF1A[/blue]", {
    // What font to use
    font: "msyh",
    size: 24,
    // It'll wrap to next line if the text width exceeds the width option specified here
    width: width() - pad * 2,
    styles: {
      blue: {
        color: rgb(0, 0, 255)
      }
    }
  }),
  pos(BASE_LEFT, BASE_HEIGHT)
]);
i2 = 0;
for (let step of steps) {
  i2++;
  add([
    text(`[blue]${i2}.[/blue] [black]${step}[/black]`, {
      // What font to use
      font: "msyh",
      size: 18,
      // It'll wrap to next line if the text width exceeds the width option specified here
      width: width() - pad * 2,
      styles: {
        black: {
          color: rgb(0, 0, 0)
        },
        blue: {
          color: rgb(0, 0, 255)
        }
      }
    }),
    pos(BASE_LEFT, BASE_HEIGHT + 30 * (i2 + 1))
  ]);
}
var scale = 0.7;
var direction = -1;
onUpdate(() => {
  img1.scaleTo(scale);
  scale += direction * 1e-3;
  if (scale < 0.65) {
    direction = 1;
  }
  if (scale > 0.75) {
    direction = -1;
  }
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL2thYm9vbS9zcmMvbWF0aC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMva2Fib29tL3NyYy91dGlscy50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMva2Fib29tL3NyYy9nYW1lcGFkLmpzb24iLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2thYm9vbS9zcmMvYXBwLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9rYWJvb20vc3JjL2dmeC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMva2Fib29tL3NyYy9hc3NldHMudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2thYm9vbS9zcmMvZWFzaW5ncy50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMva2Fib29tL3NyYy90ZXhQYWNrZXIudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2thYm9vbS9zcmMva2Fib29tLnRzIiwgIi4uLy4uL3NyYy9jb29rYm9va19iZWdpbi9zaW5nbGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7XG5cdFBvaW50LFxuXHRSTkdWYWx1ZSxcblx0TGVycFZhbHVlLFxuXHRWZWMyQXJncyxcbn0gZnJvbSBcIi4vdHlwZXNcIlxuXG5leHBvcnQgZnVuY3Rpb24gZGVnMnJhZChkZWc6IG51bWJlcik6IG51bWJlciB7XG5cdHJldHVybiBkZWcgKiBNYXRoLlBJIC8gMTgwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYWQyZGVnKHJhZDogbnVtYmVyKTogbnVtYmVyIHtcblx0cmV0dXJuIHJhZCAqIDE4MCAvIE1hdGguUElcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKFxuXHR2YWw6IG51bWJlcixcblx0bWluOiBudW1iZXIsXG5cdG1heDogbnVtYmVyLFxuKTogbnVtYmVyIHtcblx0aWYgKG1pbiA+IG1heCkge1xuXHRcdHJldHVybiBjbGFtcCh2YWwsIG1heCwgbWluKVxuXHR9XG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWwsIG1pbiksIG1heClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlcnA8ViBleHRlbmRzIExlcnBWYWx1ZT4oXG5cdGE6IFYsXG5cdGI6IFYsXG5cdHQ6IG51bWJlcixcbik6IFYge1xuXHRpZiAodHlwZW9mIGEgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGIgPT09IFwibnVtYmVyXCIpIHtcblx0XHRyZXR1cm4gYSArIChiIC0gYSkgKiB0IGFzIFZcblx0fSBlbHNlIGlmIChhIGluc3RhbmNlb2YgVmVjMiAmJiBiIGluc3RhbmNlb2YgVmVjMikge1xuXHRcdHJldHVybiBhLmxlcnAoYiwgdCkgYXMgVlxuXHR9IGVsc2UgaWYgKGEgaW5zdGFuY2VvZiBDb2xvciAmJiBiIGluc3RhbmNlb2YgQ29sb3IpIHtcblx0XHRyZXR1cm4gYS5sZXJwKGIsIHQpIGFzIFZcblx0fVxuXHR0aHJvdyBuZXcgRXJyb3IoYEJhZCB2YWx1ZSBmb3IgbGVycCgpOiAke2F9LCAke2J9LiBPbmx5IG51bWJlciwgVmVjMiBhbmQgQ29sb3IgaXMgc3VwcG9ydGVkLmApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXAoXG5cdHY6IG51bWJlcixcblx0bDE6IG51bWJlcixcblx0aDE6IG51bWJlcixcblx0bDI6IG51bWJlcixcblx0aDI6IG51bWJlcixcbik6IG51bWJlciB7XG5cdHJldHVybiBsMiArICh2IC0gbDEpIC8gKGgxIC0gbDEpICogKGgyIC0gbDIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBjKFxuXHR2OiBudW1iZXIsXG5cdGwxOiBudW1iZXIsXG5cdGgxOiBudW1iZXIsXG5cdGwyOiBudW1iZXIsXG5cdGgyOiBudW1iZXIsXG4pOiBudW1iZXIge1xuXHRyZXR1cm4gY2xhbXAobWFwKHYsIGwxLCBoMSwgbDIsIGgyKSwgbDIsIGgyKVxufVxuXG5leHBvcnQgY2xhc3MgVmVjMiB7XG5cdHg6IG51bWJlciA9IDBcblx0eTogbnVtYmVyID0gMFxuXHRjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSB4KSB7XG5cdFx0dGhpcy54ID0geFxuXHRcdHRoaXMueSA9IHlcblx0fVxuXHRzdGF0aWMgZnJvbUFuZ2xlKGRlZzogbnVtYmVyKSB7XG5cdFx0Y29uc3QgYW5nbGUgPSBkZWcycmFkKGRlZylcblx0XHRyZXR1cm4gbmV3IFZlYzIoTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSkpXG5cdH1cblx0c3RhdGljIExFRlQgPSBuZXcgVmVjMigtMSwgMClcblx0c3RhdGljIFJJR0hUID0gbmV3IFZlYzIoMSwgMClcblx0c3RhdGljIFVQID0gbmV3IFZlYzIoMCwgLTEpXG5cdHN0YXRpYyBET1dOID0gbmV3IFZlYzIoMCwgMSlcblx0Y2xvbmUoKTogVmVjMiB7XG5cdFx0cmV0dXJuIG5ldyBWZWMyKHRoaXMueCwgdGhpcy55KVxuXHR9XG5cdGFkZCguLi5hcmdzOiBWZWMyQXJncyk6IFZlYzIge1xuXHRcdGNvbnN0IHAyID0gdmVjMiguLi5hcmdzKVxuXHRcdHJldHVybiBuZXcgVmVjMih0aGlzLnggKyBwMi54LCB0aGlzLnkgKyBwMi55KVxuXHR9XG5cdHN1YiguLi5hcmdzOiBWZWMyQXJncyk6IFZlYzIge1xuXHRcdGNvbnN0IHAyID0gdmVjMiguLi5hcmdzKVxuXHRcdHJldHVybiBuZXcgVmVjMih0aGlzLnggLSBwMi54LCB0aGlzLnkgLSBwMi55KVxuXHR9XG5cdHNjYWxlKC4uLmFyZ3M6IFZlYzJBcmdzKTogVmVjMiB7XG5cdFx0Y29uc3QgcyA9IHZlYzIoLi4uYXJncylcblx0XHRyZXR1cm4gbmV3IFZlYzIodGhpcy54ICogcy54LCB0aGlzLnkgKiBzLnkpXG5cdH1cblx0ZGlzdCguLi5hcmdzOiBWZWMyQXJncyk6IG51bWJlciB7XG5cdFx0Y29uc3QgcDIgPSB2ZWMyKC4uLmFyZ3MpXG5cdFx0cmV0dXJuIHRoaXMuc3ViKHAyKS5sZW4oKVxuXHR9XG5cdHNkaXN0KC4uLmFyZ3M6IFZlYzJBcmdzKTogbnVtYmVyIHtcblx0XHRjb25zdCBwMiA9IHZlYzIoLi4uYXJncylcblx0XHRyZXR1cm4gdGhpcy5zdWIocDIpLnNsZW4oKVxuXHR9XG5cdGxlbigpOiBudW1iZXIge1xuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy5kb3QodGhpcykpXG5cdH1cblx0c2xlbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmRvdCh0aGlzKVxuXHR9XG5cdHVuaXQoKTogVmVjMiB7XG5cdFx0Y29uc3QgbGVuID0gdGhpcy5sZW4oKVxuXHRcdHJldHVybiBsZW4gPT09IDAgPyBuZXcgVmVjMigwKSA6IHRoaXMuc2NhbGUoMSAvIGxlbilcblx0fVxuXHRub3JtYWwoKTogVmVjMiB7XG5cdFx0cmV0dXJuIG5ldyBWZWMyKHRoaXMueSwgLXRoaXMueClcblx0fVxuXHRyZWZsZWN0KG5vcm1hbDogVmVjMikge1xuXHRcdHJldHVybiB0aGlzLnN1Yihub3JtYWwuc2NhbGUoMiAqIHRoaXMuZG90KG5vcm1hbCkpKVxuXHR9XG5cdHByb2plY3Qob246IFZlYzIpIHtcblx0XHRyZXR1cm4gb24uc2NhbGUob24uZG90KHRoaXMpIC8gb24ubGVuKCkpXG5cdH1cblx0cmVqZWN0KG9uOiBWZWMyKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3ViKHRoaXMucHJvamVjdChvbikpXG5cdH1cblx0ZG90KHAyOiBWZWMyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy54ICogcDIueCArIHRoaXMueSAqIHAyLnlcblx0fVxuXHRjcm9zcyhwMjogVmVjMik6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMueCAqIHAyLnkgLSB0aGlzLnkgKiBwMi54XG5cdH1cblx0YW5nbGUoLi4uYXJnczogVmVjMkFyZ3MpOiBudW1iZXIge1xuXHRcdGNvbnN0IHAyID0gdmVjMiguLi5hcmdzKVxuXHRcdHJldHVybiByYWQyZGVnKE1hdGguYXRhbjIodGhpcy55IC0gcDIueSwgdGhpcy54IC0gcDIueCkpXG5cdH1cblx0YW5nbGVCZXR3ZWVuKC4uLmFyZ3M6IFZlYzJBcmdzKTogbnVtYmVyIHtcblx0XHRjb25zdCBwMiA9IHZlYzIoLi4uYXJncylcblx0XHRyZXR1cm4gcmFkMmRlZyhNYXRoLmF0YW4yKHRoaXMuY3Jvc3MocDIpLCB0aGlzLmRvdChwMikpKVxuXHR9XG5cdGxlcnAoZGVzdDogVmVjMiwgdDogbnVtYmVyKTogVmVjMiB7XG5cdFx0cmV0dXJuIG5ldyBWZWMyKGxlcnAodGhpcy54LCBkZXN0LngsIHQpLCBsZXJwKHRoaXMueSwgZGVzdC55LCB0KSlcblx0fVxuXHRzbGVycChkZXN0OiBWZWMyLCB0OiBudW1iZXIpOiBWZWMyIHtcblx0XHRjb25zdCBjb3MgPSB0aGlzLmRvdChkZXN0KVxuXHRcdGNvbnN0IHNpbiA9IHRoaXMuY3Jvc3MoZGVzdClcblx0XHRjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoc2luLCBjb3MpXG5cdFx0cmV0dXJuIHRoaXNcblx0XHRcdC5zY2FsZShNYXRoLnNpbigoMSAtIHQpICogYW5nbGUpKVxuXHRcdFx0LmFkZChkZXN0LnNjYWxlKE1hdGguc2luKHQgKiBhbmdsZSkpKVxuXHRcdFx0LnNjYWxlKDEgLyBzaW4pXG5cdH1cblx0aXNaZXJvKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnggPT09IDAgJiYgdGhpcy55ID09PSAwXG5cdH1cblx0dG9GaXhlZChuOiBudW1iZXIpOiBWZWMyIHtcblx0XHRyZXR1cm4gbmV3IFZlYzIoTnVtYmVyKHRoaXMueC50b0ZpeGVkKG4pKSwgTnVtYmVyKHRoaXMueS50b0ZpeGVkKG4pKSlcblx0fVxuXHR0cmFuc2Zvcm0obTogTWF0NCk6IFZlYzIge1xuXHRcdHJldHVybiBtLm11bHRWZWMyKHRoaXMpXG5cdH1cblx0ZXEob3RoZXI6IFZlYzIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy54ID09PSBvdGhlci54ICYmIHRoaXMueSA9PT0gb3RoZXIueVxuXHR9XG5cdGJib3goKTogUmVjdCB7XG5cdFx0cmV0dXJuIG5ldyBSZWN0KHRoaXMsIDAsIDApXG5cdH1cblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYHZlYzIoJHt0aGlzLngudG9GaXhlZCgyKX0sICR7dGhpcy55LnRvRml4ZWQoMil9KWBcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVjMiguLi5hcmdzOiBWZWMyQXJncyk6IFZlYzIge1xuXHRpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcblx0XHRpZiAoYXJnc1swXSBpbnN0YW5jZW9mIFZlYzIpIHtcblx0XHRcdHJldHVybiBuZXcgVmVjMihhcmdzWzBdLngsIGFyZ3NbMF0ueSlcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnc1swXSkgJiYgYXJnc1swXS5sZW5ndGggPT09IDIpIHtcblx0XHRcdHJldHVybiBuZXcgVmVjMiguLi5hcmdzWzBdKVxuXHRcdH1cblx0fVxuXHQvLyBAdHMtaWdub3JlXG5cdHJldHVybiBuZXcgVmVjMiguLi5hcmdzKVxufVxuXG5leHBvcnQgY2xhc3MgQ29sb3Ige1xuXG5cdHI6IG51bWJlciA9IDI1NVxuXHRnOiBudW1iZXIgPSAyNTVcblx0YjogbnVtYmVyID0gMjU1XG5cblx0Y29uc3RydWN0b3IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcikge1xuXHRcdHRoaXMuciA9IGNsYW1wKHIsIDAsIDI1NSlcblx0XHR0aGlzLmcgPSBjbGFtcChnLCAwLCAyNTUpXG5cdFx0dGhpcy5iID0gY2xhbXAoYiwgMCwgMjU1KVxuXHR9XG5cblx0c3RhdGljIGZyb21BcnJheShhcnI6IG51bWJlcltdKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihhcnJbMF0sIGFyclsxXSwgYXJyWzJdKVxuXHR9XG5cblx0c3RhdGljIGZyb21IZXgoaGV4OiBzdHJpbmcgfCBudW1iZXIpIHtcblx0XHRpZiAodHlwZW9mIGhleCA9PT0gXCJudW1iZXJcIikge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcihcblx0XHRcdFx0KGhleCA+PiAxNikgJiAweGZmLFxuXHRcdFx0XHQoaGV4ID4+IDgpICYgMHhmZixcblx0XHRcdFx0KGhleCA+PiAwKSAmIDB4ZmYsXG5cdFx0XHQpXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgaGV4ID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KVxuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcihcblx0XHRcdFx0cGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG5cdFx0XHRcdHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuXHRcdFx0XHRwYXJzZUludChyZXN1bHRbM10sIDE2KSxcblx0XHRcdClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBoZXggY29sb3IgZm9ybWF0XCIpXG5cdFx0fVxuXHR9XG5cblx0Ly8gVE9ETzogdXNlIHJhbmdlIG9mIFswLCAzNjBdIFswLCAxMDBdIFswLCAxMDBdP1xuXHRzdGF0aWMgZnJvbUhTTChoOiBudW1iZXIsIHM6IG51bWJlciwgbDogbnVtYmVyKSB7XG5cblx0XHRpZiAocyA9PSAwKXtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IoMjU1ICogbCwgMjU1ICogbCwgMjU1ICogbClcblx0XHR9XG5cblx0XHRjb25zdCBodWUycmdiID0gKHAsIHEsIHQpID0+IHtcblx0XHRcdGlmICh0IDwgMCkgdCArPSAxXG5cdFx0XHRpZiAodCA+IDEpIHQgLT0gMVxuXHRcdFx0aWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHRcblx0XHRcdGlmICh0IDwgMSAvIDIpIHJldHVybiBxXG5cdFx0XHRpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMi8zIC0gdCkgKiA2XG5cdFx0XHRyZXR1cm4gcFxuXHRcdH1cblxuXHRcdGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzXG5cdFx0Y29uc3QgcCA9IDIgKiBsIC0gcVxuXHRcdGNvbnN0IHIgPSBodWUycmdiKHAsIHEsIGggKyAxIC8gMylcblx0XHRjb25zdCBnID0gaHVlMnJnYihwLCBxLCBoKVxuXHRcdGNvbnN0IGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMylcblxuXHRcdHJldHVybiBuZXcgQ29sb3IoTWF0aC5yb3VuZChyICogMjU1KSwgTWF0aC5yb3VuZChnICogMjU1KSwgTWF0aC5yb3VuZChiICogMjU1KSlcblxuXHR9XG5cblx0c3RhdGljIFJFRCA9IG5ldyBDb2xvcigyNTUsIDAsIDApXG5cdHN0YXRpYyBHUkVFTiA9IG5ldyBDb2xvcigwLCAyNTUsIDApXG5cdHN0YXRpYyBCTFVFID0gbmV3IENvbG9yKDAsIDAsIDI1NSlcblx0c3RhdGljIFlFTExPVyA9IG5ldyBDb2xvcigyNTUsIDI1NSwgMClcblx0c3RhdGljIE1BR0VOVEEgPSBuZXcgQ29sb3IoMjU1LCAwLCAyNTUpXG5cdHN0YXRpYyBDWUFOID0gbmV3IENvbG9yKDAsIDI1NSwgMjU1KVxuXHRzdGF0aWMgV0hJVEUgPSBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSlcblx0c3RhdGljIEJMQUNLID0gbmV3IENvbG9yKDAsIDAsIDApXG5cblx0Y2xvbmUoKTogQ29sb3Ige1xuXHRcdHJldHVybiBuZXcgQ29sb3IodGhpcy5yLCB0aGlzLmcsIHRoaXMuYilcblx0fVxuXG5cdGxpZ2h0ZW4oYTogbnVtYmVyKTogQ29sb3Ige1xuXHRcdHJldHVybiBuZXcgQ29sb3IodGhpcy5yICsgYSwgdGhpcy5nICsgYSwgdGhpcy5iICsgYSlcblx0fVxuXG5cdGRhcmtlbihhOiBudW1iZXIpOiBDb2xvciB7XG5cdFx0cmV0dXJuIHRoaXMubGlnaHRlbigtYSlcblx0fVxuXG5cdGludmVydCgpOiBDb2xvciB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcigyNTUgLSB0aGlzLnIsIDI1NSAtIHRoaXMuZywgMjU1IC0gdGhpcy5iKVxuXHR9XG5cblx0bXVsdChvdGhlcjogQ29sb3IpOiBDb2xvciB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihcblx0XHRcdHRoaXMuciAqIG90aGVyLnIgLyAyNTUsXG5cdFx0XHR0aGlzLmcgKiBvdGhlci5nIC8gMjU1LFxuXHRcdFx0dGhpcy5iICogb3RoZXIuYiAvIDI1NSxcblx0XHQpXG5cdH1cblxuXHRsZXJwKGRlc3Q6IENvbG9yLCB0OiBudW1iZXIpOiBDb2xvciB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihcblx0XHRcdGxlcnAodGhpcy5yLCBkZXN0LnIsIHQpLFxuXHRcdFx0bGVycCh0aGlzLmcsIGRlc3QuZywgdCksXG5cdFx0XHRsZXJwKHRoaXMuYiwgZGVzdC5iLCB0KSxcblx0XHQpXG5cdH1cblxuXHR0b0hTTCgpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuXHRcdGNvbnN0IHIgPSB0aGlzLnIgLyAyNTVcblx0XHRjb25zdCBnID0gdGhpcy5nIC8gMjU1XG5cdFx0Y29uc3QgYiA9IHRoaXMuYiAvIDI1NVxuXHRcdGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKVxuXHRcdGxldCBoID0gKG1heCArIG1pbikgLyAyXG5cdFx0bGV0IHMgPSBoXG5cdFx0Y29uc3QgbCA9IGhcblx0XHRpZiAobWF4ID09IG1pbikge1xuXHRcdFx0aCA9IHMgPSAwXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGQgPSBtYXggLSBtaW5cblx0XHRcdHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKVxuXHRcdFx0c3dpdGNoIChtYXgpIHtcblx0XHRcdFx0Y2FzZSByOiBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7IGJyZWFrXG5cdFx0XHRcdGNhc2UgZzogaCA9IChiIC0gcikgLyBkICsgMjsgYnJlYWtcblx0XHRcdFx0Y2FzZSBiOiBoID0gKHIgLSBnKSAvIGQgKyA0OyBicmVha1xuXHRcdFx0fVxuXHRcdFx0aCAvPSA2XG5cdFx0fVxuXHRcdHJldHVybiBbIGgsIHMsIGwgXVxuXHR9XG5cblx0ZXEob3RoZXI6IENvbG9yKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuciA9PT0gb3RoZXIuclxuXHRcdFx0JiYgdGhpcy5nID09PSBvdGhlci5nXG5cdFx0XHQmJiB0aGlzLmIgPT09IG90aGVyLmJcblxuXHR9XG5cblx0dG9TdHJpbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYHJnYigke3RoaXMucn0sICR7dGhpcy5nfSwgJHt0aGlzLmJ9KWBcblx0fVxuXG5cdHRvSGV4KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiI1wiICsgKCgxIDw8IDI0KSArICh0aGlzLnIgPDwgMTYpICsgKHRoaXMuZyA8PCA4KSArIHRoaXMuYikudG9TdHJpbmcoMTYpLnNsaWNlKDEpXG5cdH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiKC4uLmFyZ3MpOiBDb2xvciB7XG5cdGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSlcblx0fSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuXHRcdGlmIChhcmdzWzBdIGluc3RhbmNlb2YgQ29sb3IpIHtcblx0XHRcdHJldHVybiBhcmdzWzBdLmNsb25lKClcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRyZXR1cm4gQ29sb3IuZnJvbUhleChhcmdzWzBdKVxuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmdzWzBdKSAmJiBhcmdzWzBdLmxlbmd0aCA9PT0gMykge1xuXHRcdFx0cmV0dXJuIENvbG9yLmZyb21BcnJheShhcmdzWzBdKVxuXHRcdH1cblx0fVxuXHQvLyBAdHMtaWdub3JlXG5cdHJldHVybiBuZXcgQ29sb3IoLi4uYXJncylcbn1cblxuZXhwb3J0IGNvbnN0IGhzbDJyZ2IgPSAoaCwgcywgbCkgPT4gQ29sb3IuZnJvbUhTTChoLCBzLCBsKVxuXG5leHBvcnQgY2xhc3MgUXVhZCB7XG5cdHg6IG51bWJlciA9IDBcblx0eTogbnVtYmVyID0gMFxuXHR3OiBudW1iZXIgPSAxXG5cdGg6IG51bWJlciA9IDFcblx0Y29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG5cdFx0dGhpcy54ID0geFxuXHRcdHRoaXMueSA9IHlcblx0XHR0aGlzLncgPSB3XG5cdFx0dGhpcy5oID0gaFxuXHR9XG5cdHNjYWxlKG90aGVyOiBRdWFkKTogUXVhZCB7XG5cdFx0cmV0dXJuIG5ldyBRdWFkKFxuXHRcdFx0dGhpcy54ICsgdGhpcy53ICogb3RoZXIueCxcblx0XHRcdHRoaXMueSArIHRoaXMuaCAqIG90aGVyLnksXG5cdFx0XHR0aGlzLncgKiBvdGhlci53LFxuXHRcdFx0dGhpcy5oICogb3RoZXIuaCxcblx0XHQpXG5cdH1cblx0cG9zKCkge1xuXHRcdHJldHVybiBuZXcgVmVjMih0aGlzLngsIHRoaXMueSlcblx0fVxuXHRjbG9uZSgpOiBRdWFkIHtcblx0XHRyZXR1cm4gbmV3IFF1YWQodGhpcy54LCB0aGlzLnksIHRoaXMudywgdGhpcy5oKVxuXHR9XG5cdGVxKG90aGVyOiBRdWFkKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMueCA9PT0gb3RoZXIueFxuXHRcdFx0JiYgdGhpcy55ID09PSBvdGhlci55XG5cdFx0XHQmJiB0aGlzLncgPT09IG90aGVyLndcblx0XHRcdCYmIHRoaXMuaCA9PT0gb3RoZXIuaFxuXHR9XG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGBxdWFkKCR7dGhpcy54fSwgJHt0aGlzLnl9LCAke3RoaXMud30sICR7dGhpcy5ofSlgXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1YWQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKTogUXVhZCB7XG5cdHJldHVybiBuZXcgUXVhZCh4LCB5LCB3LCBoKVxufVxuXG5leHBvcnQgY2xhc3MgTWF0NCB7XG5cblx0bTogbnVtYmVyW10gPSBbXG5cdFx0MSwgMCwgMCwgMCxcblx0XHQwLCAxLCAwLCAwLFxuXHRcdDAsIDAsIDEsIDAsXG5cdFx0MCwgMCwgMCwgMSxcblx0XVxuXG5cdGNvbnN0cnVjdG9yKG0/OiBudW1iZXJbXSkge1xuXHRcdGlmIChtKSB7XG5cdFx0XHR0aGlzLm0gPSBtXG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIHRyYW5zbGF0ZShwOiBWZWMyKTogTWF0NCB7XG5cdFx0cmV0dXJuIG5ldyBNYXQ0KFtcblx0XHRcdDEsIDAsIDAsIDAsXG5cdFx0XHQwLCAxLCAwLCAwLFxuXHRcdFx0MCwgMCwgMSwgMCxcblx0XHRcdHAueCwgcC55LCAwLCAxLFxuXHRcdF0pXG5cdH1cblxuXHRzdGF0aWMgc2NhbGUoczogVmVjMik6IE1hdDQge1xuXHRcdHJldHVybiBuZXcgTWF0NChbXG5cdFx0XHRzLngsIDAsIDAsIDAsXG5cdFx0XHQwLCBzLnksIDAsIDAsXG5cdFx0XHQwLCAwLCAxLCAwLFxuXHRcdFx0MCwgMCwgMCwgMSxcblx0XHRdKVxuXHR9XG5cblx0c3RhdGljIHJvdGF0ZVgoYTogbnVtYmVyKTogTWF0NCB7XG5cdFx0YSA9IGRlZzJyYWQoLWEpXG5cdFx0Y29uc3QgYyA9IE1hdGguY29zKGEpXG5cdFx0Y29uc3QgcyA9IE1hdGguc2luKGEpXG5cdFx0cmV0dXJuIG5ldyBNYXQ0KFtcblx0XHRcdDEsIDAsIDAsIDAsXG5cdFx0XHQwLCBjLCAtcywgMCxcblx0XHRcdDAsIHMsIGMsIDAsXG5cdFx0XHQwLCAwLCAwLCAxLFxuXHRcdF0pXG5cdH1cblxuXHRzdGF0aWMgcm90YXRlWShhOiBudW1iZXIpOiBNYXQ0IHtcblx0XHRhID0gZGVnMnJhZCgtYSlcblx0XHRjb25zdCBjID0gTWF0aC5jb3MoYSlcblx0XHRjb25zdCBzID0gTWF0aC5zaW4oYSlcblx0XHRyZXR1cm4gbmV3IE1hdDQoW1xuXHRcdFx0YywgMCwgcywgMCxcblx0XHRcdDAsIDEsIDAsIDAsXG5cdFx0XHQtcywgMCwgYywgMCxcblx0XHRcdDAsIDAsIDAsIDEsXG5cdFx0XSlcblx0fVxuXG5cdHN0YXRpYyByb3RhdGVaKGE6IG51bWJlcik6IE1hdDQge1xuXHRcdGEgPSBkZWcycmFkKC1hKVxuXHRcdGNvbnN0IGMgPSBNYXRoLmNvcyhhKVxuXHRcdGNvbnN0IHMgPSBNYXRoLnNpbihhKVxuXHRcdHJldHVybiBuZXcgTWF0NChbXG5cdFx0XHRjLCAtcywgMCwgMCxcblx0XHRcdHMsIGMsIDAsIDAsXG5cdFx0XHQwLCAwLCAxLCAwLFxuXHRcdFx0MCwgMCwgMCwgMSxcblx0XHRdKVxuXHR9XG5cblx0dHJhbnNsYXRlKHA6IFZlYzIpIHtcblx0XHR0aGlzLm1bMTJdICs9IHRoaXMubVswXSAqIHAueCArIHRoaXMubVs0XSAqIHAueVxuXHRcdHRoaXMubVsxM10gKz0gdGhpcy5tWzFdICogcC54ICsgdGhpcy5tWzVdICogcC55XG5cdFx0dGhpcy5tWzE0XSArPSB0aGlzLm1bMl0gKiBwLnggKyB0aGlzLm1bNl0gKiBwLnlcblx0XHR0aGlzLm1bMTVdICs9IHRoaXMubVszXSAqIHAueCArIHRoaXMubVs3XSAqIHAueVxuXHRcdHJldHVybiB0aGlzXG5cdH1cblxuXHRzY2FsZShwOiBWZWMyKSB7XG5cdFx0dGhpcy5tWzBdICo9IHAueFxuXHRcdHRoaXMubVs0XSAqPSBwLnlcblx0XHR0aGlzLm1bMV0gKj0gcC54XG5cdFx0dGhpcy5tWzVdICo9IHAueVxuXHRcdHRoaXMubVsyXSAqPSBwLnhcblx0XHR0aGlzLm1bNl0gKj0gcC55XG5cdFx0dGhpcy5tWzNdICo9IHAueFxuXHRcdHRoaXMubVs3XSAqPSBwLnlcblx0XHRyZXR1cm4gdGhpc1xuXHR9XG5cblx0cm90YXRlKGE6IG51bWJlcik6IE1hdDQge1xuXHRcdGEgPSBkZWcycmFkKC1hKVxuXHRcdGNvbnN0IGMgPSBNYXRoLmNvcyhhKVxuXHRcdGNvbnN0IHMgPSBNYXRoLnNpbihhKVxuXHRcdGNvbnN0IG0wID0gdGhpcy5tWzBdXG5cdFx0Y29uc3QgbTEgPSB0aGlzLm1bMV1cblx0XHRjb25zdCBtNCA9IHRoaXMubVs0XVxuXHRcdGNvbnN0IG01ID0gdGhpcy5tWzVdXG5cdFx0dGhpcy5tWzBdID0gbTAgKiBjICsgbTEgKiBzXG5cdFx0dGhpcy5tWzFdID0gLW0wICogcyArIG0xICogY1xuXHRcdHRoaXMubVs0XSA9IG00ICogYyArIG01ICogc1xuXHRcdHRoaXMubVs1XSA9IC1tNCAqIHMgKyBtNSAqIGNcblx0XHRyZXR1cm4gdGhpc1xuXHR9XG5cblx0Ly8gVE9ETzogaW4tcGxhY2UgdmFyaWFudFxuXHRtdWx0KG90aGVyOiBNYXQ0KTogTWF0NCB7XG5cdFx0Y29uc3Qgb3V0ID0gW11cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcblx0XHRcdFx0b3V0W2kgKiA0ICsgal0gPVxuXHRcdFx0XHRcdHRoaXMubVswICogNCArIGpdICogb3RoZXIubVtpICogNCArIDBdICtcblx0XHRcdFx0XHR0aGlzLm1bMSAqIDQgKyBqXSAqIG90aGVyLm1baSAqIDQgKyAxXSArXG5cdFx0XHRcdFx0dGhpcy5tWzIgKiA0ICsgal0gKiBvdGhlci5tW2kgKiA0ICsgMl0gK1xuXHRcdFx0XHRcdHRoaXMubVszICogNCArIGpdICogb3RoZXIubVtpICogNCArIDNdXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgTWF0NChvdXQpXG5cdH1cblxuXHRtdWx0VmVjMihwOiBWZWMyKTogVmVjMiB7XG5cdFx0cmV0dXJuIG5ldyBWZWMyKFxuXHRcdFx0cC54ICogdGhpcy5tWzBdICsgcC55ICogdGhpcy5tWzRdICsgdGhpcy5tWzEyXSxcblx0XHRcdHAueCAqIHRoaXMubVsxXSArIHAueSAqIHRoaXMubVs1XSArIHRoaXMubVsxM10sXG5cdFx0KVxuXHR9XG5cblx0Z2V0VHJhbnNsYXRpb24oKSB7XG5cdFx0cmV0dXJuIG5ldyBWZWMyKHRoaXMubVsxMl0sIHRoaXMubVsxM10pXG5cdH1cblxuXHRnZXRTY2FsZSgpIHtcblx0XHRpZiAodGhpcy5tWzBdICE9IDAgfHwgdGhpcy5tWzFdICE9IDApIHtcblx0XHRcdGNvbnN0IGRldCA9IHRoaXMubVswXSAqIHRoaXMubVs1XSAtIHRoaXMubVsxXSAqIHRoaXMubVs0XVxuXHRcdFx0Y29uc3QgciA9IE1hdGguc3FydCh0aGlzLm1bMF0gKiB0aGlzLm1bMF0gKyB0aGlzLm1bMV0gKiB0aGlzLm1bMV0pXG5cdFx0XHRyZXR1cm4gbmV3IFZlYzIociwgZGV0IC8gcilcblx0XHR9IGVsc2UgaWYgKHRoaXMubVs0XSAhPSAwIHx8IHRoaXMubVs1XSAhPSAwKSB7XG5cdFx0XHRjb25zdCBkZXQgPSB0aGlzLm1bMF0gKiB0aGlzLm1bNV0gLSB0aGlzLm1bMV0gKiB0aGlzLm1bNF1cblx0XHRcdGNvbnN0IHMgPSBNYXRoLnNxcnQodGhpcy5tWzRdICogdGhpcy5tWzRdICsgdGhpcy5tWzVdICogdGhpcy5tWzVdKVxuXHRcdFx0cmV0dXJuIG5ldyBWZWMyKGRldCAvIHMsIHMpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgVmVjMigwLCAwKVxuXHRcdH1cblx0fVxuXG5cdGdldFJvdGF0aW9uKCkge1xuXHRcdGlmICh0aGlzLm1bMF0gIT0gMCB8fCB0aGlzLm1bMV0gIT0gMCkge1xuXHRcdFx0Y29uc3QgciA9IE1hdGguc3FydCh0aGlzLm1bMF0gKiB0aGlzLm1bMF0gKyB0aGlzLm1bMV0gKiB0aGlzLm1bMV0pXG5cdFx0XHRyZXR1cm4gcmFkMmRlZyh0aGlzLm1bMV0gPiAwID8gTWF0aC5hY29zKHRoaXMubVswXSAvIHIpIDogLU1hdGguYWNvcyh0aGlzLm1bMF0gLyByKSlcblx0XHR9IGVsc2UgaWYgKHRoaXMubVs0XSAhPSAwIHx8IHRoaXMubVs1XSAhPSAwKSB7XG5cdFx0XHRjb25zdCBzID0gTWF0aC5zcXJ0KHRoaXMubVs0XSAqIHRoaXMubVs0XSArIHRoaXMubVs1XSAqIHRoaXMubVs1XSlcblx0XHRcdHJldHVybiByYWQyZGVnKE1hdGguUEkgLyAyIC0gKHRoaXMubVs1XSA+IDAgPyBNYXRoLmFjb3MoLXRoaXMubVs0XSAvIHMpIDogLU1hdGguYWNvcyh0aGlzLm1bNF0gLyBzKSkpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAwXG5cdFx0fVxuXHR9XG5cblx0Z2V0U2tldygpIHtcblx0XHRpZiAodGhpcy5tWzBdICE9IDAgfHwgdGhpcy5tWzFdICE9IDApIHtcblx0XHRcdGNvbnN0IHIgPSBNYXRoLnNxcnQodGhpcy5tWzBdICogdGhpcy5tWzBdICsgdGhpcy5tWzFdICogdGhpcy5tWzFdKVxuXHRcdFx0cmV0dXJuIG5ldyBWZWMyKE1hdGguYXRhbih0aGlzLm1bMF0gKiB0aGlzLm1bNF0gKyB0aGlzLm1bMV0gKiB0aGlzLm1bNV0pIC8gKHIgKiByKSwgMClcblx0XHR9XG5cdFx0ZWxzZSBpZiAodGhpcy5tWzRdICE9IDAgfHwgdGhpcy5tWzVdICE9IDApIHtcblx0XHRcdGNvbnN0IHMgPSBNYXRoLnNxcnQodGhpcy5tWzRdICogdGhpcy5tWzRdICsgdGhpcy5tWzVdICogdGhpcy5tWzVdKVxuXHRcdFx0cmV0dXJuIG5ldyBWZWMyKDAsIE1hdGguYXRhbih0aGlzLm1bMF0gKiB0aGlzLm1bNF0gKyB0aGlzLm1bMV0gKiB0aGlzLm1bNV0pIC8gKHMgKiBzKSlcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gbmV3IFZlYzIoMCwgMClcblx0XHR9XG5cdH1cblxuXHRpbnZlcnQoKTogTWF0NCB7XG5cblx0XHRjb25zdCBvdXQgPSBbXVxuXG5cdFx0Y29uc3QgZjAwID0gdGhpcy5tWzEwXSAqIHRoaXMubVsxNV0gLSB0aGlzLm1bMTRdICogdGhpcy5tWzExXVxuXHRcdGNvbnN0IGYwMSA9IHRoaXMubVs5XSAqIHRoaXMubVsxNV0gLSB0aGlzLm1bMTNdICogdGhpcy5tWzExXVxuXHRcdGNvbnN0IGYwMiA9IHRoaXMubVs5XSAqIHRoaXMubVsxNF0gLSB0aGlzLm1bMTNdICogdGhpcy5tWzEwXVxuXHRcdGNvbnN0IGYwMyA9IHRoaXMubVs4XSAqIHRoaXMubVsxNV0gLSB0aGlzLm1bMTJdICogdGhpcy5tWzExXVxuXHRcdGNvbnN0IGYwNCA9IHRoaXMubVs4XSAqIHRoaXMubVsxNF0gLSB0aGlzLm1bMTJdICogdGhpcy5tWzEwXVxuXHRcdGNvbnN0IGYwNSA9IHRoaXMubVs4XSAqIHRoaXMubVsxM10gLSB0aGlzLm1bMTJdICogdGhpcy5tWzldXG5cdFx0Y29uc3QgZjA2ID0gdGhpcy5tWzZdICogdGhpcy5tWzE1XSAtIHRoaXMubVsxNF0gKiB0aGlzLm1bN11cblx0XHRjb25zdCBmMDcgPSB0aGlzLm1bNV0gKiB0aGlzLm1bMTVdIC0gdGhpcy5tWzEzXSAqIHRoaXMubVs3XVxuXHRcdGNvbnN0IGYwOCA9IHRoaXMubVs1XSAqIHRoaXMubVsxNF0gLSB0aGlzLm1bMTNdICogdGhpcy5tWzZdXG5cdFx0Y29uc3QgZjA5ID0gdGhpcy5tWzRdICogdGhpcy5tWzE1XSAtIHRoaXMubVsxMl0gKiB0aGlzLm1bN11cblx0XHRjb25zdCBmMTAgPSB0aGlzLm1bNF0gKiB0aGlzLm1bMTRdIC0gdGhpcy5tWzEyXSAqIHRoaXMubVs2XVxuXHRcdGNvbnN0IGYxMSA9IHRoaXMubVs1XSAqIHRoaXMubVsxNV0gLSB0aGlzLm1bMTNdICogdGhpcy5tWzddXG5cdFx0Y29uc3QgZjEyID0gdGhpcy5tWzRdICogdGhpcy5tWzEzXSAtIHRoaXMubVsxMl0gKiB0aGlzLm1bNV1cblx0XHRjb25zdCBmMTMgPSB0aGlzLm1bNl0gKiB0aGlzLm1bMTFdIC0gdGhpcy5tWzEwXSAqIHRoaXMubVs3XVxuXHRcdGNvbnN0IGYxNCA9IHRoaXMubVs1XSAqIHRoaXMubVsxMV0gLSB0aGlzLm1bOV0gKiB0aGlzLm1bN11cblx0XHRjb25zdCBmMTUgPSB0aGlzLm1bNV0gKiB0aGlzLm1bMTBdIC0gdGhpcy5tWzldICogdGhpcy5tWzZdXG5cdFx0Y29uc3QgZjE2ID0gdGhpcy5tWzRdICogdGhpcy5tWzExXSAtIHRoaXMubVs4XSAqIHRoaXMubVs3XVxuXHRcdGNvbnN0IGYxNyA9IHRoaXMubVs0XSAqIHRoaXMubVsxMF0gLSB0aGlzLm1bOF0gKiB0aGlzLm1bNl1cblx0XHRjb25zdCBmMTggPSB0aGlzLm1bNF0gKiB0aGlzLm1bOV0gLSB0aGlzLm1bOF0gKiB0aGlzLm1bNV1cblxuXHRcdG91dFswXSA9IHRoaXMubVs1XSAqIGYwMCAtIHRoaXMubVs2XSAqIGYwMSArIHRoaXMubVs3XSAqIGYwMlxuXHRcdG91dFs0XSA9IC0odGhpcy5tWzRdICogZjAwIC0gdGhpcy5tWzZdICogZjAzICsgdGhpcy5tWzddICogZjA0KVxuXHRcdG91dFs4XSA9IHRoaXMubVs0XSAqIGYwMSAtIHRoaXMubVs1XSAqIGYwMyArIHRoaXMubVs3XSAqIGYwNVxuXHRcdG91dFsxMl0gPSAtKHRoaXMubVs0XSAqIGYwMiAtIHRoaXMubVs1XSAqIGYwNCArIHRoaXMubVs2XSAqIGYwNSlcblxuXHRcdG91dFsxXSA9IC0odGhpcy5tWzFdICogZjAwIC0gdGhpcy5tWzJdICogZjAxICsgdGhpcy5tWzNdICogZjAyKVxuXHRcdG91dFs1XSA9IHRoaXMubVswXSAqIGYwMCAtIHRoaXMubVsyXSAqIGYwMyArIHRoaXMubVszXSAqIGYwNFxuXHRcdG91dFs5XSA9IC0odGhpcy5tWzBdICogZjAxIC0gdGhpcy5tWzFdICogZjAzICsgdGhpcy5tWzNdICogZjA1KVxuXHRcdG91dFsxM10gPSB0aGlzLm1bMF0gKiBmMDIgLSB0aGlzLm1bMV0gKiBmMDQgKyB0aGlzLm1bMl0gKiBmMDVcblxuXHRcdG91dFsyXSA9IHRoaXMubVsxXSAqIGYwNiAtIHRoaXMubVsyXSAqIGYwNyArIHRoaXMubVszXSAqIGYwOFxuXHRcdG91dFs2XSA9IC0odGhpcy5tWzBdICogZjA2IC0gdGhpcy5tWzJdICogZjA5ICsgdGhpcy5tWzNdICogZjEwKVxuXHRcdG91dFsxMF0gPSB0aGlzLm1bMF0gKiBmMTEgLSB0aGlzLm1bMV0gKiBmMDkgKyB0aGlzLm1bM10gKiBmMTJcblx0XHRvdXRbMTRdID0gLSh0aGlzLm1bMF0gKiBmMDggLSB0aGlzLm1bMV0gKiBmMTAgKyB0aGlzLm1bMl0gKiBmMTIpXG5cblx0XHRvdXRbM10gPSAtKHRoaXMubVsxXSAqIGYxMyAtIHRoaXMubVsyXSAqIGYxNCArIHRoaXMubVszXSAqIGYxNSlcblx0XHRvdXRbN10gPSB0aGlzLm1bMF0gKiBmMTMgLSB0aGlzLm1bMl0gKiBmMTYgKyB0aGlzLm1bM10gKiBmMTdcblx0XHRvdXRbMTFdID0gLSh0aGlzLm1bMF0gKiBmMTQgLSB0aGlzLm1bMV0gKiBmMTYgKyB0aGlzLm1bM10gKiBmMTgpXG5cdFx0b3V0WzE1XSA9IHRoaXMubVswXSAqIGYxNSAtIHRoaXMubVsxXSAqIGYxNyArIHRoaXMubVsyXSAqIGYxOFxuXG5cdFx0Y29uc3QgZGV0ID1cblx0XHRcdHRoaXMubVswXSAqIG91dFswXSArXG5cdFx0XHR0aGlzLm1bMV0gKiBvdXRbNF0gK1xuXHRcdFx0dGhpcy5tWzJdICogb3V0WzhdICtcblx0XHRcdHRoaXMubVszXSAqIG91dFsxMl1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuXHRcdFx0XHRvdXRbaSAqIDQgKyBqXSAqPSAoMS4wIC8gZGV0KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgTWF0NChvdXQpXG5cblx0fVxuXG5cdGNsb25lKCk6IE1hdDQge1xuXHRcdHJldHVybiBuZXcgTWF0NChbLi4udGhpcy5tXSlcblx0fVxuXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubS50b1N0cmluZygpXG5cdH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2F2ZShsbzogbnVtYmVyLCBoaTogbnVtYmVyLCB0OiBudW1iZXIsIGYgPSAodCkgPT4gLU1hdGguY29zKHQpKTogbnVtYmVyIHtcblx0cmV0dXJuIGxvICsgKGYodCkgKyAxKSAvIDIgKiAoaGkgLSBsbylcbn1cblxuLy8gYmFzaWMgQU5TSSBDIExDR1xuY29uc3QgQSA9IDExMDM1MTUyNDVcbmNvbnN0IEMgPSAxMjM0NVxuY29uc3QgTSA9IDIxNDc0ODM2NDhcblxuZXhwb3J0IGNsYXNzIFJORyB7XG5cdHNlZWQ6IG51bWJlclxuXHRjb25zdHJ1Y3RvcihzZWVkOiBudW1iZXIpIHtcblx0XHR0aGlzLnNlZWQgPSBzZWVkXG5cdH1cblx0Z2VuKCk6IG51bWJlciB7XG5cdFx0dGhpcy5zZWVkID0gKEEgKiB0aGlzLnNlZWQgKyBDKSAlIE1cblx0XHRyZXR1cm4gdGhpcy5zZWVkIC8gTVxuXHR9XG5cdGdlbk51bWJlcihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIGEgKyB0aGlzLmdlbigpICogKGIgLSBhKVxuXHR9XG5cdGdlblZlYzIoYTogVmVjMiwgYj86IFZlYzIpOiBWZWMyIHtcblx0XHRyZXR1cm4gbmV3IFZlYzIoXG5cdFx0XHR0aGlzLmdlbk51bWJlcihhLngsIGIueCksXG5cdFx0XHR0aGlzLmdlbk51bWJlcihhLnksIGIueSksXG5cdFx0KVxuXHR9XG5cdGdlbkNvbG9yKGE6IENvbG9yLCBiOiBDb2xvcik6IENvbG9yIHtcblx0XHRyZXR1cm4gbmV3IENvbG9yKFxuXHRcdFx0dGhpcy5nZW5OdW1iZXIoYS5yLCBiLnIpLFxuXHRcdFx0dGhpcy5nZW5OdW1iZXIoYS5nLCBiLmcpLFxuXHRcdFx0dGhpcy5nZW5OdW1iZXIoYS5iLCBiLmIpLFxuXHRcdClcblx0fVxuXHRnZW5Bbnk8VCA9IFJOR1ZhbHVlPiguLi5hcmdzOiBUW10pOiBUIHtcblx0XHRpZiAoYXJncy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB0aGlzLmdlbigpIGFzIFRcblx0XHR9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2VuTnVtYmVyKDAsIGFyZ3NbMF0pIGFzIFRcblx0XHRcdH0gZWxzZSBpZiAoYXJnc1swXSBpbnN0YW5jZW9mIFZlYzIpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2VuVmVjMih2ZWMyKDAsIDApLCBhcmdzWzBdKSBhcyBUXG5cdFx0XHR9IGVsc2UgaWYgKGFyZ3NbMF0gaW5zdGFuY2VvZiBDb2xvcikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZW5Db2xvcihyZ2IoMCwgMCwgMCksIGFyZ3NbMF0pIGFzIFRcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGFyZ3NbMV0gPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2VuTnVtYmVyKGFyZ3NbMF0sIGFyZ3NbMV0pIGFzIFRcblx0XHRcdH0gZWxzZSBpZiAoYXJnc1swXSBpbnN0YW5jZW9mIFZlYzIgJiYgYXJnc1sxXSBpbnN0YW5jZW9mIFZlYzIpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2VuVmVjMihhcmdzWzBdLCBhcmdzWzFdKSBhcyBUXG5cdFx0XHR9IGVsc2UgaWYgKGFyZ3NbMF0gaW5zdGFuY2VvZiBDb2xvciAmJiBhcmdzWzFdIGluc3RhbmNlb2YgQ29sb3IpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2VuQ29sb3IoYXJnc1swXSwgYXJnc1sxXSkgYXMgVFxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vLyBUT0RPOiBsZXQgdXNlciBwYXNzIHNlZWRcbmNvbnN0IGRlZlJORyA9IG5ldyBSTkcoRGF0ZS5ub3coKSlcblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRTZWVkKHNlZWQ/OiBudW1iZXIpOiBudW1iZXIge1xuXHRpZiAoc2VlZCAhPSBudWxsKSB7XG5cdFx0ZGVmUk5HLnNlZWQgPSBzZWVkXG5cdH1cblx0cmV0dXJuIGRlZlJORy5zZWVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kKC4uLmFyZ3MpIHtcblx0Ly8gQHRzLWlnbm9yZVxuXHRyZXR1cm4gZGVmUk5HLmdlbkFueSguLi5hcmdzKVxufVxuXG4vLyBUT0RPOiByYW5kaSgpIHRvIHJldHVybiAwIC8gMT9cbmV4cG9ydCBmdW5jdGlvbiByYW5kaSguLi5hcmdzOiBudW1iZXJbXSkge1xuXHRyZXR1cm4gTWF0aC5mbG9vcihyYW5kKC4uLmFyZ3MpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmNlKHA6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRyZXR1cm4gcmFuZCgpIDw9IHBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZTxUPihsaXN0OiBUW10pOiBUIHtcblx0cmV0dXJuIGxpc3RbcmFuZGkobGlzdC5sZW5ndGgpXVxufVxuXG4vLyBUT0RPOiBiZXR0ZXIgbmFtZVxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RSZWN0UmVjdDIocjE6IFJlY3QsIHIyOiBSZWN0KTogYm9vbGVhbiB7XG5cdHJldHVybiByMS5wb3MueCArIHIxLndpZHRoID49IHIyLnBvcy54XG5cdFx0JiYgcjEucG9zLnggPD0gcjIucG9zLnggKyByMi53aWR0aFxuXHRcdCYmIHIxLnBvcy55ICsgcjEuaGVpZ2h0ID49IHIyLnBvcy55XG5cdFx0JiYgcjEucG9zLnkgPD0gcjIucG9zLnkgKyByMi5oZWlnaHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RSZWN0UmVjdChyMTogUmVjdCwgcjI6IFJlY3QpOiBib29sZWFuIHtcblx0cmV0dXJuIHIxLnBvcy54ICsgcjEud2lkdGggPiByMi5wb3MueFxuXHRcdCYmIHIxLnBvcy54IDwgcjIucG9zLnggKyByMi53aWR0aFxuXHRcdCYmIHIxLnBvcy55ICsgcjEuaGVpZ2h0ID4gcjIucG9zLnlcblx0XHQmJiByMS5wb3MueSA8IHIyLnBvcy55ICsgcjIuaGVpZ2h0XG59XG5cbi8vIFRPRE86IGJldHRlciBuYW1lXG5leHBvcnQgZnVuY3Rpb24gdGVzdExpbmVMaW5lVChsMTogTGluZSwgbDI6IExpbmUpOiBudW1iZXIgfCBudWxsIHtcblxuXHRpZiAoKGwxLnAxLnggPT09IGwxLnAyLnggJiYgbDEucDEueSA9PT0gbDEucDIueSkgfHwgKGwyLnAxLnggPT09IGwyLnAyLnggJiYgbDIucDEueSA9PT0gbDIucDIueSkpIHtcblx0XHRyZXR1cm4gbnVsbFxuXHR9XG5cblx0Y29uc3QgZGVub20gPSAoKGwyLnAyLnkgLSBsMi5wMS55KSAqIChsMS5wMi54IC0gbDEucDEueCkgLSAobDIucDIueCAtIGwyLnAxLngpICogKGwxLnAyLnkgLSBsMS5wMS55KSlcblxuXHQvLyBwYXJhbGxlbFxuXHRpZiAoZGVub20gPT09IDApIHtcblx0XHRyZXR1cm4gbnVsbFxuXHR9XG5cblx0Y29uc3QgdWEgPSAoKGwyLnAyLnggLSBsMi5wMS54KSAqIChsMS5wMS55IC0gbDIucDEueSkgLSAobDIucDIueSAtIGwyLnAxLnkpICogKGwxLnAxLnggLSBsMi5wMS54KSkgLyBkZW5vbVxuXHRjb25zdCB1YiA9ICgobDEucDIueCAtIGwxLnAxLngpICogKGwxLnAxLnkgLSBsMi5wMS55KSAtIChsMS5wMi55IC0gbDEucDEueSkgKiAobDEucDEueCAtIGwyLnAxLngpKSAvIGRlbm9tXG5cblx0Ly8gaXMgdGhlIGludGVyc2VjdGlvbiBvbiB0aGUgc2VnbWVudHNcblx0aWYgKHVhIDwgMCB8fCB1YSA+IDEgfHwgdWIgPCAwIHx8IHViID4gMSkge1xuXHRcdHJldHVybiBudWxsXG5cdH1cblxuXHRyZXR1cm4gdWFcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdExpbmVMaW5lKGwxOiBMaW5lLCBsMjogTGluZSk6IFZlYzIgfCBudWxsIHtcblx0Y29uc3QgdCA9IHRlc3RMaW5lTGluZVQobDEsIGwyKVxuXHRpZiAoIXQpIHJldHVybiBudWxsXG5cdHJldHVybiB2ZWMyKFxuXHRcdGwxLnAxLnggKyB0ICogKGwxLnAyLnggLSBsMS5wMS54KSxcblx0XHRsMS5wMS55ICsgdCAqIChsMS5wMi55IC0gbDEucDEueSksXG5cdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RSZWN0TGluZShyOiBSZWN0LCBsOiBMaW5lKTogYm9vbGVhbiB7XG5cdGlmICh0ZXN0UmVjdFBvaW50KHIsIGwucDEpIHx8IHRlc3RSZWN0UG9pbnQociwgbC5wMikpIHtcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG5cdGNvbnN0IHB0cyA9IHIucG9pbnRzKClcblx0cmV0dXJuICEhdGVzdExpbmVMaW5lKGwsIG5ldyBMaW5lKHB0c1swXSwgcHRzWzFdKSlcblx0XHR8fCAhIXRlc3RMaW5lTGluZShsLCBuZXcgTGluZShwdHNbMV0sIHB0c1syXSkpXG5cdFx0fHwgISF0ZXN0TGluZUxpbmUobCwgbmV3IExpbmUocHRzWzJdLCBwdHNbM10pKVxuXHRcdHx8ICEhdGVzdExpbmVMaW5lKGwsIG5ldyBMaW5lKHB0c1szXSwgcHRzWzBdKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RSZWN0UG9pbnQyKHI6IFJlY3QsIHB0OiBQb2ludCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gcHQueCA+PSByLnBvcy54XG5cdFx0JiYgcHQueCA8PSByLnBvcy54ICsgci53aWR0aFxuXHRcdCYmIHB0LnkgPj0gci5wb3MueVxuXHRcdCYmIHB0LnkgPD0gci5wb3MueSArIHIuaGVpZ2h0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0UmVjdFBvaW50KHI6IFJlY3QsIHB0OiBQb2ludCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gcHQueCA+IHIucG9zLnhcblx0XHQmJiBwdC54IDwgci5wb3MueCArIHIud2lkdGhcblx0XHQmJiBwdC55ID4gci5wb3MueVxuXHRcdCYmIHB0LnkgPCByLnBvcy55ICsgci5oZWlnaHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RSZWN0Q2lyY2xlKHI6IFJlY3QsIGM6IENpcmNsZSk6IGJvb2xlYW4ge1xuXHRjb25zdCBueCA9IE1hdGgubWF4KHIucG9zLngsIE1hdGgubWluKGMuY2VudGVyLngsIHIucG9zLnggKyByLndpZHRoKSlcblx0Y29uc3QgbnkgPSBNYXRoLm1heChyLnBvcy55LCBNYXRoLm1pbihjLmNlbnRlci55LCByLnBvcy55ICsgci5oZWlnaHQpKVxuXHRjb25zdCBuZWFyZXN0UG9pbnQgPSB2ZWMyKG54LCBueSlcblx0cmV0dXJuIG5lYXJlc3RQb2ludC5zZGlzdChjLmNlbnRlcikgPD0gYy5yYWRpdXMgKiBjLnJhZGl1c1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdFJlY3RQb2x5Z29uKHI6IFJlY3QsIHA6IFBvbHlnb24pOiBib29sZWFuIHtcblx0cmV0dXJuIHRlc3RQb2x5Z29uUG9seWdvbihwLCBuZXcgUG9seWdvbihyLnBvaW50cygpKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RMaW5lUG9pbnQobDogTGluZSwgcHQ6IFZlYzIpOiBib29sZWFuIHtcblx0Y29uc3QgdjEgPSBwdC5zdWIobC5wMSlcblx0Y29uc3QgdjIgPSBsLnAyLnN1YihsLnAxKVxuXG5cdC8vIENoZWNrIGlmIHNpbmUgaXMgMCwgaW4gdGhhdCBjYXNlIGxpbmVzIGFyZSBwYXJhbGxlbC5cblx0Ly8gSWYgbm90IHBhcmFsbGVsLCB0aGUgcG9pbnQgY2Fubm90IGxpZSBvbiB0aGUgbGluZS5cblx0aWYgKE1hdGguYWJzKHYxLmNyb3NzKHYyKSkgPiBOdW1iZXIuRVBTSUxPTikge1xuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cblx0Ly8gU2NhbGFyIHByb2plY3Rpb24gb2YgdjEgb24gdjJcblx0Y29uc3QgdCA9IHYxLmRvdCh2MikgLyB2Mi5kb3QodjIpXG5cdC8vIFNpbmNlIHQgaXMgcGVyY2VudHVhbCBkaXN0YW5jZSBvZiBwdCBmcm9tIGxpbmUucDEgb24gdGhlIGxpbmUsXG5cdC8vIGl0IHNob3VsZCBiZSBiZXR3ZWVuIDAlIGFuZCAxMDAlXG5cdHJldHVybiB0ID49IDAgJiYgdCA8PSAxXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0TGluZUNpcmNsZShsOiBMaW5lLCBjaXJjbGU6IENpcmNsZSk6IGJvb2xlYW4ge1xuXHRjb25zdCB2ID0gbC5wMi5zdWIobC5wMSlcblx0Y29uc3QgYSA9IHYuZG90KHYpXG5cdGNvbnN0IGNlbnRlclRvT3JpZ2luID0gbC5wMS5zdWIoY2lyY2xlLmNlbnRlcilcblx0Y29uc3QgYiA9IDIgKiB2LmRvdChjZW50ZXJUb09yaWdpbilcblx0Y29uc3QgYyA9IGNlbnRlclRvT3JpZ2luLmRvdChjZW50ZXJUb09yaWdpbikgLSBjaXJjbGUucmFkaXVzICogY2lyY2xlLnJhZGl1c1xuXHQvLyBDYWxjdWxhdGUgdGhlIGRpc2NyaW1pbmFudCBvZiBheF4yICsgYnggKyBjXG5cdGNvbnN0IGRpcyA9IGIgKiBiIC0gNCAqIGEgKiBjXG5cblx0Ly8gTm8gcm9vdFxuXHRpZiAoKGEgPD0gTnVtYmVyLkVQU0lMT04pIHx8IChkaXMgPCAwKSkge1xuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cdC8vIE9uZSBwb3NzaWJsZSByb290XG5cdGVsc2UgaWYgKGRpcyA9PSAwKSB7XG5cdFx0Y29uc3QgdCA9IC1iIC8gKDIgKiBhKVxuXHRcdGlmICh0ID49IDAgJiYgdCA8PSAxKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0fVxuXHQvLyBUd28gcG9zc2libGUgcm9vdHNcblx0ZWxzZSB7XG5cdFx0Y29uc3QgdDEgPSAoLWIgKyBNYXRoLnNxcnQoZGlzKSkgLyAoMiAqIGEpXG5cdFx0Y29uc3QgdDIgPSAoLWIgLSBNYXRoLnNxcnQoZGlzKSkgLyAoMiAqIGEpXG5cdFx0aWYgKCh0MSA+PSAwICYmIHQxIDw9IDEpIHx8ICh0MiA+PSAwICYmIHQyIDw9IDEpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0fVxuXG5cdC8vIENoZWNrIGlmIGxpbmUgaXMgY29tcGxldGVseSB3aXRoaW4gdGhlIGNpcmNsZVxuXHQvLyBXZSBvbmx5IG5lZWQgdG8gY2hlY2sgb25lIHBvaW50LCBzaW5jZSB0aGUgbGluZSBkaWRuJ3QgY3Jvc3MgdGhlIGNpcmNsZVxuXHRyZXR1cm4gdGVzdENpcmNsZVBvaW50KGNpcmNsZSwgbC5wMSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RMaW5lUG9seWdvbihsOiBMaW5lLCBwOiBQb2x5Z29uKTogYm9vbGVhbiB7XG5cblx0Ly8gdGVzdCBpZiBsaW5lIGlzIGluc2lkZVxuXHRpZiAodGVzdFBvbHlnb25Qb2ludChwLCBsLnAxKSB8fCB0ZXN0UG9seWdvblBvaW50KHAsIGwucDIpKSB7XG5cdFx0cmV0dXJuIHRydWVcblx0fVxuXG5cdC8vIHRlc3QgZWFjaCBsaW5lXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcC5wdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBwMSA9IHAucHRzW2ldXG5cdFx0Y29uc3QgcDIgPSBwLnB0c1soaSArIDEpICUgcC5wdHMubGVuZ3RoXVxuXHRcdGlmICh0ZXN0TGluZUxpbmUobCwgbmV3IExpbmUocDEsIHAyKSkpIHtcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RDaXJjbGVQb2ludChjOiBDaXJjbGUsIHA6IFBvaW50KTogYm9vbGVhbiB7XG5cdHJldHVybiBjLmNlbnRlci5zZGlzdChwKSA8IGMucmFkaXVzICogYy5yYWRpdXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RDaXJjbGVDaXJjbGUoYzE6IENpcmNsZSwgYzI6IENpcmNsZSk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gYzEuY2VudGVyLnNkaXN0KGMyLmNlbnRlcikgPCAoYzEucmFkaXVzICsgYzIucmFkaXVzKSAqIChjMS5yYWRpdXMgKyBjMi5yYWRpdXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0Q2lyY2xlUG9seWdvbihjOiBDaXJjbGUsIHA6IFBvbHlnb24pOiBib29sZWFuIHtcblx0Ly8gRm9yIGVhY2ggZWRnZSBjaGVjayBmb3IgaW50ZXJzZWN0aW9uXG5cdGxldCBwcmV2ID0gcC5wdHNbcC5wdHMubGVuZ3RoIC0gMV1cblx0Zm9yIChjb25zdCBjdXIgb2YgcC5wdHMpIHtcblx0XHRpZiAodGVzdExpbmVDaXJjbGUobmV3IExpbmUocHJldiwgY3VyKSwgYykpIHtcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHRcdHByZXYgPSBjdXJcblx0fVxuXG5cdC8vIENoZWNrIGlmIHRoZSBwb2x5Z29uIGlzIGNvbXBsZXRlbHkgd2l0aGluIHRoZSBjaXJjbGVcblx0Ly8gV2Ugb25seSBuZWVkIHRvIGNoZWNrIG9uZSBwb2ludCwgc2luY2UgdGhlIHBvbHlnb24gZGlkbid0IGNyb3NzIHRoZSBjaXJjbGVcblx0aWYgKHRlc3RDaXJjbGVQb2ludChjLCBwLnB0c1swXSkpIHtcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG5cblx0Ly8gQ2hlY2sgaWYgdGhlIGNpcmNsZSBpcyBjb21wbGV0ZWx5IHdpdGhpbiB0aGUgcG9seWdvblxuXHRyZXR1cm4gdGVzdFBvbHlnb25Qb2ludChwLCBjLmNlbnRlcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RQb2x5Z29uUG9seWdvbihwMTogUG9seWdvbiwgcDI6IFBvbHlnb24pOiBib29sZWFuIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwMS5wdHMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodGVzdExpbmVQb2x5Z29uKG5ldyBMaW5lKHAxLnB0c1tpXSwgcDEucHRzWyhpICsgMSkgJSBwMS5wdHMubGVuZ3RoXSksIHAyKSkge1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlXG59XG5cbi8vIGh0dHBzOi8vd3JmLmVjc2UucnBpLmVkdS9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RQb2x5Z29uUG9pbnQocG9seTogUG9seWdvbiwgcHQ6IFBvaW50KTogYm9vbGVhbiB7XG5cblx0bGV0IGMgPSBmYWxzZVxuXHRjb25zdCBwID0gcG9seS5wdHNcblxuXHRmb3IgKGxldCBpID0gMCwgaiA9IHAubGVuZ3RoIC0gMTsgaSA8IHAubGVuZ3RoOyBqID0gaSsrKSB7XG5cdFx0aWYgKFxuXHRcdFx0KChwW2ldLnkgPiBwdC55KSAhPSAocFtqXS55ID4gcHQueSkpXG5cdFx0XHQmJiAocHQueCA8IChwW2pdLnggLSBwW2ldLngpICogKHB0LnkgLSBwW2ldLnkpIC8gKHBbal0ueSAtIHBbaV0ueSkgKyBwW2ldLngpXG5cdFx0KSB7XG5cdFx0XHRjID0gIWNcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0UG9pbnRQb2ludChwMTogUG9pbnQsIHAyOiBQb2ludCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gcDEueCA9PT0gcDIueCAmJiBwMS55ID09PSBwMi55XG59XG5cbmV4cG9ydCBjbGFzcyBMaW5lIHtcblx0cDE6IFZlYzJcblx0cDI6IFZlYzJcblx0Y29uc3RydWN0b3IocDE6IFZlYzIsIHAyOiBWZWMyKSB7XG5cdFx0dGhpcy5wMSA9IHAxLmNsb25lKClcblx0XHR0aGlzLnAyID0gcDIuY2xvbmUoKVxuXHR9XG5cdHRyYW5zZm9ybShtOiBNYXQ0KTogTGluZSB7XG5cdFx0cmV0dXJuIG5ldyBMaW5lKG0ubXVsdFZlYzIodGhpcy5wMSksIG0ubXVsdFZlYzIodGhpcy5wMikpXG5cdH1cblx0YmJveCgpOiBSZWN0IHtcblx0XHRyZXR1cm4gUmVjdC5mcm9tUG9pbnRzKHRoaXMucDEsIHRoaXMucDIpXG5cdH1cblx0YXJlYSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnAxLmRpc3QodGhpcy5wMilcblx0fVxuXHRjbG9uZSgpOiBMaW5lIHtcblx0XHRyZXR1cm4gbmV3IExpbmUodGhpcy5wMSwgdGhpcy5wMilcblx0fVxufVxuXG4vLyBUT0RPOiB1c2UgeDogbnVtYmVyIHk6IG51bWJlciAoeCwgeSwgd2lkdGgsIGhlaWdodClcbmV4cG9ydCBjbGFzcyBSZWN0IHtcblx0cG9zOiBWZWMyXG5cdHdpZHRoOiBudW1iZXJcblx0aGVpZ2h0OiBudW1iZXJcblx0Y29uc3RydWN0b3IocG9zOiBWZWMyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuXHRcdHRoaXMucG9zID0gcG9zLmNsb25lKClcblx0XHR0aGlzLndpZHRoID0gd2lkdGhcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodFxuXHR9XG5cdHN0YXRpYyBmcm9tUG9pbnRzKHAxOiBWZWMyLCBwMjogVmVjMik6IFJlY3Qge1xuXHRcdHJldHVybiBuZXcgUmVjdChwMS5jbG9uZSgpLCBwMi54IC0gcDEueCwgcDIueSAtIHAxLnkpXG5cdH1cblx0Y2VudGVyKCk6IFZlYzIge1xuXHRcdHJldHVybiBuZXcgVmVjMih0aGlzLnBvcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMucG9zLnkgKyB0aGlzLmhlaWdodCAvIDIpXG5cdH1cblx0cG9pbnRzKCk6IFtWZWMyLCBWZWMyLCBWZWMyLCBWZWMyXSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdHRoaXMucG9zLFxuXHRcdFx0dGhpcy5wb3MuYWRkKHRoaXMud2lkdGgsIDApLFxuXHRcdFx0dGhpcy5wb3MuYWRkKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSxcblx0XHRcdHRoaXMucG9zLmFkZCgwLCB0aGlzLmhlaWdodCksXG5cdFx0XVxuXHR9XG5cdHRyYW5zZm9ybShtOiBNYXQ0KTogUG9seWdvbiB7XG5cdFx0cmV0dXJuIG5ldyBQb2x5Z29uKHRoaXMucG9pbnRzKCkubWFwKChwdCkgPT4gbS5tdWx0VmVjMihwdCkpKVxuXHR9XG5cdGJib3goKTogUmVjdCB7XG5cdFx0cmV0dXJuIHRoaXMuY2xvbmUoKVxuXHR9XG5cdGFyZWEoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0XG5cdH1cblx0Y2xvbmUoKTogUmVjdCB7XG5cdFx0cmV0dXJuIG5ldyBSZWN0KHRoaXMucG9zLmNsb25lKCksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuXHR9XG5cdGRpc3RUb1BvaW50KHA6IFZlYzIpOiBudW1iZXIge1xuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy5zZGlzdFRvUG9pbnQocCkpXG5cdH1cblx0c2Rpc3RUb1BvaW50KHA6IFZlYzIpOiBudW1iZXIge1xuXHRcdGNvbnN0IG1pbiA9IHRoaXMucG9zXG5cdFx0Y29uc3QgbWF4ID0gdGhpcy5wb3MuYWRkKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuXHRcdGNvbnN0IGR4ID0gTWF0aC5tYXgobWluLnggLSBwLngsIDAsIHAueCAtIG1heC54KVxuXHRcdGNvbnN0IGR5ID0gTWF0aC5tYXgobWluLnkgLSBwLnksIDAsIHAueSAtIG1heC55KVxuXHRcdHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGUge1xuXHRjZW50ZXI6IFZlYzJcblx0cmFkaXVzOiBudW1iZXJcblx0Y29uc3RydWN0b3IoY2VudGVyOiBWZWMyLCByYWRpdXM6IG51bWJlcikge1xuXHRcdHRoaXMuY2VudGVyID0gY2VudGVyLmNsb25lKClcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1c1xuXHR9XG5cdHRyYW5zZm9ybSh0cjogTWF0NCk6IEVsbGlwc2Uge1xuXHRcdHJldHVybiBuZXcgRWxsaXBzZSh0aGlzLmNlbnRlciwgdGhpcy5yYWRpdXMsIHRoaXMucmFkaXVzKS50cmFuc2Zvcm0odHIpXG5cdH1cblx0YmJveCgpOiBSZWN0IHtcblx0XHRyZXR1cm4gUmVjdC5mcm9tUG9pbnRzKFxuXHRcdFx0dGhpcy5jZW50ZXIuc3ViKHZlYzIodGhpcy5yYWRpdXMpKSxcblx0XHRcdHRoaXMuY2VudGVyLmFkZCh2ZWMyKHRoaXMucmFkaXVzKSksXG5cdFx0KVxuXHR9XG5cdGFyZWEoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cyAqIE1hdGguUElcblx0fVxuXHRjbG9uZSgpOiBDaXJjbGUge1xuXHRcdHJldHVybiBuZXcgQ2lyY2xlKHRoaXMuY2VudGVyLCB0aGlzLnJhZGl1cylcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRWxsaXBzZSB7XG5cdGNlbnRlcjogVmVjMlxuXHRyYWRpdXNYOiBudW1iZXJcblx0cmFkaXVzWTogbnVtYmVyXG5cdGNvbnN0cnVjdG9yKGNlbnRlcjogVmVjMiwgcng6IG51bWJlciwgcnk6IG51bWJlcikge1xuXHRcdHRoaXMuY2VudGVyID0gY2VudGVyLmNsb25lKClcblx0XHR0aGlzLnJhZGl1c1ggPSByeFxuXHRcdHRoaXMucmFkaXVzWSA9IHJ5XG5cdH1cblx0dHJhbnNmb3JtKHRyOiBNYXQ0KTogRWxsaXBzZSB7XG5cdFx0cmV0dXJuIG5ldyBFbGxpcHNlKFxuXHRcdFx0dHIubXVsdFZlYzIodGhpcy5jZW50ZXIpLFxuXHRcdFx0dHIubVswXSAqIHRoaXMucmFkaXVzWCxcblx0XHRcdHRyLm1bNV0gKiB0aGlzLnJhZGl1c1ksXG5cdFx0KVxuXHR9XG5cdGJib3goKTogUmVjdCB7XG5cdFx0cmV0dXJuIFJlY3QuZnJvbVBvaW50cyhcblx0XHRcdHRoaXMuY2VudGVyLnN1Yih2ZWMyKHRoaXMucmFkaXVzWCwgdGhpcy5yYWRpdXNZKSksXG5cdFx0XHR0aGlzLmNlbnRlci5hZGQodmVjMih0aGlzLnJhZGl1c1gsIHRoaXMucmFkaXVzWSkpLFxuXHRcdClcblx0fVxuXHRhcmVhKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucmFkaXVzWCAqIHRoaXMucmFkaXVzWSAqIE1hdGguUElcblx0fVxuXHRjbG9uZSgpOiBFbGxpcHNlIHtcblx0XHRyZXR1cm4gbmV3IEVsbGlwc2UodGhpcy5jZW50ZXIsIHRoaXMucmFkaXVzWCwgdGhpcy5yYWRpdXNZKVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQb2x5Z29uIHtcblx0cHRzOiBWZWMyW11cblx0Y29uc3RydWN0b3IocHRzOiBWZWMyW10pIHtcblx0XHRpZiAocHRzLmxlbmd0aCA8IDMpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlBvbHlnb25zIHNob3VsZCBoYXZlIGF0IGxlYXN0IDMgdmVydGljZXNcIilcblx0XHR9XG5cdFx0dGhpcy5wdHMgPSBwdHNcblx0fVxuXHR0cmFuc2Zvcm0obTogTWF0NCk6IFBvbHlnb24ge1xuXHRcdHJldHVybiBuZXcgUG9seWdvbih0aGlzLnB0cy5tYXAoKHB0KSA9PiBtLm11bHRWZWMyKHB0KSkpXG5cdH1cblx0YmJveCgpOiBSZWN0IHtcblx0XHRjb25zdCBwMSA9IHZlYzIoTnVtYmVyLk1BWF9WQUxVRSlcblx0XHRjb25zdCBwMiA9IHZlYzIoLU51bWJlci5NQVhfVkFMVUUpXG5cdFx0Zm9yIChjb25zdCBwdCBvZiB0aGlzLnB0cykge1xuXHRcdFx0cDEueCA9IE1hdGgubWluKHAxLngsIHB0LngpXG5cdFx0XHRwMi54ID0gTWF0aC5tYXgocDIueCwgcHQueClcblx0XHRcdHAxLnkgPSBNYXRoLm1pbihwMS55LCBwdC55KVxuXHRcdFx0cDIueSA9IE1hdGgubWF4KHAyLnksIHB0LnkpXG5cdFx0fVxuXHRcdHJldHVybiBSZWN0LmZyb21Qb2ludHMocDEsIHAyKVxuXHR9XG5cdGFyZWEoKTogbnVtYmVyIHtcblx0XHRsZXQgdG90YWwgPSAwXG5cdFx0Y29uc3QgbCA9IHRoaXMucHRzLmxlbmd0aFxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRjb25zdCBwMSA9IHRoaXMucHRzW2ldXG5cdFx0XHRjb25zdCBwMiA9IHRoaXMucHRzWyhpICsgMSkgJSBsXVxuXHRcdFx0dG90YWwgKz0gKHAxLnggKiBwMi55ICogMC41KVxuXHRcdFx0dG90YWwgLT0gKHAyLnggKiBwMS55ICogMC41KVxuXHRcdH1cblx0XHRyZXR1cm4gTWF0aC5hYnModG90YWwpXG5cdH1cblx0Y2xvbmUoKTogUG9seWdvbiB7XG5cdFx0cmV0dXJuIG5ldyBQb2x5Z29uKHRoaXMucHRzLm1hcCgocHQpID0+IHB0LmNsb25lKCkpKVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXQocDE6IFBvbHlnb24sIHAyOiBQb2x5Z29uKTogVmVjMiB8IG51bGwge1xuXHRsZXQgb3ZlcmxhcCA9IE51bWJlci5NQVhfVkFMVUVcblx0bGV0IGRpc3BsYWNlbWVudCA9IHZlYzIoMClcblx0Zm9yIChjb25zdCBwb2x5IG9mIFtwMSwgcDJdKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb2x5LnB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgYSA9IHBvbHkucHRzW2ldXG5cdFx0XHRjb25zdCBiID0gcG9seS5wdHNbKGkgKyAxKSAlIHBvbHkucHRzLmxlbmd0aF1cblx0XHRcdGNvbnN0IGF4aXNQcm9qID0gYi5zdWIoYSkubm9ybWFsKCkudW5pdCgpXG5cdFx0XHRsZXQgbWluMSA9IE51bWJlci5NQVhfVkFMVUVcblx0XHRcdGxldCBtYXgxID0gLU51bWJlci5NQVhfVkFMVUVcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgcDEucHRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGNvbnN0IHEgPSBwMS5wdHNbal0uZG90KGF4aXNQcm9qKVxuXHRcdFx0XHRtaW4xID0gTWF0aC5taW4obWluMSwgcSlcblx0XHRcdFx0bWF4MSA9IE1hdGgubWF4KG1heDEsIHEpXG5cdFx0XHR9XG5cdFx0XHRsZXQgbWluMiA9IE51bWJlci5NQVhfVkFMVUVcblx0XHRcdGxldCBtYXgyID0gLU51bWJlci5NQVhfVkFMVUVcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgcDIucHRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGNvbnN0IHEgPSBwMi5wdHNbal0uZG90KGF4aXNQcm9qKVxuXHRcdFx0XHRtaW4yID0gTWF0aC5taW4obWluMiwgcSlcblx0XHRcdFx0bWF4MiA9IE1hdGgubWF4KG1heDIsIHEpXG5cdFx0XHR9XG5cdFx0XHRjb25zdCBvID0gTWF0aC5taW4obWF4MSwgbWF4MikgLSBNYXRoLm1heChtaW4xLCBtaW4yKVxuXHRcdFx0aWYgKG8gPCAwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsXG5cdFx0XHR9XG5cdFx0XHRpZiAobyA8IE1hdGguYWJzKG92ZXJsYXApKSB7XG5cdFx0XHRcdGNvbnN0IG8xID0gbWF4MiAtIG1pbjFcblx0XHRcdFx0Y29uc3QgbzIgPSBtaW4yIC0gbWF4MVxuXHRcdFx0XHRvdmVybGFwID0gTWF0aC5hYnMobzEpIDwgTWF0aC5hYnMobzIpID8gbzEgOiBvMlxuXHRcdFx0XHRkaXNwbGFjZW1lbnQgPSBheGlzUHJvai5zY2FsZShvdmVybGFwKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZGlzcGxhY2VtZW50XG59XG4iLCAiZXhwb3J0IGNsYXNzIFJlZ2lzdHJ5PFQ+IGV4dGVuZHMgTWFwPG51bWJlciwgVD4ge1xuXHRwcml2YXRlIGxhc3RJRDogbnVtYmVyXG5cdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRzdXBlciguLi5hcmdzKVxuXHRcdHRoaXMubGFzdElEID0gMFxuXHR9XG5cdHB1c2godjogVCk6IG51bWJlciB7XG5cdFx0Y29uc3QgaWQgPSB0aGlzLmxhc3RJRFxuXHRcdHRoaXMuc2V0KGlkLCB2KVxuXHRcdHRoaXMubGFzdElEKytcblx0XHRyZXR1cm4gaWRcblx0fVxuXHRwdXNoZCh2OiBUKTogKCkgPT4gdm9pZCB7XG5cdFx0Y29uc3QgaWQgPSB0aGlzLnB1c2godilcblx0XHRyZXR1cm4gKCkgPT4gdGhpcy5kZWxldGUoaWQpXG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50Q29udHJvbGxlciB7XG5cdHBhdXNlZDogYm9vbGVhbiA9IGZhbHNlXG5cdHJlYWRvbmx5IGNhbmNlbDogKCkgPT4gdm9pZFxuXHRjb25zdHJ1Y3RvcihjYW5jZWw6ICgpID0+IHZvaWQpIHtcblx0XHR0aGlzLmNhbmNlbCA9IGNhbmNlbFxuXHR9XG5cdHN0YXRpYyBqb2luKGV2ZW50czogRXZlbnRDb250cm9sbGVyW10pOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdGNvbnN0IGV2ID0gbmV3IEV2ZW50Q29udHJvbGxlcigoKSA9PiBldmVudHMuZm9yRWFjaCgoZSkgPT4gZS5jYW5jZWwoKSkpXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV2LCBcInBhdXNlZFwiLCB7XG5cdFx0XHRnZXQ6ICgpID0+IGV2ZW50c1swXS5wYXVzZWQsXG5cdFx0XHRzZXQ6IChwOiBib29sZWFuKSA9PiBldmVudHMuZm9yRWFjaCgoZSkgPT4gZS5wYXVzZWQgPSBwKSxcblx0XHR9KVxuXHRcdGV2LnBhdXNlZCA9IGZhbHNlXG5cdFx0cmV0dXJuIGV2XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50PEFyZ3MgZXh0ZW5kcyBhbnlbXSA9IGFueVtdPiB7XG5cdHByaXZhdGUgaGFuZGxlcnM6IFJlZ2lzdHJ5PCguLi5hcmdzOiBBcmdzKSA9PiB2b2lkPiA9IG5ldyBSZWdpc3RyeSgpXG5cdGFkZChhY3Rpb246ICguLi5hcmdzOiBBcmdzKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRjb25zdCBjYW5jZWwgPSB0aGlzLmhhbmRsZXJzLnB1c2hkKCguLi5hcmdzOiBBcmdzKSA9PiB7XG5cdFx0XHRpZiAoZXYucGF1c2VkKSByZXR1cm5cblx0XHRcdGFjdGlvbiguLi5hcmdzKVxuXHRcdH0pXG5cdFx0Y29uc3QgZXYgPSBuZXcgRXZlbnRDb250cm9sbGVyKGNhbmNlbClcblx0XHRyZXR1cm4gZXZcblx0fVxuXHRhZGRPbmNlKGFjdGlvbjogKC4uLmFyZ3MpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdGNvbnN0IGV2ID0gdGhpcy5hZGQoKC4uLmFyZ3MpID0+IHtcblx0XHRcdGV2LmNhbmNlbCgpXG5cdFx0XHRhY3Rpb24oLi4uYXJncylcblx0XHR9KVxuXHRcdHJldHVybiBldlxuXHR9XG5cdG5leHQoKTogUHJvbWlzZTxBcmdzPiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHRoaXMuYWRkT25jZShyZXMpKVxuXHR9XG5cdHRyaWdnZXIoLi4uYXJnczogQXJncykge1xuXHRcdHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoYWN0aW9uKSA9PiBhY3Rpb24oLi4uYXJncykpXG5cdH1cblx0bnVtTGlzdGVuZXJzKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaGFuZGxlcnMuc2l6ZVxuXHR9XG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuaGFuZGxlcnMuY2xlYXIoKVxuXHR9XG59XG5cbi8vIFRPRE86IG9ubHkgYWNjZXB0IG9uZSBhcmd1bWVudD9cbmV4cG9ydCBjbGFzcyBFdmVudEhhbmRsZXI8RXZlbnRNYXAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnlbXT4+IHtcblx0cHJpdmF0ZSBoYW5kbGVyczogUGFydGlhbDx7XG5cdFx0W05hbWUgaW4ga2V5b2YgRXZlbnRNYXBdOiBFdmVudDxFdmVudE1hcFtOYW1lXT5cblx0fT4gPSB7fVxuXHRvbjxOYW1lIGV4dGVuZHMga2V5b2YgRXZlbnRNYXA+KFxuXHRcdG5hbWU6IE5hbWUsXG5cdFx0YWN0aW9uOiAoLi4uYXJnczogRXZlbnRNYXBbTmFtZV0pID0+IHZvaWQsXG5cdCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0aWYgKCF0aGlzLmhhbmRsZXJzW25hbWVdKSB7XG5cdFx0XHR0aGlzLmhhbmRsZXJzW25hbWVdID0gbmV3IEV2ZW50PEV2ZW50TWFwW05hbWVdPigpXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmhhbmRsZXJzW25hbWVdLmFkZChhY3Rpb24pXG5cdH1cblx0b25PbmNlPE5hbWUgZXh0ZW5kcyBrZXlvZiBFdmVudE1hcD4oXG5cdFx0bmFtZTogTmFtZSxcblx0XHRhY3Rpb246ICguLi5hcmdzOiBFdmVudE1hcFtOYW1lXSkgPT4gdm9pZCxcblx0KTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRjb25zdCBldiA9IHRoaXMub24obmFtZSwgKC4uLmFyZ3MpID0+IHtcblx0XHRcdGV2LmNhbmNlbCgpXG5cdFx0XHRhY3Rpb24oLi4uYXJncylcblx0XHR9KVxuXHRcdHJldHVybiBldlxuXHR9XG5cdG5leHQ8TmFtZSBleHRlbmRzIGtleW9mIEV2ZW50TWFwPihuYW1lOiBOYW1lKTogUHJvbWlzZTx1bmtub3duPiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcblx0XHRcdC8vIFRPRE86IGNhbiBvbmx5IHBhc3MgMSB2YWwgdG8gcmVzb2x2ZSgpXG5cdFx0XHR0aGlzLm9uT25jZShuYW1lLCAoLi4uYXJnczogRXZlbnRNYXBbTmFtZV0pID0+IHJlcyhhcmdzWzBdKSlcblx0XHR9KVxuXHR9XG5cdHRyaWdnZXI8TmFtZSBleHRlbmRzIGtleW9mIEV2ZW50TWFwPihuYW1lOiBOYW1lLCAuLi5hcmdzOiBFdmVudE1hcFtOYW1lXSkge1xuXHRcdGlmICh0aGlzLmhhbmRsZXJzW25hbWVdKSB7XG5cdFx0XHR0aGlzLmhhbmRsZXJzW25hbWVdLnRyaWdnZXIoLi4uYXJncylcblx0XHR9XG5cdH1cblx0cmVtb3ZlPE5hbWUgZXh0ZW5kcyBrZXlvZiBFdmVudE1hcD4obmFtZTogTmFtZSkge1xuXHRcdGRlbGV0ZSB0aGlzLmhhbmRsZXJzW25hbWVdXG5cdH1cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5oYW5kbGVycyA9IHt9XG5cdH1cblx0bnVtTGlzdGVuZXJzPE5hbWUgZXh0ZW5kcyBrZXlvZiBFdmVudE1hcD4obmFtZTogTmFtZSk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaGFuZGxlcnNbbmFtZV0/Lm51bUxpc3RlbmVycygpID8/IDBcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcEVxKG8xOiBhbnksIG8yOiBhbnkpOiBib29sZWFuIHtcblx0aWYgKG8xID09PSBvMikge1xuXHRcdHJldHVybiB0cnVlXG5cdH1cblx0Y29uc3QgdDEgPSB0eXBlb2YgbzFcblx0Y29uc3QgdDIgPSB0eXBlb2YgbzJcblx0aWYgKHQxICE9PSB0Mikge1xuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cdGlmICh0MSA9PT0gXCJvYmplY3RcIiAmJiB0MiA9PT0gXCJvYmplY3RcIiAmJiBvMSAhPT0gbnVsbCAmJiBvMiAhPT0gbnVsbCkge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG8xKSAhPT0gQXJyYXkuaXNBcnJheShvMikpIHtcblx0XHRcdHJldHVybiBmYWxzZVxuXHRcdH1cblx0XHRjb25zdCBrMSA9IE9iamVjdC5rZXlzKG8xKVxuXHRcdGNvbnN0IGsyID0gT2JqZWN0LmtleXMobzIpXG5cdFx0aWYgKGsxLmxlbmd0aCAhPT0gazIubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBrIG9mIGsxKSB7XG5cdFx0XHRjb25zdCB2MSA9IG8xW2tdXG5cdFx0XHRjb25zdCB2MiA9IG8yW2tdXG5cdFx0XHRpZiAoIWRlZXBFcSh2MSwgdjIpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG5cdHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFzZTY0VG9BcnJheUJ1ZmZlcihiYXNlNjQ6IHN0cmluZyk6IEFycmF5QnVmZmVyIHtcblx0Y29uc3QgYmluc3RyID0gd2luZG93LmF0b2IoYmFzZTY0KVxuXHRjb25zdCBsZW4gPSBiaW5zdHIubGVuZ3RoXG5cdGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Ynl0ZXNbaV0gPSBiaW5zdHIuY2hhckNvZGVBdChpKVxuXHR9XG5cdHJldHVybiBieXRlcy5idWZmZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFVUkxUb0FycmF5QnVmZmVyKHVybDogc3RyaW5nKTogQXJyYXlCdWZmZXIge1xuXHRyZXR1cm4gYmFzZTY0VG9BcnJheUJ1ZmZlcih1cmwuc3BsaXQoXCIsXCIpWzFdKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWQoZmlsZW5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcblx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG5cdGEuaHJlZiA9IHVybFxuXHRhLmRvd25sb2FkID0gZmlsZW5hbWVcblx0YS5jbGljaygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZFRleHQoZmlsZW5hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nKSB7XG5cdGRvd25sb2FkKGZpbGVuYW1lLCBcImRhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LFwiICsgdGV4dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkSlNPTihmaWxlbmFtZTogc3RyaW5nLCBkYXRhOiBhbnkpIHtcblx0ZG93bmxvYWRUZXh0KGZpbGVuYW1lLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkQmxvYihmaWxlbmFtZTogc3RyaW5nLCBibG9iOiBCbG9iKSB7XG5cdGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcblx0ZG93bmxvYWQoZmlsZW5hbWUsIHVybClcblx0VVJMLnJldm9rZU9iamVjdFVSTCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBpc0RhdGFVUkwgPSAoc3RyOiBzdHJpbmcpID0+IHN0ci5tYXRjaCgvXmRhdGE6XFx3K1xcL1xcdys7YmFzZTY0LC4rLylcbmV4cG9ydCBjb25zdCBnZXRGaWxlRXh0ID0gKHA6IHN0cmluZykgPT4gcC5zcGxpdChcIi5cIikucG9wKClcbmV4cG9ydCBjb25zdCBnZXRGaWxlTmFtZSA9IChwOiBzdHJpbmcpID0+IHAuc3BsaXQoXCIuXCIpLnNsaWNlKDAsIC0xKS5qb2luKFwiLlwiKVxuXG50eXBlIEZ1bmMgPSAoLi4uYXJnczogYW55W10pID0+IGFueVxuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcmxvYWQyPEEgZXh0ZW5kcyBGdW5jLCBCIGV4dGVuZHMgRnVuYz4oZm4xOiBBLCBmbjI6IEIpOiBBICYgQiB7XG5cdHJldHVybiAoKC4uLmFyZ3MpID0+IHtcblx0XHRjb25zdCBhbCA9IGFyZ3MubGVuZ3RoXG5cdFx0aWYgKGFsID09PSBmbjEubGVuZ3RoKSByZXR1cm4gZm4xKC4uLmFyZ3MpXG5cdFx0aWYgKGFsID09PSBmbjIubGVuZ3RoKSByZXR1cm4gZm4yKC4uLmFyZ3MpXG5cdH0pIGFzIEEgJiBCXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVybG9hZDM8XG5cdEEgZXh0ZW5kcyBGdW5jLFxuXHRCIGV4dGVuZHMgRnVuYyxcblx0QyBleHRlbmRzIEZ1bmMsXG4+KGZuMTogQSwgZm4yOiBCLCBmbjM6IEMpOiBBICYgQiAmIEMge1xuXHRyZXR1cm4gKCguLi5hcmdzKSA9PiB7XG5cdFx0Y29uc3QgYWwgPSBhcmdzLmxlbmd0aFxuXHRcdGlmIChhbCA9PT0gZm4xLmxlbmd0aCkgcmV0dXJuIGZuMSguLi5hcmdzKVxuXHRcdGlmIChhbCA9PT0gZm4yLmxlbmd0aCkgcmV0dXJuIGZuMiguLi5hcmdzKVxuXHRcdGlmIChhbCA9PT0gZm4zLmxlbmd0aCkgcmV0dXJuIGZuMyguLi5hcmdzKVxuXHR9KSBhcyBBICYgQiAmIENcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJsb2FkNDxcblx0QSBleHRlbmRzIEZ1bmMsXG5cdEIgZXh0ZW5kcyBGdW5jLFxuXHRDIGV4dGVuZHMgRnVuYyxcblx0RCBleHRlbmRzIEZ1bmMsXG4+KGZuMTogQSwgZm4yOiBCLCBmbjM6IEMsIGZuNDogRCk6IEEgJiBCICYgQyAmIEQge1xuXHRyZXR1cm4gKCguLi5hcmdzKSA9PiB7XG5cdFx0Y29uc3QgYWwgPSBhcmdzLmxlbmd0aFxuXHRcdGlmIChhbCA9PT0gZm4xLmxlbmd0aCkgcmV0dXJuIGZuMSguLi5hcmdzKVxuXHRcdGlmIChhbCA9PT0gZm4yLmxlbmd0aCkgcmV0dXJuIGZuMiguLi5hcmdzKVxuXHRcdGlmIChhbCA9PT0gZm4zLmxlbmd0aCkgcmV0dXJuIGZuMyguLi5hcmdzKVxuXHRcdGlmIChhbCA9PT0gZm40Lmxlbmd0aCkgcmV0dXJuIGZuNCguLi5hcmdzKVxuXHR9KSBhcyBBICYgQiAmIEMgJiBEXG59XG5cbmV4cG9ydCBjb25zdCB1aWQgPSAoKCkgPT4ge1xuXHRsZXQgaWQgPSAwXG5cdHJldHVybiAoKSA9PiBpZCsrXG59KSgpXG5cbmV4cG9ydCBjb25zdCBnZXRFcnJvck1lc3NhZ2UgPSAoZXJyb3I6IHVua25vd24pID0+XG5cdChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpXG5cbmNvbnN0IHdhcm5lZCA9IG5ldyBTZXQoKVxuXG5leHBvcnQgZnVuY3Rpb24gd2Fybihtc2c6IHN0cmluZykge1xuXHRpZiAoIXdhcm5lZC5oYXMobXNnKSkge1xuXHRcdHdhcm5lZC5hZGQobXNnKVxuXHRcdGNvbnNvbGUud2Fybihtc2cpXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcHJlY2F0ZU1zZyhvbGROYW1lOiBzdHJpbmcsIG5ld05hbWU6IHN0cmluZykge1xuXHR3YXJuKGAke29sZE5hbWV9IGlzIGRlcHJlY2F0ZWQuIFVzZSAke25ld05hbWV9IGluc3RlYWQuYClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcHJlY2F0ZShvbGROYW1lOiBzdHJpbmcsIG5ld05hbWU6IHN0cmluZywgbmV3RnVuYzogKC4uLmFyZ3MpID0+IGFueSkge1xuXHRyZXR1cm4gKC4uLmFyZ3MpID0+IHtcblx0XHRkZXByZWNhdGVNc2cob2xkTmFtZSwgbmV3TmFtZSlcblx0XHRyZXR1cm4gbmV3RnVuYyguLi5hcmdzKVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiZW5jaG1hcmsodGFzazogKCkgPT4gdm9pZCwgdGltZXM6IG51bWJlciA9IDEpIHtcblx0Y29uc3QgdDEgPSBwZXJmb3JtYW5jZS5ub3coKVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVzOyBpKyspIHtcblx0XHR0YXNrKClcblx0fVxuXHRjb25zdCB0MiA9IHBlcmZvcm1hbmNlLm5vdygpXG5cdHJldHVybiB0MiAtIHQxXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlUGVyZih0MTogKCkgPT4gdm9pZCwgdDI6ICgpID0+IHZvaWQsIHRpbWVzOiBudW1iZXIgPSAxKSB7XG5cdHJldHVybiBiZW5jaG1hcmsodDIsIHRpbWVzKSAvIGJlbmNobWFyayh0MSwgdGltZXMpXG59XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnlIZWFwPFQ+IHtcblx0X2l0ZW1zOiBUW11cblx0X2NvbXBhcmVGbjogKGE6IFQsIGI6IFQpID0+IGJvb2xlYW5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGJpbmFyeSBoZWFwIHdpdGggdGhlIGdpdmVuIGNvbXBhcmUgZnVuY3Rpb25cblx0ICogTm90IHBhc3NpbmcgYSBjb21wYXJlIGZ1bmN0aW9uIHdpbGwgZ2l2ZSBhIG1pbiBoZWFwXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihjb21wYXJlRm4gPSAoYTogVCwgYjogVCkgPT4gYSA8IGIpIHtcblx0XHR0aGlzLl9jb21wYXJlRm4gPSBjb21wYXJlRm5cblx0XHR0aGlzLl9pdGVtcyA9IFtdXG5cdH1cblxuXHQvKipcblx0ICogSW5zZXJ0IGFuIGl0ZW0gaW50byB0aGUgYmluYXJ5IGhlYXBcblx0ICovXG5cdGluc2VydChpdGVtOiBUKSB7XG5cdFx0dGhpcy5faXRlbXMucHVzaChpdGVtKVxuXHRcdHRoaXMubW92ZVVwKHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDEpXG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIHRoZSBzbWFsbGVzdCBpdGVtIGZyb20gdGhlIGJpbmFyeSBoZWFwIGluIGNhc2Ugb2YgYSBtaW4gaGVhcFxuXHQgKiBvciB0aGUgZ3JlYXRlc3QgaXRlbSBmcm9tIHRoZSBiaW5hcnkgaGVhcCBpbiBjYXNlIG9mIGEgbWF4IGhlYXBcblx0ICovXG5cdHJlbW92ZSgpIHtcblx0XHRpZiAodGhpcy5faXRlbXMubGVuZ3RoID09PSAwKVxuXHRcdFx0cmV0dXJuIG51bGxcblx0XHRjb25zdCBpdGVtID0gdGhpcy5faXRlbXNbMF1cblx0XHRjb25zdCBsYXN0SXRlbSA9IHRoaXMuX2l0ZW1zLnBvcCgpXG5cdFx0aWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCAhPT0gMCkge1xuXHRcdFx0dGhpcy5faXRlbXNbMF0gPSBsYXN0SXRlbSBhcyBUXG5cdFx0XHR0aGlzLm1vdmVEb3duKDApXG5cdFx0fVxuXHRcdHJldHVybiBpdGVtXG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIGFsbCBpdGVtc1xuXHQgKi9cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5faXRlbXMuc3BsaWNlKDAsIHRoaXMuX2l0ZW1zLmxlbmd0aClcblx0fVxuXG5cdG1vdmVVcChwb3M6IG51bWJlcikge1xuXHRcdHdoaWxlIChwb3MgPiAwKSB7XG5cdFx0XHRjb25zdCBwYXJlbnQgPSBNYXRoLmZsb29yKChwb3MgLSAxKSAvIDIpXG5cdFx0XHRpZiAoIXRoaXMuX2NvbXBhcmVGbih0aGlzLl9pdGVtc1twb3NdLCB0aGlzLl9pdGVtc1twYXJlbnRdKSlcblx0XHRcdFx0aWYgKHRoaXMuX2l0ZW1zW3Bvc10gPj0gdGhpcy5faXRlbXNbcGFyZW50XSlcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0dGhpcy5zd2FwKHBvcywgcGFyZW50KVxuXHRcdFx0cG9zID0gcGFyZW50XG5cdFx0fVxuXHR9XG5cblx0bW92ZURvd24ocG9zOiBudW1iZXIpIHtcblx0XHR3aGlsZSAocG9zIDwgTWF0aC5mbG9vcih0aGlzLl9pdGVtcy5sZW5ndGggLyAyKSkge1xuXHRcdFx0bGV0IGNoaWxkID0gMiAqIHBvcyArIDFcblx0XHRcdGlmIChjaGlsZCA8IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDEgJiYgIXRoaXMuX2NvbXBhcmVGbih0aGlzLl9pdGVtc1tjaGlsZF0sIHRoaXMuX2l0ZW1zW2NoaWxkICsgMV0pKVxuXHRcdFx0XHQrK2NoaWxkXG5cdFx0XHRpZiAodGhpcy5fY29tcGFyZUZuKHRoaXMuX2l0ZW1zW3Bvc10sIHRoaXMuX2l0ZW1zW2NoaWxkXSkpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHR0aGlzLnN3YXAocG9zLCBjaGlsZClcblx0XHRcdHBvcyA9IGNoaWxkXG5cdFx0fVxuXHR9XG5cblx0c3dhcChpbmRleDE6IG51bWJlciwgaW5kZXgyOiBudW1iZXIpIHtcblx0XHRbdGhpcy5faXRlbXNbaW5kZXgxXSwgdGhpcy5faXRlbXNbaW5kZXgyXV0gPSBbdGhpcy5faXRlbXNbaW5kZXgyXSwgdGhpcy5faXRlbXNbaW5kZXgxXV1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBhbW91bnQgb2YgaXRlbXNcblx0ICovXG5cdGdldCBsZW5ndGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2l0ZW1zLmxlbmd0aFxuXHR9XG59XG5cbmNvbnN0IGVudW0gRW51bVJ1bmVzQ29kZSB7XG5cdEhJR0hfU1VSUk9HQVRFX1NUQVJUID0gMHhkODAwLFxuXHRISUdIX1NVUlJPR0FURV9FTkQgPSAweGRiZmYsXG5cblx0TE9XX1NVUlJPR0FURV9TVEFSVCA9IDB4ZGMwMCxcblxuXHRSRUdJT05BTF9JTkRJQ0FUT1JfU1RBUlQgPSAweDFmMWU2LFxuXHRSRUdJT05BTF9JTkRJQ0FUT1JfRU5EID0gMHgxZjFmZixcblxuXHRGSVRaUEFUUklDS19NT0RJRklFUl9TVEFSVCA9IDB4MWYzZmIsXG5cdEZJVFpQQVRSSUNLX01PRElGSUVSX0VORCA9IDB4MWYzZmYsXG5cblx0VkFSSUFUSU9OX01PRElGSUVSX1NUQVJUID0gMHhmZTAwLFxuXHRWQVJJQVRJT05fTU9ESUZJRVJfRU5EID0gMHhmZTBmLFxuXG5cdERJQUNSSVRJQ0FMX01BUktTX1NUQVJUID0gMHgyMGQwLFxuXHRESUFDUklUSUNBTF9NQVJLU19FTkQgPSAweDIwZmYsXG5cblx0U1VCRElWSVNJT05fSU5ESUNBVE9SX1NUQVJUID0gMHgxZjNmNCxcblx0VEFHU19TVEFSVCA9IDB4ZTAwMDAsXG5cdFRBR1NfRU5EID0gMHhlMDA3ZixcblxuXHRaV0ogPSAweDIwMGQsXG59XG5cbmNvbnN0IEdSQVBIRU1FUyA9IE9iamVjdC5mcmVlemUoW1xuXHQweDAzMDgsIC8vICggXHUyNUNDXHUwMzA4ICkgQ09NQklOSU5HIERJQUVSRVNJU1xuXHQweDA5MzcsIC8vICggXHUwOTM3ICkgREVWQU5BR0FSSSBMRVRURVIgU1NBXG5cdDB4MDkzRiwgLy8gKCBcdTA5M0YgKSBERVZBTkFHQVJJIFZPV0VMIFNJR04gSVxuXHQweDBCQTgsIC8vICggXHUwQkE4ICkgVEFNSUwgTEVUVEVSIE5BXG5cdDB4MEJCRiwgLy8gKCBcdTBCQkYgKSBUQU1JTCBWT1dFTCBTSUdOIElcblx0MHgwQkNELCAvLyAoIFx1MjVDQ1x1MEJDRCkgVEFNSUwgU0lHTiBWSVJBTUFcblx0MHgwRTMxLCAvLyAoIFx1MjVDQ1x1MEUzMSApIFRIQUkgQ0hBUkFDVEVSIE1BSSBIQU4tQUtBVFxuXHQweDBFMzMsIC8vICggXHUwRTMzICkgVEhBSSBDSEFSQUNURVIgU0FSQSBBTVxuXHQweDBFNDAsIC8vICggXHUwRTQwICkgVEhBSSBDSEFSQUNURVIgU0FSQSBFXG5cdDB4MEU0OSwgLy8gKCBcdTBFNDAgKSBUSEFJIENIQVJBQ1RFUiBNQUkgVEhPXG5cdDB4MTEwMCwgLy8gKCBcdTExMDAgKSBIQU5HVUwgQ0hPU0VPTkcgS0lZRU9LXG5cdDB4MTE2MSwgLy8gKCBcdTExNjEgKSBIQU5HVUwgSlVOR1NFT05HIEFcblx0MHgxMUE4LCAvLyAoIFx1MTFBOCApIEhBTkdVTCBKT05HU0VPTkcgS0lZRU9LXG5dKVxuXG5lbnVtIEVudW1Db2RlVW5pdHMge1xuXHR1bml0XzEgPSAxLFxuXHR1bml0XzIgPSAyLFxuXHR1bml0XzQgPSA0LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuZXMoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG5cdGlmICh0eXBlb2Ygc3RyaW5nICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcInN0cmluZyBjYW5ub3QgYmUgdW5kZWZpbmVkIG9yIG51bGxcIilcblx0fVxuXHRjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW11cblx0bGV0IGkgPSAwXG5cdGxldCBpbmNyZW1lbnQgPSAwXG5cdHdoaWxlIChpIDwgc3RyaW5nLmxlbmd0aCkge1xuXHRcdGluY3JlbWVudCArPSBuZXh0VW5pdHMoaSArIGluY3JlbWVudCwgc3RyaW5nKVxuXHRcdGlmIChpc0dyYXBoZW1lKHN0cmluZ1tpICsgaW5jcmVtZW50XSkpIHtcblx0XHRcdGluY3JlbWVudCsrXG5cdFx0fVxuXHRcdGlmIChpc1ZhcmlhdGlvblNlbGVjdG9yKHN0cmluZ1tpICsgaW5jcmVtZW50XSkpIHtcblx0XHRcdGluY3JlbWVudCsrXG5cdFx0fVxuXHRcdGlmIChpc0RpYWNyaXRpY2FsTWFyayhzdHJpbmdbaSArIGluY3JlbWVudF0pKSB7XG5cdFx0XHRpbmNyZW1lbnQrK1xuXHRcdH1cblx0XHRpZiAoaXNaZXJvV2lkdGhKb2luZXIoc3RyaW5nW2kgKyBpbmNyZW1lbnRdKSkge1xuXHRcdFx0aW5jcmVtZW50Kytcblx0XHRcdGNvbnRpbnVlXG5cdFx0fVxuXHRcdHJlc3VsdC5wdXNoKHN0cmluZy5zdWJzdHJpbmcoaSwgaSArIGluY3JlbWVudCkpXG5cdFx0aSArPSBpbmNyZW1lbnRcblx0XHRpbmNyZW1lbnQgPSAwXG5cdH1cblx0cmV0dXJuIHJlc3VsdFxufVxuXG4vLyBEZWNpZGUgaG93IG1hbnkgY29kZSB1bml0cyBtYWtlIHVwIHRoZSBjdXJyZW50IGNoYXJhY3Rlci5cbi8vIEJNUCBjaGFyYWN0ZXJzOiAxIGNvZGUgdW5pdFxuLy8gTm9uLUJNUCBjaGFyYWN0ZXJzIChyZXByZXNlbnRlZCBieSBzdXJyb2dhdGUgcGFpcnMpOiAyIGNvZGUgdW5pdHNcbi8vIEVtb2ppIHdpdGggc2tpbi10b25lIG1vZGlmaWVyczogNCBjb2RlIHVuaXRzICgyIGNvZGUgcG9pbnRzKVxuLy8gQ291bnRyeSBmbGFnczogNCBjb2RlIHVuaXRzICgyIGNvZGUgcG9pbnRzKVxuLy8gVmFyaWF0aW9uczogMiBjb2RlIHVuaXRzXG4vLyBTdWJkaXZpc2lvbiBmbGFnczogMTQgY29kZSB1bml0cyAoNyBjb2RlIHBvaW50cylcbmZ1bmN0aW9uIG5leHRVbml0cyhpOiBudW1iZXIsIHN0cmluZzogc3RyaW5nKSB7XG5cdGNvbnN0IGN1cnJlbnQgPSBzdHJpbmdbaV1cblx0Ly8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHZhbHVlIHRoYXQgaXMgcGFydCBvZiBhIHN1cnJvZ2F0ZSBwYWlyLCBvciB3ZSdyZSBhdFxuXHQvLyB0aGUgZW5kLCBvbmx5IHRha2UgdGhlIHZhbHVlIGF0IGlcblx0aWYgKCFpc0ZpcnN0T2ZTdXJyb2dhdGVQYWlyKGN1cnJlbnQpIHx8IGkgPT09IHN0cmluZy5sZW5ndGggLSAxKSB7XG5cdFx0cmV0dXJuIEVudW1Db2RlVW5pdHMudW5pdF8xXG5cdH1cblxuXHRjb25zdCBjdXJyZW50UGFpciA9IGN1cnJlbnQgKyBzdHJpbmdbaSArIDFdXG5cdGNvbnN0IG5leHRQYWlyID0gc3RyaW5nLnN1YnN0cmluZyhpICsgMiwgaSArIDUpXG5cblx0Ly8gQ291bnRyeSBmbGFncyBhcmUgY29tcHJpc2VkIG9mIHR3byByZWdpb25hbCBpbmRpY2F0b3Igc3ltYm9scyxcblx0Ly8gZWFjaCByZXByZXNlbnRlZCBieSBhIHN1cnJvZ2F0ZSBwYWlyLlxuXHQvLyBTZWUgaHR0cDovL2Vtb2ppcGVkaWEub3JnL2ZsYWdzL1xuXHQvLyBJZiBib3RoIHBhaXJzIGFyZSByZWdpb25hbCBpbmRpY2F0b3Igc3ltYm9scywgdGFrZSA0XG5cdGlmIChpc1JlZ2lvbmFsSW5kaWNhdG9yKGN1cnJlbnRQYWlyKSAmJiBpc1JlZ2lvbmFsSW5kaWNhdG9yKG5leHRQYWlyKSkge1xuXHRcdHJldHVybiBFbnVtQ29kZVVuaXRzLnVuaXRfNFxuXHR9XG5cblx0Ly8gaHR0cHM6Ly91bmljb2RlLm9yZy9lbW9qaS9jaGFydHMvZnVsbC1lbW9qaS1saXN0Lmh0bWwjc3ViZGl2aXNpb24tZmxhZ1xuXHQvLyBTZWUgaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9lbW9qaS10YWctc2VxdWVuY2UvXG5cdC8vIElmIG5leHRQYWlyIGlzIGluIFRhZ3MoaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGFnc18oVW5pY29kZV9ibG9jaykpLFxuXHQvLyB0aGVuIGZpbmQgbmV4dCBjbG9zZXN0IFUrRTAwN0YoQ0FOQ0VMIFRBRylcblx0aWYgKGlzU3ViZGl2aXNpb25GbGFnKGN1cnJlbnRQYWlyKSAmJlx0aXNTdXBwbGVtZW50YXJ5U3BlY2lhbHB1cnBvc2VQbGFuZShuZXh0UGFpcikpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnNsaWNlKGkpLmluZGV4T2YoU3RyaW5nLmZyb21Db2RlUG9pbnQoRW51bVJ1bmVzQ29kZS5UQUdTX0VORCkpICsgMlxuXHR9XG5cblx0Ly8gSWYgdGhlIG5leHQgcGFpciBtYWtlIGEgRml0enBhdHJpY2sgc2tpbiB0b25lXG5cdC8vIG1vZGlmaWVyLCB0YWtlIDRcblx0Ly8gU2VlIGh0dHA6Ly9lbW9qaXBlZGlhLm9yZy9tb2RpZmllcnMvXG5cdC8vIFRlY2huaWNhbGx5LCBvbmx5IHNvbWUgY29kZSBwb2ludHMgYXJlIG1lYW50IHRvIGJlXG5cdC8vIGNvbWJpbmVkIHdpdGggdGhlIHNraW4gdG9uZSBtb2RpZmllcnMuIFRoaXMgZnVuY3Rpb25cblx0Ly8gZG9lcyBub3QgY2hlY2sgdGhlIGN1cnJlbnQgcGFpciB0byBzZWUgaWYgaXQgaXNcblx0Ly8gb25lIG9mIHRoZW0uXG5cdGlmIChpc0ZpdHpwYXRyaWNrTW9kaWZpZXIobmV4dFBhaXIpKSB7XG5cdFx0cmV0dXJuIEVudW1Db2RlVW5pdHMudW5pdF80XG5cdH1cblx0cmV0dXJuIEVudW1Db2RlVW5pdHMudW5pdF8yXG59XG5cbmZ1bmN0aW9uIGlzRmlyc3RPZlN1cnJvZ2F0ZVBhaXIoc3RyaW5nOiBzdHJpbmcpIHtcblx0cmV0dXJuIHN0cmluZyAmJiBiZXR3ZWVuSW5jbHVzaXZlKHN0cmluZ1swXS5jaGFyQ29kZUF0KDApLCBFbnVtUnVuZXNDb2RlLkhJR0hfU1VSUk9HQVRFX1NUQVJULCBFbnVtUnVuZXNDb2RlLkhJR0hfU1VSUk9HQVRFX0VORClcbn1cblxuZnVuY3Rpb24gaXNSZWdpb25hbEluZGljYXRvcihzdHJpbmc6IHN0cmluZykge1xuXHRyZXR1cm4gYmV0d2VlbkluY2x1c2l2ZShjb2RlUG9pbnRGcm9tU3Vycm9nYXRlUGFpcihzdHJpbmcpLCBFbnVtUnVuZXNDb2RlLlJFR0lPTkFMX0lORElDQVRPUl9TVEFSVCwgRW51bVJ1bmVzQ29kZS5SRUdJT05BTF9JTkRJQ0FUT1JfRU5EKVxufVxuXG5mdW5jdGlvbiBpc1N1YmRpdmlzaW9uRmxhZyhzdHJpbmc6IHN0cmluZykge1xuXHRyZXR1cm4gYmV0d2VlbkluY2x1c2l2ZShjb2RlUG9pbnRGcm9tU3Vycm9nYXRlUGFpcihzdHJpbmcpLFx0RW51bVJ1bmVzQ29kZS5TVUJESVZJU0lPTl9JTkRJQ0FUT1JfU1RBUlQsIEVudW1SdW5lc0NvZGUuU1VCRElWSVNJT05fSU5ESUNBVE9SX1NUQVJUKVxufVxuXG5mdW5jdGlvbiBpc0ZpdHpwYXRyaWNrTW9kaWZpZXIoc3RyaW5nOiBzdHJpbmcpIHtcblx0cmV0dXJuIGJldHdlZW5JbmNsdXNpdmUoY29kZVBvaW50RnJvbVN1cnJvZ2F0ZVBhaXIoc3RyaW5nKSwgRW51bVJ1bmVzQ29kZS5GSVRaUEFUUklDS19NT0RJRklFUl9TVEFSVCwgRW51bVJ1bmVzQ29kZS5GSVRaUEFUUklDS19NT0RJRklFUl9FTkQpXG59XG5cbmZ1bmN0aW9uIGlzVmFyaWF0aW9uU2VsZWN0b3Ioc3RyaW5nOiBzdHJpbmcpIHtcblx0cmV0dXJuIHR5cGVvZiBzdHJpbmcgPT09IFwic3RyaW5nXCIgJiYgYmV0d2VlbkluY2x1c2l2ZShzdHJpbmcuY2hhckNvZGVBdCgwKSwgRW51bVJ1bmVzQ29kZS5WQVJJQVRJT05fTU9ESUZJRVJfU1RBUlQsIEVudW1SdW5lc0NvZGUuVkFSSUFUSU9OX01PRElGSUVSX0VORClcbn1cblxuZnVuY3Rpb24gaXNEaWFjcml0aWNhbE1hcmsoc3RyaW5nOiBzdHJpbmcpIHtcblx0cmV0dXJuIHR5cGVvZiBzdHJpbmcgPT09IFwic3RyaW5nXCIgJiYgYmV0d2VlbkluY2x1c2l2ZShzdHJpbmcuY2hhckNvZGVBdCgwKSwgRW51bVJ1bmVzQ29kZS5ESUFDUklUSUNBTF9NQVJLU19TVEFSVCwgRW51bVJ1bmVzQ29kZS5ESUFDUklUSUNBTF9NQVJLU19FTkQpXG59XG5cbmZ1bmN0aW9uIGlzU3VwcGxlbWVudGFyeVNwZWNpYWxwdXJwb3NlUGxhbmUoc3RyaW5nOiBzdHJpbmcpIHtcblx0Y29uc3QgY29kZVBvaW50ID0gc3RyaW5nLmNvZGVQb2ludEF0KDApXG5cdHJldHVybiAodHlwZW9mIHN0cmluZyA9PT0gXCJzdHJpbmdcIiAmJlx0dHlwZW9mIGNvZGVQb2ludCA9PT0gXCJudW1iZXJcIiAmJiBiZXR3ZWVuSW5jbHVzaXZlKGNvZGVQb2ludCwgRW51bVJ1bmVzQ29kZS5UQUdTX1NUQVJULCBFbnVtUnVuZXNDb2RlLlRBR1NfRU5EKSlcbn1cblxuZnVuY3Rpb24gaXNHcmFwaGVtZShzdHJpbmc6IHN0cmluZykge1xuXHRyZXR1cm4gdHlwZW9mIHN0cmluZyA9PT0gXCJzdHJpbmdcIiAmJiBHUkFQSEVNRVMuaW5jbHVkZXMoc3RyaW5nLmNoYXJDb2RlQXQoMCkpXG59XG5cbmZ1bmN0aW9uIGlzWmVyb1dpZHRoSm9pbmVyKHN0cmluZzogc3RyaW5nKSB7XG5cdHJldHVybiB0eXBlb2Ygc3RyaW5nID09PSBcInN0cmluZ1wiICYmIHN0cmluZy5jaGFyQ29kZUF0KDApID09PSBFbnVtUnVuZXNDb2RlLlpXSlxufVxuXG5mdW5jdGlvbiBjb2RlUG9pbnRGcm9tU3Vycm9nYXRlUGFpcihwYWlyOiBzdHJpbmcpIHtcblx0Y29uc3QgaGlnaE9mZnNldCA9IHBhaXIuY2hhckNvZGVBdCgwKSAtIEVudW1SdW5lc0NvZGUuSElHSF9TVVJST0dBVEVfU1RBUlRcblx0Y29uc3QgbG93T2Zmc2V0ID0gcGFpci5jaGFyQ29kZUF0KDEpIC0gRW51bVJ1bmVzQ29kZS5MT1dfU1VSUk9HQVRFX1NUQVJUXG5cdHJldHVybiAoaGlnaE9mZnNldCA8PCAxMCkgKyBsb3dPZmZzZXQgKyAweDEwMDAwXG59XG5cbmZ1bmN0aW9uIGJldHdlZW5JbmNsdXNpdmUodmFsdWU6IG51bWJlciwgbG93ZXI6IG51bWJlciwgdXBwZXI6IG51bWJlcikge1xuXHRyZXR1cm4gdmFsdWUgPj0gbG93ZXIgJiYgdmFsdWUgPD0gdXBwZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0cmluZyhzdHJpbmc6IHN0cmluZywgc3RhcnQ/OiBudW1iZXIsIHdpZHRoPzogbnVtYmVyKSB7XG5cdGNvbnN0IGNoYXJzID0gcnVuZXMoc3RyaW5nKVxuXHRpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBzdHJpbmdcblx0fVxuXHRpZiAoc3RhcnQgPj0gY2hhcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuIFwiXCJcblx0fVxuXHRjb25zdCByZXN0ID0gY2hhcnMubGVuZ3RoIC0gc3RhcnRcblx0Y29uc3Qgc3RyaW5nV2lkdGggPSB3aWR0aCA9PT0gdW5kZWZpbmVkID8gcmVzdCA6IHdpZHRoXG5cdGxldCBlbmRJbmRleCA9IHN0YXJ0ICsgc3RyaW5nV2lkdGhcblx0aWYgKGVuZEluZGV4ID4gKHN0YXJ0ICsgcmVzdCkpIHtcblx0XHRlbmRJbmRleCA9IHVuZGVmaW5lZFxuXHR9XG5cdHJldHVybiBjaGFycy5zbGljZShzdGFydCwgZW5kSW5kZXgpLmpvaW4oXCJcIilcbn1cbiIsICJ7XG5cdFwiSm95LUNvbiBMK1IgKFNUQU5EQVJEIEdBTUVQQUQgVmVuZG9yOiAwNTdlIFByb2R1Y3Q6IDIwMGUpXCI6IHtcblx0XHRcImJ1dHRvbnNcIjoge1xuXHRcdFx0XCIwXCI6IFwic291dGhcIixcblx0XHRcdFwiMVwiOiBcImVhc3RcIixcblx0XHRcdFwiMlwiOiBcIndlc3RcIixcblx0XHRcdFwiM1wiOiBcIm5vcnRoXCIsXG5cdFx0XHRcIjRcIjogXCJsc2hvdWxkZXJcIixcblx0XHRcdFwiNVwiOiBcInJzaG91bGRlclwiLFxuXHRcdFx0XCI2XCI6IFwibHRyaWdnZXJcIixcblx0XHRcdFwiN1wiOiBcInJ0cmlnZ2VyXCIsXG5cdFx0XHRcIjhcIjogXCJzZWxlY3RcIixcblx0XHRcdFwiOVwiOiBcInN0YXJ0XCIsXG5cdFx0XHRcIjEwXCI6IFwibHN0aWNrXCIsXG5cdFx0XHRcIjExXCI6IFwicnN0aWNrXCIsXG5cdFx0XHRcIjEyXCI6IFwiZHBhZC11cFwiLFxuXHRcdFx0XCIxM1wiOiBcImRwYWQtZG93blwiLFxuXHRcdFx0XCIxNFwiOiBcImRwYWQtbGVmdFwiLFxuXHRcdFx0XCIxNVwiOiBcImRwYWQtcmlnaHRcIixcblx0XHRcdFwiMTZcIjogXCJob21lXCIsXG5cdFx0XHRcIjE3XCI6IFwiY2FwdHVyZVwiXG5cdFx0fSxcblx0XHRcInN0aWNrc1wiOiB7XG5cdFx0XHRcImxlZnRcIjogeyBcInhcIjogMCwgXCJ5XCI6IDEgfSxcblx0XHRcdFwicmlnaHRcIjogeyBcInhcIjogMiwgXCJ5XCI6IDMgfVxuXHRcdH1cblx0fSxcblx0XCJKb3ktQ29uIChMKSAoU1RBTkRBUkQgR0FNRVBBRCBWZW5kb3I6IDA1N2UgUHJvZHVjdDogMjAwNilcIjoge1xuXHRcdFwiYnV0dG9uc1wiOiB7XG5cdFx0XHRcIjBcIjogXCJzb3V0aFwiLFxuXHRcdFx0XCIxXCI6IFwiZWFzdFwiLFxuXHRcdFx0XCIyXCI6IFwid2VzdFwiLFxuXHRcdFx0XCIzXCI6IFwibm9ydGhcIixcblx0XHRcdFwiNFwiOiBcImxzaG91bGRlclwiLFxuXHRcdFx0XCI1XCI6IFwicnNob3VsZGVyXCIsXG5cdFx0XHRcIjlcIjogXCJzZWxlY3RcIixcblx0XHRcdFwiMTBcIjogXCJsc3RpY2tcIixcblx0XHRcdFwiMTZcIjogXCJzdGFydFwiXG5cdFx0fSxcblx0XHRcInN0aWNrc1wiOiB7XG5cdFx0XHRcImxlZnRcIjogeyBcInhcIjogMCwgXCJ5XCI6IDEgfVxuXHRcdH1cblx0fSxcblx0XCJKb3ktQ29uIChSKSAoU1RBTkRBUkQgR0FNRVBBRCBWZW5kb3I6IDA1N2UgUHJvZHVjdDogMjAwNylcIjoge1xuXHRcdFwiYnV0dG9uc1wiOiB7XG5cdFx0XHRcIjBcIjogXCJzb3V0aFwiLFxuXHRcdFx0XCIxXCI6IFwiZWFzdFwiLFxuXHRcdFx0XCIyXCI6IFwid2VzdFwiLFxuXHRcdFx0XCIzXCI6IFwibm9ydGhcIixcblx0XHRcdFwiNFwiOiBcImxzaG91bGRlclwiLFxuXHRcdFx0XCI1XCI6IFwicnNob3VsZGVyXCIsXG5cdFx0XHRcIjlcIjogXCJzdGFydFwiLFxuXHRcdFx0XCIxMFwiOiBcImxzdGlja1wiLFxuXHRcdFx0XCIxNlwiOiBcInNlbGVjdFwiXG5cdFx0fSxcblx0XHRcInN0aWNrc1wiOiB7XG5cdFx0XHRcImxlZnRcIjogeyBcInhcIjogMCwgXCJ5XCI6IDEgfVxuXHRcdH1cblx0fSxcblx0XCJQcm8gQ29udHJvbGxlciAoU1RBTkRBUkQgR0FNRVBBRCBWZW5kb3I6IDA1N2UgUHJvZHVjdDogMjAwOSlcIjoge1xuXHRcdFwiYnV0dG9uc1wiOiB7XG5cdFx0XHRcIjBcIjogXCJzb3V0aFwiLFxuXHRcdFx0XCIxXCI6IFwiZWFzdFwiLFxuXHRcdFx0XCIyXCI6IFwid2VzdFwiLFxuXHRcdFx0XCIzXCI6IFwibm9ydGhcIixcblx0XHRcdFwiNFwiOiBcImxzaG91bGRlclwiLFxuXHRcdFx0XCI1XCI6IFwicnNob3VsZGVyXCIsXG5cdFx0XHRcIjZcIjogXCJsdHJpZ2dlclwiLFxuXHRcdFx0XCI3XCI6IFwicnRyaWdnZXJcIixcblx0XHRcdFwiOFwiOiBcInNlbGVjdFwiLFxuXHRcdFx0XCI5XCI6IFwic3RhcnRcIixcblx0XHRcdFwiMTBcIjogXCJsc3RpY2tcIixcblx0XHRcdFwiMTFcIjogXCJyc3RpY2tcIixcblx0XHRcdFwiMTJcIjogXCJkcGFkLXVwXCIsXG5cdFx0XHRcIjEzXCI6IFwiZHBhZC1kb3duXCIsXG5cdFx0XHRcIjE0XCI6IFwiZHBhZC1sZWZ0XCIsXG5cdFx0XHRcIjE1XCI6IFwiZHBhZC1yaWdodFwiLFxuXHRcdFx0XCIxNlwiOiBcImhvbWVcIixcblx0XHRcdFwiMTdcIjogXCJjYXB0dXJlXCJcblx0XHR9LFxuXHRcdFwic3RpY2tzXCI6IHtcblx0XHRcdFwibGVmdFwiOiB7IFwieFwiOiAwLCBcInlcIjogMSB9LFxuXHRcdFx0XCJyaWdodFwiOiB7IFwieFwiOiAyLCBcInlcIjogMyB9XG5cdFx0fVxuXHR9LFxuXHRcImRlZmF1bHRcIjoge1xuXHRcdFwiYnV0dG9uc1wiOiB7XG5cdFx0XHRcIjBcIjogXCJzb3V0aFwiLFxuXHRcdFx0XCIxXCI6IFwiZWFzdFwiLFxuXHRcdFx0XCIyXCI6IFwid2VzdFwiLFxuXHRcdFx0XCIzXCI6IFwibm9ydGhcIixcblx0XHRcdFwiNFwiOiBcImxzaG91bGRlclwiLFxuXHRcdFx0XCI1XCI6IFwicnNob3VsZGVyXCIsXG5cdFx0XHRcIjZcIjogXCJsdHJpZ2dlclwiLFxuXHRcdFx0XCI3XCI6IFwicnRyaWdnZXJcIixcblx0XHRcdFwiOFwiOiBcInNlbGVjdFwiLFxuXHRcdFx0XCI5XCI6IFwic3RhcnRcIixcblx0XHRcdFwiMTBcIjogXCJsc3RpY2tcIixcblx0XHRcdFwiMTFcIjogXCJyc3RpY2tcIixcblx0XHRcdFwiMTJcIjogXCJkcGFkLXVwXCIsXG5cdFx0XHRcIjEzXCI6IFwiZHBhZC1kb3duXCIsXG5cdFx0XHRcIjE0XCI6IFwiZHBhZC1sZWZ0XCIsXG5cdFx0XHRcIjE1XCI6IFwiZHBhZC1yaWdodFwiLFxuXHRcdFx0XCIxNlwiOiBcImhvbWVcIlxuXHRcdH0sXG5cdFx0XCJzdGlja3NcIjoge1xuXHRcdFx0XCJsZWZ0XCI6IHsgXCJ4XCI6IDAsIFwieVwiOiAxIH0sXG5cdFx0XHRcInJpZ2h0XCI6IHsgXCJ4XCI6IDIsIFwieVwiOiAzIH1cblx0XHR9XG5cdH1cbn1cbiIsICIvLyBldmVyeXRoaW5nIHJlbGF0ZWQgdG8gY2FudmFzLCBnYW1lIGxvb3AgYW5kIGlucHV0XG5cbmltcG9ydCB0eXBlIHtcblx0Q3Vyc29yLFxuXHRLZXksXG5cdE1vdXNlQnV0dG9uLFxuXHRHYW1lcGFkQnV0dG9uLFxuXHRHYW1lcGFkU3RpY2ssXG5cdEdhbWVwYWREZWYsXG5cdEtHYW1lUGFkLFxufSBmcm9tIFwiLi90eXBlc1wiXG5cbmltcG9ydCB7XG5cdFZlYzIsXG5cdG1hcCxcbn0gZnJvbSBcIi4vbWF0aFwiXG5cbmltcG9ydCB7XG5cdEV2ZW50SGFuZGxlcixcblx0RXZlbnRDb250cm9sbGVyLFxuXHRvdmVybG9hZDIsXG59IGZyb20gXCIuL3V0aWxzXCJcblxuaW1wb3J0IEdBTUVQQURfTUFQIGZyb20gXCIuL2dhbWVwYWQuanNvblwiXG5cbmV4cG9ydCBjbGFzcyBCdXR0b25TdGF0ZTxUID0gc3RyaW5nPiB7XG5cdHByZXNzZWQ6IFNldDxUPiA9IG5ldyBTZXQoW10pXG5cdHByZXNzZWRSZXBlYXQ6IFNldDxUPiA9IG5ldyBTZXQoW10pXG5cdHJlbGVhc2VkOiBTZXQ8VD4gPSBuZXcgU2V0KFtdKVxuXHRkb3duOiBTZXQ8VD4gPSBuZXcgU2V0KFtdKVxuXHR1cGRhdGUoKSB7XG5cdFx0dGhpcy5wcmVzc2VkLmNsZWFyKClcblx0XHR0aGlzLnJlbGVhc2VkLmNsZWFyKClcblx0XHR0aGlzLnByZXNzZWRSZXBlYXQuY2xlYXIoKVxuXHR9XG5cdHByZXNzKGJ0bjogVCkge1xuXHRcdHRoaXMucHJlc3NlZC5hZGQoYnRuKVxuXHRcdHRoaXMucHJlc3NlZFJlcGVhdC5hZGQoYnRuKVxuXHRcdHRoaXMuZG93bi5hZGQoYnRuKVxuXHR9XG5cdHByZXNzUmVwZWF0KGJ0bjogVCkge1xuXHRcdHRoaXMucHJlc3NlZFJlcGVhdC5hZGQoYnRuKVxuXHR9XG5cdHJlbGVhc2UoYnRuOiBUKSB7XG5cdFx0dGhpcy5kb3duLmRlbGV0ZShidG4pXG5cdFx0dGhpcy5wcmVzc2VkLmRlbGV0ZShidG4pXG5cdFx0dGhpcy5yZWxlYXNlZC5hZGQoYnRuKVxuXHR9XG59XG5cbmNsYXNzIEdhbWVwYWRTdGF0ZSB7XG5cdGJ1dHRvblN0YXRlOiBCdXR0b25TdGF0ZTxHYW1lcGFkQnV0dG9uPiA9IG5ldyBCdXR0b25TdGF0ZSgpXG5cdHN0aWNrU3RhdGU6IE1hcDxHYW1lcGFkU3RpY2ssIFZlYzI+ID0gbmV3IE1hcCgpXG59XG5cbmNsYXNzIEZQU0NvdW50ZXIge1xuXHRwcml2YXRlIGR0czogbnVtYmVyW10gPSBbXVxuXHRwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwXG5cdGZwczogbnVtYmVyID0gMFxuXHR0aWNrKGR0OiBudW1iZXIpIHtcblx0XHR0aGlzLmR0cy5wdXNoKGR0KVxuXHRcdHRoaXMudGltZXIgKz0gZHRcblx0XHRpZiAodGhpcy50aW1lciA+PSAxKSB7XG5cdFx0XHR0aGlzLnRpbWVyID0gMFxuXHRcdFx0dGhpcy5mcHMgPSBNYXRoLnJvdW5kKDEgLyAodGhpcy5kdHMucmVkdWNlKChhLCBiKSA9PiBhICsgYikgLyB0aGlzLmR0cy5sZW5ndGgpKVxuXHRcdFx0dGhpcy5kdHMgPSBbXVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCAob3B0OiB7XG5cdGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG5cdHRvdWNoVG9Nb3VzZT86IGJvb2xlYW4sXG5cdGdhbWVwYWRzPzogUmVjb3JkPHN0cmluZywgR2FtZXBhZERlZj4sXG5cdHBpeGVsRGVuc2l0eT86IG51bWJlcixcblx0bWF4RlBTPzogbnVtYmVyLFxufSkgPT4ge1xuXG5cdGlmICghb3B0LmNhbnZhcykge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIGEgY2FudmFzXCIpXG5cdH1cblxuXHRjb25zdCBzdGF0ZSA9IHtcblx0XHRjYW52YXM6IG9wdC5jYW52YXMsXG5cdFx0bG9vcElEOiBudWxsIGFzIG51bGwgfCBudW1iZXIsXG5cdFx0c3RvcHBlZDogZmFsc2UsXG5cdFx0ZHQ6IDAsXG5cdFx0dGltZTogMCxcblx0XHRyZWFsVGltZTogMCxcblx0XHRmcHNDb3VudGVyOiBuZXcgRlBTQ291bnRlcigpLFxuXHRcdHRpbWVTY2FsZTogMSxcblx0XHRza2lwVGltZTogZmFsc2UsXG5cdFx0bnVtRnJhbWVzOiAwLFxuXHRcdG1vdXNlUG9zOiBuZXcgVmVjMigwKSxcblx0XHRtb3VzZURlbHRhUG9zOiBuZXcgVmVjMigwKSxcblx0XHRrZXlTdGF0ZTogbmV3IEJ1dHRvblN0YXRlPEtleT4oKSxcblx0XHRtb3VzZVN0YXRlOiBuZXcgQnV0dG9uU3RhdGU8TW91c2VCdXR0b24+KCksXG5cdFx0bWVyZ2VkR2FtZXBhZFN0YXRlOiBuZXcgR2FtZXBhZFN0YXRlKCksXG5cdFx0Z2FtZXBhZFN0YXRlczogbmV3IE1hcDxudW1iZXIsIEdhbWVwYWRTdGF0ZT4oKSxcblx0XHRnYW1lcGFkczogW10gYXMgS0dhbWVQYWRbXSxcblx0XHRjaGFySW5wdXR0ZWQ6IFtdLFxuXHRcdGlzTW91c2VNb3ZlZDogZmFsc2UsXG5cdFx0bGFzdFdpZHRoOiBvcHQuY2FudmFzLm9mZnNldFdpZHRoLFxuXHRcdGxhc3RIZWlnaHQ6IG9wdC5jYW52YXMub2Zmc2V0SGVpZ2h0LFxuXHRcdGV2ZW50czogbmV3IEV2ZW50SGFuZGxlcjx7XG5cdFx0XHRtb3VzZU1vdmU6IFtdLFxuXHRcdFx0bW91c2VEb3duOiBbTW91c2VCdXR0b25dLFxuXHRcdFx0bW91c2VQcmVzczogW01vdXNlQnV0dG9uXSxcblx0XHRcdG1vdXNlUmVsZWFzZTogW01vdXNlQnV0dG9uXSxcblx0XHRcdGNoYXJJbnB1dDogW3N0cmluZ10sXG5cdFx0XHRrZXlQcmVzczogW0tleV0sXG5cdFx0XHRrZXlEb3duOiBbS2V5XSxcblx0XHRcdGtleVByZXNzUmVwZWF0OiBbS2V5XSxcblx0XHRcdGtleVJlbGVhc2U6IFtLZXldLFxuXHRcdFx0dG91Y2hTdGFydDogW1ZlYzIsIFRvdWNoXSxcblx0XHRcdHRvdWNoTW92ZTogW1ZlYzIsIFRvdWNoXSxcblx0XHRcdHRvdWNoRW5kOiBbVmVjMiwgVG91Y2hdLFxuXHRcdFx0Z2FtZXBhZEJ1dHRvbkRvd246IFtzdHJpbmddLFxuXHRcdFx0Z2FtZXBhZEJ1dHRvblByZXNzOiBbc3RyaW5nXSxcblx0XHRcdGdhbWVwYWRCdXR0b25SZWxlYXNlOiBbc3RyaW5nXSxcblx0XHRcdGdhbWVwYWRTdGljazogW3N0cmluZywgVmVjMl0sXG5cdFx0XHRnYW1lcGFkQ29ubmVjdDogW0tHYW1lUGFkXSxcblx0XHRcdGdhbWVwYWREaXNjb25uZWN0OiBbS0dhbWVQYWRdLFxuXHRcdFx0c2Nyb2xsOiBbVmVjMl0sXG5cdFx0XHRoaWRlOiBbXSxcblx0XHRcdHNob3c6IFtdLFxuXHRcdFx0cmVzaXplOiBbXSxcblx0XHRcdGlucHV0OiBbXSxcblx0XHR9PigpLFxuXHR9XG5cblx0ZnVuY3Rpb24gZHQoKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmR0ICogc3RhdGUudGltZVNjYWxlXG5cdH1cblxuXHRmdW5jdGlvbiB0aW1lKCkge1xuXHRcdHJldHVybiBzdGF0ZS50aW1lXG5cdH1cblxuXHRmdW5jdGlvbiBmcHMoKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmZwc0NvdW50ZXIuZnBzXG5cdH1cblxuXHRmdW5jdGlvbiBudW1GcmFtZXMoKSB7XG5cdFx0cmV0dXJuIHN0YXRlLm51bUZyYW1lc1xuXHR9XG5cblx0ZnVuY3Rpb24gc2NyZWVuc2hvdCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBzdGF0ZS5jYW52YXMudG9EYXRhVVJMKClcblx0fVxuXG5cdGZ1bmN0aW9uIHNldEN1cnNvcihjOiBDdXJzb3IpOiB2b2lkIHtcblx0XHRzdGF0ZS5jYW52YXMuc3R5bGUuY3Vyc29yID0gY1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q3Vyc29yKCk6IEN1cnNvciB7XG5cdFx0cmV0dXJuIHN0YXRlLmNhbnZhcy5zdHlsZS5jdXJzb3Jcblx0fVxuXG5cdGZ1bmN0aW9uIHNldEN1cnNvckxvY2tlZChiOiBib29sZWFuKTogdm9pZCB7XG5cdFx0aWYgKGIpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlcyA9IHN0YXRlLmNhbnZhcy5yZXF1ZXN0UG9pbnRlckxvY2soKSBhcyB1bmtub3duIGFzIFByb21pc2U8dm9pZD5cblx0XHRcdFx0aWYgKHJlcy5jYXRjaCkge1xuXHRcdFx0XHRcdHJlcy5jYXRjaCgoZSkgPT4gY29uc29sZS5lcnJvcihlKSlcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGUpXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaXNDdXJzb3JMb2NrZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhZG9jdW1lbnQucG9pbnRlckxvY2tFbGVtZW50XG5cdH1cblxuXHQvLyB3cmFwcGVycyBhcm91bmQgZnVsbCBzY3JlZW4gZnVuY3Rpb25zIHRvIHdvcmsgYWNyb3NzIGJyb3dzZXJzXG5cdGZ1bmN0aW9uIGVudGVyRnVsbHNjcmVlbihlbDogSFRNTEVsZW1lbnQpIHtcblx0XHRpZiAoZWwucmVxdWVzdEZ1bGxzY3JlZW4pIGVsLnJlcXVlc3RGdWxsc2NyZWVuKClcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0ZWxzZSBpZiAoZWwud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIGVsLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKClcblx0fVxuXG5cdGZ1bmN0aW9uIGV4aXRGdWxsc2NyZWVuKCkge1xuXHRcdGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKVxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRlbHNlIGlmIChkb2N1bWVudC53ZWJraXRFeGl0RnVsbFNjcmVlbikgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxTY3JlZW4oKVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0RnVsbHNjcmVlbkVsZW1lbnQoKTogRWxlbWVudCB8IHZvaWQge1xuXHRcdHJldHVybiBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudFxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0fHwgZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnRcblx0fVxuXG5cdGZ1bmN0aW9uIHNldEZ1bGxzY3JlZW4oZjogYm9vbGVhbiA9IHRydWUpIHtcblx0XHRpZiAoZikge1xuXHRcdFx0ZW50ZXJGdWxsc2NyZWVuKHN0YXRlLmNhbnZhcylcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhpdEZ1bGxzY3JlZW4oKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGlzRnVsbHNjcmVlbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gQm9vbGVhbihnZXRGdWxsc2NyZWVuRWxlbWVudCgpKVxuXHR9XG5cblx0ZnVuY3Rpb24gcXVpdCgpIHtcblx0XHRzdGF0ZS5zdG9wcGVkID0gdHJ1ZVxuXHRcdGZvciAoY29uc3QgbmFtZSBpbiBjYW52YXNFdmVudHMpIHtcblx0XHRcdHN0YXRlLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGNhbnZhc0V2ZW50c1tuYW1lXSlcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBuYW1lIGluIGRvY0V2ZW50cykge1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBkb2NFdmVudHNbbmFtZV0pXG5cdFx0fVxuXHRcdGZvciAoY29uc3QgbmFtZSBpbiB3aW5FdmVudHMpIHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHdpbkV2ZW50c1tuYW1lXSlcblx0XHR9XG5cdFx0cmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG5cdH1cblxuXHRmdW5jdGlvbiBydW4oYWN0aW9uOiAoKSA9PiB2b2lkKSB7XG5cblx0XHRpZiAoc3RhdGUubG9vcElEICE9PSBudWxsKSB7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShzdGF0ZS5sb29wSUQpXG5cdFx0fVxuXG5cdFx0bGV0IGFjY3VtdWxhdGVkRHQgPSAwXG5cblx0XHRjb25zdCBmcmFtZSA9ICh0OiBudW1iZXIpID0+IHtcblxuXHRcdFx0aWYgKHN0YXRlLnN0b3BwZWQpIHJldHVyblxuXG5cdFx0XHQvLyBUT0RPOiBhbGxvdyBiYWNrZ3JvdW5kIGFjdGlvbnM/XG5cdFx0XHRpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlICE9PSBcInZpc2libGVcIikge1xuXHRcdFx0XHRzdGF0ZS5sb29wSUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpXG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBsb29wVGltZSA9IHQgLyAxMDAwXG5cdFx0XHRjb25zdCByZWFsRHQgPSBsb29wVGltZSAtIHN0YXRlLnJlYWxUaW1lXG5cdFx0XHRjb25zdCBkZXNpcmVkRHQgPSBvcHQubWF4RlBTID8gMSAvIG9wdC5tYXhGUFMgOiAwXG5cblx0XHRcdHN0YXRlLnJlYWxUaW1lID0gbG9vcFRpbWVcblx0XHRcdGFjY3VtdWxhdGVkRHQgKz0gcmVhbER0XG5cblx0XHRcdGlmIChhY2N1bXVsYXRlZER0ID4gZGVzaXJlZER0KSB7XG5cdFx0XHRcdGlmICghc3RhdGUuc2tpcFRpbWUpIHtcblx0XHRcdFx0XHRzdGF0ZS5kdCA9IGFjY3VtdWxhdGVkRHRcblx0XHRcdFx0XHRzdGF0ZS50aW1lICs9IGR0KClcblx0XHRcdFx0XHRzdGF0ZS5mcHNDb3VudGVyLnRpY2soc3RhdGUuZHQpXG5cdFx0XHRcdH1cblx0XHRcdFx0YWNjdW11bGF0ZWREdCA9IDBcblx0XHRcdFx0c3RhdGUuc2tpcFRpbWUgPSBmYWxzZVxuXHRcdFx0XHRzdGF0ZS5udW1GcmFtZXMrK1xuXHRcdFx0XHRwcm9jZXNzSW5wdXQoKVxuXHRcdFx0XHRhY3Rpb24oKVxuXHRcdFx0XHRyZXNldElucHV0KClcblx0XHRcdH1cblxuXHRcdFx0c3RhdGUubG9vcElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKVxuXG5cdFx0fVxuXG5cdFx0ZnJhbWUoMClcblxuXHR9XG5cblx0ZnVuY3Rpb24gaXNUb3VjaHNjcmVlbigpIHtcblx0XHRyZXR1cm4gKFwib250b3VjaHN0YXJ0XCIgaW4gd2luZG93KSB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG5cdH1cblxuXHRmdW5jdGlvbiBtb3VzZVBvcygpOiBWZWMyIHtcblx0XHRyZXR1cm4gc3RhdGUubW91c2VQb3MuY2xvbmUoKVxuXHR9XG5cblx0ZnVuY3Rpb24gbW91c2VEZWx0YVBvcygpOiBWZWMyIHtcblx0XHRyZXR1cm4gc3RhdGUubW91c2VEZWx0YVBvcy5jbG9uZSgpXG5cdH1cblxuXHRmdW5jdGlvbiBpc01vdXNlUHJlc3NlZChtOiBNb3VzZUJ1dHRvbiA9IFwibGVmdFwiKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHN0YXRlLm1vdXNlU3RhdGUucHJlc3NlZC5oYXMobSlcblx0fVxuXG5cdGZ1bmN0aW9uIGlzTW91c2VEb3duKG06IE1vdXNlQnV0dG9uID0gXCJsZWZ0XCIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gc3RhdGUubW91c2VTdGF0ZS5kb3duLmhhcyhtKVxuXHR9XG5cblx0ZnVuY3Rpb24gaXNNb3VzZVJlbGVhc2VkKG06IE1vdXNlQnV0dG9uID0gXCJsZWZ0XCIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gc3RhdGUubW91c2VTdGF0ZS5yZWxlYXNlZC5oYXMobSlcblx0fVxuXG5cdGZ1bmN0aW9uIGlzTW91c2VNb3ZlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gc3RhdGUuaXNNb3VzZU1vdmVkXG5cdH1cblxuXHRmdW5jdGlvbiBpc0tleVByZXNzZWQoaz86IEtleSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBrID09PSB1bmRlZmluZWRcblx0XHRcdD8gc3RhdGUua2V5U3RhdGUucHJlc3NlZC5zaXplID4gMFxuXHRcdFx0OiBzdGF0ZS5rZXlTdGF0ZS5wcmVzc2VkLmhhcyhrKVxuXHR9XG5cblx0ZnVuY3Rpb24gaXNLZXlQcmVzc2VkUmVwZWF0KGs/OiBLZXkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gayA9PT0gdW5kZWZpbmVkXG5cdFx0XHQ/IHN0YXRlLmtleVN0YXRlLnByZXNzZWRSZXBlYXQuc2l6ZSA+IDBcblx0XHRcdDogc3RhdGUua2V5U3RhdGUucHJlc3NlZFJlcGVhdC5oYXMoaylcblx0fVxuXG5cdGZ1bmN0aW9uIGlzS2V5RG93bihrPzogS2V5KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGsgPT09IHVuZGVmaW5lZFxuXHRcdFx0PyBzdGF0ZS5rZXlTdGF0ZS5kb3duLnNpemUgPiAwXG5cdFx0XHQ6IHN0YXRlLmtleVN0YXRlLmRvd24uaGFzKGspXG5cdH1cblxuXHRmdW5jdGlvbiBpc0tleVJlbGVhc2VkKGs/OiBLZXkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gayA9PT0gdW5kZWZpbmVkXG5cdFx0XHQ/IHN0YXRlLmtleVN0YXRlLnJlbGVhc2VkLnNpemUgPiAwXG5cdFx0XHQ6IHN0YXRlLmtleVN0YXRlLnJlbGVhc2VkLmhhcyhrKVxuXHR9XG5cblx0ZnVuY3Rpb24gaXNHYW1lcGFkQnV0dG9uUHJlc3NlZChidG4/OiBHYW1lcGFkQnV0dG9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGJ0biA9PT0gdW5kZWZpbmVkXG5cdFx0XHQ/IHN0YXRlLm1lcmdlZEdhbWVwYWRTdGF0ZS5idXR0b25TdGF0ZS5wcmVzc2VkLnNpemUgPiAwXG5cdFx0XHQ6IHN0YXRlLm1lcmdlZEdhbWVwYWRTdGF0ZS5idXR0b25TdGF0ZS5wcmVzc2VkLmhhcyhidG4pXG5cdH1cblxuXHRmdW5jdGlvbiBpc0dhbWVwYWRCdXR0b25Eb3duKGJ0bj86IEdhbWVwYWRCdXR0b24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gYnRuID09PSB1bmRlZmluZWRcblx0XHRcdD8gc3RhdGUubWVyZ2VkR2FtZXBhZFN0YXRlLmJ1dHRvblN0YXRlLmRvd24uc2l6ZSA+IDBcblx0XHRcdDogc3RhdGUubWVyZ2VkR2FtZXBhZFN0YXRlLmJ1dHRvblN0YXRlLmRvd24uaGFzKGJ0bilcblx0fVxuXG5cdGZ1bmN0aW9uIGlzR2FtZXBhZEJ1dHRvblJlbGVhc2VkKGJ0bj86IEdhbWVwYWRCdXR0b24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gYnRuID09PSB1bmRlZmluZWRcblx0XHRcdD8gc3RhdGUubWVyZ2VkR2FtZXBhZFN0YXRlLmJ1dHRvblN0YXRlLnJlbGVhc2VkLnNpemUgPiAwXG5cdFx0XHQ6IHN0YXRlLm1lcmdlZEdhbWVwYWRTdGF0ZS5idXR0b25TdGF0ZS5yZWxlYXNlZC5oYXMoYnRuKVxuXHR9XG5cblx0ZnVuY3Rpb24gb25SZXNpemUoYWN0aW9uOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwicmVzaXplXCIsIGFjdGlvbilcblx0fVxuXG5cdC8vIGlucHV0IGNhbGxiYWNrc1xuXHRjb25zdCBvbktleURvd24gPSBvdmVybG9hZDIoKGFjdGlvbjogKGtleTogS2V5KSA9PiB2b2lkKSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcImtleURvd25cIiwgYWN0aW9uKVxuXHR9LCAoa2V5OiBLZXksIGFjdGlvbjogKGtleTogS2V5KSA9PiB2b2lkKSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcImtleURvd25cIiwgKGspID0+IGsgPT09IGtleSAmJiBhY3Rpb24oa2V5KSlcblx0fSlcblxuXHRjb25zdCBvbktleVByZXNzID0gb3ZlcmxvYWQyKChhY3Rpb246IChrZXk6IEtleSkgPT4gdm9pZCkgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJrZXlQcmVzc1wiLCBhY3Rpb24pXG5cdH0sIChrZXk6IEtleSwgYWN0aW9uOiAoa2V5OiBLZXkpID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwia2V5UHJlc3NcIiwgKGspID0+IGsgPT09IGtleSAmJiBhY3Rpb24oa2V5KSlcblx0fSlcblxuXHRjb25zdCBvbktleVByZXNzUmVwZWF0ID0gb3ZlcmxvYWQyKChhY3Rpb246IChrZXk6IEtleSkgPT4gdm9pZCkgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJrZXlQcmVzc1JlcGVhdFwiLCBhY3Rpb24pXG5cdH0sIChrZXk6IEtleSwgYWN0aW9uOiAoa2V5OiBLZXkpID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwia2V5UHJlc3NSZXBlYXRcIiwgKGspID0+IGsgPT09IGtleSAmJiBhY3Rpb24oa2V5KSlcblx0fSlcblxuXHRjb25zdCBvbktleVJlbGVhc2UgPSBvdmVybG9hZDIoKGFjdGlvbjogKGtleTogS2V5KSA9PiB2b2lkKSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcImtleVJlbGVhc2VcIiwgYWN0aW9uKVxuXHR9LCAoa2V5OiBLZXksIGFjdGlvbjogKGtleTogS2V5KSA9PiB2b2lkKSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcImtleVJlbGVhc2VcIiwgKGspID0+IGsgPT09IGtleSAmJiBhY3Rpb24oa2V5KSlcblx0fSlcblxuXHRjb25zdCBvbk1vdXNlRG93biA9IG92ZXJsb2FkMigoYWN0aW9uOiAobTogTW91c2VCdXR0b24pID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwibW91c2VEb3duXCIsIChtKSA9PiBhY3Rpb24obSkpXG5cdH0sIChtb3VzZTogTW91c2VCdXR0b24sIGFjdGlvbjogKG06IE1vdXNlQnV0dG9uKSA9PiB2b2lkKSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcIm1vdXNlRG93blwiLCAobSkgPT4gbSA9PT0gbW91c2UgJiYgYWN0aW9uKG0pKVxuXHR9KVxuXG5cdGNvbnN0IG9uTW91c2VQcmVzcyA9IG92ZXJsb2FkMigoYWN0aW9uOiAobTogTW91c2VCdXR0b24pID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwibW91c2VQcmVzc1wiLCAobSkgPT4gYWN0aW9uKG0pKVxuXHR9LCAobW91c2U6IE1vdXNlQnV0dG9uLCBhY3Rpb246IChtOiBNb3VzZUJ1dHRvbikgPT4gdm9pZCkgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJtb3VzZVByZXNzXCIsIChtKSA9PiBtID09PSBtb3VzZSAmJiBhY3Rpb24obSkpXG5cdH0pXG5cblx0Y29uc3Qgb25Nb3VzZVJlbGVhc2UgPSBvdmVybG9hZDIoKGFjdGlvbjogKG06IE1vdXNlQnV0dG9uKSA9PiB2b2lkKSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcIm1vdXNlUmVsZWFzZVwiLCAobSkgPT4gYWN0aW9uKG0pKVxuXHR9LCAobW91c2U6IE1vdXNlQnV0dG9uLCBhY3Rpb246IChtOiBNb3VzZUJ1dHRvbikgPT4gdm9pZCkgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJtb3VzZVJlbGVhc2VcIiwgKG0pID0+IG0gPT09IG1vdXNlICYmIGFjdGlvbihtKSlcblx0fSlcblxuXHRmdW5jdGlvbiBvbk1vdXNlTW92ZShmOiAocG9zOiBWZWMyLCBkcG9zOiBWZWMyKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwibW91c2VNb3ZlXCIsICgpID0+IGYobW91c2VQb3MoKSwgbW91c2VEZWx0YVBvcygpKSlcblx0fVxuXG5cdGZ1bmN0aW9uIG9uQ2hhcklucHV0KGFjdGlvbjogKGNoOiBzdHJpbmcpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJjaGFySW5wdXRcIiwgYWN0aW9uKVxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGY6IChwb3M6IFZlYzIsIHQ6IFRvdWNoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwidG91Y2hTdGFydFwiLCBmKVxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoZjogKHBvczogVmVjMiwgdDogVG91Y2gpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJ0b3VjaE1vdmVcIiwgZilcblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hFbmQoZjogKHBvczogVmVjMiwgdDogVG91Y2gpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJ0b3VjaEVuZFwiLCBmKVxuXHR9XG5cblx0ZnVuY3Rpb24gb25TY3JvbGwoYWN0aW9uOiAoZGVsdGE6IFZlYzIpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJzY3JvbGxcIiwgYWN0aW9uKVxuXHR9XG5cblx0ZnVuY3Rpb24gb25IaWRlKGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcImhpZGVcIiwgYWN0aW9uKVxuXHR9XG5cblx0ZnVuY3Rpb24gb25TaG93KGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcInNob3dcIiwgYWN0aW9uKVxuXHR9XG5cblx0ZnVuY3Rpb24gb25HYW1lcGFkQnV0dG9uRG93bihidG46IEdhbWVwYWRCdXR0b24gfCAoKGJ0bjogR2FtZXBhZEJ1dHRvbikgPT4gdm9pZCksIGFjdGlvbj86IChidG46IEdhbWVwYWRCdXR0b24pID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdGlmICh0eXBlb2YgYnRuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJnYW1lcGFkQnV0dG9uRG93blwiLCBidG4pXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYnRuID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBhY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcImdhbWVwYWRCdXR0b25Eb3duXCIsIChiKSA9PiBiID09PSBidG4gJiYgYWN0aW9uKGJ0bikpXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gb25HYW1lcGFkQnV0dG9uUHJlc3MoYnRuOiBHYW1lcGFkQnV0dG9uIHwgKChidG46IEdhbWVwYWRCdXR0b24pID0+IHZvaWQpLCBhY3Rpb24/OiAoYnRuOiBHYW1lcGFkQnV0dG9uKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRpZiAodHlwZW9mIGJ0biA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwiZ2FtZXBhZEJ1dHRvblByZXNzXCIsIGJ0bilcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBidG4gPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGFjdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwiZ2FtZXBhZEJ1dHRvblByZXNzXCIsIChiKSA9PiBiID09PSBidG4gJiYgYWN0aW9uKGJ0bikpXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gb25HYW1lcGFkQnV0dG9uUmVsZWFzZShidG46IEdhbWVwYWRCdXR0b24gfCAoKGJ0bjogR2FtZXBhZEJ1dHRvbikgPT4gdm9pZCksIGFjdGlvbj86IChidG46IEdhbWVwYWRCdXR0b24pID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdGlmICh0eXBlb2YgYnRuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJnYW1lcGFkQnV0dG9uUmVsZWFzZVwiLCBidG4pXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYnRuID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBhY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcImdhbWVwYWRCdXR0b25SZWxlYXNlXCIsIChiKSA9PiBiID09PSBidG4gJiYgYWN0aW9uKGJ0bikpXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gb25HYW1lcGFkU3RpY2soc3RpY2s6IEdhbWVwYWRTdGljaywgYWN0aW9uOiAodmFsdWU6IFZlYzIpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJnYW1lcGFkU3RpY2tcIiwgKChhOiBzdHJpbmcsIHY6IFZlYzIpID0+IGEgPT09IHN0aWNrICYmIGFjdGlvbih2KSkpXG5cdH1cblxuXHRmdW5jdGlvbiBvbkdhbWVwYWRDb25uZWN0KGFjdGlvbjogKGdhbWVwYWQ6IEtHYW1lUGFkKSA9PiB2b2lkKSB7XG5cdFx0c3RhdGUuZXZlbnRzLm9uKFwiZ2FtZXBhZENvbm5lY3RcIiwgYWN0aW9uKVxuXHR9XG5cblx0ZnVuY3Rpb24gb25HYW1lcGFkRGlzY29ubmVjdChhY3Rpb246IChnYW1lcGFkOiBLR2FtZVBhZCkgPT4gdm9pZCkge1xuXHRcdHN0YXRlLmV2ZW50cy5vbihcImdhbWVwYWREaXNjb25uZWN0XCIsIGFjdGlvbilcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEdhbWVwYWRTdGljayhzdGljazogR2FtZXBhZFN0aWNrKTogVmVjMiB7XG5cdFx0cmV0dXJuIHN0YXRlLm1lcmdlZEdhbWVwYWRTdGF0ZS5zdGlja1N0YXRlLmdldChzdGljaykgfHwgbmV3IFZlYzIoMClcblx0fVxuXG5cdGZ1bmN0aW9uIGNoYXJJbnB1dHRlZCgpOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIFsuLi5zdGF0ZS5jaGFySW5wdXR0ZWRdXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRHYW1lcGFkcygpOiBLR2FtZVBhZFtdIHtcblx0XHRyZXR1cm4gWy4uLnN0YXRlLmdhbWVwYWRzXVxuXHR9XG5cblx0ZnVuY3Rpb24gcHJvY2Vzc0lucHV0KCkge1xuXHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwiaW5wdXRcIilcblx0XHRzdGF0ZS5rZXlTdGF0ZS5kb3duLmZvckVhY2goKGspID0+IHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwia2V5RG93blwiLCBrKSlcblx0XHRzdGF0ZS5tb3VzZVN0YXRlLmRvd24uZm9yRWFjaCgoaykgPT4gc3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJtb3VzZURvd25cIiwgaykpXG5cdFx0cHJvY2Vzc0dhbWVwYWQoKVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVzZXRJbnB1dCgpIHtcblx0XHRzdGF0ZS5rZXlTdGF0ZS51cGRhdGUoKVxuXHRcdHN0YXRlLm1vdXNlU3RhdGUudXBkYXRlKClcblx0XHRzdGF0ZS5tZXJnZWRHYW1lcGFkU3RhdGUuYnV0dG9uU3RhdGUudXBkYXRlKClcblx0XHRzdGF0ZS5tZXJnZWRHYW1lcGFkU3RhdGUuc3RpY2tTdGF0ZS5mb3JFYWNoKCh2LCBrKSA9PiB7XG5cdFx0XHRzdGF0ZS5tZXJnZWRHYW1lcGFkU3RhdGUuc3RpY2tTdGF0ZS5zZXQoaywgbmV3IFZlYzIoMCkpXG5cdFx0fSlcblx0XHRzdGF0ZS5jaGFySW5wdXR0ZWQgPSBbXVxuXHRcdHN0YXRlLmlzTW91c2VNb3ZlZCA9IGZhbHNlXG5cblx0XHRzdGF0ZS5nYW1lcGFkU3RhdGVzLmZvckVhY2goKHMpID0+IHtcblx0XHRcdHMuYnV0dG9uU3RhdGUudXBkYXRlKClcblx0XHRcdHMuc3RpY2tTdGF0ZS5mb3JFYWNoKCh2LCBrKSA9PiB7XG5cdFx0XHRcdHMuc3RpY2tTdGF0ZS5zZXQoaywgbmV3IFZlYzIoMCkpXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRmdW5jdGlvbiByZWdpc3RlckdhbWVwYWQoYnJvd3NlckdhbWVwYWQ6IEdhbWVwYWQpIHtcblxuXHRcdGNvbnN0IGdhbWVwYWQgPSB7XG5cdFx0XHRpbmRleDogYnJvd3NlckdhbWVwYWQuaW5kZXgsXG5cdFx0XHRpc1ByZXNzZWQ6IChidG46IEdhbWVwYWRCdXR0b24pID0+IHtcblx0XHRcdFx0cmV0dXJuIHN0YXRlLmdhbWVwYWRTdGF0ZXMuZ2V0KGJyb3dzZXJHYW1lcGFkLmluZGV4KS5idXR0b25TdGF0ZS5wcmVzc2VkLmhhcyhidG4pXG5cdFx0XHR9LFxuXHRcdFx0aXNEb3duOiAoYnRuOiBHYW1lcGFkQnV0dG9uKSA9PiB7XG5cdFx0XHRcdHJldHVybiBzdGF0ZS5nYW1lcGFkU3RhdGVzLmdldChicm93c2VyR2FtZXBhZC5pbmRleCkuYnV0dG9uU3RhdGUuZG93bi5oYXMoYnRuKVxuXHRcdFx0fSxcblx0XHRcdGlzUmVsZWFzZWQ6IChidG46IEdhbWVwYWRCdXR0b24pID0+IHtcblx0XHRcdFx0cmV0dXJuIHN0YXRlLmdhbWVwYWRTdGF0ZXMuZ2V0KGJyb3dzZXJHYW1lcGFkLmluZGV4KS5idXR0b25TdGF0ZS5yZWxlYXNlZC5oYXMoYnRuKVxuXHRcdFx0fSxcblx0XHRcdGdldFN0aWNrOiAoc3RpY2s6IEdhbWVwYWRTdGljaykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gc3RhdGUuZ2FtZXBhZFN0YXRlcy5nZXQoYnJvd3NlckdhbWVwYWQuaW5kZXgpLnN0aWNrU3RhdGUuZ2V0KHN0aWNrKVxuXHRcdFx0fSxcblx0XHR9XG5cblx0XHRzdGF0ZS5nYW1lcGFkcy5wdXNoKGdhbWVwYWQpXG5cblx0XHRzdGF0ZS5nYW1lcGFkU3RhdGVzLnNldChicm93c2VyR2FtZXBhZC5pbmRleCwge1xuXHRcdFx0YnV0dG9uU3RhdGU6IG5ldyBCdXR0b25TdGF0ZSgpLFxuXHRcdFx0c3RpY2tTdGF0ZTogbmV3IE1hcChbXG5cdFx0XHRcdFtcImxlZnRcIiwgbmV3IFZlYzIoMCldLFxuXHRcdFx0XHRbXCJyaWdodFwiLCBuZXcgVmVjMigwKV0sXG5cdFx0XHRdKSxcblx0XHR9KVxuXG5cdFx0cmV0dXJuIGdhbWVwYWRcblxuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlR2FtZXBhZChnYW1lcGFkOiBHYW1lcGFkKSB7XG5cdFx0c3RhdGUuZ2FtZXBhZHMgPSBzdGF0ZS5nYW1lcGFkcy5maWx0ZXIoKGcpID0+IGcuaW5kZXggIT09IGdhbWVwYWQuaW5kZXgpXG5cdFx0c3RhdGUuZ2FtZXBhZFN0YXRlcy5kZWxldGUoZ2FtZXBhZC5pbmRleClcblx0fVxuXG5cdGZ1bmN0aW9uIHByb2Nlc3NHYW1lcGFkKCkge1xuXG5cdFx0Zm9yIChjb25zdCBicm93c2VyR2FtZXBhZCBvZiBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKSkge1xuXHRcdFx0aWYgKGJyb3dzZXJHYW1lcGFkICYmICFzdGF0ZS5nYW1lcGFkU3RhdGVzLmhhcyhicm93c2VyR2FtZXBhZC5pbmRleCkpIHtcblx0XHRcdFx0cmVnaXN0ZXJHYW1lcGFkKGJyb3dzZXJHYW1lcGFkKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgZ2FtZXBhZCBvZiBzdGF0ZS5nYW1lcGFkcykge1xuXG5cdFx0XHRjb25zdCBicm93c2VyR2FtZXBhZCA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpW2dhbWVwYWQuaW5kZXhdXG5cdFx0XHRjb25zdCBjdXN0b21NYXAgPSBvcHQuZ2FtZXBhZHMgPz8ge31cblx0XHRcdGNvbnN0IG1hcCA9IGN1c3RvbU1hcFticm93c2VyR2FtZXBhZC5pZF0gPz8gR0FNRVBBRF9NQVBbYnJvd3NlckdhbWVwYWQuaWRdID8/IEdBTUVQQURfTUFQW1wiZGVmYXVsdFwiXVxuXHRcdFx0Y29uc3QgZ2FtZXBhZFN0YXRlID0gc3RhdGUuZ2FtZXBhZFN0YXRlcy5nZXQoZ2FtZXBhZC5pbmRleClcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBicm93c2VyR2FtZXBhZC5idXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChicm93c2VyR2FtZXBhZC5idXR0b25zW2ldLnByZXNzZWQpIHtcblx0XHRcdFx0XHRpZiAoIWdhbWVwYWRTdGF0ZS5idXR0b25TdGF0ZS5kb3duLmhhcyhtYXAuYnV0dG9uc1tpXSkpIHtcblx0XHRcdFx0XHRcdHN0YXRlLm1lcmdlZEdhbWVwYWRTdGF0ZS5idXR0b25TdGF0ZS5wcmVzcyhtYXAuYnV0dG9uc1tpXSlcblx0XHRcdFx0XHRcdGdhbWVwYWRTdGF0ZS5idXR0b25TdGF0ZS5wcmVzcyhtYXAuYnV0dG9uc1tpXSlcblx0XHRcdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwiZ2FtZXBhZEJ1dHRvblByZXNzXCIsIG1hcC5idXR0b25zW2ldKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcImdhbWVwYWRCdXR0b25Eb3duXCIsIG1hcC5idXR0b25zW2ldKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChnYW1lcGFkU3RhdGUuYnV0dG9uU3RhdGUuZG93bi5oYXMobWFwLmJ1dHRvbnNbaV0pKSB7XG5cdFx0XHRcdFx0XHRzdGF0ZS5tZXJnZWRHYW1lcGFkU3RhdGUuYnV0dG9uU3RhdGUucmVsZWFzZShtYXAuYnV0dG9uc1tpXSlcblx0XHRcdFx0XHRcdGdhbWVwYWRTdGF0ZS5idXR0b25TdGF0ZS5yZWxlYXNlKG1hcC5idXR0b25zW2ldKVxuXHRcdFx0XHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJnYW1lcGFkQnV0dG9uUmVsZWFzZVwiLCBtYXAuYnV0dG9uc1tpXSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBzdGlja05hbWUgaW4gbWFwLnN0aWNrcykge1xuXHRcdFx0XHRjb25zdCBzdGljayA9IG1hcC5zdGlja3Nbc3RpY2tOYW1lXVxuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IG5ldyBWZWMyKFxuXHRcdFx0XHRcdGJyb3dzZXJHYW1lcGFkLmF4ZXNbc3RpY2sueF0sXG5cdFx0XHRcdFx0YnJvd3NlckdhbWVwYWQuYXhlc1tzdGljay55XSxcblx0XHRcdFx0KVxuXHRcdFx0XHRnYW1lcGFkU3RhdGUuc3RpY2tTdGF0ZS5zZXQoc3RpY2tOYW1lIGFzIEdhbWVwYWRTdGljaywgdmFsdWUpXG5cdFx0XHRcdHN0YXRlLm1lcmdlZEdhbWVwYWRTdGF0ZS5zdGlja1N0YXRlLnNldChzdGlja05hbWUgYXMgR2FtZXBhZFN0aWNrLCB2YWx1ZSlcblx0XHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJnYW1lcGFkU3RpY2tcIiwgc3RpY2tOYW1lLCB2YWx1ZSlcblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0dHlwZSBFdmVudExpc3Q8TT4gPSB7XG5cdFx0W2V2ZW50IGluIGtleW9mIE1dPzogKGV2ZW50OiBNW2V2ZW50XSkgPT4gdm9pZFxuXHR9XG5cblx0Y29uc3QgY2FudmFzRXZlbnRzOiBFdmVudExpc3Q8SFRNTEVsZW1lbnRFdmVudE1hcD4gPSB7fVxuXHRjb25zdCBkb2NFdmVudHM6IEV2ZW50TGlzdDxEb2N1bWVudEV2ZW50TWFwPiA9IHt9XG5cdGNvbnN0IHdpbkV2ZW50czogRXZlbnRMaXN0PFdpbmRvd0V2ZW50TWFwPiA9IHt9XG5cblx0Y29uc3QgcGQgPSBvcHQucGl4ZWxEZW5zaXR5IHx8IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcblxuXHRjYW52YXNFdmVudHMubW91c2Vtb3ZlID0gKGUpID0+IHtcblx0XHRjb25zdCBtb3VzZVBvcyA9IG5ldyBWZWMyKGUub2Zmc2V0WCwgZS5vZmZzZXRZKVxuXHRcdGNvbnN0IG1vdXNlRGVsdGFQb3MgPSBuZXcgVmVjMihlLm1vdmVtZW50WCwgZS5tb3ZlbWVudFkpXG5cdFx0aWYgKGlzRnVsbHNjcmVlbigpKSB7XG5cdFx0XHRjb25zdCBjdyA9IHN0YXRlLmNhbnZhcy53aWR0aCAvIHBkXG5cdFx0XHRjb25zdCBjaCA9IHN0YXRlLmNhbnZhcy5oZWlnaHQgLyBwZFxuXHRcdFx0Y29uc3Qgd3cgPSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdFx0Y29uc3Qgd2ggPSB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHRcdGNvbnN0IHJ3ID0gd3cgLyB3aFxuXHRcdFx0Y29uc3QgcmMgPSBjdyAvIGNoXG5cdFx0XHRpZiAocncgPiByYykge1xuXHRcdFx0XHRjb25zdCByYXRpbyA9IHdoIC8gY2hcblx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gKHd3IC0gKGN3ICogcmF0aW8pKSAvIDJcblx0XHRcdFx0bW91c2VQb3MueCA9IG1hcChlLm9mZnNldFggLSBvZmZzZXQsIDAsIGN3ICogcmF0aW8sIDAsIGN3KVxuXHRcdFx0XHRtb3VzZVBvcy55ID0gbWFwKGUub2Zmc2V0WSwgMCwgY2ggKiByYXRpbywgMCwgY2gpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByYXRpbyA9IHd3IC8gY3dcblx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gKHdoIC0gKGNoICogcmF0aW8pKSAvIDJcblx0XHRcdFx0bW91c2VQb3MueCA9IG1hcChlLm9mZnNldFggLCAwLCBjdyAqIHJhdGlvLCAwLCBjdylcblx0XHRcdFx0bW91c2VQb3MueSA9IG1hcChlLm9mZnNldFkgLSBvZmZzZXQsIDAsIGNoICogcmF0aW8sIDAsIGNoKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRzdGF0ZS5ldmVudHMub25PbmNlKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0c3RhdGUuaXNNb3VzZU1vdmVkID0gdHJ1ZVxuXHRcdFx0c3RhdGUubW91c2VQb3MgPSBtb3VzZVBvc1xuXHRcdFx0c3RhdGUubW91c2VEZWx0YVBvcyA9IG1vdXNlRGVsdGFQb3Ncblx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwibW91c2VNb3ZlXCIpXG5cdFx0fSlcblx0fVxuXG5cdGNvbnN0IE1PVVNFX0JVVFRPTlM6IE1vdXNlQnV0dG9uW10gPSBbXG5cdFx0XCJsZWZ0XCIsXG5cdFx0XCJtaWRkbGVcIixcblx0XHRcInJpZ2h0XCIsXG5cdFx0XCJiYWNrXCIsXG5cdFx0XCJmb3J3YXJkXCIsXG5cdF1cblxuXHRjYW52YXNFdmVudHMubW91c2Vkb3duID0gKGUpID0+IHtcblx0XHRzdGF0ZS5ldmVudHMub25PbmNlKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0Y29uc3QgbSA9IE1PVVNFX0JVVFRPTlNbZS5idXR0b25dXG5cdFx0XHRpZiAoIW0pIHJldHVyblxuXHRcdFx0c3RhdGUubW91c2VTdGF0ZS5wcmVzcyhtKVxuXHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJtb3VzZVByZXNzXCIsIG0pXG5cdFx0fSlcblx0fVxuXG5cdGNhbnZhc0V2ZW50cy5tb3VzZXVwID0gKGUpID0+IHtcblx0XHRzdGF0ZS5ldmVudHMub25PbmNlKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0Y29uc3QgbSA9IE1PVVNFX0JVVFRPTlNbZS5idXR0b25dXG5cdFx0XHRpZiAoIW0pIHJldHVyblxuXHRcdFx0c3RhdGUubW91c2VTdGF0ZS5yZWxlYXNlKG0pXG5cdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcIm1vdXNlUmVsZWFzZVwiLCBtKVxuXHRcdH0pXG5cdH1cblxuXHRjb25zdCBQUkVWRU5UX0RFRkFVTFRfS0VZUyA9IG5ldyBTZXQoW1xuXHRcdFwiIFwiLFxuXHRcdFwiQXJyb3dMZWZ0XCIsXG5cdFx0XCJBcnJvd1JpZ2h0XCIsXG5cdFx0XCJBcnJvd1VwXCIsXG5cdFx0XCJBcnJvd0Rvd25cIixcblx0XHRcIlRhYlwiLFxuXHRdKVxuXG5cdC8vIHRyYW5zbGF0ZSB0aGVzZSBrZXkgbmFtZXMgdG8gYSBzaW1wbGVyIHZlcnNpb25cblx0Y29uc3QgS0VZX0FMSUFTID0ge1xuXHRcdFwiQXJyb3dMZWZ0XCI6IFwibGVmdFwiLFxuXHRcdFwiQXJyb3dSaWdodFwiOiBcInJpZ2h0XCIsXG5cdFx0XCJBcnJvd1VwXCI6IFwidXBcIixcblx0XHRcIkFycm93RG93blwiOiBcImRvd25cIixcblx0XHRcIiBcIjogXCJzcGFjZVwiLFxuXHR9XG5cblx0Y2FudmFzRXZlbnRzLmtleWRvd24gPSAoZSkgPT4ge1xuXHRcdGlmIChQUkVWRU5UX0RFRkFVTFRfS0VZUy5oYXMoZS5rZXkpKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHR9XG5cdFx0c3RhdGUuZXZlbnRzLm9uT25jZShcImlucHV0XCIsICgpID0+IHtcblx0XHRcdGNvbnN0IGsgPSBLRVlfQUxJQVNbZS5rZXldIHx8IGUua2V5LnRvTG93ZXJDYXNlKClcblx0XHRcdGlmIChrLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcImNoYXJJbnB1dFwiLCBrKVxuXHRcdFx0XHRzdGF0ZS5jaGFySW5wdXR0ZWQucHVzaChrKVxuXHRcdFx0fSBlbHNlIGlmIChrID09PSBcInNwYWNlXCIpIHtcblx0XHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJjaGFySW5wdXRcIiwgXCIgXCIpXG5cdFx0XHRcdHN0YXRlLmNoYXJJbnB1dHRlZC5wdXNoKFwiIFwiKVxuXHRcdFx0fVxuXHRcdFx0aWYgKGUucmVwZWF0KSB7XG5cdFx0XHRcdHN0YXRlLmtleVN0YXRlLnByZXNzUmVwZWF0KGspXG5cdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwia2V5UHJlc3NSZXBlYXRcIiwgaylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YXRlLmtleVN0YXRlLnByZXNzKGspXG5cdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwia2V5UHJlc3NSZXBlYXRcIiwgaylcblx0XHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJrZXlQcmVzc1wiLCBrKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRjYW52YXNFdmVudHMua2V5dXAgPSAoZSkgPT4ge1xuXHRcdHN0YXRlLmV2ZW50cy5vbk9uY2UoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBrID0gS0VZX0FMSUFTW2Uua2V5XSB8fCBlLmtleS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRzdGF0ZS5rZXlTdGF0ZS5yZWxlYXNlKGspXG5cdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcImtleVJlbGVhc2VcIiwgaylcblx0XHR9KVxuXHR9XG5cblx0Ly8gVE9ETzogaGFuZGxlIGFsbCB0b3VjaGVzIGF0IG9uY2UgaW5zdGVhZCBvZiBzZXF1ZW50aWFsbHlcblx0Y2FudmFzRXZlbnRzLnRvdWNoc3RhcnQgPSAoZSkgPT4ge1xuXHRcdC8vIGRpc2FibGUgbG9uZyB0YXAgY29udGV4dCBtZW51XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0c3RhdGUuZXZlbnRzLm9uT25jZShcImlucHV0XCIsICgpID0+IHtcblx0XHRcdGNvbnN0IHRvdWNoZXMgPSBbLi4uZS5jaGFuZ2VkVG91Y2hlc11cblx0XHRcdGNvbnN0IGJveCA9IHN0YXRlLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXHRcdFx0aWYgKG9wdC50b3VjaFRvTW91c2UgIT09IGZhbHNlKSB7XG5cdFx0XHRcdHN0YXRlLm1vdXNlUG9zID0gbmV3IFZlYzIoXG5cdFx0XHRcdFx0dG91Y2hlc1swXS5jbGllbnRYIC0gYm94LngsXG5cdFx0XHRcdFx0dG91Y2hlc1swXS5jbGllbnRZIC0gYm94LnksXG5cdFx0XHRcdClcblx0XHRcdFx0c3RhdGUubW91c2VTdGF0ZS5wcmVzcyhcImxlZnRcIilcblx0XHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJtb3VzZVByZXNzXCIsIFwibGVmdFwiKVxuXHRcdFx0fVxuXHRcdFx0dG91Y2hlcy5mb3JFYWNoKCh0KSA9PiB7XG5cdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFxuXHRcdFx0XHRcdFwidG91Y2hTdGFydFwiLFxuXHRcdFx0XHRcdG5ldyBWZWMyKHQuY2xpZW50WCAtIGJveC54LCB0LmNsaWVudFkgLSBib3gueSksXG5cdFx0XHRcdFx0dCxcblx0XHRcdFx0KVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0Y2FudmFzRXZlbnRzLnRvdWNobW92ZSA9IChlKSA9PiB7XG5cdFx0Ly8gZGlzYWJsZSBzY3JvbGxpbmdcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRzdGF0ZS5ldmVudHMub25PbmNlKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdG91Y2hlcyA9IFsuLi5lLmNoYW5nZWRUb3VjaGVzXVxuXHRcdFx0Y29uc3QgYm94ID0gc3RhdGUuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cdFx0XHRpZiAob3B0LnRvdWNoVG9Nb3VzZSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0c3RhdGUubW91c2VQb3MgPSBuZXcgVmVjMihcblx0XHRcdFx0XHR0b3VjaGVzWzBdLmNsaWVudFggLSBib3gueCxcblx0XHRcdFx0XHR0b3VjaGVzWzBdLmNsaWVudFkgLSBib3gueSxcblx0XHRcdFx0KVxuXHRcdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcIm1vdXNlTW92ZVwiKVxuXHRcdFx0fVxuXHRcdFx0dG91Y2hlcy5mb3JFYWNoKCh0KSA9PiB7XG5cdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFxuXHRcdFx0XHRcdFwidG91Y2hNb3ZlXCIsXG5cdFx0XHRcdFx0bmV3IFZlYzIodC5jbGllbnRYIC0gYm94LngsIHQuY2xpZW50WSAtIGJveC55KSxcblx0XHRcdFx0XHR0LFxuXHRcdFx0XHQpXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRjYW52YXNFdmVudHMudG91Y2hlbmQgPSAoZSkgPT4ge1xuXHRcdHN0YXRlLmV2ZW50cy5vbk9uY2UoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0XHRjb25zdCB0b3VjaGVzID0gWy4uLmUuY2hhbmdlZFRvdWNoZXNdXG5cdFx0XHRjb25zdCBib3ggPSBzdGF0ZS5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblx0XHRcdGlmIChvcHQudG91Y2hUb01vdXNlICE9PSBmYWxzZSkge1xuXHRcdFx0XHRzdGF0ZS5tb3VzZVBvcyA9IG5ldyBWZWMyKFxuXHRcdFx0XHRcdHRvdWNoZXNbMF0uY2xpZW50WCAtIGJveC54LFxuXHRcdFx0XHRcdHRvdWNoZXNbMF0uY2xpZW50WSAtIGJveC55LFxuXHRcdFx0XHQpXG5cdFx0XHRcdHN0YXRlLm1vdXNlU3RhdGUucmVsZWFzZShcImxlZnRcIilcblx0XHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJtb3VzZVJlbGVhc2VcIiwgXCJsZWZ0XCIpXG5cdFx0XHR9XG5cdFx0XHR0b3VjaGVzLmZvckVhY2goKHQpID0+IHtcblx0XHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXG5cdFx0XHRcdFx0XCJ0b3VjaEVuZFwiLFxuXHRcdFx0XHRcdG5ldyBWZWMyKHQuY2xpZW50WCAtIGJveC54LCB0LmNsaWVudFkgLSBib3gueSksXG5cdFx0XHRcdFx0dCxcblx0XHRcdFx0KVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0Y2FudmFzRXZlbnRzLnRvdWNoY2FuY2VsID0gKGUpID0+IHtcblx0XHRzdGF0ZS5ldmVudHMub25PbmNlKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdG91Y2hlcyA9IFsuLi5lLmNoYW5nZWRUb3VjaGVzXVxuXHRcdFx0Y29uc3QgYm94ID0gc3RhdGUuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cdFx0XHRpZiAob3B0LnRvdWNoVG9Nb3VzZSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0c3RhdGUubW91c2VQb3MgPSBuZXcgVmVjMihcblx0XHRcdFx0XHR0b3VjaGVzWzBdLmNsaWVudFggLSBib3gueCxcblx0XHRcdFx0XHR0b3VjaGVzWzBdLmNsaWVudFkgLSBib3gueSxcblx0XHRcdFx0KVxuXHRcdFx0XHRzdGF0ZS5tb3VzZVN0YXRlLnJlbGVhc2UoXCJsZWZ0XCIpXG5cdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwibW91c2VSZWxlYXNlXCIsIFwibGVmdFwiKVxuXHRcdFx0fVxuXHRcdFx0dG91Y2hlcy5mb3JFYWNoKCh0KSA9PiB7XG5cdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFxuXHRcdFx0XHRcdFwidG91Y2hFbmRcIixcblx0XHRcdFx0XHRuZXcgVmVjMih0LmNsaWVudFggLSBib3gueCwgdC5jbGllbnRZIC0gYm94LnkpLFxuXHRcdFx0XHRcdHQsXG5cdFx0XHRcdClcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8vIFRPRE86IG9wdGlvbiB0byBub3QgcHJldmVudCBkZWZhdWx0P1xuXHRjYW52YXNFdmVudHMud2hlZWwgPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHN0YXRlLmV2ZW50cy5vbk9uY2UoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcInNjcm9sbFwiLCBuZXcgVmVjMihlLmRlbHRhWCwgZS5kZWx0YVkpKVxuXHRcdH0pXG5cdH1cblxuXHRjYW52YXNFdmVudHMuY29udGV4dG1lbnUgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0ZG9jRXZlbnRzLnZpc2liaWxpdHljaGFuZ2UgPSAoKSA9PiB7XG5cdFx0aWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpIHtcblx0XHRcdC8vIHByZXZlbnQgYSBzdXJnZSBvZiBkdCB3aGVuIHN3aXRjaCBiYWNrIGFmdGVyIHRoZSB0YWIgYmVpbmcgaGlkZGVuIGZvciBhIHdoaWxlXG5cdFx0XHRzdGF0ZS5za2lwVGltZSA9IHRydWVcblx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwic2hvd1wiKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcImhpZGVcIilcblx0XHR9XG5cdH1cblxuXHR3aW5FdmVudHMuZ2FtZXBhZGNvbm5lY3RlZCA9IChlKSA9PiB7XG5cdFx0Y29uc3Qga2JHYW1lcGFkID0gcmVnaXN0ZXJHYW1lcGFkKGUuZ2FtZXBhZClcblx0XHRzdGF0ZS5ldmVudHMub25PbmNlKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJnYW1lcGFkQ29ubmVjdFwiLCBrYkdhbWVwYWQpXG5cdFx0fSlcblx0fVxuXG5cdHdpbkV2ZW50cy5nYW1lcGFkZGlzY29ubmVjdGVkID0gKGUpID0+IHtcblx0XHRjb25zdCBrYkdhbWVwYWQgPSBnZXRHYW1lcGFkcygpLmZpbHRlcigoZykgPT4gZy5pbmRleCA9PT0gZS5nYW1lcGFkLmluZGV4KVswXVxuXHRcdHJlbW92ZUdhbWVwYWQoZS5nYW1lcGFkKVxuXHRcdHN0YXRlLmV2ZW50cy5vbk9uY2UoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcImdhbWVwYWREaXNjb25uZWN0XCIsIGtiR2FtZXBhZClcblx0XHR9KVxuXHR9XG5cblx0Zm9yIChjb25zdCBuYW1lIGluIGNhbnZhc0V2ZW50cykge1xuXHRcdHN0YXRlLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGNhbnZhc0V2ZW50c1tuYW1lXSlcblx0fVxuXG5cdGZvciAoY29uc3QgbmFtZSBpbiBkb2NFdmVudHMpIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGRvY0V2ZW50c1tuYW1lXSlcblx0fVxuXG5cdGZvciAoY29uc3QgbmFtZSBpbiB3aW5FdmVudHMpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCB3aW5FdmVudHNbbmFtZV0pXG5cdH1cblxuXHRjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuXHRcdFx0aWYgKGVudHJ5LnRhcmdldCAhPT0gc3RhdGUuY2FudmFzKSBjb250aW51ZVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRzdGF0ZS5sYXN0V2lkdGggPT09IHN0YXRlLmNhbnZhcy5vZmZzZXRXaWR0aFxuXHRcdFx0XHQmJiBzdGF0ZS5sYXN0SGVpZ2h0ID09PSBzdGF0ZS5jYW52YXMub2Zmc2V0SGVpZ2h0XG5cdFx0XHQpIHJldHVyblxuXHRcdFx0c3RhdGUubGFzdFdpZHRoID0gc3RhdGUuY2FudmFzLm9mZnNldFdpZHRoXG5cdFx0XHRzdGF0ZS5sYXN0SGVpZ2h0ID0gc3RhdGUuY2FudmFzLm9mZnNldEhlaWdodFxuXHRcdFx0c3RhdGUuZXZlbnRzLm9uT25jZShcImlucHV0XCIsICgpID0+IHtcblx0XHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJyZXNpemVcIilcblx0XHRcdH0pXG5cdFx0fVxuXHR9KVxuXG5cdHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoc3RhdGUuY2FudmFzKVxuXG5cdHJldHVybiB7XG5cdFx0ZHQsXG5cdFx0dGltZSxcblx0XHRydW4sXG5cdFx0Y2FudmFzOiBzdGF0ZS5jYW52YXMsXG5cdFx0ZnBzLFxuXHRcdG51bUZyYW1lcyxcblx0XHRxdWl0LFxuXHRcdHNldEZ1bGxzY3JlZW4sXG5cdFx0aXNGdWxsc2NyZWVuLFxuXHRcdHNldEN1cnNvcixcblx0XHRzY3JlZW5zaG90LFxuXHRcdGdldEdhbWVwYWRzLFxuXHRcdGdldEN1cnNvcixcblx0XHRzZXRDdXJzb3JMb2NrZWQsXG5cdFx0aXNDdXJzb3JMb2NrZWQsXG5cdFx0aXNUb3VjaHNjcmVlbixcblx0XHRtb3VzZVBvcyxcblx0XHRtb3VzZURlbHRhUG9zLFxuXHRcdGlzS2V5RG93bixcblx0XHRpc0tleVByZXNzZWQsXG5cdFx0aXNLZXlQcmVzc2VkUmVwZWF0LFxuXHRcdGlzS2V5UmVsZWFzZWQsXG5cdFx0aXNNb3VzZURvd24sXG5cdFx0aXNNb3VzZVByZXNzZWQsXG5cdFx0aXNNb3VzZVJlbGVhc2VkLFxuXHRcdGlzTW91c2VNb3ZlZCxcblx0XHRpc0dhbWVwYWRCdXR0b25QcmVzc2VkLFxuXHRcdGlzR2FtZXBhZEJ1dHRvbkRvd24sXG5cdFx0aXNHYW1lcGFkQnV0dG9uUmVsZWFzZWQsXG5cdFx0Z2V0R2FtZXBhZFN0aWNrLFxuXHRcdGNoYXJJbnB1dHRlZCxcblx0XHRvblJlc2l6ZSxcblx0XHRvbktleURvd24sXG5cdFx0b25LZXlQcmVzcyxcblx0XHRvbktleVByZXNzUmVwZWF0LFxuXHRcdG9uS2V5UmVsZWFzZSxcblx0XHRvbk1vdXNlRG93bixcblx0XHRvbk1vdXNlUHJlc3MsXG5cdFx0b25Nb3VzZVJlbGVhc2UsXG5cdFx0b25Nb3VzZU1vdmUsXG5cdFx0b25DaGFySW5wdXQsXG5cdFx0b25Ub3VjaFN0YXJ0LFxuXHRcdG9uVG91Y2hNb3ZlLFxuXHRcdG9uVG91Y2hFbmQsXG5cdFx0b25TY3JvbGwsXG5cdFx0b25IaWRlLFxuXHRcdG9uU2hvdyxcblx0XHRvbkdhbWVwYWRCdXR0b25Eb3duLFxuXHRcdG9uR2FtZXBhZEJ1dHRvblByZXNzLFxuXHRcdG9uR2FtZXBhZEJ1dHRvblJlbGVhc2UsXG5cdFx0b25HYW1lcGFkU3RpY2ssXG5cdFx0b25HYW1lcGFkQ29ubmVjdCxcblx0XHRvbkdhbWVwYWREaXNjb25uZWN0LFxuXHRcdGV2ZW50czogc3RhdGUuZXZlbnRzLFxuXHR9XG5cbn1cbiIsICJpbXBvcnQgdHlwZSB7XG5cdEltYWdlU291cmNlLFxuXHRUZXh0dXJlT3B0LFxuXHRUZXhGaWx0ZXIsXG5cdFVuaWZvcm0sXG59IGZyb20gXCIuL3R5cGVzXCJcblxuaW1wb3J0IHtcblx0TWF0NCxcblx0VmVjMixcblx0Q29sb3IsXG59IGZyb20gXCIuL21hdGhcIlxuXG5pbXBvcnQge1xuXHRkZWVwRXEsXG59IGZyb20gXCIuL3V0aWxzXCJcblxuZXhwb3J0IHR5cGUgR2Z4Q3R4ID0gUmV0dXJuVHlwZTx0eXBlb2YgaW5pdEdmeD5cblxuZXhwb3J0IGNsYXNzIFRleHR1cmUge1xuXG5cdGN0eDogR2Z4Q3R4XG5cdHNyYzogbnVsbCB8IEltYWdlU291cmNlID0gbnVsbFxuXHRnbFRleDogV2ViR0xUZXh0dXJlXG5cdHdpZHRoOiBudW1iZXJcblx0aGVpZ2h0OiBudW1iZXJcblxuXHRjb25zdHJ1Y3RvcihjdHg6IEdmeEN0eCwgdzogbnVtYmVyLCBoOiBudW1iZXIsIG9wdDogVGV4dHVyZU9wdCA9IHt9KSB7XG5cblx0XHR0aGlzLmN0eCA9IGN0eFxuXHRcdGNvbnN0IGdsID0gY3R4LmdsXG5cdFx0dGhpcy5nbFRleCA9IGN0eC5nbC5jcmVhdGVUZXh0dXJlKClcblx0XHRjdHgub25EZXN0cm95KCgpID0+IHRoaXMuZnJlZSgpKVxuXG5cdFx0dGhpcy53aWR0aCA9IHdcblx0XHR0aGlzLmhlaWdodCA9IGhcblxuXHRcdC8vIFRPRE86IG5vIGRlZmF1bHRcblx0XHRjb25zdCBmaWx0ZXIgPSB7XG5cdFx0XHRcImxpbmVhclwiOiBnbC5MSU5FQVIsXG5cdFx0XHRcIm5lYXJlc3RcIjogZ2wuTkVBUkVTVCxcblx0XHR9W29wdC5maWx0ZXIgPz8gY3R4Lm9wdHMudGV4RmlsdGVyXSA/PyBnbC5ORUFSRVNUXG5cblx0XHRjb25zdCB3cmFwID0ge1xuXHRcdFx0XCJyZXBlYXRcIjogZ2wuUkVQRUFULFxuXHRcdFx0XCJjbGFtcFRvRWFkZ2VcIjogZ2wuQ0xBTVBfVE9fRURHRSxcblx0XHR9W29wdC53cmFwXSA/PyBnbC5DTEFNUF9UT19FREdFXG5cblx0XHR0aGlzLmJpbmQoKVxuXG5cdFx0aWYgKHcgJiYgaCkge1xuXHRcdFx0Z2wudGV4SW1hZ2UyRChcblx0XHRcdFx0Z2wuVEVYVFVSRV8yRCxcblx0XHRcdFx0MCwgZ2wuUkdCQSxcblx0XHRcdFx0dyxcblx0XHRcdFx0aCxcblx0XHRcdFx0MCxcblx0XHRcdFx0Z2wuUkdCQSxcblx0XHRcdFx0Z2wuVU5TSUdORURfQllURSxcblx0XHRcdFx0bnVsbCxcblx0XHRcdClcblx0XHR9XG5cblx0XHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZmlsdGVyKVxuXHRcdGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBmaWx0ZXIpXG5cdFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgd3JhcClcblx0XHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCB3cmFwKVxuXHRcdHRoaXMudW5iaW5kKClcblxuXHR9XG5cblx0c3RhdGljIGZyb21JbWFnZShjdHg6IEdmeEN0eCwgaW1nOiBJbWFnZVNvdXJjZSwgb3B0OiBUZXh0dXJlT3B0ID0ge30pOiBUZXh0dXJlIHtcblx0XHRjb25zdCB0ZXggPSBuZXcgVGV4dHVyZShjdHgsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgb3B0KVxuXHRcdHRleC51cGRhdGUoaW1nKVxuXHRcdHRleC5zcmMgPSBpbWdcblx0XHRyZXR1cm4gdGV4XG5cdH1cblxuXHR1cGRhdGUoaW1nOiBJbWFnZVNvdXJjZSwgeCA9IDAsIHkgPSAwKSB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmN0eC5nbFxuXHRcdHRoaXMuYmluZCgpXG5cdFx0Z2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCB4LCB5LCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWcpXG5cdFx0dGhpcy51bmJpbmQoKVxuXHR9XG5cblx0YmluZCgpIHtcblx0XHR0aGlzLmN0eC5wdXNoVGV4dHVyZTJEKHRoaXMuZ2xUZXgpXG5cdH1cblxuXHR1bmJpbmQoKSB7XG5cdFx0dGhpcy5jdHgucG9wVGV4dHVyZTJEKClcblx0fVxuXG5cdGZyZWUoKSB7XG5cdFx0dGhpcy5jdHguZ2wuZGVsZXRlVGV4dHVyZSh0aGlzLmdsVGV4KVxuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEZyYW1lQnVmZmVyIHtcblxuXHRjdHg6IEdmeEN0eFxuXHR0ZXg6IFRleHR1cmVcblx0Z2xGcmFtZWJ1ZmZlcjogV2ViR0xGcmFtZWJ1ZmZlclxuXHRnbFJlbmRlcmJ1ZmZlcjogV2ViR0xSZW5kZXJidWZmZXJcblxuXHRjb25zdHJ1Y3RvcihjdHg6IEdmeEN0eCwgdzogbnVtYmVyLCBoOiBudW1iZXIsIG9wdDogVGV4dHVyZU9wdCA9IHt9KSB7XG5cblx0XHR0aGlzLmN0eCA9IGN0eFxuXHRcdGNvbnN0IGdsID0gY3R4LmdsXG5cdFx0Y3R4Lm9uRGVzdHJveSgoKSA9PiB0aGlzLmZyZWUoKSlcblx0XHR0aGlzLnRleCA9IG5ldyBUZXh0dXJlKGN0eCwgdywgaCwgb3B0KVxuXHRcdHRoaXMuZ2xGcmFtZWJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKClcblx0XHR0aGlzLmdsUmVuZGVyYnVmZmVyID0gZ2wuY3JlYXRlUmVuZGVyYnVmZmVyKClcblx0XHR0aGlzLmJpbmQoKVxuXHRcdGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoZ2wuUkVOREVSQlVGRkVSLCBnbC5ERVBUSF9TVEVOQ0lMLCB3LCBoKVxuXHRcdGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKFxuXHRcdFx0Z2wuRlJBTUVCVUZGRVIsXG5cdFx0XHRnbC5DT0xPUl9BVFRBQ0hNRU5UMCxcblx0XHRcdGdsLlRFWFRVUkVfMkQsXG5cdFx0XHR0aGlzLnRleC5nbFRleCxcblx0XHRcdDAsXG5cdFx0KVxuXHRcdGdsLmZyYW1lYnVmZmVyUmVuZGVyYnVmZmVyKFxuXHRcdFx0Z2wuRlJBTUVCVUZGRVIsXG5cdFx0XHRnbC5ERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlQsXG5cdFx0XHRnbC5SRU5ERVJCVUZGRVIsXG5cdFx0XHR0aGlzLmdsUmVuZGVyYnVmZmVyLFxuXHRcdClcblx0XHR0aGlzLnVuYmluZCgpXG5cdH1cblxuXHRnZXQgd2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMudGV4LndpZHRoXG5cdH1cblxuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLnRleC5oZWlnaHRcblx0fVxuXG5cdHRvSW1hZ2VEYXRhKCkge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5jdHguZ2xcblx0XHRjb25zdCBkYXRhID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHRoaXMud2lkdGggKiB0aGlzLmhlaWdodCAqIDQpXG5cdFx0dGhpcy5iaW5kKClcblx0XHRnbC5yZWFkUGl4ZWxzKDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBkYXRhKVxuXHRcdHRoaXMudW5iaW5kKClcblx0XHQvLyBmbGlwIHZlcnRpY2FsbHlcblx0XHRjb25zdCBieXRlc1BlclJvdyA9IHRoaXMud2lkdGggKiA0XG5cdFx0Y29uc3QgdGVtcCA9IG5ldyBVaW50OEFycmF5KGJ5dGVzUGVyUm93KVxuXHRcdGZvciAobGV0IHkgPSAwOyB5IDwgKHRoaXMuaGVpZ2h0IC8gMiB8IDApOyB5KyspIHtcblx0XHRcdGNvbnN0IHRvcE9mZnNldCA9IHkgKiBieXRlc1BlclJvd1xuXHRcdFx0Y29uc3QgYm90dG9tT2Zmc2V0ID0gKHRoaXMuaGVpZ2h0IC0geSAtIDEpICogYnl0ZXNQZXJSb3dcblx0XHRcdHRlbXAuc2V0KGRhdGEuc3ViYXJyYXkodG9wT2Zmc2V0LCB0b3BPZmZzZXQgKyBieXRlc1BlclJvdykpXG5cdFx0XHRkYXRhLmNvcHlXaXRoaW4odG9wT2Zmc2V0LCBib3R0b21PZmZzZXQsIGJvdHRvbU9mZnNldCArIGJ5dGVzUGVyUm93KVxuXHRcdFx0ZGF0YS5zZXQodGVtcCwgYm90dG9tT2Zmc2V0KVxuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEltYWdlRGF0YShkYXRhLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcblx0fVxuXG5cdHRvRGF0YVVSTCgpIHtcblx0XHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuXHRcdGNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGhcblx0XHRjYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHRcblx0XHRjdHgucHV0SW1hZ2VEYXRhKHRoaXMudG9JbWFnZURhdGEoKSwgMCwgMClcblx0XHRyZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgpXG5cdH1cblxuXHRkcmF3KGFjdGlvbjogKCkgPT4gdm9pZCkge1xuXHRcdHRoaXMuYmluZCgpXG5cdFx0YWN0aW9uKClcblx0XHR0aGlzLnVuYmluZCgpXG5cdH1cblxuXHRiaW5kKCkge1xuXHRcdHRoaXMuY3R4LnB1c2hGcmFtZWJ1ZmZlcih0aGlzLmdsRnJhbWVidWZmZXIpXG5cdFx0dGhpcy5jdHgucHVzaFJlbmRlcmJ1ZmZlcih0aGlzLmdsUmVuZGVyYnVmZmVyKVxuXHRcdHRoaXMuY3R4LnB1c2hWaWV3cG9ydCh7IHg6IDAsIHk6IDAsIHc6IHRoaXMud2lkdGgsIGg6IHRoaXMuaGVpZ2h0IH0pXG5cdH1cblxuXHR1bmJpbmQoKSB7XG5cdFx0dGhpcy5jdHgucG9wRnJhbWVidWZmZXIoKVxuXHRcdHRoaXMuY3R4LnBvcFJlbmRlcmJ1ZmZlcigpXG5cdFx0dGhpcy5jdHgucG9wVmlld3BvcnQoKVxuXHR9XG5cblx0ZnJlZSgpIHtcblx0XHRjb25zdCBnbCA9IHRoaXMuY3R4LmdsXG5cdFx0Z2wuZGVsZXRlRnJhbWVidWZmZXIodGhpcy5nbEZyYW1lYnVmZmVyKVxuXHRcdGdsLmRlbGV0ZVJlbmRlcmJ1ZmZlcih0aGlzLmdsUmVuZGVyYnVmZmVyKVxuXHRcdHRoaXMudGV4LmZyZWUoKVxuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNoYWRlciB7XG5cblx0Y3R4OiBHZnhDdHhcblx0Z2xQcm9ncmFtOiBXZWJHTFByb2dyYW1cblxuXHRjb25zdHJ1Y3RvcihjdHg6IEdmeEN0eCwgdmVydDogc3RyaW5nLCBmcmFnOiBzdHJpbmcsIGF0dHJpYnM6IHN0cmluZ1tdKSB7XG5cblx0XHR0aGlzLmN0eCA9IGN0eFxuXHRcdGN0eC5vbkRlc3Ryb3koKCkgPT4gdGhpcy5mcmVlKCkpXG5cblx0XHRjb25zdCBnbCA9IGN0eC5nbFxuXHRcdGNvbnN0IHZlcnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUilcblx0XHRjb25zdCBmcmFnU2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUilcblxuXHRcdGdsLnNoYWRlclNvdXJjZSh2ZXJ0U2hhZGVyLCB2ZXJ0KVxuXHRcdGdsLnNoYWRlclNvdXJjZShmcmFnU2hhZGVyLCBmcmFnKVxuXHRcdGdsLmNvbXBpbGVTaGFkZXIodmVydFNoYWRlcilcblx0XHRnbC5jb21waWxlU2hhZGVyKGZyYWdTaGFkZXIpXG5cblx0XHRjb25zdCBwcm9nID0gZ2wuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5nbFByb2dyYW0gPSBwcm9nXG5cblx0XHRnbC5hdHRhY2hTaGFkZXIocHJvZywgdmVydFNoYWRlcilcblx0XHRnbC5hdHRhY2hTaGFkZXIocHJvZywgZnJhZ1NoYWRlcilcblxuXHRcdGF0dHJpYnMuZm9yRWFjaCgoYXR0cmliLCBpKSA9PiBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZywgaSwgYXR0cmliKSlcblxuXHRcdGdsLmxpbmtQcm9ncmFtKHByb2cpXG5cblx0XHRpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZywgZ2wuTElOS19TVEFUVVMpKSB7XG5cdFx0XHRjb25zdCB2ZXJ0RXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHZlcnRTaGFkZXIpXG5cdFx0XHRpZiAodmVydEVycm9yKSB0aHJvdyBuZXcgRXJyb3IoXCJWRVJURVggU0hBREVSIFwiICsgdmVydEVycm9yKVxuXHRcdFx0Y29uc3QgZnJhZ0Vycm9yID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhmcmFnU2hhZGVyKVxuXHRcdFx0aWYgKGZyYWdFcnJvcikgdGhyb3cgbmV3IEVycm9yKFwiRlJBR01FTlQgU0hBREVSIFwiICsgZnJhZ0Vycm9yKVxuXHRcdH1cblxuXHRcdGdsLmRlbGV0ZVNoYWRlcih2ZXJ0U2hhZGVyKVxuXHRcdGdsLmRlbGV0ZVNoYWRlcihmcmFnU2hhZGVyKVxuXG5cdH1cblxuXHRiaW5kKCkge1xuXHRcdHRoaXMuY3R4LnB1c2hQcm9ncmFtKHRoaXMuZ2xQcm9ncmFtKVxuXHR9XG5cblx0dW5iaW5kKCkge1xuXHRcdHRoaXMuY3R4LnBvcFByb2dyYW0oKVxuXHR9XG5cblx0c2VuZCh1bmlmb3JtOiBVbmlmb3JtKSB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmN0eC5nbFxuXHRcdGZvciAoY29uc3QgbmFtZSBpbiB1bmlmb3JtKSB7XG5cdFx0XHRjb25zdCB2YWwgPSB1bmlmb3JtW25hbWVdXG5cdFx0XHRjb25zdCBsb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5nbFByb2dyYW0sIG5hbWUpXG5cdFx0XHRpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRnbC51bmlmb3JtMWYobG9jLCB2YWwpXG5cdFx0XHR9IGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIE1hdDQpIHtcblx0XHRcdFx0Z2wudW5pZm9ybU1hdHJpeDRmdihsb2MsIGZhbHNlLCBuZXcgRmxvYXQzMkFycmF5KHZhbC5tKSlcblx0XHRcdH0gZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgQ29sb3IpIHtcblx0XHRcdFx0Z2wudW5pZm9ybTNmKGxvYywgdmFsLnIsIHZhbC5nLCB2YWwuYilcblx0XHRcdH0gZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVmVjMikge1xuXHRcdFx0XHRnbC51bmlmb3JtMmYobG9jLCB2YWwueCwgdmFsLnkpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnJlZSgpIHtcblx0XHR0aGlzLmN0eC5nbC5kZWxldGVQcm9ncmFtKHRoaXMuZ2xQcm9ncmFtKVxuXHR9XG5cbn1cblxuZXhwb3J0IHR5cGUgVmVydGV4Rm9ybWF0ID0ge1xuXHRuYW1lOiBzdHJpbmcsXG5cdHNpemU6IG51bWJlcixcbn1bXVxuXG5leHBvcnQgY2xhc3MgQmF0Y2hSZW5kZXJlciB7XG5cblx0Y3R4OiBHZnhDdHhcblxuXHRnbFZCdWY6IFdlYkdMQnVmZmVyXG5cdGdsSUJ1ZjogV2ViR0xCdWZmZXJcblx0dnF1ZXVlOiBudW1iZXJbXSA9IFtdXG5cdGlxdWV1ZTogbnVtYmVyW10gPSBbXVxuXHRzdHJpZGU6IG51bWJlclxuXHRtYXhWZXJ0aWNlczogbnVtYmVyXG5cdG1heEluZGljZXM6IG51bWJlclxuXG5cdHZlcnRleEZvcm1hdDogVmVydGV4Rm9ybWF0XG5cdG51bURyYXdzOiBudW1iZXIgPSAwXG5cblx0Y3VyUHJpbWl0aXZlOiBHTGVudW0gfCBudWxsID0gbnVsbFxuXHRjdXJUZXg6IFRleHR1cmUgfCBudWxsID0gbnVsbFxuXHRjdXJTaGFkZXI6IFNoYWRlciB8IG51bGwgPSBudWxsXG5cdGN1clVuaWZvcm06IFVuaWZvcm0gPSB7fVxuXG5cdGNvbnN0cnVjdG9yKGN0eDogR2Z4Q3R4LCBmb3JtYXQ6IFZlcnRleEZvcm1hdCwgbWF4VmVydGljZXM6IG51bWJlciwgbWF4SW5kaWNlczogbnVtYmVyKSB7XG5cblx0XHRjb25zdCBnbCA9IGN0eC5nbFxuXG5cdFx0dGhpcy52ZXJ0ZXhGb3JtYXQgPSBmb3JtYXRcblx0XHR0aGlzLmN0eCA9IGN0eFxuXHRcdHRoaXMuc3RyaWRlID0gZm9ybWF0LnJlZHVjZSgoc3VtLCBmKSA9PiBzdW0gKyBmLnNpemUsIDApXG5cdFx0dGhpcy5tYXhWZXJ0aWNlcyA9IG1heFZlcnRpY2VzXG5cdFx0dGhpcy5tYXhJbmRpY2VzID0gbWF4SW5kaWNlc1xuXG5cdFx0dGhpcy5nbFZCdWYgPSBnbC5jcmVhdGVCdWZmZXIoKVxuXHRcdGN0eC5wdXNoQXJyYXlCdWZmZXIodGhpcy5nbFZCdWYpXG5cdFx0Z2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG1heFZlcnRpY2VzICogNCwgZ2wuRFlOQU1JQ19EUkFXKVxuXHRcdGN0eC5wb3BBcnJheUJ1ZmZlcigpXG5cblx0XHR0aGlzLmdsSUJ1ZiA9IGdsLmNyZWF0ZUJ1ZmZlcigpXG5cdFx0Y3R4LnB1c2hFbGVtZW50QXJyYXlCdWZmZXIodGhpcy5nbElCdWYpXG5cdFx0Z2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbWF4SW5kaWNlcyAqIDQsIGdsLkRZTkFNSUNfRFJBVylcblx0XHRjdHgucG9wRWxlbWVudEFycmF5QnVmZmVyKClcblxuXHR9XG5cblx0cHVzaChcblx0XHRwcmltaXRpdmU6IEdMZW51bSxcblx0XHR2ZXJ0czogbnVtYmVyW10sXG5cdFx0aW5kaWNlczogbnVtYmVyW10sXG5cdFx0c2hhZGVyOiBTaGFkZXIsXG5cdFx0dGV4OiBUZXh0dXJlIHwgbnVsbCA9IG51bGwsXG5cdFx0dW5pZm9ybTogVW5pZm9ybSA9IHt9LFxuXHQpIHtcblx0XHRpZiAoXG5cdFx0XHRwcmltaXRpdmUgIT09IHRoaXMuY3VyUHJpbWl0aXZlXG5cdFx0XHR8fCB0ZXggIT09IHRoaXMuY3VyVGV4XG5cdFx0XHR8fCBzaGFkZXIgIT09IHRoaXMuY3VyU2hhZGVyXG5cdFx0XHR8fCAhZGVlcEVxKHRoaXMuY3VyVW5pZm9ybSwgdW5pZm9ybSlcblx0XHRcdHx8IHRoaXMudnF1ZXVlLmxlbmd0aCArIHZlcnRzLmxlbmd0aCAqIHRoaXMuc3RyaWRlID4gdGhpcy5tYXhWZXJ0aWNlc1xuXHRcdFx0fHwgdGhpcy5pcXVldWUubGVuZ3RoICsgaW5kaWNlcy5sZW5ndGggPiB0aGlzLm1heEluZGljZXNcblx0XHQpIHtcblx0XHRcdHRoaXMuZmx1c2goKVxuXHRcdH1cblx0XHRjb25zdCBpbmRleE9mZnNldCA9IHRoaXMudnF1ZXVlLmxlbmd0aCAvIHRoaXMuc3RyaWRlXG5cdFx0Zm9yIChjb25zdCB2IG9mIHZlcnRzKSB7XG5cdFx0XHR0aGlzLnZxdWV1ZS5wdXNoKHYpXG5cdFx0fVxuXHRcdGZvciAoY29uc3QgaSBvZiBpbmRpY2VzKSB7XG5cdFx0XHR0aGlzLmlxdWV1ZS5wdXNoKGkgKyBpbmRleE9mZnNldClcblx0XHR9XG5cdFx0dGhpcy5jdXJQcmltaXRpdmUgPSBwcmltaXRpdmVcblx0XHR0aGlzLmN1clNoYWRlciA9IHNoYWRlclxuXHRcdHRoaXMuY3VyVGV4ID0gdGV4XG5cdFx0dGhpcy5jdXJVbmlmb3JtID0gdW5pZm9ybVxuXHR9XG5cblx0Zmx1c2goKSB7XG5cblx0XHRpZiAoXG5cdFx0XHQhdGhpcy5jdXJQcmltaXRpdmVcblx0XHRcdHx8ICF0aGlzLmN1clNoYWRlclxuXHRcdFx0fHwgdGhpcy52cXVldWUubGVuZ3RoID09PSAwXG5cdFx0XHR8fCB0aGlzLmlxdWV1ZS5sZW5ndGggPT09IDBcblx0XHQpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IGdsID0gdGhpcy5jdHguZ2xcblxuXHRcdHRoaXMuY3R4LnB1c2hBcnJheUJ1ZmZlcih0aGlzLmdsVkJ1Zilcblx0XHRnbC5idWZmZXJTdWJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgMCwgbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZxdWV1ZSkpXG5cdFx0dGhpcy5jdHgucHVzaEVsZW1lbnRBcnJheUJ1ZmZlcih0aGlzLmdsSUJ1Zilcblx0XHRnbC5idWZmZXJTdWJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCAwLCBuZXcgVWludDE2QXJyYXkodGhpcy5pcXVldWUpKVxuXHRcdHRoaXMuY3R4LnNldFZlcnRleEZvcm1hdCh0aGlzLnZlcnRleEZvcm1hdClcblx0XHR0aGlzLmN1clNoYWRlci5iaW5kKClcblx0XHR0aGlzLmN1clNoYWRlci5zZW5kKHRoaXMuY3VyVW5pZm9ybSlcblx0XHR0aGlzLmN1clRleD8uYmluZCgpXG5cdFx0Z2wuZHJhd0VsZW1lbnRzKHRoaXMuY3VyUHJpbWl0aXZlLCB0aGlzLmlxdWV1ZS5sZW5ndGgsIGdsLlVOU0lHTkVEX1NIT1JULCAwKVxuXHRcdHRoaXMuY3VyVGV4Py51bmJpbmQoKVxuXHRcdHRoaXMuY3VyU2hhZGVyLnVuYmluZCgpXG5cblx0XHR0aGlzLmN0eC5wb3BBcnJheUJ1ZmZlcigpXG5cdFx0dGhpcy5jdHgucG9wRWxlbWVudEFycmF5QnVmZmVyKClcblxuXHRcdHRoaXMudnF1ZXVlID0gW11cblx0XHR0aGlzLmlxdWV1ZSA9IFtdXG5cdFx0dGhpcy5udW1EcmF3cysrXG5cblx0fVxuXG5cdGZyZWUoKSB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmN0eC5nbFxuXHRcdGdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmdsVkJ1Zilcblx0XHRnbC5kZWxldGVCdWZmZXIodGhpcy5nbElCdWYpXG5cdH1cblxufVxuXG5leHBvcnQgY2xhc3MgTWVzaCB7XG5cblx0Y3R4OiBHZnhDdHhcblx0Z2xWQnVmOiBXZWJHTEJ1ZmZlclxuXHRnbElCdWY6IFdlYkdMQnVmZmVyXG5cdHZlcnRleEZvcm1hdDogVmVydGV4Rm9ybWF0XG5cdGNvdW50OiBudW1iZXJcblxuXHRjb25zdHJ1Y3RvcihjdHg6IEdmeEN0eCwgZm9ybWF0OiBWZXJ0ZXhGb3JtYXQsIHZlcnRzOiBudW1iZXJbXSwgaW5kaWNlczogbnVtYmVyW10pIHtcblxuXHRcdGNvbnN0IGdsID0gY3R4LmdsXG5cblx0XHR0aGlzLnZlcnRleEZvcm1hdCA9IGZvcm1hdFxuXHRcdHRoaXMuY3R4ID0gY3R4XG5cblx0XHR0aGlzLmdsVkJ1ZiA9IGdsLmNyZWF0ZUJ1ZmZlcigpXG5cdFx0Y3R4LnB1c2hBcnJheUJ1ZmZlcih0aGlzLmdsVkJ1Zilcblx0XHRnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0cyksIGdsLlNUQVRJQ19EUkFXKVxuXHRcdGN0eC5wb3BBcnJheUJ1ZmZlcigpXG5cblx0XHR0aGlzLmdsSUJ1ZiA9IGdsLmNyZWF0ZUJ1ZmZlcigpXG5cdFx0Y3R4LnB1c2hFbGVtZW50QXJyYXlCdWZmZXIodGhpcy5nbElCdWYpXG5cdFx0Z2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IFVpbnQxNkFycmF5KGluZGljZXMpLCBnbC5TVEFUSUNfRFJBVylcblx0XHRjdHgucG9wRWxlbWVudEFycmF5QnVmZmVyKClcblxuXHRcdHRoaXMuY291bnQgPSBpbmRpY2VzLmxlbmd0aFxuXG5cdH1cblxuXHRkcmF3KHByaW1pdGl2ZT86IEdMZW51bSkge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5jdHguZ2xcblx0XHR0aGlzLmN0eC5wdXNoQXJyYXlCdWZmZXIodGhpcy5nbFZCdWYpXG5cdFx0dGhpcy5jdHgucHVzaEVsZW1lbnRBcnJheUJ1ZmZlcih0aGlzLmdsSUJ1Zilcblx0XHR0aGlzLmN0eC5zZXRWZXJ0ZXhGb3JtYXQodGhpcy52ZXJ0ZXhGb3JtYXQpXG5cdFx0Z2wuZHJhd0VsZW1lbnRzKHByaW1pdGl2ZSA/PyBnbC5UUklBTkdMRVMsIHRoaXMuY291bnQsIGdsLlVOU0lHTkVEX1NIT1JULCAwKVxuXHRcdHRoaXMuY3R4LnBvcEFycmF5QnVmZmVyKClcblx0XHR0aGlzLmN0eC5wb3BFbGVtZW50QXJyYXlCdWZmZXIoKVxuXHR9XG5cblx0ZnJlZSgpIHtcblx0XHRjb25zdCBnbCA9IHRoaXMuY3R4LmdsXG5cdFx0Z2wuZGVsZXRlQnVmZmVyKHRoaXMuZ2xWQnVmKVxuXHRcdGdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmdsSUJ1Zilcblx0fVxuXG5cbn1cblxuZnVuY3Rpb24gZ2VuU3RhY2s8VD4oc2V0RnVuYzogKGl0ZW06IFQpID0+IHZvaWQpIHtcblx0Y29uc3Qgc3RhY2s6IFRbXSA9IFtdXG5cdGNvbnN0IHB1c2ggPSAoaXRlbTogVCkgPT4ge1xuXHRcdHN0YWNrLnB1c2goaXRlbSlcblx0XHRzZXRGdW5jKGl0ZW0pXG5cdH1cblx0Y29uc3QgcG9wID0gKCkgPT4ge1xuXHRcdHN0YWNrLnBvcCgpXG5cdFx0c2V0RnVuYyhjdXIoKSA/PyBudWxsKVxuXHR9XG5cdGNvbnN0IGN1ciA9ICgpID0+IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXG5cdHJldHVybiBbcHVzaCwgcG9wLCBjdXJdIGFzIGNvbnN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRHZngoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgb3B0czoge1xuXHR0ZXhGaWx0ZXI/OiBUZXhGaWx0ZXIsXG59ID0ge30pIHtcblxuXHRjb25zdCBnYzogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXVxuXG5cdGZ1bmN0aW9uIG9uRGVzdHJveShhY3Rpb24pIHtcblx0XHRnYy5wdXNoKGFjdGlvbilcblx0fVxuXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Z2MuZm9yRWFjaCgoYWN0aW9uKSA9PiBhY3Rpb24oKSlcblx0XHRnbC5nZXRFeHRlbnNpb24oXCJXRUJHTF9sb3NlX2NvbnRleHRcIikubG9zZUNvbnRleHQoKVxuXHR9XG5cblx0bGV0IGN1clZlcnRleEZvcm1hdCA9IG51bGxcblxuXHRmdW5jdGlvbiBzZXRWZXJ0ZXhGb3JtYXQoZm10OiBWZXJ0ZXhGb3JtYXQpIHtcblx0XHRpZiAoZGVlcEVxKGZtdCwgY3VyVmVydGV4Rm9ybWF0KSkgcmV0dXJuXG5cdFx0Y3VyVmVydGV4Rm9ybWF0ID0gZm10XG5cdFx0Y29uc3Qgc3RyaWRlID0gZm10LnJlZHVjZSgoc3VtLCBmKSA9PiBzdW0gKyBmLnNpemUsIDApXG5cdFx0Zm10LnJlZHVjZSgob2Zmc2V0LCBmLCBpKSA9PiB7XG5cdFx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGksIGYuc2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCBzdHJpZGUgKiA0LCBvZmZzZXQpXG5cdFx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShpKVxuXHRcdFx0cmV0dXJuIG9mZnNldCArIGYuc2l6ZSAqIDRcblx0XHR9LCAwKVxuXHR9XG5cblx0Y29uc3QgWyBwdXNoVGV4dHVyZTJELCBwb3BUZXh0dXJlMkQgXSA9XG5cdFx0Z2VuU3RhY2s8V2ViR0xUZXh0dXJlPigodCkgPT4gZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdCkpXG5cblx0Y29uc3QgWyBwdXNoQXJyYXlCdWZmZXIsIHBvcEFycmF5QnVmZmVyIF0gPVxuXHRcdGdlblN0YWNrPFdlYkdMQnVmZmVyPigoYikgPT4gZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGIpKVxuXG5cdGNvbnN0IFsgcHVzaEVsZW1lbnRBcnJheUJ1ZmZlciwgcG9wRWxlbWVudEFycmF5QnVmZmVyIF0gPVxuXHRcdGdlblN0YWNrPFdlYkdMQnVmZmVyPigoYikgPT4gZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgYikpXG5cblx0Y29uc3QgWyBwdXNoRnJhbWVidWZmZXIsIHBvcEZyYW1lYnVmZmVyIF0gPVxuXHRcdGdlblN0YWNrPFdlYkdMRnJhbWVidWZmZXI+KChiKSA9PiBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIGIpKVxuXG5cdGNvbnN0IFsgcHVzaFJlbmRlcmJ1ZmZlciwgcG9wUmVuZGVyYnVmZmVyIF0gPVxuXHRcdGdlblN0YWNrPFdlYkdMUmVuZGVyYnVmZmVyPigoYikgPT4gZ2wuYmluZFJlbmRlcmJ1ZmZlcihnbC5SRU5ERVJCVUZGRVIsIGIpKVxuXG5cdGNvbnN0IFsgcHVzaFZpZXdwb3J0LCBwb3BWaWV3cG9ydCBdID1cblx0XHRnZW5TdGFjazx7IHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciB9PigoeyB4LCB5LCB3LCBoIH0pID0+IHtcblx0XHRcdGdsLnZpZXdwb3J0KHgsIHksIHcsIGgpXG5cdFx0fSlcblxuXHRjb25zdCBbIHB1c2hQcm9ncmFtLCBwb3BQcm9ncmFtIF0gPSBnZW5TdGFjazxXZWJHTFByb2dyYW0+KChwKSA9PiBnbC51c2VQcm9ncmFtKHApKVxuXG5cdHB1c2hWaWV3cG9ydCh7IHg6IDAsIHk6IDAsIHc6IGdsLmRyYXdpbmdCdWZmZXJXaWR0aCwgaDogZ2wuZHJhd2luZ0J1ZmZlckhlaWdodCB9KVxuXG5cdHJldHVybiB7XG5cdFx0Z2wsXG5cdFx0b3B0cyxcblx0XHRvbkRlc3Ryb3ksXG5cdFx0ZGVzdHJveSxcblx0XHRwdXNoVGV4dHVyZTJELFxuXHRcdHBvcFRleHR1cmUyRCxcblx0XHRwdXNoQXJyYXlCdWZmZXIsXG5cdFx0cG9wQXJyYXlCdWZmZXIsXG5cdFx0cHVzaEVsZW1lbnRBcnJheUJ1ZmZlcixcblx0XHRwb3BFbGVtZW50QXJyYXlCdWZmZXIsXG5cdFx0cHVzaEZyYW1lYnVmZmVyLFxuXHRcdHBvcEZyYW1lYnVmZmVyLFxuXHRcdHB1c2hSZW5kZXJidWZmZXIsXG5cdFx0cG9wUmVuZGVyYnVmZmVyLFxuXHRcdHB1c2hWaWV3cG9ydCxcblx0XHRwb3BWaWV3cG9ydCxcblx0XHRwdXNoUHJvZ3JhbSxcblx0XHRwb3BQcm9ncmFtLFxuXHRcdHNldFZlcnRleEZvcm1hdCxcblx0fVxuXG59XG4iLCAiaW1wb3J0IHtcblx0RXZlbnQsXG59IGZyb20gXCIuL3V0aWxzXCJcblxuZXhwb3J0IGNsYXNzIEFzc2V0PEQ+IHtcblx0bG9hZGVkOiBib29sZWFuID0gZmFsc2Vcblx0ZGF0YTogRCB8IG51bGwgPSBudWxsXG5cdGVycm9yOiBFcnJvciB8IG51bGwgPSBudWxsXG5cdHByaXZhdGUgb25Mb2FkRXZlbnRzOiBFdmVudDxbRF0+ID0gbmV3IEV2ZW50KClcblx0cHJpdmF0ZSBvbkVycm9yRXZlbnRzOiBFdmVudDxbRXJyb3JdPiA9IG5ldyBFdmVudCgpXG5cdHByaXZhdGUgb25GaW5pc2hFdmVudHM6IEV2ZW50PFtdPiA9IG5ldyBFdmVudCgpXG5cdGNvbnN0cnVjdG9yKGxvYWRlcjogUHJvbWlzZTxEPikge1xuXHRcdGxvYWRlci50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHR0aGlzLmRhdGEgPSBkYXRhXG5cdFx0XHR0aGlzLm9uTG9hZEV2ZW50cy50cmlnZ2VyKGRhdGEpXG5cdFx0fSkuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0dGhpcy5lcnJvciA9IGVyclxuXHRcdFx0aWYgKHRoaXMub25FcnJvckV2ZW50cy5udW1MaXN0ZW5lcnMoKSA+IDApIHtcblx0XHRcdFx0dGhpcy5vbkVycm9yRXZlbnRzLnRyaWdnZXIoZXJyKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgZXJyXG5cdFx0XHR9XG5cdFx0fSkuZmluYWxseSgoKSA9PiB7XG5cdFx0XHR0aGlzLm9uRmluaXNoRXZlbnRzLnRyaWdnZXIoKVxuXHRcdFx0dGhpcy5sb2FkZWQgPSB0cnVlXG5cdFx0fSlcblx0fVxuXHRzdGF0aWMgbG9hZGVkPEQ+KGRhdGE6IEQpOiBBc3NldDxEPiB7XG5cdFx0Y29uc3QgYXNzZXQgPSBuZXcgQXNzZXQoUHJvbWlzZS5yZXNvbHZlKGRhdGEpKSBhcyBBc3NldDxEPlxuXHRcdGFzc2V0LmRhdGEgPSBkYXRhXG5cdFx0YXNzZXQubG9hZGVkID0gdHJ1ZVxuXHRcdHJldHVybiBhc3NldFxuXHR9XG5cdG9uTG9hZChhY3Rpb246IChkYXRhOiBEKSA9PiB2b2lkKSB7XG5cdFx0aWYgKHRoaXMubG9hZGVkICYmIHRoaXMuZGF0YSkge1xuXHRcdFx0YWN0aW9uKHRoaXMuZGF0YSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vbkxvYWRFdmVudHMuYWRkKGFjdGlvbilcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXHRvbkVycm9yKGFjdGlvbjogKGVycjogRXJyb3IpID0+IHZvaWQpIHtcblx0XHRpZiAodGhpcy5sb2FkZWQgJiYgdGhpcy5lcnJvcikge1xuXHRcdFx0YWN0aW9uKHRoaXMuZXJyb3IpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub25FcnJvckV2ZW50cy5hZGQoYWN0aW9uKVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpc1xuXHR9XG5cdG9uRmluaXNoKGFjdGlvbjogKCkgPT4gdm9pZCkge1xuXHRcdGlmICh0aGlzLmxvYWRlZCkge1xuXHRcdFx0YWN0aW9uKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vbkZpbmlzaEV2ZW50cy5hZGQoYWN0aW9uKVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpc1xuXHR9XG5cdHRoZW4oYWN0aW9uOiAoZGF0YTogRCkgPT4gdm9pZCk6IEFzc2V0PEQ+IHtcblx0XHRyZXR1cm4gdGhpcy5vbkxvYWQoYWN0aW9uKVxuXHR9XG5cdGNhdGNoKGFjdGlvbjogKGVycjogRXJyb3IpID0+IHZvaWQpOiBBc3NldDxEPiB7XG5cdFx0cmV0dXJuIHRoaXMub25FcnJvcihhY3Rpb24pXG5cdH1cblx0ZmluYWxseShhY3Rpb246ICgpID0+IHZvaWQpOiBBc3NldDxEPiB7XG5cdFx0cmV0dXJuIHRoaXMub25GaW5pc2goYWN0aW9uKVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NldEJ1Y2tldDxEPiB7XG5cdGFzc2V0czogTWFwPHN0cmluZywgQXNzZXQ8RD4+ID0gbmV3IE1hcCgpXG5cdGxhc3RVSUQ6IG51bWJlciA9IDBcblx0YWRkKG5hbWU6IHN0cmluZyB8IG51bGwsIGxvYWRlcjogUHJvbWlzZTxEPik6IEFzc2V0PEQ+IHtcblx0XHQvLyBpZiB1c2VyIGRvbid0IHByb3ZpZGUgYSBuYW1lIHdlIHVzZSBhIGdlbmVyYXRlZCBvbmVcblx0XHRjb25zdCBpZCA9IG5hbWUgPz8gKHRoaXMubGFzdFVJRCsrICsgXCJcIilcblx0XHRjb25zdCBhc3NldCA9IG5ldyBBc3NldChsb2FkZXIpXG5cdFx0dGhpcy5hc3NldHMuc2V0KGlkLCBhc3NldClcblx0XHRyZXR1cm4gYXNzZXRcblx0fVxuXHRhZGRMb2FkZWQobmFtZTogc3RyaW5nIHwgbnVsbCwgZGF0YTogRCk6IEFzc2V0PEQ+IHtcblx0XHRjb25zdCBpZCA9IG5hbWUgPz8gKHRoaXMubGFzdFVJRCsrICsgXCJcIilcblx0XHRjb25zdCBhc3NldCA9IEFzc2V0LmxvYWRlZChkYXRhKVxuXHRcdHRoaXMuYXNzZXRzLnNldChpZCwgYXNzZXQpXG5cdFx0cmV0dXJuIGFzc2V0XG5cdH1cblx0Z2V0KGhhbmRsZTogc3RyaW5nKTogQXNzZXQ8RD4gfCB2b2lkIHtcblx0XHRyZXR1cm4gdGhpcy5hc3NldHMuZ2V0KGhhbmRsZSlcblx0fVxuXHRwcm9ncmVzcygpOiBudW1iZXIge1xuXHRcdGlmICh0aGlzLmFzc2V0cy5zaXplID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gMVxuXHRcdH1cblx0XHRsZXQgbG9hZGVkID0gMFxuXHRcdHRoaXMuYXNzZXRzLmZvckVhY2goKGFzc2V0KSA9PiB7XG5cdFx0XHRpZiAoYXNzZXQubG9hZGVkKSB7XG5cdFx0XHRcdGxvYWRlZCsrXG5cdFx0XHR9XG5cdFx0fSlcblx0XHRyZXR1cm4gbG9hZGVkIC8gdGhpcy5hc3NldHMuc2l6ZVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVSTCh1cmw6IHN0cmluZykge1xuXHRyZXR1cm4gZmV0Y2godXJsKVxuXHRcdC50aGVuKChyZXMpID0+IHtcblx0XHRcdGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBcIiR7dXJsfVwiYClcblx0XHRcdHJldHVybiByZXNcblx0XHR9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hKU09OKHBhdGg6IHN0cmluZykge1xuXHRyZXR1cm4gZmV0Y2hVUkwocGF0aCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hUZXh0KHBhdGg6IHN0cmluZykge1xuXHRyZXR1cm4gZmV0Y2hVUkwocGF0aCkudGhlbigocmVzKSA9PiByZXMudGV4dCgpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hBcnJheUJ1ZmZlcihwYXRoOiBzdHJpbmcpIHtcblx0cmV0dXJuIGZldGNoVVJMKHBhdGgpLnRoZW4oKHJlcykgPT4gcmVzLmFycmF5QnVmZmVyKCkpXG59XG5cbi8vIHdyYXBwZXIgYXJvdW5kIGltYWdlIGxvYWRlciB0byBnZXQgYSBQcm9taXNlXG5leHBvcnQgZnVuY3Rpb24gbG9hZEltZyhzcmM6IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xuXHRjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuXHRpbWcuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiXG5cdGltZy5zcmMgPSBzcmNcblx0cmV0dXJuIG5ldyBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWcpXG5cdFx0aW1nLm9uZXJyb3IgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBpbWFnZSBmcm9tIFwiJHtzcmN9XCJgKSlcblx0fSlcbn1cbiIsICIvLyBodHRwczovL2Vhc2luZ3MubmV0L1xuY29uc3QgYzEgPSAxLjcwMTU4XG5jb25zdCBjMiA9IGMxICogMS41MjVcbmNvbnN0IGMzID0gYzEgKyAxXG5jb25zdCBjNCA9ICgyICogTWF0aC5QSSkgLyAzXG5jb25zdCBjNSA9ICgyICogTWF0aC5QSSkgLyA0LjVcblxuY29uc3QgZWFzaW5ncyA9IHtcblx0bGluZWFyOiAoeCkgPT4geCxcblx0ZWFzZUluU2luZTogKHgpID0+IDEgLSBNYXRoLmNvcygoeCAqIE1hdGguUEkpIC8gMiksXG5cdGVhc2VPdXRTaW5lOiAoeCkgPT4gTWF0aC5zaW4oKHggKiBNYXRoLlBJKSAvIDIpLFxuXHRlYXNlSW5PdXRTaW5lOiAoeCkgPT4gLShNYXRoLmNvcyhNYXRoLlBJICogeCkgLSAxKSAvIDIsXG5cdGVhc2VJblF1YWQ6ICh4KSA9PiB4ICogeCxcblx0ZWFzZU91dFF1YWQ6ICh4KSA9PiAxIC0gKDEgLSB4KSAqICgxIC0geCksXG5cdGVhc2VJbk91dFF1YWQ6ICh4KSA9PiB4IDwgMC41ID8gMiAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDIpIC8gMixcblx0ZWFzZUluQ3ViaWM6ICh4KSA9PiB4ICogeCAqIHgsXG5cdGVhc2VPdXRDdWJpYzogKHgpID0+IDEgLSBNYXRoLnBvdygxIC0geCwgMyksXG5cdGVhc2VJbk91dEN1YmljOiAoeCkgPT4geCA8IDAuNSA/IDQgKiB4ICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgMykgLyAyLFxuXHRlYXNlSW5RdWFydDogKHgpID0+IHggKiB4ICogeCAqIHgsXG5cdGVhc2VPdXRRdWFydDogKHgpID0+IDEgLSBNYXRoLnBvdygxIC0geCwgNCksXG5cdGVhc2VJbk91dFF1YXJ0OiAoeCkgPT4geCA8IDAuNSA/IDggKiB4ICogeCAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDQpIC8gMixcblx0ZWFzZUluUXVpbnQ6ICh4KSA9PiB4ICogeCAqIHggKiB4ICogeCxcblx0ZWFzZU91dFF1aW50OiAoeCkgPT4gMSAtIE1hdGgucG93KDEgLSB4LCA1KSxcblx0ZWFzZUluT3V0UXVpbnQ6ICh4KSA9PiB4IDwgMC41ID8gMTYgKiB4ICogeCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCA1KSAvIDIsXG5cdGVhc2VJbkV4cG86ICh4KSA9PiB4ID09PSAwID8gMCA6IE1hdGgucG93KDIsIDEwICogeCAtIDEwKSxcblx0ZWFzZU91dEV4cG86ICh4KSA9PiB4ID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtMTAgKiB4KSxcblx0ZWFzZUluT3V0RXhwbzogKHgpID0+IHtcblx0XHRyZXR1cm4geCA9PT0gMFxuXHRcdFx0PyAwXG5cdFx0XHQ6IHggPT09IDFcblx0XHRcdFx0PyAxXG5cdFx0XHRcdDogeCA8IDAuNVxuXHRcdFx0XHRcdD8gTWF0aC5wb3coMiwgMjAgKiB4IC0gMTApIC8gMlxuXHRcdFx0XHRcdDogKDIgLSBNYXRoLnBvdygyLCAtMjAgKiB4ICsgMTApKSAvIDJcblx0fSxcblx0ZWFzZUluQ2lyYzogKHgpID0+IDEgLSBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHgsIDIpKSxcblx0ZWFzZU91dENpcmM6ICh4KSA9PiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCAyKSksXG5cdGVhc2VJbk91dENpcmM6ICh4KSA9PiB7XG5cdFx0cmV0dXJuIHggPCAwLjVcblx0XHRcdD8gKDEgLSBNYXRoLnNxcnQoMSAtIE1hdGgucG93KDIgKiB4LCAyKSkpIC8gMlxuXHRcdFx0OiAoTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAyKSkgKyAxKSAvIDJcblx0fSxcblx0ZWFzZUluQmFjazogKHgpID0+IGMzICogeCAqIHggKiB4IC0gYzEgKiB4ICogeCxcblx0ZWFzZU91dEJhY2s6ICh4KSA9PiAxICsgYzMgKiBNYXRoLnBvdyh4IC0gMSwgMykgKyBjMSAqIE1hdGgucG93KHggLSAxLCAyKSxcblx0ZWFzZUluT3V0QmFjazogKHgpID0+IHtcblx0XHRyZXR1cm4geCA8IDAuNVxuXHRcdFx0PyAoTWF0aC5wb3coMiAqIHgsIDIpICogKChjMiArIDEpICogMiAqIHggLSBjMikpIC8gMlxuXHRcdFx0OiAoTWF0aC5wb3coMiAqIHggLSAyLCAyKSAqICgoYzIgKyAxKSAqICh4ICogMiAtIDIpICsgYzIpICsgMikgLyAyXG5cdH0sXG5cdGVhc2VJbkVsYXN0aWM6ICh4KSA9PiB7XG5cdFx0cmV0dXJuIHggPT09IDBcblx0XHRcdD8gMFxuXHRcdFx0OiB4ID09PSAxXG5cdFx0XHRcdD8gMVxuXHRcdFx0XHQ6IC1NYXRoLnBvdygyLCAxMCAqIHggLSAxMCkgKiBNYXRoLnNpbigoeCAqIDEwIC0gMTAuNzUpICogYzQpXG5cdH0sXG5cdGVhc2VPdXRFbGFzdGljOiAoeCkgPT4ge1xuXHRcdHJldHVybiB4ID09PSAwXG5cdFx0XHQ/IDBcblx0XHRcdDogeCA9PT0gMVxuXHRcdFx0XHQ/IDFcblx0XHRcdFx0OiBNYXRoLnBvdygyLCAtMTAgKiB4KSAqIE1hdGguc2luKCh4ICogMTAgLSAwLjc1KSAqIGM0KSArIDFcblx0fSxcblx0ZWFzZUluT3V0RWxhc3RpYzogKHgpID0+IHtcblx0XHRyZXR1cm4geCA9PT0gMFxuXHRcdFx0PyAwXG5cdFx0XHQ6IHggPT09IDFcblx0XHRcdFx0PyAxXG5cdFx0XHRcdDogeCA8IDAuNVxuXHRcdFx0XHRcdD8gLShNYXRoLnBvdygyLCAyMCAqIHggLSAxMCkgKiBNYXRoLnNpbigoMjAgKiB4IC0gMTEuMTI1KSAqIGM1KSkgLyAyXG5cdFx0XHRcdFx0OiAoTWF0aC5wb3coMiwgLTIwICogeCArIDEwKSAqIE1hdGguc2luKCgyMCAqIHggLSAxMS4xMjUpICogYzUpKSAvIDIgKyAxXG5cdH0sXG5cdGVhc2VJbkJvdW5jZTogKHgpID0+IDEgLSBlYXNpbmdzLmVhc2VPdXRCb3VuY2UoMSAtIHgpLFxuXHRlYXNlT3V0Qm91bmNlOiAoeCkgPT4ge1xuXHRcdGNvbnN0IG4xID0gNy41NjI1XG5cdFx0Y29uc3QgZDEgPSAyLjc1XG5cdFx0aWYgKHggPCAxIC8gZDEpIHtcblx0XHRcdHJldHVybiBuMSAqIHggKiB4XG5cdFx0fSBlbHNlIGlmICh4IDwgMiAvIGQxKSB7XG5cdFx0XHRyZXR1cm4gbjEgKiAoeCAtPSAxLjUgLyBkMSkgKiB4ICsgMC43NVxuXHRcdH0gZWxzZSBpZiAoeCA8IDIuNSAvIGQxKSB7XG5cdFx0XHRyZXR1cm4gbjEgKiAoeCAtPSAyLjI1IC8gZDEpICogeCArIDAuOTM3NVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbjEgKiAoeCAtPSAyLjYyNSAvIGQxKSAqIHggKyAwLjk4NDM3NVxuXHRcdH1cblx0fSxcblx0ZWFzZUluT3V0Qm91bmNlOiAoeCkgPT4ge1xuXHRcdHJldHVybiB4IDwgMC41XG5cdFx0XHQ/ICgxIC0gZWFzaW5ncy5lYXNlT3V0Qm91bmNlKDEgLSAyICogeCkpIC8gMlxuXHRcdFx0OiAoMSArIGVhc2luZ3MuZWFzZU91dEJvdW5jZSgyICogeCAtIDEpKSAvIDJcblx0fSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWFzaW5nc1xuIiwgImltcG9ydCB0eXBlIHtcblx0SW1hZ2VTb3VyY2UsXG59IGZyb20gXCIuL3R5cGVzXCJcblxuaW1wb3J0IHtcblx0R2Z4Q3R4LFxuXHRUZXh0dXJlLFxufSBmcm9tIFwiLi9nZnhcIlxuXG5pbXBvcnQge1xuXHRWZWMyLFxuXHRRdWFkLFxufSBmcm9tIFwiLi9tYXRoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4UGFja2VyIHtcblx0cHJpdmF0ZSB0ZXh0dXJlczogVGV4dHVyZVtdID0gW11cblx0cHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG5cdHByaXZhdGUgYzJkOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcblx0cHJpdmF0ZSB4OiBudW1iZXIgPSAwXG5cdHByaXZhdGUgeTogbnVtYmVyID0gMFxuXHRwcml2YXRlIGN1ckhlaWdodDogbnVtYmVyID0gMFxuXHRwcml2YXRlIGdmeDogR2Z4Q3R4XG5cdGNvbnN0cnVjdG9yKGdmeDogR2Z4Q3R4LCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuXHRcdHRoaXMuZ2Z4ID0gZ2Z4XG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXG5cdFx0dGhpcy5jYW52YXMud2lkdGggPSB3XG5cdFx0dGhpcy5jYW52YXMuaGVpZ2h0ID0gaFxuXHRcdHRoaXMudGV4dHVyZXMgPSBbVGV4dHVyZS5mcm9tSW1hZ2UoZ2Z4LCB0aGlzLmNhbnZhcyldXG5cdFx0dGhpcy5jMmQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcblx0fVxuXHRhZGQoaW1nOiBJbWFnZVNvdXJjZSk6IFtUZXh0dXJlLCBRdWFkXSB7XG5cdFx0aWYgKGltZy53aWR0aCA+IHRoaXMuY2FudmFzLndpZHRoIHx8IGltZy5oZWlnaHQgPiB0aGlzLmNhbnZhcy5oZWlnaHQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVGV4dHVyZSBzaXplICgke2ltZy53aWR0aH0geCAke2ltZy5oZWlnaHR9KSBleGNlZWRzIGxpbWl0ICgke3RoaXMuY2FudmFzLndpZHRofSB4ICR7dGhpcy5jYW52YXMuaGVpZ2h0fSlgKVxuXHRcdH1cblx0XHQvLyBuZXh0IHJvd1xuXHRcdGlmICh0aGlzLnggKyBpbWcud2lkdGggPiB0aGlzLmNhbnZhcy53aWR0aCkge1xuXHRcdFx0dGhpcy54ID0gMFxuXHRcdFx0dGhpcy55ICs9IHRoaXMuY3VySGVpZ2h0XG5cdFx0XHR0aGlzLmN1ckhlaWdodCA9IDBcblx0XHR9XG5cdFx0Ly8gbmV4dCB0ZXh0dXJlXG5cdFx0aWYgKHRoaXMueSArIGltZy5oZWlnaHQgPiB0aGlzLmNhbnZhcy5oZWlnaHQpIHtcblx0XHRcdHRoaXMuYzJkLmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuXHRcdFx0dGhpcy50ZXh0dXJlcy5wdXNoKFRleHR1cmUuZnJvbUltYWdlKHRoaXMuZ2Z4LCB0aGlzLmNhbnZhcykpXG5cdFx0XHR0aGlzLnggPSAwXG5cdFx0XHR0aGlzLnkgPSAwXG5cdFx0XHR0aGlzLmN1ckhlaWdodCA9IDBcblx0XHR9XG5cdFx0Y29uc3QgY3VyVGV4ID0gdGhpcy50ZXh0dXJlc1t0aGlzLnRleHR1cmVzLmxlbmd0aCAtIDFdXG5cdFx0Y29uc3QgcG9zID0gbmV3IFZlYzIodGhpcy54LCB0aGlzLnkpXG5cdFx0dGhpcy54ICs9IGltZy53aWR0aFxuXHRcdGlmIChpbWcuaGVpZ2h0ID4gdGhpcy5jdXJIZWlnaHQpIHtcblx0XHRcdHRoaXMuY3VySGVpZ2h0ID0gaW1nLmhlaWdodFxuXHRcdH1cblx0XHRpZiAoaW1nIGluc3RhbmNlb2YgSW1hZ2VEYXRhKSB7XG5cdFx0XHR0aGlzLmMyZC5wdXRJbWFnZURhdGEoaW1nLCBwb3MueCwgcG9zLnkpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYzJkLmRyYXdJbWFnZShpbWcsIHBvcy54LCBwb3MueSlcblx0XHR9XG5cdFx0Y3VyVGV4LnVwZGF0ZSh0aGlzLmNhbnZhcylcblx0XHRyZXR1cm4gW2N1clRleCwgbmV3IFF1YWQoXG5cdFx0XHRwb3MueCAvIHRoaXMuY2FudmFzLndpZHRoLFxuXHRcdFx0cG9zLnkgLyB0aGlzLmNhbnZhcy5oZWlnaHQsXG5cdFx0XHRpbWcud2lkdGggLyB0aGlzLmNhbnZhcy53aWR0aCxcblx0XHRcdGltZy5oZWlnaHQgLyB0aGlzLmNhbnZhcy5oZWlnaHQsXG5cdFx0KV1cblx0fVxuXHRmcmVlKCkge1xuXHRcdGZvciAoY29uc3QgdGV4IG9mIHRoaXMudGV4dHVyZXMpIHtcblx0XHRcdHRleC5mcmVlKClcblx0XHR9XG5cdH1cbn1cbiIsICJjb25zdCBWRVJTSU9OID0gXCIzMDAwLjEuMTdcIlxuXG5pbXBvcnQgaW5pdEFwcCBmcm9tIFwiLi9hcHBcIlxuaW1wb3J0IGluaXRHZngsIHtcblx0VGV4dHVyZSxcblx0RnJhbWVCdWZmZXIsXG5cdFNoYWRlcixcblx0QmF0Y2hSZW5kZXJlcixcbn0gZnJvbSBcIi4vZ2Z4XCJcblxuaW1wb3J0IHtcblx0QXNzZXQsXG5cdEFzc2V0QnVja2V0LFxuXHRmZXRjaEFycmF5QnVmZmVyLFxuXHRmZXRjaEpTT04sXG5cdGZldGNoVGV4dCxcblx0bG9hZEltZyxcbn0gZnJvbSBcIi4vYXNzZXRzXCJcblxuaW1wb3J0IHtcblx0c2F0LFxuXHR2ZWMyLFxuXHRSZWN0LFxuXHRQb2x5Z29uLFxuXHRMaW5lLFxuXHRDaXJjbGUsXG5cdENvbG9yLFxuXHRWZWMyLFxuXHRNYXQ0LFxuXHRRdWFkLFxuXHRSTkcsXG5cdHF1YWQsXG5cdHJnYixcblx0aHNsMnJnYixcblx0cmFuZCxcblx0cmFuZGksXG5cdHJhbmRTZWVkLFxuXHRjaGFuY2UsXG5cdGNob29zZSxcblx0Y2xhbXAsXG5cdGxlcnAsXG5cdG1hcCxcblx0bWFwYyxcblx0d2F2ZSxcblx0dGVzdExpbmVQb2ludCxcblx0dGVzdExpbmVMaW5lLFxuXHR0ZXN0TGluZUNpcmNsZSxcblx0dGVzdFJlY3RSZWN0LFxuXHR0ZXN0UmVjdExpbmUsXG5cdHRlc3RSZWN0UG9pbnQsXG5cdHRlc3RQb2x5Z29uUG9pbnQsXG5cdHRlc3RDaXJjbGVQb2x5Z29uLFxuXHRkZWcycmFkLFxuXHRyYWQyZGVnLFxufSBmcm9tIFwiLi9tYXRoXCJcblxuaW1wb3J0IGVhc2luZ3MgZnJvbSBcIi4vZWFzaW5nc1wiXG5pbXBvcnQgVGV4UGFja2VyIGZyb20gXCIuL3RleFBhY2tlclwiXG5cbmltcG9ydCB7XG5cdFJlZ2lzdHJ5LFxuXHRFdmVudCxcblx0RXZlbnRIYW5kbGVyLFxuXHRkb3dubG9hZCxcblx0ZG93bmxvYWRUZXh0LFxuXHRkb3dubG9hZEpTT04sXG5cdGRvd25sb2FkQmxvYixcblx0dWlkLFxuXHRpc0RhdGFVUkwsXG5cdGdldEZpbGVOYW1lLFxuXHRvdmVybG9hZDIsXG5cdGRhdGFVUkxUb0FycmF5QnVmZmVyLFxuXHRFdmVudENvbnRyb2xsZXIsXG5cdGdldEVycm9yTWVzc2FnZSxcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cdHdhcm4sXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHRiZW5jaG1hcmssXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHRjb21wYXJlUGVyZixcblx0QmluYXJ5SGVhcCxcblx0cnVuZXMsXG59IGZyb20gXCIuL3V0aWxzXCJcblxuaW1wb3J0IHR5cGUge1xuXHRHZnhGb250LFxuXHRSZW5kZXJQcm9wcyxcblx0Q2hhclRyYW5zZm9ybSxcblx0SW1hZ2VTb3VyY2UsXG5cdEZvcm1hdHRlZFRleHQsXG5cdEZvcm1hdHRlZENoYXIsXG5cdERyYXdSZWN0T3B0LFxuXHREcmF3TGluZU9wdCxcblx0RHJhd0xpbmVzT3B0LFxuXHREcmF3VHJpYW5nbGVPcHQsXG5cdERyYXdQb2x5Z29uT3B0LFxuXHREcmF3Q2lyY2xlT3B0LFxuXHREcmF3RWxsaXBzZU9wdCxcblx0RHJhd1VWUXVhZE9wdCxcblx0VmVydGV4LFxuXHRCaXRtYXBGb250RGF0YSxcblx0U2hhZGVyRGF0YSxcblx0QXNlcHJpdGVEYXRhLFxuXHRMb2FkU3ByaXRlU3JjLFxuXHRMb2FkU3ByaXRlT3B0LFxuXHRTcHJpdGVBdGxhc0RhdGEsXG5cdExvYWRCaXRtYXBGb250T3B0LFxuXHRLYWJvb21DdHgsXG5cdEthYm9vbU9wdCxcblx0QXVkaW9QbGF5LFxuXHRBdWRpb1BsYXlPcHQsXG5cdERyYXdTcHJpdGVPcHQsXG5cdERyYXdUZXh0T3B0LFxuXHRUZXh0QWxpZ24sXG5cdEdhbWVPYmosXG5cdFNjZW5lTmFtZSxcblx0U2NlbmVEZWYsXG5cdENvbXBMaXN0LFxuXHRDb21wLFxuXHRUYWcsXG5cdEtleSxcblx0TW91c2VCdXR0b24sXG5cdFBvc0NvbXAsXG5cdFNjYWxlQ29tcCxcblx0Um90YXRlQ29tcCxcblx0Q29sb3JDb21wLFxuXHRPcGFjaXR5Q29tcCxcblx0QW5jaG9yLFxuXHRBbmNob3JDb21wLFxuXHRaQ29tcCxcblx0Rm9sbG93Q29tcCxcblx0T2ZmU2NyZWVuQ29tcE9wdCxcblx0T2ZmU2NyZWVuQ29tcCxcblx0QXJlYUNvbXBPcHQsXG5cdEFyZWFDb21wLFxuXHRTcHJpdGVDb21wLFxuXHRTcHJpdGVDb21wT3B0LFxuXHRTcHJpdGVBbmltUGxheU9wdCxcblx0U3ByaXRlQW5pbXMsXG5cdFRleHRDb21wLFxuXHRUZXh0Q29tcE9wdCxcblx0UmVjdENvbXAsXG5cdFJlY3RDb21wT3B0LFxuXHRVVlF1YWRDb21wLFxuXHRDaXJjbGVDb21wT3B0LFxuXHRDaXJjbGVDb21wLFxuXHRPdXRsaW5lQ29tcCxcblx0VGltZXJDb21wLFxuXHRCb2R5Q29tcCxcblx0Qm9keUNvbXBPcHQsXG5cdFVuaWZvcm0sXG5cdFNoYWRlckNvbXAsXG5cdEZpeGVkQ29tcCxcblx0U3RheUNvbXAsXG5cdEhlYWx0aENvbXAsXG5cdExpZmVzcGFuQ29tcE9wdCxcblx0U3RhdGVDb21wLFxuXHREZWJ1Zyxcblx0S2Fib29tUGx1Z2luLFxuXHRFbXB0eUNvbXAsXG5cdExldmVsQ29tcCxcblx0RWRnZSxcblx0VGlsZUNvbXAsXG5cdFRpbGVDb21wT3B0LFxuXHRMZXZlbE9wdCxcblx0UmVjb3JkaW5nLFxuXHRCb29tT3B0LFxuXHRQZWRpdEZpbGUsXG5cdFNoYXBlLFxuXHREb3VibGVKdW1wQ29tcCxcblx0VGltZXJDb250cm9sbGVyLFxuXHRUd2VlbkNvbnRyb2xsZXIsXG5cdExvYWRGb250T3B0LFxuXHRBZ2VudENvbXAsXG5cdEFnZW50Q29tcE9wdCxcblx0UGF0aEZpbmRPcHQsXG5cdEdldE9wdCxcblx0VmVjMkFyZ3MsXG5cdE5pbmVTbGljZSxcblx0TGVycFZhbHVlLFxuXHRUZXhGaWx0ZXIsXG5cdE1hc2tDb21wLFxuXHRNYXNrLFxuXHRPdXRsaW5lLFxuXHRQb2x5Z29uQ29tcCxcblx0UG9seWdvbkNvbXBPcHQsXG59IGZyb20gXCIuL3R5cGVzXCJcblxuaW1wb3J0IGJlYW5TcHJpdGVTcmMgZnJvbSBcIi4vYXNzZXRzL2JlYW4ucG5nXCJcbmltcG9ydCBidXJwU291bmRTcmMgZnJvbSBcIi4vYXNzZXRzL2J1cnAubXAzXCJcbmltcG9ydCBrYVNwcml0ZVNyYyBmcm9tIFwiLi9hc3NldHMva2EucG5nXCJcbmltcG9ydCBib29tU3ByaXRlU3JjIGZyb20gXCIuL2Fzc2V0cy9ib29tLnBuZ1wiXG5cbmludGVyZmFjZSBTcHJpdGVDdXJBbmltIHtcblx0bmFtZTogc3RyaW5nLFxuXHR0aW1lcjogbnVtYmVyLFxuXHRsb29wOiBib29sZWFuLFxuXHRzcGVlZDogbnVtYmVyLFxuXHRwaW5ncG9uZzogYm9vbGVhbixcblx0b25FbmQ6ICgpID0+IHZvaWQsXG59XG5cbi8vIHNvbWUgZGVmYXVsdCBjaGFyc2V0cyBmb3IgbG9hZGluZyBiaXRtYXAgZm9udHNcbmNvbnN0IEFTQ0lJX0NIQVJTID0gXCIgIVxcXCIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXFxcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9flwiXG5cbmNvbnN0IERFRl9BTkNIT1IgPSBcInRvcGxlZnRcIlxuY29uc3QgQkdfR1JJRF9TSVpFID0gNjRcblxuY29uc3QgREVGX0ZPTlQgPSBcIm1vbm9zcGFjZVwiXG5jb25zdCBEQkdfRk9OVCA9IFwibW9ub3NwYWNlXCJcbmNvbnN0IERFRl9URVhUX1NJWkUgPSAzNlxuY29uc3QgREVGX1RFWFRfQ0FDSEVfU0laRSA9IDY0XG5jb25zdCBNQVhfVEVYVF9DQUNIRV9TSVpFID0gMjU2XG5jb25zdCBGT05UX0FUTEFTX1dJRFRIID0gMjA0OFxuY29uc3QgRk9OVF9BVExBU19IRUlHSFQgPSAyMDQ4XG5jb25zdCBTUFJJVEVfQVRMQVNfV0lEVEggPSAyMDQ4XG5jb25zdCBTUFJJVEVfQVRMQVNfSEVJR0hUID0gMjA0OFxuLy8gMC4xIHBpeGVsIHBhZGRpbmcgdG8gdGV4dHVyZSBjb29yZGluYXRlcyB0byBwcmV2ZW50IGFydGlmYWN0XG5jb25zdCBVVl9QQUQgPSAwLjFcbmNvbnN0IERFRl9IQVNIX0dSSURfU0laRSA9IDY0XG5jb25zdCBERUZfRk9OVF9GSUxURVIgPSBcImxpbmVhclwiXG5cbmNvbnN0IExPR19NQVggPSA4XG5jb25zdCBMT0dfVElNRSA9IDRcblxuY29uc3QgVkVSVEVYX0ZPUk1BVCA9IFtcblx0eyBuYW1lOiBcImFfcG9zXCIsIHNpemU6IDIgfSxcblx0eyBuYW1lOiBcImFfdXZcIiwgc2l6ZTogMiB9LFxuXHR7IG5hbWU6IFwiYV9jb2xvclwiLCBzaXplOiA0IH0sXG5dXG5cbmNvbnN0IFNUUklERSA9IFZFUlRFWF9GT1JNQVQucmVkdWNlKChzdW0sIGYpID0+IHN1bSArIGYuc2l6ZSwgMClcblxuY29uc3QgTUFYX0JBVENIRURfUVVBRCA9IDIwNDhcbmNvbnN0IE1BWF9CQVRDSEVEX1ZFUlRTID0gTUFYX0JBVENIRURfUVVBRCAqIDQgKiBTVFJJREVcbmNvbnN0IE1BWF9CQVRDSEVEX0lORElDRVMgPSBNQVhfQkFUQ0hFRF9RVUFEICogNlxuXG4vLyB2ZXJ0ZXggc2hhZGVyIHRlbXBsYXRlLCByZXBsYWNlIHt7dXNlcn19IHdpdGggdXNlciB2ZXJ0ZXggc2hhZGVyIGNvZGVcbmNvbnN0IFZFUlRfVEVNUExBVEUgPSBgXG5hdHRyaWJ1dGUgdmVjMiBhX3BvcztcbmF0dHJpYnV0ZSB2ZWMyIGFfdXY7XG5hdHRyaWJ1dGUgdmVjNCBhX2NvbG9yO1xuXG52YXJ5aW5nIHZlYzIgdl9wb3M7XG52YXJ5aW5nIHZlYzIgdl91djtcbnZhcnlpbmcgdmVjNCB2X2NvbG9yO1xuXG52ZWM0IGRlZl92ZXJ0KCkge1xuXHRyZXR1cm4gdmVjNChhX3BvcywgMC4wLCAxLjApO1xufVxuXG57e3VzZXJ9fVxuXG52b2lkIG1haW4oKSB7XG5cdHZlYzQgcG9zID0gdmVydChhX3BvcywgYV91diwgYV9jb2xvcik7XG5cdHZfcG9zID0gYV9wb3M7XG5cdHZfdXYgPSBhX3V2O1xuXHR2X2NvbG9yID0gYV9jb2xvcjtcblx0Z2xfUG9zaXRpb24gPSBwb3M7XG59XG5gXG5cbi8vIGZyYWdtZW50IHNoYWRlciB0ZW1wbGF0ZSwgcmVwbGFjZSB7e3VzZXJ9fSB3aXRoIHVzZXIgZnJhZ21lbnQgc2hhZGVyIGNvZGVcbmNvbnN0IEZSQUdfVEVNUExBVEUgPSBgXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcblxudmFyeWluZyB2ZWMyIHZfcG9zO1xudmFyeWluZyB2ZWMyIHZfdXY7XG52YXJ5aW5nIHZlYzQgdl9jb2xvcjtcblxudW5pZm9ybSBzYW1wbGVyMkQgdV90ZXg7XG5cbnZlYzQgZGVmX2ZyYWcoKSB7XG5cdHJldHVybiB2X2NvbG9yICogdGV4dHVyZTJEKHVfdGV4LCB2X3V2KTtcbn1cblxue3t1c2VyfX1cblxudm9pZCBtYWluKCkge1xuXHRnbF9GcmFnQ29sb3IgPSBmcmFnKHZfcG9zLCB2X3V2LCB2X2NvbG9yLCB1X3RleCk7XG5cdGlmIChnbF9GcmFnQ29sb3IuYSA9PSAwLjApIHtcblx0XHRkaXNjYXJkO1xuXHR9XG59XG5gXG5cbi8vIGRlZmF1bHQge3t1c2VyfX0gdmVydGV4IHNoYWRlciBjb2RlXG5jb25zdCBERUZfVkVSVCA9IGBcbnZlYzQgdmVydCh2ZWMyIHBvcywgdmVjMiB1diwgdmVjNCBjb2xvcikge1xuXHRyZXR1cm4gZGVmX3ZlcnQoKTtcbn1cbmBcblxuLy8gZGVmYXVsdCB7e3VzZXJ9fSBmcmFnbWVudCBzaGFkZXIgY29kZVxuY29uc3QgREVGX0ZSQUcgPSBgXG52ZWM0IGZyYWcodmVjMiBwb3MsIHZlYzIgdXYsIHZlYzQgY29sb3IsIHNhbXBsZXIyRCB0ZXgpIHtcblx0cmV0dXJuIGRlZl9mcmFnKCk7XG59XG5gXG5cbmNvbnN0IENPTVBfREVTQyA9IG5ldyBTZXQoW1xuXHRcImlkXCIsXG5cdFwicmVxdWlyZVwiLFxuXSlcblxuY29uc3QgQ09NUF9FVkVOVFMgPSBuZXcgU2V0KFtcblx0XCJhZGRcIixcblx0XCJ1cGRhdGVcIixcblx0XCJkcmF3XCIsXG5cdFwiZGVzdHJveVwiLFxuXHRcImluc3BlY3RcIixcblx0XCJkcmF3SW5zcGVjdFwiLFxuXSlcblxuLy8gY29udmVydCBhbmNob3Igc3RyaW5nIHRvIGEgdmVjMiBvZmZzZXRcbmZ1bmN0aW9uIGFuY2hvclB0KG9yaWc6IEFuY2hvciB8IFZlYzIpOiBWZWMyIHtcblx0c3dpdGNoIChvcmlnKSB7XG5cdFx0Y2FzZSBcInRvcGxlZnRcIjogcmV0dXJuIG5ldyBWZWMyKC0xLCAtMSlcblx0XHRjYXNlIFwidG9wXCI6IHJldHVybiBuZXcgVmVjMigwLCAtMSlcblx0XHRjYXNlIFwidG9wcmlnaHRcIjogcmV0dXJuIG5ldyBWZWMyKDEsIC0xKVxuXHRcdGNhc2UgXCJsZWZ0XCI6IHJldHVybiBuZXcgVmVjMigtMSwgMClcblx0XHRjYXNlIFwiY2VudGVyXCI6IHJldHVybiBuZXcgVmVjMigwLCAwKVxuXHRcdGNhc2UgXCJyaWdodFwiOiByZXR1cm4gbmV3IFZlYzIoMSwgMClcblx0XHRjYXNlIFwiYm90bGVmdFwiOiByZXR1cm4gbmV3IFZlYzIoLTEsIDEpXG5cdFx0Y2FzZSBcImJvdFwiOiByZXR1cm4gbmV3IFZlYzIoMCwgMSlcblx0XHRjYXNlIFwiYm90cmlnaHRcIjogcmV0dXJuIG5ldyBWZWMyKDEsIDEpXG5cdFx0ZGVmYXVsdDogcmV0dXJuIG9yaWdcblx0fVxufVxuXG5mdW5jdGlvbiBhbGlnblB0KGFsaWduOiBUZXh0QWxpZ24pOiBudW1iZXIge1xuXHRzd2l0Y2ggKGFsaWduKSB7XG5cdFx0Y2FzZSBcImxlZnRcIjogcmV0dXJuIDBcblx0XHRjYXNlIFwiY2VudGVyXCI6IHJldHVybiAwLjVcblx0XHRjYXNlIFwicmlnaHRcIjogcmV0dXJuIDFcblx0XHRkZWZhdWx0OiByZXR1cm4gMFxuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5QXVkaW9CdWZmZXIoY3R4OiBBdWRpb0NvbnRleHQpIHtcblx0cmV0dXJuIGN0eC5jcmVhdGVCdWZmZXIoMSwgMSwgNDQxMDApXG59XG5cbi8vIG9ubHkgZXhwb3J0cyBvbmUga2Fib29tKCkgd2hpY2ggY29udGFpbnMgYWxsIHRoZSBzdGF0ZVxuZXhwb3J0IGRlZmF1bHQgKGdvcHQ6IEthYm9vbU9wdCA9IHt9KTogS2Fib29tQ3R4ID0+IHtcblxuXHRjb25zdCByb290ID0gZ29wdC5yb290ID8/IGRvY3VtZW50LmJvZHlcblxuXHQvLyBpZiByb290IGlzIG5vdCBkZWZpbmVkICh3aGljaCBmYWxscyBiYWNrIHRvIDxib2R5Pikgd2UgYXNzdW1lIHVzZXIgaXMgdXNpbmcga2Fib29tIG9uIGEgY2xlYW4gcGFnZSwgYW5kIG1vZGlmeSA8Ym9keT4gdG8gYmV0dGVyIGZpdCBhIGZ1bGwgc2NyZWVuIGNhbnZhc1xuXHRpZiAocm9vdCA9PT0gZG9jdW1lbnQuYm9keSkge1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMTAwJVwiXG5cdFx0ZG9jdW1lbnQuYm9keS5zdHlsZVtcImhlaWdodFwiXSA9IFwiMTAwJVwiXG5cdFx0ZG9jdW1lbnQuYm9keS5zdHlsZVtcIm1hcmdpblwiXSA9IFwiMHB4XCJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGVbXCJ3aWR0aFwiXSA9IFwiMTAwJVwiXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlW1wiaGVpZ2h0XCJdID0gXCIxMDAlXCJcblx0fVxuXG5cdC8vIGNyZWF0ZSBhIDxjYW52YXM+IGlmIHVzZXIgZGlkbid0IHByb3ZpZGUgb25lXG5cdGNvbnN0IGNhbnZhcyA9IGdvcHQuY2FudmFzID8/ICgoKSA9PiB7XG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxuXHRcdHJvb3QuYXBwZW5kQ2hpbGQoY2FudmFzKVxuXHRcdHJldHVybiBjYW52YXNcblx0fSkoKVxuXG5cdC8vIGdsb2JhbCBwaXhlbCBzY2FsZVxuXHRjb25zdCBnc2NhbGUgPSBnb3B0LnNjYWxlID8/IDFcblx0Y29uc3QgZml4ZWRTaXplID0gZ29wdC53aWR0aCAmJiBnb3B0LmhlaWdodCAmJiAhZ29wdC5zdHJldGNoICYmICFnb3B0LmxldHRlcmJveFxuXG5cdC8vIGFkanVzdCBjYW52YXMgc2l6ZSBhY2NvcmRpbmcgdG8gdXNlciBzaXplIC8gdmlld3BvcnQgc2V0dGluZ3Ncblx0aWYgKGZpeGVkU2l6ZSkge1xuXHRcdGNhbnZhcy53aWR0aCA9IGdvcHQud2lkdGggKiBnc2NhbGVcblx0XHRjYW52YXMuaGVpZ2h0ID0gZ29wdC5oZWlnaHQgKiBnc2NhbGVcblx0fSBlbHNlIHtcblx0XHRjYW52YXMud2lkdGggPSBjYW52YXMucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aFxuXHRcdGNhbnZhcy5oZWlnaHQgPSBjYW52YXMucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHRcblx0fVxuXG5cdC8vIGNhbnZhcyBjc3Mgc3R5bGVzXG5cdGNvbnN0IHN0eWxlcyA9IFtcblx0XHRcIm91dGxpbmU6IG5vbmVcIixcblx0XHRcImN1cnNvcjogZGVmYXVsdFwiLFxuXHRdXG5cblx0aWYgKGZpeGVkU2l6ZSkge1xuXHRcdGNvbnN0IGN3ID0gY2FudmFzLndpZHRoXG5cdFx0Y29uc3QgY2ggPSBjYW52YXMuaGVpZ2h0XG5cdFx0c3R5bGVzLnB1c2goYHdpZHRoOiAke2N3fXB4YClcblx0XHRzdHlsZXMucHVzaChgaGVpZ2h0OiAke2NofXB4YClcblx0fSBlbHNlIHtcblx0XHRzdHlsZXMucHVzaChcIndpZHRoOiAxMDAlXCIpXG5cdFx0c3R5bGVzLnB1c2goXCJoZWlnaHQ6IDEwMCVcIilcblx0fVxuXG5cdGlmIChnb3B0LmNyaXNwKSB7XG5cdFx0Ly8gY2hyb21lIG9ubHkgc3VwcG9ydHMgcGl4ZWxhdGVkIGFuZCBmaXJlZm94IG9ubHkgc3VwcG9ydHMgY3Jpc3AtZWRnZXNcblx0XHRzdHlsZXMucHVzaChcImltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkXCIpXG5cdFx0c3R5bGVzLnB1c2goXCJpbWFnZS1yZW5kZXJpbmc6IGNyaXNwLWVkZ2VzXCIpXG5cdH1cblxuXHRjYW52YXMuc3R5bGUuY3NzVGV4dCA9IHN0eWxlcy5qb2luKFwiO1wiKVxuXG5cdGNvbnN0IHBpeGVsRGVuc2l0eSA9IGdvcHQucGl4ZWxEZW5zaXR5IHx8IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvXG5cblx0Y2FudmFzLndpZHRoICo9IHBpeGVsRGVuc2l0eVxuXHRjYW52YXMuaGVpZ2h0ICo9IHBpeGVsRGVuc2l0eVxuXHQvLyBtYWtlIGNhbnZhcyBmb2N1c2FibGVcblx0Y2FudmFzLnRhYkluZGV4ID0gMFxuXG5cdGNvbnN0IGZvbnRDYWNoZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcblx0Zm9udENhY2hlQ2FudmFzLndpZHRoID0gTUFYX1RFWFRfQ0FDSEVfU0laRVxuXHRmb250Q2FjaGVDYW52YXMuaGVpZ2h0ID0gTUFYX1RFWFRfQ0FDSEVfU0laRVxuXHRjb25zdCBmb250Q2FjaGVDMmQgPSBmb250Q2FjaGVDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIsIHtcblx0XHR3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWUsXG5cdH0pXG5cblx0Y29uc3QgYXBwID0gaW5pdEFwcCh7XG5cdFx0Y2FudmFzOiBjYW52YXMsXG5cdFx0dG91Y2hUb01vdXNlOiBnb3B0LnRvdWNoVG9Nb3VzZSxcblx0XHRnYW1lcGFkczogZ29wdC5nYW1lcGFkcyxcblx0XHRwaXhlbERlbnNpdHk6IGdvcHQucGl4ZWxEZW5zaXR5LFxuXHRcdG1heEZQUzogZ29wdC5tYXhGUFMsXG5cdH0pXG5cblx0Y29uc3QgZ2M6IEFycmF5PCgpID0+IHZvaWQ+ID0gW11cblxuXHRjb25zdCBnbCA9IGFwcC5jYW52YXNcblx0XHQuZ2V0Q29udGV4dChcIndlYmdsXCIsIHtcblx0XHRcdGFudGlhbGlhczogdHJ1ZSxcblx0XHRcdGRlcHRoOiB0cnVlLFxuXHRcdFx0c3RlbmNpbDogdHJ1ZSxcblx0XHRcdGFscGhhOiB0cnVlLFxuXHRcdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRcdH0pXG5cblx0Y29uc3QgZ2dsID0gaW5pdEdmeChnbCwge1xuXHRcdHRleEZpbHRlcjogZ29wdC50ZXhGaWx0ZXIsXG5cdH0pXG5cblx0Y29uc3QgZ2Z4ID0gKCgpID0+IHtcblxuXHRcdGNvbnN0IGRlZlNoYWRlciA9IG1ha2VTaGFkZXIoREVGX1ZFUlQsIERFRl9GUkFHKVxuXG5cdFx0Ly8gYSAxeDEgd2hpdGUgdGV4dHVyZSB0byBkcmF3IHJhdyBzaGFwZXMgbGlrZSByZWN0YW5nbGVzIGFuZCBwb2x5Z29uc1xuXHRcdC8vIHdlIHVzZSBhIHRleHR1cmUgZm9yIHRob3NlIHNvIHdlIGNhbiB1c2Ugb25seSAxIHBpcGVsaW5lIGZvciBkcmF3aW5nIHNwcml0ZXMgKyBzaGFwZXNcblx0XHRjb25zdCBlbXB0eVRleCA9IFRleHR1cmUuZnJvbUltYWdlKFxuXHRcdFx0Z2dsLFxuXHRcdFx0bmV3IEltYWdlRGF0YShuZXcgVWludDhDbGFtcGVkQXJyYXkoWyAyNTUsIDI1NSwgMjU1LCAyNTUgXSksIDEsIDEpLFxuXHRcdClcblxuXHRcdGNvbnN0IGZyYW1lQnVmZmVyID0gKGdvcHQud2lkdGggJiYgZ29wdC5oZWlnaHQpXG5cdFx0XHQ/IG5ldyBGcmFtZUJ1ZmZlcihnZ2wsIGdvcHQud2lkdGggKiBwaXhlbERlbnNpdHkgKiBnc2NhbGUsIGdvcHQuaGVpZ2h0ICogcGl4ZWxEZW5zaXR5ICogZ3NjYWxlKVxuXHRcdFx0OiBuZXcgRnJhbWVCdWZmZXIoZ2dsLCBnbC5kcmF3aW5nQnVmZmVyV2lkdGgsIGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQpXG5cblx0XHRsZXQgYmdDb2xvcjogbnVsbCB8IENvbG9yID0gbnVsbFxuXHRcdGxldCBiZ0FscGhhID0gMVxuXG5cdFx0aWYgKGdvcHQuYmFja2dyb3VuZCkge1xuXHRcdFx0YmdDb2xvciA9IHJnYihnb3B0LmJhY2tncm91bmQpXG5cdFx0XHRiZ0FscGhhID0gQXJyYXkuaXNBcnJheShnb3B0LmJhY2tncm91bmQpID8gZ29wdC5iYWNrZ3JvdW5kWzNdIDogMVxuXHRcdFx0Z2wuY2xlYXJDb2xvcihcblx0XHRcdFx0YmdDb2xvci5yIC8gMjU1LFxuXHRcdFx0XHRiZ0NvbG9yLmcgLyAyNTUsXG5cdFx0XHRcdGJnQ29sb3IuYiAvIDI1NSxcblx0XHRcdFx0YmdBbHBoYSA/PyAxLFxuXHRcdFx0KVxuXHRcdH1cblxuXHRcdGdsLmVuYWJsZShnbC5CTEVORClcblx0XHRnbC5ibGVuZEZ1bmNTZXBhcmF0ZShcblx0XHRcdGdsLlNSQ19BTFBIQSxcblx0XHRcdGdsLk9ORV9NSU5VU19TUkNfQUxQSEEsXG5cdFx0XHRnbC5PTkUsXG5cdFx0XHRnbC5PTkVfTUlOVVNfU1JDX0FMUEhBLFxuXHRcdClcblxuXHRcdGNvbnN0IHJlbmRlcmVyID0gbmV3IEJhdGNoUmVuZGVyZXIoZ2dsLCBWRVJURVhfRk9STUFULCBNQVhfQkFUQ0hFRF9WRVJUUywgTUFYX0JBVENIRURfSU5ESUNFUylcblxuXHRcdC8vIGEgY2hlY2tlcmJvYXJkIHRleHR1cmUgdXNlZCBmb3IgdGhlIGRlZmF1bHQgYmFja2dyb3VuZFxuXHRcdGNvbnN0IGJnVGV4ID0gVGV4dHVyZS5mcm9tSW1hZ2UoXG5cdFx0XHRnZ2wsXG5cdFx0XHRuZXcgSW1hZ2VEYXRhKG5ldyBVaW50OENsYW1wZWRBcnJheShbXG5cdFx0XHRcdDEyOCwgMTI4LCAxMjgsIDI1NSxcblx0XHRcdFx0MTkwLCAxOTAsIDE5MCwgMjU1LFxuXHRcdFx0XHQxOTAsIDE5MCwgMTkwLCAyNTUsXG5cdFx0XHRcdDEyOCwgMTI4LCAxMjgsIDI1NSxcblx0XHRcdF0pLCAyLCAyKSwge1xuXHRcdFx0XHR3cmFwOiBcInJlcGVhdFwiLFxuXHRcdFx0XHRmaWx0ZXI6IFwibmVhcmVzdFwiLFxuXHRcdFx0fSxcblx0XHQpXG5cblx0XHRyZXR1cm4ge1xuXG5cdFx0XHQvLyBob3cgbWFueSBkcmF3IGNhbGxzIHdlJ3JlIGRvaW5nIGxhc3QgZnJhbWUsIHRoaXMgaXMgdGhlIG51bWJlciB3ZSBnaXZlIHRvIHVzZXJzXG5cdFx0XHRsYXN0RHJhd0NhbGxzOiAwLFxuXG5cdFx0XHQvLyBnZnggc3RhdGVzXG5cdFx0XHRkZWZTaGFkZXI6IGRlZlNoYWRlcixcblx0XHRcdGRlZlRleDogZW1wdHlUZXgsXG5cdFx0XHRmcmFtZUJ1ZmZlcjogZnJhbWVCdWZmZXIsXG5cdFx0XHRwb3N0U2hhZGVyOiBudWxsLFxuXHRcdFx0cG9zdFNoYWRlclVuaWZvcm06IG51bGwsXG5cdFx0XHRyZW5kZXJlcjogcmVuZGVyZXIsXG5cblx0XHRcdHRyYW5zZm9ybTogbmV3IE1hdDQoKSxcblx0XHRcdHRyYW5zZm9ybVN0YWNrOiBbXSxcblxuXHRcdFx0YmdUZXg6IGJnVGV4LFxuXHRcdFx0YmdDb2xvcjogYmdDb2xvcixcblx0XHRcdGJnQWxwaGE6IGJnQWxwaGEsXG5cblx0XHRcdHdpZHRoOiBnb3B0LndpZHRoID8/IGdsLmRyYXdpbmdCdWZmZXJXaWR0aCAvIHBpeGVsRGVuc2l0eSAvIGdzY2FsZSxcblx0XHRcdGhlaWdodDogZ29wdC5oZWlnaHQgPz8gZ2wuZHJhd2luZ0J1ZmZlckhlaWdodCAvIHBpeGVsRGVuc2l0eSAvIGdzY2FsZSxcblxuXHRcdFx0dmlld3BvcnQ6IHtcblx0XHRcdFx0eDogMCxcblx0XHRcdFx0eTogMCxcblx0XHRcdFx0d2lkdGg6IGdsLmRyYXdpbmdCdWZmZXJXaWR0aCxcblx0XHRcdFx0aGVpZ2h0OiBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0LFxuXHRcdFx0fSxcblxuXHRcdFx0Zml4ZWQ6IGZhbHNlLFxuXG5cdFx0fVxuXG5cdH0pKClcblxuXHRjbGFzcyBTcHJpdGVEYXRhIHtcblxuXHRcdHRleDogVGV4dHVyZVxuXHRcdGZyYW1lczogUXVhZFtdID0gWyBuZXcgUXVhZCgwLCAwLCAxLCAxKSBdXG5cdFx0YW5pbXM6IFNwcml0ZUFuaW1zID0ge31cblx0XHRzbGljZTk6IE5pbmVTbGljZSB8IG51bGwgPSBudWxsXG5cblx0XHRjb25zdHJ1Y3Rvcihcblx0XHRcdHRleDogVGV4dHVyZSxcblx0XHRcdGZyYW1lcz86IFF1YWRbXSxcblx0XHRcdGFuaW1zOiBTcHJpdGVBbmltcyA9IHt9LFxuXHRcdFx0c2xpY2U5OiBOaW5lU2xpY2UgPSBudWxsLFxuXHRcdCkge1xuXHRcdFx0dGhpcy50ZXggPSB0ZXhcblx0XHRcdGlmIChmcmFtZXMpIHRoaXMuZnJhbWVzID0gZnJhbWVzXG5cdFx0XHR0aGlzLmFuaW1zID0gYW5pbXNcblx0XHRcdHRoaXMuc2xpY2U5ID0gc2xpY2U5XG5cdFx0fVxuXG5cdFx0Z2V0IHdpZHRoKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGV4LndpZHRoICogdGhpcy5mcmFtZXNbMF0ud1xuXHRcdH1cblxuXHRcdGdldCBoZWlnaHQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50ZXguaGVpZ2h0ICogdGhpcy5mcmFtZXNbMF0uaFxuXHRcdH1cblxuXHRcdHN0YXRpYyBmcm9tKHNyYzogTG9hZFNwcml0ZVNyYywgb3B0OiBMb2FkU3ByaXRlT3B0ID0ge30pOiBQcm9taXNlPFNwcml0ZURhdGE+IHtcblx0XHRcdHJldHVybiB0eXBlb2Ygc3JjID09PSBcInN0cmluZ1wiXG5cdFx0XHRcdD8gU3ByaXRlRGF0YS5mcm9tVVJMKHNyYywgb3B0KVxuXHRcdFx0XHQ6IFByb21pc2UucmVzb2x2ZShTcHJpdGVEYXRhLmZyb21JbWFnZShzcmMsIG9wdCkpXG5cdFx0fVxuXG5cdFx0c3RhdGljIGZyb21JbWFnZShkYXRhOiBJbWFnZVNvdXJjZSwgb3B0OiBMb2FkU3ByaXRlT3B0ID0ge30pOiBTcHJpdGVEYXRhIHtcblx0XHRcdGNvbnN0IFt0ZXgsIHF1YWRdID0gYXNzZXRzLnBhY2tlci5hZGQoZGF0YSlcblx0XHRcdGNvbnN0IGZyYW1lcyA9IG9wdC5mcmFtZXMgPyBvcHQuZnJhbWVzLm1hcCgoZikgPT4gbmV3IFF1YWQoXG5cdFx0XHRcdHF1YWQueCArIGYueCAqIHF1YWQudyxcblx0XHRcdFx0cXVhZC55ICsgZi55ICogcXVhZC5oLFxuXHRcdFx0XHRmLncgKiBxdWFkLncsXG5cdFx0XHRcdGYuaCAqIHF1YWQuaCxcblx0XHRcdCkpIDogc2xpY2Uob3B0LnNsaWNlWCB8fCAxLCBvcHQuc2xpY2VZIHx8IDEsIHF1YWQueCwgcXVhZC55LCBxdWFkLncsIHF1YWQuaClcblx0XHRcdHJldHVybiBuZXcgU3ByaXRlRGF0YSh0ZXgsIGZyYW1lcywgb3B0LmFuaW1zLCBvcHQuc2xpY2U5KVxuXHRcdH1cblxuXHRcdHN0YXRpYyBmcm9tVVJMKHVybDogc3RyaW5nLCBvcHQ6IExvYWRTcHJpdGVPcHQgPSB7fSk6IFByb21pc2U8U3ByaXRlRGF0YT4ge1xuXHRcdFx0cmV0dXJuIGxvYWRJbWcodXJsKS50aGVuKChpbWcpID0+IFNwcml0ZURhdGEuZnJvbUltYWdlKGltZywgb3B0KSlcblx0XHR9XG5cblx0fVxuXG5cdGNsYXNzIFNvdW5kRGF0YSB7XG5cblx0XHRidWY6IEF1ZGlvQnVmZmVyXG5cblx0XHRjb25zdHJ1Y3RvcihidWY6IEF1ZGlvQnVmZmVyKSB7XG5cdFx0XHR0aGlzLmJ1ZiA9IGJ1ZlxuXHRcdH1cblxuXHRcdHN0YXRpYyBmcm9tQXJyYXlCdWZmZXIoYnVmOiBBcnJheUJ1ZmZlcik6IFByb21pc2U8U291bmREYXRhPiB7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cblx0XHRcdFx0YXVkaW8uY3R4LmRlY29kZUF1ZGlvRGF0YShidWYsIHJlc29sdmUsIHJlamVjdCksXG5cdFx0XHQpLnRoZW4oKGJ1ZjogQXVkaW9CdWZmZXIpID0+IG5ldyBTb3VuZERhdGEoYnVmKSlcblx0XHR9XG5cblx0XHRzdGF0aWMgZnJvbVVSTCh1cmw6IHN0cmluZyk6IFByb21pc2U8U291bmREYXRhPiB7XG5cdFx0XHRpZiAoaXNEYXRhVVJMKHVybCkpIHtcblx0XHRcdFx0cmV0dXJuIFNvdW5kRGF0YS5mcm9tQXJyYXlCdWZmZXIoZGF0YVVSTFRvQXJyYXlCdWZmZXIodXJsKSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmZXRjaEFycmF5QnVmZmVyKHVybCkudGhlbigoYnVmKSA9PiBTb3VuZERhdGEuZnJvbUFycmF5QnVmZmVyKGJ1ZikpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRjb25zdCBhdWRpbyA9ICgoKSA9PiB7XG5cblx0XHRjb25zdCBjdHggPSBuZXcgKFxuXHRcdFx0d2luZG93LkF1ZGlvQ29udGV4dCB8fCAod2luZG93IGFzIGFueSkud2Via2l0QXVkaW9Db250ZXh0XG5cdFx0KSgpIGFzIEF1ZGlvQ29udGV4dFxuXG5cdFx0Y29uc3QgbWFzdGVyTm9kZSA9IGN0eC5jcmVhdGVHYWluKClcblx0XHRtYXN0ZXJOb2RlLmNvbm5lY3QoY3R4LmRlc3RpbmF0aW9uKVxuXG5cdFx0Ly8gYnkgZGVmYXVsdCBicm93c2VycyBjYW4gb25seSBsb2FkIGF1ZGlvIGFzeW5jLCB3ZSBkb24ndCBkZWFsIHdpdGggdGhhdCBhbmQganVzdCBzdGFydCB3aXRoIGFuIGVtcHR5IGF1ZGlvIGJ1ZmZlclxuXHRcdGNvbnN0IGJ1cnBTbmQgPSBuZXcgU291bmREYXRhKGNyZWF0ZUVtcHR5QXVkaW9CdWZmZXIoY3R4KSlcblxuXHRcdC8vIGxvYWQgdGhhdCBidXJwIHNvdW5kXG5cdFx0Y3R4LmRlY29kZUF1ZGlvRGF0YShidXJwU291bmRTcmMuYnVmZmVyLnNsaWNlKDApKS50aGVuKChidWYpID0+IHtcblx0XHRcdGJ1cnBTbmQuYnVmID0gYnVmXG5cdFx0fSkuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGJ1cnA6IFwiLCBlcnIpXG5cdFx0fSlcblxuXHRcdHJldHVybiB7XG5cdFx0XHRjdHgsXG5cdFx0XHRtYXN0ZXJOb2RlLFxuXHRcdFx0YnVycFNuZCxcblx0XHR9XG5cblx0fSkoKVxuXG5cdGNvbnN0IGFzc2V0cyA9IHtcblx0XHR1cmxQcmVmaXg6IFwiXCIsXG5cdFx0Ly8gYXNzZXQgaG9sZGVyc1xuXHRcdHNwcml0ZXM6IG5ldyBBc3NldEJ1Y2tldDxTcHJpdGVEYXRhPigpLFxuXHRcdGZvbnRzOiBuZXcgQXNzZXRCdWNrZXQ8Rm9udERhdGE+KCksXG5cdFx0Yml0bWFwRm9udHM6IG5ldyBBc3NldEJ1Y2tldDxCaXRtYXBGb250RGF0YT4oKSxcblx0XHRzb3VuZHM6IG5ldyBBc3NldEJ1Y2tldDxTb3VuZERhdGE+KCksXG5cdFx0c2hhZGVyczogbmV3IEFzc2V0QnVja2V0PFNoYWRlckRhdGE+KCksXG5cdFx0Y3VzdG9tOiBuZXcgQXNzZXRCdWNrZXQ8YW55PigpLFxuXHRcdHBhY2tlcjogbmV3IFRleFBhY2tlcihnZ2wsIFNQUklURV9BVExBU19XSURUSCwgU1BSSVRFX0FUTEFTX0hFSUdIVCksXG5cdFx0Ly8gaWYgd2UgZmluaXNoZWQgaW5pdGlhbGx5IGxvYWRpbmcgYWxsIGFzc2V0c1xuXHRcdGxvYWRlZDogZmFsc2UsXG5cdH1cblxuXHRmdW5jdGlvbiBmaXhVUkw8RD4odXJsOiBEKTogRCB7XG5cdFx0aWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIgfHwgaXNEYXRhVVJMKHVybCkpIHJldHVybiB1cmxcblx0XHRyZXR1cm4gYXNzZXRzLnVybFByZWZpeCArIHVybCBhcyBEXG5cdH1cblxuXHRjb25zdCBnYW1lID0ge1xuXG5cdFx0Ly8gZ2VuZXJhbCBldmVudHNcblx0XHRldmVudHM6IG5ldyBFdmVudEhhbmRsZXI8e1xuXHRcdFx0bW91c2VNb3ZlOiBbXSxcblx0XHRcdG1vdXNlRG93bjogW01vdXNlQnV0dG9uXSxcblx0XHRcdG1vdXNlUHJlc3M6IFtNb3VzZUJ1dHRvbl0sXG5cdFx0XHRtb3VzZVJlbGVhc2U6IFtNb3VzZUJ1dHRvbl0sXG5cdFx0XHRjaGFySW5wdXQ6IFtzdHJpbmddLFxuXHRcdFx0a2V5UHJlc3M6IFtLZXldLFxuXHRcdFx0a2V5RG93bjogW0tleV0sXG5cdFx0XHRrZXlQcmVzc1JlcGVhdDogW0tleV0sXG5cdFx0XHRrZXlSZWxlYXNlOiBbS2V5XSxcblx0XHRcdHRvdWNoU3RhcnQ6IFtWZWMyLCBUb3VjaF0sXG5cdFx0XHR0b3VjaE1vdmU6IFtWZWMyLCBUb3VjaF0sXG5cdFx0XHR0b3VjaEVuZDogW1ZlYzIsIFRvdWNoXSxcblx0XHRcdGdhbWVwYWRCdXR0b25Eb3duOiBbc3RyaW5nXSxcblx0XHRcdGdhbWVwYWRCdXR0b25QcmVzczogW3N0cmluZ10sXG5cdFx0XHRnYW1lcGFkQnV0dG9uUmVsZWFzZTogW3N0cmluZ10sXG5cdFx0XHRnYW1lcGFkU3RpY2s6IFtzdHJpbmcsIFZlYzJdLFxuXHRcdFx0Z2FtZXBhZENvbm5lY3Q6IFtHYW1lcGFkXSxcblx0XHRcdGdhbWVwYWREaXNjb25uZWN0OiBbR2FtZXBhZF0sXG5cdFx0XHRzY3JvbGw6IFtWZWMyXSxcblx0XHRcdGFkZDogW0dhbWVPYmpdLFxuXHRcdFx0ZGVzdHJveTogW0dhbWVPYmpdLFxuXHRcdFx0bG9hZDogW10sXG5cdFx0XHRsb2FkaW5nOiBbbnVtYmVyXSxcblx0XHRcdGVycm9yOiBbRXJyb3JdLFxuXHRcdFx0aW5wdXQ6IFtdLFxuXHRcdFx0ZnJhbWVFbmQ6IFtdLFxuXHRcdFx0cmVzaXplOiBbXSxcblx0XHRcdHNjZW5lTGVhdmU6IFtzdHJpbmddLFxuXHRcdH0+KCksXG5cblx0XHQvLyBvYmplY3QgZXZlbnRzXG5cdFx0b2JqRXZlbnRzOiBuZXcgRXZlbnRIYW5kbGVyKCksXG5cblx0XHQvLyByb290IGdhbWUgb2JqZWN0XG5cdFx0cm9vdDogbWFrZShbXSksXG5cblx0XHQvLyBtaXNjXG5cdFx0Z3Jhdml0eTogMCxcblx0XHRzY2VuZXM6IHt9LFxuXG5cdFx0Ly8gb24gc2NyZWVuIGxvZ1xuXHRcdGxvZ3M6IFtdLFxuXG5cdFx0Ly8gY2FtZXJhXG5cdFx0Y2FtOiB7XG5cdFx0XHRwb3M6IG51bGwsXG5cdFx0XHRzY2FsZTogbmV3IFZlYzIoMSksXG5cdFx0XHRhbmdsZTogMCxcblx0XHRcdHNoYWtlOiAwLFxuXHRcdFx0dHJhbnNmb3JtOiBuZXcgTWF0NCgpLFxuXHRcdH0sXG5cblx0fVxuXG5cdGdhbWUucm9vdC51c2UodGltZXIoKSlcblxuXHQvLyB3cmFwIGluZGl2aWR1YWwgbG9hZGVycyB3aXRoIGdsb2JhbCBsb2FkZXIgY291bnRlciwgZm9yIHN0dWZmIGxpa2UgcHJvZ3Jlc3MgYmFyXG5cdGZ1bmN0aW9uIGxvYWQ8VD4ocHJvbTogUHJvbWlzZTxUPik6IEFzc2V0PFQ+IHtcblx0XHRyZXR1cm4gYXNzZXRzLmN1c3RvbS5hZGQobnVsbCwgcHJvbSlcblx0fVxuXG5cdC8vIGdldCBjdXJyZW50IGxvYWQgcHJvZ3Jlc3Ncblx0ZnVuY3Rpb24gbG9hZFByb2dyZXNzKCk6IG51bWJlciB7XG5cdFx0Y29uc3QgYnVja2V0cyA9IFtcblx0XHRcdGFzc2V0cy5zcHJpdGVzLFxuXHRcdFx0YXNzZXRzLnNvdW5kcyxcblx0XHRcdGFzc2V0cy5zaGFkZXJzLFxuXHRcdFx0YXNzZXRzLmZvbnRzLFxuXHRcdFx0YXNzZXRzLmJpdG1hcEZvbnRzLFxuXHRcdFx0YXNzZXRzLmN1c3RvbSxcblx0XHRdXG5cdFx0cmV0dXJuIGJ1Y2tldHMucmVkdWNlKChuLCBidWNrZXQpID0+IG4gKyBidWNrZXQucHJvZ3Jlc3MoKSwgMCkgLyBidWNrZXRzLmxlbmd0aFxuXHR9XG5cblx0Ly8gZ2xvYmFsIGxvYWQgcGF0aCBwcmVmaXhcblx0ZnVuY3Rpb24gbG9hZFJvb3QocGF0aD86IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0aWYgKHBhdGggIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0YXNzZXRzLnVybFByZWZpeCA9IHBhdGhcblx0XHR9XG5cdFx0cmV0dXJuIGFzc2V0cy51cmxQcmVmaXhcblx0fVxuXG5cdGZ1bmN0aW9uIGxvYWRKU09OKG5hbWUsIHVybCkge1xuXHRcdHJldHVybiBhc3NldHMuY3VzdG9tLmFkZChuYW1lLCBmZXRjaEpTT04odXJsKSlcblx0fVxuXG5cdGNsYXNzIEZvbnREYXRhIHtcblx0XHRmb250ZmFjZTogRm9udEZhY2Vcblx0XHRmaWx0ZXI6IFRleEZpbHRlciA9IERFRl9GT05UX0ZJTFRFUlxuXHRcdG91dGxpbmU6IE91dGxpbmUgfCBudWxsID0gbnVsbFxuXHRcdHNpemU6IG51bWJlciA9IERFRl9URVhUX0NBQ0hFX1NJWkVcblx0XHRjb25zdHJ1Y3RvcihmYWNlOiBGb250RmFjZSwgb3B0OiBMb2FkRm9udE9wdCA9IHt9KSB7XG5cdFx0XHR0aGlzLmZvbnRmYWNlID0gZmFjZVxuXHRcdFx0dGhpcy5maWx0ZXIgPSBvcHQuZmlsdGVyID8/IERFRl9GT05UX0ZJTFRFUlxuXHRcdFx0dGhpcy5zaXplID0gb3B0LnNpemUgPz8gREVGX1RFWFRfQ0FDSEVfU0laRVxuXHRcdFx0aWYgKHRoaXMuc2l6ZSA+IE1BWF9URVhUX0NBQ0hFX1NJWkUpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNYXggZm9udCBzaXplOiAke01BWF9URVhUX0NBQ0hFX1NJWkV9YClcblx0XHRcdH1cblx0XHRcdGlmIChvcHQub3V0bGluZSkge1xuXHRcdFx0XHR0aGlzLm91dGxpbmUgPSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEsXG5cdFx0XHRcdFx0Y29sb3I6IHJnYigwLCAwLCAwKSxcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHlwZW9mIG9wdC5vdXRsaW5lID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdFx0dGhpcy5vdXRsaW5lLndpZHRoID0gb3B0Lm91dGxpbmVcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0Lm91dGxpbmUgPT09IFwib2JqZWN0XCIpIHtcblx0XHRcdFx0XHRpZiAob3B0Lm91dGxpbmUud2lkdGgpIHRoaXMub3V0bGluZS53aWR0aCA9IG9wdC5vdXRsaW5lLndpZHRoXG5cdFx0XHRcdFx0aWYgKG9wdC5vdXRsaW5lLmNvbG9yKSB0aGlzLm91dGxpbmUuY29sb3IgPSBvcHQub3V0bGluZS5jb2xvclxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gVE9ETzogcGFzcyBpbiBudWxsIHNyYyB0byBzdG9yZSBvcHQgZm9yIGRlZmF1bHQgZm9udHMgbGlrZSBcIm1vbm9zcGFjZVwiXG5cdGZ1bmN0aW9uIGxvYWRGb250KFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRzcmM6IHN0cmluZyB8IEJpbmFyeURhdGEsXG5cdFx0b3B0OiBMb2FkRm9udE9wdCA9IHt9LFxuXHQpOiBBc3NldDxGb250RGF0YT4ge1xuXHRcdGNvbnN0IGZvbnQgPSBuZXcgRm9udEZhY2UobmFtZSwgdHlwZW9mIHNyYyA9PT0gXCJzdHJpbmdcIiA/IGB1cmwoJHtzcmN9KWAgOiBzcmMpXG5cdFx0ZG9jdW1lbnQuZm9udHMuYWRkKGZvbnQpXG5cdFx0cmV0dXJuIGFzc2V0cy5mb250cy5hZGQobmFtZSwgZm9udC5sb2FkKCkuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBmb250IGZyb20gXCIke3NyY31cIjogJHtlcnJ9YClcblx0XHR9KS50aGVuKChmYWNlKSA9PiBuZXcgRm9udERhdGEoZmFjZSwgb3B0KSkpXG5cdH1cblxuXHQvLyBUT0RPOiBzdXBwb3J0IG91dGxpbmVcblx0Ly8gVE9ETzogc3VwcG9ydCBMb2FkU3ByaXRlU3JjXG5cdGZ1bmN0aW9uIGxvYWRCaXRtYXBGb250KFxuXHRcdG5hbWU6IHN0cmluZyB8IG51bGwsXG5cdFx0c3JjOiBzdHJpbmcsXG5cdFx0Z3c6IG51bWJlcixcblx0XHRnaDogbnVtYmVyLFxuXHRcdG9wdDogTG9hZEJpdG1hcEZvbnRPcHQgPSB7fSxcblx0KTogQXNzZXQ8Qml0bWFwRm9udERhdGE+IHtcblx0XHRyZXR1cm4gYXNzZXRzLmJpdG1hcEZvbnRzLmFkZChuYW1lLCBsb2FkSW1nKHNyYylcblx0XHRcdC50aGVuKChpbWcpID0+IHtcblx0XHRcdFx0cmV0dXJuIG1ha2VGb250KFxuXHRcdFx0XHRcdFRleHR1cmUuZnJvbUltYWdlKGdnbCwgaW1nLCBvcHQpLFxuXHRcdFx0XHRcdGd3LFxuXHRcdFx0XHRcdGdoLFxuXHRcdFx0XHRcdG9wdC5jaGFycyA/PyBBU0NJSV9DSEFSUyxcblx0XHRcdFx0KVxuXHRcdFx0fSksXG5cdFx0KVxuXHR9XG5cblx0Ly8gZ2V0IGFuIGFycmF5IG9mIGZyYW1lcyBiYXNlZCBvbiBjb25maWd1cmF0aW9uIG9uIGhvdyB0byBzbGljZSB0aGUgaW1hZ2Vcblx0ZnVuY3Rpb24gc2xpY2UoeCA9IDEsIHkgPSAxLCBkeCA9IDAsIGR5ID0gMCwgdyA9IDEsIGggPSAxKTogUXVhZFtdIHtcblx0XHRjb25zdCBmcmFtZXMgPSBbXVxuXHRcdGNvbnN0IHF3ID0gdyAvIHhcblx0XHRjb25zdCBxaCA9IGggLyB5XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB5OyBqKyspIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgeDsgaSsrKSB7XG5cdFx0XHRcdGZyYW1lcy5wdXNoKG5ldyBRdWFkKFxuXHRcdFx0XHRcdGR4ICsgaSAqIHF3LFxuXHRcdFx0XHRcdGR5ICsgaiAqIHFoLFxuXHRcdFx0XHRcdHF3LFxuXHRcdFx0XHRcdHFoLFxuXHRcdFx0XHQpKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZnJhbWVzXG5cdH1cblxuXHQvLyBUT0RPOiBsb2FkIHN5bmNocm9ub3VzbHkgaWYgcGFzc2VkIEltYWdlU291cmNlXG5cdGZ1bmN0aW9uIGxvYWRTcHJpdGVBdGxhcyhcblx0XHRzcmM6IExvYWRTcHJpdGVTcmMsXG5cdFx0ZGF0YTogU3ByaXRlQXRsYXNEYXRhIHwgc3RyaW5nLFxuXHQpOiBBc3NldDxSZWNvcmQ8c3RyaW5nLCBTcHJpdGVEYXRhPj4ge1xuXHRcdHNyYyA9IGZpeFVSTChzcmMpXG5cdFx0aWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRyZXR1cm4gbG9hZChuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcblx0XHRcdFx0ZmV0Y2hKU09OKGRhdGEpLnRoZW4oKGpzb24pID0+IHtcblx0XHRcdFx0XHRsb2FkU3ByaXRlQXRsYXMoc3JjLCBqc29uKS50aGVuKHJlcykuY2F0Y2gocmVqKVxuXHRcdFx0XHR9KVxuXHRcdFx0fSkpXG5cdFx0fVxuXHRcdHJldHVybiBsb2FkKFNwcml0ZURhdGEuZnJvbShzcmMpLnRoZW4oKGF0bGFzKSA9PiB7XG5cdFx0XHRjb25zdCBtYXAgPSB7fVxuXHRcdFx0Zm9yIChjb25zdCBuYW1lIGluIGRhdGEpIHtcblx0XHRcdFx0Y29uc3QgaW5mbyA9IGRhdGFbbmFtZV1cblx0XHRcdFx0Y29uc3QgcXVhZCA9IGF0bGFzLmZyYW1lc1swXVxuXHRcdFx0XHRjb25zdCB3ID0gU1BSSVRFX0FUTEFTX1dJRFRIICogcXVhZC53XG5cdFx0XHRcdGNvbnN0IGggPSBTUFJJVEVfQVRMQVNfSEVJR0hUICogcXVhZC5oXG5cdFx0XHRcdGNvbnN0IGZyYW1lcyA9IGluZm8uZnJhbWVzID8gaW5mby5mcmFtZXMubWFwKChmKSA9PiBuZXcgUXVhZChcblx0XHRcdFx0XHRxdWFkLnggKyAoaW5mby54ICsgZi54KSAvIHcgKiBxdWFkLncsXG5cdFx0XHRcdFx0cXVhZC55ICsgKGluZm8ueSArIGYueSkgLyBoICogcXVhZC5oLFxuXHRcdFx0XHRcdGYudyAvIHcgKiBxdWFkLncsXG5cdFx0XHRcdFx0Zi5oIC8gaCAqIHF1YWQuaCxcblx0XHRcdFx0KSkgOiBzbGljZShcblx0XHRcdFx0XHRpbmZvLnNsaWNlWCB8fCAxLFxuXHRcdFx0XHRcdGluZm8uc2xpY2VZIHx8IDEsXG5cdFx0XHRcdFx0cXVhZC54ICsgaW5mby54IC8gdyAqIHF1YWQudyxcblx0XHRcdFx0XHRxdWFkLnkgKyBpbmZvLnkgLyBoICogcXVhZC5oLFxuXHRcdFx0XHRcdGluZm8ud2lkdGggLyB3ICogcXVhZC53LFxuXHRcdFx0XHRcdGluZm8uaGVpZ2h0IC8gaCAqIHF1YWQuaCxcblx0XHRcdFx0KVxuXHRcdFx0XHRjb25zdCBzcHIgPSBuZXcgU3ByaXRlRGF0YShhdGxhcy50ZXgsIGZyYW1lcywgaW5mby5hbmltcylcblx0XHRcdFx0YXNzZXRzLnNwcml0ZXMuYWRkTG9hZGVkKG5hbWUsIHNwcilcblx0XHRcdFx0bWFwW25hbWVdID0gc3ByXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWFwXG5cdFx0fSkpXG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVTcHJpdGVTaGVldChcblx0XHRpbWFnZXM6IEltYWdlU291cmNlW10sXG5cdFx0b3B0OiBMb2FkU3ByaXRlT3B0ID0ge30sXG5cdCk6IFNwcml0ZURhdGEge1xuXHRcdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcblx0XHRjb25zdCB3aWR0aCA9IGltYWdlc1swXS53aWR0aFxuXHRcdGNvbnN0IGhlaWdodCA9IGltYWdlc1swXS5oZWlnaHRcblx0XHRjYW52YXMud2lkdGggPSB3aWR0aCAqIGltYWdlcy5sZW5ndGhcblx0XHRjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XG5cdFx0Y29uc3QgYzJkID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuXHRcdGltYWdlcy5mb3JFYWNoKChpbWcsIGkpID0+IHtcblx0XHRcdGlmIChpbWcgaW5zdGFuY2VvZiBJbWFnZURhdGEpIHtcblx0XHRcdFx0YzJkLnB1dEltYWdlRGF0YShpbWcsIGkgKiB3aWR0aCwgMClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGMyZC5kcmF3SW1hZ2UoaW1nLCBpICogd2lkdGgsIDApXG5cdFx0XHR9XG5cdFx0fSlcblx0XHRjb25zdCBtZXJnZWQgPSBjMmQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltYWdlcy5sZW5ndGggKiB3aWR0aCwgaGVpZ2h0KVxuXHRcdHJldHVybiBTcHJpdGVEYXRhLmZyb21JbWFnZShtZXJnZWQsIHtcblx0XHRcdC4uLm9wdCxcblx0XHRcdHNsaWNlWDogaW1hZ2VzLmxlbmd0aCxcblx0XHRcdHNsaWNlWTogMSxcblx0XHR9KVxuXHR9XG5cblx0Ly8gbG9hZCBhIHNwcml0ZSB0byBhc3NldCBtYW5hZ2VyXG5cdGZ1bmN0aW9uIGxvYWRTcHJpdGUoXG5cdFx0bmFtZTogc3RyaW5nIHwgbnVsbCxcblx0XHRzcmM6IExvYWRTcHJpdGVTcmMgfCBMb2FkU3ByaXRlU3JjW10sXG5cdFx0b3B0OiBMb2FkU3ByaXRlT3B0ID0ge1xuXHRcdFx0c2xpY2VYOiAxLFxuXHRcdFx0c2xpY2VZOiAxLFxuXHRcdFx0YW5pbXM6IHt9LFxuXHRcdH0sXG5cdCk6IEFzc2V0PFNwcml0ZURhdGE+IHtcblx0XHRzcmMgPSBmaXhVUkwoc3JjKVxuXHRcdGlmIChBcnJheS5pc0FycmF5KHNyYykpIHtcblx0XHRcdGlmIChzcmMuc29tZSgocykgPT4gdHlwZW9mIHMgPT09IFwic3RyaW5nXCIpKSB7XG5cdFx0XHRcdHJldHVybiBhc3NldHMuc3ByaXRlcy5hZGQoXG5cdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHRQcm9taXNlLmFsbChzcmMubWFwKChzKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIHMgPT09IFwic3RyaW5nXCIgPyBsb2FkSW1nKHMpIDogUHJvbWlzZS5yZXNvbHZlKHMpXG5cdFx0XHRcdFx0fSkpLnRoZW4oKGltYWdlcykgPT4gY3JlYXRlU3ByaXRlU2hlZXQoaW1hZ2VzLCBvcHQpKSxcblx0XHRcdFx0KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGFzc2V0cy5zcHJpdGVzLmFkZExvYWRlZChuYW1lLCBjcmVhdGVTcHJpdGVTaGVldChzcmMgYXMgSW1hZ2VTb3VyY2VbXSwgb3B0KSlcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBzcmMgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0cmV0dXJuIGFzc2V0cy5zcHJpdGVzLmFkZChuYW1lLCBTcHJpdGVEYXRhLmZyb20oc3JjLCBvcHQpKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGFzc2V0cy5zcHJpdGVzLmFkZExvYWRlZChuYW1lLCBTcHJpdGVEYXRhLmZyb21JbWFnZShzcmMsIG9wdCkpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbG9hZFBlZGl0KG5hbWU6IHN0cmluZyB8IG51bGwsIHNyYzogc3RyaW5nIHwgUGVkaXRGaWxlKTogQXNzZXQ8U3ByaXRlRGF0YT4ge1xuXG5cdFx0c3JjID0gZml4VVJMKHNyYylcblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHRcdHJldHVybiBhc3NldHMuc3ByaXRlcy5hZGQobmFtZSwgbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcblxuXHRcdFx0Y29uc3QgZGF0YSA9IHR5cGVvZiBzcmMgPT09IFwic3RyaW5nXCIgPyBhd2FpdCBmZXRjaEpTT04oc3JjKSA6IHNyY1xuXHRcdFx0Y29uc3QgaW1hZ2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YS5mcmFtZXMubWFwKGxvYWRJbWcpKVxuXHRcdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxuXHRcdFx0Y2FudmFzLndpZHRoID0gZGF0YS53aWR0aFxuXHRcdFx0Y2FudmFzLmhlaWdodCA9IGRhdGEuaGVpZ2h0ICogZGF0YS5mcmFtZXMubGVuZ3RoXG5cblx0XHRcdGNvbnN0IGMyZCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcblxuXHRcdFx0aW1hZ2VzLmZvckVhY2goKGltZzogSFRNTEltYWdlRWxlbWVudCwgaSkgPT4ge1xuXHRcdFx0XHRjMmQuZHJhd0ltYWdlKGltZywgMCwgaSAqIGRhdGEuaGVpZ2h0KVxuXHRcdFx0fSlcblxuXHRcdFx0Y29uc3Qgc3ByID0gYXdhaXQgbG9hZFNwcml0ZShudWxsLCBjYW52YXMsIHtcblx0XHRcdFx0c2xpY2VZOiBkYXRhLmZyYW1lcy5sZW5ndGgsXG5cdFx0XHRcdGFuaW1zOiBkYXRhLmFuaW1zLFxuXHRcdFx0fSlcblxuXHRcdFx0cmVzb2x2ZShzcHIpXG5cblx0XHR9KSlcblxuXHR9XG5cblx0ZnVuY3Rpb24gbG9hZEFzZXByaXRlKFxuXHRcdG5hbWU6IHN0cmluZyB8IG51bGwsXG5cdFx0aW1nU3JjOiBMb2FkU3ByaXRlU3JjLFxuXHRcdGpzb25TcmM6IHN0cmluZyB8IEFzZXByaXRlRGF0YSxcblx0KTogQXNzZXQ8U3ByaXRlRGF0YT4ge1xuXG5cdFx0aW1nU3JjID0gZml4VVJMKGltZ1NyYylcblx0XHRqc29uU3JjID0gZml4VVJMKGpzb25TcmMpXG5cblx0XHRpZiAodHlwZW9mIGltZ1NyYyA9PT0gXCJzdHJpbmdcIiAmJiAhanNvblNyYykge1xuXHRcdFx0anNvblNyYyA9IGdldEZpbGVOYW1lKGltZ1NyYykgKyBcIi5qc29uXCJcblx0XHR9XG5cblx0XHRjb25zdCByZXNvbHZlSlNPTiA9IHR5cGVvZiBqc29uU3JjID09PSBcInN0cmluZ1wiXG5cdFx0XHQ/IGZldGNoSlNPTihqc29uU3JjKVxuXHRcdFx0OiBQcm9taXNlLnJlc29sdmUoanNvblNyYylcblxuXHRcdHJldHVybiBhc3NldHMuc3ByaXRlcy5hZGQobmFtZSwgcmVzb2x2ZUpTT04udGhlbigoZGF0YTogQXNlcHJpdGVEYXRhKSA9PiB7XG5cdFx0XHRjb25zdCBzaXplID0gZGF0YS5tZXRhLnNpemVcblx0XHRcdGNvbnN0IGZyYW1lcyA9IGRhdGEuZnJhbWVzLm1hcCgoZjogYW55KSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgUXVhZChcblx0XHRcdFx0XHRmLmZyYW1lLnggLyBzaXplLncsXG5cdFx0XHRcdFx0Zi5mcmFtZS55IC8gc2l6ZS5oLFxuXHRcdFx0XHRcdGYuZnJhbWUudyAvIHNpemUudyxcblx0XHRcdFx0XHRmLmZyYW1lLmggLyBzaXplLmgsXG5cdFx0XHRcdClcblx0XHRcdH0pXG5cdFx0XHRjb25zdCBhbmltcyA9IHt9XG5cdFx0XHRmb3IgKGNvbnN0IGFuaW0gb2YgZGF0YS5tZXRhLmZyYW1lVGFncykge1xuXHRcdFx0XHRpZiAoYW5pbS5mcm9tID09PSBhbmltLnRvKSB7XG5cdFx0XHRcdFx0YW5pbXNbYW5pbS5uYW1lXSA9IGFuaW0uZnJvbVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFuaW1zW2FuaW0ubmFtZV0gPSB7XG5cdFx0XHRcdFx0XHRmcm9tOiBhbmltLmZyb20sXG5cdFx0XHRcdFx0XHR0bzogYW5pbS50byxcblx0XHRcdFx0XHRcdHNwZWVkOiAxMCxcblx0XHRcdFx0XHRcdGxvb3A6IHRydWUsXG5cdFx0XHRcdFx0XHRwaW5ncG9uZzogYW5pbS5kaXJlY3Rpb24gPT09IFwicGluZ3BvbmdcIixcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBTcHJpdGVEYXRhLmZyb20oaW1nU3JjLCB7XG5cdFx0XHRcdGZyYW1lczogZnJhbWVzLFxuXHRcdFx0XHRhbmltczogYW5pbXMsXG5cdFx0XHR9KVxuXHRcdH0pKVxuXG5cdH1cblxuXHRmdW5jdGlvbiBsb2FkU2hhZGVyKFxuXHRcdG5hbWU6IHN0cmluZyB8IG51bGwsXG5cdFx0dmVydD86IHN0cmluZyxcblx0XHRmcmFnPzogc3RyaW5nLFxuXHQpIHtcblx0XHRyZXR1cm4gYXNzZXRzLnNoYWRlcnMuYWRkTG9hZGVkKG5hbWUsIG1ha2VTaGFkZXIodmVydCwgZnJhZykpXG5cdH1cblxuXHRmdW5jdGlvbiBsb2FkU2hhZGVyVVJMKFxuXHRcdG5hbWU6IHN0cmluZyB8IG51bGwsXG5cdFx0dmVydD86IHN0cmluZyxcblx0XHRmcmFnPzogc3RyaW5nLFxuXHQpOiBBc3NldDxTaGFkZXJEYXRhPiB7XG5cdFx0dmVydCA9IGZpeFVSTCh2ZXJ0KVxuXHRcdGZyYWcgPSBmaXhVUkwoZnJhZylcblx0XHRjb25zdCByZXNvbHZlVXJsID0gKHVybD86IHN0cmluZykgPT5cblx0XHRcdHVybFxuXHRcdFx0XHQ/IGZldGNoVGV4dCh1cmwpXG5cdFx0XHRcdDogUHJvbWlzZS5yZXNvbHZlKG51bGwpXG5cdFx0Y29uc3QgbG9hZCA9IFByb21pc2UuYWxsKFtyZXNvbHZlVXJsKHZlcnQpLCByZXNvbHZlVXJsKGZyYWcpXSlcblx0XHRcdC50aGVuKChbdmNvZGUsIGZjb2RlXTogW3N0cmluZyB8IG51bGwsIHN0cmluZyB8IG51bGxdKSA9PiB7XG5cdFx0XHRcdHJldHVybiBtYWtlU2hhZGVyKHZjb2RlLCBmY29kZSlcblx0XHRcdH0pXG5cdFx0cmV0dXJuIGFzc2V0cy5zaGFkZXJzLmFkZChuYW1lLCBsb2FkKVxuXHR9XG5cblx0Ly8gVE9ETzogYWxsb3cgc3RyZWFtIGJpZyBhdWRpb1xuXHQvLyBsb2FkIGEgc291bmQgdG8gYXNzZXQgbWFuYWdlclxuXHRmdW5jdGlvbiBsb2FkU291bmQoXG5cdFx0bmFtZTogc3RyaW5nIHwgbnVsbCxcblx0XHRzcmM6IHN0cmluZyB8IEFycmF5QnVmZmVyLFxuXHQpOiBBc3NldDxTb3VuZERhdGE+IHtcblx0XHRzcmMgPSBmaXhVUkwoc3JjKVxuXHRcdHJldHVybiBhc3NldHMuc291bmRzLmFkZChcblx0XHRcdG5hbWUsXG5cdFx0XHR0eXBlb2Ygc3JjID09PSBcInN0cmluZ1wiXG5cdFx0XHRcdD8gU291bmREYXRhLmZyb21VUkwoc3JjKVxuXHRcdFx0XHQ6IFNvdW5kRGF0YS5mcm9tQXJyYXlCdWZmZXIoc3JjKSxcblx0XHQpXG5cdH1cblxuXHRmdW5jdGlvbiBsb2FkQmVhbihuYW1lOiBzdHJpbmcgPSBcImJlYW5cIik6IEFzc2V0PFNwcml0ZURhdGE+IHtcblx0XHRyZXR1cm4gbG9hZFNwcml0ZShuYW1lLCBiZWFuU3ByaXRlU3JjKVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0U3ByaXRlKG5hbWU6IHN0cmluZyk6IEFzc2V0PFNwcml0ZURhdGE+IHwgdm9pZCB7XG5cdFx0cmV0dXJuIGFzc2V0cy5zcHJpdGVzLmdldChuYW1lKVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0U291bmQobmFtZTogc3RyaW5nKTogQXNzZXQ8U291bmREYXRhPiB8IHZvaWQge1xuXHRcdHJldHVybiBhc3NldHMuc291bmRzLmdldChuYW1lKVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Rm9udChuYW1lOiBzdHJpbmcpOiBBc3NldDxGb250RGF0YT4gfCB2b2lkIHtcblx0XHRyZXR1cm4gYXNzZXRzLmZvbnRzLmdldChuYW1lKVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Qml0bWFwRm9udChuYW1lOiBzdHJpbmcpOiBBc3NldDxCaXRtYXBGb250RGF0YT4gfCB2b2lkIHtcblx0XHRyZXR1cm4gYXNzZXRzLmJpdG1hcEZvbnRzLmdldChuYW1lKVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0U2hhZGVyKG5hbWU6IHN0cmluZyk6IEFzc2V0PFNoYWRlckRhdGE+IHwgdm9pZCB7XG5cdFx0cmV0dXJuIGFzc2V0cy5zaGFkZXJzLmdldChuYW1lKVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0QXNzZXQobmFtZTogc3RyaW5nKTogQXNzZXQ8YW55PiB8IHZvaWQge1xuXHRcdHJldHVybiBhc3NldHMuY3VzdG9tLmdldChuYW1lKVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVzb2x2ZVNwcml0ZShcblx0XHRzcmM6IERyYXdTcHJpdGVPcHRbXCJzcHJpdGVcIl0sXG5cdCk6IEFzc2V0PFNwcml0ZURhdGE+IHwgbnVsbCB7XG5cdFx0aWYgKHR5cGVvZiBzcmMgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGNvbnN0IHNwciA9IGdldFNwcml0ZShzcmMpXG5cdFx0XHRpZiAoc3ByKSB7XG5cdFx0XHRcdC8vIGlmIGl0J3MgYWxyZWFkeSBsb2FkZWQgb3IgYmVpbmcgbG9hZGluZywgcmV0dXJuIGl0XG5cdFx0XHRcdHJldHVybiBzcHJcblx0XHRcdH0gZWxzZSBpZiAobG9hZFByb2dyZXNzKCkgPCAxKSB7XG5cdFx0XHRcdC8vIGlmIHRoZXJlJ3MgYW55IG90aGVyIG9uZ29pbmcgbG9hZGluZyB0YXNrIHdlIHJldHVybiBlbXB0eSBhbmQgZG9uJ3QgZXJyb3IgeWV0XG5cdFx0XHRcdHJldHVybiBudWxsXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpZiBhbGwgb3RoZXIgYXNzZXRzIGFyZSBsb2FkZWQgYW5kIHdlIHN0aWxsIGhhdmVuJ3QgZm91bmQgdGhpcyBzcHJpdGUsIHRocm93XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgU3ByaXRlIG5vdCBmb3VuZDogJHtzcmN9YClcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHNyYyBpbnN0YW5jZW9mIFNwcml0ZURhdGEpIHtcblx0XHRcdHJldHVybiBBc3NldC5sb2FkZWQoc3JjKVxuXHRcdH0gZWxzZSBpZiAoc3JjIGluc3RhbmNlb2YgQXNzZXQpIHtcblx0XHRcdHJldHVybiBzcmNcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNwcml0ZTogJHtzcmN9YClcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiByZXNvbHZlU291bmQoXG5cdFx0c3JjOiBQYXJhbWV0ZXJzPHR5cGVvZiBwbGF5PlswXSxcblx0KTogQXNzZXQ8U291bmREYXRhPiB8IG51bGwge1xuXHRcdGlmICh0eXBlb2Ygc3JjID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRjb25zdCBzbmQgPSBnZXRTb3VuZChzcmMpXG5cdFx0XHRpZiAoc25kKSB7XG5cdFx0XHRcdHJldHVybiBzbmRcblx0XHRcdH0gZWxzZSBpZiAobG9hZFByb2dyZXNzKCkgPCAxKSB7XG5cdFx0XHRcdHJldHVybiBudWxsXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFNvdW5kIG5vdCBmb3VuZDogJHtzcmN9YClcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHNyYyBpbnN0YW5jZW9mIFNvdW5kRGF0YSkge1xuXHRcdFx0cmV0dXJuIEFzc2V0LmxvYWRlZChzcmMpXG5cdFx0fSBlbHNlIGlmIChzcmMgaW5zdGFuY2VvZiBBc3NldCkge1xuXHRcdFx0cmV0dXJuIHNyY1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc291bmQ6ICR7c3JjfWApXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVzb2x2ZVNoYWRlcihcblx0XHRzcmM6IFJlbmRlclByb3BzW1wic2hhZGVyXCJdLFxuXHQpOiBTaGFkZXJEYXRhIHwgQXNzZXQ8U2hhZGVyRGF0YT4gfCBudWxsIHtcblx0XHRpZiAoIXNyYykge1xuXHRcdFx0cmV0dXJuIGdmeC5kZWZTaGFkZXJcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBzcmMgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGNvbnN0IHNoYWRlciA9IGdldFNoYWRlcihzcmMpXG5cdFx0XHRpZiAoc2hhZGVyKSB7XG5cdFx0XHRcdHJldHVybiBzaGFkZXIuZGF0YSA/PyBzaGFkZXJcblx0XHRcdH0gZWxzZSBpZiAobG9hZFByb2dyZXNzKCkgPCAxKSB7XG5cdFx0XHRcdHJldHVybiBudWxsXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFNoYWRlciBub3QgZm91bmQ6ICR7c3JjfWApXG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzcmMgaW5zdGFuY2VvZiBBc3NldCkge1xuXHRcdFx0cmV0dXJuIHNyYy5kYXRhID8gc3JjLmRhdGEgOiBzcmNcblx0XHR9XG5cdFx0Ly8gVE9ETzogY2hlY2sgdHlwZVxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRyZXR1cm4gc3JjXG5cdH1cblxuXHRmdW5jdGlvbiByZXNvbHZlRm9udChcblx0XHRzcmM6IERyYXdUZXh0T3B0W1wiZm9udFwiXSxcblx0KTpcblx0XHR8IEZvbnREYXRhXG5cdFx0fCBBc3NldDxGb250RGF0YT5cblx0XHR8IEJpdG1hcEZvbnREYXRhXG5cdFx0fCBBc3NldDxCaXRtYXBGb250RGF0YT5cblx0XHR8IHN0cmluZ1xuXHRcdHwgdm9pZFxuXHR7XG5cdFx0aWYgKCFzcmMpIHtcblx0XHRcdHJldHVybiByZXNvbHZlRm9udChnb3B0LmZvbnQgPz8gREVGX0ZPTlQpXG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygc3JjID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRjb25zdCBiZm9udCA9IGdldEJpdG1hcEZvbnQoc3JjKVxuXHRcdFx0Y29uc3QgZm9udCA9IGdldEZvbnQoc3JjKVxuXHRcdFx0aWYgKGJmb250KSB7XG5cdFx0XHRcdHJldHVybiBiZm9udC5kYXRhID8/IGJmb250XG5cdFx0XHR9IGVsc2UgaWYgKGZvbnQpIHtcblx0XHRcdFx0cmV0dXJuIGZvbnQuZGF0YSA/PyBmb250XG5cdFx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LmZvbnRzLmNoZWNrKGAke0RFRl9URVhUX0NBQ0hFX1NJWkV9cHggJHtzcmN9YCkpIHtcblx0XHRcdFx0cmV0dXJuIHNyY1xuXHRcdFx0fSBlbHNlIGlmIChsb2FkUHJvZ3Jlc3MoKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIG51bGxcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgRm9udCBub3QgZm91bmQ6ICR7c3JjfWApXG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzcmMgaW5zdGFuY2VvZiBBc3NldCkge1xuXHRcdFx0cmV0dXJuIHNyYy5kYXRhID8gc3JjLmRhdGEgOiBzcmNcblx0XHR9XG5cdFx0Ly8gVE9ETzogY2hlY2sgdHlwZVxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRyZXR1cm4gc3JjXG5cdH1cblxuXHQvLyBnZXQgLyBzZXQgbWFzdGVyIHZvbHVtZVxuXHRmdW5jdGlvbiB2b2x1bWUodj86IG51bWJlcik6IG51bWJlciB7XG5cdFx0aWYgKHYgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0YXVkaW8ubWFzdGVyTm9kZS5nYWluLnZhbHVlID0gdlxuXHRcdH1cblx0XHRyZXR1cm4gYXVkaW8ubWFzdGVyTm9kZS5nYWluLnZhbHVlXG5cdH1cblxuXHQvLyBUT0RPOiBtZXRob2QgdG8gY29tcGxldGVseSBkZXN0b3J5IGF1ZGlvP1xuXHQvLyBUT0RPOiB0aW1lKCkgbm90IGNvcnJlY3Qgd2hlbiBsb29wZWQgb3ZlciBvciBlbmRlZFxuXHQvLyBUT0RPOiBvbkVuZCgpIG5vdCB3b3JraW5nXG5cdC8vIHBsYXlzIGEgc291bmQsIHJldHVybnMgYSBjb250cm9sIGhhbmRsZVxuXHRmdW5jdGlvbiBwbGF5KFxuXHRcdHNyYzogc3RyaW5nIHwgU291bmREYXRhIHwgQXNzZXQ8U291bmREYXRhPixcblx0XHRvcHQ6IEF1ZGlvUGxheU9wdCA9IHt9LFxuXHQpOiBBdWRpb1BsYXkge1xuXG5cdFx0Y29uc3QgY3R4ID0gYXVkaW8uY3R4XG5cdFx0bGV0IHBhdXNlZCA9IG9wdC5wYXVzZWQgPz8gZmFsc2Vcblx0XHRsZXQgc3JjTm9kZSA9IGN0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKVxuXHRcdGNvbnN0IG9uRW5kRXZlbnRzID0gbmV3IEV2ZW50KClcblx0XHRjb25zdCBnYWluTm9kZSA9IGN0eC5jcmVhdGVHYWluKClcblx0XHRjb25zdCBwb3MgPSBvcHQuc2VlayA/PyAwXG5cdFx0bGV0IHN0YXJ0VGltZSA9IDBcblx0XHRsZXQgc3RvcFRpbWUgPSAwXG5cdFx0bGV0IHN0YXJ0ZWQgPSBmYWxzZVxuXG5cdFx0c3JjTm9kZS5sb29wID0gQm9vbGVhbihvcHQubG9vcClcblx0XHRzcmNOb2RlLmRldHVuZS52YWx1ZSA9IG9wdC5kZXR1bmUgPz8gMFxuXHRcdHNyY05vZGUucGxheWJhY2tSYXRlLnZhbHVlID0gb3B0LnNwZWVkID8/IDFcblx0XHRzcmNOb2RlLmNvbm5lY3QoZ2Fpbk5vZGUpXG5cdFx0c3JjTm9kZS5vbmVuZGVkID0gKCkgPT4ge1xuXHRcdFx0aWYgKGdldFRpbWUoKSA+PSBzcmNOb2RlLmJ1ZmZlcj8uZHVyYXRpb24gPz8gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSB7XG5cdFx0XHRcdG9uRW5kRXZlbnRzLnRyaWdnZXIoKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRnYWluTm9kZS5jb25uZWN0KGF1ZGlvLm1hc3Rlck5vZGUpXG5cdFx0Z2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IG9wdC52b2x1bWUgPz8gMVxuXG5cdFx0Y29uc3Qgc3RhcnQgPSAoZGF0YTogU291bmREYXRhKSA9PiB7XG5cdFx0XHRzcmNOb2RlLmJ1ZmZlciA9IGRhdGEuYnVmXG5cdFx0XHRpZiAoIXBhdXNlZCkge1xuXHRcdFx0XHRzdGFydFRpbWUgPSBjdHguY3VycmVudFRpbWVcblx0XHRcdFx0c3JjTm9kZS5zdGFydCgwLCBwb3MpXG5cdFx0XHRcdHN0YXJ0ZWQgPSB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc25kID0gcmVzb2x2ZVNvdW5kKHNyYylcblxuXHRcdGlmIChzbmQgaW5zdGFuY2VvZiBBc3NldCkge1xuXHRcdFx0c25kLm9uTG9hZChzdGFydClcblx0XHR9XG5cblx0XHRjb25zdCBnZXRUaW1lID0gKCkgPT4ge1xuXHRcdFx0aWYgKCFzcmNOb2RlLmJ1ZmZlcikgcmV0dXJuIDBcblx0XHRcdGNvbnN0IHQgPSBwYXVzZWRcblx0XHRcdFx0PyBzdG9wVGltZSAtIHN0YXJ0VGltZVxuXHRcdFx0XHQ6IGN0eC5jdXJyZW50VGltZSAtIHN0YXJ0VGltZVxuXHRcdFx0Y29uc3QgZCA9IHNyY05vZGUuYnVmZmVyLmR1cmF0aW9uXG5cdFx0XHRyZXR1cm4gc3JjTm9kZS5sb29wID8gdCAlIGQgOiBNYXRoLm1pbih0LCBkKVxuXHRcdH1cblxuXHRcdGNvbnN0IGNsb25lTm9kZSA9IChvbGROb2RlOiBBdWRpb0J1ZmZlclNvdXJjZU5vZGUpID0+IHtcblx0XHRcdGNvbnN0IG5ld05vZGUgPSBjdHguY3JlYXRlQnVmZmVyU291cmNlKClcblx0XHRcdG5ld05vZGUuYnVmZmVyID0gb2xkTm9kZS5idWZmZXJcblx0XHRcdG5ld05vZGUubG9vcCA9IG9sZE5vZGUubG9vcFxuXHRcdFx0bmV3Tm9kZS5wbGF5YmFja1JhdGUudmFsdWUgPSBvbGROb2RlLnBsYXliYWNrUmF0ZS52YWx1ZVxuXHRcdFx0bmV3Tm9kZS5kZXR1bmUudmFsdWUgPSBvbGROb2RlLmRldHVuZS52YWx1ZVxuXHRcdFx0bmV3Tm9kZS5vbmVuZGVkID0gb2xkTm9kZS5vbmVuZGVkXG5cdFx0XHRuZXdOb2RlLmNvbm5lY3QoZ2Fpbk5vZGUpXG5cdFx0XHRyZXR1cm4gbmV3Tm9kZVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cblx0XHRcdHN0b3AoKSB7XG5cdFx0XHRcdHRoaXMucGF1c2VkID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLnNlZWsoMClcblx0XHRcdH0sXG5cblx0XHRcdHNldCBwYXVzZWQocDogYm9vbGVhbikge1xuXHRcdFx0XHRpZiAocGF1c2VkID09PSBwKSByZXR1cm5cblx0XHRcdFx0cGF1c2VkID0gcFxuXHRcdFx0XHRpZiAocCkge1xuXHRcdFx0XHRcdGlmIChzdGFydGVkKSB7XG5cdFx0XHRcdFx0XHRzcmNOb2RlLnN0b3AoKVxuXHRcdFx0XHRcdFx0c3RhcnRlZCA9IGZhbHNlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0b3BUaW1lID0gY3R4LmN1cnJlbnRUaW1lXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3JjTm9kZSA9IGNsb25lTm9kZShzcmNOb2RlKVxuXHRcdFx0XHRcdGNvbnN0IHBvcyA9IHN0b3BUaW1lIC0gc3RhcnRUaW1lXG5cdFx0XHRcdFx0c3JjTm9kZS5zdGFydCgwLCBwb3MpXG5cdFx0XHRcdFx0c3RhcnRlZCA9IHRydWVcblx0XHRcdFx0XHRzdGFydFRpbWUgPSBjdHguY3VycmVudFRpbWUgLSBwb3Ncblx0XHRcdFx0XHRzdG9wVGltZSA9IDBcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IHBhdXNlZCgpIHtcblx0XHRcdFx0cmV0dXJuIHBhdXNlZFxuXHRcdFx0fSxcblxuXHRcdFx0cGxheSh0aW1lOiBudW1iZXIgPSAwKSB7XG5cdFx0XHRcdHRoaXMuc2Vlayh0aW1lKVxuXHRcdFx0XHR0aGlzLnBhdXNlZCA9IGZhbHNlXG5cdFx0XHR9LFxuXG5cdFx0XHRzZWVrKHRpbWU6IG51bWJlcikge1xuXHRcdFx0XHRpZiAoIXNyY05vZGUuYnVmZmVyPy5kdXJhdGlvbikgcmV0dXJuXG5cdFx0XHRcdGlmICh0aW1lID4gc3JjTm9kZS5idWZmZXIuZHVyYXRpb24pIHJldHVyblxuXHRcdFx0XHRpZiAocGF1c2VkKSB7XG5cdFx0XHRcdFx0c3JjTm9kZSA9IGNsb25lTm9kZShzcmNOb2RlKVxuXHRcdFx0XHRcdHN0YXJ0VGltZSA9IHN0b3BUaW1lIC0gdGltZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNyY05vZGUuc3RvcCgpXG5cdFx0XHRcdFx0c3JjTm9kZSA9IGNsb25lTm9kZShzcmNOb2RlKVxuXHRcdFx0XHRcdHN0YXJ0VGltZSA9IGN0eC5jdXJyZW50VGltZSAtIHRpbWVcblx0XHRcdFx0XHRzcmNOb2RlLnN0YXJ0KDAsIHRpbWUpXG5cdFx0XHRcdFx0c3RhcnRlZCA9IHRydWVcblx0XHRcdFx0XHRzdG9wVGltZSA9IDBcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Ly8gVE9ETzogYWZmZWN0IHRpbWUoKVxuXHRcdFx0c2V0IHNwZWVkKHZhbDogbnVtYmVyKSB7XG5cdFx0XHRcdHNyY05vZGUucGxheWJhY2tSYXRlLnZhbHVlID0gdmFsXG5cdFx0XHR9LFxuXG5cdFx0XHRnZXQgc3BlZWQoKSB7XG5cdFx0XHRcdHJldHVybiBzcmNOb2RlLnBsYXliYWNrUmF0ZS52YWx1ZVxuXHRcdFx0fSxcblxuXHRcdFx0c2V0IGRldHVuZSh2YWw6IG51bWJlcikge1xuXHRcdFx0XHRzcmNOb2RlLmRldHVuZS52YWx1ZSA9IHZhbFxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IGRldHVuZSgpIHtcblx0XHRcdFx0cmV0dXJuIHNyY05vZGUuZGV0dW5lLnZhbHVlXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQgdm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0XHRcdGdhaW5Ob2RlLmdhaW4udmFsdWUgPSBNYXRoLm1heCh2YWwsIDApXG5cdFx0XHR9LFxuXG5cdFx0XHRnZXQgdm9sdW1lKCkge1xuXHRcdFx0XHRyZXR1cm4gZ2Fpbk5vZGUuZ2Fpbi52YWx1ZVxuXHRcdFx0fSxcblxuXHRcdFx0c2V0IGxvb3AobDogYm9vbGVhbikge1xuXHRcdFx0XHRzcmNOb2RlLmxvb3AgPSBsXG5cdFx0XHR9LFxuXG5cdFx0XHRnZXQgbG9vcCgpIHtcblx0XHRcdFx0cmV0dXJuIHNyY05vZGUubG9vcFxuXHRcdFx0fSxcblxuXHRcdFx0ZHVyYXRpb24oKTogbnVtYmVyIHtcblx0XHRcdFx0cmV0dXJuIHNyY05vZGUuYnVmZmVyPy5kdXJhdGlvbiA/PyAwXG5cdFx0XHR9LFxuXG5cdFx0XHR0aW1lKCk6IG51bWJlciB7XG5cdFx0XHRcdHJldHVybiBnZXRUaW1lKCkgJSB0aGlzLmR1cmF0aW9uKClcblx0XHRcdH0sXG5cblx0XHRcdG9uRW5kKGFjdGlvbjogKCkgPT4gdm9pZCkge1xuXHRcdFx0XHRyZXR1cm4gb25FbmRFdmVudHMuYWRkKGFjdGlvbilcblx0XHRcdH0sXG5cblx0XHRcdHRoZW4oYWN0aW9uOiAoKSA9PiB2b2lkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uRW5kKGFjdGlvbilcblx0XHRcdH0sXG5cblx0XHR9XG5cblx0fVxuXG5cdC8vIGNvcmUga2Fib29tIGxvZ2ljXG5cdGZ1bmN0aW9uIGJ1cnAob3B0PzogQXVkaW9QbGF5T3B0KTogQXVkaW9QbGF5IHtcblx0XHRyZXR1cm4gcGxheShhdWRpby5idXJwU25kLCBvcHQpXG5cdH1cblxuXHR0eXBlIERyYXdUZXh0dXJlT3B0ID0gUmVuZGVyUHJvcHMgJiB7XG5cdFx0dGV4OiBUZXh0dXJlLFxuXHRcdHdpZHRoPzogbnVtYmVyLFxuXHRcdGhlaWdodD86IG51bWJlcixcblx0XHR0aWxlZD86IGJvb2xlYW4sXG5cdFx0ZmxpcFg/OiBib29sZWFuLFxuXHRcdGZsaXBZPzogYm9vbGVhbixcblx0XHRxdWFkPzogUXVhZCxcblx0XHRhbmNob3I/OiBBbmNob3IgfCBWZWMyLFxuXHR9XG5cblx0ZnVuY3Rpb24gbWFrZUNhbnZhcyh3OiBudW1iZXIsIGg6IG51bWJlcikge1xuXHRcdHJldHVybiBuZXcgRnJhbWVCdWZmZXIoZ2dsLCB3LCBoKVxuXHR9XG5cblx0ZnVuY3Rpb24gbWFrZVNoYWRlcihcblx0XHR2ZXJ0U3JjOiBzdHJpbmcgfCBudWxsID0gREVGX1ZFUlQsXG5cdFx0ZnJhZ1NyYzogc3RyaW5nIHwgbnVsbCA9IERFRl9GUkFHLFxuXHQpOiBTaGFkZXIge1xuXHRcdGNvbnN0IHZjb2RlID0gVkVSVF9URU1QTEFURS5yZXBsYWNlKFwie3t1c2VyfX1cIiwgdmVydFNyYyA/PyBERUZfVkVSVClcblx0XHRjb25zdCBmY29kZSA9IEZSQUdfVEVNUExBVEUucmVwbGFjZShcInt7dXNlcn19XCIsIGZyYWdTcmMgPz8gREVGX0ZSQUcpXG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBuZXcgU2hhZGVyKGdnbCwgdmNvZGUsIGZjb2RlLCBWRVJURVhfRk9STUFULm1hcCgodmVydCkgPT4gdmVydC5uYW1lKSlcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zdCBsaW5lT2Zmc2V0ID0gMTRcblx0XHRcdGNvbnN0IGZtdCA9IC8oPzx0eXBlPl5cXHcrKSBTSEFERVIgRVJST1I6IDA6KD88bGluZT5cXGQrKTogKD88bXNnPi4rKS9cblx0XHRcdGNvbnN0IG1hdGNoID0gZ2V0RXJyb3JNZXNzYWdlKGUpLm1hdGNoKGZtdClcblx0XHRcdGNvbnN0IGxpbmUgPSBOdW1iZXIobWF0Y2guZ3JvdXBzLmxpbmUpIC0gbGluZU9mZnNldFxuXHRcdFx0Y29uc3QgbXNnID0gbWF0Y2guZ3JvdXBzLm1zZy50cmltKClcblx0XHRcdGNvbnN0IHR5ID0gbWF0Y2guZ3JvdXBzLnR5cGUudG9Mb3dlckNhc2UoKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGAke3R5fSBzaGFkZXIgbGluZSAke2xpbmV9OiAke21zZ31gKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG1ha2VGb250KFxuXHRcdHRleDogVGV4dHVyZSxcblx0XHRndzogbnVtYmVyLFxuXHRcdGdoOiBudW1iZXIsXG5cdFx0Y2hhcnM6IHN0cmluZyxcblx0KTogR2Z4Rm9udCB7XG5cblx0XHRjb25zdCBjb2xzID0gdGV4LndpZHRoIC8gZ3dcblx0XHRjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFF1YWQ+ID0ge31cblx0XHRjb25zdCBjaGFyTWFwID0gY2hhcnMuc3BsaXQoXCJcIikuZW50cmllcygpXG5cblx0XHRmb3IgKGNvbnN0IFtpLCBjaF0gb2YgY2hhck1hcCkge1xuXHRcdFx0bWFwW2NoXSA9IG5ldyBRdWFkKFxuXHRcdFx0XHQoaSAlIGNvbHMpICogZ3csXG5cdFx0XHRcdE1hdGguZmxvb3IoaSAvIGNvbHMpICogZ2gsXG5cdFx0XHRcdGd3LFxuXHRcdFx0XHRnaCxcblx0XHRcdClcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4OiB0ZXgsXG5cdFx0XHRtYXA6IG1hcCxcblx0XHRcdHNpemU6IGdoLFxuXHRcdH1cblxuXHR9XG5cblx0Ly8gVE9ETzogZXhwb3NlXG5cdGZ1bmN0aW9uIGRyYXdSYXcoXG5cdFx0dmVydHM6IFZlcnRleFtdLFxuXHRcdGluZGljZXM6IG51bWJlcltdLFxuXHRcdGZpeGVkOiBib29sZWFuLFxuXHRcdHRleDogVGV4dHVyZSA9IGdmeC5kZWZUZXgsXG5cdFx0c2hhZGVyU3JjOiBSZW5kZXJQcm9wc1tcInNoYWRlclwiXSA9IGdmeC5kZWZTaGFkZXIsXG5cdFx0dW5pZm9ybTogVW5pZm9ybSA9IHt9LFxuXHQpIHtcblxuXHRcdGNvbnN0IHNoYWRlciA9IHJlc29sdmVTaGFkZXIoc2hhZGVyU3JjKVxuXG5cdFx0aWYgKCFzaGFkZXIgfHwgc2hhZGVyIGluc3RhbmNlb2YgQXNzZXQpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IHRyYW5zZm9ybSA9IChnZnguZml4ZWQgfHwgZml4ZWQpXG5cdFx0XHQ/IGdmeC50cmFuc2Zvcm1cblx0XHRcdDogZ2FtZS5jYW0udHJhbnNmb3JtLm11bHQoZ2Z4LnRyYW5zZm9ybSlcblxuXHRcdGNvbnN0IHZ2ID0gW11cblxuXHRcdGZvciAoY29uc3QgdiBvZiB2ZXJ0cykge1xuXHRcdFx0Ly8gbm9ybWFsaXplZCB3b3JsZCBzcGFjZSBjb29yZGluYXRlIFstMS4wIH4gMS4wXVxuXHRcdFx0Y29uc3QgcHQgPSBzY3JlZW4ybmRjKHRyYW5zZm9ybS5tdWx0VmVjMih2LnBvcykpXG5cdFx0XHR2di5wdXNoKFxuXHRcdFx0XHRwdC54LCBwdC55LFxuXHRcdFx0XHR2LnV2LngsIHYudXYueSxcblx0XHRcdFx0di5jb2xvci5yIC8gMjU1LCB2LmNvbG9yLmcgLyAyNTUsIHYuY29sb3IuYiAvIDI1NSwgdi5vcGFjaXR5LFxuXHRcdFx0KVxuXHRcdH1cblxuXHRcdGdmeC5yZW5kZXJlci5wdXNoKGdsLlRSSUFOR0xFUywgdnYsIGluZGljZXMsIHNoYWRlciwgdGV4LCB1bmlmb3JtKVxuXG5cdH1cblxuXHQvLyBkcmF3IGFsbCBiYXRjaGVkIHNoYXBlc1xuXHRmdW5jdGlvbiBmbHVzaCgpIHtcblx0XHRnZngucmVuZGVyZXIuZmx1c2goKVxuXHR9XG5cblx0Ly8gc3RhcnQgYSByZW5kZXJpbmcgZnJhbWUsIHJlc2V0IHNvbWUgc3RhdGVzXG5cdGZ1bmN0aW9uIGZyYW1lU3RhcnQoKSB7XG5cblx0XHQvLyBjbGVhciBiYWNrYnVmZmVyXG5cdFx0Z2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVClcblx0XHRnZnguZnJhbWVCdWZmZXIuYmluZCgpXG5cdFx0Ly8gY2xlYXIgZnJhbWVidWZmZXJcblx0XHRnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKVxuXG5cdFx0aWYgKCFnZnguYmdDb2xvcikge1xuXHRcdFx0ZHJhd1Vuc2NhbGVkKCgpID0+IHtcblx0XHRcdFx0ZHJhd1VWUXVhZCh7XG5cdFx0XHRcdFx0d2lkdGg6IHdpZHRoKCksXG5cdFx0XHRcdFx0aGVpZ2h0OiBoZWlnaHQoKSxcblx0XHRcdFx0XHRxdWFkOiBuZXcgUXVhZChcblx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0d2lkdGgoKSAvIEJHX0dSSURfU0laRSxcblx0XHRcdFx0XHRcdGhlaWdodCgpIC8gQkdfR1JJRF9TSVpFLFxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0dGV4OiBnZnguYmdUZXgsXG5cdFx0XHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdGdmeC5yZW5kZXJlci5udW1EcmF3cyA9IDBcblx0XHRnZnguZml4ZWQgPSBmYWxzZVxuXHRcdGdmeC50cmFuc2Zvcm1TdGFjay5sZW5ndGggPSAwXG5cdFx0Z2Z4LnRyYW5zZm9ybSA9IG5ldyBNYXQ0KClcblxuXHR9XG5cblx0ZnVuY3Rpb24gdXNlUG9zdEVmZmVjdChuYW1lOiBzdHJpbmcsIHVuaWZvcm0/OiBVbmlmb3JtIHwgKCgpID0+IFVuaWZvcm0pKSB7XG5cdFx0Z2Z4LnBvc3RTaGFkZXIgPSBuYW1lXG5cdFx0Z2Z4LnBvc3RTaGFkZXJVbmlmb3JtID0gdW5pZm9ybSA/PyBudWxsXG5cdH1cblxuXHRmdW5jdGlvbiBmcmFtZUVuZCgpIHtcblxuXHRcdC8vIFRPRE86IGRvbid0IHJlbmRlciBkZWJ1ZyBVSSB3aXRoIGZyYW1lYnVmZmVyXG5cdFx0Ly8gVE9ETzogcG9saXNoIGZyYW1lYnVmZmVyIHJlbmRlcmluZyAvIHNpemluZyBpc3N1ZXNcblx0XHRmbHVzaCgpXG5cdFx0Z2Z4Lmxhc3REcmF3Q2FsbHMgPSBnZngucmVuZGVyZXIubnVtRHJhd3Ncblx0XHRnZnguZnJhbWVCdWZmZXIudW5iaW5kKClcblx0XHRnbC52aWV3cG9ydCgwLCAwLCBnbC5kcmF3aW5nQnVmZmVyV2lkdGgsIGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQpXG5cblx0XHRjb25zdCBvdyA9IGdmeC53aWR0aFxuXHRcdGNvbnN0IG9oID0gZ2Z4LmhlaWdodFxuXHRcdGdmeC53aWR0aCA9IGdsLmRyYXdpbmdCdWZmZXJXaWR0aCAvIHBpeGVsRGVuc2l0eVxuXHRcdGdmeC5oZWlnaHQgPSBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0IC8gcGl4ZWxEZW5zaXR5XG5cblx0XHRkcmF3VGV4dHVyZSh7XG5cdFx0XHRmbGlwWTogdHJ1ZSxcblx0XHRcdHRleDogZ2Z4LmZyYW1lQnVmZmVyLnRleCxcblx0XHRcdHBvczogbmV3IFZlYzIoZ2Z4LnZpZXdwb3J0LngsIGdmeC52aWV3cG9ydC55KSxcblx0XHRcdHdpZHRoOiBnZngudmlld3BvcnQud2lkdGgsXG5cdFx0XHRoZWlnaHQ6IGdmeC52aWV3cG9ydC5oZWlnaHQsXG5cdFx0XHRzaGFkZXI6IGdmeC5wb3N0U2hhZGVyLFxuXHRcdFx0dW5pZm9ybTogdHlwZW9mIGdmeC5wb3N0U2hhZGVyVW5pZm9ybSA9PT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdD8gZ2Z4LnBvc3RTaGFkZXJVbmlmb3JtKClcblx0XHRcdFx0OiBnZngucG9zdFNoYWRlclVuaWZvcm0sXG5cdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHR9KVxuXG5cdFx0Zmx1c2goKVxuXHRcdGdmeC53aWR0aCA9IG93XG5cdFx0Z2Z4LmhlaWdodCA9IG9oXG5cblx0fVxuXG5cdC8vIGNvbnZlcnQgYSBzY3JlZW4gc3BhY2UgY29vcmRpbmF0ZSB0byB3ZWJnbCBub3JtYWxpemVkIGRldmljZSBjb29yZGluYXRlXG5cdGZ1bmN0aW9uIHNjcmVlbjJuZGMocHQ6IFZlYzIpOiBWZWMyIHtcblx0XHRyZXR1cm4gbmV3IFZlYzIoXG5cdFx0XHRwdC54IC8gd2lkdGgoKSAqIDIgLSAxLFxuXHRcdFx0LXB0LnkgLyBoZWlnaHQoKSAqIDIgKyAxLFxuXHRcdClcblx0fVxuXG5cdGZ1bmN0aW9uIHB1c2hNYXRyaXgobTogTWF0NCkge1xuXHRcdGdmeC50cmFuc2Zvcm0gPSBtLmNsb25lKClcblx0fVxuXG5cdGZ1bmN0aW9uIHB1c2hUcmFuc2xhdGUoLi4uYXJnczogVmVjMkFyZ3MpIHtcblx0XHRpZiAoYXJnc1swXSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cblx0XHRjb25zdCBwID0gdmVjMiguLi5hcmdzKVxuXHRcdGlmIChwLnggPT09IDAgJiYgcC55ID09PSAwKSByZXR1cm5cblx0XHRnZngudHJhbnNmb3JtLnRyYW5zbGF0ZShwKVxuXHR9XG5cblx0ZnVuY3Rpb24gcHVzaFNjYWxlKC4uLmFyZ3M6IFZlYzJBcmdzKSB7XG5cdFx0aWYgKGFyZ3NbMF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuXG5cdFx0Y29uc3QgcCA9IHZlYzIoLi4uYXJncylcblx0XHRpZiAocC54ID09PSAxICYmIHAueSA9PT0gMSkgcmV0dXJuXG5cdFx0Z2Z4LnRyYW5zZm9ybS5zY2FsZShwKVxuXHR9XG5cblx0ZnVuY3Rpb24gcHVzaFJvdGF0ZShhOiBudW1iZXIpIHtcblx0XHRpZiAoIWEpIHJldHVyblxuXHRcdGdmeC50cmFuc2Zvcm0ucm90YXRlKGEpXG5cdH1cblxuXHRmdW5jdGlvbiBwdXNoVHJhbnNmb3JtKCkge1xuXHRcdGdmeC50cmFuc2Zvcm1TdGFjay5wdXNoKGdmeC50cmFuc2Zvcm0uY2xvbmUoKSlcblx0fVxuXG5cdGZ1bmN0aW9uIHBvcFRyYW5zZm9ybSgpIHtcblx0XHRpZiAoZ2Z4LnRyYW5zZm9ybVN0YWNrLmxlbmd0aCA+IDApIHtcblx0XHRcdGdmeC50cmFuc2Zvcm0gPSBnZngudHJhbnNmb3JtU3RhY2sucG9wKClcblx0XHR9XG5cdH1cblxuXHQvLyBkcmF3IGEgdXYgdGV4dHVyZWQgcXVhZFxuXHRmdW5jdGlvbiBkcmF3VVZRdWFkKG9wdDogRHJhd1VWUXVhZE9wdCkge1xuXG5cdFx0aWYgKG9wdC53aWR0aCA9PT0gdW5kZWZpbmVkIHx8IG9wdC5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZHJhd1VWUXVhZCgpIHJlcXVpcmVzIHByb3BlcnR5IFxcXCJ3aWR0aFxcXCIgYW5kIFxcXCJoZWlnaHRcXFwiLlwiKVxuXHRcdH1cblxuXHRcdGlmIChvcHQud2lkdGggPD0gMCB8fCBvcHQuaGVpZ2h0IDw9IDApIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IHcgPSBvcHQud2lkdGhcblx0XHRjb25zdCBoID0gb3B0LmhlaWdodFxuXHRcdGNvbnN0IGFuY2hvciA9IGFuY2hvclB0KG9wdC5hbmNob3IgfHwgREVGX0FOQ0hPUilcblx0XHRjb25zdCBvZmZzZXQgPSBhbmNob3Iuc2NhbGUobmV3IFZlYzIodywgaCkuc2NhbGUoLTAuNSkpXG5cdFx0Y29uc3QgcSA9IG9wdC5xdWFkIHx8IG5ldyBRdWFkKDAsIDAsIDEsIDEpXG5cdFx0Y29uc3QgY29sb3IgPSBvcHQuY29sb3IgfHwgcmdiKDI1NSwgMjU1LCAyNTUpXG5cdFx0Y29uc3Qgb3BhY2l0eSA9IG9wdC5vcGFjaXR5ID8/IDFcblxuXHRcdC8vIGFwcGx5IHV2IHBhZGRpbmcgdG8gYXZvaWQgYXJ0aWZhY3RzXG5cdFx0Y29uc3QgdXZQYWRYID0gb3B0LnRleCA/IFVWX1BBRCAvIG9wdC50ZXgud2lkdGggOiAwXG5cdFx0Y29uc3QgdXZQYWRZID0gb3B0LnRleCA/IFVWX1BBRCAvIG9wdC50ZXguaGVpZ2h0IDogMFxuXHRcdGNvbnN0IHF4ID0gcS54ICsgdXZQYWRYXG5cdFx0Y29uc3QgcXkgPSBxLnkgKyB1dlBhZFlcblx0XHRjb25zdCBxdyA9IHEudyAtIHV2UGFkWCAqIDJcblx0XHRjb25zdCBxaCA9IHEuaCAtIHV2UGFkWSAqIDJcblxuXHRcdHB1c2hUcmFuc2Zvcm0oKVxuXHRcdHB1c2hUcmFuc2xhdGUob3B0LnBvcylcblx0XHRwdXNoUm90YXRlKG9wdC5hbmdsZSlcblx0XHRwdXNoU2NhbGUob3B0LnNjYWxlKVxuXHRcdHB1c2hUcmFuc2xhdGUob2Zmc2V0KVxuXG5cdFx0ZHJhd1JhdyhbXG5cdFx0XHR7XG5cdFx0XHRcdHBvczogbmV3IFZlYzIoLXcgLyAyLCBoIC8gMiksXG5cdFx0XHRcdHV2OiBuZXcgVmVjMihvcHQuZmxpcFggPyBxeCArIHF3IDogcXgsIG9wdC5mbGlwWSA/IHF5IDogcXkgKyBxaCksXG5cdFx0XHRcdGNvbG9yOiBjb2xvcixcblx0XHRcdFx0b3BhY2l0eTogb3BhY2l0eSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBvczogbmV3IFZlYzIoLXcgLyAyLCAtaCAvIDIpLFxuXHRcdFx0XHR1djogbmV3IFZlYzIob3B0LmZsaXBYID8gcXggKyBxdyA6IHF4LCBvcHQuZmxpcFkgPyBxeSArIHFoIDogcXkpLFxuXHRcdFx0XHRjb2xvcjogY29sb3IsXG5cdFx0XHRcdG9wYWNpdHk6IG9wYWNpdHksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwb3M6IG5ldyBWZWMyKHcgLyAyLCAtaCAvIDIpLFxuXHRcdFx0XHR1djogbmV3IFZlYzIob3B0LmZsaXBYID8gcXggOiBxeCArIHF3LCBvcHQuZmxpcFkgPyBxeSArIHFoIDogcXkpLFxuXHRcdFx0XHRjb2xvcjogY29sb3IsXG5cdFx0XHRcdG9wYWNpdHk6IG9wYWNpdHksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwb3M6IG5ldyBWZWMyKHcgLyAyLCBoIC8gMiksXG5cdFx0XHRcdHV2OiBuZXcgVmVjMihvcHQuZmxpcFggPyBxeCA6IHF4ICsgcXcsIG9wdC5mbGlwWSA/IHF5IDogcXkgKyBxaCksXG5cdFx0XHRcdGNvbG9yOiBjb2xvcixcblx0XHRcdFx0b3BhY2l0eTogb3BhY2l0eSxcblx0XHRcdH0sXG5cdFx0XSwgWzAsIDEsIDMsIDEsIDIsIDNdLCBvcHQuZml4ZWQsIG9wdC50ZXgsIG9wdC5zaGFkZXIsIG9wdC51bmlmb3JtKVxuXG5cdFx0cG9wVHJhbnNmb3JtKClcblxuXHR9XG5cblx0Ly8gVE9ETzogY2xlYW5cblx0ZnVuY3Rpb24gZHJhd1RleHR1cmUob3B0OiBEcmF3VGV4dHVyZU9wdCkge1xuXG5cdFx0aWYgKCFvcHQudGV4KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJkcmF3VGV4dHVyZSgpIHJlcXVpcmVzIHByb3BlcnR5IFxcXCJ0ZXhcXFwiLlwiKVxuXHRcdH1cblxuXHRcdGNvbnN0IHEgPSBvcHQucXVhZCA/PyBuZXcgUXVhZCgwLCAwLCAxLCAxKVxuXHRcdGNvbnN0IHcgPSBvcHQudGV4LndpZHRoICogcS53XG5cdFx0Y29uc3QgaCA9IG9wdC50ZXguaGVpZ2h0ICogcS5oXG5cdFx0Y29uc3Qgc2NhbGUgPSBuZXcgVmVjMigxKVxuXG5cdFx0aWYgKG9wdC50aWxlZCkge1xuXG5cdFx0XHQvLyBUT0RPOiBkcmF3IGZyYWN0XG5cdFx0XHRjb25zdCByZXBYID0gTWF0aC5jZWlsKChvcHQud2lkdGggfHwgdykgLyB3KVxuXHRcdFx0Y29uc3QgcmVwWSA9IE1hdGguY2VpbCgob3B0LmhlaWdodCB8fCBoKSAvIGgpXG5cdFx0XHRjb25zdCBhbmNob3IgPSBhbmNob3JQdChvcHQuYW5jaG9yIHx8IERFRl9BTkNIT1IpLmFkZChuZXcgVmVjMigxLCAxKSkuc2NhbGUoMC41KVxuXHRcdFx0Y29uc3Qgb2Zmc2V0ID0gYW5jaG9yLnNjYWxlKHJlcFggKiB3LCByZXBZICogaClcblxuXHRcdFx0Ly8gVE9ETzogcm90YXRpb25cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVwWDsgaSsrKSB7XG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgcmVwWTsgaisrKSB7XG5cdFx0XHRcdFx0ZHJhd1VWUXVhZChPYmplY3QuYXNzaWduKHt9LCBvcHQsIHtcblx0XHRcdFx0XHRcdHBvczogKG9wdC5wb3MgfHwgbmV3IFZlYzIoMCkpLmFkZChuZXcgVmVjMih3ICogaSwgaCAqIGopKS5zdWIob2Zmc2V0KSxcblx0XHRcdFx0XHRcdHNjYWxlOiBzY2FsZS5zY2FsZShvcHQuc2NhbGUgfHwgbmV3IFZlYzIoMSkpLFxuXHRcdFx0XHRcdFx0dGV4OiBvcHQudGV4LFxuXHRcdFx0XHRcdFx0cXVhZDogcSxcblx0XHRcdFx0XHRcdHdpZHRoOiB3LFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBoLFxuXHRcdFx0XHRcdFx0YW5jaG9yOiBcInRvcGxlZnRcIixcblx0XHRcdFx0XHR9KSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIFRPRE86IHNob3VsZCB0aGlzIGlnbm9yZSBzY2FsZT9cblx0XHRcdGlmIChvcHQud2lkdGggJiYgb3B0LmhlaWdodCkge1xuXHRcdFx0XHRzY2FsZS54ID0gb3B0LndpZHRoIC8gd1xuXHRcdFx0XHRzY2FsZS55ID0gb3B0LmhlaWdodCAvIGhcblx0XHRcdH0gZWxzZSBpZiAob3B0LndpZHRoKSB7XG5cdFx0XHRcdHNjYWxlLnggPSBvcHQud2lkdGggLyB3XG5cdFx0XHRcdHNjYWxlLnkgPSBzY2FsZS54XG5cdFx0XHR9IGVsc2UgaWYgKG9wdC5oZWlnaHQpIHtcblx0XHRcdFx0c2NhbGUueSA9IG9wdC5oZWlnaHQgLyBoXG5cdFx0XHRcdHNjYWxlLnggPSBzY2FsZS55XG5cdFx0XHR9XG5cblx0XHRcdGRyYXdVVlF1YWQoT2JqZWN0LmFzc2lnbih7fSwgb3B0LCB7XG5cdFx0XHRcdHNjYWxlOiBzY2FsZS5zY2FsZShvcHQuc2NhbGUgfHwgbmV3IFZlYzIoMSkpLFxuXHRcdFx0XHR0ZXg6IG9wdC50ZXgsXG5cdFx0XHRcdHF1YWQ6IHEsXG5cdFx0XHRcdHdpZHRoOiB3LFxuXHRcdFx0XHRoZWlnaHQ6IGgsXG5cdFx0XHR9KSlcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd1Nwcml0ZShvcHQ6IERyYXdTcHJpdGVPcHQpIHtcblxuXHRcdGlmICghb3B0LnNwcml0ZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZHJhd1Nwcml0ZSgpIHJlcXVpcmVzIHByb3BlcnR5IFxcXCJzcHJpdGVcXFwiXCIpXG5cdFx0fVxuXG5cdFx0Ly8gVE9ETzogc2xvd1xuXHRcdGNvbnN0IHNwciA9IHJlc29sdmVTcHJpdGUob3B0LnNwcml0ZSlcblxuXHRcdGlmICghc3ByIHx8ICFzcHIuZGF0YSkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcSA9IHNwci5kYXRhLmZyYW1lc1tvcHQuZnJhbWUgPz8gMF1cblxuXHRcdGlmICghcSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBGcmFtZSBub3QgZm91bmQ6ICR7b3B0LmZyYW1lID8/IDB9YClcblx0XHR9XG5cblx0XHRkcmF3VGV4dHVyZShPYmplY3QuYXNzaWduKHt9LCBvcHQsIHtcblx0XHRcdHRleDogc3ByLmRhdGEudGV4LFxuXHRcdFx0cXVhZDogcS5zY2FsZShvcHQucXVhZCA/PyBuZXcgUXVhZCgwLCAwLCAxLCAxKSksXG5cdFx0fSkpXG5cblx0fVxuXG5cdC8vIGdlbmVyYXRlIHZlcnRpY2VzIHRvIGZvcm0gYW4gYXJjXG5cdGZ1bmN0aW9uIGdldEFyY1B0cyhcblx0XHRwb3M6IFZlYzIsXG5cdFx0cmFkaXVzWDogbnVtYmVyLFxuXHRcdHJhZGl1c1k6IG51bWJlcixcblx0XHRzdGFydDogbnVtYmVyLFxuXHRcdGVuZDogbnVtYmVyLFxuXHRcdHJlczogbnVtYmVyID0gMSxcblx0KTogVmVjMltdIHtcblxuXHRcdC8vIG5vcm1hbGl6ZSBhbmQgdHVybiBzdGFydCBhbmQgZW5kIGFuZ2xlcyB0byByYWRpYW5zXG5cdFx0c3RhcnQgPSBkZWcycmFkKHN0YXJ0ICUgMzYwKVxuXHRcdGVuZCA9IGRlZzJyYWQoZW5kICUgMzYwKVxuXHRcdGlmIChlbmQgPD0gc3RhcnQpIGVuZCArPSBNYXRoLlBJICogMlxuXG5cdFx0Y29uc3QgcHRzID0gW11cblx0XHRjb25zdCBudmVydHMgPSBNYXRoLmNlaWwoKGVuZCAtIHN0YXJ0KSAvIGRlZzJyYWQoOCkgKiByZXMpXG5cdFx0Y29uc3Qgc3RlcCA9IChlbmQgLSBzdGFydCkgLyBudmVydHNcblxuXHRcdC8vIGNhbGN1bGF0ZSB2ZXJ0aWNlc1xuXHRcdGZvciAobGV0IGEgPSBzdGFydDsgYSA8IGVuZDsgYSArPSBzdGVwKSB7XG5cdFx0XHRwdHMucHVzaChwb3MuYWRkKHJhZGl1c1ggKiBNYXRoLmNvcyhhKSwgcmFkaXVzWSAqIE1hdGguc2luKGEpKSlcblx0XHR9XG5cblx0XHRwdHMucHVzaChwb3MuYWRkKHJhZGl1c1ggKiBNYXRoLmNvcyhlbmQpLCByYWRpdXNZICogTWF0aC5zaW4oZW5kKSkpXG5cblx0XHRyZXR1cm4gcHRzXG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdSZWN0KG9wdDogRHJhd1JlY3RPcHQpIHtcblxuXHRcdGlmIChvcHQud2lkdGggPT09IHVuZGVmaW5lZCB8fCBvcHQuaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImRyYXdSZWN0KCkgcmVxdWlyZXMgcHJvcGVydHkgXFxcIndpZHRoXFxcIiBhbmQgXFxcImhlaWdodFxcXCIuXCIpXG5cdFx0fVxuXG5cdFx0aWYgKG9wdC53aWR0aCA8PSAwIHx8IG9wdC5oZWlnaHQgPD0gMCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0Y29uc3QgdyA9IG9wdC53aWR0aFxuXHRcdGNvbnN0IGggPSBvcHQuaGVpZ2h0XG5cdFx0Y29uc3QgYW5jaG9yID0gYW5jaG9yUHQob3B0LmFuY2hvciB8fCBERUZfQU5DSE9SKS5hZGQoMSwgMSlcblx0XHRjb25zdCBvZmZzZXQgPSBhbmNob3Iuc2NhbGUobmV3IFZlYzIodywgaCkuc2NhbGUoLTAuNSkpXG5cblx0XHRsZXQgcHRzID0gW1xuXHRcdFx0bmV3IFZlYzIoMCwgMCksXG5cdFx0XHRuZXcgVmVjMih3LCAwKSxcblx0XHRcdG5ldyBWZWMyKHcsIGgpLFxuXHRcdFx0bmV3IFZlYzIoMCwgaCksXG5cdFx0XVxuXG5cdFx0Ly8gVE9ETzogZ3JhZGllbnQgZm9yIHJvdW5kZWQgcmVjdFxuXHRcdC8vIFRPRE86IGRyYXdQb2x5Z29uIHNob3VsZCBoYW5kbGUgZ2VuZXJpYyByb3VuZGVkIGNvcm5lcnNcblx0XHRpZiAob3B0LnJhZGl1cykge1xuXG5cdFx0XHQvLyBtYXhpdW0gcmFkaXVzIGlzIGhhbGYgdGhlIHNob3J0ZXN0IHNpZGVcblx0XHRcdGNvbnN0IHIgPSBNYXRoLm1pbihNYXRoLm1pbih3LCBoKSAvIDIsIG9wdC5yYWRpdXMpXG5cblx0XHRcdHB0cyA9IFtcblx0XHRcdFx0bmV3IFZlYzIociwgMCksXG5cdFx0XHRcdG5ldyBWZWMyKHcgLSByLCAwKSxcblx0XHRcdFx0Li4uZ2V0QXJjUHRzKG5ldyBWZWMyKHcgLSByLCByKSwgciwgciwgMjcwLCAzNjApLFxuXHRcdFx0XHRuZXcgVmVjMih3LCByKSxcblx0XHRcdFx0bmV3IFZlYzIodywgaCAtIHIpLFxuXHRcdFx0XHQuLi5nZXRBcmNQdHMobmV3IFZlYzIodyAtIHIsIGggLSByKSwgciwgciwgMCwgOTApLFxuXHRcdFx0XHRuZXcgVmVjMih3IC0gciwgaCksXG5cdFx0XHRcdG5ldyBWZWMyKHIsIGgpLFxuXHRcdFx0XHQuLi5nZXRBcmNQdHMobmV3IFZlYzIociwgaCAtIHIpLCByLCByLCA5MCwgMTgwKSxcblx0XHRcdFx0bmV3IFZlYzIoMCwgaCAtIHIpLFxuXHRcdFx0XHRuZXcgVmVjMigwLCByKSxcblx0XHRcdFx0Li4uZ2V0QXJjUHRzKG5ldyBWZWMyKHIsIHIpLCByLCByLCAxODAsIDI3MCksXG5cdFx0XHRdXG5cblx0XHR9XG5cblx0XHRkcmF3UG9seWdvbihPYmplY3QuYXNzaWduKHt9LCBvcHQsIHtcblx0XHRcdG9mZnNldCxcblx0XHRcdHB0cyxcblx0XHRcdC4uLihvcHQuZ3JhZGllbnQgPyB7XG5cdFx0XHRcdGNvbG9yczogb3B0Lmhvcml6b250YWwgPyBbXG5cdFx0XHRcdFx0b3B0LmdyYWRpZW50WzBdLFxuXHRcdFx0XHRcdG9wdC5ncmFkaWVudFsxXSxcblx0XHRcdFx0XHRvcHQuZ3JhZGllbnRbMV0sXG5cdFx0XHRcdFx0b3B0LmdyYWRpZW50WzBdLFxuXHRcdFx0XHRdIDogW1xuXHRcdFx0XHRcdG9wdC5ncmFkaWVudFswXSxcblx0XHRcdFx0XHRvcHQuZ3JhZGllbnRbMF0sXG5cdFx0XHRcdFx0b3B0LmdyYWRpZW50WzFdLFxuXHRcdFx0XHRcdG9wdC5ncmFkaWVudFsxXSxcblx0XHRcdFx0XSxcblx0XHRcdH0gOiB7fSksXG5cdFx0fSkpXG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdMaW5lKG9wdDogRHJhd0xpbmVPcHQpIHtcblxuXHRcdGNvbnN0IHsgcDEsIHAyIH0gPSBvcHRcblxuXHRcdGlmICghcDEgfHwgIXAyKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJkcmF3TGluZSgpIHJlcXVpcmVzIHByb3BlcnRpZXMgXFxcInAxXFxcIiBhbmQgXFxcInAyXFxcIi5cIilcblx0XHR9XG5cblx0XHRjb25zdCB3ID0gb3B0LndpZHRoIHx8IDFcblxuXHRcdC8vIHRoZSBkaXNwbGFjZW1lbnQgZnJvbSB0aGUgbGluZSBlbmQgcG9pbnQgdG8gdGhlIGNvcm5lciBwb2ludFxuXHRcdGNvbnN0IGRpcyA9IHAyLnN1YihwMSkudW5pdCgpLm5vcm1hbCgpLnNjYWxlKHcgKiAwLjUpXG5cblx0XHQvLyBjYWxjdWxhdGUgdGhlIDQgY29ybmVyIHBvaW50cyBvZiB0aGUgbGluZSBwb2x5Z29uXG5cdFx0Y29uc3QgdmVydHMgPSBbXG5cdFx0XHRwMS5zdWIoZGlzKSxcblx0XHRcdHAxLmFkZChkaXMpLFxuXHRcdFx0cDIuYWRkKGRpcyksXG5cdFx0XHRwMi5zdWIoZGlzKSxcblx0XHRdLm1hcCgocCkgPT4gKHtcblx0XHRcdHBvczogbmV3IFZlYzIocC54LCBwLnkpLFxuXHRcdFx0dXY6IG5ldyBWZWMyKDApLFxuXHRcdFx0Y29sb3I6IG9wdC5jb2xvciA/PyBDb2xvci5XSElURSxcblx0XHRcdG9wYWNpdHk6IG9wdC5vcGFjaXR5ID8/IDEsXG5cdFx0fSkpXG5cblx0XHRkcmF3UmF3KHZlcnRzLCBbMCwgMSwgMywgMSwgMiwgM10sIG9wdC5maXhlZCwgZ2Z4LmRlZlRleCwgb3B0LnNoYWRlciwgb3B0LnVuaWZvcm0pXG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdMaW5lcyhvcHQ6IERyYXdMaW5lc09wdCkge1xuXG5cdFx0Y29uc3QgcHRzID0gb3B0LnB0c1xuXG5cdFx0aWYgKCFwdHMpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImRyYXdMaW5lcygpIHJlcXVpcmVzIHByb3BlcnR5IFxcXCJwdHNcXFwiLlwiKVxuXHRcdH1cblxuXHRcdGlmIChwdHMubGVuZ3RoIDwgMikge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0aWYgKG9wdC5yYWRpdXMgJiYgcHRzLmxlbmd0aCA+PSAzKSB7XG5cblx0XHRcdC8vIFRPRE86IGxpbmUgam9pbmVzXG5cdFx0XHQvLyBUT0RPOiByb3VuZGVkIHZlcnRpY2VzIGZvciBhcmJpdHVyeSBwb2x5Z29uaWMgc2hhcGVcblx0XHRcdGxldCBtaW5TTGVuID0gcHRzWzBdLnNkaXN0KHB0c1sxXSlcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRcdG1pblNMZW4gPSBNYXRoLm1pbihwdHNbaV0uc2Rpc3QocHRzW2kgKyAxXSksIG1pblNMZW4pXG5cdFx0XHR9XG5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHRcdFx0Y29uc3QgcmFkaXVzID0gTWF0aC5taW4ob3B0LnJhZGl1cywgTWF0aC5zcXJ0KG1pblNMZW4pIC8gMilcblxuXHRcdFx0ZHJhd0xpbmUoT2JqZWN0LmFzc2lnbih7fSwgb3B0LCB7IHAxOiBwdHNbMF0sIHAyOiBwdHNbMV0gfSkpXG5cblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aCAtIDI7IGkrKykge1xuXHRcdFx0XHRjb25zdCBwMSA9IHB0c1tpXVxuXHRcdFx0XHRjb25zdCBwMiA9IHB0c1tpICsgMV1cblx0XHRcdFx0ZHJhd0xpbmUoT2JqZWN0LmFzc2lnbih7fSwgb3B0LCB7XG5cdFx0XHRcdFx0cDE6IHAxLFxuXHRcdFx0XHRcdHAyOiBwMixcblx0XHRcdFx0fSkpXG5cdFx0XHR9XG5cblx0XHRcdGRyYXdMaW5lKE9iamVjdC5hc3NpZ24oe30sIG9wdCwge1xuXHRcdFx0XHRwMTogcHRzW3B0cy5sZW5ndGggLSAyXSxcblx0XHRcdFx0cDI6IHB0c1twdHMubGVuZ3RoIC0gMV0sXG5cdFx0XHR9KSlcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0XHRkcmF3TGluZShPYmplY3QuYXNzaWduKHt9LCBvcHQsIHtcblx0XHRcdFx0XHRwMTogcHRzW2ldLFxuXHRcdFx0XHRcdHAyOiBwdHNbaSArIDFdLFxuXHRcdFx0XHR9KSlcblx0XHRcdFx0Ly8gVE9ETzogb3RoZXIgbGluZSBqb2luIHR5cGVzXG5cdFx0XHRcdGlmIChvcHQuam9pbiAhPT0gXCJub25lXCIpIHtcblx0XHRcdFx0XHRkcmF3Q2lyY2xlKE9iamVjdC5hc3NpZ24oe30sIG9wdCwge1xuXHRcdFx0XHRcdFx0cG9zOiBwdHNbaV0sXG5cdFx0XHRcdFx0XHRyYWRpdXM6IG9wdC53aWR0aCAvIDIsXG5cdFx0XHRcdFx0fSkpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd1RyaWFuZ2xlKG9wdDogRHJhd1RyaWFuZ2xlT3B0KSB7XG5cdFx0aWYgKCFvcHQucDEgfHwgIW9wdC5wMiB8fCAhb3B0LnAzKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJkcmF3VHJpYW5nbGUoKSByZXF1aXJlcyBwcm9wZXJ0aWVzIFxcXCJwMVxcXCIsIFxcXCJwMlxcXCIgYW5kIFxcXCJwM1xcXCIuXCIpXG5cdFx0fVxuXHRcdHJldHVybiBkcmF3UG9seWdvbihPYmplY3QuYXNzaWduKHt9LCBvcHQsIHtcblx0XHRcdHB0czogW29wdC5wMSwgb3B0LnAyLCBvcHQucDNdLFxuXHRcdH0pKVxuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd0NpcmNsZShvcHQ6IERyYXdDaXJjbGVPcHQpIHtcblxuXHRcdGlmICh0eXBlb2Ygb3B0LnJhZGl1cyAhPT0gXCJudW1iZXJcIikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZHJhd0NpcmNsZSgpIHJlcXVpcmVzIHByb3BlcnR5IFxcXCJyYWRpdXNcXFwiLlwiKVxuXHRcdH1cblxuXHRcdGlmIChvcHQucmFkaXVzID09PSAwKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRkcmF3RWxsaXBzZShPYmplY3QuYXNzaWduKHt9LCBvcHQsIHtcblx0XHRcdHJhZGl1c1g6IG9wdC5yYWRpdXMsXG5cdFx0XHRyYWRpdXNZOiBvcHQucmFkaXVzLFxuXHRcdFx0YW5nbGU6IDAsXG5cdFx0fSkpXG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdFbGxpcHNlKG9wdDogRHJhd0VsbGlwc2VPcHQpIHtcblxuXHRcdGlmIChvcHQucmFkaXVzWCA9PT0gdW5kZWZpbmVkIHx8IG9wdC5yYWRpdXNZID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImRyYXdFbGxpcHNlKCkgcmVxdWlyZXMgcHJvcGVydGllcyBcXFwicmFkaXVzWFxcXCIgYW5kIFxcXCJyYWRpdXNZXFxcIi5cIilcblx0XHR9XG5cblx0XHRpZiAob3B0LnJhZGl1c1ggPT09IDAgfHwgb3B0LnJhZGl1c1kgPT09IDApIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IHN0YXJ0ID0gb3B0LnN0YXJ0ID8/IDBcblx0XHRjb25zdCBlbmQgPSBvcHQuZW5kID8/IDM2MFxuXHRcdGNvbnN0IG9mZnNldCA9IGFuY2hvclB0KG9wdC5hbmNob3IgPz8gXCJjZW50ZXJcIikuc2NhbGUobmV3IFZlYzIoLW9wdC5yYWRpdXNYLCAtb3B0LnJhZGl1c1kpKVxuXG5cdFx0Y29uc3QgcHRzID0gZ2V0QXJjUHRzKFxuXHRcdFx0b2Zmc2V0LFxuXHRcdFx0b3B0LnJhZGl1c1gsXG5cdFx0XHRvcHQucmFkaXVzWSxcblx0XHRcdHN0YXJ0LFxuXHRcdFx0ZW5kLFxuXHRcdFx0b3B0LnJlc29sdXRpb24sXG5cdFx0KVxuXG5cdFx0Ly8gY2VudGVyXG5cdFx0cHRzLnVuc2hpZnQob2Zmc2V0KVxuXG5cdFx0Y29uc3QgcG9seU9wdCA9IE9iamVjdC5hc3NpZ24oe30sIG9wdCwge1xuXHRcdFx0cHRzLFxuXHRcdFx0cmFkaXVzOiAwLFxuXHRcdFx0Li4uKG9wdC5ncmFkaWVudCA/IHtcblx0XHRcdFx0Y29sb3JzOiBbXG5cdFx0XHRcdFx0b3B0LmdyYWRpZW50WzBdLFxuXHRcdFx0XHRcdC4uLkFycmF5KHB0cy5sZW5ndGggLSAxKS5maWxsKG9wdC5ncmFkaWVudFsxXSksXG5cdFx0XHRcdF0sXG5cdFx0XHR9IDoge30pLFxuXHRcdH0pXG5cblx0XHQvLyBmdWxsIGNpcmNsZSB3aXRoIG91dGxpbmUgc2hvdWxkbid0IGhhdmUgdGhlIGNlbnRlciBwb2ludFxuXHRcdGlmIChlbmQgLSBzdGFydCA+PSAzNjAgJiYgb3B0Lm91dGxpbmUpIHtcblx0XHRcdGlmIChvcHQuZmlsbCAhPT0gZmFsc2UpIHtcblx0XHRcdFx0ZHJhd1BvbHlnb24oT2JqZWN0LmFzc2lnbihwb2x5T3B0LCB7XG5cdFx0XHRcdFx0b3V0bGluZTogbnVsbCxcblx0XHRcdFx0fSkpXG5cdFx0XHR9XG5cdFx0XHRkcmF3UG9seWdvbihPYmplY3QuYXNzaWduKHBvbHlPcHQsIHtcblx0XHRcdFx0cHRzOiBwdHMuc2xpY2UoMSksXG5cdFx0XHRcdGZpbGw6IGZhbHNlLFxuXHRcdFx0fSkpXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRkcmF3UG9seWdvbihwb2x5T3B0KVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3UG9seWdvbihvcHQ6IERyYXdQb2x5Z29uT3B0KSB7XG5cblx0XHRpZiAoIW9wdC5wdHMpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImRyYXdQb2x5Z29uKCkgcmVxdWlyZXMgcHJvcGVydHkgXFxcInB0c1xcXCIuXCIpXG5cdFx0fVxuXG5cdFx0Y29uc3QgbnB0cyA9IG9wdC5wdHMubGVuZ3RoXG5cblx0XHRpZiAobnB0cyA8IDMpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdHB1c2hUcmFuc2Zvcm0oKVxuXHRcdHB1c2hUcmFuc2xhdGUob3B0LnBvcylcblx0XHRwdXNoU2NhbGUob3B0LnNjYWxlKVxuXHRcdHB1c2hSb3RhdGUob3B0LmFuZ2xlKVxuXHRcdHB1c2hUcmFuc2xhdGUob3B0Lm9mZnNldClcblxuXHRcdGlmIChvcHQuZmlsbCAhPT0gZmFsc2UpIHtcblxuXHRcdFx0Y29uc3QgY29sb3IgPSBvcHQuY29sb3IgPz8gQ29sb3IuV0hJVEVcblxuXHRcdFx0Y29uc3QgdmVydHMgPSBvcHQucHRzLm1hcCgocHQsIGkpID0+ICh7XG5cdFx0XHRcdHBvczogbmV3IFZlYzIocHQueCwgcHQueSksXG5cdFx0XHRcdHV2OiBuZXcgVmVjMigwLCAwKSxcblx0XHRcdFx0Y29sb3I6IG9wdC5jb2xvcnMgPyAob3B0LmNvbG9yc1tpXSA/IG9wdC5jb2xvcnNbaV0ubXVsdChjb2xvcikgOiBjb2xvcikgOiBjb2xvcixcblx0XHRcdFx0b3BhY2l0eTogb3B0Lm9wYWNpdHkgPz8gMSxcblx0XHRcdH0pKVxuXG5cdFx0XHQvLyBUT0RPOiBiZXR0ZXIgdHJpYW5ndWxhdGlvblxuXHRcdFx0Y29uc3QgaW5kaWNlcyA9IFsuLi5BcnJheShucHRzIC0gMikua2V5cygpXVxuXHRcdFx0XHQubWFwKChuKSA9PiBbMCwgbiArIDEsIG4gKyAyXSlcblx0XHRcdFx0LmZsYXQoKVxuXG5cdFx0XHRkcmF3UmF3KHZlcnRzLCBvcHQuaW5kaWNlcyA/PyBpbmRpY2VzLCBvcHQuZml4ZWQsIGdmeC5kZWZUZXgsIG9wdC5zaGFkZXIsIG9wdC51bmlmb3JtKVxuXG5cdFx0fVxuXG5cdFx0aWYgKG9wdC5vdXRsaW5lKSB7XG5cdFx0XHRkcmF3TGluZXMoe1xuXHRcdFx0XHRwdHM6IFsgLi4ub3B0LnB0cywgb3B0LnB0c1swXSBdLFxuXHRcdFx0XHRyYWRpdXM6IG9wdC5yYWRpdXMsXG5cdFx0XHRcdHdpZHRoOiBvcHQub3V0bGluZS53aWR0aCxcblx0XHRcdFx0Y29sb3I6IG9wdC5vdXRsaW5lLmNvbG9yLFxuXHRcdFx0XHRqb2luOiBvcHQub3V0bGluZS5qb2luLFxuXHRcdFx0XHR1bmlmb3JtOiBvcHQudW5pZm9ybSxcblx0XHRcdFx0Zml4ZWQ6IG9wdC5maXhlZCxcblx0XHRcdFx0b3BhY2l0eTogb3B0Lm9wYWNpdHksXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHBvcFRyYW5zZm9ybSgpXG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdTdGVuY2lsZWQoY29udGVudDogKCkgPT4gdm9pZCwgbWFzazogKCkgPT4gdm9pZCwgdGVzdDogbnVtYmVyKSB7XG5cblx0XHRmbHVzaCgpXG5cdFx0Z2wuY2xlYXIoZ2wuU1RFTkNJTF9CVUZGRVJfQklUKVxuXHRcdGdsLmVuYWJsZShnbC5TVEVOQ0lMX1RFU1QpXG5cblx0XHQvLyBkb24ndCBwZXJmb3JtIHRlc3QsIHB1cmUgd3JpdGVcblx0XHRnbC5zdGVuY2lsRnVuYyhcblx0XHRcdGdsLk5FVkVSLFxuXHRcdFx0MSxcblx0XHRcdDB4RkYsXG5cdFx0KVxuXG5cdFx0Ly8gYWx3YXlzIHJlcGxhY2Ugc2luY2Ugd2UncmUgd3JpdGluZyB0byB0aGUgYnVmZmVyXG5cdFx0Z2wuc3RlbmNpbE9wKFxuXHRcdFx0Z2wuUkVQTEFDRSxcblx0XHRcdGdsLlJFUExBQ0UsXG5cdFx0XHRnbC5SRVBMQUNFLFxuXHRcdClcblxuXHRcdG1hc2soKVxuXHRcdGZsdXNoKClcblxuXHRcdC8vIHBlcmZvcm0gdGVzdFxuXHRcdGdsLnN0ZW5jaWxGdW5jKFxuXHRcdFx0dGVzdCxcblx0XHRcdDEsXG5cdFx0XHQweEZGLFxuXHRcdClcblxuXHRcdC8vIGRvbid0IHdyaXRlIHNpbmNlIHdlJ3JlIG9ubHkgdGVzdGluZ1xuXHRcdGdsLnN0ZW5jaWxPcChcblx0XHRcdGdsLktFRVAsXG5cdFx0XHRnbC5LRUVQLFxuXHRcdFx0Z2wuS0VFUCxcblx0XHQpXG5cblx0XHRjb250ZW50KClcblx0XHRmbHVzaCgpXG5cdFx0Z2wuZGlzYWJsZShnbC5TVEVOQ0lMX1RFU1QpXG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdNYXNrZWQoY29udGVudDogKCkgPT4gdm9pZCwgbWFzazogKCkgPT4gdm9pZCkge1xuXHRcdGRyYXdTdGVuY2lsZWQoY29udGVudCwgbWFzaywgZ2wuRVFVQUwpXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3U3VidHJhY3RlZChjb250ZW50OiAoKSA9PiB2b2lkLCBtYXNrOiAoKSA9PiB2b2lkKSB7XG5cdFx0ZHJhd1N0ZW5jaWxlZChjb250ZW50LCBtYXNrLCBnbC5OT1RFUVVBTClcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFZpZXdwb3J0U2NhbGUoKSB7XG5cdFx0cmV0dXJuIChnZngudmlld3BvcnQud2lkdGggKyBnZngudmlld3BvcnQuaGVpZ2h0KSAvIChnZngud2lkdGggKyBnZnguaGVpZ2h0KVxuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd1Vuc2NhbGVkKGNvbnRlbnQ6ICgpID0+IHZvaWQpIHtcblx0XHRmbHVzaCgpXG5cdFx0Y29uc3Qgb3cgPSBnZngud2lkdGhcblx0XHRjb25zdCBvaCA9IGdmeC5oZWlnaHRcblx0XHRnZngud2lkdGggPSBnZngudmlld3BvcnQud2lkdGhcblx0XHRnZnguaGVpZ2h0ID0gZ2Z4LnZpZXdwb3J0LmhlaWdodFxuXHRcdGNvbnRlbnQoKVxuXHRcdGZsdXNoKClcblx0XHRnZngud2lkdGggPSBvd1xuXHRcdGdmeC5oZWlnaHQgPSBvaFxuXHR9XG5cblx0ZnVuY3Rpb24gYXBwbHlDaGFyVHJhbnNmb3JtKGZjaGFyOiBGb3JtYXR0ZWRDaGFyLCB0cjogQ2hhclRyYW5zZm9ybSkge1xuXHRcdGlmICh0ci5wb3MpIGZjaGFyLnBvcyA9IGZjaGFyLnBvcy5hZGQodHIucG9zKVxuXHRcdGlmICh0ci5zY2FsZSkgZmNoYXIuc2NhbGUgPSBmY2hhci5zY2FsZS5zY2FsZSh2ZWMyKHRyLnNjYWxlKSlcblx0XHRpZiAodHIuYW5nbGUpIGZjaGFyLmFuZ2xlICs9IHRyLmFuZ2xlXG5cdFx0aWYgKHRyLmNvbG9yICYmIGZjaGFyLmNoLmxlbmd0aCA9PT0gMSkgZmNoYXIuY29sb3IgPSBmY2hhci5jb2xvci5tdWx0KHRyLmNvbG9yKVxuXHRcdGlmICh0ci5vcGFjaXR5KSBmY2hhci5vcGFjaXR5ICo9IHRyLm9wYWNpdHlcblx0fVxuXG5cdC8vIFRPRE86IGVzY2FwZVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblx0Y29uc3QgVEVYVF9TVFlMRV9SRSA9IC9cXFsoPzxzdHlsZT5cXHcrKVxcXSg/PHRleHQ+Lio/KVxcW1xcL1xcazxzdHlsZT5cXF0vZ1xuXG5cdC8vIFRPRE86IGhhbmRsZSBuZXN0ZWRcblx0ZnVuY3Rpb24gY29tcGlsZVN0eWxlZFRleHQodGV4dDogc3RyaW5nKToge1xuXHRcdGNoYXJTdHlsZU1hcDogUmVjb3JkPG51bWJlciwgc3RyaW5nW10+LFxuXHRcdHRleHQ6IHN0cmluZyxcblx0fSB7XG5cblx0XHRjb25zdCBjaGFyU3R5bGVNYXAgPSB7fVxuXHRcdC8vIGdldCB0aGUgdGV4dCB3aXRob3V0IHRoZSBzdHlsaW5nIHN5bnRheFxuXHRcdGNvbnN0IHJlbmRlclRleHQgPSB0ZXh0LnJlcGxhY2UoVEVYVF9TVFlMRV9SRSwgXCIkMlwiKVxuXHRcdGxldCBpZHhPZmZzZXQgPSAwXG5cblx0XHQvLyBwdXQgZWFjaCBzdHlsZWQgY2hhciBpbmRleCBpbnRvIGEgbWFwIGZvciBlYXN5IGFjY2VzcyB3aGVuIGl0ZXJhdGluZyBlYWNoIGNoYXJcblx0XHRmb3IgKGNvbnN0IG1hdGNoIG9mIHRleHQubWF0Y2hBbGwoVEVYVF9TVFlMRV9SRSkpIHtcblx0XHRcdGNvbnN0IG9yaWdJZHggPSBtYXRjaC5pbmRleCAtIGlkeE9mZnNldFxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaC5ncm91cHMudGV4dC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjaGFyU3R5bGVNYXBbaSArIG9yaWdJZHhdID0gW21hdGNoLmdyb3Vwcy5zdHlsZV1cblx0XHRcdH1cblx0XHRcdC8vIG9taXQgdGhlIHN0eWxlIHN5bnRheCBpbiBmb3JtYXQgc3RyaW5nIHdoZW4gY2FsY3VsYXRpbmcgaW5kZXhcblx0XHRcdGlkeE9mZnNldCArPSBtYXRjaFswXS5sZW5ndGggLSBtYXRjaC5ncm91cHMudGV4dC5sZW5ndGhcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhclN0eWxlTWFwOiBjaGFyU3R5bGVNYXAsXG5cdFx0XHR0ZXh0OiByZW5kZXJUZXh0LFxuXHRcdH1cblxuXHR9XG5cblx0dHlwZSBGb250QXRsYXMgPSB7XG5cdFx0Zm9udDogQml0bWFwRm9udERhdGEsXG5cdFx0Y3Vyc29yOiBWZWMyLFxuXHRcdG91dGxpbmU6IE91dGxpbmUgfCBudWxsLFxuXHR9XG5cblx0Y29uc3QgZm9udEF0bGFzZXM6IFJlY29yZDxzdHJpbmcsIEZvbnRBdGxhcz4gPSB7fVxuXG5cdC8vIFRPRE86IGNhY2hlIGZvcm1hdHRlZCB0ZXh0XG5cdC8vIGZvcm1hdCB0ZXh0IGFuZCByZXR1cm4gYSBsaXN0IG9mIGNoYXJzIHdpdGggdGhlaXIgY2FsY3VsYXRlZCBwb3NpdGlvblxuXHRmdW5jdGlvbiBmb3JtYXRUZXh0KG9wdDogRHJhd1RleHRPcHQpOiBGb3JtYXR0ZWRUZXh0IHtcblxuXHRcdGlmIChvcHQudGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJmb3JtYXRUZXh0KCkgcmVxdWlyZXMgcHJvcGVydHkgXFxcInRleHRcXFwiLlwiKVxuXHRcdH1cblxuXHRcdGxldCBmb250ID0gcmVzb2x2ZUZvbnQob3B0LmZvbnQpXG5cblx0XHQvLyBpZiBpdCdzIHN0aWxsIGxvYWRpbmdcblx0XHRpZiAob3B0LnRleHQgPT09IFwiXCIgfHwgZm9udCBpbnN0YW5jZW9mIEFzc2V0IHx8ICFmb250KSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR3aWR0aDogMCxcblx0XHRcdFx0aGVpZ2h0OiAwLFxuXHRcdFx0XHRjaGFyczogW10sXG5cdFx0XHRcdG9wdDogb3B0LFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IHsgY2hhclN0eWxlTWFwLCB0ZXh0IH0gPSBjb21waWxlU3R5bGVkVGV4dChvcHQudGV4dCArIFwiXCIpXG5cdFx0Y29uc3QgY2hhcnMgPSBydW5lcyh0ZXh0KVxuXG5cdFx0Ly8gaWYgaXQncyBub3QgYml0bWFwIGZvbnQsIHdlIGRyYXcgaXQgd2l0aCAyZCBjYW52YXMgb3IgdXNlIGNhY2hlZCBpbWFnZVxuXHRcdGlmIChmb250IGluc3RhbmNlb2YgRm9udERhdGEgfHwgdHlwZW9mIGZvbnQgPT09IFwic3RyaW5nXCIpIHtcblxuXHRcdFx0Y29uc3QgZm9udE5hbWUgPSBmb250IGluc3RhbmNlb2YgRm9udERhdGEgPyBmb250LmZvbnRmYWNlLmZhbWlseSA6IGZvbnRcblx0XHRcdGNvbnN0IG9wdHM6IHtcblx0XHRcdFx0b3V0bGluZTogT3V0bGluZSB8IG51bGwsXG5cdFx0XHRcdGZpbHRlcjogVGV4RmlsdGVyLFxuXHRcdFx0fSA9IGZvbnQgaW5zdGFuY2VvZiBGb250RGF0YSA/IHtcblx0XHRcdFx0b3V0bGluZTogZm9udC5vdXRsaW5lLFxuXHRcdFx0XHRmaWx0ZXI6IGZvbnQuZmlsdGVyLFxuXHRcdFx0fSA6IHtcblx0XHRcdFx0b3V0bGluZTogbnVsbCxcblx0XHRcdFx0ZmlsdGVyOiBERUZfRk9OVF9GSUxURVIsXG5cdFx0XHR9XG5cblx0XHRcdC8vIFRPRE86IGN1c3RvbWl6YWJsZSBmb250IHRleCBmaWx0ZXJcblx0XHRcdGNvbnN0IGF0bGFzOiBGb250QXRsYXMgPSBmb250QXRsYXNlc1tmb250TmFtZV0gPz8ge1xuXHRcdFx0XHRmb250OiB7XG5cdFx0XHRcdFx0dGV4OiBuZXcgVGV4dHVyZShnZ2wsIEZPTlRfQVRMQVNfV0lEVEgsIEZPTlRfQVRMQVNfSEVJR0hULCB7XG5cdFx0XHRcdFx0XHRmaWx0ZXI6IG9wdHMuZmlsdGVyLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdG1hcDoge30sXG5cdFx0XHRcdFx0c2l6ZTogREVGX1RFWFRfQ0FDSEVfU0laRSxcblx0XHRcdFx0fSxcblx0XHRcdFx0Y3Vyc29yOiBuZXcgVmVjMigwKSxcblx0XHRcdFx0b3V0bGluZTogb3B0cy5vdXRsaW5lLFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWZvbnRBdGxhc2VzW2ZvbnROYW1lXSkge1xuXHRcdFx0XHRmb250QXRsYXNlc1tmb250TmFtZV0gPSBhdGxhc1xuXHRcdFx0fVxuXG5cdFx0XHRmb250ID0gYXRsYXMuZm9udFxuXG5cdFx0XHRmb3IgKGNvbnN0IGNoIG9mIGNoYXJzKSB7XG5cblx0XHRcdFx0aWYgKCFhdGxhcy5mb250Lm1hcFtjaF0pIHtcblxuXHRcdFx0XHRcdC8vIFRPRE86IHVzZSBhc3NldHMucGFja2VyIHRvIHBhY2sgZm9udCB0ZXh0dXJlXG5cdFx0XHRcdFx0Y29uc3QgYzJkID0gZm9udENhY2hlQzJkXG5cdFx0XHRcdFx0YzJkLmNsZWFyUmVjdCgwLCAwLCBmb250Q2FjaGVDYW52YXMud2lkdGgsIGZvbnRDYWNoZUNhbnZhcy5oZWlnaHQpXG5cdFx0XHRcdFx0YzJkLmZvbnQgPSBgJHtmb250LnNpemV9cHggJHtmb250TmFtZX1gXG5cdFx0XHRcdFx0YzJkLnRleHRCYXNlbGluZSA9IFwidG9wXCJcblx0XHRcdFx0XHRjMmQudGV4dEFsaWduID0gXCJsZWZ0XCJcblx0XHRcdFx0XHRjMmQuZmlsbFN0eWxlID0gXCIjZmZmZmZmXCJcblx0XHRcdFx0XHRjb25zdCBtID0gYzJkLm1lYXN1cmVUZXh0KGNoKVxuXHRcdFx0XHRcdGxldCB3ID0gTWF0aC5jZWlsKG0ud2lkdGgpXG5cdFx0XHRcdFx0bGV0IGggPSBmb250LnNpemVcblx0XHRcdFx0XHRpZiAoYXRsYXMub3V0bGluZSkge1xuXHRcdFx0XHRcdFx0YzJkLmxpbmVKb2luID0gXCJyb3VuZFwiXG5cdFx0XHRcdFx0XHRjMmQubGluZVdpZHRoID0gYXRsYXMub3V0bGluZS53aWR0aCAqIDJcblx0XHRcdFx0XHRcdGMyZC5zdHJva2VTdHlsZSA9IGF0bGFzLm91dGxpbmUuY29sb3IudG9IZXgoKVxuXHRcdFx0XHRcdFx0YzJkLnN0cm9rZVRleHQoY2gsIGF0bGFzLm91dGxpbmUud2lkdGgsIGF0bGFzLm91dGxpbmUud2lkdGgpXG5cdFx0XHRcdFx0XHR3ICs9IGF0bGFzLm91dGxpbmUud2lkdGggKiAyXG5cdFx0XHRcdFx0XHRoICs9IGF0bGFzLm91dGxpbmUud2lkdGggKiAzXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGMyZC5maWxsVGV4dChjaCwgYXRsYXMub3V0bGluZT8ud2lkdGggPz8gMCwgYXRsYXMub3V0bGluZT8ud2lkdGggPz8gMClcblxuXHRcdFx0XHRcdGNvbnN0IGltZyA9IGMyZC5nZXRJbWFnZURhdGEoMCwgMCwgdywgaClcblxuXHRcdFx0XHRcdC8vIGlmIHdlIGFyZSBhYm91dCB0byBleGNlZWQgdGhlIFggYXhpcyBvZiB0aGUgdGV4dHVyZSwgZ28gdG8gYW5vdGhlciBsaW5lXG5cdFx0XHRcdFx0aWYgKGF0bGFzLmN1cnNvci54ICsgdyA+IEZPTlRfQVRMQVNfV0lEVEgpIHtcblx0XHRcdFx0XHRcdGF0bGFzLmN1cnNvci54ID0gMFxuXHRcdFx0XHRcdFx0YXRsYXMuY3Vyc29yLnkgKz0gaFxuXHRcdFx0XHRcdFx0aWYgKGF0bGFzLmN1cnNvci55ID4gRk9OVF9BVExBU19IRUlHSFQpIHtcblx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogY3JlYXRlIGFub3RoZXIgYXRsYXNcblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRm9udCBhdGxhcyBleGNlZWRzIGNoYXJhY3RlciBsaW1pdFwiKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGZvbnQudGV4LnVwZGF0ZShpbWcsIGF0bGFzLmN1cnNvci54LCBhdGxhcy5jdXJzb3IueSlcblx0XHRcdFx0XHRmb250Lm1hcFtjaF0gPSBuZXcgUXVhZChhdGxhcy5jdXJzb3IueCwgYXRsYXMuY3Vyc29yLnksIHcsIGgpXG5cdFx0XHRcdFx0YXRsYXMuY3Vyc29yLnggKz0gd1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2l6ZSA9IG9wdC5zaXplIHx8IGZvbnQuc2l6ZVxuXHRcdGNvbnN0IHNjYWxlID0gdmVjMihvcHQuc2NhbGUgPz8gMSkuc2NhbGUoc2l6ZSAvIGZvbnQuc2l6ZSlcblx0XHRjb25zdCBsaW5lU3BhY2luZyA9IG9wdC5saW5lU3BhY2luZyA/PyAwXG5cdFx0Y29uc3QgbGV0dGVyU3BhY2luZyA9IG9wdC5sZXR0ZXJTcGFjaW5nID8/IDBcblx0XHRsZXQgY3VyWCA9IDBcblx0XHRsZXQgdHcgPSAwXG5cdFx0bGV0IHRoID0gMFxuXHRcdGNvbnN0IGxpbmVzOiBBcnJheTx7XG5cdFx0XHR3aWR0aDogbnVtYmVyLFxuXHRcdFx0Y2hhcnM6IEZvcm1hdHRlZENoYXJbXSxcblx0XHR9PiA9IFtdXG5cdFx0bGV0IGN1ckxpbmU6IEZvcm1hdHRlZENoYXJbXSA9IFtdXG5cdFx0bGV0IGN1cnNvciA9IDBcblx0XHRsZXQgbGFzdFNwYWNlID0gbnVsbFxuXHRcdGxldCBsYXN0U3BhY2VXaWR0aCA9IG51bGxcblxuXHRcdC8vIFRPRE86IHdvcmQgYnJlYWtcblx0XHR3aGlsZSAoY3Vyc29yIDwgY2hhcnMubGVuZ3RoKSB7XG5cblx0XHRcdGxldCBjaCA9IGNoYXJzW2N1cnNvcl1cblxuXHRcdFx0Ly8gYWx3YXlzIG5ldyBsaW5lIG9uICdcXG4nXG5cdFx0XHRpZiAoY2ggPT09IFwiXFxuXCIpIHtcblxuXHRcdFx0XHR0aCArPSBzaXplICsgbGluZVNwYWNpbmdcblxuXHRcdFx0XHRsaW5lcy5wdXNoKHtcblx0XHRcdFx0XHR3aWR0aDogY3VyWCAtIGxldHRlclNwYWNpbmcsXG5cdFx0XHRcdFx0Y2hhcnM6IGN1ckxpbmUsXG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0bGFzdFNwYWNlID0gbnVsbFxuXHRcdFx0XHRsYXN0U3BhY2VXaWR0aCA9IG51bGxcblx0XHRcdFx0Y3VyWCA9IDBcblx0XHRcdFx0Y3VyTGluZSA9IFtdXG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bGV0IHEgPSBmb250Lm1hcFtjaF1cblxuXHRcdFx0XHQvLyBUT0RPOiBsZWF2ZSBzcGFjZSBpZiBjaGFyYWN0ZXIgbm90IGZvdW5kP1xuXHRcdFx0XHRpZiAocSkge1xuXG5cdFx0XHRcdFx0bGV0IGd3ID0gcS53ICogc2NhbGUueFxuXG5cdFx0XHRcdFx0aWYgKG9wdC53aWR0aCAmJiBjdXJYICsgZ3cgPiBvcHQud2lkdGgpIHtcblx0XHRcdFx0XHRcdC8vIG5ldyBsaW5lIG9uIGxhc3Qgd29yZCBpZiB3aWR0aCBleGNlZWRzXG5cdFx0XHRcdFx0XHR0aCArPSBzaXplICsgbGluZVNwYWNpbmdcblx0XHRcdFx0XHRcdGlmIChsYXN0U3BhY2UgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRjdXJzb3IgLT0gY3VyTGluZS5sZW5ndGggLSBsYXN0U3BhY2Vcblx0XHRcdFx0XHRcdFx0Y2ggPSBjaGFyc1tjdXJzb3JdXG5cdFx0XHRcdFx0XHRcdHEgPSBmb250Lm1hcFtjaF1cblx0XHRcdFx0XHRcdFx0Z3cgPSBxLncgKiBzY2FsZS54XG5cdFx0XHRcdFx0XHRcdC8vIG9taXQgdHJhaWxpbmcgc3BhY2Vcblx0XHRcdFx0XHRcdFx0Y3VyTGluZSA9IGN1ckxpbmUuc2xpY2UoMCwgbGFzdFNwYWNlIC0gMSlcblx0XHRcdFx0XHRcdFx0Y3VyWCA9IGxhc3RTcGFjZVdpZHRoXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsYXN0U3BhY2UgPSBudWxsXG5cdFx0XHRcdFx0XHRsYXN0U3BhY2VXaWR0aCA9IG51bGxcblx0XHRcdFx0XHRcdGxpbmVzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogY3VyWCAtIGxldHRlclNwYWNpbmcsXG5cdFx0XHRcdFx0XHRcdGNoYXJzOiBjdXJMaW5lLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdGN1clggPSAwXG5cdFx0XHRcdFx0XHRjdXJMaW5lID0gW11cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBwdXNoIGNoYXJcblx0XHRcdFx0XHRjdXJMaW5lLnB1c2goe1xuXHRcdFx0XHRcdFx0dGV4OiBmb250LnRleCxcblx0XHRcdFx0XHRcdHdpZHRoOiBxLncsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IHEuaCxcblx0XHRcdFx0XHRcdC8vIHdpdGhvdXQgc29tZSBwYWRkaW5nIHRoZXJlJ2xsIGJlIHZpc3VhbCBhcnRpZmFjdHMgb24gZWRnZXNcblx0XHRcdFx0XHRcdHF1YWQ6IG5ldyBRdWFkKFxuXHRcdFx0XHRcdFx0XHRxLnggLyBmb250LnRleC53aWR0aCxcblx0XHRcdFx0XHRcdFx0cS55IC8gZm9udC50ZXguaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRxLncgLyBmb250LnRleC53aWR0aCxcblx0XHRcdFx0XHRcdFx0cS5oIC8gZm9udC50ZXguaGVpZ2h0LFxuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdGNoOiBjaCxcblx0XHRcdFx0XHRcdHBvczogbmV3IFZlYzIoY3VyWCwgdGgpLFxuXHRcdFx0XHRcdFx0b3BhY2l0eTogb3B0Lm9wYWNpdHkgPz8gMSxcblx0XHRcdFx0XHRcdGNvbG9yOiBvcHQuY29sb3IgPz8gQ29sb3IuV0hJVEUsXG5cdFx0XHRcdFx0XHRzY2FsZTogdmVjMihzY2FsZSksXG5cdFx0XHRcdFx0XHRhbmdsZTogMCxcblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0aWYgKGNoID09PSBcIiBcIikge1xuXHRcdFx0XHRcdFx0bGFzdFNwYWNlID0gY3VyTGluZS5sZW5ndGhcblx0XHRcdFx0XHRcdGxhc3RTcGFjZVdpZHRoID0gY3VyWFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGN1clggKz0gZ3dcblx0XHRcdFx0XHR0dyA9IE1hdGgubWF4KHR3LCBjdXJYKVxuXHRcdFx0XHRcdGN1clggKz0gbGV0dGVyU3BhY2luZ1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRjdXJzb3IrK1xuXG5cdFx0fVxuXG5cdFx0bGluZXMucHVzaCh7XG5cdFx0XHR3aWR0aDogY3VyWCAtIGxldHRlclNwYWNpbmcsXG5cdFx0XHRjaGFyczogY3VyTGluZSxcblx0XHR9KVxuXG5cdFx0dGggKz0gc2l6ZVxuXG5cdFx0aWYgKG9wdC53aWR0aCkge1xuXHRcdFx0dHcgPSBvcHQud2lkdGhcblx0XHR9XG5cblx0XHRjb25zdCBmY2hhcnM6IEZvcm1hdHRlZENoYXJbXSA9IFtdXG5cblx0XHRmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcblxuXHRcdFx0Y29uc3Qgb3ggPSAodHcgLSBsaW5lLndpZHRoKSAqIGFsaWduUHQob3B0LmFsaWduID8/IFwibGVmdFwiKVxuXG5cdFx0XHRmb3IgKGNvbnN0IGZjaGFyIG9mIGxpbmUuY2hhcnMpIHtcblxuXHRcdFx0XHRjb25zdCBxID0gZm9udC5tYXBbZmNoYXIuY2hdXG5cdFx0XHRcdGNvbnN0IGlkeCA9IGZjaGFycy5sZW5ndGhcblxuXHRcdFx0XHRmY2hhci5wb3MgPSBmY2hhci5wb3MuYWRkKG94LCAwKS5hZGQoXG5cdFx0XHRcdFx0cS53ICogc2NhbGUueCAqIDAuNSxcblx0XHRcdFx0XHRxLmggKiBzY2FsZS55ICogMC41LFxuXHRcdFx0XHQpXG5cblx0XHRcdFx0aWYgKG9wdC50cmFuc2Zvcm0pIHtcblx0XHRcdFx0XHRjb25zdCB0ciA9IHR5cGVvZiBvcHQudHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHRcdD8gb3B0LnRyYW5zZm9ybShpZHgsIGZjaGFyLmNoKVxuXHRcdFx0XHRcdFx0OiBvcHQudHJhbnNmb3JtXG5cdFx0XHRcdFx0aWYgKHRyKSB7XG5cdFx0XHRcdFx0XHRhcHBseUNoYXJUcmFuc2Zvcm0oZmNoYXIsIHRyKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjaGFyU3R5bGVNYXBbaWR4XSkge1xuXHRcdFx0XHRcdGNvbnN0IHN0eWxlcyA9IGNoYXJTdHlsZU1hcFtpZHhdXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBuYW1lIG9mIHN0eWxlcykge1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3R5bGUgPSBvcHQuc3R5bGVzW25hbWVdXG5cdFx0XHRcdFx0XHRjb25zdCB0ciA9IHR5cGVvZiBzdHlsZSA9PT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0XHRcdD8gc3R5bGUoaWR4LCBmY2hhci5jaClcblx0XHRcdFx0XHRcdFx0OiBzdHlsZVxuXHRcdFx0XHRcdFx0aWYgKHRyKSB7XG5cdFx0XHRcdFx0XHRcdGFwcGx5Q2hhclRyYW5zZm9ybShmY2hhciwgdHIpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZmNoYXJzLnB1c2goZmNoYXIpXG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogdHcsXG5cdFx0XHRoZWlnaHQ6IHRoLFxuXHRcdFx0Y2hhcnM6IGZjaGFycyxcblx0XHRcdG9wdDogb3B0LFxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd1RleHQob3B0OiBEcmF3VGV4dE9wdCkge1xuXHRcdGRyYXdGb3JtYXR0ZWRUZXh0KGZvcm1hdFRleHQob3B0KSlcblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdGb3JtYXR0ZWRUZXh0KGZ0ZXh0OiBGb3JtYXR0ZWRUZXh0KSB7XG5cdFx0cHVzaFRyYW5zZm9ybSgpXG5cdFx0cHVzaFRyYW5zbGF0ZShmdGV4dC5vcHQucG9zKVxuXHRcdHB1c2hSb3RhdGUoZnRleHQub3B0LmFuZ2xlKVxuXHRcdHB1c2hUcmFuc2xhdGUoYW5jaG9yUHQoZnRleHQub3B0LmFuY2hvciA/PyBcInRvcGxlZnRcIikuYWRkKDEsIDEpLnNjYWxlKGZ0ZXh0LndpZHRoLCBmdGV4dC5oZWlnaHQpLnNjYWxlKC0wLjUpKVxuXHRcdGZ0ZXh0LmNoYXJzLmZvckVhY2goKGNoKSA9PiB7XG5cdFx0XHRkcmF3VVZRdWFkKHtcblx0XHRcdFx0dGV4OiBjaC50ZXgsXG5cdFx0XHRcdHdpZHRoOiBjaC53aWR0aCxcblx0XHRcdFx0aGVpZ2h0OiBjaC5oZWlnaHQsXG5cdFx0XHRcdHBvczogY2gucG9zLFxuXHRcdFx0XHRzY2FsZTogY2guc2NhbGUsXG5cdFx0XHRcdGFuZ2xlOiBjaC5hbmdsZSxcblx0XHRcdFx0Y29sb3I6IGNoLmNvbG9yLFxuXHRcdFx0XHRvcGFjaXR5OiBjaC5vcGFjaXR5LFxuXHRcdFx0XHRxdWFkOiBjaC5xdWFkLFxuXHRcdFx0XHRhbmNob3I6IFwiY2VudGVyXCIsXG5cdFx0XHRcdHVuaWZvcm06IGZ0ZXh0Lm9wdC51bmlmb3JtLFxuXHRcdFx0XHRzaGFkZXI6IGZ0ZXh0Lm9wdC5zaGFkZXIsXG5cdFx0XHRcdGZpeGVkOiBmdGV4dC5vcHQuZml4ZWQsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0cG9wVHJhbnNmb3JtKClcblx0fVxuXG5cdC8vIGdldCBnYW1lIHdpZHRoXG5cdGZ1bmN0aW9uIHdpZHRoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIGdmeC53aWR0aFxuXHR9XG5cblx0Ly8gZ2V0IGdhbWUgaGVpZ2h0XG5cdGZ1bmN0aW9uIGhlaWdodCgpOiBudW1iZXIge1xuXHRcdHJldHVybiBnZnguaGVpZ2h0XG5cdH1cblxuXHQvLyB0cmFuc2Zvcm0gYSBwb2ludCBmcm9tIHdpbmRvdyBzcGFjZSB0byBjb250ZW50IHNwYWNlXG5cdGZ1bmN0aW9uIHdpbmRvd1RvQ29udGVudChwdDogVmVjMikge1xuXHRcdHJldHVybiBuZXcgVmVjMihcblx0XHRcdChwdC54IC0gZ2Z4LnZpZXdwb3J0LngpICogd2lkdGgoKSAvIGdmeC52aWV3cG9ydC53aWR0aCxcblx0XHRcdChwdC55IC0gZ2Z4LnZpZXdwb3J0LnkpICogaGVpZ2h0KCkgLyBnZngudmlld3BvcnQuaGVpZ2h0LFxuXHRcdClcblx0fVxuXG5cdC8vIHRyYW5zZm9ybSBhIHBvaW50IGZyb20gY29udGVudCBzcGFjZSB0byB2aWV3IHNwYWNlXG5cdGZ1bmN0aW9uIGNvbnRlbnRUb1ZpZXcocHQ6IFZlYzIpIHtcblx0XHRyZXR1cm4gbmV3IFZlYzIoXG5cdFx0XHRwdC54ICogZ2Z4LnZpZXdwb3J0LndpZHRoIC8gZ2Z4LndpZHRoLFxuXHRcdFx0cHQueSAqIGdmeC52aWV3cG9ydC5oZWlnaHQgLyBnZnguaGVpZ2h0LFxuXHRcdClcblx0fVxuXG5cdGZ1bmN0aW9uIG1vdXNlUG9zKCkge1xuXHRcdHJldHVybiB3aW5kb3dUb0NvbnRlbnQoYXBwLm1vdXNlUG9zKCkpXG5cdH1cblxuXHRsZXQgZGVidWdQYXVzZWQgPSBmYWxzZVxuXG5cdGNvbnN0IGRlYnVnOiBEZWJ1ZyA9IHtcblx0XHRpbnNwZWN0OiBmYWxzZSxcblx0XHR0aW1lU2NhbGU6IDEsXG5cdFx0c2hvd0xvZzogdHJ1ZSxcblx0XHRmcHM6ICgpID0+IGFwcC5mcHMoKSxcblx0XHRudW1GcmFtZXM6ICgpID0+IGFwcC5udW1GcmFtZXMoKSxcblx0XHRzdGVwRnJhbWU6IHVwZGF0ZUZyYW1lLFxuXHRcdGRyYXdDYWxsczogKCkgPT4gZ2Z4Lmxhc3REcmF3Q2FsbHMsXG5cdFx0Y2xlYXJMb2c6ICgpID0+IGdhbWUubG9ncyA9IFtdLFxuXHRcdGxvZzogKG1zZykgPT4ge1xuXHRcdFx0Y29uc3QgbWF4ID0gZ29wdC5sb2dNYXggPz8gTE9HX01BWFxuXHRcdFx0Z2FtZS5sb2dzLnVuc2hpZnQoe1xuXHRcdFx0XHRtc2c6IG1zZyxcblx0XHRcdFx0dGltZTogYXBwLnRpbWUoKSxcblx0XHRcdH0pXG5cdFx0XHRpZiAoZ2FtZS5sb2dzLmxlbmd0aCA+IG1heCkge1xuXHRcdFx0XHRnYW1lLmxvZ3MgPSBnYW1lLmxvZ3Muc2xpY2UoMCwgbWF4KVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZXJyb3I6IChtc2cpID0+IGRlYnVnLmxvZyhuZXcgRXJyb3IobXNnLnRvU3RyaW5nID8gbXNnLnRvU3RyaW5nKCkgOiBtc2cgYXMgc3RyaW5nKSksXG5cdFx0Y3VyUmVjb3JkaW5nOiBudWxsLFxuXHRcdG51bU9iamVjdHM6ICgpID0+IGdldChcIipcIiwgeyByZWN1cnNpdmU6IHRydWUgfSkubGVuZ3RoLFxuXHRcdGdldCBwYXVzZWQoKSB7XG5cdFx0XHRyZXR1cm4gZGVidWdQYXVzZWRcblx0XHR9LFxuXHRcdHNldCBwYXVzZWQodikge1xuXHRcdFx0ZGVidWdQYXVzZWQgPSB2XG5cdFx0XHRpZiAodikge1xuXHRcdFx0XHRhdWRpby5jdHguc3VzcGVuZCgpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhdWRpby5jdHgucmVzdW1lKClcblx0XHRcdH1cblx0XHR9LFxuXHR9XG5cblx0ZnVuY3Rpb24gZHQoKSB7XG5cdFx0cmV0dXJuIGFwcC5kdCgpICogZGVidWcudGltZVNjYWxlXG5cdH1cblxuXHRmdW5jdGlvbiBjYW1Qb3MoLi4ucG9zOiBWZWMyQXJncyk6IFZlYzIge1xuXHRcdGlmIChwb3MubGVuZ3RoID4gMCkge1xuXHRcdFx0Z2FtZS5jYW0ucG9zID0gdmVjMiguLi5wb3MpXG5cdFx0fVxuXHRcdHJldHVybiBnYW1lLmNhbS5wb3MgPyBnYW1lLmNhbS5wb3MuY2xvbmUoKSA6IGNlbnRlcigpXG5cdH1cblxuXHRmdW5jdGlvbiBjYW1TY2FsZSguLi5zY2FsZTogVmVjMkFyZ3MpOiBWZWMyIHtcblx0XHRpZiAoc2NhbGUubGVuZ3RoID4gMCkge1xuXHRcdFx0Z2FtZS5jYW0uc2NhbGUgPSB2ZWMyKC4uLnNjYWxlKVxuXHRcdH1cblx0XHRyZXR1cm4gZ2FtZS5jYW0uc2NhbGUuY2xvbmUoKVxuXHR9XG5cblx0ZnVuY3Rpb24gY2FtUm90KGFuZ2xlOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGlmIChhbmdsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRnYW1lLmNhbS5hbmdsZSA9IGFuZ2xlXG5cdFx0fVxuXHRcdHJldHVybiBnYW1lLmNhbS5hbmdsZVxuXHR9XG5cblx0ZnVuY3Rpb24gc2hha2UoaW50ZW5zaXR5OiBudW1iZXIgPSAxMikge1xuXHRcdGdhbWUuY2FtLnNoYWtlICs9IGludGVuc2l0eVxuXHR9XG5cblx0ZnVuY3Rpb24gdG9TY3JlZW4ocDogVmVjMik6IFZlYzIge1xuXHRcdHJldHVybiBnYW1lLmNhbS50cmFuc2Zvcm0ubXVsdFZlYzIocClcblx0fVxuXG5cdGZ1bmN0aW9uIHRvV29ybGQocDogVmVjMik6IFZlYzIge1xuXHRcdHJldHVybiBnYW1lLmNhbS50cmFuc2Zvcm0uaW52ZXJ0KCkubXVsdFZlYzIocClcblx0fVxuXG5cdGZ1bmN0aW9uIGNhbGNUcmFuc2Zvcm0ob2JqOiBHYW1lT2JqKTogTWF0NCB7XG5cdFx0Y29uc3QgdHIgPSBuZXcgTWF0NCgpXG5cdFx0aWYgKG9iai5wb3MpIHRyLnRyYW5zbGF0ZShvYmoucG9zKVxuXHRcdGlmIChvYmouc2NhbGUpIHRyLnNjYWxlKG9iai5zY2FsZSlcblx0XHRpZiAob2JqLmFuZ2xlKSB0ci5yb3RhdGUob2JqLmFuZ2xlKVxuXHRcdHJldHVybiBvYmoucGFyZW50ID8gdHIubXVsdChvYmoucGFyZW50LnRyYW5zZm9ybSkgOiB0clxuXHR9XG5cblx0ZnVuY3Rpb24gbWFrZTxUPihjb21wczogQ29tcExpc3Q8VD4gPSBbXSk6IEdhbWVPYmo8VD4ge1xuXG5cdFx0Y29uc3QgY29tcFN0YXRlcyA9IG5ldyBNYXAoKVxuXHRcdGNvbnN0IGNsZWFudXBzID0ge31cblx0XHRjb25zdCBldmVudHMgPSBuZXcgRXZlbnRIYW5kbGVyKClcblx0XHRjb25zdCBpbnB1dEV2ZW50czogRXZlbnRDb250cm9sbGVyW10gPSBbXVxuXHRcdGxldCBvbkN1ckNvbXBDbGVhbnVwID0gbnVsbFxuXHRcdGxldCBwYXVzZWQgPSBmYWxzZVxuXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdGNvbnN0IG9iajogR2FtZU9iaiA9IHtcblxuXHRcdFx0aWQ6IHVpZCgpLFxuXHRcdFx0Ly8gVE9ETzogYSBuaWNlIHdheSB0byBoaWRlIC8gcGF1c2Ugd2hlbiBhZGQoKS1pbmdcblx0XHRcdGhpZGRlbjogZmFsc2UsXG5cdFx0XHR0cmFuc2Zvcm06IG5ldyBNYXQ0KCksXG5cdFx0XHRjaGlsZHJlbjogW10sXG5cdFx0XHRwYXJlbnQ6IG51bGwsXG5cblx0XHRcdHNldCBwYXVzZWQocCkge1xuXHRcdFx0XHRpZiAocCA9PT0gcGF1c2VkKSByZXR1cm5cblx0XHRcdFx0cGF1c2VkID0gcFxuXHRcdFx0XHRmb3IgKGNvbnN0IGUgb2YgaW5wdXRFdmVudHMpIHtcblx0XHRcdFx0XHRlLnBhdXNlZCA9IHBcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IHBhdXNlZCgpIHtcblx0XHRcdFx0cmV0dXJuIHBhdXNlZFxuXHRcdFx0fSxcblxuXHRcdFx0YWRkPFQyPihhOiBDb21wTGlzdDxUMj4gfCBHYW1lT2JqPFQyPiA9IFtdKTogR2FtZU9iajxUMj4ge1xuXHRcdFx0XHRjb25zdCBvYmogPSBBcnJheS5pc0FycmF5KGEpID8gbWFrZShhKSA6IGFcblx0XHRcdFx0aWYgKG9iai5wYXJlbnQpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgYWRkIGEgZ2FtZSBvYmogdGhhdCBhbHJlYWR5IGhhcyBhIHBhcmVudC5cIilcblx0XHRcdFx0fVxuXHRcdFx0XHRvYmoucGFyZW50ID0gdGhpc1xuXHRcdFx0XHRvYmoudHJhbnNmb3JtID0gY2FsY1RyYW5zZm9ybShvYmopXG5cdFx0XHRcdHRoaXMuY2hpbGRyZW4ucHVzaChvYmopXG5cdFx0XHRcdC8vIFRPRE86IHRyaWdnZXIgYWRkIGZvciBjaGlsZHJlblxuXHRcdFx0XHRvYmoudHJpZ2dlcihcImFkZFwiLCBvYmopXG5cdFx0XHRcdGdhbWUuZXZlbnRzLnRyaWdnZXIoXCJhZGRcIiwgb2JqKVxuXHRcdFx0XHRyZXR1cm4gb2JqXG5cdFx0XHR9LFxuXG5cdFx0XHRyZWFkZChvYmo6IEdhbWVPYmopOiBHYW1lT2JqIHtcblx0XHRcdFx0Y29uc3QgaWR4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKG9iailcblx0XHRcdFx0aWYgKGlkeCAhPT0gLTEpIHtcblx0XHRcdFx0XHR0aGlzLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpXG5cdFx0XHRcdFx0dGhpcy5jaGlsZHJlbi5wdXNoKG9iailcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb2JqXG5cdFx0XHR9LFxuXG5cdFx0XHRyZW1vdmUob2JqOiBHYW1lT2JqKTogdm9pZCB7XG5cdFx0XHRcdGNvbnN0IGlkeCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihvYmopXG5cdFx0XHRcdGlmIChpZHggIT09IC0xKSB7XG5cdFx0XHRcdFx0b2JqLnBhcmVudCA9IG51bGxcblx0XHRcdFx0XHR0aGlzLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpXG5cdFx0XHRcdFx0Y29uc3QgdHJpZ2dlciA9IChvKSA9PiB7XG5cdFx0XHRcdFx0XHRvLnRyaWdnZXIoXCJkZXN0cm95XCIpXG5cdFx0XHRcdFx0XHRnYW1lLmV2ZW50cy50cmlnZ2VyKFwiZGVzdHJveVwiLCBvKVxuXHRcdFx0XHRcdFx0by5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gdHJpZ2dlcihjaGlsZCkpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRyaWdnZXIob2JqKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBUT0RPOiByZWN1cnNpdmVcblx0XHRcdHJlbW92ZUFsbCh0YWc/OiBUYWcpIHtcblx0XHRcdFx0aWYgKHRhZykge1xuXHRcdFx0XHRcdHRoaXMuZ2V0KHRhZykuZm9yRWFjaCgob2JqKSA9PiB0aGlzLnJlbW92ZShvYmopKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2YgWy4uLnRoaXMuY2hpbGRyZW5dKSB0aGlzLnJlbW92ZShjaGlsZClcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0dXBkYXRlKCkge1xuXHRcdFx0XHRpZiAodGhpcy5wYXVzZWQpIHJldHVyblxuXHRcdFx0XHR0aGlzLmNoaWxkcmVuXG5cdFx0XHRcdFx0LnNvcnQoKG8xLCBvMikgPT4gKG8xLnogPz8gMCkgLSAobzIueiA/PyAwKSlcblx0XHRcdFx0XHQuZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVwZGF0ZSgpKVxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJ1cGRhdGVcIilcblx0XHRcdH0sXG5cblx0XHRcdGRyYXcodGhpczogR2FtZU9iajxQb3NDb21wIHwgU2NhbGVDb21wIHwgUm90YXRlQ29tcCB8IEZpeGVkQ29tcCB8IE1hc2tDb21wPikge1xuXHRcdFx0XHRpZiAodGhpcy5oaWRkZW4pIHJldHVyblxuXHRcdFx0XHRpZiAodGhpcy5jYW52YXMpIHRoaXMuY2FudmFzLmJpbmQoKVxuXHRcdFx0XHRjb25zdCBmID0gZ2Z4LmZpeGVkXG5cdFx0XHRcdGlmICh0aGlzLmZpeGVkKSBnZnguZml4ZWQgPSB0cnVlXG5cdFx0XHRcdHB1c2hUcmFuc2Zvcm0oKVxuXHRcdFx0XHRwdXNoVHJhbnNsYXRlKHRoaXMucG9zKVxuXHRcdFx0XHRwdXNoU2NhbGUodGhpcy5zY2FsZSlcblx0XHRcdFx0cHVzaFJvdGF0ZSh0aGlzLmFuZ2xlKVxuXHRcdFx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4uc29ydCgobzEsIG8yKSA9PiAobzEueiA/PyAwKSAtIChvMi56ID8/IDApKVxuXHRcdFx0XHQvLyBUT0RPOiBhdXRvbWF0aWNhbGx5IGRvbid0IGRyYXcgaWYgb2Zmc2NyZWVuXG5cdFx0XHRcdGlmICh0aGlzLm1hc2spIHtcblx0XHRcdFx0XHRjb25zdCBtYXNrRnVuYyA9IHtcblx0XHRcdFx0XHRcdGludGVyc2VjdDogZHJhd01hc2tlZCxcblx0XHRcdFx0XHRcdHN1YnRyYWN0OiBkcmF3U3VidHJhY3RlZCxcblx0XHRcdFx0XHR9W3RoaXMubWFza11cblx0XHRcdFx0XHRpZiAoIW1hc2tGdW5jKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbWFzayBmdW5jOiBcIiR7dGhpcy5tYXNrfVwiYClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bWFza0Z1bmMoKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLmRyYXcoKSlcblx0XHRcdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJkcmF3XCIpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJkcmF3XCIpXG5cdFx0XHRcdFx0Y2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLmRyYXcoKSlcblx0XHRcdFx0fVxuXHRcdFx0XHRwb3BUcmFuc2Zvcm0oKVxuXHRcdFx0XHRnZnguZml4ZWQgPSBmXG5cdFx0XHRcdGlmICh0aGlzLmNhbnZhcykgdGhpcy5jYW52YXMudW5iaW5kKClcblx0XHRcdH0sXG5cblx0XHRcdGRyYXdJbnNwZWN0KHRoaXM6IEdhbWVPYmo8UG9zQ29tcCB8IFNjYWxlQ29tcCB8IFJvdGF0ZUNvbXA+KSB7XG5cdFx0XHRcdGlmICh0aGlzLmhpZGRlbikgcmV0dXJuXG5cdFx0XHRcdHB1c2hUcmFuc2Zvcm0oKVxuXHRcdFx0XHRwdXNoVHJhbnNsYXRlKHRoaXMucG9zKVxuXHRcdFx0XHRwdXNoU2NhbGUodGhpcy5zY2FsZSlcblx0XHRcdFx0cHVzaFJvdGF0ZSh0aGlzLmFuZ2xlKVxuXHRcdFx0XHR0aGlzLmNoaWxkcmVuXG5cdFx0XHRcdFx0LnNvcnQoKG8xLCBvMikgPT4gKG8xLnogPz8gMCkgLSAobzIueiA/PyAwKSlcblx0XHRcdFx0XHQuZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLmRyYXdJbnNwZWN0KCkpXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihcImRyYXdJbnNwZWN0XCIpXG5cdFx0XHRcdHBvcFRyYW5zZm9ybSgpXG5cdFx0XHR9LFxuXG5cdFx0XHQvLyB1c2UgYSBjb21wLCBvciB0YWdcblx0XHRcdHVzZShjb21wOiBDb21wIHwgVGFnKSB7XG5cblx0XHRcdFx0aWYgKCFjb21wKSB7XG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyB0YWdcblx0XHRcdFx0aWYgKHR5cGVvZiBjb21wID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudXNlKHtcblx0XHRcdFx0XHRcdGlkOiBjb21wLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgZ2MgPSBbXVxuXG5cdFx0XHRcdC8vIGNsZWFyIGlmIG92ZXJ3cml0ZVxuXHRcdFx0XHRpZiAoY29tcC5pZCkge1xuXHRcdFx0XHRcdHRoaXMudW51c2UoY29tcC5pZClcblx0XHRcdFx0XHRjbGVhbnVwc1tjb21wLmlkXSA9IFtdXG5cdFx0XHRcdFx0Z2MgPSBjbGVhbnVwc1tjb21wLmlkXVxuXHRcdFx0XHRcdGNvbXBTdGF0ZXMuc2V0KGNvbXAuaWQsIGNvbXApXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGNvbnN0IGsgaW4gY29tcCkge1xuXG5cdFx0XHRcdFx0aWYgKENPTVBfREVTQy5oYXMoaykpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgcHJvcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29tcCwgaylcblxuXHRcdFx0XHRcdGlmICh0eXBlb2YgcHJvcC52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRjb21wW2tdID0gY29tcFtrXS5iaW5kKHRoaXMpXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHByb3Auc2V0KSB7XG5cdFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29tcCwgaywge1xuXHRcdFx0XHRcdFx0XHRzZXQ6IHByb3Auc2V0LmJpbmQodGhpcyksXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChwcm9wLmdldCkge1xuXHRcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbXAsIGssIHtcblx0XHRcdFx0XHRcdFx0Z2V0OiBwcm9wLmdldC5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoQ09NUF9FVkVOVFMuaGFzKGspKSB7XG5cdFx0XHRcdFx0XHQvLyBhdXRvbWF0aWNhbGx5IGNsZWFuIHVwIGV2ZW50cyBjcmVhdGVkIGJ5IGNvbXBvbmVudHMgaW4gYWRkKCkgc3RhZ2Vcblx0XHRcdFx0XHRcdGNvbnN0IGZ1bmMgPSBrID09PSBcImFkZFwiID8gKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkN1ckNvbXBDbGVhbnVwID0gKGMpID0+IGdjLnB1c2goYylcblx0XHRcdFx0XHRcdFx0Y29tcFtrXSgpXG5cdFx0XHRcdFx0XHRcdG9uQ3VyQ29tcENsZWFudXAgPSBudWxsXG5cdFx0XHRcdFx0XHR9IDogY29tcFtrXVxuXHRcdFx0XHRcdFx0Z2MucHVzaCh0aGlzLm9uKGssIGZ1bmMpLmNhbmNlbClcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXNba10gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHQvLyBhc3NpZ24gY29tcCBmaWVsZHMgdG8gZ2FtZSBvYmpcblx0XHRcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGssIHtcblx0XHRcdFx0XHRcdFx0XHRnZXQ6ICgpID0+IGNvbXBba10sXG5cdFx0XHRcdFx0XHRcdFx0c2V0OiAodmFsKSA9PiBjb21wW2tdID0gdmFsLFxuXHRcdFx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRnYy5wdXNoKCgpID0+IGRlbGV0ZSB0aGlzW2tdKVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGUgY29tcG9uZW50IHByb3BlcnR5OiBcIiR7a31cImApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBjaGVjayBmb3IgY29tcG9uZW50IGRlcGVuZGVuY2llc1xuXHRcdFx0XHRjb25zdCBjaGVja0RlcHMgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCFjb21wLnJlcXVpcmUpIHJldHVyblxuXHRcdFx0XHRcdGZvciAoY29uc3QgZGVwIG9mIGNvbXAucmVxdWlyZSkge1xuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLmMoZGVwKSkge1xuXHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCBcIiR7Y29tcC5pZH1cIiByZXF1aXJlcyBjb21wb25lbnQgXCIke2RlcH1cImApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGNvbXAuZGVzdHJveSkge1xuXHRcdFx0XHRcdGdjLnB1c2goY29tcC5kZXN0cm95LmJpbmQodGhpcykpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBtYW51YWxseSB0cmlnZ2VyIGFkZCBldmVudCBpZiBvYmplY3QgYWxyZWFkeSBleGlzdFxuXHRcdFx0XHRpZiAodGhpcy5leGlzdHMoKSkge1xuXHRcdFx0XHRcdGNoZWNrRGVwcygpXG5cdFx0XHRcdFx0aWYgKGNvbXAuYWRkKSB7XG5cdFx0XHRcdFx0XHRvbkN1ckNvbXBDbGVhbnVwID0gKGMpID0+IGdjLnB1c2goYylcblx0XHRcdFx0XHRcdGNvbXAuYWRkLmNhbGwodGhpcylcblx0XHRcdFx0XHRcdG9uQ3VyQ29tcENsZWFudXAgPSBudWxsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChjb21wLnJlcXVpcmUpIHtcblx0XHRcdFx0XHRcdGdjLnB1c2godGhpcy5vbihcImFkZFwiLCBjaGVja0RlcHMpLmNhbmNlbClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fSxcblxuXHRcdFx0dW51c2UoaWQ6IFRhZykge1xuXHRcdFx0XHRpZiAoY2xlYW51cHNbaWRdKSB7XG5cdFx0XHRcdFx0Y2xlYW51cHNbaWRdLmZvckVhY2goKGUpID0+IGUoKSlcblx0XHRcdFx0XHRkZWxldGUgY2xlYW51cHNbaWRdXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNvbXBTdGF0ZXMuaGFzKGlkKSkge1xuXHRcdFx0XHRcdGNvbXBTdGF0ZXMuZGVsZXRlKGlkKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRjKGlkOiBUYWcpOiBDb21wIHtcblx0XHRcdFx0cmV0dXJuIGNvbXBTdGF0ZXMuZ2V0KGlkKVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0KHQ6IFRhZyB8IFRhZ1tdLCBvcHRzOiBHZXRPcHQgPSB7fSk6IEdhbWVPYmpbXSB7XG5cdFx0XHRcdGxldCBsaXN0OiBHYW1lT2JqW10gPSBvcHRzLnJlY3Vyc2l2ZVxuXHRcdFx0XHRcdD8gdGhpcy5jaGlsZHJlbi5mbGF0TWFwKGZ1bmN0aW9uIHJlY3Vyc2UoY2hpbGQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBbY2hpbGQsIC4uLmNoaWxkLmNoaWxkcmVuLmZsYXRNYXAocmVjdXJzZSldXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQ6IHRoaXMuY2hpbGRyZW5cblx0XHRcdFx0bGlzdCA9IGxpc3QuZmlsdGVyKChjaGlsZCkgPT4gdCA/IGNoaWxkLmlzKHQpIDogdHJ1ZSlcblx0XHRcdFx0aWYgKG9wdHMubGl2ZVVwZGF0ZSkge1xuXHRcdFx0XHRcdGNvbnN0IGlzQ2hpbGQgPSAob2JqKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb3B0cy5yZWN1cnNpdmVcblx0XHRcdFx0XHRcdFx0PyB0aGlzLmlzQW5jZXN0b3JPZihvYmopXG5cdFx0XHRcdFx0XHRcdDogb2JqLnBhcmVudCA9PT0gdGhpc1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCBldmVudHMgPSBbXVxuXHRcdFx0XHRcdC8vIFRPRE86IGhhbmRsZSB3aGVuIG9iamVjdCBhZGQgLyByZW1vdmUgdGFnc1xuXHRcdFx0XHRcdC8vIFRPRE86IGNsZWFuIHVwIHdoZW4gb2JqIGRlc3Ryb3llZFxuXHRcdFx0XHRcdGV2ZW50cy5wdXNoKG9uQWRkKChvYmopID0+IHtcblx0XHRcdFx0XHRcdGlmIChpc0NoaWxkKG9iaikgJiYgb2JqLmlzKHQpKSB7XG5cdFx0XHRcdFx0XHRcdGxpc3QucHVzaChvYmopXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkpXG5cdFx0XHRcdFx0ZXZlbnRzLnB1c2gob25EZXN0cm95KChvYmopID0+IHtcblx0XHRcdFx0XHRcdGlmIChpc0NoaWxkKG9iaikgJiYgb2JqLmlzKHQpKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGlkeCA9IGxpc3QuZmluZEluZGV4KChvKSA9PiBvLmlkID09PSBvYmouaWQpXG5cdFx0XHRcdFx0XHRcdGlmIChpZHggIT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoaWR4LCAxKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkpXG5cdFx0XHRcdFx0dGhpcy5vbkRlc3Ryb3koKCkgPT4ge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBldiBvZiBldmVudHMpIHtcblx0XHRcdFx0XHRcdFx0ZXYuY2FuY2VsKClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBsaXN0XG5cdFx0XHR9LFxuXG5cdFx0XHRpc0FuY2VzdG9yT2Yob2JqOiBHYW1lT2JqKSB7XG5cdFx0XHRcdGlmICghb2JqLnBhcmVudCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvYmoucGFyZW50ID09PSB0aGlzIHx8IHRoaXMuaXNBbmNlc3Rvck9mKG9iai5wYXJlbnQpXG5cdFx0XHR9LFxuXG5cdFx0XHRleGlzdHMoKTogYm9vbGVhbiB7XG5cdFx0XHRcdHJldHVybiBnYW1lLnJvb3QuaXNBbmNlc3Rvck9mKHRoaXMpXG5cdFx0XHR9LFxuXG5cdFx0XHRpcyh0YWc6IFRhZyB8IFRhZ1tdKTogYm9vbGVhbiB7XG5cdFx0XHRcdGlmICh0YWcgPT09IFwiKlwiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh0YWcpKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCB0IG9mIHRhZykge1xuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLmModCkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYyh0YWcpICE9IG51bGxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0b24obmFtZTogc3RyaW5nLCBhY3Rpb246ICguLi5hcmdzKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0Y29uc3QgY3RybCA9IGV2ZW50cy5vbihuYW1lLCBhY3Rpb24uYmluZCh0aGlzKSlcblx0XHRcdFx0aWYgKG9uQ3VyQ29tcENsZWFudXApIHtcblx0XHRcdFx0XHRvbkN1ckNvbXBDbGVhbnVwKCgpID0+IGN0cmwuY2FuY2VsKCkpXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGN0cmxcblx0XHRcdH0sXG5cblx0XHRcdHRyaWdnZXIobmFtZTogc3RyaW5nLCAuLi5hcmdzKTogdm9pZCB7XG5cdFx0XHRcdGV2ZW50cy50cmlnZ2VyKG5hbWUsIC4uLmFyZ3MpXG5cdFx0XHRcdGdhbWUub2JqRXZlbnRzLnRyaWdnZXIobmFtZSwgdGhpcywgLi4uYXJncylcblx0XHRcdH0sXG5cblx0XHRcdGRlc3Ryb3koKSB7XG5cdFx0XHRcdGlmICh0aGlzLnBhcmVudCkge1xuXHRcdFx0XHRcdHRoaXMucGFyZW50LnJlbW92ZSh0aGlzKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRpbnNwZWN0KCkge1xuXHRcdFx0XHRjb25zdCBpbmZvID0ge31cblx0XHRcdFx0Zm9yIChjb25zdCBbdGFnLCBjb21wXSBvZiBjb21wU3RhdGVzKSB7XG5cdFx0XHRcdFx0aW5mb1t0YWddID0gY29tcC5pbnNwZWN0ID8gY29tcC5pbnNwZWN0KCkgOiBudWxsXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGluZm9cblx0XHRcdH0sXG5cblx0XHRcdG9uQWRkKGNiOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJhZGRcIiwgY2IpXG5cdFx0XHR9LFxuXG5cdFx0XHRvblVwZGF0ZShjYjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwidXBkYXRlXCIsIGNiKVxuXHRcdFx0fSxcblxuXHRcdFx0b25EcmF3KGNiOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJkcmF3XCIsIGNiKVxuXHRcdFx0fSxcblxuXHRcdFx0b25EZXN0cm95KGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiZGVzdHJveVwiLCBhY3Rpb24pXG5cdFx0XHR9LFxuXG5cdFx0XHRjbGVhckV2ZW50cygpIHtcblx0XHRcdFx0ZXZlbnRzLmNsZWFyKClcblx0XHRcdH0sXG5cblx0XHR9XG5cblx0XHQvLyBUT0RPOiB0eXBlIHdpdGggYXMgY29uc3Rcblx0XHRjb25zdCBldnMgPSBbXG5cdFx0XHRcIm9uS2V5UHJlc3NcIixcblx0XHRcdFwib25LZXlQcmVzc1JlcGVhdFwiLFxuXHRcdFx0XCJvbktleURvd25cIixcblx0XHRcdFwib25LZXlSZWxlYXNlXCIsXG5cdFx0XHRcIm9uTW91c2VQcmVzc1wiLFxuXHRcdFx0XCJvbk1vdXNlRG93blwiLFxuXHRcdFx0XCJvbk1vdXNlUmVsZWFzZVwiLFxuXHRcdFx0XCJvbk1vdXNlTW92ZVwiLFxuXHRcdFx0XCJvbkNoYXJJbnB1dFwiLFxuXHRcdFx0XCJvbk1vdXNlTW92ZVwiLFxuXHRcdFx0XCJvblRvdWNoU3RhcnRcIixcblx0XHRcdFwib25Ub3VjaE1vdmVcIixcblx0XHRcdFwib25Ub3VjaEVuZFwiLFxuXHRcdFx0XCJvblNjcm9sbFwiLFxuXHRcdFx0XCJvbkdhbWVwYWRCdXR0b25QcmVzc1wiLFxuXHRcdFx0XCJvbkdhbWVwYWRCdXR0b25Eb3duXCIsXG5cdFx0XHRcIm9uR2FtZXBhZEJ1dHRvblJlbGVhc2VcIixcblx0XHRcdFwib25HYW1lcGFkU3RpY2tcIixcblx0XHRdXG5cblx0XHRmb3IgKGNvbnN0IGUgb2YgZXZzKSB7XG5cdFx0XHRvYmpbZV0gPSAoLi4uYXJncykgPT4ge1xuXHRcdFx0XHRjb25zdCBldiA9IGFwcFtlXSguLi5hcmdzKVxuXHRcdFx0XHRpbnB1dEV2ZW50cy5wdXNoKGV2KVxuXHRcdFx0XHQvLyBUT0RPOiB3aGF0IGlmIHRoZSBnYW1lIG9iamVjdCBpcyBkZXN0cm95IGFuZCByZS1hZGRlZFxuXHRcdFx0XHRvYmoub25EZXN0cm95KCgpID0+IGV2LmNhbmNlbCgpKVxuXHRcdFx0XHRyZXR1cm4gZXZcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGNvbXAgb2YgY29tcHMpIHtcblx0XHRcdG9iai51c2UoY29tcClcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqIGFzIHVua25vd24gYXMgR2FtZU9iajxUPlxuXG5cdH1cblxuXHQvLyBhZGQgYW4gZXZlbnQgdG8gYSB0YWdcblx0ZnVuY3Rpb24gb24oZXZlbnQ6IHN0cmluZywgdGFnOiBUYWcsIGNiOiAob2JqOiBHYW1lT2JqLCAuLi5hcmdzKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRpZiAoIWdhbWUub2JqRXZlbnRzW2V2ZW50XSkge1xuXHRcdFx0Z2FtZS5vYmpFdmVudHNbZXZlbnRdID0gbmV3IFJlZ2lzdHJ5KClcblx0XHR9XG5cdFx0cmV0dXJuIGdhbWUub2JqRXZlbnRzLm9uKGV2ZW50LCAob2JqLCAuLi5hcmdzKSA9PiB7XG5cdFx0XHRpZiAob2JqLmlzKHRhZykpIHtcblx0XHRcdFx0Y2Iob2JqLCAuLi5hcmdzKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRjb25zdCBvblVwZGF0ZSA9IG92ZXJsb2FkMigoYWN0aW9uOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyID0+IHtcblx0XHRjb25zdCBvYmogPSBhZGQoW3sgdXBkYXRlOiBhY3Rpb24gfV0pXG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldCBwYXVzZWQoKSB7XG5cdFx0XHRcdHJldHVybiBvYmoucGF1c2VkXG5cdFx0XHR9LFxuXHRcdFx0c2V0IHBhdXNlZChwKSB7XG5cdFx0XHRcdG9iai5wYXVzZWQgPSBwXG5cdFx0XHR9LFxuXHRcdFx0Y2FuY2VsOiAoKSA9PiBvYmouZGVzdHJveSgpLFxuXHRcdH1cblx0fSwgKHRhZzogVGFnLCBhY3Rpb246IChvYmo6IEdhbWVPYmopID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gb24oXCJ1cGRhdGVcIiwgdGFnLCBhY3Rpb24pXG5cdH0pXG5cblx0Y29uc3Qgb25EcmF3ID0gb3ZlcmxvYWQyKChhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIgPT4ge1xuXHRcdGNvbnN0IG9iaiA9IGFkZChbeyBkcmF3OiBhY3Rpb24gfV0pXG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldCBwYXVzZWQoKSB7XG5cdFx0XHRcdHJldHVybiBvYmouaGlkZGVuXG5cdFx0XHR9LFxuXHRcdFx0c2V0IHBhdXNlZChwKSB7XG5cdFx0XHRcdG9iai5oaWRkZW4gPSBwXG5cdFx0XHR9LFxuXHRcdFx0Y2FuY2VsOiAoKSA9PiBvYmouZGVzdHJveSgpLFxuXHRcdH1cblx0fSwgKHRhZzogVGFnLCBhY3Rpb246IChvYmo6IEdhbWVPYmopID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gb24oXCJkcmF3XCIsIHRhZywgYWN0aW9uKVxuXHR9KVxuXG5cdGNvbnN0IG9uQWRkID0gb3ZlcmxvYWQyKChhY3Rpb246IChvYmo6IEdhbWVPYmopID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gZ2FtZS5ldmVudHMub24oXCJhZGRcIiwgYWN0aW9uKVxuXHR9LCAodGFnOiBUYWcsIGFjdGlvbjogKG9iajogR2FtZU9iaikgPT4gdm9pZCkgPT4ge1xuXHRcdHJldHVybiBvbihcImFkZFwiLCB0YWcsIGFjdGlvbilcblx0fSlcblxuXHRjb25zdCBvbkRlc3Ryb3kgPSBvdmVybG9hZDIoKGFjdGlvbjogKG9iajogR2FtZU9iaikgPT4gdm9pZCkgPT4ge1xuXHRcdHJldHVybiBnYW1lLmV2ZW50cy5vbihcImRlc3Ryb3lcIiwgYWN0aW9uKVxuXHR9LCAodGFnOiBUYWcsIGFjdGlvbjogKG9iajogR2FtZU9iaikgPT4gdm9pZCkgPT4ge1xuXHRcdHJldHVybiBvbihcImRlc3Ryb3lcIiwgdGFnLCBhY3Rpb24pXG5cdH0pXG5cblx0Ly8gYWRkIGFuIGV2ZW50IHRoYXQgcnVucyB3aXRoIG9ianMgd2l0aCB0MSBjb2xsaWRlcyB3aXRoIG9ianMgd2l0aCB0MlxuXHRmdW5jdGlvbiBvbkNvbGxpZGUoXG5cdFx0dDE6IFRhZyxcblx0XHR0MjogVGFnLFxuXHRcdGY6IChhOiBHYW1lT2JqLCBiOiBHYW1lT2JqLCBjb2w/OiBDb2xsaXNpb24pID0+IHZvaWQsXG5cdCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0cmV0dXJuIG9uKFwiY29sbGlkZVwiLCB0MSwgKGEsIGIsIGNvbCkgPT4gYi5pcyh0MikgJiYgZihhLCBiLCBjb2wpKVxuXHR9XG5cblx0ZnVuY3Rpb24gb25Db2xsaWRlVXBkYXRlKFxuXHRcdHQxOiBUYWcsXG5cdFx0dDI6IFRhZyxcblx0XHRmOiAoYTogR2FtZU9iaiwgYjogR2FtZU9iaiwgY29sPzogQ29sbGlzaW9uKSA9PiB2b2lkLFxuXHQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdHJldHVybiBvbihcImNvbGxpZGVVcGRhdGVcIiwgdDEsIChhLCBiLCBjb2wpID0+IGIuaXModDIpICYmIGYoYSwgYiwgY29sKSlcblx0fVxuXG5cdGZ1bmN0aW9uIG9uQ29sbGlkZUVuZChcblx0XHR0MTogVGFnLFxuXHRcdHQyOiBUYWcsXG5cdFx0ZjogKGE6IEdhbWVPYmosIGI6IEdhbWVPYmosIGNvbD86IENvbGxpc2lvbikgPT4gdm9pZCxcblx0KTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRyZXR1cm4gb24oXCJjb2xsaWRlRW5kXCIsIHQxLCAoYSwgYiwgY29sKSA9PiBiLmlzKHQyKSAmJiBmKGEsIGIsIGNvbCkpXG5cdH1cblxuXHRmdW5jdGlvbiBmb3JBbGxDdXJyZW50QW5kRnV0dXJlKHQ6IFRhZywgYWN0aW9uOiAob2JqOiBHYW1lT2JqKSA9PiB2b2lkKSB7XG5cdFx0Z2V0KHQsIHsgcmVjdXJzaXZlOiB0cnVlIH0pLmZvckVhY2goYWN0aW9uKVxuXHRcdG9uQWRkKHQsIGFjdGlvbilcblx0fVxuXG5cdGNvbnN0IG9uQ2xpY2sgPSBvdmVybG9hZDIoKGFjdGlvbjogKCkgPT4gdm9pZCkgPT4ge1xuXHRcdHJldHVybiBhcHAub25Nb3VzZVByZXNzKGFjdGlvbilcblx0fSwgKHRhZzogVGFnLCBhY3Rpb246IChvYmo6IEdhbWVPYmopID0+IHZvaWQpID0+IHtcblx0XHRjb25zdCBldmVudHMgPSBbXVxuXHRcdGZvckFsbEN1cnJlbnRBbmRGdXR1cmUodGFnLCAob2JqKSA9PiB7XG5cdFx0XHRpZiAoIW9iai5hcmVhKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJvbkNsaWNrKCkgcmVxdWlyZXMgdGhlIG9iamVjdCB0byBoYXZlIGFyZWEoKSBjb21wb25lbnRcIilcblx0XHRcdGV2ZW50cy5wdXNoKG9iai5vbkNsaWNrKCgpID0+IGFjdGlvbihvYmopKSlcblx0XHR9KVxuXHRcdHJldHVybiBFdmVudENvbnRyb2xsZXIuam9pbihldmVudHMpXG5cdH0pXG5cblx0Ly8gYWRkIGFuIGV2ZW50IHRoYXQgcnVucyBvbmNlIHdoZW4gb2JqcyB3aXRoIHRhZyB0IGlzIGhvdmVyZWRcblx0ZnVuY3Rpb24gb25Ib3Zlcih0OiBUYWcsIGFjdGlvbjogKG9iajogR2FtZU9iaikgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0Y29uc3QgZXZlbnRzID0gW11cblx0XHRmb3JBbGxDdXJyZW50QW5kRnV0dXJlKHQsIChvYmopID0+IHtcblx0XHRcdGlmICghb2JqLmFyZWEpXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIm9uSG92ZXIoKSByZXF1aXJlcyB0aGUgb2JqZWN0IHRvIGhhdmUgYXJlYSgpIGNvbXBvbmVudFwiKVxuXHRcdFx0ZXZlbnRzLnB1c2gob2JqLm9uSG92ZXIoKCkgPT4gYWN0aW9uKG9iaikpKVxuXHRcdH0pXG5cdFx0cmV0dXJuIEV2ZW50Q29udHJvbGxlci5qb2luKGV2ZW50cylcblx0fVxuXG5cdC8vIGFkZCBhbiBldmVudCB0aGF0IHJ1bnMgb25jZSB3aGVuIG9ianMgd2l0aCB0YWcgdCBpcyBob3ZlcmVkXG5cdGZ1bmN0aW9uIG9uSG92ZXJVcGRhdGUodDogVGFnLCBhY3Rpb246IChvYmo6IEdhbWVPYmopID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdGNvbnN0IGV2ZW50cyA9IFtdXG5cdFx0Zm9yQWxsQ3VycmVudEFuZEZ1dHVyZSh0LCAob2JqKSA9PiB7XG5cdFx0XHRpZiAoIW9iai5hcmVhKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJvbkhvdmVyVXBkYXRlKCkgcmVxdWlyZXMgdGhlIG9iamVjdCB0byBoYXZlIGFyZWEoKSBjb21wb25lbnRcIilcblx0XHRcdGV2ZW50cy5wdXNoKG9iai5vbkhvdmVyVXBkYXRlKCgpID0+IGFjdGlvbihvYmopKSlcblx0XHR9KVxuXHRcdHJldHVybiBFdmVudENvbnRyb2xsZXIuam9pbihldmVudHMpXG5cdH1cblxuXHQvLyBhZGQgYW4gZXZlbnQgdGhhdCBydW5zIG9uY2Ugd2hlbiBvYmpzIHdpdGggdGFnIHQgaXMgdW5ob3ZlcmVkXG5cdGZ1bmN0aW9uIG9uSG92ZXJFbmQodDogVGFnLCBhY3Rpb246IChvYmo6IEdhbWVPYmopID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdGNvbnN0IGV2ZW50cyA9IFtdXG5cdFx0Zm9yQWxsQ3VycmVudEFuZEZ1dHVyZSh0LCAob2JqKSA9PiB7XG5cdFx0XHRpZiAoIW9iai5hcmVhKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJvbkhvdmVyRW5kKCkgcmVxdWlyZXMgdGhlIG9iamVjdCB0byBoYXZlIGFyZWEoKSBjb21wb25lbnRcIilcblx0XHRcdGV2ZW50cy5wdXNoKG9iai5vbkhvdmVyRW5kKCgpID0+IGFjdGlvbihvYmopKSlcblx0XHR9KVxuXHRcdHJldHVybiBFdmVudENvbnRyb2xsZXIuam9pbihldmVudHMpXG5cdH1cblxuXHRmdW5jdGlvbiBzZXRHcmF2aXR5KGc6IG51bWJlcikge1xuXHRcdGdhbWUuZ3Jhdml0eSA9IGdcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEdyYXZpdHkoKSB7XG5cdFx0cmV0dXJuIGdhbWUuZ3Jhdml0eVxuXHR9XG5cblx0ZnVuY3Rpb24gc2V0QmFja2dyb3VuZCguLi5hcmdzKSB7XG5cdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAxIHx8IGFyZ3MubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRnZnguYmdDb2xvciA9IHJnYihhcmdzWzBdKVxuXHRcdFx0aWYgKGFyZ3NbMV0pIGdmeC5iZ0FscGhhID0gYXJnc1sxXVxuXHRcdH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDMgfHwgYXJncy5sZW5ndGggPT09IDQpIHtcblx0XHRcdGdmeC5iZ0NvbG9yID0gcmdiKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG5cdFx0XHRpZiAoYXJnc1szXSkgZ2Z4LmJnQWxwaGEgPSBhcmdzWzNdXG5cdFx0fVxuXHRcdGdsLmNsZWFyQ29sb3IoXG5cdFx0XHRnZnguYmdDb2xvci5yIC8gMjU1LFxuXHRcdFx0Z2Z4LmJnQ29sb3IuZyAvIDI1NSxcblx0XHRcdGdmeC5iZ0NvbG9yLmIgLyAyNTUsXG5cdFx0XHRnZnguYmdBbHBoYSxcblx0XHQpXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kKCkge1xuXHRcdHJldHVybiBnZnguYmdDb2xvci5jbG9uZSgpXG5cdH1cblxuXHQvLyBUT0RPOiBtYW5hZ2UgZ2xvYmFsIHZlbG9jaXR5IGhlcmU/XG5cdGZ1bmN0aW9uIHBvcyguLi5hcmdzOiBWZWMyQXJncyk6IFBvc0NvbXAge1xuXG5cdFx0cmV0dXJuIHtcblxuXHRcdFx0aWQ6IFwicG9zXCIsXG5cdFx0XHRwb3M6IHZlYzIoLi4uYXJncyksXG5cblx0XHRcdG1vdmVCeSguLi5hcmdzOiBWZWMyQXJncykge1xuXHRcdFx0XHR0aGlzLnBvcyA9IHRoaXMucG9zLmFkZCh2ZWMyKC4uLmFyZ3MpKVxuXHRcdFx0fSxcblxuXHRcdFx0Ly8gbW92ZSB3aXRoIHZlbG9jaXR5IChwaXhlbHMgcGVyIHNlY29uZClcblx0XHRcdG1vdmUoLi4uYXJnczogVmVjMkFyZ3MpIHtcblx0XHRcdFx0dGhpcy5tb3ZlQnkodmVjMiguLi5hcmdzKS5zY2FsZShkdCgpKSlcblx0XHRcdH0sXG5cblx0XHRcdC8vIG1vdmUgdG8gYSBkZXN0aW5hdGlvbiwgd2l0aCBvcHRpb25hbCBzcGVlZFxuXHRcdFx0bW92ZVRvKC4uLmFyZ3MpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBhcmdzWzFdID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMubW92ZVRvKHZlYzIoYXJnc1swXSwgYXJnc1sxXSksIGFyZ3NbMl0pXG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZGVzdCA9IGFyZ3NbMF1cblx0XHRcdFx0Y29uc3Qgc3BlZWQgPSBhcmdzWzFdXG5cdFx0XHRcdGlmIChzcGVlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy5wb3MgPSB2ZWMyKGRlc3QpXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZGlmZiA9IGRlc3Quc3ViKHRoaXMucG9zKVxuXHRcdFx0XHRpZiAoZGlmZi5sZW4oKSA8PSBzcGVlZCAqIGR0KCkpIHtcblx0XHRcdFx0XHR0aGlzLnBvcyA9IHZlYzIoZGVzdClcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm1vdmUoZGlmZi51bml0KCkuc2NhbGUoc3BlZWQpKVxuXHRcdFx0fSxcblxuXHRcdFx0d29ybGRQb3ModGhpczogR2FtZU9iajxQb3NDb21wPik6IFZlYzIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnRcblx0XHRcdFx0XHQ/IHRoaXMucGFyZW50LnRyYW5zZm9ybS5tdWx0VmVjMih0aGlzLnBvcylcblx0XHRcdFx0XHQ6IHRoaXMucG9zXG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBnZXQgdGhlIHNjcmVlbiBwb3NpdGlvbiAodHJhbnNmb3JtZWQgYnkgY2FtZXJhKVxuXHRcdFx0c2NyZWVuUG9zKHRoaXM6IEdhbWVPYmo8UG9zQ29tcCB8IEZpeGVkQ29tcD4pOiBWZWMyIHtcblx0XHRcdFx0Y29uc3QgcG9zID0gdGhpcy53b3JsZFBvcygpXG5cdFx0XHRcdHJldHVybiBpc0ZpeGVkKHRoaXMpXG5cdFx0XHRcdFx0PyBwb3Ncblx0XHRcdFx0XHQ6IHRvU2NyZWVuKHBvcylcblx0XHRcdH0sXG5cblx0XHRcdGluc3BlY3QoKSB7XG5cdFx0XHRcdHJldHVybiBgKCR7TWF0aC5yb3VuZCh0aGlzLnBvcy54KX0sICR7TWF0aC5yb3VuZCh0aGlzLnBvcy55KX0pYFxuXHRcdFx0fSxcblxuXHRcdFx0ZHJhd0luc3BlY3QoKSB7XG5cdFx0XHRcdGRyYXdDaXJjbGUoe1xuXHRcdFx0XHRcdGNvbG9yOiByZ2IoMjU1LCAwLCAwKSxcblx0XHRcdFx0XHRyYWRpdXM6IDQgLyBnZXRWaWV3cG9ydFNjYWxlKCksXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXG5cdFx0fVxuXG5cdH1cblxuXHQvLyBUT0RPOiBhbGxvdyBzaW5nbGUgbnVtYmVyIGFzc2lnbm1lbnRcblx0ZnVuY3Rpb24gc2NhbGUoLi4uYXJnczogVmVjMkFyZ3MpOiBTY2FsZUNvbXAge1xuXHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHNjYWxlKDEpXG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJzY2FsZVwiLFxuXHRcdFx0c2NhbGU6IHZlYzIoLi4uYXJncyksXG5cdFx0XHRzY2FsZVRvKC4uLmFyZ3M6IFZlYzJBcmdzKSB7XG5cdFx0XHRcdHRoaXMuc2NhbGUgPSB2ZWMyKC4uLmFyZ3MpXG5cdFx0XHR9LFxuXHRcdFx0c2NhbGVCeSguLi5hcmdzOiBWZWMyQXJncykge1xuXHRcdFx0XHR0aGlzLnNjYWxlLnNjYWxlKHZlYzIoLi4uYXJncykpXG5cdFx0XHR9LFxuXHRcdFx0aW5zcGVjdCgpIHtcblx0XHRcdFx0cmV0dXJuIGAoJHt0b0ZpeGVkKHRoaXMuc2NhbGUueCwgMil9LCAke3RvRml4ZWQodGhpcy5zY2FsZS55LCAyKX0pYFxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGUocjogbnVtYmVyKTogUm90YXRlQ29tcCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcInJvdGF0ZVwiLFxuXHRcdFx0YW5nbGU6IHIgPz8gMCxcblx0XHRcdHJvdGF0ZUJ5KGFuZ2xlOiBudW1iZXIpIHtcblx0XHRcdFx0dGhpcy5hbmdsZSArPSBhbmdsZVxuXHRcdFx0fSxcblx0XHRcdHJvdGF0ZVRvKGFuZ2xlOiBudW1iZXIpIHtcblx0XHRcdFx0dGhpcy5hbmdsZSA9IGFuZ2xlXG5cdFx0XHR9LFxuXHRcdFx0aW5zcGVjdCgpIHtcblx0XHRcdFx0cmV0dXJuIGAke01hdGgucm91bmQodGhpcy5hbmdsZSl9YFxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjb2xvciguLi5hcmdzKTogQ29sb3JDb21wIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwiY29sb3JcIixcblx0XHRcdGNvbG9yOiByZ2IoLi4uYXJncyksXG5cdFx0XHRpbnNwZWN0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb2xvci50b1N0cmluZygpXG5cdFx0XHR9LFxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHRvRml4ZWQobjogbnVtYmVyLCBmOiBudW1iZXIpIHtcblx0XHRyZXR1cm4gTnVtYmVyKG4udG9GaXhlZChmKSlcblx0fVxuXG5cdC8vIFRPRE86IGZhZGVJbiBoZXJlP1xuXHRmdW5jdGlvbiBvcGFjaXR5KGE6IG51bWJlcik6IE9wYWNpdHlDb21wIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwib3BhY2l0eVwiLFxuXHRcdFx0b3BhY2l0eTogYSA/PyAxLFxuXHRcdFx0aW5zcGVjdCgpIHtcblx0XHRcdFx0cmV0dXJuIGAke3RvRml4ZWQodGhpcy5vcGFjaXR5LCAxKX1gXG5cdFx0XHR9LFxuXHRcdFx0ZmFkZU91dCh0aW1lID0gMSwgZWFzZUZ1bmMgPSBlYXNpbmdzLmxpbmVhcik6IFR3ZWVuQ29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiB0d2Vlbih0aGlzLm9wYWNpdHksIDAsIHRpbWUsIChhKSA9PiB0aGlzLm9wYWNpdHkgPSBhLCBlYXNlRnVuYylcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gYW5jaG9yKG86IEFuY2hvciB8IFZlYzIpOiBBbmNob3JDb21wIHtcblx0XHRpZiAoIW8pIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBkZWZpbmUgYW4gYW5jaG9yXCIpXG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJhbmNob3JcIixcblx0XHRcdGFuY2hvcjogbyxcblx0XHRcdGluc3BlY3QoKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5hbmNob3IgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hbmNob3Jcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hbmNob3IudG9TdHJpbmcoKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHooejogbnVtYmVyKTogWkNvbXAge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJ6XCIsXG5cdFx0XHR6OiB6LFxuXHRcdFx0aW5zcGVjdCgpIHtcblx0XHRcdFx0cmV0dXJuIGAke3RoaXMuen1gXG5cdFx0XHR9LFxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGZvbGxvdyhvYmo6IEdhbWVPYmosIG9mZnNldD86IFZlYzIpOiBGb2xsb3dDb21wIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwiZm9sbG93XCIsXG5cdFx0XHRyZXF1aXJlOiBbIFwicG9zXCIgXSxcblx0XHRcdGZvbGxvdzoge1xuXHRcdFx0XHRvYmo6IG9iaixcblx0XHRcdFx0b2Zmc2V0OiBvZmZzZXQgPz8gdmVjMigwKSxcblx0XHRcdH0sXG5cdFx0XHRhZGQodGhpczogR2FtZU9iajxGb2xsb3dDb21wIHwgUG9zQ29tcD4pIHtcblx0XHRcdFx0aWYgKG9iai5leGlzdHMoKSkge1xuXHRcdFx0XHRcdHRoaXMucG9zID0gdGhpcy5mb2xsb3cub2JqLnBvcy5hZGQodGhpcy5mb2xsb3cub2Zmc2V0KVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dXBkYXRlKHRoaXM6IEdhbWVPYmo8Rm9sbG93Q29tcCB8IFBvc0NvbXA+KSB7XG5cdFx0XHRcdGlmIChvYmouZXhpc3RzKCkpIHtcblx0XHRcdFx0XHR0aGlzLnBvcyA9IHRoaXMuZm9sbG93Lm9iai5wb3MuYWRkKHRoaXMuZm9sbG93Lm9mZnNldClcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBtb3ZlKGRpcjogbnVtYmVyIHwgVmVjMiwgc3BlZWQ6IG51bWJlcik6IEVtcHR5Q29tcCB7XG5cdFx0Y29uc3QgZCA9IHR5cGVvZiBkaXIgPT09IFwibnVtYmVyXCIgPyBWZWMyLmZyb21BbmdsZShkaXIpIDogZGlyLnVuaXQoKVxuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJtb3ZlXCIsXG5cdFx0XHRyZXF1aXJlOiBbIFwicG9zXCIgXSxcblx0XHRcdHVwZGF0ZSh0aGlzOiBHYW1lT2JqPFBvc0NvbXA+KSB7XG5cdFx0XHRcdHRoaXMubW92ZShkLnNjYWxlKHNwZWVkKSlcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgREVGX09GRlNDUkVFTl9ESVMgPSAyMDBcblxuXHRmdW5jdGlvbiBvZmZzY3JlZW4ob3B0OiBPZmZTY3JlZW5Db21wT3B0ID0ge30pOiBPZmZTY3JlZW5Db21wIHtcblx0XHRjb25zdCBkaXN0YW5jZSA9IG9wdC5kaXN0YW5jZSA/PyBERUZfT0ZGU0NSRUVOX0RJU1xuXHRcdGxldCBpc091dCA9IGZhbHNlXG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcIm9mZnNjcmVlblwiLFxuXHRcdFx0cmVxdWlyZTogWyBcInBvc1wiIF0sXG5cdFx0XHRpc09mZlNjcmVlbih0aGlzOiBHYW1lT2JqPFBvc0NvbXA+KTogYm9vbGVhbiB7XG5cdFx0XHRcdGNvbnN0IHBvcyA9IHRoaXMuc2NyZWVuUG9zKClcblx0XHRcdFx0Y29uc3Qgc2NyZWVuUmVjdCA9IG5ldyBSZWN0KHZlYzIoMCksIHdpZHRoKCksIGhlaWdodCgpKVxuXHRcdFx0XHRyZXR1cm4gIXRlc3RSZWN0UG9pbnQoc2NyZWVuUmVjdCwgcG9zKVxuXHRcdFx0XHRcdCYmIHNjcmVlblJlY3Quc2Rpc3RUb1BvaW50KHBvcykgPiBkaXN0YW5jZSAqIGRpc3RhbmNlXG5cdFx0XHR9LFxuXHRcdFx0b25FeGl0U2NyZWVuKHRoaXM6IEdhbWVPYmosIGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiZXhpdFZpZXdcIiwgYWN0aW9uKVxuXHRcdFx0fSxcblx0XHRcdG9uRW50ZXJTY3JlZW4odGhpczogR2FtZU9iaiwgYWN0aW9uOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJlbnRlclZpZXdcIiwgYWN0aW9uKVxuXHRcdFx0fSxcblx0XHRcdHVwZGF0ZSh0aGlzOiBHYW1lT2JqKSB7XG5cdFx0XHRcdGlmICh0aGlzLmlzT2ZmU2NyZWVuKCkpIHtcblx0XHRcdFx0XHRpZiAoIWlzT3V0KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJleGl0Vmlld1wiKVxuXHRcdFx0XHRcdFx0aXNPdXQgPSB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChvcHQuaGlkZSkgdGhpcy5oaWRkZW4gPSB0cnVlXG5cdFx0XHRcdFx0aWYgKG9wdC5wYXVzZSkgdGhpcy5wYXVzZWQgPSB0cnVlXG5cdFx0XHRcdFx0aWYgKG9wdC5kZXN0cm95KSB0aGlzLmRlc3Ryb3koKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChpc091dCkge1xuXHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiZW50ZXJWaWV3XCIpXG5cdFx0XHRcdFx0XHRpc091dCA9IGZhbHNlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChvcHQuaGlkZSkgdGhpcy5oaWRkZW4gPSBmYWxzZVxuXHRcdFx0XHRcdGlmIChvcHQucGF1c2UpIHRoaXMucGF1c2VkID0gZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBpc0ZpeGVkKG9iajogR2FtZU9iaikge1xuXHRcdGlmIChvYmouZml4ZWQpIHJldHVybiB0cnVlXG5cdFx0cmV0dXJuIG9iai5wYXJlbnQgPyBpc0ZpeGVkKG9iai5wYXJlbnQpIDogZmFsc2Vcblx0fVxuXG5cdGZ1bmN0aW9uIGFyZWEob3B0OiBBcmVhQ29tcE9wdCA9IHt9KTogQXJlYUNvbXAge1xuXG5cdFx0Y29uc3QgY29sbGlkaW5nID0ge31cblx0XHRjb25zdCBjb2xsaWRpbmdUaGlzRnJhbWUgPSBuZXcgU2V0KClcblxuXHRcdHJldHVybiB7XG5cblx0XHRcdGlkOiBcImFyZWFcIixcblx0XHRcdGNvbGxpc2lvbklnbm9yZTogb3B0LmNvbGxpc2lvbklnbm9yZSA/PyBbXSxcblxuXHRcdFx0YWRkKHRoaXM6IEdhbWVPYmo8QXJlYUNvbXA+KSB7XG5cblx0XHRcdFx0aWYgKHRoaXMuYXJlYS5jdXJzb3IpIHtcblx0XHRcdFx0XHR0aGlzLm9uSG92ZXIoKCkgPT4gYXBwLnNldEN1cnNvcih0aGlzLmFyZWEuY3Vyc29yKSlcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMub25Db2xsaWRlVXBkYXRlKChvYmosIGNvbCkgPT4ge1xuXHRcdFx0XHRcdGlmICghY29sbGlkaW5nW29iai5pZF0pIHtcblx0XHRcdFx0XHRcdHRoaXMudHJpZ2dlcihcImNvbGxpZGVcIiwgb2JqLCBjb2wpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbGxpZGluZ1tvYmouaWRdID0gY29sXG5cdFx0XHRcdFx0Y29sbGlkaW5nVGhpc0ZyYW1lLmFkZChvYmouaWQpXG5cdFx0XHRcdH0pXG5cblx0XHRcdH0sXG5cblx0XHRcdHVwZGF0ZSh0aGlzOiBHYW1lT2JqPEFyZWFDb21wPikge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGlkIGluIGNvbGxpZGluZykge1xuXHRcdFx0XHRcdGlmICghY29sbGlkaW5nVGhpc0ZyYW1lLmhhcyhOdW1iZXIoaWQpKSkge1xuXHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiY29sbGlkZUVuZFwiLCBjb2xsaWRpbmdbaWRdLnRhcmdldClcblx0XHRcdFx0XHRcdGRlbGV0ZSBjb2xsaWRpbmdbaWRdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbGxpZGluZ1RoaXNGcmFtZS5jbGVhcigpXG5cdFx0XHR9LFxuXG5cdFx0XHRkcmF3SW5zcGVjdCh0aGlzOiBHYW1lT2JqPEFyZWFDb21wIHwgQW5jaG9yQ29tcCB8IEZpeGVkQ29tcD4pIHtcblxuXHRcdFx0XHRjb25zdCBhID0gdGhpcy5sb2NhbEFyZWEoKVxuXG5cdFx0XHRcdHB1c2hUcmFuc2Zvcm0oKVxuXHRcdFx0XHRwdXNoU2NhbGUodGhpcy5hcmVhLnNjYWxlKVxuXHRcdFx0XHRwdXNoVHJhbnNsYXRlKHRoaXMuYXJlYS5vZmZzZXQpXG5cblx0XHRcdFx0Y29uc3Qgb3B0cyA9IHtcblx0XHRcdFx0XHRvdXRsaW5lOiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogNCAvIGdldFZpZXdwb3J0U2NhbGUoKSxcblx0XHRcdFx0XHRcdGNvbG9yOiByZ2IoMCwgMCwgMjU1KSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGFuY2hvcjogdGhpcy5hbmNob3IsXG5cdFx0XHRcdFx0ZmlsbDogZmFsc2UsXG5cdFx0XHRcdFx0Zml4ZWQ6IGlzRml4ZWQodGhpcyksXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYSBpbnN0YW5jZW9mIFJlY3QpIHtcblx0XHRcdFx0XHRkcmF3UmVjdCh7XG5cdFx0XHRcdFx0XHQuLi5vcHRzLFxuXHRcdFx0XHRcdFx0cG9zOiBhLnBvcyxcblx0XHRcdFx0XHRcdHdpZHRoOiBhLndpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBhLmhlaWdodCxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2UgaWYgKGEgaW5zdGFuY2VvZiBQb2x5Z29uKSB7XG5cdFx0XHRcdFx0ZHJhd1BvbHlnb24oe1xuXHRcdFx0XHRcdFx0Li4ub3B0cyxcblx0XHRcdFx0XHRcdHB0czogYS5wdHMsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSBlbHNlIGlmIChhIGluc3RhbmNlb2YgQ2lyY2xlKSB7XG5cdFx0XHRcdFx0ZHJhd0NpcmNsZSh7XG5cdFx0XHRcdFx0XHQuLi5vcHRzLFxuXHRcdFx0XHRcdFx0cG9zOiBhLmNlbnRlcixcblx0XHRcdFx0XHRcdHJhZGl1czogYS5yYWRpdXMsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBvcFRyYW5zZm9ybSgpXG5cblx0XHRcdH0sXG5cblx0XHRcdGFyZWE6IHtcblx0XHRcdFx0c2hhcGU6IG9wdC5zaGFwZSA/PyBudWxsLFxuXHRcdFx0XHRzY2FsZTogb3B0LnNjYWxlID8gdmVjMihvcHQuc2NhbGUpIDogdmVjMigxKSxcblx0XHRcdFx0b2Zmc2V0OiBvcHQub2Zmc2V0ID8/IHZlYzIoMCksXG5cdFx0XHRcdGN1cnNvcjogb3B0LmN1cnNvciA/PyBudWxsLFxuXHRcdFx0fSxcblxuXHRcdFx0aXNDbGlja2VkKCk6IGJvb2xlYW4ge1xuXHRcdFx0XHRyZXR1cm4gYXBwLmlzTW91c2VQcmVzc2VkKCkgJiYgdGhpcy5pc0hvdmVyaW5nKClcblx0XHRcdH0sXG5cblx0XHRcdGlzSG92ZXJpbmcodGhpczogR2FtZU9iaikge1xuXHRcdFx0XHRjb25zdCBtcG9zID0gaXNGaXhlZCh0aGlzKSA/IG1vdXNlUG9zKCkgOiB0b1dvcmxkKG1vdXNlUG9zKCkpXG5cdFx0XHRcdHJldHVybiB0aGlzLmhhc1BvaW50KG1wb3MpXG5cdFx0XHR9LFxuXG5cdFx0XHRjaGVja0NvbGxpc2lvbih0aGlzOiBHYW1lT2JqLCBvdGhlcjogR2FtZU9iajxBcmVhQ29tcD4pIHtcblx0XHRcdFx0cmV0dXJuIGNvbGxpZGluZ1tvdGhlci5pZF0gPz8gbnVsbFxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0Q29sbGlzaW9ucygpIHtcblx0XHRcdFx0cmV0dXJuIE9iamVjdC52YWx1ZXMoY29sbGlkaW5nKVxuXHRcdFx0fSxcblxuXHRcdFx0Ly8gVE9ETzogcGVyZm9ybSBjaGVjayBpbnN0ZWFkIG9mIHVzZSBjYWNoZVxuXHRcdFx0aXNDb2xsaWRpbmcob3RoZXI6IEdhbWVPYmo8QXJlYUNvbXA+KSB7XG5cdFx0XHRcdHJldHVybiBCb29sZWFuKGNvbGxpZGluZ1tvdGhlci5pZF0pXG5cdFx0XHR9LFxuXG5cdFx0XHRpc092ZXJsYXBwaW5nKG90aGVyKSB7XG5cdFx0XHRcdGNvbnN0IGNvbCA9IGNvbGxpZGluZ1tvdGhlci5pZF1cblx0XHRcdFx0cmV0dXJuIGNvbCAmJiBjb2wuaGFzT3ZlcmxhcCgpXG5cdFx0XHR9LFxuXG5cdFx0XHRvbkNsaWNrKHRoaXM6IEdhbWVPYmo8QXJlYUNvbXA+LCBmOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0Y29uc3QgZSA9IGFwcC5vbk1vdXNlUHJlc3MoXCJsZWZ0XCIsICgpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5pc0hvdmVyaW5nKCkpIHtcblx0XHRcdFx0XHRcdGYoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0dGhpcy5vbkRlc3Ryb3koKCkgPT4gZS5jYW5jZWwoKSlcblx0XHRcdFx0cmV0dXJuIGVcblx0XHRcdH0sXG5cblx0XHRcdG9uSG92ZXIodGhpczogR2FtZU9iaiwgYWN0aW9uOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0bGV0IGhvdmVyaW5nID0gZmFsc2Vcblx0XHRcdFx0cmV0dXJuIHRoaXMub25VcGRhdGUoKCkgPT4ge1xuXHRcdFx0XHRcdGlmICghaG92ZXJpbmcpIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmlzSG92ZXJpbmcoKSkge1xuXHRcdFx0XHRcdFx0XHRob3ZlcmluZyA9IHRydWVcblx0XHRcdFx0XHRcdFx0YWN0aW9uKClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aG92ZXJpbmcgPSB0aGlzLmlzSG92ZXJpbmcoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cblx0XHRcdG9uSG92ZXJVcGRhdGUodGhpczogR2FtZU9iaiwgb25Ib3ZlcjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uVXBkYXRlKCgpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5pc0hvdmVyaW5nKCkpIHtcblx0XHRcdFx0XHRcdG9uSG92ZXIoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cblx0XHRcdG9uSG92ZXJFbmQodGhpczogR2FtZU9iaiwgYWN0aW9uOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0bGV0IGhvdmVyaW5nID0gZmFsc2Vcblx0XHRcdFx0cmV0dXJuIHRoaXMub25VcGRhdGUoKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChob3ZlcmluZykge1xuXHRcdFx0XHRcdFx0aWYgKCF0aGlzLmlzSG92ZXJpbmcoKSkge1xuXHRcdFx0XHRcdFx0XHRob3ZlcmluZyA9IGZhbHNlXG5cdFx0XHRcdFx0XHRcdGFjdGlvbigpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGhvdmVyaW5nID0gdGhpcy5pc0hvdmVyaW5nKClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXG5cdFx0XHRvbkNvbGxpZGUoXG5cdFx0XHRcdHRoaXM6IEdhbWVPYmosXG5cdFx0XHRcdHRhZzogVGFnIHwgKChvYmo6IEdhbWVPYmosIGNvbD86IENvbGxpc2lvbikgPT4gdm9pZCksXG5cdFx0XHRcdGNiPzogKG9iajogR2FtZU9iaiwgY29sPzogQ29sbGlzaW9uKSA9PiB2b2lkLFxuXHRcdFx0KTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0aWYgKHR5cGVvZiB0YWcgPT09IFwiZnVuY3Rpb25cIiAmJiBjYiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJjb2xsaWRlXCIsIHRhZylcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgdGFnID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMub25Db2xsaWRlKChvYmosIGNvbCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKG9iai5pcyh0YWcpKSB7XG5cdFx0XHRcdFx0XHRcdGNiKG9iaiwgY29sKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdG9uQ29sbGlkZVVwZGF0ZShcblx0XHRcdFx0dGhpczogR2FtZU9iajxBcmVhQ29tcD4sXG5cdFx0XHRcdHRhZzogVGFnIHwgKChvYmo6IEdhbWVPYmosIGNvbD86IENvbGxpc2lvbikgPT4gdm9pZCksXG5cdFx0XHRcdGNiPzogKG9iajogR2FtZU9iaiwgY29sPzogQ29sbGlzaW9uKSA9PiB2b2lkLFxuXHRcdFx0KTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0aWYgKHR5cGVvZiB0YWcgPT09IFwiZnVuY3Rpb25cIiAmJiBjYiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJjb2xsaWRlVXBkYXRlXCIsIHRhZylcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgdGFnID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJjb2xsaWRlVXBkYXRlXCIsIChvYmosIGNvbCkgPT4gb2JqLmlzKHRhZykgJiYgY2Iob2JqLCBjb2wpKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRvbkNvbGxpZGVFbmQoXG5cdFx0XHRcdHRoaXM6IEdhbWVPYmo8QXJlYUNvbXA+LFxuXHRcdFx0XHR0YWc6IFRhZyB8ICgob2JqOiBHYW1lT2JqKSA9PiB2b2lkKSxcblx0XHRcdFx0Y2I/OiAob2JqOiBHYW1lT2JqKSA9PiB2b2lkLFxuXHRcdFx0KTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0aWYgKHR5cGVvZiB0YWcgPT09IFwiZnVuY3Rpb25cIiAmJiBjYiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJjb2xsaWRlRW5kXCIsIHRhZylcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgdGFnID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJjb2xsaWRlRW5kXCIsIChvYmopID0+IG9iai5pcyh0YWcpICYmIGNiKG9iaikpXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGhhc1BvaW50KHB0OiBWZWMyKTogYm9vbGVhbiB7XG5cdFx0XHRcdC8vIFRPRE86IGNvbnZlcnQgdG8gcHQgdG8gbG9jYWwgc3BhY2UgaW5zdGVhZFxuXHRcdFx0XHRyZXR1cm4gdGVzdFBvbHlnb25Qb2ludCh0aGlzLndvcmxkQXJlYSgpLCBwdClcblx0XHRcdH0sXG5cblx0XHRcdC8vIHB1c2ggYW4gb2JqIG91dCBvZiBhbm90aGVyIGlmIHRoZXkncmUgb3ZlcmxhcHBlZFxuXHRcdFx0cmVzb2x2ZUNvbGxpc2lvbih0aGlzOiBHYW1lT2JqPEFyZWFDb21wIHwgUG9zQ29tcD4sIG9iajogR2FtZU9iajxBcmVhQ29tcD4pIHtcblx0XHRcdFx0Y29uc3QgY29sID0gdGhpcy5jaGVja0NvbGxpc2lvbihvYmopXG5cdFx0XHRcdGlmIChjb2wgJiYgIWNvbC5yZXNvbHZlZCkge1xuXHRcdFx0XHRcdHRoaXMucG9zID0gdGhpcy5wb3MuYWRkKGNvbC5kaXNwbGFjZW1lbnQpXG5cdFx0XHRcdFx0Y29sLnJlc29sdmVkID0gdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRsb2NhbEFyZWEodGhpczogR2FtZU9iajxBcmVhQ29tcCB8IHsgcmVuZGVyQXJlYSgpOiBTaGFwZSB9Pik6IFNoYXBlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuYXJlYS5zaGFwZVxuXHRcdFx0XHRcdD8gdGhpcy5hcmVhLnNoYXBlXG5cdFx0XHRcdFx0OiB0aGlzLnJlbmRlckFyZWEoKVxuXHRcdFx0fSxcblxuXHRcdFx0Ly8gVE9ETzogY2FjaGVcblx0XHRcdHdvcmxkQXJlYSh0aGlzOiBHYW1lT2JqPEFyZWFDb21wIHwgQW5jaG9yQ29tcD4pOiBQb2x5Z29uIHtcblxuXHRcdFx0XHRjb25zdCBsb2NhbEFyZWEgPSB0aGlzLmxvY2FsQXJlYSgpXG5cblx0XHRcdFx0aWYgKCEobG9jYWxBcmVhIGluc3RhbmNlb2YgUG9seWdvbiB8fCBsb2NhbEFyZWEgaW5zdGFuY2VvZiBSZWN0KSkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk9ubHkgc3VwcG9ydCBwb2x5Z29uIGFuZCByZWN0IHNoYXBlcyBmb3Igbm93XCIpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCB0cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVxuXHRcdFx0XHRcdC5jbG9uZSgpXG5cdFx0XHRcdFx0LnNjYWxlKHZlYzIodGhpcy5hcmVhLnNjYWxlID8/IDEpKVxuXHRcdFx0XHRcdC50cmFuc2xhdGUodGhpcy5hcmVhLm9mZnNldClcblxuXHRcdFx0XHRpZiAobG9jYWxBcmVhIGluc3RhbmNlb2YgUmVjdCkge1xuXHRcdFx0XHRcdGNvbnN0IG9mZnNldCA9IGFuY2hvclB0KHRoaXMuYW5jaG9yIHx8IERFRl9BTkNIT1IpXG5cdFx0XHRcdFx0XHQuYWRkKDEsIDEpXG5cdFx0XHRcdFx0XHQuc2NhbGUoLTAuNSlcblx0XHRcdFx0XHRcdC5zY2FsZShsb2NhbEFyZWEud2lkdGgsIGxvY2FsQXJlYS5oZWlnaHQpXG5cdFx0XHRcdFx0dHJhbnNmb3JtLnRyYW5zbGF0ZShvZmZzZXQpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbG9jYWxBcmVhLnRyYW5zZm9ybSh0cmFuc2Zvcm0pIGFzIFBvbHlnb25cblxuXHRcdFx0fSxcblxuXHRcdFx0c2NyZWVuQXJlYSh0aGlzOiBHYW1lT2JqPEFyZWFDb21wIHwgRml4ZWRDb21wPik6IFBvbHlnb24ge1xuXHRcdFx0XHRjb25zdCBhcmVhID0gdGhpcy53b3JsZEFyZWEoKVxuXHRcdFx0XHRpZiAoaXNGaXhlZCh0aGlzKSkge1xuXHRcdFx0XHRcdHJldHVybiBhcmVhXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFyZWEudHJhbnNmb3JtKGdhbWUuY2FtLnRyYW5zZm9ybSlcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0UmVuZGVyUHJvcHMob2JqOiBHYW1lT2JqPGFueT4pIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29sb3I6IG9iai5jb2xvcixcblx0XHRcdG9wYWNpdHk6IG9iai5vcGFjaXR5LFxuXHRcdFx0YW5jaG9yOiBvYmouYW5jaG9yLFxuXHRcdFx0b3V0bGluZTogb2JqLm91dGxpbmUsXG5cdFx0XHRzaGFkZXI6IG9iai5zaGFkZXIsXG5cdFx0XHR1bmlmb3JtOiBvYmoudW5pZm9ybSxcblx0XHR9XG5cdH1cblxuXHQvLyBUT0RPOiBjbGVhblxuXHRmdW5jdGlvbiBzcHJpdGUoXG5cdFx0c3JjOiBzdHJpbmcgfCBTcHJpdGVEYXRhIHwgQXNzZXQ8U3ByaXRlRGF0YT4sXG5cdFx0b3B0OiBTcHJpdGVDb21wT3B0ID0ge30sXG5cdCk6IFNwcml0ZUNvbXAge1xuXG5cdFx0bGV0IHNwcml0ZURhdGE6IFNwcml0ZURhdGEgfCBudWxsID0gbnVsbFxuXHRcdGxldCBjdXJBbmltOiBTcHJpdGVDdXJBbmltIHwgbnVsbCA9IG51bGxcblx0XHQvLyAxICAtIGZyb20gc21hbGwgaW5kZXggdG8gbGFyZ2UgaW5kZXhcblx0XHQvLyAtMSAtIHJldmVyc2Vcblx0XHRsZXQgY3VyQW5pbURpcjogLTEgfCAxIHwgbnVsbCA9IG51bGxcblx0XHRjb25zdCBzcHJpdGVMb2FkZWRFdmVudCA9IG5ldyBFdmVudDxbU3ByaXRlRGF0YV0+KClcblxuXHRcdGlmICghc3JjKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcGFzcyB0aGUgcmVzb3VyY2UgbmFtZSBvciBkYXRhIHRvIHNwcml0ZSgpXCIpXG5cdFx0fVxuXG5cdFx0Y29uc3QgY2FsY1RleFNjYWxlID0gKHRleDogVGV4dHVyZSwgcTogUXVhZCwgdz86IG51bWJlciwgaD86IG51bWJlcik6IFZlYzIgPT4ge1xuXHRcdFx0Y29uc3Qgc2NhbGUgPSB2ZWMyKDEsIDEpXG5cdFx0XHRpZiAodyAmJiBoKSB7XG5cdFx0XHRcdHNjYWxlLnggPSB3IC8gKHRleC53aWR0aCAqIHEudylcblx0XHRcdFx0c2NhbGUueSA9IGggLyAodGV4LmhlaWdodCAqIHEuaClcblx0XHRcdH0gZWxzZSBpZiAodykge1xuXHRcdFx0XHRzY2FsZS54ID0gdyAvICh0ZXgud2lkdGggKiBxLncpXG5cdFx0XHRcdHNjYWxlLnkgPSBzY2FsZS54XG5cdFx0XHR9IGVsc2UgaWYgKGgpIHtcblx0XHRcdFx0c2NhbGUueSA9IGggLyAodGV4LmhlaWdodCAqIHEuaClcblx0XHRcdFx0c2NhbGUueCA9IHNjYWxlLnlcblx0XHRcdH1cblx0XHRcdHJldHVybiBzY2FsZVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cblx0XHRcdGlkOiBcInNwcml0ZVwiLFxuXHRcdFx0Ly8gVE9ETzogYWxsb3cgdXBkYXRlXG5cdFx0XHR3aWR0aDogMCxcblx0XHRcdGhlaWdodDogMCxcblx0XHRcdGZyYW1lOiBvcHQuZnJhbWUgfHwgMCxcblx0XHRcdHF1YWQ6IG9wdC5xdWFkIHx8IG5ldyBRdWFkKDAsIDAsIDEsIDEpLFxuXHRcdFx0YW5pbVNwZWVkOiBvcHQuYW5pbVNwZWVkID8/IDEsXG5cdFx0XHRmbGlwWDogb3B0LmZsaXBYID8/IGZhbHNlLFxuXHRcdFx0ZmxpcFk6IG9wdC5mbGlwWSA/PyBmYWxzZSxcblxuXHRcdFx0ZHJhdyh0aGlzOiBHYW1lT2JqPFNwcml0ZUNvbXA+KSB7XG5cblx0XHRcdFx0aWYgKCFzcHJpdGVEYXRhKSByZXR1cm5cblxuXHRcdFx0XHRjb25zdCBxID0gc3ByaXRlRGF0YS5mcmFtZXNbdGhpcy5mcmFtZSA/PyAwXVxuXG5cdFx0XHRcdGlmICghcSkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgRnJhbWUgbm90IGZvdW5kOiAke3RoaXMuZnJhbWUgPz8gMH1gKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHNwcml0ZURhdGEuc2xpY2U5KSB7XG5cdFx0XHRcdFx0Ly8gVE9ETzogdGlsZVxuXHRcdFx0XHRcdC8vIFRPRE86IHVzZSBzY2FsZSBvciB3aWR0aCAvIGhlaWdodCwgb3IgYm90aD9cblx0XHRcdFx0XHRjb25zdCB7IGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSB9ID0gc3ByaXRlRGF0YS5zbGljZTlcblx0XHRcdFx0XHRjb25zdCB0dyA9IHNwcml0ZURhdGEudGV4LndpZHRoICogcS53XG5cdFx0XHRcdFx0Y29uc3QgdGggPSBzcHJpdGVEYXRhLnRleC5oZWlnaHQgKiBxLmhcblx0XHRcdFx0XHRjb25zdCBpdyA9IHRoaXMud2lkdGggLSBsZWZ0IC0gcmlnaHRcblx0XHRcdFx0XHRjb25zdCBpaCA9IHRoaXMuaGVpZ2h0IC0gdG9wIC0gYm90dG9tXG5cdFx0XHRcdFx0Y29uc3QgdzEgPSBsZWZ0IC8gdHdcblx0XHRcdFx0XHRjb25zdCB3MyA9IHJpZ2h0IC8gdHdcblx0XHRcdFx0XHRjb25zdCB3MiA9IDEgLSB3MSAtIHczXG5cdFx0XHRcdFx0Y29uc3QgaDEgPSB0b3AgLyB0aFxuXHRcdFx0XHRcdGNvbnN0IGgzID0gYm90dG9tIC8gdGhcblx0XHRcdFx0XHRjb25zdCBoMiA9IDEgLSBoMSAtIGgzXG5cdFx0XHRcdFx0Y29uc3QgcXVhZHMgPSBbXG5cdFx0XHRcdFx0XHQvLyB1dlxuXHRcdFx0XHRcdFx0cXVhZCgwLCAgICAgICAwLCAgICAgICB3MSwgaDEpLFxuXHRcdFx0XHRcdFx0cXVhZCh3MSwgICAgICAwLCAgICAgICB3MiwgaDEpLFxuXHRcdFx0XHRcdFx0cXVhZCh3MSArIHcyLCAwLCAgICAgICB3MywgaDEpLFxuXHRcdFx0XHRcdFx0cXVhZCgwLCAgICAgICBoMSwgICAgICB3MSwgaDIpLFxuXHRcdFx0XHRcdFx0cXVhZCh3MSwgICAgICBoMSwgICAgICB3MiwgaDIpLFxuXHRcdFx0XHRcdFx0cXVhZCh3MSArIHcyLCBoMSwgICAgICB3MywgaDIpLFxuXHRcdFx0XHRcdFx0cXVhZCgwLCAgICAgICBoMSArIGgyLCB3MSwgaDMpLFxuXHRcdFx0XHRcdFx0cXVhZCh3MSwgICAgICBoMSArIGgyLCB3MiwgaDMpLFxuXHRcdFx0XHRcdFx0cXVhZCh3MSArIHcyLCBoMSArIGgyLCB3MywgaDMpLFxuXHRcdFx0XHRcdFx0Ly8gdHJhbnNmb3JtXG5cdFx0XHRcdFx0XHRxdWFkKDAsICAgICAgICAgMCwgICAgICAgIGxlZnQsICB0b3ApLFxuXHRcdFx0XHRcdFx0cXVhZChsZWZ0LCAgICAgIDAsICAgICAgICBpdywgICAgdG9wKSxcblx0XHRcdFx0XHRcdHF1YWQobGVmdCArIGl3LCAwLCAgICAgICAgcmlnaHQsIHRvcCksXG5cdFx0XHRcdFx0XHRxdWFkKDAsICAgICAgICAgdG9wLCAgICAgIGxlZnQsICBpaCksXG5cdFx0XHRcdFx0XHRxdWFkKGxlZnQsICAgICAgdG9wLCAgICAgIGl3LCAgICBpaCksXG5cdFx0XHRcdFx0XHRxdWFkKGxlZnQgKyBpdywgdG9wLCAgICAgIHJpZ2h0LCBpaCksXG5cdFx0XHRcdFx0XHRxdWFkKDAsICAgICAgICAgdG9wICsgaWgsIGxlZnQsICBib3R0b20pLFxuXHRcdFx0XHRcdFx0cXVhZChsZWZ0LCAgICAgIHRvcCArIGloLCBpdywgICAgYm90dG9tKSxcblx0XHRcdFx0XHRcdHF1YWQobGVmdCArIGl3LCB0b3AgKyBpaCwgcmlnaHQsIGJvdHRvbSksXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB1diA9IHF1YWRzW2ldXG5cdFx0XHRcdFx0XHRjb25zdCB0cmFuc2Zvcm0gPSBxdWFkc1tpICsgOV1cblx0XHRcdFx0XHRcdGRyYXdUZXh0dXJlKE9iamVjdC5hc3NpZ24oZ2V0UmVuZGVyUHJvcHModGhpcyksIHtcblx0XHRcdFx0XHRcdFx0cG9zOiB0cmFuc2Zvcm0ucG9zKCksXG5cdFx0XHRcdFx0XHRcdHRleDogc3ByaXRlRGF0YS50ZXgsXG5cdFx0XHRcdFx0XHRcdHF1YWQ6IHEuc2NhbGUodXYpLFxuXHRcdFx0XHRcdFx0XHRmbGlwWDogdGhpcy5mbGlwWCxcblx0XHRcdFx0XHRcdFx0ZmxpcFk6IHRoaXMuZmxpcFksXG5cdFx0XHRcdFx0XHRcdHRpbGVkOiBvcHQudGlsZWQsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiB0cmFuc2Zvcm0udyxcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiB0cmFuc2Zvcm0uaCxcblx0XHRcdFx0XHRcdH0pKVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRyYXdUZXh0dXJlKE9iamVjdC5hc3NpZ24oZ2V0UmVuZGVyUHJvcHModGhpcyksIHtcblx0XHRcdFx0XHRcdHRleDogc3ByaXRlRGF0YS50ZXgsXG5cdFx0XHRcdFx0XHRxdWFkOiBxLnNjYWxlKHRoaXMucXVhZCA/PyBuZXcgUXVhZCgwLCAwLCAxLCAxKSksXG5cdFx0XHRcdFx0XHRmbGlwWDogdGhpcy5mbGlwWCxcblx0XHRcdFx0XHRcdGZsaXBZOiB0aGlzLmZsaXBZLFxuXHRcdFx0XHRcdFx0dGlsZWQ6IG9wdC50aWxlZCxcblx0XHRcdFx0XHRcdHdpZHRoOiB0aGlzLndpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLmhlaWdodCxcblx0XHRcdFx0XHR9KSlcblx0XHRcdFx0fVxuXG5cdFx0XHR9LFxuXG5cdFx0XHRhZGQodGhpczogR2FtZU9iajxTcHJpdGVDb21wPikge1xuXG5cdFx0XHRcdGNvbnN0IHNldFNwcml0ZURhdGEgPSAoc3ByKSA9PiB7XG5cblx0XHRcdFx0XHRsZXQgcSA9IHNwci5mcmFtZXNbMF0uY2xvbmUoKVxuXG5cdFx0XHRcdFx0aWYgKG9wdC5xdWFkKSB7XG5cdFx0XHRcdFx0XHRxID0gcS5zY2FsZShvcHQucXVhZClcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCBzY2FsZSA9IGNhbGNUZXhTY2FsZShzcHIudGV4LCBxLCBvcHQud2lkdGgsIG9wdC5oZWlnaHQpXG5cblx0XHRcdFx0XHR0aGlzLndpZHRoID0gc3ByLnRleC53aWR0aCAqIHEudyAqIHNjYWxlLnhcblx0XHRcdFx0XHR0aGlzLmhlaWdodCA9IHNwci50ZXguaGVpZ2h0ICogcS5oICogc2NhbGUueVxuXG5cdFx0XHRcdFx0aWYgKG9wdC5hbmltKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnBsYXkob3B0LmFuaW0pXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c3ByaXRlRGF0YSA9IHNwclxuXHRcdFx0XHRcdHNwcml0ZUxvYWRlZEV2ZW50LnRyaWdnZXIoc3ByaXRlRGF0YSlcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgc3ByID0gcmVzb2x2ZVNwcml0ZShzcmMpXG5cblx0XHRcdFx0aWYgKHNwcikge1xuXHRcdFx0XHRcdHNwci5vbkxvYWQoc2V0U3ByaXRlRGF0YSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRvbkxvYWQoKCkgPT4gc2V0U3ByaXRlRGF0YShyZXNvbHZlU3ByaXRlKHNyYykuZGF0YSkpXG5cdFx0XHRcdH1cblxuXHRcdFx0fSxcblxuXHRcdFx0dXBkYXRlKHRoaXM6IEdhbWVPYmo8U3ByaXRlQ29tcD4pIHtcblxuXHRcdFx0XHRpZiAoIWN1ckFuaW0pIHtcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGFuaW0gPSBzcHJpdGVEYXRhLmFuaW1zW2N1ckFuaW0ubmFtZV1cblxuXHRcdFx0XHRpZiAodHlwZW9mIGFuaW0gPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0XHR0aGlzLmZyYW1lID0gYW5pbVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFuaW0uc3BlZWQgPT09IDApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJTcHJpdGUgYW5pbSBzcGVlZCBjYW5ub3QgYmUgMFwiKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y3VyQW5pbS50aW1lciArPSBkdCgpICogdGhpcy5hbmltU3BlZWRcblxuXHRcdFx0XHRpZiAoY3VyQW5pbS50aW1lciA+PSAoMSAvIGN1ckFuaW0uc3BlZWQpKSB7XG5cblx0XHRcdFx0XHRjdXJBbmltLnRpbWVyID0gMFxuXHRcdFx0XHRcdHRoaXMuZnJhbWUgKz0gY3VyQW5pbURpclxuXG5cdFx0XHRcdFx0aWYgKHRoaXMuZnJhbWUgPCBNYXRoLm1pbihhbmltLmZyb20sIGFuaW0udG8pIHx8XG5cdFx0XHRcdFx0XHR0aGlzLmZyYW1lID4gTWF0aC5tYXgoYW5pbS5mcm9tLCBhbmltLnRvKSkge1xuXHRcdFx0XHRcdFx0aWYgKGN1ckFuaW0ubG9vcCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VyQW5pbS5waW5ncG9uZykge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZnJhbWUgLT0gY3VyQW5pbURpclxuXHRcdFx0XHRcdFx0XHRcdGN1ckFuaW1EaXIgKj0gLTFcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmZyYW1lICs9IGN1ckFuaW1EaXJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmZyYW1lID0gYW5pbS5mcm9tXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZnJhbWUgPSBhbmltLnRvXG5cdFx0XHRcdFx0XHRcdGN1ckFuaW0ub25FbmQoKVxuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3AoKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdH0sXG5cblx0XHRcdHBsYXkodGhpczogR2FtZU9iajxTcHJpdGVDb21wPiwgbmFtZTogc3RyaW5nLCBvcHQ6IFNwcml0ZUFuaW1QbGF5T3B0ID0ge30pIHtcblxuXHRcdFx0XHRpZiAoIXNwcml0ZURhdGEpIHtcblx0XHRcdFx0XHRzcHJpdGVMb2FkZWRFdmVudC5hZGQoKCkgPT4gdGhpcy5wbGF5KG5hbWUsIG9wdCkpXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBhbmltID0gc3ByaXRlRGF0YS5hbmltc1tuYW1lXVxuXG5cdFx0XHRcdGlmIChhbmltID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEFuaW0gbm90IGZvdW5kOiAke25hbWV9YClcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjdXJBbmltKSB7XG5cdFx0XHRcdFx0dGhpcy5zdG9wKClcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGN1ckFuaW0gPSB0eXBlb2YgYW5pbSA9PT0gXCJudW1iZXJcIlxuXHRcdFx0XHRcdD8ge1xuXHRcdFx0XHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdFx0XHRcdHRpbWVyOiAwLFxuXHRcdFx0XHRcdFx0bG9vcDogZmFsc2UsXG5cdFx0XHRcdFx0XHRwaW5ncG9uZzogZmFsc2UsXG5cdFx0XHRcdFx0XHRzcGVlZDogMCxcblx0XHRcdFx0XHRcdG9uRW5kOiAoKSA9PiB7fSxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0OiB7XG5cdFx0XHRcdFx0XHRuYW1lOiBuYW1lLFxuXHRcdFx0XHRcdFx0dGltZXI6IDAsXG5cdFx0XHRcdFx0XHRsb29wOiBvcHQubG9vcCA/PyBhbmltLmxvb3AgPz8gZmFsc2UsXG5cdFx0XHRcdFx0XHRwaW5ncG9uZzogb3B0LnBpbmdwb25nID8/IGFuaW0ucGluZ3BvbmcgPz8gZmFsc2UsXG5cdFx0XHRcdFx0XHRzcGVlZDogb3B0LnNwZWVkID8/IGFuaW0uc3BlZWQgPz8gMTAsXG5cdFx0XHRcdFx0XHRvbkVuZDogb3B0Lm9uRW5kID8/ICgoKSA9PiB7fSksXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdGN1ckFuaW1EaXIgPSB0eXBlb2YgYW5pbSA9PT0gXCJudW1iZXJcIlxuXHRcdFx0XHRcdD8gbnVsbFxuXHRcdFx0XHRcdDogYW5pbS5mcm9tIDwgYW5pbS50byA/IDEgOiAtMVxuXG5cdFx0XHRcdHRoaXMuZnJhbWUgPSB0eXBlb2YgYW5pbSA9PT0gXCJudW1iZXJcIlxuXHRcdFx0XHRcdD8gYW5pbVxuXHRcdFx0XHRcdDogYW5pbS5mcm9tXG5cblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiYW5pbVN0YXJ0XCIsIG5hbWUpXG5cblx0XHRcdH0sXG5cblx0XHRcdHN0b3AodGhpczogR2FtZU9iajxTcHJpdGVDb21wPikge1xuXHRcdFx0XHRpZiAoIWN1ckFuaW0pIHtcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwcmV2QW5pbSA9IGN1ckFuaW0ubmFtZVxuXHRcdFx0XHRjdXJBbmltID0gbnVsbFxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJhbmltRW5kXCIsIHByZXZBbmltKVxuXHRcdFx0fSxcblxuXHRcdFx0bnVtRnJhbWVzKCkge1xuXHRcdFx0XHRyZXR1cm4gc3ByaXRlRGF0YT8uZnJhbWVzLmxlbmd0aCA/PyAwXG5cdFx0XHR9LFxuXG5cdFx0XHRjdXJBbmltKCkge1xuXHRcdFx0XHRyZXR1cm4gY3VyQW5pbT8ubmFtZVxuXHRcdFx0fSxcblxuXHRcdFx0b25BbmltRW5kKFxuXHRcdFx0XHR0aGlzOiBHYW1lT2JqPFNwcml0ZUNvbXA+LFxuXHRcdFx0XHRhY3Rpb246IChuYW1lOiBzdHJpbmcpID0+IHZvaWQsXG5cdFx0XHQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcImFuaW1FbmRcIiwgYWN0aW9uKVxuXHRcdFx0fSxcblxuXHRcdFx0b25BbmltU3RhcnQoXG5cdFx0XHRcdHRoaXM6IEdhbWVPYmo8U3ByaXRlQ29tcD4sXG5cdFx0XHRcdGFjdGlvbjogKG5hbWU6IHN0cmluZykgPT4gdm9pZCxcblx0XHRcdCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiYW5pbVN0YXJ0XCIsIGFjdGlvbilcblx0XHRcdH0sXG5cblx0XHRcdHJlbmRlckFyZWEoKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgUmVjdCh2ZWMyKDApLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcblx0XHRcdH0sXG5cblx0XHRcdGluc3BlY3QoKSB7XG5cdFx0XHRcdGlmICh0eXBlb2Ygc3JjID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGBcIiR7c3JjfVwiYFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiB0ZXh0KHQ6IHN0cmluZywgb3B0OiBUZXh0Q29tcE9wdCA9IHt9KTogVGV4dENvbXAge1xuXG5cdFx0ZnVuY3Rpb24gdXBkYXRlKG9iajogR2FtZU9iajxUZXh0Q29tcCB8IGFueT4pIHtcblxuXHRcdFx0Y29uc3QgZnRleHQgPSBmb3JtYXRUZXh0KE9iamVjdC5hc3NpZ24oZ2V0UmVuZGVyUHJvcHMob2JqKSwge1xuXHRcdFx0XHR0ZXh0OiBvYmoudGV4dCArIFwiXCIsXG5cdFx0XHRcdHNpemU6IG9iai50ZXh0U2l6ZSxcblx0XHRcdFx0Zm9udDogb2JqLmZvbnQsXG5cdFx0XHRcdHdpZHRoOiBvcHQud2lkdGggJiYgb2JqLndpZHRoLFxuXHRcdFx0XHRhbGlnbjogb2JqLmFsaWduLFxuXHRcdFx0XHRsZXR0ZXJTcGFjaW5nOiBvYmoubGV0dGVyU3BhY2luZyxcblx0XHRcdFx0bGluZVNwYWNpbmc6IG9iai5saW5lU3BhY2luZyxcblx0XHRcdFx0Ly8gVE9ETzogc2hvdWxkbid0IHJ1biB3aGVuIG9iamVjdCAvIGFuY2VzdG9yIGlzIHBhdXNlZFxuXHRcdFx0XHR0cmFuc2Zvcm06IG9iai50ZXh0VHJhbnNmb3JtLFxuXHRcdFx0XHRzdHlsZXM6IG9iai50ZXh0U3R5bGVzLFxuXHRcdFx0fSkpXG5cblx0XHRcdGlmICghb3B0LndpZHRoKSB7XG5cdFx0XHRcdG9iai53aWR0aCA9IGZ0ZXh0LndpZHRoIC8gKG9iai5zY2FsZT8ueCB8fCAxKVxuXHRcdFx0fVxuXG5cdFx0XHRvYmouaGVpZ2h0ID0gZnRleHQuaGVpZ2h0IC8gKG9iai5zY2FsZT8ueSB8fCAxKVxuXG5cdFx0XHRyZXR1cm4gZnRleHRcblxuXHRcdH1cblxuXHRcdGNvbnN0IG9iaiA9IHtcblxuXHRcdFx0aWQ6IFwidGV4dFwiLFxuXHRcdFx0c2V0IHRleHQobnQpIHtcblx0XHRcdFx0dCA9IG50XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0dXBkYXRlKHRoaXMpXG5cdFx0XHR9LFxuXHRcdFx0Z2V0IHRleHQoKSB7XG5cdFx0XHRcdHJldHVybiB0XG5cdFx0XHR9LFxuXHRcdFx0dGV4dFNpemU6IG9wdC5zaXplID8/IERFRl9URVhUX1NJWkUsXG5cdFx0XHRmb250OiBvcHQuZm9udCxcblx0XHRcdHdpZHRoOiBvcHQud2lkdGggPz8gMCxcblx0XHRcdGhlaWdodDogMCxcblx0XHRcdGFsaWduOiBvcHQuYWxpZ24sXG5cdFx0XHRsaW5lU3BhY2luZzogb3B0LmxpbmVTcGFjaW5nLFxuXHRcdFx0bGV0dGVyU3BhY2luZzogb3B0LmxldHRlclNwYWNpbmcsXG5cdFx0XHR0ZXh0VHJhbnNmb3JtOiBvcHQudHJhbnNmb3JtLFxuXHRcdFx0dGV4dFN0eWxlczogb3B0LnN0eWxlcyxcblxuXHRcdFx0YWRkKHRoaXM6IEdhbWVPYmo8VGV4dENvbXA+KSB7XG5cdFx0XHRcdG9uTG9hZCgoKSA9PiB1cGRhdGUodGhpcykpXG5cdFx0XHR9LFxuXG5cdFx0XHRkcmF3KHRoaXM6IEdhbWVPYmo8VGV4dENvbXA+KSB7XG5cdFx0XHRcdGRyYXdGb3JtYXR0ZWRUZXh0KHVwZGF0ZSh0aGlzKSlcblx0XHRcdH0sXG5cblx0XHRcdHJlbmRlckFyZWEoKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgUmVjdCh2ZWMyKDApLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcblx0XHRcdH0sXG5cblx0XHR9XG5cblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0dXBkYXRlKG9iailcblxuXHRcdHJldHVybiBvYmpcblxuXHR9XG5cblx0ZnVuY3Rpb24gcG9seWdvbihwdHM6IFZlYzJbXSwgb3B0OiBQb2x5Z29uQ29tcE9wdCA9IHt9KTogUG9seWdvbkNvbXAge1xuXHRcdGlmKHB0cy5sZW5ndGggPCAzKSB0aHJvdyBuZXcgRXJyb3IoYFBvbHlnb24ncyBuZWVkIG1vcmUgdGhhbiB0d28gcG9pbnRzLCAke3B0cy5sZW5ndGh9IHBvaW50cyBwcm92aWRlZGApXG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcInBvbHlnb25cIixcblx0XHRcdHB0cyxcblx0XHRcdGNvbG9yczogb3B0LmNvbG9ycyxcblx0XHRcdHJhZGl1czogb3B0LnJhZGl1cyxcblx0XHRcdGRyYXcodGhpczogR2FtZU9iajxQb2x5Z29uQ29tcD4pIHtcblx0XHRcdFx0ZHJhd1BvbHlnb24oT2JqZWN0LmFzc2lnbihnZXRSZW5kZXJQcm9wcyh0aGlzKSwge1xuXHRcdFx0XHRcdHB0czogdGhpcy5wdHMsXG5cdFx0XHRcdFx0Y29sb3JzOiB0aGlzLmNvbG9ycyxcblx0XHRcdFx0XHRyYWRpdXM6IHRoaXMucmFkaXVzLFxuXHRcdFx0XHRcdGZpbGw6IG9wdC5maWxsLFxuXHRcdFx0XHR9KSlcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXJBcmVhKHRoaXM6IEdhbWVPYmo8UG9seWdvbkNvbXA+KSB7XG5cdFx0XHRcdHJldHVybiBuZXcgUG9seWdvbih0aGlzLnB0cylcblx0XHRcdH0sXG5cdFx0XHRpbnNwZWN0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wdHMubWFwKHAgPT4gYFske3AueH0sJHtwLnl9XWApLmpvaW4oXCIsXCIpXG5cdFx0XHR9LFxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJlY3QodzogbnVtYmVyLCBoOiBudW1iZXIsIG9wdDogUmVjdENvbXBPcHQgPSB7fSk6IFJlY3RDb21wIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwicmVjdFwiLFxuXHRcdFx0d2lkdGg6IHcsXG5cdFx0XHRoZWlnaHQ6IGgsXG5cdFx0XHRyYWRpdXM6IG9wdC5yYWRpdXMgfHwgMCxcblx0XHRcdGRyYXcodGhpczogR2FtZU9iajxSZWN0Q29tcD4pIHtcblx0XHRcdFx0ZHJhd1JlY3QoT2JqZWN0LmFzc2lnbihnZXRSZW5kZXJQcm9wcyh0aGlzKSwge1xuXHRcdFx0XHRcdHdpZHRoOiB0aGlzLndpZHRoLFxuXHRcdFx0XHRcdGhlaWdodDogdGhpcy5oZWlnaHQsXG5cdFx0XHRcdFx0cmFkaXVzOiB0aGlzLnJhZGl1cyxcblx0XHRcdFx0XHRmaWxsOiBvcHQuZmlsbCxcblx0XHRcdFx0fSkpXG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyQXJlYSgpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBSZWN0KHZlYzIoMCksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuXHRcdFx0fSxcblx0XHRcdGluc3BlY3QoKSB7XG5cdFx0XHRcdHJldHVybiBgJHtNYXRoLmNlaWwodGhpcy53aWR0aCl9LCAke01hdGguY2VpbCh0aGlzLmhlaWdodCl9YFxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB1dnF1YWQodzogbnVtYmVyLCBoOiBudW1iZXIpOiBVVlF1YWRDb21wIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwicmVjdFwiLFxuXHRcdFx0d2lkdGg6IHcsXG5cdFx0XHRoZWlnaHQ6IGgsXG5cdFx0XHRkcmF3KHRoaXM6IEdhbWVPYmo8VVZRdWFkQ29tcD4pIHtcblx0XHRcdFx0ZHJhd1VWUXVhZChPYmplY3QuYXNzaWduKGdldFJlbmRlclByb3BzKHRoaXMpLCB7XG5cdFx0XHRcdFx0d2lkdGg6IHRoaXMud2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLmhlaWdodCxcblx0XHRcdFx0fSkpXG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyQXJlYSgpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBSZWN0KHZlYzIoMCksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuXHRcdFx0fSxcblx0XHRcdGluc3BlY3QoKSB7XG5cdFx0XHRcdHJldHVybiBgJHtNYXRoLmNlaWwodGhpcy53aWR0aCl9LCAke01hdGguY2VpbCh0aGlzLmhlaWdodCl9YFxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjaXJjbGUocmFkaXVzOiBudW1iZXIsIG9wdDogQ2lyY2xlQ29tcE9wdCA9IHt9KTogQ2lyY2xlQ29tcCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcImNpcmNsZVwiLFxuXHRcdFx0cmFkaXVzOiByYWRpdXMsXG5cdFx0XHRkcmF3KHRoaXM6IEdhbWVPYmo8Q2lyY2xlQ29tcD4pIHtcblx0XHRcdFx0ZHJhd0NpcmNsZShPYmplY3QuYXNzaWduKGdldFJlbmRlclByb3BzKHRoaXMpLCB7XG5cdFx0XHRcdFx0cmFkaXVzOiB0aGlzLnJhZGl1cyxcblx0XHRcdFx0XHRmaWxsOiBvcHQuZmlsbCxcblx0XHRcdFx0fSkpXG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyQXJlYSh0aGlzOiBHYW1lT2JqPEFuY2hvckNvbXAgfCBDaXJjbGVDb21wPikge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJlY3QobmV3IFZlYzIodGhpcy5hbmNob3IgPyAwIDogLXRoaXMucmFkaXVzKSwgdGhpcy5yYWRpdXMgKiAyLCB0aGlzLnJhZGl1cyAqIDIpXG5cdFx0XHR9LFxuXHRcdFx0aW5zcGVjdCgpIHtcblx0XHRcdFx0cmV0dXJuIGAke01hdGguY2VpbCh0aGlzLnJhZGl1cyl9YFxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBvdXRsaW5lKHdpZHRoOiBudW1iZXIgPSAxLCBjb2xvcjogQ29sb3IgPSByZ2IoMCwgMCwgMCkpOiBPdXRsaW5lQ29tcCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcIm91dGxpbmVcIixcblx0XHRcdG91dGxpbmU6IHtcblx0XHRcdFx0d2lkdGgsXG5cdFx0XHRcdGNvbG9yLFxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB0aW1lcigpOiBUaW1lckNvbXAge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJ0aW1lclwiLFxuXHRcdFx0d2FpdCh0aGlzOiBHYW1lT2JqPFRpbWVyQ29tcD4sIHRpbWU6IG51bWJlciwgYWN0aW9uPzogKCkgPT4gdm9pZCk6IFRpbWVyQ29udHJvbGxlciB7XG5cdFx0XHRcdGNvbnN0IGFjdGlvbnMgPSBbXVxuXHRcdFx0XHRpZiAoYWN0aW9uKSBhY3Rpb25zLnB1c2goYWN0aW9uKVxuXHRcdFx0XHRsZXQgdCA9IDBcblx0XHRcdFx0Y29uc3QgZXYgPSB0aGlzLm9uVXBkYXRlKCgpID0+IHtcblx0XHRcdFx0XHR0ICs9IGR0KClcblx0XHRcdFx0XHRpZiAodCA+PSB0aW1lKSB7XG5cdFx0XHRcdFx0XHRhY3Rpb25zLmZvckVhY2goKGYpID0+IGYoKSlcblx0XHRcdFx0XHRcdGV2LmNhbmNlbCgpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGdldCBwYXVzZWQoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXYucGF1c2VkXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZXQgcGF1c2VkKHApIHtcblx0XHRcdFx0XHRcdGV2LnBhdXNlZCA9IHBcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhbmNlbDogZXYuY2FuY2VsLFxuXHRcdFx0XHRcdG9uRW5kKGFjdGlvbikge1xuXHRcdFx0XHRcdFx0YWN0aW9ucy5wdXNoKGFjdGlvbilcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRoZW4oYWN0aW9uKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uRW5kKGFjdGlvbilcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGxvb3AodDogbnVtYmVyLCBhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRsZXQgY3VyVGltZXI6IG51bGwgfCBUaW1lckNvbnRyb2xsZXIgPSBudWxsXG5cdFx0XHRcdGNvbnN0IG5ld0FjdGlvbiA9ICgpID0+IHtcblx0XHRcdFx0XHQvLyBUT0RPOiBzaG91bGQgZiBiZSBleGVjdXRlIHJpZ2h0IGF3YXkgYXMgbG9vcCgpIGlzIGNhbGxlZD9cblx0XHRcdFx0XHRjdXJUaW1lciA9IHRoaXMud2FpdCh0LCBuZXdBY3Rpb24pXG5cdFx0XHRcdFx0YWN0aW9uKClcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJUaW1lciA9IHRoaXMud2FpdCgwLCBuZXdBY3Rpb24pXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Z2V0IHBhdXNlZCgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBjdXJUaW1lci5wYXVzZWRcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNldCBwYXVzZWQocCkge1xuXHRcdFx0XHRcdFx0Y3VyVGltZXIucGF1c2VkID0gcFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2FuY2VsOiAoKSA9PiBjdXJUaW1lci5jYW5jZWwoKSxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHR3ZWVuPFYgZXh0ZW5kcyBMZXJwVmFsdWU+KFxuXHRcdFx0XHR0aGlzOiBHYW1lT2JqPFRpbWVyQ29tcD4sXG5cdFx0XHRcdGZyb206IFYsXG5cdFx0XHRcdHRvOiBWLFxuXHRcdFx0XHRkdXJhdGlvbjogbnVtYmVyLFxuXHRcdFx0XHRzZXRWYWx1ZTogKHZhbHVlOiBWKSA9PiB2b2lkLFxuXHRcdFx0XHRlYXNlRnVuYyA9IGVhc2luZ3MubGluZWFyLFxuXHRcdFx0KSB7XG5cdFx0XHRcdGxldCBjdXJUaW1lID0gMFxuXHRcdFx0XHRjb25zdCBvbkVuZEV2ZW50czogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXVxuXHRcdFx0XHRjb25zdCBldiA9IHRoaXMub25VcGRhdGUoKCkgPT4ge1xuXHRcdFx0XHRcdGN1clRpbWUgKz0gZHQoKVxuXHRcdFx0XHRcdGNvbnN0IHQgPSBNYXRoLm1pbihjdXJUaW1lIC8gZHVyYXRpb24sIDEpXG5cdFx0XHRcdFx0c2V0VmFsdWUobGVycChmcm9tLCB0bywgZWFzZUZ1bmModCkpKVxuXHRcdFx0XHRcdGlmICh0ID09PSAxKSB7XG5cdFx0XHRcdFx0XHRldi5jYW5jZWwoKVxuXHRcdFx0XHRcdFx0c2V0VmFsdWUodG8pXG5cdFx0XHRcdFx0XHRvbkVuZEV2ZW50cy5mb3JFYWNoKChhY3Rpb24pID0+IGFjdGlvbigpKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRnZXQgcGF1c2VkKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV2LnBhdXNlZFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2V0IHBhdXNlZChwKSB7XG5cdFx0XHRcdFx0XHRldi5wYXVzZWQgPSBwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvbkVuZChhY3Rpb246ICgpID0+IHZvaWQpIHtcblx0XHRcdFx0XHRcdG9uRW5kRXZlbnRzLnB1c2goYWN0aW9uKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGhlbihhY3Rpb246ICgpID0+IHZvaWQpIHtcblx0XHRcdFx0XHRcdHRoaXMub25FbmQoYWN0aW9uKVxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXNcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhbmNlbCgpIHtcblx0XHRcdFx0XHRcdGV2LmNhbmNlbCgpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRmaW5pc2goKSB7XG5cdFx0XHRcdFx0XHRldi5jYW5jZWwoKVxuXHRcdFx0XHRcdFx0c2V0VmFsdWUodG8pXG5cdFx0XHRcdFx0XHRvbkVuZEV2ZW50cy5mb3JFYWNoKChhY3Rpb24pID0+IGFjdGlvbigpKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0Ly8gbWF4aW11bSB5IHZlbG9jaXR5IHdpdGggYm9keSgpXG5cdGNvbnN0IERFRl9KVU1QX0ZPUkNFID0gNjQwXG5cdGNvbnN0IE1BWF9WRUwgPSA2NTUzNlxuXG5cdC8vIFRPRE86IGxhbmQgb24gd2FsbFxuXHRmdW5jdGlvbiBib2R5KG9wdDogQm9keUNvbXBPcHQgPSB7fSk6IEJvZHlDb21wIHtcblxuXHRcdGxldCBjdXJQbGF0Zm9ybTogR2FtZU9iajxQb3NDb21wIHwgQXJlYUNvbXAgfCBCb2R5Q29tcD4gfCBudWxsID0gbnVsbFxuXHRcdGxldCBsYXN0UGxhdGZvcm1Qb3MgPSBudWxsXG5cdFx0bGV0IHdhbnRGYWxsID0gZmFsc2VcblxuXHRcdHJldHVybiB7XG5cblx0XHRcdGlkOiBcImJvZHlcIixcblx0XHRcdHJlcXVpcmU6IFsgXCJwb3NcIiwgXCJhcmVhXCIgXSxcblx0XHRcdHZlbDogbmV3IFZlYzIoMCksXG5cdFx0XHRqdW1wRm9yY2U6IG9wdC5qdW1wRm9yY2UgPz8gREVGX0pVTVBfRk9SQ0UsXG5cdFx0XHRncmF2aXR5U2NhbGU6IG9wdC5ncmF2aXR5U2NhbGUgPz8gMSxcblx0XHRcdGlzU3RhdGljOiBvcHQuaXNTdGF0aWMgPz8gZmFsc2UsXG5cdFx0XHQvLyBUT0RPOiBwcmVmZXIgZGVuc2l0eSAqIGFyZWEoKVxuXHRcdFx0bWFzczogb3B0Lm1hc3MgPz8gMSxcblxuXHRcdFx0YWRkKHRoaXM6IEdhbWVPYmo8UG9zQ29tcCB8IEJvZHlDb21wIHwgQXJlYUNvbXA+KSB7XG5cblx0XHRcdFx0aWYgKHRoaXMubWFzcyA9PT0gMCkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbid0IHNldCBib2R5IG1hc3MgdG8gMFwiKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gc3RhdGljIHZzIHN0YXRpYzogZG9uJ3QgcmVzb2x2ZVxuXHRcdFx0XHQvLyBzdGF0aWMgdnMgbm9uLXN0YXRpYzogYWx3YXlzIHJlc29sdmUgbm9uLXN0YXRpY1xuXHRcdFx0XHQvLyBub24tc3RhdGljIHZzIG5vbi1zdGF0aWM6IHJlc29sdmUgdGhlIGZpcnN0IG9uZVxuXHRcdFx0XHR0aGlzLm9uQ29sbGlkZVVwZGF0ZSgob3RoZXI6IEdhbWVPYmo8UG9zQ29tcCB8IEJvZHlDb21wPiwgY29sKSA9PiB7XG5cblx0XHRcdFx0XHRpZiAoIW90aGVyLmlzKFwiYm9keVwiKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGNvbC5yZXNvbHZlZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiYmVmb3JlUGh5c2ljc1Jlc29sdmVcIiwgY29sKVxuXHRcdFx0XHRcdG90aGVyLnRyaWdnZXIoXCJiZWZvcmVQaHlzaWNzUmVzb2x2ZVwiLCBjb2wucmV2ZXJzZSgpKVxuXG5cdFx0XHRcdFx0Ly8gdXNlciBjYW4gbWFyayAncmVzb2x2ZWQnIGluIGJlZm9yZVBoeXNpY3NSZXNvbHZlIHRvIHN0b3AgYSByZXNvbHV0aW9uXG5cdFx0XHRcdFx0aWYgKGNvbC5yZXNvbHZlZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHRoaXMuaXNTdGF0aWMgJiYgb3RoZXIuaXNTdGF0aWMpIHtcblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIXRoaXMuaXNTdGF0aWMgJiYgIW90aGVyLmlzU3RhdGljKSB7XG5cdFx0XHRcdFx0XHQvLyBUT0RPOiB1cGRhdGUgYWxsIGNoaWxkcmVuIHRyYW5zZm9ybT9cblx0XHRcdFx0XHRcdGNvbnN0IHRtYXNzID0gdGhpcy5tYXNzICsgb3RoZXIubWFzc1xuXHRcdFx0XHRcdFx0dGhpcy5wb3MgPSB0aGlzLnBvcy5hZGQoY29sLmRpc3BsYWNlbWVudC5zY2FsZShvdGhlci5tYXNzIC8gdG1hc3MpKVxuXHRcdFx0XHRcdFx0b3RoZXIucG9zID0gb3RoZXIucG9zLmFkZChjb2wuZGlzcGxhY2VtZW50LnNjYWxlKC10aGlzLm1hc3MgLyB0bWFzcykpXG5cdFx0XHRcdFx0XHR0aGlzLnRyYW5zZm9ybSA9IGNhbGNUcmFuc2Zvcm0odGhpcylcblx0XHRcdFx0XHRcdG90aGVyLnRyYW5zZm9ybSA9IGNhbGNUcmFuc2Zvcm0ob3RoZXIpXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIGlmIG9uZSBpcyBzdGF0aWMgYW5kIG9uIGlzIG5vdCwgcmVzb2x2ZSB0aGUgbm9uIHN0YXRpYyBvbmVcblx0XHRcdFx0XHRcdGNvbnN0IGNvbDIgPSAoIXRoaXMuaXNTdGF0aWMgJiYgb3RoZXIuaXNTdGF0aWMpID8gY29sIDogY29sLnJldmVyc2UoKVxuXHRcdFx0XHRcdFx0Y29sMi5zb3VyY2UucG9zID0gY29sMi5zb3VyY2UucG9zLmFkZChjb2wyLmRpc3BsYWNlbWVudClcblx0XHRcdFx0XHRcdGNvbDIuc291cmNlLnRyYW5zZm9ybSA9IGNhbGNUcmFuc2Zvcm0oY29sMi5zb3VyY2UpXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29sLnJlc29sdmVkID0gdHJ1ZVxuXHRcdFx0XHRcdHRoaXMudHJpZ2dlcihcInBoeXNpY3NSZXNvbHZlXCIsIGNvbClcblx0XHRcdFx0XHRvdGhlci50cmlnZ2VyKFwicGh5c2ljc1Jlc29sdmVcIiwgY29sLnJldmVyc2UoKSlcblxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdHRoaXMub25QaHlzaWNzUmVzb2x2ZSgoY29sKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGdhbWUuZ3Jhdml0eSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvbC5pc0JvdHRvbSgpICYmIHRoaXMuaXNGYWxsaW5nKCkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy52ZWwueSA9IDBcblx0XHRcdFx0XHRcdFx0Y3VyUGxhdGZvcm0gPSBjb2wudGFyZ2V0IGFzIEdhbWVPYmo8UG9zQ29tcCB8IEJvZHlDb21wIHwgQXJlYUNvbXA+XG5cdFx0XHRcdFx0XHRcdGxhc3RQbGF0Zm9ybVBvcyA9IGNvbC50YXJnZXQucG9zXG5cdFx0XHRcdFx0XHRcdGlmICh3YW50RmFsbCkge1xuXHRcdFx0XHRcdFx0XHRcdHdhbnRGYWxsID0gZmFsc2Vcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJncm91bmRcIiwgY3VyUGxhdGZvcm0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoY29sLmlzVG9wKCkgJiYgdGhpcy5pc0p1bXBpbmcoKSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnZlbC55ID0gMFxuXHRcdFx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJoZWFkYnV0dFwiLCBjb2wudGFyZ2V0KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblxuXHRcdFx0fSxcblxuXHRcdFx0dXBkYXRlKHRoaXM6IEdhbWVPYmo8UG9zQ29tcCB8IEJvZHlDb21wIHwgQXJlYUNvbXA+KSB7XG5cblx0XHRcdFx0aWYgKCFnYW1lLmdyYXZpdHkpIHtcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLmlzU3RhdGljKSB7XG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAod2FudEZhbGwpIHtcblx0XHRcdFx0XHRjdXJQbGF0Zm9ybSA9IG51bGxcblx0XHRcdFx0XHRsYXN0UGxhdGZvcm1Qb3MgPSBudWxsXG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiZmFsbE9mZlwiKVxuXHRcdFx0XHRcdHdhbnRGYWxsID0gZmFsc2Vcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjdXJQbGF0Zm9ybSkge1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdC8vIFRPRE86IHRoaXMgcHJldmVudHMgZnJvbSBmYWxsaW5nIHdoZW4gb24gZWRnZVxuXHRcdFx0XHRcdFx0IXRoaXMuaXNDb2xsaWRpbmcoY3VyUGxhdGZvcm0pXG5cdFx0XHRcdFx0XHR8fCAhY3VyUGxhdGZvcm0uZXhpc3RzKClcblx0XHRcdFx0XHRcdHx8ICFjdXJQbGF0Zm9ybS5pcyhcImJvZHlcIilcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHdhbnRGYWxsID0gdHJ1ZVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdCFjdXJQbGF0Zm9ybS5wb3MuZXEobGFzdFBsYXRmb3JtUG9zKVxuXHRcdFx0XHRcdFx0XHQmJiBvcHQuc3RpY2tUb1BsYXRmb3JtICE9PSBmYWxzZVxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubW92ZUJ5KGN1clBsYXRmb3JtLnBvcy5zdWIobGFzdFBsYXRmb3JtUG9zKSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxhc3RQbGF0Zm9ybVBvcyA9IGN1clBsYXRmb3JtLnBvc1xuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgcHJldlZlbFkgPSB0aGlzLnZlbC55XG5cdFx0XHRcdHRoaXMudmVsLnkgKz0gZ2FtZS5ncmF2aXR5ICogdGhpcy5ncmF2aXR5U2NhbGUgKiBkdCgpXG5cdFx0XHRcdHRoaXMudmVsLnkgPSBNYXRoLm1pbih0aGlzLnZlbC55LCBvcHQubWF4VmVsb2NpdHkgPz8gTUFYX1ZFTClcblx0XHRcdFx0aWYgKHByZXZWZWxZIDwgMCAmJiB0aGlzLnZlbC55ID49IDApIHtcblx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJmYWxsXCIpXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5tb3ZlKHRoaXMudmVsKVxuXG5cdFx0XHR9LFxuXG5cdFx0XHRvblBoeXNpY3NSZXNvbHZlKHRoaXM6IEdhbWVPYmosIGFjdGlvbikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcInBoeXNpY3NSZXNvbHZlXCIsIGFjdGlvbilcblx0XHRcdH0sXG5cblx0XHRcdG9uQmVmb3JlUGh5c2ljc1Jlc29sdmUodGhpczogR2FtZU9iaiwgYWN0aW9uKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiYmVmb3JlUGh5c2ljc1Jlc29sdmVcIiwgYWN0aW9uKVxuXHRcdFx0fSxcblxuXHRcdFx0Y3VyUGxhdGZvcm0oKTogR2FtZU9iaiB8IG51bGwge1xuXHRcdFx0XHRyZXR1cm4gY3VyUGxhdGZvcm1cblx0XHRcdH0sXG5cblx0XHRcdGlzR3JvdW5kZWQoKSB7XG5cdFx0XHRcdHJldHVybiBjdXJQbGF0Zm9ybSAhPT0gbnVsbFxuXHRcdFx0fSxcblxuXHRcdFx0aXNGYWxsaW5nKCk6IGJvb2xlYW4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy52ZWwueSA+IDBcblx0XHRcdH0sXG5cblx0XHRcdGlzSnVtcGluZygpOiBib29sZWFuIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudmVsLnkgPCAwXG5cdFx0XHR9LFxuXG5cdFx0XHRqdW1wKGZvcmNlOiBudW1iZXIpIHtcblx0XHRcdFx0Y3VyUGxhdGZvcm0gPSBudWxsXG5cdFx0XHRcdGxhc3RQbGF0Zm9ybVBvcyA9IG51bGxcblx0XHRcdFx0dGhpcy52ZWwueSA9IC1mb3JjZSB8fCAtdGhpcy5qdW1wRm9yY2Vcblx0XHRcdH0sXG5cblx0XHRcdG9uR3JvdW5kKHRoaXM6IEdhbWVPYmosIGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiZ3JvdW5kXCIsIGFjdGlvbilcblx0XHRcdH0sXG5cblx0XHRcdG9uRmFsbCh0aGlzOiBHYW1lT2JqLCBhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcImZhbGxcIiwgYWN0aW9uKVxuXHRcdFx0fSxcblxuXHRcdFx0b25GYWxsT2ZmKHRoaXM6IEdhbWVPYmosIGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiZmFsbE9mZlwiLCBhY3Rpb24pXG5cdFx0XHR9LFxuXG5cdFx0XHRvbkhlYWRidXR0KHRoaXM6IEdhbWVPYmosIGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiaGVhZGJ1dHRcIiwgYWN0aW9uKVxuXHRcdFx0fSxcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gZG91YmxlSnVtcChudW1KdW1wczogbnVtYmVyID0gMik6IERvdWJsZUp1bXBDb21wIHtcblx0XHRsZXQganVtcHNMZWZ0ID0gbnVtSnVtcHNcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwiZG91YmxlSnVtcFwiLFxuXHRcdFx0cmVxdWlyZTogWyBcImJvZHlcIiBdLFxuXHRcdFx0bnVtSnVtcHM6IG51bUp1bXBzLFxuXHRcdFx0YWRkKHRoaXM6IEdhbWVPYmo8Qm9keUNvbXAgfCBEb3VibGVKdW1wQ29tcD4pIHtcblx0XHRcdFx0dGhpcy5vbkdyb3VuZCgoKSA9PiB7XG5cdFx0XHRcdFx0anVtcHNMZWZ0ID0gdGhpcy5udW1KdW1wc1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdGRvdWJsZUp1bXAodGhpczogR2FtZU9iajxCb2R5Q29tcCB8IERvdWJsZUp1bXBDb21wPiwgZm9yY2U/OiBudW1iZXIpIHtcblx0XHRcdFx0aWYgKGp1bXBzTGVmdCA8PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGp1bXBzTGVmdCA8IHRoaXMubnVtSnVtcHMpIHtcblx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJkb3VibGVKdW1wXCIpXG5cdFx0XHRcdH1cblx0XHRcdFx0anVtcHNMZWZ0LS1cblx0XHRcdFx0dGhpcy5qdW1wKGZvcmNlKVxuXHRcdFx0fSxcblx0XHRcdG9uRG91YmxlSnVtcCh0aGlzOiBHYW1lT2JqLCBhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcImRvdWJsZUp1bXBcIiwgYWN0aW9uKVxuXHRcdFx0fSxcblx0XHRcdGluc3BlY3QodGhpczogR2FtZU9iajxCb2R5Q29tcCB8IERvdWJsZUp1bXBDb21wPikge1xuXHRcdFx0XHRyZXR1cm4gYCR7anVtcHNMZWZ0fWBcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gc2hhZGVyKGlkOiBzdHJpbmcsIHVuaWZvcm0/OiBVbmlmb3JtIHwgKCgpID0+IFVuaWZvcm0pKTogU2hhZGVyQ29tcCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcInNoYWRlclwiLFxuXHRcdFx0c2hhZGVyOiBpZCxcblx0XHRcdC4uLih0eXBlb2YgdW5pZm9ybSA9PT0gXCJmdW5jdGlvblwiID8ge1xuXHRcdFx0XHR1bmlmb3JtOiB1bmlmb3JtKCksXG5cdFx0XHRcdHVwZGF0ZSgpIHtcblx0XHRcdFx0XHR0aGlzLnVuaWZvcm0gPSB1bmlmb3JtKClcblx0XHRcdFx0fSxcblx0XHRcdH0gOiB7XG5cdFx0XHRcdHVuaWZvcm06IHVuaWZvcm0sXG5cdFx0XHR9KSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBmaXhlZCgpOiBGaXhlZENvbXAge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJmaXhlZFwiLFxuXHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gc3RheShzY2VuZXNUb1N0YXk/OiBzdHJpbmdbXSk6IFN0YXlDb21wIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwic3RheVwiLFxuXHRcdFx0c3RheTogdHJ1ZSxcblx0XHRcdHNjZW5lc1RvU3RheTogc2NlbmVzVG9TdGF5LFxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGhlYWx0aChocDogbnVtYmVyLCBtYXhIUD86IG51bWJlcik6IEhlYWx0aENvbXAge1xuXHRcdGlmIChocCA9PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJoZWFsdGgoKSByZXF1aXJlcyB0aGUgaW5pdGlhbCBhbW91bnQgb2YgaHBcIilcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcImhlYWx0aFwiLFxuXHRcdFx0aHVydCh0aGlzOiBHYW1lT2JqLCBuOiBudW1iZXIgPSAxKSB7XG5cdFx0XHRcdHRoaXMuc2V0SFAoaHAgLSBuKVxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJodXJ0XCIsIG4pXG5cdFx0XHR9LFxuXHRcdFx0aGVhbCh0aGlzOiBHYW1lT2JqLCBuOiBudW1iZXIgPSAxKSB7XG5cdFx0XHRcdGNvbnN0IG9yaWdIUCA9IGhwXG5cdFx0XHRcdHRoaXMuc2V0SFAoaHAgKyBuKVxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJoZWFsXCIsIGhwIC0gb3JpZ0hQKVxuXHRcdFx0fSxcblx0XHRcdGhwKCk6IG51bWJlciB7XG5cdFx0XHRcdHJldHVybiBocFxuXHRcdFx0fSxcblx0XHRcdG1heEhQKCk6IG51bWJlciB8IG51bGwge1xuXHRcdFx0XHRyZXR1cm4gbWF4SFAgPz8gbnVsbFxuXHRcdFx0fSxcblx0XHRcdHNldE1heEhQKG46IG51bWJlcik6IHZvaWQge1xuXHRcdFx0XHRtYXhIUCA9IG5cblx0XHRcdH0sXG5cdFx0XHRzZXRIUCh0aGlzOiBHYW1lT2JqLCBuOiBudW1iZXIpIHtcblx0XHRcdFx0aHAgPSBtYXhIUCA/IE1hdGgubWluKG1heEhQLCBuKSA6IG5cblx0XHRcdFx0aWYgKGhwIDw9IDApIHtcblx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJkZWF0aFwiKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0b25IdXJ0KHRoaXM6IEdhbWVPYmosIGFjdGlvbjogKGFtb3VudD86IG51bWJlcikgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiaHVydFwiLCBhY3Rpb24pXG5cdFx0XHR9LFxuXHRcdFx0b25IZWFsKHRoaXM6IEdhbWVPYmosIGFjdGlvbjogKGFtb3VudD86IG51bWJlcikgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiaGVhbFwiLCBhY3Rpb24pXG5cdFx0XHR9LFxuXHRcdFx0b25EZWF0aCh0aGlzOiBHYW1lT2JqLCBhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcImRlYXRoXCIsIGFjdGlvbilcblx0XHRcdH0sXG5cdFx0XHRpbnNwZWN0KCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7aHB9YFxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBsaWZlc3Bhbih0aW1lOiBudW1iZXIsIG9wdDogTGlmZXNwYW5Db21wT3B0ID0ge30pOiBFbXB0eUNvbXAge1xuXHRcdGlmICh0aW1lID09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImxpZmVzcGFuKCkgcmVxdWlyZXMgdGltZVwiKVxuXHRcdH1cblx0XHRjb25zdCBmYWRlID0gb3B0LmZhZGUgPz8gMFxuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJsaWZlc3BhblwiLFxuXHRcdFx0YXN5bmMgYWRkKHRoaXM6IEdhbWVPYmo8T3BhY2l0eUNvbXA+KSB7XG5cdFx0XHRcdGF3YWl0IHdhaXQodGltZSlcblx0XHRcdFx0Ly8gVE9ETzogdGhpcyBzZWNyZXRpdmVseSByZXF1aXJlcyBvcGFjaXR5IGNvbXAsIG1ha2Ugb3BhY2l0eSBvbiBldmVyeSBnYW1lIG9iaj9cblx0XHRcdFx0aWYgKGZhZGUgPiAwICYmIHRoaXMub3BhY2l0eSkge1xuXHRcdFx0XHRcdGF3YWl0IHR3ZWVuKHRoaXMub3BhY2l0eSwgMCwgZmFkZSwgKGEpID0+IHRoaXMub3BhY2l0eSA9IGEsIGVhc2luZ3MubGluZWFyKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZGVzdHJveSgpXG5cdFx0XHR9LFxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHN0YXRlKFxuXHRcdGluaXRTdGF0ZTogc3RyaW5nLFxuXHRcdHN0YXRlTGlzdD86IHN0cmluZ1tdLFxuXHRcdHRyYW5zaXRpb25zPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10+LFxuXHQpOiBTdGF0ZUNvbXAge1xuXG5cdFx0aWYgKCFpbml0U3RhdGUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcInN0YXRlKCkgcmVxdWlyZXMgYW4gaW5pdGlhbCBzdGF0ZVwiKVxuXHRcdH1cblxuXHRcdGNvbnN0IGV2ZW50cyA9IHt9XG5cblx0XHRmdW5jdGlvbiBpbml0U3RhdGVFdmVudHMoc3RhdGU6IHN0cmluZykge1xuXHRcdFx0aWYgKCFldmVudHNbc3RhdGVdKSB7XG5cdFx0XHRcdGV2ZW50c1tzdGF0ZV0gPSB7XG5cdFx0XHRcdFx0ZW50ZXI6IG5ldyBFdmVudCgpLFxuXHRcdFx0XHRcdGVuZDogbmV3IEV2ZW50KCksXG5cdFx0XHRcdFx0dXBkYXRlOiBuZXcgRXZlbnQoKSxcblx0XHRcdFx0XHRkcmF3OiBuZXcgRXZlbnQoKSxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uKGV2ZW50LCBzdGF0ZSwgYWN0aW9uKSB7XG5cdFx0XHRpbml0U3RhdGVFdmVudHMoc3RhdGUpXG5cdFx0XHRyZXR1cm4gZXZlbnRzW3N0YXRlXVtldmVudF0uYWRkKGFjdGlvbilcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cmlnZ2VyKGV2ZW50LCBzdGF0ZSwgLi4uYXJncykge1xuXHRcdFx0aW5pdFN0YXRlRXZlbnRzKHN0YXRlKVxuXHRcdFx0ZXZlbnRzW3N0YXRlXVtldmVudF0udHJpZ2dlciguLi5hcmdzKVxuXHRcdH1cblxuXHRcdGxldCBkaWRGaXJzdEVudGVyID0gZmFsc2VcblxuXHRcdHJldHVybiB7XG5cblx0XHRcdGlkOiBcInN0YXRlXCIsXG5cdFx0XHRzdGF0ZTogaW5pdFN0YXRlLFxuXG5cdFx0XHRlbnRlclN0YXRlKHN0YXRlOiBzdHJpbmcsIC4uLmFyZ3MpIHtcblxuXHRcdFx0XHRkaWRGaXJzdEVudGVyID0gdHJ1ZVxuXG5cdFx0XHRcdGlmIChzdGF0ZUxpc3QgJiYgIXN0YXRlTGlzdC5pbmNsdWRlcyhzdGF0ZSkpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFN0YXRlIG5vdCBmb3VuZDogJHtzdGF0ZX1gKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgb2xkU3RhdGUgPSB0aGlzLnN0YXRlXG5cblx0XHRcdFx0aWYgKHRyYW5zaXRpb25zKSB7XG5cblx0XHRcdFx0XHQvLyBjaGVjayBpZiB0aGUgdHJhbnNpdGlvbiBpcyBsZWdhbCwgaWYgdHJhbnNpdGlvbiBncmFwaCBpcyBkZWZpbmVkXG5cdFx0XHRcdFx0aWYgKCF0cmFuc2l0aW9ucz8uW29sZFN0YXRlXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgYXZhaWxhYmxlID0gdHlwZW9mIHRyYW5zaXRpb25zW29sZFN0YXRlXSA9PT0gXCJzdHJpbmdcIlxuXHRcdFx0XHRcdFx0PyBbdHJhbnNpdGlvbnNbb2xkU3RhdGVdXVxuXHRcdFx0XHRcdFx0OiB0cmFuc2l0aW9uc1tvbGRTdGF0ZV0gYXMgc3RyaW5nW11cblxuXHRcdFx0XHRcdGlmICghYXZhaWxhYmxlLmluY2x1ZGVzKHN0YXRlKSkge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdHJhbnNpdGlvbiBzdGF0ZSBmcm9tIFwiJHtvbGRTdGF0ZX1cIiB0byBcIiR7c3RhdGV9XCIuIEF2YWlsYWJsZSB0cmFuc2l0aW9uczogJHthdmFpbGFibGUubWFwKChzKSA9PiBgXCIke3N9XCJgKS5qb2luKFwiLCBcIil9YClcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyaWdnZXIoXCJlbmRcIiwgb2xkU3RhdGUsIC4uLmFyZ3MpXG5cdFx0XHRcdHRoaXMuc3RhdGUgPSBzdGF0ZVxuXHRcdFx0XHR0cmlnZ2VyKFwiZW50ZXJcIiwgc3RhdGUsIC4uLmFyZ3MpXG5cdFx0XHRcdHRyaWdnZXIoXCJlbnRlclwiLCBgJHtvbGRTdGF0ZX0gLT4gJHtzdGF0ZX1gLCAuLi5hcmdzKVxuXG5cdFx0XHR9LFxuXG5cdFx0XHRvblN0YXRlVHJhbnNpdGlvbihmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcsIGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiBvbihcImVudGVyXCIsIGAke2Zyb219IC0+ICR7dG99YCwgYWN0aW9uKVxuXHRcdFx0fSxcblxuXHRcdFx0b25TdGF0ZUVudGVyKHN0YXRlOiBzdHJpbmcsIGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiBvbihcImVudGVyXCIsIHN0YXRlLCBhY3Rpb24pXG5cdFx0XHR9LFxuXG5cdFx0XHRvblN0YXRlVXBkYXRlKHN0YXRlOiBzdHJpbmcsIGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiBvbihcInVwZGF0ZVwiLCBzdGF0ZSwgYWN0aW9uKVxuXHRcdFx0fSxcblxuXHRcdFx0b25TdGF0ZURyYXcoc3RhdGU6IHN0cmluZywgYWN0aW9uOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0cmV0dXJuIG9uKFwiZHJhd1wiLCBzdGF0ZSwgYWN0aW9uKVxuXHRcdFx0fSxcblxuXHRcdFx0b25TdGF0ZUVuZChzdGF0ZTogc3RyaW5nLCBhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gb24oXCJlbmRcIiwgc3RhdGUsIGFjdGlvbilcblx0XHRcdH0sXG5cblx0XHRcdHVwZGF0ZSgpIHtcblx0XHRcdFx0Ly8gZXhlY3V0ZSB0aGUgZW50ZXIgZXZlbnQgZm9yIGluaXRTdGF0ZVxuXHRcdFx0XHRpZiAoIWRpZEZpcnN0RW50ZXIpIHtcblx0XHRcdFx0XHR0cmlnZ2VyKFwiZW50ZXJcIiwgaW5pdFN0YXRlKVxuXHRcdFx0XHRcdGRpZEZpcnN0RW50ZXIgPSB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdFx0dHJpZ2dlcihcInVwZGF0ZVwiLCB0aGlzLnN0YXRlKVxuXHRcdFx0fSxcblxuXHRcdFx0ZHJhdygpIHtcblx0XHRcdFx0dHJpZ2dlcihcImRyYXdcIiwgdGhpcy5zdGF0ZSlcblx0XHRcdH0sXG5cblx0XHRcdGluc3BlY3QoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnN0YXRlXG5cdFx0XHR9LFxuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBmYWRlSW4odGltZTogbnVtYmVyID0gMSk6IENvbXAge1xuXHRcdGxldCB0ID0gMFxuXHRcdGxldCBkb25lID0gZmFsc2Vcblx0XHRyZXR1cm4ge1xuXHRcdFx0cmVxdWlyZTogWyBcIm9wYWNpdHlcIiBdLFxuXHRcdFx0YWRkKHRoaXM6IEdhbWVPYmo8T3BhY2l0eUNvbXA+KSB7XG5cdFx0XHRcdHRoaXMub3BhY2l0eSA9IDBcblx0XHRcdH0sXG5cdFx0XHR1cGRhdGUodGhpczogR2FtZU9iajxPcGFjaXR5Q29tcD4pIHtcblx0XHRcdFx0aWYgKGRvbmUpIHJldHVyblxuXHRcdFx0XHR0ICs9IGR0KClcblx0XHRcdFx0dGhpcy5vcGFjaXR5ID0gbWFwKHQsIDAsIHRpbWUsIDAsIDEpXG5cdFx0XHRcdGlmICh0ID49IHRpbWUpIHtcblx0XHRcdFx0XHR0aGlzLm9wYWNpdHkgPSAxXG5cdFx0XHRcdFx0ZG9uZSA9IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBtYXNrKG06IE1hc2sgPSBcImludGVyc2VjdFwiKTogTWFza0NvbXAge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJtYXNrXCIsXG5cdFx0XHRtYXNrOiBtLFxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdvbihjOiBGcmFtZUJ1ZmZlcikge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhZGQodGhpczogR2FtZU9iaikge1xuXHRcdFx0XHR0aGlzLmNhbnZhcyA9IGNcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gb25Mb2FkKGNiOiAoKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0aWYgKGFzc2V0cy5sb2FkZWQpIHtcblx0XHRcdGNiKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Z2FtZS5ldmVudHMub24oXCJsb2FkXCIsIGNiKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHNjZW5lKGlkOiBTY2VuZU5hbWUsIGRlZjogU2NlbmVEZWYpIHtcblx0XHRnYW1lLnNjZW5lc1tpZF0gPSBkZWZcblx0fVxuXG5cdGZ1bmN0aW9uIGdvKG5hbWU6IFNjZW5lTmFtZSwgLi4uYXJncykge1xuXG5cdFx0aWYgKCFnYW1lLnNjZW5lc1tuYW1lXSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBTY2VuZSBub3QgZm91bmQ6ICR7bmFtZX1gKVxuXHRcdH1cblxuXHRcdGdhbWUuZXZlbnRzLm9uT25jZShcImZyYW1lRW5kXCIsICgpID0+IHtcblxuXHRcdFx0Z2FtZS5ldmVudHMudHJpZ2dlcihcInNjZW5lTGVhdmVcIiwgbmFtZSlcblx0XHRcdGFwcC5ldmVudHMuY2xlYXIoKVxuXHRcdFx0Z2FtZS5ldmVudHMuY2xlYXIoKVxuXHRcdFx0Z2FtZS5vYmpFdmVudHMuY2xlYXIoKVxuXG5cdFx0XHQ7Wy4uLmdhbWUucm9vdC5jaGlsZHJlbl0uZm9yRWFjaCgob2JqKSA9PiB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhb2JqLnN0YXlcblx0XHRcdFx0XHR8fCAob2JqLnNjZW5lc1RvU3RheSAmJiAhb2JqLnNjZW5lc1RvU3RheS5pbmNsdWRlcyhuYW1lKSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Z2FtZS5yb290LnJlbW92ZShvYmopXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cblx0XHRcdGdhbWUucm9vdC5jbGVhckV2ZW50cygpXG5cdFx0XHRpbml0RXZlbnRzKClcblxuXHRcdFx0Ly8gY2FtXG5cdFx0XHRnYW1lLmNhbSA9IHtcblx0XHRcdFx0cG9zOiBudWxsLFxuXHRcdFx0XHRzY2FsZTogdmVjMigxKSxcblx0XHRcdFx0YW5nbGU6IDAsXG5cdFx0XHRcdHNoYWtlOiAwLFxuXHRcdFx0XHR0cmFuc2Zvcm06IG5ldyBNYXQ0KCksXG5cdFx0XHR9XG5cblx0XHRcdGdhbWUuc2NlbmVzW25hbWVdKC4uLmFyZ3MpXG5cblx0XHR9KVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblNjZW5lTGVhdmUoYWN0aW9uOiAobmV3U2NlbmU/OiBzdHJpbmcpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdHJldHVybiBnYW1lLmV2ZW50cy5vbihcInNjZW5lTGVhdmVcIiwgYWN0aW9uKVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0RGF0YTxUPihrZXk6IHN0cmluZywgZGVmPzogVCk6IFQge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlW2tleV0pXG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRpZiAoZGVmKSB7XG5cdFx0XHRcdHNldERhdGEoa2V5LCBkZWYpXG5cdFx0XHRcdHJldHVybiBkZWZcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBudWxsXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gc2V0RGF0YShrZXk6IHN0cmluZywgZGF0YTogYW55KSB7XG5cdFx0d2luZG93LmxvY2FsU3RvcmFnZVtrZXldID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcblx0fVxuXG5cdGZ1bmN0aW9uIHBsdWc8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KHBsdWdpbjogS2Fib29tUGx1Z2luPFQ+LCAuLi5hcmdzOiBhbnkpOiBLYWJvb21DdHggJiBUIHtcblx0XHRjb25zdCBmdW5jcyA9IHBsdWdpbihjdHgpXG5cdFx0bGV0IGZ1bmNzT2JqOiBUXG5cdFx0aWYgKHR5cGVvZiBmdW5jcyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRjb25zdCBwbHVnV2l0aE9wdGlvbnMgPSBmdW5jcyguLi5hcmdzKVxuXHRcdFx0ZnVuY3NPYmogPSBwbHVnV2l0aE9wdGlvbnMoY3R4KVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGZ1bmNzT2JqID0gZnVuY3Ncblx0XHR9XG5cdFx0Zm9yIChjb25zdCBrIGluIGZ1bmNzT2JqKSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRjdHhba10gPSBmdW5jc09ialtrXVxuXHRcdFx0aWYgKGdvcHQuZ2xvYmFsICE9PSBmYWxzZSkge1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdHdpbmRvd1trXSA9IGZ1bmNzT2JqW2tdXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjdHggYXMgS2Fib29tQ3R4ICYgVFxuXHR9XG5cblx0ZnVuY3Rpb24gY2VudGVyKCk6IFZlYzIge1xuXHRcdHJldHVybiB2ZWMyKHdpZHRoKCkgLyAyLCBoZWlnaHQoKSAvIDIpXG5cdH1cblxuXHRlbnVtIEVkZ2VNYXNrIHtcblx0XHROb25lID0gMCxcblx0XHRMZWZ0ID0gMSxcblx0XHRUb3AgPSAyLFxuXHRcdExlZnRUb3AgPSAzLFxuXHRcdFJpZ2h0ID0gNCxcblx0XHRIb3Jpem9udGFsID0gNSxcblx0XHRSaWdodFRvcCA9IDYsXG5cdFx0SG9yaXpvbnRhbFRvcCA9IDcsXG5cdFx0Qm90dG9tID0gOCxcblx0XHRMZWZ0Qm90dG9tID0gOSxcblx0XHRWZXJ0aWNhbCA9IDEwLFxuXHRcdExlZnRWZXJ0aWNhbCA9IDExLFxuXHRcdFJpZ2h0Qm90dG9tID0gMTIsXG5cdFx0SG9yaXpvbnRhbEJvdHRvbSA9IDEzLFxuXHRcdFJpZ2h0VmVydGljYWwgPSAxNCxcblx0XHRBbGwgPSAxNSxcblx0fVxuXG5cdGZ1bmN0aW9uIHRpbGUob3B0czogVGlsZUNvbXBPcHQgPSB7fSk6IFRpbGVDb21wIHtcblxuXHRcdGxldCB0aWxlUG9zID0gdmVjMigwKVxuXHRcdGxldCBpc09ic3RhY2xlID0gb3B0cy5pc09ic3RhY2xlID8/IGZhbHNlXG5cdFx0bGV0IGNvc3QgPSBvcHRzLmNvc3QgPz8gMFxuXHRcdGxldCBlZGdlcyA9IG9wdHMuZWRnZXMgPz8gW11cblxuXHRcdGNvbnN0IGdldEVkZ2VNYXNrID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgbG9vcHVwID0ge1xuXHRcdFx0XHRcImxlZnRcIjogRWRnZU1hc2suTGVmdCxcblx0XHRcdFx0XCJ0b3BcIjogRWRnZU1hc2suVG9wLFxuXHRcdFx0XHRcInJpZ2h0XCI6IEVkZ2VNYXNrLlJpZ2h0LFxuXHRcdFx0XHRcImJvdHRvbVwiOiBFZGdlTWFzay5Cb3R0b20sXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZWRnZXMubWFwKHMgPT4gbG9vcHVwW3NdIHx8IDApLnJlZHVjZSgobWFzaywgZGlyKSA9PiBtYXNrIHwgZGlyLCAwKVxuXHRcdH1cblxuXHRcdGxldCBlZGdlTWFzayA9IGdldEVkZ2VNYXNrKClcblxuXHRcdHJldHVybiB7XG5cblx0XHRcdGlkOiBcInRpbGVcIixcblx0XHRcdHRpbGVQb3NPZmZzZXQ6IG9wdHMub2Zmc2V0ID8/IHZlYzIoMCksXG5cblx0XHRcdHNldCB0aWxlUG9zKHA6IFZlYzIpIHtcblx0XHRcdFx0Y29uc3QgbGV2ZWwgPSB0aGlzLmdldExldmVsKClcblx0XHRcdFx0dGlsZVBvcyA9IHAuY2xvbmUoKVxuXHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdHRoaXMucG9zID0gdmVjMihcblx0XHRcdFx0XHR0aGlzLnRpbGVQb3MueCAqIGxldmVsLnRpbGVXaWR0aCgpLFxuXHRcdFx0XHRcdHRoaXMudGlsZVBvcy55ICogbGV2ZWwudGlsZUhlaWdodCgpLFxuXHRcdFx0XHQpLmFkZCh0aGlzLnRpbGVQb3NPZmZzZXQpXG5cdFx0XHR9LFxuXG5cdFx0XHRnZXQgdGlsZVBvcygpIHtcblx0XHRcdFx0cmV0dXJuIHRpbGVQb3Ncblx0XHRcdH0sXG5cblx0XHRcdHNldCBpc09ic3RhY2xlKGlzOiBib29sZWFuKSB7XG5cdFx0XHRcdGlmIChpc09ic3RhY2xlID09PSBpcykgcmV0dXJuXG5cdFx0XHRcdGlzT2JzdGFjbGUgPSBpc1xuXHRcdFx0XHR0aGlzLmdldExldmVsKCkuaW52YWxpZGF0ZU5hdmlnYXRpb25NYXAoKVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IGlzT2JzdGFjbGUoKSB7XG5cdFx0XHRcdHJldHVybiBpc09ic3RhY2xlXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQgY29zdChuOiBudW1iZXIpIHtcblx0XHRcdFx0aWYgKGNvc3QgPT09IG4pIHJldHVyblxuXHRcdFx0XHRjb3N0ID0gblxuXHRcdFx0XHR0aGlzLmdldExldmVsKCkuaW52YWxpZGF0ZU5hdmlnYXRpb25NYXAoKVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IGNvc3QoKSB7XG5cdFx0XHRcdHJldHVybiBjb3N0XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQgZWRnZXMoZTogRWRnZVtdKSB7XG5cdFx0XHRcdGVkZ2VzID0gZVxuXHRcdFx0XHRlZGdlTWFzayA9IGdldEVkZ2VNYXNrKClcblx0XHRcdFx0dGhpcy5nZXRMZXZlbCgpLmludmFsaWRhdGVOYXZpZ2F0aW9uTWFwKClcblx0XHRcdH0sXG5cblx0XHRcdGdldCBlZGdlcygpIHtcblx0XHRcdFx0cmV0dXJuIGVkZ2VzXG5cdFx0XHR9LFxuXG5cdFx0XHRnZXQgZWRnZU1hc2soKSB7XG5cdFx0XHRcdHJldHVybiBlZGdlTWFza1xuXHRcdFx0fSxcblxuXHRcdFx0Z2V0TGV2ZWwodGhpczogR2FtZU9iaikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnQgYXMgR2FtZU9iajxMZXZlbENvbXA+XG5cdFx0XHR9LFxuXG5cdFx0XHRtb3ZlTGVmdCgpIHtcblx0XHRcdFx0dGhpcy50aWxlUG9zID0gdGhpcy50aWxlUG9zLmFkZCh2ZWMyKC0xLCAwKSlcblx0XHRcdH0sXG5cblx0XHRcdG1vdmVSaWdodCgpIHtcblx0XHRcdFx0dGhpcy50aWxlUG9zID0gdGhpcy50aWxlUG9zLmFkZCh2ZWMyKDEsIDApKVxuXHRcdFx0fSxcblxuXHRcdFx0bW92ZVVwKCkge1xuXHRcdFx0XHR0aGlzLnRpbGVQb3MgPSB0aGlzLnRpbGVQb3MuYWRkKHZlYzIoMCwgLTEpKVxuXHRcdFx0fSxcblxuXHRcdFx0bW92ZURvd24oKSB7XG5cdFx0XHRcdHRoaXMudGlsZVBvcyA9IHRoaXMudGlsZVBvcy5hZGQodmVjMigwLCAxKSlcblx0XHRcdH0sXG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGFkZExldmVsKG1hcDogc3RyaW5nW10sIG9wdDogTGV2ZWxPcHQpOiBHYW1lT2JqPFBvc0NvbXAgfCBMZXZlbENvbXA+IHtcblxuXHRcdGlmICghb3B0LnRpbGVXaWR0aCB8fCAhb3B0LnRpbGVIZWlnaHQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIk11c3QgcHJvdmlkZSB0aWxlV2lkdGggYW5kIHRpbGVIZWlnaHQuXCIpXG5cdFx0fVxuXG5cdFx0Ly8gVE9ETzogY3VzdG9tIHBhcmVudFxuXHRcdGNvbnN0IGxldmVsID0gYWRkKFtcblx0XHRcdHBvcyhvcHQucG9zID8/IHZlYzIoMCkpLFxuXHRcdF0pIGFzIEdhbWVPYmo8UG9zQ29tcCB8IExldmVsQ29tcD5cblxuXHRcdGNvbnN0IG51bVJvd3MgPSBtYXAubGVuZ3RoXG5cdFx0bGV0IG51bUNvbHVtbnMgPSAwXG5cblx0XHQvLyBUaGUgc3BhdGlhbCBtYXAga2VlcHMgdHJhY2sgb2YgdGhlIG9iamVjdHMgYXQgZWFjaCBsb2NhdGlvblxuXHRcdGxldCBzcGF0aWFsTWFwOiBHYW1lT2JqW11bXSB8IG51bGwgPSBudWxsXG5cdFx0bGV0IGNvc3RNYXA6IG51bWJlcltdIHwgbnVsbCA9IG51bGxcblx0XHRsZXQgZWRnZU1hcDogbnVtYmVyW10gfCBudWxsID0gbnVsbFxuXHRcdGxldCBjb25uZWN0aXZpdHlNYXA6IG51bWJlcltdIHwgbnVsbCA9IG51bGxcblxuXHRcdGNvbnN0IHRpbGUySGFzaCA9ICh0aWxlUG9zOiBWZWMyKSA9PiB0aWxlUG9zLnggKyB0aWxlUG9zLnkgKiBudW1Db2x1bW5zXG5cdFx0Y29uc3QgaGFzaDJUaWxlID0gKGhhc2g6IG51bWJlcikgPT4gdmVjMihcblx0XHRcdE1hdGguZmxvb3IoaGFzaCAlIG51bUNvbHVtbnMpLFxuXHRcdFx0TWF0aC5mbG9vcihoYXNoIC8gbnVtQ29sdW1ucyksXG5cdFx0KVxuXG5cdFx0Y29uc3QgY3JlYXRlU3BhdGlhbE1hcCA9ICgpID0+IHtcblx0XHRcdHNwYXRpYWxNYXAgPSBbXVxuXHRcdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBsZXZlbC5jaGlsZHJlbikge1xuXHRcdFx0XHRpbnNlcnRJbnRvU3BhdGlhbE1hcChjaGlsZClcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBpbnNlcnRJbnRvU3BhdGlhbE1hcCA9IChvYmo6IEdhbWVPYmopID0+IHtcblx0XHRcdGNvbnN0IGkgPSB0aWxlMkhhc2gob2JqLnRpbGVQb3MpXG5cdFx0XHRpZiAoc3BhdGlhbE1hcFtpXSkge1xuXHRcdFx0XHRzcGF0aWFsTWFwW2ldLnB1c2gob2JqKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3BhdGlhbE1hcFtpXSA9IFtvYmpdXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVtb3ZlRnJvbVNwYXRpYWxNYXAgPSAob2JqOiBHYW1lT2JqKSA9PiB7XG5cdFx0XHRjb25zdCBpID0gdGlsZTJIYXNoKG9iai50aWxlUG9zKVxuXHRcdFx0aWYgKHNwYXRpYWxNYXBbaV0pIHtcblx0XHRcdFx0Y29uc3QgaW5kZXggPSBzcGF0aWFsTWFwW2ldLmluZGV4T2Yob2JqKVxuXHRcdFx0XHRpZiAoaW5kZXggPj0gMCkge1xuXHRcdFx0XHRcdHNwYXRpYWxNYXBbaV0uc3BsaWNlKGluZGV4LCAxKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXBkYXRlU3BhdGlhbE1hcCA9ICgpID0+IHtcblx0XHRcdGxldCBzcGF0aWFsTWFwQ2hhbmdlZCA9IGZhbHNlXG5cdFx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIGxldmVsLmNoaWxkcmVuKSB7XG5cdFx0XHRcdGNvbnN0IHRpbGVQb3MgPSBsZXZlbC5wb3MyVGlsZShjaGlsZC5wb3MpXG5cdFx0XHRcdGlmIChjaGlsZC50aWxlUG9zLnggIT0gdGlsZVBvcy54IHx8IGNoaWxkLnRpbGVQb3MueSAhPSB0aWxlUG9zLnkpIHtcblx0XHRcdFx0XHRzcGF0aWFsTWFwQ2hhbmdlZCA9IHRydWVcblx0XHRcdFx0XHRyZW1vdmVGcm9tU3BhdGlhbE1hcChjaGlsZClcblx0XHRcdFx0XHRjaGlsZC50aWxlUG9zLnggPSB0aWxlUG9zLnhcblx0XHRcdFx0XHRjaGlsZC50aWxlUG9zLnkgPSB0aWxlUG9zLnlcblx0XHRcdFx0XHRpbnNlcnRJbnRvU3BhdGlhbE1hcChjaGlsZClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHNwYXRpYWxNYXBDaGFuZ2VkKSB7XG5cdFx0XHRcdGxldmVsLnRyaWdnZXIoXCJzcGF0aWFsX21hcF9jaGFuZ2VkXCIpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIG9ic3RhY2xlIG1hcCB0ZWxscyB3aGljaCB0aWxlcyBhcmUgYWNjZXNzaWJsZVxuXHRcdC8vIENvc3Q6IGFjY2Vzc2libGUgd2l0aCBjb3N0XG5cdFx0Ly8gSW5maW5pdGU6IGluYWNjZXNzaWJsZVxuXHRcdGNvbnN0IGNyZWF0ZUNvc3RNYXAgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBzcGF0aWFsTWFwID0gbGV2ZWwuZ2V0U3BhdGlhbE1hcCgpXG5cdFx0XHRjb25zdCBzaXplID0gbGV2ZWwubnVtUm93cygpICogbGV2ZWwubnVtQ29sdW1ucygpXG5cdFx0XHRpZiAoIWNvc3RNYXApIHtcblx0XHRcdFx0Y29zdE1hcCA9IG5ldyBBcnJheTxudW1iZXI+KHNpemUpXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29zdE1hcC5sZW5ndGggPSBzaXplXG5cdFx0XHR9XG5cdFx0XHRjb3N0TWFwLmZpbGwoMSwgMCwgc2l6ZSlcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3BhdGlhbE1hcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBvYmplY3RzID0gc3BhdGlhbE1hcFtpXVxuXHRcdFx0XHRpZiAob2JqZWN0cykge1xuXHRcdFx0XHRcdGxldCBjb3N0ID0gMFxuXHRcdFx0XHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcblx0XHRcdFx0XHRcdGlmIChvYmouaXNPYnN0YWNsZSkge1xuXHRcdFx0XHRcdFx0XHRjb3N0ID0gSW5maW5pdHlcblx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvc3QgKz0gb2JqLmNvc3Rcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29zdE1hcFtpXSA9IGNvc3QgfHwgMVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIGVkZ2UgbWFwIHRlbGxzIHdoaWNoIGVkZ2VzIGJldHdlZW4gbm9kZXMgYXJlIHdhbGthYmxlXG5cdFx0Y29uc3QgY3JlYXRlRWRnZU1hcCA9ICgpID0+IHtcblx0XHRcdGNvbnN0IHNwYXRpYWxNYXAgPSBsZXZlbC5nZXRTcGF0aWFsTWFwKClcblx0XHRcdGNvbnN0IHNpemUgPSBsZXZlbC5udW1Sb3dzKCkgKiBsZXZlbC5udW1Db2x1bW5zKClcblx0XHRcdGlmICghZWRnZU1hcCkge1xuXHRcdFx0XHRlZGdlTWFwID0gbmV3IEFycmF5PG51bWJlcj4oc2l6ZSlcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRlZGdlTWFwLmxlbmd0aCA9IHNpemVcblx0XHRcdH1cblx0XHRcdGVkZ2VNYXAuZmlsbChFZGdlTWFzay5BbGwsIDAsIHNpemUpXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNwYXRpYWxNYXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb2JqZWN0cyA9IHNwYXRpYWxNYXBbaV1cblx0XHRcdFx0aWYgKG9iamVjdHMpIHtcblx0XHRcdFx0XHRjb25zdCBsZW4gPSBvYmplY3RzLmxlbmd0aFxuXHRcdFx0XHRcdGxldCBtYXNrID0gRWRnZU1hc2suQWxsXG5cdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGorKykge1xuXHRcdFx0XHRcdFx0bWFzayB8PSBvYmplY3RzW2pdLmVkZ2VNYXNrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVkZ2VNYXBbaV0gPSBtYXNrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBUaGUgY29ubmVjdGl2aXR5IG1hcCBpcyB1c2VkIHRvIHNlZSB3aGV0aGVyIHR3byBsb2NhdGlvbnMgYXJlIGNvbm5lY3RlZFxuXHRcdC8vIC0xOiBpbmFjY2VzaWJsZSBuOiBjb25uZWN0aXZpdHkgZ3JvdXBcblx0XHRjb25zdCBjcmVhdGVDb25uZWN0aXZpdHlNYXAgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBzaXplID0gbGV2ZWwubnVtUm93cygpICogbGV2ZWwubnVtQ29sdW1ucygpXG5cdFx0XHRjb25zdCB0cmF2ZXJzZSA9IChpOiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdFx0Y29uc3QgZnJvbnRpZXI6IG51bWJlcltdID0gW11cblx0XHRcdFx0ZnJvbnRpZXIucHVzaChpKVxuXHRcdFx0XHR3aGlsZSAoZnJvbnRpZXIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNvbnN0IGkgPSBmcm9udGllci5wb3AoKVxuXHRcdFx0XHRcdGdldE5laWdoYm91cnMoaSkuZm9yRWFjaCgoaSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGNvbm5lY3Rpdml0eU1hcFtpXSA8IDApIHtcblx0XHRcdFx0XHRcdFx0Y29ubmVjdGl2aXR5TWFwW2ldID0gaW5kZXhcblx0XHRcdFx0XHRcdFx0ZnJvbnRpZXIucHVzaChpKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghY29ubmVjdGl2aXR5TWFwKSB7XG5cdFx0XHRcdGNvbm5lY3Rpdml0eU1hcCA9IG5ldyBBcnJheTxudW1iZXI+KHNpemUpXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29ubmVjdGl2aXR5TWFwLmxlbmd0aCA9IHNpemVcblx0XHRcdH1cblx0XHRcdGNvbm5lY3Rpdml0eU1hcC5maWxsKC0xLCAwLCBzaXplKVxuXHRcdFx0bGV0IGluZGV4ID0gMFxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3N0TWFwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChjb25uZWN0aXZpdHlNYXBbaV0gPj0gMCkgeyBpbmRleCsrOyBjb250aW51ZSB9XG5cdFx0XHRcdHRyYXZlcnNlKGksIGluZGV4KVxuXHRcdFx0XHRpbmRleCsrXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgZ2V0Q29zdCA9IChub2RlOiBudW1iZXIsIG5laWdoYm91cjogbnVtYmVyKSA9PiB7XG5cdFx0XHQvLyBDb3N0IG9mIGRlc3RpbmF0aW9uIHRpbGVcblx0XHRcdHJldHVybiBjb3N0TWFwW25laWdoYm91cl1cblx0XHR9XG5cblx0XHRjb25zdCBnZXRIZXVyaXN0aWMgPSAobm9kZTogbnVtYmVyLCBnb2FsOiBudW1iZXIpID0+IHtcblx0XHRcdC8vIEV1Y2xpZGlhbiBkaXN0YW5jZSB0byB0YXJnZXRcblx0XHRcdGNvbnN0IHAxID0gaGFzaDJUaWxlKG5vZGUpXG5cdFx0XHRjb25zdCBwMiA9IGhhc2gyVGlsZShnb2FsKVxuXHRcdFx0cmV0dXJuIHAxLmRpc3QocDIpXG5cdFx0fVxuXG5cdFx0Y29uc3QgZ2V0TmVpZ2hib3VycyA9IChub2RlOiBudW1iZXIsIGRpYWdvbmFscz86IGJvb2xlYW4pID0+IHtcblx0XHRcdGNvbnN0IG4gPSBbXVxuXHRcdFx0Y29uc3QgeCA9IE1hdGguZmxvb3Iobm9kZSAlIG51bUNvbHVtbnMpXG5cdFx0XHRjb25zdCBsZWZ0ID0geCA+IDAgJiZcblx0XHRcdFx0KGVkZ2VNYXBbbm9kZV0gJiBFZGdlTWFzay5MZWZ0KSAmJlxuXHRcdFx0XHRjb3N0TWFwW25vZGUgLSAxXSAhPT0gSW5maW5pdHlcblx0XHRcdGNvbnN0IHRvcCA9IG5vZGUgPj0gbnVtQ29sdW1ucyAmJlxuXHRcdFx0XHQoZWRnZU1hcFtub2RlXSAmIEVkZ2VNYXNrLlRvcCkgJiZcblx0XHRcdFx0Y29zdE1hcFtub2RlIC0gbnVtQ29sdW1uc10gIT09IEluZmluaXR5XG5cdFx0XHRjb25zdCByaWdodCA9IHggPCBudW1Db2x1bW5zIC0gMSAmJlxuXHRcdFx0XHQoZWRnZU1hcFtub2RlXSAmIEVkZ2VNYXNrLlJpZ2h0KSAmJlxuXHRcdFx0XHRjb3N0TWFwW25vZGUgKyAxXSAhPT0gSW5maW5pdHlcblx0XHRcdGNvbnN0IGJvdHRvbSA9IG5vZGUgPCBudW1Db2x1bW5zICogbnVtUm93cyAtIG51bUNvbHVtbnMgLSAxICYmXG5cdFx0XHRcdChlZGdlTWFwW25vZGVdICYgRWRnZU1hc2suQm90dG9tKSAmJlxuXHRcdFx0XHRjb3N0TWFwW25vZGUgKyBudW1Db2x1bW5zXSAhPT0gSW5maW5pdHlcblx0XHRcdGlmIChkaWFnb25hbHMpIHtcblx0XHRcdFx0aWYgKGxlZnQpIHtcblx0XHRcdFx0XHRpZiAodG9wKSB7IG4ucHVzaChub2RlIC0gbnVtQ29sdW1ucyAtIDEpIH1cblx0XHRcdFx0XHRuLnB1c2gobm9kZSAtIDEpXG5cdFx0XHRcdFx0aWYgKGJvdHRvbSkgeyBuLnB1c2gobm9kZSArIG51bUNvbHVtbnMgLSAxKSB9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRvcCkge1xuXHRcdFx0XHRcdG4ucHVzaChub2RlIC0gbnVtQ29sdW1ucylcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmlnaHQpIHtcblx0XHRcdFx0XHRpZiAodG9wKSB7IG4ucHVzaChub2RlIC0gbnVtQ29sdW1ucyArIDEpIH1cblx0XHRcdFx0XHRuLnB1c2gobm9kZSArIDEpXG5cdFx0XHRcdFx0aWYgKGJvdHRvbSkgeyBuLnB1c2gobm9kZSArIG51bUNvbHVtbnMgKyAxKSB9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGJvdHRvbSkge1xuXHRcdFx0XHRcdG4ucHVzaChub2RlICsgbnVtQ29sdW1ucylcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGxlZnQpIHtcblx0XHRcdFx0XHRuLnB1c2gobm9kZSAtIDEpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRvcCkge1xuXHRcdFx0XHRcdG4ucHVzaChub2RlIC0gbnVtQ29sdW1ucylcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmlnaHQpIHtcblx0XHRcdFx0XHRuLnB1c2gobm9kZSArIDEpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGJvdHRvbSkge1xuXHRcdFx0XHRcdG4ucHVzaChub2RlICsgbnVtQ29sdW1ucylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5cblx0XHR9XG5cblx0XHRjb25zdCBsZXZlbENvbXA6IExldmVsQ29tcCA9IHtcblxuXHRcdFx0aWQ6IFwibGV2ZWxcIixcblxuXHRcdFx0dGlsZVdpZHRoKCkge1xuXHRcdFx0XHRyZXR1cm4gb3B0LnRpbGVXaWR0aFxuXHRcdFx0fSxcblxuXHRcdFx0dGlsZUhlaWdodCgpIHtcblx0XHRcdFx0cmV0dXJuIG9wdC50aWxlSGVpZ2h0XG5cdFx0XHR9LFxuXG5cdFx0XHRzcGF3bih0aGlzOiBHYW1lT2JqPExldmVsQ29tcD4sIGtleTogc3RyaW5nIHwgQ29tcExpc3Q8YW55PiwgLi4uYXJnczogVmVjMkFyZ3MpOiBHYW1lT2JqIHwgbnVsbCB7XG5cblx0XHRcdFx0Y29uc3QgcCA9IHZlYzIoLi4uYXJncylcblxuXHRcdFx0XHRjb25zdCBjb21wcyA9ICgoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0XHRcdGlmIChvcHQudGlsZXNba2V5XSkge1xuXHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIG9wdC50aWxlc1trZXldICE9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJMZXZlbCBzeW1ib2wgZGVmIG11c3QgYmUgYSBmdW5jdGlvbiByZXR1cm5pbmcgYSBjb21wb25lbnQgbGlzdFwiKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiBvcHQudGlsZXNba2V5XShwKVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChvcHQud2lsZGNhcmRUaWxlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBvcHQud2lsZGNhcmRUaWxlKGtleSwgcClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGtleVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBhIHN5bWJvbCBvciBhIGNvbXBvbmVudCBsaXN0XCIpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSgpXG5cblx0XHRcdFx0Ly8gZW1wdHkgdGlsZVxuXHRcdFx0XHRpZiAoIWNvbXBzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGxcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBoYXNQb3MgPSBmYWxzZVxuXHRcdFx0XHRsZXQgaGFzVGlsZSA9IGZhbHNlXG5cblx0XHRcdFx0Zm9yIChjb25zdCBjb21wIG9mIGNvbXBzKSB7XG5cdFx0XHRcdFx0aWYgKGNvbXAuaWQgPT09IFwidGlsZVwiKSBoYXNUaWxlID0gdHJ1ZVxuXHRcdFx0XHRcdGlmIChjb21wLmlkID09PSBcInBvc1wiKSBoYXNQb3MgPSB0cnVlXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIWhhc1BvcykgY29tcHMucHVzaChwb3MoKSlcblx0XHRcdFx0aWYgKCFoYXNUaWxlKSBjb21wcy5wdXNoKHRpbGUoKSlcblxuXHRcdFx0XHRjb25zdCBvYmogPSBsZXZlbC5hZGQoY29tcHMpXG5cblx0XHRcdFx0aWYgKGhhc1Bvcykge1xuXHRcdFx0XHRcdG9iai50aWxlUG9zT2Zmc2V0ID0gb2JqLnBvcy5jbG9uZSgpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRvYmoudGlsZVBvcyA9IHBcblxuXHRcdFx0XHRpZiAoc3BhdGlhbE1hcCkge1xuXHRcdFx0XHRcdGluc2VydEludG9TcGF0aWFsTWFwKG9iailcblx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJzcGF0aWFsX21hcF9jaGFuZ2VkXCIpXG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwibmF2aWdhdGlvbl9tYXBfaW52YWxpZFwiKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG9ialxuXG5cdFx0XHR9LFxuXG5cdFx0XHRudW1Db2x1bW5zKCkge1xuXHRcdFx0XHRyZXR1cm4gbnVtQ29sdW1uc1xuXHRcdFx0fSxcblxuXHRcdFx0bnVtUm93cygpIHtcblx0XHRcdFx0cmV0dXJuIG51bVJvd3Ncblx0XHRcdH0sXG5cblx0XHRcdGxldmVsV2lkdGgoKSB7XG5cdFx0XHRcdHJldHVybiBudW1Db2x1bW5zICogdGhpcy50aWxlV2lkdGgoKVxuXHRcdFx0fSxcblxuXHRcdFx0bGV2ZWxIZWlnaHQoKSB7XG5cdFx0XHRcdHJldHVybiBudW1Sb3dzICogdGhpcy50aWxlSGVpZ2h0KClcblx0XHRcdH0sXG5cblx0XHRcdHRpbGUyUG9zKC4uLmFyZ3M6IFZlYzJBcmdzKSB7XG5cdFx0XHRcdHJldHVybiB2ZWMyKC4uLmFyZ3MpLnNjYWxlKHRoaXMudGlsZVdpZHRoKCksIHRoaXMudGlsZUhlaWdodCgpKVxuXHRcdFx0fSxcblxuXHRcdFx0cG9zMlRpbGUoLi4uYXJnczogVmVjMkFyZ3MpIHtcblx0XHRcdFx0Y29uc3QgcCA9IHZlYzIoLi4uYXJncylcblx0XHRcdFx0cmV0dXJuIHZlYzIoXG5cdFx0XHRcdFx0TWF0aC5mbG9vcihwLnggLyB0aGlzLnRpbGVXaWR0aCgpKSxcblx0XHRcdFx0XHRNYXRoLmZsb29yKHAueSAvIHRoaXMudGlsZUhlaWdodCgpKSxcblx0XHRcdFx0KVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0U3BhdGlhbE1hcCgpIHtcblx0XHRcdFx0aWYgKCFzcGF0aWFsTWFwKSB7XG5cdFx0XHRcdFx0Y3JlYXRlU3BhdGlhbE1hcCgpXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHNwYXRpYWxNYXBcblx0XHRcdH0sXG5cblx0XHRcdG9uU3BhdGlhbE1hcENoYW5nZWQodGhpczogR2FtZU9iajxMZXZlbENvbXA+LCBjYjogKCkgPT4gdm9pZCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcInNwYXRpYWxfbWFwX2NoYW5nZWRcIiwgY2IpXG5cdFx0XHR9LFxuXG5cdFx0XHRvbk5hdmlnYXRpb25NYXBJbnZhbGlkKHRoaXM6IEdhbWVPYmo8TGV2ZWxDb21wPiwgY2I6ICgpID0+IHZvaWQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJuYXZpZ2F0aW9uX21hcF9pbnZhbGlkXCIsIGNiKVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0QXQodGlsZVBvczogVmVjMikge1xuXHRcdFx0XHRpZiAoIXNwYXRpYWxNYXApIHtcblx0XHRcdFx0XHRjcmVhdGVTcGF0aWFsTWFwKClcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBoYXNoID0gdGlsZTJIYXNoKHRpbGVQb3MpXG5cdFx0XHRcdHJldHVybiBzcGF0aWFsTWFwW2hhc2hdIHx8IFtdXG5cdFx0XHR9LFxuXG5cdFx0XHR1cGRhdGUoKSB7XG5cdFx0XHRcdGlmIChzcGF0aWFsTWFwKSB7XG5cdFx0XHRcdFx0dXBkYXRlU3BhdGlhbE1hcCgpXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGludmFsaWRhdGVOYXZpZ2F0aW9uTWFwKCkge1xuXHRcdFx0XHRjb3N0TWFwID0gbnVsbFxuXHRcdFx0XHRlZGdlTWFwID0gbnVsbFxuXHRcdFx0XHRjb25uZWN0aXZpdHlNYXAgPSBudWxsXG5cdFx0XHR9LFxuXG5cdFx0XHRvbk5hdmlnYXRpb25NYXBDaGFuZ2VkKHRoaXM6IEdhbWVPYmo8TGV2ZWxDb21wPiwgY2I6ICgpID0+IHZvaWQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJuYXZpZ2F0aW9uX21hcF9jaGFuZ2VkXCIsIGNiKVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0VGlsZVBhdGgodGhpczogR2FtZU9iajxMZXZlbENvbXA+LCBmcm9tOiBWZWMyLCB0bzogVmVjMiwgb3B0czogUGF0aEZpbmRPcHQgPSB7fSkge1xuXHRcdFx0XHRpZiAoIWNvc3RNYXApIHtcblx0XHRcdFx0XHRjcmVhdGVDb3N0TWFwKClcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWVkZ2VNYXApIHtcblx0XHRcdFx0XHRjcmVhdGVFZGdlTWFwKClcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNvbm5lY3Rpdml0eU1hcCkge1xuXHRcdFx0XHRcdGNyZWF0ZUNvbm5lY3Rpdml0eU1hcCgpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUaWxlcyBhcmUgb3V0c2lkZSB0aGUgZ3JpZFxuXHRcdFx0XHRpZiAoZnJvbS54IDwgMCB8fCBmcm9tLnggPj0gbnVtQ29sdW1ucyB8fFxuXHRcdFx0XHRcdGZyb20ueSA8IDAgfHwgZnJvbS55ID49IG51bVJvd3MpIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0by54IDwgMCB8fCB0by54ID49IG51bUNvbHVtbnMgfHxcblx0XHRcdFx0XHR0by55IDwgMCB8fCB0by55ID49IG51bVJvd3MpIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgc3RhcnQgPSB0aWxlMkhhc2goZnJvbSlcblx0XHRcdFx0Y29uc3QgZ29hbCA9IHRpbGUySGFzaCh0bylcblxuXHRcdFx0XHQvLyBUaWxlcyBhcmUgbm90IGFjY2Vzc2libGVcblx0XHRcdFx0Ly8gSWYgd2UgdGVzdCB0aGUgc3RhcnQgdGlsZSwgd2UgbWF5IGdldCBzdHVja1xuXHRcdFx0XHQvKmlmIChjb3N0TWFwW3N0YXJ0XSA9PT0gSW5maW5pdHkpIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0XHR9Ki9cblx0XHRcdFx0aWYgKGNvc3RNYXBbZ29hbF0gPT09IEluZmluaXR5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGxcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNhbWUgVGlsZSwgbm8gd2F5cG9pbnRzIG5lZWRlZFxuXHRcdFx0XHRpZiAoc3RhcnQgPT09IGdvYWwpIHtcblx0XHRcdFx0XHRyZXR1cm4gW11cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRpbGVzIGFyZSBub3Qgd2l0aGluIHRoZSBzYW1lIHNlY3Rpb25cblx0XHRcdFx0Ly8gSWYgd2UgdGVzdCB0aGUgc3RhcnQgdGlsZSB3aGVuIGludmFsaWQsIHdlIG1heSBnZXQgc3R1Y2tcblx0XHRcdFx0aWYgKGNvbm5lY3Rpdml0eU1hcFtzdGFydF0gIT0gLTEgJiYgY29ubmVjdGl2aXR5TWFwW3N0YXJ0XSAhPT0gY29ubmVjdGl2aXR5TWFwW2dvYWxdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGxcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEZpbmQgYSBwYXRoXG5cdFx0XHRcdGludGVyZmFjZSBDb3N0Tm9kZSB7IGNvc3Q6IG51bWJlciwgbm9kZTogbnVtYmVyIH1cblx0XHRcdFx0Y29uc3QgZnJvbnRpZXIgPSBuZXcgQmluYXJ5SGVhcDxDb3N0Tm9kZT4oKGEsIGIpID0+IGEuY29zdCA8IGIuY29zdClcblx0XHRcdFx0ZnJvbnRpZXIuaW5zZXJ0KHsgY29zdDogMCwgbm9kZTogc3RhcnQgfSlcblxuXHRcdFx0XHRjb25zdCBjYW1lRnJvbSA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KClcblx0XHRcdFx0Y2FtZUZyb20uc2V0KHN0YXJ0LCBzdGFydClcblx0XHRcdFx0Y29uc3QgY29zdFNvRmFyID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKVxuXHRcdFx0XHRjb3N0U29GYXIuc2V0KHN0YXJ0LCAwKVxuXG5cdFx0XHRcdHdoaWxlIChmcm9udGllci5sZW5ndGggIT09IDApIHtcblx0XHRcdFx0XHRjb25zdCBjdXJyZW50ID0gZnJvbnRpZXIucmVtb3ZlKCk/Lm5vZGVcblxuXHRcdFx0XHRcdGlmIChjdXJyZW50ID09PSBnb2FsKVxuXHRcdFx0XHRcdFx0YnJlYWtcblxuXHRcdFx0XHRcdGNvbnN0IG5laWdoYm91cnMgPSBnZXROZWlnaGJvdXJzKGN1cnJlbnQsIG9wdHMuYWxsb3dEaWFnb25hbHMpXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBuZXh0IG9mIG5laWdoYm91cnMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld0Nvc3QgPSAoY29zdFNvRmFyLmdldChjdXJyZW50KSB8fCAwKSArXG5cdFx0XHRcdFx0XHRcdGdldENvc3QoY3VycmVudCwgbmV4dCkgK1xuXHRcdFx0XHRcdFx0XHRnZXRIZXVyaXN0aWMobmV4dCwgZ29hbClcblx0XHRcdFx0XHRcdGlmICghY29zdFNvRmFyLmhhcyhuZXh0KSB8fCBuZXdDb3N0IDwgY29zdFNvRmFyLmdldChuZXh0KSkge1xuXHRcdFx0XHRcdFx0XHRjb3N0U29GYXIuc2V0KG5leHQsIG5ld0Nvc3QpXG5cdFx0XHRcdFx0XHRcdGZyb250aWVyLmluc2VydCh7IGNvc3Q6IG5ld0Nvc3QsIG5vZGU6IG5leHQgfSlcblx0XHRcdFx0XHRcdFx0Y2FtZUZyb20uc2V0KG5leHQsIGN1cnJlbnQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgcGF0aCA9IFtdXG5cdFx0XHRcdGxldCBub2RlID0gZ29hbFxuXHRcdFx0XHRjb25zdCBwID0gaGFzaDJUaWxlKG5vZGUpXG5cdFx0XHRcdHBhdGgucHVzaChwKVxuXHRcdFx0XHR3aGlsZSAobm9kZSAhPT0gc3RhcnQpIHtcblx0XHRcdFx0XHRub2RlID0gY2FtZUZyb20uZ2V0KG5vZGUpXG5cdFx0XHRcdFx0Y29uc3QgcCA9IGhhc2gyVGlsZShub2RlKVxuXHRcdFx0XHRcdHBhdGgucHVzaChwKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBwYXRoLnJldmVyc2UoKVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0UGF0aCh0aGlzOiBHYW1lT2JqPExldmVsQ29tcD4sIGZyb206IFZlYzIsIHRvOiBWZWMyLCBvcHRzOiBQYXRoRmluZE9wdCA9IHt9KSB7XG5cdFx0XHRcdGNvbnN0IHR3ID0gdGhpcy50aWxlV2lkdGgoKVxuXHRcdFx0XHRjb25zdCB0aCA9IHRoaXMudGlsZUhlaWdodCgpXG5cdFx0XHRcdGNvbnN0IHBhdGggPSB0aGlzLmdldFRpbGVQYXRoKFxuXHRcdFx0XHRcdHRoaXMucG9zMlRpbGUoZnJvbSksXG5cdFx0XHRcdFx0dGhpcy5wb3MyVGlsZSh0byksXG5cdFx0XHRcdFx0b3B0cyxcblx0XHRcdFx0KVxuXHRcdFx0XHRpZiAocGF0aCkge1xuXHRcdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0XHRmcm9tLFxuXHRcdFx0XHRcdFx0Li4ucGF0aFxuXHRcdFx0XHRcdFx0XHQuc2xpY2UoMSwgLTEpXG5cdFx0XHRcdFx0XHRcdC5tYXAoKHRpbGVQb3MpID0+IHRpbGVQb3Muc2NhbGUodHcsIHRoKS5hZGQodHcgLyAyLCB0aCAvIDIpKSxcblx0XHRcdFx0XHRcdHRvLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0fVxuXG5cdFx0bGV2ZWwudXNlKGxldmVsQ29tcClcblxuXHRcdGxldmVsLm9uTmF2aWdhdGlvbk1hcEludmFsaWQoKCkgPT4ge1xuXHRcdFx0bGV2ZWwuaW52YWxpZGF0ZU5hdmlnYXRpb25NYXAoKVxuXHRcdFx0bGV2ZWwudHJpZ2dlcihcIm5hdmlnYXRpb25fbWFwX2NoYW5nZWRcIilcblx0XHR9KVxuXG5cdFx0bWFwLmZvckVhY2goKHJvdywgaSkgPT4ge1xuXHRcdFx0Y29uc3Qga2V5cyA9IHJvdy5zcGxpdChcIlwiKVxuXHRcdFx0bnVtQ29sdW1ucyA9IE1hdGgubWF4KGtleXMubGVuZ3RoLCBudW1Db2x1bW5zKVxuXHRcdFx0a2V5cy5mb3JFYWNoKChrZXksIGopID0+IHtcblx0XHRcdFx0bGV2ZWwuc3Bhd24oa2V5LCB2ZWMyKGosIGkpKVxuXHRcdFx0fSlcblx0XHR9KVxuXG5cdFx0cmV0dXJuIGxldmVsXG5cblx0fVxuXG5cdGZ1bmN0aW9uIGFnZW50KG9wdHM6IEFnZW50Q29tcE9wdCA9IHt9KSA6IEFnZW50Q29tcCB7XG5cdFx0bGV0IHRhcmdldDogVmVjMiB8IG51bGwgPSBudWxsXG5cdFx0bGV0IHBhdGg6IFZlYzJbXSB8IG51bGwgPSBudWxsXG5cdFx0bGV0IGluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbFxuXHRcdGxldCBuYXZNYXBDaGFuZ2VkRXZlbnQ6IEV2ZW50Q29udHJvbGxlciB8IG51bGwgPSBudWxsXG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcImFnZW50XCIsXG5cdFx0XHRyZXF1aXJlOiBbXCJwb3NcIiwgXCJ0aWxlXCJdLFxuXHRcdFx0YWdlbnRTcGVlZDogb3B0cy5zcGVlZCA/PyAxMDAsXG5cdFx0XHRhbGxvd0RpYWdvbmFsczogb3B0cy5hbGxvd0RpYWdvbmFscyA/PyB0cnVlLFxuXHRcdFx0Z2V0RGlzdGFuY2VUb1RhcmdldCh0aGlzOiBHYW1lT2JqPEFnZW50Q29tcCB8IFBvc0NvbXA+KSB7XG5cdFx0XHRcdHJldHVybiB0YXJnZXQgPyB0aGlzLnBvcy5kaXN0KHRhcmdldCkgOiAwXG5cdFx0XHR9LFxuXHRcdFx0Z2V0TmV4dExvY2F0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gcGF0aCAmJiBpbmRleCA/IHBhdGhbaW5kZXhdIDogbnVsbFxuXHRcdFx0fSxcblx0XHRcdGdldFBhdGgoKSB7XG5cdFx0XHRcdHJldHVybiBwYXRoID8gcGF0aC5zbGljZSgpIDogbnVsbFxuXHRcdFx0fSxcblx0XHRcdGdldFRhcmdldCgpIHtcblx0XHRcdFx0cmV0dXJuIHRhcmdldFxuXHRcdFx0fSxcblx0XHRcdGlzTmF2aWdhdGlvbkZpbmlzaGVkKCkge1xuXHRcdFx0XHRyZXR1cm4gcGF0aCA/IGluZGV4ID09PSBudWxsIDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdGlzVGFyZ2V0UmVhY2hhYmxlKCkge1xuXHRcdFx0XHRyZXR1cm4gcGF0aCAhPT0gbnVsbFxuXHRcdFx0fSxcblx0XHRcdGlzVGFyZ2V0UmVhY2hlZCh0aGlzOiBHYW1lT2JqPEFnZW50Q29tcCB8IFBvc0NvbXA+KSB7XG5cdFx0XHRcdHJldHVybiB0YXJnZXQgPyB0aGlzLnBvcy5lcSh0YXJnZXQpIDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHNldFRhcmdldCh0aGlzOiBHYW1lT2JqPEFnZW50Q29tcCB8IFRpbGVDb21wIHwgUG9zQ29tcD4sIHA6IFZlYzIpIHtcblx0XHRcdFx0dGFyZ2V0ID0gcFxuXHRcdFx0XHRwYXRoID0gdGhpcy5nZXRMZXZlbCgpLmdldFBhdGgodGhpcy5wb3MsIHRhcmdldCwge1xuXHRcdFx0XHRcdGFsbG93RGlhZ29uYWxzOiB0aGlzLmFsbG93RGlhZ29uYWxzLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRpbmRleCA9IHBhdGggPyAwIDogbnVsbFxuXHRcdFx0XHRpZiAocGF0aCkge1xuXHRcdFx0XHRcdGlmICghbmF2TWFwQ2hhbmdlZEV2ZW50KSB7XG5cdFx0XHRcdFx0XHRuYXZNYXBDaGFuZ2VkRXZlbnQgPSB0aGlzLmdldExldmVsKCkub25OYXZpZ2F0aW9uTWFwQ2hhbmdlZCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChwYXRoICYmIGluZGV4ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGF0aCA9IHRoaXMuZ2V0TGV2ZWwoKS5nZXRQYXRoKHRoaXMucG9zLCB0YXJnZXQsIHtcblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93RGlhZ29uYWxzOiB0aGlzLmFsbG93RGlhZ29uYWxzLFxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPSBwYXRoID8gMCA6IG51bGxcblx0XHRcdFx0XHRcdFx0XHRpZiAocGF0aCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwibmF2aWdhdGlvbi1uZXh0XCIsIHRoaXMsIHBhdGhbaW5kZXhdKVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJuYXZpZ2F0aW9uLWVuZGVkXCIsIHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0dGhpcy5vbkRlc3Ryb3koKCkgPT4gbmF2TWFwQ2hhbmdlZEV2ZW50LmNhbmNlbCgpKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJuYXZpZ2F0aW9uLXN0YXJ0ZWRcIiwgdGhpcylcblx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJuYXZpZ2F0aW9uLW5leHRcIiwgdGhpcywgcGF0aFtpbmRleF0pXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwibmF2aWdhdGlvbi1lbmRlZFwiLCB0aGlzKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dXBkYXRlKHRoaXM6IEdhbWVPYmo8QWdlbnRDb21wIHwgUG9zQ29tcD4pIHtcblx0XHRcdFx0aWYgKHBhdGggJiYgaW5kZXggIT09IG51bGwpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5wb3Muc2Rpc3QocGF0aFtpbmRleF0pIDwgMikge1xuXHRcdFx0XHRcdFx0aWYgKGluZGV4ID09PSBwYXRoLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wb3MgPSB0YXJnZXQuY2xvbmUoKVxuXHRcdFx0XHRcdFx0XHRpbmRleCA9IG51bGxcblx0XHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwibmF2aWdhdGlvbi1lbmRlZFwiLCB0aGlzKVxuXHRcdFx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJ0YXJnZXQtcmVhY2hlZFwiLCB0aGlzKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGluZGV4Kytcblx0XHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwibmF2aWdhdGlvbi1uZXh0XCIsIHRoaXMsIHBhdGhbaW5kZXhdKVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMubW92ZVRvKHBhdGhbaW5kZXhdLCB0aGlzLmFnZW50U3BlZWQpXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRvbk5hdmlnYXRpb25TdGFydGVkKHRoaXM6IEdhbWVPYmo8QWdlbnRDb21wPiwgY2I6ICgpID0+IHZvaWQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJuYXZpZ2F0aW9uLXN0YXJ0ZWRcIiwgY2IpXG5cdFx0XHR9LFxuXHRcdFx0b25OYXZpZ2F0aW9uTmV4dCh0aGlzOiBHYW1lT2JqPEFnZW50Q29tcD4sIGNiOiAoKSA9PiB2b2lkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwibmF2aWdhdGlvbi1uZXh0XCIsIGNiKVxuXHRcdFx0fSxcblx0XHRcdG9uTmF2aWdhdGlvbkVuZGVkKHRoaXM6IEdhbWVPYmo8QWdlbnRDb21wPiwgY2I6ICgpID0+IHZvaWQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJuYXZpZ2F0aW9uLWVuZGVkXCIsIGNiKVxuXHRcdFx0fSxcblx0XHRcdG9uVGFyZ2V0UmVhY2hlZCh0aGlzOiBHYW1lT2JqPEFnZW50Q29tcD4sIGNiOiAoKSA9PiB2b2lkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwidGFyZ2V0LXJlYWNoZWRcIiwgY2IpXG5cdFx0XHR9LFxuXHRcdFx0aW5zcGVjdCgpIHtcblx0XHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHR0YXJnZXQ6IEpTT04uc3RyaW5naWZ5KHRhcmdldCksXG5cdFx0XHRcdFx0cGF0aDogSlNPTi5zdHJpbmdpZnkocGF0aCksXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJlY29yZChmcmFtZVJhdGU/KTogUmVjb3JkaW5nIHtcblxuXHRcdGNvbnN0IHN0cmVhbSA9IGFwcC5jYW52YXMuY2FwdHVyZVN0cmVhbShmcmFtZVJhdGUpXG5cdFx0Y29uc3QgYXVkaW9EZXN0ID0gYXVkaW8uY3R4LmNyZWF0ZU1lZGlhU3RyZWFtRGVzdGluYXRpb24oKVxuXG5cdFx0YXVkaW8ubWFzdGVyTm9kZS5jb25uZWN0KGF1ZGlvRGVzdClcblxuXHRcdC8vIFRPRE86IEVuYWJsaW5nIGF1ZGlvIHJlc3VsdHMgaW4gZW1wdHkgdmlkZW8gaWYgbm8gYXVkaW8gcmVjZWl2ZWRcblx0XHQvLyBjb25zdCBhdWRpb1N0cmVhbSA9IGF1ZGlvRGVzdC5zdHJlYW1cblx0XHQvLyBjb25zdCBbZmlyc3RBdWRpb1RyYWNrXSA9IGF1ZGlvU3RyZWFtLmdldEF1ZGlvVHJhY2tzKClcblxuXHRcdC8vIHN0cmVhbS5hZGRUcmFjayhmaXJzdEF1ZGlvVHJhY2spO1xuXG5cdFx0Y29uc3QgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0pXG5cdFx0Y29uc3QgY2h1bmtzID0gW11cblxuXHRcdHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChlKSA9PiB7XG5cdFx0XHRpZiAoZS5kYXRhLnNpemUgPiAwKSB7XG5cdFx0XHRcdGNodW5rcy5wdXNoKGUuZGF0YSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZWNvcmRlci5vbmVycm9yID0gKCkgPT4ge1xuXHRcdFx0YXVkaW8ubWFzdGVyTm9kZS5kaXNjb25uZWN0KGF1ZGlvRGVzdClcblx0XHRcdHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKHQgPT4gdC5zdG9wKCkpXG5cdFx0fVxuXG5cdFx0cmVjb3JkZXIuc3RhcnQoKVxuXG5cdFx0cmV0dXJuIHtcblxuXHRcdFx0cmVzdW1lKCkge1xuXHRcdFx0XHRyZWNvcmRlci5yZXN1bWUoKVxuXHRcdFx0fSxcblxuXHRcdFx0cGF1c2UoKSB7XG5cdFx0XHRcdHJlY29yZGVyLnBhdXNlKClcblx0XHRcdH0sXG5cblx0XHRcdHN0b3AoKTogUHJvbWlzZTxCbG9iPiB7XG5cdFx0XHRcdHJlY29yZGVyLnN0b3AoKVxuXHRcdFx0XHQvLyBjbGVhbnVwXG5cdFx0XHRcdGF1ZGlvLm1hc3Rlck5vZGUuZGlzY29ubmVjdChhdWRpb0Rlc3QpXG5cdFx0XHRcdHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKHQgPT4gdC5zdG9wKCkpXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XHRcdHJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcblx0XHRcdFx0XHRcdHJlc29sdmUobmV3IEJsb2IoY2h1bmtzLCB7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwidmlkZW8vbXA0XCIsXG5cdFx0XHRcdFx0XHR9KSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXG5cdFx0XHRkb3dubG9hZChmaWxlbmFtZSA9IFwia2Fib29tLm1wNFwiKSB7XG5cdFx0XHRcdHRoaXMuc3RvcCgpLnRoZW4oKGJsb2IpID0+IGRvd25sb2FkQmxvYihmaWxlbmFtZSwgYmxvYikpXG5cdFx0XHR9LFxuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBpc0ZvY3VzZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGFwcC5jYW52YXNcblx0fVxuXG5cdGZ1bmN0aW9uIGRlc3Ryb3kob2JqOiBHYW1lT2JqKSB7XG5cdFx0b2JqLmRlc3Ryb3koKVxuXHR9XG5cblx0Ly8gYWxpYXNlcyBmb3Igcm9vdCBnYW1lIG9iaiBvcGVyYXRpb25zXG5cdGNvbnN0IGFkZCA9IGdhbWUucm9vdC5hZGQuYmluZChnYW1lLnJvb3QpXG5cdGNvbnN0IHJlYWRkID0gZ2FtZS5yb290LnJlYWRkLmJpbmQoZ2FtZS5yb290KVxuXHRjb25zdCBkZXN0cm95QWxsID0gZ2FtZS5yb290LnJlbW92ZUFsbC5iaW5kKGdhbWUucm9vdClcblx0Y29uc3QgZ2V0ID0gZ2FtZS5yb290LmdldC5iaW5kKGdhbWUucm9vdClcblx0Y29uc3Qgd2FpdCA9IGdhbWUucm9vdC53YWl0LmJpbmQoZ2FtZS5yb290KVxuXHRjb25zdCBsb29wID0gZ2FtZS5yb290Lmxvb3AuYmluZChnYW1lLnJvb3QpXG5cdGNvbnN0IHR3ZWVuID0gZ2FtZS5yb290LnR3ZWVuLmJpbmQoZ2FtZS5yb290KVxuXG5cdGZ1bmN0aW9uIGJvb20oc3BlZWQ6IG51bWJlciA9IDIsIHNpemU6IG51bWJlciA9IDEpOiBDb21wIHtcblx0XHRsZXQgdGltZSA9IDBcblx0XHRyZXR1cm4ge1xuXHRcdFx0cmVxdWlyZTogWyBcInNjYWxlXCIgXSxcblx0XHRcdHVwZGF0ZSh0aGlzOiBHYW1lT2JqPFNjYWxlQ29tcD4pIHtcblx0XHRcdFx0Y29uc3QgcyA9IE1hdGguc2luKHRpbWUgKiBzcGVlZCkgKiBzaXplXG5cdFx0XHRcdGlmIChzIDwgMCkge1xuXHRcdFx0XHRcdHRoaXMuZGVzdHJveSgpXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zY2FsZSA9IHZlYzIocylcblx0XHRcdFx0dGltZSArPSBkdCgpXG5cdFx0XHR9LFxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGthU3ByaXRlID0gbG9hZFNwcml0ZShudWxsLCBrYVNwcml0ZVNyYylcblx0Y29uc3QgYm9vbVNwcml0ZSA9IGxvYWRTcHJpdGUobnVsbCwgYm9vbVNwcml0ZVNyYylcblxuXHRmdW5jdGlvbiBhZGRLYWJvb20ocDogVmVjMiwgb3B0OiBCb29tT3B0ID0ge30pOiBHYW1lT2JqIHtcblxuXHRcdGNvbnN0IGthYm9vbSA9IGFkZChbXG5cdFx0XHRwb3MocCksXG5cdFx0XHRzdGF5KCksXG5cdFx0XSlcblxuXHRcdGNvbnN0IHNwZWVkID0gKG9wdC5zcGVlZCB8fCAxKSAqIDVcblx0XHRjb25zdCBzID0gb3B0LnNjYWxlIHx8IDFcblxuXHRcdGthYm9vbS5hZGQoW1xuXHRcdFx0c3ByaXRlKGJvb21TcHJpdGUpLFxuXHRcdFx0c2NhbGUoMCksXG5cdFx0XHRhbmNob3IoXCJjZW50ZXJcIiksXG5cdFx0XHRib29tKHNwZWVkLCBzKSxcblx0XHRcdC4uLm9wdC5jb21wcyA/PyBbXSxcblx0XHRdKVxuXG5cdFx0Y29uc3Qga2EgPSBrYWJvb20uYWRkKFtcblx0XHRcdHNwcml0ZShrYVNwcml0ZSksXG5cdFx0XHRzY2FsZSgwKSxcblx0XHRcdGFuY2hvcihcImNlbnRlclwiKSxcblx0XHRcdHRpbWVyKCksXG5cdFx0XHQuLi5vcHQuY29tcHMgPz8gW10sXG5cdFx0XSlcblxuXHRcdGthLndhaXQoMC40IC8gc3BlZWQsICgpID0+IGthLnVzZShib29tKHNwZWVkLCBzKSkpXG5cdFx0a2Eub25EZXN0cm95KCgpID0+IGthYm9vbS5kZXN0cm95KCkpXG5cblx0XHRyZXR1cm4ga2Fib29tXG5cblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZUZyYW1lKCkge1xuXHRcdC8vIHVwZGF0ZSBldmVyeSBvYmpcblx0XHRnYW1lLnJvb3QudXBkYXRlKClcblx0fVxuXG5cdGNsYXNzIENvbGxpc2lvbiB7XG5cdFx0c291cmNlOiBHYW1lT2JqXG5cdFx0dGFyZ2V0OiBHYW1lT2JqXG5cdFx0ZGlzcGxhY2VtZW50OiBWZWMyXG5cdFx0cmVzb2x2ZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXHRcdGNvbnN0cnVjdG9yKHNvdXJjZTogR2FtZU9iaiwgdGFyZ2V0OiBHYW1lT2JqLCBkaXM6IFZlYzIsIHJlc29sdmVkID0gZmFsc2UpIHtcblx0XHRcdHRoaXMuc291cmNlID0gc291cmNlXG5cdFx0XHR0aGlzLnRhcmdldCA9IHRhcmdldFxuXHRcdFx0dGhpcy5kaXNwbGFjZW1lbnQgPSBkaXNcblx0XHRcdHRoaXMucmVzb2x2ZWQgPSByZXNvbHZlZFxuXHRcdH1cblx0XHRyZXZlcnNlKCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xsaXNpb24oXG5cdFx0XHRcdHRoaXMudGFyZ2V0LFxuXHRcdFx0XHR0aGlzLnNvdXJjZSxcblx0XHRcdFx0dGhpcy5kaXNwbGFjZW1lbnQuc2NhbGUoLTEpLFxuXHRcdFx0XHR0aGlzLnJlc29sdmVkLFxuXHRcdFx0KVxuXHRcdH1cblx0XHRoYXNPdmVybGFwKCkge1xuXHRcdFx0cmV0dXJuICF0aGlzLmRpc3BsYWNlbWVudC5pc1plcm8oKVxuXHRcdH1cblx0XHRpc0xlZnQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kaXNwbGFjZW1lbnQueCA+IDBcblx0XHR9XG5cdFx0aXNSaWdodCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRpc3BsYWNlbWVudC54IDwgMFxuXHRcdH1cblx0XHRpc1RvcCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRpc3BsYWNlbWVudC55ID4gMFxuXHRcdH1cblx0XHRpc0JvdHRvbSgpIHtcblx0XHRcdHJldHVybiB0aGlzLmRpc3BsYWNlbWVudC55IDwgMFxuXHRcdH1cblx0XHRwcmV2ZW50UmVzb2x1dGlvbigpIHtcblx0XHRcdHRoaXMucmVzb2x2ZWQgPSB0cnVlXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2hlY2tGcmFtZSgpIHtcblxuXHRcdC8vIFRPRE86IHBlcnNpc3RlbnQgZ3JpZD9cblx0XHQvLyBzdGFydCBhIHNwYXRpYWwgaGFzaCBncmlkIGZvciBtb3JlIGVmZmljaWVudCBjb2xsaXNpb24gZGV0ZWN0aW9uXG5cdFx0Y29uc3QgZ3JpZDogUmVjb3JkPG51bWJlciwgUmVjb3JkPG51bWJlciwgR2FtZU9iajxBcmVhQ29tcD5bXT4+ID0ge31cblx0XHRjb25zdCBjZWxsU2l6ZSA9IGdvcHQuaGFzaEdyaWRTaXplIHx8IERFRl9IQVNIX0dSSURfU0laRVxuXG5cdFx0Ly8gY3VycmVudCB0cmFuc2Zvcm1cblx0XHRsZXQgdHIgPSBuZXcgTWF0NCgpXG5cblx0XHQvLyBhIGxvY2FsIHRyYW5zZm9ybSBzdGFja1xuXHRcdGNvbnN0IHN0YWNrID0gW11cblxuXHRcdGZ1bmN0aW9uIGNoZWNrT2JqKG9iajogR2FtZU9iaikge1xuXG5cdFx0XHRzdGFjay5wdXNoKHRyLmNsb25lKCkpXG5cblx0XHRcdC8vIFVwZGF0ZSBvYmplY3QgdHJhbnNmb3JtIGhlcmUuIFRoaXMgd2lsbCBiZSB0aGUgdHJhbnNmb3JtIGxhdGVyIHVzZWQgaW4gcmVuZGVyaW5nLlxuXHRcdFx0aWYgKG9iai5wb3MpIHRyLnRyYW5zbGF0ZShvYmoucG9zKVxuXHRcdFx0aWYgKG9iai5zY2FsZSkgdHIuc2NhbGUob2JqLnNjYWxlKVxuXHRcdFx0aWYgKG9iai5hbmdsZSkgdHIucm90YXRlKG9iai5hbmdsZSlcblx0XHRcdG9iai50cmFuc2Zvcm0gPSB0ci5jbG9uZSgpXG5cblx0XHRcdGlmIChvYmouYyhcImFyZWFcIikgJiYgIW9iai5wYXVzZWQpIHtcblxuXHRcdFx0XHQvLyBUT0RPOiBvbmx5IHVwZGF0ZSB3b3JsZEFyZWEgaWYgdHJhbnNmb3JtIGNoYW5nZWRcblx0XHRcdFx0Y29uc3QgYW9iaiA9IG9iaiBhcyBHYW1lT2JqPEFyZWFDb21wPlxuXHRcdFx0XHRjb25zdCBhcmVhID0gYW9iai53b3JsZEFyZWEoKVxuXHRcdFx0XHRjb25zdCBiYm94ID0gYXJlYS5iYm94KClcblxuXHRcdFx0XHQvLyBHZXQgc3BhdGlhbCBoYXNoIGdyaWQgY292ZXJhZ2Vcblx0XHRcdFx0Y29uc3QgeG1pbiA9IE1hdGguZmxvb3IoYmJveC5wb3MueCAvIGNlbGxTaXplKVxuXHRcdFx0XHRjb25zdCB5bWluID0gTWF0aC5mbG9vcihiYm94LnBvcy55IC8gY2VsbFNpemUpXG5cdFx0XHRcdGNvbnN0IHhtYXggPSBNYXRoLmNlaWwoKGJib3gucG9zLnggKyBiYm94LndpZHRoKSAvIGNlbGxTaXplKVxuXHRcdFx0XHRjb25zdCB5bWF4ID0gTWF0aC5jZWlsKChiYm94LnBvcy55ICsgYmJveC5oZWlnaHQpIC8gY2VsbFNpemUpXG5cblx0XHRcdFx0Ly8gQ2FjaGUgb2JqcyB0aGF0IGFyZSBhbHJlYWR5IGNoZWNrZWRcblx0XHRcdFx0Y29uc3QgY2hlY2tlZCA9IG5ldyBTZXQoKVxuXG5cdFx0XHRcdC8vIGluc2VydCAmIGNoZWNrIGFnYWluc3QgYWxsIGNvdmVyZWQgZ3JpZHNcblx0XHRcdFx0Zm9yIChsZXQgeCA9IHhtaW47IHggPD0geG1heDsgeCsrKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgeSA9IHltaW47IHkgPD0geW1heDsgeSsrKSB7XG5cdFx0XHRcdFx0XHRpZighZ3JpZFt4XSkge1xuXHRcdFx0XHRcdFx0XHRncmlkW3hdID0ge31cblx0XHRcdFx0XHRcdFx0Z3JpZFt4XVt5XSA9IFthb2JqXVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKCFncmlkW3hdW3ldKSB7XG5cdFx0XHRcdFx0XHRcdGdyaWRbeF1beV0gPSBbYW9ial1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNlbGwgPSBncmlkW3hdW3ldXG5cdFx0XHRcdFx0XHRcdGNoZWNrOiBmb3IgKGNvbnN0IG90aGVyIG9mIGNlbGwpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAob3RoZXIucGF1c2VkKSBjb250aW51ZVxuXHRcdFx0XHRcdFx0XHRcdGlmICghb3RoZXIuZXhpc3RzKCkpIGNvbnRpbnVlXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNoZWNrZWQuaGFzKG90aGVyLmlkKSkgY29udGludWVcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHRhZyBvZiBhb2JqLmNvbGxpc2lvbklnbm9yZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG90aGVyLmlzKHRhZykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWUgY2hlY2tcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCB0YWcgb2Ygb3RoZXIuY29sbGlzaW9uSWdub3JlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoYW9iai5pcyh0YWcpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGNoZWNrXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8vIFRPRE86IGNhY2hlIHRoZSB3b3JsZCBhcmVhIGhlcmVcblx0XHRcdFx0XHRcdFx0XHRjb25zdCByZXMgPSBzYXQoYW9iai53b3JsZEFyZWEoKSwgb3RoZXIud29ybGRBcmVhKCkpXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogcmVoYXNoIGlmIHRoZSBvYmplY3QgcG9zaXRpb24gaXMgY2hhbmdlZCBhZnRlciByZXNvbHV0aW9uP1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY29sMSA9IG5ldyBDb2xsaXNpb24oYW9iaiwgb3RoZXIsIHJlcylcblx0XHRcdFx0XHRcdFx0XHRcdGFvYmoudHJpZ2dlcihcImNvbGxpZGVVcGRhdGVcIiwgb3RoZXIsIGNvbDEpXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjb2wyID0gY29sMS5yZXZlcnNlKClcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHJlc29sdXRpb24gb25seSBoYXMgdG8gaGFwcGVuIG9uY2Vcblx0XHRcdFx0XHRcdFx0XHRcdGNvbDIucmVzb2x2ZWQgPSBjb2wxLnJlc29sdmVkXG5cdFx0XHRcdFx0XHRcdFx0XHRvdGhlci50cmlnZ2VyKFwiY29sbGlkZVVwZGF0ZVwiLCBhb2JqLCBjb2wyKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkLmFkZChvdGhlci5pZClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjZWxsLnB1c2goYW9iailcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRvYmouY2hpbGRyZW4uZm9yRWFjaChjaGVja09iailcblx0XHRcdHRyID0gc3RhY2sucG9wKClcblxuXHRcdH1cblxuXHRcdGNoZWNrT2JqKGdhbWUucm9vdClcblxuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd0ZyYW1lKCkge1xuXG5cdFx0Ly8gY2FsY3VsYXRlIGNhbWVyYSBtYXRyaXhcblx0XHRjb25zdCBjYW0gPSBnYW1lLmNhbVxuXHRcdGNvbnN0IHNoYWtlID0gVmVjMi5mcm9tQW5nbGUocmFuZCgwLCAzNjApKS5zY2FsZShjYW0uc2hha2UpXG5cblx0XHRjYW0uc2hha2UgPSBsZXJwKGNhbS5zaGFrZSwgMCwgNSAqIGR0KCkpXG5cdFx0Y2FtLnRyYW5zZm9ybSA9IG5ldyBNYXQ0KClcblx0XHRcdC50cmFuc2xhdGUoY2VudGVyKCkpXG5cdFx0XHQuc2NhbGUoY2FtLnNjYWxlKVxuXHRcdFx0LnJvdGF0ZShjYW0uYW5nbGUpXG5cdFx0XHQudHJhbnNsYXRlKChjYW0ucG9zID8/IGNlbnRlcigpKS5zY2FsZSgtMSkuYWRkKHNoYWtlKSlcblxuXHRcdGdhbWUucm9vdC5kcmF3KClcblx0XHRmbHVzaCgpXG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdMb2FkU2NyZWVuKCkge1xuXG5cdFx0Y29uc3QgcHJvZ3Jlc3MgPSBsb2FkUHJvZ3Jlc3MoKVxuXG5cdFx0aWYgKGdhbWUuZXZlbnRzLm51bUxpc3RlbmVycyhcImxvYWRpbmdcIikgPiAwKSB7XG5cdFx0XHRnYW1lLmV2ZW50cy50cmlnZ2VyKFwibG9hZGluZ1wiLCBwcm9ncmVzcylcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZHJhd1Vuc2NhbGVkKCgpID0+IHtcblx0XHRcdFx0Y29uc3QgdyA9IHdpZHRoKCkgLyAyXG5cdFx0XHRcdGNvbnN0IGggPSAyNFxuXHRcdFx0XHRjb25zdCBwb3MgPSB2ZWMyKHdpZHRoKCkgLyAyLCBoZWlnaHQoKSAvIDIpLnN1Yih2ZWMyKHcgLyAyLCBoIC8gMikpXG5cdFx0XHRcdGRyYXdSZWN0KHtcblx0XHRcdFx0XHRwb3M6IHZlYzIoMCksXG5cdFx0XHRcdFx0d2lkdGg6IHdpZHRoKCksXG5cdFx0XHRcdFx0aGVpZ2h0OiBoZWlnaHQoKSxcblx0XHRcdFx0XHRjb2xvcjogcmdiKDAsIDAsIDApLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRkcmF3UmVjdCh7XG5cdFx0XHRcdFx0cG9zOiBwb3MsXG5cdFx0XHRcdFx0d2lkdGg6IHcsXG5cdFx0XHRcdFx0aGVpZ2h0OiBoLFxuXHRcdFx0XHRcdGZpbGw6IGZhbHNlLFxuXHRcdFx0XHRcdG91dGxpbmU6IHtcblx0XHRcdFx0XHRcdHdpZHRoOiA0LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGRyYXdSZWN0KHtcblx0XHRcdFx0XHRwb3M6IHBvcyxcblx0XHRcdFx0XHR3aWR0aDogdyAqIHByb2dyZXNzLFxuXHRcdFx0XHRcdGhlaWdodDogaCxcblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3SW5zcGVjdFRleHQocG9zLCB0eHQpIHtcblxuXHRcdGRyYXdVbnNjYWxlZCgoKSA9PiB7XG5cblx0XHRcdGNvbnN0IHBhZCA9IHZlYzIoOClcblxuXHRcdFx0cHVzaFRyYW5zZm9ybSgpXG5cdFx0XHRwdXNoVHJhbnNsYXRlKHBvcylcblxuXHRcdFx0Y29uc3QgZnR4dCA9IGZvcm1hdFRleHQoe1xuXHRcdFx0XHR0ZXh0OiB0eHQsXG5cdFx0XHRcdGZvbnQ6IERCR19GT05ULFxuXHRcdFx0XHRzaXplOiAxNixcblx0XHRcdFx0cG9zOiBwYWQsXG5cdFx0XHRcdGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSksXG5cdFx0XHRcdGZpeGVkOiB0cnVlLFxuXHRcdFx0fSlcblxuXHRcdFx0Y29uc3QgYncgPSBmdHh0LndpZHRoICsgcGFkLnggKiAyXG5cdFx0XHRjb25zdCBiaCA9IGZ0eHQuaGVpZ2h0ICsgcGFkLnggKiAyXG5cblx0XHRcdGlmIChwb3MueCArIGJ3ID49IHdpZHRoKCkpIHtcblx0XHRcdFx0cHVzaFRyYW5zbGF0ZSh2ZWMyKC1idywgMCkpXG5cdFx0XHR9XG5cblx0XHRcdGlmIChwb3MueSArIGJoID49IGhlaWdodCgpKSB7XG5cdFx0XHRcdHB1c2hUcmFuc2xhdGUodmVjMigwLCAtYmgpKVxuXHRcdFx0fVxuXG5cdFx0XHRkcmF3UmVjdCh7XG5cdFx0XHRcdHdpZHRoOiBidyxcblx0XHRcdFx0aGVpZ2h0OiBiaCxcblx0XHRcdFx0Y29sb3I6IHJnYigwLCAwLCAwKSxcblx0XHRcdFx0cmFkaXVzOiA0LFxuXHRcdFx0XHRvcGFjaXR5OiAwLjgsXG5cdFx0XHRcdGZpeGVkOiB0cnVlLFxuXHRcdFx0fSlcblxuXHRcdFx0ZHJhd0Zvcm1hdHRlZFRleHQoZnR4dClcblx0XHRcdHBvcFRyYW5zZm9ybSgpXG5cblx0XHR9KVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3RGVidWcoKSB7XG5cblx0XHRpZiAoZGVidWcuaW5zcGVjdCkge1xuXG5cdFx0XHRsZXQgaW5zcGVjdGluZyA9IG51bGxcblxuXHRcdFx0Zm9yIChjb25zdCBvYmogb2YgZ2FtZS5yb290LmdldChcIipcIiwgeyByZWN1cnNpdmU6IHRydWUgfSkpIHtcblx0XHRcdFx0aWYgKG9iai5jKFwiYXJlYVwiKSAmJiBvYmouaXNIb3ZlcmluZygpKSB7XG5cdFx0XHRcdFx0aW5zcGVjdGluZyA9IG9ialxuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Z2FtZS5yb290LmRyYXdJbnNwZWN0KClcblxuXHRcdFx0aWYgKGluc3BlY3RpbmcpIHtcblxuXHRcdFx0XHRjb25zdCBsaW5lcyA9IFtdXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBpbnNwZWN0aW5nLmluc3BlY3QoKVxuXG5cdFx0XHRcdGZvciAoY29uc3QgdGFnIGluIGRhdGEpIHtcblx0XHRcdFx0XHRpZiAoZGF0YVt0YWddKSB7XG5cdFx0XHRcdFx0XHRsaW5lcy5wdXNoKGAke3RhZ306ICR7ZGF0YVt0YWddfWApXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxpbmVzLnB1c2goYCR7dGFnfWApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZHJhd0luc3BlY3RUZXh0KGNvbnRlbnRUb1ZpZXcobW91c2VQb3MoKSksIGxpbmVzLmpvaW4oXCJcXG5cIikpXG5cblx0XHRcdH1cblxuXHRcdFx0ZHJhd0luc3BlY3RUZXh0KHZlYzIoOCksIGBGUFM6ICR7ZGVidWcuZnBzKCl9YClcblxuXHRcdH1cblxuXHRcdGlmIChkZWJ1Zy5wYXVzZWQpIHtcblxuXHRcdFx0ZHJhd1Vuc2NhbGVkKCgpID0+IHtcblxuXHRcdFx0XHQvLyB0b3AgcmlnaHQgY29ybmVyXG5cdFx0XHRcdHB1c2hUcmFuc2Zvcm0oKVxuXHRcdFx0XHRwdXNoVHJhbnNsYXRlKHdpZHRoKCksIDApXG5cdFx0XHRcdHB1c2hUcmFuc2xhdGUoLTgsIDgpXG5cblx0XHRcdFx0Y29uc3Qgc2l6ZSA9IDMyXG5cblx0XHRcdFx0Ly8gYmdcblx0XHRcdFx0ZHJhd1JlY3Qoe1xuXHRcdFx0XHRcdHdpZHRoOiBzaXplLFxuXHRcdFx0XHRcdGhlaWdodDogc2l6ZSxcblx0XHRcdFx0XHRhbmNob3I6IFwidG9wcmlnaHRcIixcblx0XHRcdFx0XHRjb2xvcjogcmdiKDAsIDAsIDApLFxuXHRcdFx0XHRcdG9wYWNpdHk6IDAuOCxcblx0XHRcdFx0XHRyYWRpdXM6IDQsXG5cdFx0XHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0Ly8gcGF1c2UgaWNvblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIHtcblx0XHRcdFx0XHRkcmF3UmVjdCh7XG5cdFx0XHRcdFx0XHR3aWR0aDogNCxcblx0XHRcdFx0XHRcdGhlaWdodDogc2l6ZSAqIDAuNixcblx0XHRcdFx0XHRcdGFuY2hvcjogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdHBvczogdmVjMigtc2l6ZSAvIDMgKiBpLCBzaXplICogMC41KSxcblx0XHRcdFx0XHRcdGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSksXG5cdFx0XHRcdFx0XHRyYWRpdXM6IDIsXG5cdFx0XHRcdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cG9wVHJhbnNmb3JtKClcblxuXHRcdFx0fSlcblxuXHRcdH1cblxuXHRcdGlmIChkZWJ1Zy50aW1lU2NhbGUgIT09IDEpIHtcblxuXHRcdFx0ZHJhd1Vuc2NhbGVkKCgpID0+IHtcblxuXHRcdFx0XHQvLyBib3R0b20gcmlnaHQgY29ybmVyXG5cdFx0XHRcdHB1c2hUcmFuc2Zvcm0oKVxuXHRcdFx0XHRwdXNoVHJhbnNsYXRlKHdpZHRoKCksIGhlaWdodCgpKVxuXHRcdFx0XHRwdXNoVHJhbnNsYXRlKC04LCAtOClcblxuXHRcdFx0XHRjb25zdCBwYWQgPSA4XG5cblx0XHRcdFx0Ly8gZm9ybWF0IHRleHQgZmlyc3QgdG8gZ2V0IHRleHQgc2l6ZVxuXHRcdFx0XHRjb25zdCBmdHh0ID0gZm9ybWF0VGV4dCh7XG5cdFx0XHRcdFx0dGV4dDogZGVidWcudGltZVNjYWxlLnRvRml4ZWQoMSksXG5cdFx0XHRcdFx0Zm9udDogREJHX0ZPTlQsXG5cdFx0XHRcdFx0c2l6ZTogMTYsXG5cdFx0XHRcdFx0Y29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSxcblx0XHRcdFx0XHRwb3M6IHZlYzIoLXBhZCksXG5cdFx0XHRcdFx0YW5jaG9yOiBcImJvdHJpZ2h0XCIsXG5cdFx0XHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0Ly8gYmdcblx0XHRcdFx0ZHJhd1JlY3Qoe1xuXHRcdFx0XHRcdHdpZHRoOiBmdHh0LndpZHRoICsgcGFkICogMiArIHBhZCAqIDQsXG5cdFx0XHRcdFx0aGVpZ2h0OiBmdHh0LmhlaWdodCArIHBhZCAqIDIsXG5cdFx0XHRcdFx0YW5jaG9yOiBcImJvdHJpZ2h0XCIsXG5cdFx0XHRcdFx0Y29sb3I6IHJnYigwLCAwLCAwKSxcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjgsXG5cdFx0XHRcdFx0cmFkaXVzOiA0LFxuXHRcdFx0XHRcdGZpeGVkOiB0cnVlLFxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdC8vIGZhc3QgZm9yd2FyZCAvIHNsb3cgZG93biBpY29uXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgZmxpcHBlZCA9IGRlYnVnLnRpbWVTY2FsZSA8IDFcblx0XHRcdFx0XHRkcmF3VHJpYW5nbGUoe1xuXHRcdFx0XHRcdFx0cDE6IHZlYzIoLWZ0eHQud2lkdGggLSBwYWQgKiAoZmxpcHBlZCA/IDIgOiAzLjUpLCAtcGFkKSxcblx0XHRcdFx0XHRcdHAyOiB2ZWMyKC1mdHh0LndpZHRoIC0gcGFkICogKGZsaXBwZWQgPyAyIDogMy41KSwgLXBhZCAtIGZ0eHQuaGVpZ2h0KSxcblx0XHRcdFx0XHRcdHAzOiB2ZWMyKC1mdHh0LndpZHRoIC0gcGFkICogKGZsaXBwZWQgPyAzLjUgOiAyKSwgLXBhZCAtIGZ0eHQuaGVpZ2h0IC8gMiksXG5cdFx0XHRcdFx0XHRwb3M6IHZlYzIoLWkgKiBwYWQgKiAxICsgKGZsaXBwZWQgPyAtcGFkICogMC41IDogMCksIDApLFxuXHRcdFx0XHRcdFx0Y29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSxcblx0XHRcdFx0XHRcdGZpeGVkOiB0cnVlLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyB0ZXh0XG5cdFx0XHRcdGRyYXdGb3JtYXR0ZWRUZXh0KGZ0eHQpXG5cblx0XHRcdFx0cG9wVHJhbnNmb3JtKClcblxuXHRcdFx0fSlcblxuXHRcdH1cblxuXHRcdGlmIChkZWJ1Zy5jdXJSZWNvcmRpbmcpIHtcblxuXHRcdFx0ZHJhd1Vuc2NhbGVkKCgpID0+IHtcblxuXHRcdFx0XHRwdXNoVHJhbnNmb3JtKClcblx0XHRcdFx0cHVzaFRyYW5zbGF0ZSgwLCBoZWlnaHQoKSlcblx0XHRcdFx0cHVzaFRyYW5zbGF0ZSgyNCwgLTI0KVxuXG5cdFx0XHRcdGRyYXdDaXJjbGUoe1xuXHRcdFx0XHRcdHJhZGl1czogMTIsXG5cdFx0XHRcdFx0Y29sb3I6IHJnYigyNTUsIDAsIDApLFxuXHRcdFx0XHRcdG9wYWNpdHk6IHdhdmUoMCwgMSwgYXBwLnRpbWUoKSAqIDQpLFxuXHRcdFx0XHRcdGZpeGVkOiB0cnVlLFxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdHBvcFRyYW5zZm9ybSgpXG5cblx0XHRcdH0pXG5cblx0XHR9XG5cblx0XHRpZiAoZGVidWcuc2hvd0xvZyAmJiBnYW1lLmxvZ3MubGVuZ3RoID4gMCkge1xuXG5cdFx0XHRkcmF3VW5zY2FsZWQoKCkgPT4ge1xuXG5cdFx0XHRcdHB1c2hUcmFuc2Zvcm0oKVxuXHRcdFx0XHRwdXNoVHJhbnNsYXRlKDAsIGhlaWdodCgpKVxuXHRcdFx0XHRwdXNoVHJhbnNsYXRlKDgsIC04KVxuXG5cdFx0XHRcdGNvbnN0IHBhZCA9IDhcblx0XHRcdFx0Y29uc3QgbG9ncyA9IFtdXG5cblx0XHRcdFx0Zm9yIChjb25zdCBsb2cgb2YgZ2FtZS5sb2dzKSB7XG5cdFx0XHRcdFx0bGV0IHN0ciA9IFwiXCJcblx0XHRcdFx0XHRjb25zdCBzdHlsZSA9IGxvZy5tc2cgaW5zdGFuY2VvZiBFcnJvciA/IFwiZXJyb3JcIiA6IFwiaW5mb1wiXG5cdFx0XHRcdFx0c3RyICs9IGBbdGltZV0ke2xvZy50aW1lLnRvRml4ZWQoMil9Wy90aW1lXWBcblx0XHRcdFx0XHRzdHIgKz0gXCIgXCJcblx0XHRcdFx0XHRzdHIgKz0gYFske3N0eWxlfV0ke2xvZy5tc2c/LnRvU3RyaW5nID8gbG9nLm1zZy50b1N0cmluZygpIDogbG9nLm1zZ31bLyR7c3R5bGV9XWBcblx0XHRcdFx0XHRsb2dzLnB1c2goc3RyKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Z2FtZS5sb2dzID0gZ2FtZS5sb2dzXG5cdFx0XHRcdFx0LmZpbHRlcigobG9nKSA9PiBhcHAudGltZSgpIC0gbG9nLnRpbWUgPCAoZ29wdC5sb2dUaW1lIHx8IExPR19USU1FKSlcblxuXHRcdFx0XHRjb25zdCBmdGV4dCA9IGZvcm1hdFRleHQoe1xuXHRcdFx0XHRcdHRleHQ6IGxvZ3Muam9pbihcIlxcblwiKSxcblx0XHRcdFx0XHRmb250OiBEQkdfRk9OVCxcblx0XHRcdFx0XHRwb3M6IHZlYzIocGFkLCAtcGFkKSxcblx0XHRcdFx0XHRhbmNob3I6IFwiYm90bGVmdFwiLFxuXHRcdFx0XHRcdHNpemU6IDE2LFxuXHRcdFx0XHRcdHdpZHRoOiB3aWR0aCgpICogMC42LFxuXHRcdFx0XHRcdGxpbmVTcGFjaW5nOiBwYWQgLyAyLFxuXHRcdFx0XHRcdGZpeGVkOiB0cnVlLFxuXHRcdFx0XHRcdHN0eWxlczoge1xuXHRcdFx0XHRcdFx0XCJ0aW1lXCI6IHsgY29sb3I6IHJnYigxMjcsIDEyNywgMTI3KSB9LFxuXHRcdFx0XHRcdFx0XCJpbmZvXCI6IHsgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSB9LFxuXHRcdFx0XHRcdFx0XCJlcnJvclwiOiB7IGNvbG9yOiByZ2IoMjU1LCAwLCAxMjcpIH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblxuXHRcdFx0XHRkcmF3UmVjdCh7XG5cdFx0XHRcdFx0d2lkdGg6IGZ0ZXh0LndpZHRoICsgcGFkICogMixcblx0XHRcdFx0XHRoZWlnaHQ6IGZ0ZXh0LmhlaWdodCArIHBhZCAqIDIsXG5cdFx0XHRcdFx0YW5jaG9yOiBcImJvdGxlZnRcIixcblx0XHRcdFx0XHRjb2xvcjogcmdiKDAsIDAsIDApLFxuXHRcdFx0XHRcdHJhZGl1czogNCxcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjgsXG5cdFx0XHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0ZHJhd0Zvcm1hdHRlZFRleHQoZnRleHQpXG5cdFx0XHRcdHBvcFRyYW5zZm9ybSgpXG5cblx0XHRcdH0pXG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTG9hZGluZyhhY3Rpb246IChwcm9ncmVzczogbnVtYmVyKSA9PiB2b2lkKSB7XG5cdFx0Z2FtZS5ldmVudHMub24oXCJsb2FkaW5nXCIsIGFjdGlvbilcblx0fVxuXG5cdGZ1bmN0aW9uIG9uUmVzaXplKGFjdGlvbjogKCkgPT4gdm9pZCkge1xuXHRcdGFwcC5vblJlc2l6ZShhY3Rpb24pXG5cdH1cblxuXHRmdW5jdGlvbiBvbkVycm9yKGFjdGlvbjogKGVycjogRXJyb3IpID0+IHZvaWQpIHtcblx0XHRnYW1lLmV2ZW50cy5vbihcImVycm9yXCIsIGFjdGlvbilcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZUVycihlcnI6IEVycm9yKSB7XG5cblx0XHRjb25zb2xlLmVycm9yKGVycilcblxuXHRcdGF1ZGlvLmN0eC5zdXNwZW5kKClcblxuXHRcdC8vIFRPRE86IHRoaXMgc2hvdWxkIG9ubHkgcnVuIG9uY2Vcblx0XHRhcHAucnVuKCgpID0+IHtcblxuXHRcdFx0ZnJhbWVTdGFydCgpXG5cblx0XHRcdGRyYXdVbnNjYWxlZCgoKSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgcGFkID0gMzJcblx0XHRcdFx0Y29uc3QgZ2FwID0gMTZcblx0XHRcdFx0Y29uc3QgZ3cgPSB3aWR0aCgpXG5cdFx0XHRcdGNvbnN0IGdoID0gaGVpZ2h0KClcblxuXHRcdFx0XHRjb25zdCB0ZXh0U3R5bGUgPSB7XG5cdFx0XHRcdFx0c2l6ZTogMzYsXG5cdFx0XHRcdFx0d2lkdGg6IGd3IC0gcGFkICogMixcblx0XHRcdFx0XHRsZXR0ZXJTcGFjaW5nOiA0LFxuXHRcdFx0XHRcdGxpbmVTcGFjaW5nOiA0LFxuXHRcdFx0XHRcdGZvbnQ6IERCR19GT05ULFxuXHRcdFx0XHRcdGZpeGVkOiB0cnVlLFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZHJhd1JlY3Qoe1xuXHRcdFx0XHRcdHdpZHRoOiBndyxcblx0XHRcdFx0XHRoZWlnaHQ6IGdoLFxuXHRcdFx0XHRcdGNvbG9yOiByZ2IoMCwgMCwgMjU1KSxcblx0XHRcdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHRcdFx0fSlcblxuXHRcdFx0XHRjb25zdCB0aXRsZSA9IGZvcm1hdFRleHQoe1xuXHRcdFx0XHRcdC4uLnRleHRTdHlsZSxcblx0XHRcdFx0XHR0ZXh0OiBcIkVycm9yXCIsXG5cdFx0XHRcdFx0cG9zOiB2ZWMyKHBhZCksXG5cdFx0XHRcdFx0Y29sb3I6IHJnYigyNTUsIDEyOCwgMCksXG5cdFx0XHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0ZHJhd0Zvcm1hdHRlZFRleHQodGl0bGUpXG5cblx0XHRcdFx0ZHJhd1RleHQoe1xuXHRcdFx0XHRcdC4uLnRleHRTdHlsZSxcblx0XHRcdFx0XHR0ZXh0OiBlcnIubWVzc2FnZSxcblx0XHRcdFx0XHRwb3M6IHZlYzIocGFkLCBwYWQgKyB0aXRsZS5oZWlnaHQgKyBnYXApLFxuXHRcdFx0XHRcdGZpeGVkOiB0cnVlLFxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdHBvcFRyYW5zZm9ybSgpXG5cdFx0XHRcdGdhbWUuZXZlbnRzLnRyaWdnZXIoXCJlcnJvclwiLCBlcnIpXG5cblx0XHRcdH0pXG5cblx0XHRcdGZyYW1lRW5kKClcblxuXHRcdH0pXG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uQ2xlYW51cChhY3Rpb246ICgpID0+IHZvaWQpIHtcblx0XHRnYy5wdXNoKGFjdGlvbilcblx0fVxuXG5cdGZ1bmN0aW9uIHF1aXQoKSB7XG5cblx0XHRnYW1lLmV2ZW50cy5vbk9uY2UoXCJmcmFtZUVuZFwiLCAoKSA9PiB7XG5cblx0XHRcdGFwcC5xdWl0KClcblxuXHRcdFx0Ly8gY2xlYXIgY2FudmFzXG5cdFx0XHRnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCB8IGdsLlNURU5DSUxfQlVGRkVSX0JJVClcblxuXHRcdFx0Ly8gdW5iaW5kIGV2ZXJ5dGhpbmdcblx0XHRcdGNvbnN0IG51bVRleHR1cmVVbml0cyA9IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9JTUFHRV9VTklUUylcblxuXHRcdFx0Zm9yIChsZXQgdW5pdCA9IDA7IHVuaXQgPCBudW1UZXh0dXJlVW5pdHM7IHVuaXQrKykge1xuXHRcdFx0XHRnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdW5pdClcblx0XHRcdFx0Z2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbClcblx0XHRcdFx0Z2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV9DVUJFX01BUCwgbnVsbClcblx0XHRcdH1cblxuXHRcdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG51bGwpXG5cdFx0XHRnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBudWxsKVxuXHRcdFx0Z2wuYmluZFJlbmRlcmJ1ZmZlcihnbC5SRU5ERVJCVUZGRVIsIG51bGwpXG5cdFx0XHRnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpXG5cblx0XHRcdC8vIHJ1biBhbGwgc2NhdHRlcmVkIGdjIGV2ZW50c1xuXHRcdFx0Z2dsLmRlc3Ryb3koKVxuXHRcdFx0Z2MuZm9yRWFjaCgoZikgPT4gZigpKVxuXG5cdFx0fSlcblxuXHR9XG5cblx0bGV0IGlzRmlyc3RGcmFtZSA9IHRydWVcblxuXHQvLyBtYWluIGdhbWUgbG9vcFxuXHRhcHAucnVuKCgpID0+IHtcblxuXHRcdHRyeSB7XG5cblx0XHRcdGlmICghYXNzZXRzLmxvYWRlZCkge1xuXHRcdFx0XHRpZiAobG9hZFByb2dyZXNzKCkgPT09IDEgJiYgIWlzRmlyc3RGcmFtZSkge1xuXHRcdFx0XHRcdGFzc2V0cy5sb2FkZWQgPSB0cnVlXG5cdFx0XHRcdFx0Z2FtZS5ldmVudHMudHJpZ2dlcihcImxvYWRcIilcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWFzc2V0cy5sb2FkZWQgJiYgZ29wdC5sb2FkaW5nU2NyZWVuICE9PSBmYWxzZSB8fCBpc0ZpcnN0RnJhbWUpIHtcblx0XHRcdFx0ZnJhbWVTdGFydCgpXG5cdFx0XHRcdC8vIFRPRE86IEN1cnJlbnRseSBpZiBhc3NldHMgYXJlIG5vdCBpbml0aWFsbHkgbG9hZGVkIG5vIHVwZGF0ZXMgb3IgdGltZXJzIHdpbGwgYmUgcnVuLCBob3dldmVyIHRoZXkgd2lsbCBydW4gaWYgbG9hZGluZ1NjcmVlbiBpcyBzZXQgdG8gZmFsc2UuIFdoYXQncyB0aGUgZGVzaXJlZCBiZWhhdmlvciBvciBzaG91bGQgd2UgbWFrZSB0aGVtIGNvbnNpc3RlbnQ/XG5cdFx0XHRcdGRyYXdMb2FkU2NyZWVuKClcblx0XHRcdFx0ZnJhbWVFbmQoKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCFkZWJ1Zy5wYXVzZWQpIHVwZGF0ZUZyYW1lKClcblx0XHRcdFx0Y2hlY2tGcmFtZSgpXG5cdFx0XHRcdGZyYW1lU3RhcnQoKVxuXHRcdFx0XHRkcmF3RnJhbWUoKVxuXHRcdFx0XHRpZiAoZ29wdC5kZWJ1ZyAhPT0gZmFsc2UpIGRyYXdEZWJ1ZygpXG5cdFx0XHRcdGZyYW1lRW5kKClcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzRmlyc3RGcmFtZSkge1xuXHRcdFx0XHRpc0ZpcnN0RnJhbWUgPSBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHRnYW1lLmV2ZW50cy50cmlnZ2VyKFwiZnJhbWVFbmRcIilcblxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGhhbmRsZUVycihlKVxuXHRcdH1cblxuXHR9KVxuXG5cdC8vIHVwZGF0ZSB2aWV3cG9ydCBiYXNlZCBvbiB1c2VyIHNldHRpbmcgYW5kIGZ1bGxzY3JlZW4gc3RhdGVcblx0ZnVuY3Rpb24gdXBkYXRlVmlld3BvcnQoKSB7XG5cblx0XHQvLyBjb250ZW50IHNpemUgKHNjYWxlZCBjb250ZW50IHNpemUsIHdpdGggc2NhbGUsIHN0cmV0Y2ggYW5kIGxldHRlcmJveClcblx0XHQvLyB2aWV3IHNpemUgKHVuc2NhbGVkIHZpZXdwb3J0IHNpemUpXG5cdFx0Ly8gd2luZG93IHNpemUgKHdpbGwgYmUgdGhlIHNhbWUgYXMgdmlldyBzaXplIGV4Y2VwdCBsZXR0ZXJib3ggbW9kZSlcblxuXHRcdC8vIGNhbnZhcyBzaXplXG5cdFx0Y29uc3QgcGQgPSBwaXhlbERlbnNpdHlcblx0XHRjb25zdCBjdyA9IGdsLmRyYXdpbmdCdWZmZXJXaWR0aCAvIHBkXG5cdFx0Y29uc3QgY2ggPSBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0IC8gcGRcblxuXHRcdGlmIChnb3B0LmxldHRlcmJveCkge1xuXG5cdFx0XHRpZiAoIWdvcHQud2lkdGggfHwgIWdvcHQuaGVpZ2h0KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkxldHRlcmJveGluZyByZXF1aXJlcyB3aWR0aCBhbmQgaGVpZ2h0IGRlZmluZWQuXCIpXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHJjID0gY3cgLyBjaFxuXHRcdFx0Y29uc3QgcmcgPSBnb3B0LndpZHRoIC8gZ29wdC5oZWlnaHRcblxuXHRcdFx0aWYgKHJjID4gcmcpIHtcblx0XHRcdFx0Y29uc3Qgc3cgPSBjaCAqIHJnXG5cdFx0XHRcdGNvbnN0IHggPSAoY3cgLSBzdykgLyAyXG5cdFx0XHRcdGdmeC52aWV3cG9ydCA9IHtcblx0XHRcdFx0XHR4OiB4LFxuXHRcdFx0XHRcdHk6IDAsXG5cdFx0XHRcdFx0d2lkdGg6IHN3LFxuXHRcdFx0XHRcdGhlaWdodDogY2gsXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHNoID0gY3cgLyByZ1xuXHRcdFx0XHRjb25zdCB5ID0gKGNoIC0gc2gpIC8gMlxuXHRcdFx0XHRnZngudmlld3BvcnQgPSB7XG5cdFx0XHRcdFx0eDogMCxcblx0XHRcdFx0XHR5OiB5LFxuXHRcdFx0XHRcdHdpZHRoOiBjdyxcblx0XHRcdFx0XHRoZWlnaHQ6IHNoLFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVyblxuXG5cdFx0fVxuXG5cdFx0aWYgKGdvcHQuc3RyZXRjaCkge1xuXHRcdFx0aWYgKCFnb3B0LndpZHRoIHx8ICFnb3B0LmhlaWdodCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJTdHJldGNoaW5nIHJlcXVpcmVzIHdpZHRoIGFuZCBoZWlnaHQgZGVmaW5lZC5cIilcblx0XHRcdH1cblx0XHR9XG5cblx0XHRnZngudmlld3BvcnQgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHRcdHdpZHRoOiBjdyxcblx0XHRcdGhlaWdodDogY2gsXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBpbml0RXZlbnRzKCkge1xuXG5cdFx0YXBwLm9uSGlkZSgoKSA9PiB7XG5cdFx0XHRpZiAoIWdvcHQuYmFja2dyb3VuZEF1ZGlvKSB7XG5cdFx0XHRcdGF1ZGlvLmN0eC5zdXNwZW5kKClcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0YXBwLm9uU2hvdygoKSA9PiB7XG5cdFx0XHRpZiAoIWdvcHQuYmFja2dyb3VuZEF1ZGlvICYmICFkZWJ1Zy5wYXVzZWQpIHtcblx0XHRcdFx0YXVkaW8uY3R4LnJlc3VtZSgpXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdGFwcC5vblJlc2l6ZSgoKSA9PiB7XG5cdFx0XHRpZiAoYXBwLmlzRnVsbHNjcmVlbigpKSByZXR1cm5cblx0XHRcdGNvbnN0IGZpeGVkU2l6ZSA9IGdvcHQud2lkdGggJiYgZ29wdC5oZWlnaHRcblx0XHRcdGlmIChmaXhlZFNpemUgJiYgIWdvcHQuc3RyZXRjaCAmJiAhZ29wdC5sZXR0ZXJib3gpIHJldHVyblxuXHRcdFx0Y2FudmFzLndpZHRoID0gY2FudmFzLm9mZnNldFdpZHRoICogcGl4ZWxEZW5zaXR5XG5cdFx0XHRjYW52YXMuaGVpZ2h0ID0gY2FudmFzLm9mZnNldEhlaWdodCAqIHBpeGVsRGVuc2l0eVxuXHRcdFx0dXBkYXRlVmlld3BvcnQoKVxuXHRcdFx0aWYgKCFmaXhlZFNpemUpIHtcblx0XHRcdFx0Z2Z4LmZyYW1lQnVmZmVyLmZyZWUoKVxuXHRcdFx0XHRnZnguZnJhbWVCdWZmZXIgPSBuZXcgRnJhbWVCdWZmZXIoZ2dsLCBnbC5kcmF3aW5nQnVmZmVyV2lkdGgsIGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQpXG5cdFx0XHRcdGdmeC53aWR0aCA9IGdsLmRyYXdpbmdCdWZmZXJXaWR0aCAvIHBpeGVsRGVuc2l0eVxuXHRcdFx0XHRnZnguaGVpZ2h0ID0gZ2wuZHJhd2luZ0J1ZmZlckhlaWdodCAvIHBpeGVsRGVuc2l0eVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRpZiAoZ29wdC5kZWJ1ZyAhPT0gZmFsc2UpIHtcblx0XHRcdGFwcC5vbktleVByZXNzKFwiZjFcIiwgKCkgPT4gZGVidWcuaW5zcGVjdCA9ICFkZWJ1Zy5pbnNwZWN0KVxuXHRcdFx0YXBwLm9uS2V5UHJlc3MoXCJmMlwiLCAoKSA9PiBkZWJ1Zy5jbGVhckxvZygpKVxuXHRcdFx0YXBwLm9uS2V5UHJlc3MoXCJmOFwiLCAoKSA9PiBkZWJ1Zy5wYXVzZWQgPSAhZGVidWcucGF1c2VkKVxuXHRcdFx0YXBwLm9uS2V5UHJlc3MoXCJmN1wiLCAoKSA9PiB7XG5cdFx0XHRcdGRlYnVnLnRpbWVTY2FsZSA9IHRvRml4ZWQoY2xhbXAoZGVidWcudGltZVNjYWxlIC0gMC4yLCAwLCAyKSwgMSlcblx0XHRcdH0pXG5cdFx0XHRhcHAub25LZXlQcmVzcyhcImY5XCIsICgpID0+IHtcblx0XHRcdFx0ZGVidWcudGltZVNjYWxlID0gdG9GaXhlZChjbGFtcChkZWJ1Zy50aW1lU2NhbGUgKyAwLjIsIDAsIDIpLCAxKVxuXHRcdFx0fSlcblx0XHRcdGFwcC5vbktleVByZXNzKFwiZjEwXCIsICgpID0+IGRlYnVnLnN0ZXBGcmFtZSgpKVxuXHRcdH1cblxuXHRcdGlmIChnb3B0LmJ1cnApIHtcblx0XHRcdGFwcC5vbktleVByZXNzKFwiYlwiLCAoKSA9PiBidXJwKCkpXG5cdFx0fVxuXG5cdH1cblxuXHR1cGRhdGVWaWV3cG9ydCgpXG5cdGluaXRFdmVudHMoKVxuXG5cdC8vIHRoZSBleHBvcnRlZCBjdHggaGFuZGxlXG5cdGNvbnN0IGN0eDogS2Fib29tQ3R4ID0ge1xuXHRcdFZFUlNJT04sXG5cdFx0Ly8gYXNzZXQgbG9hZFxuXHRcdGxvYWRSb290LFxuXHRcdGxvYWRQcm9ncmVzcyxcblx0XHRsb2FkU3ByaXRlLFxuXHRcdGxvYWRTcHJpdGVBdGxhcyxcblx0XHRsb2FkU291bmQsXG5cdFx0bG9hZEJpdG1hcEZvbnQsXG5cdFx0bG9hZEZvbnQsXG5cdFx0bG9hZFNoYWRlcixcblx0XHRsb2FkU2hhZGVyVVJMLFxuXHRcdGxvYWRBc2Vwcml0ZSxcblx0XHRsb2FkUGVkaXQsXG5cdFx0bG9hZEJlYW4sXG5cdFx0bG9hZEpTT04sXG5cdFx0bG9hZCxcblx0XHRnZXRTcHJpdGUsXG5cdFx0Z2V0U291bmQsXG5cdFx0Z2V0Rm9udCxcblx0XHRnZXRCaXRtYXBGb250LFxuXHRcdGdldFNoYWRlcixcblx0XHRnZXRBc3NldCxcblx0XHRBc3NldCxcblx0XHRTcHJpdGVEYXRhLFxuXHRcdFNvdW5kRGF0YSxcblx0XHQvLyBxdWVyeVxuXHRcdHdpZHRoLFxuXHRcdGhlaWdodCxcblx0XHRjZW50ZXIsXG5cdFx0ZHQsXG5cdFx0dGltZTogYXBwLnRpbWUsXG5cdFx0c2NyZWVuc2hvdDogYXBwLnNjcmVlbnNob3QsXG5cdFx0cmVjb3JkLFxuXHRcdGlzRm9jdXNlZCxcblx0XHRzZXRDdXJzb3I6IGFwcC5zZXRDdXJzb3IsXG5cdFx0Z2V0Q3Vyc29yOiBhcHAuZ2V0Q3Vyc29yLFxuXHRcdHNldEN1cnNvckxvY2tlZDogYXBwLnNldEN1cnNvckxvY2tlZCxcblx0XHRpc0N1cnNvckxvY2tlZDogYXBwLmlzQ3Vyc29yTG9ja2VkLFxuXHRcdHNldEZ1bGxzY3JlZW46IGFwcC5zZXRGdWxsc2NyZWVuLFxuXHRcdGlzRnVsbHNjcmVlbjogYXBwLmlzRnVsbHNjcmVlbixcblx0XHRpc1RvdWNoc2NyZWVuOiBhcHAuaXNUb3VjaHNjcmVlbixcblx0XHRvbkxvYWQsXG5cdFx0b25Mb2FkaW5nLFxuXHRcdG9uUmVzaXplLFxuXHRcdG9uR2FtZXBhZENvbm5lY3Q6IGFwcC5vbkdhbWVwYWRDb25uZWN0LFxuXHRcdG9uR2FtZXBhZERpc2Nvbm5lY3Q6IGFwcC5vbkdhbWVwYWREaXNjb25uZWN0LFxuXHRcdG9uRXJyb3IsXG5cdFx0b25DbGVhbnVwLFxuXHRcdC8vIG1pc2Ncblx0XHRjYW1Qb3MsXG5cdFx0Y2FtU2NhbGUsXG5cdFx0Y2FtUm90LFxuXHRcdHNoYWtlLFxuXHRcdHRvU2NyZWVuLFxuXHRcdHRvV29ybGQsXG5cdFx0c2V0R3Jhdml0eSxcblx0XHRnZXRHcmF2aXR5LFxuXHRcdHNldEJhY2tncm91bmQsXG5cdFx0Z2V0QmFja2dyb3VuZCxcblx0XHRnZXRHYW1lcGFkczogYXBwLmdldEdhbWVwYWRzLFxuXHRcdC8vIG9ialxuXHRcdGFkZCxcblx0XHRtYWtlLFxuXHRcdGRlc3Ryb3ksXG5cdFx0ZGVzdHJveUFsbCxcblx0XHRnZXQsXG5cdFx0cmVhZGQsXG5cdFx0Ly8gY29tcHNcblx0XHRwb3MsXG5cdFx0c2NhbGUsXG5cdFx0cm90YXRlLFxuXHRcdGNvbG9yLFxuXHRcdG9wYWNpdHksXG5cdFx0YW5jaG9yLFxuXHRcdGFyZWEsXG5cdFx0c3ByaXRlLFxuXHRcdHRleHQsXG5cdFx0cG9seWdvbixcblx0XHRyZWN0LFxuXHRcdGNpcmNsZSxcblx0XHR1dnF1YWQsXG5cdFx0b3V0bGluZSxcblx0XHRib2R5LFxuXHRcdGRvdWJsZUp1bXAsXG5cdFx0c2hhZGVyLFxuXHRcdHRpbWVyLFxuXHRcdGZpeGVkLFxuXHRcdHN0YXksXG5cdFx0aGVhbHRoLFxuXHRcdGxpZmVzcGFuLFxuXHRcdHosXG5cdFx0bW92ZSxcblx0XHRvZmZzY3JlZW4sXG5cdFx0Zm9sbG93LFxuXHRcdHN0YXRlLFxuXHRcdGZhZGVJbixcblx0XHRtYXNrLFxuXHRcdGRyYXdvbixcblx0XHR0aWxlLFxuXHRcdGFnZW50LFxuXHRcdC8vIGdyb3VwIGV2ZW50c1xuXHRcdG9uLFxuXHRcdG9uVXBkYXRlLFxuXHRcdG9uRHJhdyxcblx0XHRvbkFkZCxcblx0XHRvbkRlc3Ryb3ksXG5cdFx0b25DbGljayxcblx0XHRvbkNvbGxpZGUsXG5cdFx0b25Db2xsaWRlVXBkYXRlLFxuXHRcdG9uQ29sbGlkZUVuZCxcblx0XHRvbkhvdmVyLFxuXHRcdG9uSG92ZXJVcGRhdGUsXG5cdFx0b25Ib3ZlckVuZCxcblx0XHQvLyBpbnB1dFxuXHRcdG9uS2V5RG93bjogYXBwLm9uS2V5RG93bixcblx0XHRvbktleVByZXNzOiBhcHAub25LZXlQcmVzcyxcblx0XHRvbktleVByZXNzUmVwZWF0OiBhcHAub25LZXlQcmVzc1JlcGVhdCxcblx0XHRvbktleVJlbGVhc2U6IGFwcC5vbktleVJlbGVhc2UsXG5cdFx0b25Nb3VzZURvd246IGFwcC5vbk1vdXNlRG93bixcblx0XHRvbk1vdXNlUHJlc3M6IGFwcC5vbk1vdXNlUHJlc3MsXG5cdFx0b25Nb3VzZVJlbGVhc2U6IGFwcC5vbk1vdXNlUmVsZWFzZSxcblx0XHRvbk1vdXNlTW92ZTogYXBwLm9uTW91c2VNb3ZlLFxuXHRcdG9uQ2hhcklucHV0OiBhcHAub25DaGFySW5wdXQsXG5cdFx0b25Ub3VjaFN0YXJ0OiBhcHAub25Ub3VjaFN0YXJ0LFxuXHRcdG9uVG91Y2hNb3ZlOiBhcHAub25Ub3VjaE1vdmUsXG5cdFx0b25Ub3VjaEVuZDogYXBwLm9uVG91Y2hFbmQsXG5cdFx0b25TY3JvbGw6IGFwcC5vblNjcm9sbCxcblx0XHRvbkhpZGU6IGFwcC5vbkhpZGUsXG5cdFx0b25TaG93OiBhcHAub25TaG93LFxuXHRcdG9uR2FtZXBhZEJ1dHRvbkRvd246IGFwcC5vbkdhbWVwYWRCdXR0b25Eb3duLFxuXHRcdG9uR2FtZXBhZEJ1dHRvblByZXNzOiBhcHAub25HYW1lcGFkQnV0dG9uUHJlc3MsXG5cdFx0b25HYW1lcGFkQnV0dG9uUmVsZWFzZTogYXBwLm9uR2FtZXBhZEJ1dHRvblJlbGVhc2UsXG5cdFx0b25HYW1lcGFkU3RpY2s6IGFwcC5vbkdhbWVwYWRTdGljayxcblx0XHRtb3VzZVBvczogbW91c2VQb3MsXG5cdFx0bW91c2VEZWx0YVBvczogYXBwLm1vdXNlRGVsdGFQb3MsXG5cdFx0aXNLZXlEb3duOiBhcHAuaXNLZXlEb3duLFxuXHRcdGlzS2V5UHJlc3NlZDogYXBwLmlzS2V5UHJlc3NlZCxcblx0XHRpc0tleVByZXNzZWRSZXBlYXQ6IGFwcC5pc0tleVByZXNzZWRSZXBlYXQsXG5cdFx0aXNLZXlSZWxlYXNlZDogYXBwLmlzS2V5UmVsZWFzZWQsXG5cdFx0aXNNb3VzZURvd246IGFwcC5pc01vdXNlRG93bixcblx0XHRpc01vdXNlUHJlc3NlZDogYXBwLmlzTW91c2VQcmVzc2VkLFxuXHRcdGlzTW91c2VSZWxlYXNlZDogYXBwLmlzTW91c2VSZWxlYXNlZCxcblx0XHRpc01vdXNlTW92ZWQ6IGFwcC5pc01vdXNlTW92ZWQsXG5cdFx0aXNHYW1lcGFkQnV0dG9uUHJlc3NlZDogYXBwLmlzR2FtZXBhZEJ1dHRvblByZXNzZWQsXG5cdFx0aXNHYW1lcGFkQnV0dG9uRG93bjogYXBwLmlzR2FtZXBhZEJ1dHRvbkRvd24sXG5cdFx0aXNHYW1lcGFkQnV0dG9uUmVsZWFzZWQ6IGFwcC5pc0dhbWVwYWRCdXR0b25SZWxlYXNlZCxcblx0XHRnZXRHYW1lcGFkU3RpY2s6IGFwcC5nZXRHYW1lcGFkU3RpY2ssXG5cdFx0Y2hhcklucHV0dGVkOiBhcHAuY2hhcklucHV0dGVkLFxuXHRcdC8vIHRpbWVyXG5cdFx0bG9vcCxcblx0XHR3YWl0LFxuXHRcdC8vIGF1ZGlvXG5cdFx0cGxheSxcblx0XHR2b2x1bWUsXG5cdFx0YnVycCxcblx0XHRhdWRpb0N0eDogYXVkaW8uY3R4LFxuXHRcdC8vIG1hdGhcblx0XHRMaW5lLFxuXHRcdFJlY3QsXG5cdFx0Q2lyY2xlLFxuXHRcdFBvbHlnb24sXG5cdFx0VmVjMixcblx0XHRDb2xvcixcblx0XHRNYXQ0LFxuXHRcdFF1YWQsXG5cdFx0Uk5HLFxuXHRcdHJhbmQsXG5cdFx0cmFuZGksXG5cdFx0cmFuZFNlZWQsXG5cdFx0dmVjMixcblx0XHRyZ2IsXG5cdFx0aHNsMnJnYixcblx0XHRxdWFkLFxuXHRcdGNob29zZSxcblx0XHRjaGFuY2UsXG5cdFx0bGVycCxcblx0XHR0d2Vlbixcblx0XHRlYXNpbmdzLFxuXHRcdG1hcCxcblx0XHRtYXBjLFxuXHRcdHdhdmUsXG5cdFx0ZGVnMnJhZCxcblx0XHRyYWQyZGVnLFxuXHRcdGNsYW1wLFxuXHRcdHRlc3RMaW5lTGluZSxcblx0XHR0ZXN0UmVjdFJlY3QsXG5cdFx0dGVzdFJlY3RMaW5lLFxuXHRcdHRlc3RSZWN0UG9pbnQsXG5cdFx0dGVzdENpcmNsZVBvbHlnb24sXG5cdFx0dGVzdExpbmVQb2ludCxcblx0XHR0ZXN0TGluZUNpcmNsZSxcblx0XHQvLyByYXcgZHJhd1xuXHRcdGRyYXdTcHJpdGUsXG5cdFx0ZHJhd1RleHQsXG5cdFx0Zm9ybWF0VGV4dCxcblx0XHRkcmF3UmVjdCxcblx0XHRkcmF3TGluZSxcblx0XHRkcmF3TGluZXMsXG5cdFx0ZHJhd1RyaWFuZ2xlLFxuXHRcdGRyYXdDaXJjbGUsXG5cdFx0ZHJhd0VsbGlwc2UsXG5cdFx0ZHJhd1VWUXVhZCxcblx0XHRkcmF3UG9seWdvbixcblx0XHRkcmF3Rm9ybWF0dGVkVGV4dCxcblx0XHRkcmF3TWFza2VkLFxuXHRcdGRyYXdTdWJ0cmFjdGVkLFxuXHRcdHB1c2hUcmFuc2Zvcm0sXG5cdFx0cG9wVHJhbnNmb3JtLFxuXHRcdHB1c2hUcmFuc2xhdGUsXG5cdFx0cHVzaFNjYWxlLFxuXHRcdHB1c2hSb3RhdGUsXG5cdFx0cHVzaE1hdHJpeCxcblx0XHR1c2VQb3N0RWZmZWN0LFxuXHRcdG1ha2VDYW52YXMsXG5cdFx0Ly8gZGVidWdcblx0XHRkZWJ1Zyxcblx0XHQvLyBzY2VuZVxuXHRcdHNjZW5lLFxuXHRcdGdvLFxuXHRcdG9uU2NlbmVMZWF2ZSxcblx0XHQvLyBsZXZlbFxuXHRcdGFkZExldmVsLFxuXHRcdC8vIHN0b3JhZ2Vcblx0XHRnZXREYXRhLFxuXHRcdHNldERhdGEsXG5cdFx0ZG93bmxvYWQsXG5cdFx0ZG93bmxvYWRKU09OLFxuXHRcdGRvd25sb2FkVGV4dCxcblx0XHRkb3dubG9hZEJsb2IsXG5cdFx0Ly8gcGx1Z2luXG5cdFx0cGx1Zyxcblx0XHQvLyBjaGFyIHNldHNcblx0XHRBU0NJSV9DSEFSUyxcblx0XHQvLyBkb21cblx0XHRjYW52YXM6IGFwcC5jYW52YXMsXG5cdFx0Ly8gbWlzY1xuXHRcdGFkZEthYm9vbSxcblx0XHQvLyBkaXJzXG5cdFx0TEVGVDogVmVjMi5MRUZULFxuXHRcdFJJR0hUOiBWZWMyLlJJR0hULFxuXHRcdFVQOiBWZWMyLlVQLFxuXHRcdERPV046IFZlYzIuRE9XTixcblx0XHQvLyBjb2xvcnNcblx0XHRSRUQ6IENvbG9yLlJFRCxcblx0XHRHUkVFTjogQ29sb3IuR1JFRU4sXG5cdFx0QkxVRTogQ29sb3IuQkxVRSxcblx0XHRZRUxMT1c6IENvbG9yLllFTExPVyxcblx0XHRNQUdFTlRBOiBDb2xvci5NQUdFTlRBLFxuXHRcdENZQU46IENvbG9yLkNZQU4sXG5cdFx0V0hJVEU6IENvbG9yLldISVRFLFxuXHRcdEJMQUNLOiBDb2xvci5CTEFDSyxcblx0XHRxdWl0LFxuXHRcdC8vIGhlbHBlcnNcblx0XHRFdmVudCxcblx0XHRFdmVudEhhbmRsZXIsXG5cdFx0RXZlbnRDb250cm9sbGVyLFxuXHR9XG5cblx0aWYgKGdvcHQucGx1Z2lucykge1xuXHRcdGdvcHQucGx1Z2lucy5mb3JFYWNoKHBsdWcpXG5cdH1cblxuXHQvLyBleHBvcnQgZXZlcnl0aGluZyB0byB3aW5kb3cgaWYgZ2xvYmFsIGlzIHNldFxuXHRpZiAoZ29wdC5nbG9iYWwgIT09IGZhbHNlKSB7XG5cdFx0Zm9yIChjb25zdCBrIGluIGN0eCkge1xuXHRcdFx0d2luZG93W2tdID0gY3R4W2tdXG5cdFx0fVxuXHR9XG5cblx0aWYgKGdvcHQuZm9jdXMgIT09IGZhbHNlKSB7XG5cdFx0YXBwLmNhbnZhcy5mb2N1cygpXG5cdH1cblxuXHRyZXR1cm4gY3R4XG5cbn1cbiIsICJpbXBvcnQga2Fib29tIGZyb20gJ2thYm9vbSdcclxuXHJcbmxldCBiYXNlVXJsID0gZ2V0VXJsVmFycygpWydiYXNlVXJsJ10ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ub3JpZ2luLCAnJylcclxubGV0IHBhcmFtcyA9IEpTT04ucGFyc2UoZ2V0VXJsVmFycygpWydwYXJhbXMnXSlcclxubGV0IHN0ZXBzID0gSlNPTi5wYXJzZShnZXRVcmxWYXJzKClbJ3N0ZXBzJ10pXHJcblxyXG5mdW5jdGlvbiBnZXRVcmxWYXJzKCkge1xyXG4gICAgdmFyIHVybCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaHJlZilcclxuICAgIHZhciB2YXJzID0gW10sXHJcbiAgICAgICAgaGFzaFxyXG4gICAgdmFyIGhhc2hlcyA9IHVybC5zbGljZSh1cmwuaW5kZXhPZignPycpICsgMSkuc3BsaXQoJyYnKVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYXNoZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBoYXNoID0gaGFzaGVzW2ldLnNwbGl0KCc9JylcclxuICAgICAgICB2YXJzLnB1c2goaGFzaFswXSlcclxuICAgICAgICB2YXJzW2hhc2hbMF1dID0gaGFzaFsxXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhcnNcclxufVxyXG5cclxua2Fib29tKHtcclxuICAgIGZvbnQ6ICdtc3loJyxcclxuICAgIHdpZHRoOiA4MDAsXHJcbiAgICBoZWlnaHQ6IDEwMDAsXHJcbiAgICBiYWNrZ3JvdW5kOiBbMjU1LCAyNTUsIDI1NV1cclxufSlcclxubG9hZEZvbnQoJ21zeWgnLCBgJHtiYXNlVXJsfS9mb250cy9tc3loLVgudHRmYClcclxuXHJcbmxldCBpbWcxXHJcbmxldCBpbWcyXHJcblxyXG5jb25zdCBwYWQgPSAyNFxyXG5hZGQoW1xyXG4gICAgdGV4dCgnW2JsdWVdXHU5MTREXHU2NTk5XHU4ODY4XHVGRjFBWy9ibHVlXScsIHtcclxuICAgICAgICAvLyBXaGF0IGZvbnQgdG8gdXNlXHJcbiAgICAgICAgc2l6ZTogMjQsXHJcbiAgICAgICAgLy8gSXQnbGwgd3JhcCB0byBuZXh0IGxpbmUgaWYgdGhlIHRleHQgd2lkdGggZXhjZWVkcyB0aGUgd2lkdGggb3B0aW9uIHNwZWNpZmllZCBoZXJlXHJcbiAgICAgICAgd2lkdGg6IHdpZHRoKCkgLSBwYWQgKiAyLFxyXG4gICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgICBibHVlOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDI1NSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgcG9zKHBhZCwgcGFkKVxyXG5dKVxyXG5cclxubGV0IGkgPSAwXHJcbmZvciAobGV0IGluZ3JlZGllbnQgb2YgcGFyYW1zWydpbmdyZWRpZW50cyddKSB7XHJcbiAgICBpKytcclxuICAgIGFkZChbXHJcbiAgICAgICAgdGV4dChgW2JsdWVdLlsvYmx1ZV0gW2JsYWNrXSR7aW5ncmVkaWVudH1bL2JsYWNrXWAsIHtcclxuICAgICAgICAgICAgLy8gV2hhdCBmb250IHRvIHVzZVxyXG4gICAgICAgICAgICBmb250OiAnbXN5aCcsXHJcbiAgICAgICAgICAgIHNpemU6IDE4LFxyXG4gICAgICAgICAgICAvLyBJdCdsbCB3cmFwIHRvIG5leHQgbGluZSBpZiB0aGUgdGV4dCB3aWR0aCBleGNlZWRzIHRoZSB3aWR0aCBvcHRpb24gc3BlY2lmaWVkIGhlcmVcclxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoKCkgLSBwYWQgKiAyLFxyXG4gICAgICAgICAgICBzdHlsZXM6IHtcclxuICAgICAgICAgICAgICAgIGJsYWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJsdWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDI1NSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHBvcyg1MCwgMzAgKiAoaSArIDEpKVxyXG4gICAgXSlcclxufVxyXG5cclxubG9hZFNwcml0ZSgnaW1nMScsIGJhc2VVcmwgKyAnL2Nvb2tib29rL21hcG9fdG9mdS8xLnBuZycpXHJcbmltZzEgPSBhZGQoW1xyXG4gICAgc3ByaXRlKCdpbWcxJyksXHJcbiAgICAvLyBNYWtlIHRoZSBiYWNrZ3JvdW5kIGNlbnRlcmVkIG9uIHRoZSBzY3JlZW5cclxuICAgIHBvcyh3aWR0aCgpIC0gNDAwLCAwKSxcclxuICAgIC8vIEFsbG93IHRoZSBiYWNrZ3JvdW5kIHRvIGJlIHNjYWxlZFxyXG4gICAgc2NhbGUoMC43KSxcclxuICAgIC8vIEtlZXAgdGhlIGJhY2tncm91bmQgcG9zaXRpb24gZml4ZWQgZXZlbiB3aGVuIHRoZSBjYW1lcmEgbW92ZXNcclxuICAgIGZpeGVkKClcclxuXSlcclxuXHJcbmNvbnN0IEJBU0VfSEVJR0hUID0gNTAwXHJcbmNvbnN0IEJBU0VfTEVGVCA9IDI1MFxyXG5cclxubG9hZFNwcml0ZSgnaW1nMicsIGJhc2VVcmwgKyAnL2Nvb2tib29rL21hcG9fdG9mdS8yLnBuZycpXHJcbmltZzIgPSBhZGQoW1xyXG4gICAgc3ByaXRlKCdpbWcyJyksXHJcbiAgICAvLyBNYWtlIHRoZSBiYWNrZ3JvdW5kIGNlbnRlcmVkIG9uIHRoZSBzY3JlZW5cclxuICAgIHBvcygwLCBCQVNFX0hFSUdIVCksXHJcbiAgICAvLyBBbGxvdyB0aGUgYmFja2dyb3VuZCB0byBiZSBzY2FsZWRcclxuICAgIHNjYWxlKDAuNyksXHJcbiAgICAvLyBLZWVwIHRoZSBiYWNrZ3JvdW5kIHBvc2l0aW9uIGZpeGVkIGV2ZW4gd2hlbiB0aGUgY2FtZXJhIG1vdmVzXHJcbiAgICBmaXhlZCgpXHJcbl0pXHJcbmFkZChbXHJcbiAgICB0ZXh0KCdbYmx1ZV1cdTUyMzZcdTRGNUNcdTZCNjVcdTlBQTRcdUZGMUFbL2JsdWVdJywge1xyXG4gICAgICAgIC8vIFdoYXQgZm9udCB0byB1c2VcclxuICAgICAgICBmb250OiAnbXN5aCcsXHJcbiAgICAgICAgc2l6ZTogMjQsXHJcbiAgICAgICAgLy8gSXQnbGwgd3JhcCB0byBuZXh0IGxpbmUgaWYgdGhlIHRleHQgd2lkdGggZXhjZWVkcyB0aGUgd2lkdGggb3B0aW9uIHNwZWNpZmllZCBoZXJlXHJcbiAgICAgICAgd2lkdGg6IHdpZHRoKCkgLSBwYWQgKiAyLFxyXG4gICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgICBibHVlOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDI1NSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgcG9zKEJBU0VfTEVGVCwgQkFTRV9IRUlHSFQpXHJcbl0pXHJcblxyXG5pID0gMFxyXG5mb3IgKGxldCBzdGVwIG9mIHN0ZXBzKSB7XHJcbiAgICBpKytcclxuICAgIGFkZChbXHJcbiAgICAgICAgdGV4dChgW2JsdWVdJHtpfS5bL2JsdWVdIFtibGFja10ke3N0ZXB9Wy9ibGFja11gLCB7XHJcbiAgICAgICAgICAgIC8vIFdoYXQgZm9udCB0byB1c2VcclxuICAgICAgICAgICAgZm9udDogJ21zeWgnLFxyXG4gICAgICAgICAgICBzaXplOiAxOCxcclxuICAgICAgICAgICAgLy8gSXQnbGwgd3JhcCB0byBuZXh0IGxpbmUgaWYgdGhlIHRleHQgd2lkdGggZXhjZWVkcyB0aGUgd2lkdGggb3B0aW9uIHNwZWNpZmllZCBoZXJlXHJcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCgpIC0gcGFkICogMixcclxuICAgICAgICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgICAgICAgICBibGFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBibHVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigwLCAwLCAyNTUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBwb3MoQkFTRV9MRUZULCBCQVNFX0hFSUdIVCArIDMwICogKGkgKyAxKSlcclxuICAgIF0pXHJcbn1cclxuXHJcbmxldCBzY2FsZSA9IDAuN1xyXG5sZXQgZGlyZWN0aW9uID0gLTFcclxub25VcGRhdGUoKCkgPT4ge1xyXG4gICAgaW1nMS5zY2FsZVRvKHNjYWxlKVxyXG4gICAgLy8gaW1nMi5zY2FsZVRvKHNjYWxlKVxyXG4gICAgc2NhbGUgKz0gZGlyZWN0aW9uICogMC4wMDFcclxuICAgIGlmIChzY2FsZSA8IDAuNjUpIHtcclxuICAgICAgICBkaXJlY3Rpb24gPSAxXHJcbiAgICB9XHJcbiAgICBpZiAoc2NhbGUgPiAwLjc1KSB7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gLTFcclxuICAgIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7QUFPTyxT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UUFBTW9ELElBQU0sQ0FBQyxHQUVQSSxJQUFNLEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxFQUFFLEdBQ3REQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxFQUFFLEdBQ3JEQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxFQUFFLEdBQ3JEQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxFQUFFLEdBQ3JEQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxFQUFFLEdBQ3JEQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQ3BEQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQ3BEQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQ3BEQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQ3BEQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQ3BEQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQ3BEQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQ3BEQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQ3BEQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQ3BEQyxLQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQ25EQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQ25EQyxLQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQ25EQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEdBQ25EQyxLQUFNLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBRXhEdEIsTUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSUksSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUlDLEdBQ3pETixFQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUlJLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUcsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJQyxJQUMzRFIsRUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSUssSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJRSxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUlFLEdBQ3pEVCxFQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUlNLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUUsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJQyxJQUU1RFQsRUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJSSxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUlDLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUMsSUFDM0ROLEVBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLElBQUlJLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUcsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJQyxHQUN6RFIsRUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJSyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUlFLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUUsSUFDM0RULEVBQUksRUFBRSxJQUFJLEtBQUssRUFBRSxDQUFDLElBQUlNLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUUsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJQyxHQUUxRFQsRUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSVUsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUlDLEdBQ3pEWixFQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUlVLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUcsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJQyxJQUMzRGQsRUFBSSxFQUFFLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSWUsSUFBTSxLQUFLLEVB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QSxNQUNKLE1BQU07QUFBQSxRQUNGLE9BQU8sSUFBSSxHQUFHLEdBQUcsR0FBRztBQUFBLE1BQ3hCO0FBQUEsSUFDSjtBQUFBLEVBQ0osQ0FBQztBQUFBLEVBQ0QsSUFBSSxXQUFXLFdBQVc7QUFDOUIsQ0FBQztBQUVEQSxLQUFJO0FBQ0osU0FBUyxRQUFRLE9BQU87QUFDcEIsRUFBQUE7QUFDQSxNQUFJO0FBQUEsSUFDQSxLQUFLLFNBQVNBLEVBQUMsbUJBQW1CLElBQUksWUFBWTtBQUFBO0FBQUEsTUFFOUMsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUEsTUFFTixPQUFPLE1BQU0sSUFBSSxNQUFNO0FBQUEsTUFDdkIsUUFBUTtBQUFBLFFBQ0osT0FBTztBQUFBLFVBQ0gsT0FBTyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQUEsUUFDdEI7QUFBQSxRQUNBLE1BQU07QUFBQSxVQUNGLE9BQU8sSUFBSSxHQUFHLEdBQUcsR0FBRztBQUFBLFFBQ3hCO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBLElBQ0QsSUFBSSxXQUFXLGNBQWMsTUFBTUEsS0FBSSxFQUFFO0FBQUEsRUFDN0MsQ0FBQztBQUNMO0FBRUEsSUFBSSxRQUFRO0FBQ1osSUFBSSxZQUFZO0FBQ2hCLFNBQVMsTUFBTTtBQUNYLE9BQUssUUFBUSxLQUFLO0FBRWxCLFdBQVMsWUFBWTtBQUNyQixNQUFJLFFBQVEsTUFBTTtBQUNkLGdCQUFZO0FBQUEsRUFDaEI7QUFDQSxNQUFJLFFBQVEsTUFBTTtBQUNkLGdCQUFZO0FBQUEsRUFDaEI7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogWyJkZWcycmFkIiwgImRlZyIsICJfX25hbWUiLCAicmFkMmRlZyIsICJyYWQiLCAiY2xhbXAiLCAidmFsIiwgIm1pbiIsICJtYXgiLCAibGVycCIsICJhIiwgImIiLCAidCIsICJWZWMyIiwgIkNvbG9yIiwgIm1hcCIsICJ2IiwgImwxIiwgImgxIiwgImwyIiwgImgyIiwgIm1hcGMiLCAiX1ZlYzIiLCAieCIsICJ5IiwgImFuZ2xlIiwgImFyZ3MiLCAicDIiLCAidmVjMiIsICJzIiwgImxlbiIsICJub3JtYWwiLCAib24iLCAiZGVzdCIsICJjb3MiLCAic2luIiwgIm4iLCAibSIsICJvdGhlciIsICJSZWN0IiwgIl9Db2xvciIsICJyIiwgImciLCAiYXJyIiwgImhleCIsICJyZXN1bHQiLCAiaCIsICJsIiwgImh1ZTJyZ2IiLCAicCIsICJxIiwgImQiLCAicmdiIiwgImhzbDJyZ2IiLCAiUXVhZCIsICJfUXVhZCIsICJ3IiwgInF1YWQiLCAiTWF0NCIsICJfTWF0NCIsICJjIiwgIm0wIiwgIm0xIiwgIm00IiwgIm01IiwgIm91dCIsICJpIiwgImoiLCAiZGV0IiwgImYwMCIsICJmMDEiLCAiZjAyIiwgImYwMyIsICJmMDQiLCAiZjA1IiwgImYwNiIsICJmMDciLCAiZjA4IiwgImYwOSIsICJmMTAiLCAiZjExIiwgImYxMiIsICJmMTMiLCAiZjE0IiwgImYxNSIsICJmMTYiLCAiZjE3IiwgImYxOCIsICJ3YXZlIiwgImxvIiwgImhpIiwgImYiLCAiQSIsICJDIiwgIk0iLCAiUk5HIiwgInNlZWQiLCAiZGVmUk5HIiwgInJhbmRTZWVkIiwgInJhbmQiLCAicmFuZGkiLCAiY2hhbmNlIiwgImNob29zZSIsICJsaXN0IiwgInRlc3RSZWN0UmVjdCIsICJyMSIsICJyMiIsICJ0ZXN0TGluZUxpbmVUIiwgImRlbm9tIiwgInVhIiwgInViIiwgInRlc3RMaW5lTGluZSIsICJ0ZXN0UmVjdExpbmUiLCAidGVzdFJlY3RQb2ludCIsICJwdHMiLCAiTGluZSIsICJwdCIsICJ0ZXN0TGluZVBvaW50IiwgInYxIiwgInYyIiwgInRlc3RMaW5lQ2lyY2xlIiwgImNpcmNsZSIsICJjZW50ZXJUb09yaWdpbiIsICJkaXMiLCAidDEiLCAidDIiLCAidGVzdENpcmNsZVBvaW50IiwgInRlc3RDaXJjbGVQb2x5Z29uIiwgInByZXYiLCAiY3VyIiwgInRlc3RQb2x5Z29uUG9pbnQiLCAicG9seSIsICJfTGluZSIsICJwMSIsICJfUmVjdCIsICJwb3MiLCAid2lkdGgiLCAiaGVpZ2h0IiwgIlBvbHlnb24iLCAiZHgiLCAiZHkiLCAiQ2lyY2xlIiwgIl9DaXJjbGUiLCAiY2VudGVyIiwgInJhZGl1cyIsICJ0ciIsICJFbGxpcHNlIiwgIl9FbGxpcHNlIiwgInJ4IiwgInJ5IiwgIl9Qb2x5Z29uIiwgInRvdGFsIiwgInNhdCIsICJvdmVybGFwIiwgImRpc3BsYWNlbWVudCIsICJheGlzUHJvaiIsICJtaW4xIiwgIm1heDEiLCAibWluMiIsICJtYXgyIiwgIm8iLCAibzEiLCAibzIiLCAiUmVnaXN0cnkiLCAiaWQiLCAiRXZlbnRDb250cm9sbGVyIiwgIl9FdmVudENvbnRyb2xsZXIiLCAiY2FuY2VsIiwgImV2ZW50cyIsICJldiIsICJlIiwgIkV2ZW50IiwgImFjdGlvbiIsICJyZXMiLCAiRXZlbnRIYW5kbGVyIiwgIm5hbWUiLCAiZGVlcEVxIiwgImsxIiwgImsyIiwgImsiLCAiYmFzZTY0VG9BcnJheUJ1ZmZlciIsICJiYXNlNjQiLCAiYmluc3RyIiwgImJ5dGVzIiwgImRhdGFVUkxUb0FycmF5QnVmZmVyIiwgInVybCIsICJkb3dubG9hZCIsICJmaWxlbmFtZSIsICJkb3dubG9hZFRleHQiLCAidGV4dCIsICJkb3dubG9hZEpTT04iLCAiZGF0YSIsICJkb3dubG9hZEJsb2IiLCAiYmxvYiIsICJpc0RhdGFVUkwiLCAic3RyIiwgImdldEZpbGVOYW1lIiwgIm92ZXJsb2FkMiIsICJmbjEiLCAiZm4yIiwgImFsIiwgInVpZCIsICJnZXRFcnJvck1lc3NhZ2UiLCAiZXJyb3IiLCAiQmluYXJ5SGVhcCIsICJjb21wYXJlRm4iLCAiaXRlbSIsICJsYXN0SXRlbSIsICJwYXJlbnQiLCAiY2hpbGQiLCAiaW5kZXgxIiwgImluZGV4MiIsICJHUkFQSEVNRVMiLCAicnVuZXMiLCAic3RyaW5nIiwgImluY3JlbWVudCIsICJuZXh0VW5pdHMiLCAiaXNHcmFwaGVtZSIsICJpc1ZhcmlhdGlvblNlbGVjdG9yIiwgImlzRGlhY3JpdGljYWxNYXJrIiwgImlzWmVyb1dpZHRoSm9pbmVyIiwgImN1cnJlbnQiLCAiaXNGaXJzdE9mU3Vycm9nYXRlUGFpciIsICJjdXJyZW50UGFpciIsICJuZXh0UGFpciIsICJpc1JlZ2lvbmFsSW5kaWNhdG9yIiwgImlzU3ViZGl2aXNpb25GbGFnIiwgImlzU3VwcGxlbWVudGFyeVNwZWNpYWxwdXJwb3NlUGxhbmUiLCAiaXNGaXR6cGF0cmlja01vZGlmaWVyIiwgImJldHdlZW5JbmNsdXNpdmUiLCAiY29kZVBvaW50RnJvbVN1cnJvZ2F0ZVBhaXIiLCAiY29kZVBvaW50IiwgInBhaXIiLCAiaGlnaE9mZnNldCIsICJsb3dPZmZzZXQiLCAidmFsdWUiLCAibG93ZXIiLCAidXBwZXIiLCAiZ2FtZXBhZF9kZWZhdWx0IiwgIkJ1dHRvblN0YXRlIiwgImJ0biIsICJHYW1lcGFkU3RhdGUiLCAiRlBTQ291bnRlciIsICJkdCIsICJhcHBfZGVmYXVsdCIsICJvcHQiLCAic3RhdGUiLCAidGltZSIsICJmcHMiLCAibnVtRnJhbWVzIiwgInNjcmVlbnNob3QiLCAic2V0Q3Vyc29yIiwgImdldEN1cnNvciIsICJzZXRDdXJzb3JMb2NrZWQiLCAiaXNDdXJzb3JMb2NrZWQiLCAiZW50ZXJGdWxsc2NyZWVuIiwgImVsIiwgImV4aXRGdWxsc2NyZWVuIiwgImdldEZ1bGxzY3JlZW5FbGVtZW50IiwgInNldEZ1bGxzY3JlZW4iLCAiaXNGdWxsc2NyZWVuIiwgInF1aXQiLCAiY2FudmFzRXZlbnRzIiwgImRvY0V2ZW50cyIsICJ3aW5FdmVudHMiLCAicmVzaXplT2JzZXJ2ZXIiLCAicnVuIiwgImFjY3VtdWxhdGVkRHQiLCAiZnJhbWUiLCAibG9vcFRpbWUiLCAicmVhbER0IiwgImRlc2lyZWREdCIsICJwcm9jZXNzSW5wdXQiLCAicmVzZXRJbnB1dCIsICJpc1RvdWNoc2NyZWVuIiwgIm1vdXNlUG9zIiwgIm1vdXNlRGVsdGFQb3MiLCAiaXNNb3VzZVByZXNzZWQiLCAiaXNNb3VzZURvd24iLCAiaXNNb3VzZVJlbGVhc2VkIiwgImlzTW91c2VNb3ZlZCIsICJpc0tleVByZXNzZWQiLCAiaXNLZXlQcmVzc2VkUmVwZWF0IiwgImlzS2V5RG93biIsICJpc0tleVJlbGVhc2VkIiwgImlzR2FtZXBhZEJ1dHRvblByZXNzZWQiLCAiaXNHYW1lcGFkQnV0dG9uRG93biIsICJpc0dhbWVwYWRCdXR0b25SZWxlYXNlZCIsICJvblJlc2l6ZSIsICJvbktleURvd24iLCAia2V5IiwgIm9uS2V5UHJlc3MiLCAib25LZXlQcmVzc1JlcGVhdCIsICJvbktleVJlbGVhc2UiLCAib25Nb3VzZURvd24iLCAibW91c2UiLCAib25Nb3VzZVByZXNzIiwgIm9uTW91c2VSZWxlYXNlIiwgIm9uTW91c2VNb3ZlIiwgIm9uQ2hhcklucHV0IiwgIm9uVG91Y2hTdGFydCIsICJvblRvdWNoTW92ZSIsICJvblRvdWNoRW5kIiwgIm9uU2Nyb2xsIiwgIm9uSGlkZSIsICJvblNob3ciLCAib25HYW1lcGFkQnV0dG9uRG93biIsICJvbkdhbWVwYWRCdXR0b25QcmVzcyIsICJvbkdhbWVwYWRCdXR0b25SZWxlYXNlIiwgIm9uR2FtZXBhZFN0aWNrIiwgInN0aWNrIiwgIm9uR2FtZXBhZENvbm5lY3QiLCAib25HYW1lcGFkRGlzY29ubmVjdCIsICJnZXRHYW1lcGFkU3RpY2siLCAiY2hhcklucHV0dGVkIiwgImdldEdhbWVwYWRzIiwgInByb2Nlc3NHYW1lcGFkIiwgInJlZ2lzdGVyR2FtZXBhZCIsICJicm93c2VyR2FtZXBhZCIsICJnYW1lcGFkIiwgInJlbW92ZUdhbWVwYWQiLCAiZ2FtZXBhZFN0YXRlIiwgInN0aWNrTmFtZSIsICJwZCIsICJjdyIsICJjaCIsICJ3dyIsICJ3aCIsICJydyIsICJyYyIsICJyYXRpbyIsICJvZmZzZXQiLCAiTU9VU0VfQlVUVE9OUyIsICJQUkVWRU5UX0RFRkFVTFRfS0VZUyIsICJLRVlfQUxJQVMiLCAidG91Y2hlcyIsICJib3giLCAia2JHYW1lcGFkIiwgImVudHJpZXMiLCAiZW50cnkiLCAiVGV4dHVyZSIsICJfVGV4dHVyZSIsICJjdHgiLCAiZ2wiLCAiZmlsdGVyIiwgIndyYXAiLCAiaW1nIiwgInRleCIsICJGcmFtZUJ1ZmZlciIsICJieXRlc1BlclJvdyIsICJ0ZW1wIiwgInRvcE9mZnNldCIsICJib3R0b21PZmZzZXQiLCAiY2FudmFzIiwgIlNoYWRlciIsICJ2ZXJ0IiwgImZyYWciLCAiYXR0cmlicyIsICJ2ZXJ0U2hhZGVyIiwgImZyYWdTaGFkZXIiLCAicHJvZyIsICJhdHRyaWIiLCAidmVydEVycm9yIiwgImZyYWdFcnJvciIsICJ1bmlmb3JtIiwgImxvYyIsICJCYXRjaFJlbmRlcmVyIiwgImZvcm1hdCIsICJtYXhWZXJ0aWNlcyIsICJtYXhJbmRpY2VzIiwgInN1bSIsICJwcmltaXRpdmUiLCAidmVydHMiLCAiaW5kaWNlcyIsICJzaGFkZXIiLCAiaW5kZXhPZmZzZXQiLCAiZ2VuU3RhY2siLCAic2V0RnVuYyIsICJzdGFjayIsICJwdXNoIiwgInBvcCIsICJpbml0R2Z4IiwgIm9wdHMiLCAiZ2MiLCAib25EZXN0cm95IiwgImRlc3Ryb3kiLCAiY3VyVmVydGV4Rm9ybWF0IiwgInNldFZlcnRleEZvcm1hdCIsICJmbXQiLCAic3RyaWRlIiwgInB1c2hUZXh0dXJlMkQiLCAicG9wVGV4dHVyZTJEIiwgInB1c2hBcnJheUJ1ZmZlciIsICJwb3BBcnJheUJ1ZmZlciIsICJwdXNoRWxlbWVudEFycmF5QnVmZmVyIiwgInBvcEVsZW1lbnRBcnJheUJ1ZmZlciIsICJwdXNoRnJhbWVidWZmZXIiLCAicG9wRnJhbWVidWZmZXIiLCAicHVzaFJlbmRlcmJ1ZmZlciIsICJwb3BSZW5kZXJidWZmZXIiLCAicHVzaFZpZXdwb3J0IiwgInBvcFZpZXdwb3J0IiwgInB1c2hQcm9ncmFtIiwgInBvcFByb2dyYW0iLCAiQXNzZXQiLCAiX0Fzc2V0IiwgImxvYWRlciIsICJlcnIiLCAiYXNzZXQiLCAiQXNzZXRCdWNrZXQiLCAiaGFuZGxlIiwgImxvYWRlZCIsICJmZXRjaFVSTCIsICJmZXRjaEpTT04iLCAicGF0aCIsICJmZXRjaFRleHQiLCAiZmV0Y2hBcnJheUJ1ZmZlciIsICJsb2FkSW1nIiwgInNyYyIsICJyZXNvbHZlIiwgInJlamVjdCIsICJjMiIsICJjMyIsICJjNCIsICJjNSIsICJlYXNpbmdzIiwgImVhc2luZ3NfZGVmYXVsdCIsICJUZXhQYWNrZXIiLCAiZ2Z4IiwgImN1clRleCIsICJWRVJTSU9OIiwgIkFTQ0lJX0NIQVJTIiwgIkRFRl9BTkNIT1IiLCAiQkdfR1JJRF9TSVpFIiwgIkRFRl9GT05UIiwgIkRCR19GT05UIiwgIkRFRl9URVhUX1NJWkUiLCAiREVGX1RFWFRfQ0FDSEVfU0laRSIsICJNQVhfVEVYVF9DQUNIRV9TSVpFIiwgIkZPTlRfQVRMQVNfV0lEVEgiLCAiRk9OVF9BVExBU19IRUlHSFQiLCAiU1BSSVRFX0FUTEFTX1dJRFRIIiwgIlNQUklURV9BVExBU19IRUlHSFQiLCAiVVZfUEFEIiwgIkRFRl9IQVNIX0dSSURfU0laRSIsICJERUZfRk9OVF9GSUxURVIiLCAiTE9HX01BWCIsICJMT0dfVElNRSIsICJWRVJURVhfRk9STUFUIiwgIlNUUklERSIsICJNQVhfQkFUQ0hFRF9RVUFEIiwgIk1BWF9CQVRDSEVEX1ZFUlRTIiwgIk1BWF9CQVRDSEVEX0lORElDRVMiLCAiVkVSVF9URU1QTEFURSIsICJGUkFHX1RFTVBMQVRFIiwgIkRFRl9WRVJUIiwgIkRFRl9GUkFHIiwgIkNPTVBfREVTQyIsICJDT01QX0VWRU5UUyIsICJhbmNob3JQdCIsICJvcmlnIiwgImFsaWduUHQiLCAiYWxpZ24iLCAiY3JlYXRlRW1wdHlBdWRpb0J1ZmZlciIsICJrYWJvb21fZGVmYXVsdCIsICJnb3B0IiwgInJvb3QiLCAiZ3NjYWxlIiwgImZpeGVkU2l6ZSIsICJzdHlsZXMiLCAicGl4ZWxEZW5zaXR5IiwgImZvbnRDYWNoZUNhbnZhcyIsICJmb250Q2FjaGVDMmQiLCAiYXBwIiwgImdnbCIsICJkZWZTaGFkZXIiLCAibWFrZVNoYWRlciIsICJlbXB0eVRleCIsICJmcmFtZUJ1ZmZlciIsICJiZ0NvbG9yIiwgImJnQWxwaGEiLCAicmVuZGVyZXIiLCAiYmdUZXgiLCAiU3ByaXRlRGF0YSIsICJmcmFtZXMiLCAiYW5pbXMiLCAic2xpY2U5IiwgImFzc2V0cyIsICJzbGljZSIsICJTb3VuZERhdGEiLCAiYnVmIiwgImF1ZGlvIiwgIm1hc3Rlck5vZGUiLCAiYnVycFNuZCIsICJidXJwX2RlZmF1bHQiLCAiZml4VVJMIiwgImdhbWUiLCAibWFrZSIsICJ0aW1lciIsICJsb2FkIiwgInByb20iLCAibG9hZFByb2dyZXNzIiwgImJ1Y2tldHMiLCAiYnVja2V0IiwgImxvYWRSb290IiwgImxvYWRKU09OIiwgIkZvbnREYXRhIiwgImZhY2UiLCAibG9hZEZvbnQiLCAiZm9udCIsICJsb2FkQml0bWFwRm9udCIsICJndyIsICJnaCIsICJtYWtlRm9udCIsICJxdyIsICJxaCIsICJsb2FkU3ByaXRlQXRsYXMiLCAicmVqIiwgImpzb24iLCAiYXRsYXMiLCAiaW5mbyIsICJzcHIiLCAiY3JlYXRlU3ByaXRlU2hlZXQiLCAiaW1hZ2VzIiwgImMyZCIsICJtZXJnZWQiLCAibG9hZFNwcml0ZSIsICJsb2FkUGVkaXQiLCAibG9hZEFzZXByaXRlIiwgImltZ1NyYyIsICJqc29uU3JjIiwgInJlc29sdmVKU09OIiwgInNpemUiLCAiYW5pbSIsICJsb2FkU2hhZGVyIiwgImxvYWRTaGFkZXJVUkwiLCAicmVzb2x2ZVVybCIsICJ2Y29kZSIsICJmY29kZSIsICJsb2FkU291bmQiLCAibG9hZEJlYW4iLCAiYmVhbl9kZWZhdWx0IiwgImdldFNwcml0ZSIsICJnZXRTb3VuZCIsICJnZXRGb250IiwgImdldEJpdG1hcEZvbnQiLCAiZ2V0U2hhZGVyIiwgImdldEFzc2V0IiwgInJlc29sdmVTcHJpdGUiLCAicmVzb2x2ZVNvdW5kIiwgInNuZCIsICJyZXNvbHZlU2hhZGVyIiwgInJlc29sdmVGb250IiwgImJmb250IiwgInZvbHVtZSIsICJwbGF5IiwgInBhdXNlZCIsICJzcmNOb2RlIiwgIm9uRW5kRXZlbnRzIiwgImdhaW5Ob2RlIiwgInN0YXJ0VGltZSIsICJzdG9wVGltZSIsICJzdGFydGVkIiwgImdldFRpbWUiLCAic3RhcnQiLCAiY2xvbmVOb2RlIiwgIm9sZE5vZGUiLCAibmV3Tm9kZSIsICJidXJwIiwgIm1ha2VDYW52YXMiLCAidmVydFNyYyIsICJmcmFnU3JjIiwgIm1hdGNoIiwgImxpbmUiLCAibXNnIiwgInR5IiwgImNoYXJzIiwgImNvbHMiLCAiY2hhck1hcCIsICJkcmF3UmF3IiwgImZpeGVkIiwgInNoYWRlclNyYyIsICJ0cmFuc2Zvcm0iLCAidnYiLCAic2NyZWVuMm5kYyIsICJmbHVzaCIsICJmcmFtZVN0YXJ0IiwgImRyYXdVbnNjYWxlZCIsICJkcmF3VVZRdWFkIiwgInVzZVBvc3RFZmZlY3QiLCAiZnJhbWVFbmQiLCAib3ciLCAib2giLCAiZHJhd1RleHR1cmUiLCAicHVzaE1hdHJpeCIsICJwdXNoVHJhbnNsYXRlIiwgInB1c2hTY2FsZSIsICJwdXNoUm90YXRlIiwgInB1c2hUcmFuc2Zvcm0iLCAicG9wVHJhbnNmb3JtIiwgImNvbG9yIiwgIm9wYWNpdHkiLCAidXZQYWRYIiwgInV2UGFkWSIsICJxeCIsICJxeSIsICJzY2FsZSIsICJyZXBYIiwgInJlcFkiLCAiZHJhd1Nwcml0ZSIsICJnZXRBcmNQdHMiLCAicmFkaXVzWCIsICJyYWRpdXNZIiwgImVuZCIsICJudmVydHMiLCAic3RlcCIsICJkcmF3UmVjdCIsICJkcmF3UG9seWdvbiIsICJkcmF3TGluZSIsICJkcmF3TGluZXMiLCAibWluU0xlbiIsICJkcmF3Q2lyY2xlIiwgImRyYXdUcmlhbmdsZSIsICJkcmF3RWxsaXBzZSIsICJwb2x5T3B0IiwgIm5wdHMiLCAiZHJhd1N0ZW5jaWxlZCIsICJjb250ZW50IiwgIm1hc2siLCAidGVzdCIsICJkcmF3TWFza2VkIiwgImRyYXdTdWJ0cmFjdGVkIiwgImdldFZpZXdwb3J0U2NhbGUiLCAiYXBwbHlDaGFyVHJhbnNmb3JtIiwgImZjaGFyIiwgIlRFWFRfU1RZTEVfUkUiLCAiY29tcGlsZVN0eWxlZFRleHQiLCAiY2hhclN0eWxlTWFwIiwgInJlbmRlclRleHQiLCAiaWR4T2Zmc2V0IiwgIm9yaWdJZHgiLCAiZm9udEF0bGFzZXMiLCAiZm9ybWF0VGV4dCIsICJmb250TmFtZSIsICJsaW5lU3BhY2luZyIsICJsZXR0ZXJTcGFjaW5nIiwgImN1clgiLCAidHciLCAidGgiLCAibGluZXMiLCAiY3VyTGluZSIsICJjdXJzb3IiLCAibGFzdFNwYWNlIiwgImxhc3RTcGFjZVdpZHRoIiwgImZjaGFycyIsICJveCIsICJpZHgiLCAic3R5bGUiLCAiZHJhd1RleHQiLCAiZHJhd0Zvcm1hdHRlZFRleHQiLCAiZnRleHQiLCAid2luZG93VG9Db250ZW50IiwgImNvbnRlbnRUb1ZpZXciLCAiZGVidWdQYXVzZWQiLCAiZGVidWciLCAidXBkYXRlRnJhbWUiLCAiZ2V0IiwgImNhbVBvcyIsICJjYW1TY2FsZSIsICJjYW1Sb3QiLCAic2hha2UiLCAiaW50ZW5zaXR5IiwgInRvU2NyZWVuIiwgInRvV29ybGQiLCAiY2FsY1RyYW5zZm9ybSIsICJvYmoiLCAiY29tcHMiLCAiY29tcFN0YXRlcyIsICJjbGVhbnVwcyIsICJpbnB1dEV2ZW50cyIsICJvbkN1ckNvbXBDbGVhbnVwIiwgInRyaWdnZXIiLCAidGFnIiwgImNoaWxkcmVuIiwgIm1hc2tGdW5jIiwgImNvbXAiLCAicHJvcCIsICJmdW5jIiwgImNoZWNrRGVwcyIsICJkZXAiLCAicmVjdXJzZSIsICJpc0NoaWxkIiwgIm9uQWRkIiwgImN0cmwiLCAiY2IiLCAiZXZzIiwgImV2ZW50IiwgIm9uVXBkYXRlIiwgImFkZCIsICJvbkRyYXciLCAib25Db2xsaWRlIiwgImNvbCIsICJvbkNvbGxpZGVVcGRhdGUiLCAib25Db2xsaWRlRW5kIiwgImZvckFsbEN1cnJlbnRBbmRGdXR1cmUiLCAib25DbGljayIsICJvbkhvdmVyIiwgIm9uSG92ZXJVcGRhdGUiLCAib25Ib3ZlckVuZCIsICJzZXRHcmF2aXR5IiwgImdldEdyYXZpdHkiLCAic2V0QmFja2dyb3VuZCIsICJnZXRCYWNrZ3JvdW5kIiwgInNwZWVkIiwgImRpZmYiLCAiaXNGaXhlZCIsICJ0b0ZpeGVkIiwgInJvdGF0ZSIsICJlYXNlRnVuYyIsICJ0d2VlbiIsICJhbmNob3IiLCAieiIsICJmb2xsb3ciLCAibW92ZSIsICJkaXIiLCAiREVGX09GRlNDUkVFTl9ESVMiLCAib2Zmc2NyZWVuIiwgImRpc3RhbmNlIiwgImlzT3V0IiwgInNjcmVlblJlY3QiLCAiYXJlYSIsICJjb2xsaWRpbmciLCAiY29sbGlkaW5nVGhpc0ZyYW1lIiwgIm1wb3MiLCAiaG92ZXJpbmciLCAibG9jYWxBcmVhIiwgImdldFJlbmRlclByb3BzIiwgInNwcml0ZSIsICJzcHJpdGVEYXRhIiwgImN1ckFuaW0iLCAiY3VyQW5pbURpciIsICJzcHJpdGVMb2FkZWRFdmVudCIsICJjYWxjVGV4U2NhbGUiLCAibGVmdCIsICJyaWdodCIsICJ0b3AiLCAiYm90dG9tIiwgIml3IiwgImloIiwgIncxIiwgInczIiwgIncyIiwgImgzIiwgInF1YWRzIiwgInV2IiwgInNldFNwcml0ZURhdGEiLCAib25Mb2FkIiwgInByZXZBbmltIiwgInVwZGF0ZSIsICJudCIsICJwb2x5Z29uIiwgInJlY3QiLCAidXZxdWFkIiwgIm91dGxpbmUiLCAiYWN0aW9ucyIsICJjdXJUaW1lciIsICJuZXdBY3Rpb24iLCAiZnJvbSIsICJ0byIsICJkdXJhdGlvbiIsICJzZXRWYWx1ZSIsICJjdXJUaW1lIiwgIkRFRl9KVU1QX0ZPUkNFIiwgIk1BWF9WRUwiLCAiYm9keSIsICJjdXJQbGF0Zm9ybSIsICJsYXN0UGxhdGZvcm1Qb3MiLCAid2FudEZhbGwiLCAidG1hc3MiLCAiY29sMiIsICJwcmV2VmVsWSIsICJmb3JjZSIsICJkb3VibGVKdW1wIiwgIm51bUp1bXBzIiwgImp1bXBzTGVmdCIsICJzdGF5IiwgInNjZW5lc1RvU3RheSIsICJoZWFsdGgiLCAiaHAiLCAibWF4SFAiLCAib3JpZ0hQIiwgImxpZmVzcGFuIiwgImZhZGUiLCAid2FpdCIsICJpbml0U3RhdGUiLCAic3RhdGVMaXN0IiwgInRyYW5zaXRpb25zIiwgImluaXRTdGF0ZUV2ZW50cyIsICJkaWRGaXJzdEVudGVyIiwgIm9sZFN0YXRlIiwgImF2YWlsYWJsZSIsICJmYWRlSW4iLCAiZG9uZSIsICJkcmF3b24iLCAic2NlbmUiLCAiZGVmIiwgImdvIiwgImluaXRFdmVudHMiLCAib25TY2VuZUxlYXZlIiwgImdldERhdGEiLCAic2V0RGF0YSIsICJwbHVnIiwgInBsdWdpbiIsICJmdW5jcyIsICJmdW5jc09iaiIsICJFZGdlTWFzayIsICJ0aWxlIiwgInRpbGVQb3MiLCAiaXNPYnN0YWNsZSIsICJjb3N0IiwgImVkZ2VzIiwgImdldEVkZ2VNYXNrIiwgImxvb3B1cCIsICJlZGdlTWFzayIsICJsZXZlbCIsICJpcyIsICJhZGRMZXZlbCIsICJudW1Sb3dzIiwgIm51bUNvbHVtbnMiLCAic3BhdGlhbE1hcCIsICJjb3N0TWFwIiwgImVkZ2VNYXAiLCAiY29ubmVjdGl2aXR5TWFwIiwgInRpbGUySGFzaCIsICJoYXNoMlRpbGUiLCAiaGFzaCIsICJjcmVhdGVTcGF0aWFsTWFwIiwgImluc2VydEludG9TcGF0aWFsTWFwIiwgInJlbW92ZUZyb21TcGF0aWFsTWFwIiwgImluZGV4IiwgInVwZGF0ZVNwYXRpYWxNYXAiLCAic3BhdGlhbE1hcENoYW5nZWQiLCAiY3JlYXRlQ29zdE1hcCIsICJvYmplY3RzIiwgImNyZWF0ZUVkZ2VNYXAiLCAiY3JlYXRlQ29ubmVjdGl2aXR5TWFwIiwgInRyYXZlcnNlIiwgImZyb250aWVyIiwgImdldE5laWdoYm91cnMiLCAiZ2V0Q29zdCIsICJub2RlIiwgIm5laWdoYm91ciIsICJnZXRIZXVyaXN0aWMiLCAiZ29hbCIsICJkaWFnb25hbHMiLCAibGV2ZWxDb21wIiwgImhhc1BvcyIsICJoYXNUaWxlIiwgImNhbWVGcm9tIiwgImNvc3RTb0ZhciIsICJuZWlnaGJvdXJzIiwgIm5leHQiLCAibmV3Q29zdCIsICJyb3ciLCAia2V5cyIsICJhZ2VudCIsICJ0YXJnZXQiLCAibmF2TWFwQ2hhbmdlZEV2ZW50IiwgInJlY29yZCIsICJmcmFtZVJhdGUiLCAic3RyZWFtIiwgImF1ZGlvRGVzdCIsICJyZWNvcmRlciIsICJjaHVua3MiLCAiaXNGb2N1c2VkIiwgInJlYWRkIiwgImRlc3Ryb3lBbGwiLCAibG9vcCIsICJib29tIiwgImthU3ByaXRlIiwgImthX2RlZmF1bHQiLCAiYm9vbVNwcml0ZSIsICJib29tX2RlZmF1bHQiLCAiYWRkS2Fib29tIiwgImthYm9vbSIsICJrYSIsICJDb2xsaXNpb24iLCAic291cmNlIiwgInJlc29sdmVkIiwgImNoZWNrRnJhbWUiLCAiZ3JpZCIsICJjZWxsU2l6ZSIsICJjaGVja09iaiIsICJhb2JqIiwgImJib3giLCAieG1pbiIsICJ5bWluIiwgInhtYXgiLCAieW1heCIsICJjaGVja2VkIiwgImNlbGwiLCAiY2hlY2siLCAiY29sMSIsICJkcmF3RnJhbWUiLCAiY2FtIiwgImRyYXdMb2FkU2NyZWVuIiwgInByb2dyZXNzIiwgImRyYXdJbnNwZWN0VGV4dCIsICJ0eHQiLCAicGFkIiwgImZ0eHQiLCAiYnciLCAiYmgiLCAiZHJhd0RlYnVnIiwgImluc3BlY3RpbmciLCAiZmxpcHBlZCIsICJsb2dzIiwgImxvZyIsICJvbkxvYWRpbmciLCAib25FcnJvciIsICJoYW5kbGVFcnIiLCAidGV4dFN0eWxlIiwgInRpdGxlIiwgIm9uQ2xlYW51cCIsICJudW1UZXh0dXJlVW5pdHMiLCAidW5pdCIsICJpc0ZpcnN0RnJhbWUiLCAidXBkYXRlVmlld3BvcnQiLCAicmciLCAic3ciLCAic2giLCAiaSJdCn0K
