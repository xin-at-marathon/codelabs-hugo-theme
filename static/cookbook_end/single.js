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

// src/cookbook_end/single.ts
var baseUrl = getUrlVars()["baseUrl"];
var params = JSON.parse(getUrlVars()["params"]);
zo({
  font: "msyh",
  width: 800,
  height: 1e3,
  background: [255, 255, 255]
});
loadFont("msyh", `${baseUrl}fonts/msyh-X.ttf`);
var SCALE = 0.7;
var BASE_HEIGHT = 600;
var BASE_LEFT = 250;
var pad = 25;
loadSprite("img3", baseUrl + "cookbook/mapo_tofu/3.png");
img3 = add([
  sprite("img3"),
  // Make the background centered on the screen
  pos(30, 0),
  // Allow the background to be scaled
  scale(SCALE),
  // Keep the background position fixed even when the camera moves
  fixed()
]);
add([
  text("[blue]\u77E5\u8BC6\u70B9\uFF1A[/blue]", {
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
  pos(pad, BASE_HEIGHT)
]);
var i2 = 0;
for (let nutrition_fact of params["nutrition_facts"]) {
  i2++;
  add([
    text(`[blue].[/blue] [black]${nutrition_fact}[/black]`, {
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
    pos(pad * 2, BASE_HEIGHT + 30 * (i2 + 1))
  ]);
}
add([
  text("[blue]\u6CE8\u610F\u4E8B\u9879\uFF1A[/blue]", {
    // What font to use
    font: "msyh",
    size: 24,
    // It'll wrap to next line if the text width exceeds the width option specified here
    width: BASE_LEFT,
    styles: {
      blue: {
        color: rgb(0, 0, 255)
      }
    }
  }),
  pos(BASE_LEFT, BASE_HEIGHT)
]);
i2 = 0;
for (let tip of params["tips"]) {
  i2++;
  add([
    text(`[blue]${i2}.[/blue] [black]${tip}[/black]`, {
      // What font to use
      font: "msyh",
      size: 18,
      // It'll wrap to next line if the text width exceeds the width option specified here
      width: width() - BASE_LEFT - 50,
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
var scale = SCALE;
var direction = -1;
onUpdate(() => {
  img3.scaleTo(scale);
  scale += direction * 1e-3;
  if (scale < 0.68) {
    direction = 1;
  }
  if (scale > 0.72) {
    direction = -1;
  }
});
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL2thYm9vbS9zcmMvbWF0aC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMva2Fib29tL3NyYy91dGlscy50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMva2Fib29tL3NyYy9nYW1lcGFkLmpzb24iLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2thYm9vbS9zcmMvYXBwLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9rYWJvb20vc3JjL2dmeC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMva2Fib29tL3NyYy9hc3NldHMudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2thYm9vbS9zcmMvZWFzaW5ncy50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMva2Fib29tL3NyYy90ZXhQYWNrZXIudHMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2thYm9vbS9zcmMva2Fib29tLnRzIiwgIi4uLy4uL3NyYy9jb29rYm9va19lbmQvc2luZ2xlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge1xuXHRQb2ludCxcblx0Uk5HVmFsdWUsXG5cdExlcnBWYWx1ZSxcblx0VmVjMkFyZ3MsXG59IGZyb20gXCIuL3R5cGVzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZzJyYWQoZGVnOiBudW1iZXIpOiBudW1iZXIge1xuXHRyZXR1cm4gZGVnICogTWF0aC5QSSAvIDE4MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFkMmRlZyhyYWQ6IG51bWJlcik6IG51bWJlciB7XG5cdHJldHVybiByYWQgKiAxODAgLyBNYXRoLlBJXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChcblx0dmFsOiBudW1iZXIsXG5cdG1pbjogbnVtYmVyLFxuXHRtYXg6IG51bWJlcixcbik6IG51bWJlciB7XG5cdGlmIChtaW4gPiBtYXgpIHtcblx0XHRyZXR1cm4gY2xhbXAodmFsLCBtYXgsIG1pbilcblx0fVxuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwPFYgZXh0ZW5kcyBMZXJwVmFsdWU+KFxuXHRhOiBWLFxuXHRiOiBWLFxuXHR0OiBudW1iZXIsXG4pOiBWIHtcblx0aWYgKHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBiID09PSBcIm51bWJlclwiKSB7XG5cdFx0cmV0dXJuIGEgKyAoYiAtIGEpICogdCBhcyBWXG5cdH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIFZlYzIgJiYgYiBpbnN0YW5jZW9mIFZlYzIpIHtcblx0XHRyZXR1cm4gYS5sZXJwKGIsIHQpIGFzIFZcblx0fSBlbHNlIGlmIChhIGluc3RhbmNlb2YgQ29sb3IgJiYgYiBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0cmV0dXJuIGEubGVycChiLCB0KSBhcyBWXG5cdH1cblx0dGhyb3cgbmV3IEVycm9yKGBCYWQgdmFsdWUgZm9yIGxlcnAoKTogJHthfSwgJHtifS4gT25seSBudW1iZXIsIFZlYzIgYW5kIENvbG9yIGlzIHN1cHBvcnRlZC5gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwKFxuXHR2OiBudW1iZXIsXG5cdGwxOiBudW1iZXIsXG5cdGgxOiBudW1iZXIsXG5cdGwyOiBudW1iZXIsXG5cdGgyOiBudW1iZXIsXG4pOiBudW1iZXIge1xuXHRyZXR1cm4gbDIgKyAodiAtIGwxKSAvIChoMSAtIGwxKSAqIChoMiAtIGwyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwYyhcblx0djogbnVtYmVyLFxuXHRsMTogbnVtYmVyLFxuXHRoMTogbnVtYmVyLFxuXHRsMjogbnVtYmVyLFxuXHRoMjogbnVtYmVyLFxuKTogbnVtYmVyIHtcblx0cmV0dXJuIGNsYW1wKG1hcCh2LCBsMSwgaDEsIGwyLCBoMiksIGwyLCBoMilcbn1cblxuZXhwb3J0IGNsYXNzIFZlYzIge1xuXHR4OiBudW1iZXIgPSAwXG5cdHk6IG51bWJlciA9IDBcblx0Y29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0geCkge1xuXHRcdHRoaXMueCA9IHhcblx0XHR0aGlzLnkgPSB5XG5cdH1cblx0c3RhdGljIGZyb21BbmdsZShkZWc6IG51bWJlcikge1xuXHRcdGNvbnN0IGFuZ2xlID0gZGVnMnJhZChkZWcpXG5cdFx0cmV0dXJuIG5ldyBWZWMyKE1hdGguY29zKGFuZ2xlKSwgTWF0aC5zaW4oYW5nbGUpKVxuXHR9XG5cdHN0YXRpYyBMRUZUID0gbmV3IFZlYzIoLTEsIDApXG5cdHN0YXRpYyBSSUdIVCA9IG5ldyBWZWMyKDEsIDApXG5cdHN0YXRpYyBVUCA9IG5ldyBWZWMyKDAsIC0xKVxuXHRzdGF0aWMgRE9XTiA9IG5ldyBWZWMyKDAsIDEpXG5cdGNsb25lKCk6IFZlYzIge1xuXHRcdHJldHVybiBuZXcgVmVjMih0aGlzLngsIHRoaXMueSlcblx0fVxuXHRhZGQoLi4uYXJnczogVmVjMkFyZ3MpOiBWZWMyIHtcblx0XHRjb25zdCBwMiA9IHZlYzIoLi4uYXJncylcblx0XHRyZXR1cm4gbmV3IFZlYzIodGhpcy54ICsgcDIueCwgdGhpcy55ICsgcDIueSlcblx0fVxuXHRzdWIoLi4uYXJnczogVmVjMkFyZ3MpOiBWZWMyIHtcblx0XHRjb25zdCBwMiA9IHZlYzIoLi4uYXJncylcblx0XHRyZXR1cm4gbmV3IFZlYzIodGhpcy54IC0gcDIueCwgdGhpcy55IC0gcDIueSlcblx0fVxuXHRzY2FsZSguLi5hcmdzOiBWZWMyQXJncyk6IFZlYzIge1xuXHRcdGNvbnN0IHMgPSB2ZWMyKC4uLmFyZ3MpXG5cdFx0cmV0dXJuIG5ldyBWZWMyKHRoaXMueCAqIHMueCwgdGhpcy55ICogcy55KVxuXHR9XG5cdGRpc3QoLi4uYXJnczogVmVjMkFyZ3MpOiBudW1iZXIge1xuXHRcdGNvbnN0IHAyID0gdmVjMiguLi5hcmdzKVxuXHRcdHJldHVybiB0aGlzLnN1YihwMikubGVuKClcblx0fVxuXHRzZGlzdCguLi5hcmdzOiBWZWMyQXJncyk6IG51bWJlciB7XG5cdFx0Y29uc3QgcDIgPSB2ZWMyKC4uLmFyZ3MpXG5cdFx0cmV0dXJuIHRoaXMuc3ViKHAyKS5zbGVuKClcblx0fVxuXHRsZW4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZG90KHRoaXMpKVxuXHR9XG5cdHNsZW4oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5kb3QodGhpcylcblx0fVxuXHR1bml0KCk6IFZlYzIge1xuXHRcdGNvbnN0IGxlbiA9IHRoaXMubGVuKClcblx0XHRyZXR1cm4gbGVuID09PSAwID8gbmV3IFZlYzIoMCkgOiB0aGlzLnNjYWxlKDEgLyBsZW4pXG5cdH1cblx0bm9ybWFsKCk6IFZlYzIge1xuXHRcdHJldHVybiBuZXcgVmVjMih0aGlzLnksIC10aGlzLngpXG5cdH1cblx0cmVmbGVjdChub3JtYWw6IFZlYzIpIHtcblx0XHRyZXR1cm4gdGhpcy5zdWIobm9ybWFsLnNjYWxlKDIgKiB0aGlzLmRvdChub3JtYWwpKSlcblx0fVxuXHRwcm9qZWN0KG9uOiBWZWMyKSB7XG5cdFx0cmV0dXJuIG9uLnNjYWxlKG9uLmRvdCh0aGlzKSAvIG9uLmxlbigpKVxuXHR9XG5cdHJlamVjdChvbjogVmVjMikge1xuXHRcdHJldHVybiB0aGlzLnN1Yih0aGlzLnByb2plY3Qob24pKVxuXHR9XG5cdGRvdChwMjogVmVjMik6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMueCAqIHAyLnggKyB0aGlzLnkgKiBwMi55XG5cdH1cblx0Y3Jvc3MocDI6IFZlYzIpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnggKiBwMi55IC0gdGhpcy55ICogcDIueFxuXHR9XG5cdGFuZ2xlKC4uLmFyZ3M6IFZlYzJBcmdzKTogbnVtYmVyIHtcblx0XHRjb25zdCBwMiA9IHZlYzIoLi4uYXJncylcblx0XHRyZXR1cm4gcmFkMmRlZyhNYXRoLmF0YW4yKHRoaXMueSAtIHAyLnksIHRoaXMueCAtIHAyLngpKVxuXHR9XG5cdGFuZ2xlQmV0d2VlbiguLi5hcmdzOiBWZWMyQXJncyk6IG51bWJlciB7XG5cdFx0Y29uc3QgcDIgPSB2ZWMyKC4uLmFyZ3MpXG5cdFx0cmV0dXJuIHJhZDJkZWcoTWF0aC5hdGFuMih0aGlzLmNyb3NzKHAyKSwgdGhpcy5kb3QocDIpKSlcblx0fVxuXHRsZXJwKGRlc3Q6IFZlYzIsIHQ6IG51bWJlcik6IFZlYzIge1xuXHRcdHJldHVybiBuZXcgVmVjMihsZXJwKHRoaXMueCwgZGVzdC54LCB0KSwgbGVycCh0aGlzLnksIGRlc3QueSwgdCkpXG5cdH1cblx0c2xlcnAoZGVzdDogVmVjMiwgdDogbnVtYmVyKTogVmVjMiB7XG5cdFx0Y29uc3QgY29zID0gdGhpcy5kb3QoZGVzdClcblx0XHRjb25zdCBzaW4gPSB0aGlzLmNyb3NzKGRlc3QpXG5cdFx0Y29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKHNpbiwgY29zKVxuXHRcdHJldHVybiB0aGlzXG5cdFx0XHQuc2NhbGUoTWF0aC5zaW4oKDEgLSB0KSAqIGFuZ2xlKSlcblx0XHRcdC5hZGQoZGVzdC5zY2FsZShNYXRoLnNpbih0ICogYW5nbGUpKSlcblx0XHRcdC5zY2FsZSgxIC8gc2luKVxuXHR9XG5cdGlzWmVybygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy54ID09PSAwICYmIHRoaXMueSA9PT0gMFxuXHR9XG5cdHRvRml4ZWQobjogbnVtYmVyKTogVmVjMiB7XG5cdFx0cmV0dXJuIG5ldyBWZWMyKE51bWJlcih0aGlzLngudG9GaXhlZChuKSksIE51bWJlcih0aGlzLnkudG9GaXhlZChuKSkpXG5cdH1cblx0dHJhbnNmb3JtKG06IE1hdDQpOiBWZWMyIHtcblx0XHRyZXR1cm4gbS5tdWx0VmVjMih0aGlzKVxuXHR9XG5cdGVxKG90aGVyOiBWZWMyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMueCA9PT0gb3RoZXIueCAmJiB0aGlzLnkgPT09IG90aGVyLnlcblx0fVxuXHRiYm94KCk6IFJlY3Qge1xuXHRcdHJldHVybiBuZXcgUmVjdCh0aGlzLCAwLCAwKVxuXHR9XG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGB2ZWMyKCR7dGhpcy54LnRvRml4ZWQoMil9LCAke3RoaXMueS50b0ZpeGVkKDIpfSlgXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlYzIoLi4uYXJnczogVmVjMkFyZ3MpOiBWZWMyIHtcblx0aWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG5cdFx0aWYgKGFyZ3NbMF0gaW5zdGFuY2VvZiBWZWMyKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFZlYzIoYXJnc1swXS54LCBhcmdzWzBdLnkpXG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZ3NbMF0pICYmIGFyZ3NbMF0ubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFZlYzIoLi4uYXJnc1swXSlcblx0XHR9XG5cdH1cblx0Ly8gQHRzLWlnbm9yZVxuXHRyZXR1cm4gbmV3IFZlYzIoLi4uYXJncylcbn1cblxuZXhwb3J0IGNsYXNzIENvbG9yIHtcblxuXHRyOiBudW1iZXIgPSAyNTVcblx0ZzogbnVtYmVyID0gMjU1XG5cdGI6IG51bWJlciA9IDI1NVxuXG5cdGNvbnN0cnVjdG9yKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpIHtcblx0XHR0aGlzLnIgPSBjbGFtcChyLCAwLCAyNTUpXG5cdFx0dGhpcy5nID0gY2xhbXAoZywgMCwgMjU1KVxuXHRcdHRoaXMuYiA9IGNsYW1wKGIsIDAsIDI1NSlcblx0fVxuXG5cdHN0YXRpYyBmcm9tQXJyYXkoYXJyOiBudW1iZXJbXSkge1xuXHRcdHJldHVybiBuZXcgQ29sb3IoYXJyWzBdLCBhcnJbMV0sIGFyclsyXSlcblx0fVxuXG5cdHN0YXRpYyBmcm9tSGV4KGhleDogc3RyaW5nIHwgbnVtYmVyKSB7XG5cdFx0aWYgKHR5cGVvZiBoZXggPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IoXG5cdFx0XHRcdChoZXggPj4gMTYpICYgMHhmZixcblx0XHRcdFx0KGhleCA+PiA4KSAmIDB4ZmYsXG5cdFx0XHRcdChoZXggPj4gMCkgJiAweGZmLFxuXHRcdFx0KVxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGhleCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleClcblx0XHRcdHJldHVybiBuZXcgQ29sb3IoXG5cdFx0XHRcdHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuXHRcdFx0XHRwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcblx0XHRcdFx0cGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaGV4IGNvbG9yIGZvcm1hdFwiKVxuXHRcdH1cblx0fVxuXG5cdC8vIFRPRE86IHVzZSByYW5nZSBvZiBbMCwgMzYwXSBbMCwgMTAwXSBbMCwgMTAwXT9cblx0c3RhdGljIGZyb21IU0woaDogbnVtYmVyLCBzOiBudW1iZXIsIGw6IG51bWJlcikge1xuXG5cdFx0aWYgKHMgPT0gMCl7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKDI1NSAqIGwsIDI1NSAqIGwsIDI1NSAqIGwpXG5cdFx0fVxuXG5cdFx0Y29uc3QgaHVlMnJnYiA9IChwLCBxLCB0KSA9PiB7XG5cdFx0XHRpZiAodCA8IDApIHQgKz0gMVxuXHRcdFx0aWYgKHQgPiAxKSB0IC09IDFcblx0XHRcdGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0XG5cdFx0XHRpZiAodCA8IDEgLyAyKSByZXR1cm4gcVxuXHRcdFx0aWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIvMyAtIHQpICogNlxuXHRcdFx0cmV0dXJuIHBcblx0XHR9XG5cblx0XHRjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogc1xuXHRcdGNvbnN0IHAgPSAyICogbCAtIHFcblx0XHRjb25zdCByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpXG5cdFx0Y29uc3QgZyA9IGh1ZTJyZ2IocCwgcSwgaClcblx0XHRjb25zdCBiID0gaHVlMnJnYihwLCBxLCBoIC0gMSAvIDMpXG5cblx0XHRyZXR1cm4gbmV3IENvbG9yKE1hdGgucm91bmQociAqIDI1NSksIE1hdGgucm91bmQoZyAqIDI1NSksIE1hdGgucm91bmQoYiAqIDI1NSkpXG5cblx0fVxuXG5cdHN0YXRpYyBSRUQgPSBuZXcgQ29sb3IoMjU1LCAwLCAwKVxuXHRzdGF0aWMgR1JFRU4gPSBuZXcgQ29sb3IoMCwgMjU1LCAwKVxuXHRzdGF0aWMgQkxVRSA9IG5ldyBDb2xvcigwLCAwLCAyNTUpXG5cdHN0YXRpYyBZRUxMT1cgPSBuZXcgQ29sb3IoMjU1LCAyNTUsIDApXG5cdHN0YXRpYyBNQUdFTlRBID0gbmV3IENvbG9yKDI1NSwgMCwgMjU1KVxuXHRzdGF0aWMgQ1lBTiA9IG5ldyBDb2xvcigwLCAyNTUsIDI1NSlcblx0c3RhdGljIFdISVRFID0gbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUpXG5cdHN0YXRpYyBCTEFDSyA9IG5ldyBDb2xvcigwLCAwLCAwKVxuXG5cdGNsb25lKCk6IENvbG9yIHtcblx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMuciwgdGhpcy5nLCB0aGlzLmIpXG5cdH1cblxuXHRsaWdodGVuKGE6IG51bWJlcik6IENvbG9yIHtcblx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMuciArIGEsIHRoaXMuZyArIGEsIHRoaXMuYiArIGEpXG5cdH1cblxuXHRkYXJrZW4oYTogbnVtYmVyKTogQ29sb3Ige1xuXHRcdHJldHVybiB0aGlzLmxpZ2h0ZW4oLWEpXG5cdH1cblxuXHRpbnZlcnQoKTogQ29sb3Ige1xuXHRcdHJldHVybiBuZXcgQ29sb3IoMjU1IC0gdGhpcy5yLCAyNTUgLSB0aGlzLmcsIDI1NSAtIHRoaXMuYilcblx0fVxuXG5cdG11bHQob3RoZXI6IENvbG9yKTogQ29sb3Ige1xuXHRcdHJldHVybiBuZXcgQ29sb3IoXG5cdFx0XHR0aGlzLnIgKiBvdGhlci5yIC8gMjU1LFxuXHRcdFx0dGhpcy5nICogb3RoZXIuZyAvIDI1NSxcblx0XHRcdHRoaXMuYiAqIG90aGVyLmIgLyAyNTUsXG5cdFx0KVxuXHR9XG5cblx0bGVycChkZXN0OiBDb2xvciwgdDogbnVtYmVyKTogQ29sb3Ige1xuXHRcdHJldHVybiBuZXcgQ29sb3IoXG5cdFx0XHRsZXJwKHRoaXMuciwgZGVzdC5yLCB0KSxcblx0XHRcdGxlcnAodGhpcy5nLCBkZXN0LmcsIHQpLFxuXHRcdFx0bGVycCh0aGlzLmIsIGRlc3QuYiwgdCksXG5cdFx0KVxuXHR9XG5cblx0dG9IU0woKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcblx0XHRjb25zdCByID0gdGhpcy5yIC8gMjU1XG5cdFx0Y29uc3QgZyA9IHRoaXMuZyAvIDI1NVxuXHRcdGNvbnN0IGIgPSB0aGlzLmIgLyAyNTVcblx0XHRjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKSwgbWluID0gTWF0aC5taW4ociwgZywgYilcblx0XHRsZXQgaCA9IChtYXggKyBtaW4pIC8gMlxuXHRcdGxldCBzID0gaFxuXHRcdGNvbnN0IGwgPSBoXG5cdFx0aWYgKG1heCA9PSBtaW4pIHtcblx0XHRcdGggPSBzID0gMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBkID0gbWF4IC0gbWluXG5cdFx0XHRzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbilcblx0XHRcdHN3aXRjaCAobWF4KSB7XG5cdFx0XHRcdGNhc2UgcjogaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApOyBicmVha1xuXHRcdFx0XHRjYXNlIGc6IGggPSAoYiAtIHIpIC8gZCArIDI7IGJyZWFrXG5cdFx0XHRcdGNhc2UgYjogaCA9IChyIC0gZykgLyBkICsgNDsgYnJlYWtcblx0XHRcdH1cblx0XHRcdGggLz0gNlxuXHRcdH1cblx0XHRyZXR1cm4gWyBoLCBzLCBsIF1cblx0fVxuXG5cdGVxKG90aGVyOiBDb2xvcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnIgPT09IG90aGVyLnJcblx0XHRcdCYmIHRoaXMuZyA9PT0gb3RoZXIuZ1xuXHRcdFx0JiYgdGhpcy5iID09PSBvdGhlci5iXG5cblx0fVxuXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGByZ2IoJHt0aGlzLnJ9LCAke3RoaXMuZ30sICR7dGhpcy5ifSlgXG5cdH1cblxuXHR0b0hleCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBcIiNcIiArICgoMSA8PCAyNCkgKyAodGhpcy5yIDw8IDE2KSArICh0aGlzLmcgPDwgOCkgKyB0aGlzLmIpLnRvU3RyaW5nKDE2KS5zbGljZSgxKVxuXHR9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYiguLi5hcmdzKTogQ29sb3Ige1xuXHRpZiAoYXJncy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUpXG5cdH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcblx0XHRpZiAoYXJnc1swXSBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0XHRyZXR1cm4gYXJnc1swXS5jbG9uZSgpXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0cmV0dXJuIENvbG9yLmZyb21IZXgoYXJnc1swXSlcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnc1swXSkgJiYgYXJnc1swXS5sZW5ndGggPT09IDMpIHtcblx0XHRcdHJldHVybiBDb2xvci5mcm9tQXJyYXkoYXJnc1swXSlcblx0XHR9XG5cdH1cblx0Ly8gQHRzLWlnbm9yZVxuXHRyZXR1cm4gbmV3IENvbG9yKC4uLmFyZ3MpXG59XG5cbmV4cG9ydCBjb25zdCBoc2wycmdiID0gKGgsIHMsIGwpID0+IENvbG9yLmZyb21IU0woaCwgcywgbClcblxuZXhwb3J0IGNsYXNzIFF1YWQge1xuXHR4OiBudW1iZXIgPSAwXG5cdHk6IG51bWJlciA9IDBcblx0dzogbnVtYmVyID0gMVxuXHRoOiBudW1iZXIgPSAxXG5cdGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuXHRcdHRoaXMueCA9IHhcblx0XHR0aGlzLnkgPSB5XG5cdFx0dGhpcy53ID0gd1xuXHRcdHRoaXMuaCA9IGhcblx0fVxuXHRzY2FsZShvdGhlcjogUXVhZCk6IFF1YWQge1xuXHRcdHJldHVybiBuZXcgUXVhZChcblx0XHRcdHRoaXMueCArIHRoaXMudyAqIG90aGVyLngsXG5cdFx0XHR0aGlzLnkgKyB0aGlzLmggKiBvdGhlci55LFxuXHRcdFx0dGhpcy53ICogb3RoZXIudyxcblx0XHRcdHRoaXMuaCAqIG90aGVyLmgsXG5cdFx0KVxuXHR9XG5cdHBvcygpIHtcblx0XHRyZXR1cm4gbmV3IFZlYzIodGhpcy54LCB0aGlzLnkpXG5cdH1cblx0Y2xvbmUoKTogUXVhZCB7XG5cdFx0cmV0dXJuIG5ldyBRdWFkKHRoaXMueCwgdGhpcy55LCB0aGlzLncsIHRoaXMuaClcblx0fVxuXHRlcShvdGhlcjogUXVhZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnggPT09IG90aGVyLnhcblx0XHRcdCYmIHRoaXMueSA9PT0gb3RoZXIueVxuXHRcdFx0JiYgdGhpcy53ID09PSBvdGhlci53XG5cdFx0XHQmJiB0aGlzLmggPT09IG90aGVyLmhcblx0fVxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgcXVhZCgke3RoaXMueH0sICR7dGhpcy55fSwgJHt0aGlzLnd9LCAke3RoaXMuaH0pYFxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWFkKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcik6IFF1YWQge1xuXHRyZXR1cm4gbmV3IFF1YWQoeCwgeSwgdywgaClcbn1cblxuZXhwb3J0IGNsYXNzIE1hdDQge1xuXG5cdG06IG51bWJlcltdID0gW1xuXHRcdDEsIDAsIDAsIDAsXG5cdFx0MCwgMSwgMCwgMCxcblx0XHQwLCAwLCAxLCAwLFxuXHRcdDAsIDAsIDAsIDEsXG5cdF1cblxuXHRjb25zdHJ1Y3RvcihtPzogbnVtYmVyW10pIHtcblx0XHRpZiAobSkge1xuXHRcdFx0dGhpcy5tID0gbVxuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyB0cmFuc2xhdGUocDogVmVjMik6IE1hdDQge1xuXHRcdHJldHVybiBuZXcgTWF0NChbXG5cdFx0XHQxLCAwLCAwLCAwLFxuXHRcdFx0MCwgMSwgMCwgMCxcblx0XHRcdDAsIDAsIDEsIDAsXG5cdFx0XHRwLngsIHAueSwgMCwgMSxcblx0XHRdKVxuXHR9XG5cblx0c3RhdGljIHNjYWxlKHM6IFZlYzIpOiBNYXQ0IHtcblx0XHRyZXR1cm4gbmV3IE1hdDQoW1xuXHRcdFx0cy54LCAwLCAwLCAwLFxuXHRcdFx0MCwgcy55LCAwLCAwLFxuXHRcdFx0MCwgMCwgMSwgMCxcblx0XHRcdDAsIDAsIDAsIDEsXG5cdFx0XSlcblx0fVxuXG5cdHN0YXRpYyByb3RhdGVYKGE6IG51bWJlcik6IE1hdDQge1xuXHRcdGEgPSBkZWcycmFkKC1hKVxuXHRcdGNvbnN0IGMgPSBNYXRoLmNvcyhhKVxuXHRcdGNvbnN0IHMgPSBNYXRoLnNpbihhKVxuXHRcdHJldHVybiBuZXcgTWF0NChbXG5cdFx0XHQxLCAwLCAwLCAwLFxuXHRcdFx0MCwgYywgLXMsIDAsXG5cdFx0XHQwLCBzLCBjLCAwLFxuXHRcdFx0MCwgMCwgMCwgMSxcblx0XHRdKVxuXHR9XG5cblx0c3RhdGljIHJvdGF0ZVkoYTogbnVtYmVyKTogTWF0NCB7XG5cdFx0YSA9IGRlZzJyYWQoLWEpXG5cdFx0Y29uc3QgYyA9IE1hdGguY29zKGEpXG5cdFx0Y29uc3QgcyA9IE1hdGguc2luKGEpXG5cdFx0cmV0dXJuIG5ldyBNYXQ0KFtcblx0XHRcdGMsIDAsIHMsIDAsXG5cdFx0XHQwLCAxLCAwLCAwLFxuXHRcdFx0LXMsIDAsIGMsIDAsXG5cdFx0XHQwLCAwLCAwLCAxLFxuXHRcdF0pXG5cdH1cblxuXHRzdGF0aWMgcm90YXRlWihhOiBudW1iZXIpOiBNYXQ0IHtcblx0XHRhID0gZGVnMnJhZCgtYSlcblx0XHRjb25zdCBjID0gTWF0aC5jb3MoYSlcblx0XHRjb25zdCBzID0gTWF0aC5zaW4oYSlcblx0XHRyZXR1cm4gbmV3IE1hdDQoW1xuXHRcdFx0YywgLXMsIDAsIDAsXG5cdFx0XHRzLCBjLCAwLCAwLFxuXHRcdFx0MCwgMCwgMSwgMCxcblx0XHRcdDAsIDAsIDAsIDEsXG5cdFx0XSlcblx0fVxuXG5cdHRyYW5zbGF0ZShwOiBWZWMyKSB7XG5cdFx0dGhpcy5tWzEyXSArPSB0aGlzLm1bMF0gKiBwLnggKyB0aGlzLm1bNF0gKiBwLnlcblx0XHR0aGlzLm1bMTNdICs9IHRoaXMubVsxXSAqIHAueCArIHRoaXMubVs1XSAqIHAueVxuXHRcdHRoaXMubVsxNF0gKz0gdGhpcy5tWzJdICogcC54ICsgdGhpcy5tWzZdICogcC55XG5cdFx0dGhpcy5tWzE1XSArPSB0aGlzLm1bM10gKiBwLnggKyB0aGlzLm1bN10gKiBwLnlcblx0XHRyZXR1cm4gdGhpc1xuXHR9XG5cblx0c2NhbGUocDogVmVjMikge1xuXHRcdHRoaXMubVswXSAqPSBwLnhcblx0XHR0aGlzLm1bNF0gKj0gcC55XG5cdFx0dGhpcy5tWzFdICo9IHAueFxuXHRcdHRoaXMubVs1XSAqPSBwLnlcblx0XHR0aGlzLm1bMl0gKj0gcC54XG5cdFx0dGhpcy5tWzZdICo9IHAueVxuXHRcdHRoaXMubVszXSAqPSBwLnhcblx0XHR0aGlzLm1bN10gKj0gcC55XG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXG5cdHJvdGF0ZShhOiBudW1iZXIpOiBNYXQ0IHtcblx0XHRhID0gZGVnMnJhZCgtYSlcblx0XHRjb25zdCBjID0gTWF0aC5jb3MoYSlcblx0XHRjb25zdCBzID0gTWF0aC5zaW4oYSlcblx0XHRjb25zdCBtMCA9IHRoaXMubVswXVxuXHRcdGNvbnN0IG0xID0gdGhpcy5tWzFdXG5cdFx0Y29uc3QgbTQgPSB0aGlzLm1bNF1cblx0XHRjb25zdCBtNSA9IHRoaXMubVs1XVxuXHRcdHRoaXMubVswXSA9IG0wICogYyArIG0xICogc1xuXHRcdHRoaXMubVsxXSA9IC1tMCAqIHMgKyBtMSAqIGNcblx0XHR0aGlzLm1bNF0gPSBtNCAqIGMgKyBtNSAqIHNcblx0XHR0aGlzLm1bNV0gPSAtbTQgKiBzICsgbTUgKiBjXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXG5cdC8vIFRPRE86IGluLXBsYWNlIHZhcmlhbnRcblx0bXVsdChvdGhlcjogTWF0NCk6IE1hdDQge1xuXHRcdGNvbnN0IG91dCA9IFtdXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG5cdFx0XHRcdG91dFtpICogNCArIGpdID1cblx0XHRcdFx0XHR0aGlzLm1bMCAqIDQgKyBqXSAqIG90aGVyLm1baSAqIDQgKyAwXSArXG5cdFx0XHRcdFx0dGhpcy5tWzEgKiA0ICsgal0gKiBvdGhlci5tW2kgKiA0ICsgMV0gK1xuXHRcdFx0XHRcdHRoaXMubVsyICogNCArIGpdICogb3RoZXIubVtpICogNCArIDJdICtcblx0XHRcdFx0XHR0aGlzLm1bMyAqIDQgKyBqXSAqIG90aGVyLm1baSAqIDQgKyAzXVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbmV3IE1hdDQob3V0KVxuXHR9XG5cblx0bXVsdFZlYzIocDogVmVjMik6IFZlYzIge1xuXHRcdHJldHVybiBuZXcgVmVjMihcblx0XHRcdHAueCAqIHRoaXMubVswXSArIHAueSAqIHRoaXMubVs0XSArIHRoaXMubVsxMl0sXG5cdFx0XHRwLnggKiB0aGlzLm1bMV0gKyBwLnkgKiB0aGlzLm1bNV0gKyB0aGlzLm1bMTNdLFxuXHRcdClcblx0fVxuXG5cdGdldFRyYW5zbGF0aW9uKCkge1xuXHRcdHJldHVybiBuZXcgVmVjMih0aGlzLm1bMTJdLCB0aGlzLm1bMTNdKVxuXHR9XG5cblx0Z2V0U2NhbGUoKSB7XG5cdFx0aWYgKHRoaXMubVswXSAhPSAwIHx8IHRoaXMubVsxXSAhPSAwKSB7XG5cdFx0XHRjb25zdCBkZXQgPSB0aGlzLm1bMF0gKiB0aGlzLm1bNV0gLSB0aGlzLm1bMV0gKiB0aGlzLm1bNF1cblx0XHRcdGNvbnN0IHIgPSBNYXRoLnNxcnQodGhpcy5tWzBdICogdGhpcy5tWzBdICsgdGhpcy5tWzFdICogdGhpcy5tWzFdKVxuXHRcdFx0cmV0dXJuIG5ldyBWZWMyKHIsIGRldCAvIHIpXG5cdFx0fSBlbHNlIGlmICh0aGlzLm1bNF0gIT0gMCB8fCB0aGlzLm1bNV0gIT0gMCkge1xuXHRcdFx0Y29uc3QgZGV0ID0gdGhpcy5tWzBdICogdGhpcy5tWzVdIC0gdGhpcy5tWzFdICogdGhpcy5tWzRdXG5cdFx0XHRjb25zdCBzID0gTWF0aC5zcXJ0KHRoaXMubVs0XSAqIHRoaXMubVs0XSArIHRoaXMubVs1XSAqIHRoaXMubVs1XSlcblx0XHRcdHJldHVybiBuZXcgVmVjMihkZXQgLyBzLCBzKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbmV3IFZlYzIoMCwgMClcblx0XHR9XG5cdH1cblxuXHRnZXRSb3RhdGlvbigpIHtcblx0XHRpZiAodGhpcy5tWzBdICE9IDAgfHwgdGhpcy5tWzFdICE9IDApIHtcblx0XHRcdGNvbnN0IHIgPSBNYXRoLnNxcnQodGhpcy5tWzBdICogdGhpcy5tWzBdICsgdGhpcy5tWzFdICogdGhpcy5tWzFdKVxuXHRcdFx0cmV0dXJuIHJhZDJkZWcodGhpcy5tWzFdID4gMCA/IE1hdGguYWNvcyh0aGlzLm1bMF0gLyByKSA6IC1NYXRoLmFjb3ModGhpcy5tWzBdIC8gcikpXG5cdFx0fSBlbHNlIGlmICh0aGlzLm1bNF0gIT0gMCB8fCB0aGlzLm1bNV0gIT0gMCkge1xuXHRcdFx0Y29uc3QgcyA9IE1hdGguc3FydCh0aGlzLm1bNF0gKiB0aGlzLm1bNF0gKyB0aGlzLm1bNV0gKiB0aGlzLm1bNV0pXG5cdFx0XHRyZXR1cm4gcmFkMmRlZyhNYXRoLlBJIC8gMiAtICh0aGlzLm1bNV0gPiAwID8gTWF0aC5hY29zKC10aGlzLm1bNF0gLyBzKSA6IC1NYXRoLmFjb3ModGhpcy5tWzRdIC8gcykpKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gMFxuXHRcdH1cblx0fVxuXG5cdGdldFNrZXcoKSB7XG5cdFx0aWYgKHRoaXMubVswXSAhPSAwIHx8IHRoaXMubVsxXSAhPSAwKSB7XG5cdFx0XHRjb25zdCByID0gTWF0aC5zcXJ0KHRoaXMubVswXSAqIHRoaXMubVswXSArIHRoaXMubVsxXSAqIHRoaXMubVsxXSlcblx0XHRcdHJldHVybiBuZXcgVmVjMihNYXRoLmF0YW4odGhpcy5tWzBdICogdGhpcy5tWzRdICsgdGhpcy5tWzFdICogdGhpcy5tWzVdKSAvIChyICogciksIDApXG5cdFx0fVxuXHRcdGVsc2UgaWYgKHRoaXMubVs0XSAhPSAwIHx8IHRoaXMubVs1XSAhPSAwKSB7XG5cdFx0XHRjb25zdCBzID0gTWF0aC5zcXJ0KHRoaXMubVs0XSAqIHRoaXMubVs0XSArIHRoaXMubVs1XSAqIHRoaXMubVs1XSlcblx0XHRcdHJldHVybiBuZXcgVmVjMigwLCBNYXRoLmF0YW4odGhpcy5tWzBdICogdGhpcy5tWzRdICsgdGhpcy5tWzFdICogdGhpcy5tWzVdKSAvIChzICogcykpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBWZWMyKDAsIDApXG5cdFx0fVxuXHR9XG5cblx0aW52ZXJ0KCk6IE1hdDQge1xuXG5cdFx0Y29uc3Qgb3V0ID0gW11cblxuXHRcdGNvbnN0IGYwMCA9IHRoaXMubVsxMF0gKiB0aGlzLm1bMTVdIC0gdGhpcy5tWzE0XSAqIHRoaXMubVsxMV1cblx0XHRjb25zdCBmMDEgPSB0aGlzLm1bOV0gKiB0aGlzLm1bMTVdIC0gdGhpcy5tWzEzXSAqIHRoaXMubVsxMV1cblx0XHRjb25zdCBmMDIgPSB0aGlzLm1bOV0gKiB0aGlzLm1bMTRdIC0gdGhpcy5tWzEzXSAqIHRoaXMubVsxMF1cblx0XHRjb25zdCBmMDMgPSB0aGlzLm1bOF0gKiB0aGlzLm1bMTVdIC0gdGhpcy5tWzEyXSAqIHRoaXMubVsxMV1cblx0XHRjb25zdCBmMDQgPSB0aGlzLm1bOF0gKiB0aGlzLm1bMTRdIC0gdGhpcy5tWzEyXSAqIHRoaXMubVsxMF1cblx0XHRjb25zdCBmMDUgPSB0aGlzLm1bOF0gKiB0aGlzLm1bMTNdIC0gdGhpcy5tWzEyXSAqIHRoaXMubVs5XVxuXHRcdGNvbnN0IGYwNiA9IHRoaXMubVs2XSAqIHRoaXMubVsxNV0gLSB0aGlzLm1bMTRdICogdGhpcy5tWzddXG5cdFx0Y29uc3QgZjA3ID0gdGhpcy5tWzVdICogdGhpcy5tWzE1XSAtIHRoaXMubVsxM10gKiB0aGlzLm1bN11cblx0XHRjb25zdCBmMDggPSB0aGlzLm1bNV0gKiB0aGlzLm1bMTRdIC0gdGhpcy5tWzEzXSAqIHRoaXMubVs2XVxuXHRcdGNvbnN0IGYwOSA9IHRoaXMubVs0XSAqIHRoaXMubVsxNV0gLSB0aGlzLm1bMTJdICogdGhpcy5tWzddXG5cdFx0Y29uc3QgZjEwID0gdGhpcy5tWzRdICogdGhpcy5tWzE0XSAtIHRoaXMubVsxMl0gKiB0aGlzLm1bNl1cblx0XHRjb25zdCBmMTEgPSB0aGlzLm1bNV0gKiB0aGlzLm1bMTVdIC0gdGhpcy5tWzEzXSAqIHRoaXMubVs3XVxuXHRcdGNvbnN0IGYxMiA9IHRoaXMubVs0XSAqIHRoaXMubVsxM10gLSB0aGlzLm1bMTJdICogdGhpcy5tWzVdXG5cdFx0Y29uc3QgZjEzID0gdGhpcy5tWzZdICogdGhpcy5tWzExXSAtIHRoaXMubVsxMF0gKiB0aGlzLm1bN11cblx0XHRjb25zdCBmMTQgPSB0aGlzLm1bNV0gKiB0aGlzLm1bMTFdIC0gdGhpcy5tWzldICogdGhpcy5tWzddXG5cdFx0Y29uc3QgZjE1ID0gdGhpcy5tWzVdICogdGhpcy5tWzEwXSAtIHRoaXMubVs5XSAqIHRoaXMubVs2XVxuXHRcdGNvbnN0IGYxNiA9IHRoaXMubVs0XSAqIHRoaXMubVsxMV0gLSB0aGlzLm1bOF0gKiB0aGlzLm1bN11cblx0XHRjb25zdCBmMTcgPSB0aGlzLm1bNF0gKiB0aGlzLm1bMTBdIC0gdGhpcy5tWzhdICogdGhpcy5tWzZdXG5cdFx0Y29uc3QgZjE4ID0gdGhpcy5tWzRdICogdGhpcy5tWzldIC0gdGhpcy5tWzhdICogdGhpcy5tWzVdXG5cblx0XHRvdXRbMF0gPSB0aGlzLm1bNV0gKiBmMDAgLSB0aGlzLm1bNl0gKiBmMDEgKyB0aGlzLm1bN10gKiBmMDJcblx0XHRvdXRbNF0gPSAtKHRoaXMubVs0XSAqIGYwMCAtIHRoaXMubVs2XSAqIGYwMyArIHRoaXMubVs3XSAqIGYwNClcblx0XHRvdXRbOF0gPSB0aGlzLm1bNF0gKiBmMDEgLSB0aGlzLm1bNV0gKiBmMDMgKyB0aGlzLm1bN10gKiBmMDVcblx0XHRvdXRbMTJdID0gLSh0aGlzLm1bNF0gKiBmMDIgLSB0aGlzLm1bNV0gKiBmMDQgKyB0aGlzLm1bNl0gKiBmMDUpXG5cblx0XHRvdXRbMV0gPSAtKHRoaXMubVsxXSAqIGYwMCAtIHRoaXMubVsyXSAqIGYwMSArIHRoaXMubVszXSAqIGYwMilcblx0XHRvdXRbNV0gPSB0aGlzLm1bMF0gKiBmMDAgLSB0aGlzLm1bMl0gKiBmMDMgKyB0aGlzLm1bM10gKiBmMDRcblx0XHRvdXRbOV0gPSAtKHRoaXMubVswXSAqIGYwMSAtIHRoaXMubVsxXSAqIGYwMyArIHRoaXMubVszXSAqIGYwNSlcblx0XHRvdXRbMTNdID0gdGhpcy5tWzBdICogZjAyIC0gdGhpcy5tWzFdICogZjA0ICsgdGhpcy5tWzJdICogZjA1XG5cblx0XHRvdXRbMl0gPSB0aGlzLm1bMV0gKiBmMDYgLSB0aGlzLm1bMl0gKiBmMDcgKyB0aGlzLm1bM10gKiBmMDhcblx0XHRvdXRbNl0gPSAtKHRoaXMubVswXSAqIGYwNiAtIHRoaXMubVsyXSAqIGYwOSArIHRoaXMubVszXSAqIGYxMClcblx0XHRvdXRbMTBdID0gdGhpcy5tWzBdICogZjExIC0gdGhpcy5tWzFdICogZjA5ICsgdGhpcy5tWzNdICogZjEyXG5cdFx0b3V0WzE0XSA9IC0odGhpcy5tWzBdICogZjA4IC0gdGhpcy5tWzFdICogZjEwICsgdGhpcy5tWzJdICogZjEyKVxuXG5cdFx0b3V0WzNdID0gLSh0aGlzLm1bMV0gKiBmMTMgLSB0aGlzLm1bMl0gKiBmMTQgKyB0aGlzLm1bM10gKiBmMTUpXG5cdFx0b3V0WzddID0gdGhpcy5tWzBdICogZjEzIC0gdGhpcy5tWzJdICogZjE2ICsgdGhpcy5tWzNdICogZjE3XG5cdFx0b3V0WzExXSA9IC0odGhpcy5tWzBdICogZjE0IC0gdGhpcy5tWzFdICogZjE2ICsgdGhpcy5tWzNdICogZjE4KVxuXHRcdG91dFsxNV0gPSB0aGlzLm1bMF0gKiBmMTUgLSB0aGlzLm1bMV0gKiBmMTcgKyB0aGlzLm1bMl0gKiBmMThcblxuXHRcdGNvbnN0IGRldCA9XG5cdFx0XHR0aGlzLm1bMF0gKiBvdXRbMF0gK1xuXHRcdFx0dGhpcy5tWzFdICogb3V0WzRdICtcblx0XHRcdHRoaXMubVsyXSAqIG91dFs4XSArXG5cdFx0XHR0aGlzLm1bM10gKiBvdXRbMTJdXG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcblx0XHRcdFx0b3V0W2kgKiA0ICsgal0gKj0gKDEuMCAvIGRldClcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IE1hdDQob3V0KVxuXG5cdH1cblxuXHRjbG9uZSgpOiBNYXQ0IHtcblx0XHRyZXR1cm4gbmV3IE1hdDQoWy4uLnRoaXMubV0pXG5cdH1cblxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm0udG9TdHJpbmcoKVxuXHR9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhdmUobG86IG51bWJlciwgaGk6IG51bWJlciwgdDogbnVtYmVyLCBmID0gKHQpID0+IC1NYXRoLmNvcyh0KSk6IG51bWJlciB7XG5cdHJldHVybiBsbyArIChmKHQpICsgMSkgLyAyICogKGhpIC0gbG8pXG59XG5cbi8vIGJhc2ljIEFOU0kgQyBMQ0dcbmNvbnN0IEEgPSAxMTAzNTE1MjQ1XG5jb25zdCBDID0gMTIzNDVcbmNvbnN0IE0gPSAyMTQ3NDgzNjQ4XG5cbmV4cG9ydCBjbGFzcyBSTkcge1xuXHRzZWVkOiBudW1iZXJcblx0Y29uc3RydWN0b3Ioc2VlZDogbnVtYmVyKSB7XG5cdFx0dGhpcy5zZWVkID0gc2VlZFxuXHR9XG5cdGdlbigpOiBudW1iZXIge1xuXHRcdHRoaXMuc2VlZCA9IChBICogdGhpcy5zZWVkICsgQykgJSBNXG5cdFx0cmV0dXJuIHRoaXMuc2VlZCAvIE1cblx0fVxuXHRnZW5OdW1iZXIoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiBhICsgdGhpcy5nZW4oKSAqIChiIC0gYSlcblx0fVxuXHRnZW5WZWMyKGE6IFZlYzIsIGI/OiBWZWMyKTogVmVjMiB7XG5cdFx0cmV0dXJuIG5ldyBWZWMyKFxuXHRcdFx0dGhpcy5nZW5OdW1iZXIoYS54LCBiLngpLFxuXHRcdFx0dGhpcy5nZW5OdW1iZXIoYS55LCBiLnkpLFxuXHRcdClcblx0fVxuXHRnZW5Db2xvcihhOiBDb2xvciwgYjogQ29sb3IpOiBDb2xvciB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihcblx0XHRcdHRoaXMuZ2VuTnVtYmVyKGEuciwgYi5yKSxcblx0XHRcdHRoaXMuZ2VuTnVtYmVyKGEuZywgYi5nKSxcblx0XHRcdHRoaXMuZ2VuTnVtYmVyKGEuYiwgYi5iKSxcblx0XHQpXG5cdH1cblx0Z2VuQW55PFQgPSBSTkdWYWx1ZT4oLi4uYXJnczogVFtdKTogVCB7XG5cdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZW4oKSBhcyBUXG5cdFx0fSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdlbk51bWJlcigwLCBhcmdzWzBdKSBhcyBUXG5cdFx0XHR9IGVsc2UgaWYgKGFyZ3NbMF0gaW5zdGFuY2VvZiBWZWMyKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdlblZlYzIodmVjMigwLCAwKSwgYXJnc1swXSkgYXMgVFxuXHRcdFx0fSBlbHNlIGlmIChhcmdzWzBdIGluc3RhbmNlb2YgQ29sb3IpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2VuQ29sb3IocmdiKDAsIDAsIDApLCBhcmdzWzBdKSBhcyBUXG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBhcmdzWzFdID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdlbk51bWJlcihhcmdzWzBdLCBhcmdzWzFdKSBhcyBUXG5cdFx0XHR9IGVsc2UgaWYgKGFyZ3NbMF0gaW5zdGFuY2VvZiBWZWMyICYmIGFyZ3NbMV0gaW5zdGFuY2VvZiBWZWMyKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdlblZlYzIoYXJnc1swXSwgYXJnc1sxXSkgYXMgVFxuXHRcdFx0fSBlbHNlIGlmIChhcmdzWzBdIGluc3RhbmNlb2YgQ29sb3IgJiYgYXJnc1sxXSBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdlbkNvbG9yKGFyZ3NbMF0sIGFyZ3NbMV0pIGFzIFRcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gVE9ETzogbGV0IHVzZXIgcGFzcyBzZWVkXG5jb25zdCBkZWZSTkcgPSBuZXcgUk5HKERhdGUubm93KCkpXG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kU2VlZChzZWVkPzogbnVtYmVyKTogbnVtYmVyIHtcblx0aWYgKHNlZWQgIT0gbnVsbCkge1xuXHRcdGRlZlJORy5zZWVkID0gc2VlZFxuXHR9XG5cdHJldHVybiBkZWZSTkcuc2VlZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZCguLi5hcmdzKSB7XG5cdC8vIEB0cy1pZ25vcmVcblx0cmV0dXJuIGRlZlJORy5nZW5BbnkoLi4uYXJncylcbn1cblxuLy8gVE9ETzogcmFuZGkoKSB0byByZXR1cm4gMCAvIDE/XG5leHBvcnQgZnVuY3Rpb24gcmFuZGkoLi4uYXJnczogbnVtYmVyW10pIHtcblx0cmV0dXJuIE1hdGguZmxvb3IocmFuZCguLi5hcmdzKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5jZShwOiBudW1iZXIpOiBib29sZWFuIHtcblx0cmV0dXJuIHJhbmQoKSA8PSBwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2U8VD4obGlzdDogVFtdKTogVCB7XG5cdHJldHVybiBsaXN0W3JhbmRpKGxpc3QubGVuZ3RoKV1cbn1cblxuLy8gVE9ETzogYmV0dGVyIG5hbWVcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0UmVjdFJlY3QyKHIxOiBSZWN0LCByMjogUmVjdCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gcjEucG9zLnggKyByMS53aWR0aCA+PSByMi5wb3MueFxuXHRcdCYmIHIxLnBvcy54IDw9IHIyLnBvcy54ICsgcjIud2lkdGhcblx0XHQmJiByMS5wb3MueSArIHIxLmhlaWdodCA+PSByMi5wb3MueVxuXHRcdCYmIHIxLnBvcy55IDw9IHIyLnBvcy55ICsgcjIuaGVpZ2h0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0UmVjdFJlY3QocjE6IFJlY3QsIHIyOiBSZWN0KTogYm9vbGVhbiB7XG5cdHJldHVybiByMS5wb3MueCArIHIxLndpZHRoID4gcjIucG9zLnhcblx0XHQmJiByMS5wb3MueCA8IHIyLnBvcy54ICsgcjIud2lkdGhcblx0XHQmJiByMS5wb3MueSArIHIxLmhlaWdodCA+IHIyLnBvcy55XG5cdFx0JiYgcjEucG9zLnkgPCByMi5wb3MueSArIHIyLmhlaWdodFxufVxuXG4vLyBUT0RPOiBiZXR0ZXIgbmFtZVxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RMaW5lTGluZVQobDE6IExpbmUsIGwyOiBMaW5lKTogbnVtYmVyIHwgbnVsbCB7XG5cblx0aWYgKChsMS5wMS54ID09PSBsMS5wMi54ICYmIGwxLnAxLnkgPT09IGwxLnAyLnkpIHx8IChsMi5wMS54ID09PSBsMi5wMi54ICYmIGwyLnAxLnkgPT09IGwyLnAyLnkpKSB7XG5cdFx0cmV0dXJuIG51bGxcblx0fVxuXG5cdGNvbnN0IGRlbm9tID0gKChsMi5wMi55IC0gbDIucDEueSkgKiAobDEucDIueCAtIGwxLnAxLngpIC0gKGwyLnAyLnggLSBsMi5wMS54KSAqIChsMS5wMi55IC0gbDEucDEueSkpXG5cblx0Ly8gcGFyYWxsZWxcblx0aWYgKGRlbm9tID09PSAwKSB7XG5cdFx0cmV0dXJuIG51bGxcblx0fVxuXG5cdGNvbnN0IHVhID0gKChsMi5wMi54IC0gbDIucDEueCkgKiAobDEucDEueSAtIGwyLnAxLnkpIC0gKGwyLnAyLnkgLSBsMi5wMS55KSAqIChsMS5wMS54IC0gbDIucDEueCkpIC8gZGVub21cblx0Y29uc3QgdWIgPSAoKGwxLnAyLnggLSBsMS5wMS54KSAqIChsMS5wMS55IC0gbDIucDEueSkgLSAobDEucDIueSAtIGwxLnAxLnkpICogKGwxLnAxLnggLSBsMi5wMS54KSkgLyBkZW5vbVxuXG5cdC8vIGlzIHRoZSBpbnRlcnNlY3Rpb24gb24gdGhlIHNlZ21lbnRzXG5cdGlmICh1YSA8IDAgfHwgdWEgPiAxIHx8IHViIDwgMCB8fCB1YiA+IDEpIHtcblx0XHRyZXR1cm4gbnVsbFxuXHR9XG5cblx0cmV0dXJuIHVhXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RMaW5lTGluZShsMTogTGluZSwgbDI6IExpbmUpOiBWZWMyIHwgbnVsbCB7XG5cdGNvbnN0IHQgPSB0ZXN0TGluZUxpbmVUKGwxLCBsMilcblx0aWYgKCF0KSByZXR1cm4gbnVsbFxuXHRyZXR1cm4gdmVjMihcblx0XHRsMS5wMS54ICsgdCAqIChsMS5wMi54IC0gbDEucDEueCksXG5cdFx0bDEucDEueSArIHQgKiAobDEucDIueSAtIGwxLnAxLnkpLFxuXHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0UmVjdExpbmUocjogUmVjdCwgbDogTGluZSk6IGJvb2xlYW4ge1xuXHRpZiAodGVzdFJlY3RQb2ludChyLCBsLnAxKSB8fCB0ZXN0UmVjdFBvaW50KHIsIGwucDIpKSB7XG5cdFx0cmV0dXJuIHRydWVcblx0fVxuXHRjb25zdCBwdHMgPSByLnBvaW50cygpXG5cdHJldHVybiAhIXRlc3RMaW5lTGluZShsLCBuZXcgTGluZShwdHNbMF0sIHB0c1sxXSkpXG5cdFx0fHwgISF0ZXN0TGluZUxpbmUobCwgbmV3IExpbmUocHRzWzFdLCBwdHNbMl0pKVxuXHRcdHx8ICEhdGVzdExpbmVMaW5lKGwsIG5ldyBMaW5lKHB0c1syXSwgcHRzWzNdKSlcblx0XHR8fCAhIXRlc3RMaW5lTGluZShsLCBuZXcgTGluZShwdHNbM10sIHB0c1swXSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0UmVjdFBvaW50MihyOiBSZWN0LCBwdDogUG9pbnQpOiBib29sZWFuIHtcblx0cmV0dXJuIHB0LnggPj0gci5wb3MueFxuXHRcdCYmIHB0LnggPD0gci5wb3MueCArIHIud2lkdGhcblx0XHQmJiBwdC55ID49IHIucG9zLnlcblx0XHQmJiBwdC55IDw9IHIucG9zLnkgKyByLmhlaWdodFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdFJlY3RQb2ludChyOiBSZWN0LCBwdDogUG9pbnQpOiBib29sZWFuIHtcblx0cmV0dXJuIHB0LnggPiByLnBvcy54XG5cdFx0JiYgcHQueCA8IHIucG9zLnggKyByLndpZHRoXG5cdFx0JiYgcHQueSA+IHIucG9zLnlcblx0XHQmJiBwdC55IDwgci5wb3MueSArIHIuaGVpZ2h0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0UmVjdENpcmNsZShyOiBSZWN0LCBjOiBDaXJjbGUpOiBib29sZWFuIHtcblx0Y29uc3QgbnggPSBNYXRoLm1heChyLnBvcy54LCBNYXRoLm1pbihjLmNlbnRlci54LCByLnBvcy54ICsgci53aWR0aCkpXG5cdGNvbnN0IG55ID0gTWF0aC5tYXgoci5wb3MueSwgTWF0aC5taW4oYy5jZW50ZXIueSwgci5wb3MueSArIHIuaGVpZ2h0KSlcblx0Y29uc3QgbmVhcmVzdFBvaW50ID0gdmVjMihueCwgbnkpXG5cdHJldHVybiBuZWFyZXN0UG9pbnQuc2Rpc3QoYy5jZW50ZXIpIDw9IGMucmFkaXVzICogYy5yYWRpdXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RSZWN0UG9seWdvbihyOiBSZWN0LCBwOiBQb2x5Z29uKTogYm9vbGVhbiB7XG5cdHJldHVybiB0ZXN0UG9seWdvblBvbHlnb24ocCwgbmV3IFBvbHlnb24oci5wb2ludHMoKSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0TGluZVBvaW50KGw6IExpbmUsIHB0OiBWZWMyKTogYm9vbGVhbiB7XG5cdGNvbnN0IHYxID0gcHQuc3ViKGwucDEpXG5cdGNvbnN0IHYyID0gbC5wMi5zdWIobC5wMSlcblxuXHQvLyBDaGVjayBpZiBzaW5lIGlzIDAsIGluIHRoYXQgY2FzZSBsaW5lcyBhcmUgcGFyYWxsZWwuXG5cdC8vIElmIG5vdCBwYXJhbGxlbCwgdGhlIHBvaW50IGNhbm5vdCBsaWUgb24gdGhlIGxpbmUuXG5cdGlmIChNYXRoLmFicyh2MS5jcm9zcyh2MikpID4gTnVtYmVyLkVQU0lMT04pIHtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXG5cdC8vIFNjYWxhciBwcm9qZWN0aW9uIG9mIHYxIG9uIHYyXG5cdGNvbnN0IHQgPSB2MS5kb3QodjIpIC8gdjIuZG90KHYyKVxuXHQvLyBTaW5jZSB0IGlzIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgcHQgZnJvbSBsaW5lLnAxIG9uIHRoZSBsaW5lLFxuXHQvLyBpdCBzaG91bGQgYmUgYmV0d2VlbiAwJSBhbmQgMTAwJVxuXHRyZXR1cm4gdCA+PSAwICYmIHQgPD0gMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdExpbmVDaXJjbGUobDogTGluZSwgY2lyY2xlOiBDaXJjbGUpOiBib29sZWFuIHtcblx0Y29uc3QgdiA9IGwucDIuc3ViKGwucDEpXG5cdGNvbnN0IGEgPSB2LmRvdCh2KVxuXHRjb25zdCBjZW50ZXJUb09yaWdpbiA9IGwucDEuc3ViKGNpcmNsZS5jZW50ZXIpXG5cdGNvbnN0IGIgPSAyICogdi5kb3QoY2VudGVyVG9PcmlnaW4pXG5cdGNvbnN0IGMgPSBjZW50ZXJUb09yaWdpbi5kb3QoY2VudGVyVG9PcmlnaW4pIC0gY2lyY2xlLnJhZGl1cyAqIGNpcmNsZS5yYWRpdXNcblx0Ly8gQ2FsY3VsYXRlIHRoZSBkaXNjcmltaW5hbnQgb2YgYXheMiArIGJ4ICsgY1xuXHRjb25zdCBkaXMgPSBiICogYiAtIDQgKiBhICogY1xuXG5cdC8vIE5vIHJvb3Rcblx0aWYgKChhIDw9IE51bWJlci5FUFNJTE9OKSB8fCAoZGlzIDwgMCkpIHtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXHQvLyBPbmUgcG9zc2libGUgcm9vdFxuXHRlbHNlIGlmIChkaXMgPT0gMCkge1xuXHRcdGNvbnN0IHQgPSAtYiAvICgyICogYSlcblx0XHRpZiAodCA+PSAwICYmIHQgPD0gMSkge1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdH1cblx0Ly8gVHdvIHBvc3NpYmxlIHJvb3RzXG5cdGVsc2Uge1xuXHRcdGNvbnN0IHQxID0gKC1iICsgTWF0aC5zcXJ0KGRpcykpIC8gKDIgKiBhKVxuXHRcdGNvbnN0IHQyID0gKC1iIC0gTWF0aC5zcXJ0KGRpcykpIC8gKDIgKiBhKVxuXHRcdGlmICgodDEgPj0gMCAmJiB0MSA8PSAxKSB8fCAodDIgPj0gMCAmJiB0MiA8PSAxKSkge1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdH1cblxuXHQvLyBDaGVjayBpZiBsaW5lIGlzIGNvbXBsZXRlbHkgd2l0aGluIHRoZSBjaXJjbGVcblx0Ly8gV2Ugb25seSBuZWVkIHRvIGNoZWNrIG9uZSBwb2ludCwgc2luY2UgdGhlIGxpbmUgZGlkbid0IGNyb3NzIHRoZSBjaXJjbGVcblx0cmV0dXJuIHRlc3RDaXJjbGVQb2ludChjaXJjbGUsIGwucDEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0TGluZVBvbHlnb24obDogTGluZSwgcDogUG9seWdvbik6IGJvb2xlYW4ge1xuXG5cdC8vIHRlc3QgaWYgbGluZSBpcyBpbnNpZGVcblx0aWYgKHRlc3RQb2x5Z29uUG9pbnQocCwgbC5wMSkgfHwgdGVzdFBvbHlnb25Qb2ludChwLCBsLnAyKSkge1xuXHRcdHJldHVybiB0cnVlXG5cdH1cblxuXHQvLyB0ZXN0IGVhY2ggbGluZVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHAucHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcDEgPSBwLnB0c1tpXVxuXHRcdGNvbnN0IHAyID0gcC5wdHNbKGkgKyAxKSAlIHAucHRzLmxlbmd0aF1cblx0XHRpZiAodGVzdExpbmVMaW5lKGwsIG5ldyBMaW5lKHAxLCBwMikpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0Q2lyY2xlUG9pbnQoYzogQ2lyY2xlLCBwOiBQb2ludCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gYy5jZW50ZXIuc2Rpc3QocCkgPCBjLnJhZGl1cyAqIGMucmFkaXVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0Q2lyY2xlQ2lyY2xlKGMxOiBDaXJjbGUsIGMyOiBDaXJjbGUpOiBib29sZWFuIHtcblx0cmV0dXJuIGMxLmNlbnRlci5zZGlzdChjMi5jZW50ZXIpIDwgKGMxLnJhZGl1cyArIGMyLnJhZGl1cykgKiAoYzEucmFkaXVzICsgYzIucmFkaXVzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdENpcmNsZVBvbHlnb24oYzogQ2lyY2xlLCBwOiBQb2x5Z29uKTogYm9vbGVhbiB7XG5cdC8vIEZvciBlYWNoIGVkZ2UgY2hlY2sgZm9yIGludGVyc2VjdGlvblxuXHRsZXQgcHJldiA9IHAucHRzW3AucHRzLmxlbmd0aCAtIDFdXG5cdGZvciAoY29uc3QgY3VyIG9mIHAucHRzKSB7XG5cdFx0aWYgKHRlc3RMaW5lQ2lyY2xlKG5ldyBMaW5lKHByZXYsIGN1ciksIGMpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRwcmV2ID0gY3VyXG5cdH1cblxuXHQvLyBDaGVjayBpZiB0aGUgcG9seWdvbiBpcyBjb21wbGV0ZWx5IHdpdGhpbiB0aGUgY2lyY2xlXG5cdC8vIFdlIG9ubHkgbmVlZCB0byBjaGVjayBvbmUgcG9pbnQsIHNpbmNlIHRoZSBwb2x5Z29uIGRpZG4ndCBjcm9zcyB0aGUgY2lyY2xlXG5cdGlmICh0ZXN0Q2lyY2xlUG9pbnQoYywgcC5wdHNbMF0pKSB7XG5cdFx0cmV0dXJuIHRydWVcblx0fVxuXG5cdC8vIENoZWNrIGlmIHRoZSBjaXJjbGUgaXMgY29tcGxldGVseSB3aXRoaW4gdGhlIHBvbHlnb25cblx0cmV0dXJuIHRlc3RQb2x5Z29uUG9pbnQocCwgYy5jZW50ZXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0UG9seWdvblBvbHlnb24ocDE6IFBvbHlnb24sIHAyOiBQb2x5Z29uKTogYm9vbGVhbiB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcDEucHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHRlc3RMaW5lUG9seWdvbihuZXcgTGluZShwMS5wdHNbaV0sIHAxLnB0c1soaSArIDEpICUgcDEucHRzLmxlbmd0aF0pLCBwMikpIHtcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZVxufVxuXG4vLyBodHRwczovL3dyZi5lY3NlLnJwaS5lZHUvUmVzZWFyY2gvU2hvcnRfTm90ZXMvcG5wb2x5Lmh0bWxcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0UG9seWdvblBvaW50KHBvbHk6IFBvbHlnb24sIHB0OiBQb2ludCk6IGJvb2xlYW4ge1xuXG5cdGxldCBjID0gZmFsc2Vcblx0Y29uc3QgcCA9IHBvbHkucHRzXG5cblx0Zm9yIChsZXQgaSA9IDAsIGogPSBwLmxlbmd0aCAtIDE7IGkgPCBwLmxlbmd0aDsgaiA9IGkrKykge1xuXHRcdGlmIChcblx0XHRcdCgocFtpXS55ID4gcHQueSkgIT0gKHBbal0ueSA+IHB0LnkpKVxuXHRcdFx0JiYgKHB0LnggPCAocFtqXS54IC0gcFtpXS54KSAqIChwdC55IC0gcFtpXS55KSAvIChwW2pdLnkgLSBwW2ldLnkpICsgcFtpXS54KVxuXHRcdCkge1xuXHRcdFx0YyA9ICFjXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdFBvaW50UG9pbnQocDE6IFBvaW50LCBwMjogUG9pbnQpOiBib29sZWFuIHtcblx0cmV0dXJuIHAxLnggPT09IHAyLnggJiYgcDEueSA9PT0gcDIueVxufVxuXG5leHBvcnQgY2xhc3MgTGluZSB7XG5cdHAxOiBWZWMyXG5cdHAyOiBWZWMyXG5cdGNvbnN0cnVjdG9yKHAxOiBWZWMyLCBwMjogVmVjMikge1xuXHRcdHRoaXMucDEgPSBwMS5jbG9uZSgpXG5cdFx0dGhpcy5wMiA9IHAyLmNsb25lKClcblx0fVxuXHR0cmFuc2Zvcm0obTogTWF0NCk6IExpbmUge1xuXHRcdHJldHVybiBuZXcgTGluZShtLm11bHRWZWMyKHRoaXMucDEpLCBtLm11bHRWZWMyKHRoaXMucDIpKVxuXHR9XG5cdGJib3goKTogUmVjdCB7XG5cdFx0cmV0dXJuIFJlY3QuZnJvbVBvaW50cyh0aGlzLnAxLCB0aGlzLnAyKVxuXHR9XG5cdGFyZWEoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wMS5kaXN0KHRoaXMucDIpXG5cdH1cblx0Y2xvbmUoKTogTGluZSB7XG5cdFx0cmV0dXJuIG5ldyBMaW5lKHRoaXMucDEsIHRoaXMucDIpXG5cdH1cbn1cblxuLy8gVE9ETzogdXNlIHg6IG51bWJlciB5OiBudW1iZXIgKHgsIHksIHdpZHRoLCBoZWlnaHQpXG5leHBvcnQgY2xhc3MgUmVjdCB7XG5cdHBvczogVmVjMlxuXHR3aWR0aDogbnVtYmVyXG5cdGhlaWdodDogbnVtYmVyXG5cdGNvbnN0cnVjdG9yKHBvczogVmVjMiwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcblx0XHR0aGlzLnBvcyA9IHBvcy5jbG9uZSgpXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHRcblx0fVxuXHRzdGF0aWMgZnJvbVBvaW50cyhwMTogVmVjMiwgcDI6IFZlYzIpOiBSZWN0IHtcblx0XHRyZXR1cm4gbmV3IFJlY3QocDEuY2xvbmUoKSwgcDIueCAtIHAxLngsIHAyLnkgLSBwMS55KVxuXHR9XG5cdGNlbnRlcigpOiBWZWMyIHtcblx0XHRyZXR1cm4gbmV3IFZlYzIodGhpcy5wb3MueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvcy55ICsgdGhpcy5oZWlnaHQgLyAyKVxuXHR9XG5cdHBvaW50cygpOiBbVmVjMiwgVmVjMiwgVmVjMiwgVmVjMl0ge1xuXHRcdHJldHVybiBbXG5cdFx0XHR0aGlzLnBvcyxcblx0XHRcdHRoaXMucG9zLmFkZCh0aGlzLndpZHRoLCAwKSxcblx0XHRcdHRoaXMucG9zLmFkZCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCksXG5cdFx0XHR0aGlzLnBvcy5hZGQoMCwgdGhpcy5oZWlnaHQpLFxuXHRcdF1cblx0fVxuXHR0cmFuc2Zvcm0obTogTWF0NCk6IFBvbHlnb24ge1xuXHRcdHJldHVybiBuZXcgUG9seWdvbih0aGlzLnBvaW50cygpLm1hcCgocHQpID0+IG0ubXVsdFZlYzIocHQpKSlcblx0fVxuXHRiYm94KCk6IFJlY3Qge1xuXHRcdHJldHVybiB0aGlzLmNsb25lKClcblx0fVxuXHRhcmVhKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLmhlaWdodFxuXHR9XG5cdGNsb25lKCk6IFJlY3Qge1xuXHRcdHJldHVybiBuZXcgUmVjdCh0aGlzLnBvcy5jbG9uZSgpLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcblx0fVxuXHRkaXN0VG9Qb2ludChwOiBWZWMyKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMuc2Rpc3RUb1BvaW50KHApKVxuXHR9XG5cdHNkaXN0VG9Qb2ludChwOiBWZWMyKTogbnVtYmVyIHtcblx0XHRjb25zdCBtaW4gPSB0aGlzLnBvc1xuXHRcdGNvbnN0IG1heCA9IHRoaXMucG9zLmFkZCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcblx0XHRjb25zdCBkeCA9IE1hdGgubWF4KG1pbi54IC0gcC54LCAwLCBwLnggLSBtYXgueClcblx0XHRjb25zdCBkeSA9IE1hdGgubWF4KG1pbi55IC0gcC55LCAwLCBwLnkgLSBtYXgueSlcblx0XHRyZXR1cm4gZHggKiBkeCArIGR5ICogZHlcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ2lyY2xlIHtcblx0Y2VudGVyOiBWZWMyXG5cdHJhZGl1czogbnVtYmVyXG5cdGNvbnN0cnVjdG9yKGNlbnRlcjogVmVjMiwgcmFkaXVzOiBudW1iZXIpIHtcblx0XHR0aGlzLmNlbnRlciA9IGNlbnRlci5jbG9uZSgpXG5cdFx0dGhpcy5yYWRpdXMgPSByYWRpdXNcblx0fVxuXHR0cmFuc2Zvcm0odHI6IE1hdDQpOiBFbGxpcHNlIHtcblx0XHRyZXR1cm4gbmV3IEVsbGlwc2UodGhpcy5jZW50ZXIsIHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cykudHJhbnNmb3JtKHRyKVxuXHR9XG5cdGJib3goKTogUmVjdCB7XG5cdFx0cmV0dXJuIFJlY3QuZnJvbVBvaW50cyhcblx0XHRcdHRoaXMuY2VudGVyLnN1Yih2ZWMyKHRoaXMucmFkaXVzKSksXG5cdFx0XHR0aGlzLmNlbnRlci5hZGQodmVjMih0aGlzLnJhZGl1cykpLFxuXHRcdClcblx0fVxuXHRhcmVhKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXMgKiBNYXRoLlBJXG5cdH1cblx0Y2xvbmUoKTogQ2lyY2xlIHtcblx0XHRyZXR1cm4gbmV3IENpcmNsZSh0aGlzLmNlbnRlciwgdGhpcy5yYWRpdXMpXG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsbGlwc2Uge1xuXHRjZW50ZXI6IFZlYzJcblx0cmFkaXVzWDogbnVtYmVyXG5cdHJhZGl1c1k6IG51bWJlclxuXHRjb25zdHJ1Y3RvcihjZW50ZXI6IFZlYzIsIHJ4OiBudW1iZXIsIHJ5OiBudW1iZXIpIHtcblx0XHR0aGlzLmNlbnRlciA9IGNlbnRlci5jbG9uZSgpXG5cdFx0dGhpcy5yYWRpdXNYID0gcnhcblx0XHR0aGlzLnJhZGl1c1kgPSByeVxuXHR9XG5cdHRyYW5zZm9ybSh0cjogTWF0NCk6IEVsbGlwc2Uge1xuXHRcdHJldHVybiBuZXcgRWxsaXBzZShcblx0XHRcdHRyLm11bHRWZWMyKHRoaXMuY2VudGVyKSxcblx0XHRcdHRyLm1bMF0gKiB0aGlzLnJhZGl1c1gsXG5cdFx0XHR0ci5tWzVdICogdGhpcy5yYWRpdXNZLFxuXHRcdClcblx0fVxuXHRiYm94KCk6IFJlY3Qge1xuXHRcdHJldHVybiBSZWN0LmZyb21Qb2ludHMoXG5cdFx0XHR0aGlzLmNlbnRlci5zdWIodmVjMih0aGlzLnJhZGl1c1gsIHRoaXMucmFkaXVzWSkpLFxuXHRcdFx0dGhpcy5jZW50ZXIuYWRkKHZlYzIodGhpcy5yYWRpdXNYLCB0aGlzLnJhZGl1c1kpKSxcblx0XHQpXG5cdH1cblx0YXJlYSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnJhZGl1c1ggKiB0aGlzLnJhZGl1c1kgKiBNYXRoLlBJXG5cdH1cblx0Y2xvbmUoKTogRWxsaXBzZSB7XG5cdFx0cmV0dXJuIG5ldyBFbGxpcHNlKHRoaXMuY2VudGVyLCB0aGlzLnJhZGl1c1gsIHRoaXMucmFkaXVzWSlcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUG9seWdvbiB7XG5cdHB0czogVmVjMltdXG5cdGNvbnN0cnVjdG9yKHB0czogVmVjMltdKSB7XG5cdFx0aWYgKHB0cy5sZW5ndGggPCAzKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQb2x5Z29ucyBzaG91bGQgaGF2ZSBhdCBsZWFzdCAzIHZlcnRpY2VzXCIpXG5cdFx0fVxuXHRcdHRoaXMucHRzID0gcHRzXG5cdH1cblx0dHJhbnNmb3JtKG06IE1hdDQpOiBQb2x5Z29uIHtcblx0XHRyZXR1cm4gbmV3IFBvbHlnb24odGhpcy5wdHMubWFwKChwdCkgPT4gbS5tdWx0VmVjMihwdCkpKVxuXHR9XG5cdGJib3goKTogUmVjdCB7XG5cdFx0Y29uc3QgcDEgPSB2ZWMyKE51bWJlci5NQVhfVkFMVUUpXG5cdFx0Y29uc3QgcDIgPSB2ZWMyKC1OdW1iZXIuTUFYX1ZBTFVFKVxuXHRcdGZvciAoY29uc3QgcHQgb2YgdGhpcy5wdHMpIHtcblx0XHRcdHAxLnggPSBNYXRoLm1pbihwMS54LCBwdC54KVxuXHRcdFx0cDIueCA9IE1hdGgubWF4KHAyLngsIHB0LngpXG5cdFx0XHRwMS55ID0gTWF0aC5taW4ocDEueSwgcHQueSlcblx0XHRcdHAyLnkgPSBNYXRoLm1heChwMi55LCBwdC55KVxuXHRcdH1cblx0XHRyZXR1cm4gUmVjdC5mcm9tUG9pbnRzKHAxLCBwMilcblx0fVxuXHRhcmVhKCk6IG51bWJlciB7XG5cdFx0bGV0IHRvdGFsID0gMFxuXHRcdGNvbnN0IGwgPSB0aGlzLnB0cy5sZW5ndGhcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0Y29uc3QgcDEgPSB0aGlzLnB0c1tpXVxuXHRcdFx0Y29uc3QgcDIgPSB0aGlzLnB0c1soaSArIDEpICUgbF1cblx0XHRcdHRvdGFsICs9IChwMS54ICogcDIueSAqIDAuNSlcblx0XHRcdHRvdGFsIC09IChwMi54ICogcDEueSAqIDAuNSlcblx0XHR9XG5cdFx0cmV0dXJuIE1hdGguYWJzKHRvdGFsKVxuXHR9XG5cdGNsb25lKCk6IFBvbHlnb24ge1xuXHRcdHJldHVybiBuZXcgUG9seWdvbih0aGlzLnB0cy5tYXAoKHB0KSA9PiBwdC5jbG9uZSgpKSlcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0KHAxOiBQb2x5Z29uLCBwMjogUG9seWdvbik6IFZlYzIgfCBudWxsIHtcblx0bGV0IG92ZXJsYXAgPSBOdW1iZXIuTUFYX1ZBTFVFXG5cdGxldCBkaXNwbGFjZW1lbnQgPSB2ZWMyKDApXG5cdGZvciAoY29uc3QgcG9seSBvZiBbcDEsIHAyXSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9seS5wdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGEgPSBwb2x5LnB0c1tpXVxuXHRcdFx0Y29uc3QgYiA9IHBvbHkucHRzWyhpICsgMSkgJSBwb2x5LnB0cy5sZW5ndGhdXG5cdFx0XHRjb25zdCBheGlzUHJvaiA9IGIuc3ViKGEpLm5vcm1hbCgpLnVuaXQoKVxuXHRcdFx0bGV0IG1pbjEgPSBOdW1iZXIuTUFYX1ZBTFVFXG5cdFx0XHRsZXQgbWF4MSA9IC1OdW1iZXIuTUFYX1ZBTFVFXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHAxLnB0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRjb25zdCBxID0gcDEucHRzW2pdLmRvdChheGlzUHJvailcblx0XHRcdFx0bWluMSA9IE1hdGgubWluKG1pbjEsIHEpXG5cdFx0XHRcdG1heDEgPSBNYXRoLm1heChtYXgxLCBxKVxuXHRcdFx0fVxuXHRcdFx0bGV0IG1pbjIgPSBOdW1iZXIuTUFYX1ZBTFVFXG5cdFx0XHRsZXQgbWF4MiA9IC1OdW1iZXIuTUFYX1ZBTFVFXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHAyLnB0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRjb25zdCBxID0gcDIucHRzW2pdLmRvdChheGlzUHJvailcblx0XHRcdFx0bWluMiA9IE1hdGgubWluKG1pbjIsIHEpXG5cdFx0XHRcdG1heDIgPSBNYXRoLm1heChtYXgyLCBxKVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbyA9IE1hdGgubWluKG1heDEsIG1heDIpIC0gTWF0aC5tYXgobWluMSwgbWluMilcblx0XHRcdGlmIChvIDwgMCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0fVxuXHRcdFx0aWYgKG8gPCBNYXRoLmFicyhvdmVybGFwKSkge1xuXHRcdFx0XHRjb25zdCBvMSA9IG1heDIgLSBtaW4xXG5cdFx0XHRcdGNvbnN0IG8yID0gbWluMiAtIG1heDFcblx0XHRcdFx0b3ZlcmxhcCA9IE1hdGguYWJzKG8xKSA8IE1hdGguYWJzKG8yKSA/IG8xIDogbzJcblx0XHRcdFx0ZGlzcGxhY2VtZW50ID0gYXhpc1Byb2ouc2NhbGUob3ZlcmxhcClcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGRpc3BsYWNlbWVudFxufVxuIiwgImV4cG9ydCBjbGFzcyBSZWdpc3RyeTxUPiBleHRlbmRzIE1hcDxudW1iZXIsIFQ+IHtcblx0cHJpdmF0ZSBsYXN0SUQ6IG51bWJlclxuXHRjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG5cdFx0c3VwZXIoLi4uYXJncylcblx0XHR0aGlzLmxhc3RJRCA9IDBcblx0fVxuXHRwdXNoKHY6IFQpOiBudW1iZXIge1xuXHRcdGNvbnN0IGlkID0gdGhpcy5sYXN0SURcblx0XHR0aGlzLnNldChpZCwgdilcblx0XHR0aGlzLmxhc3RJRCsrXG5cdFx0cmV0dXJuIGlkXG5cdH1cblx0cHVzaGQodjogVCk6ICgpID0+IHZvaWQge1xuXHRcdGNvbnN0IGlkID0gdGhpcy5wdXNoKHYpXG5cdFx0cmV0dXJuICgpID0+IHRoaXMuZGVsZXRlKGlkKVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBFdmVudENvbnRyb2xsZXIge1xuXHRwYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXHRyZWFkb25seSBjYW5jZWw6ICgpID0+IHZvaWRcblx0Y29uc3RydWN0b3IoY2FuY2VsOiAoKSA9PiB2b2lkKSB7XG5cdFx0dGhpcy5jYW5jZWwgPSBjYW5jZWxcblx0fVxuXHRzdGF0aWMgam9pbihldmVudHM6IEV2ZW50Q29udHJvbGxlcltdKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRjb25zdCBldiA9IG5ldyBFdmVudENvbnRyb2xsZXIoKCkgPT4gZXZlbnRzLmZvckVhY2goKGUpID0+IGUuY2FuY2VsKCkpKVxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldiwgXCJwYXVzZWRcIiwge1xuXHRcdFx0Z2V0OiAoKSA9PiBldmVudHNbMF0ucGF1c2VkLFxuXHRcdFx0c2V0OiAocDogYm9vbGVhbikgPT4gZXZlbnRzLmZvckVhY2goKGUpID0+IGUucGF1c2VkID0gcCksXG5cdFx0fSlcblx0XHRldi5wYXVzZWQgPSBmYWxzZVxuXHRcdHJldHVybiBldlxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBFdmVudDxBcmdzIGV4dGVuZHMgYW55W10gPSBhbnlbXT4ge1xuXHRwcml2YXRlIGhhbmRsZXJzOiBSZWdpc3RyeTwoLi4uYXJnczogQXJncykgPT4gdm9pZD4gPSBuZXcgUmVnaXN0cnkoKVxuXHRhZGQoYWN0aW9uOiAoLi4uYXJnczogQXJncykgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0Y29uc3QgY2FuY2VsID0gdGhpcy5oYW5kbGVycy5wdXNoZCgoLi4uYXJnczogQXJncykgPT4ge1xuXHRcdFx0aWYgKGV2LnBhdXNlZCkgcmV0dXJuXG5cdFx0XHRhY3Rpb24oLi4uYXJncylcblx0XHR9KVxuXHRcdGNvbnN0IGV2ID0gbmV3IEV2ZW50Q29udHJvbGxlcihjYW5jZWwpXG5cdFx0cmV0dXJuIGV2XG5cdH1cblx0YWRkT25jZShhY3Rpb246ICguLi5hcmdzKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRjb25zdCBldiA9IHRoaXMuYWRkKCguLi5hcmdzKSA9PiB7XG5cdFx0XHRldi5jYW5jZWwoKVxuXHRcdFx0YWN0aW9uKC4uLmFyZ3MpXG5cdFx0fSlcblx0XHRyZXR1cm4gZXZcblx0fVxuXHRuZXh0KCk6IFByb21pc2U8QXJncz4ge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB0aGlzLmFkZE9uY2UocmVzKSlcblx0fVxuXHR0cmlnZ2VyKC4uLmFyZ3M6IEFyZ3MpIHtcblx0XHR0aGlzLmhhbmRsZXJzLmZvckVhY2goKGFjdGlvbikgPT4gYWN0aW9uKC4uLmFyZ3MpKVxuXHR9XG5cdG51bUxpc3RlbmVycygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhhbmRsZXJzLnNpemVcblx0fVxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmhhbmRsZXJzLmNsZWFyKClcblx0fVxufVxuXG4vLyBUT0RPOiBvbmx5IGFjY2VwdCBvbmUgYXJndW1lbnQ/XG5leHBvcnQgY2xhc3MgRXZlbnRIYW5kbGVyPEV2ZW50TWFwIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55W10+PiB7XG5cdHByaXZhdGUgaGFuZGxlcnM6IFBhcnRpYWw8e1xuXHRcdFtOYW1lIGluIGtleW9mIEV2ZW50TWFwXTogRXZlbnQ8RXZlbnRNYXBbTmFtZV0+XG5cdH0+ID0ge31cblx0b248TmFtZSBleHRlbmRzIGtleW9mIEV2ZW50TWFwPihcblx0XHRuYW1lOiBOYW1lLFxuXHRcdGFjdGlvbjogKC4uLmFyZ3M6IEV2ZW50TWFwW05hbWVdKSA9PiB2b2lkLFxuXHQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdGlmICghdGhpcy5oYW5kbGVyc1tuYW1lXSkge1xuXHRcdFx0dGhpcy5oYW5kbGVyc1tuYW1lXSA9IG5ldyBFdmVudDxFdmVudE1hcFtOYW1lXT4oKVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5oYW5kbGVyc1tuYW1lXS5hZGQoYWN0aW9uKVxuXHR9XG5cdG9uT25jZTxOYW1lIGV4dGVuZHMga2V5b2YgRXZlbnRNYXA+KFxuXHRcdG5hbWU6IE5hbWUsXG5cdFx0YWN0aW9uOiAoLi4uYXJnczogRXZlbnRNYXBbTmFtZV0pID0+IHZvaWQsXG5cdCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0Y29uc3QgZXYgPSB0aGlzLm9uKG5hbWUsICguLi5hcmdzKSA9PiB7XG5cdFx0XHRldi5jYW5jZWwoKVxuXHRcdFx0YWN0aW9uKC4uLmFyZ3MpXG5cdFx0fSlcblx0XHRyZXR1cm4gZXZcblx0fVxuXHRuZXh0PE5hbWUgZXh0ZW5kcyBrZXlvZiBFdmVudE1hcD4obmFtZTogTmFtZSk6IFByb21pc2U8dW5rbm93bj4ge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG5cdFx0XHQvLyBUT0RPOiBjYW4gb25seSBwYXNzIDEgdmFsIHRvIHJlc29sdmUoKVxuXHRcdFx0dGhpcy5vbk9uY2UobmFtZSwgKC4uLmFyZ3M6IEV2ZW50TWFwW05hbWVdKSA9PiByZXMoYXJnc1swXSkpXG5cdFx0fSlcblx0fVxuXHR0cmlnZ2VyPE5hbWUgZXh0ZW5kcyBrZXlvZiBFdmVudE1hcD4obmFtZTogTmFtZSwgLi4uYXJnczogRXZlbnRNYXBbTmFtZV0pIHtcblx0XHRpZiAodGhpcy5oYW5kbGVyc1tuYW1lXSkge1xuXHRcdFx0dGhpcy5oYW5kbGVyc1tuYW1lXS50cmlnZ2VyKC4uLmFyZ3MpXG5cdFx0fVxuXHR9XG5cdHJlbW92ZTxOYW1lIGV4dGVuZHMga2V5b2YgRXZlbnRNYXA+KG5hbWU6IE5hbWUpIHtcblx0XHRkZWxldGUgdGhpcy5oYW5kbGVyc1tuYW1lXVxuXHR9XG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuaGFuZGxlcnMgPSB7fVxuXHR9XG5cdG51bUxpc3RlbmVyczxOYW1lIGV4dGVuZHMga2V5b2YgRXZlbnRNYXA+KG5hbWU6IE5hbWUpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmhhbmRsZXJzW25hbWVdPy5udW1MaXN0ZW5lcnMoKSA/PyAwXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBFcShvMTogYW55LCBvMjogYW55KTogYm9vbGVhbiB7XG5cdGlmIChvMSA9PT0gbzIpIHtcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG5cdGNvbnN0IHQxID0gdHlwZW9mIG8xXG5cdGNvbnN0IHQyID0gdHlwZW9mIG8yXG5cdGlmICh0MSAhPT0gdDIpIHtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXHRpZiAodDEgPT09IFwib2JqZWN0XCIgJiYgdDIgPT09IFwib2JqZWN0XCIgJiYgbzEgIT09IG51bGwgJiYgbzIgIT09IG51bGwpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShvMSkgIT09IEFycmF5LmlzQXJyYXkobzIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHR9XG5cdFx0Y29uc3QgazEgPSBPYmplY3Qua2V5cyhvMSlcblx0XHRjb25zdCBrMiA9IE9iamVjdC5rZXlzKG8yKVxuXHRcdGlmIChrMS5sZW5ndGggIT09IGsyLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fVxuXHRcdGZvciAoY29uc3QgayBvZiBrMSkge1xuXHRcdFx0Y29uc3QgdjEgPSBvMVtrXVxuXHRcdFx0Y29uc3QgdjIgPSBvMltrXVxuXHRcdFx0aWYgKCFkZWVwRXEodjEsIHYyKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWVcblx0fVxuXHRyZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NFRvQXJyYXlCdWZmZXIoYmFzZTY0OiBzdHJpbmcpOiBBcnJheUJ1ZmZlciB7XG5cdGNvbnN0IGJpbnN0ciA9IHdpbmRvdy5hdG9iKGJhc2U2NClcblx0Y29uc3QgbGVuID0gYmluc3RyLmxlbmd0aFxuXHRjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGxlbilcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdGJ5dGVzW2ldID0gYmluc3RyLmNoYXJDb2RlQXQoaSlcblx0fVxuXHRyZXR1cm4gYnl0ZXMuYnVmZmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhVVJMVG9BcnJheUJ1ZmZlcih1cmw6IHN0cmluZyk6IEFycmF5QnVmZmVyIHtcblx0cmV0dXJuIGJhc2U2NFRvQXJyYXlCdWZmZXIodXJsLnNwbGl0KFwiLFwiKVsxXSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkKGZpbGVuYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XG5cdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuXHRhLmhyZWYgPSB1cmxcblx0YS5kb3dubG9hZCA9IGZpbGVuYW1lXG5cdGEuY2xpY2soKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRUZXh0KGZpbGVuYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZykge1xuXHRkb3dubG9hZChmaWxlbmFtZSwgXCJkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCxcIiArIHRleHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEpTT04oZmlsZW5hbWU6IHN0cmluZywgZGF0YTogYW55KSB7XG5cdGRvd25sb2FkVGV4dChmaWxlbmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEJsb2IoZmlsZW5hbWU6IHN0cmluZywgYmxvYjogQmxvYikge1xuXHRjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG5cdGRvd25sb2FkKGZpbGVuYW1lLCB1cmwpXG5cdFVSTC5yZXZva2VPYmplY3RVUkwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgaXNEYXRhVVJMID0gKHN0cjogc3RyaW5nKSA9PiBzdHIubWF0Y2goL15kYXRhOlxcdytcXC9cXHcrO2Jhc2U2NCwuKy8pXG5leHBvcnQgY29uc3QgZ2V0RmlsZUV4dCA9IChwOiBzdHJpbmcpID0+IHAuc3BsaXQoXCIuXCIpLnBvcCgpXG5leHBvcnQgY29uc3QgZ2V0RmlsZU5hbWUgPSAocDogc3RyaW5nKSA9PiBwLnNwbGl0KFwiLlwiKS5zbGljZSgwLCAtMSkuam9pbihcIi5cIilcblxudHlwZSBGdW5jID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnlcblxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJsb2FkMjxBIGV4dGVuZHMgRnVuYywgQiBleHRlbmRzIEZ1bmM+KGZuMTogQSwgZm4yOiBCKTogQSAmIEIge1xuXHRyZXR1cm4gKCguLi5hcmdzKSA9PiB7XG5cdFx0Y29uc3QgYWwgPSBhcmdzLmxlbmd0aFxuXHRcdGlmIChhbCA9PT0gZm4xLmxlbmd0aCkgcmV0dXJuIGZuMSguLi5hcmdzKVxuXHRcdGlmIChhbCA9PT0gZm4yLmxlbmd0aCkgcmV0dXJuIGZuMiguLi5hcmdzKVxuXHR9KSBhcyBBICYgQlxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcmxvYWQzPFxuXHRBIGV4dGVuZHMgRnVuYyxcblx0QiBleHRlbmRzIEZ1bmMsXG5cdEMgZXh0ZW5kcyBGdW5jLFxuPihmbjE6IEEsIGZuMjogQiwgZm4zOiBDKTogQSAmIEIgJiBDIHtcblx0cmV0dXJuICgoLi4uYXJncykgPT4ge1xuXHRcdGNvbnN0IGFsID0gYXJncy5sZW5ndGhcblx0XHRpZiAoYWwgPT09IGZuMS5sZW5ndGgpIHJldHVybiBmbjEoLi4uYXJncylcblx0XHRpZiAoYWwgPT09IGZuMi5sZW5ndGgpIHJldHVybiBmbjIoLi4uYXJncylcblx0XHRpZiAoYWwgPT09IGZuMy5sZW5ndGgpIHJldHVybiBmbjMoLi4uYXJncylcblx0fSkgYXMgQSAmIEIgJiBDXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVybG9hZDQ8XG5cdEEgZXh0ZW5kcyBGdW5jLFxuXHRCIGV4dGVuZHMgRnVuYyxcblx0QyBleHRlbmRzIEZ1bmMsXG5cdEQgZXh0ZW5kcyBGdW5jLFxuPihmbjE6IEEsIGZuMjogQiwgZm4zOiBDLCBmbjQ6IEQpOiBBICYgQiAmIEMgJiBEIHtcblx0cmV0dXJuICgoLi4uYXJncykgPT4ge1xuXHRcdGNvbnN0IGFsID0gYXJncy5sZW5ndGhcblx0XHRpZiAoYWwgPT09IGZuMS5sZW5ndGgpIHJldHVybiBmbjEoLi4uYXJncylcblx0XHRpZiAoYWwgPT09IGZuMi5sZW5ndGgpIHJldHVybiBmbjIoLi4uYXJncylcblx0XHRpZiAoYWwgPT09IGZuMy5sZW5ndGgpIHJldHVybiBmbjMoLi4uYXJncylcblx0XHRpZiAoYWwgPT09IGZuNC5sZW5ndGgpIHJldHVybiBmbjQoLi4uYXJncylcblx0fSkgYXMgQSAmIEIgJiBDICYgRFxufVxuXG5leHBvcnQgY29uc3QgdWlkID0gKCgpID0+IHtcblx0bGV0IGlkID0gMFxuXHRyZXR1cm4gKCkgPT4gaWQrK1xufSkoKVxuXG5leHBvcnQgY29uc3QgZ2V0RXJyb3JNZXNzYWdlID0gKGVycm9yOiB1bmtub3duKSA9PlxuXHQoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKVxuXG5jb25zdCB3YXJuZWQgPSBuZXcgU2V0KClcblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm4obXNnOiBzdHJpbmcpIHtcblx0aWYgKCF3YXJuZWQuaGFzKG1zZykpIHtcblx0XHR3YXJuZWQuYWRkKG1zZylcblx0XHRjb25zb2xlLndhcm4obXNnKVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXByZWNhdGVNc2cob2xkTmFtZTogc3RyaW5nLCBuZXdOYW1lOiBzdHJpbmcpIHtcblx0d2FybihgJHtvbGROYW1lfSBpcyBkZXByZWNhdGVkLiBVc2UgJHtuZXdOYW1lfSBpbnN0ZWFkLmApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXByZWNhdGUob2xkTmFtZTogc3RyaW5nLCBuZXdOYW1lOiBzdHJpbmcsIG5ld0Z1bmM6ICguLi5hcmdzKSA9PiBhbnkpIHtcblx0cmV0dXJuICguLi5hcmdzKSA9PiB7XG5cdFx0ZGVwcmVjYXRlTXNnKG9sZE5hbWUsIG5ld05hbWUpXG5cdFx0cmV0dXJuIG5ld0Z1bmMoLi4uYXJncylcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmVuY2htYXJrKHRhc2s6ICgpID0+IHZvaWQsIHRpbWVzOiBudW1iZXIgPSAxKSB7XG5cdGNvbnN0IHQxID0gcGVyZm9ybWFuY2Uubm93KClcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lczsgaSsrKSB7XG5cdFx0dGFzaygpXG5cdH1cblx0Y29uc3QgdDIgPSBwZXJmb3JtYW5jZS5ub3coKVxuXHRyZXR1cm4gdDIgLSB0MVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVBlcmYodDE6ICgpID0+IHZvaWQsIHQyOiAoKSA9PiB2b2lkLCB0aW1lczogbnVtYmVyID0gMSkge1xuXHRyZXR1cm4gYmVuY2htYXJrKHQyLCB0aW1lcykgLyBiZW5jaG1hcmsodDEsIHRpbWVzKVxufVxuXG5leHBvcnQgY2xhc3MgQmluYXJ5SGVhcDxUPiB7XG5cdF9pdGVtczogVFtdXG5cdF9jb21wYXJlRm46IChhOiBULCBiOiBUKSA9PiBib29sZWFuXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBiaW5hcnkgaGVhcCB3aXRoIHRoZSBnaXZlbiBjb21wYXJlIGZ1bmN0aW9uXG5cdCAqIE5vdCBwYXNzaW5nIGEgY29tcGFyZSBmdW5jdGlvbiB3aWxsIGdpdmUgYSBtaW4gaGVhcFxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29tcGFyZUZuID0gKGE6IFQsIGI6IFQpID0+IGEgPCBiKSB7XG5cdFx0dGhpcy5fY29tcGFyZUZuID0gY29tcGFyZUZuXG5cdFx0dGhpcy5faXRlbXMgPSBbXVxuXHR9XG5cblx0LyoqXG5cdCAqIEluc2VydCBhbiBpdGVtIGludG8gdGhlIGJpbmFyeSBoZWFwXG5cdCAqL1xuXHRpbnNlcnQoaXRlbTogVCkge1xuXHRcdHRoaXMuX2l0ZW1zLnB1c2goaXRlbSlcblx0XHR0aGlzLm1vdmVVcCh0aGlzLl9pdGVtcy5sZW5ndGggLSAxKVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0aGUgc21hbGxlc3QgaXRlbSBmcm9tIHRoZSBiaW5hcnkgaGVhcCBpbiBjYXNlIG9mIGEgbWluIGhlYXBcblx0ICogb3IgdGhlIGdyZWF0ZXN0IGl0ZW0gZnJvbSB0aGUgYmluYXJ5IGhlYXAgaW4gY2FzZSBvZiBhIG1heCBoZWFwXG5cdCAqL1xuXHRyZW1vdmUoKSB7XG5cdFx0aWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gMClcblx0XHRcdHJldHVybiBudWxsXG5cdFx0Y29uc3QgaXRlbSA9IHRoaXMuX2l0ZW1zWzBdXG5cdFx0Y29uc3QgbGFzdEl0ZW0gPSB0aGlzLl9pdGVtcy5wb3AoKVxuXHRcdGlmICh0aGlzLl9pdGVtcy5sZW5ndGggIT09IDApIHtcblx0XHRcdHRoaXMuX2l0ZW1zWzBdID0gbGFzdEl0ZW0gYXMgVFxuXHRcdFx0dGhpcy5tb3ZlRG93bigwKVxuXHRcdH1cblx0XHRyZXR1cm4gaXRlbVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhbGwgaXRlbXNcblx0ICovXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuX2l0ZW1zLnNwbGljZSgwLCB0aGlzLl9pdGVtcy5sZW5ndGgpXG5cdH1cblxuXHRtb3ZlVXAocG9zOiBudW1iZXIpIHtcblx0XHR3aGlsZSAocG9zID4gMCkge1xuXHRcdFx0Y29uc3QgcGFyZW50ID0gTWF0aC5mbG9vcigocG9zIC0gMSkgLyAyKVxuXHRcdFx0aWYgKCF0aGlzLl9jb21wYXJlRm4odGhpcy5faXRlbXNbcG9zXSwgdGhpcy5faXRlbXNbcGFyZW50XSkpXG5cdFx0XHRcdGlmICh0aGlzLl9pdGVtc1twb3NdID49IHRoaXMuX2l0ZW1zW3BhcmVudF0pXG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdHRoaXMuc3dhcChwb3MsIHBhcmVudClcblx0XHRcdHBvcyA9IHBhcmVudFxuXHRcdH1cblx0fVxuXG5cdG1vdmVEb3duKHBvczogbnVtYmVyKSB7XG5cdFx0d2hpbGUgKHBvcyA8IE1hdGguZmxvb3IodGhpcy5faXRlbXMubGVuZ3RoIC8gMikpIHtcblx0XHRcdGxldCBjaGlsZCA9IDIgKiBwb3MgKyAxXG5cdFx0XHRpZiAoY2hpbGQgPCB0aGlzLl9pdGVtcy5sZW5ndGggLSAxICYmICF0aGlzLl9jb21wYXJlRm4odGhpcy5faXRlbXNbY2hpbGRdLCB0aGlzLl9pdGVtc1tjaGlsZCArIDFdKSlcblx0XHRcdFx0KytjaGlsZFxuXHRcdFx0aWYgKHRoaXMuX2NvbXBhcmVGbih0aGlzLl9pdGVtc1twb3NdLCB0aGlzLl9pdGVtc1tjaGlsZF0pKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0dGhpcy5zd2FwKHBvcywgY2hpbGQpXG5cdFx0XHRwb3MgPSBjaGlsZFxuXHRcdH1cblx0fVxuXG5cdHN3YXAoaW5kZXgxOiBudW1iZXIsIGluZGV4MjogbnVtYmVyKSB7XG5cdFx0W3RoaXMuX2l0ZW1zW2luZGV4MV0sIHRoaXMuX2l0ZW1zW2luZGV4Ml1dID0gW3RoaXMuX2l0ZW1zW2luZGV4Ml0sIHRoaXMuX2l0ZW1zW2luZGV4MV1dXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYW1vdW50IG9mIGl0ZW1zXG5cdCAqL1xuXHRnZXQgbGVuZ3RoKCkge1xuXHRcdHJldHVybiB0aGlzLl9pdGVtcy5sZW5ndGhcblx0fVxufVxuXG5jb25zdCBlbnVtIEVudW1SdW5lc0NvZGUge1xuXHRISUdIX1NVUlJPR0FURV9TVEFSVCA9IDB4ZDgwMCxcblx0SElHSF9TVVJST0dBVEVfRU5EID0gMHhkYmZmLFxuXG5cdExPV19TVVJST0dBVEVfU1RBUlQgPSAweGRjMDAsXG5cblx0UkVHSU9OQUxfSU5ESUNBVE9SX1NUQVJUID0gMHgxZjFlNixcblx0UkVHSU9OQUxfSU5ESUNBVE9SX0VORCA9IDB4MWYxZmYsXG5cblx0RklUWlBBVFJJQ0tfTU9ESUZJRVJfU1RBUlQgPSAweDFmM2ZiLFxuXHRGSVRaUEFUUklDS19NT0RJRklFUl9FTkQgPSAweDFmM2ZmLFxuXG5cdFZBUklBVElPTl9NT0RJRklFUl9TVEFSVCA9IDB4ZmUwMCxcblx0VkFSSUFUSU9OX01PRElGSUVSX0VORCA9IDB4ZmUwZixcblxuXHRESUFDUklUSUNBTF9NQVJLU19TVEFSVCA9IDB4MjBkMCxcblx0RElBQ1JJVElDQUxfTUFSS1NfRU5EID0gMHgyMGZmLFxuXG5cdFNVQkRJVklTSU9OX0lORElDQVRPUl9TVEFSVCA9IDB4MWYzZjQsXG5cdFRBR1NfU1RBUlQgPSAweGUwMDAwLFxuXHRUQUdTX0VORCA9IDB4ZTAwN2YsXG5cblx0WldKID0gMHgyMDBkLFxufVxuXG5jb25zdCBHUkFQSEVNRVMgPSBPYmplY3QuZnJlZXplKFtcblx0MHgwMzA4LCAvLyAoIFx1MjVDQ1x1MDMwOCApIENPTUJJTklORyBESUFFUkVTSVNcblx0MHgwOTM3LCAvLyAoIFx1MDkzNyApIERFVkFOQUdBUkkgTEVUVEVSIFNTQVxuXHQweDA5M0YsIC8vICggXHUwOTNGICkgREVWQU5BR0FSSSBWT1dFTCBTSUdOIElcblx0MHgwQkE4LCAvLyAoIFx1MEJBOCApIFRBTUlMIExFVFRFUiBOQVxuXHQweDBCQkYsIC8vICggXHUwQkJGICkgVEFNSUwgVk9XRUwgU0lHTiBJXG5cdDB4MEJDRCwgLy8gKCBcdTI1Q0NcdTBCQ0QpIFRBTUlMIFNJR04gVklSQU1BXG5cdDB4MEUzMSwgLy8gKCBcdTI1Q0NcdTBFMzEgKSBUSEFJIENIQVJBQ1RFUiBNQUkgSEFOLUFLQVRcblx0MHgwRTMzLCAvLyAoIFx1MEUzMyApIFRIQUkgQ0hBUkFDVEVSIFNBUkEgQU1cblx0MHgwRTQwLCAvLyAoIFx1MEU0MCApIFRIQUkgQ0hBUkFDVEVSIFNBUkEgRVxuXHQweDBFNDksIC8vICggXHUwRTQwICkgVEhBSSBDSEFSQUNURVIgTUFJIFRIT1xuXHQweDExMDAsIC8vICggXHUxMTAwICkgSEFOR1VMIENIT1NFT05HIEtJWUVPS1xuXHQweDExNjEsIC8vICggXHUxMTYxICkgSEFOR1VMIEpVTkdTRU9ORyBBXG5cdDB4MTFBOCwgLy8gKCBcdTExQTggKSBIQU5HVUwgSk9OR1NFT05HIEtJWUVPS1xuXSlcblxuZW51bSBFbnVtQ29kZVVuaXRzIHtcblx0dW5pdF8xID0gMSxcblx0dW5pdF8yID0gMixcblx0dW5pdF80ID0gNCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bmVzKHN0cmluZzogc3RyaW5nKTogc3RyaW5nW10ge1xuXHRpZiAodHlwZW9mIHN0cmluZyAhPT0gXCJzdHJpbmdcIikge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJzdHJpbmcgY2Fubm90IGJlIHVuZGVmaW5lZCBvciBudWxsXCIpXG5cdH1cblx0Y29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdXG5cdGxldCBpID0gMFxuXHRsZXQgaW5jcmVtZW50ID0gMFxuXHR3aGlsZSAoaSA8IHN0cmluZy5sZW5ndGgpIHtcblx0XHRpbmNyZW1lbnQgKz0gbmV4dFVuaXRzKGkgKyBpbmNyZW1lbnQsIHN0cmluZylcblx0XHRpZiAoaXNHcmFwaGVtZShzdHJpbmdbaSArIGluY3JlbWVudF0pKSB7XG5cdFx0XHRpbmNyZW1lbnQrK1xuXHRcdH1cblx0XHRpZiAoaXNWYXJpYXRpb25TZWxlY3RvcihzdHJpbmdbaSArIGluY3JlbWVudF0pKSB7XG5cdFx0XHRpbmNyZW1lbnQrK1xuXHRcdH1cblx0XHRpZiAoaXNEaWFjcml0aWNhbE1hcmsoc3RyaW5nW2kgKyBpbmNyZW1lbnRdKSkge1xuXHRcdFx0aW5jcmVtZW50Kytcblx0XHR9XG5cdFx0aWYgKGlzWmVyb1dpZHRoSm9pbmVyKHN0cmluZ1tpICsgaW5jcmVtZW50XSkpIHtcblx0XHRcdGluY3JlbWVudCsrXG5cdFx0XHRjb250aW51ZVxuXHRcdH1cblx0XHRyZXN1bHQucHVzaChzdHJpbmcuc3Vic3RyaW5nKGksIGkgKyBpbmNyZW1lbnQpKVxuXHRcdGkgKz0gaW5jcmVtZW50XG5cdFx0aW5jcmVtZW50ID0gMFxuXHR9XG5cdHJldHVybiByZXN1bHRcbn1cblxuLy8gRGVjaWRlIGhvdyBtYW55IGNvZGUgdW5pdHMgbWFrZSB1cCB0aGUgY3VycmVudCBjaGFyYWN0ZXIuXG4vLyBCTVAgY2hhcmFjdGVyczogMSBjb2RlIHVuaXRcbi8vIE5vbi1CTVAgY2hhcmFjdGVycyAocmVwcmVzZW50ZWQgYnkgc3Vycm9nYXRlIHBhaXJzKTogMiBjb2RlIHVuaXRzXG4vLyBFbW9qaSB3aXRoIHNraW4tdG9uZSBtb2RpZmllcnM6IDQgY29kZSB1bml0cyAoMiBjb2RlIHBvaW50cylcbi8vIENvdW50cnkgZmxhZ3M6IDQgY29kZSB1bml0cyAoMiBjb2RlIHBvaW50cylcbi8vIFZhcmlhdGlvbnM6IDIgY29kZSB1bml0c1xuLy8gU3ViZGl2aXNpb24gZmxhZ3M6IDE0IGNvZGUgdW5pdHMgKDcgY29kZSBwb2ludHMpXG5mdW5jdGlvbiBuZXh0VW5pdHMoaTogbnVtYmVyLCBzdHJpbmc6IHN0cmluZykge1xuXHRjb25zdCBjdXJyZW50ID0gc3RyaW5nW2ldXG5cdC8vIElmIHdlIGRvbid0IGhhdmUgYSB2YWx1ZSB0aGF0IGlzIHBhcnQgb2YgYSBzdXJyb2dhdGUgcGFpciwgb3Igd2UncmUgYXRcblx0Ly8gdGhlIGVuZCwgb25seSB0YWtlIHRoZSB2YWx1ZSBhdCBpXG5cdGlmICghaXNGaXJzdE9mU3Vycm9nYXRlUGFpcihjdXJyZW50KSB8fCBpID09PSBzdHJpbmcubGVuZ3RoIC0gMSkge1xuXHRcdHJldHVybiBFbnVtQ29kZVVuaXRzLnVuaXRfMVxuXHR9XG5cblx0Y29uc3QgY3VycmVudFBhaXIgPSBjdXJyZW50ICsgc3RyaW5nW2kgKyAxXVxuXHRjb25zdCBuZXh0UGFpciA9IHN0cmluZy5zdWJzdHJpbmcoaSArIDIsIGkgKyA1KVxuXG5cdC8vIENvdW50cnkgZmxhZ3MgYXJlIGNvbXByaXNlZCBvZiB0d28gcmVnaW9uYWwgaW5kaWNhdG9yIHN5bWJvbHMsXG5cdC8vIGVhY2ggcmVwcmVzZW50ZWQgYnkgYSBzdXJyb2dhdGUgcGFpci5cblx0Ly8gU2VlIGh0dHA6Ly9lbW9qaXBlZGlhLm9yZy9mbGFncy9cblx0Ly8gSWYgYm90aCBwYWlycyBhcmUgcmVnaW9uYWwgaW5kaWNhdG9yIHN5bWJvbHMsIHRha2UgNFxuXHRpZiAoaXNSZWdpb25hbEluZGljYXRvcihjdXJyZW50UGFpcikgJiYgaXNSZWdpb25hbEluZGljYXRvcihuZXh0UGFpcikpIHtcblx0XHRyZXR1cm4gRW51bUNvZGVVbml0cy51bml0XzRcblx0fVxuXG5cdC8vIGh0dHBzOi8vdW5pY29kZS5vcmcvZW1vamkvY2hhcnRzL2Z1bGwtZW1vamktbGlzdC5odG1sI3N1YmRpdmlzaW9uLWZsYWdcblx0Ly8gU2VlIGh0dHBzOi8vZW1vamlwZWRpYS5vcmcvZW1vamktdGFnLXNlcXVlbmNlL1xuXHQvLyBJZiBuZXh0UGFpciBpcyBpbiBUYWdzKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RhZ3NfKFVuaWNvZGVfYmxvY2spKSxcblx0Ly8gdGhlbiBmaW5kIG5leHQgY2xvc2VzdCBVK0UwMDdGKENBTkNFTCBUQUcpXG5cdGlmIChpc1N1YmRpdmlzaW9uRmxhZyhjdXJyZW50UGFpcikgJiZcdGlzU3VwcGxlbWVudGFyeVNwZWNpYWxwdXJwb3NlUGxhbmUobmV4dFBhaXIpKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5zbGljZShpKS5pbmRleE9mKFN0cmluZy5mcm9tQ29kZVBvaW50KEVudW1SdW5lc0NvZGUuVEFHU19FTkQpKSArIDJcblx0fVxuXG5cdC8vIElmIHRoZSBuZXh0IHBhaXIgbWFrZSBhIEZpdHpwYXRyaWNrIHNraW4gdG9uZVxuXHQvLyBtb2RpZmllciwgdGFrZSA0XG5cdC8vIFNlZSBodHRwOi8vZW1vamlwZWRpYS5vcmcvbW9kaWZpZXJzL1xuXHQvLyBUZWNobmljYWxseSwgb25seSBzb21lIGNvZGUgcG9pbnRzIGFyZSBtZWFudCB0byBiZVxuXHQvLyBjb21iaW5lZCB3aXRoIHRoZSBza2luIHRvbmUgbW9kaWZpZXJzLiBUaGlzIGZ1bmN0aW9uXG5cdC8vIGRvZXMgbm90IGNoZWNrIHRoZSBjdXJyZW50IHBhaXIgdG8gc2VlIGlmIGl0IGlzXG5cdC8vIG9uZSBvZiB0aGVtLlxuXHRpZiAoaXNGaXR6cGF0cmlja01vZGlmaWVyKG5leHRQYWlyKSkge1xuXHRcdHJldHVybiBFbnVtQ29kZVVuaXRzLnVuaXRfNFxuXHR9XG5cdHJldHVybiBFbnVtQ29kZVVuaXRzLnVuaXRfMlxufVxuXG5mdW5jdGlvbiBpc0ZpcnN0T2ZTdXJyb2dhdGVQYWlyKHN0cmluZzogc3RyaW5nKSB7XG5cdHJldHVybiBzdHJpbmcgJiYgYmV0d2VlbkluY2x1c2l2ZShzdHJpbmdbMF0uY2hhckNvZGVBdCgwKSwgRW51bVJ1bmVzQ29kZS5ISUdIX1NVUlJPR0FURV9TVEFSVCwgRW51bVJ1bmVzQ29kZS5ISUdIX1NVUlJPR0FURV9FTkQpXG59XG5cbmZ1bmN0aW9uIGlzUmVnaW9uYWxJbmRpY2F0b3Ioc3RyaW5nOiBzdHJpbmcpIHtcblx0cmV0dXJuIGJldHdlZW5JbmNsdXNpdmUoY29kZVBvaW50RnJvbVN1cnJvZ2F0ZVBhaXIoc3RyaW5nKSwgRW51bVJ1bmVzQ29kZS5SRUdJT05BTF9JTkRJQ0FUT1JfU1RBUlQsIEVudW1SdW5lc0NvZGUuUkVHSU9OQUxfSU5ESUNBVE9SX0VORClcbn1cblxuZnVuY3Rpb24gaXNTdWJkaXZpc2lvbkZsYWcoc3RyaW5nOiBzdHJpbmcpIHtcblx0cmV0dXJuIGJldHdlZW5JbmNsdXNpdmUoY29kZVBvaW50RnJvbVN1cnJvZ2F0ZVBhaXIoc3RyaW5nKSxcdEVudW1SdW5lc0NvZGUuU1VCRElWSVNJT05fSU5ESUNBVE9SX1NUQVJULCBFbnVtUnVuZXNDb2RlLlNVQkRJVklTSU9OX0lORElDQVRPUl9TVEFSVClcbn1cblxuZnVuY3Rpb24gaXNGaXR6cGF0cmlja01vZGlmaWVyKHN0cmluZzogc3RyaW5nKSB7XG5cdHJldHVybiBiZXR3ZWVuSW5jbHVzaXZlKGNvZGVQb2ludEZyb21TdXJyb2dhdGVQYWlyKHN0cmluZyksIEVudW1SdW5lc0NvZGUuRklUWlBBVFJJQ0tfTU9ESUZJRVJfU1RBUlQsIEVudW1SdW5lc0NvZGUuRklUWlBBVFJJQ0tfTU9ESUZJRVJfRU5EKVxufVxuXG5mdW5jdGlvbiBpc1ZhcmlhdGlvblNlbGVjdG9yKHN0cmluZzogc3RyaW5nKSB7XG5cdHJldHVybiB0eXBlb2Ygc3RyaW5nID09PSBcInN0cmluZ1wiICYmIGJldHdlZW5JbmNsdXNpdmUoc3RyaW5nLmNoYXJDb2RlQXQoMCksIEVudW1SdW5lc0NvZGUuVkFSSUFUSU9OX01PRElGSUVSX1NUQVJULCBFbnVtUnVuZXNDb2RlLlZBUklBVElPTl9NT0RJRklFUl9FTkQpXG59XG5cbmZ1bmN0aW9uIGlzRGlhY3JpdGljYWxNYXJrKHN0cmluZzogc3RyaW5nKSB7XG5cdHJldHVybiB0eXBlb2Ygc3RyaW5nID09PSBcInN0cmluZ1wiICYmIGJldHdlZW5JbmNsdXNpdmUoc3RyaW5nLmNoYXJDb2RlQXQoMCksIEVudW1SdW5lc0NvZGUuRElBQ1JJVElDQUxfTUFSS1NfU1RBUlQsIEVudW1SdW5lc0NvZGUuRElBQ1JJVElDQUxfTUFSS1NfRU5EKVxufVxuXG5mdW5jdGlvbiBpc1N1cHBsZW1lbnRhcnlTcGVjaWFscHVycG9zZVBsYW5lKHN0cmluZzogc3RyaW5nKSB7XG5cdGNvbnN0IGNvZGVQb2ludCA9IHN0cmluZy5jb2RlUG9pbnRBdCgwKVxuXHRyZXR1cm4gKHR5cGVvZiBzdHJpbmcgPT09IFwic3RyaW5nXCIgJiZcdHR5cGVvZiBjb2RlUG9pbnQgPT09IFwibnVtYmVyXCIgJiYgYmV0d2VlbkluY2x1c2l2ZShjb2RlUG9pbnQsIEVudW1SdW5lc0NvZGUuVEFHU19TVEFSVCwgRW51bVJ1bmVzQ29kZS5UQUdTX0VORCkpXG59XG5cbmZ1bmN0aW9uIGlzR3JhcGhlbWUoc3RyaW5nOiBzdHJpbmcpIHtcblx0cmV0dXJuIHR5cGVvZiBzdHJpbmcgPT09IFwic3RyaW5nXCIgJiYgR1JBUEhFTUVTLmluY2x1ZGVzKHN0cmluZy5jaGFyQ29kZUF0KDApKVxufVxuXG5mdW5jdGlvbiBpc1plcm9XaWR0aEpvaW5lcihzdHJpbmc6IHN0cmluZykge1xuXHRyZXR1cm4gdHlwZW9mIHN0cmluZyA9PT0gXCJzdHJpbmdcIiAmJiBzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gRW51bVJ1bmVzQ29kZS5aV0pcbn1cblxuZnVuY3Rpb24gY29kZVBvaW50RnJvbVN1cnJvZ2F0ZVBhaXIocGFpcjogc3RyaW5nKSB7XG5cdGNvbnN0IGhpZ2hPZmZzZXQgPSBwYWlyLmNoYXJDb2RlQXQoMCkgLSBFbnVtUnVuZXNDb2RlLkhJR0hfU1VSUk9HQVRFX1NUQVJUXG5cdGNvbnN0IGxvd09mZnNldCA9IHBhaXIuY2hhckNvZGVBdCgxKSAtIEVudW1SdW5lc0NvZGUuTE9XX1NVUlJPR0FURV9TVEFSVFxuXHRyZXR1cm4gKGhpZ2hPZmZzZXQgPDwgMTApICsgbG93T2Zmc2V0ICsgMHgxMDAwMFxufVxuXG5mdW5jdGlvbiBiZXR3ZWVuSW5jbHVzaXZlKHZhbHVlOiBudW1iZXIsIGxvd2VyOiBudW1iZXIsIHVwcGVyOiBudW1iZXIpIHtcblx0cmV0dXJuIHZhbHVlID49IGxvd2VyICYmIHZhbHVlIDw9IHVwcGVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdHJpbmcoc3RyaW5nOiBzdHJpbmcsIHN0YXJ0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlcikge1xuXHRjb25zdCBjaGFycyA9IHJ1bmVzKHN0cmluZylcblx0aWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gc3RyaW5nXG5cdH1cblx0aWYgKHN0YXJ0ID49IGNoYXJzLmxlbmd0aCkge1xuXHRcdHJldHVybiBcIlwiXG5cdH1cblx0Y29uc3QgcmVzdCA9IGNoYXJzLmxlbmd0aCAtIHN0YXJ0XG5cdGNvbnN0IHN0cmluZ1dpZHRoID0gd2lkdGggPT09IHVuZGVmaW5lZCA/IHJlc3QgOiB3aWR0aFxuXHRsZXQgZW5kSW5kZXggPSBzdGFydCArIHN0cmluZ1dpZHRoXG5cdGlmIChlbmRJbmRleCA+IChzdGFydCArIHJlc3QpKSB7XG5cdFx0ZW5kSW5kZXggPSB1bmRlZmluZWRcblx0fVxuXHRyZXR1cm4gY2hhcnMuc2xpY2Uoc3RhcnQsIGVuZEluZGV4KS5qb2luKFwiXCIpXG59XG4iLCAie1xuXHRcIkpveS1Db24gTCtSIChTVEFOREFSRCBHQU1FUEFEIFZlbmRvcjogMDU3ZSBQcm9kdWN0OiAyMDBlKVwiOiB7XG5cdFx0XCJidXR0b25zXCI6IHtcblx0XHRcdFwiMFwiOiBcInNvdXRoXCIsXG5cdFx0XHRcIjFcIjogXCJlYXN0XCIsXG5cdFx0XHRcIjJcIjogXCJ3ZXN0XCIsXG5cdFx0XHRcIjNcIjogXCJub3J0aFwiLFxuXHRcdFx0XCI0XCI6IFwibHNob3VsZGVyXCIsXG5cdFx0XHRcIjVcIjogXCJyc2hvdWxkZXJcIixcblx0XHRcdFwiNlwiOiBcImx0cmlnZ2VyXCIsXG5cdFx0XHRcIjdcIjogXCJydHJpZ2dlclwiLFxuXHRcdFx0XCI4XCI6IFwic2VsZWN0XCIsXG5cdFx0XHRcIjlcIjogXCJzdGFydFwiLFxuXHRcdFx0XCIxMFwiOiBcImxzdGlja1wiLFxuXHRcdFx0XCIxMVwiOiBcInJzdGlja1wiLFxuXHRcdFx0XCIxMlwiOiBcImRwYWQtdXBcIixcblx0XHRcdFwiMTNcIjogXCJkcGFkLWRvd25cIixcblx0XHRcdFwiMTRcIjogXCJkcGFkLWxlZnRcIixcblx0XHRcdFwiMTVcIjogXCJkcGFkLXJpZ2h0XCIsXG5cdFx0XHRcIjE2XCI6IFwiaG9tZVwiLFxuXHRcdFx0XCIxN1wiOiBcImNhcHR1cmVcIlxuXHRcdH0sXG5cdFx0XCJzdGlja3NcIjoge1xuXHRcdFx0XCJsZWZ0XCI6IHsgXCJ4XCI6IDAsIFwieVwiOiAxIH0sXG5cdFx0XHRcInJpZ2h0XCI6IHsgXCJ4XCI6IDIsIFwieVwiOiAzIH1cblx0XHR9XG5cdH0sXG5cdFwiSm95LUNvbiAoTCkgKFNUQU5EQVJEIEdBTUVQQUQgVmVuZG9yOiAwNTdlIFByb2R1Y3Q6IDIwMDYpXCI6IHtcblx0XHRcImJ1dHRvbnNcIjoge1xuXHRcdFx0XCIwXCI6IFwic291dGhcIixcblx0XHRcdFwiMVwiOiBcImVhc3RcIixcblx0XHRcdFwiMlwiOiBcIndlc3RcIixcblx0XHRcdFwiM1wiOiBcIm5vcnRoXCIsXG5cdFx0XHRcIjRcIjogXCJsc2hvdWxkZXJcIixcblx0XHRcdFwiNVwiOiBcInJzaG91bGRlclwiLFxuXHRcdFx0XCI5XCI6IFwic2VsZWN0XCIsXG5cdFx0XHRcIjEwXCI6IFwibHN0aWNrXCIsXG5cdFx0XHRcIjE2XCI6IFwic3RhcnRcIlxuXHRcdH0sXG5cdFx0XCJzdGlja3NcIjoge1xuXHRcdFx0XCJsZWZ0XCI6IHsgXCJ4XCI6IDAsIFwieVwiOiAxIH1cblx0XHR9XG5cdH0sXG5cdFwiSm95LUNvbiAoUikgKFNUQU5EQVJEIEdBTUVQQUQgVmVuZG9yOiAwNTdlIFByb2R1Y3Q6IDIwMDcpXCI6IHtcblx0XHRcImJ1dHRvbnNcIjoge1xuXHRcdFx0XCIwXCI6IFwic291dGhcIixcblx0XHRcdFwiMVwiOiBcImVhc3RcIixcblx0XHRcdFwiMlwiOiBcIndlc3RcIixcblx0XHRcdFwiM1wiOiBcIm5vcnRoXCIsXG5cdFx0XHRcIjRcIjogXCJsc2hvdWxkZXJcIixcblx0XHRcdFwiNVwiOiBcInJzaG91bGRlclwiLFxuXHRcdFx0XCI5XCI6IFwic3RhcnRcIixcblx0XHRcdFwiMTBcIjogXCJsc3RpY2tcIixcblx0XHRcdFwiMTZcIjogXCJzZWxlY3RcIlxuXHRcdH0sXG5cdFx0XCJzdGlja3NcIjoge1xuXHRcdFx0XCJsZWZ0XCI6IHsgXCJ4XCI6IDAsIFwieVwiOiAxIH1cblx0XHR9XG5cdH0sXG5cdFwiUHJvIENvbnRyb2xsZXIgKFNUQU5EQVJEIEdBTUVQQUQgVmVuZG9yOiAwNTdlIFByb2R1Y3Q6IDIwMDkpXCI6IHtcblx0XHRcImJ1dHRvbnNcIjoge1xuXHRcdFx0XCIwXCI6IFwic291dGhcIixcblx0XHRcdFwiMVwiOiBcImVhc3RcIixcblx0XHRcdFwiMlwiOiBcIndlc3RcIixcblx0XHRcdFwiM1wiOiBcIm5vcnRoXCIsXG5cdFx0XHRcIjRcIjogXCJsc2hvdWxkZXJcIixcblx0XHRcdFwiNVwiOiBcInJzaG91bGRlclwiLFxuXHRcdFx0XCI2XCI6IFwibHRyaWdnZXJcIixcblx0XHRcdFwiN1wiOiBcInJ0cmlnZ2VyXCIsXG5cdFx0XHRcIjhcIjogXCJzZWxlY3RcIixcblx0XHRcdFwiOVwiOiBcInN0YXJ0XCIsXG5cdFx0XHRcIjEwXCI6IFwibHN0aWNrXCIsXG5cdFx0XHRcIjExXCI6IFwicnN0aWNrXCIsXG5cdFx0XHRcIjEyXCI6IFwiZHBhZC11cFwiLFxuXHRcdFx0XCIxM1wiOiBcImRwYWQtZG93blwiLFxuXHRcdFx0XCIxNFwiOiBcImRwYWQtbGVmdFwiLFxuXHRcdFx0XCIxNVwiOiBcImRwYWQtcmlnaHRcIixcblx0XHRcdFwiMTZcIjogXCJob21lXCIsXG5cdFx0XHRcIjE3XCI6IFwiY2FwdHVyZVwiXG5cdFx0fSxcblx0XHRcInN0aWNrc1wiOiB7XG5cdFx0XHRcImxlZnRcIjogeyBcInhcIjogMCwgXCJ5XCI6IDEgfSxcblx0XHRcdFwicmlnaHRcIjogeyBcInhcIjogMiwgXCJ5XCI6IDMgfVxuXHRcdH1cblx0fSxcblx0XCJkZWZhdWx0XCI6IHtcblx0XHRcImJ1dHRvbnNcIjoge1xuXHRcdFx0XCIwXCI6IFwic291dGhcIixcblx0XHRcdFwiMVwiOiBcImVhc3RcIixcblx0XHRcdFwiMlwiOiBcIndlc3RcIixcblx0XHRcdFwiM1wiOiBcIm5vcnRoXCIsXG5cdFx0XHRcIjRcIjogXCJsc2hvdWxkZXJcIixcblx0XHRcdFwiNVwiOiBcInJzaG91bGRlclwiLFxuXHRcdFx0XCI2XCI6IFwibHRyaWdnZXJcIixcblx0XHRcdFwiN1wiOiBcInJ0cmlnZ2VyXCIsXG5cdFx0XHRcIjhcIjogXCJzZWxlY3RcIixcblx0XHRcdFwiOVwiOiBcInN0YXJ0XCIsXG5cdFx0XHRcIjEwXCI6IFwibHN0aWNrXCIsXG5cdFx0XHRcIjExXCI6IFwicnN0aWNrXCIsXG5cdFx0XHRcIjEyXCI6IFwiZHBhZC11cFwiLFxuXHRcdFx0XCIxM1wiOiBcImRwYWQtZG93blwiLFxuXHRcdFx0XCIxNFwiOiBcImRwYWQtbGVmdFwiLFxuXHRcdFx0XCIxNVwiOiBcImRwYWQtcmlnaHRcIixcblx0XHRcdFwiMTZcIjogXCJob21lXCJcblx0XHR9LFxuXHRcdFwic3RpY2tzXCI6IHtcblx0XHRcdFwibGVmdFwiOiB7IFwieFwiOiAwLCBcInlcIjogMSB9LFxuXHRcdFx0XCJyaWdodFwiOiB7IFwieFwiOiAyLCBcInlcIjogMyB9XG5cdFx0fVxuXHR9XG59XG4iLCAiLy8gZXZlcnl0aGluZyByZWxhdGVkIHRvIGNhbnZhcywgZ2FtZSBsb29wIGFuZCBpbnB1dFxuXG5pbXBvcnQgdHlwZSB7XG5cdEN1cnNvcixcblx0S2V5LFxuXHRNb3VzZUJ1dHRvbixcblx0R2FtZXBhZEJ1dHRvbixcblx0R2FtZXBhZFN0aWNrLFxuXHRHYW1lcGFkRGVmLFxuXHRLR2FtZVBhZCxcbn0gZnJvbSBcIi4vdHlwZXNcIlxuXG5pbXBvcnQge1xuXHRWZWMyLFxuXHRtYXAsXG59IGZyb20gXCIuL21hdGhcIlxuXG5pbXBvcnQge1xuXHRFdmVudEhhbmRsZXIsXG5cdEV2ZW50Q29udHJvbGxlcixcblx0b3ZlcmxvYWQyLFxufSBmcm9tIFwiLi91dGlsc1wiXG5cbmltcG9ydCBHQU1FUEFEX01BUCBmcm9tIFwiLi9nYW1lcGFkLmpzb25cIlxuXG5leHBvcnQgY2xhc3MgQnV0dG9uU3RhdGU8VCA9IHN0cmluZz4ge1xuXHRwcmVzc2VkOiBTZXQ8VD4gPSBuZXcgU2V0KFtdKVxuXHRwcmVzc2VkUmVwZWF0OiBTZXQ8VD4gPSBuZXcgU2V0KFtdKVxuXHRyZWxlYXNlZDogU2V0PFQ+ID0gbmV3IFNldChbXSlcblx0ZG93bjogU2V0PFQ+ID0gbmV3IFNldChbXSlcblx0dXBkYXRlKCkge1xuXHRcdHRoaXMucHJlc3NlZC5jbGVhcigpXG5cdFx0dGhpcy5yZWxlYXNlZC5jbGVhcigpXG5cdFx0dGhpcy5wcmVzc2VkUmVwZWF0LmNsZWFyKClcblx0fVxuXHRwcmVzcyhidG46IFQpIHtcblx0XHR0aGlzLnByZXNzZWQuYWRkKGJ0bilcblx0XHR0aGlzLnByZXNzZWRSZXBlYXQuYWRkKGJ0bilcblx0XHR0aGlzLmRvd24uYWRkKGJ0bilcblx0fVxuXHRwcmVzc1JlcGVhdChidG46IFQpIHtcblx0XHR0aGlzLnByZXNzZWRSZXBlYXQuYWRkKGJ0bilcblx0fVxuXHRyZWxlYXNlKGJ0bjogVCkge1xuXHRcdHRoaXMuZG93bi5kZWxldGUoYnRuKVxuXHRcdHRoaXMucHJlc3NlZC5kZWxldGUoYnRuKVxuXHRcdHRoaXMucmVsZWFzZWQuYWRkKGJ0bilcblx0fVxufVxuXG5jbGFzcyBHYW1lcGFkU3RhdGUge1xuXHRidXR0b25TdGF0ZTogQnV0dG9uU3RhdGU8R2FtZXBhZEJ1dHRvbj4gPSBuZXcgQnV0dG9uU3RhdGUoKVxuXHRzdGlja1N0YXRlOiBNYXA8R2FtZXBhZFN0aWNrLCBWZWMyPiA9IG5ldyBNYXAoKVxufVxuXG5jbGFzcyBGUFNDb3VudGVyIHtcblx0cHJpdmF0ZSBkdHM6IG51bWJlcltdID0gW11cblx0cHJpdmF0ZSB0aW1lcjogbnVtYmVyID0gMFxuXHRmcHM6IG51bWJlciA9IDBcblx0dGljayhkdDogbnVtYmVyKSB7XG5cdFx0dGhpcy5kdHMucHVzaChkdClcblx0XHR0aGlzLnRpbWVyICs9IGR0XG5cdFx0aWYgKHRoaXMudGltZXIgPj0gMSkge1xuXHRcdFx0dGhpcy50aW1lciA9IDBcblx0XHRcdHRoaXMuZnBzID0gTWF0aC5yb3VuZCgxIC8gKHRoaXMuZHRzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gdGhpcy5kdHMubGVuZ3RoKSlcblx0XHRcdHRoaXMuZHRzID0gW11cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKG9wdDoge1xuXHRjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuXHR0b3VjaFRvTW91c2U/OiBib29sZWFuLFxuXHRnYW1lcGFkcz86IFJlY29yZDxzdHJpbmcsIEdhbWVwYWREZWY+LFxuXHRwaXhlbERlbnNpdHk/OiBudW1iZXIsXG5cdG1heEZQUz86IG51bWJlcixcbn0pID0+IHtcblxuXHRpZiAoIW9wdC5jYW52YXMpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIGNhbnZhc1wiKVxuXHR9XG5cblx0Y29uc3Qgc3RhdGUgPSB7XG5cdFx0Y2FudmFzOiBvcHQuY2FudmFzLFxuXHRcdGxvb3BJRDogbnVsbCBhcyBudWxsIHwgbnVtYmVyLFxuXHRcdHN0b3BwZWQ6IGZhbHNlLFxuXHRcdGR0OiAwLFxuXHRcdHRpbWU6IDAsXG5cdFx0cmVhbFRpbWU6IDAsXG5cdFx0ZnBzQ291bnRlcjogbmV3IEZQU0NvdW50ZXIoKSxcblx0XHR0aW1lU2NhbGU6IDEsXG5cdFx0c2tpcFRpbWU6IGZhbHNlLFxuXHRcdG51bUZyYW1lczogMCxcblx0XHRtb3VzZVBvczogbmV3IFZlYzIoMCksXG5cdFx0bW91c2VEZWx0YVBvczogbmV3IFZlYzIoMCksXG5cdFx0a2V5U3RhdGU6IG5ldyBCdXR0b25TdGF0ZTxLZXk+KCksXG5cdFx0bW91c2VTdGF0ZTogbmV3IEJ1dHRvblN0YXRlPE1vdXNlQnV0dG9uPigpLFxuXHRcdG1lcmdlZEdhbWVwYWRTdGF0ZTogbmV3IEdhbWVwYWRTdGF0ZSgpLFxuXHRcdGdhbWVwYWRTdGF0ZXM6IG5ldyBNYXA8bnVtYmVyLCBHYW1lcGFkU3RhdGU+KCksXG5cdFx0Z2FtZXBhZHM6IFtdIGFzIEtHYW1lUGFkW10sXG5cdFx0Y2hhcklucHV0dGVkOiBbXSxcblx0XHRpc01vdXNlTW92ZWQ6IGZhbHNlLFxuXHRcdGxhc3RXaWR0aDogb3B0LmNhbnZhcy5vZmZzZXRXaWR0aCxcblx0XHRsYXN0SGVpZ2h0OiBvcHQuY2FudmFzLm9mZnNldEhlaWdodCxcblx0XHRldmVudHM6IG5ldyBFdmVudEhhbmRsZXI8e1xuXHRcdFx0bW91c2VNb3ZlOiBbXSxcblx0XHRcdG1vdXNlRG93bjogW01vdXNlQnV0dG9uXSxcblx0XHRcdG1vdXNlUHJlc3M6IFtNb3VzZUJ1dHRvbl0sXG5cdFx0XHRtb3VzZVJlbGVhc2U6IFtNb3VzZUJ1dHRvbl0sXG5cdFx0XHRjaGFySW5wdXQ6IFtzdHJpbmddLFxuXHRcdFx0a2V5UHJlc3M6IFtLZXldLFxuXHRcdFx0a2V5RG93bjogW0tleV0sXG5cdFx0XHRrZXlQcmVzc1JlcGVhdDogW0tleV0sXG5cdFx0XHRrZXlSZWxlYXNlOiBbS2V5XSxcblx0XHRcdHRvdWNoU3RhcnQ6IFtWZWMyLCBUb3VjaF0sXG5cdFx0XHR0b3VjaE1vdmU6IFtWZWMyLCBUb3VjaF0sXG5cdFx0XHR0b3VjaEVuZDogW1ZlYzIsIFRvdWNoXSxcblx0XHRcdGdhbWVwYWRCdXR0b25Eb3duOiBbc3RyaW5nXSxcblx0XHRcdGdhbWVwYWRCdXR0b25QcmVzczogW3N0cmluZ10sXG5cdFx0XHRnYW1lcGFkQnV0dG9uUmVsZWFzZTogW3N0cmluZ10sXG5cdFx0XHRnYW1lcGFkU3RpY2s6IFtzdHJpbmcsIFZlYzJdLFxuXHRcdFx0Z2FtZXBhZENvbm5lY3Q6IFtLR2FtZVBhZF0sXG5cdFx0XHRnYW1lcGFkRGlzY29ubmVjdDogW0tHYW1lUGFkXSxcblx0XHRcdHNjcm9sbDogW1ZlYzJdLFxuXHRcdFx0aGlkZTogW10sXG5cdFx0XHRzaG93OiBbXSxcblx0XHRcdHJlc2l6ZTogW10sXG5cdFx0XHRpbnB1dDogW10sXG5cdFx0fT4oKSxcblx0fVxuXG5cdGZ1bmN0aW9uIGR0KCkge1xuXHRcdHJldHVybiBzdGF0ZS5kdCAqIHN0YXRlLnRpbWVTY2FsZVxuXHR9XG5cblx0ZnVuY3Rpb24gdGltZSgpIHtcblx0XHRyZXR1cm4gc3RhdGUudGltZVxuXHR9XG5cblx0ZnVuY3Rpb24gZnBzKCkge1xuXHRcdHJldHVybiBzdGF0ZS5mcHNDb3VudGVyLmZwc1xuXHR9XG5cblx0ZnVuY3Rpb24gbnVtRnJhbWVzKCkge1xuXHRcdHJldHVybiBzdGF0ZS5udW1GcmFtZXNcblx0fVxuXG5cdGZ1bmN0aW9uIHNjcmVlbnNob3QoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gc3RhdGUuY2FudmFzLnRvRGF0YVVSTCgpXG5cdH1cblxuXHRmdW5jdGlvbiBzZXRDdXJzb3IoYzogQ3Vyc29yKTogdm9pZCB7XG5cdFx0c3RhdGUuY2FudmFzLnN0eWxlLmN1cnNvciA9IGNcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEN1cnNvcigpOiBDdXJzb3Ige1xuXHRcdHJldHVybiBzdGF0ZS5jYW52YXMuc3R5bGUuY3Vyc29yXG5cdH1cblxuXHRmdW5jdGlvbiBzZXRDdXJzb3JMb2NrZWQoYjogYm9vbGVhbik6IHZvaWQge1xuXHRcdGlmIChiKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCByZXMgPSBzdGF0ZS5jYW52YXMucmVxdWVzdFBvaW50ZXJMb2NrKCkgYXMgdW5rbm93biBhcyBQcm9taXNlPHZvaWQ+XG5cdFx0XHRcdGlmIChyZXMuY2F0Y2gpIHtcblx0XHRcdFx0XHRyZXMuY2F0Y2goKGUpID0+IGNvbnNvbGUuZXJyb3IoZSkpXG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5leGl0UG9pbnRlckxvY2soKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGlzQ3Vyc29yTG9ja2VkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIWRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudFxuXHR9XG5cblx0Ly8gd3JhcHBlcnMgYXJvdW5kIGZ1bGwgc2NyZWVuIGZ1bmN0aW9ucyB0byB3b3JrIGFjcm9zcyBicm93c2Vyc1xuXHRmdW5jdGlvbiBlbnRlckZ1bGxzY3JlZW4oZWw6IEhUTUxFbGVtZW50KSB7XG5cdFx0aWYgKGVsLnJlcXVlc3RGdWxsc2NyZWVuKSBlbC5yZXF1ZXN0RnVsbHNjcmVlbigpXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdGVsc2UgaWYgKGVsLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSBlbC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpXG5cdH1cblxuXHRmdW5jdGlvbiBleGl0RnVsbHNjcmVlbigpIHtcblx0XHRpZiAoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKClcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0ZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxTY3JlZW4pIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsU2NyZWVuKClcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEZ1bGxzY3JlZW5FbGVtZW50KCk6IEVsZW1lbnQgfCB2b2lkIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnRcblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdHx8IGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRGdWxsc2NyZWVuKGY6IGJvb2xlYW4gPSB0cnVlKSB7XG5cdFx0aWYgKGYpIHtcblx0XHRcdGVudGVyRnVsbHNjcmVlbihzdGF0ZS5jYW52YXMpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4aXRGdWxsc2NyZWVuKClcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBpc0Z1bGxzY3JlZW4oKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIEJvb2xlYW4oZ2V0RnVsbHNjcmVlbkVsZW1lbnQoKSlcblx0fVxuXG5cdGZ1bmN0aW9uIHF1aXQoKSB7XG5cdFx0c3RhdGUuc3RvcHBlZCA9IHRydWVcblx0XHRmb3IgKGNvbnN0IG5hbWUgaW4gY2FudmFzRXZlbnRzKSB7XG5cdFx0XHRzdGF0ZS5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBjYW52YXNFdmVudHNbbmFtZV0pXG5cdFx0fVxuXHRcdGZvciAoY29uc3QgbmFtZSBpbiBkb2NFdmVudHMpIHtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgZG9jRXZlbnRzW25hbWVdKVxuXHRcdH1cblx0XHRmb3IgKGNvbnN0IG5hbWUgaW4gd2luRXZlbnRzKSB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3aW5FdmVudHNbbmFtZV0pXG5cdFx0fVxuXHRcdHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuXHR9XG5cblx0ZnVuY3Rpb24gcnVuKGFjdGlvbjogKCkgPT4gdm9pZCkge1xuXG5cdFx0aWYgKHN0YXRlLmxvb3BJRCAhPT0gbnVsbCkge1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoc3RhdGUubG9vcElEKVxuXHRcdH1cblxuXHRcdGxldCBhY2N1bXVsYXRlZER0ID0gMFxuXG5cdFx0Y29uc3QgZnJhbWUgPSAodDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdGlmIChzdGF0ZS5zdG9wcGVkKSByZXR1cm5cblxuXHRcdFx0Ly8gVE9ETzogYWxsb3cgYmFja2dyb3VuZCBhY3Rpb25zP1xuXHRcdFx0aWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSAhPT0gXCJ2aXNpYmxlXCIpIHtcblx0XHRcdFx0c3RhdGUubG9vcElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKVxuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbG9vcFRpbWUgPSB0IC8gMTAwMFxuXHRcdFx0Y29uc3QgcmVhbER0ID0gbG9vcFRpbWUgLSBzdGF0ZS5yZWFsVGltZVxuXHRcdFx0Y29uc3QgZGVzaXJlZER0ID0gb3B0Lm1heEZQUyA/IDEgLyBvcHQubWF4RlBTIDogMFxuXG5cdFx0XHRzdGF0ZS5yZWFsVGltZSA9IGxvb3BUaW1lXG5cdFx0XHRhY2N1bXVsYXRlZER0ICs9IHJlYWxEdFxuXG5cdFx0XHRpZiAoYWNjdW11bGF0ZWREdCA+IGRlc2lyZWREdCkge1xuXHRcdFx0XHRpZiAoIXN0YXRlLnNraXBUaW1lKSB7XG5cdFx0XHRcdFx0c3RhdGUuZHQgPSBhY2N1bXVsYXRlZER0XG5cdFx0XHRcdFx0c3RhdGUudGltZSArPSBkdCgpXG5cdFx0XHRcdFx0c3RhdGUuZnBzQ291bnRlci50aWNrKHN0YXRlLmR0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdGFjY3VtdWxhdGVkRHQgPSAwXG5cdFx0XHRcdHN0YXRlLnNraXBUaW1lID0gZmFsc2Vcblx0XHRcdFx0c3RhdGUubnVtRnJhbWVzKytcblx0XHRcdFx0cHJvY2Vzc0lucHV0KClcblx0XHRcdFx0YWN0aW9uKClcblx0XHRcdFx0cmVzZXRJbnB1dCgpXG5cdFx0XHR9XG5cblx0XHRcdHN0YXRlLmxvb3BJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSlcblxuXHRcdH1cblxuXHRcdGZyYW1lKDApXG5cblx0fVxuXG5cdGZ1bmN0aW9uIGlzVG91Y2hzY3JlZW4oKSB7XG5cdFx0cmV0dXJuIChcIm9udG91Y2hzdGFydFwiIGluIHdpbmRvdykgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuXHR9XG5cblx0ZnVuY3Rpb24gbW91c2VQb3MoKTogVmVjMiB7XG5cdFx0cmV0dXJuIHN0YXRlLm1vdXNlUG9zLmNsb25lKClcblx0fVxuXG5cdGZ1bmN0aW9uIG1vdXNlRGVsdGFQb3MoKTogVmVjMiB7XG5cdFx0cmV0dXJuIHN0YXRlLm1vdXNlRGVsdGFQb3MuY2xvbmUoKVxuXHR9XG5cblx0ZnVuY3Rpb24gaXNNb3VzZVByZXNzZWQobTogTW91c2VCdXR0b24gPSBcImxlZnRcIik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBzdGF0ZS5tb3VzZVN0YXRlLnByZXNzZWQuaGFzKG0pXG5cdH1cblxuXHRmdW5jdGlvbiBpc01vdXNlRG93bihtOiBNb3VzZUJ1dHRvbiA9IFwibGVmdFwiKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHN0YXRlLm1vdXNlU3RhdGUuZG93bi5oYXMobSlcblx0fVxuXG5cdGZ1bmN0aW9uIGlzTW91c2VSZWxlYXNlZChtOiBNb3VzZUJ1dHRvbiA9IFwibGVmdFwiKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHN0YXRlLm1vdXNlU3RhdGUucmVsZWFzZWQuaGFzKG0pXG5cdH1cblxuXHRmdW5jdGlvbiBpc01vdXNlTW92ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHN0YXRlLmlzTW91c2VNb3ZlZFxuXHR9XG5cblx0ZnVuY3Rpb24gaXNLZXlQcmVzc2VkKGs/OiBLZXkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gayA9PT0gdW5kZWZpbmVkXG5cdFx0XHQ/IHN0YXRlLmtleVN0YXRlLnByZXNzZWQuc2l6ZSA+IDBcblx0XHRcdDogc3RhdGUua2V5U3RhdGUucHJlc3NlZC5oYXMoaylcblx0fVxuXG5cdGZ1bmN0aW9uIGlzS2V5UHJlc3NlZFJlcGVhdChrPzogS2V5KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGsgPT09IHVuZGVmaW5lZFxuXHRcdFx0PyBzdGF0ZS5rZXlTdGF0ZS5wcmVzc2VkUmVwZWF0LnNpemUgPiAwXG5cdFx0XHQ6IHN0YXRlLmtleVN0YXRlLnByZXNzZWRSZXBlYXQuaGFzKGspXG5cdH1cblxuXHRmdW5jdGlvbiBpc0tleURvd24oaz86IEtleSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBrID09PSB1bmRlZmluZWRcblx0XHRcdD8gc3RhdGUua2V5U3RhdGUuZG93bi5zaXplID4gMFxuXHRcdFx0OiBzdGF0ZS5rZXlTdGF0ZS5kb3duLmhhcyhrKVxuXHR9XG5cblx0ZnVuY3Rpb24gaXNLZXlSZWxlYXNlZChrPzogS2V5KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGsgPT09IHVuZGVmaW5lZFxuXHRcdFx0PyBzdGF0ZS5rZXlTdGF0ZS5yZWxlYXNlZC5zaXplID4gMFxuXHRcdFx0OiBzdGF0ZS5rZXlTdGF0ZS5yZWxlYXNlZC5oYXMoaylcblx0fVxuXG5cdGZ1bmN0aW9uIGlzR2FtZXBhZEJ1dHRvblByZXNzZWQoYnRuPzogR2FtZXBhZEJ1dHRvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBidG4gPT09IHVuZGVmaW5lZFxuXHRcdFx0PyBzdGF0ZS5tZXJnZWRHYW1lcGFkU3RhdGUuYnV0dG9uU3RhdGUucHJlc3NlZC5zaXplID4gMFxuXHRcdFx0OiBzdGF0ZS5tZXJnZWRHYW1lcGFkU3RhdGUuYnV0dG9uU3RhdGUucHJlc3NlZC5oYXMoYnRuKVxuXHR9XG5cblx0ZnVuY3Rpb24gaXNHYW1lcGFkQnV0dG9uRG93bihidG4/OiBHYW1lcGFkQnV0dG9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGJ0biA9PT0gdW5kZWZpbmVkXG5cdFx0XHQ/IHN0YXRlLm1lcmdlZEdhbWVwYWRTdGF0ZS5idXR0b25TdGF0ZS5kb3duLnNpemUgPiAwXG5cdFx0XHQ6IHN0YXRlLm1lcmdlZEdhbWVwYWRTdGF0ZS5idXR0b25TdGF0ZS5kb3duLmhhcyhidG4pXG5cdH1cblxuXHRmdW5jdGlvbiBpc0dhbWVwYWRCdXR0b25SZWxlYXNlZChidG4/OiBHYW1lcGFkQnV0dG9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGJ0biA9PT0gdW5kZWZpbmVkXG5cdFx0XHQ/IHN0YXRlLm1lcmdlZEdhbWVwYWRTdGF0ZS5idXR0b25TdGF0ZS5yZWxlYXNlZC5zaXplID4gMFxuXHRcdFx0OiBzdGF0ZS5tZXJnZWRHYW1lcGFkU3RhdGUuYnV0dG9uU3RhdGUucmVsZWFzZWQuaGFzKGJ0bilcblx0fVxuXG5cdGZ1bmN0aW9uIG9uUmVzaXplKGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcInJlc2l6ZVwiLCBhY3Rpb24pXG5cdH1cblxuXHQvLyBpbnB1dCBjYWxsYmFja3Ncblx0Y29uc3Qgb25LZXlEb3duID0gb3ZlcmxvYWQyKChhY3Rpb246IChrZXk6IEtleSkgPT4gdm9pZCkgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJrZXlEb3duXCIsIGFjdGlvbilcblx0fSwgKGtleTogS2V5LCBhY3Rpb246IChrZXk6IEtleSkgPT4gdm9pZCkgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJrZXlEb3duXCIsIChrKSA9PiBrID09PSBrZXkgJiYgYWN0aW9uKGtleSkpXG5cdH0pXG5cblx0Y29uc3Qgb25LZXlQcmVzcyA9IG92ZXJsb2FkMigoYWN0aW9uOiAoa2V5OiBLZXkpID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwia2V5UHJlc3NcIiwgYWN0aW9uKVxuXHR9LCAoa2V5OiBLZXksIGFjdGlvbjogKGtleTogS2V5KSA9PiB2b2lkKSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcImtleVByZXNzXCIsIChrKSA9PiBrID09PSBrZXkgJiYgYWN0aW9uKGtleSkpXG5cdH0pXG5cblx0Y29uc3Qgb25LZXlQcmVzc1JlcGVhdCA9IG92ZXJsb2FkMigoYWN0aW9uOiAoa2V5OiBLZXkpID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwia2V5UHJlc3NSZXBlYXRcIiwgYWN0aW9uKVxuXHR9LCAoa2V5OiBLZXksIGFjdGlvbjogKGtleTogS2V5KSA9PiB2b2lkKSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcImtleVByZXNzUmVwZWF0XCIsIChrKSA9PiBrID09PSBrZXkgJiYgYWN0aW9uKGtleSkpXG5cdH0pXG5cblx0Y29uc3Qgb25LZXlSZWxlYXNlID0gb3ZlcmxvYWQyKChhY3Rpb246IChrZXk6IEtleSkgPT4gdm9pZCkgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJrZXlSZWxlYXNlXCIsIGFjdGlvbilcblx0fSwgKGtleTogS2V5LCBhY3Rpb246IChrZXk6IEtleSkgPT4gdm9pZCkgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJrZXlSZWxlYXNlXCIsIChrKSA9PiBrID09PSBrZXkgJiYgYWN0aW9uKGtleSkpXG5cdH0pXG5cblx0Y29uc3Qgb25Nb3VzZURvd24gPSBvdmVybG9hZDIoKGFjdGlvbjogKG06IE1vdXNlQnV0dG9uKSA9PiB2b2lkKSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcIm1vdXNlRG93blwiLCAobSkgPT4gYWN0aW9uKG0pKVxuXHR9LCAobW91c2U6IE1vdXNlQnV0dG9uLCBhY3Rpb246IChtOiBNb3VzZUJ1dHRvbikgPT4gdm9pZCkgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJtb3VzZURvd25cIiwgKG0pID0+IG0gPT09IG1vdXNlICYmIGFjdGlvbihtKSlcblx0fSlcblxuXHRjb25zdCBvbk1vdXNlUHJlc3MgPSBvdmVybG9hZDIoKGFjdGlvbjogKG06IE1vdXNlQnV0dG9uKSA9PiB2b2lkKSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcIm1vdXNlUHJlc3NcIiwgKG0pID0+IGFjdGlvbihtKSlcblx0fSwgKG1vdXNlOiBNb3VzZUJ1dHRvbiwgYWN0aW9uOiAobTogTW91c2VCdXR0b24pID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwibW91c2VQcmVzc1wiLCAobSkgPT4gbSA9PT0gbW91c2UgJiYgYWN0aW9uKG0pKVxuXHR9KVxuXG5cdGNvbnN0IG9uTW91c2VSZWxlYXNlID0gb3ZlcmxvYWQyKChhY3Rpb246IChtOiBNb3VzZUJ1dHRvbikgPT4gdm9pZCkgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJtb3VzZVJlbGVhc2VcIiwgKG0pID0+IGFjdGlvbihtKSlcblx0fSwgKG1vdXNlOiBNb3VzZUJ1dHRvbiwgYWN0aW9uOiAobTogTW91c2VCdXR0b24pID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwibW91c2VSZWxlYXNlXCIsIChtKSA9PiBtID09PSBtb3VzZSAmJiBhY3Rpb24obSkpXG5cdH0pXG5cblx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoZjogKHBvczogVmVjMiwgZHBvczogVmVjMikgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcIm1vdXNlTW92ZVwiLCAoKSA9PiBmKG1vdXNlUG9zKCksIG1vdXNlRGVsdGFQb3MoKSkpXG5cdH1cblxuXHRmdW5jdGlvbiBvbkNoYXJJbnB1dChhY3Rpb246IChjaDogc3RyaW5nKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwiY2hhcklucHV0XCIsIGFjdGlvbilcblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hTdGFydChmOiAocG9zOiBWZWMyLCB0OiBUb3VjaCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcInRvdWNoU3RhcnRcIiwgZilcblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGY6IChwb3M6IFZlYzIsIHQ6IFRvdWNoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwidG91Y2hNb3ZlXCIsIGYpXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoRW5kKGY6IChwb3M6IFZlYzIsIHQ6IFRvdWNoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwidG91Y2hFbmRcIiwgZilcblx0fVxuXG5cdGZ1bmN0aW9uIG9uU2Nyb2xsKGFjdGlvbjogKGRlbHRhOiBWZWMyKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwic2Nyb2xsXCIsIGFjdGlvbilcblx0fVxuXG5cdGZ1bmN0aW9uIG9uSGlkZShhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJoaWRlXCIsIGFjdGlvbilcblx0fVxuXG5cdGZ1bmN0aW9uIG9uU2hvdyhhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJzaG93XCIsIGFjdGlvbilcblx0fVxuXG5cdGZ1bmN0aW9uIG9uR2FtZXBhZEJ1dHRvbkRvd24oYnRuOiBHYW1lcGFkQnV0dG9uIHwgKChidG46IEdhbWVwYWRCdXR0b24pID0+IHZvaWQpLCBhY3Rpb24/OiAoYnRuOiBHYW1lcGFkQnV0dG9uKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRpZiAodHlwZW9mIGJ0biA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwiZ2FtZXBhZEJ1dHRvbkRvd25cIiwgYnRuKVxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGJ0biA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgYWN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJnYW1lcGFkQnV0dG9uRG93blwiLCAoYikgPT4gYiA9PT0gYnRuICYmIGFjdGlvbihidG4pKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG9uR2FtZXBhZEJ1dHRvblByZXNzKGJ0bjogR2FtZXBhZEJ1dHRvbiB8ICgoYnRuOiBHYW1lcGFkQnV0dG9uKSA9PiB2b2lkKSwgYWN0aW9uPzogKGJ0bjogR2FtZXBhZEJ1dHRvbikgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0aWYgKHR5cGVvZiBidG4gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcImdhbWVwYWRCdXR0b25QcmVzc1wiLCBidG4pXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYnRuID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBhY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0cmV0dXJuIHN0YXRlLmV2ZW50cy5vbihcImdhbWVwYWRCdXR0b25QcmVzc1wiLCAoYikgPT4gYiA9PT0gYnRuICYmIGFjdGlvbihidG4pKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG9uR2FtZXBhZEJ1dHRvblJlbGVhc2UoYnRuOiBHYW1lcGFkQnV0dG9uIHwgKChidG46IEdhbWVwYWRCdXR0b24pID0+IHZvaWQpLCBhY3Rpb24/OiAoYnRuOiBHYW1lcGFkQnV0dG9uKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRpZiAodHlwZW9mIGJ0biA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwiZ2FtZXBhZEJ1dHRvblJlbGVhc2VcIiwgYnRuKVxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGJ0biA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgYWN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHJldHVybiBzdGF0ZS5ldmVudHMub24oXCJnYW1lcGFkQnV0dG9uUmVsZWFzZVwiLCAoYikgPT4gYiA9PT0gYnRuICYmIGFjdGlvbihidG4pKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG9uR2FtZXBhZFN0aWNrKHN0aWNrOiBHYW1lcGFkU3RpY2ssIGFjdGlvbjogKHZhbHVlOiBWZWMyKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRzLm9uKFwiZ2FtZXBhZFN0aWNrXCIsICgoYTogc3RyaW5nLCB2OiBWZWMyKSA9PiBhID09PSBzdGljayAmJiBhY3Rpb24odikpKVxuXHR9XG5cblx0ZnVuY3Rpb24gb25HYW1lcGFkQ29ubmVjdChhY3Rpb246IChnYW1lcGFkOiBLR2FtZVBhZCkgPT4gdm9pZCkge1xuXHRcdHN0YXRlLmV2ZW50cy5vbihcImdhbWVwYWRDb25uZWN0XCIsIGFjdGlvbilcblx0fVxuXG5cdGZ1bmN0aW9uIG9uR2FtZXBhZERpc2Nvbm5lY3QoYWN0aW9uOiAoZ2FtZXBhZDogS0dhbWVQYWQpID0+IHZvaWQpIHtcblx0XHRzdGF0ZS5ldmVudHMub24oXCJnYW1lcGFkRGlzY29ubmVjdFwiLCBhY3Rpb24pXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRHYW1lcGFkU3RpY2soc3RpY2s6IEdhbWVwYWRTdGljayk6IFZlYzIge1xuXHRcdHJldHVybiBzdGF0ZS5tZXJnZWRHYW1lcGFkU3RhdGUuc3RpY2tTdGF0ZS5nZXQoc3RpY2spIHx8IG5ldyBWZWMyKDApXG5cdH1cblxuXHRmdW5jdGlvbiBjaGFySW5wdXR0ZWQoKTogc3RyaW5nW10ge1xuXHRcdHJldHVybiBbLi4uc3RhdGUuY2hhcklucHV0dGVkXVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0R2FtZXBhZHMoKTogS0dhbWVQYWRbXSB7XG5cdFx0cmV0dXJuIFsuLi5zdGF0ZS5nYW1lcGFkc11cblx0fVxuXG5cdGZ1bmN0aW9uIHByb2Nlc3NJbnB1dCgpIHtcblx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcImlucHV0XCIpXG5cdFx0c3RhdGUua2V5U3RhdGUuZG93bi5mb3JFYWNoKChrKSA9PiBzdGF0ZS5ldmVudHMudHJpZ2dlcihcImtleURvd25cIiwgaykpXG5cdFx0c3RhdGUubW91c2VTdGF0ZS5kb3duLmZvckVhY2goKGspID0+IHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwibW91c2VEb3duXCIsIGspKVxuXHRcdHByb2Nlc3NHYW1lcGFkKClcblx0fVxuXG5cdGZ1bmN0aW9uIHJlc2V0SW5wdXQoKSB7XG5cdFx0c3RhdGUua2V5U3RhdGUudXBkYXRlKClcblx0XHRzdGF0ZS5tb3VzZVN0YXRlLnVwZGF0ZSgpXG5cdFx0c3RhdGUubWVyZ2VkR2FtZXBhZFN0YXRlLmJ1dHRvblN0YXRlLnVwZGF0ZSgpXG5cdFx0c3RhdGUubWVyZ2VkR2FtZXBhZFN0YXRlLnN0aWNrU3RhdGUuZm9yRWFjaCgodiwgaykgPT4ge1xuXHRcdFx0c3RhdGUubWVyZ2VkR2FtZXBhZFN0YXRlLnN0aWNrU3RhdGUuc2V0KGssIG5ldyBWZWMyKDApKVxuXHRcdH0pXG5cdFx0c3RhdGUuY2hhcklucHV0dGVkID0gW11cblx0XHRzdGF0ZS5pc01vdXNlTW92ZWQgPSBmYWxzZVxuXG5cdFx0c3RhdGUuZ2FtZXBhZFN0YXRlcy5mb3JFYWNoKChzKSA9PiB7XG5cdFx0XHRzLmJ1dHRvblN0YXRlLnVwZGF0ZSgpXG5cdFx0XHRzLnN0aWNrU3RhdGUuZm9yRWFjaCgodiwgaykgPT4ge1xuXHRcdFx0XHRzLnN0aWNrU3RhdGUuc2V0KGssIG5ldyBWZWMyKDApKVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVnaXN0ZXJHYW1lcGFkKGJyb3dzZXJHYW1lcGFkOiBHYW1lcGFkKSB7XG5cblx0XHRjb25zdCBnYW1lcGFkID0ge1xuXHRcdFx0aW5kZXg6IGJyb3dzZXJHYW1lcGFkLmluZGV4LFxuXHRcdFx0aXNQcmVzc2VkOiAoYnRuOiBHYW1lcGFkQnV0dG9uKSA9PiB7XG5cdFx0XHRcdHJldHVybiBzdGF0ZS5nYW1lcGFkU3RhdGVzLmdldChicm93c2VyR2FtZXBhZC5pbmRleCkuYnV0dG9uU3RhdGUucHJlc3NlZC5oYXMoYnRuKVxuXHRcdFx0fSxcblx0XHRcdGlzRG93bjogKGJ0bjogR2FtZXBhZEJ1dHRvbikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gc3RhdGUuZ2FtZXBhZFN0YXRlcy5nZXQoYnJvd3NlckdhbWVwYWQuaW5kZXgpLmJ1dHRvblN0YXRlLmRvd24uaGFzKGJ0bilcblx0XHRcdH0sXG5cdFx0XHRpc1JlbGVhc2VkOiAoYnRuOiBHYW1lcGFkQnV0dG9uKSA9PiB7XG5cdFx0XHRcdHJldHVybiBzdGF0ZS5nYW1lcGFkU3RhdGVzLmdldChicm93c2VyR2FtZXBhZC5pbmRleCkuYnV0dG9uU3RhdGUucmVsZWFzZWQuaGFzKGJ0bilcblx0XHRcdH0sXG5cdFx0XHRnZXRTdGljazogKHN0aWNrOiBHYW1lcGFkU3RpY2spID0+IHtcblx0XHRcdFx0cmV0dXJuIHN0YXRlLmdhbWVwYWRTdGF0ZXMuZ2V0KGJyb3dzZXJHYW1lcGFkLmluZGV4KS5zdGlja1N0YXRlLmdldChzdGljaylcblx0XHRcdH0sXG5cdFx0fVxuXG5cdFx0c3RhdGUuZ2FtZXBhZHMucHVzaChnYW1lcGFkKVxuXG5cdFx0c3RhdGUuZ2FtZXBhZFN0YXRlcy5zZXQoYnJvd3NlckdhbWVwYWQuaW5kZXgsIHtcblx0XHRcdGJ1dHRvblN0YXRlOiBuZXcgQnV0dG9uU3RhdGUoKSxcblx0XHRcdHN0aWNrU3RhdGU6IG5ldyBNYXAoW1xuXHRcdFx0XHRbXCJsZWZ0XCIsIG5ldyBWZWMyKDApXSxcblx0XHRcdFx0W1wicmlnaHRcIiwgbmV3IFZlYzIoMCldLFxuXHRcdFx0XSksXG5cdFx0fSlcblxuXHRcdHJldHVybiBnYW1lcGFkXG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZUdhbWVwYWQoZ2FtZXBhZDogR2FtZXBhZCkge1xuXHRcdHN0YXRlLmdhbWVwYWRzID0gc3RhdGUuZ2FtZXBhZHMuZmlsdGVyKChnKSA9PiBnLmluZGV4ICE9PSBnYW1lcGFkLmluZGV4KVxuXHRcdHN0YXRlLmdhbWVwYWRTdGF0ZXMuZGVsZXRlKGdhbWVwYWQuaW5kZXgpXG5cdH1cblxuXHRmdW5jdGlvbiBwcm9jZXNzR2FtZXBhZCgpIHtcblxuXHRcdGZvciAoY29uc3QgYnJvd3NlckdhbWVwYWQgb2YgbmF2aWdhdG9yLmdldEdhbWVwYWRzKCkpIHtcblx0XHRcdGlmIChicm93c2VyR2FtZXBhZCAmJiAhc3RhdGUuZ2FtZXBhZFN0YXRlcy5oYXMoYnJvd3NlckdhbWVwYWQuaW5kZXgpKSB7XG5cdFx0XHRcdHJlZ2lzdGVyR2FtZXBhZChicm93c2VyR2FtZXBhZClcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGdhbWVwYWQgb2Ygc3RhdGUuZ2FtZXBhZHMpIHtcblxuXHRcdFx0Y29uc3QgYnJvd3NlckdhbWVwYWQgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKVtnYW1lcGFkLmluZGV4XVxuXHRcdFx0Y29uc3QgY3VzdG9tTWFwID0gb3B0LmdhbWVwYWRzID8/IHt9XG5cdFx0XHRjb25zdCBtYXAgPSBjdXN0b21NYXBbYnJvd3NlckdhbWVwYWQuaWRdID8/IEdBTUVQQURfTUFQW2Jyb3dzZXJHYW1lcGFkLmlkXSA/PyBHQU1FUEFEX01BUFtcImRlZmF1bHRcIl1cblx0XHRcdGNvbnN0IGdhbWVwYWRTdGF0ZSA9IHN0YXRlLmdhbWVwYWRTdGF0ZXMuZ2V0KGdhbWVwYWQuaW5kZXgpXG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYnJvd3NlckdhbWVwYWQuYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoYnJvd3NlckdhbWVwYWQuYnV0dG9uc1tpXS5wcmVzc2VkKSB7XG5cdFx0XHRcdFx0aWYgKCFnYW1lcGFkU3RhdGUuYnV0dG9uU3RhdGUuZG93bi5oYXMobWFwLmJ1dHRvbnNbaV0pKSB7XG5cdFx0XHRcdFx0XHRzdGF0ZS5tZXJnZWRHYW1lcGFkU3RhdGUuYnV0dG9uU3RhdGUucHJlc3MobWFwLmJ1dHRvbnNbaV0pXG5cdFx0XHRcdFx0XHRnYW1lcGFkU3RhdGUuYnV0dG9uU3RhdGUucHJlc3MobWFwLmJ1dHRvbnNbaV0pXG5cdFx0XHRcdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcImdhbWVwYWRCdXR0b25QcmVzc1wiLCBtYXAuYnV0dG9uc1tpXSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJnYW1lcGFkQnV0dG9uRG93blwiLCBtYXAuYnV0dG9uc1tpXSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoZ2FtZXBhZFN0YXRlLmJ1dHRvblN0YXRlLmRvd24uaGFzKG1hcC5idXR0b25zW2ldKSkge1xuXHRcdFx0XHRcdFx0c3RhdGUubWVyZ2VkR2FtZXBhZFN0YXRlLmJ1dHRvblN0YXRlLnJlbGVhc2UobWFwLmJ1dHRvbnNbaV0pXG5cdFx0XHRcdFx0XHRnYW1lcGFkU3RhdGUuYnV0dG9uU3RhdGUucmVsZWFzZShtYXAuYnV0dG9uc1tpXSlcblx0XHRcdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwiZ2FtZXBhZEJ1dHRvblJlbGVhc2VcIiwgbWFwLmJ1dHRvbnNbaV0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3Qgc3RpY2tOYW1lIGluIG1hcC5zdGlja3MpIHtcblx0XHRcdFx0Y29uc3Qgc3RpY2sgPSBtYXAuc3RpY2tzW3N0aWNrTmFtZV1cblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBuZXcgVmVjMihcblx0XHRcdFx0XHRicm93c2VyR2FtZXBhZC5heGVzW3N0aWNrLnhdLFxuXHRcdFx0XHRcdGJyb3dzZXJHYW1lcGFkLmF4ZXNbc3RpY2sueV0sXG5cdFx0XHRcdClcblx0XHRcdFx0Z2FtZXBhZFN0YXRlLnN0aWNrU3RhdGUuc2V0KHN0aWNrTmFtZSBhcyBHYW1lcGFkU3RpY2ssIHZhbHVlKVxuXHRcdFx0XHRzdGF0ZS5tZXJnZWRHYW1lcGFkU3RhdGUuc3RpY2tTdGF0ZS5zZXQoc3RpY2tOYW1lIGFzIEdhbWVwYWRTdGljaywgdmFsdWUpXG5cdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwiZ2FtZXBhZFN0aWNrXCIsIHN0aWNrTmFtZSwgdmFsdWUpXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdHR5cGUgRXZlbnRMaXN0PE0+ID0ge1xuXHRcdFtldmVudCBpbiBrZXlvZiBNXT86IChldmVudDogTVtldmVudF0pID0+IHZvaWRcblx0fVxuXG5cdGNvbnN0IGNhbnZhc0V2ZW50czogRXZlbnRMaXN0PEhUTUxFbGVtZW50RXZlbnRNYXA+ID0ge31cblx0Y29uc3QgZG9jRXZlbnRzOiBFdmVudExpc3Q8RG9jdW1lbnRFdmVudE1hcD4gPSB7fVxuXHRjb25zdCB3aW5FdmVudHM6IEV2ZW50TGlzdDxXaW5kb3dFdmVudE1hcD4gPSB7fVxuXG5cdGNvbnN0IHBkID0gb3B0LnBpeGVsRGVuc2l0eSB8fCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG5cblx0Y2FudmFzRXZlbnRzLm1vdXNlbW92ZSA9IChlKSA9PiB7XG5cdFx0Y29uc3QgbW91c2VQb3MgPSBuZXcgVmVjMihlLm9mZnNldFgsIGUub2Zmc2V0WSlcblx0XHRjb25zdCBtb3VzZURlbHRhUG9zID0gbmV3IFZlYzIoZS5tb3ZlbWVudFgsIGUubW92ZW1lbnRZKVxuXHRcdGlmIChpc0Z1bGxzY3JlZW4oKSkge1xuXHRcdFx0Y29uc3QgY3cgPSBzdGF0ZS5jYW52YXMud2lkdGggLyBwZFxuXHRcdFx0Y29uc3QgY2ggPSBzdGF0ZS5jYW52YXMuaGVpZ2h0IC8gcGRcblx0XHRcdGNvbnN0IHd3ID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRcdGNvbnN0IHdoID0gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0XHRjb25zdCBydyA9IHd3IC8gd2hcblx0XHRcdGNvbnN0IHJjID0gY3cgLyBjaFxuXHRcdFx0aWYgKHJ3ID4gcmMpIHtcblx0XHRcdFx0Y29uc3QgcmF0aW8gPSB3aCAvIGNoXG5cdFx0XHRcdGNvbnN0IG9mZnNldCA9ICh3dyAtIChjdyAqIHJhdGlvKSkgLyAyXG5cdFx0XHRcdG1vdXNlUG9zLnggPSBtYXAoZS5vZmZzZXRYIC0gb2Zmc2V0LCAwLCBjdyAqIHJhdGlvLCAwLCBjdylcblx0XHRcdFx0bW91c2VQb3MueSA9IG1hcChlLm9mZnNldFksIDAsIGNoICogcmF0aW8sIDAsIGNoKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmF0aW8gPSB3dyAvIGN3XG5cdFx0XHRcdGNvbnN0IG9mZnNldCA9ICh3aCAtIChjaCAqIHJhdGlvKSkgLyAyXG5cdFx0XHRcdG1vdXNlUG9zLnggPSBtYXAoZS5vZmZzZXRYICwgMCwgY3cgKiByYXRpbywgMCwgY3cpXG5cdFx0XHRcdG1vdXNlUG9zLnkgPSBtYXAoZS5vZmZzZXRZIC0gb2Zmc2V0LCAwLCBjaCAqIHJhdGlvLCAwLCBjaClcblx0XHRcdH1cblx0XHR9XG5cdFx0c3RhdGUuZXZlbnRzLm9uT25jZShcImlucHV0XCIsICgpID0+IHtcblx0XHRcdHN0YXRlLmlzTW91c2VNb3ZlZCA9IHRydWVcblx0XHRcdHN0YXRlLm1vdXNlUG9zID0gbW91c2VQb3Ncblx0XHRcdHN0YXRlLm1vdXNlRGVsdGFQb3MgPSBtb3VzZURlbHRhUG9zXG5cdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcIm1vdXNlTW92ZVwiKVxuXHRcdH0pXG5cdH1cblxuXHRjb25zdCBNT1VTRV9CVVRUT05TOiBNb3VzZUJ1dHRvbltdID0gW1xuXHRcdFwibGVmdFwiLFxuXHRcdFwibWlkZGxlXCIsXG5cdFx0XCJyaWdodFwiLFxuXHRcdFwiYmFja1wiLFxuXHRcdFwiZm9yd2FyZFwiLFxuXHRdXG5cblx0Y2FudmFzRXZlbnRzLm1vdXNlZG93biA9IChlKSA9PiB7XG5cdFx0c3RhdGUuZXZlbnRzLm9uT25jZShcImlucHV0XCIsICgpID0+IHtcblx0XHRcdGNvbnN0IG0gPSBNT1VTRV9CVVRUT05TW2UuYnV0dG9uXVxuXHRcdFx0aWYgKCFtKSByZXR1cm5cblx0XHRcdHN0YXRlLm1vdXNlU3RhdGUucHJlc3MobSlcblx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwibW91c2VQcmVzc1wiLCBtKVxuXHRcdH0pXG5cdH1cblxuXHRjYW52YXNFdmVudHMubW91c2V1cCA9IChlKSA9PiB7XG5cdFx0c3RhdGUuZXZlbnRzLm9uT25jZShcImlucHV0XCIsICgpID0+IHtcblx0XHRcdGNvbnN0IG0gPSBNT1VTRV9CVVRUT05TW2UuYnV0dG9uXVxuXHRcdFx0aWYgKCFtKSByZXR1cm5cblx0XHRcdHN0YXRlLm1vdXNlU3RhdGUucmVsZWFzZShtKVxuXHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJtb3VzZVJlbGVhc2VcIiwgbSlcblx0XHR9KVxuXHR9XG5cblx0Y29uc3QgUFJFVkVOVF9ERUZBVUxUX0tFWVMgPSBuZXcgU2V0KFtcblx0XHRcIiBcIixcblx0XHRcIkFycm93TGVmdFwiLFxuXHRcdFwiQXJyb3dSaWdodFwiLFxuXHRcdFwiQXJyb3dVcFwiLFxuXHRcdFwiQXJyb3dEb3duXCIsXG5cdFx0XCJUYWJcIixcblx0XSlcblxuXHQvLyB0cmFuc2xhdGUgdGhlc2Uga2V5IG5hbWVzIHRvIGEgc2ltcGxlciB2ZXJzaW9uXG5cdGNvbnN0IEtFWV9BTElBUyA9IHtcblx0XHRcIkFycm93TGVmdFwiOiBcImxlZnRcIixcblx0XHRcIkFycm93UmlnaHRcIjogXCJyaWdodFwiLFxuXHRcdFwiQXJyb3dVcFwiOiBcInVwXCIsXG5cdFx0XCJBcnJvd0Rvd25cIjogXCJkb3duXCIsXG5cdFx0XCIgXCI6IFwic3BhY2VcIixcblx0fVxuXG5cdGNhbnZhc0V2ZW50cy5rZXlkb3duID0gKGUpID0+IHtcblx0XHRpZiAoUFJFVkVOVF9ERUZBVUxUX0tFWVMuaGFzKGUua2V5KSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0fVxuXHRcdHN0YXRlLmV2ZW50cy5vbk9uY2UoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBrID0gS0VZX0FMSUFTW2Uua2V5XSB8fCBlLmtleS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRpZiAoay5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJjaGFySW5wdXRcIiwgaylcblx0XHRcdFx0c3RhdGUuY2hhcklucHV0dGVkLnB1c2goaylcblx0XHRcdH0gZWxzZSBpZiAoayA9PT0gXCJzcGFjZVwiKSB7XG5cdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwiY2hhcklucHV0XCIsIFwiIFwiKVxuXHRcdFx0XHRzdGF0ZS5jaGFySW5wdXR0ZWQucHVzaChcIiBcIilcblx0XHRcdH1cblx0XHRcdGlmIChlLnJlcGVhdCkge1xuXHRcdFx0XHRzdGF0ZS5rZXlTdGF0ZS5wcmVzc1JlcGVhdChrKVxuXHRcdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcImtleVByZXNzUmVwZWF0XCIsIGspXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdGF0ZS5rZXlTdGF0ZS5wcmVzcyhrKVxuXHRcdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcImtleVByZXNzUmVwZWF0XCIsIGspXG5cdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwia2V5UHJlc3NcIiwgaylcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0Y2FudmFzRXZlbnRzLmtleXVwID0gKGUpID0+IHtcblx0XHRzdGF0ZS5ldmVudHMub25PbmNlKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0Y29uc3QgayA9IEtFWV9BTElBU1tlLmtleV0gfHwgZS5rZXkudG9Mb3dlckNhc2UoKVxuXHRcdFx0c3RhdGUua2V5U3RhdGUucmVsZWFzZShrKVxuXHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJrZXlSZWxlYXNlXCIsIGspXG5cdFx0fSlcblx0fVxuXG5cdC8vIFRPRE86IGhhbmRsZSBhbGwgdG91Y2hlcyBhdCBvbmNlIGluc3RlYWQgb2Ygc2VxdWVudGlhbGx5XG5cdGNhbnZhc0V2ZW50cy50b3VjaHN0YXJ0ID0gKGUpID0+IHtcblx0XHQvLyBkaXNhYmxlIGxvbmcgdGFwIGNvbnRleHQgbWVudVxuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHN0YXRlLmV2ZW50cy5vbk9uY2UoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0XHRjb25zdCB0b3VjaGVzID0gWy4uLmUuY2hhbmdlZFRvdWNoZXNdXG5cdFx0XHRjb25zdCBib3ggPSBzdGF0ZS5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblx0XHRcdGlmIChvcHQudG91Y2hUb01vdXNlICE9PSBmYWxzZSkge1xuXHRcdFx0XHRzdGF0ZS5tb3VzZVBvcyA9IG5ldyBWZWMyKFxuXHRcdFx0XHRcdHRvdWNoZXNbMF0uY2xpZW50WCAtIGJveC54LFxuXHRcdFx0XHRcdHRvdWNoZXNbMF0uY2xpZW50WSAtIGJveC55LFxuXHRcdFx0XHQpXG5cdFx0XHRcdHN0YXRlLm1vdXNlU3RhdGUucHJlc3MoXCJsZWZ0XCIpXG5cdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwibW91c2VQcmVzc1wiLCBcImxlZnRcIilcblx0XHRcdH1cblx0XHRcdHRvdWNoZXMuZm9yRWFjaCgodCkgPT4ge1xuXHRcdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcblx0XHRcdFx0XHRcInRvdWNoU3RhcnRcIixcblx0XHRcdFx0XHRuZXcgVmVjMih0LmNsaWVudFggLSBib3gueCwgdC5jbGllbnRZIC0gYm94LnkpLFxuXHRcdFx0XHRcdHQsXG5cdFx0XHRcdClcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdGNhbnZhc0V2ZW50cy50b3VjaG1vdmUgPSAoZSkgPT4ge1xuXHRcdC8vIGRpc2FibGUgc2Nyb2xsaW5nXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0c3RhdGUuZXZlbnRzLm9uT25jZShcImlucHV0XCIsICgpID0+IHtcblx0XHRcdGNvbnN0IHRvdWNoZXMgPSBbLi4uZS5jaGFuZ2VkVG91Y2hlc11cblx0XHRcdGNvbnN0IGJveCA9IHN0YXRlLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXHRcdFx0aWYgKG9wdC50b3VjaFRvTW91c2UgIT09IGZhbHNlKSB7XG5cdFx0XHRcdHN0YXRlLm1vdXNlUG9zID0gbmV3IFZlYzIoXG5cdFx0XHRcdFx0dG91Y2hlc1swXS5jbGllbnRYIC0gYm94LngsXG5cdFx0XHRcdFx0dG91Y2hlc1swXS5jbGllbnRZIC0gYm94LnksXG5cdFx0XHRcdClcblx0XHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJtb3VzZU1vdmVcIilcblx0XHRcdH1cblx0XHRcdHRvdWNoZXMuZm9yRWFjaCgodCkgPT4ge1xuXHRcdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcblx0XHRcdFx0XHRcInRvdWNoTW92ZVwiLFxuXHRcdFx0XHRcdG5ldyBWZWMyKHQuY2xpZW50WCAtIGJveC54LCB0LmNsaWVudFkgLSBib3gueSksXG5cdFx0XHRcdFx0dCxcblx0XHRcdFx0KVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0Y2FudmFzRXZlbnRzLnRvdWNoZW5kID0gKGUpID0+IHtcblx0XHRzdGF0ZS5ldmVudHMub25PbmNlKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdG91Y2hlcyA9IFsuLi5lLmNoYW5nZWRUb3VjaGVzXVxuXHRcdFx0Y29uc3QgYm94ID0gc3RhdGUuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cdFx0XHRpZiAob3B0LnRvdWNoVG9Nb3VzZSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0c3RhdGUubW91c2VQb3MgPSBuZXcgVmVjMihcblx0XHRcdFx0XHR0b3VjaGVzWzBdLmNsaWVudFggLSBib3gueCxcblx0XHRcdFx0XHR0b3VjaGVzWzBdLmNsaWVudFkgLSBib3gueSxcblx0XHRcdFx0KVxuXHRcdFx0XHRzdGF0ZS5tb3VzZVN0YXRlLnJlbGVhc2UoXCJsZWZ0XCIpXG5cdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwibW91c2VSZWxlYXNlXCIsIFwibGVmdFwiKVxuXHRcdFx0fVxuXHRcdFx0dG91Y2hlcy5mb3JFYWNoKCh0KSA9PiB7XG5cdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFxuXHRcdFx0XHRcdFwidG91Y2hFbmRcIixcblx0XHRcdFx0XHRuZXcgVmVjMih0LmNsaWVudFggLSBib3gueCwgdC5jbGllbnRZIC0gYm94LnkpLFxuXHRcdFx0XHRcdHQsXG5cdFx0XHRcdClcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdGNhbnZhc0V2ZW50cy50b3VjaGNhbmNlbCA9IChlKSA9PiB7XG5cdFx0c3RhdGUuZXZlbnRzLm9uT25jZShcImlucHV0XCIsICgpID0+IHtcblx0XHRcdGNvbnN0IHRvdWNoZXMgPSBbLi4uZS5jaGFuZ2VkVG91Y2hlc11cblx0XHRcdGNvbnN0IGJveCA9IHN0YXRlLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXHRcdFx0aWYgKG9wdC50b3VjaFRvTW91c2UgIT09IGZhbHNlKSB7XG5cdFx0XHRcdHN0YXRlLm1vdXNlUG9zID0gbmV3IFZlYzIoXG5cdFx0XHRcdFx0dG91Y2hlc1swXS5jbGllbnRYIC0gYm94LngsXG5cdFx0XHRcdFx0dG91Y2hlc1swXS5jbGllbnRZIC0gYm94LnksXG5cdFx0XHRcdClcblx0XHRcdFx0c3RhdGUubW91c2VTdGF0ZS5yZWxlYXNlKFwibGVmdFwiKVxuXHRcdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcIm1vdXNlUmVsZWFzZVwiLCBcImxlZnRcIilcblx0XHRcdH1cblx0XHRcdHRvdWNoZXMuZm9yRWFjaCgodCkgPT4ge1xuXHRcdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcblx0XHRcdFx0XHRcInRvdWNoRW5kXCIsXG5cdFx0XHRcdFx0bmV3IFZlYzIodC5jbGllbnRYIC0gYm94LngsIHQuY2xpZW50WSAtIGJveC55KSxcblx0XHRcdFx0XHR0LFxuXHRcdFx0XHQpXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvLyBUT0RPOiBvcHRpb24gdG8gbm90IHByZXZlbnQgZGVmYXVsdD9cblx0Y2FudmFzRXZlbnRzLndoZWVsID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRzdGF0ZS5ldmVudHMub25PbmNlKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJzY3JvbGxcIiwgbmV3IFZlYzIoZS5kZWx0YVgsIGUuZGVsdGFZKSlcblx0XHR9KVxuXHR9XG5cblx0Y2FudmFzRXZlbnRzLmNvbnRleHRtZW51ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKVxuXG5cdGRvY0V2ZW50cy52aXNpYmlsaXR5Y2hhbmdlID0gKCkgPT4ge1xuXHRcdGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiKSB7XG5cdFx0XHQvLyBwcmV2ZW50IGEgc3VyZ2Ugb2YgZHQgd2hlbiBzd2l0Y2ggYmFjayBhZnRlciB0aGUgdGFiIGJlaW5nIGhpZGRlbiBmb3IgYSB3aGlsZVxuXHRcdFx0c3RhdGUuc2tpcFRpbWUgPSB0cnVlXG5cdFx0XHRzdGF0ZS5ldmVudHMudHJpZ2dlcihcInNob3dcIilcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJoaWRlXCIpXG5cdFx0fVxuXHR9XG5cblx0d2luRXZlbnRzLmdhbWVwYWRjb25uZWN0ZWQgPSAoZSkgPT4ge1xuXHRcdGNvbnN0IGtiR2FtZXBhZCA9IHJlZ2lzdGVyR2FtZXBhZChlLmdhbWVwYWQpXG5cdFx0c3RhdGUuZXZlbnRzLm9uT25jZShcImlucHV0XCIsICgpID0+IHtcblx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwiZ2FtZXBhZENvbm5lY3RcIiwga2JHYW1lcGFkKVxuXHRcdH0pXG5cdH1cblxuXHR3aW5FdmVudHMuZ2FtZXBhZGRpc2Nvbm5lY3RlZCA9IChlKSA9PiB7XG5cdFx0Y29uc3Qga2JHYW1lcGFkID0gZ2V0R2FtZXBhZHMoKS5maWx0ZXIoKGcpID0+IGcuaW5kZXggPT09IGUuZ2FtZXBhZC5pbmRleClbMF1cblx0XHRyZW1vdmVHYW1lcGFkKGUuZ2FtZXBhZClcblx0XHRzdGF0ZS5ldmVudHMub25PbmNlKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0c3RhdGUuZXZlbnRzLnRyaWdnZXIoXCJnYW1lcGFkRGlzY29ubmVjdFwiLCBrYkdhbWVwYWQpXG5cdFx0fSlcblx0fVxuXG5cdGZvciAoY29uc3QgbmFtZSBpbiBjYW52YXNFdmVudHMpIHtcblx0XHRzdGF0ZS5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBjYW52YXNFdmVudHNbbmFtZV0pXG5cdH1cblxuXHRmb3IgKGNvbnN0IG5hbWUgaW4gZG9jRXZlbnRzKSB7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBkb2NFdmVudHNbbmFtZV0pXG5cdH1cblxuXHRmb3IgKGNvbnN0IG5hbWUgaW4gd2luRXZlbnRzKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgd2luRXZlbnRzW25hbWVdKVxuXHR9XG5cblx0Y29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcblx0XHRcdGlmIChlbnRyeS50YXJnZXQgIT09IHN0YXRlLmNhbnZhcykgY29udGludWVcblx0XHRcdGlmIChcblx0XHRcdFx0c3RhdGUubGFzdFdpZHRoID09PSBzdGF0ZS5jYW52YXMub2Zmc2V0V2lkdGhcblx0XHRcdFx0JiYgc3RhdGUubGFzdEhlaWdodCA9PT0gc3RhdGUuY2FudmFzLm9mZnNldEhlaWdodFxuXHRcdFx0KSByZXR1cm5cblx0XHRcdHN0YXRlLmxhc3RXaWR0aCA9IHN0YXRlLmNhbnZhcy5vZmZzZXRXaWR0aFxuXHRcdFx0c3RhdGUubGFzdEhlaWdodCA9IHN0YXRlLmNhbnZhcy5vZmZzZXRIZWlnaHRcblx0XHRcdHN0YXRlLmV2ZW50cy5vbk9uY2UoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0XHRcdHN0YXRlLmV2ZW50cy50cmlnZ2VyKFwicmVzaXplXCIpXG5cdFx0XHR9KVxuXHRcdH1cblx0fSlcblxuXHRyZXNpemVPYnNlcnZlci5vYnNlcnZlKHN0YXRlLmNhbnZhcylcblxuXHRyZXR1cm4ge1xuXHRcdGR0LFxuXHRcdHRpbWUsXG5cdFx0cnVuLFxuXHRcdGNhbnZhczogc3RhdGUuY2FudmFzLFxuXHRcdGZwcyxcblx0XHRudW1GcmFtZXMsXG5cdFx0cXVpdCxcblx0XHRzZXRGdWxsc2NyZWVuLFxuXHRcdGlzRnVsbHNjcmVlbixcblx0XHRzZXRDdXJzb3IsXG5cdFx0c2NyZWVuc2hvdCxcblx0XHRnZXRHYW1lcGFkcyxcblx0XHRnZXRDdXJzb3IsXG5cdFx0c2V0Q3Vyc29yTG9ja2VkLFxuXHRcdGlzQ3Vyc29yTG9ja2VkLFxuXHRcdGlzVG91Y2hzY3JlZW4sXG5cdFx0bW91c2VQb3MsXG5cdFx0bW91c2VEZWx0YVBvcyxcblx0XHRpc0tleURvd24sXG5cdFx0aXNLZXlQcmVzc2VkLFxuXHRcdGlzS2V5UHJlc3NlZFJlcGVhdCxcblx0XHRpc0tleVJlbGVhc2VkLFxuXHRcdGlzTW91c2VEb3duLFxuXHRcdGlzTW91c2VQcmVzc2VkLFxuXHRcdGlzTW91c2VSZWxlYXNlZCxcblx0XHRpc01vdXNlTW92ZWQsXG5cdFx0aXNHYW1lcGFkQnV0dG9uUHJlc3NlZCxcblx0XHRpc0dhbWVwYWRCdXR0b25Eb3duLFxuXHRcdGlzR2FtZXBhZEJ1dHRvblJlbGVhc2VkLFxuXHRcdGdldEdhbWVwYWRTdGljayxcblx0XHRjaGFySW5wdXR0ZWQsXG5cdFx0b25SZXNpemUsXG5cdFx0b25LZXlEb3duLFxuXHRcdG9uS2V5UHJlc3MsXG5cdFx0b25LZXlQcmVzc1JlcGVhdCxcblx0XHRvbktleVJlbGVhc2UsXG5cdFx0b25Nb3VzZURvd24sXG5cdFx0b25Nb3VzZVByZXNzLFxuXHRcdG9uTW91c2VSZWxlYXNlLFxuXHRcdG9uTW91c2VNb3ZlLFxuXHRcdG9uQ2hhcklucHV0LFxuXHRcdG9uVG91Y2hTdGFydCxcblx0XHRvblRvdWNoTW92ZSxcblx0XHRvblRvdWNoRW5kLFxuXHRcdG9uU2Nyb2xsLFxuXHRcdG9uSGlkZSxcblx0XHRvblNob3csXG5cdFx0b25HYW1lcGFkQnV0dG9uRG93bixcblx0XHRvbkdhbWVwYWRCdXR0b25QcmVzcyxcblx0XHRvbkdhbWVwYWRCdXR0b25SZWxlYXNlLFxuXHRcdG9uR2FtZXBhZFN0aWNrLFxuXHRcdG9uR2FtZXBhZENvbm5lY3QsXG5cdFx0b25HYW1lcGFkRGlzY29ubmVjdCxcblx0XHRldmVudHM6IHN0YXRlLmV2ZW50cyxcblx0fVxuXG59XG4iLCAiaW1wb3J0IHR5cGUge1xuXHRJbWFnZVNvdXJjZSxcblx0VGV4dHVyZU9wdCxcblx0VGV4RmlsdGVyLFxuXHRVbmlmb3JtLFxufSBmcm9tIFwiLi90eXBlc1wiXG5cbmltcG9ydCB7XG5cdE1hdDQsXG5cdFZlYzIsXG5cdENvbG9yLFxufSBmcm9tIFwiLi9tYXRoXCJcblxuaW1wb3J0IHtcblx0ZGVlcEVxLFxufSBmcm9tIFwiLi91dGlsc1wiXG5cbmV4cG9ydCB0eXBlIEdmeEN0eCA9IFJldHVyblR5cGU8dHlwZW9mIGluaXRHZng+XG5cbmV4cG9ydCBjbGFzcyBUZXh0dXJlIHtcblxuXHRjdHg6IEdmeEN0eFxuXHRzcmM6IG51bGwgfCBJbWFnZVNvdXJjZSA9IG51bGxcblx0Z2xUZXg6IFdlYkdMVGV4dHVyZVxuXHR3aWR0aDogbnVtYmVyXG5cdGhlaWdodDogbnVtYmVyXG5cblx0Y29uc3RydWN0b3IoY3R4OiBHZnhDdHgsIHc6IG51bWJlciwgaDogbnVtYmVyLCBvcHQ6IFRleHR1cmVPcHQgPSB7fSkge1xuXG5cdFx0dGhpcy5jdHggPSBjdHhcblx0XHRjb25zdCBnbCA9IGN0eC5nbFxuXHRcdHRoaXMuZ2xUZXggPSBjdHguZ2wuY3JlYXRlVGV4dHVyZSgpXG5cdFx0Y3R4Lm9uRGVzdHJveSgoKSA9PiB0aGlzLmZyZWUoKSlcblxuXHRcdHRoaXMud2lkdGggPSB3XG5cdFx0dGhpcy5oZWlnaHQgPSBoXG5cblx0XHQvLyBUT0RPOiBubyBkZWZhdWx0XG5cdFx0Y29uc3QgZmlsdGVyID0ge1xuXHRcdFx0XCJsaW5lYXJcIjogZ2wuTElORUFSLFxuXHRcdFx0XCJuZWFyZXN0XCI6IGdsLk5FQVJFU1QsXG5cdFx0fVtvcHQuZmlsdGVyID8/IGN0eC5vcHRzLnRleEZpbHRlcl0gPz8gZ2wuTkVBUkVTVFxuXG5cdFx0Y29uc3Qgd3JhcCA9IHtcblx0XHRcdFwicmVwZWF0XCI6IGdsLlJFUEVBVCxcblx0XHRcdFwiY2xhbXBUb0VhZGdlXCI6IGdsLkNMQU1QX1RPX0VER0UsXG5cdFx0fVtvcHQud3JhcF0gPz8gZ2wuQ0xBTVBfVE9fRURHRVxuXG5cdFx0dGhpcy5iaW5kKClcblxuXHRcdGlmICh3ICYmIGgpIHtcblx0XHRcdGdsLnRleEltYWdlMkQoXG5cdFx0XHRcdGdsLlRFWFRVUkVfMkQsXG5cdFx0XHRcdDAsIGdsLlJHQkEsXG5cdFx0XHRcdHcsXG5cdFx0XHRcdGgsXG5cdFx0XHRcdDAsXG5cdFx0XHRcdGdsLlJHQkEsXG5cdFx0XHRcdGdsLlVOU0lHTkVEX0JZVEUsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHQpXG5cdFx0fVxuXG5cdFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGZpbHRlcilcblx0XHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZmlsdGVyKVxuXHRcdGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIHdyYXApXG5cdFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgd3JhcClcblx0XHR0aGlzLnVuYmluZCgpXG5cblx0fVxuXG5cdHN0YXRpYyBmcm9tSW1hZ2UoY3R4OiBHZnhDdHgsIGltZzogSW1hZ2VTb3VyY2UsIG9wdDogVGV4dHVyZU9wdCA9IHt9KTogVGV4dHVyZSB7XG5cdFx0Y29uc3QgdGV4ID0gbmV3IFRleHR1cmUoY3R4LCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIG9wdClcblx0XHR0ZXgudXBkYXRlKGltZylcblx0XHR0ZXguc3JjID0gaW1nXG5cdFx0cmV0dXJuIHRleFxuXHR9XG5cblx0dXBkYXRlKGltZzogSW1hZ2VTb3VyY2UsIHggPSAwLCB5ID0gMCkge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5jdHguZ2xcblx0XHR0aGlzLmJpbmQoKVxuXHRcdGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgeCwgeSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1nKVxuXHRcdHRoaXMudW5iaW5kKClcblx0fVxuXG5cdGJpbmQoKSB7XG5cdFx0dGhpcy5jdHgucHVzaFRleHR1cmUyRCh0aGlzLmdsVGV4KVxuXHR9XG5cblx0dW5iaW5kKCkge1xuXHRcdHRoaXMuY3R4LnBvcFRleHR1cmUyRCgpXG5cdH1cblxuXHRmcmVlKCkge1xuXHRcdHRoaXMuY3R4LmdsLmRlbGV0ZVRleHR1cmUodGhpcy5nbFRleClcblx0fVxuXG59XG5cbmV4cG9ydCBjbGFzcyBGcmFtZUJ1ZmZlciB7XG5cblx0Y3R4OiBHZnhDdHhcblx0dGV4OiBUZXh0dXJlXG5cdGdsRnJhbWVidWZmZXI6IFdlYkdMRnJhbWVidWZmZXJcblx0Z2xSZW5kZXJidWZmZXI6IFdlYkdMUmVuZGVyYnVmZmVyXG5cblx0Y29uc3RydWN0b3IoY3R4OiBHZnhDdHgsIHc6IG51bWJlciwgaDogbnVtYmVyLCBvcHQ6IFRleHR1cmVPcHQgPSB7fSkge1xuXG5cdFx0dGhpcy5jdHggPSBjdHhcblx0XHRjb25zdCBnbCA9IGN0eC5nbFxuXHRcdGN0eC5vbkRlc3Ryb3koKCkgPT4gdGhpcy5mcmVlKCkpXG5cdFx0dGhpcy50ZXggPSBuZXcgVGV4dHVyZShjdHgsIHcsIGgsIG9wdClcblx0XHR0aGlzLmdsRnJhbWVidWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpXG5cdFx0dGhpcy5nbFJlbmRlcmJ1ZmZlciA9IGdsLmNyZWF0ZVJlbmRlcmJ1ZmZlcigpXG5cdFx0dGhpcy5iaW5kKClcblx0XHRnbC5yZW5kZXJidWZmZXJTdG9yYWdlKGdsLlJFTkRFUkJVRkZFUiwgZ2wuREVQVEhfU1RFTkNJTCwgdywgaClcblx0XHRnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChcblx0XHRcdGdsLkZSQU1FQlVGRkVSLFxuXHRcdFx0Z2wuQ09MT1JfQVRUQUNITUVOVDAsXG5cdFx0XHRnbC5URVhUVVJFXzJELFxuXHRcdFx0dGhpcy50ZXguZ2xUZXgsXG5cdFx0XHQwLFxuXHRcdClcblx0XHRnbC5mcmFtZWJ1ZmZlclJlbmRlcmJ1ZmZlcihcblx0XHRcdGdsLkZSQU1FQlVGRkVSLFxuXHRcdFx0Z2wuREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5ULFxuXHRcdFx0Z2wuUkVOREVSQlVGRkVSLFxuXHRcdFx0dGhpcy5nbFJlbmRlcmJ1ZmZlcixcblx0XHQpXG5cdFx0dGhpcy51bmJpbmQoKVxuXHR9XG5cblx0Z2V0IHdpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLnRleC53aWR0aFxuXHR9XG5cblx0Z2V0IGhlaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy50ZXguaGVpZ2h0XG5cdH1cblxuXHR0b0ltYWdlRGF0YSgpIHtcblx0XHRjb25zdCBnbCA9IHRoaXMuY3R4LmdsXG5cdFx0Y29uc3QgZGF0YSA9IG5ldyBVaW50OENsYW1wZWRBcnJheSh0aGlzLndpZHRoICogdGhpcy5oZWlnaHQgKiA0KVxuXHRcdHRoaXMuYmluZCgpXG5cdFx0Z2wucmVhZFBpeGVscygwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgZGF0YSlcblx0XHR0aGlzLnVuYmluZCgpXG5cdFx0Ly8gZmxpcCB2ZXJ0aWNhbGx5XG5cdFx0Y29uc3QgYnl0ZXNQZXJSb3cgPSB0aGlzLndpZHRoICogNFxuXHRcdGNvbnN0IHRlbXAgPSBuZXcgVWludDhBcnJheShieXRlc1BlclJvdylcblx0XHRmb3IgKGxldCB5ID0gMDsgeSA8ICh0aGlzLmhlaWdodCAvIDIgfCAwKTsgeSsrKSB7XG5cdFx0XHRjb25zdCB0b3BPZmZzZXQgPSB5ICogYnl0ZXNQZXJSb3dcblx0XHRcdGNvbnN0IGJvdHRvbU9mZnNldCA9ICh0aGlzLmhlaWdodCAtIHkgLSAxKSAqIGJ5dGVzUGVyUm93XG5cdFx0XHR0ZW1wLnNldChkYXRhLnN1YmFycmF5KHRvcE9mZnNldCwgdG9wT2Zmc2V0ICsgYnl0ZXNQZXJSb3cpKVxuXHRcdFx0ZGF0YS5jb3B5V2l0aGluKHRvcE9mZnNldCwgYm90dG9tT2Zmc2V0LCBib3R0b21PZmZzZXQgKyBieXRlc1BlclJvdylcblx0XHRcdGRhdGEuc2V0KHRlbXAsIGJvdHRvbU9mZnNldClcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBJbWFnZURhdGEoZGF0YSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG5cdH1cblxuXHR0b0RhdGFVUkwoKSB7XG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxuXHRcdGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcblx0XHRjYW52YXMud2lkdGggPSB0aGlzLndpZHRoXG5cdFx0Y2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0XG5cdFx0Y3R4LnB1dEltYWdlRGF0YSh0aGlzLnRvSW1hZ2VEYXRhKCksIDAsIDApXG5cdFx0cmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoKVxuXHR9XG5cblx0ZHJhdyhhY3Rpb246ICgpID0+IHZvaWQpIHtcblx0XHR0aGlzLmJpbmQoKVxuXHRcdGFjdGlvbigpXG5cdFx0dGhpcy51bmJpbmQoKVxuXHR9XG5cblx0YmluZCgpIHtcblx0XHR0aGlzLmN0eC5wdXNoRnJhbWVidWZmZXIodGhpcy5nbEZyYW1lYnVmZmVyKVxuXHRcdHRoaXMuY3R4LnB1c2hSZW5kZXJidWZmZXIodGhpcy5nbFJlbmRlcmJ1ZmZlcilcblx0XHR0aGlzLmN0eC5wdXNoVmlld3BvcnQoeyB4OiAwLCB5OiAwLCB3OiB0aGlzLndpZHRoLCBoOiB0aGlzLmhlaWdodCB9KVxuXHR9XG5cblx0dW5iaW5kKCkge1xuXHRcdHRoaXMuY3R4LnBvcEZyYW1lYnVmZmVyKClcblx0XHR0aGlzLmN0eC5wb3BSZW5kZXJidWZmZXIoKVxuXHRcdHRoaXMuY3R4LnBvcFZpZXdwb3J0KClcblx0fVxuXG5cdGZyZWUoKSB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmN0eC5nbFxuXHRcdGdsLmRlbGV0ZUZyYW1lYnVmZmVyKHRoaXMuZ2xGcmFtZWJ1ZmZlcilcblx0XHRnbC5kZWxldGVSZW5kZXJidWZmZXIodGhpcy5nbFJlbmRlcmJ1ZmZlcilcblx0XHR0aGlzLnRleC5mcmVlKClcblx0fVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTaGFkZXIge1xuXG5cdGN0eDogR2Z4Q3R4XG5cdGdsUHJvZ3JhbTogV2ViR0xQcm9ncmFtXG5cblx0Y29uc3RydWN0b3IoY3R4OiBHZnhDdHgsIHZlcnQ6IHN0cmluZywgZnJhZzogc3RyaW5nLCBhdHRyaWJzOiBzdHJpbmdbXSkge1xuXG5cdFx0dGhpcy5jdHggPSBjdHhcblx0XHRjdHgub25EZXN0cm95KCgpID0+IHRoaXMuZnJlZSgpKVxuXG5cdFx0Y29uc3QgZ2wgPSBjdHguZ2xcblx0XHRjb25zdCB2ZXJ0U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpXG5cdFx0Y29uc3QgZnJhZ1NoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpXG5cblx0XHRnbC5zaGFkZXJTb3VyY2UodmVydFNoYWRlciwgdmVydClcblx0XHRnbC5zaGFkZXJTb3VyY2UoZnJhZ1NoYWRlciwgZnJhZylcblx0XHRnbC5jb21waWxlU2hhZGVyKHZlcnRTaGFkZXIpXG5cdFx0Z2wuY29tcGlsZVNoYWRlcihmcmFnU2hhZGVyKVxuXG5cdFx0Y29uc3QgcHJvZyA9IGdsLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuZ2xQcm9ncmFtID0gcHJvZ1xuXG5cdFx0Z2wuYXR0YWNoU2hhZGVyKHByb2csIHZlcnRTaGFkZXIpXG5cdFx0Z2wuYXR0YWNoU2hhZGVyKHByb2csIGZyYWdTaGFkZXIpXG5cblx0XHRhdHRyaWJzLmZvckVhY2goKGF0dHJpYiwgaSkgPT4gZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2csIGksIGF0dHJpYikpXG5cblx0XHRnbC5saW5rUHJvZ3JhbShwcm9nKVxuXG5cdFx0aWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2csIGdsLkxJTktfU1RBVFVTKSkge1xuXHRcdFx0Y29uc3QgdmVydEVycm9yID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyh2ZXJ0U2hhZGVyKVxuXHRcdFx0aWYgKHZlcnRFcnJvcikgdGhyb3cgbmV3IEVycm9yKFwiVkVSVEVYIFNIQURFUiBcIiArIHZlcnRFcnJvcilcblx0XHRcdGNvbnN0IGZyYWdFcnJvciA9IGdsLmdldFNoYWRlckluZm9Mb2coZnJhZ1NoYWRlcilcblx0XHRcdGlmIChmcmFnRXJyb3IpIHRocm93IG5ldyBFcnJvcihcIkZSQUdNRU5UIFNIQURFUiBcIiArIGZyYWdFcnJvcilcblx0XHR9XG5cblx0XHRnbC5kZWxldGVTaGFkZXIodmVydFNoYWRlcilcblx0XHRnbC5kZWxldGVTaGFkZXIoZnJhZ1NoYWRlcilcblxuXHR9XG5cblx0YmluZCgpIHtcblx0XHR0aGlzLmN0eC5wdXNoUHJvZ3JhbSh0aGlzLmdsUHJvZ3JhbSlcblx0fVxuXG5cdHVuYmluZCgpIHtcblx0XHR0aGlzLmN0eC5wb3BQcm9ncmFtKClcblx0fVxuXG5cdHNlbmQodW5pZm9ybTogVW5pZm9ybSkge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5jdHguZ2xcblx0XHRmb3IgKGNvbnN0IG5hbWUgaW4gdW5pZm9ybSkge1xuXHRcdFx0Y29uc3QgdmFsID0gdW5pZm9ybVtuYW1lXVxuXHRcdFx0Y29uc3QgbG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuZ2xQcm9ncmFtLCBuYW1lKVxuXHRcdFx0aWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0Z2wudW5pZm9ybTFmKGxvYywgdmFsKVxuXHRcdFx0fSBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBNYXQ0KSB7XG5cdFx0XHRcdGdsLnVuaWZvcm1NYXRyaXg0ZnYobG9jLCBmYWxzZSwgbmV3IEZsb2F0MzJBcnJheSh2YWwubSkpXG5cdFx0XHR9IGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0XHRcdGdsLnVuaWZvcm0zZihsb2MsIHZhbC5yLCB2YWwuZywgdmFsLmIpXG5cdFx0XHR9IGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFZlYzIpIHtcblx0XHRcdFx0Z2wudW5pZm9ybTJmKGxvYywgdmFsLngsIHZhbC55KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZyZWUoKSB7XG5cdFx0dGhpcy5jdHguZ2wuZGVsZXRlUHJvZ3JhbSh0aGlzLmdsUHJvZ3JhbSlcblx0fVxuXG59XG5cbmV4cG9ydCB0eXBlIFZlcnRleEZvcm1hdCA9IHtcblx0bmFtZTogc3RyaW5nLFxuXHRzaXplOiBudW1iZXIsXG59W11cblxuZXhwb3J0IGNsYXNzIEJhdGNoUmVuZGVyZXIge1xuXG5cdGN0eDogR2Z4Q3R4XG5cblx0Z2xWQnVmOiBXZWJHTEJ1ZmZlclxuXHRnbElCdWY6IFdlYkdMQnVmZmVyXG5cdHZxdWV1ZTogbnVtYmVyW10gPSBbXVxuXHRpcXVldWU6IG51bWJlcltdID0gW11cblx0c3RyaWRlOiBudW1iZXJcblx0bWF4VmVydGljZXM6IG51bWJlclxuXHRtYXhJbmRpY2VzOiBudW1iZXJcblxuXHR2ZXJ0ZXhGb3JtYXQ6IFZlcnRleEZvcm1hdFxuXHRudW1EcmF3czogbnVtYmVyID0gMFxuXG5cdGN1clByaW1pdGl2ZTogR0xlbnVtIHwgbnVsbCA9IG51bGxcblx0Y3VyVGV4OiBUZXh0dXJlIHwgbnVsbCA9IG51bGxcblx0Y3VyU2hhZGVyOiBTaGFkZXIgfCBudWxsID0gbnVsbFxuXHRjdXJVbmlmb3JtOiBVbmlmb3JtID0ge31cblxuXHRjb25zdHJ1Y3RvcihjdHg6IEdmeEN0eCwgZm9ybWF0OiBWZXJ0ZXhGb3JtYXQsIG1heFZlcnRpY2VzOiBudW1iZXIsIG1heEluZGljZXM6IG51bWJlcikge1xuXG5cdFx0Y29uc3QgZ2wgPSBjdHguZ2xcblxuXHRcdHRoaXMudmVydGV4Rm9ybWF0ID0gZm9ybWF0XG5cdFx0dGhpcy5jdHggPSBjdHhcblx0XHR0aGlzLnN0cmlkZSA9IGZvcm1hdC5yZWR1Y2UoKHN1bSwgZikgPT4gc3VtICsgZi5zaXplLCAwKVxuXHRcdHRoaXMubWF4VmVydGljZXMgPSBtYXhWZXJ0aWNlc1xuXHRcdHRoaXMubWF4SW5kaWNlcyA9IG1heEluZGljZXNcblxuXHRcdHRoaXMuZ2xWQnVmID0gZ2wuY3JlYXRlQnVmZmVyKClcblx0XHRjdHgucHVzaEFycmF5QnVmZmVyKHRoaXMuZ2xWQnVmKVxuXHRcdGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBtYXhWZXJ0aWNlcyAqIDQsIGdsLkRZTkFNSUNfRFJBVylcblx0XHRjdHgucG9wQXJyYXlCdWZmZXIoKVxuXG5cdFx0dGhpcy5nbElCdWYgPSBnbC5jcmVhdGVCdWZmZXIoKVxuXHRcdGN0eC5wdXNoRWxlbWVudEFycmF5QnVmZmVyKHRoaXMuZ2xJQnVmKVxuXHRcdGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG1heEluZGljZXMgKiA0LCBnbC5EWU5BTUlDX0RSQVcpXG5cdFx0Y3R4LnBvcEVsZW1lbnRBcnJheUJ1ZmZlcigpXG5cblx0fVxuXG5cdHB1c2goXG5cdFx0cHJpbWl0aXZlOiBHTGVudW0sXG5cdFx0dmVydHM6IG51bWJlcltdLFxuXHRcdGluZGljZXM6IG51bWJlcltdLFxuXHRcdHNoYWRlcjogU2hhZGVyLFxuXHRcdHRleDogVGV4dHVyZSB8IG51bGwgPSBudWxsLFxuXHRcdHVuaWZvcm06IFVuaWZvcm0gPSB7fSxcblx0KSB7XG5cdFx0aWYgKFxuXHRcdFx0cHJpbWl0aXZlICE9PSB0aGlzLmN1clByaW1pdGl2ZVxuXHRcdFx0fHwgdGV4ICE9PSB0aGlzLmN1clRleFxuXHRcdFx0fHwgc2hhZGVyICE9PSB0aGlzLmN1clNoYWRlclxuXHRcdFx0fHwgIWRlZXBFcSh0aGlzLmN1clVuaWZvcm0sIHVuaWZvcm0pXG5cdFx0XHR8fCB0aGlzLnZxdWV1ZS5sZW5ndGggKyB2ZXJ0cy5sZW5ndGggKiB0aGlzLnN0cmlkZSA+IHRoaXMubWF4VmVydGljZXNcblx0XHRcdHx8IHRoaXMuaXF1ZXVlLmxlbmd0aCArIGluZGljZXMubGVuZ3RoID4gdGhpcy5tYXhJbmRpY2VzXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmZsdXNoKClcblx0XHR9XG5cdFx0Y29uc3QgaW5kZXhPZmZzZXQgPSB0aGlzLnZxdWV1ZS5sZW5ndGggLyB0aGlzLnN0cmlkZVxuXHRcdGZvciAoY29uc3QgdiBvZiB2ZXJ0cykge1xuXHRcdFx0dGhpcy52cXVldWUucHVzaCh2KVxuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGkgb2YgaW5kaWNlcykge1xuXHRcdFx0dGhpcy5pcXVldWUucHVzaChpICsgaW5kZXhPZmZzZXQpXG5cdFx0fVxuXHRcdHRoaXMuY3VyUHJpbWl0aXZlID0gcHJpbWl0aXZlXG5cdFx0dGhpcy5jdXJTaGFkZXIgPSBzaGFkZXJcblx0XHR0aGlzLmN1clRleCA9IHRleFxuXHRcdHRoaXMuY3VyVW5pZm9ybSA9IHVuaWZvcm1cblx0fVxuXG5cdGZsdXNoKCkge1xuXG5cdFx0aWYgKFxuXHRcdFx0IXRoaXMuY3VyUHJpbWl0aXZlXG5cdFx0XHR8fCAhdGhpcy5jdXJTaGFkZXJcblx0XHRcdHx8IHRoaXMudnF1ZXVlLmxlbmd0aCA9PT0gMFxuXHRcdFx0fHwgdGhpcy5pcXVldWUubGVuZ3RoID09PSAwXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRjb25zdCBnbCA9IHRoaXMuY3R4LmdsXG5cblx0XHR0aGlzLmN0eC5wdXNoQXJyYXlCdWZmZXIodGhpcy5nbFZCdWYpXG5cdFx0Z2wuYnVmZmVyU3ViRGF0YShnbC5BUlJBWV9CVUZGRVIsIDAsIG5ldyBGbG9hdDMyQXJyYXkodGhpcy52cXVldWUpKVxuXHRcdHRoaXMuY3R4LnB1c2hFbGVtZW50QXJyYXlCdWZmZXIodGhpcy5nbElCdWYpXG5cdFx0Z2wuYnVmZmVyU3ViRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgMCwgbmV3IFVpbnQxNkFycmF5KHRoaXMuaXF1ZXVlKSlcblx0XHR0aGlzLmN0eC5zZXRWZXJ0ZXhGb3JtYXQodGhpcy52ZXJ0ZXhGb3JtYXQpXG5cdFx0dGhpcy5jdXJTaGFkZXIuYmluZCgpXG5cdFx0dGhpcy5jdXJTaGFkZXIuc2VuZCh0aGlzLmN1clVuaWZvcm0pXG5cdFx0dGhpcy5jdXJUZXg/LmJpbmQoKVxuXHRcdGdsLmRyYXdFbGVtZW50cyh0aGlzLmN1clByaW1pdGl2ZSwgdGhpcy5pcXVldWUubGVuZ3RoLCBnbC5VTlNJR05FRF9TSE9SVCwgMClcblx0XHR0aGlzLmN1clRleD8udW5iaW5kKClcblx0XHR0aGlzLmN1clNoYWRlci51bmJpbmQoKVxuXG5cdFx0dGhpcy5jdHgucG9wQXJyYXlCdWZmZXIoKVxuXHRcdHRoaXMuY3R4LnBvcEVsZW1lbnRBcnJheUJ1ZmZlcigpXG5cblx0XHR0aGlzLnZxdWV1ZSA9IFtdXG5cdFx0dGhpcy5pcXVldWUgPSBbXVxuXHRcdHRoaXMubnVtRHJhd3MrK1xuXG5cdH1cblxuXHRmcmVlKCkge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5jdHguZ2xcblx0XHRnbC5kZWxldGVCdWZmZXIodGhpcy5nbFZCdWYpXG5cdFx0Z2wuZGVsZXRlQnVmZmVyKHRoaXMuZ2xJQnVmKVxuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIE1lc2gge1xuXG5cdGN0eDogR2Z4Q3R4XG5cdGdsVkJ1ZjogV2ViR0xCdWZmZXJcblx0Z2xJQnVmOiBXZWJHTEJ1ZmZlclxuXHR2ZXJ0ZXhGb3JtYXQ6IFZlcnRleEZvcm1hdFxuXHRjb3VudDogbnVtYmVyXG5cblx0Y29uc3RydWN0b3IoY3R4OiBHZnhDdHgsIGZvcm1hdDogVmVydGV4Rm9ybWF0LCB2ZXJ0czogbnVtYmVyW10sIGluZGljZXM6IG51bWJlcltdKSB7XG5cblx0XHRjb25zdCBnbCA9IGN0eC5nbFxuXG5cdFx0dGhpcy52ZXJ0ZXhGb3JtYXQgPSBmb3JtYXRcblx0XHR0aGlzLmN0eCA9IGN0eFxuXG5cdFx0dGhpcy5nbFZCdWYgPSBnbC5jcmVhdGVCdWZmZXIoKVxuXHRcdGN0eC5wdXNoQXJyYXlCdWZmZXIodGhpcy5nbFZCdWYpXG5cdFx0Z2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodmVydHMpLCBnbC5TVEFUSUNfRFJBVylcblx0XHRjdHgucG9wQXJyYXlCdWZmZXIoKVxuXG5cdFx0dGhpcy5nbElCdWYgPSBnbC5jcmVhdGVCdWZmZXIoKVxuXHRcdGN0eC5wdXNoRWxlbWVudEFycmF5QnVmZmVyKHRoaXMuZ2xJQnVmKVxuXHRcdGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBVaW50MTZBcnJheShpbmRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpXG5cdFx0Y3R4LnBvcEVsZW1lbnRBcnJheUJ1ZmZlcigpXG5cblx0XHR0aGlzLmNvdW50ID0gaW5kaWNlcy5sZW5ndGhcblxuXHR9XG5cblx0ZHJhdyhwcmltaXRpdmU/OiBHTGVudW0pIHtcblx0XHRjb25zdCBnbCA9IHRoaXMuY3R4LmdsXG5cdFx0dGhpcy5jdHgucHVzaEFycmF5QnVmZmVyKHRoaXMuZ2xWQnVmKVxuXHRcdHRoaXMuY3R4LnB1c2hFbGVtZW50QXJyYXlCdWZmZXIodGhpcy5nbElCdWYpXG5cdFx0dGhpcy5jdHguc2V0VmVydGV4Rm9ybWF0KHRoaXMudmVydGV4Rm9ybWF0KVxuXHRcdGdsLmRyYXdFbGVtZW50cyhwcmltaXRpdmUgPz8gZ2wuVFJJQU5HTEVTLCB0aGlzLmNvdW50LCBnbC5VTlNJR05FRF9TSE9SVCwgMClcblx0XHR0aGlzLmN0eC5wb3BBcnJheUJ1ZmZlcigpXG5cdFx0dGhpcy5jdHgucG9wRWxlbWVudEFycmF5QnVmZmVyKClcblx0fVxuXG5cdGZyZWUoKSB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmN0eC5nbFxuXHRcdGdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmdsVkJ1Zilcblx0XHRnbC5kZWxldGVCdWZmZXIodGhpcy5nbElCdWYpXG5cdH1cblxuXG59XG5cbmZ1bmN0aW9uIGdlblN0YWNrPFQ+KHNldEZ1bmM6IChpdGVtOiBUKSA9PiB2b2lkKSB7XG5cdGNvbnN0IHN0YWNrOiBUW10gPSBbXVxuXHRjb25zdCBwdXNoID0gKGl0ZW06IFQpID0+IHtcblx0XHRzdGFjay5wdXNoKGl0ZW0pXG5cdFx0c2V0RnVuYyhpdGVtKVxuXHR9XG5cdGNvbnN0IHBvcCA9ICgpID0+IHtcblx0XHRzdGFjay5wb3AoKVxuXHRcdHNldEZ1bmMoY3VyKCkgPz8gbnVsbClcblx0fVxuXHRjb25zdCBjdXIgPSAoKSA9PiBzdGFja1tzdGFjay5sZW5ndGggLSAxXVxuXHRyZXR1cm4gW3B1c2gsIHBvcCwgY3VyXSBhcyBjb25zdFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0R2Z4KGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIG9wdHM6IHtcblx0dGV4RmlsdGVyPzogVGV4RmlsdGVyLFxufSA9IHt9KSB7XG5cblx0Y29uc3QgZ2M6IEFycmF5PCgpID0+IHZvaWQ+ID0gW11cblxuXHRmdW5jdGlvbiBvbkRlc3Ryb3koYWN0aW9uKSB7XG5cdFx0Z2MucHVzaChhY3Rpb24pXG5cdH1cblxuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGdjLmZvckVhY2goKGFjdGlvbikgPT4gYWN0aW9uKCkpXG5cdFx0Z2wuZ2V0RXh0ZW5zaW9uKFwiV0VCR0xfbG9zZV9jb250ZXh0XCIpLmxvc2VDb250ZXh0KClcblx0fVxuXG5cdGxldCBjdXJWZXJ0ZXhGb3JtYXQgPSBudWxsXG5cblx0ZnVuY3Rpb24gc2V0VmVydGV4Rm9ybWF0KGZtdDogVmVydGV4Rm9ybWF0KSB7XG5cdFx0aWYgKGRlZXBFcShmbXQsIGN1clZlcnRleEZvcm1hdCkpIHJldHVyblxuXHRcdGN1clZlcnRleEZvcm1hdCA9IGZtdFxuXHRcdGNvbnN0IHN0cmlkZSA9IGZtdC5yZWR1Y2UoKHN1bSwgZikgPT4gc3VtICsgZi5zaXplLCAwKVxuXHRcdGZtdC5yZWR1Y2UoKG9mZnNldCwgZiwgaSkgPT4ge1xuXHRcdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcihpLCBmLnNpemUsIGdsLkZMT0FULCBmYWxzZSwgc3RyaWRlICogNCwgb2Zmc2V0KVxuXHRcdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaSlcblx0XHRcdHJldHVybiBvZmZzZXQgKyBmLnNpemUgKiA0XG5cdFx0fSwgMClcblx0fVxuXG5cdGNvbnN0IFsgcHVzaFRleHR1cmUyRCwgcG9wVGV4dHVyZTJEIF0gPVxuXHRcdGdlblN0YWNrPFdlYkdMVGV4dHVyZT4oKHQpID0+IGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHQpKVxuXG5cdGNvbnN0IFsgcHVzaEFycmF5QnVmZmVyLCBwb3BBcnJheUJ1ZmZlciBdID1cblx0XHRnZW5TdGFjazxXZWJHTEJ1ZmZlcj4oKGIpID0+IGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBiKSlcblxuXHRjb25zdCBbIHB1c2hFbGVtZW50QXJyYXlCdWZmZXIsIHBvcEVsZW1lbnRBcnJheUJ1ZmZlciBdID1cblx0XHRnZW5TdGFjazxXZWJHTEJ1ZmZlcj4oKGIpID0+IGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGIpKVxuXG5cdGNvbnN0IFsgcHVzaEZyYW1lYnVmZmVyLCBwb3BGcmFtZWJ1ZmZlciBdID1cblx0XHRnZW5TdGFjazxXZWJHTEZyYW1lYnVmZmVyPigoYikgPT4gZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBiKSlcblxuXHRjb25zdCBbIHB1c2hSZW5kZXJidWZmZXIsIHBvcFJlbmRlcmJ1ZmZlciBdID1cblx0XHRnZW5TdGFjazxXZWJHTFJlbmRlcmJ1ZmZlcj4oKGIpID0+IGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCBiKSlcblxuXHRjb25zdCBbIHB1c2hWaWV3cG9ydCwgcG9wVmlld3BvcnQgXSA9XG5cdFx0Z2VuU3RhY2s8eyB4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIgfT4oKHsgeCwgeSwgdywgaCB9KSA9PiB7XG5cdFx0XHRnbC52aWV3cG9ydCh4LCB5LCB3LCBoKVxuXHRcdH0pXG5cblx0Y29uc3QgWyBwdXNoUHJvZ3JhbSwgcG9wUHJvZ3JhbSBdID0gZ2VuU3RhY2s8V2ViR0xQcm9ncmFtPigocCkgPT4gZ2wudXNlUHJvZ3JhbShwKSlcblxuXHRwdXNoVmlld3BvcnQoeyB4OiAwLCB5OiAwLCB3OiBnbC5kcmF3aW5nQnVmZmVyV2lkdGgsIGg6IGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQgfSlcblxuXHRyZXR1cm4ge1xuXHRcdGdsLFxuXHRcdG9wdHMsXG5cdFx0b25EZXN0cm95LFxuXHRcdGRlc3Ryb3ksXG5cdFx0cHVzaFRleHR1cmUyRCxcblx0XHRwb3BUZXh0dXJlMkQsXG5cdFx0cHVzaEFycmF5QnVmZmVyLFxuXHRcdHBvcEFycmF5QnVmZmVyLFxuXHRcdHB1c2hFbGVtZW50QXJyYXlCdWZmZXIsXG5cdFx0cG9wRWxlbWVudEFycmF5QnVmZmVyLFxuXHRcdHB1c2hGcmFtZWJ1ZmZlcixcblx0XHRwb3BGcmFtZWJ1ZmZlcixcblx0XHRwdXNoUmVuZGVyYnVmZmVyLFxuXHRcdHBvcFJlbmRlcmJ1ZmZlcixcblx0XHRwdXNoVmlld3BvcnQsXG5cdFx0cG9wVmlld3BvcnQsXG5cdFx0cHVzaFByb2dyYW0sXG5cdFx0cG9wUHJvZ3JhbSxcblx0XHRzZXRWZXJ0ZXhGb3JtYXQsXG5cdH1cblxufVxuIiwgImltcG9ydCB7XG5cdEV2ZW50LFxufSBmcm9tIFwiLi91dGlsc1wiXG5cbmV4cG9ydCBjbGFzcyBBc3NldDxEPiB7XG5cdGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlXG5cdGRhdGE6IEQgfCBudWxsID0gbnVsbFxuXHRlcnJvcjogRXJyb3IgfCBudWxsID0gbnVsbFxuXHRwcml2YXRlIG9uTG9hZEV2ZW50czogRXZlbnQ8W0RdPiA9IG5ldyBFdmVudCgpXG5cdHByaXZhdGUgb25FcnJvckV2ZW50czogRXZlbnQ8W0Vycm9yXT4gPSBuZXcgRXZlbnQoKVxuXHRwcml2YXRlIG9uRmluaXNoRXZlbnRzOiBFdmVudDxbXT4gPSBuZXcgRXZlbnQoKVxuXHRjb25zdHJ1Y3Rvcihsb2FkZXI6IFByb21pc2U8RD4pIHtcblx0XHRsb2FkZXIudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0dGhpcy5kYXRhID0gZGF0YVxuXHRcdFx0dGhpcy5vbkxvYWRFdmVudHMudHJpZ2dlcihkYXRhKVxuXHRcdH0pLmNhdGNoKChlcnIpID0+IHtcblx0XHRcdHRoaXMuZXJyb3IgPSBlcnJcblx0XHRcdGlmICh0aGlzLm9uRXJyb3JFdmVudHMubnVtTGlzdGVuZXJzKCkgPiAwKSB7XG5cdFx0XHRcdHRoaXMub25FcnJvckV2ZW50cy50cmlnZ2VyKGVycilcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IGVyclxuXHRcdFx0fVxuXHRcdH0pLmZpbmFsbHkoKCkgPT4ge1xuXHRcdFx0dGhpcy5vbkZpbmlzaEV2ZW50cy50cmlnZ2VyKClcblx0XHRcdHRoaXMubG9hZGVkID0gdHJ1ZVxuXHRcdH0pXG5cdH1cblx0c3RhdGljIGxvYWRlZDxEPihkYXRhOiBEKTogQXNzZXQ8RD4ge1xuXHRcdGNvbnN0IGFzc2V0ID0gbmV3IEFzc2V0KFByb21pc2UucmVzb2x2ZShkYXRhKSkgYXMgQXNzZXQ8RD5cblx0XHRhc3NldC5kYXRhID0gZGF0YVxuXHRcdGFzc2V0LmxvYWRlZCA9IHRydWVcblx0XHRyZXR1cm4gYXNzZXRcblx0fVxuXHRvbkxvYWQoYWN0aW9uOiAoZGF0YTogRCkgPT4gdm9pZCkge1xuXHRcdGlmICh0aGlzLmxvYWRlZCAmJiB0aGlzLmRhdGEpIHtcblx0XHRcdGFjdGlvbih0aGlzLmRhdGEpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub25Mb2FkRXZlbnRzLmFkZChhY3Rpb24pXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzXG5cdH1cblx0b25FcnJvcihhY3Rpb246IChlcnI6IEVycm9yKSA9PiB2b2lkKSB7XG5cdFx0aWYgKHRoaXMubG9hZGVkICYmIHRoaXMuZXJyb3IpIHtcblx0XHRcdGFjdGlvbih0aGlzLmVycm9yKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9uRXJyb3JFdmVudHMuYWRkKGFjdGlvbilcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXHRvbkZpbmlzaChhY3Rpb246ICgpID0+IHZvaWQpIHtcblx0XHRpZiAodGhpcy5sb2FkZWQpIHtcblx0XHRcdGFjdGlvbigpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub25GaW5pc2hFdmVudHMuYWRkKGFjdGlvbilcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXHR0aGVuKGFjdGlvbjogKGRhdGE6IEQpID0+IHZvaWQpOiBBc3NldDxEPiB7XG5cdFx0cmV0dXJuIHRoaXMub25Mb2FkKGFjdGlvbilcblx0fVxuXHRjYXRjaChhY3Rpb246IChlcnI6IEVycm9yKSA9PiB2b2lkKTogQXNzZXQ8RD4ge1xuXHRcdHJldHVybiB0aGlzLm9uRXJyb3IoYWN0aW9uKVxuXHR9XG5cdGZpbmFsbHkoYWN0aW9uOiAoKSA9PiB2b2lkKTogQXNzZXQ8RD4ge1xuXHRcdHJldHVybiB0aGlzLm9uRmluaXNoKGFjdGlvbilcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQXNzZXRCdWNrZXQ8RD4ge1xuXHRhc3NldHM6IE1hcDxzdHJpbmcsIEFzc2V0PEQ+PiA9IG5ldyBNYXAoKVxuXHRsYXN0VUlEOiBudW1iZXIgPSAwXG5cdGFkZChuYW1lOiBzdHJpbmcgfCBudWxsLCBsb2FkZXI6IFByb21pc2U8RD4pOiBBc3NldDxEPiB7XG5cdFx0Ly8gaWYgdXNlciBkb24ndCBwcm92aWRlIGEgbmFtZSB3ZSB1c2UgYSBnZW5lcmF0ZWQgb25lXG5cdFx0Y29uc3QgaWQgPSBuYW1lID8/ICh0aGlzLmxhc3RVSUQrKyArIFwiXCIpXG5cdFx0Y29uc3QgYXNzZXQgPSBuZXcgQXNzZXQobG9hZGVyKVxuXHRcdHRoaXMuYXNzZXRzLnNldChpZCwgYXNzZXQpXG5cdFx0cmV0dXJuIGFzc2V0XG5cdH1cblx0YWRkTG9hZGVkKG5hbWU6IHN0cmluZyB8IG51bGwsIGRhdGE6IEQpOiBBc3NldDxEPiB7XG5cdFx0Y29uc3QgaWQgPSBuYW1lID8/ICh0aGlzLmxhc3RVSUQrKyArIFwiXCIpXG5cdFx0Y29uc3QgYXNzZXQgPSBBc3NldC5sb2FkZWQoZGF0YSlcblx0XHR0aGlzLmFzc2V0cy5zZXQoaWQsIGFzc2V0KVxuXHRcdHJldHVybiBhc3NldFxuXHR9XG5cdGdldChoYW5kbGU6IHN0cmluZyk6IEFzc2V0PEQ+IHwgdm9pZCB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXRzLmdldChoYW5kbGUpXG5cdH1cblx0cHJvZ3Jlc3MoKTogbnVtYmVyIHtcblx0XHRpZiAodGhpcy5hc3NldHMuc2l6ZSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIDFcblx0XHR9XG5cdFx0bGV0IGxvYWRlZCA9IDBcblx0XHR0aGlzLmFzc2V0cy5mb3JFYWNoKChhc3NldCkgPT4ge1xuXHRcdFx0aWYgKGFzc2V0LmxvYWRlZCkge1xuXHRcdFx0XHRsb2FkZWQrK1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0cmV0dXJuIGxvYWRlZCAvIHRoaXMuYXNzZXRzLnNpemVcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hVUkwodXJsOiBzdHJpbmcpIHtcblx0cmV0dXJuIGZldGNoKHVybClcblx0XHQudGhlbigocmVzKSA9PiB7XG5cdFx0XHRpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggXCIke3VybH1cImApXG5cdFx0XHRyZXR1cm4gcmVzXG5cdFx0fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoSlNPTihwYXRoOiBzdHJpbmcpIHtcblx0cmV0dXJuIGZldGNoVVJMKHBhdGgpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVGV4dChwYXRoOiBzdHJpbmcpIHtcblx0cmV0dXJuIGZldGNoVVJMKHBhdGgpLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQXJyYXlCdWZmZXIocGF0aDogc3RyaW5nKSB7XG5cdHJldHVybiBmZXRjaFVSTChwYXRoKS50aGVuKChyZXMpID0+IHJlcy5hcnJheUJ1ZmZlcigpKVxufVxuXG4vLyB3cmFwcGVyIGFyb3VuZCBpbWFnZSBsb2FkZXIgdG8gZ2V0IGEgUHJvbWlzZVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRJbWcoc3JjOiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+IHtcblx0Y29uc3QgaW1nID0gbmV3IEltYWdlKClcblx0aW1nLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIlxuXHRpbWcuc3JjID0gc3JjXG5cdHJldHVybiBuZXcgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0aW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKVxuXHRcdGltZy5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgaW1hZ2UgZnJvbSBcIiR7c3JjfVwiYCkpXG5cdH0pXG59XG4iLCAiLy8gaHR0cHM6Ly9lYXNpbmdzLm5ldC9cbmNvbnN0IGMxID0gMS43MDE1OFxuY29uc3QgYzIgPSBjMSAqIDEuNTI1XG5jb25zdCBjMyA9IGMxICsgMVxuY29uc3QgYzQgPSAoMiAqIE1hdGguUEkpIC8gM1xuY29uc3QgYzUgPSAoMiAqIE1hdGguUEkpIC8gNC41XG5cbmNvbnN0IGVhc2luZ3MgPSB7XG5cdGxpbmVhcjogKHgpID0+IHgsXG5cdGVhc2VJblNpbmU6ICh4KSA9PiAxIC0gTWF0aC5jb3MoKHggKiBNYXRoLlBJKSAvIDIpLFxuXHRlYXNlT3V0U2luZTogKHgpID0+IE1hdGguc2luKCh4ICogTWF0aC5QSSkgLyAyKSxcblx0ZWFzZUluT3V0U2luZTogKHgpID0+IC0oTWF0aC5jb3MoTWF0aC5QSSAqIHgpIC0gMSkgLyAyLFxuXHRlYXNlSW5RdWFkOiAoeCkgPT4geCAqIHgsXG5cdGVhc2VPdXRRdWFkOiAoeCkgPT4gMSAtICgxIC0geCkgKiAoMSAtIHgpLFxuXHRlYXNlSW5PdXRRdWFkOiAoeCkgPT4geCA8IDAuNSA/IDIgKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCAyKSAvIDIsXG5cdGVhc2VJbkN1YmljOiAoeCkgPT4geCAqIHggKiB4LFxuXHRlYXNlT3V0Q3ViaWM6ICh4KSA9PiAxIC0gTWF0aC5wb3coMSAtIHgsIDMpLFxuXHRlYXNlSW5PdXRDdWJpYzogKHgpID0+IHggPCAwLjUgPyA0ICogeCAqIHggKiB4IDogMSAtIE1hdGgucG93KC0yICogeCArIDIsIDMpIC8gMixcblx0ZWFzZUluUXVhcnQ6ICh4KSA9PiB4ICogeCAqIHggKiB4LFxuXHRlYXNlT3V0UXVhcnQ6ICh4KSA9PiAxIC0gTWF0aC5wb3coMSAtIHgsIDQpLFxuXHRlYXNlSW5PdXRRdWFydDogKHgpID0+IHggPCAwLjUgPyA4ICogeCAqIHggKiB4ICogeCA6IDEgLSBNYXRoLnBvdygtMiAqIHggKyAyLCA0KSAvIDIsXG5cdGVhc2VJblF1aW50OiAoeCkgPT4geCAqIHggKiB4ICogeCAqIHgsXG5cdGVhc2VPdXRRdWludDogKHgpID0+IDEgLSBNYXRoLnBvdygxIC0geCwgNSksXG5cdGVhc2VJbk91dFF1aW50OiAoeCkgPT4geCA8IDAuNSA/IDE2ICogeCAqIHggKiB4ICogeCAqIHggOiAxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgNSkgLyAyLFxuXHRlYXNlSW5FeHBvOiAoeCkgPT4geCA9PT0gMCA/IDAgOiBNYXRoLnBvdygyLCAxMCAqIHggLSAxMCksXG5cdGVhc2VPdXRFeHBvOiAoeCkgPT4geCA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLTEwICogeCksXG5cdGVhc2VJbk91dEV4cG86ICh4KSA9PiB7XG5cdFx0cmV0dXJuIHggPT09IDBcblx0XHRcdD8gMFxuXHRcdFx0OiB4ID09PSAxXG5cdFx0XHRcdD8gMVxuXHRcdFx0XHQ6IHggPCAwLjVcblx0XHRcdFx0XHQ/IE1hdGgucG93KDIsIDIwICogeCAtIDEwKSAvIDJcblx0XHRcdFx0XHQ6ICgyIC0gTWF0aC5wb3coMiwgLTIwICogeCArIDEwKSkgLyAyXG5cdH0sXG5cdGVhc2VJbkNpcmM6ICh4KSA9PiAxIC0gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4LCAyKSksXG5cdGVhc2VPdXRDaXJjOiAoeCkgPT4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0gMSwgMikpLFxuXHRlYXNlSW5PdXRDaXJjOiAoeCkgPT4ge1xuXHRcdHJldHVybiB4IDwgMC41XG5cdFx0XHQ/ICgxIC0gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdygyICogeCwgMikpKSAvIDJcblx0XHRcdDogKE1hdGguc3FydCgxIC0gTWF0aC5wb3coLTIgKiB4ICsgMiwgMikpICsgMSkgLyAyXG5cdH0sXG5cdGVhc2VJbkJhY2s6ICh4KSA9PiBjMyAqIHggKiB4ICogeCAtIGMxICogeCAqIHgsXG5cdGVhc2VPdXRCYWNrOiAoeCkgPT4gMSArIGMzICogTWF0aC5wb3coeCAtIDEsIDMpICsgYzEgKiBNYXRoLnBvdyh4IC0gMSwgMiksXG5cdGVhc2VJbk91dEJhY2s6ICh4KSA9PiB7XG5cdFx0cmV0dXJuIHggPCAwLjVcblx0XHRcdD8gKE1hdGgucG93KDIgKiB4LCAyKSAqICgoYzIgKyAxKSAqIDIgKiB4IC0gYzIpKSAvIDJcblx0XHRcdDogKE1hdGgucG93KDIgKiB4IC0gMiwgMikgKiAoKGMyICsgMSkgKiAoeCAqIDIgLSAyKSArIGMyKSArIDIpIC8gMlxuXHR9LFxuXHRlYXNlSW5FbGFzdGljOiAoeCkgPT4ge1xuXHRcdHJldHVybiB4ID09PSAwXG5cdFx0XHQ/IDBcblx0XHRcdDogeCA9PT0gMVxuXHRcdFx0XHQ/IDFcblx0XHRcdFx0OiAtTWF0aC5wb3coMiwgMTAgKiB4IC0gMTApICogTWF0aC5zaW4oKHggKiAxMCAtIDEwLjc1KSAqIGM0KVxuXHR9LFxuXHRlYXNlT3V0RWxhc3RpYzogKHgpID0+IHtcblx0XHRyZXR1cm4geCA9PT0gMFxuXHRcdFx0PyAwXG5cdFx0XHQ6IHggPT09IDFcblx0XHRcdFx0PyAxXG5cdFx0XHRcdDogTWF0aC5wb3coMiwgLTEwICogeCkgKiBNYXRoLnNpbigoeCAqIDEwIC0gMC43NSkgKiBjNCkgKyAxXG5cdH0sXG5cdGVhc2VJbk91dEVsYXN0aWM6ICh4KSA9PiB7XG5cdFx0cmV0dXJuIHggPT09IDBcblx0XHRcdD8gMFxuXHRcdFx0OiB4ID09PSAxXG5cdFx0XHRcdD8gMVxuXHRcdFx0XHQ6IHggPCAwLjVcblx0XHRcdFx0XHQ/IC0oTWF0aC5wb3coMiwgMjAgKiB4IC0gMTApICogTWF0aC5zaW4oKDIwICogeCAtIDExLjEyNSkgKiBjNSkpIC8gMlxuXHRcdFx0XHRcdDogKE1hdGgucG93KDIsIC0yMCAqIHggKyAxMCkgKiBNYXRoLnNpbigoMjAgKiB4IC0gMTEuMTI1KSAqIGM1KSkgLyAyICsgMVxuXHR9LFxuXHRlYXNlSW5Cb3VuY2U6ICh4KSA9PiAxIC0gZWFzaW5ncy5lYXNlT3V0Qm91bmNlKDEgLSB4KSxcblx0ZWFzZU91dEJvdW5jZTogKHgpID0+IHtcblx0XHRjb25zdCBuMSA9IDcuNTYyNVxuXHRcdGNvbnN0IGQxID0gMi43NVxuXHRcdGlmICh4IDwgMSAvIGQxKSB7XG5cdFx0XHRyZXR1cm4gbjEgKiB4ICogeFxuXHRcdH0gZWxzZSBpZiAoeCA8IDIgLyBkMSkge1xuXHRcdFx0cmV0dXJuIG4xICogKHggLT0gMS41IC8gZDEpICogeCArIDAuNzVcblx0XHR9IGVsc2UgaWYgKHggPCAyLjUgLyBkMSkge1xuXHRcdFx0cmV0dXJuIG4xICogKHggLT0gMi4yNSAvIGQxKSAqIHggKyAwLjkzNzVcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG4xICogKHggLT0gMi42MjUgLyBkMSkgKiB4ICsgMC45ODQzNzVcblx0XHR9XG5cdH0sXG5cdGVhc2VJbk91dEJvdW5jZTogKHgpID0+IHtcblx0XHRyZXR1cm4geCA8IDAuNVxuXHRcdFx0PyAoMSAtIGVhc2luZ3MuZWFzZU91dEJvdW5jZSgxIC0gMiAqIHgpKSAvIDJcblx0XHRcdDogKDEgKyBlYXNpbmdzLmVhc2VPdXRCb3VuY2UoMiAqIHggLSAxKSkgLyAyXG5cdH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVhc2luZ3NcbiIsICJpbXBvcnQgdHlwZSB7XG5cdEltYWdlU291cmNlLFxufSBmcm9tIFwiLi90eXBlc1wiXG5cbmltcG9ydCB7XG5cdEdmeEN0eCxcblx0VGV4dHVyZSxcbn0gZnJvbSBcIi4vZ2Z4XCJcblxuaW1wb3J0IHtcblx0VmVjMixcblx0UXVhZCxcbn0gZnJvbSBcIi4vbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleFBhY2tlciB7XG5cdHByaXZhdGUgdGV4dHVyZXM6IFRleHR1cmVbXSA9IFtdXG5cdHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuXHRwcml2YXRlIGMyZDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG5cdHByaXZhdGUgeDogbnVtYmVyID0gMFxuXHRwcml2YXRlIHk6IG51bWJlciA9IDBcblx0cHJpdmF0ZSBjdXJIZWlnaHQ6IG51bWJlciA9IDBcblx0cHJpdmF0ZSBnZng6IEdmeEN0eFxuXHRjb25zdHJ1Y3RvcihnZng6IEdmeEN0eCwgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcblx0XHR0aGlzLmdmeCA9IGdmeFxuXHRcdHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxuXHRcdHRoaXMuY2FudmFzLndpZHRoID0gd1xuXHRcdHRoaXMuY2FudmFzLmhlaWdodCA9IGhcblx0XHR0aGlzLnRleHR1cmVzID0gW1RleHR1cmUuZnJvbUltYWdlKGdmeCwgdGhpcy5jYW52YXMpXVxuXHRcdHRoaXMuYzJkID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG5cdH1cblx0YWRkKGltZzogSW1hZ2VTb3VyY2UpOiBbVGV4dHVyZSwgUXVhZF0ge1xuXHRcdGlmIChpbWcud2lkdGggPiB0aGlzLmNhbnZhcy53aWR0aCB8fCBpbWcuaGVpZ2h0ID4gdGhpcy5jYW52YXMuaGVpZ2h0KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFRleHR1cmUgc2l6ZSAoJHtpbWcud2lkdGh9IHggJHtpbWcuaGVpZ2h0fSkgZXhjZWVkcyBsaW1pdCAoJHt0aGlzLmNhbnZhcy53aWR0aH0geCAke3RoaXMuY2FudmFzLmhlaWdodH0pYClcblx0XHR9XG5cdFx0Ly8gbmV4dCByb3dcblx0XHRpZiAodGhpcy54ICsgaW1nLndpZHRoID4gdGhpcy5jYW52YXMud2lkdGgpIHtcblx0XHRcdHRoaXMueCA9IDBcblx0XHRcdHRoaXMueSArPSB0aGlzLmN1ckhlaWdodFxuXHRcdFx0dGhpcy5jdXJIZWlnaHQgPSAwXG5cdFx0fVxuXHRcdC8vIG5leHQgdGV4dHVyZVxuXHRcdGlmICh0aGlzLnkgKyBpbWcuaGVpZ2h0ID4gdGhpcy5jYW52YXMuaGVpZ2h0KSB7XG5cdFx0XHR0aGlzLmMyZC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcblx0XHRcdHRoaXMudGV4dHVyZXMucHVzaChUZXh0dXJlLmZyb21JbWFnZSh0aGlzLmdmeCwgdGhpcy5jYW52YXMpKVxuXHRcdFx0dGhpcy54ID0gMFxuXHRcdFx0dGhpcy55ID0gMFxuXHRcdFx0dGhpcy5jdXJIZWlnaHQgPSAwXG5cdFx0fVxuXHRcdGNvbnN0IGN1clRleCA9IHRoaXMudGV4dHVyZXNbdGhpcy50ZXh0dXJlcy5sZW5ndGggLSAxXVxuXHRcdGNvbnN0IHBvcyA9IG5ldyBWZWMyKHRoaXMueCwgdGhpcy55KVxuXHRcdHRoaXMueCArPSBpbWcud2lkdGhcblx0XHRpZiAoaW1nLmhlaWdodCA+IHRoaXMuY3VySGVpZ2h0KSB7XG5cdFx0XHR0aGlzLmN1ckhlaWdodCA9IGltZy5oZWlnaHRcblx0XHR9XG5cdFx0aWYgKGltZyBpbnN0YW5jZW9mIEltYWdlRGF0YSkge1xuXHRcdFx0dGhpcy5jMmQucHV0SW1hZ2VEYXRhKGltZywgcG9zLngsIHBvcy55KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmMyZC5kcmF3SW1hZ2UoaW1nLCBwb3MueCwgcG9zLnkpXG5cdFx0fVxuXHRcdGN1clRleC51cGRhdGUodGhpcy5jYW52YXMpXG5cdFx0cmV0dXJuIFtjdXJUZXgsIG5ldyBRdWFkKFxuXHRcdFx0cG9zLnggLyB0aGlzLmNhbnZhcy53aWR0aCxcblx0XHRcdHBvcy55IC8gdGhpcy5jYW52YXMuaGVpZ2h0LFxuXHRcdFx0aW1nLndpZHRoIC8gdGhpcy5jYW52YXMud2lkdGgsXG5cdFx0XHRpbWcuaGVpZ2h0IC8gdGhpcy5jYW52YXMuaGVpZ2h0LFxuXHRcdCldXG5cdH1cblx0ZnJlZSgpIHtcblx0XHRmb3IgKGNvbnN0IHRleCBvZiB0aGlzLnRleHR1cmVzKSB7XG5cdFx0XHR0ZXguZnJlZSgpXG5cdFx0fVxuXHR9XG59XG4iLCAiY29uc3QgVkVSU0lPTiA9IFwiMzAwMC4xLjE3XCJcblxuaW1wb3J0IGluaXRBcHAgZnJvbSBcIi4vYXBwXCJcbmltcG9ydCBpbml0R2Z4LCB7XG5cdFRleHR1cmUsXG5cdEZyYW1lQnVmZmVyLFxuXHRTaGFkZXIsXG5cdEJhdGNoUmVuZGVyZXIsXG59IGZyb20gXCIuL2dmeFwiXG5cbmltcG9ydCB7XG5cdEFzc2V0LFxuXHRBc3NldEJ1Y2tldCxcblx0ZmV0Y2hBcnJheUJ1ZmZlcixcblx0ZmV0Y2hKU09OLFxuXHRmZXRjaFRleHQsXG5cdGxvYWRJbWcsXG59IGZyb20gXCIuL2Fzc2V0c1wiXG5cbmltcG9ydCB7XG5cdHNhdCxcblx0dmVjMixcblx0UmVjdCxcblx0UG9seWdvbixcblx0TGluZSxcblx0Q2lyY2xlLFxuXHRDb2xvcixcblx0VmVjMixcblx0TWF0NCxcblx0UXVhZCxcblx0Uk5HLFxuXHRxdWFkLFxuXHRyZ2IsXG5cdGhzbDJyZ2IsXG5cdHJhbmQsXG5cdHJhbmRpLFxuXHRyYW5kU2VlZCxcblx0Y2hhbmNlLFxuXHRjaG9vc2UsXG5cdGNsYW1wLFxuXHRsZXJwLFxuXHRtYXAsXG5cdG1hcGMsXG5cdHdhdmUsXG5cdHRlc3RMaW5lUG9pbnQsXG5cdHRlc3RMaW5lTGluZSxcblx0dGVzdExpbmVDaXJjbGUsXG5cdHRlc3RSZWN0UmVjdCxcblx0dGVzdFJlY3RMaW5lLFxuXHR0ZXN0UmVjdFBvaW50LFxuXHR0ZXN0UG9seWdvblBvaW50LFxuXHR0ZXN0Q2lyY2xlUG9seWdvbixcblx0ZGVnMnJhZCxcblx0cmFkMmRlZyxcbn0gZnJvbSBcIi4vbWF0aFwiXG5cbmltcG9ydCBlYXNpbmdzIGZyb20gXCIuL2Vhc2luZ3NcIlxuaW1wb3J0IFRleFBhY2tlciBmcm9tIFwiLi90ZXhQYWNrZXJcIlxuXG5pbXBvcnQge1xuXHRSZWdpc3RyeSxcblx0RXZlbnQsXG5cdEV2ZW50SGFuZGxlcixcblx0ZG93bmxvYWQsXG5cdGRvd25sb2FkVGV4dCxcblx0ZG93bmxvYWRKU09OLFxuXHRkb3dubG9hZEJsb2IsXG5cdHVpZCxcblx0aXNEYXRhVVJMLFxuXHRnZXRGaWxlTmFtZSxcblx0b3ZlcmxvYWQyLFxuXHRkYXRhVVJMVG9BcnJheUJ1ZmZlcixcblx0RXZlbnRDb250cm9sbGVyLFxuXHRnZXRFcnJvck1lc3NhZ2UsXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHR3YXJuLFxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblx0YmVuY2htYXJrLFxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblx0Y29tcGFyZVBlcmYsXG5cdEJpbmFyeUhlYXAsXG5cdHJ1bmVzLFxufSBmcm9tIFwiLi91dGlsc1wiXG5cbmltcG9ydCB0eXBlIHtcblx0R2Z4Rm9udCxcblx0UmVuZGVyUHJvcHMsXG5cdENoYXJUcmFuc2Zvcm0sXG5cdEltYWdlU291cmNlLFxuXHRGb3JtYXR0ZWRUZXh0LFxuXHRGb3JtYXR0ZWRDaGFyLFxuXHREcmF3UmVjdE9wdCxcblx0RHJhd0xpbmVPcHQsXG5cdERyYXdMaW5lc09wdCxcblx0RHJhd1RyaWFuZ2xlT3B0LFxuXHREcmF3UG9seWdvbk9wdCxcblx0RHJhd0NpcmNsZU9wdCxcblx0RHJhd0VsbGlwc2VPcHQsXG5cdERyYXdVVlF1YWRPcHQsXG5cdFZlcnRleCxcblx0Qml0bWFwRm9udERhdGEsXG5cdFNoYWRlckRhdGEsXG5cdEFzZXByaXRlRGF0YSxcblx0TG9hZFNwcml0ZVNyYyxcblx0TG9hZFNwcml0ZU9wdCxcblx0U3ByaXRlQXRsYXNEYXRhLFxuXHRMb2FkQml0bWFwRm9udE9wdCxcblx0S2Fib29tQ3R4LFxuXHRLYWJvb21PcHQsXG5cdEF1ZGlvUGxheSxcblx0QXVkaW9QbGF5T3B0LFxuXHREcmF3U3ByaXRlT3B0LFxuXHREcmF3VGV4dE9wdCxcblx0VGV4dEFsaWduLFxuXHRHYW1lT2JqLFxuXHRTY2VuZU5hbWUsXG5cdFNjZW5lRGVmLFxuXHRDb21wTGlzdCxcblx0Q29tcCxcblx0VGFnLFxuXHRLZXksXG5cdE1vdXNlQnV0dG9uLFxuXHRQb3NDb21wLFxuXHRTY2FsZUNvbXAsXG5cdFJvdGF0ZUNvbXAsXG5cdENvbG9yQ29tcCxcblx0T3BhY2l0eUNvbXAsXG5cdEFuY2hvcixcblx0QW5jaG9yQ29tcCxcblx0WkNvbXAsXG5cdEZvbGxvd0NvbXAsXG5cdE9mZlNjcmVlbkNvbXBPcHQsXG5cdE9mZlNjcmVlbkNvbXAsXG5cdEFyZWFDb21wT3B0LFxuXHRBcmVhQ29tcCxcblx0U3ByaXRlQ29tcCxcblx0U3ByaXRlQ29tcE9wdCxcblx0U3ByaXRlQW5pbVBsYXlPcHQsXG5cdFNwcml0ZUFuaW1zLFxuXHRUZXh0Q29tcCxcblx0VGV4dENvbXBPcHQsXG5cdFJlY3RDb21wLFxuXHRSZWN0Q29tcE9wdCxcblx0VVZRdWFkQ29tcCxcblx0Q2lyY2xlQ29tcE9wdCxcblx0Q2lyY2xlQ29tcCxcblx0T3V0bGluZUNvbXAsXG5cdFRpbWVyQ29tcCxcblx0Qm9keUNvbXAsXG5cdEJvZHlDb21wT3B0LFxuXHRVbmlmb3JtLFxuXHRTaGFkZXJDb21wLFxuXHRGaXhlZENvbXAsXG5cdFN0YXlDb21wLFxuXHRIZWFsdGhDb21wLFxuXHRMaWZlc3BhbkNvbXBPcHQsXG5cdFN0YXRlQ29tcCxcblx0RGVidWcsXG5cdEthYm9vbVBsdWdpbixcblx0RW1wdHlDb21wLFxuXHRMZXZlbENvbXAsXG5cdEVkZ2UsXG5cdFRpbGVDb21wLFxuXHRUaWxlQ29tcE9wdCxcblx0TGV2ZWxPcHQsXG5cdFJlY29yZGluZyxcblx0Qm9vbU9wdCxcblx0UGVkaXRGaWxlLFxuXHRTaGFwZSxcblx0RG91YmxlSnVtcENvbXAsXG5cdFRpbWVyQ29udHJvbGxlcixcblx0VHdlZW5Db250cm9sbGVyLFxuXHRMb2FkRm9udE9wdCxcblx0QWdlbnRDb21wLFxuXHRBZ2VudENvbXBPcHQsXG5cdFBhdGhGaW5kT3B0LFxuXHRHZXRPcHQsXG5cdFZlYzJBcmdzLFxuXHROaW5lU2xpY2UsXG5cdExlcnBWYWx1ZSxcblx0VGV4RmlsdGVyLFxuXHRNYXNrQ29tcCxcblx0TWFzayxcblx0T3V0bGluZSxcblx0UG9seWdvbkNvbXAsXG5cdFBvbHlnb25Db21wT3B0LFxufSBmcm9tIFwiLi90eXBlc1wiXG5cbmltcG9ydCBiZWFuU3ByaXRlU3JjIGZyb20gXCIuL2Fzc2V0cy9iZWFuLnBuZ1wiXG5pbXBvcnQgYnVycFNvdW5kU3JjIGZyb20gXCIuL2Fzc2V0cy9idXJwLm1wM1wiXG5pbXBvcnQga2FTcHJpdGVTcmMgZnJvbSBcIi4vYXNzZXRzL2thLnBuZ1wiXG5pbXBvcnQgYm9vbVNwcml0ZVNyYyBmcm9tIFwiLi9hc3NldHMvYm9vbS5wbmdcIlxuXG5pbnRlcmZhY2UgU3ByaXRlQ3VyQW5pbSB7XG5cdG5hbWU6IHN0cmluZyxcblx0dGltZXI6IG51bWJlcixcblx0bG9vcDogYm9vbGVhbixcblx0c3BlZWQ6IG51bWJlcixcblx0cGluZ3Bvbmc6IGJvb2xlYW4sXG5cdG9uRW5kOiAoKSA9PiB2b2lkLFxufVxuXG4vLyBzb21lIGRlZmF1bHQgY2hhcnNldHMgZm9yIGxvYWRpbmcgYml0bWFwIGZvbnRzXG5jb25zdCBBU0NJSV9DSEFSUyA9IFwiICFcXFwiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXFxcXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5cIlxuXG5jb25zdCBERUZfQU5DSE9SID0gXCJ0b3BsZWZ0XCJcbmNvbnN0IEJHX0dSSURfU0laRSA9IDY0XG5cbmNvbnN0IERFRl9GT05UID0gXCJtb25vc3BhY2VcIlxuY29uc3QgREJHX0ZPTlQgPSBcIm1vbm9zcGFjZVwiXG5jb25zdCBERUZfVEVYVF9TSVpFID0gMzZcbmNvbnN0IERFRl9URVhUX0NBQ0hFX1NJWkUgPSA2NFxuY29uc3QgTUFYX1RFWFRfQ0FDSEVfU0laRSA9IDI1NlxuY29uc3QgRk9OVF9BVExBU19XSURUSCA9IDIwNDhcbmNvbnN0IEZPTlRfQVRMQVNfSEVJR0hUID0gMjA0OFxuY29uc3QgU1BSSVRFX0FUTEFTX1dJRFRIID0gMjA0OFxuY29uc3QgU1BSSVRFX0FUTEFTX0hFSUdIVCA9IDIwNDhcbi8vIDAuMSBwaXhlbCBwYWRkaW5nIHRvIHRleHR1cmUgY29vcmRpbmF0ZXMgdG8gcHJldmVudCBhcnRpZmFjdFxuY29uc3QgVVZfUEFEID0gMC4xXG5jb25zdCBERUZfSEFTSF9HUklEX1NJWkUgPSA2NFxuY29uc3QgREVGX0ZPTlRfRklMVEVSID0gXCJsaW5lYXJcIlxuXG5jb25zdCBMT0dfTUFYID0gOFxuY29uc3QgTE9HX1RJTUUgPSA0XG5cbmNvbnN0IFZFUlRFWF9GT1JNQVQgPSBbXG5cdHsgbmFtZTogXCJhX3Bvc1wiLCBzaXplOiAyIH0sXG5cdHsgbmFtZTogXCJhX3V2XCIsIHNpemU6IDIgfSxcblx0eyBuYW1lOiBcImFfY29sb3JcIiwgc2l6ZTogNCB9LFxuXVxuXG5jb25zdCBTVFJJREUgPSBWRVJURVhfRk9STUFULnJlZHVjZSgoc3VtLCBmKSA9PiBzdW0gKyBmLnNpemUsIDApXG5cbmNvbnN0IE1BWF9CQVRDSEVEX1FVQUQgPSAyMDQ4XG5jb25zdCBNQVhfQkFUQ0hFRF9WRVJUUyA9IE1BWF9CQVRDSEVEX1FVQUQgKiA0ICogU1RSSURFXG5jb25zdCBNQVhfQkFUQ0hFRF9JTkRJQ0VTID0gTUFYX0JBVENIRURfUVVBRCAqIDZcblxuLy8gdmVydGV4IHNoYWRlciB0ZW1wbGF0ZSwgcmVwbGFjZSB7e3VzZXJ9fSB3aXRoIHVzZXIgdmVydGV4IHNoYWRlciBjb2RlXG5jb25zdCBWRVJUX1RFTVBMQVRFID0gYFxuYXR0cmlidXRlIHZlYzIgYV9wb3M7XG5hdHRyaWJ1dGUgdmVjMiBhX3V2O1xuYXR0cmlidXRlIHZlYzQgYV9jb2xvcjtcblxudmFyeWluZyB2ZWMyIHZfcG9zO1xudmFyeWluZyB2ZWMyIHZfdXY7XG52YXJ5aW5nIHZlYzQgdl9jb2xvcjtcblxudmVjNCBkZWZfdmVydCgpIHtcblx0cmV0dXJuIHZlYzQoYV9wb3MsIDAuMCwgMS4wKTtcbn1cblxue3t1c2VyfX1cblxudm9pZCBtYWluKCkge1xuXHR2ZWM0IHBvcyA9IHZlcnQoYV9wb3MsIGFfdXYsIGFfY29sb3IpO1xuXHR2X3BvcyA9IGFfcG9zO1xuXHR2X3V2ID0gYV91djtcblx0dl9jb2xvciA9IGFfY29sb3I7XG5cdGdsX1Bvc2l0aW9uID0gcG9zO1xufVxuYFxuXG4vLyBmcmFnbWVudCBzaGFkZXIgdGVtcGxhdGUsIHJlcGxhY2Uge3t1c2VyfX0gd2l0aCB1c2VyIGZyYWdtZW50IHNoYWRlciBjb2RlXG5jb25zdCBGUkFHX1RFTVBMQVRFID0gYFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG5cbnZhcnlpbmcgdmVjMiB2X3BvcztcbnZhcnlpbmcgdmVjMiB2X3V2O1xudmFyeWluZyB2ZWM0IHZfY29sb3I7XG5cbnVuaWZvcm0gc2FtcGxlcjJEIHVfdGV4O1xuXG52ZWM0IGRlZl9mcmFnKCkge1xuXHRyZXR1cm4gdl9jb2xvciAqIHRleHR1cmUyRCh1X3RleCwgdl91dik7XG59XG5cbnt7dXNlcn19XG5cbnZvaWQgbWFpbigpIHtcblx0Z2xfRnJhZ0NvbG9yID0gZnJhZyh2X3Bvcywgdl91diwgdl9jb2xvciwgdV90ZXgpO1xuXHRpZiAoZ2xfRnJhZ0NvbG9yLmEgPT0gMC4wKSB7XG5cdFx0ZGlzY2FyZDtcblx0fVxufVxuYFxuXG4vLyBkZWZhdWx0IHt7dXNlcn19IHZlcnRleCBzaGFkZXIgY29kZVxuY29uc3QgREVGX1ZFUlQgPSBgXG52ZWM0IHZlcnQodmVjMiBwb3MsIHZlYzIgdXYsIHZlYzQgY29sb3IpIHtcblx0cmV0dXJuIGRlZl92ZXJ0KCk7XG59XG5gXG5cbi8vIGRlZmF1bHQge3t1c2VyfX0gZnJhZ21lbnQgc2hhZGVyIGNvZGVcbmNvbnN0IERFRl9GUkFHID0gYFxudmVjNCBmcmFnKHZlYzIgcG9zLCB2ZWMyIHV2LCB2ZWM0IGNvbG9yLCBzYW1wbGVyMkQgdGV4KSB7XG5cdHJldHVybiBkZWZfZnJhZygpO1xufVxuYFxuXG5jb25zdCBDT01QX0RFU0MgPSBuZXcgU2V0KFtcblx0XCJpZFwiLFxuXHRcInJlcXVpcmVcIixcbl0pXG5cbmNvbnN0IENPTVBfRVZFTlRTID0gbmV3IFNldChbXG5cdFwiYWRkXCIsXG5cdFwidXBkYXRlXCIsXG5cdFwiZHJhd1wiLFxuXHRcImRlc3Ryb3lcIixcblx0XCJpbnNwZWN0XCIsXG5cdFwiZHJhd0luc3BlY3RcIixcbl0pXG5cbi8vIGNvbnZlcnQgYW5jaG9yIHN0cmluZyB0byBhIHZlYzIgb2Zmc2V0XG5mdW5jdGlvbiBhbmNob3JQdChvcmlnOiBBbmNob3IgfCBWZWMyKTogVmVjMiB7XG5cdHN3aXRjaCAob3JpZykge1xuXHRcdGNhc2UgXCJ0b3BsZWZ0XCI6IHJldHVybiBuZXcgVmVjMigtMSwgLTEpXG5cdFx0Y2FzZSBcInRvcFwiOiByZXR1cm4gbmV3IFZlYzIoMCwgLTEpXG5cdFx0Y2FzZSBcInRvcHJpZ2h0XCI6IHJldHVybiBuZXcgVmVjMigxLCAtMSlcblx0XHRjYXNlIFwibGVmdFwiOiByZXR1cm4gbmV3IFZlYzIoLTEsIDApXG5cdFx0Y2FzZSBcImNlbnRlclwiOiByZXR1cm4gbmV3IFZlYzIoMCwgMClcblx0XHRjYXNlIFwicmlnaHRcIjogcmV0dXJuIG5ldyBWZWMyKDEsIDApXG5cdFx0Y2FzZSBcImJvdGxlZnRcIjogcmV0dXJuIG5ldyBWZWMyKC0xLCAxKVxuXHRcdGNhc2UgXCJib3RcIjogcmV0dXJuIG5ldyBWZWMyKDAsIDEpXG5cdFx0Y2FzZSBcImJvdHJpZ2h0XCI6IHJldHVybiBuZXcgVmVjMigxLCAxKVxuXHRcdGRlZmF1bHQ6IHJldHVybiBvcmlnXG5cdH1cbn1cblxuZnVuY3Rpb24gYWxpZ25QdChhbGlnbjogVGV4dEFsaWduKTogbnVtYmVyIHtcblx0c3dpdGNoIChhbGlnbikge1xuXHRcdGNhc2UgXCJsZWZ0XCI6IHJldHVybiAwXG5cdFx0Y2FzZSBcImNlbnRlclwiOiByZXR1cm4gMC41XG5cdFx0Y2FzZSBcInJpZ2h0XCI6IHJldHVybiAxXG5cdFx0ZGVmYXVsdDogcmV0dXJuIDBcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXB0eUF1ZGlvQnVmZmVyKGN0eDogQXVkaW9Db250ZXh0KSB7XG5cdHJldHVybiBjdHguY3JlYXRlQnVmZmVyKDEsIDEsIDQ0MTAwKVxufVxuXG4vLyBvbmx5IGV4cG9ydHMgb25lIGthYm9vbSgpIHdoaWNoIGNvbnRhaW5zIGFsbCB0aGUgc3RhdGVcbmV4cG9ydCBkZWZhdWx0IChnb3B0OiBLYWJvb21PcHQgPSB7fSk6IEthYm9vbUN0eCA9PiB7XG5cblx0Y29uc3Qgcm9vdCA9IGdvcHQucm9vdCA/PyBkb2N1bWVudC5ib2R5XG5cblx0Ly8gaWYgcm9vdCBpcyBub3QgZGVmaW5lZCAod2hpY2ggZmFsbHMgYmFjayB0byA8Ym9keT4pIHdlIGFzc3VtZSB1c2VyIGlzIHVzaW5nIGthYm9vbSBvbiBhIGNsZWFuIHBhZ2UsIGFuZCBtb2RpZnkgPGJvZHk+IHRvIGJldHRlciBmaXQgYSBmdWxsIHNjcmVlbiBjYW52YXNcblx0aWYgKHJvb3QgPT09IGRvY3VtZW50LmJvZHkpIHtcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlW1wid2lkdGhcIl0gPSBcIjEwMCVcIlxuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGVbXCJoZWlnaHRcIl0gPSBcIjEwMCVcIlxuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGVbXCJtYXJnaW5cIl0gPSBcIjBweFwiXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlW1wid2lkdGhcIl0gPSBcIjEwMCVcIlxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVtcImhlaWdodFwiXSA9IFwiMTAwJVwiXG5cdH1cblxuXHQvLyBjcmVhdGUgYSA8Y2FudmFzPiBpZiB1c2VyIGRpZG4ndCBwcm92aWRlIG9uZVxuXHRjb25zdCBjYW52YXMgPSBnb3B0LmNhbnZhcyA/PyAoKCkgPT4ge1xuXHRcdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcblx0XHRyb290LmFwcGVuZENoaWxkKGNhbnZhcylcblx0XHRyZXR1cm4gY2FudmFzXG5cdH0pKClcblxuXHQvLyBnbG9iYWwgcGl4ZWwgc2NhbGVcblx0Y29uc3QgZ3NjYWxlID0gZ29wdC5zY2FsZSA/PyAxXG5cdGNvbnN0IGZpeGVkU2l6ZSA9IGdvcHQud2lkdGggJiYgZ29wdC5oZWlnaHQgJiYgIWdvcHQuc3RyZXRjaCAmJiAhZ29wdC5sZXR0ZXJib3hcblxuXHQvLyBhZGp1c3QgY2FudmFzIHNpemUgYWNjb3JkaW5nIHRvIHVzZXIgc2l6ZSAvIHZpZXdwb3J0IHNldHRpbmdzXG5cdGlmIChmaXhlZFNpemUpIHtcblx0XHRjYW52YXMud2lkdGggPSBnb3B0LndpZHRoICogZ3NjYWxlXG5cdFx0Y2FudmFzLmhlaWdodCA9IGdvcHQuaGVpZ2h0ICogZ3NjYWxlXG5cdH0gZWxzZSB7XG5cdFx0Y2FudmFzLndpZHRoID0gY2FudmFzLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGhcblx0XHRjYW52YXMuaGVpZ2h0ID0gY2FudmFzLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0XG5cdH1cblxuXHQvLyBjYW52YXMgY3NzIHN0eWxlc1xuXHRjb25zdCBzdHlsZXMgPSBbXG5cdFx0XCJvdXRsaW5lOiBub25lXCIsXG5cdFx0XCJjdXJzb3I6IGRlZmF1bHRcIixcblx0XVxuXG5cdGlmIChmaXhlZFNpemUpIHtcblx0XHRjb25zdCBjdyA9IGNhbnZhcy53aWR0aFxuXHRcdGNvbnN0IGNoID0gY2FudmFzLmhlaWdodFxuXHRcdHN0eWxlcy5wdXNoKGB3aWR0aDogJHtjd31weGApXG5cdFx0c3R5bGVzLnB1c2goYGhlaWdodDogJHtjaH1weGApXG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVzLnB1c2goXCJ3aWR0aDogMTAwJVwiKVxuXHRcdHN0eWxlcy5wdXNoKFwiaGVpZ2h0OiAxMDAlXCIpXG5cdH1cblxuXHRpZiAoZ29wdC5jcmlzcCkge1xuXHRcdC8vIGNocm9tZSBvbmx5IHN1cHBvcnRzIHBpeGVsYXRlZCBhbmQgZmlyZWZveCBvbmx5IHN1cHBvcnRzIGNyaXNwLWVkZ2VzXG5cdFx0c3R5bGVzLnB1c2goXCJpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZFwiKVxuXHRcdHN0eWxlcy5wdXNoKFwiaW1hZ2UtcmVuZGVyaW5nOiBjcmlzcC1lZGdlc1wiKVxuXHR9XG5cblx0Y2FudmFzLnN0eWxlLmNzc1RleHQgPSBzdHlsZXMuam9pbihcIjtcIilcblxuXHRjb25zdCBwaXhlbERlbnNpdHkgPSBnb3B0LnBpeGVsRGVuc2l0eSB8fCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuXG5cdGNhbnZhcy53aWR0aCAqPSBwaXhlbERlbnNpdHlcblx0Y2FudmFzLmhlaWdodCAqPSBwaXhlbERlbnNpdHlcblx0Ly8gbWFrZSBjYW52YXMgZm9jdXNhYmxlXG5cdGNhbnZhcy50YWJJbmRleCA9IDBcblxuXHRjb25zdCBmb250Q2FjaGVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXG5cdGZvbnRDYWNoZUNhbnZhcy53aWR0aCA9IE1BWF9URVhUX0NBQ0hFX1NJWkVcblx0Zm9udENhY2hlQ2FudmFzLmhlaWdodCA9IE1BWF9URVhUX0NBQ0hFX1NJWkVcblx0Y29uc3QgZm9udENhY2hlQzJkID0gZm9udENhY2hlQ2FudmFzLmdldENvbnRleHQoXCIyZFwiLCB7XG5cdFx0d2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlLFxuXHR9KVxuXG5cdGNvbnN0IGFwcCA9IGluaXRBcHAoe1xuXHRcdGNhbnZhczogY2FudmFzLFxuXHRcdHRvdWNoVG9Nb3VzZTogZ29wdC50b3VjaFRvTW91c2UsXG5cdFx0Z2FtZXBhZHM6IGdvcHQuZ2FtZXBhZHMsXG5cdFx0cGl4ZWxEZW5zaXR5OiBnb3B0LnBpeGVsRGVuc2l0eSxcblx0XHRtYXhGUFM6IGdvcHQubWF4RlBTLFxuXHR9KVxuXG5cdGNvbnN0IGdjOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdXG5cblx0Y29uc3QgZ2wgPSBhcHAuY2FudmFzXG5cdFx0LmdldENvbnRleHQoXCJ3ZWJnbFwiLCB7XG5cdFx0XHRhbnRpYWxpYXM6IHRydWUsXG5cdFx0XHRkZXB0aDogdHJ1ZSxcblx0XHRcdHN0ZW5jaWw6IHRydWUsXG5cdFx0XHRhbHBoYTogdHJ1ZSxcblx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHR9KVxuXG5cdGNvbnN0IGdnbCA9IGluaXRHZngoZ2wsIHtcblx0XHR0ZXhGaWx0ZXI6IGdvcHQudGV4RmlsdGVyLFxuXHR9KVxuXG5cdGNvbnN0IGdmeCA9ICgoKSA9PiB7XG5cblx0XHRjb25zdCBkZWZTaGFkZXIgPSBtYWtlU2hhZGVyKERFRl9WRVJULCBERUZfRlJBRylcblxuXHRcdC8vIGEgMXgxIHdoaXRlIHRleHR1cmUgdG8gZHJhdyByYXcgc2hhcGVzIGxpa2UgcmVjdGFuZ2xlcyBhbmQgcG9seWdvbnNcblx0XHQvLyB3ZSB1c2UgYSB0ZXh0dXJlIGZvciB0aG9zZSBzbyB3ZSBjYW4gdXNlIG9ubHkgMSBwaXBlbGluZSBmb3IgZHJhd2luZyBzcHJpdGVzICsgc2hhcGVzXG5cdFx0Y29uc3QgZW1wdHlUZXggPSBUZXh0dXJlLmZyb21JbWFnZShcblx0XHRcdGdnbCxcblx0XHRcdG5ldyBJbWFnZURhdGEobmV3IFVpbnQ4Q2xhbXBlZEFycmF5KFsgMjU1LCAyNTUsIDI1NSwgMjU1IF0pLCAxLCAxKSxcblx0XHQpXG5cblx0XHRjb25zdCBmcmFtZUJ1ZmZlciA9IChnb3B0LndpZHRoICYmIGdvcHQuaGVpZ2h0KVxuXHRcdFx0PyBuZXcgRnJhbWVCdWZmZXIoZ2dsLCBnb3B0LndpZHRoICogcGl4ZWxEZW5zaXR5ICogZ3NjYWxlLCBnb3B0LmhlaWdodCAqIHBpeGVsRGVuc2l0eSAqIGdzY2FsZSlcblx0XHRcdDogbmV3IEZyYW1lQnVmZmVyKGdnbCwgZ2wuZHJhd2luZ0J1ZmZlcldpZHRoLCBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0KVxuXG5cdFx0bGV0IGJnQ29sb3I6IG51bGwgfCBDb2xvciA9IG51bGxcblx0XHRsZXQgYmdBbHBoYSA9IDFcblxuXHRcdGlmIChnb3B0LmJhY2tncm91bmQpIHtcblx0XHRcdGJnQ29sb3IgPSByZ2IoZ29wdC5iYWNrZ3JvdW5kKVxuXHRcdFx0YmdBbHBoYSA9IEFycmF5LmlzQXJyYXkoZ29wdC5iYWNrZ3JvdW5kKSA/IGdvcHQuYmFja2dyb3VuZFszXSA6IDFcblx0XHRcdGdsLmNsZWFyQ29sb3IoXG5cdFx0XHRcdGJnQ29sb3IuciAvIDI1NSxcblx0XHRcdFx0YmdDb2xvci5nIC8gMjU1LFxuXHRcdFx0XHRiZ0NvbG9yLmIgLyAyNTUsXG5cdFx0XHRcdGJnQWxwaGEgPz8gMSxcblx0XHRcdClcblx0XHR9XG5cblx0XHRnbC5lbmFibGUoZ2wuQkxFTkQpXG5cdFx0Z2wuYmxlbmRGdW5jU2VwYXJhdGUoXG5cdFx0XHRnbC5TUkNfQUxQSEEsXG5cdFx0XHRnbC5PTkVfTUlOVVNfU1JDX0FMUEhBLFxuXHRcdFx0Z2wuT05FLFxuXHRcdFx0Z2wuT05FX01JTlVTX1NSQ19BTFBIQSxcblx0XHQpXG5cblx0XHRjb25zdCByZW5kZXJlciA9IG5ldyBCYXRjaFJlbmRlcmVyKGdnbCwgVkVSVEVYX0ZPUk1BVCwgTUFYX0JBVENIRURfVkVSVFMsIE1BWF9CQVRDSEVEX0lORElDRVMpXG5cblx0XHQvLyBhIGNoZWNrZXJib2FyZCB0ZXh0dXJlIHVzZWQgZm9yIHRoZSBkZWZhdWx0IGJhY2tncm91bmRcblx0XHRjb25zdCBiZ1RleCA9IFRleHR1cmUuZnJvbUltYWdlKFxuXHRcdFx0Z2dsLFxuXHRcdFx0bmV3IEltYWdlRGF0YShuZXcgVWludDhDbGFtcGVkQXJyYXkoW1xuXHRcdFx0XHQxMjgsIDEyOCwgMTI4LCAyNTUsXG5cdFx0XHRcdDE5MCwgMTkwLCAxOTAsIDI1NSxcblx0XHRcdFx0MTkwLCAxOTAsIDE5MCwgMjU1LFxuXHRcdFx0XHQxMjgsIDEyOCwgMTI4LCAyNTUsXG5cdFx0XHRdKSwgMiwgMiksIHtcblx0XHRcdFx0d3JhcDogXCJyZXBlYXRcIixcblx0XHRcdFx0ZmlsdGVyOiBcIm5lYXJlc3RcIixcblx0XHRcdH0sXG5cdFx0KVxuXG5cdFx0cmV0dXJuIHtcblxuXHRcdFx0Ly8gaG93IG1hbnkgZHJhdyBjYWxscyB3ZSdyZSBkb2luZyBsYXN0IGZyYW1lLCB0aGlzIGlzIHRoZSBudW1iZXIgd2UgZ2l2ZSB0byB1c2Vyc1xuXHRcdFx0bGFzdERyYXdDYWxsczogMCxcblxuXHRcdFx0Ly8gZ2Z4IHN0YXRlc1xuXHRcdFx0ZGVmU2hhZGVyOiBkZWZTaGFkZXIsXG5cdFx0XHRkZWZUZXg6IGVtcHR5VGV4LFxuXHRcdFx0ZnJhbWVCdWZmZXI6IGZyYW1lQnVmZmVyLFxuXHRcdFx0cG9zdFNoYWRlcjogbnVsbCxcblx0XHRcdHBvc3RTaGFkZXJVbmlmb3JtOiBudWxsLFxuXHRcdFx0cmVuZGVyZXI6IHJlbmRlcmVyLFxuXG5cdFx0XHR0cmFuc2Zvcm06IG5ldyBNYXQ0KCksXG5cdFx0XHR0cmFuc2Zvcm1TdGFjazogW10sXG5cblx0XHRcdGJnVGV4OiBiZ1RleCxcblx0XHRcdGJnQ29sb3I6IGJnQ29sb3IsXG5cdFx0XHRiZ0FscGhhOiBiZ0FscGhhLFxuXG5cdFx0XHR3aWR0aDogZ29wdC53aWR0aCA/PyBnbC5kcmF3aW5nQnVmZmVyV2lkdGggLyBwaXhlbERlbnNpdHkgLyBnc2NhbGUsXG5cdFx0XHRoZWlnaHQ6IGdvcHQuaGVpZ2h0ID8/IGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQgLyBwaXhlbERlbnNpdHkgLyBnc2NhbGUsXG5cblx0XHRcdHZpZXdwb3J0OiB7XG5cdFx0XHRcdHg6IDAsXG5cdFx0XHRcdHk6IDAsXG5cdFx0XHRcdHdpZHRoOiBnbC5kcmF3aW5nQnVmZmVyV2lkdGgsXG5cdFx0XHRcdGhlaWdodDogZ2wuZHJhd2luZ0J1ZmZlckhlaWdodCxcblx0XHRcdH0sXG5cblx0XHRcdGZpeGVkOiBmYWxzZSxcblxuXHRcdH1cblxuXHR9KSgpXG5cblx0Y2xhc3MgU3ByaXRlRGF0YSB7XG5cblx0XHR0ZXg6IFRleHR1cmVcblx0XHRmcmFtZXM6IFF1YWRbXSA9IFsgbmV3IFF1YWQoMCwgMCwgMSwgMSkgXVxuXHRcdGFuaW1zOiBTcHJpdGVBbmltcyA9IHt9XG5cdFx0c2xpY2U5OiBOaW5lU2xpY2UgfCBudWxsID0gbnVsbFxuXG5cdFx0Y29uc3RydWN0b3IoXG5cdFx0XHR0ZXg6IFRleHR1cmUsXG5cdFx0XHRmcmFtZXM/OiBRdWFkW10sXG5cdFx0XHRhbmltczogU3ByaXRlQW5pbXMgPSB7fSxcblx0XHRcdHNsaWNlOTogTmluZVNsaWNlID0gbnVsbCxcblx0XHQpIHtcblx0XHRcdHRoaXMudGV4ID0gdGV4XG5cdFx0XHRpZiAoZnJhbWVzKSB0aGlzLmZyYW1lcyA9IGZyYW1lc1xuXHRcdFx0dGhpcy5hbmltcyA9IGFuaW1zXG5cdFx0XHR0aGlzLnNsaWNlOSA9IHNsaWNlOVxuXHRcdH1cblxuXHRcdGdldCB3aWR0aCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnRleC53aWR0aCAqIHRoaXMuZnJhbWVzWzBdLndcblx0XHR9XG5cblx0XHRnZXQgaGVpZ2h0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGV4LmhlaWdodCAqIHRoaXMuZnJhbWVzWzBdLmhcblx0XHR9XG5cblx0XHRzdGF0aWMgZnJvbShzcmM6IExvYWRTcHJpdGVTcmMsIG9wdDogTG9hZFNwcml0ZU9wdCA9IHt9KTogUHJvbWlzZTxTcHJpdGVEYXRhPiB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHNyYyA9PT0gXCJzdHJpbmdcIlxuXHRcdFx0XHQ/IFNwcml0ZURhdGEuZnJvbVVSTChzcmMsIG9wdClcblx0XHRcdFx0OiBQcm9taXNlLnJlc29sdmUoU3ByaXRlRGF0YS5mcm9tSW1hZ2Uoc3JjLCBvcHQpKVxuXHRcdH1cblxuXHRcdHN0YXRpYyBmcm9tSW1hZ2UoZGF0YTogSW1hZ2VTb3VyY2UsIG9wdDogTG9hZFNwcml0ZU9wdCA9IHt9KTogU3ByaXRlRGF0YSB7XG5cdFx0XHRjb25zdCBbdGV4LCBxdWFkXSA9IGFzc2V0cy5wYWNrZXIuYWRkKGRhdGEpXG5cdFx0XHRjb25zdCBmcmFtZXMgPSBvcHQuZnJhbWVzID8gb3B0LmZyYW1lcy5tYXAoKGYpID0+IG5ldyBRdWFkKFxuXHRcdFx0XHRxdWFkLnggKyBmLnggKiBxdWFkLncsXG5cdFx0XHRcdHF1YWQueSArIGYueSAqIHF1YWQuaCxcblx0XHRcdFx0Zi53ICogcXVhZC53LFxuXHRcdFx0XHRmLmggKiBxdWFkLmgsXG5cdFx0XHQpKSA6IHNsaWNlKG9wdC5zbGljZVggfHwgMSwgb3B0LnNsaWNlWSB8fCAxLCBxdWFkLngsIHF1YWQueSwgcXVhZC53LCBxdWFkLmgpXG5cdFx0XHRyZXR1cm4gbmV3IFNwcml0ZURhdGEodGV4LCBmcmFtZXMsIG9wdC5hbmltcywgb3B0LnNsaWNlOSlcblx0XHR9XG5cblx0XHRzdGF0aWMgZnJvbVVSTCh1cmw6IHN0cmluZywgb3B0OiBMb2FkU3ByaXRlT3B0ID0ge30pOiBQcm9taXNlPFNwcml0ZURhdGE+IHtcblx0XHRcdHJldHVybiBsb2FkSW1nKHVybCkudGhlbigoaW1nKSA9PiBTcHJpdGVEYXRhLmZyb21JbWFnZShpbWcsIG9wdCkpXG5cdFx0fVxuXG5cdH1cblxuXHRjbGFzcyBTb3VuZERhdGEge1xuXG5cdFx0YnVmOiBBdWRpb0J1ZmZlclxuXG5cdFx0Y29uc3RydWN0b3IoYnVmOiBBdWRpb0J1ZmZlcikge1xuXHRcdFx0dGhpcy5idWYgPSBidWZcblx0XHR9XG5cblx0XHRzdGF0aWMgZnJvbUFycmF5QnVmZmVyKGJ1ZjogQXJyYXlCdWZmZXIpOiBQcm9taXNlPFNvdW5kRGF0YT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+XG5cdFx0XHRcdGF1ZGlvLmN0eC5kZWNvZGVBdWRpb0RhdGEoYnVmLCByZXNvbHZlLCByZWplY3QpLFxuXHRcdFx0KS50aGVuKChidWY6IEF1ZGlvQnVmZmVyKSA9PiBuZXcgU291bmREYXRhKGJ1ZikpXG5cdFx0fVxuXG5cdFx0c3RhdGljIGZyb21VUkwodXJsOiBzdHJpbmcpOiBQcm9taXNlPFNvdW5kRGF0YT4ge1xuXHRcdFx0aWYgKGlzRGF0YVVSTCh1cmwpKSB7XG5cdFx0XHRcdHJldHVybiBTb3VuZERhdGEuZnJvbUFycmF5QnVmZmVyKGRhdGFVUkxUb0FycmF5QnVmZmVyKHVybCkpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZmV0Y2hBcnJheUJ1ZmZlcih1cmwpLnRoZW4oKGJ1ZikgPT4gU291bmREYXRhLmZyb21BcnJheUJ1ZmZlcihidWYpKVxuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0Y29uc3QgYXVkaW8gPSAoKCkgPT4ge1xuXG5cdFx0Y29uc3QgY3R4ID0gbmV3IChcblx0XHRcdHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgKHdpbmRvdyBhcyBhbnkpLndlYmtpdEF1ZGlvQ29udGV4dFxuXHRcdCkoKSBhcyBBdWRpb0NvbnRleHRcblxuXHRcdGNvbnN0IG1hc3Rlck5vZGUgPSBjdHguY3JlYXRlR2FpbigpXG5cdFx0bWFzdGVyTm9kZS5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbilcblxuXHRcdC8vIGJ5IGRlZmF1bHQgYnJvd3NlcnMgY2FuIG9ubHkgbG9hZCBhdWRpbyBhc3luYywgd2UgZG9uJ3QgZGVhbCB3aXRoIHRoYXQgYW5kIGp1c3Qgc3RhcnQgd2l0aCBhbiBlbXB0eSBhdWRpbyBidWZmZXJcblx0XHRjb25zdCBidXJwU25kID0gbmV3IFNvdW5kRGF0YShjcmVhdGVFbXB0eUF1ZGlvQnVmZmVyKGN0eCkpXG5cblx0XHQvLyBsb2FkIHRoYXQgYnVycCBzb3VuZFxuXHRcdGN0eC5kZWNvZGVBdWRpb0RhdGEoYnVycFNvdW5kU3JjLmJ1ZmZlci5zbGljZSgwKSkudGhlbigoYnVmKSA9PiB7XG5cdFx0XHRidXJwU25kLmJ1ZiA9IGJ1ZlxuXHRcdH0pLmNhdGNoKChlcnIpID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBidXJwOiBcIiwgZXJyKVxuXHRcdH0pXG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y3R4LFxuXHRcdFx0bWFzdGVyTm9kZSxcblx0XHRcdGJ1cnBTbmQsXG5cdFx0fVxuXG5cdH0pKClcblxuXHRjb25zdCBhc3NldHMgPSB7XG5cdFx0dXJsUHJlZml4OiBcIlwiLFxuXHRcdC8vIGFzc2V0IGhvbGRlcnNcblx0XHRzcHJpdGVzOiBuZXcgQXNzZXRCdWNrZXQ8U3ByaXRlRGF0YT4oKSxcblx0XHRmb250czogbmV3IEFzc2V0QnVja2V0PEZvbnREYXRhPigpLFxuXHRcdGJpdG1hcEZvbnRzOiBuZXcgQXNzZXRCdWNrZXQ8Qml0bWFwRm9udERhdGE+KCksXG5cdFx0c291bmRzOiBuZXcgQXNzZXRCdWNrZXQ8U291bmREYXRhPigpLFxuXHRcdHNoYWRlcnM6IG5ldyBBc3NldEJ1Y2tldDxTaGFkZXJEYXRhPigpLFxuXHRcdGN1c3RvbTogbmV3IEFzc2V0QnVja2V0PGFueT4oKSxcblx0XHRwYWNrZXI6IG5ldyBUZXhQYWNrZXIoZ2dsLCBTUFJJVEVfQVRMQVNfV0lEVEgsIFNQUklURV9BVExBU19IRUlHSFQpLFxuXHRcdC8vIGlmIHdlIGZpbmlzaGVkIGluaXRpYWxseSBsb2FkaW5nIGFsbCBhc3NldHNcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHR9XG5cblx0ZnVuY3Rpb24gZml4VVJMPEQ+KHVybDogRCk6IEQge1xuXHRcdGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiIHx8IGlzRGF0YVVSTCh1cmwpKSByZXR1cm4gdXJsXG5cdFx0cmV0dXJuIGFzc2V0cy51cmxQcmVmaXggKyB1cmwgYXMgRFxuXHR9XG5cblx0Y29uc3QgZ2FtZSA9IHtcblxuXHRcdC8vIGdlbmVyYWwgZXZlbnRzXG5cdFx0ZXZlbnRzOiBuZXcgRXZlbnRIYW5kbGVyPHtcblx0XHRcdG1vdXNlTW92ZTogW10sXG5cdFx0XHRtb3VzZURvd246IFtNb3VzZUJ1dHRvbl0sXG5cdFx0XHRtb3VzZVByZXNzOiBbTW91c2VCdXR0b25dLFxuXHRcdFx0bW91c2VSZWxlYXNlOiBbTW91c2VCdXR0b25dLFxuXHRcdFx0Y2hhcklucHV0OiBbc3RyaW5nXSxcblx0XHRcdGtleVByZXNzOiBbS2V5XSxcblx0XHRcdGtleURvd246IFtLZXldLFxuXHRcdFx0a2V5UHJlc3NSZXBlYXQ6IFtLZXldLFxuXHRcdFx0a2V5UmVsZWFzZTogW0tleV0sXG5cdFx0XHR0b3VjaFN0YXJ0OiBbVmVjMiwgVG91Y2hdLFxuXHRcdFx0dG91Y2hNb3ZlOiBbVmVjMiwgVG91Y2hdLFxuXHRcdFx0dG91Y2hFbmQ6IFtWZWMyLCBUb3VjaF0sXG5cdFx0XHRnYW1lcGFkQnV0dG9uRG93bjogW3N0cmluZ10sXG5cdFx0XHRnYW1lcGFkQnV0dG9uUHJlc3M6IFtzdHJpbmddLFxuXHRcdFx0Z2FtZXBhZEJ1dHRvblJlbGVhc2U6IFtzdHJpbmddLFxuXHRcdFx0Z2FtZXBhZFN0aWNrOiBbc3RyaW5nLCBWZWMyXSxcblx0XHRcdGdhbWVwYWRDb25uZWN0OiBbR2FtZXBhZF0sXG5cdFx0XHRnYW1lcGFkRGlzY29ubmVjdDogW0dhbWVwYWRdLFxuXHRcdFx0c2Nyb2xsOiBbVmVjMl0sXG5cdFx0XHRhZGQ6IFtHYW1lT2JqXSxcblx0XHRcdGRlc3Ryb3k6IFtHYW1lT2JqXSxcblx0XHRcdGxvYWQ6IFtdLFxuXHRcdFx0bG9hZGluZzogW251bWJlcl0sXG5cdFx0XHRlcnJvcjogW0Vycm9yXSxcblx0XHRcdGlucHV0OiBbXSxcblx0XHRcdGZyYW1lRW5kOiBbXSxcblx0XHRcdHJlc2l6ZTogW10sXG5cdFx0XHRzY2VuZUxlYXZlOiBbc3RyaW5nXSxcblx0XHR9PigpLFxuXG5cdFx0Ly8gb2JqZWN0IGV2ZW50c1xuXHRcdG9iakV2ZW50czogbmV3IEV2ZW50SGFuZGxlcigpLFxuXG5cdFx0Ly8gcm9vdCBnYW1lIG9iamVjdFxuXHRcdHJvb3Q6IG1ha2UoW10pLFxuXG5cdFx0Ly8gbWlzY1xuXHRcdGdyYXZpdHk6IDAsXG5cdFx0c2NlbmVzOiB7fSxcblxuXHRcdC8vIG9uIHNjcmVlbiBsb2dcblx0XHRsb2dzOiBbXSxcblxuXHRcdC8vIGNhbWVyYVxuXHRcdGNhbToge1xuXHRcdFx0cG9zOiBudWxsLFxuXHRcdFx0c2NhbGU6IG5ldyBWZWMyKDEpLFxuXHRcdFx0YW5nbGU6IDAsXG5cdFx0XHRzaGFrZTogMCxcblx0XHRcdHRyYW5zZm9ybTogbmV3IE1hdDQoKSxcblx0XHR9LFxuXG5cdH1cblxuXHRnYW1lLnJvb3QudXNlKHRpbWVyKCkpXG5cblx0Ly8gd3JhcCBpbmRpdmlkdWFsIGxvYWRlcnMgd2l0aCBnbG9iYWwgbG9hZGVyIGNvdW50ZXIsIGZvciBzdHVmZiBsaWtlIHByb2dyZXNzIGJhclxuXHRmdW5jdGlvbiBsb2FkPFQ+KHByb206IFByb21pc2U8VD4pOiBBc3NldDxUPiB7XG5cdFx0cmV0dXJuIGFzc2V0cy5jdXN0b20uYWRkKG51bGwsIHByb20pXG5cdH1cblxuXHQvLyBnZXQgY3VycmVudCBsb2FkIHByb2dyZXNzXG5cdGZ1bmN0aW9uIGxvYWRQcm9ncmVzcygpOiBudW1iZXIge1xuXHRcdGNvbnN0IGJ1Y2tldHMgPSBbXG5cdFx0XHRhc3NldHMuc3ByaXRlcyxcblx0XHRcdGFzc2V0cy5zb3VuZHMsXG5cdFx0XHRhc3NldHMuc2hhZGVycyxcblx0XHRcdGFzc2V0cy5mb250cyxcblx0XHRcdGFzc2V0cy5iaXRtYXBGb250cyxcblx0XHRcdGFzc2V0cy5jdXN0b20sXG5cdFx0XVxuXHRcdHJldHVybiBidWNrZXRzLnJlZHVjZSgobiwgYnVja2V0KSA9PiBuICsgYnVja2V0LnByb2dyZXNzKCksIDApIC8gYnVja2V0cy5sZW5ndGhcblx0fVxuXG5cdC8vIGdsb2JhbCBsb2FkIHBhdGggcHJlZml4XG5cdGZ1bmN0aW9uIGxvYWRSb290KHBhdGg/OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGlmIChwYXRoICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGFzc2V0cy51cmxQcmVmaXggPSBwYXRoXG5cdFx0fVxuXHRcdHJldHVybiBhc3NldHMudXJsUHJlZml4XG5cdH1cblxuXHRmdW5jdGlvbiBsb2FkSlNPTihuYW1lLCB1cmwpIHtcblx0XHRyZXR1cm4gYXNzZXRzLmN1c3RvbS5hZGQobmFtZSwgZmV0Y2hKU09OKHVybCkpXG5cdH1cblxuXHRjbGFzcyBGb250RGF0YSB7XG5cdFx0Zm9udGZhY2U6IEZvbnRGYWNlXG5cdFx0ZmlsdGVyOiBUZXhGaWx0ZXIgPSBERUZfRk9OVF9GSUxURVJcblx0XHRvdXRsaW5lOiBPdXRsaW5lIHwgbnVsbCA9IG51bGxcblx0XHRzaXplOiBudW1iZXIgPSBERUZfVEVYVF9DQUNIRV9TSVpFXG5cdFx0Y29uc3RydWN0b3IoZmFjZTogRm9udEZhY2UsIG9wdDogTG9hZEZvbnRPcHQgPSB7fSkge1xuXHRcdFx0dGhpcy5mb250ZmFjZSA9IGZhY2Vcblx0XHRcdHRoaXMuZmlsdGVyID0gb3B0LmZpbHRlciA/PyBERUZfRk9OVF9GSUxURVJcblx0XHRcdHRoaXMuc2l6ZSA9IG9wdC5zaXplID8/IERFRl9URVhUX0NBQ0hFX1NJWkVcblx0XHRcdGlmICh0aGlzLnNpemUgPiBNQVhfVEVYVF9DQUNIRV9TSVpFKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgTWF4IGZvbnQgc2l6ZTogJHtNQVhfVEVYVF9DQUNIRV9TSVpFfWApXG5cdFx0XHR9XG5cdFx0XHRpZiAob3B0Lm91dGxpbmUpIHtcblx0XHRcdFx0dGhpcy5vdXRsaW5lID0ge1xuXHRcdFx0XHRcdHdpZHRoOiAxLFxuXHRcdFx0XHRcdGNvbG9yOiByZ2IoMCwgMCwgMCksXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGVvZiBvcHQub3V0bGluZSA9PT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRcdHRoaXMub3V0bGluZS53aWR0aCA9IG9wdC5vdXRsaW5lXG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG9wdC5vdXRsaW5lID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRcdFx0aWYgKG9wdC5vdXRsaW5lLndpZHRoKSB0aGlzLm91dGxpbmUud2lkdGggPSBvcHQub3V0bGluZS53aWR0aFxuXHRcdFx0XHRcdGlmIChvcHQub3V0bGluZS5jb2xvcikgdGhpcy5vdXRsaW5lLmNvbG9yID0gb3B0Lm91dGxpbmUuY29sb3Jcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFRPRE86IHBhc3MgaW4gbnVsbCBzcmMgdG8gc3RvcmUgb3B0IGZvciBkZWZhdWx0IGZvbnRzIGxpa2UgXCJtb25vc3BhY2VcIlxuXHRmdW5jdGlvbiBsb2FkRm9udChcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0c3JjOiBzdHJpbmcgfCBCaW5hcnlEYXRhLFxuXHRcdG9wdDogTG9hZEZvbnRPcHQgPSB7fSxcblx0KTogQXNzZXQ8Rm9udERhdGE+IHtcblx0XHRjb25zdCBmb250ID0gbmV3IEZvbnRGYWNlKG5hbWUsIHR5cGVvZiBzcmMgPT09IFwic3RyaW5nXCIgPyBgdXJsKCR7c3JjfSlgIDogc3JjKVxuXHRcdGRvY3VtZW50LmZvbnRzLmFkZChmb250KVxuXHRcdHJldHVybiBhc3NldHMuZm9udHMuYWRkKG5hbWUsIGZvbnQubG9hZCgpLmNhdGNoKChlcnIpID0+IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgZm9udCBmcm9tIFwiJHtzcmN9XCI6ICR7ZXJyfWApXG5cdFx0fSkudGhlbigoZmFjZSkgPT4gbmV3IEZvbnREYXRhKGZhY2UsIG9wdCkpKVxuXHR9XG5cblx0Ly8gVE9ETzogc3VwcG9ydCBvdXRsaW5lXG5cdC8vIFRPRE86IHN1cHBvcnQgTG9hZFNwcml0ZVNyY1xuXHRmdW5jdGlvbiBsb2FkQml0bWFwRm9udChcblx0XHRuYW1lOiBzdHJpbmcgfCBudWxsLFxuXHRcdHNyYzogc3RyaW5nLFxuXHRcdGd3OiBudW1iZXIsXG5cdFx0Z2g6IG51bWJlcixcblx0XHRvcHQ6IExvYWRCaXRtYXBGb250T3B0ID0ge30sXG5cdCk6IEFzc2V0PEJpdG1hcEZvbnREYXRhPiB7XG5cdFx0cmV0dXJuIGFzc2V0cy5iaXRtYXBGb250cy5hZGQobmFtZSwgbG9hZEltZyhzcmMpXG5cdFx0XHQudGhlbigoaW1nKSA9PiB7XG5cdFx0XHRcdHJldHVybiBtYWtlRm9udChcblx0XHRcdFx0XHRUZXh0dXJlLmZyb21JbWFnZShnZ2wsIGltZywgb3B0KSxcblx0XHRcdFx0XHRndyxcblx0XHRcdFx0XHRnaCxcblx0XHRcdFx0XHRvcHQuY2hhcnMgPz8gQVNDSUlfQ0hBUlMsXG5cdFx0XHRcdClcblx0XHRcdH0pLFxuXHRcdClcblx0fVxuXG5cdC8vIGdldCBhbiBhcnJheSBvZiBmcmFtZXMgYmFzZWQgb24gY29uZmlndXJhdGlvbiBvbiBob3cgdG8gc2xpY2UgdGhlIGltYWdlXG5cdGZ1bmN0aW9uIHNsaWNlKHggPSAxLCB5ID0gMSwgZHggPSAwLCBkeSA9IDAsIHcgPSAxLCBoID0gMSk6IFF1YWRbXSB7XG5cdFx0Y29uc3QgZnJhbWVzID0gW11cblx0XHRjb25zdCBxdyA9IHcgLyB4XG5cdFx0Y29uc3QgcWggPSBoIC8geVxuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgeTsgaisrKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHg7IGkrKykge1xuXHRcdFx0XHRmcmFtZXMucHVzaChuZXcgUXVhZChcblx0XHRcdFx0XHRkeCArIGkgKiBxdyxcblx0XHRcdFx0XHRkeSArIGogKiBxaCxcblx0XHRcdFx0XHRxdyxcblx0XHRcdFx0XHRxaCxcblx0XHRcdFx0KSlcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZyYW1lc1xuXHR9XG5cblx0Ly8gVE9ETzogbG9hZCBzeW5jaHJvbm91c2x5IGlmIHBhc3NlZCBJbWFnZVNvdXJjZVxuXHRmdW5jdGlvbiBsb2FkU3ByaXRlQXRsYXMoXG5cdFx0c3JjOiBMb2FkU3ByaXRlU3JjLFxuXHRcdGRhdGE6IFNwcml0ZUF0bGFzRGF0YSB8IHN0cmluZyxcblx0KTogQXNzZXQ8UmVjb3JkPHN0cmluZywgU3ByaXRlRGF0YT4+IHtcblx0XHRzcmMgPSBmaXhVUkwoc3JjKVxuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0cmV0dXJuIGxvYWQobmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG5cdFx0XHRcdGZldGNoSlNPTihkYXRhKS50aGVuKChqc29uKSA9PiB7XG5cdFx0XHRcdFx0bG9hZFNwcml0ZUF0bGFzKHNyYywganNvbikudGhlbihyZXMpLmNhdGNoKHJlailcblx0XHRcdFx0fSlcblx0XHRcdH0pKVxuXHRcdH1cblx0XHRyZXR1cm4gbG9hZChTcHJpdGVEYXRhLmZyb20oc3JjKS50aGVuKChhdGxhcykgPT4ge1xuXHRcdFx0Y29uc3QgbWFwID0ge31cblx0XHRcdGZvciAoY29uc3QgbmFtZSBpbiBkYXRhKSB7XG5cdFx0XHRcdGNvbnN0IGluZm8gPSBkYXRhW25hbWVdXG5cdFx0XHRcdGNvbnN0IHF1YWQgPSBhdGxhcy5mcmFtZXNbMF1cblx0XHRcdFx0Y29uc3QgdyA9IFNQUklURV9BVExBU19XSURUSCAqIHF1YWQud1xuXHRcdFx0XHRjb25zdCBoID0gU1BSSVRFX0FUTEFTX0hFSUdIVCAqIHF1YWQuaFxuXHRcdFx0XHRjb25zdCBmcmFtZXMgPSBpbmZvLmZyYW1lcyA/IGluZm8uZnJhbWVzLm1hcCgoZikgPT4gbmV3IFF1YWQoXG5cdFx0XHRcdFx0cXVhZC54ICsgKGluZm8ueCArIGYueCkgLyB3ICogcXVhZC53LFxuXHRcdFx0XHRcdHF1YWQueSArIChpbmZvLnkgKyBmLnkpIC8gaCAqIHF1YWQuaCxcblx0XHRcdFx0XHRmLncgLyB3ICogcXVhZC53LFxuXHRcdFx0XHRcdGYuaCAvIGggKiBxdWFkLmgsXG5cdFx0XHRcdCkpIDogc2xpY2UoXG5cdFx0XHRcdFx0aW5mby5zbGljZVggfHwgMSxcblx0XHRcdFx0XHRpbmZvLnNsaWNlWSB8fCAxLFxuXHRcdFx0XHRcdHF1YWQueCArIGluZm8ueCAvIHcgKiBxdWFkLncsXG5cdFx0XHRcdFx0cXVhZC55ICsgaW5mby55IC8gaCAqIHF1YWQuaCxcblx0XHRcdFx0XHRpbmZvLndpZHRoIC8gdyAqIHF1YWQudyxcblx0XHRcdFx0XHRpbmZvLmhlaWdodCAvIGggKiBxdWFkLmgsXG5cdFx0XHRcdClcblx0XHRcdFx0Y29uc3Qgc3ByID0gbmV3IFNwcml0ZURhdGEoYXRsYXMudGV4LCBmcmFtZXMsIGluZm8uYW5pbXMpXG5cdFx0XHRcdGFzc2V0cy5zcHJpdGVzLmFkZExvYWRlZChuYW1lLCBzcHIpXG5cdFx0XHRcdG1hcFtuYW1lXSA9IHNwclxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hcFxuXHRcdH0pKVxuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlU3ByaXRlU2hlZXQoXG5cdFx0aW1hZ2VzOiBJbWFnZVNvdXJjZVtdLFxuXHRcdG9wdDogTG9hZFNwcml0ZU9wdCA9IHt9LFxuXHQpOiBTcHJpdGVEYXRhIHtcblx0XHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXG5cdFx0Y29uc3Qgd2lkdGggPSBpbWFnZXNbMF0ud2lkdGhcblx0XHRjb25zdCBoZWlnaHQgPSBpbWFnZXNbMF0uaGVpZ2h0XG5cdFx0Y2FudmFzLndpZHRoID0gd2lkdGggKiBpbWFnZXMubGVuZ3RoXG5cdFx0Y2FudmFzLmhlaWdodCA9IGhlaWdodFxuXHRcdGNvbnN0IGMyZCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcblx0XHRpbWFnZXMuZm9yRWFjaCgoaW1nLCBpKSA9PiB7XG5cdFx0XHRpZiAoaW1nIGluc3RhbmNlb2YgSW1hZ2VEYXRhKSB7XG5cdFx0XHRcdGMyZC5wdXRJbWFnZURhdGEoaW1nLCBpICogd2lkdGgsIDApXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjMmQuZHJhd0ltYWdlKGltZywgaSAqIHdpZHRoLCAwKVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0Y29uc3QgbWVyZ2VkID0gYzJkLmdldEltYWdlRGF0YSgwLCAwLCBpbWFnZXMubGVuZ3RoICogd2lkdGgsIGhlaWdodClcblx0XHRyZXR1cm4gU3ByaXRlRGF0YS5mcm9tSW1hZ2UobWVyZ2VkLCB7XG5cdFx0XHQuLi5vcHQsXG5cdFx0XHRzbGljZVg6IGltYWdlcy5sZW5ndGgsXG5cdFx0XHRzbGljZVk6IDEsXG5cdFx0fSlcblx0fVxuXG5cdC8vIGxvYWQgYSBzcHJpdGUgdG8gYXNzZXQgbWFuYWdlclxuXHRmdW5jdGlvbiBsb2FkU3ByaXRlKFxuXHRcdG5hbWU6IHN0cmluZyB8IG51bGwsXG5cdFx0c3JjOiBMb2FkU3ByaXRlU3JjIHwgTG9hZFNwcml0ZVNyY1tdLFxuXHRcdG9wdDogTG9hZFNwcml0ZU9wdCA9IHtcblx0XHRcdHNsaWNlWDogMSxcblx0XHRcdHNsaWNlWTogMSxcblx0XHRcdGFuaW1zOiB7fSxcblx0XHR9LFxuXHQpOiBBc3NldDxTcHJpdGVEYXRhPiB7XG5cdFx0c3JjID0gZml4VVJMKHNyYylcblx0XHRpZiAoQXJyYXkuaXNBcnJheShzcmMpKSB7XG5cdFx0XHRpZiAoc3JjLnNvbWUoKHMpID0+IHR5cGVvZiBzID09PSBcInN0cmluZ1wiKSkge1xuXHRcdFx0XHRyZXR1cm4gYXNzZXRzLnNwcml0ZXMuYWRkKFxuXHRcdFx0XHRcdG5hbWUsXG5cdFx0XHRcdFx0UHJvbWlzZS5hbGwoc3JjLm1hcCgocykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBzID09PSBcInN0cmluZ1wiID8gbG9hZEltZyhzKSA6IFByb21pc2UucmVzb2x2ZShzKVxuXHRcdFx0XHRcdH0pKS50aGVuKChpbWFnZXMpID0+IGNyZWF0ZVNwcml0ZVNoZWV0KGltYWdlcywgb3B0KSksXG5cdFx0XHRcdClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBhc3NldHMuc3ByaXRlcy5hZGRMb2FkZWQobmFtZSwgY3JlYXRlU3ByaXRlU2hlZXQoc3JjIGFzIEltYWdlU291cmNlW10sIG9wdCkpXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0eXBlb2Ygc3JjID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHJldHVybiBhc3NldHMuc3ByaXRlcy5hZGQobmFtZSwgU3ByaXRlRGF0YS5mcm9tKHNyYywgb3B0KSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBhc3NldHMuc3ByaXRlcy5hZGRMb2FkZWQobmFtZSwgU3ByaXRlRGF0YS5mcm9tSW1hZ2Uoc3JjLCBvcHQpKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGxvYWRQZWRpdChuYW1lOiBzdHJpbmcgfCBudWxsLCBzcmM6IHN0cmluZyB8IFBlZGl0RmlsZSk6IEFzc2V0PFNwcml0ZURhdGE+IHtcblxuXHRcdHNyYyA9IGZpeFVSTChzcmMpXG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblx0XHRyZXR1cm4gYXNzZXRzLnNwcml0ZXMuYWRkKG5hbWUsIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG5cblx0XHRcdGNvbnN0IGRhdGEgPSB0eXBlb2Ygc3JjID09PSBcInN0cmluZ1wiID8gYXdhaXQgZmV0Y2hKU09OKHNyYykgOiBzcmNcblx0XHRcdGNvbnN0IGltYWdlcyA9IGF3YWl0IFByb21pc2UuYWxsKGRhdGEuZnJhbWVzLm1hcChsb2FkSW1nKSlcblx0XHRcdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcblx0XHRcdGNhbnZhcy53aWR0aCA9IGRhdGEud2lkdGhcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSBkYXRhLmhlaWdodCAqIGRhdGEuZnJhbWVzLmxlbmd0aFxuXG5cdFx0XHRjb25zdCBjMmQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG5cblx0XHRcdGltYWdlcy5mb3JFYWNoKChpbWc6IEhUTUxJbWFnZUVsZW1lbnQsIGkpID0+IHtcblx0XHRcdFx0YzJkLmRyYXdJbWFnZShpbWcsIDAsIGkgKiBkYXRhLmhlaWdodClcblx0XHRcdH0pXG5cblx0XHRcdGNvbnN0IHNwciA9IGF3YWl0IGxvYWRTcHJpdGUobnVsbCwgY2FudmFzLCB7XG5cdFx0XHRcdHNsaWNlWTogZGF0YS5mcmFtZXMubGVuZ3RoLFxuXHRcdFx0XHRhbmltczogZGF0YS5hbmltcyxcblx0XHRcdH0pXG5cblx0XHRcdHJlc29sdmUoc3ByKVxuXG5cdFx0fSkpXG5cblx0fVxuXG5cdGZ1bmN0aW9uIGxvYWRBc2Vwcml0ZShcblx0XHRuYW1lOiBzdHJpbmcgfCBudWxsLFxuXHRcdGltZ1NyYzogTG9hZFNwcml0ZVNyYyxcblx0XHRqc29uU3JjOiBzdHJpbmcgfCBBc2Vwcml0ZURhdGEsXG5cdCk6IEFzc2V0PFNwcml0ZURhdGE+IHtcblxuXHRcdGltZ1NyYyA9IGZpeFVSTChpbWdTcmMpXG5cdFx0anNvblNyYyA9IGZpeFVSTChqc29uU3JjKVxuXG5cdFx0aWYgKHR5cGVvZiBpbWdTcmMgPT09IFwic3RyaW5nXCIgJiYgIWpzb25TcmMpIHtcblx0XHRcdGpzb25TcmMgPSBnZXRGaWxlTmFtZShpbWdTcmMpICsgXCIuanNvblwiXG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzb2x2ZUpTT04gPSB0eXBlb2YganNvblNyYyA9PT0gXCJzdHJpbmdcIlxuXHRcdFx0PyBmZXRjaEpTT04oanNvblNyYylcblx0XHRcdDogUHJvbWlzZS5yZXNvbHZlKGpzb25TcmMpXG5cblx0XHRyZXR1cm4gYXNzZXRzLnNwcml0ZXMuYWRkKG5hbWUsIHJlc29sdmVKU09OLnRoZW4oKGRhdGE6IEFzZXByaXRlRGF0YSkgPT4ge1xuXHRcdFx0Y29uc3Qgc2l6ZSA9IGRhdGEubWV0YS5zaXplXG5cdFx0XHRjb25zdCBmcmFtZXMgPSBkYXRhLmZyYW1lcy5tYXAoKGY6IGFueSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFF1YWQoXG5cdFx0XHRcdFx0Zi5mcmFtZS54IC8gc2l6ZS53LFxuXHRcdFx0XHRcdGYuZnJhbWUueSAvIHNpemUuaCxcblx0XHRcdFx0XHRmLmZyYW1lLncgLyBzaXplLncsXG5cdFx0XHRcdFx0Zi5mcmFtZS5oIC8gc2l6ZS5oLFxuXHRcdFx0XHQpXG5cdFx0XHR9KVxuXHRcdFx0Y29uc3QgYW5pbXMgPSB7fVxuXHRcdFx0Zm9yIChjb25zdCBhbmltIG9mIGRhdGEubWV0YS5mcmFtZVRhZ3MpIHtcblx0XHRcdFx0aWYgKGFuaW0uZnJvbSA9PT0gYW5pbS50bykge1xuXHRcdFx0XHRcdGFuaW1zW2FuaW0ubmFtZV0gPSBhbmltLmZyb21cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhbmltc1thbmltLm5hbWVdID0ge1xuXHRcdFx0XHRcdFx0ZnJvbTogYW5pbS5mcm9tLFxuXHRcdFx0XHRcdFx0dG86IGFuaW0udG8sXG5cdFx0XHRcdFx0XHRzcGVlZDogMTAsXG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxuXHRcdFx0XHRcdFx0cGluZ3Bvbmc6IGFuaW0uZGlyZWN0aW9uID09PSBcInBpbmdwb25nXCIsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gU3ByaXRlRGF0YS5mcm9tKGltZ1NyYywge1xuXHRcdFx0XHRmcmFtZXM6IGZyYW1lcyxcblx0XHRcdFx0YW5pbXM6IGFuaW1zLFxuXHRcdFx0fSlcblx0XHR9KSlcblxuXHR9XG5cblx0ZnVuY3Rpb24gbG9hZFNoYWRlcihcblx0XHRuYW1lOiBzdHJpbmcgfCBudWxsLFxuXHRcdHZlcnQ/OiBzdHJpbmcsXG5cdFx0ZnJhZz86IHN0cmluZyxcblx0KSB7XG5cdFx0cmV0dXJuIGFzc2V0cy5zaGFkZXJzLmFkZExvYWRlZChuYW1lLCBtYWtlU2hhZGVyKHZlcnQsIGZyYWcpKVxuXHR9XG5cblx0ZnVuY3Rpb24gbG9hZFNoYWRlclVSTChcblx0XHRuYW1lOiBzdHJpbmcgfCBudWxsLFxuXHRcdHZlcnQ/OiBzdHJpbmcsXG5cdFx0ZnJhZz86IHN0cmluZyxcblx0KTogQXNzZXQ8U2hhZGVyRGF0YT4ge1xuXHRcdHZlcnQgPSBmaXhVUkwodmVydClcblx0XHRmcmFnID0gZml4VVJMKGZyYWcpXG5cdFx0Y29uc3QgcmVzb2x2ZVVybCA9ICh1cmw/OiBzdHJpbmcpID0+XG5cdFx0XHR1cmxcblx0XHRcdFx0PyBmZXRjaFRleHQodXJsKVxuXHRcdFx0XHQ6IFByb21pc2UucmVzb2x2ZShudWxsKVxuXHRcdGNvbnN0IGxvYWQgPSBQcm9taXNlLmFsbChbcmVzb2x2ZVVybCh2ZXJ0KSwgcmVzb2x2ZVVybChmcmFnKV0pXG5cdFx0XHQudGhlbigoW3Zjb2RlLCBmY29kZV06IFtzdHJpbmcgfCBudWxsLCBzdHJpbmcgfCBudWxsXSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbWFrZVNoYWRlcih2Y29kZSwgZmNvZGUpXG5cdFx0XHR9KVxuXHRcdHJldHVybiBhc3NldHMuc2hhZGVycy5hZGQobmFtZSwgbG9hZClcblx0fVxuXG5cdC8vIFRPRE86IGFsbG93IHN0cmVhbSBiaWcgYXVkaW9cblx0Ly8gbG9hZCBhIHNvdW5kIHRvIGFzc2V0IG1hbmFnZXJcblx0ZnVuY3Rpb24gbG9hZFNvdW5kKFxuXHRcdG5hbWU6IHN0cmluZyB8IG51bGwsXG5cdFx0c3JjOiBzdHJpbmcgfCBBcnJheUJ1ZmZlcixcblx0KTogQXNzZXQ8U291bmREYXRhPiB7XG5cdFx0c3JjID0gZml4VVJMKHNyYylcblx0XHRyZXR1cm4gYXNzZXRzLnNvdW5kcy5hZGQoXG5cdFx0XHRuYW1lLFxuXHRcdFx0dHlwZW9mIHNyYyA9PT0gXCJzdHJpbmdcIlxuXHRcdFx0XHQ/IFNvdW5kRGF0YS5mcm9tVVJMKHNyYylcblx0XHRcdFx0OiBTb3VuZERhdGEuZnJvbUFycmF5QnVmZmVyKHNyYyksXG5cdFx0KVxuXHR9XG5cblx0ZnVuY3Rpb24gbG9hZEJlYW4obmFtZTogc3RyaW5nID0gXCJiZWFuXCIpOiBBc3NldDxTcHJpdGVEYXRhPiB7XG5cdFx0cmV0dXJuIGxvYWRTcHJpdGUobmFtZSwgYmVhblNwcml0ZVNyYylcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFNwcml0ZShuYW1lOiBzdHJpbmcpOiBBc3NldDxTcHJpdGVEYXRhPiB8IHZvaWQge1xuXHRcdHJldHVybiBhc3NldHMuc3ByaXRlcy5nZXQobmFtZSlcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFNvdW5kKG5hbWU6IHN0cmluZyk6IEFzc2V0PFNvdW5kRGF0YT4gfCB2b2lkIHtcblx0XHRyZXR1cm4gYXNzZXRzLnNvdW5kcy5nZXQobmFtZSlcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEZvbnQobmFtZTogc3RyaW5nKTogQXNzZXQ8Rm9udERhdGE+IHwgdm9pZCB7XG5cdFx0cmV0dXJuIGFzc2V0cy5mb250cy5nZXQobmFtZSlcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEJpdG1hcEZvbnQobmFtZTogc3RyaW5nKTogQXNzZXQ8Qml0bWFwRm9udERhdGE+IHwgdm9pZCB7XG5cdFx0cmV0dXJuIGFzc2V0cy5iaXRtYXBGb250cy5nZXQobmFtZSlcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFNoYWRlcihuYW1lOiBzdHJpbmcpOiBBc3NldDxTaGFkZXJEYXRhPiB8IHZvaWQge1xuXHRcdHJldHVybiBhc3NldHMuc2hhZGVycy5nZXQobmFtZSlcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEFzc2V0KG5hbWU6IHN0cmluZyk6IEFzc2V0PGFueT4gfCB2b2lkIHtcblx0XHRyZXR1cm4gYXNzZXRzLmN1c3RvbS5nZXQobmFtZSlcblx0fVxuXG5cdGZ1bmN0aW9uIHJlc29sdmVTcHJpdGUoXG5cdFx0c3JjOiBEcmF3U3ByaXRlT3B0W1wic3ByaXRlXCJdLFxuXHQpOiBBc3NldDxTcHJpdGVEYXRhPiB8IG51bGwge1xuXHRcdGlmICh0eXBlb2Ygc3JjID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRjb25zdCBzcHIgPSBnZXRTcHJpdGUoc3JjKVxuXHRcdFx0aWYgKHNwcikge1xuXHRcdFx0XHQvLyBpZiBpdCdzIGFscmVhZHkgbG9hZGVkIG9yIGJlaW5nIGxvYWRpbmcsIHJldHVybiBpdFxuXHRcdFx0XHRyZXR1cm4gc3ByXG5cdFx0XHR9IGVsc2UgaWYgKGxvYWRQcm9ncmVzcygpIDwgMSkge1xuXHRcdFx0XHQvLyBpZiB0aGVyZSdzIGFueSBvdGhlciBvbmdvaW5nIGxvYWRpbmcgdGFzayB3ZSByZXR1cm4gZW1wdHkgYW5kIGRvbid0IGVycm9yIHlldFxuXHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaWYgYWxsIG90aGVyIGFzc2V0cyBhcmUgbG9hZGVkIGFuZCB3ZSBzdGlsbCBoYXZlbid0IGZvdW5kIHRoaXMgc3ByaXRlLCB0aHJvd1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFNwcml0ZSBub3QgZm91bmQ6ICR7c3JjfWApXG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzcmMgaW5zdGFuY2VvZiBTcHJpdGVEYXRhKSB7XG5cdFx0XHRyZXR1cm4gQXNzZXQubG9hZGVkKHNyYylcblx0XHR9IGVsc2UgaWYgKHNyYyBpbnN0YW5jZW9mIEFzc2V0KSB7XG5cdFx0XHRyZXR1cm4gc3JjXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcHJpdGU6ICR7c3JjfWApXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVzb2x2ZVNvdW5kKFxuXHRcdHNyYzogUGFyYW1ldGVyczx0eXBlb2YgcGxheT5bMF0sXG5cdCk6IEFzc2V0PFNvdW5kRGF0YT4gfCBudWxsIHtcblx0XHRpZiAodHlwZW9mIHNyYyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0Y29uc3Qgc25kID0gZ2V0U291bmQoc3JjKVxuXHRcdFx0aWYgKHNuZCkge1xuXHRcdFx0XHRyZXR1cm4gc25kXG5cdFx0XHR9IGVsc2UgaWYgKGxvYWRQcm9ncmVzcygpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBTb3VuZCBub3QgZm91bmQ6ICR7c3JjfWApXG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzcmMgaW5zdGFuY2VvZiBTb3VuZERhdGEpIHtcblx0XHRcdHJldHVybiBBc3NldC5sb2FkZWQoc3JjKVxuXHRcdH0gZWxzZSBpZiAoc3JjIGluc3RhbmNlb2YgQXNzZXQpIHtcblx0XHRcdHJldHVybiBzcmNcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNvdW5kOiAke3NyY31gKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJlc29sdmVTaGFkZXIoXG5cdFx0c3JjOiBSZW5kZXJQcm9wc1tcInNoYWRlclwiXSxcblx0KTogU2hhZGVyRGF0YSB8IEFzc2V0PFNoYWRlckRhdGE+IHwgbnVsbCB7XG5cdFx0aWYgKCFzcmMpIHtcblx0XHRcdHJldHVybiBnZnguZGVmU2hhZGVyXG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygc3JjID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRjb25zdCBzaGFkZXIgPSBnZXRTaGFkZXIoc3JjKVxuXHRcdFx0aWYgKHNoYWRlcikge1xuXHRcdFx0XHRyZXR1cm4gc2hhZGVyLmRhdGEgPz8gc2hhZGVyXG5cdFx0XHR9IGVsc2UgaWYgKGxvYWRQcm9ncmVzcygpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBTaGFkZXIgbm90IGZvdW5kOiAke3NyY31gKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoc3JjIGluc3RhbmNlb2YgQXNzZXQpIHtcblx0XHRcdHJldHVybiBzcmMuZGF0YSA/IHNyYy5kYXRhIDogc3JjXG5cdFx0fVxuXHRcdC8vIFRPRE86IGNoZWNrIHR5cGVcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0cmV0dXJuIHNyY1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzb2x2ZUZvbnQoXG5cdFx0c3JjOiBEcmF3VGV4dE9wdFtcImZvbnRcIl0sXG5cdCk6XG5cdFx0fCBGb250RGF0YVxuXHRcdHwgQXNzZXQ8Rm9udERhdGE+XG5cdFx0fCBCaXRtYXBGb250RGF0YVxuXHRcdHwgQXNzZXQ8Qml0bWFwRm9udERhdGE+XG5cdFx0fCBzdHJpbmdcblx0XHR8IHZvaWRcblx0e1xuXHRcdGlmICghc3JjKSB7XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZUZvbnQoZ29wdC5mb250ID8/IERFRl9GT05UKVxuXHRcdH1cblx0XHRpZiAodHlwZW9mIHNyYyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0Y29uc3QgYmZvbnQgPSBnZXRCaXRtYXBGb250KHNyYylcblx0XHRcdGNvbnN0IGZvbnQgPSBnZXRGb250KHNyYylcblx0XHRcdGlmIChiZm9udCkge1xuXHRcdFx0XHRyZXR1cm4gYmZvbnQuZGF0YSA/PyBiZm9udFxuXHRcdFx0fSBlbHNlIGlmIChmb250KSB7XG5cdFx0XHRcdHJldHVybiBmb250LmRhdGEgPz8gZm9udFxuXHRcdFx0fSBlbHNlIGlmIChkb2N1bWVudC5mb250cy5jaGVjayhgJHtERUZfVEVYVF9DQUNIRV9TSVpFfXB4ICR7c3JjfWApKSB7XG5cdFx0XHRcdHJldHVybiBzcmNcblx0XHRcdH0gZWxzZSBpZiAobG9hZFByb2dyZXNzKCkgPCAxKSB7XG5cdFx0XHRcdHJldHVybiBudWxsXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEZvbnQgbm90IGZvdW5kOiAke3NyY31gKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoc3JjIGluc3RhbmNlb2YgQXNzZXQpIHtcblx0XHRcdHJldHVybiBzcmMuZGF0YSA/IHNyYy5kYXRhIDogc3JjXG5cdFx0fVxuXHRcdC8vIFRPRE86IGNoZWNrIHR5cGVcblx0XHQvLyBAdHMtaWdub3JlXG5cdFx0cmV0dXJuIHNyY1xuXHR9XG5cblx0Ly8gZ2V0IC8gc2V0IG1hc3RlciB2b2x1bWVcblx0ZnVuY3Rpb24gdm9sdW1lKHY/OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGlmICh2ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGF1ZGlvLm1hc3Rlck5vZGUuZ2Fpbi52YWx1ZSA9IHZcblx0XHR9XG5cdFx0cmV0dXJuIGF1ZGlvLm1hc3Rlck5vZGUuZ2Fpbi52YWx1ZVxuXHR9XG5cblx0Ly8gVE9ETzogbWV0aG9kIHRvIGNvbXBsZXRlbHkgZGVzdG9yeSBhdWRpbz9cblx0Ly8gVE9ETzogdGltZSgpIG5vdCBjb3JyZWN0IHdoZW4gbG9vcGVkIG92ZXIgb3IgZW5kZWRcblx0Ly8gVE9ETzogb25FbmQoKSBub3Qgd29ya2luZ1xuXHQvLyBwbGF5cyBhIHNvdW5kLCByZXR1cm5zIGEgY29udHJvbCBoYW5kbGVcblx0ZnVuY3Rpb24gcGxheShcblx0XHRzcmM6IHN0cmluZyB8IFNvdW5kRGF0YSB8IEFzc2V0PFNvdW5kRGF0YT4sXG5cdFx0b3B0OiBBdWRpb1BsYXlPcHQgPSB7fSxcblx0KTogQXVkaW9QbGF5IHtcblxuXHRcdGNvbnN0IGN0eCA9IGF1ZGlvLmN0eFxuXHRcdGxldCBwYXVzZWQgPSBvcHQucGF1c2VkID8/IGZhbHNlXG5cdFx0bGV0IHNyY05vZGUgPSBjdHguY3JlYXRlQnVmZmVyU291cmNlKClcblx0XHRjb25zdCBvbkVuZEV2ZW50cyA9IG5ldyBFdmVudCgpXG5cdFx0Y29uc3QgZ2Fpbk5vZGUgPSBjdHguY3JlYXRlR2FpbigpXG5cdFx0Y29uc3QgcG9zID0gb3B0LnNlZWsgPz8gMFxuXHRcdGxldCBzdGFydFRpbWUgPSAwXG5cdFx0bGV0IHN0b3BUaW1lID0gMFxuXHRcdGxldCBzdGFydGVkID0gZmFsc2VcblxuXHRcdHNyY05vZGUubG9vcCA9IEJvb2xlYW4ob3B0Lmxvb3ApXG5cdFx0c3JjTm9kZS5kZXR1bmUudmFsdWUgPSBvcHQuZGV0dW5lID8/IDBcblx0XHRzcmNOb2RlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IG9wdC5zcGVlZCA/PyAxXG5cdFx0c3JjTm9kZS5jb25uZWN0KGdhaW5Ob2RlKVxuXHRcdHNyY05vZGUub25lbmRlZCA9ICgpID0+IHtcblx0XHRcdGlmIChnZXRUaW1lKCkgPj0gc3JjTm9kZS5idWZmZXI/LmR1cmF0aW9uID8/IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSkge1xuXHRcdFx0XHRvbkVuZEV2ZW50cy50cmlnZ2VyKClcblx0XHRcdH1cblx0XHR9XG5cdFx0Z2Fpbk5vZGUuY29ubmVjdChhdWRpby5tYXN0ZXJOb2RlKVxuXHRcdGdhaW5Ob2RlLmdhaW4udmFsdWUgPSBvcHQudm9sdW1lID8/IDFcblxuXHRcdGNvbnN0IHN0YXJ0ID0gKGRhdGE6IFNvdW5kRGF0YSkgPT4ge1xuXHRcdFx0c3JjTm9kZS5idWZmZXIgPSBkYXRhLmJ1ZlxuXHRcdFx0aWYgKCFwYXVzZWQpIHtcblx0XHRcdFx0c3RhcnRUaW1lID0gY3R4LmN1cnJlbnRUaW1lXG5cdFx0XHRcdHNyY05vZGUuc3RhcnQoMCwgcG9zKVxuXHRcdFx0XHRzdGFydGVkID0gdHJ1ZVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IHNuZCA9IHJlc29sdmVTb3VuZChzcmMpXG5cblx0XHRpZiAoc25kIGluc3RhbmNlb2YgQXNzZXQpIHtcblx0XHRcdHNuZC5vbkxvYWQoc3RhcnQpXG5cdFx0fVxuXG5cdFx0Y29uc3QgZ2V0VGltZSA9ICgpID0+IHtcblx0XHRcdGlmICghc3JjTm9kZS5idWZmZXIpIHJldHVybiAwXG5cdFx0XHRjb25zdCB0ID0gcGF1c2VkXG5cdFx0XHRcdD8gc3RvcFRpbWUgLSBzdGFydFRpbWVcblx0XHRcdFx0OiBjdHguY3VycmVudFRpbWUgLSBzdGFydFRpbWVcblx0XHRcdGNvbnN0IGQgPSBzcmNOb2RlLmJ1ZmZlci5kdXJhdGlvblxuXHRcdFx0cmV0dXJuIHNyY05vZGUubG9vcCA/IHQgJSBkIDogTWF0aC5taW4odCwgZClcblx0XHR9XG5cblx0XHRjb25zdCBjbG9uZU5vZGUgPSAob2xkTm9kZTogQXVkaW9CdWZmZXJTb3VyY2VOb2RlKSA9PiB7XG5cdFx0XHRjb25zdCBuZXdOb2RlID0gY3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpXG5cdFx0XHRuZXdOb2RlLmJ1ZmZlciA9IG9sZE5vZGUuYnVmZmVyXG5cdFx0XHRuZXdOb2RlLmxvb3AgPSBvbGROb2RlLmxvb3Bcblx0XHRcdG5ld05vZGUucGxheWJhY2tSYXRlLnZhbHVlID0gb2xkTm9kZS5wbGF5YmFja1JhdGUudmFsdWVcblx0XHRcdG5ld05vZGUuZGV0dW5lLnZhbHVlID0gb2xkTm9kZS5kZXR1bmUudmFsdWVcblx0XHRcdG5ld05vZGUub25lbmRlZCA9IG9sZE5vZGUub25lbmRlZFxuXHRcdFx0bmV3Tm9kZS5jb25uZWN0KGdhaW5Ob2RlKVxuXHRcdFx0cmV0dXJuIG5ld05vZGVcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXG5cdFx0XHRzdG9wKCkge1xuXHRcdFx0XHR0aGlzLnBhdXNlZCA9IHRydWVcblx0XHRcdFx0dGhpcy5zZWVrKDApXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQgcGF1c2VkKHA6IGJvb2xlYW4pIHtcblx0XHRcdFx0aWYgKHBhdXNlZCA9PT0gcCkgcmV0dXJuXG5cdFx0XHRcdHBhdXNlZCA9IHBcblx0XHRcdFx0aWYgKHApIHtcblx0XHRcdFx0XHRpZiAoc3RhcnRlZCkge1xuXHRcdFx0XHRcdFx0c3JjTm9kZS5zdG9wKClcblx0XHRcdFx0XHRcdHN0YXJ0ZWQgPSBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdG9wVGltZSA9IGN0eC5jdXJyZW50VGltZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNyY05vZGUgPSBjbG9uZU5vZGUoc3JjTm9kZSlcblx0XHRcdFx0XHRjb25zdCBwb3MgPSBzdG9wVGltZSAtIHN0YXJ0VGltZVxuXHRcdFx0XHRcdHNyY05vZGUuc3RhcnQoMCwgcG9zKVxuXHRcdFx0XHRcdHN0YXJ0ZWQgPSB0cnVlXG5cdFx0XHRcdFx0c3RhcnRUaW1lID0gY3R4LmN1cnJlbnRUaW1lIC0gcG9zXG5cdFx0XHRcdFx0c3RvcFRpbWUgPSAwXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGdldCBwYXVzZWQoKSB7XG5cdFx0XHRcdHJldHVybiBwYXVzZWRcblx0XHRcdH0sXG5cblx0XHRcdHBsYXkodGltZTogbnVtYmVyID0gMCkge1xuXHRcdFx0XHR0aGlzLnNlZWsodGltZSlcblx0XHRcdFx0dGhpcy5wYXVzZWQgPSBmYWxzZVxuXHRcdFx0fSxcblxuXHRcdFx0c2Vlayh0aW1lOiBudW1iZXIpIHtcblx0XHRcdFx0aWYgKCFzcmNOb2RlLmJ1ZmZlcj8uZHVyYXRpb24pIHJldHVyblxuXHRcdFx0XHRpZiAodGltZSA+IHNyY05vZGUuYnVmZmVyLmR1cmF0aW9uKSByZXR1cm5cblx0XHRcdFx0aWYgKHBhdXNlZCkge1xuXHRcdFx0XHRcdHNyY05vZGUgPSBjbG9uZU5vZGUoc3JjTm9kZSlcblx0XHRcdFx0XHRzdGFydFRpbWUgPSBzdG9wVGltZSAtIHRpbWVcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzcmNOb2RlLnN0b3AoKVxuXHRcdFx0XHRcdHNyY05vZGUgPSBjbG9uZU5vZGUoc3JjTm9kZSlcblx0XHRcdFx0XHRzdGFydFRpbWUgPSBjdHguY3VycmVudFRpbWUgLSB0aW1lXG5cdFx0XHRcdFx0c3JjTm9kZS5zdGFydCgwLCB0aW1lKVxuXHRcdFx0XHRcdHN0YXJ0ZWQgPSB0cnVlXG5cdFx0XHRcdFx0c3RvcFRpbWUgPSAwXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8vIFRPRE86IGFmZmVjdCB0aW1lKClcblx0XHRcdHNldCBzcGVlZCh2YWw6IG51bWJlcikge1xuXHRcdFx0XHRzcmNOb2RlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IHZhbFxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IHNwZWVkKCkge1xuXHRcdFx0XHRyZXR1cm4gc3JjTm9kZS5wbGF5YmFja1JhdGUudmFsdWVcblx0XHRcdH0sXG5cblx0XHRcdHNldCBkZXR1bmUodmFsOiBudW1iZXIpIHtcblx0XHRcdFx0c3JjTm9kZS5kZXR1bmUudmFsdWUgPSB2YWxcblx0XHRcdH0sXG5cblx0XHRcdGdldCBkZXR1bmUoKSB7XG5cdFx0XHRcdHJldHVybiBzcmNOb2RlLmRldHVuZS52YWx1ZVxuXHRcdFx0fSxcblxuXHRcdFx0c2V0IHZvbHVtZSh2YWw6IG51bWJlcikge1xuXHRcdFx0XHRnYWluTm9kZS5nYWluLnZhbHVlID0gTWF0aC5tYXgodmFsLCAwKVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IHZvbHVtZSgpIHtcblx0XHRcdFx0cmV0dXJuIGdhaW5Ob2RlLmdhaW4udmFsdWVcblx0XHRcdH0sXG5cblx0XHRcdHNldCBsb29wKGw6IGJvb2xlYW4pIHtcblx0XHRcdFx0c3JjTm9kZS5sb29wID0gbFxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IGxvb3AoKSB7XG5cdFx0XHRcdHJldHVybiBzcmNOb2RlLmxvb3Bcblx0XHRcdH0sXG5cblx0XHRcdGR1cmF0aW9uKCk6IG51bWJlciB7XG5cdFx0XHRcdHJldHVybiBzcmNOb2RlLmJ1ZmZlcj8uZHVyYXRpb24gPz8gMFxuXHRcdFx0fSxcblxuXHRcdFx0dGltZSgpOiBudW1iZXIge1xuXHRcdFx0XHRyZXR1cm4gZ2V0VGltZSgpICUgdGhpcy5kdXJhdGlvbigpXG5cdFx0XHR9LFxuXG5cdFx0XHRvbkVuZChhY3Rpb246ICgpID0+IHZvaWQpIHtcblx0XHRcdFx0cmV0dXJuIG9uRW5kRXZlbnRzLmFkZChhY3Rpb24pXG5cdFx0XHR9LFxuXG5cdFx0XHR0aGVuKGFjdGlvbjogKCkgPT4gdm9pZCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbkVuZChhY3Rpb24pXG5cdFx0XHR9LFxuXG5cdFx0fVxuXG5cdH1cblxuXHQvLyBjb3JlIGthYm9vbSBsb2dpY1xuXHRmdW5jdGlvbiBidXJwKG9wdD86IEF1ZGlvUGxheU9wdCk6IEF1ZGlvUGxheSB7XG5cdFx0cmV0dXJuIHBsYXkoYXVkaW8uYnVycFNuZCwgb3B0KVxuXHR9XG5cblx0dHlwZSBEcmF3VGV4dHVyZU9wdCA9IFJlbmRlclByb3BzICYge1xuXHRcdHRleDogVGV4dHVyZSxcblx0XHR3aWR0aD86IG51bWJlcixcblx0XHRoZWlnaHQ/OiBudW1iZXIsXG5cdFx0dGlsZWQ/OiBib29sZWFuLFxuXHRcdGZsaXBYPzogYm9vbGVhbixcblx0XHRmbGlwWT86IGJvb2xlYW4sXG5cdFx0cXVhZD86IFF1YWQsXG5cdFx0YW5jaG9yPzogQW5jaG9yIHwgVmVjMixcblx0fVxuXG5cdGZ1bmN0aW9uIG1ha2VDYW52YXModzogbnVtYmVyLCBoOiBudW1iZXIpIHtcblx0XHRyZXR1cm4gbmV3IEZyYW1lQnVmZmVyKGdnbCwgdywgaClcblx0fVxuXG5cdGZ1bmN0aW9uIG1ha2VTaGFkZXIoXG5cdFx0dmVydFNyYzogc3RyaW5nIHwgbnVsbCA9IERFRl9WRVJULFxuXHRcdGZyYWdTcmM6IHN0cmluZyB8IG51bGwgPSBERUZfRlJBRyxcblx0KTogU2hhZGVyIHtcblx0XHRjb25zdCB2Y29kZSA9IFZFUlRfVEVNUExBVEUucmVwbGFjZShcInt7dXNlcn19XCIsIHZlcnRTcmMgPz8gREVGX1ZFUlQpXG5cdFx0Y29uc3QgZmNvZGUgPSBGUkFHX1RFTVBMQVRFLnJlcGxhY2UoXCJ7e3VzZXJ9fVwiLCBmcmFnU3JjID8/IERFRl9GUkFHKVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gbmV3IFNoYWRlcihnZ2wsIHZjb2RlLCBmY29kZSwgVkVSVEVYX0ZPUk1BVC5tYXAoKHZlcnQpID0+IHZlcnQubmFtZSkpXG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc3QgbGluZU9mZnNldCA9IDE0XG5cdFx0XHRjb25zdCBmbXQgPSAvKD88dHlwZT5eXFx3KykgU0hBREVSIEVSUk9SOiAwOig/PGxpbmU+XFxkKyk6ICg/PG1zZz4uKykvXG5cdFx0XHRjb25zdCBtYXRjaCA9IGdldEVycm9yTWVzc2FnZShlKS5tYXRjaChmbXQpXG5cdFx0XHRjb25zdCBsaW5lID0gTnVtYmVyKG1hdGNoLmdyb3Vwcy5saW5lKSAtIGxpbmVPZmZzZXRcblx0XHRcdGNvbnN0IG1zZyA9IG1hdGNoLmdyb3Vwcy5tc2cudHJpbSgpXG5cdFx0XHRjb25zdCB0eSA9IG1hdGNoLmdyb3Vwcy50eXBlLnRvTG93ZXJDYXNlKClcblx0XHRcdHRocm93IG5ldyBFcnJvcihgJHt0eX0gc2hhZGVyIGxpbmUgJHtsaW5lfTogJHttc2d9YClcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBtYWtlRm9udChcblx0XHR0ZXg6IFRleHR1cmUsXG5cdFx0Z3c6IG51bWJlcixcblx0XHRnaDogbnVtYmVyLFxuXHRcdGNoYXJzOiBzdHJpbmcsXG5cdCk6IEdmeEZvbnQge1xuXG5cdFx0Y29uc3QgY29scyA9IHRleC53aWR0aCAvIGd3XG5cdFx0Y29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBRdWFkPiA9IHt9XG5cdFx0Y29uc3QgY2hhck1hcCA9IGNoYXJzLnNwbGl0KFwiXCIpLmVudHJpZXMoKVxuXG5cdFx0Zm9yIChjb25zdCBbaSwgY2hdIG9mIGNoYXJNYXApIHtcblx0XHRcdG1hcFtjaF0gPSBuZXcgUXVhZChcblx0XHRcdFx0KGkgJSBjb2xzKSAqIGd3LFxuXHRcdFx0XHRNYXRoLmZsb29yKGkgLyBjb2xzKSAqIGdoLFxuXHRcdFx0XHRndyxcblx0XHRcdFx0Z2gsXG5cdFx0XHQpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleDogdGV4LFxuXHRcdFx0bWFwOiBtYXAsXG5cdFx0XHRzaXplOiBnaCxcblx0XHR9XG5cblx0fVxuXG5cdC8vIFRPRE86IGV4cG9zZVxuXHRmdW5jdGlvbiBkcmF3UmF3KFxuXHRcdHZlcnRzOiBWZXJ0ZXhbXSxcblx0XHRpbmRpY2VzOiBudW1iZXJbXSxcblx0XHRmaXhlZDogYm9vbGVhbixcblx0XHR0ZXg6IFRleHR1cmUgPSBnZnguZGVmVGV4LFxuXHRcdHNoYWRlclNyYzogUmVuZGVyUHJvcHNbXCJzaGFkZXJcIl0gPSBnZnguZGVmU2hhZGVyLFxuXHRcdHVuaWZvcm06IFVuaWZvcm0gPSB7fSxcblx0KSB7XG5cblx0XHRjb25zdCBzaGFkZXIgPSByZXNvbHZlU2hhZGVyKHNoYWRlclNyYylcblxuXHRcdGlmICghc2hhZGVyIHx8IHNoYWRlciBpbnN0YW5jZW9mIEFzc2V0KSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRjb25zdCB0cmFuc2Zvcm0gPSAoZ2Z4LmZpeGVkIHx8IGZpeGVkKVxuXHRcdFx0PyBnZngudHJhbnNmb3JtXG5cdFx0XHQ6IGdhbWUuY2FtLnRyYW5zZm9ybS5tdWx0KGdmeC50cmFuc2Zvcm0pXG5cblx0XHRjb25zdCB2diA9IFtdXG5cblx0XHRmb3IgKGNvbnN0IHYgb2YgdmVydHMpIHtcblx0XHRcdC8vIG5vcm1hbGl6ZWQgd29ybGQgc3BhY2UgY29vcmRpbmF0ZSBbLTEuMCB+IDEuMF1cblx0XHRcdGNvbnN0IHB0ID0gc2NyZWVuMm5kYyh0cmFuc2Zvcm0ubXVsdFZlYzIodi5wb3MpKVxuXHRcdFx0dnYucHVzaChcblx0XHRcdFx0cHQueCwgcHQueSxcblx0XHRcdFx0di51di54LCB2LnV2LnksXG5cdFx0XHRcdHYuY29sb3IuciAvIDI1NSwgdi5jb2xvci5nIC8gMjU1LCB2LmNvbG9yLmIgLyAyNTUsIHYub3BhY2l0eSxcblx0XHRcdClcblx0XHR9XG5cblx0XHRnZngucmVuZGVyZXIucHVzaChnbC5UUklBTkdMRVMsIHZ2LCBpbmRpY2VzLCBzaGFkZXIsIHRleCwgdW5pZm9ybSlcblxuXHR9XG5cblx0Ly8gZHJhdyBhbGwgYmF0Y2hlZCBzaGFwZXNcblx0ZnVuY3Rpb24gZmx1c2goKSB7XG5cdFx0Z2Z4LnJlbmRlcmVyLmZsdXNoKClcblx0fVxuXG5cdC8vIHN0YXJ0IGEgcmVuZGVyaW5nIGZyYW1lLCByZXNldCBzb21lIHN0YXRlc1xuXHRmdW5jdGlvbiBmcmFtZVN0YXJ0KCkge1xuXG5cdFx0Ly8gY2xlYXIgYmFja2J1ZmZlclxuXHRcdGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpXG5cdFx0Z2Z4LmZyYW1lQnVmZmVyLmJpbmQoKVxuXHRcdC8vIGNsZWFyIGZyYW1lYnVmZmVyXG5cdFx0Z2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVClcblxuXHRcdGlmICghZ2Z4LmJnQ29sb3IpIHtcblx0XHRcdGRyYXdVbnNjYWxlZCgoKSA9PiB7XG5cdFx0XHRcdGRyYXdVVlF1YWQoe1xuXHRcdFx0XHRcdHdpZHRoOiB3aWR0aCgpLFxuXHRcdFx0XHRcdGhlaWdodDogaGVpZ2h0KCksXG5cdFx0XHRcdFx0cXVhZDogbmV3IFF1YWQoXG5cdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdHdpZHRoKCkgLyBCR19HUklEX1NJWkUsXG5cdFx0XHRcdFx0XHRoZWlnaHQoKSAvIEJHX0dSSURfU0laRSxcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdHRleDogZ2Z4LmJnVGV4LFxuXHRcdFx0XHRcdGZpeGVkOiB0cnVlLFxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRnZngucmVuZGVyZXIubnVtRHJhd3MgPSAwXG5cdFx0Z2Z4LmZpeGVkID0gZmFsc2Vcblx0XHRnZngudHJhbnNmb3JtU3RhY2subGVuZ3RoID0gMFxuXHRcdGdmeC50cmFuc2Zvcm0gPSBuZXcgTWF0NCgpXG5cblx0fVxuXG5cdGZ1bmN0aW9uIHVzZVBvc3RFZmZlY3QobmFtZTogc3RyaW5nLCB1bmlmb3JtPzogVW5pZm9ybSB8ICgoKSA9PiBVbmlmb3JtKSkge1xuXHRcdGdmeC5wb3N0U2hhZGVyID0gbmFtZVxuXHRcdGdmeC5wb3N0U2hhZGVyVW5pZm9ybSA9IHVuaWZvcm0gPz8gbnVsbFxuXHR9XG5cblx0ZnVuY3Rpb24gZnJhbWVFbmQoKSB7XG5cblx0XHQvLyBUT0RPOiBkb24ndCByZW5kZXIgZGVidWcgVUkgd2l0aCBmcmFtZWJ1ZmZlclxuXHRcdC8vIFRPRE86IHBvbGlzaCBmcmFtZWJ1ZmZlciByZW5kZXJpbmcgLyBzaXppbmcgaXNzdWVzXG5cdFx0Zmx1c2goKVxuXHRcdGdmeC5sYXN0RHJhd0NhbGxzID0gZ2Z4LnJlbmRlcmVyLm51bURyYXdzXG5cdFx0Z2Z4LmZyYW1lQnVmZmVyLnVuYmluZCgpXG5cdFx0Z2wudmlld3BvcnQoMCwgMCwgZ2wuZHJhd2luZ0J1ZmZlcldpZHRoLCBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0KVxuXG5cdFx0Y29uc3Qgb3cgPSBnZngud2lkdGhcblx0XHRjb25zdCBvaCA9IGdmeC5oZWlnaHRcblx0XHRnZngud2lkdGggPSBnbC5kcmF3aW5nQnVmZmVyV2lkdGggLyBwaXhlbERlbnNpdHlcblx0XHRnZnguaGVpZ2h0ID0gZ2wuZHJhd2luZ0J1ZmZlckhlaWdodCAvIHBpeGVsRGVuc2l0eVxuXG5cdFx0ZHJhd1RleHR1cmUoe1xuXHRcdFx0ZmxpcFk6IHRydWUsXG5cdFx0XHR0ZXg6IGdmeC5mcmFtZUJ1ZmZlci50ZXgsXG5cdFx0XHRwb3M6IG5ldyBWZWMyKGdmeC52aWV3cG9ydC54LCBnZngudmlld3BvcnQueSksXG5cdFx0XHR3aWR0aDogZ2Z4LnZpZXdwb3J0LndpZHRoLFxuXHRcdFx0aGVpZ2h0OiBnZngudmlld3BvcnQuaGVpZ2h0LFxuXHRcdFx0c2hhZGVyOiBnZngucG9zdFNoYWRlcixcblx0XHRcdHVuaWZvcm06IHR5cGVvZiBnZngucG9zdFNoYWRlclVuaWZvcm0gPT09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHQ/IGdmeC5wb3N0U2hhZGVyVW5pZm9ybSgpXG5cdFx0XHRcdDogZ2Z4LnBvc3RTaGFkZXJVbmlmb3JtLFxuXHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0fSlcblxuXHRcdGZsdXNoKClcblx0XHRnZngud2lkdGggPSBvd1xuXHRcdGdmeC5oZWlnaHQgPSBvaFxuXG5cdH1cblxuXHQvLyBjb252ZXJ0IGEgc2NyZWVuIHNwYWNlIGNvb3JkaW5hdGUgdG8gd2ViZ2wgbm9ybWFsaXplZCBkZXZpY2UgY29vcmRpbmF0ZVxuXHRmdW5jdGlvbiBzY3JlZW4ybmRjKHB0OiBWZWMyKTogVmVjMiB7XG5cdFx0cmV0dXJuIG5ldyBWZWMyKFxuXHRcdFx0cHQueCAvIHdpZHRoKCkgKiAyIC0gMSxcblx0XHRcdC1wdC55IC8gaGVpZ2h0KCkgKiAyICsgMSxcblx0XHQpXG5cdH1cblxuXHRmdW5jdGlvbiBwdXNoTWF0cml4KG06IE1hdDQpIHtcblx0XHRnZngudHJhbnNmb3JtID0gbS5jbG9uZSgpXG5cdH1cblxuXHRmdW5jdGlvbiBwdXNoVHJhbnNsYXRlKC4uLmFyZ3M6IFZlYzJBcmdzKSB7XG5cdFx0aWYgKGFyZ3NbMF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuXG5cdFx0Y29uc3QgcCA9IHZlYzIoLi4uYXJncylcblx0XHRpZiAocC54ID09PSAwICYmIHAueSA9PT0gMCkgcmV0dXJuXG5cdFx0Z2Z4LnRyYW5zZm9ybS50cmFuc2xhdGUocClcblx0fVxuXG5cdGZ1bmN0aW9uIHB1c2hTY2FsZSguLi5hcmdzOiBWZWMyQXJncykge1xuXHRcdGlmIChhcmdzWzBdID09PSB1bmRlZmluZWQpIHJldHVyblxuXHRcdGNvbnN0IHAgPSB2ZWMyKC4uLmFyZ3MpXG5cdFx0aWYgKHAueCA9PT0gMSAmJiBwLnkgPT09IDEpIHJldHVyblxuXHRcdGdmeC50cmFuc2Zvcm0uc2NhbGUocClcblx0fVxuXG5cdGZ1bmN0aW9uIHB1c2hSb3RhdGUoYTogbnVtYmVyKSB7XG5cdFx0aWYgKCFhKSByZXR1cm5cblx0XHRnZngudHJhbnNmb3JtLnJvdGF0ZShhKVxuXHR9XG5cblx0ZnVuY3Rpb24gcHVzaFRyYW5zZm9ybSgpIHtcblx0XHRnZngudHJhbnNmb3JtU3RhY2sucHVzaChnZngudHJhbnNmb3JtLmNsb25lKCkpXG5cdH1cblxuXHRmdW5jdGlvbiBwb3BUcmFuc2Zvcm0oKSB7XG5cdFx0aWYgKGdmeC50cmFuc2Zvcm1TdGFjay5sZW5ndGggPiAwKSB7XG5cdFx0XHRnZngudHJhbnNmb3JtID0gZ2Z4LnRyYW5zZm9ybVN0YWNrLnBvcCgpXG5cdFx0fVxuXHR9XG5cblx0Ly8gZHJhdyBhIHV2IHRleHR1cmVkIHF1YWRcblx0ZnVuY3Rpb24gZHJhd1VWUXVhZChvcHQ6IERyYXdVVlF1YWRPcHQpIHtcblxuXHRcdGlmIChvcHQud2lkdGggPT09IHVuZGVmaW5lZCB8fCBvcHQuaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImRyYXdVVlF1YWQoKSByZXF1aXJlcyBwcm9wZXJ0eSBcXFwid2lkdGhcXFwiIGFuZCBcXFwiaGVpZ2h0XFxcIi5cIilcblx0XHR9XG5cblx0XHRpZiAob3B0LndpZHRoIDw9IDAgfHwgb3B0LmhlaWdodCA8PSAwKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRjb25zdCB3ID0gb3B0LndpZHRoXG5cdFx0Y29uc3QgaCA9IG9wdC5oZWlnaHRcblx0XHRjb25zdCBhbmNob3IgPSBhbmNob3JQdChvcHQuYW5jaG9yIHx8IERFRl9BTkNIT1IpXG5cdFx0Y29uc3Qgb2Zmc2V0ID0gYW5jaG9yLnNjYWxlKG5ldyBWZWMyKHcsIGgpLnNjYWxlKC0wLjUpKVxuXHRcdGNvbnN0IHEgPSBvcHQucXVhZCB8fCBuZXcgUXVhZCgwLCAwLCAxLCAxKVxuXHRcdGNvbnN0IGNvbG9yID0gb3B0LmNvbG9yIHx8IHJnYigyNTUsIDI1NSwgMjU1KVxuXHRcdGNvbnN0IG9wYWNpdHkgPSBvcHQub3BhY2l0eSA/PyAxXG5cblx0XHQvLyBhcHBseSB1diBwYWRkaW5nIHRvIGF2b2lkIGFydGlmYWN0c1xuXHRcdGNvbnN0IHV2UGFkWCA9IG9wdC50ZXggPyBVVl9QQUQgLyBvcHQudGV4LndpZHRoIDogMFxuXHRcdGNvbnN0IHV2UGFkWSA9IG9wdC50ZXggPyBVVl9QQUQgLyBvcHQudGV4LmhlaWdodCA6IDBcblx0XHRjb25zdCBxeCA9IHEueCArIHV2UGFkWFxuXHRcdGNvbnN0IHF5ID0gcS55ICsgdXZQYWRZXG5cdFx0Y29uc3QgcXcgPSBxLncgLSB1dlBhZFggKiAyXG5cdFx0Y29uc3QgcWggPSBxLmggLSB1dlBhZFkgKiAyXG5cblx0XHRwdXNoVHJhbnNmb3JtKClcblx0XHRwdXNoVHJhbnNsYXRlKG9wdC5wb3MpXG5cdFx0cHVzaFJvdGF0ZShvcHQuYW5nbGUpXG5cdFx0cHVzaFNjYWxlKG9wdC5zY2FsZSlcblx0XHRwdXNoVHJhbnNsYXRlKG9mZnNldClcblxuXHRcdGRyYXdSYXcoW1xuXHRcdFx0e1xuXHRcdFx0XHRwb3M6IG5ldyBWZWMyKC13IC8gMiwgaCAvIDIpLFxuXHRcdFx0XHR1djogbmV3IFZlYzIob3B0LmZsaXBYID8gcXggKyBxdyA6IHF4LCBvcHQuZmxpcFkgPyBxeSA6IHF5ICsgcWgpLFxuXHRcdFx0XHRjb2xvcjogY29sb3IsXG5cdFx0XHRcdG9wYWNpdHk6IG9wYWNpdHksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwb3M6IG5ldyBWZWMyKC13IC8gMiwgLWggLyAyKSxcblx0XHRcdFx0dXY6IG5ldyBWZWMyKG9wdC5mbGlwWCA/IHF4ICsgcXcgOiBxeCwgb3B0LmZsaXBZID8gcXkgKyBxaCA6IHF5KSxcblx0XHRcdFx0Y29sb3I6IGNvbG9yLFxuXHRcdFx0XHRvcGFjaXR5OiBvcGFjaXR5LFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cG9zOiBuZXcgVmVjMih3IC8gMiwgLWggLyAyKSxcblx0XHRcdFx0dXY6IG5ldyBWZWMyKG9wdC5mbGlwWCA/IHF4IDogcXggKyBxdywgb3B0LmZsaXBZID8gcXkgKyBxaCA6IHF5KSxcblx0XHRcdFx0Y29sb3I6IGNvbG9yLFxuXHRcdFx0XHRvcGFjaXR5OiBvcGFjaXR5LFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cG9zOiBuZXcgVmVjMih3IC8gMiwgaCAvIDIpLFxuXHRcdFx0XHR1djogbmV3IFZlYzIob3B0LmZsaXBYID8gcXggOiBxeCArIHF3LCBvcHQuZmxpcFkgPyBxeSA6IHF5ICsgcWgpLFxuXHRcdFx0XHRjb2xvcjogY29sb3IsXG5cdFx0XHRcdG9wYWNpdHk6IG9wYWNpdHksXG5cdFx0XHR9LFxuXHRcdF0sIFswLCAxLCAzLCAxLCAyLCAzXSwgb3B0LmZpeGVkLCBvcHQudGV4LCBvcHQuc2hhZGVyLCBvcHQudW5pZm9ybSlcblxuXHRcdHBvcFRyYW5zZm9ybSgpXG5cblx0fVxuXG5cdC8vIFRPRE86IGNsZWFuXG5cdGZ1bmN0aW9uIGRyYXdUZXh0dXJlKG9wdDogRHJhd1RleHR1cmVPcHQpIHtcblxuXHRcdGlmICghb3B0LnRleCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZHJhd1RleHR1cmUoKSByZXF1aXJlcyBwcm9wZXJ0eSBcXFwidGV4XFxcIi5cIilcblx0XHR9XG5cblx0XHRjb25zdCBxID0gb3B0LnF1YWQgPz8gbmV3IFF1YWQoMCwgMCwgMSwgMSlcblx0XHRjb25zdCB3ID0gb3B0LnRleC53aWR0aCAqIHEud1xuXHRcdGNvbnN0IGggPSBvcHQudGV4LmhlaWdodCAqIHEuaFxuXHRcdGNvbnN0IHNjYWxlID0gbmV3IFZlYzIoMSlcblxuXHRcdGlmIChvcHQudGlsZWQpIHtcblxuXHRcdFx0Ly8gVE9ETzogZHJhdyBmcmFjdFxuXHRcdFx0Y29uc3QgcmVwWCA9IE1hdGguY2VpbCgob3B0LndpZHRoIHx8IHcpIC8gdylcblx0XHRcdGNvbnN0IHJlcFkgPSBNYXRoLmNlaWwoKG9wdC5oZWlnaHQgfHwgaCkgLyBoKVxuXHRcdFx0Y29uc3QgYW5jaG9yID0gYW5jaG9yUHQob3B0LmFuY2hvciB8fCBERUZfQU5DSE9SKS5hZGQobmV3IFZlYzIoMSwgMSkpLnNjYWxlKDAuNSlcblx0XHRcdGNvbnN0IG9mZnNldCA9IGFuY2hvci5zY2FsZShyZXBYICogdywgcmVwWSAqIGgpXG5cblx0XHRcdC8vIFRPRE86IHJvdGF0aW9uXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlcFg7IGkrKykge1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHJlcFk7IGorKykge1xuXHRcdFx0XHRcdGRyYXdVVlF1YWQoT2JqZWN0LmFzc2lnbih7fSwgb3B0LCB7XG5cdFx0XHRcdFx0XHRwb3M6IChvcHQucG9zIHx8IG5ldyBWZWMyKDApKS5hZGQobmV3IFZlYzIodyAqIGksIGggKiBqKSkuc3ViKG9mZnNldCksXG5cdFx0XHRcdFx0XHRzY2FsZTogc2NhbGUuc2NhbGUob3B0LnNjYWxlIHx8IG5ldyBWZWMyKDEpKSxcblx0XHRcdFx0XHRcdHRleDogb3B0LnRleCxcblx0XHRcdFx0XHRcdHF1YWQ6IHEsXG5cdFx0XHRcdFx0XHR3aWR0aDogdyxcblx0XHRcdFx0XHRcdGhlaWdodDogaCxcblx0XHRcdFx0XHRcdGFuY2hvcjogXCJ0b3BsZWZ0XCIsXG5cdFx0XHRcdFx0fSkpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBUT0RPOiBzaG91bGQgdGhpcyBpZ25vcmUgc2NhbGU/XG5cdFx0XHRpZiAob3B0LndpZHRoICYmIG9wdC5oZWlnaHQpIHtcblx0XHRcdFx0c2NhbGUueCA9IG9wdC53aWR0aCAvIHdcblx0XHRcdFx0c2NhbGUueSA9IG9wdC5oZWlnaHQgLyBoXG5cdFx0XHR9IGVsc2UgaWYgKG9wdC53aWR0aCkge1xuXHRcdFx0XHRzY2FsZS54ID0gb3B0LndpZHRoIC8gd1xuXHRcdFx0XHRzY2FsZS55ID0gc2NhbGUueFxuXHRcdFx0fSBlbHNlIGlmIChvcHQuaGVpZ2h0KSB7XG5cdFx0XHRcdHNjYWxlLnkgPSBvcHQuaGVpZ2h0IC8gaFxuXHRcdFx0XHRzY2FsZS54ID0gc2NhbGUueVxuXHRcdFx0fVxuXG5cdFx0XHRkcmF3VVZRdWFkKE9iamVjdC5hc3NpZ24oe30sIG9wdCwge1xuXHRcdFx0XHRzY2FsZTogc2NhbGUuc2NhbGUob3B0LnNjYWxlIHx8IG5ldyBWZWMyKDEpKSxcblx0XHRcdFx0dGV4OiBvcHQudGV4LFxuXHRcdFx0XHRxdWFkOiBxLFxuXHRcdFx0XHR3aWR0aDogdyxcblx0XHRcdFx0aGVpZ2h0OiBoLFxuXHRcdFx0fSkpXG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdTcHJpdGUob3B0OiBEcmF3U3ByaXRlT3B0KSB7XG5cblx0XHRpZiAoIW9wdC5zcHJpdGUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImRyYXdTcHJpdGUoKSByZXF1aXJlcyBwcm9wZXJ0eSBcXFwic3ByaXRlXFxcIlwiKVxuXHRcdH1cblxuXHRcdC8vIFRPRE86IHNsb3dcblx0XHRjb25zdCBzcHIgPSByZXNvbHZlU3ByaXRlKG9wdC5zcHJpdGUpXG5cblx0XHRpZiAoIXNwciB8fCAhc3ByLmRhdGEpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IHEgPSBzcHIuZGF0YS5mcmFtZXNbb3B0LmZyYW1lID8/IDBdXG5cblx0XHRpZiAoIXEpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgRnJhbWUgbm90IGZvdW5kOiAke29wdC5mcmFtZSA/PyAwfWApXG5cdFx0fVxuXG5cdFx0ZHJhd1RleHR1cmUoT2JqZWN0LmFzc2lnbih7fSwgb3B0LCB7XG5cdFx0XHR0ZXg6IHNwci5kYXRhLnRleCxcblx0XHRcdHF1YWQ6IHEuc2NhbGUob3B0LnF1YWQgPz8gbmV3IFF1YWQoMCwgMCwgMSwgMSkpLFxuXHRcdH0pKVxuXG5cdH1cblxuXHQvLyBnZW5lcmF0ZSB2ZXJ0aWNlcyB0byBmb3JtIGFuIGFyY1xuXHRmdW5jdGlvbiBnZXRBcmNQdHMoXG5cdFx0cG9zOiBWZWMyLFxuXHRcdHJhZGl1c1g6IG51bWJlcixcblx0XHRyYWRpdXNZOiBudW1iZXIsXG5cdFx0c3RhcnQ6IG51bWJlcixcblx0XHRlbmQ6IG51bWJlcixcblx0XHRyZXM6IG51bWJlciA9IDEsXG5cdCk6IFZlYzJbXSB7XG5cblx0XHQvLyBub3JtYWxpemUgYW5kIHR1cm4gc3RhcnQgYW5kIGVuZCBhbmdsZXMgdG8gcmFkaWFuc1xuXHRcdHN0YXJ0ID0gZGVnMnJhZChzdGFydCAlIDM2MClcblx0XHRlbmQgPSBkZWcycmFkKGVuZCAlIDM2MClcblx0XHRpZiAoZW5kIDw9IHN0YXJ0KSBlbmQgKz0gTWF0aC5QSSAqIDJcblxuXHRcdGNvbnN0IHB0cyA9IFtdXG5cdFx0Y29uc3QgbnZlcnRzID0gTWF0aC5jZWlsKChlbmQgLSBzdGFydCkgLyBkZWcycmFkKDgpICogcmVzKVxuXHRcdGNvbnN0IHN0ZXAgPSAoZW5kIC0gc3RhcnQpIC8gbnZlcnRzXG5cblx0XHQvLyBjYWxjdWxhdGUgdmVydGljZXNcblx0XHRmb3IgKGxldCBhID0gc3RhcnQ7IGEgPCBlbmQ7IGEgKz0gc3RlcCkge1xuXHRcdFx0cHRzLnB1c2gocG9zLmFkZChyYWRpdXNYICogTWF0aC5jb3MoYSksIHJhZGl1c1kgKiBNYXRoLnNpbihhKSkpXG5cdFx0fVxuXG5cdFx0cHRzLnB1c2gocG9zLmFkZChyYWRpdXNYICogTWF0aC5jb3MoZW5kKSwgcmFkaXVzWSAqIE1hdGguc2luKGVuZCkpKVxuXG5cdFx0cmV0dXJuIHB0c1xuXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3UmVjdChvcHQ6IERyYXdSZWN0T3B0KSB7XG5cblx0XHRpZiAob3B0LndpZHRoID09PSB1bmRlZmluZWQgfHwgb3B0LmhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJkcmF3UmVjdCgpIHJlcXVpcmVzIHByb3BlcnR5IFxcXCJ3aWR0aFxcXCIgYW5kIFxcXCJoZWlnaHRcXFwiLlwiKVxuXHRcdH1cblxuXHRcdGlmIChvcHQud2lkdGggPD0gMCB8fCBvcHQuaGVpZ2h0IDw9IDApIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IHcgPSBvcHQud2lkdGhcblx0XHRjb25zdCBoID0gb3B0LmhlaWdodFxuXHRcdGNvbnN0IGFuY2hvciA9IGFuY2hvclB0KG9wdC5hbmNob3IgfHwgREVGX0FOQ0hPUikuYWRkKDEsIDEpXG5cdFx0Y29uc3Qgb2Zmc2V0ID0gYW5jaG9yLnNjYWxlKG5ldyBWZWMyKHcsIGgpLnNjYWxlKC0wLjUpKVxuXG5cdFx0bGV0IHB0cyA9IFtcblx0XHRcdG5ldyBWZWMyKDAsIDApLFxuXHRcdFx0bmV3IFZlYzIodywgMCksXG5cdFx0XHRuZXcgVmVjMih3LCBoKSxcblx0XHRcdG5ldyBWZWMyKDAsIGgpLFxuXHRcdF1cblxuXHRcdC8vIFRPRE86IGdyYWRpZW50IGZvciByb3VuZGVkIHJlY3Rcblx0XHQvLyBUT0RPOiBkcmF3UG9seWdvbiBzaG91bGQgaGFuZGxlIGdlbmVyaWMgcm91bmRlZCBjb3JuZXJzXG5cdFx0aWYgKG9wdC5yYWRpdXMpIHtcblxuXHRcdFx0Ly8gbWF4aXVtIHJhZGl1cyBpcyBoYWxmIHRoZSBzaG9ydGVzdCBzaWRlXG5cdFx0XHRjb25zdCByID0gTWF0aC5taW4oTWF0aC5taW4odywgaCkgLyAyLCBvcHQucmFkaXVzKVxuXG5cdFx0XHRwdHMgPSBbXG5cdFx0XHRcdG5ldyBWZWMyKHIsIDApLFxuXHRcdFx0XHRuZXcgVmVjMih3IC0gciwgMCksXG5cdFx0XHRcdC4uLmdldEFyY1B0cyhuZXcgVmVjMih3IC0gciwgciksIHIsIHIsIDI3MCwgMzYwKSxcblx0XHRcdFx0bmV3IFZlYzIodywgciksXG5cdFx0XHRcdG5ldyBWZWMyKHcsIGggLSByKSxcblx0XHRcdFx0Li4uZ2V0QXJjUHRzKG5ldyBWZWMyKHcgLSByLCBoIC0gciksIHIsIHIsIDAsIDkwKSxcblx0XHRcdFx0bmV3IFZlYzIodyAtIHIsIGgpLFxuXHRcdFx0XHRuZXcgVmVjMihyLCBoKSxcblx0XHRcdFx0Li4uZ2V0QXJjUHRzKG5ldyBWZWMyKHIsIGggLSByKSwgciwgciwgOTAsIDE4MCksXG5cdFx0XHRcdG5ldyBWZWMyKDAsIGggLSByKSxcblx0XHRcdFx0bmV3IFZlYzIoMCwgciksXG5cdFx0XHRcdC4uLmdldEFyY1B0cyhuZXcgVmVjMihyLCByKSwgciwgciwgMTgwLCAyNzApLFxuXHRcdFx0XVxuXG5cdFx0fVxuXG5cdFx0ZHJhd1BvbHlnb24oT2JqZWN0LmFzc2lnbih7fSwgb3B0LCB7XG5cdFx0XHRvZmZzZXQsXG5cdFx0XHRwdHMsXG5cdFx0XHQuLi4ob3B0LmdyYWRpZW50ID8ge1xuXHRcdFx0XHRjb2xvcnM6IG9wdC5ob3Jpem9udGFsID8gW1xuXHRcdFx0XHRcdG9wdC5ncmFkaWVudFswXSxcblx0XHRcdFx0XHRvcHQuZ3JhZGllbnRbMV0sXG5cdFx0XHRcdFx0b3B0LmdyYWRpZW50WzFdLFxuXHRcdFx0XHRcdG9wdC5ncmFkaWVudFswXSxcblx0XHRcdFx0XSA6IFtcblx0XHRcdFx0XHRvcHQuZ3JhZGllbnRbMF0sXG5cdFx0XHRcdFx0b3B0LmdyYWRpZW50WzBdLFxuXHRcdFx0XHRcdG9wdC5ncmFkaWVudFsxXSxcblx0XHRcdFx0XHRvcHQuZ3JhZGllbnRbMV0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9IDoge30pLFxuXHRcdH0pKVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3TGluZShvcHQ6IERyYXdMaW5lT3B0KSB7XG5cblx0XHRjb25zdCB7IHAxLCBwMiB9ID0gb3B0XG5cblx0XHRpZiAoIXAxIHx8ICFwMikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZHJhd0xpbmUoKSByZXF1aXJlcyBwcm9wZXJ0aWVzIFxcXCJwMVxcXCIgYW5kIFxcXCJwMlxcXCIuXCIpXG5cdFx0fVxuXG5cdFx0Y29uc3QgdyA9IG9wdC53aWR0aCB8fCAxXG5cblx0XHQvLyB0aGUgZGlzcGxhY2VtZW50IGZyb20gdGhlIGxpbmUgZW5kIHBvaW50IHRvIHRoZSBjb3JuZXIgcG9pbnRcblx0XHRjb25zdCBkaXMgPSBwMi5zdWIocDEpLnVuaXQoKS5ub3JtYWwoKS5zY2FsZSh3ICogMC41KVxuXG5cdFx0Ly8gY2FsY3VsYXRlIHRoZSA0IGNvcm5lciBwb2ludHMgb2YgdGhlIGxpbmUgcG9seWdvblxuXHRcdGNvbnN0IHZlcnRzID0gW1xuXHRcdFx0cDEuc3ViKGRpcyksXG5cdFx0XHRwMS5hZGQoZGlzKSxcblx0XHRcdHAyLmFkZChkaXMpLFxuXHRcdFx0cDIuc3ViKGRpcyksXG5cdFx0XS5tYXAoKHApID0+ICh7XG5cdFx0XHRwb3M6IG5ldyBWZWMyKHAueCwgcC55KSxcblx0XHRcdHV2OiBuZXcgVmVjMigwKSxcblx0XHRcdGNvbG9yOiBvcHQuY29sb3IgPz8gQ29sb3IuV0hJVEUsXG5cdFx0XHRvcGFjaXR5OiBvcHQub3BhY2l0eSA/PyAxLFxuXHRcdH0pKVxuXG5cdFx0ZHJhd1Jhdyh2ZXJ0cywgWzAsIDEsIDMsIDEsIDIsIDNdLCBvcHQuZml4ZWQsIGdmeC5kZWZUZXgsIG9wdC5zaGFkZXIsIG9wdC51bmlmb3JtKVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3TGluZXMob3B0OiBEcmF3TGluZXNPcHQpIHtcblxuXHRcdGNvbnN0IHB0cyA9IG9wdC5wdHNcblxuXHRcdGlmICghcHRzKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJkcmF3TGluZXMoKSByZXF1aXJlcyBwcm9wZXJ0eSBcXFwicHRzXFxcIi5cIilcblx0XHR9XG5cblx0XHRpZiAocHRzLmxlbmd0aCA8IDIpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmIChvcHQucmFkaXVzICYmIHB0cy5sZW5ndGggPj0gMykge1xuXG5cdFx0XHQvLyBUT0RPOiBsaW5lIGpvaW5lc1xuXHRcdFx0Ly8gVE9ETzogcm91bmRlZCB2ZXJ0aWNlcyBmb3IgYXJiaXR1cnkgcG9seWdvbmljIHNoYXBlXG5cdFx0XHRsZXQgbWluU0xlbiA9IHB0c1swXS5zZGlzdChwdHNbMV0pXG5cblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0XHRtaW5TTGVuID0gTWF0aC5taW4ocHRzW2ldLnNkaXN0KHB0c1tpICsgMV0pLCBtaW5TTGVuKVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblx0XHRcdGNvbnN0IHJhZGl1cyA9IE1hdGgubWluKG9wdC5yYWRpdXMsIE1hdGguc3FydChtaW5TTGVuKSAvIDIpXG5cblx0XHRcdGRyYXdMaW5lKE9iamVjdC5hc3NpZ24oe30sIG9wdCwgeyBwMTogcHRzWzBdLCBwMjogcHRzWzFdIH0pKVxuXG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGggLSAyOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgcDEgPSBwdHNbaV1cblx0XHRcdFx0Y29uc3QgcDIgPSBwdHNbaSArIDFdXG5cdFx0XHRcdGRyYXdMaW5lKE9iamVjdC5hc3NpZ24oe30sIG9wdCwge1xuXHRcdFx0XHRcdHAxOiBwMSxcblx0XHRcdFx0XHRwMjogcDIsXG5cdFx0XHRcdH0pKVxuXHRcdFx0fVxuXG5cdFx0XHRkcmF3TGluZShPYmplY3QuYXNzaWduKHt9LCBvcHQsIHtcblx0XHRcdFx0cDE6IHB0c1twdHMubGVuZ3RoIC0gMl0sXG5cdFx0XHRcdHAyOiBwdHNbcHRzLmxlbmd0aCAtIDFdLFxuXHRcdFx0fSkpXG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0ZHJhd0xpbmUoT2JqZWN0LmFzc2lnbih7fSwgb3B0LCB7XG5cdFx0XHRcdFx0cDE6IHB0c1tpXSxcblx0XHRcdFx0XHRwMjogcHRzW2kgKyAxXSxcblx0XHRcdFx0fSkpXG5cdFx0XHRcdC8vIFRPRE86IG90aGVyIGxpbmUgam9pbiB0eXBlc1xuXHRcdFx0XHRpZiAob3B0LmpvaW4gIT09IFwibm9uZVwiKSB7XG5cdFx0XHRcdFx0ZHJhd0NpcmNsZShPYmplY3QuYXNzaWduKHt9LCBvcHQsIHtcblx0XHRcdFx0XHRcdHBvczogcHRzW2ldLFxuXHRcdFx0XHRcdFx0cmFkaXVzOiBvcHQud2lkdGggLyAyLFxuXHRcdFx0XHRcdH0pKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdUcmlhbmdsZShvcHQ6IERyYXdUcmlhbmdsZU9wdCkge1xuXHRcdGlmICghb3B0LnAxIHx8ICFvcHQucDIgfHwgIW9wdC5wMykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZHJhd1RyaWFuZ2xlKCkgcmVxdWlyZXMgcHJvcGVydGllcyBcXFwicDFcXFwiLCBcXFwicDJcXFwiIGFuZCBcXFwicDNcXFwiLlwiKVxuXHRcdH1cblx0XHRyZXR1cm4gZHJhd1BvbHlnb24oT2JqZWN0LmFzc2lnbih7fSwgb3B0LCB7XG5cdFx0XHRwdHM6IFtvcHQucDEsIG9wdC5wMiwgb3B0LnAzXSxcblx0XHR9KSlcblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdDaXJjbGUob3B0OiBEcmF3Q2lyY2xlT3B0KSB7XG5cblx0XHRpZiAodHlwZW9mIG9wdC5yYWRpdXMgIT09IFwibnVtYmVyXCIpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImRyYXdDaXJjbGUoKSByZXF1aXJlcyBwcm9wZXJ0eSBcXFwicmFkaXVzXFxcIi5cIilcblx0XHR9XG5cblx0XHRpZiAob3B0LnJhZGl1cyA9PT0gMCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0ZHJhd0VsbGlwc2UoT2JqZWN0LmFzc2lnbih7fSwgb3B0LCB7XG5cdFx0XHRyYWRpdXNYOiBvcHQucmFkaXVzLFxuXHRcdFx0cmFkaXVzWTogb3B0LnJhZGl1cyxcblx0XHRcdGFuZ2xlOiAwLFxuXHRcdH0pKVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3RWxsaXBzZShvcHQ6IERyYXdFbGxpcHNlT3B0KSB7XG5cblx0XHRpZiAob3B0LnJhZGl1c1ggPT09IHVuZGVmaW5lZCB8fCBvcHQucmFkaXVzWSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJkcmF3RWxsaXBzZSgpIHJlcXVpcmVzIHByb3BlcnRpZXMgXFxcInJhZGl1c1hcXFwiIGFuZCBcXFwicmFkaXVzWVxcXCIuXCIpXG5cdFx0fVxuXG5cdFx0aWYgKG9wdC5yYWRpdXNYID09PSAwIHx8IG9wdC5yYWRpdXNZID09PSAwKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRjb25zdCBzdGFydCA9IG9wdC5zdGFydCA/PyAwXG5cdFx0Y29uc3QgZW5kID0gb3B0LmVuZCA/PyAzNjBcblx0XHRjb25zdCBvZmZzZXQgPSBhbmNob3JQdChvcHQuYW5jaG9yID8/IFwiY2VudGVyXCIpLnNjYWxlKG5ldyBWZWMyKC1vcHQucmFkaXVzWCwgLW9wdC5yYWRpdXNZKSlcblxuXHRcdGNvbnN0IHB0cyA9IGdldEFyY1B0cyhcblx0XHRcdG9mZnNldCxcblx0XHRcdG9wdC5yYWRpdXNYLFxuXHRcdFx0b3B0LnJhZGl1c1ksXG5cdFx0XHRzdGFydCxcblx0XHRcdGVuZCxcblx0XHRcdG9wdC5yZXNvbHV0aW9uLFxuXHRcdClcblxuXHRcdC8vIGNlbnRlclxuXHRcdHB0cy51bnNoaWZ0KG9mZnNldClcblxuXHRcdGNvbnN0IHBvbHlPcHQgPSBPYmplY3QuYXNzaWduKHt9LCBvcHQsIHtcblx0XHRcdHB0cyxcblx0XHRcdHJhZGl1czogMCxcblx0XHRcdC4uLihvcHQuZ3JhZGllbnQgPyB7XG5cdFx0XHRcdGNvbG9yczogW1xuXHRcdFx0XHRcdG9wdC5ncmFkaWVudFswXSxcblx0XHRcdFx0XHQuLi5BcnJheShwdHMubGVuZ3RoIC0gMSkuZmlsbChvcHQuZ3JhZGllbnRbMV0pLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSA6IHt9KSxcblx0XHR9KVxuXG5cdFx0Ly8gZnVsbCBjaXJjbGUgd2l0aCBvdXRsaW5lIHNob3VsZG4ndCBoYXZlIHRoZSBjZW50ZXIgcG9pbnRcblx0XHRpZiAoZW5kIC0gc3RhcnQgPj0gMzYwICYmIG9wdC5vdXRsaW5lKSB7XG5cdFx0XHRpZiAob3B0LmZpbGwgIT09IGZhbHNlKSB7XG5cdFx0XHRcdGRyYXdQb2x5Z29uKE9iamVjdC5hc3NpZ24ocG9seU9wdCwge1xuXHRcdFx0XHRcdG91dGxpbmU6IG51bGwsXG5cdFx0XHRcdH0pKVxuXHRcdFx0fVxuXHRcdFx0ZHJhd1BvbHlnb24oT2JqZWN0LmFzc2lnbihwb2x5T3B0LCB7XG5cdFx0XHRcdHB0czogcHRzLnNsaWNlKDEpLFxuXHRcdFx0XHRmaWxsOiBmYWxzZSxcblx0XHRcdH0pKVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0ZHJhd1BvbHlnb24ocG9seU9wdClcblxuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd1BvbHlnb24ob3B0OiBEcmF3UG9seWdvbk9wdCkge1xuXG5cdFx0aWYgKCFvcHQucHRzKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJkcmF3UG9seWdvbigpIHJlcXVpcmVzIHByb3BlcnR5IFxcXCJwdHNcXFwiLlwiKVxuXHRcdH1cblxuXHRcdGNvbnN0IG5wdHMgPSBvcHQucHRzLmxlbmd0aFxuXG5cdFx0aWYgKG5wdHMgPCAzKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRwdXNoVHJhbnNmb3JtKClcblx0XHRwdXNoVHJhbnNsYXRlKG9wdC5wb3MpXG5cdFx0cHVzaFNjYWxlKG9wdC5zY2FsZSlcblx0XHRwdXNoUm90YXRlKG9wdC5hbmdsZSlcblx0XHRwdXNoVHJhbnNsYXRlKG9wdC5vZmZzZXQpXG5cblx0XHRpZiAob3B0LmZpbGwgIT09IGZhbHNlKSB7XG5cblx0XHRcdGNvbnN0IGNvbG9yID0gb3B0LmNvbG9yID8/IENvbG9yLldISVRFXG5cblx0XHRcdGNvbnN0IHZlcnRzID0gb3B0LnB0cy5tYXAoKHB0LCBpKSA9PiAoe1xuXHRcdFx0XHRwb3M6IG5ldyBWZWMyKHB0LngsIHB0LnkpLFxuXHRcdFx0XHR1djogbmV3IFZlYzIoMCwgMCksXG5cdFx0XHRcdGNvbG9yOiBvcHQuY29sb3JzID8gKG9wdC5jb2xvcnNbaV0gPyBvcHQuY29sb3JzW2ldLm11bHQoY29sb3IpIDogY29sb3IpIDogY29sb3IsXG5cdFx0XHRcdG9wYWNpdHk6IG9wdC5vcGFjaXR5ID8/IDEsXG5cdFx0XHR9KSlcblxuXHRcdFx0Ly8gVE9ETzogYmV0dGVyIHRyaWFuZ3VsYXRpb25cblx0XHRcdGNvbnN0IGluZGljZXMgPSBbLi4uQXJyYXkobnB0cyAtIDIpLmtleXMoKV1cblx0XHRcdFx0Lm1hcCgobikgPT4gWzAsIG4gKyAxLCBuICsgMl0pXG5cdFx0XHRcdC5mbGF0KClcblxuXHRcdFx0ZHJhd1Jhdyh2ZXJ0cywgb3B0LmluZGljZXMgPz8gaW5kaWNlcywgb3B0LmZpeGVkLCBnZnguZGVmVGV4LCBvcHQuc2hhZGVyLCBvcHQudW5pZm9ybSlcblxuXHRcdH1cblxuXHRcdGlmIChvcHQub3V0bGluZSkge1xuXHRcdFx0ZHJhd0xpbmVzKHtcblx0XHRcdFx0cHRzOiBbIC4uLm9wdC5wdHMsIG9wdC5wdHNbMF0gXSxcblx0XHRcdFx0cmFkaXVzOiBvcHQucmFkaXVzLFxuXHRcdFx0XHR3aWR0aDogb3B0Lm91dGxpbmUud2lkdGgsXG5cdFx0XHRcdGNvbG9yOiBvcHQub3V0bGluZS5jb2xvcixcblx0XHRcdFx0am9pbjogb3B0Lm91dGxpbmUuam9pbixcblx0XHRcdFx0dW5pZm9ybTogb3B0LnVuaWZvcm0sXG5cdFx0XHRcdGZpeGVkOiBvcHQuZml4ZWQsXG5cdFx0XHRcdG9wYWNpdHk6IG9wdC5vcGFjaXR5LFxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRwb3BUcmFuc2Zvcm0oKVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3U3RlbmNpbGVkKGNvbnRlbnQ6ICgpID0+IHZvaWQsIG1hc2s6ICgpID0+IHZvaWQsIHRlc3Q6IG51bWJlcikge1xuXG5cdFx0Zmx1c2goKVxuXHRcdGdsLmNsZWFyKGdsLlNURU5DSUxfQlVGRkVSX0JJVClcblx0XHRnbC5lbmFibGUoZ2wuU1RFTkNJTF9URVNUKVxuXG5cdFx0Ly8gZG9uJ3QgcGVyZm9ybSB0ZXN0LCBwdXJlIHdyaXRlXG5cdFx0Z2wuc3RlbmNpbEZ1bmMoXG5cdFx0XHRnbC5ORVZFUixcblx0XHRcdDEsXG5cdFx0XHQweEZGLFxuXHRcdClcblxuXHRcdC8vIGFsd2F5cyByZXBsYWNlIHNpbmNlIHdlJ3JlIHdyaXRpbmcgdG8gdGhlIGJ1ZmZlclxuXHRcdGdsLnN0ZW5jaWxPcChcblx0XHRcdGdsLlJFUExBQ0UsXG5cdFx0XHRnbC5SRVBMQUNFLFxuXHRcdFx0Z2wuUkVQTEFDRSxcblx0XHQpXG5cblx0XHRtYXNrKClcblx0XHRmbHVzaCgpXG5cblx0XHQvLyBwZXJmb3JtIHRlc3Rcblx0XHRnbC5zdGVuY2lsRnVuYyhcblx0XHRcdHRlc3QsXG5cdFx0XHQxLFxuXHRcdFx0MHhGRixcblx0XHQpXG5cblx0XHQvLyBkb24ndCB3cml0ZSBzaW5jZSB3ZSdyZSBvbmx5IHRlc3Rpbmdcblx0XHRnbC5zdGVuY2lsT3AoXG5cdFx0XHRnbC5LRUVQLFxuXHRcdFx0Z2wuS0VFUCxcblx0XHRcdGdsLktFRVAsXG5cdFx0KVxuXG5cdFx0Y29udGVudCgpXG5cdFx0Zmx1c2goKVxuXHRcdGdsLmRpc2FibGUoZ2wuU1RFTkNJTF9URVNUKVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3TWFza2VkKGNvbnRlbnQ6ICgpID0+IHZvaWQsIG1hc2s6ICgpID0+IHZvaWQpIHtcblx0XHRkcmF3U3RlbmNpbGVkKGNvbnRlbnQsIG1hc2ssIGdsLkVRVUFMKVxuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd1N1YnRyYWN0ZWQoY29udGVudDogKCkgPT4gdm9pZCwgbWFzazogKCkgPT4gdm9pZCkge1xuXHRcdGRyYXdTdGVuY2lsZWQoY29udGVudCwgbWFzaywgZ2wuTk9URVFVQUwpXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRWaWV3cG9ydFNjYWxlKCkge1xuXHRcdHJldHVybiAoZ2Z4LnZpZXdwb3J0LndpZHRoICsgZ2Z4LnZpZXdwb3J0LmhlaWdodCkgLyAoZ2Z4LndpZHRoICsgZ2Z4LmhlaWdodClcblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdVbnNjYWxlZChjb250ZW50OiAoKSA9PiB2b2lkKSB7XG5cdFx0Zmx1c2goKVxuXHRcdGNvbnN0IG93ID0gZ2Z4LndpZHRoXG5cdFx0Y29uc3Qgb2ggPSBnZnguaGVpZ2h0XG5cdFx0Z2Z4LndpZHRoID0gZ2Z4LnZpZXdwb3J0LndpZHRoXG5cdFx0Z2Z4LmhlaWdodCA9IGdmeC52aWV3cG9ydC5oZWlnaHRcblx0XHRjb250ZW50KClcblx0XHRmbHVzaCgpXG5cdFx0Z2Z4LndpZHRoID0gb3dcblx0XHRnZnguaGVpZ2h0ID0gb2hcblx0fVxuXG5cdGZ1bmN0aW9uIGFwcGx5Q2hhclRyYW5zZm9ybShmY2hhcjogRm9ybWF0dGVkQ2hhciwgdHI6IENoYXJUcmFuc2Zvcm0pIHtcblx0XHRpZiAodHIucG9zKSBmY2hhci5wb3MgPSBmY2hhci5wb3MuYWRkKHRyLnBvcylcblx0XHRpZiAodHIuc2NhbGUpIGZjaGFyLnNjYWxlID0gZmNoYXIuc2NhbGUuc2NhbGUodmVjMih0ci5zY2FsZSkpXG5cdFx0aWYgKHRyLmFuZ2xlKSBmY2hhci5hbmdsZSArPSB0ci5hbmdsZVxuXHRcdGlmICh0ci5jb2xvciAmJiBmY2hhci5jaC5sZW5ndGggPT09IDEpIGZjaGFyLmNvbG9yID0gZmNoYXIuY29sb3IubXVsdCh0ci5jb2xvcilcblx0XHRpZiAodHIub3BhY2l0eSkgZmNoYXIub3BhY2l0eSAqPSB0ci5vcGFjaXR5XG5cdH1cblxuXHQvLyBUT0RPOiBlc2NhcGVcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cdGNvbnN0IFRFWFRfU1RZTEVfUkUgPSAvXFxbKD88c3R5bGU+XFx3KylcXF0oPzx0ZXh0Pi4qPylcXFtcXC9cXGs8c3R5bGU+XFxdL2dcblxuXHQvLyBUT0RPOiBoYW5kbGUgbmVzdGVkXG5cdGZ1bmN0aW9uIGNvbXBpbGVTdHlsZWRUZXh0KHRleHQ6IHN0cmluZyk6IHtcblx0XHRjaGFyU3R5bGVNYXA6IFJlY29yZDxudW1iZXIsIHN0cmluZ1tdPixcblx0XHR0ZXh0OiBzdHJpbmcsXG5cdH0ge1xuXG5cdFx0Y29uc3QgY2hhclN0eWxlTWFwID0ge31cblx0XHQvLyBnZXQgdGhlIHRleHQgd2l0aG91dCB0aGUgc3R5bGluZyBzeW50YXhcblx0XHRjb25zdCByZW5kZXJUZXh0ID0gdGV4dC5yZXBsYWNlKFRFWFRfU1RZTEVfUkUsIFwiJDJcIilcblx0XHRsZXQgaWR4T2Zmc2V0ID0gMFxuXG5cdFx0Ly8gcHV0IGVhY2ggc3R5bGVkIGNoYXIgaW5kZXggaW50byBhIG1hcCBmb3IgZWFzeSBhY2Nlc3Mgd2hlbiBpdGVyYXRpbmcgZWFjaCBjaGFyXG5cdFx0Zm9yIChjb25zdCBtYXRjaCBvZiB0ZXh0Lm1hdGNoQWxsKFRFWFRfU1RZTEVfUkUpKSB7XG5cdFx0XHRjb25zdCBvcmlnSWR4ID0gbWF0Y2guaW5kZXggLSBpZHhPZmZzZXRcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2guZ3JvdXBzLnRleHQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y2hhclN0eWxlTWFwW2kgKyBvcmlnSWR4XSA9IFttYXRjaC5ncm91cHMuc3R5bGVdXG5cdFx0XHR9XG5cdFx0XHQvLyBvbWl0IHRoZSBzdHlsZSBzeW50YXggaW4gZm9ybWF0IHN0cmluZyB3aGVuIGNhbGN1bGF0aW5nIGluZGV4XG5cdFx0XHRpZHhPZmZzZXQgKz0gbWF0Y2hbMF0ubGVuZ3RoIC0gbWF0Y2guZ3JvdXBzLnRleHQubGVuZ3RoXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoYXJTdHlsZU1hcDogY2hhclN0eWxlTWFwLFxuXHRcdFx0dGV4dDogcmVuZGVyVGV4dCxcblx0XHR9XG5cblx0fVxuXG5cdHR5cGUgRm9udEF0bGFzID0ge1xuXHRcdGZvbnQ6IEJpdG1hcEZvbnREYXRhLFxuXHRcdGN1cnNvcjogVmVjMixcblx0XHRvdXRsaW5lOiBPdXRsaW5lIHwgbnVsbCxcblx0fVxuXG5cdGNvbnN0IGZvbnRBdGxhc2VzOiBSZWNvcmQ8c3RyaW5nLCBGb250QXRsYXM+ID0ge31cblxuXHQvLyBUT0RPOiBjYWNoZSBmb3JtYXR0ZWQgdGV4dFxuXHQvLyBmb3JtYXQgdGV4dCBhbmQgcmV0dXJuIGEgbGlzdCBvZiBjaGFycyB3aXRoIHRoZWlyIGNhbGN1bGF0ZWQgcG9zaXRpb25cblx0ZnVuY3Rpb24gZm9ybWF0VGV4dChvcHQ6IERyYXdUZXh0T3B0KTogRm9ybWF0dGVkVGV4dCB7XG5cblx0XHRpZiAob3B0LnRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZm9ybWF0VGV4dCgpIHJlcXVpcmVzIHByb3BlcnR5IFxcXCJ0ZXh0XFxcIi5cIilcblx0XHR9XG5cblx0XHRsZXQgZm9udCA9IHJlc29sdmVGb250KG9wdC5mb250KVxuXG5cdFx0Ly8gaWYgaXQncyBzdGlsbCBsb2FkaW5nXG5cdFx0aWYgKG9wdC50ZXh0ID09PSBcIlwiIHx8IGZvbnQgaW5zdGFuY2VvZiBBc3NldCB8fCAhZm9udCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0d2lkdGg6IDAsXG5cdFx0XHRcdGhlaWdodDogMCxcblx0XHRcdFx0Y2hhcnM6IFtdLFxuXHRcdFx0XHRvcHQ6IG9wdCxcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCB7IGNoYXJTdHlsZU1hcCwgdGV4dCB9ID0gY29tcGlsZVN0eWxlZFRleHQob3B0LnRleHQgKyBcIlwiKVxuXHRcdGNvbnN0IGNoYXJzID0gcnVuZXModGV4dClcblxuXHRcdC8vIGlmIGl0J3Mgbm90IGJpdG1hcCBmb250LCB3ZSBkcmF3IGl0IHdpdGggMmQgY2FudmFzIG9yIHVzZSBjYWNoZWQgaW1hZ2Vcblx0XHRpZiAoZm9udCBpbnN0YW5jZW9mIEZvbnREYXRhIHx8IHR5cGVvZiBmb250ID09PSBcInN0cmluZ1wiKSB7XG5cblx0XHRcdGNvbnN0IGZvbnROYW1lID0gZm9udCBpbnN0YW5jZW9mIEZvbnREYXRhID8gZm9udC5mb250ZmFjZS5mYW1pbHkgOiBmb250XG5cdFx0XHRjb25zdCBvcHRzOiB7XG5cdFx0XHRcdG91dGxpbmU6IE91dGxpbmUgfCBudWxsLFxuXHRcdFx0XHRmaWx0ZXI6IFRleEZpbHRlcixcblx0XHRcdH0gPSBmb250IGluc3RhbmNlb2YgRm9udERhdGEgPyB7XG5cdFx0XHRcdG91dGxpbmU6IGZvbnQub3V0bGluZSxcblx0XHRcdFx0ZmlsdGVyOiBmb250LmZpbHRlcixcblx0XHRcdH0gOiB7XG5cdFx0XHRcdG91dGxpbmU6IG51bGwsXG5cdFx0XHRcdGZpbHRlcjogREVGX0ZPTlRfRklMVEVSLFxuXHRcdFx0fVxuXG5cdFx0XHQvLyBUT0RPOiBjdXN0b21pemFibGUgZm9udCB0ZXggZmlsdGVyXG5cdFx0XHRjb25zdCBhdGxhczogRm9udEF0bGFzID0gZm9udEF0bGFzZXNbZm9udE5hbWVdID8/IHtcblx0XHRcdFx0Zm9udDoge1xuXHRcdFx0XHRcdHRleDogbmV3IFRleHR1cmUoZ2dsLCBGT05UX0FUTEFTX1dJRFRILCBGT05UX0FUTEFTX0hFSUdIVCwge1xuXHRcdFx0XHRcdFx0ZmlsdGVyOiBvcHRzLmZpbHRlcixcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRtYXA6IHt9LFxuXHRcdFx0XHRcdHNpemU6IERFRl9URVhUX0NBQ0hFX1NJWkUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGN1cnNvcjogbmV3IFZlYzIoMCksXG5cdFx0XHRcdG91dGxpbmU6IG9wdHMub3V0bGluZSxcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFmb250QXRsYXNlc1tmb250TmFtZV0pIHtcblx0XHRcdFx0Zm9udEF0bGFzZXNbZm9udE5hbWVdID0gYXRsYXNcblx0XHRcdH1cblxuXHRcdFx0Zm9udCA9IGF0bGFzLmZvbnRcblxuXHRcdFx0Zm9yIChjb25zdCBjaCBvZiBjaGFycykge1xuXG5cdFx0XHRcdGlmICghYXRsYXMuZm9udC5tYXBbY2hdKSB7XG5cblx0XHRcdFx0XHQvLyBUT0RPOiB1c2UgYXNzZXRzLnBhY2tlciB0byBwYWNrIGZvbnQgdGV4dHVyZVxuXHRcdFx0XHRcdGNvbnN0IGMyZCA9IGZvbnRDYWNoZUMyZFxuXHRcdFx0XHRcdGMyZC5jbGVhclJlY3QoMCwgMCwgZm9udENhY2hlQ2FudmFzLndpZHRoLCBmb250Q2FjaGVDYW52YXMuaGVpZ2h0KVxuXHRcdFx0XHRcdGMyZC5mb250ID0gYCR7Zm9udC5zaXplfXB4ICR7Zm9udE5hbWV9YFxuXHRcdFx0XHRcdGMyZC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiXG5cdFx0XHRcdFx0YzJkLnRleHRBbGlnbiA9IFwibGVmdFwiXG5cdFx0XHRcdFx0YzJkLmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiXG5cdFx0XHRcdFx0Y29uc3QgbSA9IGMyZC5tZWFzdXJlVGV4dChjaClcblx0XHRcdFx0XHRsZXQgdyA9IE1hdGguY2VpbChtLndpZHRoKVxuXHRcdFx0XHRcdGxldCBoID0gZm9udC5zaXplXG5cdFx0XHRcdFx0aWYgKGF0bGFzLm91dGxpbmUpIHtcblx0XHRcdFx0XHRcdGMyZC5saW5lSm9pbiA9IFwicm91bmRcIlxuXHRcdFx0XHRcdFx0YzJkLmxpbmVXaWR0aCA9IGF0bGFzLm91dGxpbmUud2lkdGggKiAyXG5cdFx0XHRcdFx0XHRjMmQuc3Ryb2tlU3R5bGUgPSBhdGxhcy5vdXRsaW5lLmNvbG9yLnRvSGV4KClcblx0XHRcdFx0XHRcdGMyZC5zdHJva2VUZXh0KGNoLCBhdGxhcy5vdXRsaW5lLndpZHRoLCBhdGxhcy5vdXRsaW5lLndpZHRoKVxuXHRcdFx0XHRcdFx0dyArPSBhdGxhcy5vdXRsaW5lLndpZHRoICogMlxuXHRcdFx0XHRcdFx0aCArPSBhdGxhcy5vdXRsaW5lLndpZHRoICogM1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjMmQuZmlsbFRleHQoY2gsIGF0bGFzLm91dGxpbmU/LndpZHRoID8/IDAsIGF0bGFzLm91dGxpbmU/LndpZHRoID8/IDApXG5cblx0XHRcdFx0XHRjb25zdCBpbWcgPSBjMmQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHcsIGgpXG5cblx0XHRcdFx0XHQvLyBpZiB3ZSBhcmUgYWJvdXQgdG8gZXhjZWVkIHRoZSBYIGF4aXMgb2YgdGhlIHRleHR1cmUsIGdvIHRvIGFub3RoZXIgbGluZVxuXHRcdFx0XHRcdGlmIChhdGxhcy5jdXJzb3IueCArIHcgPiBGT05UX0FUTEFTX1dJRFRIKSB7XG5cdFx0XHRcdFx0XHRhdGxhcy5jdXJzb3IueCA9IDBcblx0XHRcdFx0XHRcdGF0bGFzLmN1cnNvci55ICs9IGhcblx0XHRcdFx0XHRcdGlmIChhdGxhcy5jdXJzb3IueSA+IEZPTlRfQVRMQVNfSEVJR0hUKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFRPRE86IGNyZWF0ZSBhbm90aGVyIGF0bGFzXG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkZvbnQgYXRsYXMgZXhjZWVkcyBjaGFyYWN0ZXIgbGltaXRcIilcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRmb250LnRleC51cGRhdGUoaW1nLCBhdGxhcy5jdXJzb3IueCwgYXRsYXMuY3Vyc29yLnkpXG5cdFx0XHRcdFx0Zm9udC5tYXBbY2hdID0gbmV3IFF1YWQoYXRsYXMuY3Vyc29yLngsIGF0bGFzLmN1cnNvci55LCB3LCBoKVxuXHRcdFx0XHRcdGF0bGFzLmN1cnNvci54ICs9IHdcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGNvbnN0IHNpemUgPSBvcHQuc2l6ZSB8fCBmb250LnNpemVcblx0XHRjb25zdCBzY2FsZSA9IHZlYzIob3B0LnNjYWxlID8/IDEpLnNjYWxlKHNpemUgLyBmb250LnNpemUpXG5cdFx0Y29uc3QgbGluZVNwYWNpbmcgPSBvcHQubGluZVNwYWNpbmcgPz8gMFxuXHRcdGNvbnN0IGxldHRlclNwYWNpbmcgPSBvcHQubGV0dGVyU3BhY2luZyA/PyAwXG5cdFx0bGV0IGN1clggPSAwXG5cdFx0bGV0IHR3ID0gMFxuXHRcdGxldCB0aCA9IDBcblx0XHRjb25zdCBsaW5lczogQXJyYXk8e1xuXHRcdFx0d2lkdGg6IG51bWJlcixcblx0XHRcdGNoYXJzOiBGb3JtYXR0ZWRDaGFyW10sXG5cdFx0fT4gPSBbXVxuXHRcdGxldCBjdXJMaW5lOiBGb3JtYXR0ZWRDaGFyW10gPSBbXVxuXHRcdGxldCBjdXJzb3IgPSAwXG5cdFx0bGV0IGxhc3RTcGFjZSA9IG51bGxcblx0XHRsZXQgbGFzdFNwYWNlV2lkdGggPSBudWxsXG5cblx0XHQvLyBUT0RPOiB3b3JkIGJyZWFrXG5cdFx0d2hpbGUgKGN1cnNvciA8IGNoYXJzLmxlbmd0aCkge1xuXG5cdFx0XHRsZXQgY2ggPSBjaGFyc1tjdXJzb3JdXG5cblx0XHRcdC8vIGFsd2F5cyBuZXcgbGluZSBvbiAnXFxuJ1xuXHRcdFx0aWYgKGNoID09PSBcIlxcblwiKSB7XG5cblx0XHRcdFx0dGggKz0gc2l6ZSArIGxpbmVTcGFjaW5nXG5cblx0XHRcdFx0bGluZXMucHVzaCh7XG5cdFx0XHRcdFx0d2lkdGg6IGN1clggLSBsZXR0ZXJTcGFjaW5nLFxuXHRcdFx0XHRcdGNoYXJzOiBjdXJMaW5lLFxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdGxhc3RTcGFjZSA9IG51bGxcblx0XHRcdFx0bGFzdFNwYWNlV2lkdGggPSBudWxsXG5cdFx0XHRcdGN1clggPSAwXG5cdFx0XHRcdGN1ckxpbmUgPSBbXVxuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGxldCBxID0gZm9udC5tYXBbY2hdXG5cblx0XHRcdFx0Ly8gVE9ETzogbGVhdmUgc3BhY2UgaWYgY2hhcmFjdGVyIG5vdCBmb3VuZD9cblx0XHRcdFx0aWYgKHEpIHtcblxuXHRcdFx0XHRcdGxldCBndyA9IHEudyAqIHNjYWxlLnhcblxuXHRcdFx0XHRcdGlmIChvcHQud2lkdGggJiYgY3VyWCArIGd3ID4gb3B0LndpZHRoKSB7XG5cdFx0XHRcdFx0XHQvLyBuZXcgbGluZSBvbiBsYXN0IHdvcmQgaWYgd2lkdGggZXhjZWVkc1xuXHRcdFx0XHRcdFx0dGggKz0gc2l6ZSArIGxpbmVTcGFjaW5nXG5cdFx0XHRcdFx0XHRpZiAobGFzdFNwYWNlICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yIC09IGN1ckxpbmUubGVuZ3RoIC0gbGFzdFNwYWNlXG5cdFx0XHRcdFx0XHRcdGNoID0gY2hhcnNbY3Vyc29yXVxuXHRcdFx0XHRcdFx0XHRxID0gZm9udC5tYXBbY2hdXG5cdFx0XHRcdFx0XHRcdGd3ID0gcS53ICogc2NhbGUueFxuXHRcdFx0XHRcdFx0XHQvLyBvbWl0IHRyYWlsaW5nIHNwYWNlXG5cdFx0XHRcdFx0XHRcdGN1ckxpbmUgPSBjdXJMaW5lLnNsaWNlKDAsIGxhc3RTcGFjZSAtIDEpXG5cdFx0XHRcdFx0XHRcdGN1clggPSBsYXN0U3BhY2VXaWR0aFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGFzdFNwYWNlID0gbnVsbFxuXHRcdFx0XHRcdFx0bGFzdFNwYWNlV2lkdGggPSBudWxsXG5cdFx0XHRcdFx0XHRsaW5lcy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IGN1clggLSBsZXR0ZXJTcGFjaW5nLFxuXHRcdFx0XHRcdFx0XHRjaGFyczogY3VyTGluZSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRjdXJYID0gMFxuXHRcdFx0XHRcdFx0Y3VyTGluZSA9IFtdXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gcHVzaCBjaGFyXG5cdFx0XHRcdFx0Y3VyTGluZS5wdXNoKHtcblx0XHRcdFx0XHRcdHRleDogZm9udC50ZXgsXG5cdFx0XHRcdFx0XHR3aWR0aDogcS53LFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBxLmgsXG5cdFx0XHRcdFx0XHQvLyB3aXRob3V0IHNvbWUgcGFkZGluZyB0aGVyZSdsbCBiZSB2aXN1YWwgYXJ0aWZhY3RzIG9uIGVkZ2VzXG5cdFx0XHRcdFx0XHRxdWFkOiBuZXcgUXVhZChcblx0XHRcdFx0XHRcdFx0cS54IC8gZm9udC50ZXgud2lkdGgsXG5cdFx0XHRcdFx0XHRcdHEueSAvIGZvbnQudGV4LmhlaWdodCxcblx0XHRcdFx0XHRcdFx0cS53IC8gZm9udC50ZXgud2lkdGgsXG5cdFx0XHRcdFx0XHRcdHEuaCAvIGZvbnQudGV4LmhlaWdodCxcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRjaDogY2gsXG5cdFx0XHRcdFx0XHRwb3M6IG5ldyBWZWMyKGN1clgsIHRoKSxcblx0XHRcdFx0XHRcdG9wYWNpdHk6IG9wdC5vcGFjaXR5ID8/IDEsXG5cdFx0XHRcdFx0XHRjb2xvcjogb3B0LmNvbG9yID8/IENvbG9yLldISVRFLFxuXHRcdFx0XHRcdFx0c2NhbGU6IHZlYzIoc2NhbGUpLFxuXHRcdFx0XHRcdFx0YW5nbGU6IDAsXG5cdFx0XHRcdFx0fSlcblxuXHRcdFx0XHRcdGlmIChjaCA9PT0gXCIgXCIpIHtcblx0XHRcdFx0XHRcdGxhc3RTcGFjZSA9IGN1ckxpbmUubGVuZ3RoXG5cdFx0XHRcdFx0XHRsYXN0U3BhY2VXaWR0aCA9IGN1clhcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjdXJYICs9IGd3XG5cdFx0XHRcdFx0dHcgPSBNYXRoLm1heCh0dywgY3VyWClcblx0XHRcdFx0XHRjdXJYICs9IGxldHRlclNwYWNpbmdcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0Y3Vyc29yKytcblxuXHRcdH1cblxuXHRcdGxpbmVzLnB1c2goe1xuXHRcdFx0d2lkdGg6IGN1clggLSBsZXR0ZXJTcGFjaW5nLFxuXHRcdFx0Y2hhcnM6IGN1ckxpbmUsXG5cdFx0fSlcblxuXHRcdHRoICs9IHNpemVcblxuXHRcdGlmIChvcHQud2lkdGgpIHtcblx0XHRcdHR3ID0gb3B0LndpZHRoXG5cdFx0fVxuXG5cdFx0Y29uc3QgZmNoYXJzOiBGb3JtYXR0ZWRDaGFyW10gPSBbXVxuXG5cdFx0Zm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG5cblx0XHRcdGNvbnN0IG94ID0gKHR3IC0gbGluZS53aWR0aCkgKiBhbGlnblB0KG9wdC5hbGlnbiA/PyBcImxlZnRcIilcblxuXHRcdFx0Zm9yIChjb25zdCBmY2hhciBvZiBsaW5lLmNoYXJzKSB7XG5cblx0XHRcdFx0Y29uc3QgcSA9IGZvbnQubWFwW2ZjaGFyLmNoXVxuXHRcdFx0XHRjb25zdCBpZHggPSBmY2hhcnMubGVuZ3RoXG5cblx0XHRcdFx0ZmNoYXIucG9zID0gZmNoYXIucG9zLmFkZChveCwgMCkuYWRkKFxuXHRcdFx0XHRcdHEudyAqIHNjYWxlLnggKiAwLjUsXG5cdFx0XHRcdFx0cS5oICogc2NhbGUueSAqIDAuNSxcblx0XHRcdFx0KVxuXG5cdFx0XHRcdGlmIChvcHQudHJhbnNmb3JtKSB7XG5cdFx0XHRcdFx0Y29uc3QgdHIgPSB0eXBlb2Ygb3B0LnRyYW5zZm9ybSA9PT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0XHQ/IG9wdC50cmFuc2Zvcm0oaWR4LCBmY2hhci5jaClcblx0XHRcdFx0XHRcdDogb3B0LnRyYW5zZm9ybVxuXHRcdFx0XHRcdGlmICh0cikge1xuXHRcdFx0XHRcdFx0YXBwbHlDaGFyVHJhbnNmb3JtKGZjaGFyLCB0cilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY2hhclN0eWxlTWFwW2lkeF0pIHtcblx0XHRcdFx0XHRjb25zdCBzdHlsZXMgPSBjaGFyU3R5bGVNYXBbaWR4XVxuXHRcdFx0XHRcdGZvciAoY29uc3QgbmFtZSBvZiBzdHlsZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHN0eWxlID0gb3B0LnN0eWxlc1tuYW1lXVxuXHRcdFx0XHRcdFx0Y29uc3QgdHIgPSB0eXBlb2Ygc3R5bGUgPT09IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdFx0XHQ/IHN0eWxlKGlkeCwgZmNoYXIuY2gpXG5cdFx0XHRcdFx0XHRcdDogc3R5bGVcblx0XHRcdFx0XHRcdGlmICh0cikge1xuXHRcdFx0XHRcdFx0XHRhcHBseUNoYXJUcmFuc2Zvcm0oZmNoYXIsIHRyKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZjaGFycy5wdXNoKGZjaGFyKVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0d2lkdGg6IHR3LFxuXHRcdFx0aGVpZ2h0OiB0aCxcblx0XHRcdGNoYXJzOiBmY2hhcnMsXG5cdFx0XHRvcHQ6IG9wdCxcblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdUZXh0KG9wdDogRHJhd1RleHRPcHQpIHtcblx0XHRkcmF3Rm9ybWF0dGVkVGV4dChmb3JtYXRUZXh0KG9wdCkpXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3Rm9ybWF0dGVkVGV4dChmdGV4dDogRm9ybWF0dGVkVGV4dCkge1xuXHRcdHB1c2hUcmFuc2Zvcm0oKVxuXHRcdHB1c2hUcmFuc2xhdGUoZnRleHQub3B0LnBvcylcblx0XHRwdXNoUm90YXRlKGZ0ZXh0Lm9wdC5hbmdsZSlcblx0XHRwdXNoVHJhbnNsYXRlKGFuY2hvclB0KGZ0ZXh0Lm9wdC5hbmNob3IgPz8gXCJ0b3BsZWZ0XCIpLmFkZCgxLCAxKS5zY2FsZShmdGV4dC53aWR0aCwgZnRleHQuaGVpZ2h0KS5zY2FsZSgtMC41KSlcblx0XHRmdGV4dC5jaGFycy5mb3JFYWNoKChjaCkgPT4ge1xuXHRcdFx0ZHJhd1VWUXVhZCh7XG5cdFx0XHRcdHRleDogY2gudGV4LFxuXHRcdFx0XHR3aWR0aDogY2gud2lkdGgsXG5cdFx0XHRcdGhlaWdodDogY2guaGVpZ2h0LFxuXHRcdFx0XHRwb3M6IGNoLnBvcyxcblx0XHRcdFx0c2NhbGU6IGNoLnNjYWxlLFxuXHRcdFx0XHRhbmdsZTogY2guYW5nbGUsXG5cdFx0XHRcdGNvbG9yOiBjaC5jb2xvcixcblx0XHRcdFx0b3BhY2l0eTogY2gub3BhY2l0eSxcblx0XHRcdFx0cXVhZDogY2gucXVhZCxcblx0XHRcdFx0YW5jaG9yOiBcImNlbnRlclwiLFxuXHRcdFx0XHR1bmlmb3JtOiBmdGV4dC5vcHQudW5pZm9ybSxcblx0XHRcdFx0c2hhZGVyOiBmdGV4dC5vcHQuc2hhZGVyLFxuXHRcdFx0XHRmaXhlZDogZnRleHQub3B0LmZpeGVkLFxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdHBvcFRyYW5zZm9ybSgpXG5cdH1cblxuXHQvLyBnZXQgZ2FtZSB3aWR0aFxuXHRmdW5jdGlvbiB3aWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiBnZngud2lkdGhcblx0fVxuXG5cdC8vIGdldCBnYW1lIGhlaWdodFxuXHRmdW5jdGlvbiBoZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZ2Z4LmhlaWdodFxuXHR9XG5cblx0Ly8gdHJhbnNmb3JtIGEgcG9pbnQgZnJvbSB3aW5kb3cgc3BhY2UgdG8gY29udGVudCBzcGFjZVxuXHRmdW5jdGlvbiB3aW5kb3dUb0NvbnRlbnQocHQ6IFZlYzIpIHtcblx0XHRyZXR1cm4gbmV3IFZlYzIoXG5cdFx0XHQocHQueCAtIGdmeC52aWV3cG9ydC54KSAqIHdpZHRoKCkgLyBnZngudmlld3BvcnQud2lkdGgsXG5cdFx0XHQocHQueSAtIGdmeC52aWV3cG9ydC55KSAqIGhlaWdodCgpIC8gZ2Z4LnZpZXdwb3J0LmhlaWdodCxcblx0XHQpXG5cdH1cblxuXHQvLyB0cmFuc2Zvcm0gYSBwb2ludCBmcm9tIGNvbnRlbnQgc3BhY2UgdG8gdmlldyBzcGFjZVxuXHRmdW5jdGlvbiBjb250ZW50VG9WaWV3KHB0OiBWZWMyKSB7XG5cdFx0cmV0dXJuIG5ldyBWZWMyKFxuXHRcdFx0cHQueCAqIGdmeC52aWV3cG9ydC53aWR0aCAvIGdmeC53aWR0aCxcblx0XHRcdHB0LnkgKiBnZngudmlld3BvcnQuaGVpZ2h0IC8gZ2Z4LmhlaWdodCxcblx0XHQpXG5cdH1cblxuXHRmdW5jdGlvbiBtb3VzZVBvcygpIHtcblx0XHRyZXR1cm4gd2luZG93VG9Db250ZW50KGFwcC5tb3VzZVBvcygpKVxuXHR9XG5cblx0bGV0IGRlYnVnUGF1c2VkID0gZmFsc2VcblxuXHRjb25zdCBkZWJ1ZzogRGVidWcgPSB7XG5cdFx0aW5zcGVjdDogZmFsc2UsXG5cdFx0dGltZVNjYWxlOiAxLFxuXHRcdHNob3dMb2c6IHRydWUsXG5cdFx0ZnBzOiAoKSA9PiBhcHAuZnBzKCksXG5cdFx0bnVtRnJhbWVzOiAoKSA9PiBhcHAubnVtRnJhbWVzKCksXG5cdFx0c3RlcEZyYW1lOiB1cGRhdGVGcmFtZSxcblx0XHRkcmF3Q2FsbHM6ICgpID0+IGdmeC5sYXN0RHJhd0NhbGxzLFxuXHRcdGNsZWFyTG9nOiAoKSA9PiBnYW1lLmxvZ3MgPSBbXSxcblx0XHRsb2c6IChtc2cpID0+IHtcblx0XHRcdGNvbnN0IG1heCA9IGdvcHQubG9nTWF4ID8/IExPR19NQVhcblx0XHRcdGdhbWUubG9ncy51bnNoaWZ0KHtcblx0XHRcdFx0bXNnOiBtc2csXG5cdFx0XHRcdHRpbWU6IGFwcC50aW1lKCksXG5cdFx0XHR9KVxuXHRcdFx0aWYgKGdhbWUubG9ncy5sZW5ndGggPiBtYXgpIHtcblx0XHRcdFx0Z2FtZS5sb2dzID0gZ2FtZS5sb2dzLnNsaWNlKDAsIG1heClcblx0XHRcdH1cblx0XHR9LFxuXHRcdGVycm9yOiAobXNnKSA9PiBkZWJ1Zy5sb2cobmV3IEVycm9yKG1zZy50b1N0cmluZyA/IG1zZy50b1N0cmluZygpIDogbXNnIGFzIHN0cmluZykpLFxuXHRcdGN1clJlY29yZGluZzogbnVsbCxcblx0XHRudW1PYmplY3RzOiAoKSA9PiBnZXQoXCIqXCIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pLmxlbmd0aCxcblx0XHRnZXQgcGF1c2VkKCkge1xuXHRcdFx0cmV0dXJuIGRlYnVnUGF1c2VkXG5cdFx0fSxcblx0XHRzZXQgcGF1c2VkKHYpIHtcblx0XHRcdGRlYnVnUGF1c2VkID0gdlxuXHRcdFx0aWYgKHYpIHtcblx0XHRcdFx0YXVkaW8uY3R4LnN1c3BlbmQoKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXVkaW8uY3R4LnJlc3VtZSgpXG5cdFx0XHR9XG5cdFx0fSxcblx0fVxuXG5cdGZ1bmN0aW9uIGR0KCkge1xuXHRcdHJldHVybiBhcHAuZHQoKSAqIGRlYnVnLnRpbWVTY2FsZVxuXHR9XG5cblx0ZnVuY3Rpb24gY2FtUG9zKC4uLnBvczogVmVjMkFyZ3MpOiBWZWMyIHtcblx0XHRpZiAocG9zLmxlbmd0aCA+IDApIHtcblx0XHRcdGdhbWUuY2FtLnBvcyA9IHZlYzIoLi4ucG9zKVxuXHRcdH1cblx0XHRyZXR1cm4gZ2FtZS5jYW0ucG9zID8gZ2FtZS5jYW0ucG9zLmNsb25lKCkgOiBjZW50ZXIoKVxuXHR9XG5cblx0ZnVuY3Rpb24gY2FtU2NhbGUoLi4uc2NhbGU6IFZlYzJBcmdzKTogVmVjMiB7XG5cdFx0aWYgKHNjYWxlLmxlbmd0aCA+IDApIHtcblx0XHRcdGdhbWUuY2FtLnNjYWxlID0gdmVjMiguLi5zY2FsZSlcblx0XHR9XG5cdFx0cmV0dXJuIGdhbWUuY2FtLnNjYWxlLmNsb25lKClcblx0fVxuXG5cdGZ1bmN0aW9uIGNhbVJvdChhbmdsZTogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRpZiAoYW5nbGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Z2FtZS5jYW0uYW5nbGUgPSBhbmdsZVxuXHRcdH1cblx0XHRyZXR1cm4gZ2FtZS5jYW0uYW5nbGVcblx0fVxuXG5cdGZ1bmN0aW9uIHNoYWtlKGludGVuc2l0eTogbnVtYmVyID0gMTIpIHtcblx0XHRnYW1lLmNhbS5zaGFrZSArPSBpbnRlbnNpdHlcblx0fVxuXG5cdGZ1bmN0aW9uIHRvU2NyZWVuKHA6IFZlYzIpOiBWZWMyIHtcblx0XHRyZXR1cm4gZ2FtZS5jYW0udHJhbnNmb3JtLm11bHRWZWMyKHApXG5cdH1cblxuXHRmdW5jdGlvbiB0b1dvcmxkKHA6IFZlYzIpOiBWZWMyIHtcblx0XHRyZXR1cm4gZ2FtZS5jYW0udHJhbnNmb3JtLmludmVydCgpLm11bHRWZWMyKHApXG5cdH1cblxuXHRmdW5jdGlvbiBjYWxjVHJhbnNmb3JtKG9iajogR2FtZU9iaik6IE1hdDQge1xuXHRcdGNvbnN0IHRyID0gbmV3IE1hdDQoKVxuXHRcdGlmIChvYmoucG9zKSB0ci50cmFuc2xhdGUob2JqLnBvcylcblx0XHRpZiAob2JqLnNjYWxlKSB0ci5zY2FsZShvYmouc2NhbGUpXG5cdFx0aWYgKG9iai5hbmdsZSkgdHIucm90YXRlKG9iai5hbmdsZSlcblx0XHRyZXR1cm4gb2JqLnBhcmVudCA/IHRyLm11bHQob2JqLnBhcmVudC50cmFuc2Zvcm0pIDogdHJcblx0fVxuXG5cdGZ1bmN0aW9uIG1ha2U8VD4oY29tcHM6IENvbXBMaXN0PFQ+ID0gW10pOiBHYW1lT2JqPFQ+IHtcblxuXHRcdGNvbnN0IGNvbXBTdGF0ZXMgPSBuZXcgTWFwKClcblx0XHRjb25zdCBjbGVhbnVwcyA9IHt9XG5cdFx0Y29uc3QgZXZlbnRzID0gbmV3IEV2ZW50SGFuZGxlcigpXG5cdFx0Y29uc3QgaW5wdXRFdmVudHM6IEV2ZW50Q29udHJvbGxlcltdID0gW11cblx0XHRsZXQgb25DdXJDb21wQ2xlYW51cCA9IG51bGxcblx0XHRsZXQgcGF1c2VkID0gZmFsc2VcblxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRjb25zdCBvYmo6IEdhbWVPYmogPSB7XG5cblx0XHRcdGlkOiB1aWQoKSxcblx0XHRcdC8vIFRPRE86IGEgbmljZSB3YXkgdG8gaGlkZSAvIHBhdXNlIHdoZW4gYWRkKCktaW5nXG5cdFx0XHRoaWRkZW46IGZhbHNlLFxuXHRcdFx0dHJhbnNmb3JtOiBuZXcgTWF0NCgpLFxuXHRcdFx0Y2hpbGRyZW46IFtdLFxuXHRcdFx0cGFyZW50OiBudWxsLFxuXG5cdFx0XHRzZXQgcGF1c2VkKHApIHtcblx0XHRcdFx0aWYgKHAgPT09IHBhdXNlZCkgcmV0dXJuXG5cdFx0XHRcdHBhdXNlZCA9IHBcblx0XHRcdFx0Zm9yIChjb25zdCBlIG9mIGlucHV0RXZlbnRzKSB7XG5cdFx0XHRcdFx0ZS5wYXVzZWQgPSBwXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGdldCBwYXVzZWQoKSB7XG5cdFx0XHRcdHJldHVybiBwYXVzZWRcblx0XHRcdH0sXG5cblx0XHRcdGFkZDxUMj4oYTogQ29tcExpc3Q8VDI+IHwgR2FtZU9iajxUMj4gPSBbXSk6IEdhbWVPYmo8VDI+IHtcblx0XHRcdFx0Y29uc3Qgb2JqID0gQXJyYXkuaXNBcnJheShhKSA/IG1ha2UoYSkgOiBhXG5cdFx0XHRcdGlmIChvYmoucGFyZW50KSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFkZCBhIGdhbWUgb2JqIHRoYXQgYWxyZWFkeSBoYXMgYSBwYXJlbnQuXCIpXG5cdFx0XHRcdH1cblx0XHRcdFx0b2JqLnBhcmVudCA9IHRoaXNcblx0XHRcdFx0b2JqLnRyYW5zZm9ybSA9IGNhbGNUcmFuc2Zvcm0ob2JqKVxuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLnB1c2gob2JqKVxuXHRcdFx0XHQvLyBUT0RPOiB0cmlnZ2VyIGFkZCBmb3IgY2hpbGRyZW5cblx0XHRcdFx0b2JqLnRyaWdnZXIoXCJhZGRcIiwgb2JqKVxuXHRcdFx0XHRnYW1lLmV2ZW50cy50cmlnZ2VyKFwiYWRkXCIsIG9iailcblx0XHRcdFx0cmV0dXJuIG9ialxuXHRcdFx0fSxcblxuXHRcdFx0cmVhZGQob2JqOiBHYW1lT2JqKTogR2FtZU9iaiB7XG5cdFx0XHRcdGNvbnN0IGlkeCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihvYmopXG5cdFx0XHRcdGlmIChpZHggIT09IC0xKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKVxuXHRcdFx0XHRcdHRoaXMuY2hpbGRyZW4ucHVzaChvYmopXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9ialxuXHRcdFx0fSxcblxuXHRcdFx0cmVtb3ZlKG9iajogR2FtZU9iaik6IHZvaWQge1xuXHRcdFx0XHRjb25zdCBpZHggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2Yob2JqKVxuXHRcdFx0XHRpZiAoaWR4ICE9PSAtMSkge1xuXHRcdFx0XHRcdG9iai5wYXJlbnQgPSBudWxsXG5cdFx0XHRcdFx0dGhpcy5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKVxuXHRcdFx0XHRcdGNvbnN0IHRyaWdnZXIgPSAobykgPT4ge1xuXHRcdFx0XHRcdFx0by50cmlnZ2VyKFwiZGVzdHJveVwiKVxuXHRcdFx0XHRcdFx0Z2FtZS5ldmVudHMudHJpZ2dlcihcImRlc3Ryb3lcIiwgbylcblx0XHRcdFx0XHRcdG8uY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHRyaWdnZXIoY2hpbGQpKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0cmlnZ2VyKG9iailcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Ly8gVE9ETzogcmVjdXJzaXZlXG5cdFx0XHRyZW1vdmVBbGwodGFnPzogVGFnKSB7XG5cdFx0XHRcdGlmICh0YWcpIHtcblx0XHRcdFx0XHR0aGlzLmdldCh0YWcpLmZvckVhY2goKG9iaikgPT4gdGhpcy5yZW1vdmUob2JqKSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIFsuLi50aGlzLmNoaWxkcmVuXSkgdGhpcy5yZW1vdmUoY2hpbGQpXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdHVwZGF0ZSgpIHtcblx0XHRcdFx0aWYgKHRoaXMucGF1c2VkKSByZXR1cm5cblx0XHRcdFx0dGhpcy5jaGlsZHJlblxuXHRcdFx0XHRcdC5zb3J0KChvMSwgbzIpID0+IChvMS56ID8/IDApIC0gKG8yLnogPz8gMCkpXG5cdFx0XHRcdFx0LmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51cGRhdGUoKSlcblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwidXBkYXRlXCIpXG5cdFx0XHR9LFxuXG5cdFx0XHRkcmF3KHRoaXM6IEdhbWVPYmo8UG9zQ29tcCB8IFNjYWxlQ29tcCB8IFJvdGF0ZUNvbXAgfCBGaXhlZENvbXAgfCBNYXNrQ29tcD4pIHtcblx0XHRcdFx0aWYgKHRoaXMuaGlkZGVuKSByZXR1cm5cblx0XHRcdFx0aWYgKHRoaXMuY2FudmFzKSB0aGlzLmNhbnZhcy5iaW5kKClcblx0XHRcdFx0Y29uc3QgZiA9IGdmeC5maXhlZFxuXHRcdFx0XHRpZiAodGhpcy5maXhlZCkgZ2Z4LmZpeGVkID0gdHJ1ZVxuXHRcdFx0XHRwdXNoVHJhbnNmb3JtKClcblx0XHRcdFx0cHVzaFRyYW5zbGF0ZSh0aGlzLnBvcylcblx0XHRcdFx0cHVzaFNjYWxlKHRoaXMuc2NhbGUpXG5cdFx0XHRcdHB1c2hSb3RhdGUodGhpcy5hbmdsZSlcblx0XHRcdFx0Y29uc3QgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLnNvcnQoKG8xLCBvMikgPT4gKG8xLnogPz8gMCkgLSAobzIueiA/PyAwKSlcblx0XHRcdFx0Ly8gVE9ETzogYXV0b21hdGljYWxseSBkb24ndCBkcmF3IGlmIG9mZnNjcmVlblxuXHRcdFx0XHRpZiAodGhpcy5tYXNrKSB7XG5cdFx0XHRcdFx0Y29uc3QgbWFza0Z1bmMgPSB7XG5cdFx0XHRcdFx0XHRpbnRlcnNlY3Q6IGRyYXdNYXNrZWQsXG5cdFx0XHRcdFx0XHRzdWJ0cmFjdDogZHJhd1N1YnRyYWN0ZWQsXG5cdFx0XHRcdFx0fVt0aGlzLm1hc2tdXG5cdFx0XHRcdFx0aWYgKCFtYXNrRnVuYykge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1hc2sgZnVuYzogXCIke3RoaXMubWFza31cImApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1hc2tGdW5jKCgpID0+IHtcblx0XHRcdFx0XHRcdGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5kcmF3KCkpXG5cdFx0XHRcdFx0fSwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiZHJhd1wiKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiZHJhd1wiKVxuXHRcdFx0XHRcdGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5kcmF3KCkpXG5cdFx0XHRcdH1cblx0XHRcdFx0cG9wVHJhbnNmb3JtKClcblx0XHRcdFx0Z2Z4LmZpeGVkID0gZlxuXHRcdFx0XHRpZiAodGhpcy5jYW52YXMpIHRoaXMuY2FudmFzLnVuYmluZCgpXG5cdFx0XHR9LFxuXG5cdFx0XHRkcmF3SW5zcGVjdCh0aGlzOiBHYW1lT2JqPFBvc0NvbXAgfCBTY2FsZUNvbXAgfCBSb3RhdGVDb21wPikge1xuXHRcdFx0XHRpZiAodGhpcy5oaWRkZW4pIHJldHVyblxuXHRcdFx0XHRwdXNoVHJhbnNmb3JtKClcblx0XHRcdFx0cHVzaFRyYW5zbGF0ZSh0aGlzLnBvcylcblx0XHRcdFx0cHVzaFNjYWxlKHRoaXMuc2NhbGUpXG5cdFx0XHRcdHB1c2hSb3RhdGUodGhpcy5hbmdsZSlcblx0XHRcdFx0dGhpcy5jaGlsZHJlblxuXHRcdFx0XHRcdC5zb3J0KChvMSwgbzIpID0+IChvMS56ID8/IDApIC0gKG8yLnogPz8gMCkpXG5cdFx0XHRcdFx0LmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5kcmF3SW5zcGVjdCgpKVxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJkcmF3SW5zcGVjdFwiKVxuXHRcdFx0XHRwb3BUcmFuc2Zvcm0oKVxuXHRcdFx0fSxcblxuXHRcdFx0Ly8gdXNlIGEgY29tcCwgb3IgdGFnXG5cdFx0XHR1c2UoY29tcDogQ29tcCB8IFRhZykge1xuXG5cdFx0XHRcdGlmICghY29tcCkge1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gdGFnXG5cdFx0XHRcdGlmICh0eXBlb2YgY29tcCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnVzZSh7XG5cdFx0XHRcdFx0XHRpZDogY29tcCxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IGdjID0gW11cblxuXHRcdFx0XHQvLyBjbGVhciBpZiBvdmVyd3JpdGVcblx0XHRcdFx0aWYgKGNvbXAuaWQpIHtcblx0XHRcdFx0XHR0aGlzLnVudXNlKGNvbXAuaWQpXG5cdFx0XHRcdFx0Y2xlYW51cHNbY29tcC5pZF0gPSBbXVxuXHRcdFx0XHRcdGdjID0gY2xlYW51cHNbY29tcC5pZF1cblx0XHRcdFx0XHRjb21wU3RhdGVzLnNldChjb21wLmlkLCBjb21wKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChjb25zdCBrIGluIGNvbXApIHtcblxuXHRcdFx0XHRcdGlmIChDT01QX0RFU0MuaGFzKGspKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IHByb3AgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbXAsIGspXG5cblx0XHRcdFx0XHRpZiAodHlwZW9mIHByb3AudmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0Y29tcFtrXSA9IGNvbXBba10uYmluZCh0aGlzKVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChwcm9wLnNldCkge1xuXHRcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbXAsIGssIHtcblx0XHRcdFx0XHRcdFx0c2V0OiBwcm9wLnNldC5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocHJvcC5nZXQpIHtcblx0XHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb21wLCBrLCB7XG5cdFx0XHRcdFx0XHRcdGdldDogcHJvcC5nZXQuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKENPTVBfRVZFTlRTLmhhcyhrKSkge1xuXHRcdFx0XHRcdFx0Ly8gYXV0b21hdGljYWxseSBjbGVhbiB1cCBldmVudHMgY3JlYXRlZCBieSBjb21wb25lbnRzIGluIGFkZCgpIHN0YWdlXG5cdFx0XHRcdFx0XHRjb25zdCBmdW5jID0gayA9PT0gXCJhZGRcIiA/ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0b25DdXJDb21wQ2xlYW51cCA9IChjKSA9PiBnYy5wdXNoKGMpXG5cdFx0XHRcdFx0XHRcdGNvbXBba10oKVxuXHRcdFx0XHRcdFx0XHRvbkN1ckNvbXBDbGVhbnVwID0gbnVsbFxuXHRcdFx0XHRcdFx0fSA6IGNvbXBba11cblx0XHRcdFx0XHRcdGdjLnB1c2godGhpcy5vbihrLCBmdW5jKS5jYW5jZWwpXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzW2tdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0Ly8gYXNzaWduIGNvbXAgZmllbGRzIHRvIGdhbWUgb2JqXG5cdFx0XHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrLCB7XG5cdFx0XHRcdFx0XHRcdFx0Z2V0OiAoKSA9PiBjb21wW2tdLFxuXHRcdFx0XHRcdFx0XHRcdHNldDogKHZhbCkgPT4gY29tcFtrXSA9IHZhbCxcblx0XHRcdFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0Z2MucHVzaCgoKSA9PiBkZWxldGUgdGhpc1trXSlcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgRHVwbGljYXRlIGNvbXBvbmVudCBwcm9wZXJ0eTogXCIke2t9XCJgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gY2hlY2sgZm9yIGNvbXBvbmVudCBkZXBlbmRlbmNpZXNcblx0XHRcdFx0Y29uc3QgY2hlY2tEZXBzID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmICghY29tcC5yZXF1aXJlKSByZXR1cm5cblx0XHRcdFx0XHRmb3IgKGNvbnN0IGRlcCBvZiBjb21wLnJlcXVpcmUpIHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5jKGRlcCkpIHtcblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgXCIke2NvbXAuaWR9XCIgcmVxdWlyZXMgY29tcG9uZW50IFwiJHtkZXB9XCJgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjb21wLmRlc3Ryb3kpIHtcblx0XHRcdFx0XHRnYy5wdXNoKGNvbXAuZGVzdHJveS5iaW5kKHRoaXMpKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gbWFudWFsbHkgdHJpZ2dlciBhZGQgZXZlbnQgaWYgb2JqZWN0IGFscmVhZHkgZXhpc3Rcblx0XHRcdFx0aWYgKHRoaXMuZXhpc3RzKCkpIHtcblx0XHRcdFx0XHRjaGVja0RlcHMoKVxuXHRcdFx0XHRcdGlmIChjb21wLmFkZCkge1xuXHRcdFx0XHRcdFx0b25DdXJDb21wQ2xlYW51cCA9IChjKSA9PiBnYy5wdXNoKGMpXG5cdFx0XHRcdFx0XHRjb21wLmFkZC5jYWxsKHRoaXMpXG5cdFx0XHRcdFx0XHRvbkN1ckNvbXBDbGVhbnVwID0gbnVsbFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoY29tcC5yZXF1aXJlKSB7XG5cdFx0XHRcdFx0XHRnYy5wdXNoKHRoaXMub24oXCJhZGRcIiwgY2hlY2tEZXBzKS5jYW5jZWwpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH0sXG5cblx0XHRcdHVudXNlKGlkOiBUYWcpIHtcblx0XHRcdFx0aWYgKGNsZWFudXBzW2lkXSkge1xuXHRcdFx0XHRcdGNsZWFudXBzW2lkXS5mb3JFYWNoKChlKSA9PiBlKCkpXG5cdFx0XHRcdFx0ZGVsZXRlIGNsZWFudXBzW2lkXVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjb21wU3RhdGVzLmhhcyhpZCkpIHtcblx0XHRcdFx0XHRjb21wU3RhdGVzLmRlbGV0ZShpZClcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0YyhpZDogVGFnKTogQ29tcCB7XG5cdFx0XHRcdHJldHVybiBjb21wU3RhdGVzLmdldChpZClcblx0XHRcdH0sXG5cblx0XHRcdGdldCh0OiBUYWcgfCBUYWdbXSwgb3B0czogR2V0T3B0ID0ge30pOiBHYW1lT2JqW10ge1xuXHRcdFx0XHRsZXQgbGlzdDogR2FtZU9ialtdID0gb3B0cy5yZWN1cnNpdmVcblx0XHRcdFx0XHQ/IHRoaXMuY2hpbGRyZW4uZmxhdE1hcChmdW5jdGlvbiByZWN1cnNlKGNoaWxkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gW2NoaWxkLCAuLi5jaGlsZC5jaGlsZHJlbi5mbGF0TWFwKHJlY3Vyc2UpXVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0OiB0aGlzLmNoaWxkcmVuXG5cdFx0XHRcdGxpc3QgPSBsaXN0LmZpbHRlcigoY2hpbGQpID0+IHQgPyBjaGlsZC5pcyh0KSA6IHRydWUpXG5cdFx0XHRcdGlmIChvcHRzLmxpdmVVcGRhdGUpIHtcblx0XHRcdFx0XHRjb25zdCBpc0NoaWxkID0gKG9iaikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9wdHMucmVjdXJzaXZlXG5cdFx0XHRcdFx0XHRcdD8gdGhpcy5pc0FuY2VzdG9yT2Yob2JqKVxuXHRcdFx0XHRcdFx0XHQ6IG9iai5wYXJlbnQgPT09IHRoaXNcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgZXZlbnRzID0gW11cblx0XHRcdFx0XHQvLyBUT0RPOiBoYW5kbGUgd2hlbiBvYmplY3QgYWRkIC8gcmVtb3ZlIHRhZ3Ncblx0XHRcdFx0XHQvLyBUT0RPOiBjbGVhbiB1cCB3aGVuIG9iaiBkZXN0cm95ZWRcblx0XHRcdFx0XHRldmVudHMucHVzaChvbkFkZCgob2JqKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoaXNDaGlsZChvYmopICYmIG9iai5pcyh0KSkge1xuXHRcdFx0XHRcdFx0XHRsaXN0LnB1c2gob2JqKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pKVxuXHRcdFx0XHRcdGV2ZW50cy5wdXNoKG9uRGVzdHJveSgob2JqKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoaXNDaGlsZChvYmopICYmIG9iai5pcyh0KSkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBpZHggPSBsaXN0LmZpbmRJbmRleCgobykgPT4gby5pZCA9PT0gb2JqLmlkKVxuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdGxpc3Quc3BsaWNlKGlkeCwgMSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pKVxuXHRcdFx0XHRcdHRoaXMub25EZXN0cm95KCgpID0+IHtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgZXYgb2YgZXZlbnRzKSB7XG5cdFx0XHRcdFx0XHRcdGV2LmNhbmNlbCgpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbGlzdFxuXHRcdFx0fSxcblxuXHRcdFx0aXNBbmNlc3Rvck9mKG9iajogR2FtZU9iaikge1xuXHRcdFx0XHRpZiAoIW9iai5wYXJlbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb2JqLnBhcmVudCA9PT0gdGhpcyB8fCB0aGlzLmlzQW5jZXN0b3JPZihvYmoucGFyZW50KVxuXHRcdFx0fSxcblxuXHRcdFx0ZXhpc3RzKCk6IGJvb2xlYW4ge1xuXHRcdFx0XHRyZXR1cm4gZ2FtZS5yb290LmlzQW5jZXN0b3JPZih0aGlzKVxuXHRcdFx0fSxcblxuXHRcdFx0aXModGFnOiBUYWcgfCBUYWdbXSk6IGJvb2xlYW4ge1xuXHRcdFx0XHRpZiAodGFnID09PSBcIipcIikge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodGFnKSkge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgdCBvZiB0YWcpIHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5jKHQpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmModGFnKSAhPSBudWxsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdG9uKG5hbWU6IHN0cmluZywgYWN0aW9uOiAoLi4uYXJncykgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdGNvbnN0IGN0cmwgPSBldmVudHMub24obmFtZSwgYWN0aW9uLmJpbmQodGhpcykpXG5cdFx0XHRcdGlmIChvbkN1ckNvbXBDbGVhbnVwKSB7XG5cdFx0XHRcdFx0b25DdXJDb21wQ2xlYW51cCgoKSA9PiBjdHJsLmNhbmNlbCgpKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjdHJsXG5cdFx0XHR9LFxuXG5cdFx0XHR0cmlnZ2VyKG5hbWU6IHN0cmluZywgLi4uYXJncyk6IHZvaWQge1xuXHRcdFx0XHRldmVudHMudHJpZ2dlcihuYW1lLCAuLi5hcmdzKVxuXHRcdFx0XHRnYW1lLm9iakV2ZW50cy50cmlnZ2VyKG5hbWUsIHRoaXMsIC4uLmFyZ3MpXG5cdFx0XHR9LFxuXG5cdFx0XHRkZXN0cm95KCkge1xuXHRcdFx0XHRpZiAodGhpcy5wYXJlbnQpIHtcblx0XHRcdFx0XHR0aGlzLnBhcmVudC5yZW1vdmUodGhpcylcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0aW5zcGVjdCgpIHtcblx0XHRcdFx0Y29uc3QgaW5mbyA9IHt9XG5cdFx0XHRcdGZvciAoY29uc3QgW3RhZywgY29tcF0gb2YgY29tcFN0YXRlcykge1xuXHRcdFx0XHRcdGluZm9bdGFnXSA9IGNvbXAuaW5zcGVjdCA/IGNvbXAuaW5zcGVjdCgpIDogbnVsbFxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBpbmZvXG5cdFx0XHR9LFxuXG5cdFx0XHRvbkFkZChjYjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiYWRkXCIsIGNiKVxuXHRcdFx0fSxcblxuXHRcdFx0b25VcGRhdGUoY2I6ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcInVwZGF0ZVwiLCBjYilcblx0XHRcdH0sXG5cblx0XHRcdG9uRHJhdyhjYjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiZHJhd1wiLCBjYilcblx0XHRcdH0sXG5cblx0XHRcdG9uRGVzdHJveShhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcImRlc3Ryb3lcIiwgYWN0aW9uKVxuXHRcdFx0fSxcblxuXHRcdFx0Y2xlYXJFdmVudHMoKSB7XG5cdFx0XHRcdGV2ZW50cy5jbGVhcigpXG5cdFx0XHR9LFxuXG5cdFx0fVxuXG5cdFx0Ly8gVE9ETzogdHlwZSB3aXRoIGFzIGNvbnN0XG5cdFx0Y29uc3QgZXZzID0gW1xuXHRcdFx0XCJvbktleVByZXNzXCIsXG5cdFx0XHRcIm9uS2V5UHJlc3NSZXBlYXRcIixcblx0XHRcdFwib25LZXlEb3duXCIsXG5cdFx0XHRcIm9uS2V5UmVsZWFzZVwiLFxuXHRcdFx0XCJvbk1vdXNlUHJlc3NcIixcblx0XHRcdFwib25Nb3VzZURvd25cIixcblx0XHRcdFwib25Nb3VzZVJlbGVhc2VcIixcblx0XHRcdFwib25Nb3VzZU1vdmVcIixcblx0XHRcdFwib25DaGFySW5wdXRcIixcblx0XHRcdFwib25Nb3VzZU1vdmVcIixcblx0XHRcdFwib25Ub3VjaFN0YXJ0XCIsXG5cdFx0XHRcIm9uVG91Y2hNb3ZlXCIsXG5cdFx0XHRcIm9uVG91Y2hFbmRcIixcblx0XHRcdFwib25TY3JvbGxcIixcblx0XHRcdFwib25HYW1lcGFkQnV0dG9uUHJlc3NcIixcblx0XHRcdFwib25HYW1lcGFkQnV0dG9uRG93blwiLFxuXHRcdFx0XCJvbkdhbWVwYWRCdXR0b25SZWxlYXNlXCIsXG5cdFx0XHRcIm9uR2FtZXBhZFN0aWNrXCIsXG5cdFx0XVxuXG5cdFx0Zm9yIChjb25zdCBlIG9mIGV2cykge1xuXHRcdFx0b2JqW2VdID0gKC4uLmFyZ3MpID0+IHtcblx0XHRcdFx0Y29uc3QgZXYgPSBhcHBbZV0oLi4uYXJncylcblx0XHRcdFx0aW5wdXRFdmVudHMucHVzaChldilcblx0XHRcdFx0Ly8gVE9ETzogd2hhdCBpZiB0aGUgZ2FtZSBvYmplY3QgaXMgZGVzdHJveSBhbmQgcmUtYWRkZWRcblx0XHRcdFx0b2JqLm9uRGVzdHJveSgoKSA9PiBldi5jYW5jZWwoKSlcblx0XHRcdFx0cmV0dXJuIGV2XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjb21wIG9mIGNvbXBzKSB7XG5cdFx0XHRvYmoudXNlKGNvbXApXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9iaiBhcyB1bmtub3duIGFzIEdhbWVPYmo8VD5cblxuXHR9XG5cblx0Ly8gYWRkIGFuIGV2ZW50IHRvIGEgdGFnXG5cdGZ1bmN0aW9uIG9uKGV2ZW50OiBzdHJpbmcsIHRhZzogVGFnLCBjYjogKG9iajogR2FtZU9iaiwgLi4uYXJncykgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0aWYgKCFnYW1lLm9iakV2ZW50c1tldmVudF0pIHtcblx0XHRcdGdhbWUub2JqRXZlbnRzW2V2ZW50XSA9IG5ldyBSZWdpc3RyeSgpXG5cdFx0fVxuXHRcdHJldHVybiBnYW1lLm9iakV2ZW50cy5vbihldmVudCwgKG9iaiwgLi4uYXJncykgPT4ge1xuXHRcdFx0aWYgKG9iai5pcyh0YWcpKSB7XG5cdFx0XHRcdGNiKG9iaiwgLi4uYXJncylcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0Y29uc3Qgb25VcGRhdGUgPSBvdmVybG9hZDIoKGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciA9PiB7XG5cdFx0Y29uc3Qgb2JqID0gYWRkKFt7IHVwZGF0ZTogYWN0aW9uIH1dKVxuXHRcdHJldHVybiB7XG5cdFx0XHRnZXQgcGF1c2VkKCkge1xuXHRcdFx0XHRyZXR1cm4gb2JqLnBhdXNlZFxuXHRcdFx0fSxcblx0XHRcdHNldCBwYXVzZWQocCkge1xuXHRcdFx0XHRvYmoucGF1c2VkID0gcFxuXHRcdFx0fSxcblx0XHRcdGNhbmNlbDogKCkgPT4gb2JqLmRlc3Ryb3koKSxcblx0XHR9XG5cdH0sICh0YWc6IFRhZywgYWN0aW9uOiAob2JqOiBHYW1lT2JqKSA9PiB2b2lkKSA9PiB7XG5cdFx0cmV0dXJuIG9uKFwidXBkYXRlXCIsIHRhZywgYWN0aW9uKVxuXHR9KVxuXG5cdGNvbnN0IG9uRHJhdyA9IG92ZXJsb2FkMigoYWN0aW9uOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyID0+IHtcblx0XHRjb25zdCBvYmogPSBhZGQoW3sgZHJhdzogYWN0aW9uIH1dKVxuXHRcdHJldHVybiB7XG5cdFx0XHRnZXQgcGF1c2VkKCkge1xuXHRcdFx0XHRyZXR1cm4gb2JqLmhpZGRlblxuXHRcdFx0fSxcblx0XHRcdHNldCBwYXVzZWQocCkge1xuXHRcdFx0XHRvYmouaGlkZGVuID0gcFxuXHRcdFx0fSxcblx0XHRcdGNhbmNlbDogKCkgPT4gb2JqLmRlc3Ryb3koKSxcblx0XHR9XG5cdH0sICh0YWc6IFRhZywgYWN0aW9uOiAob2JqOiBHYW1lT2JqKSA9PiB2b2lkKSA9PiB7XG5cdFx0cmV0dXJuIG9uKFwiZHJhd1wiLCB0YWcsIGFjdGlvbilcblx0fSlcblxuXHRjb25zdCBvbkFkZCA9IG92ZXJsb2FkMigoYWN0aW9uOiAob2JqOiBHYW1lT2JqKSA9PiB2b2lkKSA9PiB7XG5cdFx0cmV0dXJuIGdhbWUuZXZlbnRzLm9uKFwiYWRkXCIsIGFjdGlvbilcblx0fSwgKHRhZzogVGFnLCBhY3Rpb246IChvYmo6IEdhbWVPYmopID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gb24oXCJhZGRcIiwgdGFnLCBhY3Rpb24pXG5cdH0pXG5cblx0Y29uc3Qgb25EZXN0cm95ID0gb3ZlcmxvYWQyKChhY3Rpb246IChvYmo6IEdhbWVPYmopID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gZ2FtZS5ldmVudHMub24oXCJkZXN0cm95XCIsIGFjdGlvbilcblx0fSwgKHRhZzogVGFnLCBhY3Rpb246IChvYmo6IEdhbWVPYmopID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gb24oXCJkZXN0cm95XCIsIHRhZywgYWN0aW9uKVxuXHR9KVxuXG5cdC8vIGFkZCBhbiBldmVudCB0aGF0IHJ1bnMgd2l0aCBvYmpzIHdpdGggdDEgY29sbGlkZXMgd2l0aCBvYmpzIHdpdGggdDJcblx0ZnVuY3Rpb24gb25Db2xsaWRlKFxuXHRcdHQxOiBUYWcsXG5cdFx0dDI6IFRhZyxcblx0XHRmOiAoYTogR2FtZU9iaiwgYjogR2FtZU9iaiwgY29sPzogQ29sbGlzaW9uKSA9PiB2b2lkLFxuXHQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdHJldHVybiBvbihcImNvbGxpZGVcIiwgdDEsIChhLCBiLCBjb2wpID0+IGIuaXModDIpICYmIGYoYSwgYiwgY29sKSlcblx0fVxuXG5cdGZ1bmN0aW9uIG9uQ29sbGlkZVVwZGF0ZShcblx0XHR0MTogVGFnLFxuXHRcdHQyOiBUYWcsXG5cdFx0ZjogKGE6IEdhbWVPYmosIGI6IEdhbWVPYmosIGNvbD86IENvbGxpc2lvbikgPT4gdm9pZCxcblx0KTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRyZXR1cm4gb24oXCJjb2xsaWRlVXBkYXRlXCIsIHQxLCAoYSwgYiwgY29sKSA9PiBiLmlzKHQyKSAmJiBmKGEsIGIsIGNvbCkpXG5cdH1cblxuXHRmdW5jdGlvbiBvbkNvbGxpZGVFbmQoXG5cdFx0dDE6IFRhZyxcblx0XHR0MjogVGFnLFxuXHRcdGY6IChhOiBHYW1lT2JqLCBiOiBHYW1lT2JqLCBjb2w/OiBDb2xsaXNpb24pID0+IHZvaWQsXG5cdCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0cmV0dXJuIG9uKFwiY29sbGlkZUVuZFwiLCB0MSwgKGEsIGIsIGNvbCkgPT4gYi5pcyh0MikgJiYgZihhLCBiLCBjb2wpKVxuXHR9XG5cblx0ZnVuY3Rpb24gZm9yQWxsQ3VycmVudEFuZEZ1dHVyZSh0OiBUYWcsIGFjdGlvbjogKG9iajogR2FtZU9iaikgPT4gdm9pZCkge1xuXHRcdGdldCh0LCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KS5mb3JFYWNoKGFjdGlvbilcblx0XHRvbkFkZCh0LCBhY3Rpb24pXG5cdH1cblxuXHRjb25zdCBvbkNsaWNrID0gb3ZlcmxvYWQyKChhY3Rpb246ICgpID0+IHZvaWQpID0+IHtcblx0XHRyZXR1cm4gYXBwLm9uTW91c2VQcmVzcyhhY3Rpb24pXG5cdH0sICh0YWc6IFRhZywgYWN0aW9uOiAob2JqOiBHYW1lT2JqKSA9PiB2b2lkKSA9PiB7XG5cdFx0Y29uc3QgZXZlbnRzID0gW11cblx0XHRmb3JBbGxDdXJyZW50QW5kRnV0dXJlKHRhZywgKG9iaikgPT4ge1xuXHRcdFx0aWYgKCFvYmouYXJlYSlcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwib25DbGljaygpIHJlcXVpcmVzIHRoZSBvYmplY3QgdG8gaGF2ZSBhcmVhKCkgY29tcG9uZW50XCIpXG5cdFx0XHRldmVudHMucHVzaChvYmoub25DbGljaygoKSA9PiBhY3Rpb24ob2JqKSkpXG5cdFx0fSlcblx0XHRyZXR1cm4gRXZlbnRDb250cm9sbGVyLmpvaW4oZXZlbnRzKVxuXHR9KVxuXG5cdC8vIGFkZCBhbiBldmVudCB0aGF0IHJ1bnMgb25jZSB3aGVuIG9ianMgd2l0aCB0YWcgdCBpcyBob3ZlcmVkXG5cdGZ1bmN0aW9uIG9uSG92ZXIodDogVGFnLCBhY3Rpb246IChvYmo6IEdhbWVPYmopID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdGNvbnN0IGV2ZW50cyA9IFtdXG5cdFx0Zm9yQWxsQ3VycmVudEFuZEZ1dHVyZSh0LCAob2JqKSA9PiB7XG5cdFx0XHRpZiAoIW9iai5hcmVhKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJvbkhvdmVyKCkgcmVxdWlyZXMgdGhlIG9iamVjdCB0byBoYXZlIGFyZWEoKSBjb21wb25lbnRcIilcblx0XHRcdGV2ZW50cy5wdXNoKG9iai5vbkhvdmVyKCgpID0+IGFjdGlvbihvYmopKSlcblx0XHR9KVxuXHRcdHJldHVybiBFdmVudENvbnRyb2xsZXIuam9pbihldmVudHMpXG5cdH1cblxuXHQvLyBhZGQgYW4gZXZlbnQgdGhhdCBydW5zIG9uY2Ugd2hlbiBvYmpzIHdpdGggdGFnIHQgaXMgaG92ZXJlZFxuXHRmdW5jdGlvbiBvbkhvdmVyVXBkYXRlKHQ6IFRhZywgYWN0aW9uOiAob2JqOiBHYW1lT2JqKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRjb25zdCBldmVudHMgPSBbXVxuXHRcdGZvckFsbEN1cnJlbnRBbmRGdXR1cmUodCwgKG9iaikgPT4ge1xuXHRcdFx0aWYgKCFvYmouYXJlYSlcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwib25Ib3ZlclVwZGF0ZSgpIHJlcXVpcmVzIHRoZSBvYmplY3QgdG8gaGF2ZSBhcmVhKCkgY29tcG9uZW50XCIpXG5cdFx0XHRldmVudHMucHVzaChvYmoub25Ib3ZlclVwZGF0ZSgoKSA9PiBhY3Rpb24ob2JqKSkpXG5cdFx0fSlcblx0XHRyZXR1cm4gRXZlbnRDb250cm9sbGVyLmpvaW4oZXZlbnRzKVxuXHR9XG5cblx0Ly8gYWRkIGFuIGV2ZW50IHRoYXQgcnVucyBvbmNlIHdoZW4gb2JqcyB3aXRoIHRhZyB0IGlzIHVuaG92ZXJlZFxuXHRmdW5jdGlvbiBvbkhvdmVyRW5kKHQ6IFRhZywgYWN0aW9uOiAob2JqOiBHYW1lT2JqKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRjb25zdCBldmVudHMgPSBbXVxuXHRcdGZvckFsbEN1cnJlbnRBbmRGdXR1cmUodCwgKG9iaikgPT4ge1xuXHRcdFx0aWYgKCFvYmouYXJlYSlcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwib25Ib3ZlckVuZCgpIHJlcXVpcmVzIHRoZSBvYmplY3QgdG8gaGF2ZSBhcmVhKCkgY29tcG9uZW50XCIpXG5cdFx0XHRldmVudHMucHVzaChvYmoub25Ib3ZlckVuZCgoKSA9PiBhY3Rpb24ob2JqKSkpXG5cdFx0fSlcblx0XHRyZXR1cm4gRXZlbnRDb250cm9sbGVyLmpvaW4oZXZlbnRzKVxuXHR9XG5cblx0ZnVuY3Rpb24gc2V0R3Jhdml0eShnOiBudW1iZXIpIHtcblx0XHRnYW1lLmdyYXZpdHkgPSBnXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRHcmF2aXR5KCkge1xuXHRcdHJldHVybiBnYW1lLmdyYXZpdHlcblx0fVxuXG5cdGZ1bmN0aW9uIHNldEJhY2tncm91bmQoLi4uYXJncykge1xuXHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMSB8fCBhcmdzLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0Z2Z4LmJnQ29sb3IgPSByZ2IoYXJnc1swXSlcblx0XHRcdGlmIChhcmdzWzFdKSBnZnguYmdBbHBoYSA9IGFyZ3NbMV1cblx0XHR9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAzIHx8IGFyZ3MubGVuZ3RoID09PSA0KSB7XG5cdFx0XHRnZnguYmdDb2xvciA9IHJnYihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuXHRcdFx0aWYgKGFyZ3NbM10pIGdmeC5iZ0FscGhhID0gYXJnc1szXVxuXHRcdH1cblx0XHRnbC5jbGVhckNvbG9yKFxuXHRcdFx0Z2Z4LmJnQ29sb3IuciAvIDI1NSxcblx0XHRcdGdmeC5iZ0NvbG9yLmcgLyAyNTUsXG5cdFx0XHRnZnguYmdDb2xvci5iIC8gMjU1LFxuXHRcdFx0Z2Z4LmJnQWxwaGEsXG5cdFx0KVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0QmFja2dyb3VuZCgpIHtcblx0XHRyZXR1cm4gZ2Z4LmJnQ29sb3IuY2xvbmUoKVxuXHR9XG5cblx0Ly8gVE9ETzogbWFuYWdlIGdsb2JhbCB2ZWxvY2l0eSBoZXJlP1xuXHRmdW5jdGlvbiBwb3MoLi4uYXJnczogVmVjMkFyZ3MpOiBQb3NDb21wIHtcblxuXHRcdHJldHVybiB7XG5cblx0XHRcdGlkOiBcInBvc1wiLFxuXHRcdFx0cG9zOiB2ZWMyKC4uLmFyZ3MpLFxuXG5cdFx0XHRtb3ZlQnkoLi4uYXJnczogVmVjMkFyZ3MpIHtcblx0XHRcdFx0dGhpcy5wb3MgPSB0aGlzLnBvcy5hZGQodmVjMiguLi5hcmdzKSlcblx0XHRcdH0sXG5cblx0XHRcdC8vIG1vdmUgd2l0aCB2ZWxvY2l0eSAocGl4ZWxzIHBlciBzZWNvbmQpXG5cdFx0XHRtb3ZlKC4uLmFyZ3M6IFZlYzJBcmdzKSB7XG5cdFx0XHRcdHRoaXMubW92ZUJ5KHZlYzIoLi4uYXJncykuc2NhbGUoZHQoKSkpXG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBtb3ZlIHRvIGEgZGVzdGluYXRpb24sIHdpdGggb3B0aW9uYWwgc3BlZWRcblx0XHRcdG1vdmVUbyguLi5hcmdzKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgYXJnc1sxXSA9PT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLm1vdmVUbyh2ZWMyKGFyZ3NbMF0sIGFyZ3NbMV0pLCBhcmdzWzJdKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGRlc3QgPSBhcmdzWzBdXG5cdFx0XHRcdGNvbnN0IHNwZWVkID0gYXJnc1sxXVxuXHRcdFx0XHRpZiAoc3BlZWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMucG9zID0gdmVjMihkZXN0KVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGRpZmYgPSBkZXN0LnN1Yih0aGlzLnBvcylcblx0XHRcdFx0aWYgKGRpZmYubGVuKCkgPD0gc3BlZWQgKiBkdCgpKSB7XG5cdFx0XHRcdFx0dGhpcy5wb3MgPSB2ZWMyKGRlc3QpXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5tb3ZlKGRpZmYudW5pdCgpLnNjYWxlKHNwZWVkKSlcblx0XHRcdH0sXG5cblx0XHRcdHdvcmxkUG9zKHRoaXM6IEdhbWVPYmo8UG9zQ29tcD4pOiBWZWMyIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGFyZW50XG5cdFx0XHRcdFx0PyB0aGlzLnBhcmVudC50cmFuc2Zvcm0ubXVsdFZlYzIodGhpcy5wb3MpXG5cdFx0XHRcdFx0OiB0aGlzLnBvc1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gZ2V0IHRoZSBzY3JlZW4gcG9zaXRpb24gKHRyYW5zZm9ybWVkIGJ5IGNhbWVyYSlcblx0XHRcdHNjcmVlblBvcyh0aGlzOiBHYW1lT2JqPFBvc0NvbXAgfCBGaXhlZENvbXA+KTogVmVjMiB7XG5cdFx0XHRcdGNvbnN0IHBvcyA9IHRoaXMud29ybGRQb3MoKVxuXHRcdFx0XHRyZXR1cm4gaXNGaXhlZCh0aGlzKVxuXHRcdFx0XHRcdD8gcG9zXG5cdFx0XHRcdFx0OiB0b1NjcmVlbihwb3MpXG5cdFx0XHR9LFxuXG5cdFx0XHRpbnNwZWN0KCkge1xuXHRcdFx0XHRyZXR1cm4gYCgke01hdGgucm91bmQodGhpcy5wb3MueCl9LCAke01hdGgucm91bmQodGhpcy5wb3MueSl9KWBcblx0XHRcdH0sXG5cblx0XHRcdGRyYXdJbnNwZWN0KCkge1xuXHRcdFx0XHRkcmF3Q2lyY2xlKHtcblx0XHRcdFx0XHRjb2xvcjogcmdiKDI1NSwgMCwgMCksXG5cdFx0XHRcdFx0cmFkaXVzOiA0IC8gZ2V0Vmlld3BvcnRTY2FsZSgpLFxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblxuXHRcdH1cblxuXHR9XG5cblx0Ly8gVE9ETzogYWxsb3cgc2luZ2xlIG51bWJlciBhc3NpZ25tZW50XG5cdGZ1bmN0aW9uIHNjYWxlKC4uLmFyZ3M6IFZlYzJBcmdzKTogU2NhbGVDb21wIHtcblx0XHRpZiAoYXJncy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBzY2FsZSgxKVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwic2NhbGVcIixcblx0XHRcdHNjYWxlOiB2ZWMyKC4uLmFyZ3MpLFxuXHRcdFx0c2NhbGVUbyguLi5hcmdzOiBWZWMyQXJncykge1xuXHRcdFx0XHR0aGlzLnNjYWxlID0gdmVjMiguLi5hcmdzKVxuXHRcdFx0fSxcblx0XHRcdHNjYWxlQnkoLi4uYXJnczogVmVjMkFyZ3MpIHtcblx0XHRcdFx0dGhpcy5zY2FsZS5zY2FsZSh2ZWMyKC4uLmFyZ3MpKVxuXHRcdFx0fSxcblx0XHRcdGluc3BlY3QoKSB7XG5cdFx0XHRcdHJldHVybiBgKCR7dG9GaXhlZCh0aGlzLnNjYWxlLngsIDIpfSwgJHt0b0ZpeGVkKHRoaXMuc2NhbGUueSwgMil9KWBcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gcm90YXRlKHI6IG51bWJlcik6IFJvdGF0ZUNvbXAge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJyb3RhdGVcIixcblx0XHRcdGFuZ2xlOiByID8/IDAsXG5cdFx0XHRyb3RhdGVCeShhbmdsZTogbnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMuYW5nbGUgKz0gYW5nbGVcblx0XHRcdH0sXG5cdFx0XHRyb3RhdGVUbyhhbmdsZTogbnVtYmVyKSB7XG5cdFx0XHRcdHRoaXMuYW5nbGUgPSBhbmdsZVxuXHRcdFx0fSxcblx0XHRcdGluc3BlY3QoKSB7XG5cdFx0XHRcdHJldHVybiBgJHtNYXRoLnJvdW5kKHRoaXMuYW5nbGUpfWBcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY29sb3IoLi4uYXJncyk6IENvbG9yQ29tcCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcImNvbG9yXCIsXG5cdFx0XHRjb2xvcjogcmdiKC4uLmFyZ3MpLFxuXHRcdFx0aW5zcGVjdCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sb3IudG9TdHJpbmcoKVxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB0b0ZpeGVkKG46IG51bWJlciwgZjogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIE51bWJlcihuLnRvRml4ZWQoZikpXG5cdH1cblxuXHQvLyBUT0RPOiBmYWRlSW4gaGVyZT9cblx0ZnVuY3Rpb24gb3BhY2l0eShhOiBudW1iZXIpOiBPcGFjaXR5Q29tcCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcIm9wYWNpdHlcIixcblx0XHRcdG9wYWNpdHk6IGEgPz8gMSxcblx0XHRcdGluc3BlY3QoKSB7XG5cdFx0XHRcdHJldHVybiBgJHt0b0ZpeGVkKHRoaXMub3BhY2l0eSwgMSl9YFxuXHRcdFx0fSxcblx0XHRcdGZhZGVPdXQodGltZSA9IDEsIGVhc2VGdW5jID0gZWFzaW5ncy5saW5lYXIpOiBUd2VlbkNvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdHdlZW4odGhpcy5vcGFjaXR5LCAwLCB0aW1lLCAoYSkgPT4gdGhpcy5vcGFjaXR5ID0gYSwgZWFzZUZ1bmMpXG5cdFx0XHR9LFxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGFuY2hvcihvOiBBbmNob3IgfCBWZWMyKTogQW5jaG9yQ29tcCB7XG5cdFx0aWYgKCFvKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgZGVmaW5lIGFuIGFuY2hvclwiKVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwiYW5jaG9yXCIsXG5cdFx0XHRhbmNob3I6IG8sXG5cdFx0XHRpbnNwZWN0KCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMuYW5jaG9yID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYW5jaG9yXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYW5jaG9yLnRvU3RyaW5nKClcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB6KHo6IG51bWJlcik6IFpDb21wIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwielwiLFxuXHRcdFx0ejogeixcblx0XHRcdGluc3BlY3QoKSB7XG5cdFx0XHRcdHJldHVybiBgJHt0aGlzLnp9YFxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBmb2xsb3cob2JqOiBHYW1lT2JqLCBvZmZzZXQ/OiBWZWMyKTogRm9sbG93Q29tcCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcImZvbGxvd1wiLFxuXHRcdFx0cmVxdWlyZTogWyBcInBvc1wiIF0sXG5cdFx0XHRmb2xsb3c6IHtcblx0XHRcdFx0b2JqOiBvYmosXG5cdFx0XHRcdG9mZnNldDogb2Zmc2V0ID8/IHZlYzIoMCksXG5cdFx0XHR9LFxuXHRcdFx0YWRkKHRoaXM6IEdhbWVPYmo8Rm9sbG93Q29tcCB8IFBvc0NvbXA+KSB7XG5cdFx0XHRcdGlmIChvYmouZXhpc3RzKCkpIHtcblx0XHRcdFx0XHR0aGlzLnBvcyA9IHRoaXMuZm9sbG93Lm9iai5wb3MuYWRkKHRoaXMuZm9sbG93Lm9mZnNldClcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHVwZGF0ZSh0aGlzOiBHYW1lT2JqPEZvbGxvd0NvbXAgfCBQb3NDb21wPikge1xuXHRcdFx0XHRpZiAob2JqLmV4aXN0cygpKSB7XG5cdFx0XHRcdFx0dGhpcy5wb3MgPSB0aGlzLmZvbGxvdy5vYmoucG9zLmFkZCh0aGlzLmZvbGxvdy5vZmZzZXQpXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbW92ZShkaXI6IG51bWJlciB8IFZlYzIsIHNwZWVkOiBudW1iZXIpOiBFbXB0eUNvbXAge1xuXHRcdGNvbnN0IGQgPSB0eXBlb2YgZGlyID09PSBcIm51bWJlclwiID8gVmVjMi5mcm9tQW5nbGUoZGlyKSA6IGRpci51bml0KClcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwibW92ZVwiLFxuXHRcdFx0cmVxdWlyZTogWyBcInBvc1wiIF0sXG5cdFx0XHR1cGRhdGUodGhpczogR2FtZU9iajxQb3NDb21wPikge1xuXHRcdFx0XHR0aGlzLm1vdmUoZC5zY2FsZShzcGVlZCkpXG5cdFx0XHR9LFxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IERFRl9PRkZTQ1JFRU5fRElTID0gMjAwXG5cblx0ZnVuY3Rpb24gb2Zmc2NyZWVuKG9wdDogT2ZmU2NyZWVuQ29tcE9wdCA9IHt9KTogT2ZmU2NyZWVuQ29tcCB7XG5cdFx0Y29uc3QgZGlzdGFuY2UgPSBvcHQuZGlzdGFuY2UgPz8gREVGX09GRlNDUkVFTl9ESVNcblx0XHRsZXQgaXNPdXQgPSBmYWxzZVxuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJvZmZzY3JlZW5cIixcblx0XHRcdHJlcXVpcmU6IFsgXCJwb3NcIiBdLFxuXHRcdFx0aXNPZmZTY3JlZW4odGhpczogR2FtZU9iajxQb3NDb21wPik6IGJvb2xlYW4ge1xuXHRcdFx0XHRjb25zdCBwb3MgPSB0aGlzLnNjcmVlblBvcygpXG5cdFx0XHRcdGNvbnN0IHNjcmVlblJlY3QgPSBuZXcgUmVjdCh2ZWMyKDApLCB3aWR0aCgpLCBoZWlnaHQoKSlcblx0XHRcdFx0cmV0dXJuICF0ZXN0UmVjdFBvaW50KHNjcmVlblJlY3QsIHBvcylcblx0XHRcdFx0XHQmJiBzY3JlZW5SZWN0LnNkaXN0VG9Qb2ludChwb3MpID4gZGlzdGFuY2UgKiBkaXN0YW5jZVxuXHRcdFx0fSxcblx0XHRcdG9uRXhpdFNjcmVlbih0aGlzOiBHYW1lT2JqLCBhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcImV4aXRWaWV3XCIsIGFjdGlvbilcblx0XHRcdH0sXG5cdFx0XHRvbkVudGVyU2NyZWVuKHRoaXM6IEdhbWVPYmosIGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiZW50ZXJWaWV3XCIsIGFjdGlvbilcblx0XHRcdH0sXG5cdFx0XHR1cGRhdGUodGhpczogR2FtZU9iaikge1xuXHRcdFx0XHRpZiAodGhpcy5pc09mZlNjcmVlbigpKSB7XG5cdFx0XHRcdFx0aWYgKCFpc091dCkge1xuXHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiZXhpdFZpZXdcIilcblx0XHRcdFx0XHRcdGlzT3V0ID0gdHJ1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAob3B0LmhpZGUpIHRoaXMuaGlkZGVuID0gdHJ1ZVxuXHRcdFx0XHRcdGlmIChvcHQucGF1c2UpIHRoaXMucGF1c2VkID0gdHJ1ZVxuXHRcdFx0XHRcdGlmIChvcHQuZGVzdHJveSkgdGhpcy5kZXN0cm95KClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoaXNPdXQpIHtcblx0XHRcdFx0XHRcdHRoaXMudHJpZ2dlcihcImVudGVyVmlld1wiKVxuXHRcdFx0XHRcdFx0aXNPdXQgPSBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAob3B0LmhpZGUpIHRoaXMuaGlkZGVuID0gZmFsc2Vcblx0XHRcdFx0XHRpZiAob3B0LnBhdXNlKSB0aGlzLnBhdXNlZCA9IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaXNGaXhlZChvYmo6IEdhbWVPYmopIHtcblx0XHRpZiAob2JqLmZpeGVkKSByZXR1cm4gdHJ1ZVxuXHRcdHJldHVybiBvYmoucGFyZW50ID8gaXNGaXhlZChvYmoucGFyZW50KSA6IGZhbHNlXG5cdH1cblxuXHRmdW5jdGlvbiBhcmVhKG9wdDogQXJlYUNvbXBPcHQgPSB7fSk6IEFyZWFDb21wIHtcblxuXHRcdGNvbnN0IGNvbGxpZGluZyA9IHt9XG5cdFx0Y29uc3QgY29sbGlkaW5nVGhpc0ZyYW1lID0gbmV3IFNldCgpXG5cblx0XHRyZXR1cm4ge1xuXG5cdFx0XHRpZDogXCJhcmVhXCIsXG5cdFx0XHRjb2xsaXNpb25JZ25vcmU6IG9wdC5jb2xsaXNpb25JZ25vcmUgPz8gW10sXG5cblx0XHRcdGFkZCh0aGlzOiBHYW1lT2JqPEFyZWFDb21wPikge1xuXG5cdFx0XHRcdGlmICh0aGlzLmFyZWEuY3Vyc29yKSB7XG5cdFx0XHRcdFx0dGhpcy5vbkhvdmVyKCgpID0+IGFwcC5zZXRDdXJzb3IodGhpcy5hcmVhLmN1cnNvcikpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLm9uQ29sbGlkZVVwZGF0ZSgob2JqLCBjb2wpID0+IHtcblx0XHRcdFx0XHRpZiAoIWNvbGxpZGluZ1tvYmouaWRdKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJjb2xsaWRlXCIsIG9iaiwgY29sKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb2xsaWRpbmdbb2JqLmlkXSA9IGNvbFxuXHRcdFx0XHRcdGNvbGxpZGluZ1RoaXNGcmFtZS5hZGQob2JqLmlkKVxuXHRcdFx0XHR9KVxuXG5cdFx0XHR9LFxuXG5cdFx0XHR1cGRhdGUodGhpczogR2FtZU9iajxBcmVhQ29tcD4pIHtcblx0XHRcdFx0Zm9yIChjb25zdCBpZCBpbiBjb2xsaWRpbmcpIHtcblx0XHRcdFx0XHRpZiAoIWNvbGxpZGluZ1RoaXNGcmFtZS5oYXMoTnVtYmVyKGlkKSkpIHtcblx0XHRcdFx0XHRcdHRoaXMudHJpZ2dlcihcImNvbGxpZGVFbmRcIiwgY29sbGlkaW5nW2lkXS50YXJnZXQpXG5cdFx0XHRcdFx0XHRkZWxldGUgY29sbGlkaW5nW2lkXVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRjb2xsaWRpbmdUaGlzRnJhbWUuY2xlYXIoKVxuXHRcdFx0fSxcblxuXHRcdFx0ZHJhd0luc3BlY3QodGhpczogR2FtZU9iajxBcmVhQ29tcCB8IEFuY2hvckNvbXAgfCBGaXhlZENvbXA+KSB7XG5cblx0XHRcdFx0Y29uc3QgYSA9IHRoaXMubG9jYWxBcmVhKClcblxuXHRcdFx0XHRwdXNoVHJhbnNmb3JtKClcblx0XHRcdFx0cHVzaFNjYWxlKHRoaXMuYXJlYS5zY2FsZSlcblx0XHRcdFx0cHVzaFRyYW5zbGF0ZSh0aGlzLmFyZWEub2Zmc2V0KVxuXG5cdFx0XHRcdGNvbnN0IG9wdHMgPSB7XG5cdFx0XHRcdFx0b3V0bGluZToge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQgLyBnZXRWaWV3cG9ydFNjYWxlKCksXG5cdFx0XHRcdFx0XHRjb2xvcjogcmdiKDAsIDAsIDI1NSksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRhbmNob3I6IHRoaXMuYW5jaG9yLFxuXHRcdFx0XHRcdGZpbGw6IGZhbHNlLFxuXHRcdFx0XHRcdGZpeGVkOiBpc0ZpeGVkKHRoaXMpLFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGEgaW5zdGFuY2VvZiBSZWN0KSB7XG5cdFx0XHRcdFx0ZHJhd1JlY3Qoe1xuXHRcdFx0XHRcdFx0Li4ub3B0cyxcblx0XHRcdFx0XHRcdHBvczogYS5wb3MsXG5cdFx0XHRcdFx0XHR3aWR0aDogYS53aWR0aCxcblx0XHRcdFx0XHRcdGhlaWdodDogYS5oZWlnaHQsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSBlbHNlIGlmIChhIGluc3RhbmNlb2YgUG9seWdvbikge1xuXHRcdFx0XHRcdGRyYXdQb2x5Z29uKHtcblx0XHRcdFx0XHRcdC4uLm9wdHMsXG5cdFx0XHRcdFx0XHRwdHM6IGEucHRzLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIENpcmNsZSkge1xuXHRcdFx0XHRcdGRyYXdDaXJjbGUoe1xuXHRcdFx0XHRcdFx0Li4ub3B0cyxcblx0XHRcdFx0XHRcdHBvczogYS5jZW50ZXIsXG5cdFx0XHRcdFx0XHRyYWRpdXM6IGEucmFkaXVzLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwb3BUcmFuc2Zvcm0oKVxuXG5cdFx0XHR9LFxuXG5cdFx0XHRhcmVhOiB7XG5cdFx0XHRcdHNoYXBlOiBvcHQuc2hhcGUgPz8gbnVsbCxcblx0XHRcdFx0c2NhbGU6IG9wdC5zY2FsZSA/IHZlYzIob3B0LnNjYWxlKSA6IHZlYzIoMSksXG5cdFx0XHRcdG9mZnNldDogb3B0Lm9mZnNldCA/PyB2ZWMyKDApLFxuXHRcdFx0XHRjdXJzb3I6IG9wdC5jdXJzb3IgPz8gbnVsbCxcblx0XHRcdH0sXG5cblx0XHRcdGlzQ2xpY2tlZCgpOiBib29sZWFuIHtcblx0XHRcdFx0cmV0dXJuIGFwcC5pc01vdXNlUHJlc3NlZCgpICYmIHRoaXMuaXNIb3ZlcmluZygpXG5cdFx0XHR9LFxuXG5cdFx0XHRpc0hvdmVyaW5nKHRoaXM6IEdhbWVPYmopIHtcblx0XHRcdFx0Y29uc3QgbXBvcyA9IGlzRml4ZWQodGhpcykgPyBtb3VzZVBvcygpIDogdG9Xb3JsZChtb3VzZVBvcygpKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5oYXNQb2ludChtcG9zKVxuXHRcdFx0fSxcblxuXHRcdFx0Y2hlY2tDb2xsaXNpb24odGhpczogR2FtZU9iaiwgb3RoZXI6IEdhbWVPYmo8QXJlYUNvbXA+KSB7XG5cdFx0XHRcdHJldHVybiBjb2xsaWRpbmdbb3RoZXIuaWRdID8/IG51bGxcblx0XHRcdH0sXG5cblx0XHRcdGdldENvbGxpc2lvbnMoKSB7XG5cdFx0XHRcdHJldHVybiBPYmplY3QudmFsdWVzKGNvbGxpZGluZylcblx0XHRcdH0sXG5cblx0XHRcdC8vIFRPRE86IHBlcmZvcm0gY2hlY2sgaW5zdGVhZCBvZiB1c2UgY2FjaGVcblx0XHRcdGlzQ29sbGlkaW5nKG90aGVyOiBHYW1lT2JqPEFyZWFDb21wPikge1xuXHRcdFx0XHRyZXR1cm4gQm9vbGVhbihjb2xsaWRpbmdbb3RoZXIuaWRdKVxuXHRcdFx0fSxcblxuXHRcdFx0aXNPdmVybGFwcGluZyhvdGhlcikge1xuXHRcdFx0XHRjb25zdCBjb2wgPSBjb2xsaWRpbmdbb3RoZXIuaWRdXG5cdFx0XHRcdHJldHVybiBjb2wgJiYgY29sLmhhc092ZXJsYXAoKVxuXHRcdFx0fSxcblxuXHRcdFx0b25DbGljayh0aGlzOiBHYW1lT2JqPEFyZWFDb21wPiwgZjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdGNvbnN0IGUgPSBhcHAub25Nb3VzZVByZXNzKFwibGVmdFwiLCAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuaXNIb3ZlcmluZygpKSB7XG5cdFx0XHRcdFx0XHRmKClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdHRoaXMub25EZXN0cm95KCgpID0+IGUuY2FuY2VsKCkpXG5cdFx0XHRcdHJldHVybiBlXG5cdFx0XHR9LFxuXG5cdFx0XHRvbkhvdmVyKHRoaXM6IEdhbWVPYmosIGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdGxldCBob3ZlcmluZyA9IGZhbHNlXG5cdFx0XHRcdHJldHVybiB0aGlzLm9uVXBkYXRlKCgpID0+IHtcblx0XHRcdFx0XHRpZiAoIWhvdmVyaW5nKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5pc0hvdmVyaW5nKCkpIHtcblx0XHRcdFx0XHRcdFx0aG92ZXJpbmcgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdGFjdGlvbigpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGhvdmVyaW5nID0gdGhpcy5pc0hvdmVyaW5nKClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXG5cdFx0XHRvbkhvdmVyVXBkYXRlKHRoaXM6IEdhbWVPYmosIG9uSG92ZXI6ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vblVwZGF0ZSgoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuaXNIb3ZlcmluZygpKSB7XG5cdFx0XHRcdFx0XHRvbkhvdmVyKClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXG5cdFx0XHRvbkhvdmVyRW5kKHRoaXM6IEdhbWVPYmosIGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdGxldCBob3ZlcmluZyA9IGZhbHNlXG5cdFx0XHRcdHJldHVybiB0aGlzLm9uVXBkYXRlKCgpID0+IHtcblx0XHRcdFx0XHRpZiAoaG92ZXJpbmcpIHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5pc0hvdmVyaW5nKCkpIHtcblx0XHRcdFx0XHRcdFx0aG92ZXJpbmcgPSBmYWxzZVxuXHRcdFx0XHRcdFx0XHRhY3Rpb24oKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRob3ZlcmluZyA9IHRoaXMuaXNIb3ZlcmluZygpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblxuXHRcdFx0b25Db2xsaWRlKFxuXHRcdFx0XHR0aGlzOiBHYW1lT2JqLFxuXHRcdFx0XHR0YWc6IFRhZyB8ICgob2JqOiBHYW1lT2JqLCBjb2w/OiBDb2xsaXNpb24pID0+IHZvaWQpLFxuXHRcdFx0XHRjYj86IChvYmo6IEdhbWVPYmosIGNvbD86IENvbGxpc2lvbikgPT4gdm9pZCxcblx0XHRcdCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdGlmICh0eXBlb2YgdGFnID09PSBcImZ1bmN0aW9uXCIgJiYgY2IgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiY29sbGlkZVwiLCB0YWcpXG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHRhZyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLm9uQ29sbGlkZSgob2JqLCBjb2wpID0+IHtcblx0XHRcdFx0XHRcdGlmIChvYmouaXModGFnKSkge1xuXHRcdFx0XHRcdFx0XHRjYihvYmosIGNvbClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRvbkNvbGxpZGVVcGRhdGUoXG5cdFx0XHRcdHRoaXM6IEdhbWVPYmo8QXJlYUNvbXA+LFxuXHRcdFx0XHR0YWc6IFRhZyB8ICgob2JqOiBHYW1lT2JqLCBjb2w/OiBDb2xsaXNpb24pID0+IHZvaWQpLFxuXHRcdFx0XHRjYj86IChvYmo6IEdhbWVPYmosIGNvbD86IENvbGxpc2lvbikgPT4gdm9pZCxcblx0XHRcdCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdGlmICh0eXBlb2YgdGFnID09PSBcImZ1bmN0aW9uXCIgJiYgY2IgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiY29sbGlkZVVwZGF0ZVwiLCB0YWcpXG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHRhZyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiY29sbGlkZVVwZGF0ZVwiLCAob2JqLCBjb2wpID0+IG9iai5pcyh0YWcpICYmIGNiKG9iaiwgY29sKSlcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0b25Db2xsaWRlRW5kKFxuXHRcdFx0XHR0aGlzOiBHYW1lT2JqPEFyZWFDb21wPixcblx0XHRcdFx0dGFnOiBUYWcgfCAoKG9iajogR2FtZU9iaikgPT4gdm9pZCksXG5cdFx0XHRcdGNiPzogKG9iajogR2FtZU9iaikgPT4gdm9pZCxcblx0XHRcdCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdGlmICh0eXBlb2YgdGFnID09PSBcImZ1bmN0aW9uXCIgJiYgY2IgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiY29sbGlkZUVuZFwiLCB0YWcpXG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHRhZyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLm9uKFwiY29sbGlkZUVuZFwiLCAob2JqKSA9PiBvYmouaXModGFnKSAmJiBjYihvYmopKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRoYXNQb2ludChwdDogVmVjMik6IGJvb2xlYW4ge1xuXHRcdFx0XHQvLyBUT0RPOiBjb252ZXJ0IHRvIHB0IHRvIGxvY2FsIHNwYWNlIGluc3RlYWRcblx0XHRcdFx0cmV0dXJuIHRlc3RQb2x5Z29uUG9pbnQodGhpcy53b3JsZEFyZWEoKSwgcHQpXG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBwdXNoIGFuIG9iaiBvdXQgb2YgYW5vdGhlciBpZiB0aGV5J3JlIG92ZXJsYXBwZWRcblx0XHRcdHJlc29sdmVDb2xsaXNpb24odGhpczogR2FtZU9iajxBcmVhQ29tcCB8IFBvc0NvbXA+LCBvYmo6IEdhbWVPYmo8QXJlYUNvbXA+KSB7XG5cdFx0XHRcdGNvbnN0IGNvbCA9IHRoaXMuY2hlY2tDb2xsaXNpb24ob2JqKVxuXHRcdFx0XHRpZiAoY29sICYmICFjb2wucmVzb2x2ZWQpIHtcblx0XHRcdFx0XHR0aGlzLnBvcyA9IHRoaXMucG9zLmFkZChjb2wuZGlzcGxhY2VtZW50KVxuXHRcdFx0XHRcdGNvbC5yZXNvbHZlZCA9IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0bG9jYWxBcmVhKHRoaXM6IEdhbWVPYmo8QXJlYUNvbXAgfCB7IHJlbmRlckFyZWEoKTogU2hhcGUgfT4pOiBTaGFwZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFyZWEuc2hhcGVcblx0XHRcdFx0XHQ/IHRoaXMuYXJlYS5zaGFwZVxuXHRcdFx0XHRcdDogdGhpcy5yZW5kZXJBcmVhKClcblx0XHRcdH0sXG5cblx0XHRcdC8vIFRPRE86IGNhY2hlXG5cdFx0XHR3b3JsZEFyZWEodGhpczogR2FtZU9iajxBcmVhQ29tcCB8IEFuY2hvckNvbXA+KTogUG9seWdvbiB7XG5cblx0XHRcdFx0Y29uc3QgbG9jYWxBcmVhID0gdGhpcy5sb2NhbEFyZWEoKVxuXG5cdFx0XHRcdGlmICghKGxvY2FsQXJlYSBpbnN0YW5jZW9mIFBvbHlnb24gfHwgbG9jYWxBcmVhIGluc3RhbmNlb2YgUmVjdCkpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IHN1cHBvcnQgcG9seWdvbiBhbmQgcmVjdCBzaGFwZXMgZm9yIG5vd1wiKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgdHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm1cblx0XHRcdFx0XHQuY2xvbmUoKVxuXHRcdFx0XHRcdC5zY2FsZSh2ZWMyKHRoaXMuYXJlYS5zY2FsZSA/PyAxKSlcblx0XHRcdFx0XHQudHJhbnNsYXRlKHRoaXMuYXJlYS5vZmZzZXQpXG5cblx0XHRcdFx0aWYgKGxvY2FsQXJlYSBpbnN0YW5jZW9mIFJlY3QpIHtcblx0XHRcdFx0XHRjb25zdCBvZmZzZXQgPSBhbmNob3JQdCh0aGlzLmFuY2hvciB8fCBERUZfQU5DSE9SKVxuXHRcdFx0XHRcdFx0LmFkZCgxLCAxKVxuXHRcdFx0XHRcdFx0LnNjYWxlKC0wLjUpXG5cdFx0XHRcdFx0XHQuc2NhbGUobG9jYWxBcmVhLndpZHRoLCBsb2NhbEFyZWEuaGVpZ2h0KVxuXHRcdFx0XHRcdHRyYW5zZm9ybS50cmFuc2xhdGUob2Zmc2V0KVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGxvY2FsQXJlYS50cmFuc2Zvcm0odHJhbnNmb3JtKSBhcyBQb2x5Z29uXG5cblx0XHRcdH0sXG5cblx0XHRcdHNjcmVlbkFyZWEodGhpczogR2FtZU9iajxBcmVhQ29tcCB8IEZpeGVkQ29tcD4pOiBQb2x5Z29uIHtcblx0XHRcdFx0Y29uc3QgYXJlYSA9IHRoaXMud29ybGRBcmVhKClcblx0XHRcdFx0aWYgKGlzRml4ZWQodGhpcykpIHtcblx0XHRcdFx0XHRyZXR1cm4gYXJlYVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBhcmVhLnRyYW5zZm9ybShnYW1lLmNhbS50cmFuc2Zvcm0pXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGdldFJlbmRlclByb3BzKG9iajogR2FtZU9iajxhbnk+KSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbG9yOiBvYmouY29sb3IsXG5cdFx0XHRvcGFjaXR5OiBvYmoub3BhY2l0eSxcblx0XHRcdGFuY2hvcjogb2JqLmFuY2hvcixcblx0XHRcdG91dGxpbmU6IG9iai5vdXRsaW5lLFxuXHRcdFx0c2hhZGVyOiBvYmouc2hhZGVyLFxuXHRcdFx0dW5pZm9ybTogb2JqLnVuaWZvcm0sXG5cdFx0fVxuXHR9XG5cblx0Ly8gVE9ETzogY2xlYW5cblx0ZnVuY3Rpb24gc3ByaXRlKFxuXHRcdHNyYzogc3RyaW5nIHwgU3ByaXRlRGF0YSB8IEFzc2V0PFNwcml0ZURhdGE+LFxuXHRcdG9wdDogU3ByaXRlQ29tcE9wdCA9IHt9LFxuXHQpOiBTcHJpdGVDb21wIHtcblxuXHRcdGxldCBzcHJpdGVEYXRhOiBTcHJpdGVEYXRhIHwgbnVsbCA9IG51bGxcblx0XHRsZXQgY3VyQW5pbTogU3ByaXRlQ3VyQW5pbSB8IG51bGwgPSBudWxsXG5cdFx0Ly8gMSAgLSBmcm9tIHNtYWxsIGluZGV4IHRvIGxhcmdlIGluZGV4XG5cdFx0Ly8gLTEgLSByZXZlcnNlXG5cdFx0bGV0IGN1ckFuaW1EaXI6IC0xIHwgMSB8IG51bGwgPSBudWxsXG5cdFx0Y29uc3Qgc3ByaXRlTG9hZGVkRXZlbnQgPSBuZXcgRXZlbnQ8W1Nwcml0ZURhdGFdPigpXG5cblx0XHRpZiAoIXNyYykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHBhc3MgdGhlIHJlc291cmNlIG5hbWUgb3IgZGF0YSB0byBzcHJpdGUoKVwiKVxuXHRcdH1cblxuXHRcdGNvbnN0IGNhbGNUZXhTY2FsZSA9ICh0ZXg6IFRleHR1cmUsIHE6IFF1YWQsIHc/OiBudW1iZXIsIGg/OiBudW1iZXIpOiBWZWMyID0+IHtcblx0XHRcdGNvbnN0IHNjYWxlID0gdmVjMigxLCAxKVxuXHRcdFx0aWYgKHcgJiYgaCkge1xuXHRcdFx0XHRzY2FsZS54ID0gdyAvICh0ZXgud2lkdGggKiBxLncpXG5cdFx0XHRcdHNjYWxlLnkgPSBoIC8gKHRleC5oZWlnaHQgKiBxLmgpXG5cdFx0XHR9IGVsc2UgaWYgKHcpIHtcblx0XHRcdFx0c2NhbGUueCA9IHcgLyAodGV4LndpZHRoICogcS53KVxuXHRcdFx0XHRzY2FsZS55ID0gc2NhbGUueFxuXHRcdFx0fSBlbHNlIGlmIChoKSB7XG5cdFx0XHRcdHNjYWxlLnkgPSBoIC8gKHRleC5oZWlnaHQgKiBxLmgpXG5cdFx0XHRcdHNjYWxlLnggPSBzY2FsZS55XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2NhbGVcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXG5cdFx0XHRpZDogXCJzcHJpdGVcIixcblx0XHRcdC8vIFRPRE86IGFsbG93IHVwZGF0ZVxuXHRcdFx0d2lkdGg6IDAsXG5cdFx0XHRoZWlnaHQ6IDAsXG5cdFx0XHRmcmFtZTogb3B0LmZyYW1lIHx8IDAsXG5cdFx0XHRxdWFkOiBvcHQucXVhZCB8fCBuZXcgUXVhZCgwLCAwLCAxLCAxKSxcblx0XHRcdGFuaW1TcGVlZDogb3B0LmFuaW1TcGVlZCA/PyAxLFxuXHRcdFx0ZmxpcFg6IG9wdC5mbGlwWCA/PyBmYWxzZSxcblx0XHRcdGZsaXBZOiBvcHQuZmxpcFkgPz8gZmFsc2UsXG5cblx0XHRcdGRyYXcodGhpczogR2FtZU9iajxTcHJpdGVDb21wPikge1xuXG5cdFx0XHRcdGlmICghc3ByaXRlRGF0YSkgcmV0dXJuXG5cblx0XHRcdFx0Y29uc3QgcSA9IHNwcml0ZURhdGEuZnJhbWVzW3RoaXMuZnJhbWUgPz8gMF1cblxuXHRcdFx0XHRpZiAoIXEpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEZyYW1lIG5vdCBmb3VuZDogJHt0aGlzLmZyYW1lID8/IDB9YClcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChzcHJpdGVEYXRhLnNsaWNlOSkge1xuXHRcdFx0XHRcdC8vIFRPRE86IHRpbGVcblx0XHRcdFx0XHQvLyBUT0RPOiB1c2Ugc2NhbGUgb3Igd2lkdGggLyBoZWlnaHQsIG9yIGJvdGg/XG5cdFx0XHRcdFx0Y29uc3QgeyBsZWZ0LCByaWdodCwgdG9wLCBib3R0b20gfSA9IHNwcml0ZURhdGEuc2xpY2U5XG5cdFx0XHRcdFx0Y29uc3QgdHcgPSBzcHJpdGVEYXRhLnRleC53aWR0aCAqIHEud1xuXHRcdFx0XHRcdGNvbnN0IHRoID0gc3ByaXRlRGF0YS50ZXguaGVpZ2h0ICogcS5oXG5cdFx0XHRcdFx0Y29uc3QgaXcgPSB0aGlzLndpZHRoIC0gbGVmdCAtIHJpZ2h0XG5cdFx0XHRcdFx0Y29uc3QgaWggPSB0aGlzLmhlaWdodCAtIHRvcCAtIGJvdHRvbVxuXHRcdFx0XHRcdGNvbnN0IHcxID0gbGVmdCAvIHR3XG5cdFx0XHRcdFx0Y29uc3QgdzMgPSByaWdodCAvIHR3XG5cdFx0XHRcdFx0Y29uc3QgdzIgPSAxIC0gdzEgLSB3M1xuXHRcdFx0XHRcdGNvbnN0IGgxID0gdG9wIC8gdGhcblx0XHRcdFx0XHRjb25zdCBoMyA9IGJvdHRvbSAvIHRoXG5cdFx0XHRcdFx0Y29uc3QgaDIgPSAxIC0gaDEgLSBoM1xuXHRcdFx0XHRcdGNvbnN0IHF1YWRzID0gW1xuXHRcdFx0XHRcdFx0Ly8gdXZcblx0XHRcdFx0XHRcdHF1YWQoMCwgICAgICAgMCwgICAgICAgdzEsIGgxKSxcblx0XHRcdFx0XHRcdHF1YWQodzEsICAgICAgMCwgICAgICAgdzIsIGgxKSxcblx0XHRcdFx0XHRcdHF1YWQodzEgKyB3MiwgMCwgICAgICAgdzMsIGgxKSxcblx0XHRcdFx0XHRcdHF1YWQoMCwgICAgICAgaDEsICAgICAgdzEsIGgyKSxcblx0XHRcdFx0XHRcdHF1YWQodzEsICAgICAgaDEsICAgICAgdzIsIGgyKSxcblx0XHRcdFx0XHRcdHF1YWQodzEgKyB3MiwgaDEsICAgICAgdzMsIGgyKSxcblx0XHRcdFx0XHRcdHF1YWQoMCwgICAgICAgaDEgKyBoMiwgdzEsIGgzKSxcblx0XHRcdFx0XHRcdHF1YWQodzEsICAgICAgaDEgKyBoMiwgdzIsIGgzKSxcblx0XHRcdFx0XHRcdHF1YWQodzEgKyB3MiwgaDEgKyBoMiwgdzMsIGgzKSxcblx0XHRcdFx0XHRcdC8vIHRyYW5zZm9ybVxuXHRcdFx0XHRcdFx0cXVhZCgwLCAgICAgICAgIDAsICAgICAgICBsZWZ0LCAgdG9wKSxcblx0XHRcdFx0XHRcdHF1YWQobGVmdCwgICAgICAwLCAgICAgICAgaXcsICAgIHRvcCksXG5cdFx0XHRcdFx0XHRxdWFkKGxlZnQgKyBpdywgMCwgICAgICAgIHJpZ2h0LCB0b3ApLFxuXHRcdFx0XHRcdFx0cXVhZCgwLCAgICAgICAgIHRvcCwgICAgICBsZWZ0LCAgaWgpLFxuXHRcdFx0XHRcdFx0cXVhZChsZWZ0LCAgICAgIHRvcCwgICAgICBpdywgICAgaWgpLFxuXHRcdFx0XHRcdFx0cXVhZChsZWZ0ICsgaXcsIHRvcCwgICAgICByaWdodCwgaWgpLFxuXHRcdFx0XHRcdFx0cXVhZCgwLCAgICAgICAgIHRvcCArIGloLCBsZWZ0LCAgYm90dG9tKSxcblx0XHRcdFx0XHRcdHF1YWQobGVmdCwgICAgICB0b3AgKyBpaCwgaXcsICAgIGJvdHRvbSksXG5cdFx0XHRcdFx0XHRxdWFkKGxlZnQgKyBpdywgdG9wICsgaWgsIHJpZ2h0LCBib3R0b20pLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuXHRcdFx0XHRcdFx0Y29uc3QgdXYgPSBxdWFkc1tpXVxuXHRcdFx0XHRcdFx0Y29uc3QgdHJhbnNmb3JtID0gcXVhZHNbaSArIDldXG5cdFx0XHRcdFx0XHRkcmF3VGV4dHVyZShPYmplY3QuYXNzaWduKGdldFJlbmRlclByb3BzKHRoaXMpLCB7XG5cdFx0XHRcdFx0XHRcdHBvczogdHJhbnNmb3JtLnBvcygpLFxuXHRcdFx0XHRcdFx0XHR0ZXg6IHNwcml0ZURhdGEudGV4LFxuXHRcdFx0XHRcdFx0XHRxdWFkOiBxLnNjYWxlKHV2KSxcblx0XHRcdFx0XHRcdFx0ZmxpcFg6IHRoaXMuZmxpcFgsXG5cdFx0XHRcdFx0XHRcdGZsaXBZOiB0aGlzLmZsaXBZLFxuXHRcdFx0XHRcdFx0XHR0aWxlZDogb3B0LnRpbGVkLFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogdHJhbnNmb3JtLncsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogdHJhbnNmb3JtLmgsXG5cdFx0XHRcdFx0XHR9KSlcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkcmF3VGV4dHVyZShPYmplY3QuYXNzaWduKGdldFJlbmRlclByb3BzKHRoaXMpLCB7XG5cdFx0XHRcdFx0XHR0ZXg6IHNwcml0ZURhdGEudGV4LFxuXHRcdFx0XHRcdFx0cXVhZDogcS5zY2FsZSh0aGlzLnF1YWQgPz8gbmV3IFF1YWQoMCwgMCwgMSwgMSkpLFxuXHRcdFx0XHRcdFx0ZmxpcFg6IHRoaXMuZmxpcFgsXG5cdFx0XHRcdFx0XHRmbGlwWTogdGhpcy5mbGlwWSxcblx0XHRcdFx0XHRcdHRpbGVkOiBvcHQudGlsZWQsXG5cdFx0XHRcdFx0XHR3aWR0aDogdGhpcy53aWR0aCxcblx0XHRcdFx0XHRcdGhlaWdodDogdGhpcy5oZWlnaHQsXG5cdFx0XHRcdFx0fSkpXG5cdFx0XHRcdH1cblxuXHRcdFx0fSxcblxuXHRcdFx0YWRkKHRoaXM6IEdhbWVPYmo8U3ByaXRlQ29tcD4pIHtcblxuXHRcdFx0XHRjb25zdCBzZXRTcHJpdGVEYXRhID0gKHNwcikgPT4ge1xuXG5cdFx0XHRcdFx0bGV0IHEgPSBzcHIuZnJhbWVzWzBdLmNsb25lKClcblxuXHRcdFx0XHRcdGlmIChvcHQucXVhZCkge1xuXHRcdFx0XHRcdFx0cSA9IHEuc2NhbGUob3B0LnF1YWQpXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3Qgc2NhbGUgPSBjYWxjVGV4U2NhbGUoc3ByLnRleCwgcSwgb3B0LndpZHRoLCBvcHQuaGVpZ2h0KVxuXG5cdFx0XHRcdFx0dGhpcy53aWR0aCA9IHNwci50ZXgud2lkdGggKiBxLncgKiBzY2FsZS54XG5cdFx0XHRcdFx0dGhpcy5oZWlnaHQgPSBzcHIudGV4LmhlaWdodCAqIHEuaCAqIHNjYWxlLnlcblxuXHRcdFx0XHRcdGlmIChvcHQuYW5pbSkge1xuXHRcdFx0XHRcdFx0dGhpcy5wbGF5KG9wdC5hbmltKVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNwcml0ZURhdGEgPSBzcHJcblx0XHRcdFx0XHRzcHJpdGVMb2FkZWRFdmVudC50cmlnZ2VyKHNwcml0ZURhdGEpXG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHNwciA9IHJlc29sdmVTcHJpdGUoc3JjKVxuXG5cdFx0XHRcdGlmIChzcHIpIHtcblx0XHRcdFx0XHRzcHIub25Mb2FkKHNldFNwcml0ZURhdGEpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b25Mb2FkKCgpID0+IHNldFNwcml0ZURhdGEocmVzb2x2ZVNwcml0ZShzcmMpLmRhdGEpKVxuXHRcdFx0XHR9XG5cblx0XHRcdH0sXG5cblx0XHRcdHVwZGF0ZSh0aGlzOiBHYW1lT2JqPFNwcml0ZUNvbXA+KSB7XG5cblx0XHRcdFx0aWYgKCFjdXJBbmltKSB7XG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBhbmltID0gc3ByaXRlRGF0YS5hbmltc1tjdXJBbmltLm5hbWVdXG5cblx0XHRcdFx0aWYgKHR5cGVvZiBhbmltID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdFx0dGhpcy5mcmFtZSA9IGFuaW1cblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhbmltLnNwZWVkID09PSAwKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiU3ByaXRlIGFuaW0gc3BlZWQgY2Fubm90IGJlIDBcIilcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGN1ckFuaW0udGltZXIgKz0gZHQoKSAqIHRoaXMuYW5pbVNwZWVkXG5cblx0XHRcdFx0aWYgKGN1ckFuaW0udGltZXIgPj0gKDEgLyBjdXJBbmltLnNwZWVkKSkge1xuXG5cdFx0XHRcdFx0Y3VyQW5pbS50aW1lciA9IDBcblx0XHRcdFx0XHR0aGlzLmZyYW1lICs9IGN1ckFuaW1EaXJcblxuXHRcdFx0XHRcdGlmICh0aGlzLmZyYW1lIDwgTWF0aC5taW4oYW5pbS5mcm9tLCBhbmltLnRvKSB8fFxuXHRcdFx0XHRcdFx0dGhpcy5mcmFtZSA+IE1hdGgubWF4KGFuaW0uZnJvbSwgYW5pbS50bykpIHtcblx0XHRcdFx0XHRcdGlmIChjdXJBbmltLmxvb3ApIHtcblx0XHRcdFx0XHRcdFx0aWYgKGN1ckFuaW0ucGluZ3BvbmcpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmZyYW1lIC09IGN1ckFuaW1EaXJcblx0XHRcdFx0XHRcdFx0XHRjdXJBbmltRGlyICo9IC0xXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5mcmFtZSArPSBjdXJBbmltRGlyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5mcmFtZSA9IGFuaW0uZnJvbVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmZyYW1lID0gYW5pbS50b1xuXHRcdFx0XHRcdFx0XHRjdXJBbmltLm9uRW5kKClcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9wKClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9LFxuXG5cdFx0XHRwbGF5KHRoaXM6IEdhbWVPYmo8U3ByaXRlQ29tcD4sIG5hbWU6IHN0cmluZywgb3B0OiBTcHJpdGVBbmltUGxheU9wdCA9IHt9KSB7XG5cblx0XHRcdFx0aWYgKCFzcHJpdGVEYXRhKSB7XG5cdFx0XHRcdFx0c3ByaXRlTG9hZGVkRXZlbnQuYWRkKCgpID0+IHRoaXMucGxheShuYW1lLCBvcHQpKVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgYW5pbSA9IHNwcml0ZURhdGEuYW5pbXNbbmFtZV1cblxuXHRcdFx0XHRpZiAoYW5pbSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBBbmltIG5vdCBmb3VuZDogJHtuYW1lfWApXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY3VyQW5pbSkge1xuXHRcdFx0XHRcdHRoaXMuc3RvcCgpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjdXJBbmltID0gdHlwZW9mIGFuaW0gPT09IFwibnVtYmVyXCJcblx0XHRcdFx0XHQ/IHtcblx0XHRcdFx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRcdFx0XHR0aW1lcjogMCxcblx0XHRcdFx0XHRcdGxvb3A6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cGluZ3Bvbmc6IGZhbHNlLFxuXHRcdFx0XHRcdFx0c3BlZWQ6IDAsXG5cdFx0XHRcdFx0XHRvbkVuZDogKCkgPT4ge30sXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDoge1xuXHRcdFx0XHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdFx0XHRcdHRpbWVyOiAwLFxuXHRcdFx0XHRcdFx0bG9vcDogb3B0Lmxvb3AgPz8gYW5pbS5sb29wID8/IGZhbHNlLFxuXHRcdFx0XHRcdFx0cGluZ3Bvbmc6IG9wdC5waW5ncG9uZyA/PyBhbmltLnBpbmdwb25nID8/IGZhbHNlLFxuXHRcdFx0XHRcdFx0c3BlZWQ6IG9wdC5zcGVlZCA/PyBhbmltLnNwZWVkID8/IDEwLFxuXHRcdFx0XHRcdFx0b25FbmQ6IG9wdC5vbkVuZCA/PyAoKCkgPT4ge30pLFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRjdXJBbmltRGlyID0gdHlwZW9mIGFuaW0gPT09IFwibnVtYmVyXCJcblx0XHRcdFx0XHQ/IG51bGxcblx0XHRcdFx0XHQ6IGFuaW0uZnJvbSA8IGFuaW0udG8gPyAxIDogLTFcblxuXHRcdFx0XHR0aGlzLmZyYW1lID0gdHlwZW9mIGFuaW0gPT09IFwibnVtYmVyXCJcblx0XHRcdFx0XHQ/IGFuaW1cblx0XHRcdFx0XHQ6IGFuaW0uZnJvbVxuXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihcImFuaW1TdGFydFwiLCBuYW1lKVxuXG5cdFx0XHR9LFxuXG5cdFx0XHRzdG9wKHRoaXM6IEdhbWVPYmo8U3ByaXRlQ29tcD4pIHtcblx0XHRcdFx0aWYgKCFjdXJBbmltKSB7XG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcHJldkFuaW0gPSBjdXJBbmltLm5hbWVcblx0XHRcdFx0Y3VyQW5pbSA9IG51bGxcblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiYW5pbUVuZFwiLCBwcmV2QW5pbSlcblx0XHRcdH0sXG5cblx0XHRcdG51bUZyYW1lcygpIHtcblx0XHRcdFx0cmV0dXJuIHNwcml0ZURhdGE/LmZyYW1lcy5sZW5ndGggPz8gMFxuXHRcdFx0fSxcblxuXHRcdFx0Y3VyQW5pbSgpIHtcblx0XHRcdFx0cmV0dXJuIGN1ckFuaW0/Lm5hbWVcblx0XHRcdH0sXG5cblx0XHRcdG9uQW5pbUVuZChcblx0XHRcdFx0dGhpczogR2FtZU9iajxTcHJpdGVDb21wPixcblx0XHRcdFx0YWN0aW9uOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkLFxuXHRcdFx0KTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJhbmltRW5kXCIsIGFjdGlvbilcblx0XHRcdH0sXG5cblx0XHRcdG9uQW5pbVN0YXJ0KFxuXHRcdFx0XHR0aGlzOiBHYW1lT2JqPFNwcml0ZUNvbXA+LFxuXHRcdFx0XHRhY3Rpb246IChuYW1lOiBzdHJpbmcpID0+IHZvaWQsXG5cdFx0XHQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcImFuaW1TdGFydFwiLCBhY3Rpb24pXG5cdFx0XHR9LFxuXG5cdFx0XHRyZW5kZXJBcmVhKCkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJlY3QodmVjMigwKSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG5cdFx0XHR9LFxuXG5cdFx0XHRpbnNwZWN0KCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIHNyYyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdHJldHVybiBgXCIke3NyY31cImBcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gdGV4dCh0OiBzdHJpbmcsIG9wdDogVGV4dENvbXBPcHQgPSB7fSk6IFRleHRDb21wIHtcblxuXHRcdGZ1bmN0aW9uIHVwZGF0ZShvYmo6IEdhbWVPYmo8VGV4dENvbXAgfCBhbnk+KSB7XG5cblx0XHRcdGNvbnN0IGZ0ZXh0ID0gZm9ybWF0VGV4dChPYmplY3QuYXNzaWduKGdldFJlbmRlclByb3BzKG9iaiksIHtcblx0XHRcdFx0dGV4dDogb2JqLnRleHQgKyBcIlwiLFxuXHRcdFx0XHRzaXplOiBvYmoudGV4dFNpemUsXG5cdFx0XHRcdGZvbnQ6IG9iai5mb250LFxuXHRcdFx0XHR3aWR0aDogb3B0LndpZHRoICYmIG9iai53aWR0aCxcblx0XHRcdFx0YWxpZ246IG9iai5hbGlnbixcblx0XHRcdFx0bGV0dGVyU3BhY2luZzogb2JqLmxldHRlclNwYWNpbmcsXG5cdFx0XHRcdGxpbmVTcGFjaW5nOiBvYmoubGluZVNwYWNpbmcsXG5cdFx0XHRcdC8vIFRPRE86IHNob3VsZG4ndCBydW4gd2hlbiBvYmplY3QgLyBhbmNlc3RvciBpcyBwYXVzZWRcblx0XHRcdFx0dHJhbnNmb3JtOiBvYmoudGV4dFRyYW5zZm9ybSxcblx0XHRcdFx0c3R5bGVzOiBvYmoudGV4dFN0eWxlcyxcblx0XHRcdH0pKVxuXG5cdFx0XHRpZiAoIW9wdC53aWR0aCkge1xuXHRcdFx0XHRvYmoud2lkdGggPSBmdGV4dC53aWR0aCAvIChvYmouc2NhbGU/LnggfHwgMSlcblx0XHRcdH1cblxuXHRcdFx0b2JqLmhlaWdodCA9IGZ0ZXh0LmhlaWdodCAvIChvYmouc2NhbGU/LnkgfHwgMSlcblxuXHRcdFx0cmV0dXJuIGZ0ZXh0XG5cblx0XHR9XG5cblx0XHRjb25zdCBvYmogPSB7XG5cblx0XHRcdGlkOiBcInRleHRcIixcblx0XHRcdHNldCB0ZXh0KG50KSB7XG5cdFx0XHRcdHQgPSBudFxuXHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdHVwZGF0ZSh0aGlzKVxuXHRcdFx0fSxcblx0XHRcdGdldCB0ZXh0KCkge1xuXHRcdFx0XHRyZXR1cm4gdFxuXHRcdFx0fSxcblx0XHRcdHRleHRTaXplOiBvcHQuc2l6ZSA/PyBERUZfVEVYVF9TSVpFLFxuXHRcdFx0Zm9udDogb3B0LmZvbnQsXG5cdFx0XHR3aWR0aDogb3B0LndpZHRoID8/IDAsXG5cdFx0XHRoZWlnaHQ6IDAsXG5cdFx0XHRhbGlnbjogb3B0LmFsaWduLFxuXHRcdFx0bGluZVNwYWNpbmc6IG9wdC5saW5lU3BhY2luZyxcblx0XHRcdGxldHRlclNwYWNpbmc6IG9wdC5sZXR0ZXJTcGFjaW5nLFxuXHRcdFx0dGV4dFRyYW5zZm9ybTogb3B0LnRyYW5zZm9ybSxcblx0XHRcdHRleHRTdHlsZXM6IG9wdC5zdHlsZXMsXG5cblx0XHRcdGFkZCh0aGlzOiBHYW1lT2JqPFRleHRDb21wPikge1xuXHRcdFx0XHRvbkxvYWQoKCkgPT4gdXBkYXRlKHRoaXMpKVxuXHRcdFx0fSxcblxuXHRcdFx0ZHJhdyh0aGlzOiBHYW1lT2JqPFRleHRDb21wPikge1xuXHRcdFx0XHRkcmF3Rm9ybWF0dGVkVGV4dCh1cGRhdGUodGhpcykpXG5cdFx0XHR9LFxuXG5cdFx0XHRyZW5kZXJBcmVhKCkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJlY3QodmVjMigwKSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG5cdFx0XHR9LFxuXG5cdFx0fVxuXG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdHVwZGF0ZShvYmopXG5cblx0XHRyZXR1cm4gb2JqXG5cblx0fVxuXG5cdGZ1bmN0aW9uIHBvbHlnb24ocHRzOiBWZWMyW10sIG9wdDogUG9seWdvbkNvbXBPcHQgPSB7fSk6IFBvbHlnb25Db21wIHtcblx0XHRpZihwdHMubGVuZ3RoIDwgMykgdGhyb3cgbmV3IEVycm9yKGBQb2x5Z29uJ3MgbmVlZCBtb3JlIHRoYW4gdHdvIHBvaW50cywgJHtwdHMubGVuZ3RofSBwb2ludHMgcHJvdmlkZWRgKVxuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJwb2x5Z29uXCIsXG5cdFx0XHRwdHMsXG5cdFx0XHRjb2xvcnM6IG9wdC5jb2xvcnMsXG5cdFx0XHRyYWRpdXM6IG9wdC5yYWRpdXMsXG5cdFx0XHRkcmF3KHRoaXM6IEdhbWVPYmo8UG9seWdvbkNvbXA+KSB7XG5cdFx0XHRcdGRyYXdQb2x5Z29uKE9iamVjdC5hc3NpZ24oZ2V0UmVuZGVyUHJvcHModGhpcyksIHtcblx0XHRcdFx0XHRwdHM6IHRoaXMucHRzLFxuXHRcdFx0XHRcdGNvbG9yczogdGhpcy5jb2xvcnMsXG5cdFx0XHRcdFx0cmFkaXVzOiB0aGlzLnJhZGl1cyxcblx0XHRcdFx0XHRmaWxsOiBvcHQuZmlsbCxcblx0XHRcdFx0fSkpXG5cdFx0XHR9LFxuXHRcdFx0cmVuZGVyQXJlYSh0aGlzOiBHYW1lT2JqPFBvbHlnb25Db21wPikge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFBvbHlnb24odGhpcy5wdHMpXG5cdFx0XHR9LFxuXHRcdFx0aW5zcGVjdCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucHRzLm1hcChwID0+IGBbJHtwLnh9LCR7cC55fV1gKS5qb2luKFwiLFwiKVxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiByZWN0KHc6IG51bWJlciwgaDogbnVtYmVyLCBvcHQ6IFJlY3RDb21wT3B0ID0ge30pOiBSZWN0Q29tcCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcInJlY3RcIixcblx0XHRcdHdpZHRoOiB3LFxuXHRcdFx0aGVpZ2h0OiBoLFxuXHRcdFx0cmFkaXVzOiBvcHQucmFkaXVzIHx8IDAsXG5cdFx0XHRkcmF3KHRoaXM6IEdhbWVPYmo8UmVjdENvbXA+KSB7XG5cdFx0XHRcdGRyYXdSZWN0KE9iamVjdC5hc3NpZ24oZ2V0UmVuZGVyUHJvcHModGhpcyksIHtcblx0XHRcdFx0XHR3aWR0aDogdGhpcy53aWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuXHRcdFx0XHRcdHJhZGl1czogdGhpcy5yYWRpdXMsXG5cdFx0XHRcdFx0ZmlsbDogb3B0LmZpbGwsXG5cdFx0XHRcdH0pKVxuXHRcdFx0fSxcblx0XHRcdHJlbmRlckFyZWEoKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgUmVjdCh2ZWMyKDApLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcblx0XHRcdH0sXG5cdFx0XHRpbnNwZWN0KCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7TWF0aC5jZWlsKHRoaXMud2lkdGgpfSwgJHtNYXRoLmNlaWwodGhpcy5oZWlnaHQpfWBcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gdXZxdWFkKHc6IG51bWJlciwgaDogbnVtYmVyKTogVVZRdWFkQ29tcCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcInJlY3RcIixcblx0XHRcdHdpZHRoOiB3LFxuXHRcdFx0aGVpZ2h0OiBoLFxuXHRcdFx0ZHJhdyh0aGlzOiBHYW1lT2JqPFVWUXVhZENvbXA+KSB7XG5cdFx0XHRcdGRyYXdVVlF1YWQoT2JqZWN0LmFzc2lnbihnZXRSZW5kZXJQcm9wcyh0aGlzKSwge1xuXHRcdFx0XHRcdHdpZHRoOiB0aGlzLndpZHRoLFxuXHRcdFx0XHRcdGhlaWdodDogdGhpcy5oZWlnaHQsXG5cdFx0XHRcdH0pKVxuXHRcdFx0fSxcblx0XHRcdHJlbmRlckFyZWEoKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgUmVjdCh2ZWMyKDApLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcblx0XHRcdH0sXG5cdFx0XHRpbnNwZWN0KCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7TWF0aC5jZWlsKHRoaXMud2lkdGgpfSwgJHtNYXRoLmNlaWwodGhpcy5oZWlnaHQpfWBcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2lyY2xlKHJhZGl1czogbnVtYmVyLCBvcHQ6IENpcmNsZUNvbXBPcHQgPSB7fSk6IENpcmNsZUNvbXAge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJjaXJjbGVcIixcblx0XHRcdHJhZGl1czogcmFkaXVzLFxuXHRcdFx0ZHJhdyh0aGlzOiBHYW1lT2JqPENpcmNsZUNvbXA+KSB7XG5cdFx0XHRcdGRyYXdDaXJjbGUoT2JqZWN0LmFzc2lnbihnZXRSZW5kZXJQcm9wcyh0aGlzKSwge1xuXHRcdFx0XHRcdHJhZGl1czogdGhpcy5yYWRpdXMsXG5cdFx0XHRcdFx0ZmlsbDogb3B0LmZpbGwsXG5cdFx0XHRcdH0pKVxuXHRcdFx0fSxcblx0XHRcdHJlbmRlckFyZWEodGhpczogR2FtZU9iajxBbmNob3JDb21wIHwgQ2lyY2xlQ29tcD4pIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBSZWN0KG5ldyBWZWMyKHRoaXMuYW5jaG9yID8gMCA6IC10aGlzLnJhZGl1cyksIHRoaXMucmFkaXVzICogMiwgdGhpcy5yYWRpdXMgKiAyKVxuXHRcdFx0fSxcblx0XHRcdGluc3BlY3QoKSB7XG5cdFx0XHRcdHJldHVybiBgJHtNYXRoLmNlaWwodGhpcy5yYWRpdXMpfWBcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gb3V0bGluZSh3aWR0aDogbnVtYmVyID0gMSwgY29sb3I6IENvbG9yID0gcmdiKDAsIDAsIDApKTogT3V0bGluZUNvbXAge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJvdXRsaW5lXCIsXG5cdFx0XHRvdXRsaW5lOiB7XG5cdFx0XHRcdHdpZHRoLFxuXHRcdFx0XHRjb2xvcixcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gdGltZXIoKTogVGltZXJDb21wIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwidGltZXJcIixcblx0XHRcdHdhaXQodGhpczogR2FtZU9iajxUaW1lckNvbXA+LCB0aW1lOiBudW1iZXIsIGFjdGlvbj86ICgpID0+IHZvaWQpOiBUaW1lckNvbnRyb2xsZXIge1xuXHRcdFx0XHRjb25zdCBhY3Rpb25zID0gW11cblx0XHRcdFx0aWYgKGFjdGlvbikgYWN0aW9ucy5wdXNoKGFjdGlvbilcblx0XHRcdFx0bGV0IHQgPSAwXG5cdFx0XHRcdGNvbnN0IGV2ID0gdGhpcy5vblVwZGF0ZSgoKSA9PiB7XG5cdFx0XHRcdFx0dCArPSBkdCgpXG5cdFx0XHRcdFx0aWYgKHQgPj0gdGltZSkge1xuXHRcdFx0XHRcdFx0YWN0aW9ucy5mb3JFYWNoKChmKSA9PiBmKCkpXG5cdFx0XHRcdFx0XHRldi5jYW5jZWwoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRnZXQgcGF1c2VkKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV2LnBhdXNlZFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2V0IHBhdXNlZChwKSB7XG5cdFx0XHRcdFx0XHRldi5wYXVzZWQgPSBwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYW5jZWw6IGV2LmNhbmNlbCxcblx0XHRcdFx0XHRvbkVuZChhY3Rpb24pIHtcblx0XHRcdFx0XHRcdGFjdGlvbnMucHVzaChhY3Rpb24pXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aGVuKGFjdGlvbikge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkVuZChhY3Rpb24pXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpc1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRsb29wKHQ6IG51bWJlciwgYWN0aW9uOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0bGV0IGN1clRpbWVyOiBudWxsIHwgVGltZXJDb250cm9sbGVyID0gbnVsbFxuXHRcdFx0XHRjb25zdCBuZXdBY3Rpb24gPSAoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gVE9ETzogc2hvdWxkIGYgYmUgZXhlY3V0ZSByaWdodCBhd2F5IGFzIGxvb3AoKSBpcyBjYWxsZWQ/XG5cdFx0XHRcdFx0Y3VyVGltZXIgPSB0aGlzLndhaXQodCwgbmV3QWN0aW9uKVxuXHRcdFx0XHRcdGFjdGlvbigpXG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VyVGltZXIgPSB0aGlzLndhaXQoMCwgbmV3QWN0aW9uKVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGdldCBwYXVzZWQoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY3VyVGltZXIucGF1c2VkXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZXQgcGF1c2VkKHApIHtcblx0XHRcdFx0XHRcdGN1clRpbWVyLnBhdXNlZCA9IHBcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNhbmNlbDogKCkgPT4gY3VyVGltZXIuY2FuY2VsKCksXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR0d2VlbjxWIGV4dGVuZHMgTGVycFZhbHVlPihcblx0XHRcdFx0dGhpczogR2FtZU9iajxUaW1lckNvbXA+LFxuXHRcdFx0XHRmcm9tOiBWLFxuXHRcdFx0XHR0bzogVixcblx0XHRcdFx0ZHVyYXRpb246IG51bWJlcixcblx0XHRcdFx0c2V0VmFsdWU6ICh2YWx1ZTogVikgPT4gdm9pZCxcblx0XHRcdFx0ZWFzZUZ1bmMgPSBlYXNpbmdzLmxpbmVhcixcblx0XHRcdCkge1xuXHRcdFx0XHRsZXQgY3VyVGltZSA9IDBcblx0XHRcdFx0Y29uc3Qgb25FbmRFdmVudHM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW11cblx0XHRcdFx0Y29uc3QgZXYgPSB0aGlzLm9uVXBkYXRlKCgpID0+IHtcblx0XHRcdFx0XHRjdXJUaW1lICs9IGR0KClcblx0XHRcdFx0XHRjb25zdCB0ID0gTWF0aC5taW4oY3VyVGltZSAvIGR1cmF0aW9uLCAxKVxuXHRcdFx0XHRcdHNldFZhbHVlKGxlcnAoZnJvbSwgdG8sIGVhc2VGdW5jKHQpKSlcblx0XHRcdFx0XHRpZiAodCA9PT0gMSkge1xuXHRcdFx0XHRcdFx0ZXYuY2FuY2VsKClcblx0XHRcdFx0XHRcdHNldFZhbHVlKHRvKVxuXHRcdFx0XHRcdFx0b25FbmRFdmVudHMuZm9yRWFjaCgoYWN0aW9uKSA9PiBhY3Rpb24oKSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Z2V0IHBhdXNlZCgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBldi5wYXVzZWRcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNldCBwYXVzZWQocCkge1xuXHRcdFx0XHRcdFx0ZXYucGF1c2VkID0gcFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0b25FbmQoYWN0aW9uOiAoKSA9PiB2b2lkKSB7XG5cdFx0XHRcdFx0XHRvbkVuZEV2ZW50cy5wdXNoKGFjdGlvbilcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRoZW4oYWN0aW9uOiAoKSA9PiB2b2lkKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uRW5kKGFjdGlvbilcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjYW5jZWwoKSB7XG5cdFx0XHRcdFx0XHRldi5jYW5jZWwoKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZmluaXNoKCkge1xuXHRcdFx0XHRcdFx0ZXYuY2FuY2VsKClcblx0XHRcdFx0XHRcdHNldFZhbHVlKHRvKVxuXHRcdFx0XHRcdFx0b25FbmRFdmVudHMuZm9yRWFjaCgoYWN0aW9uKSA9PiBhY3Rpb24oKSlcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH1cblx0fVxuXG5cdC8vIG1heGltdW0geSB2ZWxvY2l0eSB3aXRoIGJvZHkoKVxuXHRjb25zdCBERUZfSlVNUF9GT1JDRSA9IDY0MFxuXHRjb25zdCBNQVhfVkVMID0gNjU1MzZcblxuXHQvLyBUT0RPOiBsYW5kIG9uIHdhbGxcblx0ZnVuY3Rpb24gYm9keShvcHQ6IEJvZHlDb21wT3B0ID0ge30pOiBCb2R5Q29tcCB7XG5cblx0XHRsZXQgY3VyUGxhdGZvcm06IEdhbWVPYmo8UG9zQ29tcCB8IEFyZWFDb21wIHwgQm9keUNvbXA+IHwgbnVsbCA9IG51bGxcblx0XHRsZXQgbGFzdFBsYXRmb3JtUG9zID0gbnVsbFxuXHRcdGxldCB3YW50RmFsbCA9IGZhbHNlXG5cblx0XHRyZXR1cm4ge1xuXG5cdFx0XHRpZDogXCJib2R5XCIsXG5cdFx0XHRyZXF1aXJlOiBbIFwicG9zXCIsIFwiYXJlYVwiIF0sXG5cdFx0XHR2ZWw6IG5ldyBWZWMyKDApLFxuXHRcdFx0anVtcEZvcmNlOiBvcHQuanVtcEZvcmNlID8/IERFRl9KVU1QX0ZPUkNFLFxuXHRcdFx0Z3Jhdml0eVNjYWxlOiBvcHQuZ3Jhdml0eVNjYWxlID8/IDEsXG5cdFx0XHRpc1N0YXRpYzogb3B0LmlzU3RhdGljID8/IGZhbHNlLFxuXHRcdFx0Ly8gVE9ETzogcHJlZmVyIGRlbnNpdHkgKiBhcmVhKClcblx0XHRcdG1hc3M6IG9wdC5tYXNzID8/IDEsXG5cblx0XHRcdGFkZCh0aGlzOiBHYW1lT2JqPFBvc0NvbXAgfCBCb2R5Q29tcCB8IEFyZWFDb21wPikge1xuXG5cdFx0XHRcdGlmICh0aGlzLm1hc3MgPT09IDApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBzZXQgYm9keSBtYXNzIHRvIDBcIilcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHN0YXRpYyB2cyBzdGF0aWM6IGRvbid0IHJlc29sdmVcblx0XHRcdFx0Ly8gc3RhdGljIHZzIG5vbi1zdGF0aWM6IGFsd2F5cyByZXNvbHZlIG5vbi1zdGF0aWNcblx0XHRcdFx0Ly8gbm9uLXN0YXRpYyB2cyBub24tc3RhdGljOiByZXNvbHZlIHRoZSBmaXJzdCBvbmVcblx0XHRcdFx0dGhpcy5vbkNvbGxpZGVVcGRhdGUoKG90aGVyOiBHYW1lT2JqPFBvc0NvbXAgfCBCb2R5Q29tcD4sIGNvbCkgPT4ge1xuXG5cdFx0XHRcdFx0aWYgKCFvdGhlci5pcyhcImJvZHlcIikpIHtcblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChjb2wucmVzb2x2ZWQpIHtcblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMudHJpZ2dlcihcImJlZm9yZVBoeXNpY3NSZXNvbHZlXCIsIGNvbClcblx0XHRcdFx0XHRvdGhlci50cmlnZ2VyKFwiYmVmb3JlUGh5c2ljc1Jlc29sdmVcIiwgY29sLnJldmVyc2UoKSlcblxuXHRcdFx0XHRcdC8vIHVzZXIgY2FuIG1hcmsgJ3Jlc29sdmVkJyBpbiBiZWZvcmVQaHlzaWNzUmVzb2x2ZSB0byBzdG9wIGEgcmVzb2x1dGlvblxuXHRcdFx0XHRcdGlmIChjb2wucmVzb2x2ZWQpIHtcblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICh0aGlzLmlzU3RhdGljICYmIG90aGVyLmlzU3RhdGljKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKCF0aGlzLmlzU3RhdGljICYmICFvdGhlci5pc1N0YXRpYykge1xuXHRcdFx0XHRcdFx0Ly8gVE9ETzogdXBkYXRlIGFsbCBjaGlsZHJlbiB0cmFuc2Zvcm0/XG5cdFx0XHRcdFx0XHRjb25zdCB0bWFzcyA9IHRoaXMubWFzcyArIG90aGVyLm1hc3Ncblx0XHRcdFx0XHRcdHRoaXMucG9zID0gdGhpcy5wb3MuYWRkKGNvbC5kaXNwbGFjZW1lbnQuc2NhbGUob3RoZXIubWFzcyAvIHRtYXNzKSlcblx0XHRcdFx0XHRcdG90aGVyLnBvcyA9IG90aGVyLnBvcy5hZGQoY29sLmRpc3BsYWNlbWVudC5zY2FsZSgtdGhpcy5tYXNzIC8gdG1hc3MpKVxuXHRcdFx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gPSBjYWxjVHJhbnNmb3JtKHRoaXMpXG5cdFx0XHRcdFx0XHRvdGhlci50cmFuc2Zvcm0gPSBjYWxjVHJhbnNmb3JtKG90aGVyKVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBpZiBvbmUgaXMgc3RhdGljIGFuZCBvbiBpcyBub3QsIHJlc29sdmUgdGhlIG5vbiBzdGF0aWMgb25lXG5cdFx0XHRcdFx0XHRjb25zdCBjb2wyID0gKCF0aGlzLmlzU3RhdGljICYmIG90aGVyLmlzU3RhdGljKSA/IGNvbCA6IGNvbC5yZXZlcnNlKClcblx0XHRcdFx0XHRcdGNvbDIuc291cmNlLnBvcyA9IGNvbDIuc291cmNlLnBvcy5hZGQoY29sMi5kaXNwbGFjZW1lbnQpXG5cdFx0XHRcdFx0XHRjb2wyLnNvdXJjZS50cmFuc2Zvcm0gPSBjYWxjVHJhbnNmb3JtKGNvbDIuc291cmNlKVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbC5yZXNvbHZlZCA9IHRydWVcblx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJwaHlzaWNzUmVzb2x2ZVwiLCBjb2wpXG5cdFx0XHRcdFx0b3RoZXIudHJpZ2dlcihcInBoeXNpY3NSZXNvbHZlXCIsIGNvbC5yZXZlcnNlKCkpXG5cblx0XHRcdFx0fSlcblxuXHRcdFx0XHR0aGlzLm9uUGh5c2ljc1Jlc29sdmUoKGNvbCkgPT4ge1xuXHRcdFx0XHRcdGlmIChnYW1lLmdyYXZpdHkpIHtcblx0XHRcdFx0XHRcdGlmIChjb2wuaXNCb3R0b20oKSAmJiB0aGlzLmlzRmFsbGluZygpKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudmVsLnkgPSAwXG5cdFx0XHRcdFx0XHRcdGN1clBsYXRmb3JtID0gY29sLnRhcmdldCBhcyBHYW1lT2JqPFBvc0NvbXAgfCBCb2R5Q29tcCB8IEFyZWFDb21wPlxuXHRcdFx0XHRcdFx0XHRsYXN0UGxhdGZvcm1Qb3MgPSBjb2wudGFyZ2V0LnBvc1xuXHRcdFx0XHRcdFx0XHRpZiAod2FudEZhbGwpIHtcblx0XHRcdFx0XHRcdFx0XHR3YW50RmFsbCA9IGZhbHNlXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiZ3JvdW5kXCIsIGN1clBsYXRmb3JtKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGNvbC5pc1RvcCgpICYmIHRoaXMuaXNKdW1waW5nKCkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy52ZWwueSA9IDBcblx0XHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiaGVhZGJ1dHRcIiwgY29sLnRhcmdldClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cblx0XHRcdH0sXG5cblx0XHRcdHVwZGF0ZSh0aGlzOiBHYW1lT2JqPFBvc0NvbXAgfCBCb2R5Q29tcCB8IEFyZWFDb21wPikge1xuXG5cdFx0XHRcdGlmICghZ2FtZS5ncmF2aXR5KSB7XG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5pc1N0YXRpYykge1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHdhbnRGYWxsKSB7XG5cdFx0XHRcdFx0Y3VyUGxhdGZvcm0gPSBudWxsXG5cdFx0XHRcdFx0bGFzdFBsYXRmb3JtUG9zID0gbnVsbFxuXHRcdFx0XHRcdHRoaXMudHJpZ2dlcihcImZhbGxPZmZcIilcblx0XHRcdFx0XHR3YW50RmFsbCA9IGZhbHNlXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY3VyUGxhdGZvcm0pIHtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHQvLyBUT0RPOiB0aGlzIHByZXZlbnRzIGZyb20gZmFsbGluZyB3aGVuIG9uIGVkZ2Vcblx0XHRcdFx0XHRcdCF0aGlzLmlzQ29sbGlkaW5nKGN1clBsYXRmb3JtKVxuXHRcdFx0XHRcdFx0fHwgIWN1clBsYXRmb3JtLmV4aXN0cygpXG5cdFx0XHRcdFx0XHR8fCAhY3VyUGxhdGZvcm0uaXMoXCJib2R5XCIpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHR3YW50RmFsbCA9IHRydWVcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0XHQhY3VyUGxhdGZvcm0ucG9zLmVxKGxhc3RQbGF0Zm9ybVBvcylcblx0XHRcdFx0XHRcdFx0JiYgb3B0LnN0aWNrVG9QbGF0Zm9ybSAhPT0gZmFsc2Vcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1vdmVCeShjdXJQbGF0Zm9ybS5wb3Muc3ViKGxhc3RQbGF0Zm9ybVBvcykpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsYXN0UGxhdGZvcm1Qb3MgPSBjdXJQbGF0Zm9ybS5wb3Ncblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHByZXZWZWxZID0gdGhpcy52ZWwueVxuXHRcdFx0XHR0aGlzLnZlbC55ICs9IGdhbWUuZ3Jhdml0eSAqIHRoaXMuZ3Jhdml0eVNjYWxlICogZHQoKVxuXHRcdFx0XHR0aGlzLnZlbC55ID0gTWF0aC5taW4odGhpcy52ZWwueSwgb3B0Lm1heFZlbG9jaXR5ID8/IE1BWF9WRUwpXG5cdFx0XHRcdGlmIChwcmV2VmVsWSA8IDAgJiYgdGhpcy52ZWwueSA+PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiZmFsbFwiKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubW92ZSh0aGlzLnZlbClcblxuXHRcdFx0fSxcblxuXHRcdFx0b25QaHlzaWNzUmVzb2x2ZSh0aGlzOiBHYW1lT2JqLCBhY3Rpb24pIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJwaHlzaWNzUmVzb2x2ZVwiLCBhY3Rpb24pXG5cdFx0XHR9LFxuXG5cdFx0XHRvbkJlZm9yZVBoeXNpY3NSZXNvbHZlKHRoaXM6IEdhbWVPYmosIGFjdGlvbikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcImJlZm9yZVBoeXNpY3NSZXNvbHZlXCIsIGFjdGlvbilcblx0XHRcdH0sXG5cblx0XHRcdGN1clBsYXRmb3JtKCk6IEdhbWVPYmogfCBudWxsIHtcblx0XHRcdFx0cmV0dXJuIGN1clBsYXRmb3JtXG5cdFx0XHR9LFxuXG5cdFx0XHRpc0dyb3VuZGVkKCkge1xuXHRcdFx0XHRyZXR1cm4gY3VyUGxhdGZvcm0gIT09IG51bGxcblx0XHRcdH0sXG5cblx0XHRcdGlzRmFsbGluZygpOiBib29sZWFuIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudmVsLnkgPiAwXG5cdFx0XHR9LFxuXG5cdFx0XHRpc0p1bXBpbmcoKTogYm9vbGVhbiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnZlbC55IDwgMFxuXHRcdFx0fSxcblxuXHRcdFx0anVtcChmb3JjZTogbnVtYmVyKSB7XG5cdFx0XHRcdGN1clBsYXRmb3JtID0gbnVsbFxuXHRcdFx0XHRsYXN0UGxhdGZvcm1Qb3MgPSBudWxsXG5cdFx0XHRcdHRoaXMudmVsLnkgPSAtZm9yY2UgfHwgLXRoaXMuanVtcEZvcmNlXG5cdFx0XHR9LFxuXG5cdFx0XHRvbkdyb3VuZCh0aGlzOiBHYW1lT2JqLCBhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcImdyb3VuZFwiLCBhY3Rpb24pXG5cdFx0XHR9LFxuXG5cdFx0XHRvbkZhbGwodGhpczogR2FtZU9iaiwgYWN0aW9uOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJmYWxsXCIsIGFjdGlvbilcblx0XHRcdH0sXG5cblx0XHRcdG9uRmFsbE9mZih0aGlzOiBHYW1lT2JqLCBhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcImZhbGxPZmZcIiwgYWN0aW9uKVxuXHRcdFx0fSxcblxuXHRcdFx0b25IZWFkYnV0dCh0aGlzOiBHYW1lT2JqLCBhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcImhlYWRidXR0XCIsIGFjdGlvbilcblx0XHRcdH0sXG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRvdWJsZUp1bXAobnVtSnVtcHM6IG51bWJlciA9IDIpOiBEb3VibGVKdW1wQ29tcCB7XG5cdFx0bGV0IGp1bXBzTGVmdCA9IG51bUp1bXBzXG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcImRvdWJsZUp1bXBcIixcblx0XHRcdHJlcXVpcmU6IFsgXCJib2R5XCIgXSxcblx0XHRcdG51bUp1bXBzOiBudW1KdW1wcyxcblx0XHRcdGFkZCh0aGlzOiBHYW1lT2JqPEJvZHlDb21wIHwgRG91YmxlSnVtcENvbXA+KSB7XG5cdFx0XHRcdHRoaXMub25Hcm91bmQoKCkgPT4ge1xuXHRcdFx0XHRcdGp1bXBzTGVmdCA9IHRoaXMubnVtSnVtcHNcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRkb3VibGVKdW1wKHRoaXM6IEdhbWVPYmo8Qm9keUNvbXAgfCBEb3VibGVKdW1wQ29tcD4sIGZvcmNlPzogbnVtYmVyKSB7XG5cdFx0XHRcdGlmIChqdW1wc0xlZnQgPD0gMCkge1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChqdW1wc0xlZnQgPCB0aGlzLm51bUp1bXBzKSB7XG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiZG91YmxlSnVtcFwiKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGp1bXBzTGVmdC0tXG5cdFx0XHRcdHRoaXMuanVtcChmb3JjZSlcblx0XHRcdH0sXG5cdFx0XHRvbkRvdWJsZUp1bXAodGhpczogR2FtZU9iaiwgYWN0aW9uOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJkb3VibGVKdW1wXCIsIGFjdGlvbilcblx0XHRcdH0sXG5cdFx0XHRpbnNwZWN0KHRoaXM6IEdhbWVPYmo8Qm9keUNvbXAgfCBEb3VibGVKdW1wQ29tcD4pIHtcblx0XHRcdFx0cmV0dXJuIGAke2p1bXBzTGVmdH1gXG5cdFx0XHR9LFxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHNoYWRlcihpZDogc3RyaW5nLCB1bmlmb3JtPzogVW5pZm9ybSB8ICgoKSA9PiBVbmlmb3JtKSk6IFNoYWRlckNvbXAge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJzaGFkZXJcIixcblx0XHRcdHNoYWRlcjogaWQsXG5cdFx0XHQuLi4odHlwZW9mIHVuaWZvcm0gPT09IFwiZnVuY3Rpb25cIiA/IHtcblx0XHRcdFx0dW5pZm9ybTogdW5pZm9ybSgpLFxuXHRcdFx0XHR1cGRhdGUoKSB7XG5cdFx0XHRcdFx0dGhpcy51bmlmb3JtID0gdW5pZm9ybSgpXG5cdFx0XHRcdH0sXG5cdFx0XHR9IDoge1xuXHRcdFx0XHR1bmlmb3JtOiB1bmlmb3JtLFxuXHRcdFx0fSksXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZml4ZWQoKTogRml4ZWRDb21wIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwiZml4ZWRcIixcblx0XHRcdGZpeGVkOiB0cnVlLFxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHN0YXkoc2NlbmVzVG9TdGF5Pzogc3RyaW5nW10pOiBTdGF5Q29tcCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBcInN0YXlcIixcblx0XHRcdHN0YXk6IHRydWUsXG5cdFx0XHRzY2VuZXNUb1N0YXk6IHNjZW5lc1RvU3RheSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBoZWFsdGgoaHA6IG51bWJlciwgbWF4SFA/OiBudW1iZXIpOiBIZWFsdGhDb21wIHtcblx0XHRpZiAoaHAgPT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiaGVhbHRoKCkgcmVxdWlyZXMgdGhlIGluaXRpYWwgYW1vdW50IG9mIGhwXCIpXG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJoZWFsdGhcIixcblx0XHRcdGh1cnQodGhpczogR2FtZU9iaiwgbjogbnVtYmVyID0gMSkge1xuXHRcdFx0XHR0aGlzLnNldEhQKGhwIC0gbilcblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiaHVydFwiLCBuKVxuXHRcdFx0fSxcblx0XHRcdGhlYWwodGhpczogR2FtZU9iaiwgbjogbnVtYmVyID0gMSkge1xuXHRcdFx0XHRjb25zdCBvcmlnSFAgPSBocFxuXHRcdFx0XHR0aGlzLnNldEhQKGhwICsgbilcblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiaGVhbFwiLCBocCAtIG9yaWdIUClcblx0XHRcdH0sXG5cdFx0XHRocCgpOiBudW1iZXIge1xuXHRcdFx0XHRyZXR1cm4gaHBcblx0XHRcdH0sXG5cdFx0XHRtYXhIUCgpOiBudW1iZXIgfCBudWxsIHtcblx0XHRcdFx0cmV0dXJuIG1heEhQID8/IG51bGxcblx0XHRcdH0sXG5cdFx0XHRzZXRNYXhIUChuOiBudW1iZXIpOiB2b2lkIHtcblx0XHRcdFx0bWF4SFAgPSBuXG5cdFx0XHR9LFxuXHRcdFx0c2V0SFAodGhpczogR2FtZU9iaiwgbjogbnVtYmVyKSB7XG5cdFx0XHRcdGhwID0gbWF4SFAgPyBNYXRoLm1pbihtYXhIUCwgbikgOiBuXG5cdFx0XHRcdGlmIChocCA8PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiZGVhdGhcIilcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdG9uSHVydCh0aGlzOiBHYW1lT2JqLCBhY3Rpb246IChhbW91bnQ/OiBudW1iZXIpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcImh1cnRcIiwgYWN0aW9uKVxuXHRcdFx0fSxcblx0XHRcdG9uSGVhbCh0aGlzOiBHYW1lT2JqLCBhY3Rpb246IChhbW91bnQ/OiBudW1iZXIpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcImhlYWxcIiwgYWN0aW9uKVxuXHRcdFx0fSxcblx0XHRcdG9uRGVhdGgodGhpczogR2FtZU9iaiwgYWN0aW9uOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJkZWF0aFwiLCBhY3Rpb24pXG5cdFx0XHR9LFxuXHRcdFx0aW5zcGVjdCgpIHtcblx0XHRcdFx0cmV0dXJuIGAke2hwfWBcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbGlmZXNwYW4odGltZTogbnVtYmVyLCBvcHQ6IExpZmVzcGFuQ29tcE9wdCA9IHt9KTogRW1wdHlDb21wIHtcblx0XHRpZiAodGltZSA9PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJsaWZlc3BhbigpIHJlcXVpcmVzIHRpbWVcIilcblx0XHR9XG5cdFx0Y29uc3QgZmFkZSA9IG9wdC5mYWRlID8/IDBcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwibGlmZXNwYW5cIixcblx0XHRcdGFzeW5jIGFkZCh0aGlzOiBHYW1lT2JqPE9wYWNpdHlDb21wPikge1xuXHRcdFx0XHRhd2FpdCB3YWl0KHRpbWUpXG5cdFx0XHRcdC8vIFRPRE86IHRoaXMgc2VjcmV0aXZlbHkgcmVxdWlyZXMgb3BhY2l0eSBjb21wLCBtYWtlIG9wYWNpdHkgb24gZXZlcnkgZ2FtZSBvYmo/XG5cdFx0XHRcdGlmIChmYWRlID4gMCAmJiB0aGlzLm9wYWNpdHkpIHtcblx0XHRcdFx0XHRhd2FpdCB0d2Vlbih0aGlzLm9wYWNpdHksIDAsIGZhZGUsIChhKSA9PiB0aGlzLm9wYWNpdHkgPSBhLCBlYXNpbmdzLmxpbmVhcilcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmRlc3Ryb3koKVxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBzdGF0ZShcblx0XHRpbml0U3RhdGU6IHN0cmluZyxcblx0XHRzdGF0ZUxpc3Q/OiBzdHJpbmdbXSxcblx0XHR0cmFuc2l0aW9ucz86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdPixcblx0KTogU3RhdGVDb21wIHtcblxuXHRcdGlmICghaW5pdFN0YXRlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJzdGF0ZSgpIHJlcXVpcmVzIGFuIGluaXRpYWwgc3RhdGVcIilcblx0XHR9XG5cblx0XHRjb25zdCBldmVudHMgPSB7fVxuXG5cdFx0ZnVuY3Rpb24gaW5pdFN0YXRlRXZlbnRzKHN0YXRlOiBzdHJpbmcpIHtcblx0XHRcdGlmICghZXZlbnRzW3N0YXRlXSkge1xuXHRcdFx0XHRldmVudHNbc3RhdGVdID0ge1xuXHRcdFx0XHRcdGVudGVyOiBuZXcgRXZlbnQoKSxcblx0XHRcdFx0XHRlbmQ6IG5ldyBFdmVudCgpLFxuXHRcdFx0XHRcdHVwZGF0ZTogbmV3IEV2ZW50KCksXG5cdFx0XHRcdFx0ZHJhdzogbmV3IEV2ZW50KCksXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbihldmVudCwgc3RhdGUsIGFjdGlvbikge1xuXHRcdFx0aW5pdFN0YXRlRXZlbnRzKHN0YXRlKVxuXHRcdFx0cmV0dXJuIGV2ZW50c1tzdGF0ZV1bZXZlbnRdLmFkZChhY3Rpb24pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpZ2dlcihldmVudCwgc3RhdGUsIC4uLmFyZ3MpIHtcblx0XHRcdGluaXRTdGF0ZUV2ZW50cyhzdGF0ZSlcblx0XHRcdGV2ZW50c1tzdGF0ZV1bZXZlbnRdLnRyaWdnZXIoLi4uYXJncylcblx0XHR9XG5cblx0XHRsZXQgZGlkRmlyc3RFbnRlciA9IGZhbHNlXG5cblx0XHRyZXR1cm4ge1xuXG5cdFx0XHRpZDogXCJzdGF0ZVwiLFxuXHRcdFx0c3RhdGU6IGluaXRTdGF0ZSxcblxuXHRcdFx0ZW50ZXJTdGF0ZShzdGF0ZTogc3RyaW5nLCAuLi5hcmdzKSB7XG5cblx0XHRcdFx0ZGlkRmlyc3RFbnRlciA9IHRydWVcblxuXHRcdFx0XHRpZiAoc3RhdGVMaXN0ICYmICFzdGF0ZUxpc3QuaW5jbHVkZXMoc3RhdGUpKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBTdGF0ZSBub3QgZm91bmQ6ICR7c3RhdGV9YClcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IG9sZFN0YXRlID0gdGhpcy5zdGF0ZVxuXG5cdFx0XHRcdGlmICh0cmFuc2l0aW9ucykge1xuXG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgdGhlIHRyYW5zaXRpb24gaXMgbGVnYWwsIGlmIHRyYW5zaXRpb24gZ3JhcGggaXMgZGVmaW5lZFxuXHRcdFx0XHRcdGlmICghdHJhbnNpdGlvbnM/LltvbGRTdGF0ZV0pIHtcblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IGF2YWlsYWJsZSA9IHR5cGVvZiB0cmFuc2l0aW9uc1tvbGRTdGF0ZV0gPT09IFwic3RyaW5nXCJcblx0XHRcdFx0XHRcdD8gW3RyYW5zaXRpb25zW29sZFN0YXRlXV1cblx0XHRcdFx0XHRcdDogdHJhbnNpdGlvbnNbb2xkU3RhdGVdIGFzIHN0cmluZ1tdXG5cblx0XHRcdFx0XHRpZiAoIWF2YWlsYWJsZS5pbmNsdWRlcyhzdGF0ZSkpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHRyYW5zaXRpb24gc3RhdGUgZnJvbSBcIiR7b2xkU3RhdGV9XCIgdG8gXCIke3N0YXRlfVwiLiBBdmFpbGFibGUgdHJhbnNpdGlvbnM6ICR7YXZhaWxhYmxlLm1hcCgocykgPT4gYFwiJHtzfVwiYCkuam9pbihcIiwgXCIpfWApXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cmlnZ2VyKFwiZW5kXCIsIG9sZFN0YXRlLCAuLi5hcmdzKVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gc3RhdGVcblx0XHRcdFx0dHJpZ2dlcihcImVudGVyXCIsIHN0YXRlLCAuLi5hcmdzKVxuXHRcdFx0XHR0cmlnZ2VyKFwiZW50ZXJcIiwgYCR7b2xkU3RhdGV9IC0+ICR7c3RhdGV9YCwgLi4uYXJncylcblxuXHRcdFx0fSxcblxuXHRcdFx0b25TdGF0ZVRyYW5zaXRpb24oZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nLCBhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gb24oXCJlbnRlclwiLCBgJHtmcm9tfSAtPiAke3RvfWAsIGFjdGlvbilcblx0XHRcdH0sXG5cblx0XHRcdG9uU3RhdGVFbnRlcihzdGF0ZTogc3RyaW5nLCBhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gb24oXCJlbnRlclwiLCBzdGF0ZSwgYWN0aW9uKVxuXHRcdFx0fSxcblxuXHRcdFx0b25TdGF0ZVVwZGF0ZShzdGF0ZTogc3RyaW5nLCBhY3Rpb246ICgpID0+IHZvaWQpOiBFdmVudENvbnRyb2xsZXIge1xuXHRcdFx0XHRyZXR1cm4gb24oXCJ1cGRhdGVcIiwgc3RhdGUsIGFjdGlvbilcblx0XHRcdH0sXG5cblx0XHRcdG9uU3RhdGVEcmF3KHN0YXRlOiBzdHJpbmcsIGFjdGlvbjogKCkgPT4gdm9pZCk6IEV2ZW50Q29udHJvbGxlciB7XG5cdFx0XHRcdHJldHVybiBvbihcImRyYXdcIiwgc3RhdGUsIGFjdGlvbilcblx0XHRcdH0sXG5cblx0XHRcdG9uU3RhdGVFbmQoc3RhdGU6IHN0cmluZywgYWN0aW9uOiAoKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRcdFx0cmV0dXJuIG9uKFwiZW5kXCIsIHN0YXRlLCBhY3Rpb24pXG5cdFx0XHR9LFxuXG5cdFx0XHR1cGRhdGUoKSB7XG5cdFx0XHRcdC8vIGV4ZWN1dGUgdGhlIGVudGVyIGV2ZW50IGZvciBpbml0U3RhdGVcblx0XHRcdFx0aWYgKCFkaWRGaXJzdEVudGVyKSB7XG5cdFx0XHRcdFx0dHJpZ2dlcihcImVudGVyXCIsIGluaXRTdGF0ZSlcblx0XHRcdFx0XHRkaWRGaXJzdEVudGVyID0gdHJ1ZVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRyaWdnZXIoXCJ1cGRhdGVcIiwgdGhpcy5zdGF0ZSlcblx0XHRcdH0sXG5cblx0XHRcdGRyYXcoKSB7XG5cdFx0XHRcdHRyaWdnZXIoXCJkcmF3XCIsIHRoaXMuc3RhdGUpXG5cdFx0XHR9LFxuXG5cdFx0XHRpbnNwZWN0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZVxuXHRcdFx0fSxcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gZmFkZUluKHRpbWU6IG51bWJlciA9IDEpOiBDb21wIHtcblx0XHRsZXQgdCA9IDBcblx0XHRsZXQgZG9uZSA9IGZhbHNlXG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlcXVpcmU6IFsgXCJvcGFjaXR5XCIgXSxcblx0XHRcdGFkZCh0aGlzOiBHYW1lT2JqPE9wYWNpdHlDb21wPikge1xuXHRcdFx0XHR0aGlzLm9wYWNpdHkgPSAwXG5cdFx0XHR9LFxuXHRcdFx0dXBkYXRlKHRoaXM6IEdhbWVPYmo8T3BhY2l0eUNvbXA+KSB7XG5cdFx0XHRcdGlmIChkb25lKSByZXR1cm5cblx0XHRcdFx0dCArPSBkdCgpXG5cdFx0XHRcdHRoaXMub3BhY2l0eSA9IG1hcCh0LCAwLCB0aW1lLCAwLCAxKVxuXHRcdFx0XHRpZiAodCA+PSB0aW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5vcGFjaXR5ID0gMVxuXHRcdFx0XHRcdGRvbmUgPSB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbWFzayhtOiBNYXNrID0gXCJpbnRlcnNlY3RcIik6IE1hc2tDb21wIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IFwibWFza1wiLFxuXHRcdFx0bWFzazogbSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3b24oYzogRnJhbWVCdWZmZXIpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWRkKHRoaXM6IEdhbWVPYmopIHtcblx0XHRcdFx0dGhpcy5jYW52YXMgPSBjXG5cdFx0XHR9LFxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTG9hZChjYjogKCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdGlmIChhc3NldHMubG9hZGVkKSB7XG5cdFx0XHRjYigpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGdhbWUuZXZlbnRzLm9uKFwibG9hZFwiLCBjYilcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBzY2VuZShpZDogU2NlbmVOYW1lLCBkZWY6IFNjZW5lRGVmKSB7XG5cdFx0Z2FtZS5zY2VuZXNbaWRdID0gZGVmXG5cdH1cblxuXHRmdW5jdGlvbiBnbyhuYW1lOiBTY2VuZU5hbWUsIC4uLmFyZ3MpIHtcblxuXHRcdGlmICghZ2FtZS5zY2VuZXNbbmFtZV0pIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgU2NlbmUgbm90IGZvdW5kOiAke25hbWV9YClcblx0XHR9XG5cblx0XHRnYW1lLmV2ZW50cy5vbk9uY2UoXCJmcmFtZUVuZFwiLCAoKSA9PiB7XG5cblx0XHRcdGdhbWUuZXZlbnRzLnRyaWdnZXIoXCJzY2VuZUxlYXZlXCIsIG5hbWUpXG5cdFx0XHRhcHAuZXZlbnRzLmNsZWFyKClcblx0XHRcdGdhbWUuZXZlbnRzLmNsZWFyKClcblx0XHRcdGdhbWUub2JqRXZlbnRzLmNsZWFyKClcblxuXHRcdFx0O1suLi5nYW1lLnJvb3QuY2hpbGRyZW5dLmZvckVhY2goKG9iaikgPT4ge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0IW9iai5zdGF5XG5cdFx0XHRcdFx0fHwgKG9iai5zY2VuZXNUb1N0YXkgJiYgIW9iai5zY2VuZXNUb1N0YXkuaW5jbHVkZXMobmFtZSkpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGdhbWUucm9vdC5yZW1vdmUob2JqKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXG5cdFx0XHRnYW1lLnJvb3QuY2xlYXJFdmVudHMoKVxuXHRcdFx0aW5pdEV2ZW50cygpXG5cblx0XHRcdC8vIGNhbVxuXHRcdFx0Z2FtZS5jYW0gPSB7XG5cdFx0XHRcdHBvczogbnVsbCxcblx0XHRcdFx0c2NhbGU6IHZlYzIoMSksXG5cdFx0XHRcdGFuZ2xlOiAwLFxuXHRcdFx0XHRzaGFrZTogMCxcblx0XHRcdFx0dHJhbnNmb3JtOiBuZXcgTWF0NCgpLFxuXHRcdFx0fVxuXG5cdFx0XHRnYW1lLnNjZW5lc1tuYW1lXSguLi5hcmdzKVxuXG5cdFx0fSlcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25TY2VuZUxlYXZlKGFjdGlvbjogKG5ld1NjZW5lPzogc3RyaW5nKSA9PiB2b2lkKTogRXZlbnRDb250cm9sbGVyIHtcblx0XHRyZXR1cm4gZ2FtZS5ldmVudHMub24oXCJzY2VuZUxlYXZlXCIsIGFjdGlvbilcblx0fVxuXG5cdGZ1bmN0aW9uIGdldERhdGE8VD4oa2V5OiBzdHJpbmcsIGRlZj86IFQpOiBUIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZVtrZXldKVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0aWYgKGRlZikge1xuXHRcdFx0XHRzZXREYXRhKGtleSwgZGVmKVxuXHRcdFx0XHRyZXR1cm4gZGVmXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHNldERhdGEoa2V5OiBzdHJpbmcsIGRhdGE6IGFueSkge1xuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Vba2V5XSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG5cdH1cblxuXHRmdW5jdGlvbiBwbHVnPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PihwbHVnaW46IEthYm9vbVBsdWdpbjxUPiwgLi4uYXJnczogYW55KTogS2Fib29tQ3R4ICYgVCB7XG5cdFx0Y29uc3QgZnVuY3MgPSBwbHVnaW4oY3R4KVxuXHRcdGxldCBmdW5jc09iajogVFxuXHRcdGlmICh0eXBlb2YgZnVuY3MgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0Y29uc3QgcGx1Z1dpdGhPcHRpb25zID0gZnVuY3MoLi4uYXJncylcblx0XHRcdGZ1bmNzT2JqID0gcGx1Z1dpdGhPcHRpb25zKGN0eClcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRmdW5jc09iaiA9IGZ1bmNzXG5cdFx0fVxuXHRcdGZvciAoY29uc3QgayBpbiBmdW5jc09iaikge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0Y3R4W2tdID0gZnVuY3NPYmpba11cblx0XHRcdGlmIChnb3B0Lmdsb2JhbCAhPT0gZmFsc2UpIHtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHR3aW5kb3dba10gPSBmdW5jc09ialtrXVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY3R4IGFzIEthYm9vbUN0eCAmIFRcblx0fVxuXG5cdGZ1bmN0aW9uIGNlbnRlcigpOiBWZWMyIHtcblx0XHRyZXR1cm4gdmVjMih3aWR0aCgpIC8gMiwgaGVpZ2h0KCkgLyAyKVxuXHR9XG5cblx0ZW51bSBFZGdlTWFzayB7XG5cdFx0Tm9uZSA9IDAsXG5cdFx0TGVmdCA9IDEsXG5cdFx0VG9wID0gMixcblx0XHRMZWZ0VG9wID0gMyxcblx0XHRSaWdodCA9IDQsXG5cdFx0SG9yaXpvbnRhbCA9IDUsXG5cdFx0UmlnaHRUb3AgPSA2LFxuXHRcdEhvcml6b250YWxUb3AgPSA3LFxuXHRcdEJvdHRvbSA9IDgsXG5cdFx0TGVmdEJvdHRvbSA9IDksXG5cdFx0VmVydGljYWwgPSAxMCxcblx0XHRMZWZ0VmVydGljYWwgPSAxMSxcblx0XHRSaWdodEJvdHRvbSA9IDEyLFxuXHRcdEhvcml6b250YWxCb3R0b20gPSAxMyxcblx0XHRSaWdodFZlcnRpY2FsID0gMTQsXG5cdFx0QWxsID0gMTUsXG5cdH1cblxuXHRmdW5jdGlvbiB0aWxlKG9wdHM6IFRpbGVDb21wT3B0ID0ge30pOiBUaWxlQ29tcCB7XG5cblx0XHRsZXQgdGlsZVBvcyA9IHZlYzIoMClcblx0XHRsZXQgaXNPYnN0YWNsZSA9IG9wdHMuaXNPYnN0YWNsZSA/PyBmYWxzZVxuXHRcdGxldCBjb3N0ID0gb3B0cy5jb3N0ID8/IDBcblx0XHRsZXQgZWRnZXMgPSBvcHRzLmVkZ2VzID8/IFtdXG5cblx0XHRjb25zdCBnZXRFZGdlTWFzayA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGxvb3B1cCA9IHtcblx0XHRcdFx0XCJsZWZ0XCI6IEVkZ2VNYXNrLkxlZnQsXG5cdFx0XHRcdFwidG9wXCI6IEVkZ2VNYXNrLlRvcCxcblx0XHRcdFx0XCJyaWdodFwiOiBFZGdlTWFzay5SaWdodCxcblx0XHRcdFx0XCJib3R0b21cIjogRWRnZU1hc2suQm90dG9tLFxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGVkZ2VzLm1hcChzID0+IGxvb3B1cFtzXSB8fCAwKS5yZWR1Y2UoKG1hc2ssIGRpcikgPT4gbWFzayB8IGRpciwgMClcblx0XHR9XG5cblx0XHRsZXQgZWRnZU1hc2sgPSBnZXRFZGdlTWFzaygpXG5cblx0XHRyZXR1cm4ge1xuXG5cdFx0XHRpZDogXCJ0aWxlXCIsXG5cdFx0XHR0aWxlUG9zT2Zmc2V0OiBvcHRzLm9mZnNldCA/PyB2ZWMyKDApLFxuXG5cdFx0XHRzZXQgdGlsZVBvcyhwOiBWZWMyKSB7XG5cdFx0XHRcdGNvbnN0IGxldmVsID0gdGhpcy5nZXRMZXZlbCgpXG5cdFx0XHRcdHRpbGVQb3MgPSBwLmNsb25lKClcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLnBvcyA9IHZlYzIoXG5cdFx0XHRcdFx0dGhpcy50aWxlUG9zLnggKiBsZXZlbC50aWxlV2lkdGgoKSxcblx0XHRcdFx0XHR0aGlzLnRpbGVQb3MueSAqIGxldmVsLnRpbGVIZWlnaHQoKSxcblx0XHRcdFx0KS5hZGQodGhpcy50aWxlUG9zT2Zmc2V0KVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IHRpbGVQb3MoKSB7XG5cdFx0XHRcdHJldHVybiB0aWxlUG9zXG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQgaXNPYnN0YWNsZShpczogYm9vbGVhbikge1xuXHRcdFx0XHRpZiAoaXNPYnN0YWNsZSA9PT0gaXMpIHJldHVyblxuXHRcdFx0XHRpc09ic3RhY2xlID0gaXNcblx0XHRcdFx0dGhpcy5nZXRMZXZlbCgpLmludmFsaWRhdGVOYXZpZ2F0aW9uTWFwKClcblx0XHRcdH0sXG5cblx0XHRcdGdldCBpc09ic3RhY2xlKCkge1xuXHRcdFx0XHRyZXR1cm4gaXNPYnN0YWNsZVxuXHRcdFx0fSxcblxuXHRcdFx0c2V0IGNvc3QobjogbnVtYmVyKSB7XG5cdFx0XHRcdGlmIChjb3N0ID09PSBuKSByZXR1cm5cblx0XHRcdFx0Y29zdCA9IG5cblx0XHRcdFx0dGhpcy5nZXRMZXZlbCgpLmludmFsaWRhdGVOYXZpZ2F0aW9uTWFwKClcblx0XHRcdH0sXG5cblx0XHRcdGdldCBjb3N0KCkge1xuXHRcdFx0XHRyZXR1cm4gY29zdFxuXHRcdFx0fSxcblxuXHRcdFx0c2V0IGVkZ2VzKGU6IEVkZ2VbXSkge1xuXHRcdFx0XHRlZGdlcyA9IGVcblx0XHRcdFx0ZWRnZU1hc2sgPSBnZXRFZGdlTWFzaygpXG5cdFx0XHRcdHRoaXMuZ2V0TGV2ZWwoKS5pbnZhbGlkYXRlTmF2aWdhdGlvbk1hcCgpXG5cdFx0XHR9LFxuXG5cdFx0XHRnZXQgZWRnZXMoKSB7XG5cdFx0XHRcdHJldHVybiBlZGdlc1xuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IGVkZ2VNYXNrKCkge1xuXHRcdFx0XHRyZXR1cm4gZWRnZU1hc2tcblx0XHRcdH0sXG5cblx0XHRcdGdldExldmVsKHRoaXM6IEdhbWVPYmopIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGFyZW50IGFzIEdhbWVPYmo8TGV2ZWxDb21wPlxuXHRcdFx0fSxcblxuXHRcdFx0bW92ZUxlZnQoKSB7XG5cdFx0XHRcdHRoaXMudGlsZVBvcyA9IHRoaXMudGlsZVBvcy5hZGQodmVjMigtMSwgMCkpXG5cdFx0XHR9LFxuXG5cdFx0XHRtb3ZlUmlnaHQoKSB7XG5cdFx0XHRcdHRoaXMudGlsZVBvcyA9IHRoaXMudGlsZVBvcy5hZGQodmVjMigxLCAwKSlcblx0XHRcdH0sXG5cblx0XHRcdG1vdmVVcCgpIHtcblx0XHRcdFx0dGhpcy50aWxlUG9zID0gdGhpcy50aWxlUG9zLmFkZCh2ZWMyKDAsIC0xKSlcblx0XHRcdH0sXG5cblx0XHRcdG1vdmVEb3duKCkge1xuXHRcdFx0XHR0aGlzLnRpbGVQb3MgPSB0aGlzLnRpbGVQb3MuYWRkKHZlYzIoMCwgMSkpXG5cdFx0XHR9LFxuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBhZGRMZXZlbChtYXA6IHN0cmluZ1tdLCBvcHQ6IExldmVsT3B0KTogR2FtZU9iajxQb3NDb21wIHwgTGV2ZWxDb21wPiB7XG5cblx0XHRpZiAoIW9wdC50aWxlV2lkdGggfHwgIW9wdC50aWxlSGVpZ2h0KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IHByb3ZpZGUgdGlsZVdpZHRoIGFuZCB0aWxlSGVpZ2h0LlwiKVxuXHRcdH1cblxuXHRcdC8vIFRPRE86IGN1c3RvbSBwYXJlbnRcblx0XHRjb25zdCBsZXZlbCA9IGFkZChbXG5cdFx0XHRwb3Mob3B0LnBvcyA/PyB2ZWMyKDApKSxcblx0XHRdKSBhcyBHYW1lT2JqPFBvc0NvbXAgfCBMZXZlbENvbXA+XG5cblx0XHRjb25zdCBudW1Sb3dzID0gbWFwLmxlbmd0aFxuXHRcdGxldCBudW1Db2x1bW5zID0gMFxuXG5cdFx0Ly8gVGhlIHNwYXRpYWwgbWFwIGtlZXBzIHRyYWNrIG9mIHRoZSBvYmplY3RzIGF0IGVhY2ggbG9jYXRpb25cblx0XHRsZXQgc3BhdGlhbE1hcDogR2FtZU9ialtdW10gfCBudWxsID0gbnVsbFxuXHRcdGxldCBjb3N0TWFwOiBudW1iZXJbXSB8IG51bGwgPSBudWxsXG5cdFx0bGV0IGVkZ2VNYXA6IG51bWJlcltdIHwgbnVsbCA9IG51bGxcblx0XHRsZXQgY29ubmVjdGl2aXR5TWFwOiBudW1iZXJbXSB8IG51bGwgPSBudWxsXG5cblx0XHRjb25zdCB0aWxlMkhhc2ggPSAodGlsZVBvczogVmVjMikgPT4gdGlsZVBvcy54ICsgdGlsZVBvcy55ICogbnVtQ29sdW1uc1xuXHRcdGNvbnN0IGhhc2gyVGlsZSA9IChoYXNoOiBudW1iZXIpID0+IHZlYzIoXG5cdFx0XHRNYXRoLmZsb29yKGhhc2ggJSBudW1Db2x1bW5zKSxcblx0XHRcdE1hdGguZmxvb3IoaGFzaCAvIG51bUNvbHVtbnMpLFxuXHRcdClcblxuXHRcdGNvbnN0IGNyZWF0ZVNwYXRpYWxNYXAgPSAoKSA9PiB7XG5cdFx0XHRzcGF0aWFsTWFwID0gW11cblx0XHRcdGZvciAoY29uc3QgY2hpbGQgb2YgbGV2ZWwuY2hpbGRyZW4pIHtcblx0XHRcdFx0aW5zZXJ0SW50b1NwYXRpYWxNYXAoY2hpbGQpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5zZXJ0SW50b1NwYXRpYWxNYXAgPSAob2JqOiBHYW1lT2JqKSA9PiB7XG5cdFx0XHRjb25zdCBpID0gdGlsZTJIYXNoKG9iai50aWxlUG9zKVxuXHRcdFx0aWYgKHNwYXRpYWxNYXBbaV0pIHtcblx0XHRcdFx0c3BhdGlhbE1hcFtpXS5wdXNoKG9iailcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNwYXRpYWxNYXBbaV0gPSBbb2JqXVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IHJlbW92ZUZyb21TcGF0aWFsTWFwID0gKG9iajogR2FtZU9iaikgPT4ge1xuXHRcdFx0Y29uc3QgaSA9IHRpbGUySGFzaChvYmoudGlsZVBvcylcblx0XHRcdGlmIChzcGF0aWFsTWFwW2ldKSB7XG5cdFx0XHRcdGNvbnN0IGluZGV4ID0gc3BhdGlhbE1hcFtpXS5pbmRleE9mKG9iailcblx0XHRcdFx0aWYgKGluZGV4ID49IDApIHtcblx0XHRcdFx0XHRzcGF0aWFsTWFwW2ldLnNwbGljZShpbmRleCwgMSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IHVwZGF0ZVNwYXRpYWxNYXAgPSAoKSA9PiB7XG5cdFx0XHRsZXQgc3BhdGlhbE1hcENoYW5nZWQgPSBmYWxzZVxuXHRcdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBsZXZlbC5jaGlsZHJlbikge1xuXHRcdFx0XHRjb25zdCB0aWxlUG9zID0gbGV2ZWwucG9zMlRpbGUoY2hpbGQucG9zKVxuXHRcdFx0XHRpZiAoY2hpbGQudGlsZVBvcy54ICE9IHRpbGVQb3MueCB8fCBjaGlsZC50aWxlUG9zLnkgIT0gdGlsZVBvcy55KSB7XG5cdFx0XHRcdFx0c3BhdGlhbE1hcENoYW5nZWQgPSB0cnVlXG5cdFx0XHRcdFx0cmVtb3ZlRnJvbVNwYXRpYWxNYXAoY2hpbGQpXG5cdFx0XHRcdFx0Y2hpbGQudGlsZVBvcy54ID0gdGlsZVBvcy54XG5cdFx0XHRcdFx0Y2hpbGQudGlsZVBvcy55ID0gdGlsZVBvcy55XG5cdFx0XHRcdFx0aW5zZXJ0SW50b1NwYXRpYWxNYXAoY2hpbGQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChzcGF0aWFsTWFwQ2hhbmdlZCkge1xuXHRcdFx0XHRsZXZlbC50cmlnZ2VyKFwic3BhdGlhbF9tYXBfY2hhbmdlZFwiKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFRoZSBvYnN0YWNsZSBtYXAgdGVsbHMgd2hpY2ggdGlsZXMgYXJlIGFjY2Vzc2libGVcblx0XHQvLyBDb3N0OiBhY2Nlc3NpYmxlIHdpdGggY29zdFxuXHRcdC8vIEluZmluaXRlOiBpbmFjY2Vzc2libGVcblx0XHRjb25zdCBjcmVhdGVDb3N0TWFwID0gKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc3BhdGlhbE1hcCA9IGxldmVsLmdldFNwYXRpYWxNYXAoKVxuXHRcdFx0Y29uc3Qgc2l6ZSA9IGxldmVsLm51bVJvd3MoKSAqIGxldmVsLm51bUNvbHVtbnMoKVxuXHRcdFx0aWYgKCFjb3N0TWFwKSB7XG5cdFx0XHRcdGNvc3RNYXAgPSBuZXcgQXJyYXk8bnVtYmVyPihzaXplKVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvc3RNYXAubGVuZ3RoID0gc2l6ZVxuXHRcdFx0fVxuXHRcdFx0Y29zdE1hcC5maWxsKDEsIDAsIHNpemUpXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNwYXRpYWxNYXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb2JqZWN0cyA9IHNwYXRpYWxNYXBbaV1cblx0XHRcdFx0aWYgKG9iamVjdHMpIHtcblx0XHRcdFx0XHRsZXQgY29zdCA9IDBcblx0XHRcdFx0XHRmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XG5cdFx0XHRcdFx0XHRpZiAob2JqLmlzT2JzdGFjbGUpIHtcblx0XHRcdFx0XHRcdFx0Y29zdCA9IEluZmluaXR5XG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb3N0ICs9IG9iai5jb3N0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvc3RNYXBbaV0gPSBjb3N0IHx8IDFcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFRoZSBlZGdlIG1hcCB0ZWxscyB3aGljaCBlZGdlcyBiZXR3ZWVuIG5vZGVzIGFyZSB3YWxrYWJsZVxuXHRcdGNvbnN0IGNyZWF0ZUVkZ2VNYXAgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBzcGF0aWFsTWFwID0gbGV2ZWwuZ2V0U3BhdGlhbE1hcCgpXG5cdFx0XHRjb25zdCBzaXplID0gbGV2ZWwubnVtUm93cygpICogbGV2ZWwubnVtQ29sdW1ucygpXG5cdFx0XHRpZiAoIWVkZ2VNYXApIHtcblx0XHRcdFx0ZWRnZU1hcCA9IG5ldyBBcnJheTxudW1iZXI+KHNpemUpXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0ZWRnZU1hcC5sZW5ndGggPSBzaXplXG5cdFx0XHR9XG5cdFx0XHRlZGdlTWFwLmZpbGwoRWRnZU1hc2suQWxsLCAwLCBzaXplKVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzcGF0aWFsTWFwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG9iamVjdHMgPSBzcGF0aWFsTWFwW2ldXG5cdFx0XHRcdGlmIChvYmplY3RzKSB7XG5cdFx0XHRcdFx0Y29uc3QgbGVuID0gb2JqZWN0cy5sZW5ndGhcblx0XHRcdFx0XHRsZXQgbWFzayA9IEVkZ2VNYXNrLkFsbFxuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbGVuOyBqKyspIHtcblx0XHRcdFx0XHRcdG1hc2sgfD0gb2JqZWN0c1tqXS5lZGdlTWFza1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlZGdlTWFwW2ldID0gbWFza1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIGNvbm5lY3Rpdml0eSBtYXAgaXMgdXNlZCB0byBzZWUgd2hldGhlciB0d28gbG9jYXRpb25zIGFyZSBjb25uZWN0ZWRcblx0XHQvLyAtMTogaW5hY2Nlc2libGUgbjogY29ubmVjdGl2aXR5IGdyb3VwXG5cdFx0Y29uc3QgY3JlYXRlQ29ubmVjdGl2aXR5TWFwID0gKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2l6ZSA9IGxldmVsLm51bVJvd3MoKSAqIGxldmVsLm51bUNvbHVtbnMoKVxuXHRcdFx0Y29uc3QgdHJhdmVyc2UgPSAoaTogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGZyb250aWVyOiBudW1iZXJbXSA9IFtdXG5cdFx0XHRcdGZyb250aWVyLnB1c2goaSlcblx0XHRcdFx0d2hpbGUgKGZyb250aWVyLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjb25zdCBpID0gZnJvbnRpZXIucG9wKClcblx0XHRcdFx0XHRnZXROZWlnaGJvdXJzKGkpLmZvckVhY2goKGkpID0+IHtcblx0XHRcdFx0XHRcdGlmIChjb25uZWN0aXZpdHlNYXBbaV0gPCAwKSB7XG5cdFx0XHRcdFx0XHRcdGNvbm5lY3Rpdml0eU1hcFtpXSA9IGluZGV4XG5cdFx0XHRcdFx0XHRcdGZyb250aWVyLnB1c2goaSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNvbm5lY3Rpdml0eU1hcCkge1xuXHRcdFx0XHRjb25uZWN0aXZpdHlNYXAgPSBuZXcgQXJyYXk8bnVtYmVyPihzaXplKVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbm5lY3Rpdml0eU1hcC5sZW5ndGggPSBzaXplXG5cdFx0XHR9XG5cdFx0XHRjb25uZWN0aXZpdHlNYXAuZmlsbCgtMSwgMCwgc2l6ZSlcblx0XHRcdGxldCBpbmRleCA9IDBcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29zdE1hcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoY29ubmVjdGl2aXR5TWFwW2ldID49IDApIHsgaW5kZXgrKzsgY29udGludWUgfVxuXHRcdFx0XHR0cmF2ZXJzZShpLCBpbmRleClcblx0XHRcdFx0aW5kZXgrK1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGdldENvc3QgPSAobm9kZTogbnVtYmVyLCBuZWlnaGJvdXI6IG51bWJlcikgPT4ge1xuXHRcdFx0Ly8gQ29zdCBvZiBkZXN0aW5hdGlvbiB0aWxlXG5cdFx0XHRyZXR1cm4gY29zdE1hcFtuZWlnaGJvdXJdXG5cdFx0fVxuXG5cdFx0Y29uc3QgZ2V0SGV1cmlzdGljID0gKG5vZGU6IG51bWJlciwgZ29hbDogbnVtYmVyKSA9PiB7XG5cdFx0XHQvLyBFdWNsaWRpYW4gZGlzdGFuY2UgdG8gdGFyZ2V0XG5cdFx0XHRjb25zdCBwMSA9IGhhc2gyVGlsZShub2RlKVxuXHRcdFx0Y29uc3QgcDIgPSBoYXNoMlRpbGUoZ29hbClcblx0XHRcdHJldHVybiBwMS5kaXN0KHAyKVxuXHRcdH1cblxuXHRcdGNvbnN0IGdldE5laWdoYm91cnMgPSAobm9kZTogbnVtYmVyLCBkaWFnb25hbHM/OiBib29sZWFuKSA9PiB7XG5cdFx0XHRjb25zdCBuID0gW11cblx0XHRcdGNvbnN0IHggPSBNYXRoLmZsb29yKG5vZGUgJSBudW1Db2x1bW5zKVxuXHRcdFx0Y29uc3QgbGVmdCA9IHggPiAwICYmXG5cdFx0XHRcdChlZGdlTWFwW25vZGVdICYgRWRnZU1hc2suTGVmdCkgJiZcblx0XHRcdFx0Y29zdE1hcFtub2RlIC0gMV0gIT09IEluZmluaXR5XG5cdFx0XHRjb25zdCB0b3AgPSBub2RlID49IG51bUNvbHVtbnMgJiZcblx0XHRcdFx0KGVkZ2VNYXBbbm9kZV0gJiBFZGdlTWFzay5Ub3ApICYmXG5cdFx0XHRcdGNvc3RNYXBbbm9kZSAtIG51bUNvbHVtbnNdICE9PSBJbmZpbml0eVxuXHRcdFx0Y29uc3QgcmlnaHQgPSB4IDwgbnVtQ29sdW1ucyAtIDEgJiZcblx0XHRcdFx0KGVkZ2VNYXBbbm9kZV0gJiBFZGdlTWFzay5SaWdodCkgJiZcblx0XHRcdFx0Y29zdE1hcFtub2RlICsgMV0gIT09IEluZmluaXR5XG5cdFx0XHRjb25zdCBib3R0b20gPSBub2RlIDwgbnVtQ29sdW1ucyAqIG51bVJvd3MgLSBudW1Db2x1bW5zIC0gMSAmJlxuXHRcdFx0XHQoZWRnZU1hcFtub2RlXSAmIEVkZ2VNYXNrLkJvdHRvbSkgJiZcblx0XHRcdFx0Y29zdE1hcFtub2RlICsgbnVtQ29sdW1uc10gIT09IEluZmluaXR5XG5cdFx0XHRpZiAoZGlhZ29uYWxzKSB7XG5cdFx0XHRcdGlmIChsZWZ0KSB7XG5cdFx0XHRcdFx0aWYgKHRvcCkgeyBuLnB1c2gobm9kZSAtIG51bUNvbHVtbnMgLSAxKSB9XG5cdFx0XHRcdFx0bi5wdXNoKG5vZGUgLSAxKVxuXHRcdFx0XHRcdGlmIChib3R0b20pIHsgbi5wdXNoKG5vZGUgKyBudW1Db2x1bW5zIC0gMSkgfVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0b3ApIHtcblx0XHRcdFx0XHRuLnB1c2gobm9kZSAtIG51bUNvbHVtbnMpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJpZ2h0KSB7XG5cdFx0XHRcdFx0aWYgKHRvcCkgeyBuLnB1c2gobm9kZSAtIG51bUNvbHVtbnMgKyAxKSB9XG5cdFx0XHRcdFx0bi5wdXNoKG5vZGUgKyAxKVxuXHRcdFx0XHRcdGlmIChib3R0b20pIHsgbi5wdXNoKG5vZGUgKyBudW1Db2x1bW5zICsgMSkgfVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChib3R0b20pIHtcblx0XHRcdFx0XHRuLnB1c2gobm9kZSArIG51bUNvbHVtbnMpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChsZWZ0KSB7XG5cdFx0XHRcdFx0bi5wdXNoKG5vZGUgLSAxKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0b3ApIHtcblx0XHRcdFx0XHRuLnB1c2gobm9kZSAtIG51bUNvbHVtbnMpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJpZ2h0KSB7XG5cdFx0XHRcdFx0bi5wdXNoKG5vZGUgKyAxKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChib3R0b20pIHtcblx0XHRcdFx0XHRuLnB1c2gobm9kZSArIG51bUNvbHVtbnMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBuXG5cdFx0fVxuXG5cdFx0Y29uc3QgbGV2ZWxDb21wOiBMZXZlbENvbXAgPSB7XG5cblx0XHRcdGlkOiBcImxldmVsXCIsXG5cblx0XHRcdHRpbGVXaWR0aCgpIHtcblx0XHRcdFx0cmV0dXJuIG9wdC50aWxlV2lkdGhcblx0XHRcdH0sXG5cblx0XHRcdHRpbGVIZWlnaHQoKSB7XG5cdFx0XHRcdHJldHVybiBvcHQudGlsZUhlaWdodFxuXHRcdFx0fSxcblxuXHRcdFx0c3Bhd24odGhpczogR2FtZU9iajxMZXZlbENvbXA+LCBrZXk6IHN0cmluZyB8IENvbXBMaXN0PGFueT4sIC4uLmFyZ3M6IFZlYzJBcmdzKTogR2FtZU9iaiB8IG51bGwge1xuXG5cdFx0XHRcdGNvbnN0IHAgPSB2ZWMyKC4uLmFyZ3MpXG5cblx0XHRcdFx0Y29uc3QgY29tcHMgPSAoKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0LnRpbGVzW2tleV0pIHtcblx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBvcHQudGlsZXNba2V5XSAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTGV2ZWwgc3ltYm9sIGRlZiBtdXN0IGJlIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGEgY29tcG9uZW50IGxpc3RcIilcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gb3B0LnRpbGVzW2tleV0ocClcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAob3B0LndpbGRjYXJkVGlsZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gb3B0LndpbGRjYXJkVGlsZShrZXksIHApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBrZXlcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgYSBzeW1ib2wgb3IgYSBjb21wb25lbnQgbGlzdFwiKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkoKVxuXG5cdFx0XHRcdC8vIGVtcHR5IHRpbGVcblx0XHRcdFx0aWYgKCFjb21wcykge1xuXHRcdFx0XHRcdHJldHVybiBudWxsXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgaGFzUG9zID0gZmFsc2Vcblx0XHRcdFx0bGV0IGhhc1RpbGUgPSBmYWxzZVxuXG5cdFx0XHRcdGZvciAoY29uc3QgY29tcCBvZiBjb21wcykge1xuXHRcdFx0XHRcdGlmIChjb21wLmlkID09PSBcInRpbGVcIikgaGFzVGlsZSA9IHRydWVcblx0XHRcdFx0XHRpZiAoY29tcC5pZCA9PT0gXCJwb3NcIikgaGFzUG9zID0gdHJ1ZVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCFoYXNQb3MpIGNvbXBzLnB1c2gocG9zKCkpXG5cdFx0XHRcdGlmICghaGFzVGlsZSkgY29tcHMucHVzaCh0aWxlKCkpXG5cblx0XHRcdFx0Y29uc3Qgb2JqID0gbGV2ZWwuYWRkKGNvbXBzKVxuXG5cdFx0XHRcdGlmIChoYXNQb3MpIHtcblx0XHRcdFx0XHRvYmoudGlsZVBvc09mZnNldCA9IG9iai5wb3MuY2xvbmUoKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0b2JqLnRpbGVQb3MgPSBwXG5cblx0XHRcdFx0aWYgKHNwYXRpYWxNYXApIHtcblx0XHRcdFx0XHRpbnNlcnRJbnRvU3BhdGlhbE1hcChvYmopXG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwic3BhdGlhbF9tYXBfY2hhbmdlZFwiKVxuXHRcdFx0XHRcdHRoaXMudHJpZ2dlcihcIm5hdmlnYXRpb25fbWFwX2ludmFsaWRcIilcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBvYmpcblxuXHRcdFx0fSxcblxuXHRcdFx0bnVtQ29sdW1ucygpIHtcblx0XHRcdFx0cmV0dXJuIG51bUNvbHVtbnNcblx0XHRcdH0sXG5cblx0XHRcdG51bVJvd3MoKSB7XG5cdFx0XHRcdHJldHVybiBudW1Sb3dzXG5cdFx0XHR9LFxuXG5cdFx0XHRsZXZlbFdpZHRoKCkge1xuXHRcdFx0XHRyZXR1cm4gbnVtQ29sdW1ucyAqIHRoaXMudGlsZVdpZHRoKClcblx0XHRcdH0sXG5cblx0XHRcdGxldmVsSGVpZ2h0KCkge1xuXHRcdFx0XHRyZXR1cm4gbnVtUm93cyAqIHRoaXMudGlsZUhlaWdodCgpXG5cdFx0XHR9LFxuXG5cdFx0XHR0aWxlMlBvcyguLi5hcmdzOiBWZWMyQXJncykge1xuXHRcdFx0XHRyZXR1cm4gdmVjMiguLi5hcmdzKS5zY2FsZSh0aGlzLnRpbGVXaWR0aCgpLCB0aGlzLnRpbGVIZWlnaHQoKSlcblx0XHRcdH0sXG5cblx0XHRcdHBvczJUaWxlKC4uLmFyZ3M6IFZlYzJBcmdzKSB7XG5cdFx0XHRcdGNvbnN0IHAgPSB2ZWMyKC4uLmFyZ3MpXG5cdFx0XHRcdHJldHVybiB2ZWMyKFxuXHRcdFx0XHRcdE1hdGguZmxvb3IocC54IC8gdGhpcy50aWxlV2lkdGgoKSksXG5cdFx0XHRcdFx0TWF0aC5mbG9vcihwLnkgLyB0aGlzLnRpbGVIZWlnaHQoKSksXG5cdFx0XHRcdClcblx0XHRcdH0sXG5cblx0XHRcdGdldFNwYXRpYWxNYXAoKSB7XG5cdFx0XHRcdGlmICghc3BhdGlhbE1hcCkge1xuXHRcdFx0XHRcdGNyZWF0ZVNwYXRpYWxNYXAoKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzcGF0aWFsTWFwXG5cdFx0XHR9LFxuXG5cdFx0XHRvblNwYXRpYWxNYXBDaGFuZ2VkKHRoaXM6IEdhbWVPYmo8TGV2ZWxDb21wPiwgY2I6ICgpID0+IHZvaWQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub24oXCJzcGF0aWFsX21hcF9jaGFuZ2VkXCIsIGNiKVxuXHRcdFx0fSxcblxuXHRcdFx0b25OYXZpZ2F0aW9uTWFwSW52YWxpZCh0aGlzOiBHYW1lT2JqPExldmVsQ29tcD4sIGNiOiAoKSA9PiB2b2lkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwibmF2aWdhdGlvbl9tYXBfaW52YWxpZFwiLCBjYilcblx0XHRcdH0sXG5cblx0XHRcdGdldEF0KHRpbGVQb3M6IFZlYzIpIHtcblx0XHRcdFx0aWYgKCFzcGF0aWFsTWFwKSB7XG5cdFx0XHRcdFx0Y3JlYXRlU3BhdGlhbE1hcCgpXG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgaGFzaCA9IHRpbGUySGFzaCh0aWxlUG9zKVxuXHRcdFx0XHRyZXR1cm4gc3BhdGlhbE1hcFtoYXNoXSB8fCBbXVxuXHRcdFx0fSxcblxuXHRcdFx0dXBkYXRlKCkge1xuXHRcdFx0XHRpZiAoc3BhdGlhbE1hcCkge1xuXHRcdFx0XHRcdHVwZGF0ZVNwYXRpYWxNYXAoKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRpbnZhbGlkYXRlTmF2aWdhdGlvbk1hcCgpIHtcblx0XHRcdFx0Y29zdE1hcCA9IG51bGxcblx0XHRcdFx0ZWRnZU1hcCA9IG51bGxcblx0XHRcdFx0Y29ubmVjdGl2aXR5TWFwID0gbnVsbFxuXHRcdFx0fSxcblxuXHRcdFx0b25OYXZpZ2F0aW9uTWFwQ2hhbmdlZCh0aGlzOiBHYW1lT2JqPExldmVsQ29tcD4sIGNiOiAoKSA9PiB2b2lkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwibmF2aWdhdGlvbl9tYXBfY2hhbmdlZFwiLCBjYilcblx0XHRcdH0sXG5cblx0XHRcdGdldFRpbGVQYXRoKHRoaXM6IEdhbWVPYmo8TGV2ZWxDb21wPiwgZnJvbTogVmVjMiwgdG86IFZlYzIsIG9wdHM6IFBhdGhGaW5kT3B0ID0ge30pIHtcblx0XHRcdFx0aWYgKCFjb3N0TWFwKSB7XG5cdFx0XHRcdFx0Y3JlYXRlQ29zdE1hcCgpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFlZGdlTWFwKSB7XG5cdFx0XHRcdFx0Y3JlYXRlRWRnZU1hcCgpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjb25uZWN0aXZpdHlNYXApIHtcblx0XHRcdFx0XHRjcmVhdGVDb25uZWN0aXZpdHlNYXAoKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVGlsZXMgYXJlIG91dHNpZGUgdGhlIGdyaWRcblx0XHRcdFx0aWYgKGZyb20ueCA8IDAgfHwgZnJvbS54ID49IG51bUNvbHVtbnMgfHxcblx0XHRcdFx0XHRmcm9tLnkgPCAwIHx8IGZyb20ueSA+PSBudW1Sb3dzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGxcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodG8ueCA8IDAgfHwgdG8ueCA+PSBudW1Db2x1bW5zIHx8XG5cdFx0XHRcdFx0dG8ueSA8IDAgfHwgdG8ueSA+PSBudW1Sb3dzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGxcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHN0YXJ0ID0gdGlsZTJIYXNoKGZyb20pXG5cdFx0XHRcdGNvbnN0IGdvYWwgPSB0aWxlMkhhc2godG8pXG5cblx0XHRcdFx0Ly8gVGlsZXMgYXJlIG5vdCBhY2Nlc3NpYmxlXG5cdFx0XHRcdC8vIElmIHdlIHRlc3QgdGhlIHN0YXJ0IHRpbGUsIHdlIG1heSBnZXQgc3R1Y2tcblx0XHRcdFx0LyppZiAoY29zdE1hcFtzdGFydF0gPT09IEluZmluaXR5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGxcblx0XHRcdFx0fSovXG5cdFx0XHRcdGlmIChjb3N0TWFwW2dvYWxdID09PSBJbmZpbml0eSkge1xuXHRcdFx0XHRcdHJldHVybiBudWxsXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTYW1lIFRpbGUsIG5vIHdheXBvaW50cyBuZWVkZWRcblx0XHRcdFx0aWYgKHN0YXJ0ID09PSBnb2FsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFtdXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUaWxlcyBhcmUgbm90IHdpdGhpbiB0aGUgc2FtZSBzZWN0aW9uXG5cdFx0XHRcdC8vIElmIHdlIHRlc3QgdGhlIHN0YXJ0IHRpbGUgd2hlbiBpbnZhbGlkLCB3ZSBtYXkgZ2V0IHN0dWNrXG5cdFx0XHRcdGlmIChjb25uZWN0aXZpdHlNYXBbc3RhcnRdICE9IC0xICYmIGNvbm5lY3Rpdml0eU1hcFtzdGFydF0gIT09IGNvbm5lY3Rpdml0eU1hcFtnb2FsXSkge1xuXHRcdFx0XHRcdHJldHVybiBudWxsXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBGaW5kIGEgcGF0aFxuXHRcdFx0XHRpbnRlcmZhY2UgQ29zdE5vZGUgeyBjb3N0OiBudW1iZXIsIG5vZGU6IG51bWJlciB9XG5cdFx0XHRcdGNvbnN0IGZyb250aWVyID0gbmV3IEJpbmFyeUhlYXA8Q29zdE5vZGU+KChhLCBiKSA9PiBhLmNvc3QgPCBiLmNvc3QpXG5cdFx0XHRcdGZyb250aWVyLmluc2VydCh7IGNvc3Q6IDAsIG5vZGU6IHN0YXJ0IH0pXG5cblx0XHRcdFx0Y29uc3QgY2FtZUZyb20gPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpXG5cdFx0XHRcdGNhbWVGcm9tLnNldChzdGFydCwgc3RhcnQpXG5cdFx0XHRcdGNvbnN0IGNvc3RTb0ZhciA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KClcblx0XHRcdFx0Y29zdFNvRmFyLnNldChzdGFydCwgMClcblxuXHRcdFx0XHR3aGlsZSAoZnJvbnRpZXIubGVuZ3RoICE9PSAwKSB7XG5cdFx0XHRcdFx0Y29uc3QgY3VycmVudCA9IGZyb250aWVyLnJlbW92ZSgpPy5ub2RlXG5cblx0XHRcdFx0XHRpZiAoY3VycmVudCA9PT0gZ29hbClcblx0XHRcdFx0XHRcdGJyZWFrXG5cblx0XHRcdFx0XHRjb25zdCBuZWlnaGJvdXJzID0gZ2V0TmVpZ2hib3VycyhjdXJyZW50LCBvcHRzLmFsbG93RGlhZ29uYWxzKVxuXHRcdFx0XHRcdGZvciAoY29uc3QgbmV4dCBvZiBuZWlnaGJvdXJzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBuZXdDb3N0ID0gKGNvc3RTb0Zhci5nZXQoY3VycmVudCkgfHwgMCkgK1xuXHRcdFx0XHRcdFx0XHRnZXRDb3N0KGN1cnJlbnQsIG5leHQpICtcblx0XHRcdFx0XHRcdFx0Z2V0SGV1cmlzdGljKG5leHQsIGdvYWwpXG5cdFx0XHRcdFx0XHRpZiAoIWNvc3RTb0Zhci5oYXMobmV4dCkgfHwgbmV3Q29zdCA8IGNvc3RTb0Zhci5nZXQobmV4dCkpIHtcblx0XHRcdFx0XHRcdFx0Y29zdFNvRmFyLnNldChuZXh0LCBuZXdDb3N0KVxuXHRcdFx0XHRcdFx0XHRmcm9udGllci5pbnNlcnQoeyBjb3N0OiBuZXdDb3N0LCBub2RlOiBuZXh0IH0pXG5cdFx0XHRcdFx0XHRcdGNhbWVGcm9tLnNldChuZXh0LCBjdXJyZW50KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHBhdGggPSBbXVxuXHRcdFx0XHRsZXQgbm9kZSA9IGdvYWxcblx0XHRcdFx0Y29uc3QgcCA9IGhhc2gyVGlsZShub2RlKVxuXHRcdFx0XHRwYXRoLnB1c2gocClcblx0XHRcdFx0d2hpbGUgKG5vZGUgIT09IHN0YXJ0KSB7XG5cdFx0XHRcdFx0bm9kZSA9IGNhbWVGcm9tLmdldChub2RlKVxuXHRcdFx0XHRcdGNvbnN0IHAgPSBoYXNoMlRpbGUobm9kZSlcblx0XHRcdFx0XHRwYXRoLnB1c2gocClcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcGF0aC5yZXZlcnNlKClcblx0XHRcdH0sXG5cblx0XHRcdGdldFBhdGgodGhpczogR2FtZU9iajxMZXZlbENvbXA+LCBmcm9tOiBWZWMyLCB0bzogVmVjMiwgb3B0czogUGF0aEZpbmRPcHQgPSB7fSkge1xuXHRcdFx0XHRjb25zdCB0dyA9IHRoaXMudGlsZVdpZHRoKClcblx0XHRcdFx0Y29uc3QgdGggPSB0aGlzLnRpbGVIZWlnaHQoKVxuXHRcdFx0XHRjb25zdCBwYXRoID0gdGhpcy5nZXRUaWxlUGF0aChcblx0XHRcdFx0XHR0aGlzLnBvczJUaWxlKGZyb20pLFxuXHRcdFx0XHRcdHRoaXMucG9zMlRpbGUodG8pLFxuXHRcdFx0XHRcdG9wdHMsXG5cdFx0XHRcdClcblx0XHRcdFx0aWYgKHBhdGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRcdFx0ZnJvbSxcblx0XHRcdFx0XHRcdC4uLnBhdGhcblx0XHRcdFx0XHRcdFx0LnNsaWNlKDEsIC0xKVxuXHRcdFx0XHRcdFx0XHQubWFwKCh0aWxlUG9zKSA9PiB0aWxlUG9zLnNjYWxlKHR3LCB0aCkuYWRkKHR3IC8gMiwgdGggLyAyKSksXG5cdFx0XHRcdFx0XHR0byxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdH1cblxuXHRcdGxldmVsLnVzZShsZXZlbENvbXApXG5cblx0XHRsZXZlbC5vbk5hdmlnYXRpb25NYXBJbnZhbGlkKCgpID0+IHtcblx0XHRcdGxldmVsLmludmFsaWRhdGVOYXZpZ2F0aW9uTWFwKClcblx0XHRcdGxldmVsLnRyaWdnZXIoXCJuYXZpZ2F0aW9uX21hcF9jaGFuZ2VkXCIpXG5cdFx0fSlcblxuXHRcdG1hcC5mb3JFYWNoKChyb3csIGkpID0+IHtcblx0XHRcdGNvbnN0IGtleXMgPSByb3cuc3BsaXQoXCJcIilcblx0XHRcdG51bUNvbHVtbnMgPSBNYXRoLm1heChrZXlzLmxlbmd0aCwgbnVtQ29sdW1ucylcblx0XHRcdGtleXMuZm9yRWFjaCgoa2V5LCBqKSA9PiB7XG5cdFx0XHRcdGxldmVsLnNwYXduKGtleSwgdmVjMihqLCBpKSlcblx0XHRcdH0pXG5cdFx0fSlcblxuXHRcdHJldHVybiBsZXZlbFxuXG5cdH1cblxuXHRmdW5jdGlvbiBhZ2VudChvcHRzOiBBZ2VudENvbXBPcHQgPSB7fSkgOiBBZ2VudENvbXAge1xuXHRcdGxldCB0YXJnZXQ6IFZlYzIgfCBudWxsID0gbnVsbFxuXHRcdGxldCBwYXRoOiBWZWMyW10gfCBudWxsID0gbnVsbFxuXHRcdGxldCBpbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGxcblx0XHRsZXQgbmF2TWFwQ2hhbmdlZEV2ZW50OiBFdmVudENvbnRyb2xsZXIgfCBudWxsID0gbnVsbFxuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogXCJhZ2VudFwiLFxuXHRcdFx0cmVxdWlyZTogW1wicG9zXCIsIFwidGlsZVwiXSxcblx0XHRcdGFnZW50U3BlZWQ6IG9wdHMuc3BlZWQgPz8gMTAwLFxuXHRcdFx0YWxsb3dEaWFnb25hbHM6IG9wdHMuYWxsb3dEaWFnb25hbHMgPz8gdHJ1ZSxcblx0XHRcdGdldERpc3RhbmNlVG9UYXJnZXQodGhpczogR2FtZU9iajxBZ2VudENvbXAgfCBQb3NDb21wPikge1xuXHRcdFx0XHRyZXR1cm4gdGFyZ2V0ID8gdGhpcy5wb3MuZGlzdCh0YXJnZXQpIDogMFxuXHRcdFx0fSxcblx0XHRcdGdldE5leHRMb2NhdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHBhdGggJiYgaW5kZXggPyBwYXRoW2luZGV4XSA6IG51bGxcblx0XHRcdH0sXG5cdFx0XHRnZXRQYXRoKCkge1xuXHRcdFx0XHRyZXR1cm4gcGF0aCA/IHBhdGguc2xpY2UoKSA6IG51bGxcblx0XHRcdH0sXG5cdFx0XHRnZXRUYXJnZXQoKSB7XG5cdFx0XHRcdHJldHVybiB0YXJnZXRcblx0XHRcdH0sXG5cdFx0XHRpc05hdmlnYXRpb25GaW5pc2hlZCgpIHtcblx0XHRcdFx0cmV0dXJuIHBhdGggPyBpbmRleCA9PT0gbnVsbCA6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRpc1RhcmdldFJlYWNoYWJsZSgpIHtcblx0XHRcdFx0cmV0dXJuIHBhdGggIT09IG51bGxcblx0XHRcdH0sXG5cdFx0XHRpc1RhcmdldFJlYWNoZWQodGhpczogR2FtZU9iajxBZ2VudENvbXAgfCBQb3NDb21wPikge1xuXHRcdFx0XHRyZXR1cm4gdGFyZ2V0ID8gdGhpcy5wb3MuZXEodGFyZ2V0KSA6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRzZXRUYXJnZXQodGhpczogR2FtZU9iajxBZ2VudENvbXAgfCBUaWxlQ29tcCB8IFBvc0NvbXA+LCBwOiBWZWMyKSB7XG5cdFx0XHRcdHRhcmdldCA9IHBcblx0XHRcdFx0cGF0aCA9IHRoaXMuZ2V0TGV2ZWwoKS5nZXRQYXRoKHRoaXMucG9zLCB0YXJnZXQsIHtcblx0XHRcdFx0XHRhbGxvd0RpYWdvbmFsczogdGhpcy5hbGxvd0RpYWdvbmFscyxcblx0XHRcdFx0fSlcblx0XHRcdFx0aW5kZXggPSBwYXRoID8gMCA6IG51bGxcblx0XHRcdFx0aWYgKHBhdGgpIHtcblx0XHRcdFx0XHRpZiAoIW5hdk1hcENoYW5nZWRFdmVudCkge1xuXHRcdFx0XHRcdFx0bmF2TWFwQ2hhbmdlZEV2ZW50ID0gdGhpcy5nZXRMZXZlbCgpLm9uTmF2aWdhdGlvbk1hcENoYW5nZWQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAocGF0aCAmJiBpbmRleCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRcdHBhdGggPSB0aGlzLmdldExldmVsKCkuZ2V0UGF0aCh0aGlzLnBvcywgdGFyZ2V0LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd0RpYWdvbmFsczogdGhpcy5hbGxvd0RpYWdvbmFscyxcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdGluZGV4ID0gcGF0aCA/IDAgOiBudWxsXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHBhdGgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudHJpZ2dlcihcIm5hdmlnYXRpb24tbmV4dFwiLCB0aGlzLCBwYXRoW2luZGV4XSlcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwibmF2aWdhdGlvbi1lbmRlZFwiLCB0aGlzKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdHRoaXMub25EZXN0cm95KCgpID0+IG5hdk1hcENoYW5nZWRFdmVudC5jYW5jZWwoKSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwibmF2aWdhdGlvbi1zdGFydGVkXCIsIHRoaXMpXG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwibmF2aWdhdGlvbi1uZXh0XCIsIHRoaXMsIHBhdGhbaW5kZXhdKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudHJpZ2dlcihcIm5hdmlnYXRpb24tZW5kZWRcIiwgdGhpcylcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHVwZGF0ZSh0aGlzOiBHYW1lT2JqPEFnZW50Q29tcCB8IFBvc0NvbXA+KSB7XG5cdFx0XHRcdGlmIChwYXRoICYmIGluZGV4ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMucG9zLnNkaXN0KHBhdGhbaW5kZXhdKSA8IDIpIHtcblx0XHRcdFx0XHRcdGlmIChpbmRleCA9PT0gcGF0aC5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMucG9zID0gdGFyZ2V0LmNsb25lKClcblx0XHRcdFx0XHRcdFx0aW5kZXggPSBudWxsXG5cdFx0XHRcdFx0XHRcdHRoaXMudHJpZ2dlcihcIm5hdmlnYXRpb24tZW5kZWRcIiwgdGhpcylcblx0XHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyKFwidGFyZ2V0LXJlYWNoZWRcIiwgdGhpcylcblx0XHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpbmRleCsrXG5cdFx0XHRcdFx0XHRcdHRoaXMudHJpZ2dlcihcIm5hdmlnYXRpb24tbmV4dFwiLCB0aGlzLCBwYXRoW2luZGV4XSlcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLm1vdmVUbyhwYXRoW2luZGV4XSwgdGhpcy5hZ2VudFNwZWVkKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0b25OYXZpZ2F0aW9uU3RhcnRlZCh0aGlzOiBHYW1lT2JqPEFnZW50Q29tcD4sIGNiOiAoKSA9PiB2b2lkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwibmF2aWdhdGlvbi1zdGFydGVkXCIsIGNiKVxuXHRcdFx0fSxcblx0XHRcdG9uTmF2aWdhdGlvbk5leHQodGhpczogR2FtZU9iajxBZ2VudENvbXA+LCBjYjogKCkgPT4gdm9pZCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcIm5hdmlnYXRpb24tbmV4dFwiLCBjYilcblx0XHRcdH0sXG5cdFx0XHRvbk5hdmlnYXRpb25FbmRlZCh0aGlzOiBHYW1lT2JqPEFnZW50Q29tcD4sIGNiOiAoKSA9PiB2b2lkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uKFwibmF2aWdhdGlvbi1lbmRlZFwiLCBjYilcblx0XHRcdH0sXG5cdFx0XHRvblRhcmdldFJlYWNoZWQodGhpczogR2FtZU9iajxBZ2VudENvbXA+LCBjYjogKCkgPT4gdm9pZCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbihcInRhcmdldC1yZWFjaGVkXCIsIGNiKVxuXHRcdFx0fSxcblx0XHRcdGluc3BlY3QoKSB7XG5cdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFx0dGFyZ2V0OiBKU09OLnN0cmluZ2lmeSh0YXJnZXQpLFxuXHRcdFx0XHRcdHBhdGg6IEpTT04uc3RyaW5naWZ5KHBhdGgpLFxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiByZWNvcmQoZnJhbWVSYXRlPyk6IFJlY29yZGluZyB7XG5cblx0XHRjb25zdCBzdHJlYW0gPSBhcHAuY2FudmFzLmNhcHR1cmVTdHJlYW0oZnJhbWVSYXRlKVxuXHRcdGNvbnN0IGF1ZGlvRGVzdCA9IGF1ZGlvLmN0eC5jcmVhdGVNZWRpYVN0cmVhbURlc3RpbmF0aW9uKClcblxuXHRcdGF1ZGlvLm1hc3Rlck5vZGUuY29ubmVjdChhdWRpb0Rlc3QpXG5cblx0XHQvLyBUT0RPOiBFbmFibGluZyBhdWRpbyByZXN1bHRzIGluIGVtcHR5IHZpZGVvIGlmIG5vIGF1ZGlvIHJlY2VpdmVkXG5cdFx0Ly8gY29uc3QgYXVkaW9TdHJlYW0gPSBhdWRpb0Rlc3Quc3RyZWFtXG5cdFx0Ly8gY29uc3QgW2ZpcnN0QXVkaW9UcmFja10gPSBhdWRpb1N0cmVhbS5nZXRBdWRpb1RyYWNrcygpXG5cblx0XHQvLyBzdHJlYW0uYWRkVHJhY2soZmlyc3RBdWRpb1RyYWNrKTtcblxuXHRcdGNvbnN0IHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKVxuXHRcdGNvbnN0IGNodW5rcyA9IFtdXG5cblx0XHRyZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSAoZSkgPT4ge1xuXHRcdFx0aWYgKGUuZGF0YS5zaXplID4gMCkge1xuXHRcdFx0XHRjaHVua3MucHVzaChlLmRhdGEpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmVjb3JkZXIub25lcnJvciA9ICgpID0+IHtcblx0XHRcdGF1ZGlvLm1hc3Rlck5vZGUuZGlzY29ubmVjdChhdWRpb0Rlc3QpXG5cdFx0XHRzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0ID0+IHQuc3RvcCgpKVxuXHRcdH1cblxuXHRcdHJlY29yZGVyLnN0YXJ0KClcblxuXHRcdHJldHVybiB7XG5cblx0XHRcdHJlc3VtZSgpIHtcblx0XHRcdFx0cmVjb3JkZXIucmVzdW1lKClcblx0XHRcdH0sXG5cblx0XHRcdHBhdXNlKCkge1xuXHRcdFx0XHRyZWNvcmRlci5wYXVzZSgpXG5cdFx0XHR9LFxuXG5cdFx0XHRzdG9wKCk6IFByb21pc2U8QmxvYj4ge1xuXHRcdFx0XHRyZWNvcmRlci5zdG9wKClcblx0XHRcdFx0Ly8gY2xlYW51cFxuXHRcdFx0XHRhdWRpby5tYXN0ZXJOb2RlLmRpc2Nvbm5lY3QoYXVkaW9EZXN0KVxuXHRcdFx0XHRzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0ID0+IHQuc3RvcCgpKVxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdFx0XHRyZWNvcmRlci5vbnN0b3AgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKG5ldyBCbG9iKGNodW5rcywge1xuXHRcdFx0XHRcdFx0XHR0eXBlOiBcInZpZGVvL21wNFwiLFxuXHRcdFx0XHRcdFx0fSkpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblxuXHRcdFx0ZG93bmxvYWQoZmlsZW5hbWUgPSBcImthYm9vbS5tcDRcIikge1xuXHRcdFx0XHR0aGlzLnN0b3AoKS50aGVuKChibG9iKSA9PiBkb3dubG9hZEJsb2IoZmlsZW5hbWUsIGJsb2IpKVxuXHRcdFx0fSxcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gaXNGb2N1c2VkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBhcHAuY2FudmFzXG5cdH1cblxuXHRmdW5jdGlvbiBkZXN0cm95KG9iajogR2FtZU9iaikge1xuXHRcdG9iai5kZXN0cm95KClcblx0fVxuXG5cdC8vIGFsaWFzZXMgZm9yIHJvb3QgZ2FtZSBvYmogb3BlcmF0aW9uc1xuXHRjb25zdCBhZGQgPSBnYW1lLnJvb3QuYWRkLmJpbmQoZ2FtZS5yb290KVxuXHRjb25zdCByZWFkZCA9IGdhbWUucm9vdC5yZWFkZC5iaW5kKGdhbWUucm9vdClcblx0Y29uc3QgZGVzdHJveUFsbCA9IGdhbWUucm9vdC5yZW1vdmVBbGwuYmluZChnYW1lLnJvb3QpXG5cdGNvbnN0IGdldCA9IGdhbWUucm9vdC5nZXQuYmluZChnYW1lLnJvb3QpXG5cdGNvbnN0IHdhaXQgPSBnYW1lLnJvb3Qud2FpdC5iaW5kKGdhbWUucm9vdClcblx0Y29uc3QgbG9vcCA9IGdhbWUucm9vdC5sb29wLmJpbmQoZ2FtZS5yb290KVxuXHRjb25zdCB0d2VlbiA9IGdhbWUucm9vdC50d2Vlbi5iaW5kKGdhbWUucm9vdClcblxuXHRmdW5jdGlvbiBib29tKHNwZWVkOiBudW1iZXIgPSAyLCBzaXplOiBudW1iZXIgPSAxKTogQ29tcCB7XG5cdFx0bGV0IHRpbWUgPSAwXG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlcXVpcmU6IFsgXCJzY2FsZVwiIF0sXG5cdFx0XHR1cGRhdGUodGhpczogR2FtZU9iajxTY2FsZUNvbXA+KSB7XG5cdFx0XHRcdGNvbnN0IHMgPSBNYXRoLnNpbih0aW1lICogc3BlZWQpICogc2l6ZVxuXHRcdFx0XHRpZiAocyA8IDApIHtcblx0XHRcdFx0XHR0aGlzLmRlc3Ryb3koKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2NhbGUgPSB2ZWMyKHMpXG5cdFx0XHRcdHRpbWUgKz0gZHQoKVxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRjb25zdCBrYVNwcml0ZSA9IGxvYWRTcHJpdGUobnVsbCwga2FTcHJpdGVTcmMpXG5cdGNvbnN0IGJvb21TcHJpdGUgPSBsb2FkU3ByaXRlKG51bGwsIGJvb21TcHJpdGVTcmMpXG5cblx0ZnVuY3Rpb24gYWRkS2Fib29tKHA6IFZlYzIsIG9wdDogQm9vbU9wdCA9IHt9KTogR2FtZU9iaiB7XG5cblx0XHRjb25zdCBrYWJvb20gPSBhZGQoW1xuXHRcdFx0cG9zKHApLFxuXHRcdFx0c3RheSgpLFxuXHRcdF0pXG5cblx0XHRjb25zdCBzcGVlZCA9IChvcHQuc3BlZWQgfHwgMSkgKiA1XG5cdFx0Y29uc3QgcyA9IG9wdC5zY2FsZSB8fCAxXG5cblx0XHRrYWJvb20uYWRkKFtcblx0XHRcdHNwcml0ZShib29tU3ByaXRlKSxcblx0XHRcdHNjYWxlKDApLFxuXHRcdFx0YW5jaG9yKFwiY2VudGVyXCIpLFxuXHRcdFx0Ym9vbShzcGVlZCwgcyksXG5cdFx0XHQuLi5vcHQuY29tcHMgPz8gW10sXG5cdFx0XSlcblxuXHRcdGNvbnN0IGthID0ga2Fib29tLmFkZChbXG5cdFx0XHRzcHJpdGUoa2FTcHJpdGUpLFxuXHRcdFx0c2NhbGUoMCksXG5cdFx0XHRhbmNob3IoXCJjZW50ZXJcIiksXG5cdFx0XHR0aW1lcigpLFxuXHRcdFx0Li4ub3B0LmNvbXBzID8/IFtdLFxuXHRcdF0pXG5cblx0XHRrYS53YWl0KDAuNCAvIHNwZWVkLCAoKSA9PiBrYS51c2UoYm9vbShzcGVlZCwgcykpKVxuXHRcdGthLm9uRGVzdHJveSgoKSA9PiBrYWJvb20uZGVzdHJveSgpKVxuXG5cdFx0cmV0dXJuIGthYm9vbVxuXG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVGcmFtZSgpIHtcblx0XHQvLyB1cGRhdGUgZXZlcnkgb2JqXG5cdFx0Z2FtZS5yb290LnVwZGF0ZSgpXG5cdH1cblxuXHRjbGFzcyBDb2xsaXNpb24ge1xuXHRcdHNvdXJjZTogR2FtZU9ialxuXHRcdHRhcmdldDogR2FtZU9ialxuXHRcdGRpc3BsYWNlbWVudDogVmVjMlxuXHRcdHJlc29sdmVkOiBib29sZWFuID0gZmFsc2Vcblx0XHRjb25zdHJ1Y3Rvcihzb3VyY2U6IEdhbWVPYmosIHRhcmdldDogR2FtZU9iaiwgZGlzOiBWZWMyLCByZXNvbHZlZCA9IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZVxuXHRcdFx0dGhpcy50YXJnZXQgPSB0YXJnZXRcblx0XHRcdHRoaXMuZGlzcGxhY2VtZW50ID0gZGlzXG5cdFx0XHR0aGlzLnJlc29sdmVkID0gcmVzb2x2ZWRcblx0XHR9XG5cdFx0cmV2ZXJzZSgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sbGlzaW9uKFxuXHRcdFx0XHR0aGlzLnRhcmdldCxcblx0XHRcdFx0dGhpcy5zb3VyY2UsXG5cdFx0XHRcdHRoaXMuZGlzcGxhY2VtZW50LnNjYWxlKC0xKSxcblx0XHRcdFx0dGhpcy5yZXNvbHZlZCxcblx0XHRcdClcblx0XHR9XG5cdFx0aGFzT3ZlcmxhcCgpIHtcblx0XHRcdHJldHVybiAhdGhpcy5kaXNwbGFjZW1lbnQuaXNaZXJvKClcblx0XHR9XG5cdFx0aXNMZWZ0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGlzcGxhY2VtZW50LnggPiAwXG5cdFx0fVxuXHRcdGlzUmlnaHQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kaXNwbGFjZW1lbnQueCA8IDBcblx0XHR9XG5cdFx0aXNUb3AoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kaXNwbGFjZW1lbnQueSA+IDBcblx0XHR9XG5cdFx0aXNCb3R0b20oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kaXNwbGFjZW1lbnQueSA8IDBcblx0XHR9XG5cdFx0cHJldmVudFJlc29sdXRpb24oKSB7XG5cdFx0XHR0aGlzLnJlc29sdmVkID0gdHJ1ZVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNoZWNrRnJhbWUoKSB7XG5cblx0XHQvLyBUT0RPOiBwZXJzaXN0ZW50IGdyaWQ/XG5cdFx0Ly8gc3RhcnQgYSBzcGF0aWFsIGhhc2ggZ3JpZCBmb3IgbW9yZSBlZmZpY2llbnQgY29sbGlzaW9uIGRldGVjdGlvblxuXHRcdGNvbnN0IGdyaWQ6IFJlY29yZDxudW1iZXIsIFJlY29yZDxudW1iZXIsIEdhbWVPYmo8QXJlYUNvbXA+W10+PiA9IHt9XG5cdFx0Y29uc3QgY2VsbFNpemUgPSBnb3B0Lmhhc2hHcmlkU2l6ZSB8fCBERUZfSEFTSF9HUklEX1NJWkVcblxuXHRcdC8vIGN1cnJlbnQgdHJhbnNmb3JtXG5cdFx0bGV0IHRyID0gbmV3IE1hdDQoKVxuXG5cdFx0Ly8gYSBsb2NhbCB0cmFuc2Zvcm0gc3RhY2tcblx0XHRjb25zdCBzdGFjayA9IFtdXG5cblx0XHRmdW5jdGlvbiBjaGVja09iaihvYmo6IEdhbWVPYmopIHtcblxuXHRcdFx0c3RhY2sucHVzaCh0ci5jbG9uZSgpKVxuXG5cdFx0XHQvLyBVcGRhdGUgb2JqZWN0IHRyYW5zZm9ybSBoZXJlLiBUaGlzIHdpbGwgYmUgdGhlIHRyYW5zZm9ybSBsYXRlciB1c2VkIGluIHJlbmRlcmluZy5cblx0XHRcdGlmIChvYmoucG9zKSB0ci50cmFuc2xhdGUob2JqLnBvcylcblx0XHRcdGlmIChvYmouc2NhbGUpIHRyLnNjYWxlKG9iai5zY2FsZSlcblx0XHRcdGlmIChvYmouYW5nbGUpIHRyLnJvdGF0ZShvYmouYW5nbGUpXG5cdFx0XHRvYmoudHJhbnNmb3JtID0gdHIuY2xvbmUoKVxuXG5cdFx0XHRpZiAob2JqLmMoXCJhcmVhXCIpICYmICFvYmoucGF1c2VkKSB7XG5cblx0XHRcdFx0Ly8gVE9ETzogb25seSB1cGRhdGUgd29ybGRBcmVhIGlmIHRyYW5zZm9ybSBjaGFuZ2VkXG5cdFx0XHRcdGNvbnN0IGFvYmogPSBvYmogYXMgR2FtZU9iajxBcmVhQ29tcD5cblx0XHRcdFx0Y29uc3QgYXJlYSA9IGFvYmoud29ybGRBcmVhKClcblx0XHRcdFx0Y29uc3QgYmJveCA9IGFyZWEuYmJveCgpXG5cblx0XHRcdFx0Ly8gR2V0IHNwYXRpYWwgaGFzaCBncmlkIGNvdmVyYWdlXG5cdFx0XHRcdGNvbnN0IHhtaW4gPSBNYXRoLmZsb29yKGJib3gucG9zLnggLyBjZWxsU2l6ZSlcblx0XHRcdFx0Y29uc3QgeW1pbiA9IE1hdGguZmxvb3IoYmJveC5wb3MueSAvIGNlbGxTaXplKVxuXHRcdFx0XHRjb25zdCB4bWF4ID0gTWF0aC5jZWlsKChiYm94LnBvcy54ICsgYmJveC53aWR0aCkgLyBjZWxsU2l6ZSlcblx0XHRcdFx0Y29uc3QgeW1heCA9IE1hdGguY2VpbCgoYmJveC5wb3MueSArIGJib3guaGVpZ2h0KSAvIGNlbGxTaXplKVxuXG5cdFx0XHRcdC8vIENhY2hlIG9ianMgdGhhdCBhcmUgYWxyZWFkeSBjaGVja2VkXG5cdFx0XHRcdGNvbnN0IGNoZWNrZWQgPSBuZXcgU2V0KClcblxuXHRcdFx0XHQvLyBpbnNlcnQgJiBjaGVjayBhZ2FpbnN0IGFsbCBjb3ZlcmVkIGdyaWRzXG5cdFx0XHRcdGZvciAobGV0IHggPSB4bWluOyB4IDw9IHhtYXg7IHgrKykge1xuXHRcdFx0XHRcdGZvciAobGV0IHkgPSB5bWluOyB5IDw9IHltYXg7IHkrKykge1xuXHRcdFx0XHRcdFx0aWYoIWdyaWRbeF0pIHtcblx0XHRcdFx0XHRcdFx0Z3JpZFt4XSA9IHt9XG5cdFx0XHRcdFx0XHRcdGdyaWRbeF1beV0gPSBbYW9ial1cblx0XHRcdFx0XHRcdH0gZWxzZSBpZighZ3JpZFt4XVt5XSkge1xuXHRcdFx0XHRcdFx0XHRncmlkW3hdW3ldID0gW2FvYmpdXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBjZWxsID0gZ3JpZFt4XVt5XVxuXHRcdFx0XHRcdFx0XHRjaGVjazogZm9yIChjb25zdCBvdGhlciBvZiBjZWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKG90aGVyLnBhdXNlZCkgY29udGludWVcblx0XHRcdFx0XHRcdFx0XHRpZiAoIW90aGVyLmV4aXN0cygpKSBjb250aW51ZVxuXHRcdFx0XHRcdFx0XHRcdGlmIChjaGVja2VkLmhhcyhvdGhlci5pZCkpIGNvbnRpbnVlXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCB0YWcgb2YgYW9iai5jb2xsaXNpb25JZ25vcmUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvdGhlci5pcyh0YWcpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGNoZWNrXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgdGFnIG9mIG90aGVyLmNvbGxpc2lvbklnbm9yZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGFvYmouaXModGFnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZSBjaGVja1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBjYWNoZSB0aGUgd29ybGQgYXJlYSBoZXJlXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgcmVzID0gc2F0KGFvYmoud29ybGRBcmVhKCksIG90aGVyLndvcmxkQXJlYSgpKVxuXHRcdFx0XHRcdFx0XHRcdGlmIChyZXMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFRPRE86IHJlaGFzaCBpZiB0aGUgb2JqZWN0IHBvc2l0aW9uIGlzIGNoYW5nZWQgYWZ0ZXIgcmVzb2x1dGlvbj9cblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNvbDEgPSBuZXcgQ29sbGlzaW9uKGFvYmosIG90aGVyLCByZXMpXG5cdFx0XHRcdFx0XHRcdFx0XHRhb2JqLnRyaWdnZXIoXCJjb2xsaWRlVXBkYXRlXCIsIG90aGVyLCBjb2wxKVxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY29sMiA9IGNvbDEucmV2ZXJzZSgpXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyByZXNvbHV0aW9uIG9ubHkgaGFzIHRvIGhhcHBlbiBvbmNlXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2wyLnJlc29sdmVkID0gY29sMS5yZXNvbHZlZFxuXHRcdFx0XHRcdFx0XHRcdFx0b3RoZXIudHJpZ2dlcihcImNvbGxpZGVVcGRhdGVcIiwgYW9iaiwgY29sMilcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZC5hZGQob3RoZXIuaWQpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2VsbC5wdXNoKGFvYmopXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0b2JqLmNoaWxkcmVuLmZvckVhY2goY2hlY2tPYmopXG5cdFx0XHR0ciA9IHN0YWNrLnBvcCgpXG5cblx0XHR9XG5cblx0XHRjaGVja09iaihnYW1lLnJvb3QpXG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdGcmFtZSgpIHtcblxuXHRcdC8vIGNhbGN1bGF0ZSBjYW1lcmEgbWF0cml4XG5cdFx0Y29uc3QgY2FtID0gZ2FtZS5jYW1cblx0XHRjb25zdCBzaGFrZSA9IFZlYzIuZnJvbUFuZ2xlKHJhbmQoMCwgMzYwKSkuc2NhbGUoY2FtLnNoYWtlKVxuXG5cdFx0Y2FtLnNoYWtlID0gbGVycChjYW0uc2hha2UsIDAsIDUgKiBkdCgpKVxuXHRcdGNhbS50cmFuc2Zvcm0gPSBuZXcgTWF0NCgpXG5cdFx0XHQudHJhbnNsYXRlKGNlbnRlcigpKVxuXHRcdFx0LnNjYWxlKGNhbS5zY2FsZSlcblx0XHRcdC5yb3RhdGUoY2FtLmFuZ2xlKVxuXHRcdFx0LnRyYW5zbGF0ZSgoY2FtLnBvcyA/PyBjZW50ZXIoKSkuc2NhbGUoLTEpLmFkZChzaGFrZSkpXG5cblx0XHRnYW1lLnJvb3QuZHJhdygpXG5cdFx0Zmx1c2goKVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3TG9hZFNjcmVlbigpIHtcblxuXHRcdGNvbnN0IHByb2dyZXNzID0gbG9hZFByb2dyZXNzKClcblxuXHRcdGlmIChnYW1lLmV2ZW50cy5udW1MaXN0ZW5lcnMoXCJsb2FkaW5nXCIpID4gMCkge1xuXHRcdFx0Z2FtZS5ldmVudHMudHJpZ2dlcihcImxvYWRpbmdcIiwgcHJvZ3Jlc3MpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRyYXdVbnNjYWxlZCgoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHcgPSB3aWR0aCgpIC8gMlxuXHRcdFx0XHRjb25zdCBoID0gMjRcblx0XHRcdFx0Y29uc3QgcG9zID0gdmVjMih3aWR0aCgpIC8gMiwgaGVpZ2h0KCkgLyAyKS5zdWIodmVjMih3IC8gMiwgaCAvIDIpKVxuXHRcdFx0XHRkcmF3UmVjdCh7XG5cdFx0XHRcdFx0cG9zOiB2ZWMyKDApLFxuXHRcdFx0XHRcdHdpZHRoOiB3aWR0aCgpLFxuXHRcdFx0XHRcdGhlaWdodDogaGVpZ2h0KCksXG5cdFx0XHRcdFx0Y29sb3I6IHJnYigwLCAwLCAwKSxcblx0XHRcdFx0fSlcblx0XHRcdFx0ZHJhd1JlY3Qoe1xuXHRcdFx0XHRcdHBvczogcG9zLFxuXHRcdFx0XHRcdHdpZHRoOiB3LFxuXHRcdFx0XHRcdGhlaWdodDogaCxcblx0XHRcdFx0XHRmaWxsOiBmYWxzZSxcblx0XHRcdFx0XHRvdXRsaW5lOiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogNCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRkcmF3UmVjdCh7XG5cdFx0XHRcdFx0cG9zOiBwb3MsXG5cdFx0XHRcdFx0d2lkdGg6IHcgKiBwcm9ncmVzcyxcblx0XHRcdFx0XHRoZWlnaHQ6IGgsXG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd0luc3BlY3RUZXh0KHBvcywgdHh0KSB7XG5cblx0XHRkcmF3VW5zY2FsZWQoKCkgPT4ge1xuXG5cdFx0XHRjb25zdCBwYWQgPSB2ZWMyKDgpXG5cblx0XHRcdHB1c2hUcmFuc2Zvcm0oKVxuXHRcdFx0cHVzaFRyYW5zbGF0ZShwb3MpXG5cblx0XHRcdGNvbnN0IGZ0eHQgPSBmb3JtYXRUZXh0KHtcblx0XHRcdFx0dGV4dDogdHh0LFxuXHRcdFx0XHRmb250OiBEQkdfRk9OVCxcblx0XHRcdFx0c2l6ZTogMTYsXG5cdFx0XHRcdHBvczogcGFkLFxuXHRcdFx0XHRjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpLFxuXHRcdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHRcdH0pXG5cblx0XHRcdGNvbnN0IGJ3ID0gZnR4dC53aWR0aCArIHBhZC54ICogMlxuXHRcdFx0Y29uc3QgYmggPSBmdHh0LmhlaWdodCArIHBhZC54ICogMlxuXG5cdFx0XHRpZiAocG9zLnggKyBidyA+PSB3aWR0aCgpKSB7XG5cdFx0XHRcdHB1c2hUcmFuc2xhdGUodmVjMigtYncsIDApKVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAocG9zLnkgKyBiaCA+PSBoZWlnaHQoKSkge1xuXHRcdFx0XHRwdXNoVHJhbnNsYXRlKHZlYzIoMCwgLWJoKSlcblx0XHRcdH1cblxuXHRcdFx0ZHJhd1JlY3Qoe1xuXHRcdFx0XHR3aWR0aDogYncsXG5cdFx0XHRcdGhlaWdodDogYmgsXG5cdFx0XHRcdGNvbG9yOiByZ2IoMCwgMCwgMCksXG5cdFx0XHRcdHJhZGl1czogNCxcblx0XHRcdFx0b3BhY2l0eTogMC44LFxuXHRcdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHRcdH0pXG5cblx0XHRcdGRyYXdGb3JtYXR0ZWRUZXh0KGZ0eHQpXG5cdFx0XHRwb3BUcmFuc2Zvcm0oKVxuXG5cdFx0fSlcblxuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd0RlYnVnKCkge1xuXG5cdFx0aWYgKGRlYnVnLmluc3BlY3QpIHtcblxuXHRcdFx0bGV0IGluc3BlY3RpbmcgPSBudWxsXG5cblx0XHRcdGZvciAoY29uc3Qgb2JqIG9mIGdhbWUucm9vdC5nZXQoXCIqXCIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pKSB7XG5cdFx0XHRcdGlmIChvYmouYyhcImFyZWFcIikgJiYgb2JqLmlzSG92ZXJpbmcoKSkge1xuXHRcdFx0XHRcdGluc3BlY3RpbmcgPSBvYmpcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGdhbWUucm9vdC5kcmF3SW5zcGVjdCgpXG5cblx0XHRcdGlmIChpbnNwZWN0aW5nKSB7XG5cblx0XHRcdFx0Y29uc3QgbGluZXMgPSBbXVxuXHRcdFx0XHRjb25zdCBkYXRhID0gaW5zcGVjdGluZy5pbnNwZWN0KClcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHRhZyBpbiBkYXRhKSB7XG5cdFx0XHRcdFx0aWYgKGRhdGFbdGFnXSkge1xuXHRcdFx0XHRcdFx0bGluZXMucHVzaChgJHt0YWd9OiAke2RhdGFbdGFnXX1gKVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsaW5lcy5wdXNoKGAke3RhZ31gKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRyYXdJbnNwZWN0VGV4dChjb250ZW50VG9WaWV3KG1vdXNlUG9zKCkpLCBsaW5lcy5qb2luKFwiXFxuXCIpKVxuXG5cdFx0XHR9XG5cblx0XHRcdGRyYXdJbnNwZWN0VGV4dCh2ZWMyKDgpLCBgRlBTOiAke2RlYnVnLmZwcygpfWApXG5cblx0XHR9XG5cblx0XHRpZiAoZGVidWcucGF1c2VkKSB7XG5cblx0XHRcdGRyYXdVbnNjYWxlZCgoKSA9PiB7XG5cblx0XHRcdFx0Ly8gdG9wIHJpZ2h0IGNvcm5lclxuXHRcdFx0XHRwdXNoVHJhbnNmb3JtKClcblx0XHRcdFx0cHVzaFRyYW5zbGF0ZSh3aWR0aCgpLCAwKVxuXHRcdFx0XHRwdXNoVHJhbnNsYXRlKC04LCA4KVxuXG5cdFx0XHRcdGNvbnN0IHNpemUgPSAzMlxuXG5cdFx0XHRcdC8vIGJnXG5cdFx0XHRcdGRyYXdSZWN0KHtcblx0XHRcdFx0XHR3aWR0aDogc2l6ZSxcblx0XHRcdFx0XHRoZWlnaHQ6IHNpemUsXG5cdFx0XHRcdFx0YW5jaG9yOiBcInRvcHJpZ2h0XCIsXG5cdFx0XHRcdFx0Y29sb3I6IHJnYigwLCAwLCAwKSxcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjgsXG5cdFx0XHRcdFx0cmFkaXVzOiA0LFxuXHRcdFx0XHRcdGZpeGVkOiB0cnVlLFxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdC8vIHBhdXNlIGljb25cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSB7XG5cdFx0XHRcdFx0ZHJhd1JlY3Qoe1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IHNpemUgKiAwLjYsXG5cdFx0XHRcdFx0XHRhbmNob3I6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRwb3M6IHZlYzIoLXNpemUgLyAzICogaSwgc2l6ZSAqIDAuNSksXG5cdFx0XHRcdFx0XHRjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpLFxuXHRcdFx0XHRcdFx0cmFkaXVzOiAyLFxuXHRcdFx0XHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBvcFRyYW5zZm9ybSgpXG5cblx0XHRcdH0pXG5cblx0XHR9XG5cblx0XHRpZiAoZGVidWcudGltZVNjYWxlICE9PSAxKSB7XG5cblx0XHRcdGRyYXdVbnNjYWxlZCgoKSA9PiB7XG5cblx0XHRcdFx0Ly8gYm90dG9tIHJpZ2h0IGNvcm5lclxuXHRcdFx0XHRwdXNoVHJhbnNmb3JtKClcblx0XHRcdFx0cHVzaFRyYW5zbGF0ZSh3aWR0aCgpLCBoZWlnaHQoKSlcblx0XHRcdFx0cHVzaFRyYW5zbGF0ZSgtOCwgLTgpXG5cblx0XHRcdFx0Y29uc3QgcGFkID0gOFxuXG5cdFx0XHRcdC8vIGZvcm1hdCB0ZXh0IGZpcnN0IHRvIGdldCB0ZXh0IHNpemVcblx0XHRcdFx0Y29uc3QgZnR4dCA9IGZvcm1hdFRleHQoe1xuXHRcdFx0XHRcdHRleHQ6IGRlYnVnLnRpbWVTY2FsZS50b0ZpeGVkKDEpLFxuXHRcdFx0XHRcdGZvbnQ6IERCR19GT05ULFxuXHRcdFx0XHRcdHNpemU6IDE2LFxuXHRcdFx0XHRcdGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSksXG5cdFx0XHRcdFx0cG9zOiB2ZWMyKC1wYWQpLFxuXHRcdFx0XHRcdGFuY2hvcjogXCJib3RyaWdodFwiLFxuXHRcdFx0XHRcdGZpeGVkOiB0cnVlLFxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdC8vIGJnXG5cdFx0XHRcdGRyYXdSZWN0KHtcblx0XHRcdFx0XHR3aWR0aDogZnR4dC53aWR0aCArIHBhZCAqIDIgKyBwYWQgKiA0LFxuXHRcdFx0XHRcdGhlaWdodDogZnR4dC5oZWlnaHQgKyBwYWQgKiAyLFxuXHRcdFx0XHRcdGFuY2hvcjogXCJib3RyaWdodFwiLFxuXHRcdFx0XHRcdGNvbG9yOiByZ2IoMCwgMCwgMCksXG5cdFx0XHRcdFx0b3BhY2l0eTogMC44LFxuXHRcdFx0XHRcdHJhZGl1czogNCxcblx0XHRcdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHRcdFx0fSlcblxuXHRcdFx0XHQvLyBmYXN0IGZvcndhcmQgLyBzbG93IGRvd24gaWNvblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuXHRcdFx0XHRcdGNvbnN0IGZsaXBwZWQgPSBkZWJ1Zy50aW1lU2NhbGUgPCAxXG5cdFx0XHRcdFx0ZHJhd1RyaWFuZ2xlKHtcblx0XHRcdFx0XHRcdHAxOiB2ZWMyKC1mdHh0LndpZHRoIC0gcGFkICogKGZsaXBwZWQgPyAyIDogMy41KSwgLXBhZCksXG5cdFx0XHRcdFx0XHRwMjogdmVjMigtZnR4dC53aWR0aCAtIHBhZCAqIChmbGlwcGVkID8gMiA6IDMuNSksIC1wYWQgLSBmdHh0LmhlaWdodCksXG5cdFx0XHRcdFx0XHRwMzogdmVjMigtZnR4dC53aWR0aCAtIHBhZCAqIChmbGlwcGVkID8gMy41IDogMiksIC1wYWQgLSBmdHh0LmhlaWdodCAvIDIpLFxuXHRcdFx0XHRcdFx0cG9zOiB2ZWMyKC1pICogcGFkICogMSArIChmbGlwcGVkID8gLXBhZCAqIDAuNSA6IDApLCAwKSxcblx0XHRcdFx0XHRcdGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSksXG5cdFx0XHRcdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gdGV4dFxuXHRcdFx0XHRkcmF3Rm9ybWF0dGVkVGV4dChmdHh0KVxuXG5cdFx0XHRcdHBvcFRyYW5zZm9ybSgpXG5cblx0XHRcdH0pXG5cblx0XHR9XG5cblx0XHRpZiAoZGVidWcuY3VyUmVjb3JkaW5nKSB7XG5cblx0XHRcdGRyYXdVbnNjYWxlZCgoKSA9PiB7XG5cblx0XHRcdFx0cHVzaFRyYW5zZm9ybSgpXG5cdFx0XHRcdHB1c2hUcmFuc2xhdGUoMCwgaGVpZ2h0KCkpXG5cdFx0XHRcdHB1c2hUcmFuc2xhdGUoMjQsIC0yNClcblxuXHRcdFx0XHRkcmF3Q2lyY2xlKHtcblx0XHRcdFx0XHRyYWRpdXM6IDEyLFxuXHRcdFx0XHRcdGNvbG9yOiByZ2IoMjU1LCAwLCAwKSxcblx0XHRcdFx0XHRvcGFjaXR5OiB3YXZlKDAsIDEsIGFwcC50aW1lKCkgKiA0KSxcblx0XHRcdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHRcdFx0fSlcblxuXHRcdFx0XHRwb3BUcmFuc2Zvcm0oKVxuXG5cdFx0XHR9KVxuXG5cdFx0fVxuXG5cdFx0aWYgKGRlYnVnLnNob3dMb2cgJiYgZ2FtZS5sb2dzLmxlbmd0aCA+IDApIHtcblxuXHRcdFx0ZHJhd1Vuc2NhbGVkKCgpID0+IHtcblxuXHRcdFx0XHRwdXNoVHJhbnNmb3JtKClcblx0XHRcdFx0cHVzaFRyYW5zbGF0ZSgwLCBoZWlnaHQoKSlcblx0XHRcdFx0cHVzaFRyYW5zbGF0ZSg4LCAtOClcblxuXHRcdFx0XHRjb25zdCBwYWQgPSA4XG5cdFx0XHRcdGNvbnN0IGxvZ3MgPSBbXVxuXG5cdFx0XHRcdGZvciAoY29uc3QgbG9nIG9mIGdhbWUubG9ncykge1xuXHRcdFx0XHRcdGxldCBzdHIgPSBcIlwiXG5cdFx0XHRcdFx0Y29uc3Qgc3R5bGUgPSBsb2cubXNnIGluc3RhbmNlb2YgRXJyb3IgPyBcImVycm9yXCIgOiBcImluZm9cIlxuXHRcdFx0XHRcdHN0ciArPSBgW3RpbWVdJHtsb2cudGltZS50b0ZpeGVkKDIpfVsvdGltZV1gXG5cdFx0XHRcdFx0c3RyICs9IFwiIFwiXG5cdFx0XHRcdFx0c3RyICs9IGBbJHtzdHlsZX1dJHtsb2cubXNnPy50b1N0cmluZyA/IGxvZy5tc2cudG9TdHJpbmcoKSA6IGxvZy5tc2d9Wy8ke3N0eWxlfV1gXG5cdFx0XHRcdFx0bG9ncy5wdXNoKHN0cilcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGdhbWUubG9ncyA9IGdhbWUubG9nc1xuXHRcdFx0XHRcdC5maWx0ZXIoKGxvZykgPT4gYXBwLnRpbWUoKSAtIGxvZy50aW1lIDwgKGdvcHQubG9nVGltZSB8fCBMT0dfVElNRSkpXG5cblx0XHRcdFx0Y29uc3QgZnRleHQgPSBmb3JtYXRUZXh0KHtcblx0XHRcdFx0XHR0ZXh0OiBsb2dzLmpvaW4oXCJcXG5cIiksXG5cdFx0XHRcdFx0Zm9udDogREJHX0ZPTlQsXG5cdFx0XHRcdFx0cG9zOiB2ZWMyKHBhZCwgLXBhZCksXG5cdFx0XHRcdFx0YW5jaG9yOiBcImJvdGxlZnRcIixcblx0XHRcdFx0XHRzaXplOiAxNixcblx0XHRcdFx0XHR3aWR0aDogd2lkdGgoKSAqIDAuNixcblx0XHRcdFx0XHRsaW5lU3BhY2luZzogcGFkIC8gMixcblx0XHRcdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHRcdFx0XHRzdHlsZXM6IHtcblx0XHRcdFx0XHRcdFwidGltZVwiOiB7IGNvbG9yOiByZ2IoMTI3LCAxMjcsIDEyNykgfSxcblx0XHRcdFx0XHRcdFwiaW5mb1wiOiB7IGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgfSxcblx0XHRcdFx0XHRcdFwiZXJyb3JcIjogeyBjb2xvcjogcmdiKDI1NSwgMCwgMTI3KSB9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0ZHJhd1JlY3Qoe1xuXHRcdFx0XHRcdHdpZHRoOiBmdGV4dC53aWR0aCArIHBhZCAqIDIsXG5cdFx0XHRcdFx0aGVpZ2h0OiBmdGV4dC5oZWlnaHQgKyBwYWQgKiAyLFxuXHRcdFx0XHRcdGFuY2hvcjogXCJib3RsZWZ0XCIsXG5cdFx0XHRcdFx0Y29sb3I6IHJnYigwLCAwLCAwKSxcblx0XHRcdFx0XHRyYWRpdXM6IDQsXG5cdFx0XHRcdFx0b3BhY2l0eTogMC44LFxuXHRcdFx0XHRcdGZpeGVkOiB0cnVlLFxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdGRyYXdGb3JtYXR0ZWRUZXh0KGZ0ZXh0KVxuXHRcdFx0XHRwb3BUcmFuc2Zvcm0oKVxuXG5cdFx0XHR9KVxuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbkxvYWRpbmcoYWN0aW9uOiAocHJvZ3Jlc3M6IG51bWJlcikgPT4gdm9pZCkge1xuXHRcdGdhbWUuZXZlbnRzLm9uKFwibG9hZGluZ1wiLCBhY3Rpb24pXG5cdH1cblxuXHRmdW5jdGlvbiBvblJlc2l6ZShhY3Rpb246ICgpID0+IHZvaWQpIHtcblx0XHRhcHAub25SZXNpemUoYWN0aW9uKVxuXHR9XG5cblx0ZnVuY3Rpb24gb25FcnJvcihhY3Rpb246IChlcnI6IEVycm9yKSA9PiB2b2lkKSB7XG5cdFx0Z2FtZS5ldmVudHMub24oXCJlcnJvclwiLCBhY3Rpb24pXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVFcnIoZXJyOiBFcnJvcikge1xuXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXG5cblx0XHRhdWRpby5jdHguc3VzcGVuZCgpXG5cblx0XHQvLyBUT0RPOiB0aGlzIHNob3VsZCBvbmx5IHJ1biBvbmNlXG5cdFx0YXBwLnJ1bigoKSA9PiB7XG5cblx0XHRcdGZyYW1lU3RhcnQoKVxuXG5cdFx0XHRkcmF3VW5zY2FsZWQoKCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IHBhZCA9IDMyXG5cdFx0XHRcdGNvbnN0IGdhcCA9IDE2XG5cdFx0XHRcdGNvbnN0IGd3ID0gd2lkdGgoKVxuXHRcdFx0XHRjb25zdCBnaCA9IGhlaWdodCgpXG5cblx0XHRcdFx0Y29uc3QgdGV4dFN0eWxlID0ge1xuXHRcdFx0XHRcdHNpemU6IDM2LFxuXHRcdFx0XHRcdHdpZHRoOiBndyAtIHBhZCAqIDIsXG5cdFx0XHRcdFx0bGV0dGVyU3BhY2luZzogNCxcblx0XHRcdFx0XHRsaW5lU3BhY2luZzogNCxcblx0XHRcdFx0XHRmb250OiBEQkdfRk9OVCxcblx0XHRcdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRyYXdSZWN0KHtcblx0XHRcdFx0XHR3aWR0aDogZ3csXG5cdFx0XHRcdFx0aGVpZ2h0OiBnaCxcblx0XHRcdFx0XHRjb2xvcjogcmdiKDAsIDAsIDI1NSksXG5cdFx0XHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0Y29uc3QgdGl0bGUgPSBmb3JtYXRUZXh0KHtcblx0XHRcdFx0XHQuLi50ZXh0U3R5bGUsXG5cdFx0XHRcdFx0dGV4dDogXCJFcnJvclwiLFxuXHRcdFx0XHRcdHBvczogdmVjMihwYWQpLFxuXHRcdFx0XHRcdGNvbG9yOiByZ2IoMjU1LCAxMjgsIDApLFxuXHRcdFx0XHRcdGZpeGVkOiB0cnVlLFxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdGRyYXdGb3JtYXR0ZWRUZXh0KHRpdGxlKVxuXG5cdFx0XHRcdGRyYXdUZXh0KHtcblx0XHRcdFx0XHQuLi50ZXh0U3R5bGUsXG5cdFx0XHRcdFx0dGV4dDogZXJyLm1lc3NhZ2UsXG5cdFx0XHRcdFx0cG9zOiB2ZWMyKHBhZCwgcGFkICsgdGl0bGUuaGVpZ2h0ICsgZ2FwKSxcblx0XHRcdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHRcdFx0fSlcblxuXHRcdFx0XHRwb3BUcmFuc2Zvcm0oKVxuXHRcdFx0XHRnYW1lLmV2ZW50cy50cmlnZ2VyKFwiZXJyb3JcIiwgZXJyKVxuXG5cdFx0XHR9KVxuXG5cdFx0XHRmcmFtZUVuZCgpXG5cblx0XHR9KVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbkNsZWFudXAoYWN0aW9uOiAoKSA9PiB2b2lkKSB7XG5cdFx0Z2MucHVzaChhY3Rpb24pXG5cdH1cblxuXHRmdW5jdGlvbiBxdWl0KCkge1xuXG5cdFx0Z2FtZS5ldmVudHMub25PbmNlKFwiZnJhbWVFbmRcIiwgKCkgPT4ge1xuXG5cdFx0XHRhcHAucXVpdCgpXG5cblx0XHRcdC8vIGNsZWFyIGNhbnZhc1xuXHRcdFx0Z2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQgfCBnbC5TVEVOQ0lMX0JVRkZFUl9CSVQpXG5cblx0XHRcdC8vIHVuYmluZCBldmVyeXRoaW5nXG5cdFx0XHRjb25zdCBudW1UZXh0dXJlVW5pdHMgPSBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfSU1BR0VfVU5JVFMpXG5cblx0XHRcdGZvciAobGV0IHVuaXQgPSAwOyB1bml0IDwgbnVtVGV4dHVyZVVuaXRzOyB1bml0KyspIHtcblx0XHRcdFx0Z2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHVuaXQpXG5cdFx0XHRcdGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpXG5cdFx0XHRcdGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIG51bGwpXG5cdFx0XHR9XG5cblx0XHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBudWxsKVxuXHRcdFx0Z2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbnVsbClcblx0XHRcdGdsLmJpbmRSZW5kZXJidWZmZXIoZ2wuUkVOREVSQlVGRkVSLCBudWxsKVxuXHRcdFx0Z2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKVxuXG5cdFx0XHQvLyBydW4gYWxsIHNjYXR0ZXJlZCBnYyBldmVudHNcblx0XHRcdGdnbC5kZXN0cm95KClcblx0XHRcdGdjLmZvckVhY2goKGYpID0+IGYoKSlcblxuXHRcdH0pXG5cblx0fVxuXG5cdGxldCBpc0ZpcnN0RnJhbWUgPSB0cnVlXG5cblx0Ly8gbWFpbiBnYW1lIGxvb3Bcblx0YXBwLnJ1bigoKSA9PiB7XG5cblx0XHR0cnkge1xuXG5cdFx0XHRpZiAoIWFzc2V0cy5sb2FkZWQpIHtcblx0XHRcdFx0aWYgKGxvYWRQcm9ncmVzcygpID09PSAxICYmICFpc0ZpcnN0RnJhbWUpIHtcblx0XHRcdFx0XHRhc3NldHMubG9hZGVkID0gdHJ1ZVxuXHRcdFx0XHRcdGdhbWUuZXZlbnRzLnRyaWdnZXIoXCJsb2FkXCIpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCFhc3NldHMubG9hZGVkICYmIGdvcHQubG9hZGluZ1NjcmVlbiAhPT0gZmFsc2UgfHwgaXNGaXJzdEZyYW1lKSB7XG5cdFx0XHRcdGZyYW1lU3RhcnQoKVxuXHRcdFx0XHQvLyBUT0RPOiBDdXJyZW50bHkgaWYgYXNzZXRzIGFyZSBub3QgaW5pdGlhbGx5IGxvYWRlZCBubyB1cGRhdGVzIG9yIHRpbWVycyB3aWxsIGJlIHJ1biwgaG93ZXZlciB0aGV5IHdpbGwgcnVuIGlmIGxvYWRpbmdTY3JlZW4gaXMgc2V0IHRvIGZhbHNlLiBXaGF0J3MgdGhlIGRlc2lyZWQgYmVoYXZpb3Igb3Igc2hvdWxkIHdlIG1ha2UgdGhlbSBjb25zaXN0ZW50P1xuXHRcdFx0XHRkcmF3TG9hZFNjcmVlbigpXG5cdFx0XHRcdGZyYW1lRW5kKClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghZGVidWcucGF1c2VkKSB1cGRhdGVGcmFtZSgpXG5cdFx0XHRcdGNoZWNrRnJhbWUoKVxuXHRcdFx0XHRmcmFtZVN0YXJ0KClcblx0XHRcdFx0ZHJhd0ZyYW1lKClcblx0XHRcdFx0aWYgKGdvcHQuZGVidWcgIT09IGZhbHNlKSBkcmF3RGVidWcoKVxuXHRcdFx0XHRmcmFtZUVuZCgpXG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0ZpcnN0RnJhbWUpIHtcblx0XHRcdFx0aXNGaXJzdEZyYW1lID0gZmFsc2Vcblx0XHRcdH1cblxuXHRcdFx0Z2FtZS5ldmVudHMudHJpZ2dlcihcImZyYW1lRW5kXCIpXG5cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRoYW5kbGVFcnIoZSlcblx0XHR9XG5cblx0fSlcblxuXHQvLyB1cGRhdGUgdmlld3BvcnQgYmFzZWQgb24gdXNlciBzZXR0aW5nIGFuZCBmdWxsc2NyZWVuIHN0YXRlXG5cdGZ1bmN0aW9uIHVwZGF0ZVZpZXdwb3J0KCkge1xuXG5cdFx0Ly8gY29udGVudCBzaXplIChzY2FsZWQgY29udGVudCBzaXplLCB3aXRoIHNjYWxlLCBzdHJldGNoIGFuZCBsZXR0ZXJib3gpXG5cdFx0Ly8gdmlldyBzaXplICh1bnNjYWxlZCB2aWV3cG9ydCBzaXplKVxuXHRcdC8vIHdpbmRvdyBzaXplICh3aWxsIGJlIHRoZSBzYW1lIGFzIHZpZXcgc2l6ZSBleGNlcHQgbGV0dGVyYm94IG1vZGUpXG5cblx0XHQvLyBjYW52YXMgc2l6ZVxuXHRcdGNvbnN0IHBkID0gcGl4ZWxEZW5zaXR5XG5cdFx0Y29uc3QgY3cgPSBnbC5kcmF3aW5nQnVmZmVyV2lkdGggLyBwZFxuXHRcdGNvbnN0IGNoID0gZ2wuZHJhd2luZ0J1ZmZlckhlaWdodCAvIHBkXG5cblx0XHRpZiAoZ29wdC5sZXR0ZXJib3gpIHtcblxuXHRcdFx0aWYgKCFnb3B0LndpZHRoIHx8ICFnb3B0LmhlaWdodCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJMZXR0ZXJib3hpbmcgcmVxdWlyZXMgd2lkdGggYW5kIGhlaWdodCBkZWZpbmVkLlwiKVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByYyA9IGN3IC8gY2hcblx0XHRcdGNvbnN0IHJnID0gZ29wdC53aWR0aCAvIGdvcHQuaGVpZ2h0XG5cblx0XHRcdGlmIChyYyA+IHJnKSB7XG5cdFx0XHRcdGNvbnN0IHN3ID0gY2ggKiByZ1xuXHRcdFx0XHRjb25zdCB4ID0gKGN3IC0gc3cpIC8gMlxuXHRcdFx0XHRnZngudmlld3BvcnQgPSB7XG5cdFx0XHRcdFx0eDogeCxcblx0XHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRcdHdpZHRoOiBzdyxcblx0XHRcdFx0XHRoZWlnaHQ6IGNoLFxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBzaCA9IGN3IC8gcmdcblx0XHRcdFx0Y29uc3QgeSA9IChjaCAtIHNoKSAvIDJcblx0XHRcdFx0Z2Z4LnZpZXdwb3J0ID0ge1xuXHRcdFx0XHRcdHg6IDAsXG5cdFx0XHRcdFx0eTogeSxcblx0XHRcdFx0XHR3aWR0aDogY3csXG5cdFx0XHRcdFx0aGVpZ2h0OiBzaCxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm5cblxuXHRcdH1cblxuXHRcdGlmIChnb3B0LnN0cmV0Y2gpIHtcblx0XHRcdGlmICghZ29wdC53aWR0aCB8fCAhZ29wdC5oZWlnaHQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiU3RyZXRjaGluZyByZXF1aXJlcyB3aWR0aCBhbmQgaGVpZ2h0IGRlZmluZWQuXCIpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Z2Z4LnZpZXdwb3J0ID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0XHR3aWR0aDogY3csXG5cdFx0XHRoZWlnaHQ6IGNoLFxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdEV2ZW50cygpIHtcblxuXHRcdGFwcC5vbkhpZGUoKCkgPT4ge1xuXHRcdFx0aWYgKCFnb3B0LmJhY2tncm91bmRBdWRpbykge1xuXHRcdFx0XHRhdWRpby5jdHguc3VzcGVuZCgpXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdGFwcC5vblNob3coKCkgPT4ge1xuXHRcdFx0aWYgKCFnb3B0LmJhY2tncm91bmRBdWRpbyAmJiAhZGVidWcucGF1c2VkKSB7XG5cdFx0XHRcdGF1ZGlvLmN0eC5yZXN1bWUoKVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRhcHAub25SZXNpemUoKCkgPT4ge1xuXHRcdFx0aWYgKGFwcC5pc0Z1bGxzY3JlZW4oKSkgcmV0dXJuXG5cdFx0XHRjb25zdCBmaXhlZFNpemUgPSBnb3B0LndpZHRoICYmIGdvcHQuaGVpZ2h0XG5cdFx0XHRpZiAoZml4ZWRTaXplICYmICFnb3B0LnN0cmV0Y2ggJiYgIWdvcHQubGV0dGVyYm94KSByZXR1cm5cblx0XHRcdGNhbnZhcy53aWR0aCA9IGNhbnZhcy5vZmZzZXRXaWR0aCAqIHBpeGVsRGVuc2l0eVxuXHRcdFx0Y2FudmFzLmhlaWdodCA9IGNhbnZhcy5vZmZzZXRIZWlnaHQgKiBwaXhlbERlbnNpdHlcblx0XHRcdHVwZGF0ZVZpZXdwb3J0KClcblx0XHRcdGlmICghZml4ZWRTaXplKSB7XG5cdFx0XHRcdGdmeC5mcmFtZUJ1ZmZlci5mcmVlKClcblx0XHRcdFx0Z2Z4LmZyYW1lQnVmZmVyID0gbmV3IEZyYW1lQnVmZmVyKGdnbCwgZ2wuZHJhd2luZ0J1ZmZlcldpZHRoLCBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0KVxuXHRcdFx0XHRnZngud2lkdGggPSBnbC5kcmF3aW5nQnVmZmVyV2lkdGggLyBwaXhlbERlbnNpdHlcblx0XHRcdFx0Z2Z4LmhlaWdodCA9IGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQgLyBwaXhlbERlbnNpdHlcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0aWYgKGdvcHQuZGVidWcgIT09IGZhbHNlKSB7XG5cdFx0XHRhcHAub25LZXlQcmVzcyhcImYxXCIsICgpID0+IGRlYnVnLmluc3BlY3QgPSAhZGVidWcuaW5zcGVjdClcblx0XHRcdGFwcC5vbktleVByZXNzKFwiZjJcIiwgKCkgPT4gZGVidWcuY2xlYXJMb2coKSlcblx0XHRcdGFwcC5vbktleVByZXNzKFwiZjhcIiwgKCkgPT4gZGVidWcucGF1c2VkID0gIWRlYnVnLnBhdXNlZClcblx0XHRcdGFwcC5vbktleVByZXNzKFwiZjdcIiwgKCkgPT4ge1xuXHRcdFx0XHRkZWJ1Zy50aW1lU2NhbGUgPSB0b0ZpeGVkKGNsYW1wKGRlYnVnLnRpbWVTY2FsZSAtIDAuMiwgMCwgMiksIDEpXG5cdFx0XHR9KVxuXHRcdFx0YXBwLm9uS2V5UHJlc3MoXCJmOVwiLCAoKSA9PiB7XG5cdFx0XHRcdGRlYnVnLnRpbWVTY2FsZSA9IHRvRml4ZWQoY2xhbXAoZGVidWcudGltZVNjYWxlICsgMC4yLCAwLCAyKSwgMSlcblx0XHRcdH0pXG5cdFx0XHRhcHAub25LZXlQcmVzcyhcImYxMFwiLCAoKSA9PiBkZWJ1Zy5zdGVwRnJhbWUoKSlcblx0XHR9XG5cblx0XHRpZiAoZ29wdC5idXJwKSB7XG5cdFx0XHRhcHAub25LZXlQcmVzcyhcImJcIiwgKCkgPT4gYnVycCgpKVxuXHRcdH1cblxuXHR9XG5cblx0dXBkYXRlVmlld3BvcnQoKVxuXHRpbml0RXZlbnRzKClcblxuXHQvLyB0aGUgZXhwb3J0ZWQgY3R4IGhhbmRsZVxuXHRjb25zdCBjdHg6IEthYm9vbUN0eCA9IHtcblx0XHRWRVJTSU9OLFxuXHRcdC8vIGFzc2V0IGxvYWRcblx0XHRsb2FkUm9vdCxcblx0XHRsb2FkUHJvZ3Jlc3MsXG5cdFx0bG9hZFNwcml0ZSxcblx0XHRsb2FkU3ByaXRlQXRsYXMsXG5cdFx0bG9hZFNvdW5kLFxuXHRcdGxvYWRCaXRtYXBGb250LFxuXHRcdGxvYWRGb250LFxuXHRcdGxvYWRTaGFkZXIsXG5cdFx0bG9hZFNoYWRlclVSTCxcblx0XHRsb2FkQXNlcHJpdGUsXG5cdFx0bG9hZFBlZGl0LFxuXHRcdGxvYWRCZWFuLFxuXHRcdGxvYWRKU09OLFxuXHRcdGxvYWQsXG5cdFx0Z2V0U3ByaXRlLFxuXHRcdGdldFNvdW5kLFxuXHRcdGdldEZvbnQsXG5cdFx0Z2V0Qml0bWFwRm9udCxcblx0XHRnZXRTaGFkZXIsXG5cdFx0Z2V0QXNzZXQsXG5cdFx0QXNzZXQsXG5cdFx0U3ByaXRlRGF0YSxcblx0XHRTb3VuZERhdGEsXG5cdFx0Ly8gcXVlcnlcblx0XHR3aWR0aCxcblx0XHRoZWlnaHQsXG5cdFx0Y2VudGVyLFxuXHRcdGR0LFxuXHRcdHRpbWU6IGFwcC50aW1lLFxuXHRcdHNjcmVlbnNob3Q6IGFwcC5zY3JlZW5zaG90LFxuXHRcdHJlY29yZCxcblx0XHRpc0ZvY3VzZWQsXG5cdFx0c2V0Q3Vyc29yOiBhcHAuc2V0Q3Vyc29yLFxuXHRcdGdldEN1cnNvcjogYXBwLmdldEN1cnNvcixcblx0XHRzZXRDdXJzb3JMb2NrZWQ6IGFwcC5zZXRDdXJzb3JMb2NrZWQsXG5cdFx0aXNDdXJzb3JMb2NrZWQ6IGFwcC5pc0N1cnNvckxvY2tlZCxcblx0XHRzZXRGdWxsc2NyZWVuOiBhcHAuc2V0RnVsbHNjcmVlbixcblx0XHRpc0Z1bGxzY3JlZW46IGFwcC5pc0Z1bGxzY3JlZW4sXG5cdFx0aXNUb3VjaHNjcmVlbjogYXBwLmlzVG91Y2hzY3JlZW4sXG5cdFx0b25Mb2FkLFxuXHRcdG9uTG9hZGluZyxcblx0XHRvblJlc2l6ZSxcblx0XHRvbkdhbWVwYWRDb25uZWN0OiBhcHAub25HYW1lcGFkQ29ubmVjdCxcblx0XHRvbkdhbWVwYWREaXNjb25uZWN0OiBhcHAub25HYW1lcGFkRGlzY29ubmVjdCxcblx0XHRvbkVycm9yLFxuXHRcdG9uQ2xlYW51cCxcblx0XHQvLyBtaXNjXG5cdFx0Y2FtUG9zLFxuXHRcdGNhbVNjYWxlLFxuXHRcdGNhbVJvdCxcblx0XHRzaGFrZSxcblx0XHR0b1NjcmVlbixcblx0XHR0b1dvcmxkLFxuXHRcdHNldEdyYXZpdHksXG5cdFx0Z2V0R3Jhdml0eSxcblx0XHRzZXRCYWNrZ3JvdW5kLFxuXHRcdGdldEJhY2tncm91bmQsXG5cdFx0Z2V0R2FtZXBhZHM6IGFwcC5nZXRHYW1lcGFkcyxcblx0XHQvLyBvYmpcblx0XHRhZGQsXG5cdFx0bWFrZSxcblx0XHRkZXN0cm95LFxuXHRcdGRlc3Ryb3lBbGwsXG5cdFx0Z2V0LFxuXHRcdHJlYWRkLFxuXHRcdC8vIGNvbXBzXG5cdFx0cG9zLFxuXHRcdHNjYWxlLFxuXHRcdHJvdGF0ZSxcblx0XHRjb2xvcixcblx0XHRvcGFjaXR5LFxuXHRcdGFuY2hvcixcblx0XHRhcmVhLFxuXHRcdHNwcml0ZSxcblx0XHR0ZXh0LFxuXHRcdHBvbHlnb24sXG5cdFx0cmVjdCxcblx0XHRjaXJjbGUsXG5cdFx0dXZxdWFkLFxuXHRcdG91dGxpbmUsXG5cdFx0Ym9keSxcblx0XHRkb3VibGVKdW1wLFxuXHRcdHNoYWRlcixcblx0XHR0aW1lcixcblx0XHRmaXhlZCxcblx0XHRzdGF5LFxuXHRcdGhlYWx0aCxcblx0XHRsaWZlc3Bhbixcblx0XHR6LFxuXHRcdG1vdmUsXG5cdFx0b2Zmc2NyZWVuLFxuXHRcdGZvbGxvdyxcblx0XHRzdGF0ZSxcblx0XHRmYWRlSW4sXG5cdFx0bWFzayxcblx0XHRkcmF3b24sXG5cdFx0dGlsZSxcblx0XHRhZ2VudCxcblx0XHQvLyBncm91cCBldmVudHNcblx0XHRvbixcblx0XHRvblVwZGF0ZSxcblx0XHRvbkRyYXcsXG5cdFx0b25BZGQsXG5cdFx0b25EZXN0cm95LFxuXHRcdG9uQ2xpY2ssXG5cdFx0b25Db2xsaWRlLFxuXHRcdG9uQ29sbGlkZVVwZGF0ZSxcblx0XHRvbkNvbGxpZGVFbmQsXG5cdFx0b25Ib3Zlcixcblx0XHRvbkhvdmVyVXBkYXRlLFxuXHRcdG9uSG92ZXJFbmQsXG5cdFx0Ly8gaW5wdXRcblx0XHRvbktleURvd246IGFwcC5vbktleURvd24sXG5cdFx0b25LZXlQcmVzczogYXBwLm9uS2V5UHJlc3MsXG5cdFx0b25LZXlQcmVzc1JlcGVhdDogYXBwLm9uS2V5UHJlc3NSZXBlYXQsXG5cdFx0b25LZXlSZWxlYXNlOiBhcHAub25LZXlSZWxlYXNlLFxuXHRcdG9uTW91c2VEb3duOiBhcHAub25Nb3VzZURvd24sXG5cdFx0b25Nb3VzZVByZXNzOiBhcHAub25Nb3VzZVByZXNzLFxuXHRcdG9uTW91c2VSZWxlYXNlOiBhcHAub25Nb3VzZVJlbGVhc2UsXG5cdFx0b25Nb3VzZU1vdmU6IGFwcC5vbk1vdXNlTW92ZSxcblx0XHRvbkNoYXJJbnB1dDogYXBwLm9uQ2hhcklucHV0LFxuXHRcdG9uVG91Y2hTdGFydDogYXBwLm9uVG91Y2hTdGFydCxcblx0XHRvblRvdWNoTW92ZTogYXBwLm9uVG91Y2hNb3ZlLFxuXHRcdG9uVG91Y2hFbmQ6IGFwcC5vblRvdWNoRW5kLFxuXHRcdG9uU2Nyb2xsOiBhcHAub25TY3JvbGwsXG5cdFx0b25IaWRlOiBhcHAub25IaWRlLFxuXHRcdG9uU2hvdzogYXBwLm9uU2hvdyxcblx0XHRvbkdhbWVwYWRCdXR0b25Eb3duOiBhcHAub25HYW1lcGFkQnV0dG9uRG93bixcblx0XHRvbkdhbWVwYWRCdXR0b25QcmVzczogYXBwLm9uR2FtZXBhZEJ1dHRvblByZXNzLFxuXHRcdG9uR2FtZXBhZEJ1dHRvblJlbGVhc2U6IGFwcC5vbkdhbWVwYWRCdXR0b25SZWxlYXNlLFxuXHRcdG9uR2FtZXBhZFN0aWNrOiBhcHAub25HYW1lcGFkU3RpY2ssXG5cdFx0bW91c2VQb3M6IG1vdXNlUG9zLFxuXHRcdG1vdXNlRGVsdGFQb3M6IGFwcC5tb3VzZURlbHRhUG9zLFxuXHRcdGlzS2V5RG93bjogYXBwLmlzS2V5RG93bixcblx0XHRpc0tleVByZXNzZWQ6IGFwcC5pc0tleVByZXNzZWQsXG5cdFx0aXNLZXlQcmVzc2VkUmVwZWF0OiBhcHAuaXNLZXlQcmVzc2VkUmVwZWF0LFxuXHRcdGlzS2V5UmVsZWFzZWQ6IGFwcC5pc0tleVJlbGVhc2VkLFxuXHRcdGlzTW91c2VEb3duOiBhcHAuaXNNb3VzZURvd24sXG5cdFx0aXNNb3VzZVByZXNzZWQ6IGFwcC5pc01vdXNlUHJlc3NlZCxcblx0XHRpc01vdXNlUmVsZWFzZWQ6IGFwcC5pc01vdXNlUmVsZWFzZWQsXG5cdFx0aXNNb3VzZU1vdmVkOiBhcHAuaXNNb3VzZU1vdmVkLFxuXHRcdGlzR2FtZXBhZEJ1dHRvblByZXNzZWQ6IGFwcC5pc0dhbWVwYWRCdXR0b25QcmVzc2VkLFxuXHRcdGlzR2FtZXBhZEJ1dHRvbkRvd246IGFwcC5pc0dhbWVwYWRCdXR0b25Eb3duLFxuXHRcdGlzR2FtZXBhZEJ1dHRvblJlbGVhc2VkOiBhcHAuaXNHYW1lcGFkQnV0dG9uUmVsZWFzZWQsXG5cdFx0Z2V0R2FtZXBhZFN0aWNrOiBhcHAuZ2V0R2FtZXBhZFN0aWNrLFxuXHRcdGNoYXJJbnB1dHRlZDogYXBwLmNoYXJJbnB1dHRlZCxcblx0XHQvLyB0aW1lclxuXHRcdGxvb3AsXG5cdFx0d2FpdCxcblx0XHQvLyBhdWRpb1xuXHRcdHBsYXksXG5cdFx0dm9sdW1lLFxuXHRcdGJ1cnAsXG5cdFx0YXVkaW9DdHg6IGF1ZGlvLmN0eCxcblx0XHQvLyBtYXRoXG5cdFx0TGluZSxcblx0XHRSZWN0LFxuXHRcdENpcmNsZSxcblx0XHRQb2x5Z29uLFxuXHRcdFZlYzIsXG5cdFx0Q29sb3IsXG5cdFx0TWF0NCxcblx0XHRRdWFkLFxuXHRcdFJORyxcblx0XHRyYW5kLFxuXHRcdHJhbmRpLFxuXHRcdHJhbmRTZWVkLFxuXHRcdHZlYzIsXG5cdFx0cmdiLFxuXHRcdGhzbDJyZ2IsXG5cdFx0cXVhZCxcblx0XHRjaG9vc2UsXG5cdFx0Y2hhbmNlLFxuXHRcdGxlcnAsXG5cdFx0dHdlZW4sXG5cdFx0ZWFzaW5ncyxcblx0XHRtYXAsXG5cdFx0bWFwYyxcblx0XHR3YXZlLFxuXHRcdGRlZzJyYWQsXG5cdFx0cmFkMmRlZyxcblx0XHRjbGFtcCxcblx0XHR0ZXN0TGluZUxpbmUsXG5cdFx0dGVzdFJlY3RSZWN0LFxuXHRcdHRlc3RSZWN0TGluZSxcblx0XHR0ZXN0UmVjdFBvaW50LFxuXHRcdHRlc3RDaXJjbGVQb2x5Z29uLFxuXHRcdHRlc3RMaW5lUG9pbnQsXG5cdFx0dGVzdExpbmVDaXJjbGUsXG5cdFx0Ly8gcmF3IGRyYXdcblx0XHRkcmF3U3ByaXRlLFxuXHRcdGRyYXdUZXh0LFxuXHRcdGZvcm1hdFRleHQsXG5cdFx0ZHJhd1JlY3QsXG5cdFx0ZHJhd0xpbmUsXG5cdFx0ZHJhd0xpbmVzLFxuXHRcdGRyYXdUcmlhbmdsZSxcblx0XHRkcmF3Q2lyY2xlLFxuXHRcdGRyYXdFbGxpcHNlLFxuXHRcdGRyYXdVVlF1YWQsXG5cdFx0ZHJhd1BvbHlnb24sXG5cdFx0ZHJhd0Zvcm1hdHRlZFRleHQsXG5cdFx0ZHJhd01hc2tlZCxcblx0XHRkcmF3U3VidHJhY3RlZCxcblx0XHRwdXNoVHJhbnNmb3JtLFxuXHRcdHBvcFRyYW5zZm9ybSxcblx0XHRwdXNoVHJhbnNsYXRlLFxuXHRcdHB1c2hTY2FsZSxcblx0XHRwdXNoUm90YXRlLFxuXHRcdHB1c2hNYXRyaXgsXG5cdFx0dXNlUG9zdEVmZmVjdCxcblx0XHRtYWtlQ2FudmFzLFxuXHRcdC8vIGRlYnVnXG5cdFx0ZGVidWcsXG5cdFx0Ly8gc2NlbmVcblx0XHRzY2VuZSxcblx0XHRnbyxcblx0XHRvblNjZW5lTGVhdmUsXG5cdFx0Ly8gbGV2ZWxcblx0XHRhZGRMZXZlbCxcblx0XHQvLyBzdG9yYWdlXG5cdFx0Z2V0RGF0YSxcblx0XHRzZXREYXRhLFxuXHRcdGRvd25sb2FkLFxuXHRcdGRvd25sb2FkSlNPTixcblx0XHRkb3dubG9hZFRleHQsXG5cdFx0ZG93bmxvYWRCbG9iLFxuXHRcdC8vIHBsdWdpblxuXHRcdHBsdWcsXG5cdFx0Ly8gY2hhciBzZXRzXG5cdFx0QVNDSUlfQ0hBUlMsXG5cdFx0Ly8gZG9tXG5cdFx0Y2FudmFzOiBhcHAuY2FudmFzLFxuXHRcdC8vIG1pc2Ncblx0XHRhZGRLYWJvb20sXG5cdFx0Ly8gZGlyc1xuXHRcdExFRlQ6IFZlYzIuTEVGVCxcblx0XHRSSUdIVDogVmVjMi5SSUdIVCxcblx0XHRVUDogVmVjMi5VUCxcblx0XHRET1dOOiBWZWMyLkRPV04sXG5cdFx0Ly8gY29sb3JzXG5cdFx0UkVEOiBDb2xvci5SRUQsXG5cdFx0R1JFRU46IENvbG9yLkdSRUVOLFxuXHRcdEJMVUU6IENvbG9yLkJMVUUsXG5cdFx0WUVMTE9XOiBDb2xvci5ZRUxMT1csXG5cdFx0TUFHRU5UQTogQ29sb3IuTUFHRU5UQSxcblx0XHRDWUFOOiBDb2xvci5DWUFOLFxuXHRcdFdISVRFOiBDb2xvci5XSElURSxcblx0XHRCTEFDSzogQ29sb3IuQkxBQ0ssXG5cdFx0cXVpdCxcblx0XHQvLyBoZWxwZXJzXG5cdFx0RXZlbnQsXG5cdFx0RXZlbnRIYW5kbGVyLFxuXHRcdEV2ZW50Q29udHJvbGxlcixcblx0fVxuXG5cdGlmIChnb3B0LnBsdWdpbnMpIHtcblx0XHRnb3B0LnBsdWdpbnMuZm9yRWFjaChwbHVnKVxuXHR9XG5cblx0Ly8gZXhwb3J0IGV2ZXJ5dGhpbmcgdG8gd2luZG93IGlmIGdsb2JhbCBpcyBzZXRcblx0aWYgKGdvcHQuZ2xvYmFsICE9PSBmYWxzZSkge1xuXHRcdGZvciAoY29uc3QgayBpbiBjdHgpIHtcblx0XHRcdHdpbmRvd1trXSA9IGN0eFtrXVxuXHRcdH1cblx0fVxuXG5cdGlmIChnb3B0LmZvY3VzICE9PSBmYWxzZSkge1xuXHRcdGFwcC5jYW52YXMuZm9jdXMoKVxuXHR9XG5cblx0cmV0dXJuIGN0eFxuXG59XG4iLCAiaW1wb3J0IGthYm9vbSBmcm9tICdrYWJvb20nXHJcblxyXG5sZXQgYmFzZVVybCA9IGdldFVybFZhcnMoKVsnYmFzZVVybCddXHJcbmxldCBwYXJhbXMgPSBKU09OLnBhcnNlKGdldFVybFZhcnMoKVsncGFyYW1zJ10pXHJcblxyXG5rYWJvb20oe1xyXG4gICAgZm9udDogJ21zeWgnLFxyXG4gICAgd2lkdGg6IDgwMCxcclxuICAgIGhlaWdodDogMTAwMCxcclxuICAgIGJhY2tncm91bmQ6IFsyNTUsIDI1NSwgMjU1XVxyXG59KVxyXG5sb2FkRm9udCgnbXN5aCcsIGAke2Jhc2VVcmx9Zm9udHMvbXN5aC1YLnR0ZmApXHJcblxyXG5jb25zdCBTQ0FMRSA9IDAuN1xyXG5jb25zdCBCQVNFX0hFSUdIVCA9IDYwMFxyXG5jb25zdCBCQVNFX0xFRlQgPSAyNTBcclxuY29uc3QgcGFkID0gMjVcclxuXHJcbmxvYWRTcHJpdGUoJ2ltZzMnLCBiYXNlVXJsICsgJ2Nvb2tib29rL21hcG9fdG9mdS8zLnBuZycpXHJcbmltZzMgPSBhZGQoW1xyXG4gICAgc3ByaXRlKCdpbWczJyksXHJcbiAgICAvLyBNYWtlIHRoZSBiYWNrZ3JvdW5kIGNlbnRlcmVkIG9uIHRoZSBzY3JlZW5cclxuICAgIHBvcygzMCwgMCksXHJcbiAgICAvLyBBbGxvdyB0aGUgYmFja2dyb3VuZCB0byBiZSBzY2FsZWRcclxuICAgIHNjYWxlKFNDQUxFKSxcclxuICAgIC8vIEtlZXAgdGhlIGJhY2tncm91bmQgcG9zaXRpb24gZml4ZWQgZXZlbiB3aGVuIHRoZSBjYW1lcmEgbW92ZXNcclxuICAgIGZpeGVkKClcclxuXSlcclxuXHJcbmFkZChbXHJcbiAgICB0ZXh0KCdbYmx1ZV1cdTc3RTVcdThCQzZcdTcwQjlcdUZGMUFbL2JsdWVdJywge1xyXG4gICAgICAgIC8vIFdoYXQgZm9udCB0byB1c2VcclxuICAgICAgICBzaXplOiAyNCxcclxuICAgICAgICAvLyBJdCdsbCB3cmFwIHRvIG5leHQgbGluZSBpZiB0aGUgdGV4dCB3aWR0aCBleGNlZWRzIHRoZSB3aWR0aCBvcHRpb24gc3BlY2lmaWVkIGhlcmVcclxuICAgICAgICB3aWR0aDogd2lkdGgoKSAtIHBhZCAqIDIsXHJcbiAgICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgICAgIGJsdWU6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMjU1KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBwb3MocGFkLCBCQVNFX0hFSUdIVClcclxuXSlcclxuXHJcbmxldCBpID0gMFxyXG5mb3IgKGxldCBudXRyaXRpb25fZmFjdCBvZiBwYXJhbXNbJ251dHJpdGlvbl9mYWN0cyddKSB7XHJcbiAgICBpKytcclxuICAgIGFkZChbXHJcbiAgICAgICAgdGV4dChgW2JsdWVdLlsvYmx1ZV0gW2JsYWNrXSR7bnV0cml0aW9uX2ZhY3R9Wy9ibGFja11gLCB7XHJcbiAgICAgICAgICAgIC8vIFdoYXQgZm9udCB0byB1c2VcclxuICAgICAgICAgICAgZm9udDogJ21zeWgnLFxyXG4gICAgICAgICAgICBzaXplOiAxOCxcclxuICAgICAgICAgICAgLy8gSXQnbGwgd3JhcCB0byBuZXh0IGxpbmUgaWYgdGhlIHRleHQgd2lkdGggZXhjZWVkcyB0aGUgd2lkdGggb3B0aW9uIHNwZWNpZmllZCBoZXJlXHJcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCgpIC0gcGFkICogMixcclxuICAgICAgICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgICAgICAgICBibGFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBibHVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigwLCAwLCAyNTUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBwb3MocGFkICogMiwgQkFTRV9IRUlHSFQgKyAzMCAqIChpICsgMSkpXHJcbiAgICBdKVxyXG59XHJcblxyXG5hZGQoW1xyXG4gICAgdGV4dCgnW2JsdWVdXHU2Q0U4XHU2MTBGXHU0RThCXHU5ODc5XHVGRjFBWy9ibHVlXScsIHtcclxuICAgICAgICAvLyBXaGF0IGZvbnQgdG8gdXNlXHJcbiAgICAgICAgZm9udDogJ21zeWgnLFxyXG4gICAgICAgIHNpemU6IDI0LFxyXG4gICAgICAgIC8vIEl0J2xsIHdyYXAgdG8gbmV4dCBsaW5lIGlmIHRoZSB0ZXh0IHdpZHRoIGV4Y2VlZHMgdGhlIHdpZHRoIG9wdGlvbiBzcGVjaWZpZWQgaGVyZVxyXG4gICAgICAgIHdpZHRoOiBCQVNFX0xFRlQsXHJcbiAgICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgICAgIGJsdWU6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMjU1KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBwb3MoQkFTRV9MRUZULCBCQVNFX0hFSUdIVClcclxuXSlcclxuXHJcbmkgPSAwXHJcbmZvciAobGV0IHRpcCBvZiBwYXJhbXNbJ3RpcHMnXSkge1xyXG4gICAgaSsrXHJcbiAgICBhZGQoW1xyXG4gICAgICAgIHRleHQoYFtibHVlXSR7aX0uWy9ibHVlXSBbYmxhY2tdJHt0aXB9Wy9ibGFja11gLCB7XHJcbiAgICAgICAgICAgIC8vIFdoYXQgZm9udCB0byB1c2VcclxuICAgICAgICAgICAgZm9udDogJ21zeWgnLFxyXG4gICAgICAgICAgICBzaXplOiAxOCxcclxuICAgICAgICAgICAgLy8gSXQnbGwgd3JhcCB0byBuZXh0IGxpbmUgaWYgdGhlIHRleHQgd2lkdGggZXhjZWVkcyB0aGUgd2lkdGggb3B0aW9uIHNwZWNpZmllZCBoZXJlXHJcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCgpIC0gQkFTRV9MRUZUIC0gNTAsXHJcbiAgICAgICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgICAgICAgYmxhY2s6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYmx1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMjU1KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgcG9zKEJBU0VfTEVGVCwgQkFTRV9IRUlHSFQgKyAzMCAqIChpICsgMSkpXHJcbiAgICBdKVxyXG59XHJcblxyXG5sZXQgc2NhbGUgPSBTQ0FMRVxyXG5sZXQgZGlyZWN0aW9uID0gLTFcclxub25VcGRhdGUoKCkgPT4ge1xyXG4gICAgaW1nMy5zY2FsZVRvKHNjYWxlKVxyXG4gICAgLy8gaW1nMi5zY2FsZVRvKHNjYWxlKVxyXG4gICAgc2NhbGUgKz0gZGlyZWN0aW9uICogMC4wMDFcclxuICAgIGlmIChzY2FsZSA8IDAuNjgpIHtcclxuICAgICAgICBkaXJlY3Rpb24gPSAxXHJcbiAgICB9XHJcbiAgICBpZiAoc2NhbGUgPiAwLjcyKSB7XHJcbiAgICAgICAgZGlyZWN0aW9uID0gLTFcclxuICAgIH1cclxufSlcclxuXHJcbmZ1bmN0aW9uIGdldFVybFZhcnMoKSB7XHJcbiAgICB2YXIgdXJsID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxyXG4gICAgdmFyIHZhcnMgPSBbXSxcclxuICAgICAgICBoYXNoXHJcbiAgICB2YXIgaGFzaGVzID0gdXJsLnNsaWNlKHVybC5pbmRleE9mKCc/JykgKyAxKS5zcGxpdCgnJicpXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhc2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGhhc2ggPSBoYXNoZXNbaV0uc3BsaXQoJz0nKVxyXG4gICAgICAgIHZhcnMucHVzaChoYXNoWzBdKVxyXG4gICAgICAgIHZhcnNbaGFzaFswXV0gPSBoYXNoWzFdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFyc1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7O0FBT08sU0FBU0EsR0FBUUMsS0FBcUI7QUFDNUMsU0FBT0EsTUFBTSxLQUFLLEtBQUs7QUFDeEI7QUFGZ0JDLEVBQUFGLElBQUEsU0FBQTtBQUlULFNBQVNHLEdBQVFDLEtBQXFCO0FBQzVDLFNBQU9BLE1BQU0sTUFBTSxLQUFLO0FBQ3pCO0FBRmdCRixFQUFBQyxJQUFBLFNBQUE7QUFJVCxTQUFTRSxHQUNmQyxLQUNBQyxHQUNBQyxHQUNTO0FBQ1QsU0FBSUQsSUFBTUMsSUFDRkgsR0FBTUMsS0FBS0UsR0FBS0QsQ0FBRyxJQUVwQixLQUFLLElBQUksS0FBSyxJQUFJRCxLQUFLQyxDQUFHLEdBQUdDLENBQUc7QUFDeEM7QUFUZ0JOLEVBQUFHLElBQUEsT0FBQTtBQVdULFNBQVNJLEdBQ2ZDLEtBQ0FDLEdBQ0FDLEdBQ0k7QUFDSixNQUFJLE9BQU9GLE9BQU0sWUFBWSxPQUFPQyxLQUFNO0FBQ3pDLFdBQU9ELE9B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LEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxHQUNyREMsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUNwREMsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUNwREMsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUNwREMsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUNwREMsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUNwREMsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUNwREMsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUNwREMsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUNwREMsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUNwREMsS0FBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUNuREMsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUNuREMsS0FBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUNuREMsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUNuREMsS0FBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUV4RHRCLE1BQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLElBQUlJLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUMsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJQyxHQUN6RE4sRUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJSSxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUlHLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUMsSUFDM0RSLEVBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLElBQUlLLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUUsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJRSxHQUN6RFQsRUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJTSxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUlFLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUMsSUFFNURULEVBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSUksSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJQyxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUlDLElBQzNETixFQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJSSxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUlHLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUMsR0FDekRSLEVBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSUssSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJRSxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUlFLElBQzNEVCxFQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJTSxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUlFLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUMsR0FFMURULEVBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLElBQUlVLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUMsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJQyxHQUN6RFosRUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJVSxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUlHLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUMsSUFDM0RkLEVBQUksRUFBRSxJQUFJLEtBQUssRUFBRSxDQUFDLElBQUllLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUYsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJRyxHQUMxRGhCLEVBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSVksSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJRSxJQUFNLEtBQUssRUFBRSxDQUFDLElBQUlFLElBRTVEaEIsRUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJaUIsSUFBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJQyxLQUFNLEtBQUssRUFBRSxDQUFDLElBQUlDLElBQzNEbkIsRUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSWlCLElBQU0sS0FBSyxFQUFFLENBQUMsSUFBSUcsS0FBTSxLQUFLLEVBQUUsQ0FBQyxJQUFJQyxHQUN6RHJCLEVBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSWtCLEtBQU0s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QUFLLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDO0FBQUEsRUFDMUI7QUFDQSxTQUFPO0FBQ1g7IiwKICAibmFtZXMiOiBbImRlZzJyYWQiLCAiZGVnIiwgIl9fbmFtZSIsICJyYWQyZGVnIiwgInJhZCIsICJjbGFtcCIsICJ2YWwiLCAibWluIiwgIm1heCIsICJsZXJwIiwgImEiLCAiYiIsICJ0IiwgIlZlYzIiLCAiQ29sb3IiLCAibWFwIiwgInYiLCAibDEiLCAiaDEiLCAibDIiLCAiaDIiLCAibWFwYyIsICJfVmVjMiIsICJ4IiwgInkiLCAiYW5nbGUiLCAiYXJncyIsICJwMiIsICJ2ZWMyIiwgInMiLCAibGVuIiwgIm5vcm1hbCIsICJvbiIsICJkZXN0IiwgImNvcyIsICJzaW4iLCAibiIsICJtIiwgIm90aGVyIiwgIlJlY3QiLCAiX0NvbG9yIiwgInIiLCAiZyIsICJhcnIiLCAiaGV4IiwgInJlc3VsdCIsICJoIiwgImwiLCAiaHVlMnJnYiIsICJwIiwgInEiLCAiZCIsICJyZ2IiLCAiaHNsMnJnYiIsICJRdWFkIiwgIl9RdWFkIiwgInciLCAicXVhZCIsICJNYXQ0IiwgIl9NYXQ0IiwgImMiLCAibTAiLCAibTEiLCAibTQiLCAibTUiLCAib3V0IiwgImkiLCAiaiIsICJkZXQiLCAiZjAwIiwgImYwMSIsICJmMDIiLCAiZjAzIiwgImYwNCIsICJmMDUiLCAiZjA2IiwgImYwNyIsICJmMDgiLCAiZjA5IiwgImYxMCIsICJmMTEiLCAiZjEyIiwgImYxMyIsICJmMTQiLCAiZjE1IiwgImYxNiIsICJmMTciLCAiZjE4IiwgIndhdmUiLCAibG8iLCAiaGkiLCAiZiIsICJBIiwgIkMiLCAiTSIsICJSTkciLCAic2VlZCIsICJkZWZSTkciLCAicmFuZFNlZWQiLCAicmFuZCIsICJyYW5kaSIsICJjaGFuY2UiLCAiY2hvb3NlIiwgImxpc3QiLCAidGVzdFJlY3RSZWN0IiwgInIxIiwgInIyIiwgInRlc3RMaW5lTGluZVQiLCAiZGVub20iLCAidWEiLCAidWIiLCAidGVzdExpbmVMaW5lIiwgInRlc3RSZWN0TGluZSIsICJ0ZXN0UmVjdFBvaW50IiwgInB0cyIsICJMaW5lIiwgInB0IiwgInRlc3RMaW5lUG9pbnQiLCAidjEiLCAidjIiLCAidGVzdExpbmVDaXJjbGUiLCAiY2lyY2xlIiwgImNlbnRlclRvT3JpZ2luIiwgImRpcyIsICJ0MSIsICJ0MiIsICJ0ZXN0Q2lyY2xlUG9pbnQiLCAidGVzdENpcmNsZVBvbHlnb24iLCAicHJldiIsICJjdXIiLCAidGVzdFBvbHlnb25Qb2ludCIsICJwb2x5IiwgIl9MaW5lIiwgInAxIiwgIl9SZWN0IiwgInBvcyIsICJ3aWR0aCIsICJoZWlnaHQiLCAiUG9seWdvbiIsICJkeCIsICJkeSIsICJDaXJjbGUiLCAiX0NpcmNsZSIsICJjZW50ZXIiLCAicmFkaXVzIiwgInRyIiwgIkVsbGlwc2UiLCAiX0VsbGlwc2UiLCAicngiLCAicnkiLCAiX1BvbHlnb24iLCAidG90YWwiLCAic2F0IiwgIm92ZXJsYXAiLCAiZGlzcGxhY2VtZW50IiwgImF4aXNQcm9qIiwgIm1pbjEiLCAibWF4MSIsICJtaW4yIiwgIm1heDIiLCAibyIsICJvMSIsICJvMiIsICJSZWdpc3RyeSIsICJpZCIsICJFdmVudENvbnRyb2xsZXIiLCAiX0V2ZW50Q29udHJvbGxlciIsICJjYW5jZWwiLCAiZXZlbnRzIiwgImV2IiwgImUiLCAiRXZlbnQiLCAiYWN0aW9uIiwgInJlcyIsICJFdmVudEhhbmRsZXIiLCAibmFtZSIsICJkZWVwRXEiLCAiazEiLCAiazIiLCAiayIsICJiYXNlNjRUb0FycmF5QnVmZmVyIiwgImJhc2U2NCIsICJiaW5zdHIiLCAiYnl0ZXMiLCAiZGF0YVVSTFRvQXJyYXlCdWZmZXIiLCAidXJsIiwgImRvd25sb2FkIiwgImZpbGVuYW1lIiwgImRvd25sb2FkVGV4dCIsICJ0ZXh0IiwgImRvd25sb2FkSlNPTiIsICJkYXRhIiwgImRvd25sb2FkQmxvYiIsICJibG9iIiwgImlzRGF0YVVSTCIsICJzdHIiLCAiZ2V0RmlsZU5hbWUiLCAib3ZlcmxvYWQyIiwgImZuMSIsICJmbjIiLCAiYWwiLCAidWlkIiwgImdldEVycm9yTWVzc2FnZSIsICJlcnJvciIsICJCaW5hcnlIZWFwIiwgImNvbXBhcmVGbiIsICJpdGVtIiwgImxhc3RJdGVtIiwgInBhcmVudCIsICJjaGlsZCIsICJpbmRleDEiLCAiaW5kZXgyIiwgIkdSQVBIRU1FUyIsICJydW5lcyIsICJzdHJpbmciLCAiaW5jcmVtZW50IiwgIm5leHRVbml0cyIsICJpc0dyYXBoZW1lIiwgImlzVmFyaWF0aW9uU2VsZWN0b3IiLCAiaXNEaWFjcml0aWNhbE1hcmsiLCAiaXNaZXJvV2lkdGhKb2luZXIiLCAiY3VycmVudCIsICJpc0ZpcnN0T2ZTdXJyb2dhdGVQYWlyIiwgImN1cnJlbnRQYWlyIiwgIm5leHRQYWlyIiwgImlzUmVnaW9uYWxJbmRpY2F0b3IiLCAiaXNTdWJkaXZpc2lvbkZsYWciLCAiaXNTdXBwbGVtZW50YXJ5U3BlY2lhbHB1cnBvc2VQbGFuZSIsICJpc0ZpdHpwYXRyaWNrTW9kaWZpZXIiLCAiYmV0d2VlbkluY2x1c2l2ZSIsICJjb2RlUG9pbnRGcm9tU3Vycm9nYXRlUGFpciIsICJjb2RlUG9pbnQiLCAicGFpciIsICJoaWdoT2Zmc2V0IiwgImxvd09mZnNldCIsICJ2YWx1ZSIsICJsb3dlciIsICJ1cHBlciIsICJnYW1lcGFkX2RlZmF1bHQiLCAiQnV0dG9uU3RhdGUiLCAiYnRuIiwgIkdhbWVwYWRTdGF0ZSIsICJGUFNDb3VudGVyIiwgImR0IiwgImFwcF9kZWZhdWx0IiwgIm9wdCIsICJzdGF0ZSIsICJ0aW1lIiwgImZwcyIsICJudW1GcmFtZXMiLCAic2NyZWVuc2hvdCIsICJzZXRDdXJzb3IiLCAiZ2V0Q3Vyc29yIiwgInNldEN1cnNvckxvY2tlZCIsICJpc0N1cnNvckxvY2tlZCIsICJlbnRlckZ1bGxzY3JlZW4iLCAiZWwiLCAiZXhpdEZ1bGxzY3JlZW4iLCAiZ2V0RnVsbHNjcmVlbkVsZW1lbnQiLCAic2V0RnVsbHNjcmVlbiIsICJpc0Z1bGxzY3JlZW4iLCAicXVpdCIsICJjYW52YXNFdmVudHMiLCAiZG9jRXZlbnRzIiwgIndpbkV2ZW50cyIsICJyZXNpemVPYnNlcnZlciIsICJydW4iLCAiYWNjdW11bGF0ZWREdCIsICJmcmFtZSIsICJsb29wVGltZSIsICJyZWFsRHQiLCAiZGVzaXJlZER0IiwgInByb2Nlc3NJbnB1dCIsICJyZXNldElucHV0IiwgImlzVG91Y2hzY3JlZW4iLCAibW91c2VQb3MiLCAibW91c2VEZWx0YVBvcyIsICJpc01vdXNlUHJlc3NlZCIsICJpc01vdXNlRG93biIsICJpc01vdXNlUmVsZWFzZWQiLCAiaXNNb3VzZU1vdmVkIiwgImlzS2V5UHJlc3NlZCIsICJpc0tleVByZXNzZWRSZXBlYXQiLCAiaXNLZXlEb3duIiwgImlzS2V5UmVsZWFzZWQiLCAiaXNHYW1lcGFkQnV0dG9uUHJlc3NlZCIsICJpc0dhbWVwYWRCdXR0b25Eb3duIiwgImlzR2FtZXBhZEJ1dHRvblJlbGVhc2VkIiwgIm9uUmVzaXplIiwgIm9uS2V5RG93biIsICJrZXkiLCAib25LZXlQcmVzcyIsICJvbktleVByZXNzUmVwZWF0IiwgIm9uS2V5UmVsZWFzZSIsICJvbk1vdXNlRG93biIsICJtb3VzZSIsICJvbk1vdXNlUHJlc3MiLCAib25Nb3VzZVJlbGVhc2UiLCAib25Nb3VzZU1vdmUiLCAib25DaGFySW5wdXQiLCAib25Ub3VjaFN0YXJ0IiwgIm9uVG91Y2hNb3ZlIiwgIm9uVG91Y2hFbmQiLCAib25TY3JvbGwiLCAib25IaWRlIiwgIm9uU2hvdyIsICJvbkdhbWVwYWRCdXR0b25Eb3duIiwgIm9uR2FtZXBhZEJ1dHRvblByZXNzIiwgIm9uR2FtZXBhZEJ1dHRvblJlbGVhc2UiLCAib25HYW1lcGFkU3RpY2siLCAic3RpY2siLCAib25HYW1lcGFkQ29ubmVjdCIsICJvbkdhbWVwYWREaXNjb25uZWN0IiwgImdldEdhbWVwYWRTdGljayIsICJjaGFySW5wdXR0ZWQiLCAiZ2V0R2FtZXBhZHMiLCAicHJvY2Vzc0dhbWVwYWQiLCAicmVnaXN0ZXJHYW1lcGFkIiwgImJyb3dzZXJHYW1lcGFkIiwgImdhbWVwYWQiLCAicmVtb3ZlR2FtZXBhZCIsICJnYW1lcGFkU3RhdGUiLCAic3RpY2tOYW1lIiwgInBkIiwgImN3IiwgImNoIiwgInd3IiwgIndoIiwgInJ3IiwgInJjIiwgInJhdGlvIiwgIm9mZnNldCIsICJNT1VTRV9CVVRUT05TIiwgIlBSRVZFTlRfREVGQVVMVF9LRVlTIiwgIktFWV9BTElBUyIsICJ0b3VjaGVzIiwgImJveCIsICJrYkdhbWVwYWQiLCAiZW50cmllcyIsICJlbnRyeSIsICJUZXh0dXJlIiwgIl9UZXh0dXJlIiwgImN0eCIsICJnbCIsICJmaWx0ZXIiLCAid3JhcCIsICJpbWciLCAidGV4IiwgIkZyYW1lQnVmZmVyIiwgImJ5dGVzUGVyUm93IiwgInRlbXAiLCAidG9wT2Zmc2V0IiwgImJvdHRvbU9mZnNldCIsICJjYW52YXMiLCAiU2hhZGVyIiwgInZlcnQiLCAiZnJhZyIsICJhdHRyaWJzIiwgInZlcnRTaGFkZXIiLCAiZnJhZ1NoYWRlciIsICJwcm9nIiwgImF0dHJpYiIsICJ2ZXJ0RXJyb3IiLCAiZnJhZ0Vycm9yIiwgInVuaWZvcm0iLCAibG9jIiwgIkJhdGNoUmVuZGVyZXIiLCAiZm9ybWF0IiwgIm1heFZlcnRpY2VzIiwgIm1heEluZGljZXMiLCAic3VtIiwgInByaW1pdGl2ZSIsICJ2ZXJ0cyIsICJpbmRpY2VzIiwgInNoYWRlciIsICJpbmRleE9mZnNldCIsICJnZW5TdGFjayIsICJzZXRGdW5jIiwgInN0YWNrIiwgInB1c2giLCAicG9wIiwgImluaXRHZngiLCAib3B0cyIsICJnYyIsICJvbkRlc3Ryb3kiLCAiZGVzdHJveSIsICJjdXJWZXJ0ZXhGb3JtYXQiLCAic2V0VmVydGV4Rm9ybWF0IiwgImZtdCIsICJzdHJpZGUiLCAicHVzaFRleHR1cmUyRCIsICJwb3BUZXh0dXJlMkQiLCAicHVzaEFycmF5QnVmZmVyIiwgInBvcEFycmF5QnVmZmVyIiwgInB1c2hFbGVtZW50QXJyYXlCdWZmZXIiLCAicG9wRWxlbWVudEFycmF5QnVmZmVyIiwgInB1c2hGcmFtZWJ1ZmZlciIsICJwb3BGcmFtZWJ1ZmZlciIsICJwdXNoUmVuZGVyYnVmZmVyIiwgInBvcFJlbmRlcmJ1ZmZlciIsICJwdXNoVmlld3BvcnQiLCAicG9wVmlld3BvcnQiLCAicHVzaFByb2dyYW0iLCAicG9wUHJvZ3JhbSIsICJBc3NldCIsICJfQXNzZXQiLCAibG9hZGVyIiwgImVyciIsICJhc3NldCIsICJBc3NldEJ1Y2tldCIsICJoYW5kbGUiLCAibG9hZGVkIiwgImZldGNoVVJMIiwgImZldGNoSlNPTiIsICJwYXRoIiwgImZldGNoVGV4dCIsICJmZXRjaEFycmF5QnVmZmVyIiwgImxvYWRJbWciLCAic3JjIiwgInJlc29sdmUiLCAicmVqZWN0IiwgImMyIiwgImMzIiwgImM0IiwgImM1IiwgImVhc2luZ3MiLCAiZWFzaW5nc19kZWZhdWx0IiwgIlRleFBhY2tlciIsICJnZngiLCAiY3VyVGV4IiwgIlZFUlNJT04iLCAiQVNDSUlfQ0hBUlMiLCAiREVGX0FOQ0hPUiIsICJCR19HUklEX1NJWkUiLCAiREVGX0ZPTlQiLCAiREJHX0ZPTlQiLCAiREVGX1RFWFRfU0laRSIsICJERUZfVEVYVF9DQUNIRV9TSVpFIiwgIk1BWF9URVhUX0NBQ0hFX1NJWkUiLCAiRk9OVF9BVExBU19XSURUSCIsICJGT05UX0FUTEFTX0hFSUdIVCIsICJTUFJJVEVfQVRMQVNfV0lEVEgiLCAiU1BSSVRFX0FUTEFTX0hFSUdIVCIsICJVVl9QQUQiLCAiREVGX0hBU0hfR1JJRF9TSVpFIiwgIkRFRl9GT05UX0ZJTFRFUiIsICJMT0dfTUFYIiwgIkxPR19USU1FIiwgIlZFUlRFWF9GT1JNQVQiLCAiU1RSSURFIiwgIk1BWF9CQVRDSEVEX1FVQUQiLCAiTUFYX0JBVENIRURfVkVSVFMiLCAiTUFYX0JBVENIRURfSU5ESUNFUyIsICJWRVJUX1RFTVBMQVRFIiwgIkZSQUdfVEVNUExBVEUiLCAiREVGX1ZFUlQiLCAiREVGX0ZSQUciLCAiQ09NUF9ERVNDIiwgIkNPTVBfRVZFTlRTIiwgImFuY2hvclB0IiwgIm9yaWciLCAiYWxpZ25QdCIsICJhbGlnbiIsICJjcmVhdGVFbXB0eUF1ZGlvQnVmZmVyIiwgImthYm9vbV9kZWZhdWx0IiwgImdvcHQiLCAicm9vdCIsICJnc2NhbGUiLCAiZml4ZWRTaXplIiwgInN0eWxlcyIsICJwaXhlbERlbnNpdHkiLCAiZm9udENhY2hlQ2FudmFzIiwgImZvbnRDYWNoZUMyZCIsICJhcHAiLCAiZ2dsIiwgImRlZlNoYWRlciIsICJtYWtlU2hhZGVyIiwgImVtcHR5VGV4IiwgImZyYW1lQnVmZmVyIiwgImJnQ29sb3IiLCAiYmdBbHBoYSIsICJyZW5kZXJlciIsICJiZ1RleCIsICJTcHJpdGVEYXRhIiwgImZyYW1lcyIsICJhbmltcyIsICJzbGljZTkiLCAiYXNzZXRzIiwgInNsaWNlIiwgIlNvdW5kRGF0YSIsICJidWYiLCAiYXVkaW8iLCAibWFzdGVyTm9kZSIsICJidXJwU25kIiwgImJ1cnBfZGVmYXVsdCIsICJmaXhVUkwiLCAiZ2FtZSIsICJtYWtlIiwgInRpbWVyIiwgImxvYWQiLCAicHJvbSIsICJsb2FkUHJvZ3Jlc3MiLCAiYnVja2V0cyIsICJidWNrZXQiLCAibG9hZFJvb3QiLCAibG9hZEpTT04iLCAiRm9udERhdGEiLCAiZmFjZSIsICJsb2FkRm9udCIsICJmb250IiwgImxvYWRCaXRtYXBGb250IiwgImd3IiwgImdoIiwgIm1ha2VGb250IiwgInF3IiwgInFoIiwgImxvYWRTcHJpdGVBdGxhcyIsICJyZWoiLCAianNvbiIsICJhdGxhcyIsICJpbmZvIiwgInNwciIsICJjcmVhdGVTcHJpdGVTaGVldCIsICJpbWFnZXMiLCAiYzJkIiwgIm1lcmdlZCIsICJsb2FkU3ByaXRlIiwgImxvYWRQZWRpdCIsICJsb2FkQXNlcHJpdGUiLCAiaW1nU3JjIiwgImpzb25TcmMiLCAicmVzb2x2ZUpTT04iLCAic2l6ZSIsICJhbmltIiwgImxvYWRTaGFkZXIiLCAibG9hZFNoYWRlclVSTCIsICJyZXNvbHZlVXJsIiwgInZjb2RlIiwgImZjb2RlIiwgImxvYWRTb3VuZCIsICJsb2FkQmVhbiIsICJiZWFuX2RlZmF1bHQiLCAiZ2V0U3ByaXRlIiwgImdldFNvdW5kIiwgImdldEZvbnQiLCAiZ2V0Qml0bWFwRm9udCIsICJnZXRTaGFkZXIiLCAiZ2V0QXNzZXQiLCAicmVzb2x2ZVNwcml0ZSIsICJyZXNvbHZlU291bmQiLCAic25kIiwgInJlc29sdmVTaGFkZXIiLCAicmVzb2x2ZUZvbnQiLCAiYmZvbnQiLCAidm9sdW1lIiwgInBsYXkiLCAicGF1c2VkIiwgInNyY05vZGUiLCAib25FbmRFdmVudHMiLCAiZ2Fpbk5vZGUiLCAic3RhcnRUaW1lIiwgInN0b3BUaW1lIiwgInN0YXJ0ZWQiLCAiZ2V0VGltZSIsICJzdGFydCIsICJjbG9uZU5vZGUiLCAib2xkTm9kZSIsICJuZXdOb2RlIiwgImJ1cnAiLCAibWFrZUNhbnZhcyIsICJ2ZXJ0U3JjIiwgImZyYWdTcmMiLCAibWF0Y2giLCAibGluZSIsICJtc2ciLCAidHkiLCAiY2hhcnMiLCAiY29scyIsICJjaGFyTWFwIiwgImRyYXdSYXciLCAiZml4ZWQiLCAic2hhZGVyU3JjIiwgInRyYW5zZm9ybSIsICJ2diIsICJzY3JlZW4ybmRjIiwgImZsdXNoIiwgImZyYW1lU3RhcnQiLCAiZHJhd1Vuc2NhbGVkIiwgImRyYXdVVlF1YWQiLCAidXNlUG9zdEVmZmVjdCIsICJmcmFtZUVuZCIsICJvdyIsICJvaCIsICJkcmF3VGV4dHVyZSIsICJwdXNoTWF0cml4IiwgInB1c2hUcmFuc2xhdGUiLCAicHVzaFNjYWxlIiwgInB1c2hSb3RhdGUiLCAicHVzaFRyYW5zZm9ybSIsICJwb3BUcmFuc2Zvcm0iLCAiY29sb3IiLCAib3BhY2l0eSIsICJ1dlBhZFgiLCAidXZQYWRZIiwgInF4IiwgInF5IiwgInNjYWxlIiwgInJlcFgiLCAicmVwWSIsICJkcmF3U3ByaXRlIiwgImdldEFyY1B0cyIsICJyYWRpdXNYIiwgInJhZGl1c1kiLCAiZW5kIiwgIm52ZXJ0cyIsICJzdGVwIiwgImRyYXdSZWN0IiwgImRyYXdQb2x5Z29uIiwgImRyYXdMaW5lIiwgImRyYXdMaW5lcyIsICJtaW5TTGVuIiwgImRyYXdDaXJjbGUiLCAiZHJhd1RyaWFuZ2xlIiwgImRyYXdFbGxpcHNlIiwgInBvbHlPcHQiLCAibnB0cyIsICJkcmF3U3RlbmNpbGVkIiwgImNvbnRlbnQiLCAibWFzayIsICJ0ZXN0IiwgImRyYXdNYXNrZWQiLCAiZHJhd1N1YnRyYWN0ZWQiLCAiZ2V0Vmlld3BvcnRTY2FsZSIsICJhcHBseUNoYXJUcmFuc2Zvcm0iLCAiZmNoYXIiLCAiVEVYVF9TVFlMRV9SRSIsICJjb21waWxlU3R5bGVkVGV4dCIsICJjaGFyU3R5bGVNYXAiLCAicmVuZGVyVGV4dCIsICJpZHhPZmZzZXQiLCAib3JpZ0lkeCIsICJmb250QXRsYXNlcyIsICJmb3JtYXRUZXh0IiwgImZvbnROYW1lIiwgImxpbmVTcGFjaW5nIiwgImxldHRlclNwYWNpbmciLCAiY3VyWCIsICJ0dyIsICJ0aCIsICJsaW5lcyIsICJjdXJMaW5lIiwgImN1cnNvciIsICJsYXN0U3BhY2UiLCAibGFzdFNwYWNlV2lkdGgiLCAiZmNoYXJzIiwgIm94IiwgImlkeCIsICJzdHlsZSIsICJkcmF3VGV4dCIsICJkcmF3Rm9ybWF0dGVkVGV4dCIsICJmdGV4dCIsICJ3aW5kb3dUb0NvbnRlbnQiLCAiY29udGVudFRvVmlldyIsICJkZWJ1Z1BhdXNlZCIsICJkZWJ1ZyIsICJ1cGRhdGVGcmFtZSIsICJnZXQiLCAiY2FtUG9zIiwgImNhbVNjYWxlIiwgImNhbVJvdCIsICJzaGFrZSIsICJpbnRlbnNpdHkiLCAidG9TY3JlZW4iLCAidG9Xb3JsZCIsICJjYWxjVHJhbnNmb3JtIiwgIm9iaiIsICJjb21wcyIsICJjb21wU3RhdGVzIiwgImNsZWFudXBzIiwgImlucHV0RXZlbnRzIiwgIm9uQ3VyQ29tcENsZWFudXAiLCAidHJpZ2dlciIsICJ0YWciLCAiY2hpbGRyZW4iLCAibWFza0Z1bmMiLCAiY29tcCIsICJwcm9wIiwgImZ1bmMiLCAiY2hlY2tEZXBzIiwgImRlcCIsICJyZWN1cnNlIiwgImlzQ2hpbGQiLCAib25BZGQiLCAiY3RybCIsICJjYiIsICJldnMiLCAiZXZlbnQiLCAib25VcGRhdGUiLCAiYWRkIiwgIm9uRHJhdyIsICJvbkNvbGxpZGUiLCAiY29sIiwgIm9uQ29sbGlkZVVwZGF0ZSIsICJvbkNvbGxpZGVFbmQiLCAiZm9yQWxsQ3VycmVudEFuZEZ1dHVyZSIsICJvbkNsaWNrIiwgIm9uSG92ZXIiLCAib25Ib3ZlclVwZGF0ZSIsICJvbkhvdmVyRW5kIiwgInNldEdyYXZpdHkiLCAiZ2V0R3Jhdml0eSIsICJzZXRCYWNrZ3JvdW5kIiwgImdldEJhY2tncm91bmQiLCAic3BlZWQiLCAiZGlmZiIsICJpc0ZpeGVkIiwgInRvRml4ZWQiLCAicm90YXRlIiwgImVhc2VGdW5jIiwgInR3ZWVuIiwgImFuY2hvciIsICJ6IiwgImZvbGxvdyIsICJtb3ZlIiwgImRpciIsICJERUZfT0ZGU0NSRUVOX0RJUyIsICJvZmZzY3JlZW4iLCAiZGlzdGFuY2UiLCAiaXNPdXQiLCAic2NyZWVuUmVjdCIsICJhcmVhIiwgImNvbGxpZGluZyIsICJjb2xsaWRpbmdUaGlzRnJhbWUiLCAibXBvcyIsICJob3ZlcmluZyIsICJsb2NhbEFyZWEiLCAiZ2V0UmVuZGVyUHJvcHMiLCAic3ByaXRlIiwgInNwcml0ZURhdGEiLCAiY3VyQW5pbSIsICJjdXJBbmltRGlyIiwgInNwcml0ZUxvYWRlZEV2ZW50IiwgImNhbGNUZXhTY2FsZSIsICJsZWZ0IiwgInJpZ2h0IiwgInRvcCIsICJib3R0b20iLCAiaXciLCAiaWgiLCAidzEiLCAidzMiLCAidzIiLCAiaDMiLCAicXVhZHMiLCAidXYiLCAic2V0U3ByaXRlRGF0YSIsICJvbkxvYWQiLCAicHJldkFuaW0iLCAidXBkYXRlIiwgIm50IiwgInBvbHlnb24iLCAicmVjdCIsICJ1dnF1YWQiLCAib3V0bGluZSIsICJhY3Rpb25zIiwgImN1clRpbWVyIiwgIm5ld0FjdGlvbiIsICJmcm9tIiwgInRvIiwgImR1cmF0aW9uIiwgInNldFZhbHVlIiwgImN1clRpbWUiLCAiREVGX0pVTVBfRk9SQ0UiLCAiTUFYX1ZFTCIsICJib2R5IiwgImN1clBsYXRmb3JtIiwgImxhc3RQbGF0Zm9ybVBvcyIsICJ3YW50RmFsbCIsICJ0bWFzcyIsICJjb2wyIiwgInByZXZWZWxZIiwgImZvcmNlIiwgImRvdWJsZUp1bXAiLCAibnVtSnVtcHMiLCAianVtcHNMZWZ0IiwgInN0YXkiLCAic2NlbmVzVG9TdGF5IiwgImhlYWx0aCIsICJocCIsICJtYXhIUCIsICJvcmlnSFAiLCAibGlmZXNwYW4iLCAiZmFkZSIsICJ3YWl0IiwgImluaXRTdGF0ZSIsICJzdGF0ZUxpc3QiLCAidHJhbnNpdGlvbnMiLCAiaW5pdFN0YXRlRXZlbnRzIiwgImRpZEZpcnN0RW50ZXIiLCAib2xkU3RhdGUiLCAiYXZhaWxhYmxlIiwgImZhZGVJbiIsICJkb25lIiwgImRyYXdvbiIsICJzY2VuZSIsICJkZWYiLCAiZ28iLCAiaW5pdEV2ZW50cyIsICJvblNjZW5lTGVhdmUiLCAiZ2V0RGF0YSIsICJzZXREYXRhIiwgInBsdWciLCAicGx1Z2luIiwgImZ1bmNzIiwgImZ1bmNzT2JqIiwgIkVkZ2VNYXNrIiwgInRpbGUiLCAidGlsZVBvcyIsICJpc09ic3RhY2xlIiwgImNvc3QiLCAiZWRnZXMiLCAiZ2V0RWRnZU1hc2siLCAibG9vcHVwIiwgImVkZ2VNYXNrIiwgImxldmVsIiwgImlzIiwgImFkZExldmVsIiwgIm51bVJvd3MiLCAibnVtQ29sdW1ucyIsICJzcGF0aWFsTWFwIiwgImNvc3RNYXAiLCAiZWRnZU1hcCIsICJjb25uZWN0aXZpdHlNYXAiLCAidGlsZTJIYXNoIiwgImhhc2gyVGlsZSIsICJoYXNoIiwgImNyZWF0ZVNwYXRpYWxNYXAiLCAiaW5zZXJ0SW50b1NwYXRpYWxNYXAiLCAicmVtb3ZlRnJvbVNwYXRpYWxNYXAiLCAiaW5kZXgiLCAidXBkYXRlU3BhdGlhbE1hcCIsICJzcGF0aWFsTWFwQ2hhbmdlZCIsICJjcmVhdGVDb3N0TWFwIiwgIm9iamVjdHMiLCAiY3JlYXRlRWRnZU1hcCIsICJjcmVhdGVDb25uZWN0aXZpdHlNYXAiLCAidHJhdmVyc2UiLCAiZnJvbnRpZXIiLCAiZ2V0TmVpZ2hib3VycyIsICJnZXRDb3N0IiwgIm5vZGUiLCAibmVpZ2hib3VyIiwgImdldEhldXJpc3RpYyIsICJnb2FsIiwgImRpYWdvbmFscyIsICJsZXZlbENvbXAiLCAiaGFzUG9zIiwgImhhc1RpbGUiLCAiY2FtZUZyb20iLCAiY29zdFNvRmFyIiwgIm5laWdoYm91cnMiLCAibmV4dCIsICJuZXdDb3N0IiwgInJvdyIsICJrZXlzIiwgImFnZW50IiwgInRhcmdldCIsICJuYXZNYXBDaGFuZ2VkRXZlbnQiLCAicmVjb3JkIiwgImZyYW1lUmF0ZSIsICJzdHJlYW0iLCAiYXVkaW9EZXN0IiwgInJlY29yZGVyIiwgImNodW5rcyIsICJpc0ZvY3VzZWQiLCAicmVhZGQiLCAiZGVzdHJveUFsbCIsICJsb29wIiwgImJvb20iLCAia2FTcHJpdGUiLCAia2FfZGVmYXVsdCIsICJib29tU3ByaXRlIiwgImJvb21fZGVmYXVsdCIsICJhZGRLYWJvb20iLCAia2Fib29tIiwgImthIiwgIkNvbGxpc2lvbiIsICJzb3VyY2UiLCAicmVzb2x2ZWQiLCAiY2hlY2tGcmFtZSIsICJncmlkIiwgImNlbGxTaXplIiwgImNoZWNrT2JqIiwgImFvYmoiLCAiYmJveCIsICJ4bWluIiwgInltaW4iLCAieG1heCIsICJ5bWF4IiwgImNoZWNrZWQiLCAiY2VsbCIsICJjaGVjayIsICJjb2wxIiwgImRyYXdGcmFtZSIsICJjYW0iLCAiZHJhd0xvYWRTY3JlZW4iLCAicHJvZ3Jlc3MiLCAiZHJhd0luc3BlY3RUZXh0IiwgInR4dCIsICJwYWQiLCAiZnR4dCIsICJidyIsICJiaCIsICJkcmF3RGVidWciLCAiaW5zcGVjdGluZyIsICJmbGlwcGVkIiwgImxvZ3MiLCAibG9nIiwgIm9uTG9hZGluZyIsICJvbkVycm9yIiwgImhhbmRsZUVyciIsICJ0ZXh0U3R5bGUiLCAidGl0bGUiLCAib25DbGVhbnVwIiwgIm51bVRleHR1cmVVbml0cyIsICJ1bml0IiwgImlzRmlyc3RGcmFtZSIsICJ1cGRhdGVWaWV3cG9ydCIsICJyZyIsICJzdyIsICJzaCIsICJpIl0KfQo=
