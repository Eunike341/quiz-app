import screenshots from "../assets/screenshots.png";
import searchInFolder from "../assets/searchInFolder.png";
import email from "../assets/email.png";

const praexam = {
  id: 3,
  title: "Pra Exam",
  questions: [
    {
      question: "Apa itu komputer?",
      options: [{text:"Alat yang dipakai untuk mengolah data menurut prosedur yang telah dirumuskan"},
       {text:"Alat yang tidak dipakai untuk mengolah data menurut prosedur yang telah dirumuskan"},
       {text:"Data elektronik berupa program atau instruksi untuk menjalankan perintah"}],
      answer: "Alat yang dipakai untuk mengolah data menurut prosedur yang telah dirumuskan",
      score: 5,
    },
    {
      question: "Apa itu software?",
      options: [{text:"Komponen fisik dari komputer yang dapat dilihat dan disentuh."},
      {text:"Data elektronik berupa program atau instruksi untuk menjalankan perintah pada komputer"},
      {text:"Kombinasi tombol yang digunakan untuk melakukan tindakan tertentu secara cepat dan efisien."}],
      answer: "Data elektronik berupa program atau instruksi untuk menjalankan perintah pada komputer",
      score: 5,
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Bagaimana cara membuka folder 'Screenshots'?",
      options: [{text:"Double click folder 'Screenshots'"},
      {text:"Left click folder 'Screenshots'"},
      {text:"Right click folder 'Screenshots'"}],
      image: screenshots,
      answer: "Double click folder 'Screenshots'",
      score: 5,
    },
    {
      question: "Yang manakah langkah-langkah yang paling tepat untuk mencari file bernama foto.png?",
      options: [{text:"Ketik foto di textbox nomor 2, tekan key nomor 4"},
        {text:"Ketik foto di textbox nomor 2, tekan key nomor 3"},
        {text:"Ketik foto.png di textbox nomor 1, tekan key nomor 4"},
        {text:"Ketik foto.png di textbox nomor 1, tekan key nomor 3"}],
      image: searchInFolder,
      answer: "Ketik foto di textbox nomor 2, tekan key nomor 4",
      score: 5,
    },
    {
      question: "Apakah shortcut untuk membatalkan perintah sebelumnya ('Undo')?",
      options: [{text:"Ctrl + C"}, {text:"Ctrl + A"}, {text:"Ctrl + Z"}, {text:"Ctrl + V"}],
      answer: "Ctrl + Z",
      score: 5,
    },
    {
      question: "Apakah shortcut untuk mengganti text tertentu dalam sebuah dokumen dengan text lain (replace)?",
      options: [{text:"Ctrl + F"}, {text:"Ctrl + H"}, {text:"Ctrl + U"}, {text:"Ctrl + B"}],
      answer: "Ctrl + H",
      score: 5,
    },
    {
      question: "Apakah kita dapat mengembalikan file atau folder yang tidak sengaja terhapus?",
      options: [{text:"Dapat"}, {text:"Tidak dapat"}],
      answer: "Dapat",
      score: 5,
    },
    {
      question: "Di manakah file atau folder yang telah dihapus disimpan untuk sementara?",
      options: [{text:"Recycle Bin"}, {text:"Downloads"}, {text:"Documents"}, {text:"Home"}],
      answer: "Recycle Bin",
      score: 5,
    },
    {
      question: "Yang manakah yang merupakan contoh dari Internet Service Provider (ISP)?",
      options: [{text:"Google"}, {text:"SingTel"}, {text:"Microsoft"}, {text:"OS"}],
      answer: "SingTel",
      score: 5,
    },
    {
      question: "Apakah itu malware?",
      options: [{text:"program komputer yang merusak"}, {text:"website palsu"}, {text:"pengalihan ke website lain untuk mencuri data pribadi"}],
      answer: "program komputer yang merusak",
      score: 5,
    },
    {
      question: "Email manakah yang tidak boleh dibalas?",
      options: [{text:"Email scam"}, {text:"Email spam"}, {text:"Email scam dan spam"}, {text:"Email benar dari sekolah"}],
      answer: "Email scam dan spam",
      score: 5,
    },
    {
      question: "Apakah kita boleh mengunduh file yang diakhiri dengan .exe atau .com?",
      options: [{text:"Boleh"}, {text:"Tidak boleh"}],
      answer: "Tidak boleh",
      score: 5,
    },
    {
      question: "Apakah scam dapat dikirim melalui whatsapp?",
      options: [{text:"Dapat"}, {text:"Tidak dapat"}],
      answer: "Dapat",
      score: 5,
    },
    {
      question: "Bagaimana cara paling benar untuk mengirim email yang kita terima dari seseorang ke orang lain (contoh: saya mendapat email dari Ani, dan saya mau mengirim email itu kepada Budi)?",
      options: [{text:"Reply"}, {text:"Forward"}, {text:"Delete"}, {text:"Reply All"}],
      answer: "Forward",
      score: 5,
    },
    {
      question: "Kalau saya mengirim email To: ani@gmail.com, Bcc: anto@gmail.com, apakah ani tahu bahwa anto juga menerima email saya?",
      options: [{text:"Tahu"}, {text:"Tidak tahu"}],
      answer: "Tidak tahu",
      score: 5,
    },
    {
      question: "Kalau saya mengirim email To: ani@gmail.com, Cc: anto@gmail.com, apakah ani tahu bahwa anto juga menerima email saya?",
      options: [{text:"Tahu"}, {text:"Tidak tahu"}],
      answer: "Tahu",
      score: 5,
    },
    {
      question: "Nomor berapakah yang harus di klik untuk meng-attach file di email?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}, {text:"4"}],
      image: email,
      answer: "3",
      score: 5,
    },
    {
      question: "Nomor berapakah yang harus di klik untuk mengirim email?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}, {text:"4"}],
      image: email,
      answer: "1",
      score: 5,
    },
    {
      question: "Shortcut apakah 'Ctrl' + 'B'?",
      options: [{text:"Bold"}, {text:"Underline"}, {text:"Italic"}, {text:"Enter"}],
      answer: "Bold",
      score: 5,
    },
    {
      question: "Shortcut apakah 'Ctrl' + 'C'?",
      options: [{text:"Copy"}, {text:"Cut"}, {text:"Paste"}, {text:"Save"}],
      answer: "Copy",
      score: 5,
    },
  ],
};

export default praexam;
