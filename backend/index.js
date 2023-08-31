const express = require("express")
const cors = require("cors")
const multer = require('multer')
const nodemailer = require('nodemailer')

const bodyParser = require('body-parser');

const app = express()

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

app.options('*', cors());

const port = process.env.PORT 

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

var to;

const upload = multer({
	storage: multer.memoryStorage()
});

app.post("/sendemail", upload.single('myfile'), async (req, res) => {

	to = process.env.EMAIL
		
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		port: 465,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASS
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


	await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log(err)
		} else {
			console.log('Email sent'+ info.response)
		}
	})
		
	});
})
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})
