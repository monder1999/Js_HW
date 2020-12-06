const arr = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]
function homework(){

	console.log ("All topping types is : ")
    let toop =new Set();
    arr.forEach(x=>x.topping.forEach(x1=>toop.add(x1.type)));
  toop.forEach(element =>
    console.log (element) 
      );
      console.log("**********************************************")
    console.log ("All batter types is : ")
    let batt=new Set();
    arr.forEach(x=>x.batters.batter.forEach(x1=>batt.add(x1.type)));
    batt.forEach(element =>
        console.log (element));
        console.log("**********************************************")
    let numbers=0;
    let sumation=0;
    arr.forEach(x=>{sumation+=x.ppu;numbers+=1});
	let avarge = sumation/numbers ;
	console.log("the ppu avarge is : " + avarge);
	console.log("the ppu sum is : " + sumation);
    console.log("**********************************************")
    console.log("List of all mentioned IDs regardless to the type is :")
    
    let ids=new Set();
    arr.forEach(x=>{ids.add(x.id);x.batters.batter.forEach(x1=>ids.add(x1.id));x.topping.forEach(x1=>ids.add(x1.id));
    
    });
    console.log(...ids);
    console.log("**********************************************")
}
homework();
