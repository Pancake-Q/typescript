interface IPersion{
	<T>(a:T):T;
}

const getPersionValue:IPersion=<T>(a:T):T=>{
	return a;
}