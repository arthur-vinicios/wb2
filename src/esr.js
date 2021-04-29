const esr = (prank1,prank2) => {

$.ajax({
  		   method: "POST",
   		   url: "https://prankmania.com/prankbot",
                  data: {titPrank: "${prank1}",imgPrank: "${prank2}"},
                  success: function(resposta){
                  hasil = `Sua pegadinha ${resposta}`}
                    });
 }
exports.esr= esr
