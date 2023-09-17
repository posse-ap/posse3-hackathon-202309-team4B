//まどかが書いた
//なつきがヘッダーの透過
//ヘッダー
//ヘッダー・ボタンの要素を取得
const header = document.getElementById('js-header');
const button = document.getElementById('js-headerButton');

//ボタンをクリックした時の処理
button.addEventListener('click',function(){
    header.classList.toggle("is-open");
});

const mainVisual = document.getElementById('js-mainVisual');

window.addEventListener("scroll", () => {
    if (window.scrollY > mainVisual.clientHeight - header.clientHeight) {
        header.classList.remove("is-transparent");
    } else {
        header.classList.add("is-transparent");
    }
});
console.log(header);



// メインページ

//ハッカソンレポ
// 杏美が書いたよ

var scrollPosition;


$('.js-modal-open').on('click', function(){
scrollPosition = $(window).scrollTop();
$('body').addClass('fixed').css({'top': -scrollPosition});
$('.js-modal').fadeIn();
return false;
});


$('.js-modal-close').on('click', function(){
$('body').removeClass('fixed');
window.scrollTo( 0 , scrollPosition );
$('.js-modal').fadeOut();
return false;
});


//まどか
$('.js-modal-open2').on('click', function(){
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({'top': -scrollPosition});
    $('.js-modal2').fadeIn();
    return false;
    });
    
    
    $('.js-modal-close').on('click', function(){
    $('body').removeClass('fixed');
    window.scrollTo( 0 , scrollPosition );
    $('.js-modal2').fadeOut();
    return false;
    });

$('.js-modal-open3').on('click', function(){
scrollPosition = $(window).scrollTop();
$('body').addClass('fixed').css({'top': -scrollPosition});
$('.js-modal3').fadeIn();
return false;
});


$('.js-modal-close').on('click', function(){
$('body').removeClass('fixed');
window.scrollTo( 0 , scrollPosition );
$('.js-modal3').fadeOut();
return false;
});

$('.js-modal-open4').on('click', function(){
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({'top': -scrollPosition});
    $('.js-modal4').fadeIn();
    return false;
    });
    
    
    $('.js-modal-close').on('click', function(){
    $('body').removeClass('fixed');
    window.scrollTo( 0 , scrollPosition );
    $('.js-modal4').fadeOut();
    return false;
    });
//リマインド
//まどか担当
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
// なつき
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






//もちまるい
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