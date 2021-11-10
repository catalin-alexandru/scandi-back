const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


app.use(cors());
app.use(express.json()); 


app.post("/products", async (req, res) => {
	try {
		const { sku, name, price, type } = req.body;
		const newProduct = await pool.query("INSERT INTO scandi (sku, name, price, type) VALUES($1, $2, $3, $4) RETURNING *", 
			[sku, name, price, type]);
 

		res.json(newProduct.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});


app.get("/products", async (req, res) => {
	try {
		const allProducts = await pool.query("SELECT * FROM scandi");
		res.json(allProducts.rows);
	} catch (err) {
		console.error(err.message)
	}

})


app.delete("/products/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deleteProduct = await pool.query("DELETE FROM scandi WHERE scandi_id = $1", [id]);
		res.json("Product was deleted.");
	} catch (err) {
		console.log(err.message)
	}
})


app.listen(process.env.PORT || 5000, () => {
	console.log(`server has started on port ${process.env.PORT}`);
});