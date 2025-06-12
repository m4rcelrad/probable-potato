# MUUUwienie PRO

W tej podstronie zagłębimy się w dodatkowe możliwości biblioteki **cowsay**, w szczególności w temat dostępnych „postaci” (zwierzaków) i sposobów ich wyboru. Same ASCII-arty umieścimy na osobnej stronie **Postaci**.

---

## 1. Lista dostępnych postaci

Aby zobaczyć, jakie postaci możesz wykorzystać zamiast domyślnej krowy:

```python
import cowsay

# Wyświetlenie listy wszystkich nazw postaci
print(cowsay.char_names)

# Sprawdzenie, ile jest dostępnych postaci
print(f"Liczba postaci: {len(cowsay.char_names)}")
```
Uwaga: Pełną listę nazw i odpowiadające im ASCII-arty znajdziesz na stronie Postaci.

---

## 2. Wybór postaci w kodzie Python
Możesz podać nazwę postaci do funkcji ```cowsay.get_output_string()``` lub skorzystać bezpośrednio z mapy ```char_funcs```:

```python
import cowsay

message = "Muuuuu PRO!"

# 1) Za pomocą get_output_string:
output = cowsay.get_output_string('dragon', message)
print(output)

# 2) Za pomocą char_funcs:
dragon_func = cowsay.char_funcs['dragon']
print(dragon_func(message))
```

---

## 3. Użycie w CLI
W terminalu wystarczy dodać flagę -f (lub --cowfile) z nazwą postaci:

```bash
# dragon mówi "Muu PRO"
cowsay -c dragon -t "Muu PRO"

# tux wita się z użytkownikiem
cowsay -c tux -t "Cześć od Tux'a!"
```

---

## 4. Własne ASCII-arty
Jeśli masz swój plik ASCII-art, możesz go wykorzystać tak:

```python
Skopiuj kod
from cowsay import draw

with open('my_custom_art.txt', 'r') as f:
    my_art = f.read()

draw("Własna postać mówi!", my_art)
```
Poniżej znajdziesz przykładowy rysunek jednorogowaca TM do przetestowania w pliku \`my_custom_art.txt\`:

```text
           \
            \\
             \\
              >\/7
          _.-(6'  \
         (=___._/` \
              )  \ |
             /   / |
            /    > /
           j    < _\
       _.-' :      ``.
       \ r=._\        `.
      <`\\_  \         .`-.
       \ r-7  `-. ._  ' .  `\
        \`,      `-.`7  7)   )
         \/         \|  \'  / `-._
                    ||    .'
                     \\  (
                      >\  >
                  ,.-' >.'
                 <.'_.''
                   <'
```
---

## 5. Przydatne funkcje i atrybuty

- **\`cowsay.char_names\`** — lista nazw wszystkich wbudowanych postaci.  
- **\`cowsay.char_funcs\`** — słownik \`nazwa → funkcja\`, generujący dany ASCII-art.  
- **\`cowsay.get_output_string(name, text)\`** — zwraca wynik jako string (do dalszej obróbki).  
- **\`cowsay.draw(text, ascii_art)\`** — pozwala podać dowolny ASCII-art oraz tekst.

---

Na kolejnej stronie ([Dostępne zwierzęta](page3.md)) znajdziesz pełną galerię wszystkich dostępnych zwierzaków.