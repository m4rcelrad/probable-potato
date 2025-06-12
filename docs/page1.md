# Strona 1: Generowanie gadającej krowy

W tej sekcji omówimy najprostszy przykład: generowanie gadającej krowy z biblioteki `cowsay`.

## Wymagania

* Python 3.6+
* zainstalowana biblioteka `cowsay` (`pip install cowsay`)

## Kod przykładowy

Utwórz plik `intro.py` obok tej strony z następującą zawartością:

```python
import cowsay

# Tekst, który "powie" krowa
message = "Witaj w naszym poradniku!"

# Generowanie gadającej krowy
cowsay.cow(message)
```

## Uruchomienie

W terminalu przejdź do katalogu projektu i uruchom:

```bash
python intro.py
```

## Przykładowy wynik

```
  _________________________
| Witaj w naszym poradniku! |
  =========================
                         \
                          \
                            ^__^
                            (oo)\_______
                            (__)\       )\/\
                                ||----w |
                                ||     ||
```
