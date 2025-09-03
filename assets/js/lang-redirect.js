document.addEventListener("DOMContentLoaded", () => {
  // 言語セレクタ処理
  const select = document.getElementById("lang-select");
  if (select) {
    select.addEventListener("change", () => {
      window.location.href = select.value;
    });
  }

  // ルート("/")アクセス時のみリダイレクト
  if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    const userLang = navigator.language || navigator.userLanguage;
    let target = "/en/"; // デフォルト

    if (userLang.startsWith("ja")) {
      target = "/";
    } else if (userLang.startsWith("zh")) {
      target = "/zh/";
    } else if (userLang.startsWith("en")) {
      target = "/en/";
    }

    if (window.location.pathname === "/" && target !== "/") {
      window.location.replace(target);
    }
  }
});
