import screenshots from "../assets/screenshots.png";
import email from "../assets/email.png";
import resizeppt from "../assets/resizeppt.png";
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
      score: 6.25,
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Bagaimana cara membuka folder 'Screenshots'?",
      options: [{text:"Double click folder 'Screenshots'"},
      {text:"Left click folder 'Screenshots'"},
      {text:"Right click folder 'Screenshots'"}],
      image: screenshots,
      answer: "Double click folder 'Screenshots'",
      score: 6.25,
    },

    {
      question: "Apakah shortcut untuk membatalkan perintah sebelumnya ('Undo')?",
      options: [{text:"Ctrl + C"}, {text:"Ctrl + A"}, {text:"Ctrl + Z"}, {text:"Ctrl + V"}],
      answer: "Ctrl + Z",
      score: 6.25,
    },
    {
      question: "Apakah shortcut untuk mengganti text tertentu dalam sebuah dokumen dengan text lain (replace)?",
      options: [{text:"Ctrl + F"}, {text:"Ctrl + H"}, {text:"Ctrl + U"}, {text:"Ctrl + B"}],
      answer: "Ctrl + H",
      score: 6.25,
    },

    {
      question: "Di manakah file atau folder yang telah dihapus disimpan untuk sementara?",
      options: [{text:"Recycle Bin"}, {text:"Downloads"}, {text:"Documents"}, {text:"Home"}],
      answer: "Recycle Bin",
      score: 6.25,
    },

    {
      question: "Email manakah yang tidak boleh dibalas?",
      options: [{text:"Email scam"}, {text:"Email spam"}, {text:"Email scam dan spam"}, {text:"Email benar dari sekolah"}],
      answer: "Email scam dan spam",
      score: 6.25,
    },
    {
      question: "Apakah kita boleh mengunduh file yang diakhiri dengan .exe atau .com?",
      options: [{text:"Boleh"}, {text:"Tidak boleh"}],
      answer: "Tidak boleh",
      score: 6.25,
    },
    {
      question: "Apakah scam dapat dikirim melalui whatsapp?",
      options: [{text:"Dapat"}, {text:"Tidak dapat"}],
      answer: "Dapat",
      score: 6.25,
    },

    {
      question: "Nomor berapakah yang harus di klik untuk meng-attach file di email?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}, {text:"4"}],
      image: email,
      answer: "3",
      score: 6.25,
    },
    {
      question: "Nomor berapakah yang harus di klik untuk mengirim email?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}, {text:"4"}],
      image: email,
      answer: "1",
      score: 6.25,
    },
    {
      question: "Shortcut apakah 'Ctrl' + 'B'?",
      options: [{text:"Bold"}, {text:"Underline"}, {text:"Italic"}, {text:"Enter"}],
      answer: "Bold",
      score: 6.25,
    },
    {
      question: "Shortcut apakah 'Ctrl' + 'C'?",
      options: [{text:"Copy"}, {text:"Cut"}, {text:"Paste"}, {text:"Save"}],
      answer: "Copy",
      score: 6.25,
    },

    {
      question: "Ketika menggunakan Microsoft Powerpoint, menu yang dipakai untuk mengubah layout slide adalah",
      options: [{text:"Insert → Pictures"}, {text:"Design → Background"}, {text:"Home → Layout"}, {text:"View → Zoom"}],
      answer: "Home → Layout",
      score: 6.25,
    },
    {
      question: "Ketika menggunakan Microsoft Powerpoint, mengapa kita menambahkan gambar ke dalam slide?",
      options: [{text:"Supaya file jadi lebih besar"}, {text:"Supaya teks hilang semua"},
          {text:"Supaya penjelasan lebih jelas dan presentasi lebih menarik"}, {text:"Supaya tidak perlu bicara"}],
      answer: "Supaya penjelasan lebih jelas dan presentasi lebih menarik",
      score: 6.25,
    },
    {
      question: "Bagian mana yang harus ditarik untuk resize gambar?",
      options: [{text:"A"}, {text:"B"}, {text:"C"}],
      answer: "B",
      score: 6.25,
      image: resizeppt
    },
    {
      question: "Manakah yang merupakan tips presentasi yang baik?",
      options: [{text:"Menulis teks sangat panjang dalam satu slide"},
          {text:"Menggunakan kalimat singkat dan jelas"},
          {text:"Membaca semua teks di slide"},
          {text:"Menggunakan font sangat kecil"}],
      answer: "Menggunakan kalimat singkat dan jelas",
      score: 6.25,
    },

  ] as QuizQuestion[],
};

export default warmup;
