var html5_audiotypes={
    "mp3": "utl/duck.mp3"}
    
    function createsoundbite(sound){
    var html5audio=document.createElement('audio')
    if (html5audio.canPlayType){ //Comprobar soporte para audio HTML5
    for (var i=0; i<arguments.length; i++){
    var sourceel=document.createElement('source')
    sourceel.setAttribute('src', arguments[i])
    if (arguments[i].match(/.(w+)$/i))
    sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
    html5audio.appendChild(sourceel)
    }
    html5audio.load()
    html5audio.playclip=function(){
    html5audio.pause()
    html5audio.currentTime=0
    html5audio.play()
    }
    return html5audio
    }
    else{
    return {playclip:function(){throw new Error('Su navegador no soporta audio HTML5')}}
    }
    }
    
    //Inicializar sonidos
    var hover1 = createsoundbite('utl/duck.mp3');
   