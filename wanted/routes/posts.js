import { Router } from 'express';

export const path = '/user';
export const router = Router();

// 채용공고 등록
router.post('/create', async (req, res, next) => {
  res.send('respond with a resource');
});

// 채용공고 수정
router.put('/update', async (req, res, next) => {
  res.send('respond with a resource');
});

// 채용공고 삭제
router.delete('/delete', async (req, res, next) => {
    res.send('respond with a resource');
});

// 채용공고 목록가져오기
router.get('/list', async (req, res, next) => {
    res.send('respond with a resource');
});

// 채용공고 검색
router.get('/search', async (req, res, next) => {
    res.send('respond with a resource');
});

// 채용공고 상세페이지 가져오기
router.get('/list/:jobpost_id', async (req, res, next) => {
    res.send('respond with a resource');
});

// 채용공고 지원
router.post('/list/:jobpost_id/apply', async (req, res, next) => {
    res.send('respond with a resource');
});