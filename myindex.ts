// narrowing 방법 5가지

let title1 = document.querySelector('#title')

// 1
if (title1 !== null) {
    title1.innerHTML = '반가워요'
}

// 2 (추천)
if (title1 instanceof Element) {
    title1.innerHTML = '반가워요'

}

// 3 (추천안함) (그럼 타입스크립트 왜씀?)
let title2 = document.querySelector('#title') as Element;
title2.innerHTML = '반가워요'

// 4
if (title1?.innerHTML) {
    title1.innerHTML = '반가워요'
}

// 5 = tsconfig.json 에서 "strictNullChecks": true 끄기 (그럼 타입스크립트 왜씀?)

// <a>태그 href 속성 바꾸기 </a> : 태그마다 다름
let 링크 = document.querySelector(".link")
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://naver.com'
}

// 버튼? 문법
let 버튼 = document.querySelector('#button');
let 이미지 = document.querySelector('.image1');


버튼?.addEventListener('click', function () {
    if (이미지 instanceof HTMLImageElement) {
        이미지.src = "b.png";
    }
})