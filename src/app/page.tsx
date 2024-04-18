import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/4bb9c955-e8fa-41e0-8251-6ac2d46fa877-yknhjq.png",
  "https://utfs.io/f/2b6b9f59-f406-465f-bb4d-3539d2fea9a6-qo17sq.webp",
  "https://utfs.io/f/781d7640-146b-4bdb-a5e0-8a1b6fd697ef-aotvev.webp",
  "https://utfs.io/f/5d835856-3238-4d66-bda6-6543041004b1-cljh7i.jpg",
  "https://utfs.io/f/d197e518-283c-4f57-9dfa-bf7650f33eec-9z3kfv.webp",
  "https://utfs.io/f/95bd7e3b-fb87-4cad-9fad-ac83c84771df-5fhnvz.webp"
];

const mockImages = mockUrls.map((url, index)=>({
  id: index + 1,
  url
}));

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">{
        mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))
      }</div>
    </main>
  );
}
