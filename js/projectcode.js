// Hamburger menu
const hamburger = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-bar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Object Array
const projectCards = [{
  featuredImg: '/css/Detail-mobile/Snapshoot-Portfolio.svg',
  name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  tecnologies: ['Ruby on rails', 'CSS', 'JavaScrip', 'Html'],
  linklive: 'https://danfall369.github.io/Microverse-Portfolio/',
  linksource: 'https://github.com/Danfall369/Microverse-Portfolio',
},

{
  featuredImg: '/css/Detail-mobile/Snapshoot-Portfolio.svg',
  name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  tecnologies: ['Ruby on rails', 'CSS', 'JavaScrip', 'Html'],
  linklive: 'https://danfall369.github.io/Microverse-Portfolio/',
  linksource: 'https://github.com/Danfall369/Microverse-Portfolio',
},

{
  featuredImg: '/css/Detail-mobile/Snapshoot-Portfolio.svg',
  name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  tecnologies: ['Ruby on rails', 'CSS', 'JavaScrip', 'Html'],
  linklive: 'https://danfall369.github.io/Microverse-Portfolio/',
  linksource: 'https://github.com/Danfall369/Microverse-Portfolio',
},

{
  featuredImg: '/css/Detail-mobile/Snapshoot-Portfolio.svg',
  name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  tecnologies: ['Ruby on rails', 'CSS', 'JavaScrip', 'Html'],
  linklive: 'https://danfall369.github.io/Microverse-Portfolio/',
  linksource: 'https://github.com/Danfall369/Microverse-Portfolio',
},

{
  featuredImg: '/css/Detail-mobile/Snapshoot-Portfolio.svg',
  name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  tecnologies: ['Ruby on rails', 'CSS', 'JavaScrip', 'Html'],
  linklive: 'https://danfall369.github.io/Microverse-Portfolio/',
  linksource: 'https://github.com/Danfall369/Microverse-Portfolio',
},

{
  featuredImg: '/css/Detail-mobile/Snapshoot-Portfolio.svg',
  name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  tecnologies: ['Ruby on rails', 'CSS', 'JavaScrip', 'Html'],
  linklive: 'https://danfall369.github.io/Microverse-Portfolio/',
  linksource: 'https://github.com/Danfall369/Microverse-Portfolio',
}];

// Dynamics Cards
const gridBox = document.querySelector('#grid-boxs');
const cards = () => {
  projectCards.map((dataInfo) => {
    const projectBox = document.createElement('div');
    projectBox.classList.add('.project-box1');
    projectBox.innerHTML = `
      <div class="project-box1">
      <div class="info-box">
        <h3 class="box-name">${dataInfo.name[0]}</h3>
        <div class="tags-list">
          <div id="info-box-tags">
            <ul id="info-tags">
              <li class="big-tag">${dataInfo.tecnologies[0]}</li>
              <li class="small-tag">${dataInfo.tecnologies[1]}</li>
              <li class="medium-tag">${dataInfo.tecnologies[2]}</li>
              <li class="small-tag">${dataInfo.tecnologies[3]}</li>
            </ul>
          </div>
        </div>
        <div class="action">
          <button class="small-buttom" type="button">See project</button>
        </div>
      </div>
    </div>
      `;
    gridBox.append(projectBox);
    return gridBox;
  });
};
cards();

// PopUP menu
const popUp = document.querySelector('.detail-mobile');
const section = document.createElement('div');
popUp.append(section);
section.innerHTML = `
<div class="card-works">
<div class="img-portfolio">
  <button class="x-button" type="button">x</button>
  <img class="img-mobile" src="./Style/Detail-mobile/Snapshoot-Portfolio.svg" alt="Snapshoot">
  <img class="img-desk" src="./Style/Detail-mobile/Snapshoot-Dsk.svg" alt="Snapshoot">
</div>
<div class="primary-text">
  <div class="project-name">
    <h3 class="primarytxt">Keeping track of hundreds of components</h3>
  </div>
</div>
<div class="info-box-tags">
  <ul class="info-tags">
    <li class="big-tags">Ruby on rails</li>
    <li class="small-tags">CSS</li>
    <li class="medium-tags">JavaScrip</li>
    <li class="small-tags">Html</li>
  </ul>
</div>
<div class="left-block">
  <p class="ptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text
    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the
    relea</p>
</div>
<div class="actions">
  <div class="greenbb">
    <a href="https://danfall369.github.io/Microverse-Portfolio/" target="_blank"><button class="a-btn" type="button">See Live <img class="btn-img"
        src="./Style/Detail-mobile/ext-ico.svg" alt="ext-ico"></button></a>
  </div>
  <div class="greenbb">
    <a href="https://github.com/Danfall369/Microverse-Portfolio" target="_blank"><button class="a-btn" type="button">See Source <img class="btn-img"
        src="./Style/Detail-mobile/GitHub.svg" alt="ext-ico"></button></a>
  </div>
</div>
</div>
`;

const PopUpbutton = document.querySelectorAll('.small-buttom');
PopUpbutton.forEach((button) => {
  const detail = document.querySelector('.detail-mobile');
  button.addEventListener('click', () => {
    detail.style.display = 'block';
  });
});

const closePop = document.querySelector('.x-button');
closePop.addEventListener('click', () => {
  const detail = document.querySelector('.detail-mobile');
  detail.style.display = 'none';
});
