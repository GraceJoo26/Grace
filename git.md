1. git clone 동기화 폴더 생성

   git clone(git hub주소)

2. 폴더로 이동

   cd(폴더이름)

3. 공유 할  파일 생성

4. cat(파일명)>파일 내용 읽기

5. git 계정 연동

   ```console
   이름 $ git config --global user.name "John Doe"
   이메일 $ git config --global user.email johndoe@example.com
   ```

6. 파일 추가

   git add (파일명)

7. 중간중간 git status로 상태 확인

8. git commit -m "파일명"

9. git push

10. git site확인





한 번 해놓으면 더이상 안 해도 되는 일  <in my computer>

1. github가입

2. 저장소 생성

3. git config --global user.name "사용자이름"

   git config --global user.email "사용자 이메일"

4. git push 설정시 id/pw

5. id/pw지우기 제어판>사용자계정>자격증명 관리자>윈도우 자격증명>일반자격 증명 추가눌러서 제거



이동하는 곳 마다 자료 받아야 하는 상황에서 

1. git clone "주소 of 저장소"
2. 수시체크 git status 
   1. red: 아직 안 첨부 , 삭제된거도 뜸
   2. green : 첨부  
   3. 숫자:보내기만 해 
   4. clean:다 보냈다

3. git pull(다운로드)
4. git add 파일 폴더
5. git commit -m "설명"
6. git push