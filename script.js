var ulang = true;
while ( ulang ) {

    var angka = prompt('Ketik angka :');

    if ( angka % 2 === 0 ) {
        alert(angka + ' adalah bilangan GENAP');
    } else if ( angka % 2 === 1 ) {
        alert(angka + ' adalah bilangan GANJIL');
    } else {
        alert('Keywoard yang anda masukkan SALAH');
    }

ulang = confirm('Mau coba lagi ??');

}