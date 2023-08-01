// 封装在js中

function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        let step = obj.offsetLeft + (target - obj.offsetLeft) / 20;
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = Math.sign(step) * Math.ceil(Math.abs(step)) + 'px';
    }, 10);
}
