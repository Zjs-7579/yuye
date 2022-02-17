import http from '../httpConfig'

//上传附件
export async function UploadFiles(params){
    //console.log(parmse)
    const res = await http.post("modern/ty/apply/upload", params)
    return res
}



//删除附件
export async function DeleteFiles(id){
    console.log(id)
    const res = await http.delete("modern/ty/apply/file/"+ id)
    return res
}



//下载附件
export async function DownContentText(id){
    //console.log(parmse)
    const res = await http.get(`modern/ty/apply/file/${id}`)
    return res
}
