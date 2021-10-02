//Java: Exception
//JavaScript: Error

//Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents 📖";
}

function closeFile(file: string) {
  console.log("file is closed");
}

const fileName = "not sexist!";
try {
  console.log(readFile(fileName));
} catch (error) {
  console.log(`catched!`);
} finally {
  closeFile(fileName);
}
