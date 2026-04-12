import screenshots from "../assets/screenshots.png";
import email from "../assets/email.png";
import resizeppt from "../assets/resizeppt.png";
import cellmana from "../assets/cellmana.png";
import excel from "../assets/excel.png";
import type { QuizQuestion } from '../interface/QuizQuestion';

const warmup = {
  id: 7,
  title: "Warmup",
  questions: [

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
      question: "Di manakah file atau folder yang telah dihapus disimpan untuk sementara?",
      options: [{text:"Recycle Bin"}, {text:"Downloads"}, {text:"Documents"}, {text:"Home"}],
      answer: "Recycle Bin",
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

    {
      question: "Ketika menggunakan Microsoft Powerpoint, menu yang dipakai untuk mengubah layout slide adalah",
      options: [{text:"Insert → Pictures"}, {text:"Design → Background"}, {text:"Home → Layout"}, {text:"View → Zoom"}],
      answer: "Home → Layout",
      score: 5,
    },
    {
      question: "Ketika menggunakan Microsoft Powerpoint, mengapa kita menambahkan gambar ke dalam slide?",
      options: [{text:"Supaya file jadi lebih besar"}, {text:"Supaya teks hilang semua"},
          {text:"Supaya penjelasan lebih jelas dan presentasi lebih menarik"}, {text:"Supaya tidak perlu bicara"}],
      answer: "Supaya penjelasan lebih jelas dan presentasi lebih menarik",
      score: 5,
    },
    {
      question: "Bagian mana yang harus ditarik untuk resize gambar?",
      options: [{text:"A"}, {text:"B"}, {text:"C"}],
      answer: "B",
      score: 5,
      image: resizeppt
    },
    {
      question: "Manakah yang merupakan tips presentasi yang baik?",
      options: [{text:"Menulis teks sangat panjang dalam satu slide"},
          {text:"Menggunakan kalimat singkat dan jelas"},
          {text:"Membaca semua teks di slide"},
          {text:"Menggunakan font sangat kecil"}],
      answer: "Menggunakan kalimat singkat dan jelas",
      score: 5,
    },

    {
      question: "Nomor berapakah yang merupakan KOLOM (COLUMN)?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}],
      answer: "1",
      score: 5,
      image: excel
    },

    {
      question: "Nomor berapakah yang merupakan BARIS (ROW)?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}],
      answer: "2",
      score: 5,
      image: excel
    },

    {
      question: "Di cell manakah terdapat warna favorit dari Lusi?",
      options: [
        {text:"A4"},
        {text:"B4"},
        {text:"C4"},
      ],
      image: cellmana,
      answer: "C4",
      score: 5,
    },
    {
      question: "Di cell manakah terdapat warna favorit dari Meri?",
      options: [
        {text:"A1"},
        {text:"A2"},
        {text:"C2"},
        {text:"C1"},
      ],
      image: cellmana,
      answer: "C2",
      score: 5,
    },

  ] as QuizQuestion[],
};

export default warmup;
