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
    const response = fetch(new URL('http:localhost:3000/'), {
        method: 'POST',
        body: JSON.stringify(receipt),
        headers: {
            'content-type': 'application/json'
          }
        }).then(response => response.json()).then(receipt1 => console.log(receipt1));
    loadinggif.style.display = 'none';
    survey.style.display = '';
    survey.reset();
})