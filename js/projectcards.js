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
document.querySelector('#grid-boxs').innerHTML = projectCards.map(
  (info) => `
    <div class="project-box1">
    <div class="info-box">
      <h3 class="box-name">${info.name[0]}</h3>
      <div class="tags-list">
        <div id="info-box-tags">
          <ul id="info-tags">
            <li class="big-tag">${info.tecnologies[0]}</li>
            <li class="small-tag">${info.tecnologies[1]}</li>
            <li class="medium-tag">${info.tecnologies[2]}</li>
            <li class="small-tag">${info.tecnologies[3]}</li>
          </ul>
        </div>
      </div>
      <div class="action">
        <button class="small-buttom" type="button">See project</button>
      </div>
    </div>
  </div>
    `,
)
  .join('');

for (let i = 0; i <= projectCards.length; i++) {
  if (i % 2 === 1) {
    document.querySelectorAll('.project-box1')[i].classList.add('#grid-boxs');
  }
}

// PopUP menu
const popUp = document.querySelector('.detail-mobile');
const section = document.createElement('div');
popUp.append(section);
section.innerHTML = `
<div class="card-works">
<div class="img-portfolio">
  <button class="x-button" type="button">x</button>
  <img src="/Style/Detail-mobile/Snapshoot-Portfolio.svg" alt="Snapshoot">
</div>
<div class="Primary-text">
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
    <a href="https://danfall369.github.io/Microverse-Portfolio/" class="a-btn">See Live <img class="btn-img"
        src="/Style/Detail-mobile/ext-ico.svg" alt="ext-ico"></a>
  </div>
  <div class="greenbb">
    <a href="https://github.com/Danfall369/Microverse-Portfolio" class="a-btn">See Source <img class="btn-img"
        src="/Style/Detail-mobile/GitHub.svg" alt="ext-ico"></a>
  </div>
</div>
</div>
`;

const PopUpbutton = document.querySelectorAll('.small-buttom');
PopUpbutton.forEach((button) => {
  const detail = document.querySelector('.detail-mobile');
  button.addEventListener('click', () => {
    detail.style.display = 'block';
  })
});

const closePop = document.querySelector('.x-button');
closePop.addEventListener('click', () => {
  const detail = document.querySelector('.detail-mobile');
  detail.style.display = 'none';
});