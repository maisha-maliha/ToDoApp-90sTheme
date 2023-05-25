let todo_list = document.getElementsByClassName('todo_list')[0];
let head = document.querySelector('input[name="head"]');
let body =document.querySelector('textarea[name="body"]');
let id = 0;
function makeitem(){
    let list_item = document.createElement('div');
    list_item.className = 'item';
    list_item.id = id;
    // ========== CLIP IMAGES
    // first image
    let img_div = document.createElement('div');
    img_div.className = 'img';
    let clipimg = document.createElement('img');
    (id%2==0? clipimg.setAttribute('src', './assets/media/paper-clip.png'): clipimg.setAttribute('src', './assets/media/binder-clip.png'));
    img_div.appendChild(clipimg);
    // second image
    let img_div2 = document.createElement('div');
    img_div2.className = 'img';
    let clipimg2 = document.createElement('img');
    clipimg2.setAttribute('src', './assets/media/wink.png');
    img_div2.appendChild(clipimg2);

    // =========== TITLE
    let h2 = document.createElement('h2');
    h2.innerHTML = head.value;
    let p = document.createElement('p');
    p.innerHTML = body.value;
    // ============ FORM ELEMENT
    let form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('enctype','text/plain')

    let edit_btn = document.createElement('a');
    edit_btn.innerHTML = 'EDIT';

    // THE FOLLOWING CODE IS FOR BACKEND APP
    //let rmv_btn = document.createElement('button');
    //rmv_btn.setAttribute('type','submit');
    //rmv_btn.setAttribute('name',`${item.id.toString()}`);
    //rmv_btn.setAttribute('value','delt');
    let rmv_btn = document.createElement('a'); //  REMOVE THIS FOR BACKEND
    rmv_btn.innerHTML = 'DELTE';
    rmv_btn.addEventListener('click',()=>{
        list_item.remove();
    });

    let done_btn = document.createElement('a');
    let done_img =  document.createElement('img');
    done_img.setAttribute('src', './assets/media/party.png');
    done_btn.appendChild(done_img);
    // done_btn.setAttribute('type','submit');

    done_btn.addEventListener('click', ()=>{
        h2.style = 'text-decoration: line-through';
        p.style = 'text-decoration: line-through';
        list_item.style = 'opacity:0.7';
        edit_btn.style.display = 'none';
        done_btn.style.display = 'none';
    });
    // APPENDING  
    form.appendChild(edit_btn);
    form.appendChild(done_btn);
    form.appendChild(rmv_btn);

    // ALL APPENDING TO LIST_ITEM
    list_item.appendChild(img_div);
    list_item.appendChild(h2);
    list_item.appendChild(p);
    list_item.appendChild(img_div2);
    // TODO LIST APPEND

    edit_btn.addEventListener('click', ()=>{
        let edit_head = document.createElement('input');
        edit_head.value = h2.innerHTML;
        let edit_body = document.createElement('textarea');
        edit_body.value = p.innerHTML;
        let update_btn = document.createElement('a');
        update_btn.innerHTML = 'UPDATE';

        edit_btn.style.display = 'none';
        rmv_btn.style.display = 'none';
        done_btn.style.display = 'none';
        h2.style.display = 'none';
        p.style.display = 'none';

        form.appendChild(edit_head);
        form.appendChild(edit_body);
        form.appendChild(update_btn);

        update_btn.addEventListener('click', ()=>{
            edit_btn.style.display = '';
            rmv_btn.style.display = '';
            done_btn.style.display = '';
            h2.style.display = '';
            p.style.display = '';
            h2.innerHTML = edit_head.value;
            p.innerHTML = edit_body.value;
            edit_head.remove();
            edit_body.remove();
            update_btn.remove();
        });
    });
    list_item.appendChild(form);
    todo_list.appendChild(list_item);
    id++;
    head.value = '';
    body.value = '';
}
console.log("its working");