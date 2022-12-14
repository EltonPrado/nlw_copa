function createTeams(player, teamsName) {
  return `
    <li>
      <img src="./assets/icon-${player}.svg" 
           alt="Bandeira do ${player}" />
      <strong>${teamsName}</strong>
    </li> 
  `
}

function createGroup(group, letter, teams) {
  return `
    <div class="card-group">
      <h2>${group} <span>${letter}</span></h2>

      <ul>
        ${teams}
      </ul>
    </div>
  `
}

function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" 
           alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" 
           alt="Bandeira da ${player2}" />
    </li> 
  `
}

let delay = -0.4

function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>

      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createGroup(
    "Grupo",
    "A",
    createTeams("qatar", "Catar") +
      createTeams("ecuador", "Equador") +
      createTeams("senegal", "Senegal") +
      createTeams("netherlands", "Holanda")
  ) +
  createGroup(
    "Grupo",
    "B",
    createTeams("england", "Inglaterra") +
      createTeams("iran", "Irã") +
      createTeams("eua", "Estados Unidos") +
      createTeams("wales", "Gales")
  ) +
  createGroup(
    "Grupo",
    "C",
    createTeams("argentina", "Argentina") +
      createTeams("saudiArabia", "Arábia Saudita") +
      createTeams("mexico", "México") +
      createTeams("poland", "Polônia")
  ) +
  createGroup(
    "Grupo",
    "D",
    createTeams("france", "França") +
      createTeams("australia", "Austrália") +
      createTeams("denmark", "Dinamarca") +
      createTeams("tunisia", "Tunísia")
  ) +
  createGroup(
    "Grupo",
    "E",
    createTeams("spain", "Espanha") +
      createTeams("costaRica", "Costa Rica") +
      createTeams("germany", "Alemanha") +
      createTeams("japan", "Japão")
  ) +
  createGroup(
    "Grupo",
    "F",
    createTeams("belgium", "Bélgica") +
      createTeams("canada", "Canadá") +
      createTeams("morroco", "Marrocos") +
      createTeams("croatia", "Croácia")
  ) +
  createGroup(
    "Grupo",
    "G",
    createTeams("brazil", "Brasil") +
      createTeams("serbia", "Sérvia") +
      createTeams("switzerland", "Suíça") +
      createTeams("cameroon", "Camarões")
  ) +
  createGroup(
    "Grupo",
    "H",
    createTeams("portugal", "Portugal") +
      createTeams("ghana", "Gana") +
      createTeams("uruguay", "Uruguai") +
      createTeams("southKorea", "Coreia do Sul")
  ) +
  createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("eua", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudiArabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("morroco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costaRica") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "southKorea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("wales", "07:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "ecuador") +
      createGame("england", "16:00", "eua")
  ) +
  createCard(
    "26/11",
    "sabado",
    createGame("tunisia", "07:00", "australia") +
      createGame("poland", "10:00", "saudiArabia") +
      createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "07:00", "costaRica") +
      createGame("belgium", "10:00", "morroco") +
      createGame("croatia", "13:00", "canada") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("southKorea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("ecuador", "12:00", "senegal") +
      createGame("netherlands", "12:00", "qatar") +
      createGame("iran", "16:00", "eua") +
      createGame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark") +
      createGame("poland", "16:00", "argentina") +
      createGame("saudiArabia", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "morroco") +
      createGame("japan", "16:00", "spain") +
      createGame("costaRica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("southKorea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  )
