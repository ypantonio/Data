//DATA
let user = [
    [100,	'anna0',	    'white00',	    'Anna Addison',	    '1325 Candy Rd, San Francisco, CA 96123',	'anna.addison@yahoo.com',	3841019535],
    [101,	'carol1',	    'orange01',	    'Carol Campbell',	'1931 Brown St, Gainesville, FL 85321',	    'carol.campbell@aol.com', 	2548952651],
    [102,	'julia2',	    'yellow02',	    'Julia Jones',	    '1622 Seaside St, Seattle, WA 32569',	    'jolie.jones@msn.com',	    3651469235],
    [103,	'irene3',	    'blue03',	    'Irene Everly',	    '1756 East Dr, Houston, TX 28562',	        'irene.everly@gmail.com',	9859423698],
    [104,	'rachel4',	    'red04',	    'Rachel Rose',	    '1465 River Dr, Boston, MA 43625',	        'rachel.rose@hotmail.com',	2945632543],
    [105,	'sophie5',	    'green05',	    'Sophie Sutton',	'1896 West Dr, Portland, OR 65842',	        'sophie.sutton@yahoo.com',	5169525614],
    [106,	'wendy6',	    'purple06',	    'Wendy West',	    '1252 Vine St, Chicago, IL 73215',	        'wendy.west@gmail.com', 	6645936156],
    [106,	'jefuentes',    'gatitos123',   'Jossue Fuentes',   'Colegio Santa Catalina SCL',	            'jefuentes@scl.edu.gt', 	4568443548]
]


let usuario = 0;
let title = document.querySelector('#name');
let datos = document.querySelector('#datos');
title.innerHTML = user[usuario][1];

function seguir(){
  if(usuario <= 6){
    usuario++;
  }
  title.innerHTML = user[usuario][1];
}

function regresar(){
    if(usuario >= 1){
      usuario--;
    }
    title.innerHTML = user[usuario][1];

}

function mostrar(){
  datos.innerHTML = '<h2 class="estilo">' + 'No. de id' + '</h2>' +
  '<h2 class="fond">' + user_ob[usuario].id + '</h2>' +  '<br>' +
     '<h2 class="estilo">' + 'Nombre de usuario' + '</h2>'+
  '<h2 class="fond">' + user_ob[usuario].nickname + '</h2>' + '<br>' +
     '<h2 class="estilo">' + 'Nombre' + '</h2>' +
  '<h2 class="fond">' + user_ob[usuario].name + '</h2>' + '<br>' +
      '<h2 class="estilo">' + 'Dirección' + '</h2>' +
  '<h2 class="fond">' + user_ob[usuario].addres + '</h2>' + '<br>' +
     '<h2 class="estilo">' + 'Correo electrónico' + '</h2>'+
  '<h2 class="fond">' + user_ob[usuario].email + '</h2>' + '<br>' +
     '<h2 class="estilo">' + 'No. de teléfono' + '</h2>' +
  '<h2 class="fond">' + user_ob[usuario].phone + '</h2>'

}
