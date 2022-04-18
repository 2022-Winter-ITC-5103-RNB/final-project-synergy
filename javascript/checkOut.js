
const btn=document.querySelector("button");

const paymentDetails=[];

let i=1;

btn.addEventListener("click",function(){
    let name1 =document.getElementById("fname").value;
    let nick= document.getElementById("nick").value;
    let email= document.getElementById("email").value;
    let address= document.getElementById("address").value;
    let city= document.getElementById("city").value;
    let pcode= document.getElementById("pcode").value;
    let payment;
    if(name1!="" && nick!="" && email!="" && address!="" && city!="" && pcode!="")
    {
        if(document.getElementById("bc2").checked== true)
        {
           payment= document.getElementById("bc2").value;
        }
        else
        {
            payment= document.getElementById("bc1").value;
        }

        // console.log(name1 + nick + email +address + city + pcode + payment);
        
        
        // const d=JSON.parse(localStorage.getItem('paymentDetails'));

      

                let details= {
                    id : i,
                    fname : name1,
                    nickName : nick,
                    email :email,
                    address : address,
                    city : city,
                    pcode : pcode,
                    payment: payment
                };

                if(JSON.parse(localStorage.getItem('paymentDetails'))=== null)
                {
                    paymentDetails.push(details);
                    localStorage.setItem("paymentDetails",JSON.stringify(paymentDetails));
                    // window.location.reload();
                    console.log("hii");
                
                }
                else
                {
                    const localItems=JSON.parse(localStorage.getItem('paymentDetails'));
                    
                    details.id=localItems.length+1;
                                      
                    localItems.push(details);
                    
                    localStorage.setItem('paymentDetails',JSON.stringify(localItems));                 

                  
                
                }

                     
// localItems.map(data =>{

                    //     if(details.id == data.id)
                    //     {
                    //        
                    //         
                    //     }
                    //     else
                    //     {
                    //         paymentDetails.push(data);
                    //         console.log("hhhhhh");
                    //     }
                      
                    // });
                    // paymentDetails.push(details);
                    // localStorage.setItem('paymentDetails',JSON.stringify(paymentDetails));
                    // window.location.reload();
       
     
    }
    else
    {
        alert("No fields can empty");
    }
});


