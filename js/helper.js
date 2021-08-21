var help,dis,icon;

    help = document.createElement('div');
    document.body.appendChild(help);
    help.id = 'help';
    help.style.display = 'none';
    help.style
    dis = document.createElement('div');
    icon = document.createElement('button');
    help.appendChild(dis);
    p = document.createElement('p');
    dis.appendChild(p);
    dis.appendChild(icon);
    icon.className = "material-icons";
    icon.innerHTML = "clear";
    icon.onclick = function() {myFunction()};
    window.ontouchstart = function () {viewf()};

    // button style

    icon.style.background = 'rgba(0, 0, 0, 0)';
    icon.style.color = '#fff';
    icon.style.float = 'right';
    icon.style.outline = 'none';
    icon.style.border = 'none';
    icon.style.top = '0%';
    icon.style.right = '0%';
    icon.style.margin = '0';
    //icon.style.appearance = 'link';

    // div style

    help.style.height = '60%';
    help.style.width = '70%';
    help.style.background = '#111';
    help.style.position = 'fixed';
    help.style.top = '50%';
    help.style.left = '50%';
    help.style.borderRadius = '3%';
    help.style.transform = 'translate(-50%,-50%)';
    help.style.textAlign = 'center';

    // p style

    p.style.position = 'absolute';
    p.style.top = '0%';
    p.style.left = '0%';
    p.innerHTML = "We would strongly recommend you to use a larger screen with a mouse or trackpad (computer, laptop, etc.) to view this page." ;
    p.style.top = '40%';
    p.style.position = 'absolute';
    p.style.left = '50%';
    p.style.fontSize = '150%';
    p.style.lineHeight = '120%';
    p.style.transform = 'translate(-50%,-50%)';
    p.style.width = '65%';
    p.style.fontFamily = 'Consolas';

    function myFunction(){
        help.style.display = 'none';
        console.log('closed');
        document.cookie = "closed = true";
    }
    function viewf(){
        var cke = document.cookie.split(';');
        if (cke[0] == "closed=true") {
            
        }else{
        help.style.display = 'block';
        }
        
        
    }