const surrahName = document.querySelector('.surrahName');
const compSurah = document.querySelector('.compSurah');

const data = async () => {
    try {
        const ayah = await axios.get(`https://equran.id/api/v2/surat`);
        const ayat = ayah.data.data.ayat;
        const name = ayah.data.data[0].nama;
        const tempatTurun = ayah.data.data[0].tempatTurun;
        const namaLatin = ayah.data.data[0].namaLatin;
        const nomor = ayah.data.data[0].nomor;
        console.log(name);
        console.log(nomor);
        console.log(tempatTurun);
        console.log(namaLatin);

        // ayat.forEach(element => {
        //     console.log(element);
        //     surrahName.innerHTML = `${ayah.data.data.nama}`;
        //     compSurah.innerHTML += `<p class='ayano'>${element.nomorAyat} </p>${element.teksArab}`;

        // });
    } catch (error) {
        console.log(error);
    }
}

data()

// for (let i = 1; i <= 100; i++) {
//     console.log('i love you')
// }