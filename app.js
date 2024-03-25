const surrahName = document.querySelector('.surrahName');
const compSurah = document.querySelector('.compSurah');

const data = async () => {
    try {
        const ayah = await axios.get(`https://equran.id/api/v2/surat/1`);
        const ayat = ayah.data.data.ayat;
        ayat.forEach(element => {
            console.log(element);
            surrahName.innerHTML = `${ayah.data.data.nama}`;
            compSurah.innerHTML +=  `<p class='ayano'>${element.nomorAyat} </p>${element.teksArab}`;

        });
    } catch (error) {
        console.log(error);
    }
}

data()