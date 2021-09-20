if(localStorage.getItem('tema')=='dark')
SetDarkMode()

function SetDarkMode(){
    let emoticon =" "
    let isDark = document.body.classList.toggle('darkmode') //fungsi lebih sederhana agar tertoggle,

    if(isDark){
        emoticon = "&#127770;" //code emot
        localStorage.setItem('tema','dark') //menyimpan jika di refresh tidak terubah 
    }else{
        emoticon = "&#x1F31E;"
        localStorage.removeItem('tema')
    }
    document.getElementById('darkBtn').innerHTML = emoticon
}