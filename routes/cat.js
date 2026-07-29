var express = require('express');
var router = express.Router();
const request = require('request');
const cors = require('cors'); //corsミドルウェアを追加
//上記は、第14回で追加1

const corsOptions = {
    origin: '*'
};
//上記は、特定のURLのみ許可する方法　結果的に、ローカル環境では 全許可でないと動かなかった
//上記は、第14回で追加2

//router.use(cors());
router.use(cors(corsOptions));
//corsミドルウェアを使用
//上記は、第14回で追加3

router.get('/',async(req,res)=>{
    request('https://api.thecatapi.com/v1/images/search',function(error,response,body){
        if(!error && response.statusCode == 200){
            const data = JSON.parse(body);
            res.json(data);
        }
    });
})

module.exports = router;