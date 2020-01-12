window.onload = function(){
    var materials = [
        "cotton", "Cotton",
        "glass", "Glass",
        "plastic", "Plastic",
        "steel", "Steel",
        "paper", "Paper",
        "battery", "Battery"
    ];
    var impact = [
        "B", "B",
        "C", "C",
        "D", "D",
        "E", "E",
        "A", "A",
        "F", "F"
    ];
    var disposal = [
        "Cotton is an easily recyclable item that often gets overlooked. To dispose of cotton, cleanly wash any cotton and donate the item to a local charity.",
        "Cotton is an easily recyclable item that often gets overlooked. To dispose of cotton, cleanly wash any cotton and donate the item to a local charity.",
        "Glass is dangerous if thrown in the garbage. To dispose of glass, either seal it in a box or wrap it up or give it to a local glass recycling facility.",
        "Glass is dangerous if thrown in the garbage. To dispose of glass, either seal it in a box or wrap it up or give it to a local glass recycling facility.",
        "Plastic has many alternatives that are more eco-friendly. To dispose of plastic, simply reuse if possible or recycle.",
        "Plastic has many alternatives that are more eco-friendly. To dispose of plastic, simply reuse if possible or recycle.",
        "Metal takes a very long time to decompose and is harmful if thrown out directly. To dispose of metal, bring it to a local recycling facility as scrap metal is valuable.",
        "Metal takes a very long time to decompose and is harmful if thrown out directly. To dispose of metal, bring it to a local recycling facility as scrap metal is valuable.",
        "Paper is fairly quick to decompose, however there are better ways than just trashing paper. To dispose of paper, compost or recycle it.",
        "Paper is fairly quick to decompose, however there are better ways than just trashing paper. To dispose of paper, compost or recycle it.",
        "Batteries can be harmful to the environment if the fluid leaks. To dispose of batteries, take them to a battery recycling site as they can be hazardous and toxic.",
        "Batteries can be harmful to the environment if the fluid leaks. To dispose of batteries, take them to a battery recycling site as they can be hazardous and toxic."
    ];

    //decomposing times

    const re = new RegExp(materials.join("|"), 'gi');
    var matches = document.documentElement.innerHTML.match(re);

    var propertyList = ['Material', 'Product Dimensions', 'Number of Items', 'Item Weight', 'Parcel Dimensions', 'Shipping Weight'];
    var x = document.getElementsByClassName("pdTab");
    for (var j = 0; j < x.length; j++) {
        labels = x[j].getElementsByClassName("label");
        for (var i = 0; i < labels.length; i++) {
            propertyLoc = propertyList.indexOf(labels[i].innerText);
            /*if(propertyList[propertyLoc] == "Item Weight"){
                var weight = labels[i].parentElement.getElementsByClassName("value")[0].innerText;
                var number_weight = weight.replace(/[^0-9,.]/g,'');
                var gOrKg = weight.search("Kg");
                if(gOrKg != -1){
                    number_weight *= 1000;
                }
                alert(number_weight);
            }*/
        }
    }

    if(matches != null){

        var unique = matches.filter(function(element, index, self){
            return index === self.indexOf(element);
        });

        var position = materials.indexOf(unique[0]);

        /*var ecoscore = impact[position] * number_weight;
        ecoscore = parseInt(ecoscore);*/

        var ecoscore = impact[position];

        var instructions = disposal[position];
        alert("Ecoscore is: " + ecoscore + "\n" + "Your chosen item contains: " + unique[0] + "\n" + "Disposal instructions: " + instructions);
    }
    else{
        alert("No material found");
    }


}