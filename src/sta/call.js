//大小
let getDX=num=>{
    return num>13?"大":"小";
}
//单双
let getDS=num=>{
    if(parseInt(num)|| num==0){
        return num%2===0?"双":"单";
    }
}
//杀组合
let getCombination=num=>{
    return this.getDX(num)+this.getDS(num);

}
//取尾
let getTail=num=>{
    //取尾
    return parseInt(num)%10;
}
//tm加0
let addZero=num=>{

    if(parseInt(num)<10){
        num='0'+num;
    }
    return num;
}
let Contrast=(yy,nn)=>{
    //预测对比结果
    //yy=>本期开奖
    //nn=>本期预测的tm
    //type=>预测的类型(1=>大小单双,2=>杀组合)
    let reslut=[];
    for (let index = 0; index < yy.length; index++) {
        if(this.getCombination(yy[index].c4)===this.getCombination(nn[index+1])){
            reslut.push({code:1,msg:'组合',type:'danger',dx:{code:1,type:'danger'},ds:{code:1,type:'danger'}})
            continue;
        }else{
            if(this.getDS(yy[index].c4)===this.getDS(nn[index+1])){
                reslut.push({code:2,msg:'单双',type:'danger',dx:{code:0,type:''},ds:{code:1,type:'danger'}})
                continue;
            }
            if(this.getDX(yy[index].c4)===this.getDX(nn[index+1])){
                reslut.push({code:3,msg:'大小',type:'danger',dx:{code:1,type:'danger'},ds:{code:0,type:''}})
                continue;
            }
            reslut.push({code:0,msg:'错误',type:'',dx:{code:0,type:''},ds:{code:0,type:''}})
        }
        
    }
    return reslut;   
    }
    
//算法存储
let formulaData=[
    {
        title:'算法1',
        gs:["1+2+10","8+2+10","6"],
        isqw:true,
    },
    {
        title:'算法2',
        gs:["1+2+6"],
        isqw:false,
    },
    {
        title:'算法3',
        gs:["1+4+6","1+4+2","4"],
        isqw:true, 
    },
    {
        title:'算法4',
        gs:["1+6+4","8+1+4","8"],
        isqw:true, 
    },
    {
        title:'算法5',
        gs:["1+6+8","4+1+8","11"],
        isqw:true, 
    },
    {
        title:'算法6',
        gs:["1+2+7","4+1+2","2+4+9"],
        isqw:true, 
    },
    {
        title:'算法7',
        gs:["1+5+7"],
        isqw:false, 
    }
];
exports.getDX=getDX;
exports.getDS=getDS;
exports.getTail=getTail;
exports.formulaData=formulaData;
exports.addZero=addZero;
exports.Contrast=Contrast;
exports.getCombination=getCombination;