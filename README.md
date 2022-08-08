# wanted_pre_onboarding
wanted pre-onboarding backend course

### 1.채용공고 등록 /jobpost/create
### 2.채용공고 수정 /jobpost/update
### 3.채용공고 삭제 /jobpost/create
### 4.채용공고 목록 /jobpost/
### 4-2.채용공고 검색 /jobpost?search=query
### 5.채용공고 상세 /jobpost/detail:param
### 6.채용공고 지원 /jobpost/apply

## 필요모델
```
회사 Company
{
  company_id: number,
  companyname: string,
  nationality: string,
  region: string,
}

사용자 User
{
  user_id: number,
}

채용공고 JobPost
{
  jobpost_id: number,
  company_id: number,
  position: string,
  reward: number,
  content: string,
  skill: string,
}

지원내역 ApplyList
{
  user_id: number,
  joppost_id: number,
}
```
