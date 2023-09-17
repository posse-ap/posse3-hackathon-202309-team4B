// メインページ

//ハッカソンレポ

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

const dailySlideOptions = {
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