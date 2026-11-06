// 画像の拡大表示（ライトボックス）。
// <a class="zoom" href="大きい画像"><img src="…"></a> をクリックすると画面いっぱいに出す。
// 閉じる：背景クリック・×ボタン・Esc。ライブラリは使わない。
(function () {
  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML = '<button class="lightbox-close" type="button" aria-label="閉じる">×</button>' +
                  '<img alt=""><p class="lightbox-caption"></p>';
  document.body.appendChild(box);
  var img = box.querySelector('img');
  var cap = box.querySelector('.lightbox-caption');

  function open(href, alt) {
    img.src = href;
    img.alt = alt || '';
    cap.textContent = alt || '';
    box.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    box.classList.remove('is-open');
    document.body.style.overflow = '';
    img.src = '';
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a.zoom');
    if (a) {
      e.preventDefault();
      var inner = a.querySelector('img');
      open(a.getAttribute('href'), inner ? inner.alt : '');
      return;
    }
    if (e.target === box || e.target.classList.contains('lightbox-close')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && box.classList.contains('is-open')) close();
  });
})();
