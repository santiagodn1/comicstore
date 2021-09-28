var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTriggerbatman = document.getElementById('liveAlertBtn-batman')
var alertTriggerbatmanModal = document.getElementById('liveAlertBtn-batmanModal')
var alertTriggerspiderman = document.getElementById('liveAlertBtn-spiderman')
var alertTriggerspidermanModal = document.getElementById('liveAlertBtn-spidermanModal')
var alertTriggerinvincible = document.getElementById('liveAlertBtn-invincible')
var alertTriggerinvincibleModal = document.getElementById('liveAlertBtn-invincibleModal')
var alertTriggerflash = document.getElementById('liveAlertBtn-flash')
var alertTriggerflashModal = document.getElementById('liveAlertBtn-flashModal')
var alertTriggerconstantine = document.getElementById('liveAlertBtn-constantine')
var alertTriggerconstantineModal = document.getElementById('liveAlertBtn-constantineModal')
var alertTriggersuperman = document.getElementById('liveAlertBtn-superman')
var alertTriggersupermanModal = document.getElementById('liveAlertBtn-supermanModal')
var alertTriggerwonderwoman = document.getElementById('liveAlertBtn-wonderwoman')
var alertTriggerwonderwomanModal = document.getElementById('liveAlertBtn-wonderwomanModal')
var alertTriggershazam = document.getElementById('liveAlertBtn-shazam')
var alertTriggershazamModal = document.getElementById('liveAlertBtn-shazamModal')
var alertTriggeravengers = document.getElementById('liveAlertBtn-avengers')
var alertTriggeravengersModal = document.getElementById('liveAlertBtn-avengersModal')
var alertTriggercapitanamerica = document.getElementById('liveAlertBtn-capitanamerica')
var alertTriggercapitanamericaModal = document.getElementById('liveAlertBtn-capitanamericaModal')
var alertTriggerhulk = document.getElementById('liveAlertBtn-hulk')
var alertTriggerhulkModal = document.getElementById('liveAlertBtn-hulkModal')
var alertTriggerironman = document.getElementById('liveAlertBtn-ironman')
var alertTriggerironmanModal = document.getElementById('liveAlertBtn-ironmanModal')
var alertTriggerthor = document.getElementById('liveAlertBtn-thor')
var alertTriggerthorModal = document.getElementById('liveAlertBtn-thorModal')
var alertTriggerhellboy = document.getElementById('liveAlertBtn-hellboy')
var alertTriggerhellboyModal = document.getElementById('liveAlertBtn-hellboyModal')
var alertTriggerblackhammer = document.getElementById('liveAlertBtn-blackhammer')
var alertTriggerblackhammerModal = document.getElementById('liveAlertBtn-blackhammerModal')
var alertTriggercolder = document.getElementById('liveAlertBtn-colder')
var alertTriggercolderModal = document.getElementById('liveAlertBtn-colderModal')
var alertTriggerladykiller = document.getElementById('liveAlertBtn-ladykiller')
var alertTriggerladykillerModal = document.getElementById('liveAlertBtn-ladykillerModal')
var alertTriggerpolar = document.getElementById('liveAlertBtn-polar')
var alertTriggerpolarModal = document.getElementById('liveAlertBtn-polarModal')
var alertTriggerumbrella = document.getElementById('liveAlertBtn-umbrella')
var alertTriggerumbrellaModal = document.getElementById('liveAlertBtn-umbrellaModal')
var alertTriggerjupiter = document.getElementById('liveAlertBtn-jupiter')
var alertTriggerjupiterModal = document.getElementById('liveAlertBtn-jupiterModal')
var alertTriggermonstress = document.getElementById('liveAlertBtn-monstress')
var alertTriggermonstressModal = document.getElementById('liveAlertBtn-monstressModal')
var alertTriggerspawn = document.getElementById('liveAlertBtn-spawn')
var alertTriggerspawnModal = document.getElementById('liveAlertBtn-spawnModal')
var alertTriggerwalking = document.getElementById('liveAlertBtn-walking')
var alertTriggerwalkingModal = document.getElementById('liveAlertBtn-walkingModal')
var alertTriggerwicked = document.getElementById('liveAlertBtn-wicked')
var alertTriggerwickedModal = document.getElementById('liveAlertBtn-wickedModal')
var alertTriggersubsmodal = document.getElementById('liveAlertBtn-subsmodal')
var nombreUsuario = document.getElementById('recipient-name')
var subUsuario = document.getElementById('tipodesub')

function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder.append(wrapper)
}

if (alertTriggerbatman) {
    alertTriggerbatman.addEventListener('click', function () {
        alert('Batman - Caballero oscuro | añadido al carro', 'success')
    })
}
if (alertTriggerbatmanModal) {
    alertTriggerbatmanModal.addEventListener('click', function () {
        alert('Batman - Caballero oscuro | añadido al carro', 'success')
    })
}
if (alertTriggerspiderman) {
    alertTriggerspiderman.addEventListener('click', function () {
        alert('Spiderman - Un nuevo Comienzo | añadido al carro', 'success')
    })
}
if (alertTriggerspidermanModal) {
    alertTriggerspidermanModal.addEventListener('click', function () {
        alert('Spiderman - Un nuevo Comienzo | añadido al carro', 'success')
    })
}
if (alertTriggerinvincible) {
    alertTriggerinvincible.addEventListener('click', function () {
        alert('Invincible | añadido al carro', 'success')
    })
}
if (alertTriggerinvincibleModal) {
    alertTriggerinvincibleModal.addEventListener('click', function () {
        alert('Invincible | añadido al carro', 'success')
    })
}
if (alertTriggerflash) {
    alertTriggerflash.addEventListener('click', function () {
        alert('Flash - Guerra Flash | añadido al carro', 'success')
    })
}
if (alertTriggerflashModal) {
    alertTriggerflashModal.addEventListener('click', function () {
        alert('Flash - Guerra Flash | añadido al carro', 'success')
    })
}
if (alertTriggerconstantine) {
    alertTriggerconstantine.addEventListener('click', function () {
        alert('Constantine - Hellblazer | añadido al carro', 'success')
    })
}
if (alertTriggerconstantineModal) {
    alertTriggerconstantineModal.addEventListener('click', function () {
        alert('Constantine - Hellblazer | añadido al carro', 'success')
    })
}
if (alertTriggersuperman) {
    alertTriggersuperman.addEventListener('click', function () {
        alert('Superman - El año del villano | añadido al carro', 'success')
    })
}
if (alertTriggersupermanModal) {
    alertTriggersupermanModal.addEventListener('click', function () {
        alert('Superman - El año del villano | añadido al carro', 'success')
    })
}

if (alertTriggerwonderwoman) {
    alertTriggerwonderwoman.addEventListener('click', function () {
        alert('Wonder Woman - Renacimiento | añadido al carro', 'success')
    })
}
if (alertTriggerwonderwomanModal) {
    alertTriggerwonderwomanModal.addEventListener('click', function () {
        alert('Wonder Woman - Renacimiento | añadido al carro', 'success')
    })
}

if (alertTriggershazam) {
    alertTriggershazam.addEventListener('click', function () {
        alert('Shazam! | añadido al carro', 'success')
    })
}
if (alertTriggershazamModal) {
    alertTriggershazamModal.addEventListener('click', function () {
        alert('Shazam! | añadido al carro', 'success')
    })
}

if (alertTriggeravengers) {
    alertTriggeravengers.addEventListener('click', function () {
        alert('Avengers - Earth Heroes | añadido al carro', 'success')
    })
}
if (alertTriggeravengersModal) {
    alertTriggeravengersModal.addEventListener('click', function () {
        alert('Avengers - Earth Heroes | añadido al carro', 'success')
    })
}
if (alertTriggercapitanamerica) {
    alertTriggercapitanamerica.addEventListener('click', function () {
        alert('Capitan America | añadido al carro', 'success')
    })
}
if (alertTriggercapitanamericaModal) {
    alertTriggercapitanamericaModal.addEventListener('click', function () {
        alert('Capitan America | añadido al carro', 'success')
    })
}
if (alertTriggerhulk) {
    alertTriggerhulk.addEventListener('click', function () {
        alert('Hulk - Aplastante Número 100 | añadido al carro', 'success')
    })
}
if (alertTriggerhulkModal) {
    alertTriggerhulkModal.addEventListener('click', function () {
        alert('Hulk - Aplastante Número 100 | añadido al carro', 'success')
    })
}
if (alertTriggerironman) {
    alertTriggerironman.addEventListener('click', function () {
        alert('Ironman | añadido al carro', 'success')
    })
}
if (alertTriggerironmanModal) {
    alertTriggerironmanModal.addEventListener('click', function () {
        alert('Ironman | añadido al carro', 'success')
    })
}
if (alertTriggerthor) {
    alertTriggerthor.addEventListener('click', function () {
        alert('Thor - Deviants Saga | añadido al carro', 'success')
    })
}
if (alertTriggerthorModal) {
    alertTriggerthorModal.addEventListener('click', function () {
        alert('Thor - Deviants Saga | añadido al carro', 'success')
    })
}

if (alertTriggerhellboy) {
    alertTriggerhellboy.addEventListener('click', function () {
        alert('Hellboy and the B.P.R.D | añadido al carro', 'success')
    })
}
if (alertTriggerhellboyModal) {
    alertTriggerhellboyModal.addEventListener('click', function () {
        alert('Hellboy and the B.P.R.D | añadido al carro', 'success')
    })
}

if (alertTriggerblackhammer) {
    alertTriggerblackhammer.addEventListener('click', function () {
        alert('Black Hammer - Streets of Spiral | añadido al carro', 'success')
    })
}
if (alertTriggerblackhammerModal) {
    alertTriggerblackhammerModal.addEventListener('click', function () {
        alert('Black Hammer - Streets of Spiral | añadido al carro', 'success')
    })
}

if (alertTriggercolder) {
    alertTriggercolder.addEventListener('click', function () {
        alert('Colder | añadido al carro', 'success')
    })
}
if (alertTriggercolderModal) {
    alertTriggercolderModal.addEventListener('click', function () {
        alert('Colder | añadido al carro', 'success')
    })
}

if (alertTriggerladykiller) {
    alertTriggerladykiller.addEventListener('click', function () {
        alert('Lady Killer | añadido al carro', 'success')
    })
}
if (alertTriggerladykillerModal) {
    alertTriggerladykillerModal.addEventListener('click', function () {
        alert('Lady Killer | añadido al carro', 'success')
    })
}

if (alertTriggerpolar) {
    alertTriggerpolar.addEventListener('click', function () {
        alert('Polar - The Black Kaiser | añadido al carro', 'success')
    })
}
if (alertTriggerpolarModal) {
    alertTriggerpolarModal.addEventListener('click', function () {
        alert('Polar - The Black Kaiser | añadido al carro', 'success')
    })
}

if (alertTriggerumbrella) {
    alertTriggerumbrella.addEventListener('click', function () {
        alert('The Umbrella Academy | añadido al carro', 'success')
    })
}
if (alertTriggerumbrellaModal) {
    alertTriggerumbrellaModal.addEventListener('click', function () {
        alert('The Umbrella Academy | añadido al carro', 'success')
    })
}

if (alertTriggerjupiter) {
    alertTriggerjupiter.addEventListener('click', function () {
        alert('Jupiter Legacy | añadido al carro', 'success')
    })
}
if (alertTriggerjupiterModal) {
    alertTriggerjupiterModal.addEventListener('click', function () {
        alert('Jupiter Legacy | añadido al carro', 'success')
    })
}

if (alertTriggermonstress) {
    alertTriggermonstress.addEventListener('click', function () {
        alert('Monstress | añadido al carro', 'success')
    })
}
if (alertTriggermonstressModal) {
    alertTriggermonstressModal.addEventListener('click', function () {
        alert('Monstress | añadido al carro', 'success')
    })
}

if (alertTriggerspawn) {
    alertTriggerspawn.addEventListener('click', function () {
        alert('Spawn | añadido al carro', 'success')
    })
}
if (alertTriggerspawnModal) {
    alertTriggerspawnModal.addEventListener('click', function () {
        alert('Spawn | añadido al carro', 'success')
    })
}

if (alertTriggerwalking) {
    alertTriggerwalking.addEventListener('click', function () {
        alert('The Walking Dead | añadido al carro', 'success')
    })
}
if (alertTriggerwalkingModal) {
    alertTriggerwalkingModal.addEventListener('click', function () {
        alert('The Walking Dead | añadido al carro', 'success')
    })
}

if (alertTriggerwicked) {
    alertTriggerwicked.addEventListener('click', function () {
        alert('The Wicked + The Divine | añadido al carro', 'success')
    })
}
if (alertTriggerwickedModal) {
    alertTriggerwickedModal.addEventListener('click', function () {
        alert('The Wicked + The Divine | añadido al carro', 'success')
    })
}

if (alertTriggersubsmodal) {
    alertTriggersubsmodal.addEventListener('click', function () {
        alert('Gracias ' + (nombreUsuario.value) + ' te subscribiste a nuestro Newsletter de manera ' + (subUsuario.value), 'success')
    })
}

