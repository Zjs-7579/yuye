//清空
export function highClearData(Data) {
  //console.log("11111111111111111", Data);
  for (let item in Data.AgriculData) {
    if (
      Object.prototype.toString.call(Data.AgriculData[item]) ===
      "[object Array]"
    ) {
      for (let res of Data.AgriculData[item]) {
        for (let item in res) {
          if (item == "inv_type") {
            break;
          } else {
            res[item] = "";
          }
        }
      }
    }
    if (
      Object.prototype.toString.call(Data.AgriculData[item]) ===
      "[object Object]"
    ) {
      for (let res in Data.AgriculData[item]) {
        Data.AgriculData[item][res] = "";
      }
    }
  }

  for (let item of Data.uploadUrlData) {
    item.data.splice(0, item.data.length);
    //console.log(item.data)
  }
}

//赋值
export function highData(newData) {
  console.log(newData);
  for (let item in newData) {
    if (newData[item] == null) {
      //console.log('null',item)
      newData[item] = HighTechData[item];
    }

    if (item == "agriculturalShareholder" && newData[item].length == 0) {
      newData[item] = HighTechData[item];
    }
    if (item == "agriculturalSupport" && newData[item].length == 0) {
      newData[item] = HighTechData[item];
    }
    //console.log(Object.prototype.toString.call(newData[item]) )
    // if(Object.prototype.toString.call(newData[item]) == "[object Array]"){
    //     console.log('array', item)
    //     if(newData[item].length == 0){
    //         newData[item] = AgriculData[item]
    //     }agriculturalLoan
    // }
    if (item == "agriculturalLoan" && newData[item].length == 0) {
      newData[item] = HighTechData[item];
    }
    if (item == "agriculturalFinance" && newData[item].length == 0) {
      newData[item] = HighTechData[item];
    }
  }

  return newData;
}

//文件
export function highFilesData(filesData) {
  if (filesData) {
    for (let item of filesData) {
      //console.log(item)

      //.data = []
      uploadUrlData.forEach((res) => {
        //console.log(res)
        if (item.material_type == res.title) {
          res.data.push(item);
        }
      });
    }
  }

  return uploadUrlData;
}
