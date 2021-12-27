

var i = 1;
var score = 0;

var next = function(){
  if (i==11){

    var mbti = "";
    document.querySelector('#myroom_adj').innerHTML = result[score]["myroom_adj"];
    document.querySelector('#myroom').innerHTML = result[score]["myroom"];
    document.querySelector('#result_img').src = "img/result_"+score+'.jpg';
    document.querySelector('#explain').innerHTML = result[score]["explain"];
    // document.querySelector('#myfit').innerHTML = result[score]["myfit"];
    document.querySelector('#detail').innerHTML = result[score]["detail"];
    document.querySelector('#advice').innerHTML = result[score]["advice"];
    document.querySelector('#test').style.display='none';
    document.querySelector('#result').style.display='block';
    history.replaceState({result: score}, '','?result='+score); //MBTI 결과값으로 쿼리 파라미터 삽입
    dataLayer.push({
      'event' : 'test_complete',
      'score' : score,
      'myroom' : result[score]["myroom"]
    });


  } else{

    document.querySelector('#prob_img').src = "img/q"+i +".jpg";
    document.querySelector('#page_number').innerHTML= i+"/10";
    document.querySelector('#progress').style.width = (i/10)*100+"%";
    document.querySelector('#title').innerHTML = testNum[i]['title'];
    document.querySelector('#description').innerHTML = testNum[i]['description'];
    document.querySelector('#A').innerHTML = testNum[i]['A'];
    document.querySelector('#B').innerHTML= testNum[i]['B'];
    dataLayer.push({
      'event' : 'view_question',
      'question_no' : i
    });
    i++;
  }
}

var testNum = {
  "1": {
    "title": "Q. 01",
    "description": "아침에 일어나 집을 나서기 전에 나는",
    "A": "침구류를 정리한다.",
    "B": "바쁜데 무슨 정리! baro naga"
  },
  "2": {
    "title": "Q. 02",
    "description": "나는 빨래를",
    "A": "3일 뒤 모자랄 수건을 생각해 미리 세탁기를 돌린다.",
    "B": "수건이 없어 티셔츠로 몸을 닦고 있는 순간 세탁기를 돌린다."
  },
  "3": {
    "title": "Q. 03",
    "description": "나는 뭘 쇼핑하던",
    "A": "진짜 필요한지 충분히 고민해보고 산다.",
    "B": "필요하다 느끼는 순간 바로 산다."
  },
  "4": {
    "title": "Q. 04",
    "description": "집에서 배달음식을 시켜먹었다.",
    "A": "남은 음쓰는 음쓰봉투에, 그릇은 모두 씻어서 분리수거까지 완벽하게 처리",
    "B": "다 먹었으니 일단 눕는다."
  },
  "5": {
    "title": "Q. 05",
    "description": "사용한 물건은",
    "A": "물건 별로 정해진 자리가 있다.",
    "B": "빈 공간이 곧 물건의 자리."
  },
  "6": {
    "title": "Q. 06",
    "description": "방이 어지럽다고 느낀 나는",
    "A": "(짜증)이게 방이야 방구야. 정리하자!",
    "B": "(뿌듯)이거슨 혼돈 속의 질서."
  },
  "7": {
    "title": "Q. 07",
    "description": "야근하고 집에 돌아온 나는",
    "A": "무조건 씻고 눕는다! 피곤해도 외출복을 입고 침대 가까이 가는 것은 용납할 수 없다!",
    "B": "'아 피곤해...' 바로 침대에 눕는다."
  },
  "8": {
    "title": "Q. 08",
    "description": "(사전준비 없이)애인에게 처음으로 내 방을 보여줘야 하는 순간!",
    "A": "(부끄러울게 없다)바로 드루와~ ",
    "B": "잠깐만 밖에서 기다려줘^^(3분만에 눈에 뵈는 거 없이 다 옷장에 꾸겨넣기)"
  },
  "9": {
    "title": "Q. 09",
    "description": "모든 물건은",
    "A": "쓸모 없어지면 버려질 운명이다(마침표)",
    "B": "나의 추억이 깃든 물건… 소듕해!"
  },
  "10": {
    "title": "Q. 10",
    "description": "현재 내 옷장 상태는",
    "A": "자켓, 셔츠, 바지, 니트 종류별로 구분되어있다.",
    "B": "동묘 옷무덤이 여기 있네. '옷장'이었던 것..."
  },
};
var result={
  0 : {
    "myroom_adj" :"퇴마사도 무서워 할",
    "myroom" : "흉가 방",
    "explain": "너 말고 아무도 안산다. 귀신보다 인간이 더 무서운 이유가 궁금하면<br> 이 방을 보라.",
    "myfit" : "사람집",
    "detail": "우리 좀만 사람답게 살아봅시다.",
    "advice" : "퇴마사 부르기 전에 일단 정리 컨설턴트와 상담을 하세요"

  },
  10 : {
    "myroom_adj" :"퇴마사도 무서워 할",
    "myroom" : "흉가 방",
    "explain": "너 말고 아무도 안산다. 귀신보다 인간이 더 무서운 이유가 궁금하면<br> 이 방을 보라.",
    "myfit" : "사람집",
    "detail": "우리 좀만 사람답게 살아봅시다.",
    "advice" : "퇴마사 부르기 전에 일단 정리 컨설턴트와 상담을 하세요"

  },
  20: {
    "myroom_adj" :"소각장도 거절할",
    "myroom" : "쓰레기 방",
    "explain": "쉽게만 살아가면 재미있어 빙고! 방 상태 부모님께 절대 들키지 말 것! 개밥쉰내 난다고 등짝스매싱 맞음",
    "myfit" : "사람집",
    "detail": "날 잡고 한번 정리하세요.",
    "advice" : "현기증 난단 말이에요.<br>빨리 정리 해주세요."
},
  30: {
    "myroom_adj" :"소각장도 거절할",
    "myroom" : "쓰레기 방",
    "explain": "쉽게만 살아가면 재미있어 빙고! 방 상태 부모님께 절대 들키지 말 것! 개밥쉰내 난다고 등짝스매싱 맞음",
    "myfit" : "사람집",
    "detail": "날 잡고 한번 정리하세요.",
    "advice" : "현기증 난단 말이에요.<br>빨리 정리 해주세요."
  },
  40: {
    "myroom_adj" :"부스러기 가득한",
    "myroom" : "과자 방",
    "explain": "헨젤과 그레텔이 뿌리고 간 빵 부스러기처럼 곳곳에 물건들이 널려있지만 나름 봐줄만한 귀여운 방",
    "myfit" : "사람집",
    "detail": "Cleaning Maketh Man(정리가 사람을 만든다)",
    "advice" : "나는 니가 지난 볼펜을 어디다 뒀는지 알고 있다.<br>(실은 나도 몰라 좀 치워!)"
},
  50: {
    "myroom_adj" :"부스러기 가득",
    "myroom" : "과자 방",
    "explain": "헨젤과 그레텔이 뿌리고 간 빵 부스러기처럼 곳곳에 물건들이 널려있지만 나름 봐줄만한 귀여운 방",
    "myfit" : "사람집",
    "detail": "Cleaning Maketh Man(정리가 사람을 만든다)",
    "advice" : "나는 니가 지난 볼펜을 어디다 뒀는지 알고 있다.<br>(실은 나도 몰라 좀 치워!)"
  },
  60: {
    "myroom_adj" :"딱 좋은" ,
    "myroom" : "사람 방",
    "explain": "사람이 너무 완벽해도 힘들어~ 인간미 뿜뿜!<br> 근데 이제 꽉찬 옷장을 곁들인",
    "myfit" : "",
    "detail": "정리와 수납방법만 개선해보자!",
    "advice" : "아직 청(소어)린이지만 이제부터 차차 시작하면 돼죠~ <br>퐐로퐐로미"
},
  70: {
    "myroom_adj" :"딱 좋은" ,
    "myroom" : "사람 방",
    "explain": "사람이 너무 완벽해도 힘들어~ 인간미 뿜뿜!<br> 근데 이제 꽉찬 옷장을 곁들인",
    "myfit" : "",
    "detail": "정리와 수납방법만 개선해보자!",
    "advice" : "아직 청(소어)린이지만 이제부터 차차 시작하면 돼죠~ <br>퐐로퐐로미"
  },
  80: {
    "myroom_adj" :"으리으리한" ,
    "myroom" : "궁전 방",
    "explain": "It's alright~ 우리 집으로 가자~ 갑작스레 손님이 방문해도 자랑스럽게 보여줄 수 있어. 언제든 웰컴이야",
    "myfit" : "지금 딱 좋아",
    "detail": "청소가 일상인 부지런한 당신!<br>당신의 수고로움을 덜어드리고 싶네요.",
    "advice" : ""
},
  90: {
    "myroom_adj" :"으리으리한" ,
    "myroom" : "궁전 방",
    "explain": "It's alright~ 우리 집으로 가자~ 갑작스레 손님이 방문해도 자랑스럽게 보여줄 수 있어. 언제든 웰컴이야",
    "myfit" : "지금 딱 좋아",
    "detail": "청소가 일상인 부지런한 당신!<br>당신의 수고로움을 덜어드리고 싶네요.",
    "advice" : ""
  },
  100: {
    "myroom_adj" :"저 세상" ,
    "myroom" : "외계인 방",
    "explain": "미세먼지 한톨 허용하지 않는다!<br> 정리신을 영접했다고 해도 과언이 아닐 정도로 완벽 그 자체! 저희 집 좀 치워주세요.",
    "myfit" : "사람집",
    "detail": "인간들에게 짐보관 서비스 홍보하려 만든 이런 누추한 곳에 킹계인께서 어쩐 일이십니까...<br>외람된 말씀이오나 주변에 방 정리가 안되어 힘들어 하는 인간들에게 저희 박스풀 짐보관 서비스 홍보 부탁드립니다👽<br>사랑합니다😘",
    "advice" : ""
}
};

// 테스트 시작함수
var testStart = function(){
  dataLayer.push({
    'event' : 'start'
  });
  document.querySelector('#main').style.display ="none";
  document.querySelector('#test').style.display ="block";
  document.querySelector('body').style.background = "white";
  next();

}
document.querySelector('#start_btn').addEventListener('click',testStart);

// 테스트 다시 시작
var retry = function(){
  document.querySelector('#result').style.display='none';
  document.querySelector('#test').style.display='block';
  i = 1;
  score = 0;
  dataLayer.push({
    'event' : 'retry'
  });
  next();
}
document.querySelector('#retry_btn').addEventListener('click',retry);

//타입 선택
document.querySelector('#A').addEventListener('click',function(){

  dataLayer.push({
    'event' : 'select_answer',
    'answer' : 'A'
  });
    score += 10;
  next();
});
document.querySelector('#B').addEventListener('click',function(){
  dataLayer.push({
    'event' : 'select_answer',
    'answer' : 'B'
  });

  next();
})

//쿼리 파라미터 값이 있으면 결과 페이지로 바로 가기
var shareParams = new URL(location.href).searchParams.get('result'); //지금 보고 있는 페이지 URL의 result라는 쿼리 파라미터 값을 가져온다.
if (Object.keys(result).includes(shareParams) === true){
  document.querySelector('#main').style.display = 'none';
  document.querySelector('#result').style.display = 'block';
  var score = shareParams;
  document.querySelector('#myroom_adj').innerHTML = result[score]["myroom_adj"];
  document.querySelector('#myroom').innerHTML = result[score]["myroom"];
  document.querySelector('#result_img').src = "img/result_"+score+'.jpg';
  document.querySelector('#explain').innerHTML = result[score]["explain"];
  document.querySelector('#detail').innerHTML = result[score]["detail"];
  // document.querySelector('#myfit').innerHTML = result[score]["myfit"];
  document.querySelector('#advice').innerHTML = result[score]["advice"];
  document.querySelector('body').style.background = "white";


}//result 변수는 mbti 결과값 객체 담은 변수

//카카오 SDK 초기화하기
Kakao.init('5ca7b9d54b7e2b630ae665d5af76947d');
Kakao.isInitialized();

//카카오톡 공유하기 실행 함수
var kakaoShare = function(){
  dataLayer.push({
    'event' : 'kakao_share'
  });
  var title = document.querySelector('#myroom_adj').textContent + " " + document.querySelector('#myroom').textContent;
  var description = document.querySelector('#explain').textContent;
  var imgUrl = document.querySelector('#result_img').src;
  var mbti = new URL(location.href).searchParams.get('result');
  Kakao.Link.sendDefault({
  objectType: 'feed',
  content: {
    title: title,
    description: description,
    imageUrl:imgUrl,
    link: {
      mobileWebUrl: 'https://whatsmyroomlike.netlify.app?result='+score,

    },
  },

  buttons: [
    {
      title: '결과 확인하기',
      link: {
        mobileWebUrl: 'https://whatsmyroomlike.netlify.app?result='+score,
        webUrl: 'https://whatsmyroomlike.netlify.app?result='+score,
      },
    },
    {
      title: '나도 테스트하기',
      link: {
        mobileWebUrl: 'https://whatsmyroomlike.netlify.app',
        webUrl: 'https://whatsmyroomlike.netlify.app',
      },
    },
  ]
});
}

document.querySelector('#share_btn').addEventListener('click',kakaoShare);

var open_boxful = function(){
  dataLayer.push({
    'event' : 'click_boxful'
  })
  window.open("https://www.boxful.kr/?utm_source=myroomtest&utm_medium=social&utm_campaign=test%20result")
}
document.querySelector('#boxful_btn').addEventListener('click',open_boxful);
