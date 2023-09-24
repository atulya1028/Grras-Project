const images = [
    "https://yourdost-images.s3-ap-southeast-1.amazonaws.com/newHome/b2b-assets/iitmadras.png",
    "https://yourdost-images.s3-ap-southeast-1.amazonaws.com/newHome/b2b-assets/srm.png",
    "https://yourdost-images.s3-ap-southeast-1.amazonaws.com/newHome/b2b-assets/iitkgp+logo.png",
    "https://d2dnk653l9i5f9.cloudfront.net/newHome/b2b-assets/CapillaryTech.png",
    "https://resources.yourdost.com/amararaja-logo.png",
    "https://d2dnk653l9i5f9.cloudfront.net/newHome/b2b-assets/comviva.png"
];
const imageContainer = document.getElementById("div5");

images.forEach(imageUrl => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("image"); // Add a class for styling (optional)

    card.appendChild(img);
    imageContainer.appendChild(card);
});



const data = [
    {
        id:1,
        img:"https://d2a61ob4m0n1zq.cloudfront.net/newHome/1.svg",
        txt:" Connect with your Expert",
        txt2:"Chat anonymously with a YourDOST expert who's here to help you and not judge you."
    },
    {
        id:2,
        img:"https://d2a61ob4m0n1zq.cloudfront.net/newHome/2.svg",
        txt:"Discuss your Concerns",
        txt2:"Open up to your Expert in a space where you get the guidance you need, and your concerns get the attention they deserve."
    },
    {
        id:3,
        img:"https://d2a61ob4m0n1zq.cloudfront.net/newHome/3.svg",
        txt:" Unleash a Better You",
        txt2:"With 24X7 support from our experts, bid goodbye to your old self and be on your way to becoming a better you."
    },

];

const stepsContainer = document.getElementById("steps");

for (let i = 0; i < data.length; i++) {
const imgElement = document.createElement("img");
imgElement.classList.add('div');
imgElement.src = data[i].img;
imgElement.alt = `Step ${data[i].id}`;
stepsContainer.appendChild(imgElement);
}


const textContainer = document.getElementById("textContainer");

for (let i = 0; i < data.length; i++) {
    const textElement = document.createElement("div");
    textElement.classList.add('div');

    textElement.style.display = 'flex'; // Set display to 'flex'
    textElement.style.alignItems = 'center'; 
    
    textElement.style.color = '#bababa';
    textElement.style.fontSize = '70px'; // Font size for the id
    textElement.textContent = `${data[i].id} `;
    
    const txtSpan = document.createElement("span");
    txtSpan.style.fontSize = '18px';
    txtSpan.style.color = '#302664' // Font size for the txt
    txtSpan.textContent = data[i].txt;
    txtSpan.style.fontFamily = 'Open Sans';
    txtSpan.style.width = '80%';
    txtSpan.style.justifyContent = 'space-around';
    txtSpan.style.display = 'flex';

    textElement.appendChild(txtSpan);
    textContainer.appendChild(textElement);
    
}

const textContainer2 = document.getElementById("textContainer2");

for(let i=0;i<data.length;i++) {
    const textElement2 = document.createElement('div');
    textElement2.textContent = data[i].txt2;

    textContainer2.appendChild(textElement2);
}

const textContainer3 = document.getElementById("textContainer2");
textContainer3.innerHTML = "";

for(let i=0;i<data.length;i++) {
    const textElement2 = document.createElement('div');
    textElement2.textContent = data[i].txt2;
    textElement2.style.width = '19%';
    textElement2.style.justifyContent = 'space-around';
    textElement2.style.display = 'flex';
    textContainer3.appendChild(textElement2);
}

const data2 = [
    {
        profile : "https://d1e5r2yarttfjn.cloudfront.net/thumbnails/jinigopinath.jpg",
        name:"Dr. Jini K. Gopinath",
        profession:"Clinical Psychologist, Hypnotherapist",
        desc:"Over 2-decade experience in building resilient organisations, high performing teams and happier individuals"
    },
    {
        profile : "https://d1e5r2yarttfjn.cloudfront.net/thumbnails/Chandrashekhar.jpg",
        name:"Chandrashekhar Tiwari",
        profession:"Clinical Psychologist, De-Addiction Specialist",
        desc:"11+ years of experience working with clinical population on various emotional disorders and de-addiction cases"
    },
    {
        profile : "https://d1e5r2yarttfjn.cloudfront.net/thumbnails/archanatyagi.jpg",
        name:"Dr Archana Tyagi",
        profession:"ACC(ICF) Coach, Psychologist",
        desc:"30+ years of experience coaching, training and counseling individuals across various corporates and colleges"
    },
];

const imgContainer = document.getElementById('pro');

for(let i = 0; i < data2.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card2'); // Add a class to style your card
    card.innerHTML = `
    <div class="outer-circle">
    <img src="${data2[i].profile}" alt="${data2[i].name}" class="card-img">
    </div>
            <h2 class="card-name">${data2[i].name}</h2>
            <p class="card-desc">${data2[i].desc}</p>
    `;
    imgContainer.appendChild(card);
}


