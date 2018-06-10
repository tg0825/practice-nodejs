# RESTful 웹 서비스 개발
RESTful 웹 서비스는 REST(Representational State Transfer) 규정을 맞춰 만든 웹 서비스를
의미합니다.

REST 규정은 일관된 웹 서비스 인터페이스 설계를 위해 만들어졌습니다. REST규정에 맞게 만든 웹 서비스의
구조를 알아보겠습니다.

경로 | /collection | /collection/:id
get방식 | 컬렉션 조회 | 컬렉션 특정 요소 조회
post | 컬렉션에 새로운 데이터 추가 | 사용하지 않음
put | 컬렉션 전체를 한번에 변경 | 컬렉션에 특정 요소 추가
delete | 컬렉션 전체 삭제 | 컬렉션 특정 요소 삭제

예)
GET /user - 사용자 전체를 조회
GET /user/123 - 123번 사용자 조회
POST /user 사용자 추가
DELETE /user/123 - 123번 사용자 삭제
