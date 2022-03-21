/*jshint esversion: 6 */
let addNewPostReference = document.querySelector('#addPost');
let formNewPostReference = document.getElementById('formAddNewPost');
let postCancelReference = document.getElementById('postCancel');
let sendPostReference = document.getElementById('sendPost');
let containerReference = document.querySelector('.posts');
let titlePostReference = document.getElementById('titlePost');
let urlPostReference = document.getElementById('urlPost');
let dateFirstRunReference = document.getElementById('dateFirstRun');
let descriptionPostReference = document.getElementById('descriptionPost');
let posts = [
  {

    title: 'In the Land of Leadale',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.TMFDOjaTxFyJTcX4cGC4nAAAAA%26pid%3DApi&f=1',
    firstRun: '05/01/2022',
    description: 'Sabe Sword Art Online? Então: a garota Keina sofre um acidente, fica em estado vegetativo e acorda no VRMMORPG World of Leadale, na pele de sua personagem, Cayna, só que centenas de anos depois na timeline daquele mundo, e com três filhos!'
  },
  {

    title: 'ORIENT',
    image: 'https://somoskudasai.com/wp-content/uploads/2020/12/2STAxF5u_2x.jpg',
    firstRun: '20/01/2022',
    description: 'Adaptação do mangá de mesmo nome da mesma autora de Magi, Shinobu Ohtaka, desta vez a mangaká troca os contos das 1001 Noites por uma versão exagerada e fantástica de um Japão feudal assolado por demônios.'
  }
];


function renderPosts( postsReference ){
    for (let post of postsReference) {
        containerReference.innerHTML += `
            <div class="item">
                <img src="${post.image}">
                <h2>${post.title}</h2>
                <h3>ESTREIA: <b>${post.firstRun}<b/></h3>
                <p>${post.description}</p>
            </div>`;
    }
}

renderPosts(posts);


window.onload = function() {
  addNewPostReference.addEventListener('click', function(event){
    event.preventDefault();
    containerReference.className="hidden";
    formNewPostReference.className="addNewPost";
  });
  postCancelReference.addEventListener('click', function(event){
    event.preventDefault();
    containerReference.className="posts";
    formNewPostReference.className="hidden";
  });
  sendPostReference.addEventListener('click', function(event){
    event.preventDefault();
    
    var dataInput = dateFirstRunReference.value;
    
    data = new Date(dataInput);
    dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    let register = {
      title: titlePostReference.value,
      image: urlPostReference.value,
      firstRun: dataFormatada,
      description: descriptionPostReference.value
    };
    posts.unshift(register);
    containerReference.className="posts";
    formNewPostReference.className="hidden";
    console.log(posts);
    containerReference.innerHTML = "";
    renderPosts(posts);
  });
};
