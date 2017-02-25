# Bamazon

## Synopsis

Interactive online storefront / Command line app that take orders from customers and deplete stock from the store's inventory. Also allow to view, track, add and update the product inventory as a manager

#### Customer View 
***
The Bamazon Customer view allows users to view the current items available for purchase. The user will be prompted to enter the Product id number and how many items they wish to purchase. If the item is in stock, the order will be completed and the user will see the total amount of their purchase.

![demo](/assets/images/customerView.gif)

```
To run the customer view use the following command:
** node bamazoncustomer.js
```

#### Manager View 
***
The Bamazon Manager view allows users to view and edit the inventory of the store. The user will be prompted to choose from the following options:

* View products for sale:  the app list every available item including their id's, names, prices, and quantities

![demo](/assets/images/managerView1.gif)

* View low inventory: the app list all items with a inventory count lower than five

![demo](/assets/images/managerView2.gif)

* View departments: the app list every department created

![demo](/assets/images/managerView3.gif)

* Add to inventory: the app display a prompt that will let the manager "add more" of any item currently in the store.

![demo](/assets/images/managerView4.gif)

* Add a new product: the app allow the manager to add a completely new product to the store.

![demo](/assets/images/managerView5.gif)

```
To run the Manager view use the following command:
* node bamazonmanager.js
```

#### Supervisor View 
***
The Bamazon Supervisor view allows users to view ta summarized view of their sales. The user will be prompted to choose from the following options:

* View Product Sales by Department
* View Departments
* View Sales
* Create New Department

![demo](/assets/images/supervisorView.gif)

```
To run the Supervisor view use the following command:
** node bamazonsupervisor.js
```

###Author

Rhyna Silva 

###Technologies Used:

* Javascript
* nodeJS
* MySQL
* npm packages:
  *  mysql
  *  inquirer
  *  cli-table


***
Copyright 2017 Rutgers Coding Bootcamp - Rhyna Silva
