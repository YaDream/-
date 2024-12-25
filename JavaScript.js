let currentItem = 0; // 當前顯示的收藏物品索引
const items = ['item1.jpg', 'item2.jpg', 'item3.jpg']; // 收藏物品的圖片

function changeImage(direction) {
    if (direction === 'prev') {
        currentItem = (currentItem - 1 + items.length) % items.length; // 上一項
    } else if (direction === 'next') {
        currentItem = (currentItem + 1) % items.length; // 下一項
    }
    
    document.getElementById('image').src = items[currentItem];
}

// 設置圖片動態變化
document.getElementById('image').addEventListener('mouseover', function() {
    this.style.transition = 'all 1s';  // 設定過渡效果
    this.style.width = '400px';  // 改變寬度
    this.style.height = '500px';  // 改變高度
});

document.getElementById('image').addEventListener('mouseout', function() {
    this.style.transition = 'all 1s';  // 設定過渡效果
    this.style.width = '300px';  // 改回原寬度
    this.style.height = '400px';  // 改回原高度
});
