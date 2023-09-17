//ヘッダー
//ヘッダー・ボタンの要素を取得
const header = document.getElementById('js-header');
const button = document.getElementById('js-headerButton');

//ボタンをクリックした時の処理
button.addEventListener('click',function(){
    header.classList.toggle("is-open");
});

console.log(header);



// メインページ

//ハッカソンレポ

var access = $.cookie('access')
	if(!access){
		flag = true;
		$.cookie('access', false);
	}else{
		flag = false	
	}
	
	$(".modal-open").modaal({
	start_open:flag, 
	overlay_close:true,
	before_open:function(){
		$('html').css('overflow-y','hidden');
	},
	after_close:function(){
		$('html').css('overflow-y','scroll');
	}
	});




$(".modal-open2").modaal({
start_open:flag, 
overlay_close:true,
before_open:function(){
    $('html').css('overflow-y','hidden');
},
after_close:function(){
    $('html').css('overflow-y','scroll');
}
});


//リマインド
const addMemoButton = document.querySelector('.add-memo');
addMemoButton.addEventListener('click',function(){
    const newMemoInput = document.querySelector('.new-memo');
    const memoValue = newMemoInput.value;

    const newMemo = document.createElement('li');
    newMemo.textContent = newMemoInput.value;

    // 新しいクラスを追加
    newMemo.classList.add('memo-text');

    const memoList = document.querySelector('.memo-list');
    memoList.append(newMemo);
});

const lectureSlideOptions = {
    type: 'loop',
    gap:40,
    padding: {left:28, right:28 },
    destroy:true,
    breakpoints: {
        768:{
            destroy: false,
        },
    },
}

new Splide('#js-lectureSlide', lectureSlideOptions).mount();







const animatedTexts = document.querySelectorAll('.animated-text');                     /*L89~106 by持丸*/
        let isAnimationPlaying = false;

        function toggleAnimation() {
            if (isAnimationPlaying) {
                animatedTexts.forEach(text => text.style.animationPlayState = 'paused');
            } else {
                animatedTexts.forEach(text => text.style.animationPlayState = 'running');
            }
            isAnimationPlaying = !isAnimationPlaying;
        }
        animatedTexts.forEach(text => text.addEventListener('animationiteration', () => {
            // アニメーションが繰り返しの場合に実行
            toggleAnimation();
        }));

        // クリック時にアニメーションをトグル
        animatedTexts.forEach(text => text.addEventListener('click', toggleAnimation));