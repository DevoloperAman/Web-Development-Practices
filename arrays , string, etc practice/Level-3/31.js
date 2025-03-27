function shortArrayByProperty( arr , property ){
    return arr.sort((a,b)=>{
        if(a[property]>b[property]){
            return 1 ;
        }
        if(a[property]<b[property]){
            return -1 ;
        }
        return 0 ;
    })
}

const user=[
    {name:"Aman", age : 25},
    {name:"Mahendra", age : 47},
    {name:"Surendra", age : 27},
    {name:"Jitendra", age : 36}
]

console.log(shortArrayByProperty(user ,'age'));
