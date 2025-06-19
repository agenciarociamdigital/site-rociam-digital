# Paleta de Cores - Rociam Digital

## Cores Principais da Marca

### 🔵 Azul Digital
- **HEX:** `#0033FF`
- **RGB:** `rgb(0, 51, 255)`
- **CMYK:** `C: 91 M: 71 Y: 0 K: 0`
- **CSS Variable:** `--azul-digital`
- **Uso:** Cor primária, botões, links

### 🟢 Verde Conectado
- **HEX:** `#00CC99`
- **RGB:** `rgb(0, 204, 153)`
- **CMYK:** `C: 69 M: 0 Y: 54 K: 0`
- **CSS Variable:** `--verde-conectado`
- **Uso:** Destaques, ícones, elementos visuais

### ⚫ Cinza Sólido
- **HEX:** `#333333`
- **RGB:** `rgb(51, 51, 51)`
- **CMYK:** `C: 69 M: 60 Y: 56 K: 66`
- **CSS Variable:** `--cinza-solido`
- **Uso:** Texto, fundos escuros

## Como Usar no CSS

### Cores Novas (Recomendado)
```css
/* Usando as novas variáveis */
color: var(--azul-digital);
background: var(--verde-conectado);
border-color: var(--cinza-solido);
```

### Compatibilidade com Código Existente
```css
/* Variáveis antigas que foram atualizadas */
color: var(--cor-azul);        /* Agora é #0033FF */
color: var(--cor-laranja);     /* Agora é #00CC99 */
color: var(--cor-cinza);       /* Agora é #333333 */
```

### Com Transparência
```css
/* Usando versões RGB para transparência */
background: rgba(var(--azul-digital-rgb), 0.1);
background: rgba(var(--verde-conectado-rgb), 0.2);
background: rgba(var(--cinza-solido-rgb), 0.8);
```

## Variações das Cores

### Azul Digital
- **Principal:** `--azul-digital` (`#0033FF`)
- **Escuro:** `--cor-azul-escuro` (`#001f99`)

### Verde Conectado
- **Principal:** `--verde-conectado` (`#00CC99`)
- **Escuro:** `--cor-laranja-escuro` (`#009973`)

### Cinza Sólido
- **Principal:** `--cinza-solido` (`#333333`)
- **Médio:** `--cor-cinza-2` (`#666666`)
- **Claro:** `--cor-cinza-3` (`#999999`)

## Exemplos de Uso

### Botões
```css
.btn-primary {
  background: var(--azul-digital);
  color: var(--cor-branco);
}

.btn-secondary {
  background: var(--verde-conectado);
  color: var(--cor-branco);
}
```

### Texto
```css
.text-primary {
  color: var(--azul-digital);
}

.text-secondary {
  color: var(--verde-conectado);
}

.text-muted {
  color: var(--cinza-solido);
}
```

### Fundos
```css
.bg-primary {
  background: var(--azul-digital);
}

.bg-accent {
  background: var(--verde-conectado);
}

.bg-dark {
  background: var(--cinza-solido);
}
```
