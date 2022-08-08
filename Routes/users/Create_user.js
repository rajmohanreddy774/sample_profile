const formidable=require("formidable");
const detect=require('detect-file-type')
const {v1:uuidv1}=require("uuid")
const fs=require('fs');
const path=require("path")
module.exports=(req,res)=>{
    const form=new formidable.IncomingForm()
    form.parse(req,(error,fields,files)=>{
        if(error)
        {
            return res.send("error in file")
        }
  
    detect.fromFile(files.Profile.filepath,(error,res)=>{
      const profileName=uuidv1()+"."+res.ext 
      const allowedImageTypes=['jpg','jpeg','png']
      if(!allowedImageTypes.includes(res.ext))
      {
        return res.send("Image Not Allowed")
      }
    //   console.log(profileName) //875dad40-16d2-11ed-9208-b7e05e8ccbb8.png
    const oldPath=files.Profile.filepath
    const newPath=path.join(__dirname,"..","..","uploads",profileName)
    // fs.rename()
        return res.send("ok");
        // console.log(files.Profile.filepath)
    })
   
    })
 
}