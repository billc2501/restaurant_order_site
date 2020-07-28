const survey = document.querySelector('#survey');
const loadinggif = document.querySelector('#loadinggif')
loadinggif.style.display = 'none';


survey.addEventListener('submit', function(event){
    event.preventDefault();
    var name = document.getElementById('name').value;
    var order = document.getElementById('order').value;
    var receipt = {
        name,
        order
    }
    loadinggif.style.display = '';
    survey.style.display = 'none';
    console.log(receipt);
})