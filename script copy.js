function startGame() {
  const image = document.getElementById("gazou");
  if (!image) return;

  const images = [
    "cassava06-500x333.jpg",
    "821cd54eeeaa7f3a760b8fa1aa4f000b_t.jpeg",
    "7d97e0fd317e12b304192bf507951695_t.jpeg"
  ];

  let anser = 0;
  let kaisu = 0;

  const timer = setInterval(() => {
    if (kaisu >= 10) {
      clearInterval(timer);
      alert(`ゲーム終了！キャッサバが出てきた回数は ${anser} 回でした。`);
      return;
    }

    const index = Math.floor(Math.random() * images.length);
    const nextimage = images[index];
    image.src = nextimage;
    kaisu++;

    if (index === 0) {
      anser++;
    }
  }, 500);
}
