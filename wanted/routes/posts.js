import { Router } from 'express';
import { sequelize } from '../models/index.js';
import {post, apply, user} from '../models/index.js';
import { Op } from "sequelize";

export const path = '/post';
export const router = Router();

sequelize.sync();
// 채용공고 등록
router.post('/create', async (req, res, next) => {
    try {
        const {company_id, position, content,  skill} = req.body;
        const reward = Number(req.body.reward);

        await post.create({
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
router.put('/update/:id', async (req, res, next) => {
    try {
        const {company_id, position, content,  skill} = req.body;
        const reward = Number(req.body.reward);

        await post.update({
            company_id: company_id,
            position: position,
            reward: reward,
            content: content,
            skill: skill,
        }, { where: {post_id: req.params.id}
        }).then(() => {
            res.send('채용공고가 수정 되었습니다.');
        });
    } catch (err) {
        next(err);
    }
});

// 채용공고 삭제
router.delete('/delete/:id', async (req, res, next) => {
    try {
        await post.destroy({
             where: {post_id: req.params.id}
        }).then(() => {
            res.send('채용공고가 삭제 되었습니다.');
        });
    } catch (err) {
        next(err);
    }
});

// 채용공고 목록가져오기
router.get('/list', async (req, res, next) => {
    try {
        const posts = await post.findAll();
        res.json(posts);
    } catch (err) {
        next(err);
    }
});

// 채용공고 검색
router.get('/search', async (req, res, next) => {
    try {
        const searchFor = req.query.search;
        const posts = await post.findAll({
            where: {
                [Op.or]: [
                    {company_id: {[Op.like]: `%${searchFor}%`}},
                    {position: {[Op.like]: `%${searchFor}%`}},
                    {reward: {[Op.like]: `%${searchFor}%`}},
                    {content: {[Op.like]: `%${searchFor}%`}},
                    {skill: {[Op.like]: `%${searchFor}%`}},
                ]
            }
        });
        res.json(posts);
    } catch (err) {
        next(err);
    }
});

// 채용공고 상세페이지 가져오기
router.get('/list/:id', async (req, res, next) => {
    try {
        const posts = await post.findOne({
            where: {post_id: req.params.id}
        });
        res.json(posts);
    } catch (err) {
        next(err);
    }
});

// 채용공고 지원
router.post('/list/:id/apply/:userId', async (req, res, next) => {
    try {
        const user_id = req.params.userId;
        const post_id = req.params.id;
        await apply.create({
            post_id: post_id,
            user_id: user_id
        }).then(() => {
            res.send('지원이 완료 되었습니다.');
        });
    } catch (err) {
        console.log(err)
        next(err);
    }
});