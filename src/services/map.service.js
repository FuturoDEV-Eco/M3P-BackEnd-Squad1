

async function getGoogleMapsLink(local){
    try {
        const { lat, lon } = local;

        const googleMapsLink = `https://www.google.com/maps?q=${lat},${lon}`;

        return googleMapsLink;

    } catch(error){
        console.error(error);
        throw new Error('Erro gerar o link do Google Maps');
    }
}

module.exports =  getGoogleMapsLink 