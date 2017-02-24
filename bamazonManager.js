var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bamazon_db',
  port : '8889'
});
 
connection.connect();

//View Products for Sale
function saleProducts(){
	connection.query('SELECT * FROM Products WHERE stock_quantity > 0', function (error, results) {
		if (error) throw error;
	    console.log('');
	    console.log('Bamazon Inventory List');
	    console.log('');
	    var table = new Table({
			head: ['Product Id', 'Product Description', 'Cost', 'Stock'],
			colWidths: [12, 50, 8, 8],
			colAligns: ['center', 'left', 'right', 'center'],
			style: {
				head: ['blue'],
				compact: true
			}
	    });//end table
	    for (var i = 0; i < results.length; i++) {
	      table.push([results[i].id, results[i].products_name, results[i].price, results[i].stock_quantity]);
	    }
    	console.log(table.toString());
    	console.log('');
    	display();
	});//end query connection
}//end products for sale function

//View Low Inventory
function lowInventory(){

}

// Add to Inventory
function addInventory(){

}

// Add New Product
function addNewProduct(){


}

function display(){
	inquirer.prompt({
          name: 'selection',
          type: 'rawlist',
          choices: ['View Products for Sale','View Low Inventory', 'Add to Inventory','Add New Product', 'Exit'],
          message: 'Select one of the following options: ',
          default: 'Number'
        }).then(function (answer) {
    		switch(answer.selection){
    			case 'View Products for Sale':
    				console.log('sale')
    				saleProducts();
    				break;
    			case 'View Low Inventory':
 	  				console.log('low Inventory')
    				lowInventory();
     				break;
    			case 'Add to Inventory':
    				addInventory();
    				break;
    			case 'Add New Product':
    				addNewProduct();
    				break;
    			case 'Exit':
    				connection.end();
    				break;
    		}
	});
}
display();