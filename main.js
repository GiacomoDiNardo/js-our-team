const members = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        ruolo: "Founder CEO",
        foto: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela",
        cognome: "Caroll",
        ruolo: "Chief Editor",
        foto: "img/angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter",
        cognome: "Gordon",
        ruolo: "Office Manager",
        foto: "img/walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela",
        cognome: "Lopez",
        ruolo: "Social Media Manager",
        foto: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott",
        cognome: "Estrada",
        ruolo: "Developer",
        foto: "img/scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara",
        cognome: "Ramos",
        ruolo: "Graphic designer",
        foto: "img/barbara-ramos-graphic-designer.jpg"
    },
]

console.log(members);

for(let i = 0; i < members.length; i++) {
    const member = members[i]
console.log(`I membri del nostro team sono: ${member.nome} ${member.cognome} ${member.ruolo}`);
}

const teamContainer = document.querySelector(".team-container")

for(let i = 0; i < members.length; i++) {
    const member = members[i]
    
    const template = `<div class="team-card">
                        <div class="card-image">
                          <img
                            src= ${member.foto}
                          />
                        </div>
                        <div class="card-text">
                          <h3>${member.nome} ${member.cognome}</h3>
                          <p>${member.ruolo}</p>
                        </div>
                      </div>`

    teamContainer.innerHTML += template;
}