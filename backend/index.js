const express = require("express")
const cors = require("cors")
const multer = require('multer')
const nodemailer = require('nodemailer')

const bodyParser = require('body-parser');

const app = express()
const port = 8000


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var to;

const upload = multer({
	storage: multer.memoryStorage()
});

app.post("/sendemail", upload.single('myfile'), async (req, res) => {

	to = "vanduong15@gmail.com"
		
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'ngocle2605@gmail.com',
			pass: 'iyeesmodrcowzetf'
		}
	})

	const mailOptions= {
		from: to,
		to: to,
		subject: `CV application ${req.body.name}`,
		html: `<div>Name: ${req.body.message}</div>
				<div>Email: ${req.body.email}</div>
				<div>Message: ${req.body.message}</div>
				`,
		attachments: [{
		filename: req.file.originalname,
		content: req.file.buffer
    }]
		
}
	
	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log(err)
		} else {
			console.log('Email sent'+ info.response)
		}
	})
})
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})
