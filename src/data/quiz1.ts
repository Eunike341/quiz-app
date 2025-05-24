import addressBar from "../assets/addressBar.png";
import numOfFolderFile from "../assets/numOfFolderFile.png";
import viewMode from "../assets/viewMode.png";
import wordMenu from "../assets/wordMenu.png";

const quiz1 = {
  id: 1,
  title: "Quiz 1",
  questions: [
    {
      question: "Yang manakah yang merupakan 'address bar'?",
      options: [{text:"A"}, {text:"B"}, {text:"C"}, {text:"D"}],
      image: addressBar,
      answer: "B",
    },
    {
      question: "Berapa jumlah folder dari gambar di bawah ini?",
      options: [{text:"6"}, {text:"5"}, {text:"7"}, {text:"4"}],
      image: numOfFolderFile,
      answer: "6",
    },
    {
      question: "Berapa jumlah Word document dari gambar di bawah ini?",
      options: [{text:"6"}, {text:"4"}, {text:"2"}, {text:"1"}],
      image: numOfFolderFile,
      answer: "1",
    },
    {
      question: "View Mode manakah yang menghasilkan tampilan ini?",
      options: [{text:"Large Icons"}, {text:"Small Icons"}, {text:"List"}, {text:"Details"}],
      image: viewMode,
      answer: "Details",
    },
    {
      question: "Kombinasi tombol keyboard apa yang perlu digunakan untuk mengetik simbol '$'?",
      options: [{text:"Shift + 3"}, {text:"Shift + 4"}, {text:"Alt + 3"}, {text:"Alt + 4"}],
      answer: "Shift + 4",
    },
    {
      question: "Bagaimana cara membuat folder baru di Windows Explorer?",
      options: [{text:"Klik kanan pada folder, New, Folder, lalu namakan folder."},
        {text:"Klik kanan pada daerah kosong, New, Folder, lalu namakan folder."},
        {text:"Klik kiri pada folder, New, Folder, lalu namakan folder."},
        {text:"Klik kiri pada daerah kosong, New, Folder, lalu namakan folder."}],
      answer: "Klik kanan pada daerah kosong, New, Folder, lalu namakan folder.",
    },
    {
      question: "Apakah shortcut untuk menyorot/ memilih semua ('Select All')?",
      options: [{text:"Ctrl + C"}, {text:"Ctrl + A"}, {text:"Ctrl + Z"}, {text:"Ctrl + V"}],
      answer: "Ctrl + A",
    },
    {
      question: "Apakah shortcut untuk mencari text tertentu dalam sebuah dokumen?",
      options: [{text:"Ctrl + F"}, {text:"Ctrl + H"}, {text:"Ctrl + U"}, {text:"Ctrl + B"}],
      answer: "Ctrl + F",
    },
    {
      question: "Apakah shortcut untuk menyimpan dokumen?",
      options: [{text:"Ctrl + I"}, {text:"Ctrl + S"}, {text:"Ctrl + Home"}, {text:"Ctrl + P"}],
      answer: "Ctrl + S",
    },
    {
      question: "Yang mana yang digunakan untuk bullet point?",
      options: [{text:"1"}, {text:"2"}, {text:"3"}, {text:"4"}],
      image: wordMenu,
      answer: "3",
    },
  ],
};

export default quiz1;
