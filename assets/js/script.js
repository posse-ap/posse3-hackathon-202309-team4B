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


