// 存储诗歌文本的数组
const poems = [
    "这是一首诗的内容",
    "这是另一首诗的内容",
    "这是第三首诗的内容"
];

let currentFontIndex = 0;
let currentColorIndex = 0;
const fonts = ['Font1', 'Font2', 'Font3'];  // 你的字体文件
const colors = ['#000000', '#FF5733', '#3498DB'];

// 切换诗歌
document.getElementById("switch-poem").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * poems.length);
    document.getElementById("poem-text").textContent = poems[randomIndex];
});

// 切换字体
document.getElementById("switch-font").addEventListener("click", function() {
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    document.getElementById("poem-text").style.fontFamily = fonts[currentFontIndex];
});

// 切换字体颜色
document.getElementById("switch-color").addEventListener("click", function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.getElementById("poem-text").style.color = colors[currentColorIndex];
});
