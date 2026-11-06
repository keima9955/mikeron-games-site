// メールアドレスを HTML に書かず、表示時に組み立てる（迷惑メール業者の自動収集よけ）。
// <a class="mail" data-u="ユーザー名" data-d="ドメイン"></a> と書くと、クリックでメールが開くリンクになる。
(function () {
  document.querySelectorAll('a.mail').forEach(function (a) {
    var addr = a.getAttribute('data-u') + '@' + a.getAttribute('data-d');
    a.href = 'mailto:' + addr;
    a.textContent = addr;
  });
})();
