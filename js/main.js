function validateForm(){
	/* 1. Traemos los valores de los campos del formulario */
	AuptoZ=[A,B,C,D,E,F,G,H,I,J,K,L,M,N,Ñ,O,P,Q,R,S,T,U,V,W,X,Y,Z]
	atoz=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z]
	var name = $('#name').val();
	var name = name.charAt(i);
	var cont = 0
	for(var i=0; i<AuptoZ.length; i++){
		if (name[0]==AuptoZ[i]){
			cont++;
			return	
		}
	}
	for (var z=1; z<name.length; z++){	
		for (var i=0; i<atoz.length; i++){
			if (name[z]==atoz[i]){
				cont++;
				return
			}
		}
	}
	if (cont!=name.length){

	}
	var lastname = $('#lastname').val();
	console.log(lastname);
	var input_email = $('#input-email').val();
	console.log(input_email);
	var input_password = $('#input-password').val();
	console.log(input_password);
	
}