const path = require('path');
const dotenv = require('dotenv')
dotenv.config({path: './config.env'});

const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const stripe = require('stripe')([process.env.STRIPE_SK]);

const { v4: uuidv4 } = require('uuid');

const Order = require("./models/Order");
const Query = require("./models/Query");

const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(cors())
app.use(express.json())

app.use(express.static('static'));

mongoose.connect(process.env.DATABASE_URI,
{useNewUrlParser:true})


//Payment route
app.post("/payment", (req,res) => {

	const {product, token} =req.body;
	console.log("Product", product)
	console.log("Price", product.price)
	const idempotencyKey =uuidv4()

	return stripe.customers.create({
		email: token.email,
		source :token.id
}).then(customer => {
		stripe.charges.create({
		amount: product.price*100,
		currency:'EUR',
		customer:customer.id,
		receipt_email:token.email,
		options:{},
		
		description:`product.name of ${product.name}`
	}, {idempotencyKey})
})
.then(result =>res.status(200).json(result))
.catch(error=> console.log(error))

})


//Contact
app.post('/api/contact', async (req, res) => {
	console.log(req.body)
	try {
		await Query.create({
			name: req.body.name,
			email : req.body.email,
			preactin : req.body.pin,
			query : req.body.query,
			phone : req.body.phone,
			status:'unresolved',
			createdon:new Date()
		})
		res.json({ status: 'ok', text:'stored successfully'})
	} catch (err) {
		res.json({ status: 'error', error: err })
	}
})

//Saving an Order (Upto step 3)
app.post('/api/order', async (req, res) => {
	console.log(req.body)
	try {
		await Order.create({
			value: req.body.value,
			images : req.body.images,
			length : req.body.length,
			sliderVal : req.body.sliderVal,
			name : req.body.name,
			email : req.body.email,
			contact : req.body.contact,
			address : req.body.address,
			section : req.body.section,
			others : req.body.others,
			method: req.body.method,
			floor: req.body.floor,
        	date : req.body.date,
			postcode : req.body.postcode,
			city : req.body.city,
			description : req.body.description,
			orderstatus : req.body.orderstatus,
			stage : req.body.stage,
			cost : req.body.cost,
			createdon:new Date()
		})
		res.json({ status: 'ok', text:'stored successfully'})
	} catch (err) {
		res.json({ status: 'error', error: err })
	}
})



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'));
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
	console.log(`Logged Error: ${err.message}`);
	server.close(() => process.exit(1));
  });
