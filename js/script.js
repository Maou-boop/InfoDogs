$(document).ready(function (){
    $("#formulario").submit(function(e){
        e.preventDefault();
        const name = $("#breed-name").val();
        const height = $(".height .details-text span");
        const weight = $(".weight .details-text span");
        const dogBox = $(".dog-box");
        const detailsBox = $(".details-box");
        const dogImage = $("#dog-image");
        const energyState = $("#energy-image");
        const hairState = $("#hair-image");

        $.ajax({
            method: 'GET',
            url: `https://api.api-ninjas.com/v1/dogs?name=${name}`,
            headers: {
                'X-Api-Key': 'SG22fMn55QPdAqtvfu8BpEzNTCCXzXhtJfUjVpig'
            },
            contentType: "json",
            success: function (data){
                let min_height = parseInt((data[0].min_height_male)*2.54);
                let max_height = parseInt((data[0].max_height_male)*2.54);

                let max_weight = parseInt((data[0].max_weight_male)*0.453592);
                let min_weight = parseInt((data[0].min_weight_male)*0.453592);

                dogBox.css("display", "block");
                detailsBox.css("display", "block");

                $(".dog-box h3").html(`${data[0].name}`);
                dogImage.attr("src", `${data[0].image_link}`);
                height.html(`${min_height} - ${max_height} cm`);
                weight.html(`${min_weight} - ${max_weight} kg`);
                switch (parseInt(data[0].energy)){
                    case 0:
                        energyState.replaceWith('<img src="img/0.png">');
                        break;
                    case 1:
                        energyState.replaceWith('<img src="img/1.png">');
                        break;

                    case 2:
                        energyState.replaceWith('<img src="img/2.png">');
                        break;
                    case 3:
                        energyState.replaceWith('<img src="img/3.png">');
                        break;
                    case 4:
                        energyState.replaceWith('<img src="img/4.png">');
                        break;
                    case 5:
                        energyState.replaceWith('<img src="img/5.png">');
                        break;
                }

                switch (parseInt(data[0].shedding)){
                    case 0:
                        hairState.replaceWith('<img src="img/0.png">');
                        break;
                    case 1:
                        hairState.replaceWith('<img src="img/1.png">');
                        break;

                    case 2:
                        hairState.replaceWith('<img src="img/2.png">');
                        break;
                    case 3:
                        hairState.replaceWith('<img src="img/3.png">');
                        break;
                    case 4:
                        hairState.replaceWith('<img src="img/4.png">');
                        break;
                    case 5:
                        hairState.replaceWith('<img src="img/5.png">');
                        break;
                }
            },
            error: function() {
                console.log("error");
            }
        });

        return false;
    });

});