
        /* 获取元素*/
        const introItem = document.getElementById('intro-item');
        const introImg = document.getElementById('intro-img');

        // 点击Introduction时显示/隐藏图片
        introItem.addEventListener('click', function() {
            introImg.style.display = introImg.style.display === 'block' ? 'none' : 'block';
        });

        // 点击页面其他区域隐藏图片
        document.addEventListener('click', function(e) {
            if (!introItem.contains(e.target)) {
                introImg.style.display = 'none';
            }
        });
