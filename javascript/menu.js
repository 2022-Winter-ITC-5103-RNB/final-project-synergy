const click=document.getElementsByClassName('btn btn-secondary');
const items=[];
 console.log(click.length);

for(let i=0;i<click.length;i++)
{
    click[i].addEventListener("click",function (event){
        console.log(event.target.parentElement.parentElement.children[0].src);

        if(typeof(Storage) !== 'undefined')
        {

            let item= {
                id : i+1,
                name : event.target.parentElement.children[0].children[0].children[0].textContent,
                description : event.target.parentElement.children[0].children[0].children[1].textContent,
                price : event.target.parentElement.children[0].children[0].children[2].children[0].textContent,
                img : event.target.parentElement.parentElement.children[0].src,
                no : 1
            };

            if(JSON.parse(localStorage.getItem('items'))=== null)
            {
                items.push(item);
                localStorage.setItem("items",JSON.stringify(items));
                window.location.reload();
            }
            else
            {
                const localItems=JSON.parse(localStorage.getItem('items'));

                localItems.map(data =>{

                    if(item.id == data.id)
                    {
                        item.no = data.no+1;
                    }
                    else
                    {
                        items.push(data);
                    }
                  
                });
                items.push(item);
                localStorage.setItem('items',JSON.stringify(items));
                window.location.reload();
            }
        }
        else
        {
            alert("Local Storage is not working");
        }

    });

    
}

