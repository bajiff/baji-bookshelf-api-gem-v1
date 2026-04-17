import { nanoid } from "nanoid";
import books from "./books";

export const addBookHandler = (request, response) => {
  const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.body;
  
  if (!name) {
    return response.status(400).json({
      status:"fail",
      message:"Namanya belum di isi"
    });
  };

  if (readPage > pageCount) {
    return response.status(400).json({
      status:"fail",
      message:"Gagal menambahkan buku, halaman yang sudah dibaca tidak boleh lebih dari jumlah halaman"
    });
  };
  
  const newBook = {id, name, year, author, summary, publisher, pageCount, readPage, reading, finished, createdAt, updatedAt};

  books.push(newBook);

  const isSuccess = books.filter(book => book.id === id).length > 0;
  
  if (isSuccess) {
    return response.status(201).json({
      status:"success",
      message:"Berhasil dibuat",
      data: {
        bookId:id,
      }
    });
  };

  response.status(500).json({
    status:"fail",
    message:"Buku gagal di tambah"
  });
};