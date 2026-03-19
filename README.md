# GiaBao Portfolio

Project portfolio ca nhan duoc xay dung bang React + Vite + Tailwind CSS.

## Yeu cau

- Node.js 18+ (khuyen nghi dung Node.js 20 LTS)
- npm 9+

## Cai dat

Chay lenh sau tai thu muc goc project:

```bash
npm install
```

## Chay moi truong dev

```bash
npm run dev
```

Sau khi chay, mo duong dan hien thi trong terminal (thuong la `http://localhost:5173`).

## Build production

```bash
npm run build
```

Sau khi build, file se nam trong thu muc `dist/`.

## Chay ban build de preview

```bash
npm run preview
```

Lenh nay dung de kiem tra ban build production o local.

## Cau truc scripts

Trong `package.json`:

- `npm run dev`: Chay Vite dev server
- `npm run build`: Build production
- `npm run preview`: Preview ban build

## Luu y

- Neu bi loi port, co the doi port bang:

```bash
npm run dev -- --port 3000
```

- Neu gap loi sau khi keo source moi, hay thu:

```bash
rm -rf node_modules package-lock.json
npm install
```
