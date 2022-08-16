import { Router } from 'express';
import { sequelize } from '../models/index.js';
import Post from '../models/Post.js';

export const path = '/user';
export const router = Router();

sequelize.sync();
// 채용공고 등록
router.post('/create', async (req, res, next) => {
    try {
        const {company_id, position, content,  skill} = req.body;
        const reward = Number(req.body.reward);

        Post.create({
            company_id: company_id,
            position: position,
            reward: reward,
            content: content,
            skill: skill,
        }).then(() => {
            res.send('채용공고가 등록 되었습니다.');
        });

    } catch (err) {
        next(err);
    } 
});

// 채용공고 수정
router.put('/update', async (req, res, next) => {
    try {
        res.send('respond with a resource');
    } catch (err) {
        next(err);
    }
});

// 채용공고 삭제
router.delete('/delete', async (req, res, next) => {
    try {
        res.send('respond with a resource');
    } catch (err) {
        next(err);
    }
});

// 채용공고 목록가져오기
router.get('/list', async (req, res, next) => {
    try {
        res.send('respond with a resource');
    } catch (err) {
        next(err);
    }
});

// 채용공고 검색
router.get('/search', async (req, res, next) => {
    try {
        res.send('respond with a resource');
    } catch (err) {
        next(err);
    }
});

// 채용공고 상세페이지 가져오기
router.get('/list/:jobpost_id', async (req, res, next) => {
    try {
        res.send('respond with a resource');
    } catch (err) {
        next(err);
    }
});

// 채용공고 지원
router.post('/list/:jobpost_id/apply', async (req, res, next) => {
    try {
        res.send('respond with a resource');
    } catch (err) {
        next(err);
    }
});