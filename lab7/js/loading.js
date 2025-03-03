function init()
{
    document.title ="Onload Event";
    var btn = document.createElement('button');
    btn.id ='helloBtn';
    btn.innerText='Hello';
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(btn);
    btn.onclick= function()
    {
       let txt = document.createTextNode("Napier");
       body.appendChild(txt);

    };



}

window.onload=init;