// pages/api/example.js

export default (req, res) => {
    if (req.method === 'POST') {
      const { url, selector } = req.body;
  
      // Wykonaj operacje na podstawie otrzymanych danych (np. webscrapping)
  
      res.status(200).json({ message: 'OK' });
    } else {
      res.status(405).json({ error: 'Metoda HTTP nieobsługiwana' });
    }
  };