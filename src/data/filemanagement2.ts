import resumecv from "../assets/resumecv.png";
import sorot6 from "../assets/sorot6.png";
import foldermana from "../assets/foldermana.png";
import sorot3 from "../assets/sorot3.png";

const filemanagement2 = {
  id: 5,
  title: "File Management",
  questions: [
    {
      question: "Bagaimana cara membuat folder baru di Windows Explorer?",
      options: [{text:"Klik kanan pada folder, New, Folder, lalu namakan folder."},
        {text:"Klik kanan pada daerah kosong, New, Folder, lalu namakan folder."},
        {text:"Klik kiri pada folder, New, Folder, lalu namakan folder."},
        {text:"Klik kiri pada daerah kosong, New, Folder, lalu namakan folder."}],
      answer: "Klik kanan pada daerah kosong, New, Folder, lalu namakan folder.",
    },
    {
      question: "Shortcut apakah 'Ctrl' + 'V'?",
      options: [{text:"Copy"}, {text:"Cut"}, {text:"Paste"}, {text:"Save"}],
      answer: "Paste",
    },
    {
      question: "Apa itu 'Windows Explorer'/ 'File Explorer'?",
      options: [{text:"Program untuk menjelajah (explore) isi hardisk komputer"},
      {text:"Data-data (dokumen, lagu, film, foto, dan lain-lain) yang disimpan di dalam harddisk"},
      {text:"External drive (flashdisk)"},
      {text:"Alat yang dipakai untuk mengolah data menurut prosedur yang telah dirumuskan"}],
      answer: "Program untuk menjelajah (explore) isi hardisk komputer",
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Nomor berapa yang harus di klik untuk menghapus file 'Resume CV'?",
      options: [{text:"1"},
      {text:"2"},
      {text:"3"},
      {text:"4"}],
      image: resumecv,
      answer: "4",
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Nomor berapa yang harus di klik untuk mengganti nama (rename) file 'Resume CV'?",
      options: [{text:"1"},
      {text:"2"},
      {text:"3"},
      {text:"4"}],
      image: resumecv,
      answer: "3",
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Di folder manakah terdapat folder 'Proposal'?",
      options: [{text:"Computer Class"},
      {text:"Kelas Komputer"},
      {text:"Week 1"},
      {text:"Latihan Word"}],
      image: foldermana,
      answer: "Computer Class",
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Di folder manakah terdapat file 'Your File'?",
      options: [{text:"Computer Class"},
      {text:"Kelas Komputer"},
      {text:"Week 1"},
      {text:"Latihan Word"}],
      image: foldermana,
      answer: "Kelas Komputer",
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Di folder manakah terdapat file 'My File'?",
      options: [{text:"Computer Class"},
      {text:"Kelas Komputer"},
      {text:"Week 1"},
      {text:"Latihan Word"}],
      image: foldermana,
      answer: "Kelas Komputer",
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Berapakah folder dan file yang sudah disorot?",
      options: [{text:"2"},
      {text:"4"},
      {text:"6"},
      {text:"8"}],
      image: sorot6,
      answer: "6",
    },
    {
      question: "Perhatikan gambar file explorer di bawah. Ada berapa folder dan file yang sudah disorot?",
      options: [{text:"0"},
      {text:"6"},
      {text:"4"},
      {text:"3"}],
      image: sorot3,
      answer: "3",
    },
  ],
};

export default filemanagement2;
