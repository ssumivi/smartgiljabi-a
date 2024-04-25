$(document).ready(function() {
    // 페이지 로드 시 '전체보기' 항목의 <span> 태그에 'active' 클래스 적용
    $('.allmenu li:first-child span').addClass('active');
  
    // 메뉴 항목의 <span> 태그 클릭 이벤트 처리
    $('.allmenu li span').click(function() {
      // 클릭된 <span> 태그에 'active' 클래스 추가
      $(this).addClass('active');
  
      // 다른 <span> 태그에서 'active' 클래스 제거
      $('.allmenu li span').not(this).removeClass('active');
    });
  });
  