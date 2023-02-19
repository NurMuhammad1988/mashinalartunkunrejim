
let click1 = document.getElementById('click1');

click1.onclick = function () {
    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') == 'oq.css') {

        
        theme.href = 'qora.css'
    }

    else{
      theme.href = 'oq.css'  
    }
}


