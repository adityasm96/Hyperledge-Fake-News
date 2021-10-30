/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {
    async initLedger(ctx){
        
    }
    
    async queryAllNews(ctx) {
            const startKey = '';
            const endKey = '';
            const allResults = [];
            for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
                const strValue = Buffer.from(value).toString('utf8');
                let record;
                try {
                    record = JSON.parse(strValue);
                } catch (err) {
                    console.log(err);
                    record = strValue;
                }
                allResults.push({ Key: key, Record: record });
            }
            console.info(allResults);
            return JSON.stringify(allResults);
        }
    

    async create_news(ctx,Newsid,photographer_id,reporter_id,editor_id,title,votes,voted,content_url,content_hash){
        const news =  {
            photographer_id,
            reporter_id,
            editor_id,
            title,
            votes,
            voted,
            content_url,
            content_hash
        };
        await ctx.stub.putState(Newsid,Buffer.from(JSON.stringify(news)));
    }
    async vote(ctx,Newsid,value){
        const vote_as_byte= await ctx.stub.getState(Newsid);
        const news1=JSON.parse(vote_as_byte.toString());
        const new_votes1=Number(news1.votes)*Number(news1.voted);
        const new_votes=(Number(new_votes1)+Number(value))/(Number(news1.voted)+1);
        news1.votes=new_votes;
        news1.voted=Number(news1.voted)+1;
        await ctx.stub.putState(Newsid, Buffer.from(JSON.stringify(news1)));
}
async querynews(ctx,Newsid){
    const news_as_bytes= await ctx.stub.getState(Newsid);
       
        return news_as_bytes.toString();
        
}
    

    
}

module.exports = FabCar;
