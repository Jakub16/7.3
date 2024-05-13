W celu uruchomienia serwisu należy:
- Odpalić komendę "docker-compose up -d",
- Odczekać chwilę w celu utworzenia się bazy danych

Dostępne endpointy:
- GET localhost/cars
- POST localhost/addCar

    format body:
    
    {
        "model": "string",
        "year": int,
        "details": "string"
    }