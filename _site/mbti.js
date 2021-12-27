

var i = 1;
var score = 0;

var next = function(){
  if (i==11){

    var mbti = "";
    document.querySelector('#mymbti').innerHTML = result[mbti]["mbti"];
    document.querySelector('#result_img').src = "img/result_"+mbti+'.jpeg';
    document.querySelector('#explain').innerHTML = result[mbti]["explain"];
    document.querySelector('#detail').innerHTML = result[mbti]["detail"];
    document.querySelector('#test').style.display='none';
    document.querySelector('#result').style.display='block';
    history.replaceState({result: score}, '','?result='+score); //MBTI 결과값으로 쿼리 파라미터 삽입
    dataLayer.push({
      'event' : 'test_complete',
      'score' : score
    });


  } else{

    document.querySelector('#prob_img').src = "img/no"+i +".jpg";
    document.querySelector('#page_number').innerHTML= "문제번호" + i+"/12";
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
    "title": "문제 1번",
    "description": "친구가 약속 30분 전에 급한일이 생겼다며 연락이 왔다. 이때 나는",
    "A": "흠... 오랜만에 철수나 연락해볼까.",
    "B": "날도 더운데 집에 가서 놀아야지."
  },
  "2": {
    "title": "문제 2번",
    "description": "열심히 달려가는데 갑자기 킥보드가 내 앞을 위험하게 휙 지나간다. 이때 나는",
    "A": "(고함)야!!!",
    "B": "(속으로)와씨 미쳤나 저거! 가다 팍 넘어져라!"
  },
  "3": {
    "title": "문제 3번",
    "description": "토요일 하루 종일 최근 유행하는 드라마만 보다가 저녁이 되었다. 이때 나는",
    "A": "바람 쐬러 나간다",
    "B": "유튜브를 킨다."
  },
  "4": {
    "title": "문제 4번",
    "description": "캠핑/여행을 가기 하루 전날, 나는",
    "A": "내일 일단 휴게소 들려서 알감자 먹고 도착하면 바로 짐 풀어서 맥주 한잔 들이켜야지. 내일 날씨 어떻지? 사진 어떻게 찍으면 잘 나올까. ",
    "B": "내일 아침에 뭐 입지?"
  },
  "5": {
    "title": "문제 5번",
    "description": "팝콘 다 떨어트리게 만든 공포영화를 보고 나왔다. 이때 나는",
    "A": "만약 내가 저 상황에 있었으면 퇴마사 아저씨한테 아빠라고 하면서 들러붙어있을거야. 만약 귀신이 내 눈에 보이잖아? 그럼 나 죽어...",
    "B": "와 쥰내 무서운 영화였어."
  },
  "6": {
    "title": "문제 6번",
    "description": "민트초코 떡볶이가 맛있다고 하는 유튜버를 보았다. 이때 나는",
    "A": "와씨;; 떡볶이에 무슨 민트초코야. 저걸 어떤 상식있는 인간이 먹어보겠어. 딱봐도 역한데. 저걸 사먹는 사람들은 뭐하는 사람이지? 궁금해서 그런가? 진짜 민초 좋아해서 그런가?",
    "B": "와씨, 저걸 먹는 사람이 있어?"
  },
  "7": {
    "title": "문제 7번",
    "description": "별로 관심없는 상대랑 1:1로 밥을 먹고 있는데 애인이랑 헤어졌다는 소식을 들었다. 이때 나는",
    "A": "(별뜻없이)그래? 왜 헤어졌는데?",
    "B": "(영혼없이)그랬구나~ 힘내~"
  },
  "8": {
    "title": "문제 8번",
    "description": "친구가 이직하려는데 서류 탈락했다고 징징거린다. 이때 나는",
    "A": "몇 군데 넣었어?",
    "B": "힘들지 ㅜㅜ?"
  },
  "9": {
    "title": "문제 9번",
    "description": "친구가 내가 싫어하는 행동을 반복하는게 눈에 들어왔다. 이때 나는",
    "A": "그거 내가 싫어한다고 말했을텐데?",
    "B": "아 타이밍 좀 이상하다. 다음에 또 하면 말해줘야지."
  },
  "10": {
    "title": "문제 10번",
    "description": "30일 뒤 마감인 과제가 주어졌다. 이때 나는",
    "A": "혹시 다른 일이 생길지도 모르니가 이번 주 토요일에 끝내자.",
    "B": "(29일 뒤))아 내일 마감이네?"
  }
};
var result={
  "INTJ" : {
    "score": score,
    "myroom" : "흉가",
    "explain": "그 x끼 꺼지라 그래!!! 상대방 모르게 그 사람을 저격하고 비방하며 불만을 표출한다",
    "myfit" : "사람집",
    "detail": "일상을 평소와 같이 보내지만 머리 속에서는 화가 난 사건을 시간 순서로 배열하며 갈등의 원인과 결과, 상대방이 어쩌다가 그 지경까지 왔는지 분석 중이다. 하지만 결국 자기 스스로 반성과 친구에 대한 빡침의 선을 넘나들며 두뇌가 풀가동 중이기 때문에 페레로 로쉐를 줘서 화를 풀리게 하자.",
    "advice" : "blahblahbalh"

  },
  "INTP": {
    "mbti": "INTP",
    "explain": "대체로 귀찮아서 화를 잘 안낸다. 하지만 한번 화내면 '넌 뒤졌다' 이 마음으로 조지기 때문에 평소에 화를 돋구지 않도록 한다",
    "detail" : "갈등이 생기는 순간부터 그들의 영혼은 땅굴을 판다. 만약 상대방이 잘못한 후 빠르게 해결되지 않거나 지속적으로 에너지가 소모될 때는 손절각을 제고 있으니 상대가 먼저 올때 메로나와 함께 잘못을 인정하고 입에 물려주면 나도 빠르게 인정한다."
  },
  "ENTJ": {
    "mbti": "ENTJ",
    "explain": "(속마음)그럼 그렇지. 저 쓸모없는 머리에서 나오는건 다 그것 밖에 안돼지. 하지만 겉으로는 빙그레한 표정으로 신랄하게 비꼬기 스킬 시전. 불쾌할 수록 웃는다",
    "detail" : "자기 감정이 그대로 드러나기 때문에 가급적 빨리 커피 or 술자리를 마련해 단 둘이 이야기를 나눌 수 있도록 한다! 주의할 것은 이들은 무례함에서 100배 더 빡치기 때문에 영혼없는 사과를 할 생각이면 그냥 접어라."
  },
  "ENTP": {
    "mbti": "ENTP",
    "explain": "엄청난 폭언과 날라다니는 물건들... 감정이 얼굴에 드러나고 행동이 거칠어지며 필터 거쳐지지 않은 말들을 쏟아낸다.",
    "detail":"싸우는 순간 만큼은 볼케이노다. 내가 잘못한 것도 있지만 상대도 충분히 잘못했다. 필터링 없이 나오는 말로 가끔 심한 말을 뱉을 땐 '~라 말한 건 내가 잘못했다'말한다. 하지만 곧 '그런데 너도...'로 이어져 싸움이 반복된다. 머지 않아 체력 방진으로 화해하게 되니 차라리 화해가 필요할 땐 샌드백과 함께 찾아가라."
  },
  "INFJ": {
    "mbti": "INFJ",
    "explain": "넌지시 화난 걸 알린다. 문 쾅쾅 닫기. 키보드 콱콱 샷건 치기. 인프제가 말할 땐 참다 참다 말하는 것이니 인프제가 말하는건 들어라.",
    "detail": "사소한 일이라고 자신을 납득시키지만 잘 웃지 않으려하고 애정을 갈구한다. 그렇기 때문에 화해가 필요할 땐 정성들인 편지를 준비하면 아주 좋다."
  },
  "INFP": {
    "mbti": "INFP",
    "explain": "화를 잘 못내 ㅜㅜ 걍 말 안함. 나만의 시간이 필요한 사람",
    "detail" : "열정이 Ice cold가 되어버린다. 평소보다 수동적이게 되고 어떠한 의견도 내놓지 않는 상태가 된다. 아이스 브레이킹을 위해 달달한 자바칩 프라푸치노와 함께 찾아간다면 금방 풀린다."
  },
  "ENFJ": {
    "mbti": "ENFJ",
    "explain": "화를 잘 내진 않지만 화나면 솔직하게 상대방에게 털어놓는 편. 이 때 대화가 안통하면 평생 굿바이",
    "detail":"스스로 강한 사람이란 걸 알기 때문에 금방 화를 푼다. 시간이 약. 그래도 감정에 휘둘리진 않기 때문에 간단한 사과만으로도 금방 풀린다."
  },
  "ENFP": {
    "mbti": "ENFP",
    "explain": "화를 많이 안내는 것 같아 보이지만 다 속으로 삭히고 있는 것. ENFP 기분이 안좋아보이고 그게 드러난다면 조심할 것. 이 사람들이 화나면 진짜 화난 거",
    "detail":"평소보다 음성이 부드러워지고 본인의 이너 피스를 찾기 위해 노력한다. 화해가 필요할 땐 따듯한 카페 라떼와 함께 해라."
  },
  "ISTJ": {
    "mbti": "ISTJ",
    "explain": "난 괜찮은데 너 같은 자식이 잘 사는 건 말이 안되지. 너도 그 기분 한번 느껴봐!. 아무렇지 않은 척 하지만 텐션이 올라가 있다. 갑자기 즐거운 척을 한다면 어조가 아닌 단어 사용에 집중하도록. 기분이 안좋을 수록 비난이 원색적이 된다",
    "detail":"조곤조곤 다 반박한다. 이들에겐 기억의 방이 있기 때문에 상대가 한 모든 잘못들이 방에 차곡차곡 들어가 있다. 과거 잘못까지 꺼내기 때문에 싸움을 오래 끌고 가면 손해다. 짧게 끝낼 수 있도록!"
  },
  "ISFJ": {
    "mbti": "ISFJ",
    "explain": "화나면 침착해지는 성격. 오히려 말 없어지는데 집에가서 후회함.",
    "detail":"싸움이 길어지면 상대가 옛날에 했던 사례를 말하며 내로남불을 지적한다. 기억력이 붕어라면 이들과 싸우면 큰일난다. 서로 어느 정도 잘못이 있을 때 짧고 굵게 화해할 것."
  },
  "ESTJ": {
    "mbti": "ESTJ",
    "explain": "메뉴얼에 미친 사람들. 계획대로 되지 않을 때 엄청 열받아 하기 때문에 성미가 급하고 소리를 지르지만 왠지 논리적이다",
    "detail":"'싸움은 시간낭비'라는 마인드를 가졌기 때문에 속전속결로 갈등을 해결하려 함. 상대와 나의 잘못을 번호를 매겨 순서대로 따져서 정리한다. 화해보다는 '해결'하는 타입;;"
  },
  "ESFJ": {
    "mbti": "ESFJ",
    "explain": "화를 냈다가도 마지막엔 내가 미안했어요. 하는 타입. 결국엔 모두가 웃고 화해함.",
    "detail" :"속세에서 벗어나 본인 혼자만의 시간을 가지고 돌아오는 타입. 돌아올 땐 화가 풀려있으나 그래도 깔끔한 화해를 위해선 달콤한 핫초코를 함께 나누며 이야기하자."
  },
  "ISTP": {
    "mbti": "ISTP",
    "explain": "자기 할말만 하는 타입.",
    "detail":"주변 지인들에게 자신의 상황을 이해시키고 위안을 얻고자 한다. 지인들과 시간을 보내는 시간이 길어질 수록 상대방의 사막 속 모래 만했던 잘못이 어느 순간 발바닥에 박힌 압정이 되어 있을 거다. 이들이 화가 났다면 늦기 전에 위안을 주는 바나나 우유와 함께 찾아가자."
  },
  "ISFP": {
    "mbti": "ISFP",
    "explain": "조용히 물러나서 투명인간 취급해버리기.",
    "detail" : "싸운 날 절대 일찍 못자는 타입. '연 끊자... 그래도 좋은 사람인데...' 사이에서 줄다리기를 열심히 하다 겨우 잠든다. 피곤했을 이들에게 먼저 비타500을 건내주며 이야기를 이어나가 보자."
  },
  "ESTP": {
    "mbti": "ESTP",
    "explain": "두 손 불끈 쥐고 파르르 떤다던가 한 없이 우울해진다면 이 사람은 화난 것. 근데 얘네들은 냅두면 알아서 까먹음",
    "detail":"싸운 다음 날, 개운하게 아침 햇살을 맞는다. 빡침과 억울함이 50% 감소한 상태. 엄마밥 먹으면 화난게 사라지는 타입. 먼저 연락을 안한다고 하더라도 고의로 그런 것은 아니니 '바쁘구나'라고 생각하고 먼저 연락하자. 쿨하게 화해하자고 말할 타입."
  },
  "ESFP": {
    "mbti": "ESFP",
    "explain": "(예민보스)건드리지마 쳐다보지마 숨도쉬지마",
    "detail" :"호들갑을 떨며 자신의 기분이 다운되어 있음을 알리기 때문에 이 모습을 본다면 가능한 빨리 이 사람이 좋아하는 맛집을 알아두자. 그리고 가능한한 빨리 '이야기할 게 있다'며 자연스럽게 밖으로 빼내서 맛집으로 유인하자. ESFP가 좋아하는 음식을 기다리며 화해를 시전하자."
  }
};

// 테스트 시작함수
var testStart = function(){
  dataLayer.push({
    'event' : 'start'
  });
  document.querySelector('#main').style.display ="none";
  document.querySelector('#test').style.display ="block";
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
  dataLayer = [];
  next();
}
document.querySelector('#retry_btn').addEventListener('click',retry);

//타입 선택
document.querySelector('#A').addEventListener('click',function(){

  dataLayer.push({
    'event' : 'select_answer',
    'answer' : 'A'
  });
  next();
});
document.querySelector('#B').addEventListener('click',function(){
  dataLayer.push({
    'event' : 'select_answer',
    'answer' : 'B'
  });
  score += 10;
  next();
})

//쿼리 파라미터 값이 있으면 결과 페이지로 바로 가기
var shareParams = new URL(location.href).searchParams.get('result'); //지금 보고 있는 페이지 URL의 result라는 쿼리 파라미터 값을 가져온다.
if (Object.keys(result).includes(shareParams) === true){
  document.querySelector('#main').style.display = 'none';
  document.querySelector('#result').style.display = 'block';
  var mbti = shareParams;
  document.querySelector('#mymbti').innerHTML = result[mbti]["mbti"];
  document.querySelector('#result_img').src = "img/result_"+mbti+'.jpeg';
  document.querySelector('#explain').innerHTML = result[mbti]["explain"];
  document.querySelector('#detail').innerHTML = result[mbti]["detail"];


}//result 변수는 mbti 결과값 객체 담은 변수

//카카오 SDK 초기화하기
Kakao.init('1648e790f4d22bbeee4fdc61d5514cdb');
Kakao.isInitialized();

//카카오톡 공유하기 실행 함수
var kakaoShare = function(){
  dataLayer.push({
    'event' : 'kakao_share'
  });
  var title = document.querySelector('#mymbti').textContent;
  var description = document.querySelector('#detail').textContent;
  var imgUrl = document.querySelector('#result_img').src;
  var mbti = new URL(location.href).searchParams.get('result');
  Kakao.Link.sendDefault({
  objectType: 'feed',
  content: {
    title: title,
    description: description,
    imageUrl:imgUrl,
    link: {
      mobileWebUrl: 'https://rememberangryme.netlify.app?result='+mbti,

    },
  },

  buttons: [
    {
      title: '결과 확인하기',
      link: {
        mobileWebUrl: 'https://rememberangryme.netlify.app?result='+mbti,
        webUrl: 'https://rememberangryme.netlify.app?result='+mbti,
      },
    },
    {
      title: '나도 테스트하기',
      link: {
        mobileWebUrl: 'https://rememberangryme.netlify.app',
        webUrl: 'https://rememberangryme.netlify.app',
      },
    },
  ]
});
}

document.querySelector('#share_btn').addEventListener('click',kakaoShare);
