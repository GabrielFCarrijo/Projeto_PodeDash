window.addEventListener('load',carrega);

function carrega(){
    document.getElementById('fifield-pontoeld-name').addEventListener('blur', leave);
    document.getElementById('field-pass').addEventListener('blur', leave);
    document.getElementById('field-ponto').addEventListener('blur', leave);   
}
function leave(){
    if(this.value != ''){
        this.offsetParent.className += " ativo";
    }else{
        this.offsetParent.className = 'box';
    }
}

function inputSHOW(_show){
    if(_show){
        document.getElementById('field-name').offsetParent.className += " ativo";
        document.getElementById('field-pass').offsetParent.className += " ativo";
        document.getElementById('field-ponto').offsetParent.className += " ativo";
        document.getElementById('btn-deletar').style.display = 'block';
    }else{
        
        document.getElementById('field-name').offsetParent.className = 'box';
        document.getElementById('field-pass').offsetParent.className = 'box';
        document.getElementById('field-ponto').offsetParent.className = 'box';
    }
}

function limpaCampo(){
    
    document.getElementById('field-id').value = '';
    document.getElementById('field-name').value = '';
    document.getElementById('field-pass').value = '';
    document.getElementById('field-ponto').value = '';
}