console.log('hi');


const pies = [
    {
        name: 'chess pie',
      img: 'chesspie.jpg',
      person: 'mykel',
    },
    {
        name: 'meat pie',
        img: 'meatpie.jpg',
        person: 'mykel'
    },
    {
        name: 'apple pie',
        img: 'applepie.jpg',
        person: 'annie'
    },
    {
        name: 'peach pie',
        img: 'peachpie.jpg',
        person: 'annie'
    },
    {
        name: 'chocolate pie',
        img: 'chocolatepie.jpg',
        person: 'tt'
    },
    {
        name: 'cinnamon pie',
        img: 'cinnamonpie.jpg',
        person: 'tt'
    },
  ];

  const printToDom = (toPrint, divId) => {
      document.getElementById(divId).innerHTML += toPrint
  }

  const pieBuilder = (piesArray) => {
    for (let i=0; i< piesArray.length; i++){
        const pie = piesArray[i]
        const domString = `
        <div class="card">
            <h2>${pie.name}</h2>
            <img src=${pie.img} alt='Image of ${pie.name}' />
        </div>
        `
        printToDom(domString, 'pie-zone')
    }
  }

  pieBuilder(pies)