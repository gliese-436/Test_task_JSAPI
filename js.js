const Products_id = [692493618, 692493620, 692493621, 692493625, 692493626];
const Product_names = ['wheel', 'windshield','rear_window','front_door','hood']

Ecwid.Cart.clear();
localStorage.clear();

try {

	Ecwid.OnAPILoaded.add(function() {
		document.getElementsByClassName('container')[0].style.setProperty( 'opacity', '1'); 
		document.querySelector('.wheel').addEventListener('click', function(e){onclickVhod1(Product_names[0], Wheel)})
		document.querySelector('.windshield').addEventListener('click', function(e){onclickVhod1(Product_names[1], Windshield)})
		document.querySelector('.rear_window').addEventListener('click', function(e){onclickVhod1(Product_names[2], Rear_window)})
		document.querySelector('.front_door').addEventListener('click', function(e){onclickVhod1(Product_names[3], Front_door)})
		document.querySelector('.hood').addEventListener('click', function(e){onclickVhod1(Product_names[4], Hood)})
	});
  
  } catch (err) {
  
	alert('Cервис недоступен. Проверьте подсоединение к Интернету и перезагрузите страницу')
  
  }

function onclickVhod1(productname, product_item) {
	if(localStorage.getItem(productname)!='inline')
		{
		document.getElementById("overlay").style.display = "block";
		timerId = setTimeout(() => {alert("Cервис недоступен. Проверьте подсоединение к Интернету и перезагрузите страницу");document.getElementById("overlay").style.display = "none";}, 10000);
		Ecwid.Cart.addProduct(product_item);
		}
}
function AddtoCart(success, cart, productname)
{
	if (success)
	{
	var cart_object = JSON.parse(JSON.stringify(cart));
	var item_quantity = cart_object.items.length;
	document.getElementById("overlay").style.display = "none";
	localStorage.setItem(productname, 'inline'); // сохраняем значение в ключ 
	document.getElementsByClassName(productname)[0].style.setProperty( 'cursor', 'default', 'important' ); 
	document.getElementsByClassName(productname)[0].style.setProperty( 'opacity', '0', 'important' ); 
	clearTimeout(timerId);
		if (item_quantity>=5)
		{
		var element = document.getElementsByClassName('container');
		element[0].remove();
		document.write("вы собрали автомобиль");
		}
	}
	else
	{	
	{document.getElementById("overlay").style.display = "none"; alert("товара нет в наличии");clearTimeout(timerId);}
	} 
}

 var Wheel = {
	id: Products_id[0],
	quantity: 1,
	options: {},
	recurringChargeSettings: { 
	recurringInterval: "month",
	recurringIntervalCount: 1,
	},
	callback: function(success, product, cart) { 
		AddtoCart(success, cart, Product_names[0])
		}
}

var Windshield = {
	id: Products_id[1],
	quantity: 1,
	options: {},
	recurringChargeSettings: { 
	recurringInterval: "month",
	recurringIntervalCount: 1,
    },
	callback: function(success, product, cart) { 
		AddtoCart(success, cart, Product_names[1])
		}
}

var Rear_window = {
	id: Products_id[2],
	quantity: 1,
	options: {},
	recurringChargeSettings: { 
    recurringInterval: "month",
    recurringIntervalCount: 1,
    },
	callback: function(success, product, cart) { 
		AddtoCart(success, cart, Product_names[2])
		}
}
var Front_door = {
	id: Products_id[3],
	quantity: 1,
	options: {},
	recurringChargeSettings: { 
    recurringInterval: "month",
    recurringIntervalCount: 1,
    },
	callback: function(success, product, cart) { 
		AddtoCart(success, cart, Product_names[3])
		}
}
var Hood = {
	id: Products_id[4],
	quantity: 1,
	options: {},
	recurringChargeSettings: { 
    recurringInterval: "month",
    recurringIntervalCount: 1,
    },
	callback: function(success, product, cart) { 
		AddtoCart(success, cart, Product_names[4])
		}
}