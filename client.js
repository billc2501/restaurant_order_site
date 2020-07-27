const order = document.querySelector('#survey');
const loadinggif = document.querySelector('#loadinggif')
loadinggif.style.display = 'none';


order.addEventListener('submit', function(event){
    event.preventDefault();
    var name = document.getElementById('name').value;
    var order = document.getElementById('order').value;
    var receipt = {
        name,
        order
    }
    console.log(receipt);
})