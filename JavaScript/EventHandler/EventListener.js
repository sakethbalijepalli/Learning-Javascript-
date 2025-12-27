const listener = document.querySelector('body');

function onClickListener() {
    console.log('Clicked the body object')
}

listener.addEventListener('click', onClickListener);