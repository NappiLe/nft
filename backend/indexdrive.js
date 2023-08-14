// const express = require('express')
// const {google, drive_v2} = require('googleapis')
// const multer = require('multer')

// const path = require('path')
// const cors = require('cors')

// const fs = require('fs')

// const app = express()

// const storage = multer.diskStorage({
//     destination: 'uploads',
//     filename: function(req, file, callback){
//         const extension = file.originalname.split(".").pop()
//         callback(null, `${file.fieldname}-${Date.now()}.${extension}`)
//     }
// })

// const upload = multer({storage: storage})

// app.use(cors())

// app.post('/upload', upload.array('files'), async (req, res) => {
//     try{
//         const auth= new google.auth.GoogleAuth({
//             keyFile: 'key.json',
//             scopes: ['https://www.googleapis.com/auth/drive']
//         })


//         const drive = google.drive({
//             version: 'v3',
//             auth
//         })

//         const uploadedFiles = []

//         for (let i=0; i < req.files.length; i++ ){
//             const file = req.files[i]
            
//             const response = await drive.files.create({
//                 requestBody:{
//                     name: file.originalname,
//                     mimeType: file.mimeType,
//                     parents: ['1ROHdWtuiGvhU4Gfslv8sg57H2m9H-pQl']
//                 },
//                 media:{
//                     body: fs.createReadStream(file.path)
//                 }
//             })
            
//             uploadedFiles.push(response.data)
//         }

//         res.json({files: uploadedFiles})

//     }catch(err){
//         console.log(err)
//     }
// })

// app.listen(8000, () => {
//     console.log('App is listening on port 8000')
// })