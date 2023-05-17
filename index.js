const mostrarRegiao = (e, regiao) => {
    console.log(e, regiao)
    e.preventDefault();
    document.querySelector('#regiao').className='regiao-mostrar ' + regiao;
}

const fecharRegiao = (e, regiao) => {
    e.preventDefault();
    document.querySelector('#regiao').className='regiao-fechar ' + regiao;
}

const mostrarMenu = (e, estado) => {
    console.log(e, estado)
    e.preventDefault();
    document.querySelector('#menu').className='menu-mostrar ' + estado;
}

const fecharMenu = (e, estado) => {
    e.preventDefault();
    document.querySelector('#menu').className='menu-fechar ' + estado;
}