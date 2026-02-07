// Data types - tipe data di Javascript itu ada
// 7 tipe data dasar (primitif)
// dan satu tipe data kompleks (Object), 
// ada String, Number, Boolean, Undefined, Null, Symbol, dan Object

//DATA TYPES: String - yakni karakter atau teks, tanda nya ialah
// diawali dan diakhiri tanda " atau ' 
// salah satu cara agar dapat menampilkan string ialah
// dengan console.log() - yang berarti menampilkan ke konsol

    // console.log("Rifqi Rahman");
    // console.log("is a cool software engineer");

//Variable 
// fungsi nya Reusability, Readibility & context, 

    // const $firstName = 'Rifqi';
    // const lastName = "Rahman";
    // console.log($firstName);
    // console.log(lastName);


// Variable rules
// 1. maksimum 1 kata
// 2. tidak boleh pake simbol kecuali "_" atau "$"
// 3. tidak boleh diawali dengan angka
// 4. tidak boleh menggunakan spasi
// 5. case sensitive

// CONVENTION
// 1. camelCase ✅
// 2. PascalCase
// 3. snake_case
// 4. kebab-case (tidak digunakan di Javascript)

// Nama variabel harus menggambarkan isi dari variabel tersebut, jelas,
// bermakna, dan deskriptif.
//  contoh: daripada name1, name2, name3
// lebih baik: firstName, lastName, fullName

    // const myFirstName = "Rifqi";
    // const myLastName = "Rahman";
    // const myFullName = myFirstName + " " + myLastName;

    // console.log(myFirstName);
    // console.log(myLastName);
    // console.log(myFullName);

// String Concatenation
// menggabungkan beberapa string menjadi satu string
// dengan menggunakan operator + (plus)

    // const myName = "Rifqi"
    // const favoriteFood = "Roti'O";
    // console.log("Halo namaku " + myName + ", dan makanan favoritku adalah " + favoriteFood);

// Template Literals (Template Strings)
// cara lain untuk menggabungkan string
// dengan menggunakan backtick ` `
// dan menyisipkan variable dengan ${namaVariable}

    // console.log(`Halo namaku ${myName}, dan makanan favoritku adalah ${favoriteFood}`);


//DATA TYPES: Number - yakni tipe data angka
// bisa bilangan bulat (integer) atau bilangan desimal (float)

    // const myAge = 20;
    // const myHeight = 175.5; // dalam cm
    // console.log(myAge);
    // console.log(myHeight);
    
// Operasi Matematika pada Number
// + (tambah), - (kurang), * (kali), / (bagi), % (modulus/sisa bagi)
    // const a = 10;
    // const b = 3;

    // console.log(a + b); // tambah
    // console.log(a - b); // kurang
    // console.log(a * b); // kali
    // console.log(a / b); // bagi
    // console.log(a % b); // modulus/sisa bagi

// Operator Penugasan (Assignment Operators)
// =, +=, -=, *=, /=, %=

    // let c = 5;
    // console.log(c); // hasilnya 5

    // c += 3; // c = c + 3
    // console.log(c); // hasilnya c = 8 

    // c -= 2; // c = c - 2
    // console.log(c); // hasilnya c = 6

    // c *= 4; // c = c * 4
    // console.log(c); // hasilnya c = 24

    // c /= 6; // c = c / 6
    // console.log(c); // hasilnya c = 4

    // c %= 3; // c = c % 3
    // console.log(c); // hasilnya c = 1

// Increment & Decrement
// ++, --

    // let d = 10;
    // console.log(d); // hasilnya 10
    
    // d++; // d = d + 1
    // console.log(d); // hasilnya 11

    // d--; // d = d - 1
    // console.log(d); // hasilnya 10

// Challenge
// Kamu penjual buah dengan price list sebagai berikut:
// Apel: 5.000
// Pisang: 10.000

// ada customer membeli 3 aple dan 2 pisang, dia juga punya kupon diskon 10.000
// hitung dan log total harga yang harus dibayar customer tersebut setelah diskon!

const priceApple = 5000;
const priceBanana = 10000;
const discountCoupon = 10000

const customerTotalPrice = (3 * priceApple) + (2 * priceBanana) - discountCoupon;
console.log(customerTotalPrice);