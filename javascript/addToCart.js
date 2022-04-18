

window.onload = function () {
    
    let price=0;
   
    let no=0;
   
    let save=0;
   
    let array=[];
   
   const items=JSON.parse(localStorage.getItem('items'));
   
   
   
   // array.push(items[0].name);
   // array.push(items[0].id);
   
   
   let html='';
   //  console.log(items.length);
   for(let i=0;i<items.length;i++)
   {
   
       console.log(items[i].id);
   
       html+='<div class="product">';
         
       html+='<img src="'+items[i].img+'"id="img">';
    
       html+='<div id="product-info">';
    
          html+='<h4 class="product-name">'+items[i].name+'</h4>'; 
    
          html+=' <h4 class="product-price">'+items[i].price+'</h4>';
    
           html+='<h4 class="product-offer">10%</h4>';
    
          html+=' <p class="product-quantity">Qnt: <input value="'+items[i].no+'" name=""></p>';
           
           html+='<p class="product-remove"><i class="fa fa-trash" aria-hidden="true"></i><span class="remove">Remove</span></p>';
    
          html+='</div>';
    
          html+='</div>';
   
          
          
          price=price+parseInt(items[i].price.slice(1))*items[i].no;
   
          save=save+(price*0.10);
   
          no=no+items[i].no;   
   
       
       
   }
   
   document.querySelector(".products").innerHTML=html; 
   document.querySelector("#tprice").innerHTML="$"+price.toFixed(2);
   document.querySelector("#tno").innerHTML=no;
   document.querySelector("#save").innerHTML="$"+save.toFixed(2); 
   
    
           const button=document.querySelectorAll('.product');
           for (let i = 0; i < button.length; i++) {
               console.log(items);
                  button[i].addEventListener("click", function(){
                    
                    items.splice(i,1);
                    localStorage.setItem('items', JSON.stringify(items));
                    window.location.reload();
               });
           }
               
       
   }
   
   
   
   
   
   
   
   // const product=document.createElement("div");
       // product.className="product";
   
       // const image=document.createElement("img");
       // image.src=items[i].img;
       // image.width="100%";
       // product.appendChild(image);
   
       // const productInfo=document.createElement("div");
       // productInfo.className="product-info";
       // product.appendChild(productInfo);
   
   
       // const name=document.createElement("h3");
       // name.className="product-name";
       // name.innerText=items[i].name;
       //  product.appendChild(name);
   
       //  const price=document.createElement("h4");
       //  price.className="product-price";
       //  price.innerText=items[i].price;
       //  product.appendChild(price);
    
       //  const quant=document.createElement("p");
       //  quant.className="product-quantity";
       //  quant.innerText=items[i].no;
       //  product.appendChild(quant);
   
       // //  const quant=document.createElement("h4");
       // //  quant.className="product-quantity";
       // //  quant.innerText=items[i].quant;
       // //  product.appendChild(quant);
   
       
   
       // const products= document.querySelector(".products");
       
       // products.appendChild(product);
       // document.querySelector(".products");
   
       // const name=document.createElement("h3");
       // name.innerText=items[i].name;
   
       // document.querySelector(".products").appendChild(name);
    
       // let data=[{
       //        name : items[i].name,
       //        price : items[i].price
       // }];
       
      
       // let name='';
       // let price='';
       //     // value.push(items[i].name);
       //     // value.push(items[i].img);
       //     // value.push(items[i].price);       
       //     // value.push(items[i].no); 
       //     // value.push(items[i].id);
           
            
   
          
          
       //     name += '<h3 class="product-name">'+items[i].img+'</h3>';
       //     // price+= '<h4 class="product-price">'+items[i].price+'</h4>';
   
       //     document.querySelector('.cart .products .product').innerHTML =name;
       // // document.querySelector('.product-price').innerHTML = price;
           
       
   //     html += 
   //              `<img src="" id="img">
       
   //                     <div class="product-info">
       
   //                         <h3 class="product-name">browni With IceCream</h3>
       
   //                         <h4 class="product-price">$9</h4>
       
   //                         <h4 class="product-offer">10%</h4>
       
   //                         <p class="product-quantity">Qnt: <input name="" id="product-quant"></p>
   
       
   //                         <p class="product-remove">
       
   //                             <i class="fa fa-trash" aria-hidden="true"></i>
       
   //                             <span class="remove">Remove</span>
       
   //                         </p>
       
   //                     </div>`     
   // });
   
   // let notselm = document.getElementById("notes");
   // if (notesObj.length != 0) {
   //     notselm.innerHTML = html;
   
   // } else {
   //     notselm.innerHTML = `Empty-Notes.`;
   // }
   // }
   
           
          
   //         console.log(items[i].name);
       //     console.log(value[i+1]);
       //      console.log(value[i+2]);
       //    console.log(value[i+3]);
           
       // document.querySelector('.product-name').innerHTML=items[i].name;
       // document.querySelector('#img').src=items[i].img;
       // document.querySelector('.product-price').innerHTML=items[i].price;
       // document.querySelector('#product-quant').value=items[i].no;
   
        
       // array.push(value);
       // console.log(array[i]);
       
   
   
   
       
   
   //     const out=window.localStorage.getItem('name');
   // const img=window.localStorage.getItem('image');
   
   
   // console.log(value);
   