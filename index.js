(function () {
  //获取DOM的辅助函数
  function $(selector) {
    return document.querySelector(selector);
  }
  function $$(selector) {
    return document.querySelectorAll(selector);
  }
  // 获取需要的DOM
  const lists = $$('.content .list');
  const startBtn = $('.btn');
  //需要的变量
  let timerId = null;
  let currentIndex = null;
  let index = -1;
  // 改变顺序
  const newLists = [lists[0], lists[1], lists[3], lists[5], lists[4], lists[2]];
  const running = function () {
    let num = 3000 + Math.floor(Math.random() * 2000);
    timerId = setInterval(function () {
      num -= 300;
      if (num < 200) {
        //清除计时器
        clearInterval(timerId);
        timerId = null;
        return;
      }
      currentIndex = ++index % newLists.length;
      //遍历姿势的nodeList挂上相应的样式
      newLists.forEach(function (node) {
        node.classList.remove('active');
      });
      newLists[currentIndex].classList.add('active');
    }, 100);
  };
  const onStratBtnClick = function () {
    if (timerId) return;
    running();
  };
  startBtn.addEventListener('click', onStratBtnClick);
})();
