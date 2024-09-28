// 用来存储从 JSON 文件中加载的诗歌
let poems = [];
const fontScales = [1.9, 1.2];
// 从 JSON 文件加载诗歌数据
fetch('poems.json')
    .then(response => response.json())
    .then(data => {
        poems = data;
        // 初次加载时显示一首诗歌
        displayRandomPoem();
    })
    .catch(error => console.error('无法加载诗歌数据:', error));

// 随机显示一首诗歌
function displayRandomPoem() {
    if (poems.length > 0) {
        const randomIndex = Math.floor(Math.random() * poems.length);
        const poem = poems[randomIndex];
        document.getElementById("poem-title").textContent = poem.title;
        document.getElementById("poem-content").textContent = poem.content;
    } else {
        document.getElementById("poem-title").textContent = '加载诗歌失败';
        document.getElementById("poem-content").textContent = '未能加载到诗歌文本';
    }
}

// 切换诗歌按钮事件
document.getElementById("switch-poem").addEventListener("click", function() {
    displayRandomPoem();
});

// 字体切换功能
let currentFontIndex = 0;
const fonts = ['Font1', 'Font2'];  // 你定义的字体名称

document.getElementById("switch-font").addEventListener("click", function() {
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    document.getElementById("poem-content").style.fontFamily = fonts[currentFontIndex];
    document.getElementById("poem-content").style.transform = `scale(${fontScales[currentFontIndex]})`;
});

// 字体颜色切换功能
let currentColorIndex = 0;
const colors = ['#000000', '#FF5733', '#3498DB'];  // 你选择的颜色

document.getElementById("switch-color").addEventListener("click", function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.getElementById("poem-content").style.color = colors[currentColorIndex];
});
