function createUser(){
    var name = document.getElementById('textbox_id').value

    
    fetch('/user',{
        method: 'POST',
        body: JSON.stringify({
            name: name,
            account_balance: 1000000,
            mineral:"",
            location:"",
            type_of_mining:""
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    }).then(res=>{
       
    })
}