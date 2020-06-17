
function dateDiff(date1 ,date2){
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date1);
    const  secondDate = new Date(date2);
    return diffDays = Math.round(Math.abs((secondDate - firstDate) / oneDay));
    
}

dictionary = (D)=>{
    let k=[],v=[],daydff,avgV, date;
    for (let [key, value] of Object.entries(D)) {
        k.push(key);
        v.push(value);
      }
     let resultK=[],resultV=[];
     resultK.push(k[0]);
     resultV.push(v[0]);
      for(let i=0;i<k.length-1;i++){
          daydff=dateDiff(k[i],k[i+1]);
          if(daydff>1){
            avgV = Math.abs(v[i]-v[i+1])/daydff;
            for (let j = 1; j < daydff; j++) {
               date = new Date(k[i]);
                date.setDate(date.getDate() + j);
                resultK.push(date.toISOString().split("T")[0]);
                if(v[i]<v[i+1]){
                resultV.push(v[i]+j*avgV);
                }else{
                    resultV.push(v[i]-j*avgV);
                }
            }
          }else{
            resultK.push(k[i+1]);
            resultV.push(v[i+1]);
          }
      }
      resultK.push(k[k.length-1]);
      resultV.push(v[v.length-1]);
      var result =  resultV.reduce(function(result, field, index) {
        result[resultK[index]] = field;
        return result;
      }, {});
      return result;
}

module.exports = dictionary;


