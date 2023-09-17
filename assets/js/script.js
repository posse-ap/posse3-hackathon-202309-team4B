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
    console.log(memoValue);
    const newMemo = document.createElement('li');
    newMemo.textContent = newMemoInput.value;

    const memoList = document.querySelector('.memo-list');
    memoList.append(newMemo);
});

const rectureSlideOptions = {
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

new Splide('#js-rectureSlide', dailySlideOptions).mount();


