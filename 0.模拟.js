let guanCeJiao2 = 102 * 60 * 60 + 48 * 60 + 9;  // deg"
let guanCeJiao3 = 78 * 60 * 60 + 51 * 60 + 15;
let guanCeJiao4 = 84 * 60 * 60 + 23 * 60 + 27;
let guanCeJiao1 = 93 * 60 * 60 + 57 * 60 + 45;

let border12 = 112.01;  // m
let border23 = 87.58;
let border34 = 137.71;
let border41 = 89.5;

let n = 4;
let MBLi = (n - 2) * 180 * 60 * 60;   // 内角和
let fB = guanCeJiao2 + guanCeJiao3 + guanCeJiao4 + guanCeJiao1 - MBLi;   //  角度闭合差
let fBLi = Math.abs(40 * Math.sqrt(n));   // 角度闭合差的允许值
if (Math.abs(fB) >= fBLi) {
    console.log('Warning: 角度闭合差超出允许值');
}

let VBi = 0 - (fB / n);  // 角度改正数
